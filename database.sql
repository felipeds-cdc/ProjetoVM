-- Banco de dados do projeto Vortex Motors
-- Gerado a partir dos arquivos JSON do projeto.
-- O projeto continua usando JSON; este arquivo serve para anexar ou consultar a estrutura em SQL.

CREATE TABLE usuarios (
  id BIGINT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(20),
  nascimento DATE,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  senha VARCHAR(100) NOT NULL,
  confirmar_senha VARCHAR(100),
  interesse VARCHAR(100),
  modelo VARCHAR(100),
  observacoes TEXT,
  criadoEm VARCHAR(30)
);

CREATE TABLE contatos (
  id BIGINT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  assunto VARCHAR(150),
  mensagem TEXT NOT NULL,
  criadoEm VARCHAR(30)
);

CREATE TABLE clientes (
  cod_cli BIGINT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(200),
  telefone VARCHAR(20),
  email VARCHAR(100),
  data_cadastro DATE
);

CREATE TABLE pedidos (
  cod_pedido BIGINT PRIMARY KEY,
  cod_cli BIGINT,
  nome_produto VARCHAR(100) NOT NULL,
  descricao VARCHAR(500),
  data_venda DATE,
  prazo_validade DATE,
  quantidade INTEGER,
  valor_unitario DECIMAL(10,2),
  valor_total DECIMAL(10,2)
);

