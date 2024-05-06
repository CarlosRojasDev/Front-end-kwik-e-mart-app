import http from "../http-common";

class ProductosDataServices {
  getAll() {
    return http.get("/productos");
  }
  create(data) {
    return http.post("/productos", data);
  }
  get(id) {
    return http.get(`/productos/${id}`);
  }
  update(id, data) {
    return http.put(`/productos/${id}`, data);
  }
  delete(id) {
    return http.delete(`/productos/${id}`);
  }
}

const productosDataServices = new ProductosDataServices();
export default productosDataServices;
