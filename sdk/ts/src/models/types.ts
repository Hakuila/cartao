// sdk/types.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: Usuario;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  papel: string;
}

export interface Loja {
  id?: string;
  nome: string;
  endereco: string;
}

export interface Cliente {
  id?: string;
  nome: string;
  cpf: string;
  limite: number;
}

export interface Transacao {
  id?: string;
  valor: number;
  descricao: string;
  data?: string;
}

export interface Fatura {
  clienteId: string;
  vencimento: string;
  total: number;
  transacoes: Transacao[];
}