CREATE TABLE pecas (
  id_peca BIGINT PRIMARY KEY,
  codigo VARCHAR(50) NOT NULL,
  modelo VARCHAR(100),
  marca VARCHAR(100),
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE estoque (
  id_estoque BIGINT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  quantidade INTEGER NOT NULL,
  marca VARCHAR(200),
  quantidade_minima INTEGER NOT NULL,
  data_de_entrada DATE
);

CREATE TABLE veiculos (
  id BIGINT PRIMARY KEY,
  marca VARCHAR(100),
  nome VARCHAR(150) NOT NULL,
  slug VARCHAR(150),
  status VARCHAR(50),
  badge VARCHAR(50),
  cor VARCHAR(50),
  transmissao VARCHAR(50),
  preco DECIMAL(12,2),
  bateria VARCHAR(50),
  autonomia INTEGER,
  potencia INTEGER,
  km_por_carga INTEGER,
  ano VARCHAR(20),
  imagem VARCHAR(255)
);

-- Dados da tabela usuarios
INSERT INTO usuarios (id, nome, cpf, nascimento, email, telefone, senha, confirmar_senha, interesse, modelo, observacoes, criadoEm) VALUES (1779738288744, 'Gabriel', '43838257880', '2008-05-23', 'olianimarianogabriel@gmail.com', '11972646713', '20232325', '20232325', 'compra', 'BYD SEAL', NULL, '25/05/2026, 16:44:48');
INSERT INTO usuarios (id, nome, cpf, nascimento, email, telefone, senha, confirmar_senha, interesse, modelo, observacoes, criadoEm) VALUES (1779741104729, 'GABRIEL OLIANI MARIANO', '999.888.999-00', '2000-04-12', 'loloebiel06@gmail.com', '1199999999', '123456', '123456', 'troca', 'seal', NULL, '25/05/2026, 17:31:44');

-- Dados da tabela contatos
INSERT INTO contatos (id, nome, email, assunto, mensagem, criadoEm) VALUES (1, 'Rajada 55', 'loloebiel06@gmail.com', 'jksojfoisjfopjsofj', 'oksoajodjoajdoajoddf', '2026-05-26T00:33:25.047Z');
INSERT INTO contatos (id, nome, email, assunto, mensagem, criadoEm) VALUES (1779755920266, 'GABRIEL OLIANI MARIANO', 'loloebiel06@gmail.com', 'aaaaaaaa', 'asasasasasasasasawsasssawasas', '25/05/2026, 21:38:40');

-- Dados da tabela clientes
-- Sem dados cadastrados em clientes.

-- Dados da tabela pedidos
-- Sem dados cadastrados em pedidos.

-- Dados da tabela pecas
-- Sem dados cadastrados em pecas.

-- Dados da tabela estoque
-- Sem dados cadastrados em estoque.

-- Dados da tabela veiculos
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (1, 'Tesla', 'Tesla Cybertruck', 'tesla-cybertruck', 'Novo', 'Novo', 'Prata', 'Automatico', 950000, '123 kWh', 515, 845, 515, '2025/2026', '/img/veiculo/cybertruck.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (2, 'BYD', 'BYD Dolphin', 'byd-dolphin', 'Novo', 'Novo', 'Azul', 'Automatico', 150000, '44.9 kWh', 291, 95, 291, '2025/2026', '/img/veiculo/dolphin.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (3, 'BYD', 'BYD Dolphin Mini', 'byd-dolphin-mini', 'Novo', 'Novo', 'Branco', 'Automatico', 120000, '38 kWh', 280, 75, 280, '2025/2026', '/img/veiculo/dolphinmin.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (4, 'JAC', 'JAC E-J7', 'jac-e-j7', 'Usado', 'Usado', 'Preto', 'Automatico', 210000, '50 kWh', 402, 193, 402, 2024, '/img/veiculo/ej7.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (5, 'JAC', 'JAC E-JS1', 'jac-e-js1', 'Usado', 'Usado', 'Vermelho', 'Automatico', 95000, '30 kWh', 302, 62, 302, 2023, '/img/veiculo/ejs1.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (6, 'JAC', 'JAC E-JS4', 'jac-e-js4', 'Usado', 'Usado', 'Cinza', 'Automatico', 185000, '55 kWh', 420, 150, 420, 2023, '/img/veiculo/ejs4.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (7, 'JAC', 'JAC iEV330P', 'jac-iev330p', 'Usado', 'Usado', 'Branco', 'Automatico', 135000, '40 kWh', 330, 68, 330, 2023, '/img/veiculo/ev330.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (8, 'JAC', 'JAC iEV40', 'jac-iev40', 'Usado', 'Usado', 'Prata', 'Automatico', 145000, '40 kWh', 300, 115, 300, 2022, '/img/veiculo/ev40.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (9, 'BYD', 'BYD Han EV', 'byd-han-ev', 'Novo', 'Novo', 'Preto', 'Automatico', 540000, '85.4 kWh', 500, 517, 500, '2025/2026', '/img/veiculo/hanev.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (10, 'GWM', 'GWM Haval H6 PHEV', 'gwm-haval-h6-phev', 'Novo', 'Novo', 'Azul', 'Automatico', 320000, '34 kWh', 170, 393, 170, '2025/2026', '/img/veiculo/haval.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (11, 'Renault', 'Renault Kangoo E-Tech', 'renault-kangoo-e-tech', 'Novo', 'Novo', 'Branco', 'Automatico', 210000, '45 kWh', 285, 120, 285, '2025/2026', '/img/veiculo/kangoo.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (12, 'Renault', 'Renault Kwid E-Tech', 'renault-kwid-e-tech', 'Novo', 'Novo', 'Laranja', 'Automatico', 110000, '26.8 kWh', 185, 65, 185, '2025/2026', '/img/veiculo/kwide.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (13, 'Renault', 'Renault Megane E-Tech', 'renault-megane-e-tech', 'Novo', 'Novo', 'Cinza', 'Automatico', 280000, '60 kWh', 450, 220, 450, '2025/2026', '/img/veiculo/megane.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (14, 'Tesla', 'Tesla Model 3', 'tesla-model-3', 'Novo', 'Novo', 'Branco', 'Automatico', 300000, '75 kWh', 513, 283, 513, '2025/2026', '/img/veiculo/model3.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (15, 'Tesla', 'Tesla Model S', 'tesla-model-s', 'Novo', 'Novo', 'Preto', 'Automatico', 720000, '100 kWh', 652, 670, 652, '2025/2026', '/img/veiculo/models.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (16, 'Tesla', 'Tesla Model X', 'tesla-model-x', 'Novo', 'Novo', 'Prata', 'Automatico', 780000, '100 kWh', 560, 670, 560, '2025/2026', '/img/veiculo/modelx.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (17, 'Tesla', 'Tesla Model Y', 'tesla-model-y', 'Novo', 'Novo', 'Azul', 'Automatico', 420000, '75 kWh', 533, 384, 533, '2025/2026', '/img/veiculo/modely.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (18, 'GWM', 'GWM Ora GT', 'gwm-ora-gt', 'Novo', 'Novo', 'Vermelho', 'Automatico', 190000, '63 kWh', 400, 171, 400, '2025/2026', '/img/veiculo/oragt.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (19, 'GWM', 'GWM Ora 03 Lightning', 'gwm-ora-03-lightning', 'Novo', 'Novo', 'Branco', 'Automatico', 175000, '48 kWh', 310, 171, 310, '2025/2026', '/img/veiculo/oralighting.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (20, 'GWM', 'GWM Ora 03 Skin', 'gwm-ora-03-skin', 'Novo', 'Novo', 'Rosa', 'Automatico', 165000, '48 kWh', 310, 171, 310, '2025/2026', '/img/veiculo/oraskin.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (21, 'Renault', 'Renault Scenic E-Tech', 'renault-scenic-e-tech', 'Novo', 'Novo', 'Azul', 'Automatico', 330000, '87 kWh', 620, 220, 620, '2025/2026', '/img/veiculo/scenic.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (22, 'BYD', 'BYD Seal', 'byd-seal', 'Novo', 'Novo', 'Cinza', 'Automatico', 300000, '82.5 kWh', 520, 531, 520, '2025/2026', '/img/veiculo/seal.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (23, 'GWM', 'GWM Tank 300 PHEV', 'gwm-tank-300-phev', 'Novo', 'Novo', 'Verde', 'Automatico', 420000, '37 kWh', 120, 408, 120, '2025/2026', '/img/veiculo/tankev.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (24, 'BYD', 'BYD Yuan Pro', 'byd-yuan-pro', 'Novo', 'Novo', 'Branco', 'Automatico', 185000, '45.1 kWh', 294, 177, 294, '2025/2026', '/img/veiculo/yuanpro.jpeg');
INSERT INTO veiculos (id, marca, nome, slug, status, badge, cor, transmissao, preco, bateria, autonomia, potencia, km_por_carga, ano, imagem) VALUES (25, 'Renault', 'Renault Zoe E-Tech', 'renault-zoe-e-tech', 'Usado', 'Usado', 'Azul', 'Automatico', 145000, '52 kWh', 385, 135, 385, 2023, '/img/veiculo/zoee.jpeg');
