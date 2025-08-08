
import React from 'react';
import TabMenuComponent from './components/TabMenuComponent';

// Detectamos si estamos en modo federado
const isFederated = window.__IS_MODULE_FEDERATION__ === true;

// PrimeReactProvider solo si NO estamos federados
import { PrimeReactProvider } from 'primereact/api';

export default function App() {
  if (isFederated) {
    return <TabMenuComponent />;
  }

  return (
    <PrimeReactProvider value={{ ripple: true, locale: 'es' }}>
      <TabMenuComponent />
    </PrimeReactProvider>
  );
}

