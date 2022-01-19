import * as React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../../redux/ducks/messagesReduser'
import { useParams } from 'react-router-dom'

export default function BasicTextFields({ write, setWrite }) {
  const dispatch = useDispatch();
  const contactId = useParams()._id;
  const myId = useSelector((state) => state.application.myId);

  const handleAddMessage = (myId, contactId, write ) => {
    dispatch(addMessage(myId, contactId, write ))
  };


  return (
    <div className="write-icons">
      <button>
        <AttachFileIcon />
      </button>
      <button>
            {write ? (
              <SendIcon onClick={() => handleAddMessage(myId, contactId, write )} />
            ) : (
              <KeyboardVoiceIcon />
            )}
      </button>
    </div>
  );
}
