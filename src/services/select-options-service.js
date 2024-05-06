import { useEffect, useState } from "react";
import marcasDataServices from "./marcas.service";
import tipoProductoDataServices from "./tipo-producto-services";
import categoriasDataServices from "./categorias.service";
import unidadMedidaDataServices from "./unidad-medida-services";

//Retorna opciones para listas desplegables de formularios de productos.
//marcas,tipos de producto, categorías y unidades de medida

export function useOptions() {
  const [options, setOptions] = useState([[], [], [], []]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [marcas, tipos, categorias, medidas] = await Promise.all([
          marcasDataServices.getAll(),
          tipoProductoDataServices.getAll(),
          categoriasDataServices.getAll(),
          unidadMedidaDataServices.getAll(),
        ]);

        setOptions([marcas.data, tipos.data, categorias.data, medidas.data]);
      } catch (error) {
        console.log("Error al obtener opciones:", error);
      }
    };

    fetchOptions();
  }, []);

  return options;
}
