interface IMessageProps {
    messages: any[];
}

interface IMessage {
    avatar: string;
    name: string;
    content: string;
    isReceive: boolean;
    createdTime: string;
}

interface ISendMessage {
    onSendTextInput(sendText : string): void;
    onSendClick(): void;
}