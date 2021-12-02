import React from 'react';

function Message({message, myId}) {

    if (message.toUserId === myId) {
        return <div className="chat-incoming"> {message.content} </div>
    }

    if (message.toUserId !== myId) {
        return <div className="chat-send"> {message.content} </div>
    }

    return <div className="chat-text"> {message.content} </div>


}

export default Message;