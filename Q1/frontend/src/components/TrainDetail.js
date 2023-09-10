import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainByNumber } from './Api';

function TrainDetail() {
  const { id } = useParams();
  const [train, setTrain] = useState({});

  useEffect(() => {
    getTrainByNumber(id)
      .then((response) => setTrain(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">Train Details</h1>
      <p className="mb-2">Train Name: {train.trainName}</p>
      <p className="mb-2">Train Number: {train.trainNumber}</p>
      <p className="mb-2">Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}:{train.departureTime.Seconds}</p>
      <p className="mb-2">Seats Available Sleeper: {train.seatsAvailable.Sleeper}</p>
      <p className="mb-2">Seats Available AC: {train.seatsAvailable.AC}</p>
      <p className="mb-2">Price Sleeper: {train.price.Sleeper}</p>
      <p className="mb-2">Price AC: {train.price.AC}</p>
      <p className="mb-2">Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
}

export default TrainDetail;
