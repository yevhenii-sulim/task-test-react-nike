import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className="link-header" to="/">
        НОВИНКИ
      </NavLink>
      <NavLink className="link-header" to="men">
        ЧОЛОВІКИ
      </NavLink>
      <NavLink className="link-header" to="women">
        ЖІНКИ
      </NavLink>
      <NavLink className="link-header" to="accessories">
        АКСЕСУАРИ
      </NavLink>
      <NavLink className="link-header" to="shares">
        АКЦІЇ
      </NavLink>
    </nav>
  );
}
