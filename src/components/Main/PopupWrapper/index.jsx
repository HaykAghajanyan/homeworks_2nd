import { useSelector } from "react-redux";
import { useEffect,useState } from "react"
import {useParams} from "react-router-dom";
import MessagesDuck from "../../../redux/ducks/messagesDuck"
import AuthDuck from "../../../redux/ducks/authDuck"

import style from "./style.module.css"
const PopupWrapper = ({children, goBack }) => {
    const [fromUsers,setFromUsers] = useState([])
    const {auth} = useSelector((state)=> state.AuthDuck)
    const {messages} = useSelector((state)=> state.MessagesDuck)
    const params = useParams()
    console.log(messages, 'fromUsers')
    useEffect(()=>{
        if(messages[params.id - 1]?.chatGroup){
            setFromUsers(messages[params.id - 1]?.chatGroup.filter(el=>el.userId !== auth.id))
        }
    },[messages])
    return (
        <div className={style.messageItem}>
            <div className={style.singleMessHeader}>
                <div className={style.goBackBtnBox}>
                    <button className={style.goBackBtn} onClick={goBack}><img height={"100%"} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-back-arrow-basic-ui-elements-flatart-icons-outline-flatarticons.png"/></button>
                </div>
                <div className={style.fromUserBox}> 
                    <div className={style.userAvatar}></div>
                    {fromUsers[0]?.userName}
                </div>
            </div>
            
            {children}
        </div>
    )
}

export default PopupWrapper