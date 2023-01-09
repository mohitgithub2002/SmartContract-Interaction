import React, { useState } from 'react';
import { contract } from '../connectContract';
import '../pages.css';
import CryptoJS from 'crypto-js';


function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [ethereumAddress, setEthereumAddress] = useState('');

  const [result, setResult] = useState(true);  //for showing the form submission and print result

  const [error, setError] = useState(); //for storiing the error

  


  async function handleSubmit(event) {
    
    event.preventDefault();
    try{
      
      var encryptedPassword = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
      
      //Send the password and Ethereum address to the contract
      const update = await contract.updatePassword(encryptedPassword, ethereumAddress);
      const txreceipt = await update.wait();
      console.log(txreceipt);
      console.log(encryptedPassword);
      setResult(false);

    }catch(err){
      setResult(true);
      setError('You have not created this account') //set the error
    }
  }
  
  

  return (
    <div className='field'>
      {result ? 
      <div >
      <form onSubmit={handleSubmit} className='form'>
        <div className='input' >
        <label className='label' >
          Password:
        </label>
          <input
            type="password"
            className='form-input'
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className='input' >
        <label className='label'>
          Ethereum address:
        </label>
          <input
            type="text"
            className='form-input'
            placeholder='ethereum address'
            value={ethereumAddress}
            onChange={(event) => setEthereumAddress(event.target.value)}
          />
        </div>
        {error}
        <button type="submit" className='form-btn'>Update Password</button>
      </form>
      </div>
      :
      <div className='result-section'>
      <h1>Your Password is Updated</h1>
      </div>
  }
    </div>
  );
}

export default UpdatePassword;
