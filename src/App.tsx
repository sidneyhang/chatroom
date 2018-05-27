import * as React from 'react';
import './App.css';
import './MessageProps';
import MessageRow from './MessageRow';
import SendMessage from './SendMessage';


class App extends React.Component<any, any> {

  private data: IMessage[] = [
    { avatar: "http://imgs.jinxiaoersh.com/4cMdtinQxmKzYrfShN.jpg", name: "li", content: "Hello!", isReceive: true, createdTime: "2018-05-26 12:42:00" },
    { avatar: "http://imgs.jinxiaoersh.com/MSePaMsJHEMi3i7JFG.jpg", name: "yang", content: "Hi!", "isReceive": false, createdTime: "2018-05-26 12:43:00" },
    { avatar: "http://imgs.jinxiaoersh.com/4cMdtinQxmKzYrfShN.jpg", name: "li", content: "你好!", isReceive: true, createdTime: "2018-05-26 12:43:10" },
    { avatar: "http://imgs.jinxiaoersh.com/MSePaMsJHEMi3i7JFG.jpg", name: "yang", content: "OK", isReceive: false, createdTime: "2018-05-26 12:43:20" }
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      data: this.data,
      sendText: '',
    };
    this.handleSendTextInput = this.handleSendTextInput.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
  }

  public render() {
    return (
      <div>
        <MessageRow messages={this.state.data} />
        <SendMessage onSendTextInput={this.handleSendTextInput} onSendClick={this.handleSendClick} />
      </div>
    );
  }

  private handleSendClick() {
    const sendText = this.state.sendText;
    if (sendText === null || sendText === '') {
      return;
    }
    const messages = this.state.data;
    const message: IMessage = {
      avatar: "http://imgs.jinxiaoersh.com/MSePaMsJHEMi3i7JFG.jpg",
      content: sendText,
      createdTime: "2018-05-26 12:43:20",
      isReceive: false,
      name: "yang"
    };
    messages.push(message);

    this.setState({
      data: messages
    });
  }

  private handleSendTextInput(sendText: string) {
    this.setState({
      sendText
    });
  }

}

export default App;
