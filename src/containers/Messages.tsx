import React from 'react';
import MessageList from '../components/MessageList';

function Messages() {
  const messages = [
    {
      content: 'Hello',
      author: 'FP',
    },
  ];
  return <MessageList messages={messages} />;
}

export default Messages;
