import './button.css'



const MessageComp = ({item: {name, date, text, textColor, nameColor, id}}) => {

    return  (
        <div className='messageComp'>
            <p style={{color: nameColor}}>{name}</p>
            <p>{date}</p>
            <p style={{color: textColor}}>{text}</p>
        </div>
        )

}

export default MessageComp
