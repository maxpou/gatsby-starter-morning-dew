---
title: "About gatsby-starter-morning-dew"
slug: gatsby-starter-morning-dew
cover: ./gatsby-cover.png
date: 2018-09-30
language: en
disqus: true
type: page
---

[![Build Status](https://travis-ci.org/maxpou/gatsby-starter-morning-dew.svg?branch=master)](https://travis-ci.org/maxpou/gatsby-starter-morning-dew) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Maintainability](https://api.codeclimate.com/v1/badges/e09f1ac1a5cdb2987a6f/maintainability)](https://codeclimate.com/github/maxpou/gatsby-starter-morning-dew/maintainability)


## gatsby-starter-morning-dew

Gatsby starter for creating a new blog!

[Demo website.](https://maxpou.github.io/gatsby-starter-morning-dew/)

![screenshot](https://i.imgur.com/aRTBbKs.jpg)


## Features

- [💜 Gatsby v2](https://www.gatsbyjs.org/) / React 16
- 🔍 SEO optimized
- 💌 Write posts/pages in Markdown
  - 🎨 Code syntax highlight
  - 📚 Multilang support (blog post)
- 📱 Mobile Friendly (Responsive design)
- ✨ PWA ready
  - ✈️ Offline support
  - 📃 Manifest support 
- [🔧 Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- 💬 Disqus support
- 💅 css-in-js (with [styled-components](https://www.styled-components.com))
- 🧙‍♀️ Use it as a starter or [as a theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/)
- 🔖 Groups post with tags
- 📊 Google Analytics support
- 🐦 post preview image generation (Twitter, Facebook)
- 💎 Developer tools (eslint, prettier)
- 👷 Travis CI support


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=97&pwa=100&a11y=92&bp=100&seo=100)


## Commands

```sh
# working locally
npm run dev

# generate build
npm run build

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

**:warning: Add `--prefix-paths` if you are using path prefix!**

## Configure

```js
module.exports = {
  siteTitle: 'gatsby-starter-morning-dew',
  siteDescription: "👋 Hey I'm a Gatsby starter!",
  authorName: 'Maxence Poutord',
  twitterUsername: '_maxpou',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.
  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerLinks: [
    {
      label: '🏡',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/gatsby-starter-morning-dew',
      },
      {
        label: 'Installation',
        url: '/how-to-install',
      },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'https://www.maxpou.fr',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_maxpou',
        iconClassName: 'fa fa-twitter',
      },
    ],
  ],
}
```