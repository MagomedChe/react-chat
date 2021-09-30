import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/ducks/messagesReduser";
// import CheckIcon from '@mui/icons-material/Check';

function Messages(props) {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMessages());
  }, []);

  return (
    <div className="chat">
      <div className="chat-name">Имя автора</div>
      <div className="chat-messages">
        <div className="message">
          <div>
              Привет
          </div>
          <div className="time-message">
              time
          </div>
          <div className="status-message">
            {/*<CheckIcon/>*/}
          </div>
        </div>
        <div className="message">Привет, йопта</div>
        <div></div>
        </div>
    </div>
  );
}

export default Messages;



