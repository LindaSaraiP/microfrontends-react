import axios from 'axios';

const BASE_URL = 'http://localhost:3003/proyectos';

export const getProyectoById = (id) => axios.get(`${BASE_URL}/${id}`);
export const getAllProyectos = () => axios.get(BASE_URL);
export const createProyecto = (data) => axios.post(BASE_URL, data);
export const updateProyecto = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteProyecto = (id) => axios.delete(`${BASE_URL}/${id}`);
