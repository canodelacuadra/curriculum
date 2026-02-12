# CV Personal - José Antonio Cano de la Cuadra

## 🚀 Resumen Técnico

Sitio web estático implementado con **Astro v5.17.1** para la presentación de un curriculum vitae personal. Desarrollado como una Single Page Application (SPA) optimizada para SEO y rendimiento.

## 🛠️ Stack Tecnológico

- **Framework:** Astro v5.17.1 (Static Site Generation)
- **Tipo:** Módulos ESM (`"type": "module"`)
- **Estilos:** CSS vanilla con variables globales
- **Íconos:** FontAwesome 6.6.0
- **TypeScript:** Configurado en strict mode
- **Deployment:** GitHub Pages (GitHub Actions)

## 📂 Estructura del Proyecto

```
src/
├── components/     # Componentes Astro reutilizables (Icon.astro)
├── data/          # Datos estructurados (curriculum.json)
├── pages/         # Routing automático (index.astro)
├── scripts/       # Scripts del cliente (tabs.js)
└── styles/        # CSS global y variables

public/
├── img/           # Assets estáticos
└── scripts/       # Scripts sin bundling (requieren is:inline)
```

## ⚡ Características Principales

- **Static Generation:** Build optimizado sin JavaScript del lado del servidor
- **Zero Bundle por defecto:** Solo se empaqueta el JavaScript necesario
- **Component Islands:** Archivo tabs.js procesado con `is:inline` para funcionalidad cliente
- **TypeScript Strict:** Tipado completo en interfaces y componentes
- **SEO Optimizado:** Metadata estructurada para motores de búsqueda

## 🔧 Comandos de Desarrollo

```bash
npm run dev        # Servidor de desarrollo (localhost:4321)
npm run build      # Build de producción
npm run preview   # Previsualizar build local
npm run astro      # CLI de Astro directamente
```

## 📋 Datos del Curriculum

Estructura JSON optimizada:
- `personal`: Información de contacto y datos básicos
- `formacion`: Array de estudios y certificaciones  
- `experiencia`: Objetos agrupados por categoría profesional
- `tecnologias`: Stack técnico por tipo
- `redes`: Enlaces a perfiles profesionales

## 🚀 Deployment Pipeline

- **Trigger:** Push a rama `master`
- **CI/CD:** GitHub Actions (.github/workflows/deploy.yml)
- **Runtime:** Node.js 20
- **Target:** GitHub Pages hosting

---

*Desarrollado con Astro v5.17.1 • TypeScript • Vanilla CSS*