import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import SearchContact from './SearchContact';
import { loadContacts } from '../../redux/ducks/contactsReducer';
import { loadMyId } from '../../redux/ducks/applicationReduser';
import Preloader from './Preloader';
function Contacts(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const contacts = useSelector((state) => state.contacts.contacts);
  //Поиск контактов
  const [searchContact, setSearchContact] = useState('');
  const filteredContacts = contacts.filter((contact) => {
    return contact.fullname.toLowerCase().includes(searchContact.toLowerCase());
  });

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return loading ? (
    <Preloader />
  ) : (
    <div className="sidebar">
      <div className="search-contact">
        <SearchContact setSearchContact={setSearchContact} />
      </div>
      <div className="contacts">
        <div>
          {filteredContacts.map((contact) => {
            return <Contact contact={contact} key={contact._id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
