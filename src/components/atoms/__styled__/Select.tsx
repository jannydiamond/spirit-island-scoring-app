import styled from 'styled-components/macro'
import ReactSelect from 'react-select'

const Select = styled(ReactSelect)`
  .react-select {
    &__control {
      border: ${props => props.theme.components.select.border};
      height: ${props => props.theme.components.select.height};
      border-radius: ${props => props.theme.components.select.borderRadius};
      transition: border-color 0.2s ease-in-out;
      outline: 0;
      width: 100%;
      cursor: pointer;
      box-shadow: none;

      &:hover {
        border-color: ${props => props.theme.components.select.hover.borderColor};
      }

      &--is-focused {
        border: 2px solid ${props => props.theme.components.select.focus.borderColor};

        &:hover {
          border-color: ${props => props.theme.components.select.focus.borderColor};
        }
      }
    }

    &__value-container {
      padding: 0 10px;
    }

    &__menu {
      box-shadow: ${props => props.theme.components.select.menu.boxShadow};
    }

    &__option {
      cursor: pointer;

      &--is-focused,
      &:hover {
        background-color: ${props => props.theme.components.select.option.background.hover};
      }

      &--is-selected {
        background-color: ${props => props.theme.components.select.option.background.selected};

        &:hover {
          background-color: ${props => props.theme.components.select.option.background.selected};
        }
      }
    }
  }
  

`

export default Select
