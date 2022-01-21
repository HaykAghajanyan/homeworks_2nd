import React, {useEffect, useState} from 'react';
import messages from '../data/messages';
import Message from './Message';


function Home() {

    const initialState = {
        messages:[]
    }

    const [state, setState] = useState( initialState );

    useEffect(() => {
        setState( { messages} );
    }, []);

    return (
        <div className="messages">
            { state.messages.map( message => {
                return <Message message={message} />
            }) }
        </div>
    )
}

export default Home
