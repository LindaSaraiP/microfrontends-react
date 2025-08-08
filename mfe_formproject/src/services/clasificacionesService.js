import axios from 'axios';

const BASE_URL = 'http://localhost:3003/clasificaciones';

export const getClasificaciones = () => axios.get(BASE_URL);
