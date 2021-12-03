import React from 'react';
import CheckIcon from "@mui/icons-material/Check";

function Message({message, myId}) {

    const allMessages = message.toUserId !== myId;

    if (message.type === 'info') {
        return <div className="chat-info">{message.content}</div> ;
    }

    return (
        <div>
            <div className={allMessages ? ("chat-send") : ("chat-incoming")}>
                {message.content}
                <CheckIcon fontSize={"small"} />
            </div>

        </div>

    )


    // if (message.toUserId === myId) {
    //     return <div className="chat-incoming"> {message.content}
    //         <div className="time-check">
    //             <div className="time-message">time</div>
    //             <CheckIcon fontSize={"small"} />
    //         </div>
    //     </div>
    // }
    //
    // if (message.toUserId !== myId) {
    //     return <div className="chat-send"> {message.content}
    //         <div className="time-check">
    //             <div className="time-message">time</div>
    //             <CheckIcon fontSize={"small"} />
    //         </div>
    //     </div>
    // }
    //
    // return <div className="chat-text"> {message.content} </div>


}

export default Message;