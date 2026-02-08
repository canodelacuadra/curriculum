# AGENTS.md - Guía para Agentes de Código

## Información del Proyecto

**Tipo:** Sitio estático Astro v5.17.1
**Idioma:** Español
**Deploy:** GitHub Pages
**Módulos:** ESM (`"type": "module"`)

---

## Comandos Disponibles

### Build
```bash
npm run build        # Build de producción
npm run dev          # Servidor de desarrollo
npm run preview      # Previsualizar build
npm run astro        # CLI de Astro directamente
```

### TypeScript
```bash
npx tsc --noEmit     # Type checking (sin configuración explícita)
```

**Nota:** No hay herramientas de linting, formatting ni testing configuradas actualmente.

---

## Errores Comunes y Soluciones

### Error: Script en public/ no se puede empaquetar

**Error:**
```
<script src="/scripts/tabs.js"> references an asset in the "public/" directory. 
Please add the "is:inline" directive to keep this asset from being bundled.
```

**Solución:**
Agregar `is:inline` a los scripts que referencian archivos en `public/`:

```astro
<!-- ❌ Incorrecto -->
<script src="/scripts/tabs.js"></script>

<!-- ✅ Correcto -->
<script is:inline src="/scripts/tabs.js"></script>
```

**Ubicación común:** `src/pages/index.astro` línea 243

---

## Convenciones de Código

### Astro Components

**Estructura:**
```astro
---
// 1. Imports
import '../styles/global.css';
import Component from './Component.astro';

// 2. Types/Interfaces
interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

// 3. Props destructuring
const { name, size = 'md' }: Props = Astro.props;

// 4. Funciones helper
function helper() { }
---

<!-- 5. Template HTML -->
<div>{name}</div>
```

### TypeScript

- Usar strict mode (configurado en `tsconfig.json`)
- Siempre definir interfaces para Props de componentes
- Tipar todas las funciones helper
- Preferir `const` sobre `let`

### Imports

**Orden:**
1. Estilos CSS
2. Datos JSON
3. Componentes Astro

**Ejemplo:**
```astro
---
import '../styles/global.css';
import curriculum from '../data/curriculum.json';
import Icon from '../components/Icon.astro';
---
```

### Nomenclatura

- **Componentes:** PascalCase (`Icon.astro`, `NavBar.astro`)
- **Archivos:** camelCase (`tabs.js`, `global.css`)
- **Carpetas:** kebab-case o lowercase (`components/`, `data/`)
- **Variables:** camelCase
- **Constantes:** UPPER_SNAKE_CASE (si son globales)
- **Interfaces:** PascalCase con prefijo descriptivo

### Estilos CSS

- Usar clases semánticas y descriptivas
- Preferir BEM para componentes complejos
- Definir variables CSS en `global.css`
- Evitar estilos inline

### Scripts del Cliente

- Colocar en `src/scripts/` o `public/scripts/`
- Si están en `public/`, usar `is:inline` en el tag script
- Mantener scripts vanilla JS simples (no frameworks)
- Documentar funcionalidad con comentarios

---

## Estructura de Carpetas

```
src/
├── components/      # Componentes Astro reutilizables
├── data/           # Datos JSON (curriculum, etc.)
├── pages/          # Páginas (routing automático)
├── scripts/        # Scripts del cliente
└── styles/         # CSS global y utilidades

public/
├── favicon.*       # Favicon y iconos
├── img/           # Imágenes estáticas
└── scripts/       # Scripts que no se empaquetan
```

---

## Datos

El CV usa `src/data/curriculum.json`. Estructura:
- `personal`: Información personal
- `formacion`: Array de estudios
- `experiencia`: Objetos por categoría
- `tecnologias`: Agrupadas por tipo
- `redes`: URLs sociales

---

## Deployment

- GitHub Actions en `.github/workflows/deploy.yml`
- Se ejecuta en push a `master`
- Requiere Node.js 20

---

## Recomendaciones para Agentes

1. **Siempre verificar el build** después de cambios: `npm run build`
2. **Preferir TypeScript** en lugar de JS vanilla cuando sea posible
3. **Mantener la consistencia** con el estilo existente
4. **No agregar dependencias** sin consultar al usuario
5. **Testear en dev** antes de hacer commit: `npm run dev`
6. **Respetar el idioma español** del contenido

---

## VS Code

Extensión recomendada: `astro-build.astro-vscode`

---

*Última actualización: Febrero 2026*