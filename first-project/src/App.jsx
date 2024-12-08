
import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  
  // const [value, setvalue] = useState(0)
  // let count=0;
  // function increase(){
  //   setvalue(value+1)
  // }
  // function addValue(){
  //   count =count+1;
  //   console.log(count);

  // }

  return (
    <>
     <Navbar/>
     <Card/>
    </>
  )
}

export default App
