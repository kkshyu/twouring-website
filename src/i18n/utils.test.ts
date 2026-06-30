/**
 * i18n 路徑邏輯自我檢查（無框架）。
 * 執行：`npm test`（Node 22.6+ 直接以型別剝離跑 .ts）。
 */
import assert from 'node:assert/strict';
import { getLang, localizePath, toLogicalPath, switchLocaleHref, isActivePath } from './utils.ts';

// getLang：未知 / 空值 fallback 到 zh
assert.equal(getLang('en'), 'en');
assert.equal(getLang('zh'), 'zh');
assert.equal(getLang(undefined), 'zh');
assert.equal(getLang(null), 'zh');
assert.equal(getLang('fr'), 'zh');

// localizePath：zh 無前綴、en 加 /en，皆帶尾斜線；輸入的前後斜線需正規化
assert.equal(localizePath('/', 'zh'), '/');
assert.equal(localizePath('/', 'en'), '/en/');
assert.equal(localizePath('/services/city', 'zh'), '/services/city/');
assert.equal(localizePath('/services/city', 'en'), '/en/services/city/');
assert.equal(localizePath('services/city', 'en'), '/en/services/city/'); // 缺前導斜線
assert.equal(localizePath('/services/city/', 'zh'), '/services/city/'); // 多餘尾斜線

// toLogicalPath：去語言前綴與尾斜線
assert.equal(toLogicalPath('/'), '/');
assert.equal(toLogicalPath('/en'), '/');
assert.equal(toLogicalPath('/en/'), '/');
assert.equal(toLogicalPath('/services/city/'), '/services/city');
assert.equal(toLogicalPath('/en/services/city/'), '/services/city');

// switchLocaleHref：404 無對應語版 → 該語言首頁
assert.equal(switchLocaleHref('/404', 'en'), '/en/');
assert.equal(switchLocaleHref('/404', 'zh'), '/');
assert.equal(switchLocaleHref('/services/city/', 'en'), '/en/services/city/');
assert.equal(switchLocaleHref('/en/services/city/', 'zh'), '/services/city/');

// isActivePath：首頁需完全相符；子路徑前綴相符
assert.equal(isActivePath('/', '/'), true);
assert.equal(isActivePath('/services/', '/'), false);
assert.equal(isActivePath('/services/city/', '/services'), true);
assert.equal(isActivePath('/about/', '/services'), false);

console.log('✓ i18n utils 全部通過');
