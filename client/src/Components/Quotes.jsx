import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';
 
function Quotes() {
  const [quote,setQuote]=useState("");
  const [auther, setAuther]=useState("");


  const handleClick = async()=>{
    const res = await axios.get("https://api.quotable.io/random");
    setQuote(res.data.content); 
    setAuther(res.data.author)
  }
  return (
    <>
    <div className='Container'>
      <div className='content'>
        <h1>"{quote}"</h1>
        <p>{auther}</p>
      </div>
      <div>
      <button className='btn' onClick={handleClick} >New</button>
      </div>
    </div> 
    
     
    </>
  )
}

export default Quotes