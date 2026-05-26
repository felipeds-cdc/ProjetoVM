const API_URL = "/api/veiculos";

let todosVeiculos = [];

async function carregarVeiculos() {
  const loading = document.getElementById("loading");
  const errorDiv = document.getElementById("error");

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    todosVeiculos = await response.json();
    configurarFiltros();
    aplicarFiltros();
  } catch (err) {
    errorDiv.textContent = `Falha ao carregar os veiculos: ${err.message}`;
    errorDiv.style.display = "block";
  } finally {
    loading.style.display = "none";
  }
}

function atualizarResumoVeiculos(veiculos) {
  const totalGeral = todosVeiculos.length;
  const totalMarcas = new Set(todosVeiculos.map((v) => v.marca)).size;

  const totalVeiculos = document.getElementById("total-veiculos");
  const totalMarcasElement = document.getElementById("total-marcas");
  const veiculosExibidos = document.getElementById("veiculos-exibidos");
  const veiculosTotal = document.getElementById("veiculos-total");

  if (totalVeiculos) totalVeiculos.textContent = totalGeral;
  if (totalMarcasElement) totalMarcasElement.textContent = totalMarcas;
  if (veiculosExibidos) veiculosExibidos.textContent = veiculos.length;
  if (veiculosTotal) veiculosTotal.textContent = totalGeral;
}

function normalizarTexto(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function obterAnoPrincipal(ano) {
  const resultado = String(ano || "").match(/\d{4}/);
  return resultado ? resultado[0] : "";
}

function veiculoPassaNosFiltros(veiculo) {
  const marca = document.getElementById("filtro-marca")?.value || "";
  const ano = document.getElementById("filtro-ano")?.value || "";
  const preco = document.getElementById("filtro-preco")?.value || "";

  if (marca && normalizarTexto(veiculo.marca) !== marca) return false;
  if (ano && obterAnoPrincipal(veiculo.ano) !== ano) return false;

  if (preco === "0-100" && veiculo.preco > 100000) return false;
  if (preco === "100-200" && (veiculo.preco < 100000 || veiculo.preco > 200000)) return false;
  if (preco === "200-350" && (veiculo.preco < 200000 || veiculo.preco > 350000)) return false;
  if (preco === "350+" && veiculo.preco <= 350000) return false;

  return true;
}

function ordenarVeiculos(veiculos) {
  const ordem = document.getElementById("filtro-ordem")?.value || "recente";
  const ordenados = [...veiculos];

  if (ordem === "menor-preco") {
    ordenados.sort((a, b) => a.preco - b.preco);
  } else if (ordem === "maior-preco") {
    ordenados.sort((a, b) => b.preco - a.preco);
  } else if (ordem === "km") {
    ordenados.sort(
      (a, b) =>
        Number(a["km por carga"] || a.autonomia || 0) -
        Number(b["km por carga"] || b.autonomia || 0)
    );
  } else {
    ordenados.sort(
      (a, b) => Number(obterAnoPrincipal(b.ano)) - Number(obterAnoPrincipal(a.ano)) || b.id - a.id
    );
  }

  return ordenados;
}

function aplicarFiltros() {
  const veiculosFiltrados = ordenarVeiculos(todosVeiculos.filter(veiculoPassaNosFiltros));
  atualizarResumoVeiculos(veiculosFiltrados);
  renderizarVeiculos(veiculosFiltrados);
}

function configurarFiltros() {
  const controles = [
    document.getElementById("filtro-marca"),
    document.getElementById("filtro-ano"),
    document.getElementById("filtro-preco"),
    document.getElementById("filtro-ordem"),
  ].filter(Boolean);

  controles.forEach((controle) => {
    controle.addEventListener("change", aplicarFiltros);
  });

  document.getElementById("buscar-veiculos")?.addEventListener("click", aplicarFiltros);
}

function renderizarVeiculos(veiculos) {
  const container = document.getElementById("car-container");
  container.innerHTML = "";

  if (veiculos.length === 0) {
    container.innerHTML = '<p class="status">Nenhum veiculo encontrado com esses filtros.</p>';
    return;
  }

  veiculos.forEach((v) => {
    const card = document.createElement("article");
    card.className = "car-card";
    card.innerHTML = `
    <div class="vehicle-card">
      <div class="au-card__image">
        <img src="${v.imagem}" alt="${v.nome}" loading="lazy">
      </div>

      <div class="au-card__gold-line"></div>

      <div class="vehicle-card__body">
        <div class="vehicle-card__tags">
          <span class="au-badge au-badge--gold">${v.status}</span>
        </div>
        <h3 class="vehicle-card__name">${v.nome}</h3>
        <p class="vehicle-card__meta">${v.ano} &middot; ${v.transmissao} &middot; ${v.bateria}</p>

        <div class="vehicle-card__specs">
          <div class="vehicle-card__spec-item">
            <span class="vehicle-card__spec-label">Potencia</span>
            <span class="vehicle-card__spec-value">${v.potencia}</span>
          </div>

          <div class="vehicle-card__spec-item">
            <span class="vehicle-card__spec-label">KM por Carga</span>
            <span class="vehicle-card__spec-value">${v["km por carga"]}</span>
          </div>

          <div class="vehicle-card__spec-item">
            <span class="vehicle-card__spec-label">Cor</span>
            <span class="vehicle-card__spec-value">${v.cor}</span>
          </div>
        </div>

        <div class="vehicle-card__price">
          <span class="vehicle-card__price-label">Preco</span>
          <span class="vehicle-card__price-value">R$ ${v.preco.toLocaleString("pt-BR")}</span>
        </div>

        <div class="vehicle-card__actions">
          <a href="/pages/contact/contato.html?veiculo=${encodeURIComponent(v.nome)}" class="au-btn au-btn--ghost">Ver Detalhes</a>
          <a href="/pages/contact/contato.html" class="au-btn au-btn--solid">Fale Conosco</a>
        </div>
      </div>
    </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", carregarVeiculos);
