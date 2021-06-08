import axios from 'axios';

const {REACT_APP_BASE_URL} = process.env;

const BASE_URL = REACT_APP_BASE_URL;
export const Axios = axios.create({baseURL: BASE_URL});

Axios.interceptors.request.use(
  function (config) {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      admin: 'admin@outopia',
    };
    // config.headers = { Authorization: `Bearer ${accessToken}`};
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
