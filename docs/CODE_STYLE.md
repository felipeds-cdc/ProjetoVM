# 📝 Guia de Estilo de Código - Vortex Motors

## HTML

### Indentação
Use 2 espaços para indentação:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Título</title>
  </head>
  <body>
    <header class="header">
      <nav class="navbar">
        <a href="/">Home</a>
      </nav>
    </header>
  </body>
</html>
```

### Nomenclatura de Classes (BEM)

```html
<!-- ✅ Correto -->
<section class="card">
  <h2 class="card__title">Título</h2>
  <p class="card__description">Descrição</p>
  <button class="card__button card__button--primary">Ação</button>
</section>

<!-- ❌ Incorreto -->
<section class="card-container">
  <h2 class="title">Título</h2>
  <p class="desc">Descrição</p>
  <button class="btn">Ação</button>
</section>
```

### Acessibilidade

```html
<!-- ✅ Use aria-label para navegação -->
<nav aria-label="Menu principal">
  <a href="/sobre" aria-current="page">Sobre</a>
</nav>

<!-- ✅ Use alt descritivo em imagens -->
<img src="logo.png" alt="Logo Vortex Motors" />

<!-- ✅ Use labels em formulários -->
<label for="email">Email</label>
<input type="email" id="email" required aria-required="true" />
```

### Meta Tags Obrigatórias

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Descrição da página" />
  <title>VORTEX MOTORS - Título da Página</title>
</head>
```

## CSS

### Ordem de Declarações

1. Propriedades de posicionamento (`position`, `top`, `z-index`)
2. Modelo de caixa (`display`, `flex`, `grid`)
3. Tipografia (`font-size`, `color`)
4. Visual (`background`, `border`, `box-shadow`)
5. Outros

```css
.card {
  /* 1. Posicionamento */
  position: relative;
  z-index: 1;
  
  /* 2. Modelo de caixa */
  display: flex;
  flex-direction: column;
  
  /* 3. Tipografia */
  font-size: 16px;
  color: var(--text-primary);
  
  /* 4. Visual */
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  
  /* 5. Outros */
  transition: transform var(--transition-normal);
}
```

### Variáveis CSS

```css
:root {
  /* Cores */
  --color-primary: #00c8ff;
  --bg-dark: #0a0f1a;
  
  /* Espaçamentos */
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  
  /* Tipografia */
  --font-heading: 'Orbitron', sans-serif;
}
```

### Media Queries

```css
/* Mobile first */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

## JavaScript

### Nomenclatura

```javascript
// ✅ Variáveis e funções: camelCase
const userName = 'John';
function calculateTotal() { }

// ✅ Classes: PascalCase
class FormValidator { }

// ✅ Constantes: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;

// ✅ Privado: underscore prefix
function _internalHelper() { }
```

### Documentação JSDoc

```javascript
/**
 * Valida um campo individual
 * @param {HTMLElement} field - Campo a ser validado
 * @returns {boolean} - Se é válido
 */
function validateField(field) {
  // implementação
}
```

### Async/Await

```javascript
// ✅ Correto
async function loadComponent(url, selector) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch (error) {
    Logger.error('Erro ao carregar componente', error);
  }
}

// ❌ Incorreto (callback hell)
function loadComponent(url, selector) {
  fetch(url).then(response => {
    response.text().then(html => {
      // ...
    });
  });
}
```

### Tratamento de Erros

```javascript
// ✅ Use try/catch com Logger
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  Logger.error('Erro ao parsear JSON', error);
}

// ✅ Validação de inputs
function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    throw new Error('Email é obrigatório');
  }
  
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

## Commits Git

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudança na documentação
- `style`: Formatação, sem mudança de lógica
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Mudanças no build ou ferramentas

### Exemplos

```bash
feat(auth): adicionar validação de CPF no cadastro
fix(css): corrigir espaçamento dos cards no mobile
docs(readme): atualizar seção de instalação
style(header): padronizar nomenclatura BEM
refactor(forms): simplificar lógica de validação
test(validation): adicionar testes unitários de email
chore(git): atualizar .gitignore
```

## Arquivos de Configuração

### .env

```env
# Nunca comitar .env no Git!
NODE_ENV=development
API_BASE_URL=http://localhost:3000/api
WHATSAPP_NUMBER=5511984039699
```

### package.json (futuro)

```json
{
  "name": "vortex-motors",
  "version": "2.0.0",
  "description": "Plataforma digital para comercialização de veículos",
  "scripts": {
    "dev": "http-server -p 3000",
    "build": "echo 'Build script'",
    "test": "jest",
    "lint": "eslint src/**/*.js"
  }
}
```
