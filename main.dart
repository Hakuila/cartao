final api = CartaoInternoAPI("https://api.cartao-interno.com");

final auth = await api.login("a@a.com", "123");
api.setToken(auth["token"]);

final lojas = await api.listarLojas();
print(lojas);
