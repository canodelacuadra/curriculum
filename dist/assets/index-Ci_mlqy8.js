(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=c(s);fetch(s.href,i)}})();const n={nombre:"José Antonio Cano de la Cuadra",titulo:"Curriculum Vitae",foto:{src:"img/jose-cano.jpg",alt:"Foto de José Antonio Cano"},contacto:{calle:"C/ Labradores 8",ciudad:"45516. La Puebla de Montalbán",movil:"600 255 567",email:"canodelacuadra@gmail.com"},datosNacimiento:{lugarNacimiento:"La Puebla de Montalbán",fechaNacimiento:"17/07/1966"}},l=[{fecha:"1984-1989",estudios:"Licenciado en Ciencias de la Información",institucion:"Universidad Complutense de Madrid",observaciones:"Especialidad Audiovisual"},{fecha:"2010",estudios:"Certficado de Profesionalidad: Formador Ocupacional",institucion:"Fedeto",observaciones:"Titulo oficial avalado por el Ministerio de Empleo y Economía"},{fecha:"2019",estudios:"ELABORACION DE CONTENIDOS FORMATIVOS PARA TELEFORMACIÓN( E-LEARNING)",institucion:"Forem CLM",observaciones:"60 horas"},{fecha:"2022",estudios:"Evaluación de los Sistemas de Gestión de Formación Profesional para el Empleo",institucion:"Vía Innovación Consultoría de proyectos",observaciones:"30 horas, modalidad mixta de Aula virtual y teleformación (3-28 octubre 2022)"},{fecha:"2022",estudios:"PERSONAL ASESOR Y EVALUADOR ACREDITA",institucion:"CRN Vinos y Aceites de Ciudad Real",observaciones:"40 horas, modalidad de Aula Virtual"},{fecha:"2023",estudios:"Tecnologías Avanzadas, aplicación y práctica en la FPE",institucion:"Vía Innovación Consultoría de proyectos",observaciones:"30 horas, modalidad mixta de Aula virtual y teleformación (14-4 abril 2023)"},{fecha:"2024",estudios:"Inglés básico",institucion:"Academia Santa Clara",observaciones:"120 horas"}],d={formadorOcupacional:[{fecha:"2025",horas:"480",cargo:"Profesor",descripcion:"DAW y MULTIMEDIA INTERACTIVA",empresa:"Grupo CDM-Alcorcón",observaciones:"Alcorcón, 4/12/2025"},{fecha:"2025",horas:"510",cargo:"Profesor",descripcion:"DAW MERN (aula virtual, teletrabajo)",empresa:"Grupo Aspasia-Adalid",observaciones:"Madrid, 7/5/2025"},{fecha:"2024",horas:"330",cargo:"Profesor",descripcion:"Desarrollo Avanzado Web (React y Figma)",empresa:"Patrimonio Nacional",observaciones:"Aranjuez, 30/9/2024"},{fecha:"2024",horas:"510",cargo:"Profesor",descripcion:"Desarrollo de Aplicaciones con Tecnologías Web",empresa:"Patrimonio Nacional",observaciones:"Aranjuez, 18/5/2024"},{fecha:"2023",horas:"160",cargo:"Profesor",descripcion:"Cursos de Iniciación informática mujerCLM",empresa:"UTE Talavera (Forplan...)",observaciones:"Pueblos de Toledo, 29/03/2023"},{fecha:"2021-2022",horas:"590",cargo:"Profesor",descripcion:"Desarrollo de Aplicaciones con Tecnologías web",empresa:"Atperson",observaciones:"Cuenca, Diciembre 2021 - Abril de 2022"},{fecha:"2021",horas:"590",cargo:"Profesor",descripcion:"Desarrollo de Aplicaciones con Tecnologías web",empresa:"Centro Colón",observaciones:"Fuenlabrada, Madrid Mayo - Noviembre"},{fecha:"2020",horas:"590",cargo:"Profesor",descripcion:"Desarrollo de Aplicaciones con Tecnologías web",empresa:"Ayla Diseño y Tecnología",observaciones:"Guadalajara Marzo - 16 de Nomviembre"},{fecha:"2019",horas:"300",cargo:"Profesor",descripcion:"Desarrollo de Aplicaciones con Tecnologías web",empresa:"Centro de Formación Hinarejos",observaciones:"Módulos II y III Villarrobledo, Albacete Mayo - 9 de Agosto"},{fecha:"2019",horas:"590",cargo:"Profesor",descripcion:"Desarrollo de Aplicaciones con Tecnologías web",empresa:"Lopez Santiago Consultores",observaciones:"Certificado Completo San Martín de Valdeiglesias, Madrid. Diciembre 2018 a Mayo de 2019"},{fecha:"2018",horas:"110",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de páginas web",empresa:"Ayuntamiento de Villarrobledo",observaciones:"Villarrobledo, Octubre y Noviembre de 2018"},{fecha:"2018",horas:"60",cargo:"Profesor",descripcion:"Autoedición de imágenes digitales y vídeo",empresa:"Ymca, Toledo",observaciones:"Toledo, Julio de 2017"},{fecha:"2018",horas:"560",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de páginas web",empresa:"Forca, Nuevos Retos de Futuro",observaciones:"Torrijos 14Junio - 13 De Diciembre"},{fecha:"2017",horas:"300",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de páginas web",empresa:"Academia Arma - Talavera de la Reina",observaciones:"Modulo I y II 26 Diciembre 2016 - 31 de Marzo 2017"},{fecha:"2016",horas:"560",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de páginas web",empresa:"Diputación de Toledo",observaciones:"Taller de Empleo Torrijos 3.0 Mayo - 31 de Octubre"},{fecha:"2016",horas:"280",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de páginas web",empresa:"Infobit",observaciones:"Módulo II y III Febrero-Abril"},{fecha:"2015",horas:"300",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Desarrollo de Aplicaciones con Tecnologías Web",empresa:"Unitel",observaciones:"Módulo II y III(PHP, MySQL,Ajax, Wordpress, Prestashop, Joomla...):Enero-Abril"},{fecha:"2014",horas:"180",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de Páginas webs",empresa:"Virtual Knowledge",observaciones:"Módulo II(creación de web con javascript):Julio-Septiembre"},{fecha:"2014",horas:"510",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Desarrollo de aplicaciones con Tecnologías Web",empresa:"Centro de Formación Autoescuela Stylo",observaciones:"Curso completo:Marzo, Agosto 2014"},{fecha:"2014",horas:"30",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Actividades Administrativas relacionadas con la Atención al Cliente",empresa:"Virtual Knowledge",observaciones:"-"},{fecha:"2013",horas:"270",cargo:"Profesor",descripcion:"Certificado de Profesionalidad: Confección y Publicación de Páginas webs",empresa:"Virtual Knowledge",observaciones:"Módulos II y III del Certificado: Confección de páginas webs con lenguajes de guión, y publicación de páginas web"}],profesorUniversitario:[{fecha:"1993-1997",duracion:"4 años académicos",cargo:"Profesor Titular",descripcion:"Teoría y Técnica de la Realización II. Asignatura de 3º de Licenciatura de Comunicación Audiovisual",empresa:"CEU San Pablo, Valencia",observaciones:"Teoría y Taller de expresión audiovisual en Televisión"}],profesorFP:[{fecha:"1991-1993",duracion:"2 años académicos",cargo:"Profesor titular",descripcion:"Teoría y Técnica de la Imagen. Asignaturas de FPII de la especialidad de Comuniación Audiovisual",empresa:"Juan Comenius, Valencia",observaciones:"Vídeo, Cine, Fotografía"}],desarrolloWeb:[{fecha:"2007-Actualidad",cargo:"Desarrollo Web",descripcion:"Creación de webs para múltiples y diferentes clientes",empresa:"FreeLance",observaciones:"Webs estáticas y dinámicas sobre las más variadas plataformas (wordpress, prestashop, moodle...)"},{fecha:"2007-Diciembre 2016",cargo:"Responsable Web",descripcion:"Creación y mantenimiento de las Webs Municipales",empresa:"Ayuntamiento de La Puebla de Montalbán",observaciones:"Todo tipo de trabajos incluyendo la incorporación de contenidos a las diferentes redes"}],disenoGrafico:[{fecha:"2013",cargo:"Diseñador Gráfico",descripcion:"Artes Finales para Imprenta y Diseño Gráfico",empresa:"Tecnigraf, Talavera de la Reina",observaciones:"Realizo todo tipo de diseños para imprenta y web"},{fecha:"2007-2010",cargo:"Diseñador Gráfico, Arte Finalista",descripcion:"Artes Finales para Imprenta y Diseño Gráfico",empresa:"Maosprint",observaciones:"Realizo todo tipo de diseños para imprenta y web"}],audiovisual:[{fecha:"2013-2014",cargo:"Realizador",descripcion:"Video Industrial Granjas Avícolas",empresa:"Symaga",observaciones:"Video en inglés, español y ruso"},{fecha:"2002",cargo:"Realizador",descripcion:"Programa Crónicas de la Transición",empresa:"El Mundo TV",observaciones:"Realización en exteriores postproducción y grafismo"},{fecha:"1998-2001",cargo:"Realizador",descripcion:"Realización de Concursos, promociones, reportajes...",empresa:"RTVV, Radio Televisión Valenciana",observaciones:"Trabajo tanto en producción propia como externa para la televisión pública valenciana"}]},t={desarrolloWeb:{lenguajes:["HTML5","CSS3","JavaScript","Python","PHP","SQL"],frameworks:["React","Node.js","Express.js","Bootstrap","Vite"],herramientas:["VS Code","Git","GitHub","Terminal/Git Bash"],aplicacionesWeb:["WordPress","Prestashop","Drupal"],apis:["Google Maps","APIs HTML5 JavaScript","YouTube","REST APIs","GraphQL"],baseDatos:["PostgreSQL","MySQL","MongoDB"],despliegue:["Vercel","Netlify","GitHub Pages","Docker"],testing:["Jest","Cypress"],seguridad:["JWT","OAuth","HTTPS","CORS"],ia:["GitHub Copilot","ChatGPT","OpenCode"]},expresionAudiovisual:{imagenRaster:["Photoshop","Gimp","Pixlr","Figma"],imagenVectorial:["Adobe Illustrator","Corel Draw","Figma"],maquetacion:["Adobe InDesign","Scribus"],video:["Adobe Premiere","After Effects"]}},p={github:"https://github.com/canodelacuadra",linkedin:"https://www.linkedin.com/in/canodelacuadra"},u={personal:n,formacion:l,experiencia:d,tecnologias:t,redes:p};function m(a){return`
    <div class="curriculum-container">
      <header class="header">
        <div class="profile-section">
          <div class="profile-info">
            <h1>${a.personal.nombre}</h1>
            <p class="subtitle">Desarrollador Web & Formador</p>
            <div class="contact-info">
              <p><i class="fas fa-map-marker-alt"></i> ${a.personal.contacto.calle}, ${a.personal.contacto.ciudad}</p>
              <p><i class="fas fa-mobile-alt"></i> ${a.personal.contacto.movil}</p>
              <p><i class="fas fa-envelope"></i> ${a.personal.contacto.email}</p>
              <p><i class="fas fa-calendar-alt"></i> ${a.personal.datosNacimiento.fechaNacimiento} | <i class="fas fa-map-marker-alt"></i> ${a.personal.datosNacimiento.lugarNacimiento}</p>
            </div>
            <div class="social-networks">
              <a href="${a.redes.github}" target="_blank">GitHub</a>
              <a href="${a.redes.linkedin}" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Formación Académica -->
        <details class="curriculum-section">
          <summary>
            <span class="summary-title"><i class="fas fa-graduation-cap"></i> Formación Académica</span>
            <span class="item-count">${a.formacion.length} titulaciones y/o cursos</span>
          </summary>
          <div class="timeline">
            ${a.formacion.map(e=>`
              <div class="timeline-item">
                <div class="timeline-date">${e.fecha}</div>
                <div class="timeline-content">
                  <h3>${e.estudios}</h3>
                  <p class="institution">${e.institucion}</p>
                  <p class="details">${e.observaciones}</p>
                </div>
              </div>
            `).join("")}
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
                <span class="exp-count">${a.experiencia.formadorOcupacional.length} experiencias</span>
              </summary>
              <div class="timeline">
                ${a.experiencia.formadorOcupacional.map(e=>`
                  <div class="timeline-item">
                    <div class="timeline-date">${e.fecha}</div>
                    <div class="timeline-content">
                      <h3>${e.cargo} - ${e.empresa}</h3>
                      <p class="description">${e.descripcion}</p>
                      <p class="details">${e.horas} horas | ${e.observaciones}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </details>

            <!-- Profesor Universitario -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Profesor Universitario</span>
                <span class="exp-count">${a.experiencia.profesorUniversitario.length} experiencia</span>
              </summary>
              <div class="timeline">
                ${a.experiencia.profesorUniversitario.map(e=>`
                  <div class="timeline-item">
                    <div class="timeline-date">${e.fecha}</div>
                    <div class="timeline-content">
                      <h3>${e.cargo} - ${e.empresa}</h3>
                      <p class="description">${e.descripcion}</p>
                      <p class="details">${e.duracion} | ${e.observaciones}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </details>

            <!-- Desarrollo Web -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Desarrollo Web</span>
                <span class="exp-count">${a.experiencia.desarrolloWeb.length} proyectos</span>
              </summary>
              <div class="timeline">
                ${a.experiencia.desarrolloWeb.map(e=>`
                  <div class="timeline-item">
                    <div class="timeline-date">${e.fecha}</div>
                    <div class="timeline-content">
                      <h3>${e.cargo} - ${e.empresa}</h3>
                      <p class="description">${e.descripcion}</p>
                      <p class="details">${e.observaciones}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </details>

            <!-- Diseño Gráfico -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Diseño Gráfico</span>
                <span class="exp-count">${a.experiencia.disenoGrafico.length} trabajos</span>
              </summary>
              <div class="timeline">
                ${a.experiencia.disenoGrafico.map(e=>`
                  <div class="timeline-item">
                    <div class="timeline-date">${e.fecha}</div>
                    <div class="timeline-content">
                      <h3>${e.cargo} - ${e.empresa}</h3>
                      <p class="description">${e.descripcion}</p>
                      <p class="details">${e.observaciones}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </details>

            <!-- Producción Audiovisual -->
            <details class="subcategory">
              <summary>
                <span class="summary-subtitle">Producción Audiovisual</span>
                <span class="exp-count">${a.experiencia.audiovisual.length} proyectos</span>
              </summary>
              <div class="timeline">
                ${a.experiencia.audiovisual.map(e=>`
                  <div class="timeline-item">
                    <div class="timeline-date">${e.fecha}</div>
                    <div class="timeline-content">
                      <h3>${e.cargo} - ${e.empresa}</h3>
                      <p class="description">${e.descripcion}</p>
                      <p class="details">${e.observaciones}</p>
                    </div>
                  </div>
                `).join("")}
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
                      ${a.tecnologias.desarrolloWeb.lenguajes.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Frameworks</h4>
                    <div class="tech-tags">
                      ${a.tecnologias.desarrolloWeb.frameworks.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Herramientas</h4>
                    <div class="tech-tags">
                      ${a.tecnologias.desarrolloWeb.herramientas.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Aplicaciones Web</h4>
                    <div class="tech-tags">
                      ${a.tecnologias.desarrolloWeb.aplicacionesWeb.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Bases de Datos</h4>
                    <div class="tech-tags">
                      ${a.tecnologias.desarrolloWeb.baseDatos.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
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
                      ${a.tecnologias.expresionAudiovisual.imagenRaster.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Imagen Vectorial</h4>
                    <div class="tech-tags">
                      ${a.tecnologias.expresionAudiovisual.imagenVectorial.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                  <div class="tech-group">
                    <h4>Video</h4>
                    <div class="tech-tags">
                      ${a.tecnologias.expresionAudiovisual.video.map(e=>`<span class="tech-tag">${e}</span>`).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </details>

      
  `}document.querySelector("#app").innerHTML=m(u);
