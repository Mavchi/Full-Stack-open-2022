const Notification = ({ message }) => {
    if (!message) {
        return
    }

    return (
        <div className={`message ${message.type}`}>
            {message.text}
        </div>
    )
}

export default Notification