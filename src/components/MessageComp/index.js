import './button.css'



const MessageComp = ({item: {name, date, text, textColor, nameColor, id}}) => {

    const consoleName = () => {
        console.log({name})
    }
    return  (
        <>
            <p style={{color: nameColor}}>{name}</p>
            <p>{date}</p>
            <p style={{color: textColor}}>{text}</p>


            <div >
                <span className='bttn'><button onClick={consoleName} >Reply</button></span>
                <span className='bttn'><button >Edit</button></span>
                <span className='bttn'><button >Delete</button></span>
            </div>
            {/*<span className='btn'></span>*/}
            {/*<span className='btn'></span>*/}

        </>
        )

}

export default MessageComp
