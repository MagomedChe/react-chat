import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

function Message({ message, myId }) {
  const allMessages = message.toUserId !== myId;

  if (message.type === 'info') {
    return <div className="chat-info">{message.content}</div>;
  }

  return (
    <div>
      <div className={allMessages ? 'chat-send' : 'chat-incoming'}>
        {message.content}
        <CheckIcon fontSize={'small'} />
      </div>
    </div>
  );
}

export default Message;
