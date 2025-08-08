import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';



import editarIcon from '../assets/icons/editar.svg';
import eliminarIcon from '../assets/icons/delete.svg';

export default function EtapasTable({ etapas, onEditar, onEliminar }) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const accionesTemplate = (rowData) => (
    <div className="actions-cell">
      <button onClick={() => onEditar(rowData)} className="btn-icon-text">Editar</button>
      <button onClick={() => onEliminar(rowData.id)} className="btn-icon-text">Eliminar</button>
    </div>
  );

  return (
    <div>
      <h2 className="etapas-title">Etapas</h2>
      <DataTable
        value={etapas.slice(first, first + rows)}
        className="etapas-table-prime"
        paginator={false}
        responsiveLayout="scroll"

      >
        <Column field="titulo" header="Título" headerClassName="center-header" />
        <Column field="descripcion" header="Descripción" headerClassName="center-header" />
        <Column field="entregable" header="Entregable" headerClassName="center-header" />
        <Column
          field="fechaInicio"
          header="Fecha Inicio"
          body={row => row.fechaInicio?.slice(0, 10)}
          headerClassName="center-header"
        />
        <Column
          field="fechaFin"
          header="Fecha Fin"
          body={row => row.fechaFin?.slice(0, 10)}
          headerClassName="center-header"
        />
        <Column
          header={<img src={editarIcon} alt="Editar" className="table-icon" />}
          body={row => (
            <button onClick={() => onEditar(row)} className="btn-icon-text">
              Editar
            </button>
          )}
          headerClassName="center-header"
        />
        <Column
          header={<img src={eliminarIcon} alt="Eliminar" className="table-icon" />}
          body={row => (
            <button onClick={() => onEliminar(row.id)} className="btn-icon-text">
              Eliminar
            </button>
          )}
          headerClassName="center-header"
        />
      </DataTable>
      <div className="paginator-custom">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={etapas.length}
          onPageChange={onPageChange}

          className="custom-paginator justify-content-end"
          template=" PrevPageLink CurrentPageReport NextPageLink"
          currentPageReportTemplate="{first} - {last} de {totalRecords}"
        />
      </div>
    </div>
  );
}
