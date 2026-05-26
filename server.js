const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3333);
const ROOT = __dirname;
const DB_PATH = path.join(ROOT, "database.json");
const CONTACT_DB_PATH = path.join(ROOT, "public", "data", "fale-conosco.json");
const VEHICLES_PATH = path.join(ROOT, "public", "data", "carros.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

function enviarJson(res, status, dados) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(dados));
}

function lerBanco() {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8").replace(/^\uFEFF/, ""));
}

function salvarBanco(banco) {
  fs.writeFileSync(DB_PATH, JSON.stringify(banco, null, 2));
}

function tabela(banco, nome) {
  if (banco.tabelas && Array.isArray(banco.tabelas[nome])) return banco.tabelas[nome];
  if (!Array.isArray(banco[nome])) banco[nome] = [];
  return banco[nome];
}

function lerBancoFaleConosco() {
  if (!fs.existsSync(CONTACT_DB_PATH)) {
    return {
      nome: "fale_conosco",
      tipo: "json",
      descricao: "Banco separado das mensagens enviadas pelo formulario Fale Conosco.",
      mensagens: [],
    };
  }

  return JSON.parse(fs.readFileSync(CONTACT_DB_PATH, "utf8").replace(/^\uFEFF/, ""));
}

function salvarBancoFaleConosco(banco) {
  fs.writeFileSync(CONTACT_DB_PATH, JSON.stringify(banco, null, 2));
}

function proximoId(lista, campo) {
  const maiorId = lista.reduce((maior, item) => Math.max(maior, Number(item[campo] || 0)), 0);
  return maiorId + 1;
}

function hoje() {
  return new Date().toISOString().slice(0, 10);
}

function agora() {
  return new Date().toISOString();
}

function agoraBrasil() {
  return new Date().toLocaleString("pt-BR");
}

function lerBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

function adicionarStatusEstoque(item) {
  return {
    ...item,
    status_estoque: Number(item.quantidade) <= Number(item.quantidade_minima) ? "estoque baixo" : "ok",
  };
}

async function cadastrar(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const usuarios = tabela(banco, "usuarios");

  if (!dados.nome || !dados.email || !dados.senha) {
    return enviarJson(res, 400, { erro: "Nome, email e senha sao obrigatorios." });
  }

  if (dados.senha !== dados.confirmar_senha) {
    return enviarJson(res, 400, { erro: "As senhas nao conferem." });
  }

  const existente = usuarios.find((usuario) => usuario.email === dados.email);
  if (existente) {
    return enviarJson(res, 400, { erro: "Este email ja esta cadastrado." });
  }

  const usuario = {
    id: Date.now(),
    nome: dados.nome,
    cpf: dados.cpf || null,
    nascimento: dados.nascimento || null,
    email: dados.email,
    telefone: dados.telefone || null,
    senha: dados.senha,
    confirmar_senha: dados.confirmar_senha || null,
    interesse: dados.interesse || null,
    modelo: dados.modelo || null,
    observacoes: dados.observacoes || null,
    criadoEm: agoraBrasil(),
  };

  usuarios.push(usuario);
  salvarBanco(banco);

  const { senha, ...usuarioSemSenha } = usuario;
  return enviarJson(res, 201, { mensagem: "Cadastro salvo com sucesso.", usuario: usuarioSemSenha });
}

async function login(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const usuarios = tabela(banco, "usuarios");

  const usuario = usuarios.find(
    (item) => item.email === dados.email && item.senha === dados.password
  );

  if (!usuario) {
    return enviarJson(res, 401, { erro: "Email ou senha incorretos." });
  }

  const { senha, ...usuarioSemSenha } = usuario;
  return enviarJson(res, 200, { mensagem: "Login realizado com sucesso.", usuario: usuarioSemSenha });
}

async function contato(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const bancoFaleConosco = lerBancoFaleConosco();
  const contatos = tabela(banco, "contatos");
  const mensagens = bancoFaleConosco.mensagens || [];
  bancoFaleConosco.mensagens = mensagens;

  const contatoSalvo = {
    id: Date.now(),
    nome: dados.nome || "",
    email: dados.email || "",
    assunto: dados.assunto || "",
    mensagem: dados.mensagem || "",
    criadoEm: agoraBrasil(),
  };

  contatos.push(contatoSalvo);
  mensagens.push(contatoSalvo);
  salvarBanco(banco);
  salvarBancoFaleConosco(bancoFaleConosco);

  return enviarJson(res, 201, { mensagem: "Mensagem salva com sucesso.", contato: contatoSalvo });
}

async function listarContatos(res) {
  const banco = lerBanco();
  return enviarJson(res, 200, [...tabela(banco, "contatos")].reverse());
}

async function listarClientes(res) {
  const banco = lerBanco();
  return enviarJson(res, 200, [...tabela(banco, "clientes")].reverse());
}

async function criarCliente(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const clientes = tabela(banco, "clientes");

  if (!dados.nome) {
    return enviarJson(res, 400, { erro: "O nome do cliente e obrigatorio." });
  }

  const cliente = {
    cod_cli: proximoId(clientes, "cod_cli"),
    nome: dados.nome,
    endereco: dados.endereco || null,
    telefone: dados.telefone || null,
    email: dados.email || null,
    data_cadastro: hoje(),
  };

  clientes.push(cliente);
  salvarBanco(banco);

  return enviarJson(res, 201, { mensagem: "Cliente cadastrado com sucesso.", cliente });
}

