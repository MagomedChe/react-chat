import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/ducks/messagesReduser";
import CheckIcon from "@mui/icons-material/Check";
import SearchMessage from "./SearchMessage";
import IconProfile from "./IconProfile";
import {loadMyId} from "../../redux/ducks/applicationReduser";
import {useParams} from "react-router-dom";
import Message from "./Message";

function Messages({ activeProfile, setActiveProfile }) {
  const contactId = useParams()._id;
  const myId = useSelector(state => state.application.myId);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.messages.loading);
  const send = messages.filter(item => item.toUserId !== myId)

  useEffect(() => {
    dispatch(loadMyId());
    dispatch(loadMessages(myId, contactId));
  }, [dispatch, myId, contactId]);

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
            {send.map((message) => {
              return <Message message={message} myId={myId} key={message._id}/>;
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
