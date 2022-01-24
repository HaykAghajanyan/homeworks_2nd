
function Messages({ data }) {
    return (
        <div className='column right'>
            <div className='messageItem' >
                {
                    data.messages.map(item => {
                        return (
                            <div key={item.id} className='card'>
                                <div > {item.date} </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div> {item.text} </div>
                                </div>
                            </div>
                        )

                    })}
            </div>
        </div>
    )
}

export default Messages;