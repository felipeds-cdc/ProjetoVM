# Aurora Design System — Documentação
**Vortex Motors · versão 1.0**

> Sistema de design baseado na paleta triádica restrita: **Preto `#0A0A0A`**, **Branco `#FFFFFF`** e **Dourado `#FFD700`**.  
> Dois arquivos. Zero dependências externas.

---

## Sumário

1. [Instalação](#1-instalação)
2. [Estrutura de arquivos](#2-estrutura-de-arquivos)
3. [Como usar — fluxo padrão](#3-como-usar--fluxo-padrão)
4. [Referência de classes CSS](#4-referência-de-classes-css)
5. [Comportamentos JavaScript](#5-comportamentos-javascript)
6. [Override de marca](#6-override-de-marca)
7. [Guia: Página de venda de peças](#7-guia-página-de-venda-de-peças)
8. [Guia: Página de ponto de carregamento](#8-guia-página-de-ponto-de-carregamento)
9. [Checklist de nova página](#9-checklist-de-nova-página)

---

## 1. Instalação

Coloque os dois arquivos na pasta de assets do projeto:

```
public/
  css/
    aurora.css    ← design system
    styles.css    ← seus overrides locais (carregado depois)
  js/
    aurora.js     ← comportamentos automáticos
    main.js       ← seu JavaScript local
```

Em cada página HTML, importe **nesta ordem** — antes de fechar `</head>` para o CSS e antes de fechar `</body>` para o JS:

```html
<head>
  <!-- 1. Aurora (base) -->
  <link rel="stylesheet" href="/public/css/aurora.css" />
  <!-- 2. Seus overrides (sempre depois) -->
  <link rel="stylesheet" href="/public/css/styles.css" />
</head>

<body class="au-body">
  <!-- conteúdo da página -->

  <!-- Aurora JS (sempre no final do body) -->
  <script src="/public/js/aurora.js"></script>
  <!-- Seu JS local -->
  <script src="/public/js/main.js"></script>
</body>
```

> **`class="au-body"` no `<body>` é obrigatório.**  
> Ele ativa o cursor dourado, o fundo escuro base e o font-smoothing.

---

## 2. Estrutura de arquivos

Cada página do projeto segue este esqueleto:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- metas + título -->
  <link rel="stylesheet" href="/public/css/aurora.css" />
  <link rel="stylesheet" href="/public/css/styles.css" />
  <!-- fontes Orbitron + Rajdhani -->
</head>

<body class="au-body">

  <!-- HEADER (copie de qualquer página existente) -->
  <header class="au-header"> ... </header>

  <main id="main-content">
    <!-- Hero compacto -->
    <!-- Seções de conteúdo -->
    <!-- CTA final -->
  </main>

  <!-- WhatsApp float -->
  <a href="https://wa.me/..." class="whatsapp-float" ...> ... </a>

  <!-- Footer (copie de qualquer página existente) -->
  <footer class="au-footer"> ... </footer>

  <script src="/public/js/aurora.js"></script>
  <script src="/public/js/main.js"></script>
</body>
</html>
```

---

## 3. Como usar — fluxo padrão

### 3.1 Seção padrão

```html
<section class="au-section" id="minha-secao">
  <div class="au-container">

    <!-- Cabeçalho da seção -->
    <div class="au-section-header au-reveal">
      <span class="au-section-header__eyebrow">Subtítulo pequeno</span>
      <h2 class="au-section-header__title">Título da Seção</h2>
      <p class="au-section-header__body">Texto descritivo opcional.</p>
    </div>

    <!-- Conteúdo -->

  </div>
</section>
```

### 3.2 Animação de scroll

Adicione `au-reveal` em qualquer elemento para que ele apareça ao entrar na viewport.  
Use delays para criar efeito cascata em grids:

```html
<div class="au-grid-3">
  <div class="au-reveal au-reveal--d1"> ... </div>  <!-- delay 0.1s -->
  <div class="au-reveal au-reveal--d2"> ... </div>  <!-- delay 0.2s -->
  <div class="au-reveal au-reveal--d3"> ... </div>  <!-- delay 0.3s -->
</div>
```

Reinicie `d1/d2/d3` a cada nova linha de 3 cards.  
Variantes direcionais: `au-reveal--left` e `au-reveal--right`.

### 3.3 Card genérico

```html
<div class="au-card">
  <div class="au-card__image">
    <img src="..." alt="..." loading="lazy" />
  </div>
  <div class="au-card__gold-line"></div>  <!-- linha dourada que cresce no hover -->
  <div class="au-card__body">
    <div class="au-card__number">01.</div>
    <div class="au-card__name">Nome do item</div>
    <div class="au-card__sub">Subtítulo</div>
  </div>
</div>
```

---

## 4. Referência de classes CSS

### Layout

| Classe | Uso |
|---|---|
| `au-body` | Obrigatório no `<body>`. Ativa cursor + fundo escuro |
| `au-container` | Centraliza conteúdo com `max-width: 1280px` e padding lateral |
| `au-section` | Seção com fundo preto (`#0A0A0A`) e padding vertical `6rem` |
| `au-section--white` | Seção com fundo branco (contraste) |
| `au-section--dark` | Seção levemente mais clara (`#141414`) |
| `au-grid-2` | Grid de 2 colunas (responsivo → 1 coluna em mobile) |
| `au-grid-3` | Grid de 3 colunas |
| `au-grid-4` | Grid de 4 colunas |
| `au-hero` | Hero fullscreen com `min-height: 100vh` |
| `au-hero__bg` | Imagem/vídeo de fundo do hero (`object-fit: cover`) |
| `au-hero__overlay` | Degradê escuro lateral sobre o hero |
| `au-hero__content` | Conteúdo do hero (z-index 2, lado esquerdo) |

### Header e navegação

| Classe | Uso |
|---|---|
| `au-header` | Header com posição `fixed`. Fica semi-transparente ao scroll via JS |
| `au-header--scrolled` | Estado comprimido (adicionado automaticamente pelo JS) |
| `au-logo` | Link do logo com flex e letter-spacing |
| `au-nav` | `<ul>` da navegação, flex, sem marcadores |
| `au-nav__link` | Link de navegação |
| `au-nav__link--active` | Estado ativo (página atual) |

### Tipografia

| Classe | Uso |
|---|---|
| `au-h1` | Título principal — `clamp(2rem, 5vw, 3.5rem)`, uppercase |
| `au-h2` | Título de seção — `clamp(1.25rem, 3vw, 2rem)` |
| `au-h3` | Título de destaque em dourado — `uppercase`, `letter-spacing` |
| `au-body-text` | Corpo de texto — 14px, cinza claro, `line-height 1.8` |
| `au-label` | Label pequeno — 10px, `uppercase`, cinza |
| `au-caption` | Texto menor para rodapé/créditos |
| `au-text--gold` | Cor dourada em qualquer elemento |
| `au-text--white` | Cor branca |
| `au-text--muted` | Cinza médio `#888` |

### Botões

Todo botão usa duas classes: a base `au-btn` + um modificador de estilo.

| Classe | Resultado |
|---|---|
| `au-btn au-btn--ghost` | Borda dourada, transparente. Preenche dourado no hover |
| `au-btn au-btn--solid` | Fundo dourado, texto preto |
| `au-btn au-btn--outline` | Borda branca translúcida, texto branco |
| `au-btn--sm` | Tamanho pequeno (12px de padding vertical) |
| `au-btn--lg` | Tamanho grande (16px de padding vertical) |

```html
<!-- Exemplos -->
<a href="#" class="au-btn au-btn--ghost">Ver Estoque</a>
<button class="au-btn au-btn--solid au-btn--sm">Comprar Agora</button>
```

### Formulários

```html
<div class="au-form-group">
  <label for="campo" class="au-form-label">Seu nome</label>
  <input type="text" id="campo" class="au-input" placeholder="Digite aqui" />
</div>

<div class="au-form-group">
  <label for="opcao" class="au-form-label">Categoria</label>
  <select id="opcao" class="au-select">
    <option>Opção 1</option>
  </select>
</div>

<div class="au-form-group">
  <label for="msg" class="au-form-label">Mensagem</label>
  <textarea id="msg" class="au-textarea" rows="4"></textarea>
</div>
```

### Cards

| Classe | Uso |
|---|---|
| `au-card` | Card base: fundo `#141414`, borda que vira dourada no hover |
| `au-card__image` | Wrapper da imagem com `overflow: hidden` e zoom no hover |
| `au-card__gold-line` | Linha dourada que cresce de 0 para 100% ao hover |
| `au-card__body` | Área de conteúdo do card com `padding: 1.25rem` |
| `au-card__number` | Numeração em dourado (ex: `01.`) |
| `au-card__name` | Nome do item em uppercase |
| `au-card__sub` | Subtítulo em cinza |

### Badges

```html
<span class="au-badge au-badge--gold">Novo</span>
<span class="au-badge au-badge--white">Seminovo</span>
```

### Divisórias

```html
<hr class="au-divider" />         <!-- 1px sólida #1A1A1A -->
<hr class="au-divider--fade" />   <!-- gradiente que desaparece nas bordas -->
<hr class="au-divider--gold" />   <!-- 2px dourada, width 60px -->
```

### Ficha técnica (spec-row)

```html
<div class="au-specs">
  <div class="au-spec-row">
    <span class="au-spec-row__key">Motor</span>
    <span class="au-spec-row__value">2.0 Turbo</span>
  </div>
  <!-- repita para cada especificação -->
</div>
```

### Animações de scroll

| Classe | Efeito |
|---|---|
| `au-reveal` | Fade-in + slide de baixo para cima |
| `au-reveal--left` | Fade-in + slide da esquerda |
| `au-reveal--right` | Fade-in + slide da direita |
| `au-reveal--d1` até `--d5` | Delays de 0.1s a 0.5s (para cascata) |

### Parallax

```html
<!-- Fator padrão: 0.35 (suave). Ajuste com o atributo data- -->
<img src="..." class="au-parallax" data-au-parallax-speed="0.3" />
```

### Footer

```html
<footer class="au-footer">
  <div class="au-container">
    <div class="au-footer__grid">
      <div>
        <p class="au-footer__heading">Coluna 1</p>
        <a href="#" class="au-footer__link">Link</a>
      </div>
      <!-- mais colunas -->
    </div>
    <div class="au-footer__bottom">
      <span class="au-caption">&copy; 2024 Vortex Motors</span>
    </div>
  </div>
</footer>
```

---

## 5. Comportamentos JavaScript

O `aurora.js` é **totalmente automático** — basta importar o arquivo e usar as classes corretas. Nenhuma inicialização manual é necessária.

### 5.1 Sticky Header

Detecta `.au-header`. Quando o scroll passa de **100px**, adiciona `.au-header--scrolled` ao elemento, ativando o visual comprimido e semi-transparente do CSS.

### 5.2 Animações de scroll (Intersection Observer)

Detecta todos os elementos com `.au-reveal`. Quando 10% do elemento entra na viewport, adiciona `.au-reveal--visible` ativando o CSS de animação. O elemento nunca reanima — o observer é desconectado após disparar.

### 5.3 Parallax

Detecta `.au-parallax`. A cada evento de scroll, calcula o deslocamento da imagem com base na distância do elemento ao centro da viewport e aplica `transform: translateY()`. O fator padrão é `0.35`, ajustável via `data-au-parallax-speed`.

### 5.4 Custom Cursor

Detecta se `.au-body` está presente e cria automaticamente um `<div id="au-cursor">`. O cursor segue o mouse com interpolação suave (lerp). Ao passar por qualquer `<a>`, `<button>`, `.au-card`, `.au-btn` ou elemento com `data-au-cursor-hover`, o cursor expande para o estado vazado dourado. Desabilitado automaticamente em dispositivos touch.

Para marcar um elemento personalizado como "clicável" para o cursor:
```html
<div class="meu-elemento" data-au-cursor-hover>...</div>
```

### 5.5 Scroll suave + offset do header

Intercepta cliques em `<a href="#ancora">` e faz scroll suave compensando a altura do header fixo.

### 5.6 Active nav link

Marca `.au-nav__link--active` automaticamente:
- **Por URL**: compara o `href` do link com o `pathname` atual.
- **Por scroll**: usa `IntersectionObserver` para links com `href="#id-da-secao"`.

---

## 6. Override de marca

Para substituir o dourado Aurora pela cor da Vortex (`#00c8ff`), cole em `styles.css`:

```css
:root {
  --au-gold:      #00c8ff;
  --au-gold-dim:  rgba(0, 200, 255, 0.15);
  --au-gold-hover:rgba(0, 200, 255, 0.08);
  --au-font:      'Rajdhani', sans-serif;
}

/* Títulos com a fonte da marca */
.au-h1,
.au-h2,
.au-section-header__title {
  font-family: 'Orbitron', sans-serif;
}
```

---

## 7. Guia: Página de venda de peças

Arquivo sugerido: `/pages/pecas/pecas.html`

### Estrutura recomendada

```
1. Header (au-header)
2. Hero compacto (au-section com padding-top:9rem)
3. Filtros (categoria de peça, marca do veículo, faixa de preço)
4. Grid de peças (au-grid-3 ou au-grid-4)
5. Banner CTA (au-section--white com frete grátis / entrega)
6. Footer (au-footer)
```

### Card de peça — HTML modelo

```html
<!-- ── INÍCIO DO CARD DE PEÇA ──────────────────────────
     Copie este bloco para cada peça do catálogo.
     Campos a preencher:
     · src da imagem
     · au-badge (categoria: Motor / Suspensão / Elétrico etc.)
     · .part-card__name     → nome da peça
     · .part-card__code     → código de referência (ex: TY-0482-A)
     · .part-card__compat   → compatibilidade (ex: Toyota Corolla 2019–2024)
     · .vehicle-card__price → preço
     · href do botão        → página de detalhe ou carrinho
────────────────────────────────────────────────────── -->
<article class="au-card au-reveal au-reveal--d1" aria-label="Nome da Peça">

  <div class="au-card__image">
    <img src="/public/images/pecas/nome-da-peca.jpg" alt="Nome da Peça" loading="lazy" />
  </div>
  <div class="au-card__gold-line"></div>

  <div class="au-card__body">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
      <span class="au-badge au-badge--gold">Motor</span>
      <span class="au-caption">Ref: TY-0482-A</span>
    </div>

    <div class="au-card__name">Filtro de Óleo Premium</div>

    <p class="au-caption" style="margin:6px 0 12px; color:var(--au-gray);">
      Compatível com: Toyota Corolla 2019–2024
    </p>

    <hr class="au-divider" style="margin-bottom:12px;" />

    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span class="au-label" style="display:block; margin-bottom:2px;">Preço</span>
        <span class="au-h3" style="font-size:15px;">R$ 89,90</span>
      </div>
      <a href="/pages/pecas/filtro-oleo-premium.html" class="au-btn au-btn--ghost au-btn--sm">
        Ver Peça
      </a>
    </div>
  </div>

</article>
<!-- ── FIM DO CARD DE PEÇA ──────────────────────────── -->
```

### Filtros recomendados para peças

```html
<div class="filters-bar au-reveal">

  <div class="au-form-group">
    <label for="f-categoria" class="au-form-label">Categoria</label>
    <select id="f-categoria" class="au-select">
      <option value="">Todas</option>
      <option>Motor</option>
      <option>Suspensão</option>
      <option>Freios</option>
      <option>Elétrico</option>
      <option>Carroceria</option>
      <option>Ar-condicionado</option>
    </select>
  </div>

  <div class="au-form-group">
    <label for="f-marca-veiculo" class="au-form-label">Marca do Veículo</label>
    <select id="f-marca-veiculo" class="au-select">
      <option value="">Todas</option>
      <option>Toyota</option>
      <option>Honda</option>
      <option>Volkswagen</option>
    </select>
  </div>

  <div class="au-form-group">
    <label for="f-modelo" class="au-form-label">Modelo</label>
    <input type="text" id="f-modelo" class="au-input" placeholder="Ex: Corolla" />
  </div>

  <div class="au-form-group">
    <label for="f-ano-peca" class="au-form-label">Ano</label>
    <select id="f-ano-peca" class="au-select">
      <option value="">Todos</option>
      <option>2024</option><option>2023</option><option>2022</option>
    </select>
  </div>

  <button class="au-btn au-btn--ghost">Buscar Peças</button>

</div>
```

### Seção CTA de entrega (au-section--white)

```html
<section class="au-section--white" aria-labelledby="entrega-title">
  <div class="au-container">
    <div class="au-grid-3">

      <div class="au-reveal au-reveal--d1" style="text-align:center; padding:1.5rem;">
        <div class="au-h3" style="margin-bottom:0.5rem;">Frete Grátis</div>
        <p class="au-body-text" style="color:#555; margin:0 auto;">
          Em compras acima de R$ 150 para todo o Brasil.
        </p>
      </div>

      <div class="au-reveal au-reveal--d2" style="text-align:center; padding:1.5rem;">
        <div class="au-h3" style="margin-bottom:0.5rem;">Originais Garantidos</div>
        <p class="au-body-text" style="color:#555; margin:0 auto;">
          Peças com nota fiscal e garantia do fabricante.
        </p>
      </div>

      <div class="au-reveal au-reveal--d3" style="text-align:center; padding:1.5rem;">
        <div class="au-h3" style="margin-bottom:0.5rem;">Troca Fácil</div>
        <p class="au-body-text" style="color:#555; margin:0 auto;">
          30 dias para troca caso a peça não seja compatível.
        </p>
      </div>

    </div>
  </div>
</section>
```

---

## 8. Guia: Página de ponto de carregamento

Arquivo sugerido: `/pages/carregamento/carregamento.html`

### Estrutura recomendada

```
1. Header (au-header)
2. Hero compacto — destaque para elétricos
3. Mapa / lista de pontos de carregamento (au-grid-3)
4. Formulário de solicitação de ponto
5. FAQ em spec-rows (au-specs / au-spec-row)
6. Footer (au-footer)
```

### Card de ponto de carregamento

```html
<!-- ── INÍCIO DO CARD DE PONTO DE CARREGAMENTO ──────────
     Copie para cada ponto disponível.
     Campos a preencher:
     · .charge-point__name   → nome do local (ex: Shopping Ibirapuera)
     · .charge-point__addr   → endereço
     · .charge-point__type   → tipo (AC 22kW / DC 50kW / Ultra DC 150kW)
     · .charge-point__status → Disponível / Ocupado / Manutenção
     · .au-specs             → horário de funcionamento, conectores
     · href do botão         → link para Google Maps ou detalhe do ponto
────────────────────────────────────────────────────────── -->
<article class="au-card au-reveal au-reveal--d1" aria-label="Ponto de carregamento">

  <div class="au-card__image">
    <!-- Foto do local ou mapa estático -->
    <img src="/public/images/carregamento/ponto-01.jpg" alt="Shopping Ibirapuera" loading="lazy" />
  </div>
  <div class="au-card__gold-line"></div>

  <div class="au-card__body">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
      <span class="au-badge au-badge--gold">DC 50kW</span>
      <!-- Troque au-badge--gold por au-badge--white se ocupado/manutenção -->
      <span class="au-badge au-badge--white">Disponível</span>
    </div>

    <div class="au-card__name">Shopping Ibirapuera</div>

    <p class="au-caption" style="margin:4px 0 12px; color:var(--au-gray);">
      Av. Ibirapuera, 3103 — São Paulo, SP
    </p>

    <div class="au-specs" style="margin-bottom:14px;">
      <div class="au-spec-row">
        <span class="au-spec-row__key">Horário</span>
        <span class="au-spec-row__value">08h – 22h</span>
      </div>
      <div class="au-spec-row">
        <span class="au-spec-row__key">Conector</span>
        <span class="au-spec-row__value">CCS2 / CHAdeMO</span>
      </div>
      <div class="au-spec-row">
        <span class="au-spec-row__key">Vagas</span>
        <span class="au-spec-row__value">4 pontos</span>
      </div>
    </div>

    <a
      href="https://maps.google.com/?q=Shopping+Ibirapuera"
      class="au-btn au-btn--ghost au-btn--sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver no Mapa
    </a>
  </div>

</article>
<!-- ── FIM DO CARD DE PONTO DE CARREGAMENTO ─────────── -->
```

### Formulário de solicitação de ponto

Use a seção branca (`au-section--white`) para contrastar com o restante da página.

```html
<section class="au-section--white" aria-labelledby="solicitar-title">
  <div class="au-container">
    <div style="max-width:640px; margin:0 auto; text-align:center;">

      <div class="au-section-header au-reveal">
        <span class="au-section-header__eyebrow" style="color:var(--au-gold);">
          Quer um ponto na sua cidade?
        </span>
        <h2 id="solicitar-title" class="au-section-header__title" style="color:var(--au-black);">
          Solicitar Ponto de Carregamento
        </h2>
        <p class="au-section-header__body" style="color:#555; margin:0 auto;">
          Preencha o formulário. Nossa equipe avalia a viabilidade em até 5 dias úteis.
        </p>
      </div>

      <form
        action="/pages/carregamento/solicitar.html"
        method="POST"
        novalidate
        style="display:flex; flex-direction:column; gap:16px; margin-top:2rem; text-align:left;"
      >
        <!-- Nome do responsável -->
        <div class="au-form-group au-reveal au-reveal--d1">
          <label for="s-nome" class="au-form-label" style="color:#888;">Nome do responsável</label>
          <input type="text" id="s-nome" name="nome" class="au-input" placeholder="Seu nome completo" required
            style="background:#f5f5f5; color:#0A0A0A; border-color:#ddd;" />
        </div>

        <!-- E-mail -->
        <div class="au-form-group au-reveal au-reveal--d2">
          <label for="s-email" class="au-form-label" style="color:#888;">E-mail</label>
          <input type="email" id="s-email" name="email" class="au-input" placeholder="contato@empresa.com" required
            style="background:#f5f5f5; color:#0A0A0A; border-color:#ddd;" />
        </div>

        <!-- Tipo de local -->
        <div class="au-form-group au-reveal au-reveal--d2">
          <label for="s-tipo" class="au-form-label" style="color:#888;">Tipo de local</label>
          <select id="s-tipo" name="tipo" class="au-select"
            style="background:#f5f5f5; color:#0A0A0A; border-color:#ddd;">
            <option value="">Selecione</option>
            <option value="condominio">Condomínio Residencial</option>
            <option value="empresa">Empresa / Escritório</option>
            <option value="shopping">Shopping / Comércio</option>
            <option value="estacionamento">Estacionamento Público</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <!-- Endereço -->
        <div class="au-form-group au-reveal au-reveal--d3">
          <label for="s-endereco" class="au-form-label" style="color:#888;">Endereço do local</label>
          <input type="text" id="s-endereco" name="endereco" class="au-input" placeholder="Rua, número, cidade — UF" required
            style="background:#f5f5f5; color:#0A0A0A; border-color:#ddd;" />
        </div>

        <!-- Tipo de carregador desejado -->
        <div class="au-form-group au-reveal au-reveal--d3">
          <label for="s-carregador" class="au-form-label" style="color:#888;">Tipo de carregador</label>
          <select id="s-carregador" name="carregador" class="au-select"
            style="background:#f5f5f5; color:#0A0A0A; border-color:#ddd;">
            <option value="">Selecione a potência</option>
            <option value="ac-7">AC 7kW (residencial)</option>
            <option value="ac-22">AC 22kW (semi-público)</option>
            <option value="dc-50">DC 50kW (público rápido)</option>
            <option value="dc-150">Ultra DC 150kW (corredor)</option>
          </select>
        </div>

        <!-- Mensagem -->
        <div class="au-form-group au-reveal au-reveal--d4">
          <label for="s-obs" class="au-form-label" style="color:#888;">Observações</label>
          <textarea id="s-obs" name="obs" class="au-textarea" rows="4"
            placeholder="Número de vagas, horário de funcionamento, infraestrutura elétrica disponível..."
            style="background:#f5f5f5; color:#0A0A0A; border-color:#ddd;"></textarea>
        </div>

        <div class="au-reveal au-reveal--d5" style="text-align:center; margin-top:0.5rem;">
          <button type="submit" class="au-btn au-btn--solid">
            Enviar Solicitação
          </button>
        </div>
      </form>

    </div>
  </div>
</section>
```

### FAQ (seção de dúvidas frequentes)

```html
<section class="au-section" aria-labelledby="faq-title">
  <div class="au-container" style="max-width:800px;">

    <div class="au-section-header au-reveal" style="text-align:center;">
      <span class="au-section-header__eyebrow">Dúvidas</span>
      <h2 id="faq-title" class="au-section-header__title">Perguntas Frequentes</h2>
    </div>

    <!-- Cada au-spec-row vira uma linha de pergunta/resposta -->
    <div class="au-specs au-reveal au-reveal--d1">
      <div class="au-spec-row" style="flex-direction:column; gap:6px; padding:16px 0; align-items:flex-start;">
        <span class="au-spec-row__key">Quanto tempo leva para instalar um ponto?</span>
        <span class="au-spec-row__value" style="font-size:13px; color:var(--au-light-gray); font-weight:400;">
          Em média 7 a 15 dias úteis após aprovação técnica e liberação elétrica do local.
        </span>
      </div>
      <!-- Repita para cada pergunta -->
    </div>

  </div>
</section>
```

---

## 9. Checklist de nova página

Antes de publicar qualquer nova página do projeto, verifique:

- [ ] `<body class="au-body">` presente
- [ ] `aurora.css` importado **antes** de `styles.css`
- [ ] `aurora.js` importado **no final do body** com `defer` ou sem atributo (antes de `main.js`)
- [ ] Header com `au-nav__link--active` apontando para a página atual
- [ ] Seção hero com `padding-top: 9rem` para não sobrepor o header fixo
- [ ] Todas as imagens com `loading="lazy"` e `alt` descritivo
- [ ] Links do WhatsApp com texto pré-preenchido: `?text=Tenho interesse em...`
- [ ] Footer com link para a nova página nas colunas corretas
- [ ] Animações `au-reveal` adicionadas nas seções principais
- [ ] Delays `au-reveal--d1/d2/d3` reiniciados a cada linha de grid
- [ ] Override de marca aplicado em `styles.css` se necessário
