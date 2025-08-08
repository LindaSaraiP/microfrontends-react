import axios from 'axios';

const BASE_URL = 'http://localhost:3003/objetivos';

export const getObjetivos = () => axios.get(BASE_URL);
