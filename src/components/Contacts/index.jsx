import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "../../redux/ducks/contactsReducer";
import Contact from "./Contact";
import SearchContact from "./SearchContact";

function Contacts(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContacts());
  }, []);
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
              return <Contact contact={contact} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts;
