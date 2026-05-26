# 🤝 Guia de Contribuição - Vortex Motors

Obrigado pelo interesse em contribuir com o projeto Vortex Motors! Este guia ajuda a garantir um processo de contribuição tranquilo e eficiente.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Primeira Contribuição](#primeira-contribuição)
- [Padrões de Código](#padrões-de-código)
- [Pull Requests](#pull-requests)
- [Reportando Bugs](#reportando-bugs)
- [Solicitando Features](#solicitando-features)

## Código de Conduta

### Nossos Compromissos

- **Ser respeitoso** com diferentes opiniões e experiências
- **Aceitar críticas construtivas** de forma graciosa
- **Focar no melhor** para a comunidade
- **Mostrar empatia** para outros membros

### Comportamentos Inaceitáveis

- Uso de linguagem ou imagens sexualizadas
- Trolling, comentários insultuosos/depreciativos
- Assédio público ou privado
- Publicar informações privadas de outros sem permissão

## Como Contribuir

### Tipos de Contribuição

1. 🐛 **Correção de Bugs** - Encontre e corrija problemas
2. ✨ **Novas Features** - Adicione funcionalidades
3. 📚 **Documentação** - Melhore docs e comentários
4. 🎨 **Design** - Contribua com UI/UX
5. 🧪 **Testes** - Adicione cobertura de testes
6. 🚀 **Performance** - Otimize código

## Primeira Contribuição

### Passo a Passo

1. **Faça um Fork** do repositório
2. **Clone** seu fork localmente
3. **Crie uma branch** para sua feature
4. **Faça suas mudanças**
5. **Teste** suas mudanças
6. **Commit** seguindo nossos padrões
7. **Push** para seu fork
8. **Abra um Pull Request**

### Comandos

```bash
# Fork e clone
git clone https://github.com/SEU_USUARIO/vortex-motors.git
cd vortex-motors

# Crie branch
git checkout -b feature/minha-feature

# Após mudanças
git add .
git commit -m "feat(minha-feature): descrição clara"
git push origin feature/minha-feature
```

## Padrões de Código

### HTML

```html
<!-- ✅ Use semântica e acessibilidade -->
<main id="main-content">
  <section aria-labelledby="title">
    <h1 id="title">Título</h1>
    <p>Conteúdo</p>
  </section>
</main>
```

### CSS

```css
/* ✅ Use BEM e variáveis */
.card {
  background: var(--bg-card);
  border-radius: var(--radius-md);
}

.card__title {
  color: var(--color-primary);
}
```

### JavaScript

```javascript
// ✅ Use ES6+, JSDoc e Logger
/**
 * Descrição da função
 * @param {string} param - Descrição
 * @returns {boolean} Resultado
 */
function minhaFuncao(param) {
  Logger.debug('Processando', { param });
  return true;
}
```

## Pull Requests

### Checklist Antes de Submeter

- [ ] Código segue padrões do projeto
- [ ] Testes passaram (se aplicável)
- [ ] Documentação atualizada
- [ ] Commit messages seguem convenção
- [ ] Sem arquivos sensíveis (.env, senhas)
- [ ] Testado em múltiplos navegadores

### Template de PR

```markdown
## 📝 Descrição
Breve descrição das mudanças

## 🔗 Issue Relacionada
Fixes #123

## 📸 Screenshots (se aplicável)
[Imagens aqui]

## ✅ Checklist
- [ ] Testei minhas mudanças
- [ ] Atualizei documentação
- [ ] Segui padrões de código
```

### Processo de Review

1. **CI Checks** - Build e testes automatizados
2. **Code Review** - Pelo menos 1 maintainer aprova
3. **Testes Manuais** - Verificação em diferentes navegadores
4. **Merge** - Aprovado e integrado à main

## Reportando Bugs

### Template de Issue

```markdown
## 🐛 Descrição do Bug
Descrição clara e concisa do bug

## 🔄 Passos para Reproduzir
1. Ir para '...'
2. Clicar em '...'
3. Scroll para '...'
4. Ver erro

## ✅ Comportamento Esperado
O que deveria acontecer

## 📸 Screenshots
[Imagens do erro]

## 🖥️ Ambiente
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 96]
- Versão: [ex: 1.0.0]

## 📋 Contexto Adicional
Qualquer outra informação relevante
```

## Solicitando Features

### Template de Feature Request

```markdown
## 💡 Descrição da Feature
Descrição clara da funcionalidade

## 🎯 Problema Relacionado
Qual problema isso resolve

## 🤔 Solução Proposta
Como você imagina funcionando

## 📚 Alternativas Consideradas
Outras soluções que considerou

## 📋 Contexto Adicional
Mockups, exemplos, referências
```

## Configuração do Ambiente

### Pré-requisitos

- Git instalado
- Navegador web moderno
- Editor de código (VS Code recomendado)

### Setup

```bash
# Clone
git clone https://github.com/ORIGINAL/vortex-motors.git
cd vortex-motors

# Instale dependências (futuro)
npm install

# Configure .env
cp config/.env.example .env

# Execute
python -m http.server 3000
```

## Comunicação

- **Issues GitHub** - Para bugs e features
- **Discord/Slack** - Para discussões (futuro)
- **Email** - contato@vortexmotors.com.br

## Reconhecimento

Contribuidores serão reconhecidos no:
- README.md
- Release notes
- Arquivo CONTRIBUTORS.md

---

**Obrigado por contribuir! 🚀**
