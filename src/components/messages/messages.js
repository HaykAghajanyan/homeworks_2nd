import Message from "./message";
import {messages} from "../../helpers/constants"

function Messages(props) {

    return (
        <div>
            {messages.map((message) => <Message
                { ...message} key={message.id}
                colorOfText={props.colorOfText}
                colorOfName={props.colorOfName}
            />)}
        </div>
    );
}

export default Messages;