import axios from 'axios'
import { BASE_URL,TIMEOUT } from './Util';

const fetchProducts = () => {
  return axios.get(`${BASE_URL}`);
}



export default fetchProducts;