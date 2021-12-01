import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import SearchContact from "./SearchContact";
import {loadContacts} from "../../redux/ducks/contactsReducer";

function Contacts(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const loading = useSelector((state) => state.contacts.loading);
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div className="container">
      <div className="search-contact">
       <SearchContact/>
      </div>
      <div className="contacts">
        {loading ? (
          <div>Идет загрузка ...</div>
        ) : (
          <div>
            {contacts.map((contact) => {
              return <Contact contact={contact} key={contact._id}/>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts;
