import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import unidadMedidaDataServices from "../../services/unidad-medida-services";
import { trimRequired } from "../../services/trimRequired";

export default function EditarUnMedida() {
  const { id } = useParams();
  const [data, setData] = useState({ id: "", medida: "" });
  const [btnSubmit, setBtnState] = useState(false);

  //Obtener datos de unidad de medida a través de su id
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await unidadMedidaDataServices.get(id);
        setData(response.data);
      } catch (error) {
        console.log("error al obtener los datos del tipo de producto");
      }
    };
    getData();
  }, [id]);

  //Guardar cambios de información del formulario
  const saveChange = async (e) => {
    e.preventDefault();
    try {
      await unidadMedidaDataServices.update(data.id, data);
      alert("Registro actualizado");
    } catch (error) {
      console.log("Error al actualizar la unidad de medida. Error: " + error);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (trimRequired(value)) {
      setData({ ...data, [name]: value });
      setBtnState(false);
    } else {
      alert("El campo de unidad de medida es requerido");
      setBtnState(true);
    }
  };

  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Editar unidad de medida</h1>
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
              name="medida"
              defaultValue={data.medida}
              onBlur={handleBlur}
            />
          </div>
          <div className="d-flex justify-content-between">
            <a href="../unidadMedida">Return</a>
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
