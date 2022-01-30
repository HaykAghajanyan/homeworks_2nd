import {useMessagesData} from "../../contexts";
import MessageComp from "../MessageComp";
import {useEffect, useState} from "react";
import {memo} from "react";

const Messages = ({configs}) =>{
    const[filteredMessages, setFilteredMessages] = useState([])

    const {messages} = useMessagesData()

    useEffect(()=>{
       const filteredData = messages.map(item =>{
            item[configs.target] = configs.color
           return item
        })
        setFilteredMessages(filteredData)
    },[messages,configs])


    return(
        <>
            {
                filteredMessages.map(message =>(
                    <div  key={message.id} className={'message-item'}>
                        <MessageComp {...message} />
                    </div>

                ))
            }
        </>
    )
}

export default memo(Messages);