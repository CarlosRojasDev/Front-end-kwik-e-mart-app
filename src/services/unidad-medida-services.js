import http from "../http-common";

class UnidadMedidaDataServices {
  getAll() {
    return http.get("/unidadMedida");
  }
  create(data) {
    return http.post("/crearUnidadMedida", data);
  }
  get(id) {
    return http.get(`/unidadMedida/${id}`);
  }
  update(id, data) {
    return http.put(`/unidadMedida/${id}`, data);
  }
  delete(id) {
    return http.delete(`/deleteUnidadMedida/${id}`);
  }
}

const unidadMedidaDataServices = new UnidadMedidaDataServices();
export default unidadMedidaDataServices;
