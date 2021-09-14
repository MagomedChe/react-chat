import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadMessages} from "../../redux/ducks/messagesReduser";

function Messages(props) {
  const messages = useSelector(state => state.messages.messages)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMessages());
  }, []);
  return (
    <div>
      <div>messages</div>
      <div>
          Привет
      </div>
        <div>
            Привет
        </div>
        <div>
        Привет
    </div>
    </div>
  );
}

export default Messages;
