import React, { useState } from 'react';
import { contract } from '../connectContract';
import '../pages.css'
import CryptoJS from 'crypto-js';
function ViewPassword() {

  const [ethereumAddress, setEthereumAddress] = useState(''); //for storing the ethereum address from input

  const [result, setResult] = useState(true);  //for showing the form submission and print result
  const [pswd, setPswd] = useState('null');    // for storing the password from contract
  
  const [error, setError] = useState(false);      //for storing the error message
  const [encrypted, setEncrypted] = useState(false); 
  const [encryptPassword, setEncryptPassword] = useState();
  
    async function handleSubmit(event) {
      
      event.preventDefault();
      try{
        
        // Send the Ethereum address to the contract
        const password = await contract.ViewPassword(ethereumAddress);
        setEncryptPassword(password);
        var decrypted = CryptoJS.AES.decrypt(password, "secret key 123");
        setPswd(decrypted.toString(CryptoJS.enc.Utf8));
        
        setResult(false)
        
      }catch(err){
        setResult(true);
        setError('you are not created this account');
        
      }
      
    }
    function encrypt(){
      
      setEncrypted(true);

    }

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
            {error}
          <br />
          </div>
          <button type="submit" className='form-btn' >Show Password</button>
          <button type="submit" className='form-btn' onClick={encrypt} >Show Encrypted Password</button>
        </form>
        </div>
      :
        //showing response from contract
        <div className='result-section'>
          <h1>your password is<br />{encrypted ? encryptPassword:pswd}</h1>
        </div>
      }  
    </div>
    
  );
}

export default ViewPassword;
