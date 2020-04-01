import React from "react";
import { Message } from "../../types";
import MessageItem from "./MessageItem";

type MessageListProps = {
  messages: Message[];
};

function MessageList({ messages }: MessageListProps) {
  return (
    <div>
      {messages.map((message) => (
        <MessageItem message={message} />
      ))}
    </div>
  );
}

export default MessageList;
