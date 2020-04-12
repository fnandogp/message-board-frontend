import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  margin: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  line-height: 1;
`;
