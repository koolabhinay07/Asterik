export const INDUSTRIES = [
  "Fintech", "Healthcare", "E-commerce", "AI", "EdTech", "Travel", "Social"
] as const;

export const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;

export const PLATFORMS = ["Mobile", "Web", "Cross-Platform"] as const;

export interface DeliverablePhase {
  phase: string;
  icon: string;
  tag?: "must" | "include";
  items: string[];
}

export interface Brief {
  id: string;
  title: string;
  industry: string;
  difficulty: "Easy" | "Medium" | "Hard";
  platform: string;
  description: string;
  problemStatement: string;
  userPersona: string;
  goals: string[];
  constraints: string[];
  deliverables: DeliverablePhase[];
}

interface BriefTemplate {
  id: string;
  title: string;
  description: string;
  problemStatement: string;
  userPersona: string;
  goals: string[];
  constraints: string[];
}

const STANDARD_DELIVERABLES: DeliverablePhase[] = [
  {
    phase: "Research",
    icon: "🔍",
    items: [
      "User interviews or assumptions (if self-initiated)",
      "Competitor analysis",
      "Pain points",
      "Insights",
      "Personas",
      "Empathy maps",
    ],
  },
  {
    phase: "UX Design",
    icon: "🗺️",
    tag: "must",
    items: [
      "User flows (critical — map every key path a user takes)",
      "Information architecture (basic sitemap if needed)",
    ],
  },
  {
    phase: "Ideation",
    icon: "💡",
    tag: "include",
    items: [
      "Wireframes (low fidelity)",
      "Multiple ideas — explore at least 2–3 directions",
      "Quick iterations based on internal critique",
    ],
  },
  {
    phase: "High-Fidelity UI",
    icon: "🎨",
    tag: "include",
    items: [
      "Final polished screens",
      "Design system (colors, typography, components)",
      "Consistency across all screens",
    ],
  },
  {
    phase: "Interactions & States",
    icon: "⚡",
    tag: "include",
    items: [
      "Microinteractions (hover effects, transitions, animations)",
      "All UI states — error, loading, success, empty",
    ],
  },
  {
    phase: "Testing & Iteration",
    icon: "🧪",
    tag: "include",
    items: [
      "Usability testing (even informal, e.g. 5-second test or peer review)",
      "What worked / what didn't",
      "Iterations based on feedback",
    ],
  },
  {
    phase: "Case Study",
    icon: "📖",
    items: [
      "Before vs. after comparison",
      "Impact (hypothetical is fine if logical and data-backed)",
      "Key learnings and personal reflection",
    ],
  },
];

