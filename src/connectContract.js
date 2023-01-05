import { ethers } from 'ethers';

const connectContract = async () => {
    const Address = "0x501751c2Ae11a233455c182b0Ee86Ad7621AaFA6"
    const Abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "Owner",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "ViewPassword",
        "outputs": [
          {
            "internalType": "string",
            "name": "_password",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_password",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_fullname",
            "type": "string"
          }
        ],
        "name": "createID",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_password",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "updatePassword",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userPublicInfo",
        "outputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "fullname",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, Abi, signer);
    console.log(contract.address);
}
export default connectContract;