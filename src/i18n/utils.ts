import type { Lang } from './company';

export const LOCALES: Lang[] = ['zh', 'en'];
export const DEFAULT_LOCALE: Lang = 'zh';

/** 將 Astro.currentLocale 等輸入正規化為 'zh' | 'en'。 */
export function getLang(input: string | undefined | null): Lang {
  return input === 'en' ? 'en' : 'zh';
}

/** 邏輯路徑（不含語言前綴）→ 實際 URL（帶尾斜線，與 sitemap 一致）。zh 無前綴；en 加 /en。 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : '/' + path.replace(/^\/+|\/+$/g, '');
  if (lang === 'en') return clean === '' ? '/en/' : `/en${clean}/`;
  return clean === '' ? '/' : clean + '/';
}

/** 由目前 pathname 還原不含語言前綴的邏輯路徑。 */
export function toLogicalPath(pathname: string): string {
  let p = (pathname || '/').replace(/\/+$/, '') || '/';
  if (p === '/en') return '/';
  if (p.startsWith('/en/')) p = p.slice(3);
  return p || '/';
}

/** 切換語言時對應的另一語版 URL。404 無對應語版，導向該語言首頁。 */
export function switchLocaleHref(pathname: string, target: Lang): string {
  const logical = toLogicalPath(pathname);
  if (logical === '/404') return localizePath('/', target);
  return localizePath(logical, target);
}

/** 判斷導覽連結是否為目前頁（用於 aria-current）。 */
export function isActivePath(pathname: string, logicalPath: string): boolean {
  const current = toLogicalPath(pathname);
  if (logicalPath === '/') return current === '/';
  return current === logicalPath || current.startsWith(logicalPath + '/');
}
