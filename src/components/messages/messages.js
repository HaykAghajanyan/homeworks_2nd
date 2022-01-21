import {useEffect, useState} from "react";
import MessageCard from "../messageCard/message-card";

export default function Messages({selectedColor, selectedProperty}) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("/messages.json")
            .then(res => res.json())
            .then(resJson => setMessages(resJson.messages))
    }, [])

    return (
        <div>
            <h2> Messages </h2>
            {messages.map(item => <MessageCard key={item.id} message={item}
                                               color={selectedColor}
                                               property={selectedProperty}/>)}
        </div>
    );
}
