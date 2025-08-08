import React, { useState, lazy, Suspense } from 'react';
import { TabMenu } from 'primereact/tabmenu';

import iconDatos from '../assets/icons/datos-generales.svg';
import iconPlan from '../assets/icons/plandetrabajo.svg';

// Lazy-loaded MFEs
const FormProject = lazy(() => import('mfe_formproject/FormProject'));
const ProjectSearchByIdForm = lazy(() => import('mfe_projectsearch/ProjectSearchByIdForm'));
const ProjectPlan = lazy(() => import('mfe_projectplan/ProjectPlan'));
const FormStage = lazy(() => import('mfe_formprojectstage/FormStage'));
const FormTeamAssignment = lazy(() => import('mfe_teamassignment/FormTeamAssignment'));

export default function TabMenuComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      label: 'DATOS',
      template: (item, options) => (
        <a className={options.className} onClick={options.onClick}>
          <img src={iconDatos} alt="DATOS" className="tabmenu-icon" />
          <span>{item.label}</span>
        </a>
      )
    },
    {
      label: 'PLAN',
      template: (item, options) => (
        <a className={options.className} onClick={options.onClick}>
          <img src={iconPlan} alt="PLAN" className="tabmenu-icon" />
          <span>{item.label}</span>
        </a>
      )
    }
  ];

  return (
    <div className="tabmenu-container">
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />

      <div className="tabmenu-content">
        <Suspense fallback={<div>Cargando...</div>}>
          {activeIndex === 0 && (
            <div className="tabmenu-content-wrapper">
              <div className="tabmenu-row">
                <div className="tabmenu-half">
                  <FormProject />
                </div>
                <div className="tabmenu-half">
                  <ProjectSearchByIdForm />
                </div>
              </div>
              <div className="tabmenu-section">
                <FormTeamAssignment />
              </div>

              <div className="tabmenu-section">
                <FormStage />
              </div>
            </div>
          )}

          {activeIndex === 1 && (
            <div className="tabmenu-plan-wrapper">
              <ProjectPlan />
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
