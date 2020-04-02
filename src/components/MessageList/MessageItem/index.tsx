import React from 'react';
import { Message } from '../../../types';

type MessageProps = {
  message: Message;
};

export default function MessageItem({ message }: MessageProps): JSX.Element {
  return (
    <div>
      <p>{message.content}</p>
      <small>{message.author}</small>
    </div>
  );
}
