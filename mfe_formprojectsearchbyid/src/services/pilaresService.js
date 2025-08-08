import axios from 'axios';

const BASE_URL = 'http://localhost:3003/pilares';

export const getPilares = () => axios.get(BASE_URL);
