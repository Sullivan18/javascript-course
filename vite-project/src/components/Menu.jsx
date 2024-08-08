

import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/contact">Contato</a></li>
      </ul>
    </div>
  );
}

export default Menu;
