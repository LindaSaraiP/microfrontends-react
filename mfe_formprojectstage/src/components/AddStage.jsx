import React from 'react';
import iconAdd from '../assets/icons/agregar.svg';

export default function AddEtapa({ onClick }) {
  return (
    <div onClick={onClick}>
      <img src={iconAdd} alt="Agregar" className="add-icon" />
      <span className="add-text">Agregar etapa</span>
    </div>
  );
}
