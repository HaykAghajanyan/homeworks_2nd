import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import MessageComp from "../MessageComp";
import {messagesSelector} from "../../helpers/reduxSelctors";

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useSelector(messagesSelector)

    // TODO: changed logic for current message. In case of deleting a message there was an error with wrong message opened in the popup
    const currentMessage = useMemo(() => messages.find(item => item.id === params.id), [messages, params.id])

    // TODO: to avoid error while reloading page on popup
    if(!currentMessage) {
        return (
            <div>...Loading</div>
        )
    }

    return (
        <>
            <MessageComp fromPopup item={currentMessage}/>
            {
                currentMessage.replies.map(({id, name, date, text}) => (
                    <div className='message-item' key={id}>
                        <p>replied by {name}</p>
                        <p>{date}</p>
                        <p>{text}</p>
                    </div>
                ))
            }
        </>
    )

}

export default PopupMessage
