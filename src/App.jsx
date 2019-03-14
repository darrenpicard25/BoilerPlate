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
      messageData: []
    };
    this.SendMessage = this.SendMessage.bind(this);
    this.SendNotification = this.SendNotification.bind(this);
  }
  componentDidMount () {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event) {
    };

    this.socket.onmessage = (message) => {
      let newMessageData = this.state.messageData;
      newMessageData.push(JSON.parse(message.data));
      this.setState((previousState) => ({messageData: newMessageData}));
    };

    setTimeout( () => {
      this.setState({loading:false});
    }, 2000);

    // setTimeout(() => {
    //   const newMessage = {id: 10, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messageData.concat(newMessage);
    //   this.setState({messageData: messages});
    // }, 4000);
  }

  SendMessage (text, user) {
    let newMessage = {
      type: "incomingMessage",
      content: text,
      username: user,
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  SendNotification (newUser) {
    let newNotification = {
      type: 'incomingNotification',
      content: newUser,
      username: this.state.currentUser.name
    };
    this.setState({currentUser: {name: newUser}});
    this.socket.send(JSON.stringify(newNotification));
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.loading ? <h1>Loading........</h1> : <MessageList messageData={this.state.messageData}/>}
        <ChatBar currentUser={this.state.currentUser} MessageType={this.MessageType} UserType={this.UserType}/>
      </div>
    );
  }
}
export default App;

