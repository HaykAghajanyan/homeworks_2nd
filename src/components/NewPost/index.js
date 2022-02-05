const NewPost = ({title, textValue, changeHandler, postHandler, buttonText}) => {
    return (
        <div className='new-post'>
            <h3>{title}</h3>
            <div className='new-post_inputs'>
                <textarea
                    value={textValue}
                    onChange={changeHandler}
                    className='new-post_area'
                />
                <button
                    onClick={postHandler}
                    className='btn'
                >{buttonText}</button>
            </div>
        </div>
    )
}

export default NewPost
