import React from 'react'
import '../index.css'


const Message = ({ message, type }) => {
    if (message === null){
        return null
    }

    let style = (type==='success') ? 'success_message' : 'error_message'
    return (
        <div className={style}>
            {message}
        </div>
    )
}

export default Message