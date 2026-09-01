// Base path helper for GitHub Pages and Localhost
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/PORTFOLIO' : '');

export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Prevent double basePath
  if (cleanPath.startsWith('/PORTFOLIO/')) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
