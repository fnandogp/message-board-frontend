import React from 'react';
import { Container, Author, Content } from './styles';
import { Message } from '../../../store/ducks/messages/types';

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
