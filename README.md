# Welcome to Newpaper

[![Screenshot](http://www.codeblocq.com/img/hexo-theme-thumbnail/hexo-theme-newpaper-screenshot.jpg)](http://www.codeblocq.com/assets/projects/hexo-theme-newpaper/)

[Live Demo Here](http://www.codeblocq.com/assets/projects/hexo-theme-newpaper/)

<!-- more -->

## Features Overview

- Responsive
- Disqus comments
- Google Analytics
- Tags Support
- Responsive Images
- Responsive YouTube and Vimeo videos
- Social Accounts configuration
- Pagination
- Pages
- Categories Support (widget)
- About widget
- Recent posts widget
- Stylus CSS preprocessor
- ejs HTML templates


## External libraries used

- [tachyons](http://tachyons.io/)
- [Font Awesome](http://fontawesome.io/icons/)

## Installation

### Install the theme

Install the theme by using:

```
$ git clone https://github.com/klugjo/hexo-theme-newpaper themes/newpaper
```

Then update your blog's main `_config.yml` to set the theme to `newpaper`:

i.e:

``` yaml
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: newpaper
```

## Post Configuration

Each post supports the standard `title`, `date`, `categories`, `tags`.

### Post Icon

On top of that, you can specify a custom font-Awesome icon in the front matter:

Example:

``` yaml
title: Welcome to newpaper
tags: ["ThisIsATag", "Intro", "Welcome", "newpaper"]
categories: ["Configuration", "Hexo"]
icon: fa-handshake-o
---
```

## Theme Configuration

The theme's global configuration is done in `/themes/hexo-theme-newpaper/_config.yml`.

### Menu

The menu is configured in the theme's `_config.yml`.

``` yaml
# Header
menu:
  Home: /
  Archives: /archives
  About: /about.html
```

The object key is the label and the value is the path.

### Blog's Logo Image Source

The blog's logo is configured in the theme's `_config.yml`.

It should be an image or svg

``` yaml
# Logo
logo_image_source: /assets/newpaper.svg
```

### Footer About Section Text

The About section's text in the footer is configured in the theme's `_config.yml`. HTML allowed.

``` yaml
# Footer about
footer_about: "@Untitled. All right reserved"
```

### Default post title

The default post title (used when no title is specified) is configured in the theme's `_config.yml`.

``` yaml
default_post_title: Untitled
```

### Default post icon

The default post icon (used when no icon is specified) is configured in the theme's `_config.yml`.

``` yaml
default_post_icon: fa-file-text-o
```

### Home page configuration

Likewise, you can configure the home page's title, subtitle and icon in the `_config.yml`

``` yaml
# Index Page
index_banner_text: Welcome to newpaper
index_banner_text_secondary: Create Websites. Make Magic.
index_font_awesome_icon_css: fa fa-magic
```

### Archive Date Format

You can change the date format for the archive page if you so desire

``` yaml
# Archive Date Format
archive_date_format: MMM YYYY
```

### Disqus Comments

The disqus shortname is specified in the theme's `_config.yml`.

``` yaml
# Comments.
comments:
  # Disqus comments
  disqus_shortname: yournametest
```

### Google Analytics

The Google Analytics Tracking ID is configured in the theme's `_config.yml`.

``` yaml
# Google Analytics Tracking ID
google_analytics:
```

### Social Account

Setup the links to your social pages in the theme's `_config.yml` as an array of objects. Links are in the footer.

Example:

``` yaml
# Social Accounts
social_platforms:
  - url: https://twitter.com/?lang=en
    fa_icon: fa-twitter
  - url: https://www.facebook.com/
    fa_icon: fa-facebook
  - url: https://dribbble.com/
    fa_icon: fa-dribbble 
  - url: https://github.com/klugjo/hexo-theme-newpaper
    fa_icon: fa-github
```

## Creator

This theme was created by Jonathan Klughertz, check out my [github](https://github.com/klugjo) and [blog](http://www.codeblocq.com/).

## Bugs

If you have a question, feature request or a bug you need me to fix, please [click here](https://github.com/klugjo/hexo-theme-newpaper/issues/new) to file an issue.

## License

MIT

Enjoy :)

## TODO

- optional cover
- full width ToC on mobile
- sidebar content on mobile
- ad rotation & CRO

## Changelog

- 16-07-2018 Sidebar (theme.sidebar, theme.showBio, theme.newsletter)
- 16-07-2018 Leaderboard & ShowBanner (theme.leaderboard & theme.showBanner)
- 29-07-2018 changed social platforms array to obj
- 02-08-2018 (marketing, carousel, showSubtitle, homePageText)
- 16-08-2018 adsense
- 01-09-2018 ads to array
- 17-08-2018 (theme.adsense.pageAds) & page ads slots
- 22-10-2018 theme.affiliateText
