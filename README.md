<h1 align="center">gatsby-starter-morning-dew</h1>

<p align="center">
  🚀 A gatsby-starter-morning-dew is a Gatsby starter to build lightning-fast websites!
</p>

<p align="center">
  <strong>
    <a href="https://maxpou.github.io/gatsby-starter-morning-dew/">Demo</a>
  </strong>
</p>

<p align="center">
  <a href="https://travis-ci.com/maxpou/gatsby-starter-morning-dew">
    <img
      alt="Build Status"
      src="https://travis-ci.com/maxpou/gatsby-starter-morning-dew.svg?branch=master">
  </a>
	<a href="https://app.netlify.com/sites/gatsby-starter-morning-dew/deploys">
    <img
      alt="Netlify Status"
      src="https://api.netlify.com/api/v1/badges/d68027bd-19b5-44fd-a2a3-d1f05fc8201e/deploy-status">
  </a>
	<a href="https://codeclimate.com/github/maxpou/gatsby-starter-morning-dew/maintainability">
    <img
      alt="Maintainability"
      src="https://api.codeclimate.com/v1/badges/e09f1ac1a5cdb2987a6f/maintainability">
  </a>
	<a href="https://github.com/semantic-release/semantic-release">
    <img
      alt="semantic-release"
      src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://npm-stat.com/charts.html?package=gatsby-starter-morning-dew&from=2018-02-12">
    <img
      alt="Total downloads on npm"
      src="https://img.shields.io/npm/dy/gatsby-starter-morning-dew.svg?colorA=333a41&colorB=007dc7&maxAge=3600&label=Downloads">
  <a>
</p>

<p align="center">
  <img src="https://i.imgur.com/FXkc88D.png" alt="screenshot">
</p>

## Features

- [:purple_heart: Gatsby 3](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized
- :love_letter: Write posts/pages in Markdown or [MDX](https://mdxjs.com/)
  - :art: Code syntax highlight
  - :books: Multilang support/i18n (blog post)
- :iphone: Mobile Friendly (Responsive design)
- :last_quarter_moon_with_face: Dark mode
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support 
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :nail_care: css-in-js (with [styled-components v5](https://www.styled-components.com))
- :bookmark: Groups post with tags
- :bird: post preview image generation (Twitter, Facebook...)
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support


![Lighthouse scores](https://i.imgur.com/Y6bFKFj.png)

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
🐞This is due to a theme limitations.  
😬 Don't worry, this picture will not appear on your website!

Need more details? Checkout:
* [maxpou.fr source](https://github.com/maxpou/maxpou.fr): Maxence Poutord's personnal blog;
* [gatsby-groot source](https://github.com/maxpou/gatsby-groot/): a minimalist blog that use this template!


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
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'gatsby-starter-morning-dew',
  headerLinksIcon: 'baymax.png', // file in content/images (leave empty to disable: '')
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

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxpou/gatsby-starter-morning-dew)