import React from 'react';
import { Container, Author, Content, DeleteButton } from './styles';
import { Message } from '../../../store/ducks/messages/types';

type MessageItemProps = {
  message: Message;
  handleDeleteClick: Function;
};

const MessageItem: React.FunctionComponent<MessageItemProps> = ({
  message,
  handleDeleteClick,
}: MessageItemProps) => {
  return (
    <Container>
      <DeleteButton
        type="button"
        onClick={() => {
          console.log('message', message);
          handleDeleteClick(message.id);
        }}
      >
        &times;
      </DeleteButton>
      <Content>{message.content}</Content>
      <Author>{message.author}</Author>
    </Container>
  );
};

export default MessageItem;
