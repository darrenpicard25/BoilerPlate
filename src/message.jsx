import React, {Component} from "react";

export class Message extends Component {
  constructor () {
    super();
  }
  render () {
    return (
        <div className="message">
          <span className="message-username">Anonymous1</span>
          <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>)
  }

}
export class Notification extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>)
  }
}

//export default {Notification, Message}