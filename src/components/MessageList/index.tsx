import React from 'react';
import MessageItem from './MessageItem';
import { Container } from './styles';
import { Message } from '../../store/ducks/messages/types';

type MessageListProps = {
  messages: Message[];
};

const MessageList: React.FunctionComponent<MessageListProps> = ({
  messages,
}: MessageListProps) => {
  return (
    <Container>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Container>
  );
};
export default MessageList;
