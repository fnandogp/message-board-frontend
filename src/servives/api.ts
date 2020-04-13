import axios from 'axios';

export interface ValidationError {
  value: string;
  property: string;
  constraints: {
    [constraint: string]: string;
  };
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