async function listarPedidos(res) {
  const banco = lerBanco();
  return enviarJson(res, 200, [...tabela(banco, "pedidos")].reverse());
}

async function criarPedido(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const pedidos = tabela(banco, "pedidos");

  if (!dados.nome_produto) {
    return enviarJson(res, 400, { erro: "O nome do produto e obrigatorio." });
  }

  const quantidade = Number(dados.quantidade || 0);
  const valorUnitario = Number(dados.valor_unitario || 0);

  const pedido = {
    cod_pedido: proximoId(pedidos, "cod_pedido"),
    cod_cli: dados.cod_cli || null,
    nome_produto: dados.nome_produto,
    descricao: dados.descricao || null,
    data_venda: hoje(),
    prazo_validade: dados.prazo_validade || null,
    quantidade,
    valor_unitario: valorUnitario,
    valor_total: Number(dados.valor_total || quantidade * valorUnitario),
  };

  pedidos.push(pedido);
  salvarBanco(banco);

  return enviarJson(res, 201, { mensagem: "Pedido cadastrado com sucesso.", pedido });
}

async function listarPecas(res) {
  const banco = lerBanco();
  return enviarJson(res, 200, [...tabela(banco, "pecas")].reverse());
}

async function criarPeca(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const pecas = tabela(banco, "pecas");

  if (!dados.codigo || !dados.nome) {
    return enviarJson(res, 400, { erro: "Codigo e nome da peca sao obrigatorios." });
  }

  const peca = {
    id_peca: proximoId(pecas, "id_peca"),
    codigo: dados.codigo,
    modelo: dados.modelo || null,
    marca: dados.marca || null,
    nome: dados.nome,
  };

  pecas.push(peca);
  salvarBanco(banco);

  return enviarJson(res, 201, { mensagem: "Peca cadastrada com sucesso.", peca });
}

async function listarEstoque(res) {
  const banco = lerBanco();
  return enviarJson(res, 200, [...tabela(banco, "estoque")].reverse().map(adicionarStatusEstoque));
}

async function criarEstoque(req, res) {
  const dados = await lerBody(req);
  const banco = lerBanco();
  const estoque = tabela(banco, "estoque");

  if (!dados.nome || dados.quantidade === undefined || dados.quantidade_minima === undefined) {
    return enviarJson(res, 400, { erro: "Nome, quantidade e quantidade_minima sao obrigatorios." });
  }

  const item = {
    id_estoque: proximoId(estoque, "id_estoque"),
    nome: dados.nome,
    quantidade: Number(dados.quantidade),
    marca: dados.marca || null,
    quantidade_minima: Number(dados.quantidade_minima),
    data_de_entrada: hoje(),
  };

  estoque.push(item);
  salvarBanco(banco);

  return enviarJson(res, 201, {
    mensagem: "Item de estoque cadastrado com sucesso.",
    item: adicionarStatusEstoque(item),
  });
}

async function listarVeiculos(res) {
  const veiculos = JSON.parse(fs.readFileSync(VEHICLES_PATH, "utf8").replace(/^\uFEFF/, ""));
  return enviarJson(res, 200, veiculos);
}

function servirArquivo(req, res) {
  let url = decodeURIComponent(req.url.split("?")[0]);
  if (url === "/") url = "/index.html";

  const arquivo = path.normalize(path.join(ROOT, url));
  if (!arquivo.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Acesso negado");
  }

  if (!fs.existsSync(arquivo) || !fs.statSync(arquivo).isFile()) {
    res.writeHead(404);
    return res.end("Arquivo nao encontrado");
  }

  const extensao = path.extname(arquivo).toLowerCase();
  res.writeHead(200, { "Content-Type": mimeTypes[extensao] || "text/plain; charset=utf-8" });
  return fs.createReadStream(arquivo).pipe(res);
}

async function lidarComRequisicao(req, res) {
  try {
    if (req.method === "GET" && req.url === "/api/health") {
      return enviarJson(res, 200, { status: "ok", banco: "json", arquivo: "/database.json" });
    }

    if (req.method === "GET" && req.url === "/api/veiculos") return listarVeiculos(res);
    if (req.method === "POST" && req.url === "/api/auth/register") return cadastrar(req, res);
    if (req.method === "POST" && req.url === "/api/auth/login") return login(req, res);
    if (req.method === "POST" && req.url === "/api/contact") return contato(req, res);
    if (req.method === "GET" && req.url === "/api/contact") return listarContatos(res);
    if (req.method === "GET" && req.url === "/api/clientes") return listarClientes(res);
    if (req.method === "POST" && req.url === "/api/clientes") return criarCliente(req, res);
    if (req.method === "GET" && req.url === "/api/pedidos") return listarPedidos(res);
    if (req.method === "POST" && req.url === "/api/pedidos") return criarPedido(req, res);
    if (req.method === "GET" && req.url === "/api/pecas") return listarPecas(res);
    if (req.method === "POST" && req.url === "/api/pecas") return criarPeca(req, res);
    if (req.method === "GET" && req.url === "/api/estoque") return listarEstoque(res);
    if (req.method === "POST" && req.url === "/api/estoque") return criarEstoque(req, res);

    return servirArquivo(req, res);
  } catch (error) {
    console.error(error);
    return enviarJson(res, 500, {
      erro: "Erro no servidor ou no banco JSON.",
      detalhe: error.message,
    });
  }
}

const server = http.createServer(lidarComRequisicao);

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Banco JSON: database.json");
});
