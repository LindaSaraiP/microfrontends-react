import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import UserAvatar from './UserAvatar';

import iconHamburguesa from '../assets/icons/hamburguesa.svg';
import iconHome from '../assets/icons/home.svg';


const Header = () => {
  const [visible, setVisible] = useState(false);

  const start = (
    <div className="menu-button" onClick={() => setVisible(true)}>
      <img src={iconHamburguesa} alt="menu" />
    </div>
  );

  const end = <UserAvatar />;

  const items = [
    {
      label: '',
      icon: () => (
        <div className="menu-item-icon">
          <img src={iconHome} alt="Home" />
          <div className="vertical-divider"></div>
        </div>
      )
    }
  ];

  return (
    <div className="header-wrapper">
      <div className="header-top-line"></div>

      <Menubar
        model={items}
        start={start}
        end={end}
      />

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h3>Menú</h3>
        <ul className="sidebar-list">
          <li><button className="sidebar-button">Home</button></li>
          <li><button className="sidebar-button">Plan</button></li>
        </ul>
      </Sidebar>
    </div>
  );
};

export default Header;
