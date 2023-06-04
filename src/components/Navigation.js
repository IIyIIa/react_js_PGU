import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link to="/posts">Посты</Link>
        </li>
        <li>
          <Link to="/auth">Вход / Регистрация</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
