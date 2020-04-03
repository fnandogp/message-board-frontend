import React, { useState, useEffect } from 'react';
import MessageList from '../components/MessageList';
import api from '../servives/api';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get('messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  return <MessageList messages={messages} />;
}

export default Messages;
