import styled from 'styled-components/macro'

const SectionHeadline = styled('h3')`
  border-bottom: ${props => props.theme.components.sectionHeadline.border};
  border-top: ${props => props.theme.components.sectionHeadline.border};
  padding: 18px 16px 16px;
  margin: 0;
  font-size: ${props => props.theme.components.sectionHeadline.fontSize};
  text-transform: uppercase;
`

export default SectionHeadline
