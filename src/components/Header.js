import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="Rick and Morty" />
      </header>
    );
  }
}

export default Header;
