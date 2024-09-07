import React from 'react';

const FlightItem = ({ result }) => {
 
  // Randomizing flight number for demo purposes
  const flightNumber = Math.floor(Math.random() * 100) + 1000;

  return (
    <div className="result-item container my-3 p-3 border rounded">
      <div className="row">
        {/* Left side: Flight details */}
        <div className="col-md-5">
          <h5>Flight Details</h5>
          <hr/>
          {/* Outbound Flight */}
          <div className="flight-detail">
            <p><strong>{result.outboundFlight.from} ({result.origin_name}) → {result.outboundFlight.to} ({result.destination_name})</strong></p>
            <p>{result.outboundFlight.departure_time} - {result.outboundFlight.arrival_time}</p>
            <p>Flight {flightNumber} | {result.outboundFlight.stops.length > 0 ? `${result.outboundFlight.stops.length} stop(s)` : 'Non-stop'}</p>
          </div>

          {/* Return Flight */}
          <div className="flight-detail mt-3">
            <p><strong>{result.returnFlight.from} ({result.destination_name}) → {result.returnFlight.to} ({result.origin_name})</strong></p>
            <p>{result.returnFlight.departure_time} - {result.returnFlight.arrival_time}</p>
            <p>Flight {flightNumber + 1} | {result.returnFlight.stops.length > 0 ? `${result.returnFlight.stops.length} stop(s)` : 'Non-stop'}</p>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="col-md-1 text-center">
          <div className="vertical-line"></div>
        </div>

        {/* Right side: Hotel details */}
        <div className="col-md-6 text-right">
          <h5>Hotel Details</h5>
          <hr/>
          <div className="hotel-detail">
            <p><strong>{result.hotel.name}</strong></p>
            <p>{result.hotel.stars}/5 stars | Rating: {result.hotel.rating}</p>
            <p>Price per night: ${result.hotel.price_per_night}</p>
          </div>
          <div className="budget-info mt-3">
            <hr/>
            <p><strong>Total Cost: ${result.totalBudgetUsed}</strong></p>
            <p>Remaining Budget: ${result.remainingBudget}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;
