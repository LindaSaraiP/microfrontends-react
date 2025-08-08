

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const isFederated = window.__IS_MODULE_FEDERATION__ === true;

// const initializeApp = async () => {
//   try {
//     //  1. Cargar estilos compartidos
//     await Promise.all([
//       import('primereact/resources/themes/lara-light-cyan/theme.css'),
//       import('primereact/resources/primereact.min.css'),
//       import('primeicons/primeicons.css'),
//       import('@asix/design-system/dist/styles/index.css')
//     ]);

//     //  2. Configuración dinámica de idioma solo si el host lo provee
//     if (isFederated && window.primeReact?.config?.locale) {
//       const { addLocale } = await import('primereact/api');
//       const locale = window.primeReact.config.locale;
//       const localeConfig = window.primeReact.locales?.[locale];

//       if (locale && localeConfig) {
//         console.log(`[MFE] Aplicando locale "${locale}" desde el host`);
//         addLocale(locale, localeConfig);
//       } else {
//         console.warn('[MFE] El host no ha registrado correctamente el locale');
//       }
//     }

//     const root = createRoot(document.getElementById('root'));

//     if (isFederated) {
//       //  3. Modo federado: sin contexto propio
//       console.log('[MFE] Modo federado: utilizando configuración del host');
//       root.render(<App />);
//     } else {
//       //  4. Modo standalone: configuración mínima
//       const { PrimeReactProvider, addLocale } = await import('primereact/api');
//       const { primeLocaleES } = await import('@asix/design-system');

//       console.log('[MFE] Modo standalone: aplicando locale "es" directamente');
//       addLocale('es', primeLocaleES);

//       root.render(
//         <PrimeReactProvider value={{ ripple: true, locale: 'es' }}>
//           <App />
//         </PrimeReactProvider>
//       );
//     }
//   } catch (error) {
//     console.error('[MFE] Error inicializando la aplicación:', error);
//     const root = createRoot(document.getElementById('root'));
//     root.render(<div>Error cargando la aplicación</div>);
//   }
// };

// initializeApp();
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const initializeApp = async () => {
  await Promise.all([
    import('primereact/resources/themes/lara-light-cyan/theme.css'),
    import('primereact/resources/primereact.min.css'),
    import('primeicons/primeicons.css'),
    import('@asix/design-system/dist/styles/index.css')
  ]);

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
};

initializeApp();
