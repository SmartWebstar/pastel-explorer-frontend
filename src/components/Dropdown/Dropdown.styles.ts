import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;

  .MuiSelect-icon {
    top: 46%;
    right: 4px;
    transform: translateY(-50%);
  }

  .MuiSelect-select {
    width: 150px;
    padding-right: 28px;
    padding-left: 10px;
    border: 1px solid ${props => props.theme.dropdown.border};
    color: ${props => props.theme.dropdown.color};
    border-radius: 4px;

    &:focus {
      background: transparent;
    }
  }

  .MuiInput-underline {
    &:after,
    &:before {
      display: none;
    }

    &:hover {
      &:not(.Mui-disabled) {
        &:before {
          border-bottom-width: 1px;
        }
      }
    }
  }

  svg {
    color: ${props => props.theme.dropdown.color};
  }
`;

export const Label = styled.div`
  margin-right: 10px;
  color: ${props => props.theme.dropdown.color};
  font-weight: 500;
`;
