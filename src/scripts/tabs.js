// Script mínimo para sistema de tabs con estado active correcto
document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  function updateActiveTab() {
    const hash = window.location.hash || '#formacion';
    
    // Actualizar estado active en los enlaces de navegación
    tabLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
    
    // Actualizar visibilidad del contenido
    tabContents.forEach(content => {
      content.style.display = content.id === hash.slice(1) ? 'block' : 'none';
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