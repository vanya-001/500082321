import axios from 'axios';

const api = axios.create({
  baseURL: 'http://20.244.56.144/train/trains',
});

export const getAllTrains = () => {
  return api.get('/trains');
};

export const getTrainById = (trainNumber) => {
  return api.get(`/trains/${trainNumber}`);
};

