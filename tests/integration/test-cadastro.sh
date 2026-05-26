#!/bin/bash
# ==========================================================
#  test-cadastro.sh — Testes da API /api/auth/register
#  Uso: bash test-cadastro.sh
# ==========================================================

BASE="http://localhost:3001"
ENDPOINT="$BASE/api/auth/register"
PASS=0
FAIL=0

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RESET='\033[0m'

run() {
  local label="$1"
  local expect="$2"  # trecho esperado na resposta
  shift 2

  printf "${CYAN}[TEST]${RESET} %s\n" "$label"
  response=$(curl -s -X POST "$ENDPOINT" \
    -H "Content-Type: application/json" \
    "$@")

  echo "       → $response"

  if echo "$response" | grep -q "$expect"; then
    printf "${GREEN}[PASS]${RESET} contém: \"%s\"\n\n" "$expect"
    ((PASS++))
  else
    printf "${RED}[FAIL]${RESET} esperado: \"%s\"\n\n" "$expect"
    ((FAIL++))
  fi
}

# ----------------------------------------------------------
echo ""
printf "${YELLOW}== HEALTH CHECK ==${RESET}\n"
curl -s "$BASE/" && echo -e "\n"

# ----------------------------------------------------------
printf "${YELLOW}== CAMPOS OBRIGATÓRIOS ==${RESET}\n\n"

run "Body vazio" "ausentes" \
  -d '{}'

run "Faltando email e senha" "ausentes" \
  -d '{"nome":"Felipe","cpf":"529.982.247-25","nascimento":"2000-06-15"}'

# ----------------------------------------------------------
printf "${YELLOW}== VALIDAÇÃO DE CPF ==${RESET}\n\n"

run "CPF sequência inválida (111...)" "CPF inválido" \
  -d '{"nome":"Felipe","cpf":"111.111.111-11","nascimento":"2000-06-15","email":"felipe@teste.com","senha":"senha123"}'

run "CPF com dígito errado" "CPF inválido" \
  -d '{"nome":"Felipe","cpf":"529.982.247-00","nascimento":"2000-06-15","email":"felipe@teste.com","senha":"senha123"}'

# ----------------------------------------------------------
printf "${YELLOW}== VALIDAÇÃO DE IDADE ==${RESET}\n\n"

run "Menor de idade (nascimento 2015)" "18 anos" \
  -d '{"nome":"Felipe","cpf":"529.982.247-25","nascimento":"2015-06-15","email":"felipe@teste.com","senha":"senha123"}'

# ----------------------------------------------------------
printf "${YELLOW}== VALIDAÇÃO DE EMAIL ==${RESET}\n\n"

run "Email sem @" "Email inválido" \
  -d '{"nome":"Felipe","cpf":"529.982.247-25","nascimento":"2000-06-15","email":"emailinvalido","senha":"senha123"}'

# ----------------------------------------------------------
printf "${YELLOW}== VALIDAÇÃO DE SENHA ==${RESET}\n\n"

run "Senha muito curta (3 chars)" "mínimo 6" \
  -d '{"nome":"Felipe","cpf":"529.982.247-25","nascimento":"2000-06-15","email":"felipe@teste.com","senha":"abc"}'

# ----------------------------------------------------------
printf "${YELLOW}== VALIDAÇÃO DE PLACA (opcional) ==${RESET}\n\n"

run "Placa fora do padrão" "Placa inválida" \
  -d '{"nome":"Felipe","cpf":"529.982.247-25","nascimento":"2000-06-15","email":"felipe@teste.com","senha":"senha123","carro":"civic","placa":"XXXX99"}'

# ----------------------------------------------------------
printf "${YELLOW}== CADASTRO VÁLIDO ==${RESET}\n\n"

run "Cadastro completo com placa Mercosul" "success" \
  -d '{"nome":"Felipe Silva","cpf":"529.982.247-25","nascimento":"2000-06-15","email":"felipe@vortex.com","senha":"senha123","carro":"civic","placa":"ABC-1D23"}'

run "Cadastro sem carro/placa (campos opcionais)" "success" \
  -d '{"nome":"Carlos Andrade","cpf":"074.738.706-30","nascimento":"1995-03-20","email":"carlos@vortex.com","senha":"senha456"}'

# ----------------------------------------------------------
printf "${YELLOW}== DUPLICIDADE ==${RESET}\n\n"

run "Email duplicado (mesmo do teste anterior)" "já cadastrado" \
  -d '{"nome":"Felipe Silva","cpf":"046.835.568-10","nascimento":"2000-06-15","email":"felipe@vortex.com","senha":"senha123"}'

run "CPF duplicado (mesmo do teste anterior)" "já cadastrado" \
  -d '{"nome":"Felipe Silva","cpf":"529.982.247-25","nascimento":"2000-06-15","email":"outro@vortex.com","senha":"senha123"}'

# ----------------------------------------------------------
printf "${YELLOW}== RESULTADO FINAL ==${RESET}\n"
printf "${GREEN}PASS: $PASS${RESET}  ${RED}FAIL: $FAIL${RESET}\n\n"
