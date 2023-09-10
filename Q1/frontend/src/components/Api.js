import axios from 'axios';
import backendBaseUrl from '../APIFetch/apiconfig.js';

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMzU3NDUsImNvbXBhbnlOYW1lIjoiQWZmb3JkTWVkIiwiY2xpZW50SUQiOiJhMDlhMzNlZi1jODY4LTRiOTUtYjM5ZC05NDliMWQwOGQwZTIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiUjIxNDIyMDEyNzgifQ.7_v0NhB27hpGjcfLArmYxO3EOFLKYa8KwMflf5qJez0'; 

export function getAllTrains() {
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  return axios.get(`${backendBaseUrl}`, { headers });
}

export function getTrainByNumber(trainNumber) {
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  return axios.get(`${backendBaseUrl}${trainNumber}`, { headers });
}
