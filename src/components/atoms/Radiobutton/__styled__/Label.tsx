import styled from 'styled-components/macro'

const Label = styled('label')`
  padding-left: ${props => props.theme.components.radiobutton.label.paddingLeft};
  line-height: ${props => props.theme.components.radiobutton.label.lineHeight};
  cursor: pointer;

  &::before,
  &::after {
    font-size: ${props => props.theme.components.radiobutton.icon.fontSize};
    font-family: "Material Icons";
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => props.theme.components.radiobutton.icon.color};
  }

  &::before {
    content: ${props => props.theme.components.radiobutton.icon.unchecked};
  }

  &::after {
    content: ${props => props.theme.components.radiobutton.icon.checked};
    opacity: 0;
    transition: opacity .2s ease-in-out;
  }

  input:checked + & {
    &::after {
      opacity: 1;
    }
  }
`

export default Label
