import React, { useState } from 'react';
import './SearchFlights.css'; // Import custom CSS for styling

const cities = [
  { name: 'New York City', code: 'JFK' },
  { name: 'Los Angeles', code: 'LAX' },
  { name: 'London', code: 'LHR' },
  { name: 'Tokyo', code: 'NRT' },
  { name: 'Sydney', code: 'SYD' }
];

const SearchFlights = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [budget, setBudget] = useState('');
  const [numberOfNights, setNumberOfNights] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (budget < 0 || budget > 10000) {
      setError('Budget must be between $0 and $10,000');
      return;
    }

    if (numberOfNights < 0 || numberOfNights > 10) {
      setError('Number of nights must be between 0 and 10');
      return;
    }

    if (!origin || !budget || !numberOfNights) {
      setError('Please fill in all fields');
      return;
    }

    setError(''); // Clear any previous errors
    onSearch({ origin, budget, numberOfNights });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Origin:
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name} ({city.code})
            </option>
          ))}
        </select>
      </label>
      <label>
        Budget ($):
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          min="0"
          max="10000"
        />
      </label>
      <label>
        Number of Nights:
        <input
          type="number"
          value={numberOfNights}
          onChange={(e) => setNumberOfNights(e.target.value)}
          min="0"
          max="10"
        />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={!origin || !budget || !numberOfNights}>
        Search
      </button>
    </form>
  );
};

export default SearchFlights;
