import React from 'react';
import MessageComponent from './MessageComponent';

const MessageList = ({messageList}) => {
  const messages = messageList.map((message, i) => (
    <MessageComponent key={i} message={message}/>
  ));

  return <ul className="messageList">{messages}</ul>
}


export default MessageList;
