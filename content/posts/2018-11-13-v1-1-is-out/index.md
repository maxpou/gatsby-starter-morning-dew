---
title: "What's new in gatsby-starter-morning-dew v1.1?"
slug: gatsby-starter-morning-dew-v1-1
date: 2018-11-13
language: en
cover: ./cover-balloons.jpg
imageTw: ./gatsby-starter-morning-dew-v1-1-tw.png
imageFb: ./gatsby-starter-morning-dew-v1-1-fb.png
tags:
  - gatsby
---

**TLDR;** Metatags generation, CSS-in-JS ([styled-components](https://www.styled-components.com)) and pagination are now in gatsby-starter-morning-dew 🎉

## 🏷 Social media card generator

It's now posible to generate preview images for social networks ([Twitter](https://cards-dev.twitter.com/validator) and Facebook).

![twitter cards](./twitter-cards.png)

This great idea come from a [conversation](https://twitter.com/_maxpou/status/1054106299213012992) I had with Luciano Mammino (aka [@Loige](https://twitter.com/loige)). I basically took 85% of his code. Thanks Luciano 😊


**How to do it?**

1. In a terminal, run `npm run dev`.
2. In a second terminal, run: `npm run generatePostPreviewImages`
3. In the post's header, add the generated images:
  ```yaml
  title: My blog post
  # ...
  imageTw: ./gatsby-starter-morning-dew-v1-1-tw.png
  imageFb: ./gatsby-starter-morning-dew-v1-1-fb.png
  ```

Gatsby will first create extra url suffixed by `/image_tw` and `/image_fb` (i.e. *http://localhost:8000/gatsby-starter-morning-dew-v1-1/image_tw*). Then, Pupetter will take a snapshot and add it to your post folder.

**Quick tip:** If you want to recreate this pictures

```bash
# delete Facebook images
find ./content -name "*-fb.png" -type f -delete
# delete Twitter images
find ./content -name "*-tw.png" -type f -delete
```

If you don't to skip the file generation for some posts, add `generate-card: false` to the post's header.

```yaml
---
title: My blog post
# ...
generate-card: false
---
```

## 💅 CSS-in-JS (styled-components)

I added a library called [styled-components](https://www.styled-components.com) which allow me to create components like this:

```jsx
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


<Title>
  Hello World!
</Title>
```

Main motivations were:

* **Avoid name collision**. During the development I face a problem where component's CSS had collision with other components. Now this problem is fixed. Styled component assing uniq class identifer (example `class="Article__ArticleWrapper-dSJTpe loVbTg"`).
* **Automatic critical CSS**.
* **Cleaner file architecture**. I previously had a redundant file organisation. For 1 component, I end up with 1 folder and 2 files with the same name (but a different extension).
  ```bash
  # Before
  ├── components/
  │   ├── Article
  │   │   ├── Article.css
  │   │   └── Article.js
  │   ├── Content
  │   │   ├── Content.css
  │   │   └── Content.js
  │   └── ...
  
  # Now
  ├── components/
  │   ├── Article.js
  │   ├── Content.js
  ```

Biggest cons: files are now larger!

## Pagination

![pagination](./pagination.png)

Pagination is now available. By default, there's 6 posts per page. You can change this value in `siteConfig.js`:

```js
module.exports = {
  // ...
  postsPerPage: 6,
  // ...
}
```

## Other

* Few CSS improvements. Example:
  <code style="background: #2d2d2d; border-radius: .3em; padding: .1em; color: #ccc;">previous code tag</code> ... `new code tag`
* Generate WebP images (withWebp option in [gatsby-remark-images](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images#options))
* Disqus support on pages (previously only supported on blog posts)