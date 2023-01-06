import React, { useState } from 'react';
import { contract } from '../connectContract';
import '../pages.css'
function ViewPassword() {

  const [ethereumAddress, setEthereumAddress] = useState(''); //for storing the ethereum address from input

  const [result, setResult] = useState(true);  //for showing the form submission and print result
  const [pswd, setPswd] = useState('null');    // for storing the password from contract
  
  async function handleSubmit(event) {
    
    event.preventDefault();

    // Send the Ethereum address to the contract
    const password = await contract.ViewPassword(ethereumAddress);
    setPswd(password);

    //setting result to false to show the response
    setResult(false);
  }

  console.log(pswd);
  return (
    <div className='field'>
      {result?
        //form for taking input
        <div className='form-section'>
        <form onSubmit={handleSubmit} className="form">
          <div className='input' >
          <label className='label' >
            Ethereum address:
          </label>
            <input
              type="text"
              placeholder='Ethereum Address'
              value={ethereumAddress}
              className='form-input'
              onChange={(event) => setEthereumAddress(event.target.value)}
            />
          <br />
          </div>
          <button type="submit" className='form-btn' >Show Password</button>
        </form>
        </div>
      :
        //showing response from contract
        <div className='result-section'>
          <h1>your password is {pswd}</h1>
        </div>
      }  
    </div>
    
  );
}

export default ViewPassword;
