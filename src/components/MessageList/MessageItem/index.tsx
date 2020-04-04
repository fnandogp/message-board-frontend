import React from 'react';
import { Container, Author, Content } from './styles';
import { Message } from '../../../store/ducks/messages/types';

type MessageItemProps = {
  message: Message;
};

const MessageItem: React.FunctionComponent<MessageItemProps> = ({
  message,
}: MessageItemProps) => {
  return (
    <Container>
      <Content>{message.content}</Content>
      <Author>{message.author}</Author>
    </Container>
  );
};

export default MessageItem;
