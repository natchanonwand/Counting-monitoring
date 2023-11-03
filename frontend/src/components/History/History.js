import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Route, Routes } from 'react-router-dom'; // Import necessary components
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultsList } from "../SearchBar/SearchResultsList";
import LotDetails from "../SearchBar/LotDetails";
import './History.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

const History=()=> {
    const [results, setResults] = useState([]);
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState({
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
    });
    const handleChange =(ranges)=>{
        setDate(ranges.selection)
    }
    const handleClick =()=>{ setOpenDate((prev)=>!prev) }

    return (
    <div className='History'>
      <div className="Bar">
        <h1 className='centered-H'>History</h1>
        <div className="container">
            <button onClick={handleClick} className="calendar">
                <EditCalendarIcon className='icon'/>
                <span className="date-range-text">
                {
                    `${format(date.startDate, 'dd/MMM/yyyy')} - ${format(date.endDate, 'dd/MMM/yyyy')} `
                }
                </span>
            </button>
            { openDate && <DateRangePicker className='dateRange'  //openDate true then return the span
                ranges={[date]}
                onChange={handleChange}
                maxDate={new Date()}
            />}
        </div>
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
export default History;