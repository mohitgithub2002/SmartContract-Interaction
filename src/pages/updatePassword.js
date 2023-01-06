import React, { useState } from 'react';
import { contract } from '../connectContract';
import '../pages.css';

function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [ethereumAddress, setEthereumAddress] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // Send the password and Ethereum address to the contract
    const update = await contract.updatePassword(password, ethereumAddress);
    const txreceipt = await update.wait();
    console.log(txreceipt);
  }

  return (
    <div className='field'>
    <form onSubmit={handleSubmit} className='form'>
      <label >
        Password:
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Ethereum address:
        <input
          type="text"
          placeholder='ethereum address'
          value={ethereumAddress}
          onChange={(event) => setEthereumAddress(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" className='form-btn'>Update Password</button>
    </form>
    </div>
  );
}

export default UpdatePassword;
