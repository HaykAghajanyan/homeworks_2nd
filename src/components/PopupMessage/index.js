import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useMessagesData()
    const messageObj = messages[params.id - 1] ||  {
        id: "6",
        name: "Karen",
        date: "1/01/2022",
        text: "Merry Christmas and a happy New Year",
      };


    return (
        <MessageComp item={messageObj} />
    )

}

export default PopupMessage
