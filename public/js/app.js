// Substitua pela URL da sua API real
const API_URL = "/public/data/carros.json"; // ou 'https://api.seusite.com/veiculos'

async function carregarVeiculos() {
  const container = document.getElementById("car-container");
  const loading = document.getElementById("loading");
  const errorDiv = document.getElementById("error");

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const veiculos = await response.json();
    renderizarVeiculos(veiculos);
  } catch (err) {
    errorDiv.textContent = `⚠️ Falha ao carregar os veículos: ${err.message}`;
    errorDiv.style.display = "block";
  } finally {
    loading.style.display = "none";
  }
}

function renderizarVeiculos(veiculos) {
  
  const container = document.getElementById("car-container");
  container.innerHTML = ""; // limpa conteúdo anterior (útil se for reutilizar com filtros)

  veiculos.forEach((v, index) => {
    const kmDisplay = v.categoria === 'Elétrico' 
        ? `${v.autonomia || v.potencia} km` 
        : v.km;

    const card = document.createElement("article");
    card.className = "car-card";
    card.innerHTML = `
    <div class="vehicle-card class="au-reveal au-reveal--d1">
    
      <div class="au-card__image">
        <img src="${v.imagem}" alt="${v.nome}" loading="lazy">
      </div>

      <div class="au-card__gold-line"></div>

      <div class="vehicle-card__body">
        <div class="vehicle-card__tags">
          <span class="au-badge au-badge--gold">${v.status}</span>
        </div>
        <h3 class="vehicle-card__name">${v.nome}</h3>
        <p class="vehicle-card__meta">${v.ano} · ${v.transmissao} · ${v.bateria}</p>
      
        <div class="vehicle-card__specs">
          <div class="vehicle-card__spec-item">
            <span class="vehicle-card__spec-label">Potência</span>
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
          <span class="vehicle-card__price-label">Preço</span>
          <span class="vehicle-card__price-value">R$ ${v.preco.toLocaleString("pt-BR")}</span>
        </div>
      
        <div class="vehicle-card__actions">
          <a href="/pages/veiculos/${v.slug}.html" class="au-btn au-btn--ghost">Ver Detalhes</a>
          <a href="https://wa.me/5511984039699?text=Tenho interesse no ${v.nome} ${v.ano}" class="au-btn au-btn--solid" target="_blank">WhatsApp</a>
        </div>
      </div>
    </div>
    `;
    container.appendChild(card);
  });
}

// Executa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", carregarVeiculos);
