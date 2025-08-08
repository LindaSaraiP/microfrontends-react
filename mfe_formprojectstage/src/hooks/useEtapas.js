import { useEffect, useState } from 'react';
import etapasService from '../services/etapasService';

export default function useEtapas() {
  const [etapas, setEtapas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerEtapas = async () => {
    try {
      setLoading(true);
      const data = await etapasService.obtenerTodas();
      setEtapas(data);
    } catch (err) {
      console.error('Error al obtener etapas:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const agregarOActualizar = async (etapa) => {
    try {
      if (etapa.id) {
        await etapasService.actualizar(etapa.id, etapa);
      } else {
        await etapasService.crear(etapa);
      }
      await obtenerEtapas();
    } catch (err) {
      console.error('Error al agregar/actualizar etapa:', err);
      setError(err);
    }
  };

  const eliminarEtapa = async (id) => {
    try {
      await etapasService.eliminar(id);
      await obtenerEtapas();
    } catch (err) {
      console.error('Error al eliminar etapa:', err);
      setError(err);
    }
  };

  useEffect(() => {
    obtenerEtapas();
  }, []);

  return {
    etapas,
    loading,
    error,
    obtenerEtapas,
    agregarOActualizar,
    eliminarEtapa,
  };
}
