//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import * as React from "react";
//import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     }, 2000);
  }
  
 const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#2b2547'
    showAlert("dark mode has been applied","success")
    document.title='textutils-darkMode';
    }
    else{
      setMode('light');
       document.body.style.backgroundColor='white'
       showAlert("Light mode has been set","success")
    }
  }
  return (
    <>
   {/* <Router> */}
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container">
  {/* <Routes>
  <Route path="/about" element={<About />} /> */}
  {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}

  {/* </Routes> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
  


</div>
{/* </Router> */}
    </>
  );
}

export default App;
