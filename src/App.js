import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ContactCard from './components/ContactCard';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://randomuser.me/api`).then((res) => {
        console.log(res.data.results);
        setContacts(res.data.results);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      {contacts.length > 0 &&
        contacts.map((contacts, index) => {
          return (
            <ContactCard
              key={index}
              avatarUrl={contacts.picture.large }
              name={contacts.name.first}
              email={contacts.email}
              age={contacts.dob.age}
            />
          );
        })}
    </div>
  );
}

export default App;
