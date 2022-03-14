
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert=(type, massage)=>{
    setAlert({
    type: type,
    msg: massage
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#cbcfd4';
      document.body.style.Color="black";   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#c4fffc';   
      document.body.style.Color="white";   
    }
  }
  return (
    <>
    <Alert alert={alert}/>
    <Navbar tittle="Text Tutiles" mode={mode} toggleMode={toggleMode}/>
    <div className="container bg-yellow my-3">
      <TextForm showAlert={showAlert} heading="Enter your text in Below Form"mode={mode}/>
      </div>
      
    </>

  );
}

export default App;
