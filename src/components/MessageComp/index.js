const MessageComp = ({item: {name, date, text, textColor, nameColor}}) => (
    <>
            <p style={{color: nameColor}}>{name}</p>
            <p>{date}</p>
            <p style={{color: textColor}}>{text}</p>
            <span className='btn'><button className='reply'>Reply</button></span>

    </>
)

export default MessageComp
