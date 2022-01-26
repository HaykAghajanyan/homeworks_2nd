import React from 'react';
import Message from './Message';


function Home({messages}) {

    return (
        <div className="messages">
            { messages.map( message => {
                return <Message key={'p_' + message.id } message={message} />
            }) }
        </div>
    )
}

export default Home
