
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

import { useFormProject } from '../hooks/useFormProject';

import infoIcon from '../assets/icons/informacion.svg';
import calendarIcon from '../assets/icons/calendario.svg';

export default function FormProject() {
  const { proyecto, objetivos, handleChange, handleGuardarProyecto } = useFormProject();

  return (
    <div className="form-container">
      <div className="form-field">
        <label className='label-form'>ID Sistema OCR's</label>
        <InputText 
          value={proyecto.id} 
          disabled 
          
        />
      </div>

      <div className="form-field">
        <label className='label-form'>Nombre del proyecto</label>
        <InputText 
          value={proyecto.nombre} 
          onChange={(e) => handleChange('nombre', e.target.value)} 
          
        />
      </div>

      <div className="form-field">
        <label className='label-form'>Descripción del proyecto</label>
        <InputText 
          value={proyecto.descripcion} 
          onChange={(e) => handleChange('descripcion', e.target.value)} 
          
        />
      </div>

      <div className="form-field">
        <label className='label-form'>Objetivos a los que contribuye el proyecto</label>
        <Dropdown 
          value={proyecto.objetivoId} 
          onChange={(e) => handleChange('objetivoId', e.value)} 
          options={objetivos} 
          
          optionLabel="nombre" 
          optionValue="id"
          placeholder="Selecciona un objetivo"
          className="objective-dropdown"
          
        />
      </div>

      <div className="calendar-group">
        <div className="form-field">
          <label className='calendar-label'>
            Fecha Inicio
            <img src={infoIcon} alt="info" className="icon-info" />
          </label>
          <div className="custom-calendar">
            <Calendar 
              value={proyecto.fechaInicio} 
              onChange={(e) => handleChange('fechaInicio', e.value)} 
              showIcon 
              icon={() => <img src={calendarIcon} alt="calendar" className="calendar-icon" />}
              className="calendar-fullwidth"
            />
          </div>
        </div>

        <div className="form-field">
          <label className='calendar-label'>
            Fecha Fin
            <img src={infoIcon} alt="info" className="icon-info" />
          </label>
          <div className="custom-calendar">
            <Calendar 
              value={proyecto.fechaFin} 
              onChange={(e) => handleChange('fechaFin', e.value)} 
              showIcon 
              icon={() => <img src={calendarIcon} alt="calendar" className="calendar-icon" />}
              className="calendar-fullwidth"
           />
          </div>
        </div>
      </div>

      <div className="button-wrapper">
        <Button 
          label="Guardar Proyecto"
          onClick={handleGuardarProyecto}
          className="project-button"
        />
      </div>
    </div>
  );
}
