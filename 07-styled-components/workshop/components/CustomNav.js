import styled from 'styled-components'
import { Nav } from '../../../public/external/Nav'
import theme from '../theme'

export const CustomNav = styled(Nav)`
  :global(.nav) {
    .btn {
      right: 20px;
      left: auto;
      border-color: ${theme.black};
      &::before {
        border-color: ${theme.black};
      }
      &:hover {
        border-color: ${theme.primaryColorLight};
      }
      &:hover::before {
        border-color: ${theme.primaryColorLight};
      }
    }
    .menu {
      background-color: ${theme.grayLighter};
      a {
        color: ${theme.black};
        &:hover {
          color: ${theme.primaryColorLight};
        }
      }
      li {
        border-color: ${theme.grayLighter};
      }
    }
  }
`
