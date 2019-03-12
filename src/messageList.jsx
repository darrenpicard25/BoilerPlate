import React, {Component} from 'react';
import {Message, Notification} from "./message.jsx";

function MessageList (props) {
    const messages = props.messageData.map((message) => {
      if (message.type === "incomingNotification") {
        return (<Notification key={message.id} content={message.content}/>);
      } else {
          return (<Message key={message.id} username={message.username} content={message.content}/>);
        }
    });
    return (
        <main className="messages">
          {messages}
        </main>)
}

export default MessageList;