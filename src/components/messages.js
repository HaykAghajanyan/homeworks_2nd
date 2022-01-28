import {useSelector} from "react-redux/lib/exports";
import NewMessage from "./newMessage";
import {useEffect, useRef} from "react";


export default function Messages() {
    const endMessageRef = useRef(null);
    const {AppDuck, currentUser} = useSelector(({AppDuck, UserDuck}) => ({AppDuck, currentUser: UserDuck.currentUser}));

    useEffect(() => {
        endMessageRef.current.scrollIntoView({behavior: "smooth"});

    });

    return (
        <>
            <div className={"message-box"}>
                {AppDuck.messages.map(({name, date, text, id}) => <div
                    key={id}
                    className={name === currentUser.userName ? `current-user message` : "message"}
                >
            <span className={`date-and-name ${AppDuck.nameClass}`}>
               <div className={"name"}> {name} </div>
               <div className={`date`}>  {date} </div>
            </span>

                    <div className={`text ${AppDuck.textClass}`}>  {text} </div>
                </div>)}

                <NewMessage/>

            </div>

            <div className={"last-message"} ref={endMessageRef}/>
        </>
    );
}