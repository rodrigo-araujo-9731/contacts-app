import React, { useState } from 'react';

function ContactCard(props) {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className='contact-card'>
      <img src={props.avatarUrl} alt='profile-pic' />
      <div className='user-details'>
        <p>
          Name: {props.firstName} {props.lastName}
        </p>
        <p>Email: {props.email}</p>
        <button
          onClick={() => {
            setShowAge(!showAge);
          }}
        >
          Age ?
        </button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
}

export default ContactCard;
