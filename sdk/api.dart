// sdk/api.dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class CartaoInternoAPI {
  final String baseUrl;
  String? token;

  CartaoInternoAPI(this.baseUrl);

  void setToken(String t) => token = t;

  Map<String, String> get headers => {
        "Content-Type": "application/json",
        if (token != null) "Authorization": "Bearer $token"
      };

  // AUTH ===================================================
  Future<Map<String, dynamic>> login(String email, String password) async {
    final res = await http.post(
      Uri.parse("$baseUrl/auth/login"),
      headers: headers,
      body: jsonEncode({"email": email, "password": password}),
    );
    return jsonDecode(res.body);
  }

  // LOJAS ==================================================
  Future<List<dynamic>> listarLojas() async {
    final res = await http.get(Uri.parse("$baseUrl/admin/lojas"), headers: headers);
    return jsonDecode(res.body);
  }

  Future<void> criarLoja(Map<String, dynamic> loja) async {
    await http.post(
      Uri.parse("$baseUrl/admin/lojas"),
      headers: headers,
      body: jsonEncode(loja),
    );
  }

  // CLIENTES ==============================================
  Future<void> cadastrarCliente(String lojaId, Map<String, dynamic> cliente) async {
    await http.post(
      Uri.parse("$baseUrl/lojas/$lojaId/clientes"),
      headers: headers,
      body: jsonEncode(cliente),
    );
  }

  // TRANSAÇÕES ============================================
  Future<void> registrarTransacao(
      String clienteId, Map<String, dynamic> transacao) async {
    await http.post(
      Uri.parse("$baseUrl/clientes/$clienteId/transacoes"),
      headers: headers,
      body: jsonEncode(transacao),
    );
  }

  Future<List<dynamic>> listarTransacoes(String clienteId) async {
    final res = await http.get(
      Uri.parse("$baseUrl/clientes/$clienteId/transacoes"),
      headers: headers,
    );
    return jsonDecode(res.body);
  }

  // FATURA =================================================
  Future<Map<String, dynamic>> obterFatura(String clienteId) async {
    final res = await http.get(
      Uri.parse("$baseUrl/faturas/$clienteId"),
      headers: headers,
    );
    return jsonDecode(res.body);
  }
}
