const MessageComp = ({name, date, text, textColor, nameColor})=>{
    return(
        <>
            <p style={{color:nameColor}}>{name}</p>
            <p>{date}</p>
            <p style={{color:textColor}}>{text}</p>
        </>
    )
}

export default MessageComp