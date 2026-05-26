/**
 * ============================================================
 *  AURORA — Luxury Automotive JavaScript Behaviors
 *  Requer: aurora.css
 * ============================================================
 *  COMO USAR:
 *  1. Importe o CSS:  <link rel="stylesheet" href="aurora.css">
 *  2. Importe o JS:   <script src="aurora.js" defer></script>
 *  3. Adicione as classes nos seus elementos (ver aurora.css).
 *     Este script detecta automaticamente as classes e ativa
 *     todos os comportamentos descritos abaixo.
 *
 *  COMPORTAMENTOS ATIVOS:
 *  ─ Sticky Header      (.au-header → .au-header--scrolled)
 *  ─ Scroll Animations  (.au-reveal → .au-reveal--visible)
 *  ─ Parallax           (.au-parallax)
 *  ─ Custom Cursor      (.au-body → cria #au-cursor)
 *  ─ Active Nav Link    (.au-nav__link com href="#secao")
 * ============================================================
 */

(function () {
  'use strict';

  /* ── UTILITÁRIOS ─────────────────────────────────────────── */

  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsAll(selector, root) {
    return (root || document).querySelectorAll(selector);
  }

  function onReady(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* ── 1. STICKY HEADER ────────────────────────────────────── */
  /*
   * Quando o scroll passa de 100px, adiciona .au-header--scrolled
   * ao elemento com .au-header, ativando o visual comprimido e
   * semi-transparente definido no CSS.
   *
   * Classe aplicada: .au-header
   */

  function initStickyHeader() {
    var header = qs('.au-header');
    if (!header) return;

    var SCROLL_THRESHOLD = 100;

    function updateHeader() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        header.classList.add('au-header--scrolled');
      } else {
        header.classList.remove('au-header--scrolled');
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ── 2. SCROLL ANIMATIONS (Intersection Observer) ────────── */
  /*
   * Observa todos os elementos com .au-reveal.
   * Quando 10% do elemento entra na viewport, adiciona
   * .au-reveal--visible, ativando o fade-in + slide-up do CSS.
   *
   * Variantes de delay: adicione também .au-reveal--d1 até --d5.
   * Direções: .au-reveal--left / .au-reveal--right
   *
   * Classe base: .au-reveal
   */

  function initScrollReveal() {
    var elements = qsAll('.au-reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('au-reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── 3. PARALLAX MODERADO ────────────────────────────────── */
  /*
   * Aplica um deslocamento vertical suave nos elementos com
   * .au-parallax conforme o scroll da página. O fator padrão é
   * 0.35 (elemento se move 35% mais devagar que o scroll),
   * criando profundidade visual sem ser excessivo.
   *
   * Para ajustar a intensidade, defina o atributo:
   *   data-au-parallax-speed="0.2"   (mais suave)
   *   data-au-parallax-speed="0.5"   (mais intenso)
   *
   * Classe base: .au-parallax
   */

  function initParallax() {
    var elements = qsAll('.au-parallax');
    if (!elements.length) return;

    function applyParallax() {
      var scrollY = window.scrollY;
      elements.forEach(function (el) {
        var speed = parseFloat(el.dataset.auParallaxSpeed) || 0.35;
        var rect = el.getBoundingClientRect();
        var offsetFromCenter = (rect.top + rect.height / 2) - window.innerHeight / 2;
        var shift = offsetFromCenter * speed * -1;
        el.style.transform = 'translateY(' + shift + 'px)';
      });
    }

    window.addEventListener('scroll', applyParallax, { passive: true });
    applyParallax();
  }

  /* ── 4. CUSTOM CURSOR ────────────────────────────────────── */
  /*
   * Cria um cursor circular dourado (#au-cursor) se o elemento
   * .au-body estiver presente (cursor: none definido no CSS).
   *
   * Ao passar por qualquer elemento clicável (botões, links,
   * cards, inputs, selects), o cursor expande para 32px e
   * fica vazado com borda dourada (.au-cursor--hover).
   *
   * Para marcar elementos adicionais como "clicáveis" para o
   * cursor, adicione o atributo: data-au-cursor-hover
   *
   * Requer: .au-body no <body>
   */

  function initCustomCursor() {
    var body = qs('.au-body');
    if (!body) return;

    /* Não ativa em dispositivos touch */
    if (window.matchMedia('(hover: none)').matches) return;

    var cursor = document.createElement('div');
    cursor.id = 'au-cursor';
    document.body.appendChild(cursor);

    var posX = 0;
    var posY = 0;
    var currentX = 0;
    var currentY = 0;
    var raf;

    /* Movimento suavizado com lerp */
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function animateCursor() {
      currentX = lerp(currentX, posX, 0.18);
      currentY = lerp(currentY, posY, 0.18);
      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';
      raf = requestAnimationFrame(animateCursor);
    }

    document.addEventListener('mousemove', function (e) {
      posX = e.clientX;
      posY = e.clientY;

      if (!cursor.style.display || cursor.style.display === 'none') {
        cursor.style.display = 'block';
        currentX = posX;
        currentY = posY;
        if (!raf) animateCursor();
      }
    });

    document.addEventListener('mouseleave', function () {
      cursor.style.display = 'none';
      cancelAnimationFrame(raf);
      raf = null;
    });

    /* Seletor de elementos interativos */
    var interactiveSelector = [
      'a',
      'button',
      'input',
      'select',
      'textarea',
      'label',
      '.au-card',
      '.au-btn',
      '[data-au-cursor-hover]',
      '[role="button"]',
      '[onclick]'
    ].join(', ');

    function attachHoverEvents(root) {
      root.querySelectorAll(interactiveSelector).forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          cursor.classList.add('au-cursor--hover');
        });
        el.addEventListener('mouseleave', function () {
          cursor.classList.remove('au-cursor--hover');
        });
      });
    }

    attachHoverEvents(document);

    /* Reprocessa se o DOM for modificado dinamicamente */
    var mutationObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            attachHoverEvents(node);
            if (node.matches && node.matches(interactiveSelector)) {
              node.addEventListener('mouseenter', function () {
                cursor.classList.add('au-cursor--hover');
              });
              node.addEventListener('mouseleave', function () {
                cursor.classList.remove('au-cursor--hover');
              });
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  /* ── 5. ACTIVE NAV LINK ──────────────────────────────────── */
  /*
   * Marca como .au-nav__link--active o link da navegação cujo
   * href aponta para a seção atualmente visível na viewport.
   * Funciona com âncoras (#secao) e URLs relativas (/pagina).
   *
   * Para âncoras: o link deve ter href="#id-da-secao" e a
   * seção deve ter o id correspondente.
   *
   * Classe dos links: .au-nav__link
   */

  function initActiveNavLink() {
    var links = qsAll('.au-nav__link');
    if (!links.length) return;

    /* Modo por pathname (página atual) */
    var currentPath = window.location.pathname;
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        if (href === currentPath || currentPath.startsWith(href) && href !== '/') {
          link.classList.add('au-nav__link--active');
        }
      }
    });

    /* Modo por scroll (âncoras) */
    var anchorLinks = Array.from(links).filter(function (link) {
      var href = link.getAttribute('href') || '';
      return href.startsWith('#') && href.length > 1;
    });

    if (!anchorLinks.length) return;

    var sections = anchorLinks.map(function (link) {
      var id = link.getAttribute('href').slice(1);
      return { link: link, section: document.getElementById(id) };
    }).filter(function (item) {
      return item.section !== null;
    });

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var match = sections.find(function (s) {
            return s.section === entry.target;
          });
          if (!match) return;
          if (entry.isIntersecting) {
            anchorLinks.forEach(function (l) {
              l.classList.remove('au-nav__link--active');
            });
            match.link.classList.add('au-nav__link--active');
          }
        });
      },
      { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(function (s) {
      sectionObserver.observe(s.section);
    });
  }

  /* ── 6. SMOOTH SCROLL ─────────────────────────────────────── */
  /*
   * Intercepta cliques em links com href="#ancora" e faz
   * scroll suave até o elemento, compensando a altura do header.
   */

  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      var id = link.getAttribute('href').slice(1);
      if (!id) return;

      var target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      var header = qs('.au-header');
      var headerHeight = header ? header.offsetHeight : 0;
      var targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  }

  /* ── 7. INICIALIZAÇÃO ────────────────────────────────────── */

  onReady(function () {
    initStickyHeader();
    initScrollReveal();
    initParallax();
    initCustomCursor();
    initActiveNavLink();
    initSmoothScroll();
  });

})();