// Pool: keyed by "Industry-Difficulty"
const BRIEF_POOL: Record<string, BriefTemplate[]> = {

  // ─── FINTECH ──────────────────────────────────────────────────────────────

  "Fintech-Easy": [
    {
      id: "fin-easy-1",
      title: "Personal Expense Tracker",
      description: "A simple mobile app to log daily expenses and visualise monthly spending habits.",
      problemStatement: "Young adults struggle to keep track of impulse purchases across multiple payment methods, causing them to overspend without realising it until their bank balance surprises them at month-end.",
      userPersona: "Priya (24), a fresh graduate managing her first salary. She earns ₹40k/month but never knows where her money goes by the 20th.",
      goals: [
        "Log an expense in under 5 seconds",
        "Visualise weekly and monthly spend breakdowns by category",
        "Provide a gentle nudge when the user is nearing their budget limit",
      ],
      constraints: [
        "No bank account integration — manual entry only",
        "App must function fully offline",
        "Keep the UI simple enough for first-time smartphone users",
      ],
    },
    {
      id: "fin-easy-2",
      title: "Savings Goal Visualiser",
      description: "A fun, gamified interface to help users set and track personal savings goals.",
      problemStatement: "Most people set savings goals but abandon them within weeks due to a lack of visible progress and motivation. Existing apps show only numbers — no emotional connection.",
      userPersona: "Marco (27), saving up for a Europe trip in 8 months. He's tried spreadsheets but loses track after a week.",
      goals: [
        "Create and name up to 5 simultaneous savings goals",
        "Show progress with satisfying visual fills or animations",
        "Let users log a deposit in one tap with an optional note",
      ],
      constraints: [
        "Must feel rewarding, not stressful — positive language only",
        "No login required for the MVP",
        "Works on older mid-range Android devices (low performance budget)",
      ],
    },
    {
      id: "fin-easy-3",
      title: "Currency Converter & Travel Wallet",
      description: "A minimal converter tool with a built-in travel budget tracker for multi-currency trips.",
      problemStatement: "Travellers constantly switch between currency apps and notes apps to track how much they're spending in foreign currency. There's no unified, distraction-free tool for this.",
      userPersona: "Anya (31), a solo backpacker who visits 3–4 countries per trip and manually converts prices in her head.",
      goals: [
        "Convert between any two currencies with live-cached rates (offline fallback)",
        "Set a daily budget per destination city",
        "Show running total spent vs. budget with simple colour indicators",
      ],
      constraints: [
        "App must work offline with rates cached from last sync",
        "UI must be glanceable — usable while standing in a foreign queue",
        "Support RTL languages for Middle Eastern markets",
      ],
    },
  ],

  "Fintech-Medium": [
    {
      id: "fin-med-1",
      title: "Investment Portfolio Dashboard",
      description: "A dashboard for first-time retail investors to monitor stocks, mutual funds, and SIPs.",
      problemStatement: "Beginner investors are overwhelmed by trading platforms designed for experts. Dense charts and jargon cause anxiety, leading them to either panic-sell or avoid checking their portfolio altogether.",
      userPersona: "Rohan (29), just started investing in index funds and SIPs. He checks his portfolio daily but struggles to understand what the numbers actually mean.",
      goals: [
        "Show overall portfolio health in plain language, not just percentages",
        "Highlight what's up, what's down, and why (simplified news snippets)",
        "Provide actionable suggestions without giving regulated financial advice",
      ],
      constraints: [
        "Cannot display real-time tick data — use delayed (15-min) data",
        "Must include prominent risk disclaimers",
        "Colourblind-safe palette for all charts (no red/green only distinction)",
      ],
    },
    {
      id: "fin-med-2",
      title: "Loan Comparison & Eligibility Tool",
      description: "Help users compare personal loan offers and instantly see their estimated eligibility.",
      problemStatement: "Consumers apply for loans without understanding how interest rate differences compound over time. They often pick the first offer they see rather than the best one for their situation.",
      userPersona: "Divya (35), looking for a ₹2L personal loan to renovate her kitchen. She doesn't trust bank agents and wants to research independently.",
      goals: [
        "Input loan amount, tenure, and income to get an instant EMI breakdown",
        "Compare up to 3 lenders side-by-side with total cost of credit",
        "Show eligibility likelihood with an honest confidence meter",
      ],
      constraints: [
        "Data must be transparent — show APR not just interest rate",
        "Avoid dark patterns that pressure users into applying",
        "Must pass accessibility audit for WCAG AA",
      ],
    },
    {
      id: "fin-med-3",
      title: "Budgeting App Redesign",
      description: "Redesign a stale legacy budgeting app to feel modern and behaviorally engaging.",
      problemStatement: "'MoneyMate' has 200k downloads but a 2.1-star rating. Exit surveys show users find it 'confusing and ugly'. The core data is good — the UX is the problem.",
      userPersona: "Sophie (33), tried MoneyMate twice and gave up both times. She's not bad with money — she's bad at using the app.",
      goals: [
        "Reduce time-to-first-insight from 12 minutes to under 2",
        "Redesign the onboarding to feel like a conversation, not a form",
        "Surface the 3 most important budget insights on the home screen",
      ],
      constraints: [
        "Must retain all existing feature set — no removals",
        "Brand colours must stay (green #00A86B and navy #0A2540)",
        "iOS and Android designs must feel native to each platform",
      ],
    },
  ],

  "Fintech-Hard": [
    {
      id: "fin-hard-1",
      title: "Mobile Banking KYC Onboarding",
      description: "Redesign the identity verification flow for a digital-first bank to cut drop-offs.",
      problemStatement: "NovaBank's onboarding has a 45% drop-off during KYC. Users find the document scanning step intimidating, and error messages during OCR failure are cryptic and anxiety-inducing.",
      userPersona: "Sarah (28), a freelancer opening a secondary account for client payments. She's tech-savvy but anxious about sharing ID documents with unknown fintech apps.",
      goals: [
        "Increase KYC completion rate from 55% to 75%",
        "Reduce average onboarding time from 8 to under 4 minutes",
        "Provide clear, human-friendly error recovery for failed scans",
      ],
      constraints: [
        "Regulatory requirement: collect PAN, Aadhaar front/back, and a live selfie",
        "OCR failure rate is 18% on low-end devices — design for graceful fallback",
        "Adhere to RBI guidelines on data consent disclosure",
      ],
    },
    {
      id: "fin-hard-2",
      title: "Crypto Wallet & DeFi Dashboard",
      description: "Design a non-custodial crypto wallet that makes DeFi accessible to non-technical users.",
      problemStatement: "DeFi protocols have billions in TVL but sub-1% mainstream adoption. The interfaces require users to understand gas fees, slippage, and seed phrases — concepts that immediately alienate newcomers.",
      userPersona: "Jake (26), curious about crypto after a friend made money in DeFi, but got confused by MetaMask within 10 minutes and quit.",
      goals: [
        "Abstract gas fees into plain-language cost estimates ('~₹2 transaction fee')",
        "Design a recovery phrase setup flow that feels safe, not terrifying",
        "Build a 'swap tokens' flow with risk warnings that don't overwhelm",
      ],
      constraints: [
        "Must never store private keys on any server — fully client-side",
        "All error states must be recoverable without losing funds",
        "Pass a crypto-naive user test with 0 errors on critical flows",
      ],
    },
    {
      id: "fin-hard-3",
      title: "Algorithmic Trading Platform",
      description: "Design a strategy builder and live-monitoring interface for retail algo traders.",
      problemStatement: "Retail traders who can code basic strategies have no accessible platform to deploy and monitor them without a Bloomberg terminal or deep engineering setup.",
      userPersona: "Arjun (38), a data analyst who writes Python scripts to back-test strategies but has no safe, visual way to run them live with real money.",
      goals: [
        "Visual drag-and-drop strategy builder with condition/action blocks",
        "Live P&L monitoring dashboard with configurable alerts",
        "Risk management controls: stop-loss, max drawdown kill switch",
      ],
      constraints: [
        "UI must work under extreme latency stress — sub-second state updates",
        "Every destructive action (e.g., deploy live) requires double-confirmation",
        "Audit trail for all trades — immutable log with export to CSV",
      ],
    },
  ],

  // ─── HEALTHCARE ───────────────────────────────────────────────────────────

  "Healthcare-Easy": [
    {
      id: "hc-easy-1",
      title: "Medication Reminder App",
      description: "A gentle, accessible app to help elderly users remember daily medications.",
      problemStatement: "46% of elderly patients miss doses not because they forget the medication exists, but because reminders are poorly timed, too complex to dismiss, or buried in cluttered notification feeds.",
      userPersona: "Margaret (68), takes 4 medications at different times daily. Her daughter set up 3 different apps but Margaret finds them all confusing.",
      goals: [
        "One-tap confirmation to log a dose as taken",
        "Large, high-contrast text throughout — no small fonts",
        "Weekly adherence summary shareable with a caregiver",
      ],
      constraints: [
        "Must work on 5-year-old Android devices with small screens",
        "Zero medical advice — app is a reminder tool only",
        "Emergency contact must be reachable within 2 taps from anywhere",
      ],
    },
    {
      id: "hc-easy-2",
      title: "Daily Mood & Energy Log",
      description: "A friction-free daily check-in for tracking mood and energy levels over time.",
      problemStatement: "People experiencing burnout or mild depression often can't articulate how they feel. A simple daily log could reveal patterns, but existing apps are either too clinical or too complex.",
      userPersona: "Liam (30), dealing with mild anxiety. He wants to track his moods but gave up every journaling app within 2 weeks.",
      goals: [
        "Complete a daily check-in in under 10 seconds",
        "View mood trends over 7, 14, and 30 days at a glance",
        "Export a summary PDF for a therapist appointment",
      ],
      constraints: [
        "No text required — sliders, emoji, or colour pickers only",
        "Calming visual design — nothing clinical or stark",
        "Strict local storage only — no cloud sync in v1",
      ],
    },
    {
      id: "hc-easy-3",
      title: "Symptom Checker & Triage Guide",
      description: "A guided symptom checker that helps users decide whether to seek immediate care.",
      problemStatement: "Minor symptom anxiety drives 30% of A&E visits that could be handled by a GP or self-care. Users need a calm, credible tool to help them make the right decision without googling and panicking.",
      userPersona: "Nina (25), gets anxious when she feels unwell and tends to catastrophise. She needs reassurance backed by logic, not WebMD.",
      goals: [
        "Walk users through a decision tree with under 8 questions",
        "Output one of 4 outcomes: Self-care / GP / Urgent care / Emergency",
        "Never alarm users unnecessarily — use calm, clear language",
      ],
      constraints: [
        "Must include clear medical disclaimer on every screen",
        "Cannot store or transmit any health data",
        "Reviewed by a GP for clinical accuracy before launch",
      ],
    },
  ],

  "Healthcare-Medium": [
    {
      id: "hc-med-1",
      title: "Patient Dashboard for Chronic Care",
      description: "A desktop dashboard for patients with type 2 diabetes to track daily metrics.",
      problemStatement: "Patients with type 2 diabetes struggle to see how diet, medication, and glucose correlate. The data exists in separate apps and devices, leaving patients unable to connect the dots.",
      userPersona: "David (55), recently diagnosed. Somewhat tech-savvy, easily overwhelmed by dense medical interfaces.",
      goals: [
        "Provide a single source of truth for glucose, meals, and medication",
        "Surface 3 key insights daily without requiring the user to analyse raw data",
        "Enable one-click data export for GP appointments",
      ],
      constraints: [
        "HIPAA-compliant data handling",
        "Optimised for older desktop browsers used in clinical settings",
        "Colourblind-accessible charts throughout",
      ],
    },
    {
      id: "hc-med-2",
      title: "Telemedicine Consultation Interface",
      description: "Design the end-to-end video consultation experience for a telehealth platform.",
      problemStatement: "Telehealth adoption grew 3,800% during the pandemic, but patient satisfaction scores are 22 points below in-person visits. The biggest complaints: confusing pre-call setup, poor waiting room UX, and no clear post-call summary.",
      userPersona: "Fatima (42), managing a chronic skin condition. She prefers telehealth for convenience but finds the video calls stressful to set up.",
      goals: [
        "Pre-call checklist that verifies camera, mic, and ID in under 90 seconds",
        "Calming virtual waiting room with estimated wait time",
        "Post-call summary with prescription details and follow-up date",
      ],
      constraints: [
        "Video call integration is pre-built — design only the surrounding UI",
        "Must work on 4G with video auto-downscaling below 1Mbps",
        "Doctor's interface is out of scope — patient-facing only",
      ],
    },
    {
      id: "hc-med-3",
      title: "GP Appointment Booking Redesign",
      description: "Redesign the notoriously painful NHS-style appointment booking flow.",
      problemStatement: "The average GP appointment booking flow requires 7 steps, 3 phone calls, and results in 28% of patients giving up and visiting A&E instead. The digital solution exists but has a 1.8-star rating.",
      userPersona: "Tom (45), a busy father who has tried booking online twice and called instead both times. He only books for himself, his wife, and two kids.",
      goals: [
        "Book a single appointment in under 3 steps",
        "Allow family members to be managed under one account",
        "Automated SMS reminder with cancel/reschedule link",
      ],
      constraints: [
        "Integration with existing NHS backend API — cannot change data model",
        "Must be WCAG AA accessible for elderly users",
        "Maximum 3 screens between landing and confirmed booking",
      ],
    },
  ],

  "Healthcare-Hard": [
    {
      id: "hc-hard-1",
      title: "ICU Patient Monitoring Dashboard",
      description: "A real-time dashboard for ICU nurses to monitor multiple critical patients simultaneously.",
      problemStatement: "ICU nurses monitor 2–4 critical patients simultaneously. Current dashboards are information-dense without intelligent prioritisation, causing alert fatigue — nurses ignore 76% of alarms.",
      userPersona: "Nurse Preethi (34), 8 years in ICU. She knows which alerts matter but the system treats all 47 daily alarms with equal urgency.",
      goals: [
        "Intelligent alert tiering: Critical / Warning / Informational",
        "At-a-glance vitals overview for all patients on one screen",
        "One-click escalation to attending physician with pre-filled context",
      ],
      constraints: [
        "Must render on older hospital workstations (not Retina displays)",
        "All actions must be reversible — no irrecoverable states",
        "Pass clinical UX validation with 3 ICU nurses before handoff",
      ],
    },
    {
      id: "hc-hard-2",
      title: "Electronic Medical Records (EMR) Redesign",
      description: "Reimagine the primary interface doctors use to access and update patient records.",
      problemStatement: "Doctors spend 49% of their working time on EMR admin versus 27% with patients. Legacy systems like Epic are powerful but cognitively exhausting — doctors report burnout directly linked to interface friction.",
      userPersona: "Dr. Anand (41), a GP seeing 25 patients daily. He spends 2 hours after closing updating EMR notes that should take 40 minutes.",
      goals: [
        "Reduce documentation time per patient from 5 min to 2.5 min",
        "Surface patient history intelligently — most relevant info first",
        "Voice-to-text note entry with structured field extraction",
      ],
      constraints: [
        "Cannot alter underlying data schema — UI layer only",
        "Must comply with HIPAA and HL7 FHIR data display standards",
        "Keyboard-navigable throughout — doctors rarely lift hands from keyboard",
      ],
    },
    {
      id: "hc-hard-3",
      title: "Clinical Trial Recruitment Platform",
      description: "Match eligible patients with open clinical trials through an intelligent self-screening flow.",
      problemStatement: "80% of clinical trials are delayed due to recruitment failures. Eligible patients exist but can't find trials, and researchers struggle to reach them. The matching process requires complex eligibility criteria that confuse patients.",
      userPersona: "Rachel (52), a breast cancer survivor open to joining trials but overwhelmed by dense medical eligibility criteria on ClinicalTrials.gov.",
      goals: [
        "Self-screening questionnaire that maps to clinical eligibility criteria without medical jargon",
        "Match score showing how eligible a patient is for each open trial",
        "Consent-first data model — patients control what's shared with researchers",
      ],
      constraints: [
        "All eligibility criteria must be reviewed by a medical writer for plain language",
        "Cannot store genetic data — screening only, no retention",
        "Accessibility requirements for immunocompromised users (limited motor ability)",
      ],
    },
  ],

  // ─── E-COMMERCE ───────────────────────────────────────────────────────────

  "E-commerce-Easy": [
    {
      id: "ec-easy-1",
      title: "Product Listing Page Redesign",
      description: "Redesign a cluttered product grid to improve discoverability and conversion.",
      problemStatement: "An online bookshop has a 72% bounce rate on its category pages. Analytics show users scroll past 40+ products without filtering or clicking — they're overwhelmed, not engaged.",
      userPersona: "Jamie (22), casually browsing for a gift. Has no specific book in mind and needs the interface to guide them.",
      goals: [
        "Reduce time to first product click by 30%",
        "Make filters accessible and immediately visible without scrolling",
        "Surface 'bestseller' and 'staff pick' cues without cluttering cards",
      ],
      constraints: [
        "Product card dimensions are fixed by the existing CMS template",
        "Mobile-first design — 70% of traffic is on phones",
        "Image loading must not block UI rendering",
      ],
    },
    {
      id: "ec-easy-2",
      title: "Wishlist & Saved Items Feature",
      description: "Design a delightful save/wishlist experience for a fashion e-commerce app.",
      problemStatement: "The current 'save' button is a tiny heart icon that 60% of users never discover. Items saved are displayed in a flat, unsorted list with no organisation or sharing capability.",
      userPersona: "Zoe (19), saves dozens of items across multiple online stores and loses track of them. She wishes she could share wishlists with friends for birthday hints.",
      goals: [
        "Make the save interaction discoverable and satisfying (micro-animation)",
        "Organise saved items into named collections",
        "Enable shareable wishlist link with a preview image",
      ],
      constraints: [
        "Must persist without a login (guest mode saves to local storage)",
        "Share feature must work without the recipient needing an account",
        "Price drop notifications must be opt-in only",
      ],
    },
    {
      id: "ec-easy-3",
      title: "Order Tracking & Delivery Status Page",
      description: "Design a clear, reassuring post-purchase order tracking experience.",
      problemStatement: "WISMO ('Where Is My Order?') queries account for 35% of all customer support tickets. Users can't find the tracking page, and when they do, the status updates are vague and anxiety-inducing.",
      userPersona: "Carlos (38), ordered a birthday gift for his partner. He's anxious whether it will arrive in time and checks the status page 4 times a day.",
      goals: [
        "Show a clear visual timeline of order stages (Placed → Packed → Shipped → Delivered)",
        "Proactive SMS/push updates without requiring the user to check manually",
        "Allow one-click change of delivery date or location post-dispatch",
      ],
      constraints: [
        "Carrier tracking data has a 4-hour delay — communicate this honestly",
        "Guest users (no account) must access tracking via order number + email",
        "Design must handle 'exception' states (delay, lost parcel) empathetically",
      ],
    },
  ],

  "E-commerce-Medium": [
    {
      id: "ec-med-1",
      title: "Checkout Flow Redesign",
      description: "Reduce cart abandonment by redesigning a 6-step checkout into an optimised 2-step flow.",
      problemStatement: "An online furniture retailer has a 78% cart abandonment rate — higher than the industry average of 70%. Exit surveys cite 'too many steps' and 'unexpected shipping costs' as primary reasons.",
      userPersona: "Hannah (34), buying a rug. She's decided on the product but bails when she sees the 6-step checkout after already entering her card once.",
      goals: [
        "Collapse checkout to 2 steps: Address + Payment",
        "Show total cost including delivery before any form fields appear",
        "Enable Apple Pay / Google Pay as the primary payment CTA",
      ],
      constraints: [
        "Must handle international shipping to 12 countries",
        "Tax calculation is dynamic and requires server round-trip — design for loading state",
        "Guest checkout must not require account creation",
      ],
    },
    {
      id: "ec-med-2",
      title: "Returns & Refund UX Redesign",
      description: "Make the return process so easy that it actually increases long-term customer trust.",
      problemStatement: "The current return flow requires users to print a label, find an envelope, and drop it at a post office. 40% of customers who initiate a return abandon mid-process. Support tickets spike after returns.",
      userPersona: "Maya (29), returning shoes that didn't fit. She wants the process to be as easy as the buying experience — ideally handled in 5 minutes.",
      goals: [
        "Initiate a return from the orders page in 3 taps",
        "QR code return option that works at any post office without printing",
        "Real-time refund tracker after item is received",
      ],
      constraints: [
        "Must integrate with 3 different logistics providers (each has a different API)",
        "Return window timer must be clearly communicated but not aggressive",
        "Refund status must update in real-time via webhook",
      ],
    },
    {
      id: "ec-med-3",
      title: "AI Product Recommendation Engine UI",
      description: "Design a personalised recommendations widget that feels helpful, not surveillance-y.",
      problemStatement: "The current 'You Might Also Like' section has a 1.2% click-through rate. Users report the suggestions feel random and irrelevant. The underlying ML model is actually good — the UI fails to communicate why items are recommended.",
      userPersona: "Mia (22), browsing a fashion app. She trusts human stylists but distrusts algorithm recommendations because they feel creepy.",
      goals: [
        "Surface 'why we picked this' context for each recommendation",
        "Allow users to improve recommendations by rating or dismissing suggestions",
        "Recommendations section that doesn't feel like ads",
      ],
      constraints: [
        "Cannot display browsing history explicitly — implied personalisation only",
        "Must improve CTR from 1.2% to at least 4% (A/B testable)",
        "GDPR-compliant: personalisation must be opt-out-able",
      ],
    },
  ],

  "E-commerce-Hard": [
    {
      id: "ec-hard-1",
      title: "Marketplace Seller Dashboard",
      description: "Design a comprehensive seller dashboard for a multi-vendor marketplace.",
      problemStatement: "Third-party sellers on 'ShopHub' manage inventory, orders, promotions, and customer messages across 4 separate portals. Sellers report spending 3+ hours daily switching between tools — many are leaving for Amazon.",
      userPersona: "Raj (44), runs a small home décor business with 200 SKUs on ShopHub. He's not tech-savvy but is business-smart — he needs numbers and actions, not dashboards.",
      goals: [
        "Unified view of orders, inventory, revenue, and messages",
        "Bulk actions: update price, stock, and status across multiple products",
        "Smart alerts: low stock, pricing competitiveness, review responses needed",
      ],
      constraints: [
        "Must handle catalogues of 1–50,000 SKUs without performance degradation",
        "Role-based access: owner vs. warehouse staff vs. customer support agent",
        "Export to Tally/Excel for accounting integration",
      ],
    },
    {
      id: "ec-hard-2",
      title: "AR Try-On Experience",
      description: "Design a mobile AR try-on flow for eyewear that converts sceptical shoppers.",
      problemStatement: "Online eyewear retail has a 38% return rate primarily because frames don't look as expected in person. The existing AR feature has a 4% adoption rate — users don't trust it or find it before purchasing.",
      userPersona: "Leo (32), spends ₹15k+ on glasses and always buys in-store for the try-on experience. He's tried online once and returned them.",
      goals: [
        "AR try-on launch within 2 taps from the product page",
        "Accurate face-fit preview with frame size callouts",
        "Side-by-side comparison of 2 frames in AR mode",
      ],
      constraints: [
        "Must work on 2-year-old mid-range devices without LiDAR",
        "AR session must not require camera permission explanation on every visit",
        "Fail gracefully: if AR is unsupported, show an enhanced 2D overlay option",
      ],
    },
    {
      id: "ec-hard-3",
      title: "Subscription Box Curation Platform",
      description: "Design the personalisation and management experience for a subscription box service.",
      problemStatement: "Subscribers of 'CurateBox' receive boxes they're increasingly indifferent to after month 3. Churn spikes at month 4. The box contents are configurable but users don't know this — the curation UI is buried 6 clicks deep.",
      userPersona: "Olivia (27), subscribed to a beauty box. She loves the concept but has received 3 products she'd never use. She's thinking of cancelling.",
      goals: [
        "Preference quiz that maps answers to curation rules (not a 40-question survey)",
        "Monthly preview of the upcoming box with swap options",
        "Pause/skip month without the guilt-trip dark pattern flow",
      ],
      constraints: [
        "Curation engine has a 10-day cutoff — swaps must close before that",
        "Must reduce churn from month 4 by 20% — measure via prototype test",
        "Referral program UI must be integrated non-intrusively",
      ],
    },
  ],

  // ─── AI ───────────────────────────────────────────────────────────────────

  "AI-Easy": [
    {
      id: "ai-easy-1",
      title: "AI Chatbot Onboarding Flow",
      description: "Design an engaging onboarding that teaches users how to interact with an AI assistant.",
      problemStatement: "A productivity AI assistant has 80k downloads but only 22% of users ever ask a second question. Users don't understand what the AI can do and give up after one awkward interaction.",
      userPersona: "Ben (35), downloaded an AI assistant but typed 'Hello' and got an overwhelming response. He didn't know what to ask next.",
      goals: [
        "Interactive tutorial that teaches prompt structure through guided examples",
        "Onboarding in under 3 minutes with one 'wow moment' built in",
        "Progressive capability reveal — don't show all features on day 1",
      ],
      constraints: [
        "Must not feel condescending to tech-savvy users",
        "Skip option always available — don't force the tutorial",
        "Onboarding completion rate target: 65%",
      ],
    },
    {
      id: "ai-easy-2",
      title: "Smart Search Interface",
      description: "Replace a legacy keyword search with a natural language query interface.",
      problemStatement: "A legal document platform's search returns 0 results for 47% of queries because users type natural questions ('breach of contract cases in 2022') but the system needs specific Boolean syntax.",
      userPersona: "Lisa (38), a paralegal who knows what she's looking for but not how to phrase it for the search system.",
      goals: [
        "Accept natural language queries and translate to structured search",
        "Show search intent interpretation ('Searching for: breach of contract, year: 2022')",
        "Suggest refinements when results are too broad or narrow",
      ],
      constraints: [
        "AI processing adds 800ms latency — design for the delay",
        "Must still support Boolean operators for power users",
        "Search history is private — no cross-user data shared",
      ],
    },
    {
      id: "ai-easy-3",
      title: "AI Writing Assistant UI",
      description: "Design the interface for an AI tool that helps users improve their writing.",
      problemStatement: "Content creators waste 30% of their time on editing tasks that an AI could handle in seconds — grammar, tone, length, and clarity. The barrier isn't the AI capability; it's a clunky interface.",
      userPersona: "Priya (26), a content marketer who writes 10 articles a week. She uses Grammarly but finds it surface-level and intrusive.",
      goals: [
        "Inline suggestions that appear without disrupting writing flow",
        "Tone adjustment slider: Formal → Casual, Concise → Detailed",
        "One-click rewrite of selected paragraph with original preserved for comparison",
      ],
      constraints: [
        "Must not feel like surveillance — suggestions are opt-in, not auto-applied",
        "Works inside a web editor — no separate app",
        "Latency under 2 seconds for paragraph-level suggestions",
      ],
    },
  ],

  "AI-Medium": [
    {
      id: "ai-med-1",
      title: "AI Image Generation Tool",
      description: "Design an accessible text-to-image generation interface for non-technical creatives.",
      problemStatement: "AI image tools like Midjourney require users to learn prompt engineering — a skill most non-technical creatives lack. The result is beautiful outputs for experts and frustrating blanks for everyone else.",
      userPersona: "Sonia (31), a small business owner who needs marketing imagery but can't afford a designer and finds Midjourney 'like coding'.",
      goals: [
        "Guided prompt builder with style, mood, and subject controls",
        "Variation generation with one-click iteration from a result",
        "Export in web-ready and print-ready formats",
      ],
      constraints: [
        "Generation time is 8–12 seconds — design a wait state that doesn't feel empty",
        "Content moderation filtering is built-in — design for the rejection state",
        "Credit-based usage system — show credit balance without creating anxiety",
      ],
    },
    {
      id: "ai-med-2",
      title: "Voice Assistant Interface Design",
      description: "Design the visual companion interface for an AI voice assistant on a smart home hub.",
      problemStatement: "Smart home hubs sit in kitchens but household members avoid using the voice assistant because they can't tell if it's listening, processing, or confused — the audio-only feedback is insufficient.",
      userPersona: "The Kim family: Jae (44), his wife Soo (42), and teenage daughter Mia (16). They have different vocabulary, accents, and tolerance for tech friction.",
      goals: [
        "Visual state system: idle / listening / processing / responding / error",
        "Ambient display mode showing time, weather, and upcoming reminders without interaction",
        "Graceful misunderstood-query recovery with visual reprompt",
      ],
      constraints: [
        "Screen is 7-inch, always-on — design for visibility at 3 metres",
        "Privacy mode: visual indicator when microphone is disabled",
        "Works for users aged 10–75 without instruction",
      ],
    },
    {
      id: "ai-med-3",
      title: "AI Content Moderation Dashboard",
      description: "Design a moderation interface for human reviewers working alongside an AI system.",
      problemStatement: "Content moderators at a mid-size platform review 3,000 pieces of content per 8-hour shift. AI auto-removes clear violations but 40% land in a grey area requiring human judgement. Burnout is high; accuracy is declining.",
      userPersona: "Marcus (29), a moderation team lead. He reviews escalated cases and sets moderation policy. He's concerned about decision fatigue affecting his team's accuracy.",
      goals: [
        "Case queue prioritised by AI confidence score and violation severity",
        "One-screen verdict interface: context, content, options, and reasoning log",
        "Team performance dashboard with accuracy trends and burnout indicators",
      ],
      constraints: [
        "Moderators must never see graphic content without a content warning gate",
        "All decisions must be logged with a reasoning tag for legal audit",
        "Shift time limits enforced by UX — mandatory breaks after 2 hours of review",
      ],
    },
  ],

  "AI-Hard": [
    {
      id: "ai-hard-1",
      title: "AI Model Training Dashboard",
      description: "Design a visual interface for ML engineers to monitor and control model training runs.",
      problemStatement: "ML engineers manage training jobs via CLI and Jupyter notebooks — they miss critical training failures hours after they occur. Visualising hyperparameter tuning and comparing runs requires custom scripts.",
      userPersona: "Anya (31), an ML engineer at a Series B startup. She runs 20+ training jobs a week and loses 4–6 hours to debugging jobs that failed silently.",
      goals: [
        "Real-time training loss and metric visualisation across concurrent runs",
        "Automated anomaly detection with slack/email alert configuration",
        "Run comparison view: overlay metrics from multiple experiments on one chart",
      ],
      constraints: [
        "Must handle runs with 72+ hour training windows without UI degradation",
        "Cannot store model weights — metadata and metrics only",
        "API-first: all data comes from a generic metrics API, not a specific ML platform",
      ],
    },
    {
      id: "ai-hard-2",
      title: "Autonomous Agent Task Interface",
      description: "Design the control and transparency interface for an AI agent that executes multi-step tasks.",
      problemStatement: "AI agents that autonomously browse the web and execute tasks are powerful but opaque. Users don't know what the agent is doing, can't intervene mid-task, and can't trust the output without visibility into the process.",
      userPersona: "Dev (33), a product manager who wants to automate competitive research. He's excited about AI agents but scared of 'letting it loose' without oversight.",
      goals: [
        "Live step-by-step task log showing agent actions in plain language",
        "Pause / approve / override controls at any task step",
        "Post-task audit trail with confidence scores per finding",
      ],
      constraints: [
        "Agent actions can be irreversible (e.g., sending an email) — require explicit confirmation",
        "Must handle task durations from 30 seconds to 4 hours",
        "Privacy: agent must never retain credentials beyond the active session",
      ],
    },
    {
      id: "ai-hard-3",
      title: "AI Ethics & Bias Transparency Tool",
      description: "Design a dashboard that helps non-technical stakeholders understand and challenge AI model decisions.",
      problemStatement: "Companies deploying AI in hiring, lending, and healthcare face regulatory pressure to explain model decisions. The explainability tools built by data teams are unusable by HR, compliance, and legal teams.",
      userPersona: "Janet (48), a compliance officer at an insurance firm. She must audit AI-driven claim decisions but cannot read a SHAP plot or understand feature importance scores.",
      goals: [
        "Plain-language explanation of why an AI made a specific decision",
        "Bias detection report across demographic groups with visual equity metrics",
        "Counterfactual explorer: 'What would need to change for a different outcome?'",
      ],
      constraints: [
        "Must work with 5 different model types without requiring model re-training",
        "Output must be court-admissible level clear — reviewed by legal team",
        "No ML jargon — zero tolerance for undefined technical terms",
      ],
    },
  ],

  // ─── EDTECH ───────────────────────────────────────────────────────────────

  "EdTech-Easy": [
    {
      id: "ed-easy-1",
      title: "Flashcard Study Tool",
      description: "A spaced repetition flashcard app designed for exam revision.",
      problemStatement: "Students make flashcards but study them randomly. Spaced repetition improves retention by 200% but existing apps (Anki) have interfaces that look like 2008 and intimidate non-technical students.",
      userPersona: "Fatima (18), preparing for her A-level Biology exam. She uses paper flashcards but loses them and can't track what she's mastered.",
      goals: [
        "Create a card in under 10 seconds (text + optional image)",
        "Daily study session suggested by spaced repetition algorithm",
        "Progress ring showing cards mastered vs. still learning",
      ],
      constraints: [
        "Offline mode: study without internet during commute",
        "Must support subject-specific formatting: equations, code, diagrams",
        "Free tier limited to 100 cards — upsell non-intrusively",
      ],
    },
    {
      id: "ed-easy-2",
      title: "Course Progress Tracker",
      description: "A visual progress dashboard for self-paced online learners.",
      problemStatement: "Online course completion rates average 5–15%. Learners start strong but lose momentum after week 2 because they can't see how far they've come or estimate how far they have to go.",
      userPersona: "James (34), completing an online Python course after work. He has 45 minutes per day and needs to feel like it's leading somewhere.",
      goals: [
        "Visual curriculum map showing completed, current, and remaining sections",
        "Streak tracker with gentle nudges (not guilt) on missed days",
        "Estimated time to completion based on current pace",
      ],
      constraints: [
        "Works across 15 different course providers via embed",
        "No gamification that patronises adult learners",
        "Must handle courses from 1 hour to 200+ hours",
      ],
    },
    {
      id: "ed-easy-3",
      title: "Quiz Builder for Teachers",
      description: "A simple web tool for teachers to create and distribute quizzes.",
      problemStatement: "Primary school teachers spend 2–3 hours per week creating paper quizzes in Word. Digital alternatives like Google Forms feel impersonal and don't support images or formatted math well.",
      userPersona: "Ms. Chen (38), a Year 5 maths teacher with no coding skills but comfortable with basic digital tools.",
      goals: [
        "Create a 10-question quiz in under 5 minutes",
        "Support text, multiple choice, images, and simple equations",
        "Share via link — students access without creating an account",
      ],
      constraints: [
        "School firewall blocks Google and Microsoft products — hosted independently",
        "Works on outdated school Chromebooks (no powerful JS frameworks)",
        "Results auto-marked and shown to teacher in a simple grid",
      ],
    },
  ],

  "EdTech-Medium": [
    {
      id: "ed-med-1",
      title: "Live Virtual Classroom Interface",
      description: "Design the student-facing interface for a live online class platform.",
      problemStatement: "Live online classes have a 40% 'ghost attendee' rate — students join but don't engage. Engagement tools exist (polls, Q&A, reactions) but are hidden in menus teachers and students never open.",
      userPersona: "Ravi (16), attending a live maths tutoring session. His camera is off, he's on his phone, and he won't ask questions because the whole class can see.",
      goals: [
        "Anonymous question submission that normalises participation",
        "Engagement tools (polls, reactions) visible without opening a menu",
        "Focus mode: hide all distractions while a teacher is presenting",
      ],
      constraints: [
        "Video conferencing is pre-integrated — design the wrapper UI only",
        "Must work on mobile without the screen feeling cramped",
        "Internet latency of 300ms+ must not break any interactive features",
      ],
    },
    {
      id: "ed-med-2",
      title: "Peer Learning & Study Group Platform",
      description: "A platform for students to form study groups, share notes, and quiz each other.",
      problemStatement: "Students study better together but coordinating study sessions requires group chats, separate video calls, and shared drives that are all disconnected. There's no single space designed for collaborative studying.",
      userPersona: "Aisha (20), a university student who thrives in group study but her group is scattered across 3 cities.",
      goals: [
        "Create or join a subject-based study room with relevant notes and resources",
        "Live collaborative document and whiteboard within the room",
        "Peer quiz challenges: challenge a friend with your flashcard deck",
      ],
      constraints: [
        "Real-time collaboration requires WebSocket — design for connection-drop gracefully",
        "Content moderation required — student-generated notes must be flaggable",
        "Study rooms auto-archive after 30 days of inactivity",
      ],
    },
    {
      id: "ed-med-3",
      title: "Adaptive Quiz & Assessment System",
      description: "Design an adaptive quiz system that adjusts difficulty based on student performance.",
      problemStatement: "Fixed-difficulty quizzes either frustrate struggling students or bore advanced ones. An adaptive system exists in the backend but displays the same static quiz UI regardless of difficulty branch.",
      userPersona: "Luke (14), a maths student who breezes through standard quizzes but needs challenge to stay engaged.",
      goals: [
        "Visual difficulty indicator that adjusts visibly as the quiz progresses",
        "Explanation screen after each wrong answer with the concept reviewed",
        "Post-quiz report showing weak areas with suggested resources",
      ],
      constraints: [
        "Must not reveal whether a question is 'hard' or 'easy' to prevent anchoring bias",
        "Works across tablets and desktops used in classrooms",
        "Quiz state must persist if the browser tab is accidentally closed",
      ],
    },
  ],

  "EdTech-Hard": [
    {
      id: "ed-hard-1",
      title: "Personalised Learning Path Engine",
      description: "Design a UI that visualises and navigates an adaptive curriculum for adult learners.",
      problemStatement: "Adult learners in self-paced bootcamps lose motivation when content is too easy or hard. The adaptive engine adjusts the curriculum but the UI shows a static syllabus — learners can't see their personalised path.",
      userPersona: "James (34), transitioning into UX design after 10 years in marketing. Studies 1 hour a day after work and needs visible progress to stay motivated.",
      goals: [
        "Interactive curriculum map that reflects the learner's personalised branch",
        "Non-demotivating intervention state when a learner struggles",
        "Gamified milestones without feeling juvenile for adult learners",
      ],
      constraints: [
        "Curriculum can branch into 200+ node trees — UI must handle complexity",
        "Mobile view must condense complex maps into swipeable sequences",
        "Learner data privacy: progress data cannot be shared without explicit consent",
      ],
    },
    {
      id: "ed-hard-2",
      title: "Collaborative Whiteboard for Education",
      description: "A real-time collaborative whiteboard optimised for maths and science tutoring.",
      problemStatement: "Online maths tutoring is fundamentally broken because there's no natural way to sketch diagrams, work through equations, and annotate simultaneously. Video call + screen share is a poor substitute for a physical whiteboard.",
      userPersona: "Deepa (16), getting 1:1 maths tutoring online. Her tutor uses Zoom screen share and Paint — it's frustrating for both.",
      goals: [
        "Low-latency drawing with a stylus or mouse for both tutor and student",
        "Mathematical equation input with LaTeX rendering on-canvas",
        "Replay mode: play back the session drawing sequence as a study aid",
      ],
      constraints: [
        "Latency must be under 100ms for drawing to feel natural",
        "Works on iPad with Apple Pencil and Windows tablet with stylus",
        "Session recordings stored for 30 days with student access only",
      ],
    },
    {
      id: "ed-hard-3",
      title: "School Admin & Parent Portal",
      description: "A unified portal connecting school administration, teachers, and parents.",
      problemStatement: "Parents receive updates via 5 different channels: WhatsApp groups, emails, a school app, a physical diary, and occasional SMS. Teachers spend 3 hours a week on communication that could be systemised.",
      userPersona: "Mrs. Patel (40), a parent of two children in different year groups. She misses important notices because they're buried in a 200-message WhatsApp group.",
      goals: [
        "Single feed with prioritised notices: attendance, grades, events, homework",
        "Two-way messaging between parent and teacher with read receipts",
        "Homework submission and grade visibility in one view per child",
      ],
      constraints: [
        "GDPR: parental data cannot be shared with third-party services",
        "Must work for parents with low digital literacy",
        "School-specific branding per institution — multi-tenant theming",
      ],
    },
  ],

  // ─── TRAVEL ───────────────────────────────────────────────────────────────

  "Travel-Easy": [
    {
      id: "tr-easy-1",
      title: "Trip Expense Tracker for Groups",
      description: "A mobile app to log and split travel expenses among a group in real time.",
      problemStatement: "Group trips create financial awkwardness when one person pays for everything. Splitting via bank transfer is messy and using spreadsheets fails when people are moving between countries and time zones.",
      userPersona: "Chloe (26), the organiser for her friend group's 10-day Europe trip. She fronts most costs and chases everyone afterwards.",
      goals: [
        "Log an expense in under 5 seconds with automatic split calculation",
        "Multi-currency support with real-time conversion",
        "End-of-trip settle-up screen showing net amounts owed",
      ],
      constraints: [
        "Offline mode: many tourist locations have poor connectivity",
        "Large tap targets for outdoor/sunlight use",
        "No payment processing — tracking and IOU only",
      ],
    },
    {
      id: "tr-easy-2",
      title: "Smart Packing List App",
      description: "An intelligent packing list that suggests items based on destination, weather, and trip type.",
      problemStatement: "Travellers forget the same 5 things every trip. Generic packing lists found online don't account for destination climate, trip duration, or activities planned.",
      userPersona: "Alex (28), goes on a work trip or holiday 8–10 times a year. Always forgets an adapter or medication on every single trip.",
      goals: [
        "Auto-suggest a packing list based on destination + duration + purpose",
        "Check off items as they're packed with satisfying animations",
        "Save and reuse lists for recurring trip types (e.g., 'business trip')",
      ],
      constraints: [
        "Weather data integration requires location permission — explain why clearly",
        "Works offline once list is generated",
        "Share list with travel companion via link",
      ],
    },
    {
      id: "tr-easy-3",
      title: "Local Transport Guide App",
      description: "A simple, offline-first guide to navigating public transport in an unfamiliar city.",
      problemStatement: "Tourists lose hours trying to understand foreign metro systems, bus routes, and payment methods. Google Maps helps with navigation but doesn't explain 'how' to use an unfamiliar system.",
      userPersona: "Marco (38), visiting Tokyo for the first time. He's overwhelmed by the 13-line metro, IC card payment, and trains that leave to the exact second.",
      goals: [
        "Step-by-step guide to buying a ticket and tapping in/out",
        "Offline city guide download before arrival",
        "Quick reference card: common phrases, etiquette, and panic button (taxi)",
      ],
      constraints: [
        "Must work with zero data connection once downloaded",
        "Content written for someone who has never used that city's system",
        "Support 20 major cities at launch",
      ],
    },
  ],

  "Travel-Medium": [
    {
      id: "tr-med-1",
      title: "Hotel Booking Flow Redesign",
      description: "Redesign the search-to-book flow for a mid-size hotel booking platform.",
      problemStatement: "HotelSearch.com has an 81% drop-off between search results and booking completion. Exit surveys point to trust issues, unclear cancellation policies, and payment friction as main causes.",
      userPersona: "Sandra (41), booking a hotel for a family of 4. She compares 4–5 sites before booking and is highly sensitive to hidden fees.",
      goals: [
        "Surface trust signals (cancellation policy, total price) before the booking form",
        "Photo-first hotel cards with immersive image galleries",
        "Reduce steps from search to confirmation from 6 to 3",
      ],
      constraints: [
        "Must handle 15 room types per property with varying policies",
        "Real-time availability check adds 1.5s latency — design for it",
        "Price shown must always be total price including taxes",
      ],
    },
    {
      id: "tr-med-2",
      title: "Travel Itinerary Builder",
      description: "A drag-and-drop itinerary planner that organises bookings, activities, and logistics.",
      problemStatement: "Travellers manage their itineraries across email, screenshots, PDF confirmations, and a notes app. There's no single view of 'what am I doing on Day 3 at 2pm' that includes the hotel check-in, tour, and restaurant reservation.",
      userPersona: "Sophie (33), planning a 14-day Japan trip. She has 20+ tabs open and sends a PDF itinerary to herself that's outdated within 2 days.",
      goals: [
        "Day-by-day itinerary with time blocks for each activity",
        "Import bookings from confirmation emails automatically",
        "Offline-accessible itinerary with maps for each location",
      ],
      constraints: [
        "Email import requires OAuth access — explain scope clearly",
        "Must handle time zones when the trip crosses international date lines",
        "Shareable with travel companions (view-only link)",
      ],
    },
    {
      id: "tr-med-3",
      title: "Group Trip Planning Platform",
      description: "A collaborative platform for groups to plan, vote on, and book a trip together.",
      problemStatement: "Planning a group trip via WhatsApp is a nightmare. Suggestions get buried, no one can agree, and the person organising burns out trying to accommodate 8 different preferences.",
      userPersona: "Tom (30), organising his friend group's annual trip. Last year 3 people dropped out after a 6-week WhatsApp argument.",
      goals: [
        "Destination voting and preference collection without WhatsApp chaos",
        "Shared budget visibility: who's paid what, what's outstanding",
        "Finalise and book activities directly within the platform",
      ],
      constraints: [
        "Must work without all members having an account (email-only participation)",
        "Group size: support 2–20 people per trip",
        "Decision-making must feel democratic without being infinitely democratic",
      ],
    },
  ],

  "Travel-Hard": [
    {
      id: "tr-hard-1",
      title: "Flight Comparison & Price Alert Dashboard",
      description: "Design a sophisticated flight search and monitoring interface for frequent flyers.",
      problemStatement: "Frequent flyers who monitor fare prices spend 2–3 hours weekly across 5+ tabs checking different route combinations. Price alerts from Google Flights fire too late and lack context about whether the fare is actually a good deal.",
      userPersona: "Arjun (36), travels for work 15 times a year and always tries to upgrade using miles. He's a data-driven buyer who wants history, not just current price.",
      goals: [
        "Historical price chart for any route over the past 12 months",
        "Price alert engine with 'deal quality' score (vs. average and 52-week low)",
        "Flexible date matrix: cheapest days across a 2-week window in one view",
      ],
      constraints: [
        "Flight data APIs have rate limits — batch requests efficiently",
        "Price changes can happen every 60 seconds — UI should not 'flash' constantly",
        "Miles/points valuation must be airline-agnostic and user-customisable",
      ],
    },
    {
      id: "tr-hard-2",
      title: "Travel Agency CRM & Booking Platform",
      description: "Design a CRM and booking management system for independent travel agents.",
      problemStatement: "Independent travel agents manage client bookings across 12 different supplier portals, email, WhatsApp, and a paper ledger. They spend 60% of their time on admin that could be automated, limiting their revenue-generating capacity.",
      userPersona: "Meera (45), runs a boutique travel agency specialising in luxury trips. She has 80 active clients and manages 200+ bookings annually.",
      goals: [
        "Unified client profile with all bookings, preferences, and communication history",
        "Itinerary builder that auto-generates a client-facing PDF",
        "Commission tracking and invoice generation per booking",
      ],
      constraints: [
        "Must integrate with 5 major GDS systems via API",
        "Data isolation: client data must never be visible cross-agent",
        "Offline mode for face-to-face client consultations",
      ],
    },
    {
      id: "tr-hard-3",
      title: "Multi-City Trip Optimiser",
      description: "Design an intelligent trip planner that optimises routing and logistics for complex multi-city itineraries.",
      problemStatement: "Travellers planning multi-city trips in Europe or Southeast Asia spend 10–15 hours researching routes, transport options, and optimal sequencing. Getting from A to B might involve 3 modes of transport with confusing booking journeys.",
      userPersona: "Elena (29), planning a 3-week Southeast Asia trip covering 8 cities. She's an experienced traveller but overwhelmed by the routing permutations.",
      goals: [
        "Input a list of cities and trip dates — output the optimal routing sequence",
        "Compare transport options (flight, train, bus, ferry) per leg with cost and time",
        "One-click booking handoff to relevant platforms for each leg",
      ],
      constraints: [
        "Optimisation algorithm must run client-side for privacy — no itinerary data sent to server",
        "Must handle circular vs. open-jaw vs. hub-and-spoke trip structures",
        "Support multi-person trips with shared and individual legs",
      ],
    },
  ],

  // ─── SOCIAL ───────────────────────────────────────────────────────────────

  "Social-Easy": [
    {
      id: "soc-easy-1",
      title: "Profile Setup & Personalisation Flow",
      description: "Design a welcoming, non-overwhelming profile creation flow for a new social platform.",
      problemStatement: "A community platform for indie creators loses 55% of signups during the profile setup step. Users face 12 required fields before they can do anything — they bounce before they've seen any value.",
      userPersona: "Sam (23), a digital illustrator signing up for a portfolio network. He wants to show his work, not fill in a biography.",
      goals: [
        "Progressive profile: minimum 2 fields to get in, rest filled over time",
        "Upload portfolio work as the first action (lead with the value)",
        "Profile completeness indicator that motivates without nagging",
      ],
      constraints: [
        "No dark patterns: profile completeness prompts max once per session",
        "Must support image, video, and PDF portfolio items",
        "First post prompt within 2 minutes of signup",
      ],
    },
    {
      id: "soc-easy-2",
      title: "Notification Centre Redesign",
      description: "Tame a chaotic notification feed for a creator platform with multiple content types.",
      problemStatement: "Creators on a multi-content platform receive 50–200 notifications per day. They miss important ones (new sale, collaboration request) in a flood of low-priority ones (random likes). Response rates on important notifications are 8%.",
      userPersona: "Layla (27), a photographer selling prints online. She misses custom order requests because they sit between 40 'someone liked your photo' pings.",
      goals: [
        "Priority inbox: separate high-action notifications from engagement notifications",
        "Batch low-priority notifications by type ('12 new likes on your portrait series')",
        "Notification scheduling: deliver non-urgent notifications at a user-set time",
      ],
      constraints: [
        "Cannot reduce the number of notification types — sellers need all of them",
        "Must work within the existing push notification infrastructure",
        "Opt-in batching — some creators want real-time",
      ],
    },
    {
      id: "soc-easy-3",
      title: "Story Creation Tool",
      description: "Design an accessible in-app story editor for a community platform.",
      problemStatement: "A community platform added a Stories feature that sees 3x less usage than TikTok or Instagram stories from the same users. The creation flow requires 9 taps to post a single image — competitors do it in 3.",
      userPersona: "Kai (21), posts daily on Instagram Stories but rarely uses this platform's version despite spending more time here.",
      goals: [
        "Camera to posted story in under 3 taps",
        "Drag-and-drop text, sticker, and emoji placement on images",
        "Audience selector: public, followers only, or close friends",
      ],
      constraints: [
        "Must match or beat competitor speed benchmark (3-tap minimum)",
        "Video stories limited to 60 seconds in v1",
        "HEIF image format support for iPhone users",
      ],
    },
  ],

  "Social-Medium": [
    {
      id: "soc-med-1",
      title: "Community Forum & Discussion Platform",
      description: "Design a modern, thread-based community forum for a niche interest group.",
      problemStatement: "Reddit-like forums work for large communities but fail niche groups. Existing forum software (phpBB, Discourse) is powerful but visually dated and mobile-hostile — niche communities are moving to Discord but losing the discoverability Reddit provides.",
      userPersona: "Elena (34), a birding enthusiast. Her community of 4k members is spread across Reddit, Facebook groups, and 3 WhatsApp groups.",
      goals: [
        "Photo-first post format (birding communities lead with images)",
        "Thread-level subscriptions with digest emails",
        "Location-tagged sightings on a community map view",
      ],
      constraints: [
        "Must be moderated by volunteers — keep moderation tools simple",
        "Mobile-first: 80% of the community browses on phones",
        "SEO-friendly: threads must be discoverable via Google",
      ],
    },
    {
      id: "soc-med-2",
      title: "Local Event Discovery Platform",
      description: "Design a platform that surfaces hyperlocal events personalised to the user's interests.",
      problemStatement: "People in mid-size cities struggle to find interesting local events. Facebook Events is exhausting and noisy. Eventbrite is transactional. Word-of-mouth is the primary discovery channel — inefficient and exclusive.",
      userPersona: "Nina (29), moved to a new city 6 months ago. Wants to meet people and find things to do but feels like the interesting stuff happens without her.",
      goals: [
        "Personalised event feed based on interest tags + location radius",
        "Venue profiles that surface a calendar of upcoming events",
        "'Going' confirmation that creates implicit social proof for other users",
      ],
      constraints: [
        "Event submissions must be verified — moderation queue required",
        "Must work in cities with as few as 50 events per month",
        "Privacy: attendance confirmation is visible only to other attendees",
      ],
    },
    {
      id: "soc-med-3",
      title: "Creator Analytics Dashboard",
      description: "Design a clear, actionable analytics view for independent content creators.",
      problemStatement: "Creators spend hours in native platform analytics (Instagram Insights, YouTube Studio) but leave without knowing what to do next. Data is presented, not interpreted — there's no 'so what' layer.",
      userPersona: "Dev (26), a YouTube creator with 50k subscribers. He looks at his analytics every day but makes content decisions based on gut feel, not data.",
      goals: [
        "Top 3 actionable insights surfaced automatically, not buried in charts",
        "Best time to post recommendation based on audience behaviour",
        "Content type performance comparison: long-form vs. Shorts vs. thumbnails A/B",
      ],
      constraints: [
        "Platform API rate limits: data refreshed hourly, not real-time",
        "Multi-platform support: aggregate data from YouTube, Instagram, and TikTok",
        "Export to CSV for sponsorship media kit generation",
      ],
    },
  ],

  "Social-Hard": [
    {
      id: "soc-hard-1",
      title: "Content Moderation Dashboard",
      description: "Design a moderation interface that balances speed, accuracy, and moderator wellbeing.",
      problemStatement: "A social platform's trust & safety team reviews 15,000 content reports per day with a team of 120 moderators. The current tool has no prioritisation logic — a meme report sits alongside CSAM in the same queue.",
      userPersona: "Marcus (29), a senior moderation team lead. He's focused on decision accuracy and his team's mental health. Burnout turnover is 40% annually.",
      goals: [
        "AI pre-triage routes content to appropriate specialist queues",
        "Single-screen verdict interface with policy context embedded",
        "Wellbeing features: mandatory break prompts, optional content warnings",
      ],
      constraints: [
        "All decisions logged with immutable audit trail for legal discovery",
        "Graphic content gated behind explicit moderator consent flow",
        "Decision time target: under 25 seconds for Tier 1 content",
      ],
    },
    {
      id: "soc-hard-2",
      title: "Live Streaming Platform Interface",
      description: "Design a live streaming creator interface for an interactive entertainment platform.",
      problemStatement: "Emerging live streaming creators on a new platform churn after 2 weeks because the streaming interface is overwhelming (20+ controls), the viewer engagement tools are buried, and going live requires a 6-step setup every session.",
      userPersona: "Zara (22), a gaming creator with 5k followers. She streams 4x a week but spends 20 minutes setting up and misses the first burst of viewer activity.",
      goals: [
        "Reduce stream setup from 6 steps to a saved 1-click launch",
        "Viewer engagement panel: polls, reactions, Q&A surfaced without alt-tabbing",
        "Real-time stream health indicators: bitrate, viewer count, revenue",
      ],
      constraints: [
        "Streaming encoder runs locally — browser UI cannot affect performance",
        "Viewer chat at 1000+ messages/minute must not crash the creator UI",
        "Works on a single monitor setup without a second screen",
      ],
    },
    {
      id: "soc-hard-3",
      title: "Social Commerce Integration",
      description: "Design a native shopping experience embedded within a creator content feed.",
      problemStatement: "Creators earn commission from affiliate links but the current flow breaks the content experience — users click a link, leave the app, and the creator loses attribution. In-app purchase completion rates are 8% vs. 34% on native e-commerce apps.",
      userPersona: "Isabelle (31), a lifestyle creator who earns $4k/month from affiliate links. She wants a native checkout that doesn't feel like an ad.",
      goals: [
        "Shoppable product tags embedded natively in posts and stories",
        "In-app checkout with saved payment method — zero redirects",
        "Creator earnings dashboard with product-level attribution",
      ],
      constraints: [
        "Must integrate with Shopify, WooCommerce, and direct brand APIs",
        "Returns and disputes handled by the brand, not the platform — clear handoff",
        "Commerce UI must not compromise the editorial feel of the content feed",
      ],
    },
  ],
};

