import styled from 'styled-components/macro'

const Headline = styled('h2')`
  font-size: ${props => props.theme.pages.scoringDetail.header.headline.fontSize};
  margin: 24px 0 0;
  font-weight: ${props => props.theme.pages.scoringDetail.header.headline.fontWeight};
`

export default Headline
