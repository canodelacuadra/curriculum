// Script mínimo para sistema de tabs con estado active correcto
document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  function updateActiveTab() {
    const hash = window.location.hash || '#formacion';
    
    // Actualizar estado active en los enlaces de navegación y atributos ARIA
    tabLinks.forEach(link => {
      const isActive = link.getAttribute('href') === hash;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-selected', isActive ? 'true' : 'false');
      link.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    
    // Actualizar visibilidad del contenido y atributos ARIA de los paneles
    tabContents.forEach(content => {
      const isCurrent = content.id === hash.slice(1);
      content.style.display = isCurrent ? 'block' : 'none';
      content.setAttribute('aria-hidden', isCurrent ? 'false' : 'true');
    });
  }
  
  // Event listeners para los enlaces de tabs
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetHash = link.getAttribute('href');
      history.pushState(null, '', targetHash);
      updateActiveTab();
    });
  });
  
  // Actualizar cuando cambia el hash (back/forward del navegador)
  window.addEventListener('hashchange', updateActiveTab);
  
  // Establecer estado inicial
  updateActiveTab();
});