let _lastBriefId: string | null = null;

export function generateMockBrief(industry: string, difficulty: string, platform: string): Brief {
  const key = `${industry}-${difficulty}`;
  const pool = BRIEF_POOL[key];

  let template: BriefTemplate;

  if (pool && pool.length > 0) {
    // Filter out the last shown brief to guarantee variety
    const available = pool.length > 1
      ? pool.filter(b => b.id !== _lastBriefId)
      : pool;
    template = available[Math.floor(Math.random() * available.length)];
  } else {
    // Fallback for any missing combo
    template = {
      id: `gen-${industry}-${difficulty}`,
      title: `${industry} ${platform} Experience`,
      description: `A ${difficulty.toLowerCase()} difficulty UX challenge for the ${industry} sector on ${platform}.`,
      problemStatement: `Companies in the ${industry} space are struggling to provide a seamless ${platform} experience. Users report high friction and low satisfaction when attempting core tasks.`,
      userPersona: `Alex (32), a typical ${industry} user who expects fast, intuitive, and modern digital experiences on ${platform}.`,
      goals: [
        "Improve the core conversion metric by 15%",
        `Optimise the layout specifically for ${platform}`,
        "Establish a modern, trustworthy visual identity",
      ],
      constraints: [
        "Must utilise standard native UI components where possible",
        "Accessibility standard WCAG 2.1 AA must be met",
        "Assume a slow network connection as the baseline",
      ],
    };
  }

  _lastBriefId = template.id;

  return {
    ...template,
    industry,
    difficulty: difficulty as "Easy" | "Medium" | "Hard",
    platform,
    deliverables: STANDARD_DELIVERABLES,
  };
}

