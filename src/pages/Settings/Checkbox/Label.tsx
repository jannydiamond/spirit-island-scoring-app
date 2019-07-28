import styled from 'styled-components';

const Label = styled.label`
  padding-left: 28px;
  line-height: 24px;
  cursor: pointer;

  &::before,
  &::after {
    font-size: 24px;
    font-family: "Material Icons";
    position: absolute;
    top: 0;
    left: 0;
    color: #0a3d62;
  }

  &::before {
    content: "check_box_outline_blank";
  }

  &::after {
    content: "check_box";
    opacity: 0;
    transition: opacity .2s ease-in-out;
  }

  .is-checked + & {
    &::after {
      opacity: 1;
    }
  }
`

export default Label;