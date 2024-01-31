const NavBar = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Funciones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
            Estilos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
            Palabras Clave
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
            Parámetros
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
