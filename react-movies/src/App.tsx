import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [myDate, myDateupdate]= useState(new Date());

  useEffect(()=> {
    const intid= setInterval(() => {
      myDateupdate(new Date());
    },1000);
    return () => clearInterval(intid);
  });
  return (
    <div>
      <h3>Eg React</h3>
      <input />
      <div> {myDate.toString()} </div>
    </div>
  );
}

export default App;
