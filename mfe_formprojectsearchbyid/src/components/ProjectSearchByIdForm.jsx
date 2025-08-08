import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import { useProjectSearch } from '../hooks/useProjectSearch';

export default function ProjectSearchByIdForm() {
    const [projectId, setProjectId] = useState('');
    const {
        project,
        fetchProject,
        pilarNombre,
        clasificacionNombre,
    } = useProjectSearch(projectId);

    return (
        <Card className="project-search-card">
            <div className="field field-grid-4">
                <div className="col-span-2">
                    <label htmlFor="project-id" className='label-form'>ID Proyecto</label>
                    <InputText
                        id="project-id"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        placeholder="Escribe el número de ID Proyecto Sipres"
                    />
                </div>
                <div className="col-span-1">
                    <label>&nbsp;</label>
                    <Button
                        label="Buscar proyecto"
                        onClick={fetchProject}
                        className="full-height project-button"
                    />
                </div>
            </div>

            <div className="field">
                <label className='label-form'>Nombre del proyecto</label>
                <InputText value={project?.nombre || ''} disabled />
            </div>

            <div className="field">
                <label className='label-form'>Descripción del proyecto</label>
                <InputText value={project?.descripcion || ''} disabled />
            </div>

            <div className="field-grid-4">
                <div className="col-span-2">
                    <label className='label-form'>Fecha de creación</label>
                    <InputText disabled value={project?.fechaInicio || ''} />
                </div>
                <div className="col-span-1">
                    <label className='label-form'>Capex</label>
                    <InputText disabled value={project?.capex || ''} />
                </div>
                <div className="col-span-1">
                    <label className='label-form'>Opex</label>
                    <InputText disabled value={project?.opex || ''} />
                </div>
            </div>

            <div className="field-row equal-columns">
                <div className="field">
                    <label className='label-top'>Pilar del proyecto</label>
                    <div className="line-field">{pilarNombre}</div>
                </div>
                <div className="field">
                    <label className='label-top'>Clasificación Comité de Inversión</label>
                    <div className="line-field">{clasificacionNombre}</div>
                </div>
            </div>
        </Card>
    );
}
