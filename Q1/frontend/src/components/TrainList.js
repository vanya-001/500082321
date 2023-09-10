import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllTrains } from "./Api";

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllTrains()
      .then((response) => {
        console.log(response.data);
        setTrains(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">All Trains</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <ul>
          {Array.isArray(trains) && trains.length > 0 ? (
            trains.map((train) => (
              <li key={train.trainNumber} className="mb-2">
                <Link
                  to={`/train/${train.trainNumber}`}
                  className="text-blue-500 hover:underline"
                >
                  {train.trainName}
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No train data available.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default TrainList;
