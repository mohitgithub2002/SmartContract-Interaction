import React, { useState } from 'react';
import { contract } from '../connectContract';
import '../pages.css'
function ViewPassword() {

  const [ethereumAddress, setEthereumAddress] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // Send the Ethereum address to the contract
    const password = contract.ViewPassword(ethereumAddress);
    
    console.log(password);
  }

  return (
    <div className='field'>
    <form onSubmit={handleSubmit} className="form">
      <label>
        Ethereum address:
        <input
          type="text"
          placeholder='Ethereum Address'
          value={ethereumAddress}
          onChange={(event) => setEthereumAddress(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Show Password</button>
    </form>
    </div>
  );
}

export default ViewPassword;
