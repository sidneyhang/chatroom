import * as React from 'react';
import "./SendMessage.css";

class SendMessage extends React.Component<ISendMessage, any> {
    constructor(props: ISendMessage) {
        super(props);
        this.handleSendTextChange = this.handleSendTextChange.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
    }

    public render() {
        return(
            <div className="send-box">
                <input onChange={this.handleSendTextChange} type="text"/>
                <button onClick={this.handleSendClick}>发送</button>
            </div>
        );
    }

    private handleSendTextChange(e: any) {
        this.props.onSendTextInput(e.target.value);
    }

    private handleSendClick() {
        this.props.onSendClick();
    }
}

export default SendMessage;