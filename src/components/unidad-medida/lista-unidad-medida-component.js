import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "../../icons";
import unidadMedidaDataServices from "../../services/unidad-medida-services";

export default function ListaUnMedidas() {
  const [listaUnMedidas, setListaMedidas] = useState([]);

  //Obtener lista de unidades de medida
  useEffect(() => {
    const getListMedidas = async () => {
      try {
        const response = await unidadMedidaDataServices.getAll();
        setListaMedidas(response.data);
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
        await unidadMedidaDataServices.delete(id);
        alert("Registro eliminado");
        document.location.reload();
      } catch (error) {
        console.log("Error al eliminar el registro. Error: " + error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center">Unidad de medida</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <a href="/addMedida" className="btn btn-primary mb-2">
            Crear
          </a>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Id</th>
                <th>Unidad de medida</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Si existe la lista y su longitud es mayor a 0, renderiza la lista de unidades de medida */}

              {listaUnMedidas && listaUnMedidas.length > 0 ? (
                listaUnMedidas.map((medida) => (
                  <tr key={medida.id_unidadMedida}>
                    <td>{medida.id_unidadMedida}</td>
                    <td>{medida.unidadMedida}</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <a
                          href={`/unidadMedida/${medida.id_unidadMedida}`}
                          className="btn btn-secondary"
                        >
                          <EditIcon></EditIcon>
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleClick(medida.id_unidadMedida);
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
