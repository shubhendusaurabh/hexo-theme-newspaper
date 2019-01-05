const minimatch = require('minimatch')
const url = require('url')
const cheerio = require('cheerio');

if (false === hexo.config.hasOwnProperty('cdn') || true === hexo.config.cdn) {
    return;
}

// if (process.argv.indexOf('server') > -1 || process.argv.indexOf('s') > -1) {
//     return;
// }

hexo.extend.filter.register('before_generate', function() {
    hexo.extend.filter.register('after_render:html', cdnify)
});

function isLocalPath(filePath) {
    return typeof filePath === 'string' &&
        filePath.length &&
        filePath.indexOf('//') === -1 &&
        filePath.indexOf('data:') !== 0;
}

var tagAttrs = {
    'img[data-src]': 'data-src',
    'img[src]': 'src',
    'link[rel="apple-touch-icon"]': 'href',
    'link[rel="icon"]': 'href',
    'link[rel="shortcut icon"]': 'href',
    // 'link[rel="stylesheet"]': 'href',
    // 'script[src]': 'src',
    // 'source[src]': 'src',
    // 'video[poster]': 'poster'
};

let cdnify = function(str, data) {
    var hexo = this,
        options = hexo.config.cdn;

    //return if disable
    if (false === options.enable) return;

    var path = data.path;
    var exclude = options.exclude;
    if (exclude && !Array.isArray(exclude)) exclude = [exclude];
    // return the exclude path
    if (path && exclude && exclude.length) {
        for (var i = 0, len = exclude.length; i < len; i++) {
            if (minimatch(path, exclude[i])) return str;
        }
    }

    // var log = hexo.log || console.log;

    const base = (process.argv.indexOf('server') > -1 || process.argv.indexOf('s') > -1) ? options.local : options.base;
    const rewriteURL = (origUrl) => {
        return isLocalPath(origUrl) ? url.resolve(base, origUrl) : origUrl;
    }
    
    const $ = cheerio.load(str, {
        decodeEntities: false
      });

    if (options.tags && typeof options.tags === 'object') {
        tagAttrs = Object.assign(tagAttrs, options.tags);
    }

    for (var search in tagAttrs) {
        if (tagAttrs.hasOwnProperty(search)) {
            var attr = tagAttrs[search];
            $(search).each((index, element) => {
                $(element).attr(attr, rewriteURL($(element).attr(attr)))
            })
        }
    }

    // log.log('CDNify update:' + path);
    return $.html();
};