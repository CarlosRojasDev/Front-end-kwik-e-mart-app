import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import marcasDataServices from "../../services/marcas.service";
import { trimRequired } from "../../services/trimRequired";

export default function EditMarca() {
  const { id } = useParams();
  const [data, setData] = useState({ id: "", nombre: "" });
  const [btnSubmit, setBtnState] = useState(false);

  //Obtener datos de marca a través de su id
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await marcasDataServices.get(id);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error al consultar el id de la marca: " + error);
      }
    };
    getData();
  }, [id]);

  const handleBlur = (ev) => {
    const { name, value } = ev.target;
    if (trimRequired(value)) {
      setData({ ...data, [name]: value });
      setBtnState(false);
    } else {
      setBtnState(true);
      alert('El campo "Marca" es obligatorio');
    }
  };

  //Guardar cambios de información del formulario
  const saveChange = async (e) => {
    e.preventDefault();
    try {
      await marcasDataServices.update(data.id, data);
      alert("Los cambios se guardaron con exito");
    } catch (error) {
      console.log("Error al editar el registro. Error: " + error);
    }
  };

  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Editar marca</h1>
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
            <strong className="form-label">Marca</strong>
            <input
              type="text"
              className="form-control"
              name="nombre"
              defaultValue={data.nombre}
              onBlur={handleBlur}
            />
          </div>
          <div className="d-flex justify-content-between">
            <a href="../marcas">Return</a>
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
