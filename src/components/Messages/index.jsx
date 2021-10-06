import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/ducks/messagesReduser";
import CheckIcon from '@mui/icons-material/Check';
import SearchMessage from "./SearchMessage";

import SearchContact from "../Contacts/SearchContact";

function Messages(props) {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMessages());
  }, []);

  return (
    <div className="chat">
      <div className="chat-header">
        <SearchMessage/>
        <div className="chat-name">Имя автора</div>
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="text">
            Ассаламу 1алайкум
          </div>
          <div className="time-message">
              time
          </div>
          <CheckIcon fontSize={'small'}/>
        </div>
        </div>
    </div>
  );
}

export default Messages;




