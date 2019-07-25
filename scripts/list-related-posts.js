// scripts/list-related-posts.js
'use strict';
const _ = require('lodash');

function listRelatedPosts(options) {
  options = _.merge({
    maxCount: 5,
    orderBy: 'date'
  }, options || {});

  let tags = new Set();
  let posts = this.site.posts
    .toArray()
    .filter(p => p.slug !== this.page.slug); // filter current post

  // TODO:: Time complexity n^n, random/popular items rather otherwise older posts not selected
  // fetch tags of current post
  this.page.tags.toArray().forEach(t => tags.add(t.name.toLowerCase()));

  // rate tags
  posts.forEach(post => {
    post.__relatedWeight = 0;
    post.tags.toArray().forEach(postTag => {
      if(tags.has(postTag.name.toLowerCase())) post.__relatedWeight++;
    });
  });

  // order the result
  posts = _.orderBy(posts, ['__relatedWeight', options.orderBy], ['desc', 'desc']);

  // respect maxCount
  posts = _.shuffle(posts.slice(0, options.maxCount));

  return posts;
}

hexo.extend.helper.register('list_related_posts', listRelatedPosts);
