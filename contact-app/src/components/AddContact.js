import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact({ addContactHandler }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are mandatory!');
      return;
    }
    addContactHandler({ name, email });
    setName('');
    setEmail('');
    navigate('/');
  };
  return (
    <div className="ui main" style={{ marginTop: '70px' }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
