import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import productosDataServices from "../../services/productos-services";
import { trimRequired } from "../../services/trimRequired";
import { useOptions } from "../../services/select-options-service";

export default function EditarProducto() {
  const { id } = useParams();

  //Hook de manejo de formularios
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
    clearErrors,
  } = useForm();

  //Obtener opciones para listas desplegables del formulario:
  //marcas, tipos de producto, categoria y unidades de medida
  const options = useOptions();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await productosDataServices.get(id);
        const data = response.data;

        setValue("id", id);
        setValue("nombre", data.nombre);
        setValue("estado", data.estado);
        setValue("marca", data.marca);
        setValue("tipo", data.tipo);
        setValue("categoria", data.categoria);
        setValue("medida", data.medida);
        setValue("precio", data.precio);
        setValue("stock", data.stock);
        setValue("vendidos", data.vendidos);
      } catch (error) {
        console.log("error al obtener los datos de la categoría");
      }
    };
    getData();
  }, [id, setValue]);

  //Guardar cambios de información del formulario
  const saveChange = async (data) => {
    try {
      await productosDataServices.update(id, data);
      alert("Registro actualizado");
    } catch (error) {
      console.log("Error al actualizar el tipo de producto. Error: " + error);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (trimRequired(value)) {
      setValue(name, value);
      clearErrors(name);
    } else {
      setError(name);
    }
  };

  return (
    <div className="grid-center">
      <h1 className="text-center mb-3">Editar Producto</h1>
      <div className="col-4">
        <form onSubmit={handleSubmit(saveChange)}>
          <div className="row mb-3">
            <label htmlFor="inputId" className="col-sm-3 col-form-label">
              Id
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="inputId"
                disabled
                {...register("id", { required: true })}
              />
              {errors.id && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-3 col-form-label">
              Nombre
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="inputName"
                {...register("nombre", { required: true })}
                onChange={handleBlur}
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
                {...register("marca", { required: true })}
                onChange={handleBlur}
              >
                <option value="">.::Select::.</option>
                {options[0].map((marca) => (
                  <option
                    key={`marca_${marca.id_marca}`}
                    value={marca.id_marca}
                  >
                    {marca.nombre_marca}
                  </option>
                ))}
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
                {...register("tipo", { required: true })}
                onChange={handleBlur}
              >
                <option value="">.::Select::.</option>
                {options[1].map((tipo) => (
                  <option
                    key={`tipo_${tipo.id_tipo_producto}`}
                    value={tipo.id_tipo_producto}
                  >
                    {tipo.tipo_producto}
                  </option>
                ))}
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
                {...register("categoria", { required: true })}
                onChange={handleBlur}
              >
                <option value="">.::Select::.</option>
                {options[2].map((categoria) => (
                  <option
                    key={`categoria_${categoria.id_categoria}`}
                    value={categoria.id_categoria}
                  >
                    {categoria.nombre_categoria}
                  </option>
                ))}
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
                {...register("medida", { required: true })}
                onChange={handleBlur}
              >
                <option value="">.::Select::.</option>
                {options[3].map((medida) => (
                  <option
                    key={`medida_${medida.id_unidadMedida}`}
                    value={medida.id_unidadMedida}
                  >
                    {medida.unidadMedida}
                  </option>
                ))}
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
                {...register("estado", { required: true })}
                onChange={handleBlur}
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
                {...register("precio", { required: true })}
                onChange={handleBlur}
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
                {...register("stock", { required: true })}
                onChange={handleBlur}
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
                {...register("vendidos", { required: true })}
                onChange={handleBlur}
              />
              {errors.vendidos && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <a href="../productos">Return</a>
            <button type="submit" className="btn btn-success">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
