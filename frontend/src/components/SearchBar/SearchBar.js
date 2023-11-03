import { FaSearch } from "react-icons/fa";
import { useState } from 'react'
import './SearchBar.css'

export const SearchBar=({ setResults })=> {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("http://172.29.192.1:5000/api/countrecords_counttray")
        .then((response) => response.json())
        .then((json) =>{
            const results = json.filter((Count) => {
                return value && Count && Count.Lot_id && Count.Lot_id.toLowerCase().includes(value)
            });
            setResults(results);
            
        })
    }
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder='Type to search Lot no.' 
            value={input} 
            onChange={(e)=> handleChange(e.target.value)}/>
        </div>
    );
};



