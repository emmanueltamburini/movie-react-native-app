import axios from 'axios';
import {API_KEY, API_LANGUAGE} from '../constant/constant';
import {API_BASE_URL} from '../constant/path';

const movieDB = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: API_LANGUAGE,
  },
});

export default movieDB;
