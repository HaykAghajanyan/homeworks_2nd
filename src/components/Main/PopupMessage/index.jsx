import { useSelector } from "react-redux";
import SingleMessage from "../SingleMessage";
import {useParams} from "react-router-dom";
import MessagesDuck from "../../../redux/ducks/messagesDuck"
import { useEffect } from "react/cjs/react.development";


const PopupMessage = () => {
    const params = useParams()
    const {messages} = useSelector((state)=> state.MessagesDuck)
    useEffect(()=>console.log(messages[params.id - 1],'mess popup'),[messages])
    return (
        <>
         {messages.length>1?<SingleMessage item={messages[params.id - 1]} />:'loading'}
        </>
    )

}

export default PopupMessage