import React, {Component} from "react";

class Chatbar extends Component {
  constructor() {
    super();
  }
  render() {
    const keyPress = (event) => {
      if(event.keyCode === 13) {
        console.log(this.props.currentUser.name);
        let user = (this.props.currentUser.name ? this.props.currentUser.name : "Anonymous");
        this.props.MessageType(event.target.value, user);
        event.target.value = "";
      }

    }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser.name ? this.props.currentUser.name : "Anonymous"} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={keyPress} />
      </footer>
          )
  }
}

export default Chatbar;
