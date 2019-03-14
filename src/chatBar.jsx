import React, {Component} from "react";

class Chatbar extends Component {
  constructor() {
    super();
  }
  render() {
    const keyPressText = (event) => {
      if(event.keyCode === 13) {
        let user = (this.props.currentUser.name ? this.props.currentUser.name : "Anonymous");
        this.props.MessageType(event.target.value, user);
        event.target.value = "";
      }
    };
    const keyPressUser = (event) => {
      if(event.keyCode === 13) {
        this.props.UserType(event.target.value);
      }
    };
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser.name ? this.props.currentUser.name : "Anonymous"} onKeyUp={keyPressUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={keyPressText} />
      </footer>
          )
  }
}

export default Chatbar;
