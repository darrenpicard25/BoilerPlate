import React, {Component} from 'react';
import ChatBar from "./chatBar.jsx";
import NavBar from "./navBar.jsx";
import MessageList from "./messageList.jsx";

class App extends Component {
  constructor () {
    super();
    this.state = {
      loading: true,
      currentUser: {name: "Darren"},
      messageData: messages
    };
    this.MessageType = this.MessageType.bind(this);
  }
  componentDidMount () {

    setTimeout( () => {
      this.setState({loading:false});
    }, 2000);

    setTimeout(() => {
      const newMessage = {id: 10, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messageData.concat(newMessage);
      this.setState({messageData: messages});
    }, 4000);
  }

  MessageType (text, user) {
    const id = randomIdGenerator();
    let newMessage = {
      type: "incomingMessage",
      content: text,
      username: user,
      id,
    };
    let allMessages = this.state.messageData;
    allMessages.push(newMessage);
    this.setState({messageData: allMessages});
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.loading ? <h1>Loading........</h1> : <MessageList messageData={this.state.messageData}/>}
        <ChatBar currentUser={this.state.currentUser} MessageType={this.MessageType}/>
      </div>
    );
  }
}
export default App;


function randomIdGenerator() {
  return Math.floor(Math.random() * 1000)
}
let messages = [
  {
    type: "incomingMessage",
    content: "I won't be impressed with technology until I can download food.",
    username: "Anonymous1",
    id: 1
  },
  {
    type: "incomingNotification",
    content: "Anonymous1 changed their name to nomnom",
    id: 2
  },
  {
    type: "incomingMessage",
    content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
    username: "Anonymous2",
    id: 3
  },
  {
    type: "incomingMessage",
    content: "...",
    username: "nomnom",
    id: 4
  },
  {
    type: "incomingMessage",
    content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
    username: "Anonymous2",
    id: 5
  },
  {
    type: "incomingMessage",
    content: "This isn't funny. You're not funny",
    username: "nomnom",
    id: 6
  },
  {
    type: "incomingNotification",
    content: "Anonymous2 changed their name to NotFunny",
    id: 7
  },
]