import React, { useState } from 'react';
import SearchFlights from '../components/SearchFlights';
import DisplayFlights from '../components/DisplayFlights';
import { searchTrips } from '../services/api';
import './BookingPage.css';

const BookingPage = () => {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState('');

  const handleSearch = async (searchParams) => {
    const data = await searchTrips(searchParams);
    setResults(data);
    setFilteredResults(data);
    setPage(0);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    let filtered = results;

    if (selectedFilter === 'non-stop') {
      filtered = results.filter(
        (result) =>
          result.outboundFlight.stops.length === 0 &&
          result.returnFlight.stops.length === 0
      );
    } else if (selectedFilter === 'hotel-rating') {
      filtered = [...results].sort((a, b) => b.hotel.rating - a.hotel.rating);
    }

    setFilteredResults(filtered);
    setPage(0);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="booking-page">
      <div className="header">
        <h1>JourneyGenie</h1>
      </div>
      <SearchFlights onSearch={handleSearch} />

      {results.length > 0 && (
        <div className="filters">
          <label>
            Filter by:
            <select value={filter} onChange={handleFilterChange}>
              <option value="">All Flights</option>
              <option value="non-stop">Non-stop Only</option>
              <option value="hotel-rating">Best Hotels First</option>
            </select>
          </label>
        </div>
      )}

      <DisplayFlights
        results={filteredResults.slice(page * 10, (page + 1) * 10)}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default BookingPage;
