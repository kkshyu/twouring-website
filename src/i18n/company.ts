/**
 * 公司法定與品牌資料 — 全站單一事實來源。
 * 資料依《twouring_background_for_website_vendor.md》與經濟部/g0v 公開登記。
 * 對外口徑一律使用「遊遊股份有限公司」；品牌顯示「Twouring 遊遊」；英文「Twouring Co., Ltd.」。
 */
export const company = {
  brand: 'Twouring 遊遊',
  brandEn: 'Twouring',
  legalName: {
    zh: '遊遊股份有限公司',
    en: 'Twouring Co., Ltd.',
  },
  formerName: {
    zh: '遊遊有限公司',
    en: 'Twouring Ltd. (former)',
  },
  taxId: '95440838', // 統一編號
  founded: '2024-05-27',
  capital: 'NTD 3,000,000',
  representative: {
    zh: '徐愷（KK）',
    en: 'Kai Hsu (KK)',
  },
  address: {
    zh: '臺北市中正區開封街一段 37 號 11 樓',
    en: '11F., No. 37, Sec. 1, Kaifeng St., Zhongzheng Dist., Taipei City 100, Taiwan',
  },
  email: 'us@twouring.com',
  slogan: 'Tour your life together',
  // LinkedIn 為主要正式社群渠道（vendor §7.3 / §14.4）。如更新 slug 改這一處即可。
  linkedin: 'https://www.linkedin.com/company/twouring',
  // 預約 30 分鐘診斷會議（Google Calendar 預約頁）。全站預約 CTA 皆指向此處。
  bookingUrl: 'https://calendar.app.google/73hcBtdZZ6cGRrak9',
  siteUrl: 'https://www.twouring.com',
} as const;

export type Lang = 'zh' | 'en';
