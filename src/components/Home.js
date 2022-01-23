import { useState, useEffect } from "react";

function Home (props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch ("/info.json").then ((res) => res.json())
            .then (res => setUsers(res));
    }, [])
    return (
        <div>
            {
                users.messages && users.messages.map ((item, index) =>
                    <div key ={index} className = 'block'>
                        <div className = 'date'>{item.date}</div>
                        <span className = 'span' style={{color:props.elem === 'name' ? props.color : ''}}><span className='brightness'>Name:</span><span>{item.name}</span></span>
                        <span className = 'span' style={{color:props.elem === 'text' ? props.color : ''}}><span className='brightness'>Text:</span><span>{item.text}</span></span>
                    </div>
                )
            }
        </div>
    )
}

export default Home;