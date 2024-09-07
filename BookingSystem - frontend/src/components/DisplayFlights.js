import React from 'react';
import FlightItem from './FlightItem';
import './DisplayFlights.css'; // Import custom CSS for styling

const DisplayFlights = ({ results, onLoadMore }) => {

  if (results.length === 0) {
    return (
      <div className="no-results">
        <p>There are no destinations available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="display-flights">
      {results.map((result, index) => (
        <FlightItem key={index} result={result} />
      ))}
      {results.length > 0 && (
        <button className="load-more-btn" onClick={onLoadMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default DisplayFlights;
