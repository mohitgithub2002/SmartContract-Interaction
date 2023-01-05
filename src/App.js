import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import connectContract from './connectContract'
import { useNavigate, BrowserRouter as Router,
  Switch,
  Routes,Route,
  Link } from "react-router-dom";
import CreateId from './pages/createId';
import UpdatePassword from './pages/updatePassword';
import ViewPassword from './pages/viewPassword';

function App() {
  const [account, setAccount] = useState("0x0000000000000000000000000000000000000000");
  
  // page rendering
  const navigate = useNavigate();
  
  const createId = () => {
    navigate('/signup');
  }

  //connect to metamask
  const { ethereum } = window;
  const connectMetamask = async () => {
    if(window.ethereum !== undefined){
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setAccount(accounts[0]);
    }
  }

  //connect to contract
  
    connectContract();
  
  

  
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Test Smart Contract</h1>
        <h2>your address<br />{account}</h2>
        <div>
        <button onClick = {connectMetamask}>Connect to Metamask</button> <br />
        <button onClick={CreateId} >Create Id</button><br />
        <button >Update Password</button><br />
        <button >View Password</button><br />
        
        </div>
      </header>
    </div>
  );
}



export default App;
