import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import curriculum from './data/curriculum.json'

//console.log('📋 Curriculum cargado:', curriculum)

function createCurriculumHTML(data) {
  return `
    <div class="curriculum-container">
      <header class="header">
        <div class="profile-section">
          <div class="profile-info">
            <h1>${data.personal.nombre}</h1>
            <p class="subtitle">Desarrollador Web & Formador</p>
            <div class="contact-info">
              <p><i class="fas fa-map-marker-alt"></i> ${data.personal.contacto.calle}, ${data.personal.contacto.ciudad}</p>
              <p><i class="fas fa-mobile-alt"></i> ${data.personal.contacto.movil}</p>
              <p><i class="fas fa-envelope"></i> ${data.personal.contacto.email}</p>
              <p><i class="fas fa-calendar-alt"></i> ${data.personal.datosNacimiento.fechaNacimiento} | <i class="fas fa-map-marker-alt"></i> ${data.personal.datosNacimiento.lugarNacimiento}</p>
            </div>
            <div class="social-networks">
              <a href="${data.redes.github}" target="_blank">GitHub</a>
              <a href="${data.redes.linkedin}" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Formación Académica -->
        <details class="curriculum-section">
          <summary>
            <span class="summary-title"><i class="fas fa-graduation-cap"></i> Formación Académica</span>
            <span class="item-count">${data.formacion.length} titulaciones y/o cursos</span>
          </summary>
          <div class="timeline">
            ${data.formacion.map(item => `
              <div class="timeline-item">
                <div class="timeline-date">${item.fecha}</div>
                <div class="timeline-content">
                  <h3>${item.estudios}</h3>
                  <p class="institution">${item.institucion}</p>
                  <p class="details">${item.observaciones}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </details>

        <!-- Experiencia Profesional -->
        <details class="curriculum-section">
          <summary>
            <span class="summary-title"><i class="fas fa-briefcase"></i> Experiencia Profesional</span>
            <span class="item-count">5 ámbitos</span>
          </summary>
          
          <div class="experience-categories">
            <!-- Formador Ocupacional -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Formador Ocupacional</span>
                <span class="exp-count">${data.experiencia.formadorOcupacional.length} experiencias</span>
              </summary>
              <div class="timeline">
                ${data.experiencia.formadorOcupacional.map(item => `
                  <div class="timeline-item">
                    <div class="timeline-date">${item.fecha}</div>
                    <div class="timeline-content">
                      <h3>${item.cargo} - ${item.empresa}</h3>
                      <p class="description">${item.descripcion}</p>
                      <p class="details">${item.horas} horas | ${item.observaciones}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </details>

            <!-- Profesor Universitario -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Profesor Universitario</span>
                <span class="exp-count">${data.experiencia.profesorUniversitario.length} experiencia</span>
              </summary>
              <div class="timeline">
                ${data.experiencia.profesorUniversitario.map(item => `
                  <div class="timeline-item">
                    <div class="timeline-date">${item.fecha}</div>
                    <div class="timeline-content">
                      <h3>${item.cargo} - ${item.empresa}</h3>
                      <p class="description">${item.descripcion}</p>
                      <p class="details">${item.duracion} | ${item.observaciones}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </details>

            <!-- Desarrollo Web -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Desarrollo Web</span>
                <span class="exp-count">${data.experiencia.desarrolloWeb.length} proyectos</span>
              </summary>
              <div class="timeline">
                ${data.experiencia.desarrolloWeb.map(item => `
                  <div class="timeline-item">
                    <div class="timeline-date">${item.fecha}</div>
                    <div class="timeline-content">
                      <h3>${item.cargo} - ${item.empresa}</h3>
                      <p class="description">${item.descripcion}</p>
                      <p class="details">${item.observaciones}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </details>

            <!-- Diseño Gráfico -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Diseño Gráfico</span>
                <span class="exp-count">${data.experiencia.disenoGrafico.length} trabajos</span>
              </summary>
              <div class="timeline">
                ${data.experiencia.disenoGrafico.map(item => `
                  <div class="timeline-item">
                    <div class="timeline-date">${item.fecha}</div>
                    <div class="timeline-content">
                      <h3>${item.cargo} - ${item.empresa}</h3>
                      <p class="description">${item.descripcion}</p>
                      <p class="details">${item.observaciones}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </details>

            <!-- Producción Audiovisual -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Producción Audiovisual</span>
                <span class="exp-count">${data.experiencia.audiovisual.length} proyectos</span>
              </summary>
              <div class="timeline">
                ${data.experiencia.audiovisual.map(item => `
                  <div class="timeline-item">
                    <div class="timeline-date">${item.fecha}</div>
                    <div class="timeline-content">
                      <h3>${item.cargo} - ${item.empresa}</h3>
                      <p class="description">${item.descripcion}</p>
                      <p class="details">${item.observaciones}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </details>
          </div>
        </details>

        <!-- Tecnologías y Herramientas -->
        <details class="curriculum-section">
          <summary>
            <span class="summary-title"><i class="fas fa-tools"></i> Tecnologías y Herramientas</span>
            <span class="item-count">2 categorías principales</span>
          </summary>
          
          <div class="tech-categories">
            <!-- Desarrollo Web -->
            <details class="tech-subcategory">
              <summary>
                <span class="summary-subtitle">Desarrollo Web</span>
                <span class="tech-count">6 categorías</span>
              </summary>
              <div class="tech-category">
                <div class="tech-grid">
                  <div class="tech-group">
                    <h4>Lenguajes</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.desarrolloWeb.lenguajes.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Frameworks</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.desarrolloWeb.frameworks.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Herramientas</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.desarrolloWeb.herramientas.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Aplicaciones Web</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.desarrolloWeb.aplicacionesWeb.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Bases de Datos</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.desarrolloWeb.baseDatos.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <!-- Expresión Audiovisual -->
            <details class="tech-subcategory">
              <summary>
                <span class="summary-subtitle">Expresión Audiovisual</span>
                <span class="tech-count">3 categorías</span>
              </summary>
              <div class="tech-category">
                <div class="tech-grid">
                  <div class="tech-group">
                    <h4>Imagen Ráster</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.expresionAudiovisual.imagenRaster.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Imagen Vectorial</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.expresionAudiovisual.imagenVectorial.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Video</h4>
                    <div class="tech-tags">
                      ${data.tecnologias.expresionAudiovisual.video.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </details>

      
  `
}




document.querySelector('#app').innerHTML = createCurriculumHTML(curriculum)