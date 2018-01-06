/**
* button Helper
* @description Get the button url from a post
* @example
*     <%- button(post) %>
*/
hexo.extend.tag.register('button', function (args, content) {
  let link = args.find((arg) => arg.indexOf('link') > -1)
  let href = 'https://www.amazon.com';
  if (link.length) {
    href = link.split('=')[1]
  }
  return `<div class="tc"><a class="f4 grow no-underline ba ph3 pv2 mb2 dib amzn-btn" href="${href}" target="_blank">${content}</a></div>`
}, {ends: true});
