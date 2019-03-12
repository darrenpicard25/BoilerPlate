import React, {Component} from 'react';
import {Message, Notification} from "./message.jsx";

class MessageList extends Component {
  render () {
    return (
        <main className="messages">
          <Message />
          <Notification />
        </main>)
  }
}

export default MessageList;