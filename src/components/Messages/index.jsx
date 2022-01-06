import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messagesReduser';
import { useParams } from 'react-router-dom';
import Message from './Message';
import ChatHeader from './Header/ChatHeader';
import WriteMessage from './WriteInput/WriteMessage';

function Messages({ activeProfile, setActiveProfile }) {
  const contactId = useParams()._id;
  const loading = useSelector((state) => state.messages.loading);
  const myId = useSelector((state) => state.application.myId);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadMessages(myId, contactId));
  }, [dispatch, myId, contactId]);

  return (
    <div className="chat">
      <ChatHeader
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        contactId={contactId}
      />
      {loading ? (
        <div className="preloader">Загрузка сообщений ...</div>
      ) : (
        <div>
          <div className="chat-content" id='lastMessages'>
            {messages.map((message) => {
              return (
                <Message message={message} myId={myId} key={message._id} />
              );
            })}
          </div>
          <div className="chat-write">
            <WriteMessage />
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
