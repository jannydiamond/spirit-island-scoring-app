import styled from 'styled-components/macro'

const Input = styled('input')`
    position: absolute;
    left: -9999px;
    top: 0;
    width: ${props => props.theme.components.radiobutton.size};
    height: ${props => props.theme.components.radiobutton.size};
    margin: 2px;
    padding: 0;
    visibility: hidden;
`

export default Input
