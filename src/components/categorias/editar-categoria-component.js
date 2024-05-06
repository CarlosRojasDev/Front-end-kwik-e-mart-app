import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoriasDataServices from "../../services/categorias.service";
import { trimRequired } from "../../services/trimRequired";

export default function EditarCategoria() {
  const { id } = useParams();
  const [data, setData] = useState({ id: "", tipo: "" });
  const [btnSubmit, setBtnState] = useState(false);

  //Obtener datos de categoria a través de su id
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await categoriasDataServices.get(id);
        console.log(response);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error al obtener los datos de la categoría");
      }
    };
    getData();
  }, [id]);

  //Guardar cambios de información del formulario
  const saveChange = async (e) => {
    e.preventDefault();
    try {
      await categoriasDataServices.update(data.id, data);
      alert("Registro actualizado");
    } catch (error) {
      console.log("Error al actualizar el tipo de producto. Error: " + error);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (trimRequired(value)) {
      setData({ ...data, [name]: value });
      setBtnState(false);
    } else {
      alert("El campo de categoria es requerido");
      setBtnState(true);
    }
  };

  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Editar categoría</h1>
      <div className="col-4">
        <form onSubmit={saveChange}>
          <div className="mb-3">
            <strong className="form-label">id</strong>
            <input
              type="text"
              className="form-control"
              name="id"
              value={data.id}
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </div>
          <div className="mb-3">
            <strong className="form-label">Tipo</strong>
            <input
              type="text"
              className="form-control"
              name="categoria"
              defaultValue={data.categoria}
              onBlur={handleBlur}
            />
          </div>
          <div className="d-flex justify-content-between">
            <a href="../categorias">Return</a>
            <button
              type="submit"
              className="btn btn-success"
              disabled={btnSubmit}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
