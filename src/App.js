import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import UserNameInput from './components/UserNameInput';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';

const db = firebase.firestore();

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
    // this.setState({
    //   messageList: [
    //     ...this.state.messageList,
    //     {user: this.state.user, content: content}
    //   ]
    // })

    db.collection("messages").add({
      timestamp: Date.now(),
      user: this.state.user,
      content: content
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      this.fetchMessages();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  componentDidMount = () => {
    setInterval(() => {
      this.fetchMessages();
    }, 2000);
  };

  fetchMessages = () => {
    db.collection("messages").orderBy("timestamp", "desc").limit(10).get().then((querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.unshift(doc.data())
      })
      this.setState({messageList: messages})
    });
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
