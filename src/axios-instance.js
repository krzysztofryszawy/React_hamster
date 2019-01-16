import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-hamster-1547649130524.firebaseio.com/'
});

export default instance;
