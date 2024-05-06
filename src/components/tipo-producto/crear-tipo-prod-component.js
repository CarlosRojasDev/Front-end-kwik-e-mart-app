import { useForm } from "react-hook-form";
import { trimRequired } from "../../services/trimRequired";
import tipoProductoDataServices from "../../services/tipo-producto-services";

export default function CrearTipoProd() {
  //Hook para el manejo de formulario
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  const crearTipo = async (data) => {
    try {
      await tipoProductoDataServices.create(data);
      alert("El registro se guardo con exito");
      resetField("tipo");
    } catch (error) {
      console.log(
        "Ocurrio un error al crear el tipo de producto. Error: " + error
      );
    }
  };
  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Crear tipo de producto</h1>
      <div className="col-4">
        <form onSubmit={handleSubmit(crearTipo)}>
          <div className="mb-3">
            <label htmlFor="inputTipo" className="form-label">
              Tipo
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTipo"
              {...register("tipo", { validate: { trimRequired } })}
            />
            {errors.tipo && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>
          <div className="d-flex justify-content-between">
            <a href="../tipoProducto">Return</a>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
