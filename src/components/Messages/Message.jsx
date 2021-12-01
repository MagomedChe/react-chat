import React from 'react';

function Message({message, myId}) {


    return (
        <div className="chat-text"> {message.content} </div>
    );
}

export default Message;