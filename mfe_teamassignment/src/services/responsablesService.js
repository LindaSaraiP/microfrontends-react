export const fetchAdministradores = async () => {
  const response = await fetch('http://localhost:3003/administradores');
  return await response.json();
};

export const fetchInvolucrados = async () => {
  const response = await fetch('http://localhost:3003/involucrados');
  return await response.json();
};

export const fetchResponsables = async () => {
  const response = await fetch('http://localhost:3003/responsables');
  return await response.json();
};
