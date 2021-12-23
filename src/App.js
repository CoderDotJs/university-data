import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataProvider from './Pages/DataProvider';
import Details from './Pages/Details';
import Header from './Pages/Header';
import Universities from './Pages/Universities';

function App() {
  return (
    
    <div className="App">
      <DataProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index path="/" element={<Universities />} />
          <Route path="universities" element={<Universities />} />
          <Route path="universities/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
