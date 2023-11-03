import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import "./LotDetails.css";

const LotDetails = () => {
  const { Lot_id } = useParams(); // Access the Lot_id from the route parameter

  const [selectedMachineData, setSelectedMachineData] = useState(null);

  useEffect(() => {
    // Fetch data for the selected Lot_id
    fetch(`http://172.29.192.1:5000/api/countrecords_counttray/${Lot_id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMachineData(data); // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [Lot_id]);

  return (
    <div className="lot-details">
      {selectedMachineData && (
        <div className="machine-details">
          <h2>Title: Machine {selectedMachineData.Machine_ID}</h2>
          <div>
            <p>Direction: {selectedMachineData.Direction}</p>
            <p>Timestamp: {selectedMachineData.Timestamp}</p>
            <p>Substrate: {selectedMachineData.Substrate}</p>
            <p>TTL: {selectedMachineData.TTL}</p>
            <p>Badmark: {selectedMachineData.badmark}</p>
            <p>ASSY Input: {selectedMachineData.ASSY_input}</p>
            <p>NG: {selectedMachineData.NG}</p>
            <p>Good: {selectedMachineData.Good}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LotDetails;
