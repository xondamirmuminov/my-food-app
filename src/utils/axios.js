import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/',
  timeout: 10000,
  timeoutErrorMessage: 'Connection is lost. Server not responded'
});


export default axios;