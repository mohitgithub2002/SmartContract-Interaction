import React, { useState } from 'react';
import '../pages.css'
import CryptoJS from 'crypto-js';
import {contract} from '../connectContract';

function CreateId() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [result, setResult] = useState(true);  //for showing the form submission and print response
  

  async function handleSubmit(event) {
    event.preventDefault();
    var encryptedPassword = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
    // Send the name, email, and password to the contract
    const create = await contract.createID(email, encryptedPassword, name)
    const txreceipt = await create.wait();
    console.log(txreceipt);
    setResult(false);
  }

  return (
    <div className='field'>
      {result?
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className='input' >
            <label className='label'>
              Name:
            </label>
            <input
              type="text"
              placeholder='Full-Name'
              value={name}
              className='form-input'
              onChange={(event) => setName(event.target.value)}
            />
            </div>
            
            <div className='input' >
            <label className='label' >
              Email:
            </label>
              <input
                type="email"
                value={email}
                className='form-input'
                placeholder='Email '
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            
            <div className='input' >
            <label className='label'>
              Password:
            </label>
              <input
                type="password"
                value={password}
                className='form-input'
                placeholder='password'
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Sign up</button>
          </form>
        </div>
        :
        <div className='result-section'>
          <h1>{name} is registered with email: {email} </h1>
        </div>
      }
    </div>
  );
}

export default CreateId;
