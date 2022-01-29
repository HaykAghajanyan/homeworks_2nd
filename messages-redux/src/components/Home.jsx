import React from 'react';
import Message from './Message';
import Reply from './Reply'
import {useSelector} from "react-redux";


function Home() {

    const {user} = useSelector( state => state.userDuck );
    const {messages, color, target} = useSelector( state => state.messageDuck );

    messages.map( message => message[target] = color);
    
    return (
        <>
            <div className="messages">
                { messages.map( message => {
                    return <Message key={'p_' + message.id } message={message} />
                }) }
            </div>
            {user.username && <Reply />}
        </>
    )
}

export default Home
