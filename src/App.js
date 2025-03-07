
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add("dark-mode"); // Use CSS class for styling
      showAlert("Dark mode has been applied", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.classList.remove("dark-mode");
      showAlert("Light mode has been set", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;

