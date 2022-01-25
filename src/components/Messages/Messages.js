import React from "react";
import { useStore  } from "../../store/Store";
import Message from "./Message/Message";
import styles from"./Messages.module.css";

const Messages = () => {
    const { messages } = useStore()

    return (
        <div className={styles.container}>
            {
               messages.length && messages.map(({id, name, text, date, nameColor, textColor}) => (
                    <Message
                        key={id}
                        id={id}
                        name={name}
                        text={text}
                        date={date}
                        nameColor={nameColor}
                        textColor={textColor}
                    />
                ))
            }
        </div>
    )
}

export default Messages;
