import React from 'react';

const MessageInput = ({addMessage}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        addMessage(input.value);
        input.value = '';
      }}>Send
    </button>
  </div>
  )
}


export default MessageInput;
