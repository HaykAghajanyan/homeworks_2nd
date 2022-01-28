import {useState} from "react";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {addMessage} from "../Redux/Ducks/appDuck/appDuck";
import {useSelector} from "react-redux/lib/exports";

const sendButtonImgURL = "/assets/img/send-message.png";

const year = (new Date()).getFullYear();
const month = (new Date()).getMonth() + 1;
const day = (new Date()).getDate();

export default function NewMessage() {

    console.log(day);
    const dispatch = useDispatch();
    const [currentUser, messages] = useSelector(({UserDuck, AppDuck}) => [UserDuck.currentUser, AppDuck.messages]);
    const [newMessage, setNewMessage] = useState("");

    const newMessageHandler = () => {
        newMessage.trim() && dispatch(addMessage({
            "id": `${messages.length + 1}`,
            "name": `${currentUser.userName}`,
            "date": `${day}/0${month}/${year}`,
            "text": `${newMessage}`,
            "textColor": "black",
            "nameColor": "black"
        }));

        setNewMessage("");
    };

    return (<div className={"new-message"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                newMessageHandler();
            }}>

                <span className={"input-send"}>
                    <input value={newMessage} onChange={e => setNewMessage(e.target.value)}
                           placeholder={"Type a message..."}/>
                    {/*<button type={"submit"}> Send</button>*/}

                    <img onClick={newMessageHandler} src={sendButtonImgURL} />
                </span>

            </form>


        </div>

    );
}
