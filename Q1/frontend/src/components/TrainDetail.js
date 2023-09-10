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
    <div>
      <h1>Train Details</h1>
      <p>Train Name: {train.trainName}</p>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours} {train.departureTime.Minutes} {train.departureTime.Seconds}</p>
      <p>Seats Available Sleeper: {train.seatsAvailable.Sleeper}</p>
      <p>Seats Available AC: {train.seatsAvailable.AC}</p>
      <p>Price Sleeper: {train.price.Sleeper}</p>
      <p>Price AC: {train.price.AC}</p>    
      <p>Delayed By: {train.delayedBy}</p> 
    </div>
  );
}

export default TrainDetail;
