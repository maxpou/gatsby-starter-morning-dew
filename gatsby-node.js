const {resolve} = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPostTemplate = resolve('./src/templates/blog-post.js')
  const BlogPostShareImage = resolve('./src/templates/blog-post-share-image.js')
  const PageTemplate = resolve('./src/templates/page.js')
  const PostsBytagTemplate = resolve('./src/templates/tags.js')

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              frontmatter {
                title
                slug
                type
                tags
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  const markdownFiles = allMarkdown.data.allMarkdownRemark.edges;

  // generate blog posts
  markdownFiles
    .filter(item => item.node.frontmatter.type !== 'page')
    .forEach((post, index, posts) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.frontmatter.slug,
        component: BlogPostTemplate,
        context: {
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      })

      // generate post share images (dev only)
      if (process.env.gatsby_executing_command.includes('develop')) {
        createPage({
          path: `${post.node.frontmatter.slug}/image_tw`,
          component: BlogPostShareImage,
          context: {
            slug: post.node.frontmatter.slug,
            width: 440,
            height: 220,
            type: 'twitter',
          }
        })
        createPage({
          path: `${post.node.frontmatter.slug}/image_fb`,
          component: BlogPostShareImage,
          context: {
            slug: post.node.frontmatter.slug,
            width: 1200,
            height: 630,
            type: 'facebook',
          }
        })
      }

    })

  // generate pages
  markdownFiles
    .filter(item => item.node.frontmatter.type === 'page')
    .forEach(page => {
      createPage({
        path: page.node.frontmatter.slug,
        component: PageTemplate,
        context: {
          slug: page.node.frontmatter.slug,
        },
      })
    })

  // generate tags
  markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce((acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])], [])
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsBytagTemplate,
        context: {
          tag: uniqTag
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
