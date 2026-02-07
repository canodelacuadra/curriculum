export type IconName = 
  // Redes sociales
  | 'github' | 'linkedin' 
  // Lenguajes
  | 'html5' | 'css3' | 'javascript' | 'typescript' | 'python' | 'php' | 'sql'
  // Frameworks  
  | 'react' | 'nodejs' | 'express' | 'bootstrap' | 'vite' | 'phaser'
  // Herramientas
  | 'vscode' | 'git' | 'github-tool' | 'npm'
  // Bases de datos
  | 'postgresql' | 'mysql' | 'mongodb'
  // Despliegue
  | 'vercel' | 'netlify' | 'github-pages' | 'docker'
  // Testing
  | 'jest' | 'cypress'
  // Audiovisual
  | 'photoshop' | 'illustrator' | 'premiere' | 'aftereffects' | 'figma';

// Función helper para mapear nombres de tecnologías a iconos válidos
export function mapTechName(techName: string): IconName {
  const nameMap: Record<string, IconName> = {
    'html5': 'html5',
    'css3': 'css3',
    'javascript': 'javascript',
    'typescript': 'typescript',
    'python': 'python',
    'php': 'php',
    'sql': 'sql',
    'react': 'react',
    'node.js': 'nodejs',
    'nodejs': 'nodejs',
    'express.js': 'express',
    'express': 'express',
    'bootstrap': 'bootstrap',
    'vite': 'vite',
    'phaser.js': 'phaser',
    'phaser': 'phaser',
    'vs code': 'vscode',
    'vscode': 'vscode',
    'git': 'git',
    'github': 'github-tool',
    'npm': 'npm',
    'postgresql': 'postgresql',
    'mysql': 'mysql',
    'mongodb': 'mongodb',
    'vercel': 'vercel',
    'netlify': 'netlify',
    'github pages': 'github-pages',
    'github-pages': 'github-pages',
    'docker': 'docker',
    'jest': 'jest',
    'cypress': 'cypress',
    'adobe photoshop': 'photoshop',
    'photoshop': 'photoshop',
    'adobe illustrator': 'illustrator',
    'illustrator': 'illustrator',
    'adobe premiere pro': 'premiere',
    'premiere': 'premiere',
    'adobe after effects': 'aftereffects',
    'aftereffects': 'aftereffects',
    'figma': 'figma'
  };
  
  const normalized = techName.toLowerCase().trim();
  return nameMap[normalized] || 'html5'; // fallback
}

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconVariant = 'solid' | 'outline';