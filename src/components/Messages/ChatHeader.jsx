import React from 'react';
import SearchMessage from './SearchMessage';
import IconProfile from './IconProfile';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';

function ChatHeader({ activeProfile, setActiveProfile, contactId }) {
  const loading = useSelector((state) => state.messages.loading);
  const contacts = useSelector((state) => state.contacts.contacts).find(
    (contact) => contact._id === contactId,
  );


  return (
    <div className="chat-header">
      <SearchMessage />
      {loading ? (
        <div>
          <Preloader size="5" />
        </div>
      ) : (
        <div className="chat-name">{contacts?.fullname}</div>
      )}
      <div
        className="iconProfile"
        onClick={() => setActiveProfile(!activeProfile)}
      >
        <IconProfile />
      </div>
    </div>
  );
}

export default ChatHeader;
