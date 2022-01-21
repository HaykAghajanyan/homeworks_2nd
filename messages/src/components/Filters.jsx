import React, {useEffect, useState} from 'react';
import messages from '../data/messages';
import Message from './Message';


function Filters() {

    const initialState = {
        messages:[],
        change: 'textColor'
    }

    const [state, setState] = useState( initialState );

    useEffect(() => {
        setState( { ...state, messages } );
    }, [state.messages, state.change]);

    return (
        <React.Fragment>
            <div className='filters'>
                <select onChange={(e) => setState({...state, messages: state.messages.map( message => message[state.change] = e.target.value )})}>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
                <select onChange={(e) => setState({...state, change: e.target.value})}>
                    <option value="textColor">Text Color</option>
                    <option value="nameColor">Name Color</option>
                </select>
            </div>
            <div className="messages">
                { state.messages.map( (message, index) => {
                    return <Message key={'x_' + index} message={message} />
                }) }
            </div>
        </React.Fragment>
    )
}

export default Filters
