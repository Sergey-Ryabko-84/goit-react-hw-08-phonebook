import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
    display: flex;
    gap: 36px;
    align-items: center;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: #c1c9d9;

  :hover,
  :focus {
    text-decoration: underline;
    /* text-decoration: solid; */
    /* font-weight: 700; */
    color: #c1c9d9;
  }

  &.active {
    text-decoration: none;
    color: #8da6d9;
  }
`;