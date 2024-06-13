
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  logo: string;
  links: Array<{ href: string; label: string }>;
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
