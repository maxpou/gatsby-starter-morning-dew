import React from 'react'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'
import { colors } from '../tokens'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

const ContentBody = styled.div`
  line-height: 1.6;

  & > h2 {
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
    box-shadow: 0 2px 0 0 ${colors.links};

    &:hover {
      filter: brightness(150%);
      box-shadow: none;
    }

    &.anchor,
    &.gatsby-resp-image-link {
      box-shadow: none;
    }
  }

  & > blockquote {
    box-sizing: border-box;
    background-color: #f7f7f7;
    border-left: 5px solid rgb(244, 213, 36);
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
    margin: 1.5em 0em 1.5em 0;
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight-code-line {
    background-color: ${colors.highlight_code_linebg};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${colors.highlight_code_bg};
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
    background: ${colors.highlight_code_oneline};
    color: #222222cc;
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
    word-wrap: break-word;
  }

  & code {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  & table {
    margin-top: 1em;
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;

    & th,
    & td {
      padding: 0.5em;
      background: #f7f7f7;
      border-bottom: 2px solid ${colors.white};
    }
  }
`

class Content extends React.Component {
  render() {
    const { content, date, tags } = this.props

    return (
      <section>
        {(tags || date) && <ContentHeader date={date} tags={tags} />}
        <ContentBody>
          <MDXRenderer>{content}</MDXRenderer>
        </ContentBody>
      </section>
    )
  }
}

export default Content
