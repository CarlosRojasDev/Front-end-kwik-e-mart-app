import { useForm } from "react-hook-form";
import { trimRequired } from "../../services/trimRequired";
import unidadMedidaDataServices from "../../services/unidad-medida-services";

export default function CrearUnMedida() {
  //Hook para el manejo de formulario
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  const crearMedida = async (data) => {
    try {
      await unidadMedidaDataServices.create(data);
      alert("El registro se guardo con exito");
      resetField("medida");
    } catch (error) {
      console.log(
        "Ocurrio un error al crear la unidad de medida. Error: " + error
      );
    }
  };
  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Crear unidad de medida</h1>
      <div className="col-4">
        <form onSubmit={handleSubmit(crearMedida)}>
          <div className="mb-3">
            <strong className="form-label">Unidad de medida</strong>
            <input
              type="text"
              className="form-control"
              {...register("medida", { validate: { trimRequired } })}
            />
            {errors.medida && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>
          <div className="d-flex justify-content-between">
            <a href="../unidadMedida">Return</a>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
