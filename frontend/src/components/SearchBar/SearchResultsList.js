import React from "react";
import { SearchResult } from './SearchResult'; // Use named import, not default import
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
    // Create an object to store unique Lot_id values as keys
    const uniqueResults = results.reduce((accumulator, result) => {
      if (!accumulator[result.Lot_id]) {
        accumulator[result.Lot_id] = true;
        accumulator.uniqueResults.push(result);
      }
      return accumulator;
    }, { uniqueResults: [] });
  
    return (
      <div className="results-list">
        {uniqueResults.uniqueResults.map((result, id) => (
          <SearchResult result={result} key={id} />
        ))}
      </div>
    );
};
