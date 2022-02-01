import React from "react"
import { useSelector} from "react-redux";
import AuthDuck, {changeAuthUser} from "../../../../redux/ducks/authDuck"

import style from "./style.module.css"

const Messages = ({data}) => {
    const {auth} = useSelector((state)=> state.AuthDuck)

    return(
        <div>
           {
            data?.info ?
            data?.info.map((el)=>{
                if(el?.idFromUser === auth.id){
                return  (
                            <div key={el.id} className={style.messagBox}>
                                <div className={style.messageFrom}>
                                    {el?.message.text}
                                </div>
                            </div>
                    )
                }else{
                    return  (
                    
                        <div key={el.id} className={style.messagBox}>
                        <div className={style.messageTo}>
                            {el?.message.text}   
                        </div>
                    </div>
                    )
                }
            })
            :
            <span>'no mess'</span>
           }
        </div>
    )

}

export default Messages