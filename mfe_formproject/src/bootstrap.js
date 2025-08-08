import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const isFederated = window.__IS_MODULE_FEDERATION__ === true;

const initializeApp = async () => {
  try {
    await Promise.all([
      import('primereact/resources/themes/lara-light-cyan/theme.css'),
      import('primereact/resources/primereact.min.css'),
      import('primeicons/primeicons.css'),
      import('@asix/design-system/dist/styles/index.css'),
    ]);

    const root = createRoot(document.getElementById('root'));

    if (isFederated) {
      const { addLocale } = await import('primereact/api');
      const locale = window.primeReact?.config?.locale;
      const localeConfig = window.primeReact?.locales?.[locale];

      if (locale && localeConfig) {
        addLocale(locale, localeConfig);
        console.log(`[MFE] Locale "${locale}" aplicado desde host`);
      } else {
        console.warn('[MFE] No se encontró configuración de locale en host, usar valor por defecto');
      }

      root.render(<App />);
    } else {
      // Modo standalone (opcional)
      const { PrimeReactProvider, addLocale } = await import('primereact/api');
      const { primeLocaleES } = await import('@asix/design-system');

      addLocale('es', primeLocaleES);
      root.render(
        <PrimeReactProvider value={{ ripple: true, locale: 'es' }}>
          <App />
        </PrimeReactProvider>
      );
    }
  } catch (error) {
    console.error('[MFE] Error iniciando:', error);
    const root = createRoot(document.getElementById('root'));
    root.render(<div>Error cargando la aplicación</div>);
  }
};

initializeApp();
