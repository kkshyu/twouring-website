/**
 * 四大服務入口內容 — 對應《twouring_business_strategy_2026.md》(v2 操作手冊版) §2.2–2.5。
 * 價格依策略報告「定價（決定）」表轉錄；對外標示為「起價」，正式以書面報價與合約為準。
 */
export type ServiceSlug = 'city' | 'aiRemote' | 'venue' | 'international';

interface Pkg { name: string; price: string; desc: string; }
export interface ServiceContent {
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  metaDescription: string;
  highlights: string[];
  painTitle: string;
  painPoints: string[];
  solutionTitle: string;
  solutionLead: string;
  solutionPoints: string[];
  pitch: string;
  packagesTitle: string;
  packagesNote: string;
  packages: Pkg[];
  priceFootnote: string;
  goodFit: string[];
  notFit: string[];
  deliverables?: string[];
}

const zhFootnote =
  '以上為服務起點價格，實際依專案範圍、合作單位與交付深度報價，正式合作以書面報價與合約為準。';
const enFootnote =
  'Prices shown are starting points. Actual quotes depend on scope, partners and delivery depth; engagements are confirmed by written quote and contract.';

export const services: Record<ServiceSlug, { path: string; icon: string; zh: ServiceContent; en: ServiceContent }> = {
  city: {
    path: '/services/city',
    icon: 'city',
    zh: {
      navLabel: '城市與政府',
      eyebrow: '城市與政府 · 數位遊牧城市策略',
      title: '城市與政府：數位遊牧城市策略顧問',
      lead: '協助地方政府與城市，把數位遊牧、國際人才與在地消費，設計成可執行、可驗收、可持續的政策、活動、場域與 KPI。',
      metaDescription:
        '遊遊協助地方政府觀光、產發、青年與地方創生單位，把數位遊牧從一次活動升級成城市人才、觀光與國際品牌策略。提供成熟度診斷、策略規劃、據點啟動與年度顧問。',
      highlights: ['花蓮、台東等政府實績', '場域盤點與國際社群連結', '可驗收 KPI 與成果報告'],
      painTitle: '城市與地方單位常見的處境',
      painPoints: [
        '想吸引國際人才，但不知道如何從一次活動變成長期策略。',
        '有地方創生、觀光、青年或國際交流預算，卻缺乏數位遊牧專業。',
        '缺乏場域盤點、商家串聯、國際社群接觸與 KPI 報告能力。',
        '活動辦完沒有留存資料、商業轉換與社群延續。',
      ],
      solutionTitle: '把一次活動，變成一套城市策略',
      solutionLead:
        '遊遊以政府專案實績、TDNA 生態系與國際城市連結為基礎，把城市的數位遊牧議題拆成可執行的策略、活動、招商與營運模型。',
      solutionPoints: [
        '場域與資源盤點：把可用空間、商家、社群與國際接觸點整理成遊牧資源地圖。',
        '利害關係人訪談：對齊觀光、產發、青年、地方創生窗口的目標與 KPI。',
        '策略與招商架構：3–6 個月策略、活動設計、社群營運與預算建議。',
        '據點啟動與年度 PMO：例會、商家串聯、國際社群連結、成果追蹤與報告。',
        '補助與標案整合：把題目設計成能執行、能驗收、能延伸的計畫，而非只代寫文件。',
      ],
      pitch: '我們協助地方政府把數位遊牧從一次活動，升級成城市人才、觀光、地方商業與國際品牌策略。',
      packagesTitle: '城市顧問服務階梯',
      packagesNote: '從一次性診斷到年度顧問，依城市成熟度與預算分階段合作。',
      packages: [
        { name: '城市遊牧成熟度診斷', price: 'NTD 150,000 起（複雜縣市 200,000）', desc: '場域盤點、利害關係人訪談、遊牧資源地圖、問題診斷與 90 天行動建議。' },
        { name: '數位遊牧城市策略規劃', price: 'NTD 500,000 起（3–6 個月）', desc: '策略、活動設計、招商架構、社群營運模型、KPI 與預算建議。' },
        { name: '城市年度顧問', price: 'NTD 2,000,000 起／年', desc: '年度策略、季度盤點、專案 PMO、活動與場域顧問與成果報告。' },
      ],
      priceFootnote:
        zhFootnote + ' 另有「遊牧據點啟動顧問（NTD 150,000／月）」與「城市國際交流設計（NTD 300,000 起）」可搭配。',
      goodFit: [
        '地方政府觀光處、產發處、青年局、研考處或地方創生窗口。',
        '觀光圈、商圈、地方創生團隊與縣市合作平台。',
        '有預算、有決策者，想把國際人才變成長期策略的單位。',
      ],
      notFit: [
        '只想辦一次性活動、沒有後續策略與預算。',
        '把顧問當純活動執行或補助代寫的單位。',
        '需要交通住宿代收代付的旅遊行程（屬旅行業範疇，另與合格旅行業合作）。',
      ],
      deliverables: [
        '遊牧資源地圖與場域盤點報告',
        '利害關係人地圖與訪談摘要',
        '城市策略簡報與招商架構',
        '90 天行動路線圖與 KPI 儀表板',
        '季度盤點與期末成果報告',
        '可公開的一頁式城市案例',
      ],
    },
    en: {
      navLabel: 'Cities & Government',
      eyebrow: 'Cities & Government · digital-nomad city strategy',
      title: 'Cities & Government: digital-nomad city strategy',
      lead: 'We help local governments turn digital nomadism, international talent and local spending into executable, measurable and lasting policy, programmes, venues and KPIs.',
      metaDescription:
        'Twouring helps tourism, economic-development, youth and regional-revitalisation offices upgrade digital nomadism from a one-off event into a city talent, tourism and international-brand strategy.',
      highlights: ['Track record with Hualien & Taitung', 'Venue mapping & global community links', 'Measurable KPIs & reporting'],
      painTitle: 'Where cities and local units usually get stuck',
      painPoints: [
        'You want to attract international talent but cannot move from a single event to a long-term strategy.',
        'You have tourism, youth or regional-revitalisation budget but lack digital-nomad expertise.',
        'You lack venue mapping, business linkage, global community reach and KPI reporting.',
        'After the event there is no retained data, business conversion or community continuity.',
      ],
      solutionTitle: 'Turn one event into a city strategy',
      solutionLead:
        'Built on real government projects, the TDNA ecosystem and international city links, we break the digital-nomad agenda into executable strategy, programmes, investment attraction and operating models.',
      solutionPoints: [
        'Venue & resource mapping: spaces, businesses, community and global touchpoints into one nomad resource map.',
        'Stakeholder interviews: aligning tourism, economic-development, youth and revitalisation goals and KPIs.',
        'Strategy & investment framework: a 3–6 month strategy, programme design, community model and budget.',
        'Hub launch & annual PMO: cadence, business linkage, global community links, tracking and reporting.',
        'Grants & tenders: shaping topics into projects that can be executed, audited and extended — not just paperwork.',
      ],
      pitch: 'We help local governments upgrade digital nomadism from a one-off event into a city talent, tourism, local-business and international-brand strategy.',
      packagesTitle: 'City advisory ladder',
      packagesNote: 'From a one-off diagnostic to an annual retainer, staged by city maturity and budget.',
      packages: [
        { name: 'City nomad-readiness diagnostic', price: 'from NTD 150,000 (200,000 for complex counties)', desc: 'Venue mapping, stakeholder interviews, nomad resource map, diagnosis and a 90-day action plan.' },
        { name: 'Digital-nomad city strategy', price: 'from NTD 500,000 (3–6 months)', desc: 'Strategy, programme design, investment framework, community model, KPIs and budget.' },
        { name: 'Annual city advisory', price: 'from NTD 2,000,000/yr', desc: 'Annual strategy, quarterly reviews, project PMO, programme & venue advisory and reporting.' },
      ],
      priceFootnote:
        enFootnote + ' A monthly hub-launch advisory (NTD 150,000/mo) and city exchange design (from NTD 300,000) can be added.',
      goodFit: [
        'Tourism, economic-development, youth or regional-revitalisation offices.',
        'Tourism circles, business districts and regional-revitalisation teams.',
        'Units with budget and a decision-maker who want talent as a long-term strategy.',
      ],
      notFit: [
        'You only want a one-off event with no follow-up strategy or budget.',
        'You see advisory as pure event execution or grant ghost-writing.',
        'You need travel and accommodation booking (handled with a licensed travel agency).',
      ],
      deliverables: [
        'Nomad resource map & venue audit',
        'Stakeholder map & interview summary',
        'City strategy deck & investment framework',
        '90-day roadmap & KPI dashboard',
        'Quarterly review & final results report',
        'A publishable one-page city case',
      ],
    },
  },

  aiRemote: {
    path: '/services/ai-remote',
    icon: 'ai',
    zh: {
      navLabel: '企業 AI 與遠距工作',
      eyebrow: '企業 · AI 與數位轉型',
      title: '企業與中小企業：AI 與遠距工作導入顧問',
      lead: '先診斷流程，再導入 AI 與遠距工作制度，避免為了 AI 而 AI。找出公司最值得自動化的三個工作流，落到工具、訓練、驗收與 ROI。',
      metaDescription:
        '遊遊協助中小企業與服務業，先盤點流程再導入 AI 與遠距工作。提供 AI 營運健檢、工作流導入顧問、專案導入 PM 與高階主管工作坊，可搭配補助申請。',
      highlights: ['先診斷、不先賣系統', '由適才承接技術交付', '可搭配補助與 SBIR'],
      painTitle: '想用 AI，卻不知從何開始',
      painPoints: [
        '不知道哪些流程值得用 AI、從哪裡開始。',
        '怕買錯工具、導入後員工不用、變成另一個沒人開的系統。',
        '不知道如何把 AI 專案寫成補助、投資或內部預算。',
        '缺乏產品、流程、技術與 PM 之間的「翻譯者」。',
      ],
      solutionTitle: '不先追熱潮，先找出最值得自動化的三個流程',
      solutionLead:
        '遊遊負責診斷、流程設計與專案管理，技術交付由適才科技或外部團隊承接。先用兩到三週盤點，找出最能節省成本或創造收入的工作流。',
      solutionPoints: [
        'AI 營運健檢：訪談、流程盤點、工具盤點，產出導入機會清單與優先順序。',
        '工作流導入：流程設計、工具導入、內部訓練與成效追蹤。',
        '專案導入 PM：需求訪談、規格整理、供應商管理、驗收文件與教育訓練。',
        '高階主管工作坊：以案例與實作，建立導入路線圖與內部共識。',
        '補助型導入：把 AI 專案寫成可核准、可驗收的計畫，並做執行控管。',
      ],
      pitch: '不要先買系統，先買診斷；不要先追 AI 熱潮，先找出公司哪三個流程最值得自動化。',
      packagesTitle: 'AI 與遠距工作服務階梯',
      packagesNote: '從健檢到導入 PM，依公司規模與流程複雜度分階段合作。',
      packages: [
        { name: 'AI 營運健檢', price: 'NTD 120,000（標準）', desc: '訪談、流程盤點、工具盤點、AI 導入機會清單、風險與優先順序。' },
        { name: 'AI 工作流導入顧問', price: 'NTD 150,000／月（3 個月起）', desc: '流程設計、工具導入、內部訓練與成效追蹤。' },
        { name: 'AI 專案導入 PM', price: 'NTD 500,000 起／案', desc: '需求訪談、規格整理、供應商管理、驗收文件與教育訓練。' },
      ],
      priceFootnote:
        zhFootnote + ' 另有「高階主管 AI 工作坊（NTD 100,000／場）」與「補助型 AI 導入包（NTD 250,000 ＋ PMO 80,000／月）」可搭配。',
      goodFit: [
        '中小企業、服務業、連鎖品牌、旅宿、餐飲與地方品牌。',
        '遠距或混合工作團隊，想把制度與流程做扎實。',
        '已有補助想法、或已買工具卻缺乏流程改造能力的公司。',
      ],
      notFit: [
        '想要一套「萬能 AI 系統」卻不願盤點流程。',
        '只想把 AI 當行銷口號、不在意導入與 ROI。',
        '沒有任何內部窗口可配合訪談與導入。',
      ],
      deliverables: [
        'AI 導入機會清單與優先順序',
        '流程與工具盤點報告',
        '導入路線圖與工具選型建議',
        '供應商管理與驗收文件',
        '內部教育訓練與操作手冊',
        '成效追蹤指標與檢討',
      ],
    },
    en: {
      navLabel: 'Enterprise AI & Remote Work',
      eyebrow: 'Enterprise · AI & digital transformation',
      title: 'Companies & SMEs: AI and remote-work adoption advisory',
      lead: 'Diagnose the process first, then adopt AI and remote work — no AI for its own sake. We find the three workflows most worth automating and ground them in tools, training, sign-off and ROI.',
      metaDescription:
        'Twouring helps SMEs and service businesses map processes before adopting AI and remote work: AI operations health-check, workflow adoption advisory, project PM and executive workshops, with optional grant support.',
      highlights: ['Diagnose before selling systems', 'Tech delivery via Adata', 'Pairs with grants & SBIR'],
      painTitle: 'You want AI but don’t know where to start',
      painPoints: [
        'You don’t know which processes are worth automating, or where to begin.',
        'You fear buying the wrong tool and ending up with another system nobody opens.',
        'You don’t know how to turn an AI project into a grant, investment or internal budget.',
        'You lack a translator between product, process, technology and project management.',
      ],
      solutionTitle: 'Skip the hype — find the three workflows worth automating',
      solutionLead:
        'We own the diagnosis, process design and project management; technical delivery is handled by Adata or an external team. A two-to-three week mapping finds the workflows that save cost or create revenue.',
      solutionPoints: [
        'AI operations health-check: interviews, process and tooling audit, an opportunity list with priorities.',
        'Workflow adoption: process design, tool rollout, internal training and impact tracking.',
        'Project PM: requirements, specs, vendor management, sign-off documents and training.',
        'Executive workshop: cases and hands-on work to build a roadmap and internal alignment.',
        'Grant-backed adoption: shaping the AI project into an approvable, auditable plan with delivery control.',
      ],
      pitch: 'Don’t buy a system first — buy a diagnosis. Don’t chase the AI hype — find the three processes most worth automating.',
      packagesTitle: 'AI & remote-work ladder',
      packagesNote: 'From a health-check to a delivery PM, staged by company size and process complexity.',
      packages: [
        { name: 'AI operations health-check', price: 'NTD 120,000 (standard)', desc: 'Interviews, process and tooling audit, AI opportunity list, risks and priorities.' },
        { name: 'AI workflow adoption advisory', price: 'NTD 150,000/mo (3-month min.)', desc: 'Process design, tool rollout, internal training and impact tracking.' },
        { name: 'AI project delivery PM', price: 'from NTD 500,000/project', desc: 'Requirements, specs, vendor management, sign-off documents and training.' },
      ],
      priceFootnote:
        enFootnote + ' An executive AI workshop (NTD 100,000/session) and a grant-backed AI package (NTD 250,000 + PMO 80,000/mo) can be added.',
      goodFit: [
        'SMEs, service businesses, chains, hospitality, F&B and local brands.',
        'Remote or hybrid teams that want a solid system and process.',
        'Companies with a grant idea, or tools already bought but no process-change capacity.',
      ],
      notFit: [
        'You want one all-powerful AI system but won’t map your processes.',
        'You treat AI as a marketing slogan and don’t care about adoption or ROI.',
        'There is no internal contact to support interviews and rollout.',
      ],
      deliverables: [
        'AI opportunity list with priorities',
        'Process & tooling audit report',
        'Adoption roadmap & tool selection',
        'Vendor management & sign-off documents',
        'Internal training & operating manuals',
        'Impact metrics & review',
      ],
    },
  },

  venue: {
    path: '/services/venue',
    icon: 'venue',
    zh: {
      navLabel: '場域與商家',
      eyebrow: '場域與商家 · Nomad Ready 國際化',
      title: '場域與商家：Nomad Ready 國際化顧問',
      lead: '協助旅宿、咖啡廳、共同工作空間、老店與地方品牌，變成可被國際遠距工作者找到、理解、停留與消費的接待節點。',
      metaDescription:
        '遊遊協助商圈、旅宿、咖啡廳與地方品牌進行 Nomad Ready 國際化改造：商家健檢、英文資訊、活動設計與多店共創，可由政府、商圈或協會買單。',
      highlights: ['單店到商圈群體方案', '英文資訊與接待流程', '可由政府／商圈採購'],
      painTitle: '想接待國際人才，卻缺少入口',
      painPoints: [
        '想接待國際遠距工作者，但沒有英文資訊與接待流程。',
        '空間、網路、插座、動線不清楚是否「遊牧友善」。',
        'Google 商家、社群與活動資訊零散，國際客找不到。',
        '只能被動等旅客，缺乏平日長住客與社群延續。',
      ],
      solutionTitle: '把商家變成國際接待節點',
      solutionLead:
        '國際遠距工作者不只需要 Wi-Fi，他們需要可信任的資訊、可停留的空間、可參與的社群，以及理解在地的入口。遊遊把這些做成可驗收的改造清單。',
      solutionPoints: [
        '商家健檢：空間、網路、插座、英文資訊、Google 商家、動線與社群活動建議。',
        '國際化改造：英文頁面、菜單與服務說明、遊牧友善資訊、活動與曝光規劃。',
        '多店／商圈共創：10–20 家商家導入、地圖、活動、媒體與國際社群推廣。',
        '場域營運顧問：活動企劃、社群經營、會員方案與合作夥伴開發。',
        'Nomad Ready 認證前輔導：標準檢核、改善清單、教育訓練與展示頁建議。',
      ],
      pitch: '把地方商家從「被動等旅客」，變成「可被國際遠距工作者找到、理解、停留與消費」的接待節點。',
      packagesTitle: '場域與商家服務階梯',
      packagesNote: '單店可獨立健檢，商圈可群體導入，常由政府、商圈或協會專案買單。',
      packages: [
        { name: 'Nomad Ready 商家健檢', price: 'NTD 40,000', desc: '空間、網路、插座、英文資訊、Google 商家、動線與社群活動建議。' },
        { name: '商家國際化改造包', price: 'NTD 120,000', desc: '英文頁面、菜單／服務說明、遊牧友善資訊、活動設計與曝光規劃。' },
        { name: '多店／商圈共創計畫', price: 'NTD 1,000,000 起（10–20 家）', desc: '10–20 家商家導入、地圖、活動、媒體與國際社群推廣與成果報告。' },
      ],
      priceFootnote:
        zhFootnote + ' 另有「場域營運顧問（NTD 80,000–120,000／月）」可搭配；多採群體銷售，常由政府、商圈或協會買單。',
      goodFit: [
        '旅宿、咖啡廳、餐飲、共同工作空間與地方品牌。',
        '商圈、地方創生團隊與觀光圈，想群體升級接待力。',
        '想接待國際人才、願意調整資訊與流程的業者。',
      ],
      notFit: [
        '只想要一次性曝光、不願調整資訊與接待流程。',
        '沒有基本空間或網路條件、也不打算改善。',
        '期待立即大量客流，而非穩定的長住與社群經營。',
      ],
      deliverables: [
        'Nomad Ready 健檢報告與改善清單',
        '英文資訊與菜單／服務說明',
        '遊牧友善標示與接待 SOP',
        '商圈地圖與活動企劃',
        '國際社群與媒體曝光規劃',
        '多店共創成果報告',
      ],
    },
    en: {
      navLabel: 'Venues & Local Business',
      eyebrow: 'Venues & Business · Nomad Ready',
      title: 'Venues & Local Business: Nomad Ready internationalisation',
      lead: 'We help stays, cafés, coworking spaces, legacy shops and local brands become hosting nodes that international remote workers can find, understand, stay at and spend with.',
      metaDescription:
        'Twouring helps business districts, stays, cafés and local brands go Nomad Ready: venue health-check, English information, programme design and multi-store co-creation, often funded by government or districts.',
      highlights: ['Single shop to district programmes', 'English info & hosting flow', 'Government / district funded'],
      painTitle: 'You want to host international talent but lack the entry point',
      painPoints: [
        'You want to host international remote workers but have no English information or hosting flow.',
        'It’s unclear whether your space, Wi-Fi, power and layout are “nomad-friendly”.',
        'Your Google Business, social and event info is scattered — international guests can’t find you.',
        'You can only wait for tourists, with no weekday long-stay guests or community continuity.',
      ],
      solutionTitle: 'Turn your venue into an international hosting node',
      solutionLead:
        'Remote workers need more than Wi-Fi: trustworthy information, a place to stay, a community to join and a way to understand the local scene. We turn these into an auditable upgrade checklist.',
      solutionPoints: [
        'Venue health-check: space, Wi-Fi, power, English info, Google Business, layout and community ideas.',
        'Internationalisation: English pages, menu and service descriptions, nomad-friendly info and exposure plan.',
        'Multi-store co-creation: onboarding 10–20 shops with maps, events, media and global community promotion.',
        'Venue operations advisory: programming, community building, membership and partner development.',
        'Pre-certification coaching: standard checklist, improvement list, training and a showcase page.',
      ],
      pitch: 'Move local businesses from “waiting for tourists” to being found, understood, stayed at and spent with by international remote workers.',
      packagesTitle: 'Venue & business ladder',
      packagesNote: 'A single shop can start with a health-check; districts onboard as a group, often funded by government, districts or associations.',
      packages: [
        { name: 'Nomad Ready venue health-check', price: 'NTD 40,000', desc: 'Space, Wi-Fi, power, English info, Google Business, layout and community recommendations.' },
        { name: 'Internationalisation package', price: 'NTD 120,000', desc: 'English pages, menu/service descriptions, nomad-friendly info, programme design and exposure plan.' },
        { name: 'Multi-store / district co-creation', price: 'from NTD 1,000,000 (10–20 shops)', desc: 'Onboard 10–20 shops with map, events, media, global community promotion and a results report.' },
      ],
      priceFootnote:
        enFootnote + ' A venue operations advisory (NTD 80,000–120,000/mo) can be added; usually sold as a group programme funded by government, districts or associations.',
      goodFit: [
        'Stays, cafés, F&B, coworking spaces and local brands.',
        'Business districts and revitalisation teams wanting to upgrade hosting as a group.',
        'Operators willing to adjust information and flow to host international talent.',
      ],
      notFit: [
        'You only want one-off exposure and won’t adjust information or hosting flow.',
        'You lack basic space or network conditions and don’t plan to improve them.',
        'You expect instant mass footfall rather than steady long-stays and community.',
      ],
      deliverables: [
        'Nomad Ready report & improvement list',
        'English info & menu/service descriptions',
        'Nomad-friendly signage & hosting SOP',
        'District map & programme plan',
        'Global community & media exposure plan',
        'Multi-store co-creation results report',
      ],
    },
  },

  international: {
    path: '/services/international',
    icon: 'globe',
    zh: {
      navLabel: '國際交流與參訪',
      eyebrow: '國際 · 城市與企業交流',
      title: '國際單位：亞洲城市交流與參訪顧問',
      lead: '運用日本、韓國、東南亞城市與新創、數位遊牧社群資源，設計 B2B 交流、對接與內容，把一趟參訪變成可延續的跨國合作。',
      metaDescription:
        '遊遊為海外城市、新創基地、企業代表團與公協會設計亞洲城市交流與參訪：議程設計、單位對接、主持與成果報告。賣的是 B2B 交流設計，非旅遊行程。',
      highlights: ['日韓與東南亞城市連結', 'B2B 交流非旅遊商品', '議程設計與單位對接'],
      painTitle: '想交流，卻只買到一趟行程',
      painPoints: [
        '想理解台灣的數位遊牧、新創、地方創生與 AI 生態系，卻沒有對接窗口。',
        '參訪變成走馬看花，沒有實質對接與後續合作。',
        '缺乏雙語議程設計、主持與成果紀錄。',
        '想要跨國合作，但不知道從哪個城市、單位與社群切入。',
      ],
      solutionTitle: '把參訪設計成可延續的跨國合作',
      solutionLead:
        '遊遊賣的是 B2B 交流設計、顧問、對接與內容，不是旅行商品。涉及交通住宿時與合格旅行業合作並明確拆約，讓你專注在合作本身。',
      solutionPoints: [
        '交流議程設計：依目標設計拜訪單位、主題與對接名單。',
        '單位對接與接待：城市、政府、新創基地、社群與場域的實質媒合。',
        '主持與紀錄：雙語主持、簡報設計與成果摘要。',
        '跨國合作規劃：MOU 建議、後續行動與合作架構。',
        '海外代表團顧問：行前簡報、現場支援與成果報告。',
      ],
      pitch: '我們設計台灣與亞洲城市之間的數位遊牧、新創、人才與場域交流，把一趟參訪變成可延續的跨國合作。',
      packagesTitle: '國際交流服務階梯',
      packagesNote: '從半日交流到跨國合作專案，依規模、單位數與是否含國際對接報價。',
      packages: [
        { name: '半日交流設計', price: 'NTD 100,000', desc: '單一場域參訪、對接、簡報設計、主持與紀錄。' },
        { name: '一日城市參訪顧問', price: 'NTD 200,000 起', desc: '2–3 個單位拜訪、接待安排、議程設計與成果摘要。' },
        { name: '國際城市合作專案', price: 'NTD 500,000 起', desc: '跨國城市／政府／新創／社群合作規劃、MOU 建議與後續行動。' },
      ],
      priceFootnote:
        zhFootnote + ' 另有「海外代表團顧問（NTD 300,000 起）」可搭配；涉及交通住宿之旅遊服務由合格旅行業承接並另行拆約。',
      goodFit: [
        '海外城市、新創基地、企業代表團、商會與公協會。',
        '台灣地方政府與國際交流單位。',
        '想理解台灣數位遊牧、新創、地方創生與 AI 生態系的組織。',
      ],
      notFit: [
        '只想找旅行社代訂交通與住宿行程。',
        '想把國際交流當一般旅遊商品包裝。',
        '沒有明確交流目標、單純觀光的團體。',
      ],
      deliverables: [
        '交流議程與拜訪單位名單',
        '對接名單與媒合安排',
        '雙語簡報與主持',
        '現場接待與支援',
        'MOU 建議與後續行動清單',
        '成果摘要與案例',
      ],
    },
    en: {
      navLabel: 'International Exchange',
      eyebrow: 'International · city & corporate exchange',
      title: 'International units: Asia city exchange & visit advisory',
      lead: 'Using city, startup and digital-nomad community links across Japan, Korea and Southeast Asia, we design B2B exchange, matchmaking and content — turning one visit into lasting cross-border collaboration.',
      metaDescription:
        'Twouring designs Asia city exchange and visits for overseas cities, startup hubs, corporate delegations and associations: agenda design, matchmaking, hosting and reporting. B2B exchange design, not travel packages.',
      highlights: ['Japan, Korea & SEA city links', 'B2B exchange, not tourism', 'Agenda design & matchmaking'],
      painTitle: 'You want exchange but only get an itinerary',
      painPoints: [
        'You want to understand Taiwan’s nomad, startup, revitalisation and AI ecosystems but have no contact point.',
        'Visits become sightseeing, with no real matchmaking or follow-up.',
        'You lack bilingual agenda design, hosting and reporting.',
        'You want cross-border collaboration but don’t know which city, unit or community to start with.',
      ],
      solutionTitle: 'Design the visit as lasting collaboration',
      solutionLead:
        'We sell B2B exchange design, advisory, matchmaking and content — not travel products. When transport and lodging are involved we work with a licensed agency under a clearly split contract, so you focus on the collaboration.',
      solutionPoints: [
        'Agenda design: visiting units, themes and a matchmaking list shaped around your goals.',
        'Matchmaking & hosting: real introductions to cities, governments, startup hubs, community and venues.',
        'Hosting & records: bilingual facilitation, deck design and a results summary.',
        'Cross-border planning: MOU recommendations, follow-up actions and a collaboration framework.',
        'Delegation advisory: pre-trip briefing, on-site support and a results report.',
      ],
      pitch: 'We design digital-nomad, startup, talent and venue exchange between Taiwan and Asian cities — turning one visit into lasting cross-border collaboration.',
      packagesTitle: 'International exchange ladder',
      packagesNote: 'From a half-day exchange to a cross-border project, priced by scale, number of units and international matchmaking.',
      packages: [
        { name: 'Half-day exchange design', price: 'NTD 100,000', desc: 'Single-venue visit, matchmaking, deck design, facilitation and records.' },
        { name: 'One-day city visit advisory', price: 'from NTD 200,000', desc: 'Visits to 2–3 units, hosting, agenda design and a results summary.' },
        { name: 'International city collaboration', price: 'from NTD 500,000', desc: 'Cross-border city/government/startup/community planning, MOU recommendations and follow-up.' },
      ],
      priceFootnote:
        enFootnote + ' An overseas delegation advisory (from NTD 300,000) can be added; travel services involving transport and lodging are handled by a licensed agency under a separate contract.',
      goodFit: [
        'Overseas cities, startup hubs, corporate delegations, chambers and associations.',
        'Taiwanese local governments and international-exchange units.',
        'Organisations wanting to understand Taiwan’s nomad, startup, revitalisation and AI ecosystems.',
      ],
      notFit: [
        'You just want a travel agency to book transport and lodging.',
        'You want international exchange packaged as ordinary tourism.',
        'You have no clear exchange goal and only want sightseeing.',
      ],
      deliverables: [
        'Exchange agenda & visiting-unit list',
        'Matchmaking list & arrangements',
        'Bilingual deck & facilitation',
        'On-site hosting & support',
        'MOU recommendations & follow-up list',
        'Results summary & case',
      ],
    },
  },
};
