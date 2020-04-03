import React from 'react';
import { Message } from '../../types';
import MessageItem from './MessageItem';
import { Container } from './styles';

type MessageListProps = {
  messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
  console.log(messages);

  return (
    <Container>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Container>
  );
}
