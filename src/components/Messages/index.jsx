import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/ducks/messagesReduser";
import CheckIcon from "@mui/icons-material/Check";
import SearchMessage from "./SearchMessage";
import IconProfile from "./IconProfile";
import { useParams } from "react-router-dom";

function Messages({ activeProfile, setActiveProfile }) {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector((state) => state.messages.loading);

  useEffect(() => {
    dispatch(loadMessages());
  }, []);

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
