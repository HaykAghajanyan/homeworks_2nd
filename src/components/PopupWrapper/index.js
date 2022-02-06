const PopupWrapper = ({children, onClose}) => {
    return (
        <div className='message-item'>
            <button className='btn' onClick={onClose}>go back</button>
            {children}
        </div>
    )
}

export default PopupWrapper
