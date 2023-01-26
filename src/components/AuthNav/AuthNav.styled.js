import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavWrapper = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: #c1c9d9;

  :hover,
  :focus {
    text-decoration: underline;
    color: #c1c9d9;
  }

  &.active {
    text-decoration: none;
    font-weight: 700;
    color: #2c73a6;
  }
`;
