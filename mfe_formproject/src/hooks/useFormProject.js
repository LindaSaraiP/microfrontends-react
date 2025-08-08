
import { useState, useEffect } from 'react';
import { getObjetivos } from '../services/objetivosService';
import { createProyecto } from '../services/proyectosService';

export function useFormProject() {
  const [proyecto, setProyecto] = useState(getProyectoInicial());
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    async function cargarObjetivos() {
      try {
        const { data } = await getObjetivos();
        setObjetivos(data);
      } catch (error) {
        console.error('Error al cargar objetivos:', error);
      }
    }

    cargarObjetivos();
  }, []);

  const handleChange = (campo, valor) => {
    setProyecto((prev) => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handleGuardarProyecto = async () => {
    try {
    // Clona el proyecto y elimina el ID antes de enviarlo
    const { id, ...dataSinId } = proyecto;
    const { data } = await createProyecto(dataSinId);

    alert(`¡Proyecto guardado! ID generado: ${data.id}`);

    setProyecto({
      ...getProyectoInicial(),
      id: data.id 
    });
  } catch (error) {
    console.error('Error al guardar proyecto:', error);
    alert('Error al guardar el proyecto');
  }
};

  return {
    proyecto,
    objetivos,
    handleChange,
    handleGuardarProyecto
  };
}

function getProyectoInicial() {
  return {
    id: '', 
    nombre: '',
    descripcion: '',
    objetivoId: null,
    fechaInicio: null,
    fechaFin: null,
    responsableId: 1,
    administradorId: 1,
    involucradosIds: [2, 3],
    capex: 100000,
    opex: 50000,
    pilarId: 2,
    clasificacionId: 3
  };
}
