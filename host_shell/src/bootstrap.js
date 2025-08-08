

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrimeReactProvider, addLocale } from 'primereact/api';
import { primeLocaleES } from '@asix/design-system';

// 1. Importar estilos antes de cualquier render
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '@asix/design-system/dist/styles/index.css';

// 2. Configuración del locale global
if (!window.primeReact) {
  window.primeReact = { locales: {}, config: {} };
}

if (!window.primeReact.locales?.es) {
  console.log('[HOST] Configurando locale ES para PrimeReact');
  addLocale('es', primeLocaleES);
  window.primeReact.locales.es = primeLocaleES; 
} else {
  console.log('[HOST] Ya estaba configurado el locale ES en primeReact');
}

// 3. Aplicar el locale globalmente
window.primeReact.config.locale = 'es';

console.log('[HOST] primeReact.config.locale:', window.primeReact.config.locale);
console.log('[HOST] primeReact.locales.es:', window.primeReact.locales.es);

// 4. Renderizar app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider value={{ ripple: true, locale: 'es' }}>
    <App />
  </PrimeReactProvider>
);






