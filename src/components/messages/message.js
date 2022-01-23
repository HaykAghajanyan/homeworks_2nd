import './message.css'

function Message({name, date, text, colorOfName, colorOfText}) {
    return (
        <div className='message'>
            <span>Name: <span style={{color: colorOfName}}>{name}</span></span>
            <span className='date'>Date: {date}</span> <br/>
            <br/>
            <span>Message: <span style={{color: colorOfText}}>{text}</span> </span>
        </div>
    );
}

export default Message;