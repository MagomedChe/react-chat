import React from 'react';

function Incoming({message}) {
    return (
        <div className="chat-tex"> {message.content} </div>
    );
}

export default Incoming;