import React from 'react';
import {useSelector} from "react-redux";

function Send({message}) {
    const myId = useSelector(state => state.application.myId);
    const send = message.filter(item => item.toUserId !== myId);


    return (
        <div>
            <div className="chat-text"> {send.content} </div>
        </div>
    );
}

export default Send;