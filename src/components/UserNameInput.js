import React from 'react';


const UserNameInput = ({setName}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        setName(input.value);
      }}>
        Enter name
      </button>
    </div>
  )
}

export default UserNameInput;
