import axios from 'axios';

const BASE_URL = 'http://localhost:3003/etapas';

const obtenerTodas = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

const crear = async (nuevaEtapa) => {
  const res = await axios.post(BASE_URL, nuevaEtapa);
  return res.data;
};

const actualizar = async (id, etapaActualizada) => {
  const res = await axios.put(`${BASE_URL}/${id}`, etapaActualizada);
  return res.data;
};

const eliminar = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};

export default {
  obtenerTodas,
  crear,
  actualizar,
  eliminar,
};
