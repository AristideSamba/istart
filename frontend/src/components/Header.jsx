import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { brand } from '../content.js';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">{brand}</Link>
      <nav>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* Futur : lien « Espace client » vers le dashboard */}
      </nav>
    </header>
  );
}
