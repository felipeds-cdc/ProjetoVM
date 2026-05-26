# 🏗️ Arquitetura do Sistema - Vortex Motors

## Visão Geral

O projeto Vortex Motors é uma aplicação web estática desenvolvida com HTML5, CSS3 e JavaScript vanilla. A arquitetura foi projetada para ser simples, escalável e fácil de manter.

## Estrutura de Camadas

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│   (HTML Pages + CSS + JavaScript)       │
├─────────────────────────────────────────┤
│         Component Layer                 │
│   (Reusable HTML Components)            │
├─────────────────────────────────────────┤
│         Utility Layer                   │
│   (Logger, Validation, Helpers)         │
├─────────────────────────────────────────┤
│         Configuration Layer             │
│   (Environment Variables, Settings)     │
└─────────────────────────────────────────┘
```

## Organização de Diretórios

### `/pages` - Páginas HTML
Organizadas por domínio/módulo:
- `auth/` - Páginas de autenticação (login, cadastro)
- `services/` - Páginas de serviços
- `about/` - Páginas institucionais
- `contact/` - Páginas de contato

### `/public` - Assets Públicos
Arquivos acessíveis diretamente pelo navegador:
- `css/` - Folhas de estilo
- `js/` - Scripts JavaScript
- `images/` - Imagens e ícones

### `/src` - Código Fonte
Código não acessível diretamente:
- `components/` - Componentes HTML reutilizáveis
- `utils/` - Funções utilitárias

### `/config` - Configurações
- `.env.example` - Modelo de variáveis de ambiente

### `/tests` - Testes
- `unit/` - Testes unitários
- `integration/` - Testes de integração

## Padrões de Design

### BEM (Block Element Modifier)
Usado para nomenclatura CSS:

```css
/* Block */
.card { }

/* Element (duplo underscore) */
.card__title { }
.card__button { }

/* Modifier (duplo hífen) */
.card--featured { }
.card--large { }
```

### Componentização
Componentes HTML reutilizáveis carregados via JavaScript:

```javascript
loadComponent('/src/components/header.html', '.header-container');
```

## Fluxo de Carregamento

1. Browser carrega `index.html`
2. HTML referencia `styles.css` e scripts
3. JavaScript carrega componentes dinamicamente
4. Validação de formulários é inicializada

## Boas Práticas Aplicadas

### HTML
- ✅ Semântica correta (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`)
- ✅ Atributos ARIA para acessibilidade
- ✅ Meta tags SEO e Open Graph
- ✅ Links com `rel="noopener noreferrer"` para segurança

### CSS
- ✅ Variáveis CSS para centralização de configurações
- ✅ Mobile-first responsive design
- ✅ Classes utilitárias
- ✅ Nomenclatura BEM

### JavaScript
- ✅ ES6+ com arrow functions
- ✅ Async/await para operações assíncronas
- ✅ JSDoc para documentação
- ✅ Validação client-side robusta

## Segurança

### Proteções Implementadas
- Validação de CPF com algoritmo verificador
- Validação de formato de email
- Sanitização básica de inputs
- Links externos com `rel="noopener noreferrer"`
- Senhas com requisito mínimo

### Próximas Melhorias
- [ ] CSRF Token em formulários
- [ ] Rate limiting no backend
- [ ] HTTPS obrigatório
- [ ] Content Security Policy headers

## Performance

### Otimizações Atuais
- CSS consolidado em arquivo único
- JavaScript com `defer` para não bloquear renderização
- Imagens com dimensões explícitas
- Fontes carregadas com `display=swap`

### Otimizações Futuras
- [ ] Minificação de CSS/JS
- [ ] Compressão de imagens (WebP)
- [ ] Lazy loading de imagens
- [ ] Code splitting
- [ ] Service Worker para cache

## Escalabilidade

### Como Adicionar Nova Página

1. Criar arquivo em `pages/<modulo>/pagina.html`
2. Usar estrutura padrão (header, main, footer)
3. Adicionar link no header
4. Registrar em documentação

### Como Adicionar Novo Componente

1. Criar HTML em `src/components/nome.html`
2. Adicionar chamada em `public/js/components.js`
3. Incluir seletor nas páginas desejadas

## Deployment

### Opções Recomendadas

1. **GitHub Pages** (Gratuito)
   ```bash
   git push origin main
   # Ativar GitHub Pages nas configurações do repositório
   ```

2. **Netlify** (Gratuito)
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Vercel** (Gratuito)
   ```bash
   npm install -g vercel
   vercel
   ```

## Monitoramento

### Logs
Sistema de logs estruturado com níveis:
- `DEBUG` - Desenvolvimento
- `INFO` - Informação
- `WARN` - Aviso
- `ERROR` - Erro

### Futuro
- [ ] Sentry para error tracking
- [ ] Google Analytics para métricas
- [ ] Lighthouse CI para performance
