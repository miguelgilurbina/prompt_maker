const NavBar = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Funciones
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Estilos
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li></li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Palabras Clave
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Parámetros
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
