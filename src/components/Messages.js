
function Messages({ data, selectedItem, color }) {
    return (
        <div className='column right'>
            <div className='messageItem' >
                {
                    data.messages.map(item => {
                        return (
                            <div key={item.id} className='card'>
                                <div > {item.date} </div>
                                <div>
                                    <div style={{backgroundColor: selectedItem === 'name' ? color : item.color}}>{item.name}</div>
                                    <div style={{backgroundColor: selectedItem === 'text' ? color : item.color}}> {item.text} </div>
                                </div>
                            </div>
                        )

                    })}
            </div>
        </div>
    )
}

export default Messages;