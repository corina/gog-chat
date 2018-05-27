import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import UserNameInput from './components/UserNameInput';
import logo from './logo.svg';
import './App.css';


type Message = {
  user: string,
  content: string
}

type State = {
  messageList: Array<Message>,
  user: string
}

class App extends Component {

  state: State = {
    messageList: [],
    user: undefined
  }

  addMessage = (content) => {
    this.setState({
      messageList: [
        ...this.state.messageList,
        {user: this.state.user, content: content}
      ]
    })
  }

  setName = (name) => {
    this.setState({
      user: name
    });
  }

  render() {
    return this.state.user ? (
        <div className="App">
          <MessageList messageList={this.state.messageList} />
          <MessageInput addMessage={this.addMessage}/>
        </div>
      ) : (
        <UserNameInput setName={this.setName}/>
      );
  }
}

export default App;
