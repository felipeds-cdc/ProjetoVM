#!/bin/bash
# =====================================================
# Script de Setup - VORTEX MOTORS
# Descrição: Verifica estrutura e executa projeto
# =====================================================

echo "🚗 VORTEX MOTORS - Setup Script"
echo "================================"
echo ""

# Verificar estrutura de diretórios
echo "📁 Verificando estrutura de diretórios..."

DIRECTORIES=(
  "config"
  "docs"
  "pages/auth"
  "pages/services"
  "pages/about"
  "pages/contact"
  "public/css"
  "public/js"
  "public/images"
  "src/components"
  "src/utils"
  "tests/unit"
  "tests/integration"
)

for dir in "${DIRECTORIES[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "❌ Diretório ausente: $dir"
    mkdir -p "$dir"
    echo "✅ Criado: $dir"
  fi
done

echo ""
echo "📦 Verificando arquivos essenciais..."

FILES=(
  "index.html"
  "public/css/styles.css"
  "public/js/components.js"
  "public/js/form-validation.js"
  ".gitignore"
  "README.md"
)

for file in "${FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "⚠️  Arquivo ausente: $file"
  else
    echo "✅ Encontrado: $file"
  fi
done

echo ""
echo "================================"
echo "🚀 Iniciando servidor de desenvolvimento..."
echo ""
echo "Escolha uma opção:"
echo "1. Python HTTP Server"
echo "2. Node.js http-server"
echo "3. PHP Built-in Server"
echo "4. Apenas abrir no navegador"
echo ""

read -p "Opção [1-4]: " option

case $option in
  1)
    echo "Iniciando Python HTTP Server na porta 3000..."
    python3 -m http.server 3000
    ;;
  2)
    echo "Iniciando Node.js http-server na porta 3000..."
    npx http-server -p 3000
    ;;
  3)
    echo "Iniciando PHP Built-in Server na porta 3000..."
    php -S localhost:3000
    ;;
  4)
    echo "Abrindo no navegador..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
      xdg-open index.html
    elif [[ "$OSTYPE" == "darwin"* ]]; then
      open index.html
    elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" ]]; then
      start index.html
    fi
    ;;
  *)
    echo "Opção inválida!"
    ;;
esac
