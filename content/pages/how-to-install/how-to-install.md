---
title: How to install
slug: how-to-install
cover: ./cover.png
disqus: true
type: page
---

👋 Welcome on **gatsby-starter-morning-dew** starter template!

## Installation

* with Gatsby-cli: 
  
```bash
npm install --global gatsby-cli`
gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew
```

* without Gatsby-cli

```bash
git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
cd my-site
yarn install
```

## Customisation

In `data/siteConfig.js`, you will find the following

```js
module.exports = {
  siteTitle: 'maxpou.fr',
  siteDescription: "👋 Hey I'm Max",
  authorName: 'Maxence Poutord',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `
  Hey I'm Maxence Poutord, a french passionate software engineer, who's constantly looking for new challenges to achieve.
  Also, sharing my knowledge is crucial for me. That's why, I'm a frequent public speaker, I mentor people and I try to keep this blog alive.
  After 2 years of being an expatriate in Dublin, I recently switched to digital nomad (Europe).
  When I'm not at a computer, I'm usually exploring the city or cooking a fancy pizza.
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  pathPrefix: '/gatsby-starter-morning-dew',
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
      'Follow me',
      {
        label: 'GitHub',
        url: 'https://github.com/maxpou',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_maxpou',
        iconClassName: 'fa fa-twitter',
      },
      {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/maxpou/',
        iconClassName: 'fa fa-linkedin',
      },
    ],
  ],
}
```

## Markdown headers

```yaml
---
title: "My blog post title"
# Slug (www.site.com/my-blog-post)
slug: my-blog-post

# Date of publication
date: 2018-10-30

# Language (FR or EN)
language: en

# Relative path to cover image
cover: ./cover-balloons.jpg

# use generated Twitter/etc. cards
imageTw: ./gatsby-starter-morning-dew-v1-1-tw.png
imageFb: ./gatsby-starter-morning-dew-v1-1-fb.png
# ... or if you want to skip the generation
generate-card: false

# Tags
tags:
  - gatsby
---
```