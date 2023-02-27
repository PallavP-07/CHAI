import { ethers } from 'ethers';
import React from 'react'
import '../App.css';

function Buy({ state }) {

  const buyChai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = { value: ethers.utils.parseEther("0.001") }
    const transcations = await contract.buyChai(name, message, amount);
    await transcations.wait();
    console.log("transcation done");


  }
  return (
    <>
      <div>

        <form onSubmit={buyChai}>
          <input type="text" className='field' id="name" placeholder='Enter your name' />
          <input type="text" className='field' id="message" placeholder='Enter your Message' />
          <button >Pay</button>

        </form>
      </div>


    </>
  )
}

export default Buy