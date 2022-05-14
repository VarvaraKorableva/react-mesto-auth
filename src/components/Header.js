import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
        <a href="#">
          <img src={headerLogo} alt="Логотип" className="header__logo" />
        </a>
    </header>
  );
}
  
export default Header;