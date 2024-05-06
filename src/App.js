import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import Marcas from "./components/marcas/lista-marca-component";
import CrearMarca from "./components/marcas/crear-marca-component";
import EditMarca from "./components/marcas/marca-component";
import Nav from "./components/nav-component";
import ListaProductos from "./components/productos/lista-productos-component";
import CrearProducto from "./components/productos/crear-producto-component";
import EditarProducto from "./components/productos/editar-producto-component";
import ListaTipos from "./components/tipo-producto/lista-tipo-producto-component";
import CrearTipoProd from "./components/tipo-producto/crear-tipo-prod-component";
import EditarTipoProd from "./components/tipo-producto/editar-tipo-producto-component";
import ListaCategorias from "./components/categorias/lista-categorias-component";
import CrearCategoria from "./components/categorias/crear-categoria-component";
import EditarCategoria from "./components/categorias/editar-categoria-component";
import ListaUnMedidas from "./components/unidad-medida/lista-unidad-medida-component";
import CrearUnMedida from "./components/unidad-medida/crear-unidad-medida-component";
import EditarUnMedida from "./components/unidad-medida/editar-unidad-medida-component";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ListaProductos />} />
          <Route path="/addProducto" element={<CrearProducto />} />
          <Route path="/productos/:id" element={<EditarProducto />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/addMarca" element={<CrearMarca />} />
          <Route path="/marcas/:id" element={<EditMarca />} />
          <Route path="/tipoProducto" element={<ListaTipos />} />
          <Route path="/addTipo" element={<CrearTipoProd />} />
          <Route path="/tipoProducto/:id" element={<EditarTipoProd />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/addCategoria" element={<CrearCategoria />} />
          <Route path="/categorias/:id" element={<EditarCategoria />} />
          <Route path="/unidadMedida" element={<ListaUnMedidas />} />
          <Route path="/addMedida" element={<CrearUnMedida />} />
          <Route path="/unidadMedida/:id" element={<EditarUnMedida />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
