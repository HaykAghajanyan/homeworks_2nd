import React from "react";
import style from "./style.module.css"

const Header = ({userName}) => {
    return (
            <>
                <header className={style.header}>
                    <div className={style.userInfo}>
                        <div className={style.userAvatar}></div>
                        <div className={style.userNickName}>{userName}</div>
                    </div>
                </header>
            </>
    )
}
export default Header