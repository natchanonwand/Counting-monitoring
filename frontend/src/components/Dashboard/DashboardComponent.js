import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Import necessary components
import './Dashboard.css';
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultsList } from "../SearchBar/SearchResultsList";
import LotDetails from "../SearchBar/LotDetails";

function DashboardComponent() {
  const [results, setResults] = useState([]);

  return (
    <div className='Dashboard'>
      <div className="Bar">
        <h1 className='centered-D'>Dashboard</h1>
        <div className="Searchbar">
          <SearchBar setResults={setResults} />
        </div>
      </div>
      <div className='List-bar'>
        <SearchResultsList results={results} />
        <Routes>
            <Route path="/Dashboard/LotDetails/:Lot_id" element={<LotDetails/>} />
        </Routes>

      </div>
    </div>
  );
}

export default DashboardComponent;
