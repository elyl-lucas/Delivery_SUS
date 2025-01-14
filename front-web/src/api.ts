import axios from "axios";
import { OrderPayload, User } from "./Orders/types";

const API_URL = 'http://localhost:8080';
export function fetchProducts(){
    return axios (`${API_URL}/products`)
}

export function saveOrder(payload: OrderPayload){
        return axios.post(`${API_URL}/orders`, payload);
}

export function saveUser(user: User){
    return axios.post(`${API_URL}/users`, user);
}

export function fetchOrders(){
    return axios.get(`${API_URL}/orders/buscar-por-status?status=2`)
}

export function fetchProductsByName(name:string){
    return axios.get(`${API_URL}/products/buscarPorNome?name=${name}`)
}

export function verificarLogin(name:string,email:string){
    return axios.get(`${API_URL}/users/verificarLogin?name=${name}&${email}`)
}
