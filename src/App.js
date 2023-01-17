import './App.css';
import { useState } from 'react';
import connectContract from './connectContract'

import Routes from './Routes';

function App() {
  const [account, setAccount] = useState(false);
  
  // page rendering
  
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
        <h1>Smart Contract</h1>
        <p>{account}</p>
        <button onClick = {connectMetamask}  >{account? "Connected":"Connect to Metamask" }</button> <br />
      </header>
      <div className = "content">
        <div >
          <Routes />
        </div>
      </div>
    </div>
  );
}



export default App;
