import { useState, useEffect, useMemo } from 'react';
import { getProyectoById } from '../services/proyectosService';
import { getPilares } from '../services/pilaresService';
import { getClasificaciones } from '../services/clasificacionesService';

export function useProjectSearch(projectId) {
    const [project, setProject] = useState(null);
    const [pilares, setPilares] = useState([]);
    const [clasificaciones, setClasificaciones] = useState([]);

    const fetchProject = async () => {
        try {
            const res = await getProyectoById(projectId);
            setProject(res.data);
        } catch (error) {
            console.error('Error al obtener el proyecto:', error);
            setProject(null);
        }
    };

    const fetchExtraData = async () => {
        try {
            const [pilaresRes, clasificacionesRes] = await Promise.all([
                getPilares(),
                getClasificaciones()
            ]);
            setPilares(pilaresRes.data);
            setClasificaciones(clasificacionesRes.data);
        } catch (error) {
            console.error('Error cargando datos extra:', error);
        }
    };

    const getNombreById = (lista, id) => {
        const item = lista.find((i) => String(i.id) === String(id));
        return item ? item.nombre : '';
    };

    const pilarNombre = useMemo(() => {
        return project?.pilarId && pilares.length > 0
            ? getNombreById(pilares, project.pilarId)
            : '';
    }, [project, pilares]);

    const clasificacionNombre = useMemo(() => {
        return project?.clasificacionId && clasificaciones.length > 0
            ? getNombreById(clasificaciones, project.clasificacionId)
            : '';
    }, [project, clasificaciones]);

    useEffect(() => {
        fetchExtraData();
    }, []);

    return {
        project,
        setProject,
        fetchProject,
        pilares,
        clasificaciones,
        pilarNombre,
        clasificacionNombre,
    };
}
