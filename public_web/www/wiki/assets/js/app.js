document.addEventListener('DOMContentLoaded', () => {
  const contentEl = document.getElementById('content');
  const loaderEl = document.getElementById('loader');
  const navLinks = document.querySelectorAll('.nav a');
  const searchInput = document.getElementById('q');
  const clearSearchBtn = document.getElementById('clear-q');

  /**
   * Carga el contenido de una página de forma asíncrona.
   * @param {string} path - La ruta al archivo HTML a cargar.
   */
  const loadContent = async (path) => {
    // Si no hay path, usa la página de introducción por defecto.
    const url = path || 'pages/index.html';

    // 1. Mostrar el loader y limpiar contenido anterior.
    loaderEl.classList.remove('hidden');
    contentEl.innerHTML = '';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      contentEl.innerHTML = html;

      // 2. Re-inicializar los iconos en el nuevo contenido.
      if (window.lucide) {
        window.lucide.createIcons();
      }

      // 3. Añadir animación de entrada.
      contentEl.classList.add('fade-in');
      contentEl.addEventListener('animationend', () => {
        contentEl.classList.remove('fade-in');
      }, { once: true });

    } catch (error) {
      console.error('Error al cargar la página:', error);
      contentEl.innerHTML = `
        <div class="error-page">
          <h2>Error al cargar el contenido</h2>
          <p>No se pudo encontrar la página solicitada. Por favor, intenta de nuevo o selecciona otra sección.</p>
        </div>`;
    } finally {
      // 4. Ocultar el loader.
      loaderEl.classList.add('hidden');
    }
  };

  /**
   * Actualiza el enlace activo en la navegación.
   */
  const updateActiveLink = () => {
    const currentHash = window.location.hash || '#pages/index.html';
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  /**
   * Maneja el cambio de ruta (hash) en la URL.
   */
  const handleRouteChange = () => {
    const path = window.location.hash.substring(1);
    loadContent(path);
    updateActiveLink();
  };

  /**
   * Filtra los enlaces de navegación según el texto de búsqueda.
   */
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();

    // Muestra u oculta el botón de limpiar de forma más robusta
    if (query.length > 0) {
      clearSearchBtn.classList.remove('hidden');
      clearSearchBtn.style.opacity = '1';
      clearSearchBtn.style.pointerEvents = 'auto';
    } else {
      clearSearchBtn.classList.add('hidden');
      clearSearchBtn.style.opacity = '0';
      clearSearchBtn.style.pointerEvents = 'none';
    }

    navLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      // Muestra u oculta el enlace según coincida con la búsqueda.
      link.style.display = text.includes(query) ? '' : 'none';
    });
  };
  
  const clearSearch = () => {
    searchInput.value = '';
    // Dispara manualmente el evento 'input' para que handleSearch se ejecute y actualice la UI
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    searchInput.focus();
  };

  // --- Event Listeners ---
  window.addEventListener('hashchange', handleRouteChange);
  searchInput.addEventListener('input', handleSearch);
  clearSearchBtn.addEventListener('click', clearSearch);

  // --- Inicialización ---
  handleRouteChange(); // Cargar contenido inicial.
});