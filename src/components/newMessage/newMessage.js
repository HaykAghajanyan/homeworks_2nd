import React, {useState} from 'react';
import {useMessagesData} from "../../contexts/messagesContext";


function NewMessage() {
    let {messages} = useMessagesData()
    const [newMessage, setNewMessage] = useState([messages]);
    const [newItem, setNewItem] = useState('')

const addItemHandler = () => {
    let nObj = {
        "id": "10",
        "name": "Hasmik",
        "date": "29/01/2022",
        "text": newItem,
        "textColor": "black",
        "nameColor": "black"
    };

    messages = messages.concat(nObj);
    setNewMessage(messages)
    console.log(messages)

}


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newMessage);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea type="text" cols="30" rows="10" value={newItem}
                          onChange={e => setNewItem(e.target.value)}> </textarea>
                <br/>
                {/*<input type = "submit" value="Add Message" className="btn_submit" alt = "submit Checkout" />*/}
            </form>
            <button onClick={addItemHandler}>Add Item</button>
        </div>
    );
}

export default NewMessage;