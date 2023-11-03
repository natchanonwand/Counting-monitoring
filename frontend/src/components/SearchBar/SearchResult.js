import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SearchResult.css";
import LotDetails from "./LotDetails";

export const SearchResult = ({ result }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [lotData, setLotData] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleResultClick = () => {
    // Fetch data for the selected Lot_id when clicked
    fetch(`http://172.29.192.1:5000/api/countrecords_counttray/${result.Lot_id}`)
      .then((response) => response.json())
      .then((data) => {
        setLotData(data); // Set the fetched data in state
        setShowDetails(true);
        navigate(`/Dashboard/LotDetails/${result.Lot_id}`); // Use navigate to change the route
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="search-result">
      <div onClick={handleResultClick}>{result.Lot_id}</div>
      {showDetails && <LotDetails lotData={lotData} />}
    </div>
  );
};
