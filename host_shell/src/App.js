// import React, { Suspense } from 'react';

// const Header = React.lazy(() => import('mfe_header/Header'));
// const TabMenu = React.lazy(() => import('mfe_tabmenu/TabMenuComponent'));
// const Footer = React.lazy(() => import('mfe_header/Footer'));


// const App = () => {
//   return (
//     <div className="app-container">
//       <Suspense fallback={<div>Cargando Header...</div>}>
//         <Header />
     

//       <main className="main-content">
       
//           <TabMenu />
        
//       </main>

     
//         <Footer />
//       </Suspense>
//     </div>
//   );
// };

// export default App;


import React, { Suspense } from 'react';

const Header = React.lazy(() => import('mfe_header/Header'));
const TabMenu = React.lazy(() => import('mfe_tabmenu/TabMenuComponent'));
const Footer = React.lazy(() => import('mfe_header/Footer'));

const App = () => {
  return (
    <div className="layout-wrapper">
      <Suspense fallback={<div>Cargando Header...</div>}>
        <Header />
      </Suspense>

      <div className="content-wrapper">
        <Suspense fallback={<div>Cargando Formulario Proyecto...</div>}>
          <TabMenu />
        </Suspense>
      </div>

      <Suspense fallback={<div>Cargando Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
