import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Pages/Cards';
import Header from './Pages/Header';
import Universities from './Pages/Universities';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
        <Routes>
          <Route index path="/" element={<h1> This is home page</h1>} />
          <Route path="universities" element={<Universities />} >
            <Route path=":universitiesId" element={<Cards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
