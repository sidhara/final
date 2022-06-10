import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyApp from "./FinalFrontEnd/App"
import Login from "./components/login"

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<MyApp />} /> 
        </Routes>
      </div>
    </Router>
  );
}
