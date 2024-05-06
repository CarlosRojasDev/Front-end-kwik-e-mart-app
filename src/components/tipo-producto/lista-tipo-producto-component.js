import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "../../icons";
import tipoProductoDataServices from "../../services/tipo-producto-services";

export default function ListaTipos() {
  const [listaTipos, setListaTipos] = useState([]);

  //Obtener lista de tipos de producto
  useEffect(() => {
    const getListTipo = async () => {
      try {
        const response = await tipoProductoDataServices.getAll();
        setListaTipos(response.data);
      } catch (error) {
        console.log(
          "Ocurrio un error en la peticion de tipos de producto. Error: " +
            error
        );
      }
    };

    getListTipo();
  }, []);

  const handleClick = async (id) => {
    const confirm = window.confirm(`
    El registro se eliminara de forma permanente.

    ¿Desea continuar?`);
    if (confirm) {
      try {
        await tipoProductoDataServices.delete(id);
        alert("Registro eliminado");
        document.location.reload();
      } catch (error) {
        console.log("Error al eliminar el registro. Error: " + error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center">Tipos de producto</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <a href="/addTipo" className="btn btn-primary mb-2">
            Crear
          </a>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Id</th>
                <th>Tipo de producto</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Si existe la lista y su longitud es mayor a 0, renderiza la lista de tipos de producto */}

              {listaTipos && listaTipos.length > 0 ? (
                listaTipos.map((tipo) => (
                  <tr key={tipo.id_tipo_producto}>
                    <td>{tipo.id_tipo_producto}</td>
                    <td>{tipo.tipo_producto}</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <a
                          href={`/tipoProducto/${tipo.id_tipo_producto}`}
                          className="btn btn-secondary"
                        >
                          <EditIcon></EditIcon>
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleClick(tipo.id_tipo_producto);
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
                  <td colSpan={3}>No hay registros disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
