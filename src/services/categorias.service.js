import http from "../http-common";

class CategoriasDataServices {
  getAll() {
    return http.get("/categorias");
  }

  get(id) {
    return http.get(`/categorias/${id}`);
  }

  create(data) {
    return http.post("/crearCategoria", data);
  }

  update(id, data) {
    return http.put(`/categorias/${id}`, data);
  }

  delete(id) {
    return http.delete(`/deleteCategoria/${id}`);
  }
}

const categoriasDataServices = new CategoriasDataServices();
export default categoriasDataServices;
