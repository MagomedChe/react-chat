import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messagesReduser';
import { useParams } from 'react-router-dom';
import Message from './Message';
import ChatHeader from './Header/ChatHeader';
import WriteMessage from './WriteInput/WriteMessage';
import style from './style.module.css';

function Messages({ activeProfile, setActiveProfile }) {
  const contactId = useParams()._id;
  const loading = useSelector((state) => state.messages.loading);
  const myId = useSelector((state) => state.application.myId);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  //Поиск сообщения
  const [searchMessage, setSearchMessage] = useState('');
  const filteredMessage = messages.filter((message) => {
    return message.content.toLowerCase().includes(searchMessage.toLowerCase());
  });

  useEffect(() => {
    dispatch(loadMessages(myId, contactId));
  }, [dispatch, myId, contactId]);

  return (
    <div className={style.chat}>
      <ChatHeader
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        contactId={contactId}
        setSearchMessage={setSearchMessage}
      />
      <div>
        <div className={style.chat_content} id="lastMessages">
          {filteredMessage.map((message, index) => {
            return <Message message={message} myId={myId} key={message._id} />;
          })}
        </div>
        <div className={style.chat_write}>
          <WriteMessage />
        </div>
      </div>
    </div>
  );
}

export default Messages;
