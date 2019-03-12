import React, {Component} from 'react';
import ChatBar from "./chatBar.jsx";
import NavBar from "./navBar.jsx";
import MessageList from "./messageList.jsx";

class App extends Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div>
        <NavBar />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}
export default App;
