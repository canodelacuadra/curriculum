# 📚 Portfolio de José Antonio Cano

Portfolio web moderno desarrollado con Astro, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Tecnologías Utilizadas

- **Framework:** Astro con renderizado estático
- **Lenguaje:** TypeScript para tipado seguro
- **Estilos:** Tailwind CSS con diseño responsive
- **Animaciones:** Framer Motion para interacciones suaves
- **Despliegue:** GitHub Pages

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes Astro reutilizables
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ThemeToggle.astro
│   ├── DatosPersonales.astro
│   ├── Formacion.astro
│   ├── Experiencia.astro
│   └── Tecnologias.astro
├── content/             # Datos estructurados
│   └── curriculum.json
├── layouts/             # Layouts base
│   └── MainLayout.astro
├── pages/               # Páginas del sitio
│   └── index.astro
├── styles/              # Estilos globales
│   └── global.css
└── types/               # Tipos TypeScript
    └── curriculum.ts
```

## 🎯 Características Principales

### ✅ Modo Oscuro/Claro
- Toggle en la esquina superior derecha
- Persistencia con localStorage
- Transiciones suaves entre temas

### ✅ Diseño Responsivo
- Mobile-first approach
- Layouts adaptativos
- Navegación táctil optimizada

### ✅ Animaciones con Framer Motion
- Entradas suaves al hacer scroll
- Microinteracciones en hover
- Transiciones fluidas

### ✅ Accesibilidad
- Navegación por teclado
- ARIA labels apropiados
- Contraste WCAG compliant

### ✅ Performance
- Core Web Vitals optimizados
- Imágenes optimizadas
- Bundle size mínimo

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build local
npm run preview

# Linting (configurado)
npm run lint
```

## 📊 Datos del Curriculum

La información está separada del código en `src/content/curriculum.json`:

- **Datos Personales:** Información de contacto básica
- **Formación:** Educación y certificaciones
- **Experiencia:** Dividida por categorías (formador, desarrollo web, diseño, audiovisual)
- **Tecnologías:** Skills y herramientas dominadas
- **Redes Sociales:** Enlaces a perfiles profesionales

## 🌐 Despliegue

El sitio está configurado para despliegue automático en GitHub Pages:

1. Push a rama `main`/`master`
2. GitHub Actions build y deploy
3. Sitio disponible en `https://username.github.io/repo`

## 🎨 Diseño Minimalista

- Paleta de colores neutral con acentos azules
- Tipografía Inter/Google Fonts
- Espaciado generoso (white space)
- Bordes y sombras sutiles
- Iconos Lucide React modernos

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## ♿ Accesibilidad

- Navegación por teclado completa
- Screen reader friendly
- Focus states visibles
- ARIA roles apropiados
- Reducción de motion si es preferido

## 🚀 Performance

- Puntuación Lighthouse: 95+
- First Contentful Paint < 1s
- Largest Contentful Paint < 2s
- Cumulative Layout Shift < 0.1

## 📝 Licencia

© 2026 José Antonio Cano de la Cuadra. Todos los derechos reservados.