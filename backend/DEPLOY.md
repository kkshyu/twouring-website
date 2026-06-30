# 聯絡表單後端部署（Google Apps Script + Google Sheet）

聯絡表單採無伺服器作法：前端用 `fetch` 把資料送到 Google Apps Script Web App，
由 Apps Script 寫入 Google Sheet（輕量 CRM）並轉寄通知到 `us@twouring.com`。
未設定端點時，表單會自動退回 `mailto:` 直接開信。

## 步驟

1. 用 `us@twouring.com`（或有權限的 Google Workspace 帳號）建立一個 Google Sheet，
   命名例如「Twouring Leads」。
2. 在該 Sheet 開啟 **擴充功能 → Apps Script**。
3. 把 `backend/Code.gs` 的內容貼進 `Code.gs`，存檔。
4. 點 **部署 → 新增部署作業 → 類型選「網頁應用程式」**：
   - 執行身分：**我**（表單寫入與寄信用此帳號權限）。
   - 具有存取權的使用者：**任何人**（前端為匿名訪客，需要此設定才能收 POST）。
5. 首次部署會要求授權（Sheet 寫入與寄信權限），同意即可。
6. 複製產生的 **Web App URL**（形如 `https://script.google.com/macros/s/XXXX/exec`）。

## 設定到網站

把 URL 設為環境變數 `PUBLIC_CONTACT_ENDPOINT`：

- 本機：複製 `.env.example` 為 `.env`，填入 URL。
- Zeabur／部署平台：於專案環境變數新增 `PUBLIC_CONTACT_ENDPOINT`。

重新建置後即生效。

## 注意

- 前端以預設 `cors` 模式送出並讀取 JSON 回應（`{ ok: true }`）真正判斷成敗。
  Apps Script `/exec` 會 302 轉址到 `script.googleusercontent.com`，該回應帶
  `Access-Control-Allow-Origin: *`，故可跨網域讀取結果。任何失敗（HTTP 非 2xx、
  `ok:false`、解析失敗、網路錯誤）前端都會退回 `mailto:`，不再靜默誤報成功。
  **改動 `Code.gs` 後務必「管理部署作業 → 編輯 → 新版本」重新部署**，否則線上仍是舊版。
- 後端已做 server 端驗證（姓名／Email／需求必填、Email 格式）與同一 Email 60 秒去重。
- 表單含 honeypot 欄位 `company_url` 過濾基本機器人。
- **TODO（對外推廣前）**：加上 Cloudflare Turnstile 或 reCAPTCHA v3。Apps Script 拿不到
  client IP，無法做 per-IP 限流，captcha 才是真正的防濫用手段——需申請金鑰、前端嵌入
  token、`doPost` 內呼叫驗證 API 後再寫入。
