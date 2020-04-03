import React from 'react';
import { Message } from '../../../types';
import { Container, Author, Content } from './styles';

type MessageProps = {
  message: Message;
};

export default function MessageItem({ message }: MessageProps): JSX.Element {
  return (
    <Container>
      <Content>{message.content}</Content>
      <Author>{message.author}</Author>
    </Container>
  );
}
