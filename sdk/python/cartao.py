from sdk.python.api import CartaoInternoAPI

api = CartaoInternoAPI("https://api.cartao-interno.com")

auth = api.login("a@a.com", "123")

print(api.listar_lojas())
