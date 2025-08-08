import React, { useState, useEffect, useRef } from 'react';
import useEtapas from './hooks/useEtapas';
import AddStage from './components/AddStage';
import StageForm from './components/StageForm';
import StagesTable from './components/StagesTable';
import { Card } from 'primereact/card';

export default function App() {
  const {
    etapas,
    agregarOActualizar,
    eliminarEtapa,
  } = useEtapas();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [etapaEditando, setEtapaEditando] = useState(null);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const tablaRef = useRef(null);
  const etapasPrevias = useRef(etapas.length);

  const iniciarEdicion = (etapa) => {
    setEtapaEditando(etapa);
    setMostrarFormulario(true);
  };

  const manejarSubmit = async (formData) => {
    if (etapaEditando) {
      formData.id = etapaEditando.id;
    }
    await agregarOActualizar(formData);

    // Hacer scroll
    if (!etapaEditando) {
      setScrollTriggered(true);
    }

    setMostrarFormulario(false);
    setEtapaEditando(null);
  };

  useEffect(() => {
    if (scrollTriggered && etapas.length > etapasPrevias.current) {
      tablaRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    etapasPrevias.current = etapas.length;
    setScrollTriggered(false);
  }, [etapas]);

  return (
    <div className="etapas-container">
      <div className="add-etapa-top">
        <AddStage onClick={() => { setEtapaEditando(null); setMostrarFormulario(true); }} />
      </div>
      {(etapas.length > 0 || mostrarFormulario) && (
        <Card className="etapas-card-prime" ref={tablaRef}>
          {/* mostrar tabla de etapas si hay alguna */}
          {etapas.length > 0 && (
            <>
              <StagesTable
                etapas={etapas}
                onEditar={iniciarEdicion}
                onEliminar={eliminarEtapa}
              />
              <div className="add-etapa-bottom">
                <AddStage onClick={() => { setEtapaEditando(null); setMostrarFormulario(true); }} />
              </div>
            </>
          )}
          {mostrarFormulario && (
            <StageForm
              onCancel={() => { setMostrarFormulario(false); setEtapaEditando(null); }}
              onSubmit={manejarSubmit}
              etapa={etapaEditando}
            />
          )}
        </Card>
      )}
    </div>
  );
}
