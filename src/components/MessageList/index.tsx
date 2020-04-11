import React from 'react';
import MessageItem from './MessageItem';
import { Container } from './styles';
import { Message } from '../../store/ducks/messages/types';

type MessageListProps = {
  messages: Message[];
  handleDeleteClick: Function;
};

const MessageList: React.FunctionComponent<MessageListProps> = ({
  messages,
  handleDeleteClick,
}: MessageListProps) => {
  return (
    <Container>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </Container>
  );
};
export default MessageList;
