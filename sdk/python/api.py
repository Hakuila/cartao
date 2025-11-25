# sdk/api.py
import requests

class CartaoInternoAPI:
    def __init__(self, base_url, token=None):
        self.base_url = base_url
        self.token = token

    @property
    def headers(self):
        h = {"Content-Type": "application/json"}
        if self.token:
            h["Authorization"] = f"Bearer {self.token}"
        return h

    # AUTH ================================================
    def login(self, email, password):
        r = requests.post(
            f"{self.base_url}/auth/login",
            json={"email": email, "password": password},
            headers=self.headers
        )
        data = r.json()
        self.token = data["token"]
        return data

    # LOJAS ===============================================
    def criar_loja(self, loja):
        return requests.post(
            f"{self.base_url}/admin/lojas",
            json=loja,
            headers=self.headers
        ).json()

    def listar_lojas(self):
        return requests.get(
            f"{self.base_url}/admin/lojas",
            headers=self.headers
        ).json()

    # CLIENTES ============================================
    def cadastrar_cliente(self, loja_id, cliente):
        return requests.post(
            f"{self.base_url}/lojas/{loja_id}/clientes",
            json=cliente,
            headers=self.headers
        ).json()

    # TRANSAÇÕES ==========================================
    def registrar_transacao(self, cliente_id, transacao):
        return requests.post(
            f"{self.base_url}/clientes/{cliente_id}/transacoes",
            json=transacao,
            headers=self.headers
        ).json()

    def listar_transacoes(self, cliente_id):
        return requests.get(
            f"{self.base_url}/clientes/{cliente_id}/transacoes",
            headers=self.headers
        ).json()

    # FATURA ==============================================
    def obter_fatura(self, cliente_id):
        return requests.get(
            f"{self.base_url}/faturas/{cliente_id}",
            headers=self.headers
        ).json()
