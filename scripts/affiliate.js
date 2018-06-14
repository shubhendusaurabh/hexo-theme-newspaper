const URL = require('url');
const _ = require('lodash');
const cheerio = require('cheerio');

const AmznDomains = [
  'amazon.com',
  'amazon.co.uk',
  'amazon.ca',
  'amazon.in',
  'amazon.com.au',
  'amazon.com.br',
  'amazon.cn',
  'amazon.fr',
  'amazon.de',
  'amazon.it',
  'amazon.co.jp',
  'amazon.com.mx',
  'amazon.nl',
  'amazon.es',
]

function getDomain(url, subdomain) {
  subdomain = subdomain || false;

  url = url.replace(/(https?:\/\/)?(www.)?/i, '');

  if (!subdomain) {
    url = url.split('.');

    url = url.slice(url.length - 2).join('.');
  }

  if (url.indexOf('/') !== -1) {
    return url.split('/')[0];
  }

  return url;
}

function getAmznTagInConfig(domain) {
  return (hexo.config.amazon[domain]);
}

function isAmazonDomain(hostname) {
  return AmznDomains.find((domain) => domain === hostname);
}
if (hexo.config.amazon && hexo.config.amazon.enable) {
  hexo.extend.filter.register('after_render:html', (source) => {
    const $ = cheerio.load(source, {
      decodeEntities: false
    });
    $('a, area').each((index, element) => {
      let href = $(element).attr('href');
      const url = URL.parse(href);
      //TODO:: filename as param in reachGoal
      if (url.hostname) {
        const domain = getDomain(url.hostname);
        if (isAmazonDomain(domain)) {
          const amznTag = getAmznTagInConfig(domain)
          const type = $(element).prop('nodeName')
          const text = $(element).text() || $(element).attr('title') || 'img'
          text.replace(/\'/g, '')
          if (amznTag && href.indexOf(amznTag) === -1) {
            let taggedHref = '';
            if (!url.query) {
              taggedHref = `${href}?tag=${amznTag}`
            } else {
              taggedHref = `${href}&tag=${amznTag}`
            }
            $(element).attr({
              href: taggedHref,
              target: '_blank',
              rel: 'nofollow noopener',
              onclick: `yaCounter${hexo.config.theme_config.yandexId}.reachGoal('amzn'); return true;`
            });
          }
        }
      }
    });

    return $.html();
  })
}
