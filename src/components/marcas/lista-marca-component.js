//import React, { Component } from "react";
import { useEffect, useState } from "react";
import marcasDataServices from "../../services/marcas.service";
import { EditIcon, DeleteIcon } from "../../icons";

export default function Marcas() {
  const [listaMarcas, setListaMarcas] = useState([]);

  //Obtener lista de marcas
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await marcasDataServices.getAll();
        setListaMarcas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, []);

  const handleClick = async (id) => {
    const confirm = window.confirm(`
    El registro se eliminara de forma permanente.

    ¿Desea continuar?`);
    if (confirm) {
      try {
        await marcasDataServices.delete(id);
        alert("Registro eliminado");
        document.location.reload();
      } catch (error) {
        console.log("Error al eliminar el registro. Error: " + error);
      }
    }
  };
  return (
    <div>
      <h1 className="text-center">Marcas</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <a href="/addMarca" className="btn btn-primary mb-2">
            Crear
          </a>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Id</th>
                <th>Nombre marca</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Si existe la lista y su longitud es mayor a 0, renderiza la lista de marcas */}

              {listaMarcas && listaMarcas.length > 0 ? (
                listaMarcas.map((marca) => (
                  <tr key={marca.id_marca}>
                    <td>{marca.id_marca}</td>
                    <td>{marca.nombre_marca}</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <a
                          href={`/marcas/${marca.id_marca}`}
                          className="btn btn-secondary"
                        >
                          <EditIcon></EditIcon>
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleClick(marca.id_marca);
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
                  <td colSpan={3}>No hay marcas disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
