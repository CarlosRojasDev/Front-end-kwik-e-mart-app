import { useForm } from "react-hook-form";
import { trimRequired } from "../../services/trimRequired";
import productosDataServices from "../../services/productos-services";
import { useOptions } from "../../services/select-options-service";

export default function CrearProducto() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //Obtener opciones para listas desplegables del formulario:
  //marcas, tipos de producto, categoria y unidades de medida
  const options = useOptions();

  const crearProducto = async (data) => {
    try {
      await productosDataServices.create(data);
      alert("El registro se guardo con exito");
      reset();
    } catch (error) {
      console.log("Ocurrio un error al crear el producto. Error: " + error);
    }
  };
  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Crear producto</h1>
      <div className="col-5">
        <form onSubmit={handleSubmit(crearProducto)}>
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-3 col-form-label">
              Nombre
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="inputName"
                {...register("nombre", { validate: { trimRequired } })}
              />
              {errors.nombre && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputMarca" className="col-sm-3 col-form-label">
              Marca
            </label>
            <div className="col-sm-9">
              <select
                className="form-select"
                id="inputMarca"
                aria-label="Default select example"
                {...register("marca", { validate: { trimRequired } })}
              >
                <option value="">.::Select::.</option>
                {options[0] && options[0].length > 0
                  ? options[0].map((marca) => (
                      <option
                        key={`marca_${marca.id_marca}`}
                        value={marca.id_marca}
                      >
                        {marca.nombre_marca}
                      </option>
                    ))
                  : ""}
              </select>
              {errors.marca && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputTipo" className="col-sm-3 col-form-label">
              Tipo
            </label>
            <div className="col-sm-9">
              <select
                className="form-select"
                id="inputTipo"
                aria-label="Default select example"
                {...register("tipo", { validate: { trimRequired } })}
              >
                <option value="">.::Select::.</option>
                {options[1] && options[1].length > 0
                  ? options[1].map((tipo) => (
                      <option
                        key={`tipo_${tipo.id_tipo_producto}`}
                        value={tipo.id_tipo_producto}
                      >
                        {tipo.tipo_producto}
                      </option>
                    ))
                  : ""}
              </select>
              {errors.tipo && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputCategoria" className="col-sm-3 col-form-label">
              Categoría
            </label>
            <div className="col-sm-9">
              <select
                className="form-select"
                id="inputCategoria"
                aria-label="Default select example"
                {...register("categoria", { validate: { trimRequired } })}
              >
                <option value="">.::Select::.</option>
                {options[2] && options[2].length > 0
                  ? options[2].map((categoria) => (
                      <option
                        key={`categoria_${categoria.id_categoria}`}
                        value={categoria.id_categoria}
                      >
                        {categoria.nombre_categoria}
                      </option>
                    ))
                  : ""}
              </select>
              {errors.categoria && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputMedida" className="col-sm-3 col-form-label">
              Un. Medida
            </label>
            <div className="col-sm-9">
              <select
                className="form-select"
                id="inputMedida"
                aria-label="Default select example"
                {...register("medida", { validate: { trimRequired } })}
              >
                <option value="">.::Select::.</option>
                {options[3] && options[3].length > 0
                  ? options[3].map((medida) => (
                      <option
                        key={`medida_${medida.id_unidadMedida}`}
                        value={medida.id_unidadMedida}
                      >
                        {medida.unidadMedida}
                      </option>
                    ))
                  : ""}
              </select>
              {errors.medida && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEstado" className="col-sm-3 col-form-label">
              Estado
            </label>
            <div className="col-sm-9">
              <select
                className="form-select"
                id="inputEstado"
                aria-label="Default select example"
                {...register("estado", { validate: { trimRequired } })}
              >
                <option value="">.::Select::.</option>
                <option value="Disponible">Disponible</option>
                <option value="No Disponible">No Disponible</option>
              </select>
              {errors.estado && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPrecio" className="col-sm-3 col-form-label">
              Precio
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                id="inputPrecio"
                {...register("precio", { validate: { trimRequired } })}
              />
              {errors.precio && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputStock" className="col-sm-3 col-form-label">
              Stock
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                id="inputStock"
                {...register("stock", { validate: { trimRequired } })}
              />
              {errors.stock && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputVendidos" className="col-sm-3 col-form-label">
              Vendidos
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                id="inputVendidos"
                {...register("vendidos", { validate: { trimRequired } })}
              />
              {errors.vendidos && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <a href="../productos">Return</a>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
