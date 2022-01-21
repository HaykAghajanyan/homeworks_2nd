import React from "react";
import styles from './userMessage.module.css';

function UserMessage({messages}){
    return(
        <div className={styles.message}>
             {messages.map(item => {
                return(
                <div key={item.id} className={styles.userMessage}>
                    <p className={styles.userName} style={{color: item.nameColor}}>{item.name}</p>
                    <p className={styles.messageText} style={{color: item.textColor}}>{item.text}</p>
                    <p className={styles.messageDate}>{item.date}</p>
                </div>
                )
            })}
        </div>
    )
}
export default UserMessage;