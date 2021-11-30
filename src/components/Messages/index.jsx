import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/ducks/messagesReduser";
import CheckIcon from "@mui/icons-material/Check";
import SearchMessage from "./SearchMessage";
import IconProfile from "./IconProfile";
import {loadMyId} from "../../redux/ducks/applicationReduser";
import {useParams} from "react-router-dom";

function Messages({ activeProfile, setActiveProfile }) {
  const contactId = useParams()._id;
  const myId = useSelector(state => state.application.myId);
  const messagesChat = useSelector((state) => state.messages.messages);
  const messages = messagesChat.filter(messages => myId === contactId)
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.messages.loading);


  useEffect(() => {
    dispatch(loadMyId());
    dispatch(loadMessages(myId, contactId));
  }, [loadMyId, loadMessages]);

  return (
    <div className="chat">
      <div className="chat-header">
        <SearchMessage />
        <div className="chat-name">Имя автора</div>
        <div
          className="iconProfile"
          onClick={() => setActiveProfile(!activeProfile)}
        >
          <IconProfile />
        </div>
      </div>
      <div className="chat-messages">
        {loading ? (
          <div>Идет загрузка ...</div>
        ) : (
          <div className="chat-content">
            {/*{sendMessage}*/}

            {messages.map((message) => {
              return <div className="chat-text"> {message.content} </div>;
            })}
          </div>
        )}
        <div className="time-message">time</div>
        <CheckIcon fontSize={"small"} />
      </div>
    </div>
  );
}

export default Messages;
