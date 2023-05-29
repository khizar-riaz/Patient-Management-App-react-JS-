import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
//import LogInPage from "./pages/LogIn";
import Onboarding from "./pages/Onboarding";


function App() {
  return (
    <>
    <div className="App">
    <h1>hellojjjjjworld</h1>
    </div>
    <Router>
            <Routes>
              <Route exact path="/" element={<index />} />
              <Route path="/onboarding" element={<Onboarding />} />
              </Routes>
   </Router>


    </>
  );
}

export default App;
