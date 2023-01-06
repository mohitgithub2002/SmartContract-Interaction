import React, { useState } from 'react';
import '../pages.css'
import { ethers } from 'ethers';

import {contract} from '../connectContract';

function CreateId() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();

    // Send the name, email, and password to the contract
    const create = await contract.createID(email, password, name)
    const txreceipt = await create.wait();
    console.log(txreceipt);

  }

  return (
    <div className='field'>
    <form onSubmit={handleSubmit} className="form">
      <label>
        Name:
        <input
          type="text"
          placeholder='Full-Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label >
        Email:
        <input
          type="email"
          value={email}
          placeholder='Email '
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" className='form-btn'>Sign up</button>
    </form>
    </div>
  );
}

export default CreateId;
