const MessageComp = ({item: {name, text, nameColor, textColor, date}}) => (
    <>
        <p style={{color: nameColor}}>{name}</p>
        <p>{date}</p>
        <p style={{color: textColor}}>{text}</p>
    </>
)

export default MessageComp;
