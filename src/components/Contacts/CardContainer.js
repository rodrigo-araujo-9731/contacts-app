import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';

function CardContainer() {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    axios.get(`https://randomuser.me/api`).then((res) => {
      console.log(res.data.results);
      setContacts(res.data.results);
    });
  }, [showContacts]);

  return (
    <div>
      <button
        onClick={() => {
          setShowContacts(!showContacts);
        }}
      >
        Show Contacts
      </button>
      {showContacts &&
        contacts.map((contacts, index) => {
          return (
            <ContactCard
              key={index}
              avatarUrl={contacts.picture.large}
              firstName={contacts.name.first}
              lastName={contacts.name.last}
              email={contacts.email}
              age={contacts.dob.age}
            />
          );
        })}
    </div>
  );
}

export default CardContainer;
