import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage } from '../../redux/ducks/messagesReduser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Message({ message, myId }) {
  const allMessages = message.toUserId !== myId;
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  if (message.type === 'info') {
    return <div className="chat-info">{message.content}</div>;
  }

  const handleDeleteMessage = () => {
    dispatch(deleteMessage(message._id));
  };

  return (
    <div
      className={allMessages ? 'chat-send' : 'chat-incoming'}
      onMouseEnter={() => {setHover(true)}}
      onMouseLeave={() => {setHover(false)}}
    >
      {message.content}
      {hover && (
        <div className="delete-message" onClick={handleDeleteMessage}>
          <DeleteIcon />
        </div>
      )}

      <div className="date">
        {moment(message.time).format('HH:MM')}
        {message.sending ? (<AccessTimeIcon />) : (<CheckIcon fontSize={'50px'} />)}
      </div>
    </div>
  );
}

export default Message;
