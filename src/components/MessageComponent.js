import React from 'react';


const MessageComponent = ({message}) => {
  return (<li>
    <div className="messageUser">{message.user}</div>
    <div className="messageContent">{message.content}</div>
  </li>)
}


export default MessageComponent;
