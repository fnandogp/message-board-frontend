import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: gray;
  font-size: 0.75rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
