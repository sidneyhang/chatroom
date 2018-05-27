import * as React from 'react';
import './MessageRow.css'

class MessageRow extends React.Component<IMessageProps, any> {
    constructor(props: IMessageProps) {
        super(props);
    }
    public render() {
        const rows: JSX.Element[] = [];
        this.props.messages.forEach(message => {
            if (message.isReceive) {
                rows.push(<div><img src={message.avatar} width="50px" height="50px" /><span>{message.content}</span></div>);
            } else {
                rows.push(<div className="right"><span>{message.content}</span><img src={message.avatar} width="50px" height="50px" /></div>);
            }
        }
    );
        return (
            <div>{rows}</div>
        );
    }
}

export default MessageRow;