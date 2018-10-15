---
title: "gatsby-starter-morning-dew"
slug: gatsby-starter-morning-dew
cover: ./gatsby-cover.png
date: 2018-09-30
language: en
tags:
  - gatsby
  - gatsby-starter
---


## Features

- [💜 Gatsby v2](https://www.gatsbyjs.org/) / React 16
- 🔍 SEO optimized
- 💌 Write posts/pages in Markdown
- 🎨 Code syntax highlight
- 📚 Multilang support
- 📱 Responsive design
- ✨ PWA ready
- ✈️ Offline support
- 📃 Manifest support
- 🔧 Fully configurable (see data/siteConfig.js)
- 👷 Travis CI support
- 💬 Disqus support
- 💎 Developer tools: eslint and prettier


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=98&pwa=81&a11y=92&bp=100&seo=100)

## Commands

```bash
# working locally
yarn dev

# generate build
yarn build

# format code
yarn format

# lint code
yarn lint
```

**⚠️ Add `--prefix-paths` if you are using path prefix!**


## Configure

```js
module.exports = {
  siteTitle: 'gatsby-starter-morning-dew',
  siteDescription: "👋 Hey I'm a Gatsby starter!",
  authorName: 'Maxence Poutord',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  Hey I'm Maxence Poutord, a french passionate software engineer, who's constantly looking for new challenges to achieve.
  Also, sharing my knowledge is crucial for me. That's why, I'm a frequent public speaker, I mentor people and I try to keep this blog alive.
  After 2 years of being an expatriate in Dublin, I recently switched to digital nomad (Europe).
  When I'm not at a computer, I'm usually exploring the city or cooking a fancy pizza.
  `,
  siteUrl: 'https://maxpou.github.io/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
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
    url: 'https://github.com'
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
        label: 'GitHub',
        url: 'https://github.com/maxpou',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        iconClassName: 'fa fa-github',
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