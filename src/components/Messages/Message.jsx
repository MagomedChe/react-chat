import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import moment from "moment";

function Message({ message, myId }) {
  const allMessages = message.toUserId !== myId;

  if (message.type === 'info') {
    return <div className="chat-info">{message.content}</div>;
  }

  return (
      <div className={allMessages ? 'chat-send' : 'chat-incoming'}>
        {message.content}
        <div className='date'>
            {moment(message.time).format('HH:MM')}
            <CheckIcon fontSize={'small'} />
        </div>
      </div>
  );
}

export default Message;
