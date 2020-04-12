import React from 'react';
import { Nav, StyledNavLink } from './styles';

export default function AppMenu() {
  return (
    <Nav>
      <StyledNavLink to="/">Board</StyledNavLink>
      <StyledNavLink to="/create">Post new message</StyledNavLink>
    </Nav>
  );
}
