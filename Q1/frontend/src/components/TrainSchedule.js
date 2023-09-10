import React, {usestate, useEffect} from 'react';
import axios from 'axios';

const TrainSchedule = () => {
    const [trains, setTrains] = usestate([]);

    useEffect(() => {
        axios.get('http://20.244.56.144/train/trains')
        .then(response =>{
            setTrains(response.data);
        })
        .catch(error => {
            console.log('Error Found' , error);
        })
    }, []);

    return(
        <div>
            <h1>Train Schedule</h1>
            <table>
                <thead>
                    <tr>
                        <th>Train Name</th>
                        <th>Train Number</th>
                        <th>Departure Time</th>
                        <th>Seat Available</th>
                        <th>Sleeper</th>
                        <th>AC</th>
                        <th>Price</th>
                        <th>Sleeper</th>
                        <th>AC</th>
                        <th>Delay By</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map(train =>(
                        <tr key ={train.trainNumber}>
                            <td>{train.trainName}</td>
                            <td>{train.trainNumber}</td>
                            <td>{`${train.departureTime.Hours}: ${train.departureTime.Minutes}: ${train.departureTime.Seconds}`}</td>
                            <td>{train.seatsAvailable.sleeper}</td>
                            <td>{train.seatsAvailable.AC}</td>
                            <td>{train.price.sleeper}</td>
                            <td>{train.price.AC}</td>
                            <td>{train.delayedBy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TrainSchedule