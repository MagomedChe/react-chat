import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import SearchContact from './SearchContact';
import { loadContacts } from '../../redux/ducks/contactsReducer';
import { loadMyId } from '../../redux/ducks/applicationReduser';

function Contacts(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const contacts = useSelector((state) => state.contacts.contacts);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadMyId());
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="search-contact">
        <SearchContact />
      </div>
      <div className="contacts">
        {loading ? (
          <div>Идет загрузка ...</div>
        ) : (
          <div>
            {contacts.map((contact) => {
              return <Contact contact={contact} key={contact._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts;
