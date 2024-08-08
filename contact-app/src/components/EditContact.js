import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function EditContact({ updateContactHandler }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const contact = location.state?.contact || {};
  const [name, setName] = useState(contact.name || '');
  const [email, setEmail] = useState(contact.email || '');

  useEffect(() => {
    if (contact) {
      setName(contact.Name);
      setEmail(contact.email);
    }
  }, [contact]);

  const update = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are mandatory!');
      return;
    }
    updateContactHandler({ id, name, email });
    navigate('/');
  };
  return (
    <div className="ui main" style={{ marginTop: '70px' }}>
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
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

        <button className="ui button blue">update</button>
      </form>
    </div>
  );
}

export default EditContact;
