import http from "../http-common";

class TipoProductoDataServices {
  getAll() {
    return http.get("/tipoProducto");
  }
  create(data) {
    return http.post("/crearTipo", data);
  }
  get(id) {
    return http.get(`/tipoProducto/${id}`);
  }
  update(id, data) {
    return http.put(`/tipoProducto/${id}`, data);
  }
  delete(id) {
    return http.delete(`/deleteTipo/${id}`);
  }
}

const tipoProductoDataServices = new TipoProductoDataServices();
export default tipoProductoDataServices;
