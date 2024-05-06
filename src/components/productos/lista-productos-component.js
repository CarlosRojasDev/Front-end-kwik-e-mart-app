import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "../../icons";
import productosDataServices from "../../services/productos-services";

export default function ListaProductos() {
  const [listaProductos, setListaProductos] = useState([]);

  //Obtener lista de productos
  useEffect(() => {
    const getListMedidas = async () => {
      try {
        const response = await productosDataServices.getAll();
        setListaProductos(response.data);
      } catch (error) {
        console.log(
          "Ocurrio un error en la peticion de unidades de medida. Error: " +
            error
        );
      }
    };

    getListMedidas();
  }, []);

  const handleClick = async (id) => {
    const confirm = window.confirm(`
    El registro se eliminara de forma permanente.

    ¿Desea continuar?`);
    if (confirm) {
      try {
        await productosDataServices.delete(id);
        alert("Registro eliminado");
        document.location.reload();
      } catch (error) {
        console.log("Error al eliminar el registro. Error: " + error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center">Productos</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-11">
          <a href="/addProducto" className="btn btn-primary mb-2">
            Crear
          </a>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Tipo</th>
                <th>Categoría</th>
                <th>Un. Medida</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Stock</th>
                <th>Vendidos</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Si existe la lista y su longitud es mayor a 0, renderiza la lista de productos */}

              {listaProductos && listaProductos.length > 0 ? (
                listaProductos.map((producto) => (
                  <tr key={producto.id_producto}>
                    <td>{producto.id_producto}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.marca.nombre_marca}</td>
                    <td>{producto.tipoProducto.tipo_producto}</td>
                    <td>{producto.categoria.nombre_categoria}</td>
                    <td>{producto.unidadMedida.unidadMedida}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.estado}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.vendidos}</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <a
                          href={`/productos/${producto.id_producto}`}
                          className="btn btn-secondary"
                        >
                          <EditIcon></EditIcon>
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleClick(producto.id_producto);
                          }}
                        >
                          <DeleteIcon></DeleteIcon>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11}>No hay registros disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
