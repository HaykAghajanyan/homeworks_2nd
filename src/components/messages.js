import {useSelector} from "react-redux/lib/exports";
import NewMessage from "./newMessage";
import {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {deleteMessage} from "../Redux/Ducks/appDuck/appDuck";

const deleteBtnURL = "/assets/img/delete.png";
const editBtnURL = "/assets/img/editing.png";


export default function Messages() {
    const endMessageRef = useRef(null);
    const dispatch = useDispatch();
    const currentUserName = useSelector(({UserDuck}) => UserDuck.currentUser.userName);
    const {AppDuck, currentUser} = useSelector(({AppDuck, UserDuck}) => ({AppDuck, currentUser: UserDuck.currentUser}));

    const [newInput, setNewInput] = useState("");


    useEffect(() => {
        endMessageRef.current.scrollIntoView({behavior: "smooth"});


    }, [newInput]);


    // helper function to listen new messages.
    // if there is a new message, scrolls to the bottom.
    // in other cases scrolling will not work.
    const newMessageListener = useCallback((newVal) => {
        setNewInput(newVal);
    });


    const deleteMessageHandler = (idx, name) => {
        (name === currentUserName) && dispatch(deleteMessage(idx));
    };


    return (
        <>
            <div className={"message-box"}>
                {AppDuck.messages.map(({name, date, text, id}, idx) => (
                    <div
                        key={idx}
                        className={name === currentUser.userName ? `current-user message` : "message"}>
                                 <span className={`date-and-name ${AppDuck.nameClass}`}>
                                    <div className={"name"}> {name} </div>
                                    <div className={`date`}>  {date} </div>
                                 </span>

                        <div className={`message-text text ${AppDuck.textClass}`}><p> {text} </p>
                            {(name === currentUser.userName) && (<div className={"edit-delete-buttons"}>
                                <img id={"deleteMessage"} src={editBtnURL}/>
                                <img id={"deleteMessage"} onClick={(e) => deleteMessageHandler(idx, name)}
                                     src={deleteBtnURL}/>

                            </div>)}
                        </div>
                    </div>
                ))}


                <NewMessage newMessageListener={newMessageListener}/>

                <div className={"last-message"} ref={endMessageRef}/>
            </div>

        </>
    );
}