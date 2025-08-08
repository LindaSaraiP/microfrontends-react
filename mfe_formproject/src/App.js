
// import React from 'react';
// import TabMenu from './components/TabMenu';
// import { PrimeReactProvider } from 'primereact/api';
// import { primeLocaleES } from '@asix/design-system';

// // Detectamos si estamos en modo federado
// const isFederated = window.__IS_MODULE_FEDERATION__ === true;

// export default function App({ locale }) {
//   // Si estamos federados, no usamos el provider (ya lo da el host)
//   if (isFederated) {
//     return (
//       <div style={{ padding: '2rem' }}>
//         <TabMenu />
//       </div>
//     );
//   }

//   // Si NO estamos federados (modo standalone), usamos el Provider localmente
//   return (
//     <PrimeReactProvider value={{ ripple: true, locale: locale || 'es' }}>
//       <div style={{ padding: '2rem' }}>
//         <TabMenu />
//       </div>
//     </PrimeReactProvider>
//   );
// }

import React from 'react';
import  FormProject  from './components/FormProject';

export default function App() {
  return <FormProject />;
}
