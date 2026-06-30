/**
 * 法務頁內容 — 依《twouring_background_for_website_vendor.md》§14.6 草稿整理。
 * 第一版可用草稿；正式上線前建議由公司方或法律顧問複核。
 */
export type LegalSlug = 'privacy' | 'terms' | 'cookies';

interface Block { heading?: string; paras?: string[]; list?: string[] }
export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  blocks: Block[];
  metaDescription: string;
}

export const legal: Record<LegalSlug, { zh: LegalDoc; en: LegalDoc }> = {
  privacy: {
    zh: {
      title: '隱私權政策',
      updated: '最後更新：2026-06-30',
      intro: '遊遊股份有限公司（Twouring 遊遊，以下稱「本公司」）重視您的個人資料保護。本政策說明我們如何蒐集、使用與保護您於本網站提供的資料。',
      metaDescription: '遊遊股份有限公司隱私權政策：我們如何蒐集、使用、保存與保護您的個人資料，以及您的查詢、更正與刪除權利。',
      blocks: [
        { heading: '我們蒐集的資料', paras: ['本公司為提供顧問服務、專案合作、活動報名、內容訂閱與聯絡回覆，可能蒐集您的姓名、公司名稱、職稱、電子郵件、電話、訊息內容與網站使用紀錄。'] },
        { heading: '使用目的', paras: ['蒐集的資料僅用於回覆詢問、提供服務、客戶關係管理、活動通知、網站分析與必要的行政作業。'] },
        { heading: '資料保存', paras: ['聯絡表單資料可能保存於 Google Workspace、Google Sheet 或本公司指定之雲端工具，並採取合理的安全措施保護。'] },
        { heading: '第三方共享', paras: ['本公司不會出售您的個人資料。僅於服務提供、法令要求、資安維護或取得您的同意時，與必要的第三方處理者共享。'] },
        { heading: '您的權利', paras: ['您可請求查詢、更正、停止使用或刪除您的個人資料。'] },
        { heading: '聯絡方式', paras: ['如需行使上述權利或對本政策有任何疑問，請來信 us@twouring.com。'] },
      ],
    },
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: 2026-06-30',
      intro: 'Twouring Co., Ltd. (“Twouring”, “we”) respects the protection of your personal data. This policy explains how we collect, use and protect the information you provide on this website.',
      metaDescription: 'Twouring Co., Ltd. Privacy Policy: how we collect, use, store and protect your personal data, and your rights to access, correct and delete it.',
      blocks: [
        { heading: 'Information we collect', paras: ['To provide advisory services, project collaboration, event registration, content subscription and replies, we may collect your name, company, job title, email, phone, message content and website usage records.'] },
        { heading: 'How we use it', paras: ['Collected data is used only to respond to enquiries, provide services, manage client relationships, send event notices, analyse the website and carry out necessary administration.'] },
        { heading: 'Data storage', paras: ['Contact-form data may be stored in Google Workspace, Google Sheets or a cloud tool designated by the company, with reasonable security measures.'] },
        { heading: 'Third-party sharing', paras: ['We do not sell your personal data. We share it with necessary third-party processors only to provide services, comply with the law, maintain security, or with your consent.'] },
        { heading: 'Your rights', paras: ['You may request to access, correct, stop the use of, or delete your personal data.'] },
        { heading: 'Contact', paras: ['To exercise these rights or ask about this policy, email us@twouring.com.'] },
      ],
    },
  },
  terms: {
    zh: {
      title: '服務條款',
      updated: '最後更新：2026-06-30',
      intro: '歡迎使用遊遊股份有限公司（Twouring 遊遊）網站。使用本網站即表示您同意以下條款。',
      metaDescription: '遊遊股份有限公司服務條款：網站內容性質、服務與報價、智慧財產權、使用限制與責任限制。',
      blocks: [
        { heading: '網站內容性質', paras: ['本網站內容僅供了解本公司之服務、案例、觀點與聯絡方式，不構成個別專案承諾或法律、財務、稅務建議。'] },
        { heading: '服務與報價', paras: ['網站所列服務、方案、案例與價格如有調整，以雙方正式報價、合約或書面確認為準。'] },
        { heading: '智慧財產權', paras: ['未經授權，不得重製、散布、改作或商業使用本網站之文字、圖片、Logo、簡報、下載資料與其他內容。'] },
        { heading: '使用限制', paras: ['您不得以攻擊、爬取、干擾、冒用或其他不正當方式使用本網站。'] },
        { heading: '責任限制', paras: ['因不可抗力、第三方服務中斷、網路故障或資料錯誤造成之損失，本公司於法律允許範圍內，不負超出直接可歸責範圍之責任。'] },
      ],
    },
    en: {
      title: 'Terms of Service',
      updated: 'Last updated: 2026-06-30',
      intro: 'Welcome to the Twouring Co., Ltd. (Twouring 遊遊) website. By using this website you agree to the following terms.',
      metaDescription: 'Twouring Co., Ltd. Terms of Service: nature of website content, services and quotes, intellectual property, usage restrictions and limitation of liability.',
      blocks: [
        { heading: 'Nature of content', paras: ['Content here is for understanding our services, cases, views and contact details. It does not constitute a project commitment or legal, financial or tax advice.'] },
        { heading: 'Services and quotes', paras: ['Listed services, packages, cases and prices may change; the binding terms are our formal quote, contract or written confirmation.'] },
        { heading: 'Intellectual property', paras: ['You may not reproduce, distribute, adapt or commercially use this website’s text, images, logo, decks, downloads or other content without authorisation.'] },
        { heading: 'Usage restrictions', paras: ['You may not use this website by attacking, scraping, disrupting, impersonating or any other improper means.'] },
        { heading: 'Limitation of liability', paras: ['For losses caused by force majeure, third-party service outages, network failures or data errors, we are not liable beyond directly attributable scope, to the extent permitted by law.'] },
      ],
    },
  },
  cookies: {
    zh: {
      title: 'Cookie 政策',
      updated: '最後更新：2026-06-30',
      intro: '本政策說明遊遊股份有限公司（Twouring 遊遊）網站如何使用 Cookie 與類似技術。',
      metaDescription: '遊遊股份有限公司 Cookie 政策：我們如何使用必要 Cookie 與分析工具，以及如何管理 Cookie。',
      blocks: [
        { heading: '我們如何使用 Cookie', paras: ['本網站可能使用必要 Cookie、分析工具與第三方嵌入服務，以維持網站運作、改善內容、理解流量來源與衡量行銷成效。'] },
        { heading: '分析工具', paras: ['分析工具可採 Google Analytics 4 或同等工具。本網站目前不使用廣告型 Cookie。'] },
        { heading: '管理 Cookie', paras: ['您可透過瀏覽器設定封鎖或刪除 Cookie；部分功能可能因此無法正常運作。'] },
        { heading: '政策更新', paras: ['若未來加入再行銷、廣告追蹤或跨站識別工具，本公司將更新本政策並加入必要的同意管理機制。'] },
      ],
    },
    en: {
      title: 'Cookie Policy',
      updated: 'Last updated: 2026-06-30',
      intro: 'This policy explains how the Twouring Co., Ltd. (Twouring 遊遊) website uses cookies and similar technologies.',
      metaDescription: 'Twouring Co., Ltd. Cookie Policy: how we use essential cookies and analytics, and how to manage cookies.',
      blocks: [
        { heading: 'How we use cookies', paras: ['This website may use essential cookies, analytics and third-party embeds to keep the site running, improve content, understand traffic sources and measure marketing.'] },
        { heading: 'Analytics', paras: ['Analytics may use Google Analytics 4 or an equivalent. This website currently does not use advertising cookies.'] },
        { heading: 'Managing cookies', paras: ['You can block or delete cookies in your browser settings; some features may not work as a result.'] },
        { heading: 'Policy updates', paras: ['If we add remarketing, ad tracking or cross-site identification, we will update this policy and add the necessary consent management.'] },
      ],
    },
  },
};
