import React, {useState} from 'react';
import {useMessagesData} from "../../contexts/messagesContext";
// import fs from "fs";
// let fs = require('fs');

function NewMessage() {

    const [newMessage, setNewMessage] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();
        // fs.appendFile('/db.json', 'Hello content!', function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        // });
        console.log(newMessage);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea type="text" cols="30" rows="10" value={newMessage}
                          onChange={e => setNewMessage(e.target.value)}> </textarea>
                <br/>
                <input type = "submit" value="Add Message" className="btn_submit" alt = "submit Checkout" />
            </form>
        </div>
    );
}

export default NewMessage;