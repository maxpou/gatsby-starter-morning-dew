import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

const TranslationContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  background-color: var(--color-lightYellow);
  border: 1px solid var(--color-grey700);
`

const InfoText = styled.span`
  color: var(--color-grey900);
`

const TranslationLink = styled.a`
  color: var(--color-grey900);
  text-decoration: underline;
`

class Translations extends React.Component {
  render() {
    const { translations } = this.props

    return (
      <TranslationContainer>
        <InfoText>This article also exists in: </InfoText>
        {translations.map((translation, i) => {
          return (
            <Fragment key={`translation-${i}`}>
              <TranslationLink href={withPrefix(translation.link)}>
                {translation.language}
              </TranslationLink>
              {i < translations.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </TranslationContainer>
    )
  }
}
export default Translations
