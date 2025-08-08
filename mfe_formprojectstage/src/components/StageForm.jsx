import React, { useState, useEffect } from 'react';
import infoIcon from '../assets/icons/informacion.svg';
import closeIcon from '../assets/icons/cerrar.svg';
import calendarIcon from '../assets/icons/calendario.svg';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export default function EtapaForm({ onCancel, onSubmit, etapa }) {
    const [form, setForm] = useState({
        titulo: '',
        descripcion: '',
        entregable: '',
        fechaInicio: null,
        fechaFin: null
    });

    useEffect(() => {
        if (etapa) {
            setForm({
                titulo: etapa.titulo || '',
                descripcion: etapa.descripcion || '',
                entregable: etapa.entregable || '',
                fechaInicio: etapa.fechaInicio ? new Date(etapa.fechaInicio) : null,
                fechaFin: etapa.fechaFin ? new Date(etapa.fechaFin) : null,
            });
        }
    }, [etapa]);

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        if (!form.titulo || !form.descripcion || !form.fechaInicio || !form.fechaFin) {
            alert('Completa todos los campos obligatorios.');
            return;
        }
        onSubmit(form);
    };


    return (
        <div className="overlay">
            <div className="form-modal">
                <div className="form-header">
                    <h2>{etapa ? 'Editar etapa' : 'Agregar etapa'}</h2>
                    <img src={closeIcon} alt="Cerrar" onClick={onCancel} className="close-icon" />
                </div>
                <hr className="divider" />

                <div className="form-group">
                    <label className='label-stage'>Título de la iniciativa: *</label>
                    <InputText  value={form.titulo} onChange={(e) => handleChange('titulo', e.target.value)} />
                </div>

                <div className="form-group">
                    <label className='label-stage'>Descripción de la Etapa: *</label>
                    <InputTextarea autoResize value={form.descripcion} onChange={(e) => handleChange('descripcion', e.target.value)} rows={4} />
                </div>

                <div className="form-group">
                    <label className='label-stage'>
                        Entregable de la Etapa:
                        <img src={infoIcon} alt="info" className="info-icon small" />
                    </label>
                    <InputText  value={form.entregable} onChange={(e) => handleChange('entregable', e.target.value)} />
                </div>
                <div className='form-group'>

                    <label className='label-stage'>
                        Fecha Inicio: *
                        <img src={infoIcon} alt="info" className="info-icon small" />
                    </label>
                    <div className="custom-calendar">
                        <Calendar
                            value={form.fechaInicio}
                            onChange={(e) => handleChange('fechaInicio', e.value)}
                            showIcon
                            icon={() => <img src={calendarIcon} alt="calendar" className="calendar-icon" />}
                            className="calendar-fullwidth"
                        />
                    </div>

                </div>
                <div className='form-group'>
                    <label className='label-stage'>
                        Fecha Fin: *
                        <img src={infoIcon} alt="info" className="info-icon small" />
                    </label>
                    <div className="custom-calendar">
                        <Calendar
                            value={form.fechaFin}
                            onChange={(e) => handleChange('fechaFin', e.value)}
                            showIcon
                            icon={() => <img src={calendarIcon} alt="calendar" className="calendar-icon" />}
                            className="calendar-fullwidth"
                        />
                    </div>
                </div>
            

            <div className="form-actions botones-container">
                <button onClick={onCancel} className="btn-cancelar">Cancelar</button>
                <button onClick={handleSubmit} className="btn-agregar">
                    {etapa ? 'Guardar cambios' : 'Agregar'}
                </button>
            </div>
        </div>
        </div >
    );
}
