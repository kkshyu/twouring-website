# Twouring 遊遊 官方網站

遊遊股份有限公司（Twouring Co., Ltd.）新官網。輕量、SEO 友善、中英雙語的靜態網站。

內容依兩份來源文件：
- `../twouring_business_strategy_2026.md` — 定位與資訊架構（四大顧問入口）。
- `../twouring_background_for_website_vendor.md` — 品牌、法務、技術與素材的已確認決策。

## 技術

- [Astro](https://astro.build/) 5（靜態輸出），`@astrojs/sitemap`。
- 字體：`@fontsource` 的 Nunito（標題）與 Source Sans 3（內文），中文走系統字體 fallback。
- 無框架 JS：僅導覽選單與聯絡表單的少量原生 script。

## 開發

```bash
npm install        # 安裝相依（若 npm 快取權限報錯，用 --cache <可寫目錄>）
npm run dev        # 本機開發 http://localhost:4321
npm run build      # 產出靜態檔到 dist/
npm run preview    # 預覽 dist/
```

## 結構

```
src/
  i18n/        company.ts（公司事實單一來源）, ui.ts（介面字串/路由）, utils.ts（語言/路徑）
  data/        services.ts（四大服務內容）, legal.ts（隱私/條款/Cookie）
  layouts/     BaseLayout.astro（SEO/OG/JSON-LD/hreflang/favicon + Header/Footer）
  components/  Header, Footer, PageHero, CTABand, Icon, ServicePage, LegalPage
    pages/     Home, ServicesOverview, About, Cases, Contact（頁面主體，讀 Astro.currentLocale）
  pages/       路由（zh 在 root，en 在 /en/；薄包裝呼叫對應元件）
  styles/      global.css（設計 tokens 與工具類）
public/        favicon、品牌 logo（/brand）、og-default.jpg、robots.txt、site.webmanifest
backend/       Code.gs + DEPLOY.md（聯絡表單的 Apps Script 後端）
```

## i18n

- zh 為預設語言，URL 無前綴（`/`、`/about`）；en 在 `/en/` 前綴。
- 每頁主體元件讀 `Astro.currentLocale` 選語言；新增頁面時，zh 與 en 各放一個薄路由檔。
- 全站 `hreflang`（zh-Hant-TW / en / x-default）與 canonical 由 `BaseLayout` 自動產生。

## 品牌

- 對外名稱「遊遊股份有限公司」、品牌「Twouring 遊遊」、英文「Twouring Co., Ltd.」。
- 色盤：`#ffffff` / `#333333` / `#ff0844` / `#ffb199`（見 `global.css`）。文字／按鈕用加深的 `#d80038` 以符合 WCAG AA 對比。
- Logo 一律使用 `public/brand/` 既有素材或 LogoAI 原始檔，請勿自行重繪。

## 聯絡表單

送到 Google Apps Script Web App（寫入 Google Sheet + 寄信 `us@twouring.com`）。
設定環境變數 `PUBLIC_CONTACT_ENDPOINT`；未設定則退回 `mailto:`。部署見 `backend/DEPLOY.md`。

## 部署

- 靜態輸出，可放 Zeabur／Cloudflare Pages／任一靜態主機（`dist/`）。
- `astro.config.mjs` 的 `site` 設為 `https://www.twouring.com`（改網域只需改這一處）。
- 上線時：DNS 切換、SSL、舊 WordPress 頁面 301 redirect、提交 sitemap 至 Search Console。

## 上線前需公司確認（依 vendor 文件）

- [ ] KK 正式照片、履歷與可揭露角色（目前用文字介紹與字母頭像）。
- [ ] 案例是否公開金額／KPI（目前一律不放具體金額，僅質化成果）。
- [ ] 隱私權／服務條款／Cookie 政策由法律顧問複核（目前為 vendor §14.6 草稿）。
- [ ] LinkedIn 公司頁 slug 更新後，改 `src/i18n/company.ts` 的 `linkedin`。
- [ ] OG 分享圖（目前用 logo JPG；建議另製 1200×630 專用圖）。
- [ ] 客戶推薦語：取得授權後再上線（目前不放示意文案）。
