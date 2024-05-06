import http from "../http-common";

class MarcasDataServices {
  getAll() {
    return http.get("/marcas");
  }

  get(id) {
    return http.get(`/marcas/${id}`);
  }

  create(data) {
    return http.post("/marcas", data);
  }

  update(id, data) {
    return http.put(`/marcas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/marcas/${id}`);
  }
}

const marcasDataServices = new MarcasDataServices();
export default marcasDataServices;
