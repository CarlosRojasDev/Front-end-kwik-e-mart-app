import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/kwikemart",
    headers: {
        "Content-Type": "application/json"
    }
})