import React, { useState } from 'react';
import '../App.css'
import { ethers } from 'ethers';

import connectContract from '../connectContract';

function CreateId() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();

    // Send the name, email, and password to the server
    const Contract = connectContract.contract;
    const create = await Contract.createID(email, password, name)
    console.log(create);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default CreateId;
