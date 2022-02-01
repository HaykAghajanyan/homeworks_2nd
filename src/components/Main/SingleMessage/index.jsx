import React from "react"
import Messages from "./Messages"
import Report from "./Report"
import style from "./style.module.css"


const SingleMessage = ({item}) => {
    return(
        <>
            <div className={style.Messages}>
                <Messages data = {item}/>
            </div>
            <div className={style.Report}>
                <Report />
            </div>
        </>
    )

}

export default SingleMessage