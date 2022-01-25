import React from 'react';
import styles from './Message.module.css'

const Message = ({id, name, text, date, nameColor, textColor }) => {

    return (
        <div
            className={styles.container}
            style={{justifyContent: id % 3 ? 'flex-start' : 'flex-end'}}
        >
            <div className={styles.main}>
                <p className={styles.header}>
                    <span>{name}</span>
                    <span className={styles.small}>
                        {date}
                    </span>
                </p>
                <div className={styles.content} style={{backgroundColor: textColor}}>
                    <p>{text}</p>

                </div>
            </div>
        </div>
    )
}

export default Message;
