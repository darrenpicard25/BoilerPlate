import React, {Component} from 'react';
import ChatBar from "./chatBar.jsx";
import NavBar from "./navBar.jsx";
import MessageList from "./messageList.jsx";


class App extends Component {
  constructor () {
    super();
    this.state = {
      loading: true,
      currentUser: {name: ""},
      messageData: [],
      usersOnline: 0,
      color: ""
    };
    this.SendMessage = this.SendMessage.bind(this);
    this.SendNotification = this.SendNotification.bind(this);
  }
  componentDidMount () {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event) {
    };

    this.socket.onmessage = (message) => {
      const newMessage = JSON.parse(message.data);
      switch (newMessage.type) {
        case 'numUsers' :
          this.setState({usersOnline: newMessage.users});
          break;
        case 'colorAssignment' :
          this.setState({color: newMessage.color});
          break;
        case 'postMessage' :
        case 'postNotification' :
        case 'postPicture' :
          let newMessageData = this.state.messageData;
          newMessageData.push(newMessage);
          this.setState((previousState) => ({messageData: newMessageData}));
          break;
        default :
          console.log('Should not be here');
          break;
        }
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
      color: this.state.color
    };
    let url = newMessage.content.slice(newMessage.content.length-3);
    if (url === 'png' || url === 'gif' || url === 'jpg') {
      newMessage.type = 'incomingPicture';
    }
    //if (newMessage.content.splice(newMessage.content.length-4))
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
        <NavBar usersOnline={this.state.usersOnline}/>
        {this.state.loading ? <h1>Loading........</h1> : <MessageList messageData={this.state.messageData}/>}
        <ChatBar currentUser={this.state.currentUser} SendMessage={this.SendMessage} SendNotification={this.SendNotification}/>
      </div>
    );
  }
}
export default App;

