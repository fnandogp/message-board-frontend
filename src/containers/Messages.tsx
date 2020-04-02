import React from 'react';
import MessageList from '../components/MessageList';

function Messages() {
  const messages = [
    { id: '1', content: 'Hello', author: 'F' },
    { id: '2', content: 'World', author: 'P' },
  ];

  return <MessageList messages={messages} />;
}

export default Messages;
