import React, {useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [first, setfirst] = useState('GOOD MORNING !')

    let x = async () => {
     await axios.get('https://api.adviceslip.com/advice')
      .then((res)=>{
        setfirst(res.data.slip.advice)
      })
      .catch((err)=>{
        console.log('error : ', err.message)       
      })
    }   


  return (
    <div className='main'>
    <h2 className='heading'>RANDOM QUOTE GENERATOR</h2>
    <div className='quote'>{first}</div>      
    <button className='button' onClick={x}>Click</button>
    </div>
  )
}

export default App