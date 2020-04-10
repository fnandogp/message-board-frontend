import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  background: #ffe7e7;
  margin-bottom: 1rem;
  border: 1px solid #ffa2a2;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 0.75rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  &:before {
    content: '- ';
  }
`;
