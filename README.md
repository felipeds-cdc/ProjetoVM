# 🚗 Vortex Motors - O Futuro em Movimento

![Vortex Motors](/public/images/LOGO.png)

> **Plataforma digital para comercialização de veículos e peças automotivas**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📋 Sobre o Projeto

A **Vortex Motors** é uma plataforma web desenvolvida para facilitar a divulgação, busca e negociação de veículos e peças automotivas. O projeto foi desenvolvido por alunos do curso de **Ciência da Computação da Uninove** como parte do **Projeto de Extensão em Desenvolvimento de Software** sob orientação da **Prof. Priscilla Cunha**.

Nosso objetivo é proporcionar uma interface moderna e intuitiva para que clientes encontrem os melhores carros e peças pelo melhor custo-benefício do mercado.

### ✨ Funcionalidades

- 🏠 **Página Inicial** - Banner atrativo com visão geral dos serviços
- ℹ️ **Sobre Nós** - História, missão, visão, valores e diferenciais da empresa
- 👥 **Equipe** - Apresentação dos membros da equipe de desenvolvimento
- 🔐 **Autenticação** - Sistema de login e cadastro de usuários
- 📞 **Contato** - Formulário de contato e informações de comunicação
- 🔧 **Serviços**:
  - Troca de peças automotivas
  - Busca de pontos de carregamento
  - Serviço de entrega rápida
- 💬 **WhatsApp Integration** - Botão flutuante para contato imediato

---

## 🏗️ Estrutura do Projeto

```
ProjetoExte/
├── 📁 config/                  # Configurações do projeto
│   └── .env.example           # Exemplo de variáveis de ambiente
├── 📁 docs/                    # Documentação técnica
├── 📁 pages/                   # Páginas HTML organizadas por módulo
│   ├── auth/                  # Autenticação
│   │   ├── login.html
│   │   └── cadastro.html
│   ├── services/              # Serviços
│   │   ├── servicos.html
│   │   ├── troca_pecas.html
│   │   ├── carregamento.html
│   │   └── entrega_rapida.html
│   ├── about/                 # Sobre
│   │   ├── sobre.html
│   │   └── equipe.html
│   └── contact/               # Contato
│       └── contato.html
├── 📁 public/                  # Assets públicos
│   ├── css/
│   │   └── styles.css         # CSS principal consolidado
│   ├── js/
│   │   ├── components.js      # Carregamento de componentes
│   │   └── form-validation.js # Validação de formulários
│   └── images/                # Imagens e ícones
├── 📁 src/                     # Código fonte
│   ├── components/            # Componentes reutilizáveis
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── whatsapp-float.html
│   └── utils/
│       └── logger.js          # Sistema de logs
├── 📁 tests/                   # Testes
│   ├── unit/                  # Testes unitários
│   └── integration/           # Testes de integração
├── 📁 scripts/                 # Scripts utilitários
├── index.html                  # Página inicial
├── .gitignore                  # Arquivos ignorados pelo Git
└── README.md                   # Este arquivo
```

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estruturação semântica das páginas |
| **CSS3** | Estilização com variáveis CSS, Flexbox e Grid |
| **JavaScript (ES6+)** | Validação de formulários e carregamento de componentes |
| **Google Fonts** | Fontes Orbitron e Rajdhani |
| **WhatsApp API** | Integração com WhatsApp Business |

---

## 📦 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor HTTP local (opcional, mas recomendado)

### Método 1: Abrir Direto no Navegador

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vortex-motors.git
cd vortex-motors

# Abra o arquivo index.html no navegador
open index.html       # macOS
xdg-open index.html   # Linux
start index.html      # Windows
```

### Método 2: Usando Servidor HTTP (Recomendado)

**Com Python:**
```bash
# Python 3
python -m http.server 3000

# Acesse: http://localhost:3000
```

**Com Node.js:**
```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute o servidor
http-server -p 3000

# Acesse: http://localhost:3000
```

**Com PHP:**
```bash
php -S localhost:3000

# Acesse: http://localhost:3000
```

---

## 🎨 Padrões de Projeto

### Princípios Aplicados

- ✅ **SOLID** - Separação de responsabilidades
- ✅ **DRY** (Don't Repeat Yourself) - CSS consolidado e componentes reutilizáveis
- ✅ **KISS** (Keep It Simple) - Código claro e objetivo
- ✅ **BEM** (Block Element Modifier) - Nomenclatura CSS consistente
- ✅ **Acessibilidade Web** - ARIA labels, HTML semântica, skip links

### Organização CSS

Utilizamos **Variáveis CSS** para centralizar cores, espaçamentos e configurações:

```css
:root {
  --color-primary: #00c8ff;
  --bg-dark: #0a0f1a;
  --font-heading: 'Orbitron', sans-serif;
  /* ... mais variáveis */
}
```

### Nomenclatura BEM

```css
/* Block */
.card { }

