import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #d0d0d0;
  padding: 0.5rem 1rem;
  border: 2px dotted #a0a0a0;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.p`
  margin: 0;
`;

export const Author = styled.p`
  margin: 0;
  text-align: right;
  font-size: 0.8rem;
  &:before {
    content: '-';
  }
`;
