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


## Installation


* with Gatsby-cli: `gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew`

* without Gatsby-cli

  ```bash
  git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
  cd my-site
  yarn install
  ```

## Features

- [💜 Gatsby v2](https://www.gatsbyjs.org/) / React 16
- 🔍 SEO optimized (robot.txt)
- 💌 Write posts/pages in Markdown
  - 🎨 Code syntax highlight
  - 📚 Multilang support (blog post only)
- 📱 Responsive design
- ✨ PWA ready
  - ✈️ Offline support
  - 📃 Manifest support 
- [🔧 Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- 💬 Disqus support
- 💅 css-in-js (with [styled-components](https://www.styled-components.com))
- 🔖 Groups post with tags
- 📊 Google Analytics support
- 🐦 post preview image generation (Twitter, Facebook)
- 💎 Developer tools (eslint, prettier)
- 👷 Travis CI support


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=97&pwa=100&a11y=92&bp=100&seo=100)


## Commands

```sh
# working locally
yarn dev

# generate build
yarn build

# format code
yarn format

# lint code
yarn lint

# Generate generate post preview images (yarn dev need to run before)
yarn generatePostPreviewImages
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
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  disqusShortname: 'maxpou',
  postsPerPage: 6,
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
      url: '/about',
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
        url: '/about',
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