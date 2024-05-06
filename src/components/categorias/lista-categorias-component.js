import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "../../icons";
import categoriasDataServices from "../../services/categorias.service";

export default function ListaCategorias() {
  const [listaCategorias, setListaCategorias] = useState([]);

  //Obtener lista de categorías
  useEffect(() => {
    const getListCategoria = async () => {
      try {
        const response = await categoriasDataServices.getAll();
        setListaCategorias(response.data);
      } catch (error) {
        console.log(
          "Ocurrio un error en la peticion de categorias. Error: " + error
        );
      }
    };

    getListCategoria();
  }, []);

  const handleClick = async (id) => {
    const confirm = window.confirm(`
    El registro se eliminara de forma permanente.

    ¿Desea continuar?`);
    if (confirm) {
      try {
        await categoriasDataServices.delete(id);
        alert("Registro eliminado");
        document.location.reload();
      } catch (error) {
        console.log("Error al eliminar el registro. Error: " + error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center">Categorías</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <a href="/addCategoria" className="btn btn-primary mb-2">
            Crear
          </a>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Id</th>
                <th>Categorías</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Si existe la lista y su longitud es mayor a 0, renderiza la lista de categorías */}

              {listaCategorias && listaCategorias.length > 0 ? (
                listaCategorias.map((categoria) => (
                  <tr key={categoria.id_categoria}>
                    <td>{categoria.id_categoria}</td>
                    <td>{categoria.nombre_categoria}</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <a
                          href={`/categorias/${categoria.id_categoria}`}
                          className="btn btn-secondary"
                        >
                          <EditIcon />
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleClick(categoria.id_categoria);
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No hay categorías disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
