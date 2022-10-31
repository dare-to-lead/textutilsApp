import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import "./App.css";
// import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import React from 'react';
// import { BrowserRouter as Router, 
//   Routes, 
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({msg: message,type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010231";
      showAlert("Dark mode has been enabled", "success");
      document.title= "TextUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title= "TextUtils LightMode";
    }
  };

  return (
    <div>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my 3">
      {/* <Routes>
          <Route path="/about" exact element={<About />}/> */}
          <TextForm showAlert={showAlert} heading="Type the text" mode={mode} />
          {/* <Route/>
      </Routes> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
