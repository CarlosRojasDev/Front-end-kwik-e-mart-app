import marcasDataServices from "../../services/marcas.service";
import { useForm } from "react-hook-form";
import { trimRequired } from "../../services/trimRequired";

export default function CrearMarca() {
  //Hook para el manejo de formulario
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  const crearMarca = async (data) => {
    try {
      await marcasDataServices.create(data);
      alert("Registro guardado exitosamente");
      resetField("nombre");
    } catch (error) {
      console.log("Error al crear la nueva marca. Error: " + error);
    }
  };
  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Crear marca</h1>
      <div className="col-4">
        <form onSubmit={handleSubmit(crearMarca)}>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Marca
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              {...register("nombre", { validate: { trimRequired } })}
            />
            {errors.nombre && (
              <span className="text-danger">
                El nombre de la marca es obligatorio
              </span>
            )}
          </div>
          <div className="d-flex justify-content-between">
            <a href="../marcas">Return</a>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
