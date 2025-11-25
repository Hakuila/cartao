import { CartaoInternoAPI } from "./sdk/ts/src/services/api";

const api = new CartaoInternoAPI("https://api.cartao-interno.com");

const login = await api.login({ email: "a@a.com", password: "123" });
api.setToken(login.data.token);

const lojas = await api.listarLojas();
console.log(lojas.data);
