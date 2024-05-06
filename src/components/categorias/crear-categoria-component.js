import categoriasDataServices from "../../services/categorias.service";
import { useForm } from "react-hook-form";
import { trimRequired } from "../../services/trimRequired";

export default function CrearCategoria() {
  //Hook para manejo de formulario
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  const crearCategoria = async (data) => {
    try {
      await categoriasDataServices.create(data);
      alert("Registro guardado exitosamente");
      resetField("categoria");
    } catch (error) {
      console.log("Error al crear la nueva categoria. Error: " + error);
    }
  };
  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Crear categoria</h1>
      <div className="col-4">
        <form onSubmit={handleSubmit(crearCategoria)}>
          <div className="mb-3">
            <strong className="form-label">Categoria</strong>
            <input
              type="text"
              className="form-control"
              {...register("categoria", { validate: { trimRequired } })}
            />
            {errors.categoria && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>
          <div className="d-flex justify-content-between">
            <a href="../categorias">Return</a>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
