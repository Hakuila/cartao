// sdk/api.ts
import axios, { AxiosInstance } from "axios";
import {
  LoginRequest,
  AuthResponse,
  Loja,
  Cliente,
  Transacao,
  Fatura
} from "./types";

export class CartaoInternoAPI {
  private http: AxiosInstance;

  constructor(baseURL: string, token?: string) {
    this.http = axios.create({ baseURL });

    if (token) this.setToken(token);
  }

  setToken(token: string) {
    this.http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // AUTH ===================================================
  login(body: LoginRequest) {
    return this.http.post<AuthResponse>("/auth/login", body);
  }

  // LOJAS ==================================================
  criarLoja(body: Loja) {
    return this.http.post("/admin/lojas", body);
  }

  listarLojas() {
    return this.http.get<Loja[]>("/admin/lojas");
  }

  // CLIENTES ==============================================
  cadastrarCliente(lojaId: string, body: Cliente) {
    return this.http.post(`/lojas/${lojaId}/clientes`, body);
  }

  // TRANSAÇÕES ============================================
  registrarTransacao(clienteId: string, body: Transacao) {
    return this.http.post(`/clientes/${clienteId}/transacoes`, body);
  }

  listarTransacoes(clienteId: string) {
    return this.http.get<Transacao[]>(`/clientes/${clienteId}/transacoes`);
  }

  // FATURA =================================================
  obterFatura(clienteId: string) {
    return this.http.get<Fatura>(`/faturas/${clienteId}`);
  }
}
