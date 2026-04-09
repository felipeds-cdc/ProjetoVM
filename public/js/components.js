/**
 * =====================================================
 * Component Loader - VORTEX MOTORS
 * Descrição: Carrega componentes HTML dinamicamente
 * Versão: 1.0.0
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('/src/components/header.html', '.header-container');
  loadComponent('/src/components/footer.html', '.footer-container');
  loadComponent('/src/components/whatsapp-float.html', '.whatsapp-container');
  updateYear();
});

/**
 * Carrega um componente HTML em um seletor
 * @param {string} url - Caminho do componente
 * @param {string} selector - Seletor CSS onde o componente será inserido
 */
async function loadComponent(url, selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(`Erro ao carregar componente ${url}:`, error);
  }
}

/**
 * Atualiza o ano automaticamente no footer
 */
function updateYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
