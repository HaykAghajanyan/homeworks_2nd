import "./message-card.css";

export default function MessageCard({message, color, property}) {
    return (
        <div className='card'>
            <div>
                <i className='fas fa-user-alt icon'/>
                {property === 'Name' ?
                    <span style={{color: color}}>{message.name}</span> :
                    <span style={{color: 'none'}}>{message.name}</span>}
            </div>
            <div>
                <i className='fas fa-comment-dots icon'/>
                {property === 'Text' ?
                    <span style={{color: color}}>{message.text}</span> :
                    <span style={{color: 'none'}}>{message.text}</span>}
            </div>
            <div>
                <i className='fas fa-calendar-alt icon'/>
                <span>{message.date}</span>
            </div>
        </div>
    );
}
