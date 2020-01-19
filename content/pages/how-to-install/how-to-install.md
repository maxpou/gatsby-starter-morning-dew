---
title: How to install
slug: how-to-install
cover: ./cover.png
disqus: true
---

👋 Welcome on **gatsby-starter-morning-dew** starter template and theme!

## Installation (starter)

* with Gatsby-cli: 
  
```bash
npm install --global gatsby-cli
gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew
```

* without Gatsby-cli

```bash
git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
cd my-site
npm install
```

Then run `npm run develop` to try it locally.

## Installation (theme)

You can also use `gatsby-starter-morning-dew` as a [Gatsby theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/)!

1. Add the theme
  ```bash
  npm install gatsby-starter-morning-dew
  ```
2. In your `gatsby-config.js`, add:
  ```js
  const config = require('./data/siteConfig')
  // ...
  plugins: [
      {
        resolve: "gatsby-starter-morning-dew",
        options: {},
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: config.siteTitle,
          short_name: config.siteTitle,
          start_url: config.pathPrefix,
          background_color: config.background_color,
          theme_color: config.theme_color,
          display: config.display,
          icon: 'content/images/company-icon.png', // path to your image
        },
      },
  ],
  ```
3. Add an image called `baymax.png` in `content/images/baymax.png`.  
🐞This is due to a bug.  
😬 Don't worry, this picture will not appear on your website!

Need more details? Checkout:
* [maxpou.fr source](https://github.com/maxpou/maxpou.fr): Maxence Poutord's personnal blog;
* [gatsby-groot source](https://github.com/maxpou/gatsby-groot/): a minimalist blog that use this template!

## Customisation

In `data/siteConfig.js`, you should have the following file structure:

```js
module.exports = {
  siteTitle: 'gatsby-starter-morning-dew',
  siteDescription: 'A Gatsby theme/starter to build lightning-fast websites',
  authorName: 'Maxence Poutord',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
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
  siteCover: 'cover-baymax.jpeg', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'gatsby-starter-morning-dew',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
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
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },
      ],
    },
  ],
}
```


## FAQ (Theme): How do I ...

* Change a specific components?  
👉 See [Component Shadowing (on gatsbyjs.org)](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/).
  
* Override the [default colors](https://github.com/maxpou/gatsby-starter-morning-dew/blob/master/src/tokens/colors.js)?  
👉[Check how gatsby-groot extended default colors](https://github.com/maxpou/gatsby-groot/blob/master/src/gatsby-starter-morning-dew/theme.js).
  
* More questions? Find a bug?  
👉Feel free to [open an issue](https://github.com/maxpou/gatsby-starter-morning-dew/issues/new)!  
👉You can also [ping me on Twitter](https://twitter.com/_maxpou).  


## Markdown headers (for posts)

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
imageShare: ./gatsby-starter-morning-dew-v1-1-share.png
# ... or if you want to skip the generation
generate-card: false

# Tags
tags:
  - Gatsby
  - JavaScript
---
```
