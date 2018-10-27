import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'
import { Text } from './Commons'

const BioWrapper = styled.div`
  & .author-image {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: -40px;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    padding: 6px;
    z-index: 2;
    box-shadow: #e7eef2 0 0 0 1px;
  }

  & .author-image .img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    border-radius: 100%;
  }

  & .author-profile .author-image {
    position: relative;
    left: auto;
    top: auto;
    width: 120px;
    height: 120px;
    padding: 3px;
    margin: -100px auto 0 auto;
    box-shadow: none;
  }
`

const BioText = styled(Text)`
  & a {
    border-bottom: 1px dotted rgba(162, 162, 162, 0.8);
  }
  & a:hover {
    border-bottom-style: solid;
  }
`

class Bio extends React.Component {
  render() {
    const prefixedImg = withPrefix(siteConfig.authorAvatar)
    return (
      <BioWrapper>
        <figure className="author-image">
          <a
            src={siteConfig.authorAvatar}
            alt={siteConfig.authorName}
            style={{ backgroundImage: `url("${prefixedImg}")` }}
            className="img"
          />
        </figure>
        <section>
          <h4>About the author</h4>
          <BioText
            dangerouslySetInnerHTML={{ __html: siteConfig.authorDescription }}
          />
        </section>
      </BioWrapper>
    )
  }
}

export default Bio
