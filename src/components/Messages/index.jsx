import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/ducks/messagesReduser";

function Messages(props) {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMessages());
  }, []);

  return (
    <div className="messages">
      <div className="name">Имя автора</div>
        <div className="messages">
            <div className="message">Привет</div>
            <div className="message">Привет, йопта</div>
            <div className="message">Лоремш ипсумш ыдфлвоар ываоывра
            ыывфа ыва ыва ывавыарарррв ловыадлва
            </div>
        </div>
    </div>
  );
}

export default Messages;