// ─── FEATURED BRIEFS (Carousel) ────────────────────────────────────────────

export const FEATURED_BRIEFS: Brief[] = [
  {
    ...(BRIEF_POOL["Fintech-Hard"][0]),
    industry: "Fintech",
    difficulty: "Hard",
    platform: "Mobile",
    deliverables: STANDARD_DELIVERABLES,
  },
  {
    ...(BRIEF_POOL["Healthcare-Medium"][0]),
    industry: "Healthcare",
    difficulty: "Medium",
    platform: "Web",
    deliverables: STANDARD_DELIVERABLES,
  },
  {
    ...(BRIEF_POOL["E-commerce-Medium"][0]),
    industry: "E-commerce",
    difficulty: "Medium",
    platform: "Mobile",
    deliverables: STANDARD_DELIVERABLES,
  },
  {
    ...(BRIEF_POOL["EdTech-Hard"][0]),
    industry: "EdTech",
    difficulty: "Hard",
    platform: "Cross-Platform",
    deliverables: STANDARD_DELIVERABLES,
  },
  {
    ...(BRIEF_POOL["Travel-Easy"][0]),
    industry: "Travel",
    difficulty: "Easy",
    platform: "Mobile",
    deliverables: STANDARD_DELIVERABLES,
  },
  {
    ...(BRIEF_POOL["Healthcare-Easy"][1]),
    industry: "Healthcare",
    difficulty: "Easy",
    platform: "Mobile",
    deliverables: STANDARD_DELIVERABLES,
  },
  {
    ...(BRIEF_POOL["AI-Medium"][0]),
    industry: "AI",
    difficulty: "Medium",
    platform: "Web",
    deliverables: STANDARD_DELIVERABLES,
  },
];
