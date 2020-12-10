import React from 'react'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

const ContentBody = styled.div`
  line-height: 1.6;

  & > h2 {
    color: var(--color-h2);
    padding-top: 3rem;
    margin-top: 3rem;
    border-top: 1px solid #ececec;
  }

  & > h3 {
    padding-top: 3rem;
  }

  & > p {
    margin: 1em 0 0 0;
  }

  & a {
    fill: var(--color-text);
    box-shadow: 0 2px 0 0 var(--color-secondary);

    &:hover {
      filter: brightness(150%);
      box-shadow: none;
    }

    &.anchor,
    &.gatsby-resp-image-link {
      box-shadow: none;
    }
  }

  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    visibility: hidden;
    margin-left: -16px;
  }

  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg,
  h1 .anchor:focus svg,
  h2 .anchor:focus svg,
  h3 .anchor:focus svg,
  h4 .anchor:focus svg,
  h5 .anchor:focus svg,
  h6 .anchor:focus svg {
    visibility: visible;
  }

  & > blockquote {
    box-sizing: border-box;
    background-color: var(--color-secondaryContentBackground);
    border-left: 5px solid var(--color-secondary);
    margin: 30px 0px;
    padding: 5px 20px;
    border-radius: 0 8px 8px 0;
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: italic;
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em -1.5em;

    @media (max-width: 500px) {
      border-radius: 0;
      margin-left: -25px;
      margin-right: -25px;
    }
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  & .gatsby-highlight-code-line {
    background-color: var(--color-darkBlue);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid var(--color-yellow);
  }

  & h1 > code.language-text,
  & h2 > code.language-text,
  & h3 > code.language-text,
  & h4 > code.language-text,
  & h5 > code.language-text,
  & h6 > code.language-text,
  & a > code.language-text,
  & p > code.language-text,
  & li > code.language-text,
  & em > code.language-text,
  & strong > code.language-text {
    background: var(--color-beige);
    color: #222222cc;
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
    word-wrap: break-word;
  }

  & code {
    word-wrap: break-word;
  }

  & table {
    margin-top: 1em;
    margin-bottom: 1em;
    border-collapse: collapse;
    overflow: hidden;

    & th,
    & td {
      padding: 0.5em;
      background-color: var(--color-secondaryContentBackground);
    }
    & tr {
      border-bottom: 2px solid var(--color-white);
    }
    & tbody tr:last-child {
      border-bottom: none;
    }
  }
`

class Content extends React.Component {
  render() {
    const { content, date, tags, translations } = this.props

    return (
      <section>
        {(tags || date || translations) && (
          <ContentHeader date={date} tags={tags} translations={translations} />
        )}

        <ContentBody>
          <MDXRenderer>{content}</MDXRenderer>
        </ContentBody>
      </section>
    )
  }
}

export default Content
