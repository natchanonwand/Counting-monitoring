import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"

  
    // Build your API URL with the searchText
    // const apiUrl = `http://127.0.0.1:5000/api/operations/${searchText}`;
  
    
function App(){
  return (
    <div className="App">
      <Sidebar/>
    </div>
  );
};

export default App;
