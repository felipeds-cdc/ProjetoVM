async function carregarVeiculosHome() {
  const container = document.getElementById("home-veiculos-container");
  if (!container) return;

  try {
    const resposta = await fetch("/api/veiculos");
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);

    const veiculos = await resposta.json();
    const destaques = veiculos.slice(0, 6);

    container.innerHTML = "";

    destaques.forEach((veiculo, index) => {
      const card = document.createElement("article");
      card.className = "au-card";
      card.setAttribute("aria-label", veiculo.nome);

      card.innerHTML = `
        <div class="au-card__image">
          <img src="${veiculo.imagem}" alt="${veiculo.nome}" loading="lazy" />
        </div>
        <div class="au-card__gold-line"></div>
        <div class="au-card__body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="au-card__number">${String(index + 1).padStart(2, "0")}.</span>
            <span class="au-badge au-badge--gold">${veiculo.status}</span>
          </div>
          <div class="au-card__name">${veiculo.nome}</div>
          <div class="au-card__sub">${veiculo.ano} &middot; ${veiculo.transmissao} &middot; ${veiculo.bateria}</div>
          <hr class="au-divider" style="margin:12px 0" />
          <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
            <span class="au-h3" style="font-size:16px">R$ ${veiculo.preco.toLocaleString("pt-BR")}</span>
            <a href="/pages/contact/contato.html?veiculo=${encodeURIComponent(veiculo.nome)}" class="au-btn au-btn--ghost au-btn--sm">Ver Detalhes</a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (erro) {
    container.innerHTML = `<p class="status error">Falha ao carregar veículos: ${erro.message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", carregarVeiculosHome);
