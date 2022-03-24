import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import SearchContact from './SearchContact';
import { loadContacts } from '../../redux/ducks/contactsReducer';
import Preloader from './Preloader';
import style from './style.module.css';

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
    <div className={style.sidebar}>
      <div className={style.search_contact}>
        <SearchContact setSearchContact={setSearchContact} />
      </div>
      <div className={style.contacts}>
        {filteredContacts.map((contact) => {
          return <Contact contact={contact} key={contact._id} />;
        })}
      </div>
    </div>
  );
}

export default Contacts;
