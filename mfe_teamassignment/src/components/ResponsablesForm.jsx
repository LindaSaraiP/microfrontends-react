import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import useResponsables from '../hooks/useResponsables';

export default function ResponsablesForm() {
  const {
    responsables,
    administradores,
    involucrados,
    responsablesOptions,
    administradoresOptions,
    involucradosOptions,
    handleResponsableChange,
    handleAdministradorChange,
    handleInvolucradosChange
  } = useResponsables();

  const itemTemplate = (option) => {
    const initials = option.nombre
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(option.nombre)}&background=FEC702&color=000&size=32`;

    return (
      <div className="dropdown-item">
        <img src={avatarUrl} alt={initials} className="avatar-circle" />
        <span>{option.nombre}</span>
      </div>
    );
  };

  return (
    
    <div className="dropdown-container">
      <div className="dropdown-column">
        <label className='responsables-label'>Responsables del proyecto</label>
        <Dropdown
          value={responsables}
          options={responsablesOptions}
          onChange={(e) => handleResponsableChange(e.value)}
          optionLabel="nombre"
          placeholder="Seleccionar Responsable del proyecto..."
          itemTemplate={itemTemplate}
          className="dropdown-responsable hide-arrow"
        />
      </div>
      <div className="dropdown-column">
        <label className='responsables-label'>Administrador</label>
        <Dropdown
          value={administradores}
          options={administradoresOptions}
          onChange={(e) => handleAdministradorChange(e.value)}
          optionLabel="nombre"
          placeholder="Seleccionar Administrador..."
          itemTemplate={itemTemplate}
          className="dropdown-responsable hide-arrow"
        />
      </div>
      <div className="dropdown-column">
        <label className='responsables-label'>Involucrados (opcional)</label>
        <Dropdown
          value={involucrados}
          options={involucradosOptions}
          onChange={(e) => handleInvolucradosChange(e.value)}
          optionLabel="nombre"
          placeholder="Seleccionar Involucrado (opcional)"
          itemTemplate={itemTemplate}
          className="dropdown-responsable hide-arrow"
        />
      </div>
    </div>
    
  );
}
