import { useEffect, useState } from 'react';
import { fetchResponsables, fetchAdministradores, fetchInvolucrados } from '../services/responsablesService';

export default function useResponsables() {
  const [responsables, setResponsables] = useState(null);
  const [administradores, setAdministradores] = useState(null);
  const [involucrados, setInvolucrados] = useState(null);

  const [responsablesOptions, setResponsablesOptions] = useState([]);
  const [administradoresOptions, setAdministradoresOptions] = useState([]);
  const [involucradosOptions, setInvolucradosOptions] = useState([]);

  useEffect(() => {
    fetchResponsables().then(setResponsablesOptions);
    fetchAdministradores().then(setAdministradoresOptions);
    fetchInvolucrados().then(setInvolucradosOptions);
  }, []);

  return {
    responsables, setResponsables,
    administradores, setAdministradores,
    involucrados, setInvolucrados,
    responsablesOptions,
    administradoresOptions,
    involucradosOptions,
    handleResponsableChange: setResponsables,
    handleAdministradorChange: setAdministradores,
    handleInvolucradosChange: setInvolucrados
  };
}
