import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App;