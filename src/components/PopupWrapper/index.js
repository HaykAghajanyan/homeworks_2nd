const PopupWrapper = ({children, onClose}) => {
    console.log({children},777)
    return (
        
        <div className='message-item'>
            <button onClick={onClose}>go back</button>
            
            {children}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default PopupWrapper
