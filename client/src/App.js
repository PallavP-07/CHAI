import abi from './contracts/chai.json';
import { ethers } from 'ethers';
import { useState,useEffect } from 'react';
import './App.css';
import { Buy, Memo ,Quotes} from './Components/index';

function App() {
  const [state ,setState] =useState({
    provider:null,
    signer :null,
    contract: null,
  });

  useEffect(()=>{
    const connectWallet =async()=>{
      const contractAddresses = "0x73e9fc5907cf9ec93c88a0ed4e96cec639773bba";
      const contractABI =abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const account =await ethereum.request({method:"eth_requestAccounts",})
        }
const provider =new ethers.providers.Web3Provider(ethereum);
const signer =provider.getSigner();
const contract= new ethers.Contract(contractAddresses,contractABI,signer);
setState({provider,signer,contract})
      }catch(error){
        console.log(error);
      }
    };
    connectWallet();
  },[]);
  console.log(state);
  return (
    <>
      <div className="App">
        <h1 className='Header'> Buy Me Chai</h1>
        <div className='Main'>
          <Quotes/>
          <Buy state={state} />
        </div>
          <Memo state={state} />
      </div>

    </>
  );
}

export default App;
