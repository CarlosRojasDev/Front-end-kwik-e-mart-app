//kwik e mart app - Barra de navegación
export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Kwik E Mart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/productos">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/marcas">
                Marcas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tipoProducto">
                Tipo de producto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categorias">
                Categoría
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/unidadMedida">
                Unidad de medida
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
