import React, { Component } from 'react';
import MessageList from './components/MessageList';
import logo from './logo.svg';
import './App.css';


type Message = {
  user: string,
  content: string
}

type State = {
  messageList: Array<Message>
}

class App extends Component {
  state: State = {
    messageList: [
      {user: 'gog', content: 'Hellooooooo'},
      {user: 'gof', content: 'Hello back'}
    ]
  }

  render() {
    return (
      <div className="App">
        <MessageList messageList={this.state.messageList} />
      </div>
    );
  }
}

export default App;