/* Element */
.card__title { }

/* Modifier */
.card--featured { }
```

---

## 🔐 Segurança

- ✅ Validação client-side de formulários
- ✅ Validação de CPF com algoritmo verificador
- ✅ Validação de formato de email
- ✅ Proteção contra XSS com `rel="noopener noreferrer"` em links externos
- ✅ Inputs com `autocomplete` adequado
- ✅ Senhas com requisito mínimo de 6 caracteres
- ✅ Arquivos `.env` ignorados pelo Git

---

## 🧪 Testes

### Estrutura de Testes

```
tests/
├── unit/              # Testes de funções isoladas
│   └── test-validation.js
└── integration/       # Testes de fluxo completo
    └── test-forms.js
```

### Executar Testes (Futuro)

```bash
# Quando Jest ou outro framework for configurado
npm test
```

---

## 📊 Observabilidade

O projeto inclui um sistema de **logs estruturado** (`src/utils/logger.js`) com níveis:

- `DEBUG` - Informações detalhadas para desenvolvimento
- `INFO` - Informações gerais sobre operação
- `WARN` - Avisos sobre situações potencialmente problemáticas
- `ERROR` - Erros que requerem atenção

```javascript
Logger.info('Página carregada', { page: 'login' });
Logger.error('Erro no formulário', error);
```

---

## 👥 Equipe

| Nome | Função | RA |
|------|--------|-----|
| **Matheus Levy** | Scrum Master | 3022107569 |
| **Myllena Vitoria** | Product Owner | 3026102899 |
| **Pedro Monteiro** | Desenvolvedor Front-End | 3026101384 |
| **João Victor** | Desenvolvedor Front-End | 3026103874 |
| **Felipe Diassis** | Desenvolvedor Back-End | 3025105875 |
| **Marcelo Floriano** | Desenvolvedor Back-End | 3026101271 |
| **Renan Vitor** | Desenvolvedor Banco de Dados | 3126102134 |
| **Gabriel Oliani** | Desenvolvedor Banco de Dados | 3026100030 |
| **Julia Zezilia** | Desenvolvedora Banco de Dados | 3026105026 |
| **Matheus de Luca** | Analista de Sistemas | 3026100090 |

**Orientadora:** Prof. Priscilla Cunha

---

## 🎓 Contexto Acadêmico

- **Instituição:** Universidade Nove de Julho (UNINOVE)
- **Curso:** Ciência da Computação
- **Disciplina:** Projeto de Extensão em Desenvolvimento de Software
- **Ano:** 2026

---

## 🗺️ Roadmap Futuro

### Fase 1 - Melhorias Imediatas
- [ ] Adicionar JavaScript para menu mobile responsivo
- [ ] Implementar loading states em formulários
- [ ] Adicionar animações de transição entre páginas
- [ ] Criar página de erro 404 personalizada

### Fase 2 - Backend
- [ ] Implementar servidor Node.js ou Python
- [ ] Configurar banco de dados MySQL/PostgreSQL
- [ ] Criar API RESTful
- [ ] Implementar autenticação JWT

### Fase 3 - Features Avançadas
- [ ] Catálogo de veículos com filtros avançados
- [ ] Sistema de busca integrado
- [ ] Dashboard administrativo
- [ ] Integração com gateway de pagamento
- [ ] Sistema de avaliações de clientes

### Fase 4 - DevOps
- [ ] Configurar CI/CD com GitHub Actions
- [ ] Deploy em produção (Vercel, Netlify ou AWS)
- [ ] Configurar monitoramento (Sentry, New Relic)
- [ ] Implementar testes automatizados

---

## 📚 Documentação Adicional

- [Guia de Contribuição](docs/CONTRIBUTING.md)
- [Padrões de Código](docs/CODE_STYLE.md)
- [Arquitetura do Sistema](docs/ARCHITECTURE.md)
- [Diagrama ER do Banco de Dados](docs/DATABASE.md)

---

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## 📞 Contato

- **WhatsApp:** [(11) 98403-9699](https://wa.me/5511984039699)
- **Email:** contato@vortexmotors.com.br
- **Localização:** São Paulo - SP, Brasil

---

## 🙏 Agradecimentos

- Universidade Nove de Julho (UNINOVE)
- Prof. Priscilla Cunha (Orientadora)
- Todos os membros da equipe pelo empenho e dedicação

---

<div align="center">

**Feito com ❤️ pela equipe Vortex Motors**

[⬆ Voltar ao topo](#-vortex-motors---o-futuro-em-movimento)

</div>
