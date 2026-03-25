export const INDUSTRIES = [
  "Fintech", "Healthcare", "E-commerce", "AI", "EdTech", "Travel", "Social", "Reddit", "Substack", "Others"
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
  // ─── REDDIT ───────────────────────────────────────────────────────────────
  // Briefs sourced from real UI/UX complaints across r/mildlyinfuriating,
  // r/userexperience, r/webdesign, and r/UX

  "Reddit-Easy": [
    {
      id: "red-easy-1",
      title: "Cookie Consent Banner Redesign",
      description: "Fix the infamous dark pattern where 'Accept All' is one click but 'Reject All' requires navigating 4 nested screens.",
      problemStatement: "Across r/mildlyinfuriating, cookie consent banners are among the most upvoted complaints. 'Accept All' is a prominent primary button, while 'Reject All' is hidden behind 'Manage Preferences' → 'Vendors' → deselect all → 'Save'. Users either give up and accept or leave the site entirely. The GDPR intended to give users control — the UX actively undermines that intent.",
      userPersona: "Ravi (28), a privacy-conscious developer. He opens r/privacytoolsIO daily and is acutely aware of tracking. He rage-closes 3 tabs a week because consent banners are too hostile to navigate.",
      goals: [
        "Make 'Reject All' equally prominent and one-click — same level as 'Accept All'",
        "Reduce consent flow to a maximum of 2 screens for any choice",
        "Comply with GDPR while respecting user intent — no guilt language or dark patterns",
      ],
      constraints: [
        "Must still collect granular consent categories (Analytics, Marketing, Functional)",
        "Persistent preference storage — don't re-ask on every visit",
        "Banner must not obscure more than 20% of the viewport on mobile",
      ],
    },
    {
      id: "red-easy-2",
      title: "App Review Prompt Redesign",
      description: "Redesign the review request flow so it asks at the right moment — not the worst one.",
      problemStatement: "A top complaint on r/mildlyinfuriating: apps asking for a 5-star review the first time you open them, immediately after an error, or mid-task. One viral post showed an app asking for a review while the user was on hold with customer support. Apps that prompt poorly average 0.4 stars lower than apps that time prompts well.",
      userPersona: "Jess (26), a frequent app user who has genuinely wanted to leave positive reviews but was so annoyed by the timing that she dismissed without rating. She now reflexively dismisses all prompts.",
      goals: [
        "Trigger review prompts only after a clearly positive user action (task completed, goal reached, streak achieved)",
        "Design a 2-step pre-prompt: 'Enjoying the app?' → only then open the OS review dialog",
        "Never prompt within 7 days of a negative event (error, crash, support contact)",
      ],
      constraints: [
        "iOS and Android OS review dialogs cannot be customised — design the surrounding flow only",
        "Prompt frequency capped at once per 60 days",
        "Users who dismiss twice should never be prompted again",
      ],
    },
    {
      id: "red-easy-3",
      title: "Password Reset Flow",
      description: "Redesign the universally painful 6-step password reset into something that actually makes sense.",
      problemStatement: "r/webdesign and r/userexperience regularly surface password reset flows as a top UX failure. Common crimes: expiring reset links in under 15 minutes, not telling users the link was already used, asking for a new password before verifying the link is valid, and forcing password rules that are shown only after the user submits.",
      userPersona: "Tom (41), a non-technical user who resets his password 2–3 times per month across various services. He has rage-closed 'forgot password' flows more times than he can count.",
      goals: [
        "Show password requirements upfront, before submission — not as an error after",
        "Reset link valid for 60 minutes with clear expiry communicated in the email",
        "Paste allowed in both password fields — no 'disable paste' nonsense",
      ],
      constraints: [
        "Must verify email before showing the new password form",
        "Password strength indicator updates in real-time as the user types",
        "One-click 'show password' toggle in both fields",
      ],
    },
  ],

  "Reddit-Medium": [
    {
      id: "red-med-1",
      title: "Checkout Without Forced Account Creation",
      description: "Redesign an e-commerce checkout that removed forced registration — and saw a $300M revenue lift.",
      problemStatement: "The 'forced account creation before checkout' is one of the most documented UX anti-patterns in history. Jared Spool's '$300 million button' case study came from exactly this problem. Yet in 2024, r/webdesign posts show hundreds of sites still force signup before purchase. Users abandon at 23% higher rates when forced to register. Guest checkout exists but is hidden below a large 'Create Account' CTA.",
      userPersona: "Chloe (31), a careful online shopper who resists creating accounts unless she already knows she'll return to a store. She abandons 2–3 carts per month at the login/registration wall.",
      goals: [
        "Make 'Continue as Guest' the primary, visually dominant option at checkout entry",
        "Offer account creation as an optional final step post-purchase ('Save your details for next time?')",
        "Reduce checkout drop-off rate at the registration step by at least 20%",
      ],
      constraints: [
        "Guest purchases must be retrievable by order ID + email (no account required for returns)",
        "Order confirmation must arrive within 60 seconds of purchase",
        "Must still support loyalty points accrual — optional account link post-purchase",
      ],
    },
    {
      id: "red-med-2",
      title: "Notification Permission Request Redesign",
      description: "Design the pre-permission flow that stops apps from burning their one-shot at push notifications.",
      problemStatement: "r/mildlyinfuriating is full of apps that ask for push notification permission the instant the app opens — before the user has seen a single piece of value. iOS only gives you one shot; if the user taps 'Don't Allow', you can never ask again. Data shows 81% of users deny permission when asked on first launch. Apps that prime with a custom pre-prompt screen first see 3× higher opt-in rates.",
      userPersona: "Marcus (25), a heavy smartphone user who has blanket-denied push notifications on 90% of apps. He would have allowed them on apps he uses daily if they'd asked at the right moment.",
      goals: [
        "Design a pre-prompt screen explaining the value of notifications before the OS dialog fires",
        "Trigger the pre-prompt only after the user's first meaningful success moment",
        "Offer granular control: 'Daily summary', 'Only when I'm mentioned', 'Everything'",
      ],
      constraints: [
        "The native OS dialog is the true permission gate — cannot be replaced, only preceded",
        "Pre-prompt must not feel like a bait-and-switch (be honest about notification frequency)",
        "Users who choose 'Not now' on the pre-prompt must be re-asked after 2 weeks, not daily",
      ],
    },
    {
      id: "red-med-3",
      title: "Job Application Portal UX Overhaul",
      description: "Fix the ATS experience that r/cscareerquestions calls 'soul-crushing' — where applicants copy-paste their CV line by line.",
      problemStatement: "Every week, r/cscareerquestions features posts with hundreds of upvotes about Workday, Taleo, and iCIMS portals asking candidates to upload a CV and then manually re-enter every field from it. Sessions average 45 minutes for what should take 5. One viral post: 'Just spent 90 minutes applying for a role. The portal crashed on the final submit. My data was gone.' Drop-off rates on multi-step ATS applications exceed 60%.",
      userPersona: "Leila (27), a UX designer (ironically) applying to 15+ roles. She screenshots ATS error messages to vent on Reddit because the irony of bad UX in design job applications is unbearable.",
      goals: [
        "Auto-parse uploaded CV to pre-fill all form fields — user only corrects, not re-enters",
        "Auto-save progress every 30 seconds — no data loss on crash or accidental navigation",
        "Progress indicator showing how many sections remain and estimated time to complete",
      ],
      constraints: [
        "ATS backend data model cannot be altered — this is a UI layer redesign only",
        "CV parsing has ~85% accuracy — flag low-confidence fields for manual review",
        "Must be fully keyboard-accessible — many candidates use screen readers",
      ],
    },
  ],

  "Reddit-Hard": [
    {
      id: "red-hard-1",
      title: "Subscription Cancellation Dark Pattern Audit",
      description: "Redesign a subscription product's cancellation flow, replacing every dark pattern with an ethical alternative.",
      problemStatement: "r/mildlyinfuriating's 'roach motel' posts — easy to subscribe, impossible to cancel — go viral weekly. Common patterns: cancel buried 5 levels deep in settings, 'pause' offered as the only visible option, countdown timers creating false urgency, guilt-tripping copy ('Are you sure? You'll lose ALL your data'), and cancellation calls that put you on hold. The FTC has begun fining companies for these patterns.",
      userPersona: "Alex (33), a subscription-fatigued millennial who has $200/month in forgotten subscriptions. He recently spent 47 minutes trying to cancel a gym app subscription and ended up disputing the charge with his bank instead.",
      goals: [
        "Cancellation reachable within 2 clicks from any screen (settings entry visible, not buried)",
        "Replace every dark pattern: no guilt language, no fake urgency, no hidden 'pause' traps",
        "Design an ethical retention moment: offer a genuine alternative (pause, downgrade, discount) — once, with a clear 'No thanks, cancel' that is equally prominent",
      ],
      constraints: [
        "Retention offer can be shown once — if declined, proceed directly to cancellation confirmation",
        "Cancellation must be instant — no 'our team will process this in 5–7 days' delays",
        "Audit report: document each dark pattern replaced and the ethical alternative used",
      ],
    },
    {
      id: "red-hard-2",
      title: "CAPTCHA Accessibility Redesign",
      description: "Replace image-based CAPTCHAs with an accessible, effective alternative that doesn't punish users with disabilities.",
      problemStatement: "r/blind and r/disability regularly share how traditional image CAPTCHAs (reCAPTCHA v2, hCaptcha) are effectively gatekeeping tools that exclude users with visual impairments, motor disabilities, and cognitive differences. Audio CAPTCHAs are frequently distorted beyond comprehension. Meanwhile, bot operators use AI to solve visual CAPTCHAs in milliseconds. The technology actively hurts real users while failing to stop bots.",
      userPersona: "Diana (38), a screen reader user who cannot complete 1 in 3 online forms due to CAPTCHA failures. She uses a keyboard exclusively and cannot interact with grid-selection challenges.",
      goals: [
        "Design a CAPTCHA-free verification flow using honeypot fields, behavioural analysis, and time-on-page signals",
        "Fallback: accessible challenge that works with screen readers and keyboard-only navigation",
        "False positive rate under 0.1% — legitimate users must never be blocked",
      ],
      constraints: [
        "No image-grid challenges — must be fully operable by keyboard and screen reader",
        "Invisible verification (Cloudflare Turnstile model) preferred — challenge only triggered on suspicion",
        "Must hold up against OWASP automated threat model TA-OAT-009",
      ],
    },
    {
      id: "red-hard-3",
      title: "Form Validation & Error Recovery System",
      description: "Redesign the error experience for a complex multi-step form — so users fix mistakes, not abandon the page.",
      problemStatement: "A recurring r/webdesign thread: 'Why do forms clear all your data when you make a mistake?' Complex forms (tax filing, insurance, visa applications) validate on submit and then wipe all fields, or highlight 12 errors with no indication of which to fix first. One r/IRS post about the FAFSA form garnered 4k upvotes: 'It cleared my entire application because my SSN had a typo on page 6.'",
      userPersona: "Sandra (52), completing a government grant application online. She spent 2 hours filling 6 sections. On submit, 3 fields were flagged as invalid. The page refreshed and sections 4–6 were blank.",
      goals: [
        "Inline validation on blur (when user leaves a field) — not on submit",
        "Error summary at the top that links directly to each problem field",
        "Auto-save after each section so a page refresh never loses more than 60 seconds of work",
      ],
      constraints: [
        "Validation rules are set by backend — UI must consume and surface them, not redefine them",
        "Multi-step form state must persist across browser sessions (not just tab)",
        "Error messages must be written in plain language — no error codes, no jargon",
      ],
    },
  ],

  // ─── SUBSTACK ─────────────────────────────────────────────────────────────
  // Briefs sourced from real problems discussed in design and tech newsletters
  // on Substack: NN/g, Growth.Design, Dense Discovery, Subtract, UX Collective

  "Substack-Easy": [
    {
      id: "sub-easy-1",
      title: "Newsletter Subscribe Modal Redesign",
      description: "Redesign the intrusive email capture modal that Growth.Design calls 'the UX equivalent of a mugger'.",
      problemStatement: "Designers at Growth.Design and UX Collective have documented the subscribe-modal antipattern extensively: a full-screen overlay fires 2 seconds after page load, before the user has read a single word. The close button is an 8px 'X' in the corner. On mobile, the modal covers the entire screen with no scroll. Result: 94% dismiss rate and 60% of users who dismiss never return. The irony: these modals appear most aggressively on design and UX newsletters.",
      userPersona: "Priya (29), a design researcher who reads 8 Substack newsletters. She unsubscribed from 3 purely because the subscribe modals were hostile. She now uses a reader app specifically to avoid website UX.",
      goals: [
        "Trigger subscribe prompt only after a user has read >60% of an article (scroll depth)",
        "Offer a dismissible inline banner rather than a page-blocking overlay",
        "A/B test: non-modal inline CTA at article bottom vs. triggered slide-in — with conversion data",
      ],
      constraints: [
        "Must not intercept the reading experience during scroll",
        "Mobile: banner occupies max 15% of viewport height",
        "Respect 'Do Not Track' headers — no modal for users who have opted out",
      ],
    },
    {
      id: "sub-easy-2",
      title: "Long-Form Reading Progress & Bookmarking",
      description: "Design reading continuity tools for a long-form newsletter platform where articles average 4,000 words.",
      problemStatement: "Writers on Substack and similar platforms have discussed in their newsletters that readers frequently start articles, get interrupted, and never find their place again. Dense Discovery's Kai Brach wrote that his most-read articles also had the lowest completion rates — not because of content quality, but because there was no way to return to where you left off. Readers restart from the top or give up.",
      userPersona: "James (44), a professional who reads 6–8 long-form newsletters weekly. He reads during commutes and lunch breaks in 5–10 minute windows. He estimates he finishes only 30% of articles he starts.",
      goals: [
        "Auto-save reading position per article — resume exactly where you left off on any device",
        "Estimated reading time displayed at article top with 'Continue from 4 min remaining'",
        "Highlight + bookmark passages to export or revisit later",
      ],
      constraints: [
        "Position sync works without requiring a user account (anonymous via device fingerprint for free tier)",
        "Must not affect page performance — reading position saved asynchronously",
        "Bookmarks exportable as a clean text file or sent to email",
      ],
    },
    {
      id: "sub-easy-3",
      title: "Ethical Email Unsubscribe Flow",
      description: "Replace the guilt-tripping unsubscribe experience with one that respects readers and actually improves retention.",
      problemStatement: "Several Substack writers have published data showing that hostile unsubscribe flows — guilt-copy ('We'll be devastated to lose you 😢'), hidden links, re-confirm popups, and delayed processing — actually increase spam complaints more than they reduce unsubscribes. The problem is documented in newsletters like Really Good Emails and Email on Acid: unsubscribe friction correlates with higher block rates, not better retention.",
      userPersona: "Nina (34), a newsletter reader who manages a carefully curated inbox. When she unsubscribes, she's made a deliberate decision. Guilt-tripping makes her mark the sender as spam instead — the worst outcome for the creator.",
      goals: [
        "One-click unsubscribe from the email footer — no login required, immediate",
        "Optional single-question exit survey ('Too frequent / Not relevant / Just cleaning up') with no required fields",
        "Confirmation page offers a 'pause for 30 days' alternative — presented neutrally, not as the primary CTA",
      ],
      constraints: [
        "CAN-SPAM and GDPR compliant — unsubscribe must process within 10 business days (aim for instant)",
        "No pre-ticked 'Keep me on the weekly digest' checkbox after unsubscribing from daily",
        "Unsubscribe link must be in 14pt font minimum in the email footer",
      ],
    },
  ],

  "Substack-Medium": [
    {
      id: "sub-med-1",
      title: "Newsletter Discovery Platform",
      description: "Design a credible discovery experience to help readers find newsletters worth following, modelled on real curation discussions from Substack writers.",
      problemStatement: "Substack writers regularly discuss in their newsletters the platform's discovery problem — it's almost impossible for new writers to be found, and readers have no meaningful way to browse beyond what they already follow. 'The algorithm rewards the already-famous,' writes one popular newsletter. New writers with exceptional content go unread for years. Reader-curated recommendation threads on Twitter/X have more discovery value than Substack's own browse page.",
      userPersona: "Rachel (31), an avid newsletter reader who wants to expand beyond her current 12 subscriptions. She spends 30 minutes a week asking peers for recommendations — a signal that the platform's own discovery fails her.",
      goals: [
        "Reader-curated lists: 'Newsletters I'd recommend to a friend in UX design'",
        "Quality signals beyond subscriber count: reader retention rate, article completion rate, response rate",
        "Cross-newsletter recommendation: 'Readers of Dense Discovery also read...'",
      ],
      constraints: [
        "No algorithmic black box — surface the ranking criteria transparently",
        "Discovery must work for newsletters with fewer than 500 subscribers (early-stage creators)",
        "Recommendation engine must not homogenise content — protect niche voices",
      ],
    },
    {
      id: "sub-med-2",
      title: "Creator Monetisation Dashboard",
      description: "Design the analytics and subscriber intelligence dashboard for independent newsletter writers trying to convert free to paid.",
      problemStatement: "Newsletter writers who've written about building a paid business consistently cite the same gap: they know their open rates and subscriber count, but they have no idea which articles drive paid conversions, which free subscribers are likely to upgrade, or what the right time to pitch a subscription is. 'I'm flying blind on revenue,' writes one writer with 8,000 subscribers. Conversion rates from free to paid are 2–5% on most platforms — data-driven writers hit 8–12%.",
      userPersona: "Dani (36), writes a weekly design newsletter with 5,200 free subscribers and 87 paid. She publishes consistently but doesn't know which content her paid subscribers value most or why others haven't converted.",
      goals: [
        "Identify the 'conversion moment' — which articles preceded the most free-to-paid upgrades",
        "Subscriber engagement score: who reads everything vs. who hasn't opened in 60 days",
        "Predicted churn list: paid subscribers at risk of cancellation based on engagement drop",
      ],
      constraints: [
        "Data must be presented without overwhelming — max 5 key metrics on the primary view",
        "No PII of individual subscribers displayed (engagement shown in aggregates, not per-person)",
        "Export to CSV for writers who use external tools like Notion or Airtable",
      ],
    },
    {
      id: "sub-med-3",
      title: "Comment & Discussion Redesign for Long-Form Content",
      description: "Redesign the comment experience on a long-form newsletter platform to enable genuine intellectual discussion, not just reactions.",
      problemStatement: "Substack writers discuss the comment section problem openly: the default threaded comment layout encourages shallow hot takes rather than substantive engagement. Writers like Robin Sloan and Craig Mod have written about turning off comments entirely because the signal-to-noise ratio was too low. Meanwhile, the most interesting discussions happen in email replies — invisible to everyone else. A better comment system could make newsletters more like communities.",
      userPersona: "Marco (39), a thoughtful reader who writes long email replies to newsletter authors but never posts in comment sections because they feel 'too Twitter'. He values discourse, not performance.",
      goals: [
        "Paragraph-level comments: highlight any passage and leave a note in context",
        "Threaded discussion with character-minimum for top-level comments (300 chars) to encourage substance",
        "Writer can pin 3 comments as 'Notable replies' — surface the best thinking",
      ],
      constraints: [
        "Comments from free subscribers visible to all; paid subscriber comments marked with a visual distinction",
        "Comment notifications batched daily — not real-time (protects writer focus)",
        "Moderation tools for writers: keyword filters, one-click hide, ban without notification",
      ],
    },
  ],

  "Substack-Hard": [
    {
      id: "sub-hard-1",
      title: "Cross-Platform Reading Continuity",
      description: "Design a seamless reading experience that works across email, web, and mobile app — without forcing users to choose one.",
      problemStatement: "Multiple Substack writers have documented reader feedback: 'I read your newsletter in email, clicked a link to the web version, and now I'm lost and can't find my way back to the email.' The email-to-web handoff is broken. Articles opened from email don't remember authentication state, don't sync reading position, and don't connect to the reader's saved history on the app. The result is three fractured reading experiences that feel like three different products.",
      userPersona: "Sophie (33), reads newsletters in three contexts: morning email on phone, web during lunch on desktop, mobile app in evenings. She currently has no way to pick up where she left off across these contexts.",
      goals: [
        "Email link → web: auto-authenticate reader and resume reading position if >50% was read elsewhere",
        "Unified reading history across email, web, and app — one continuous timeline",
        "Offline-capable mobile app: articles pre-fetched when on WiFi for later reading",
      ],
      constraints: [
        "Email clients don't support JavaScript — cross-context sync requires server-side state",
        "Anonymous readers (no account) get reading position sync on a single device only",
        "Apple Mail Privacy Protection invalidates open-tracking pixels — design around this limitation",
      ],
    },
    {
      id: "sub-hard-2",
      title: "Independent Writer Business Suite",
      description: "Design an all-in-one business management interface for full-time independent newsletter writers managing $100k+ annual revenue.",
      problemStatement: "Newsletter writers who've grown to full-time income write about having to stitch together Substack, Stripe, ConvertKit, Notion, Google Analytics, and a spreadsheet to run their business. 'I spend 8 hours a week on business admin that should take 1,' writes a writer with 15k subscribers and $180k ARR. There is no single tool designed for the full-time independent writer — only fragmented point solutions.",
      userPersona: "Elena (41), a full-time independent journalist with 20k subscribers and $200k ARR from subscriptions, sponsorships, and courses. She has a VA who spends 15 hours/month on admin that should be automated.",
      goals: [
        "Revenue dashboard: subscriptions + sponsorships + courses in one P&L view",
        "Sponsor CRM: track pitches, contracts, deliverables, and payment status per sponsor",
        "Tax-ready export: monthly revenue reports formatted for accountant hand-off",
      ],
      constraints: [
        "Must pull data from Stripe (subscriptions), PayPal (one-off), and bank CSV (manual income)",
        "Sponsor contract templates must be customisable but legally reviewed",
        "Data retention: 7 years of financial records for tax compliance",
      ],
    },
    {
      id: "sub-hard-3",
      title: "Newsletter Collaborative Editing & Editorial Workflow",
      description: "Design the editorial and publishing workflow for newsletter teams of 2–10 people, a gap several established Substack writers have publicly flagged.",
      problemStatement: "As newsletters scale to teams, writers on Substack have posted about collaborative editing being their top pain point. 'We're writing our newsletter in a shared Google Doc, pasting into Substack manually, losing formatting, and there's no version history on the final post,' wrote one team newsletter with 80k subscribers. There is no native multi-author workflow, no editorial calendar, and no draft review process — everything happens outside the platform.",
      userPersona: "The editorial team at a 3-person newsletter: a lead writer, an editor, and a researcher. They publish 3x per week. Currently their workflow is: Google Docs → Slack → copy-paste into Substack → lose formatting → fix manually → publish. Every issue takes 2 extra hours for formatting recovery alone.",
      goals: [
        "Native multi-author drafts with inline comments and suggestion mode",
        "Editorial calendar: planned issues, deadlines, assigned authors, and review status in one view",
        "One-click import from Google Docs preserving headings, links, images, and code blocks",
      ],
      constraints: [
        "Version history: at minimum 30-day rollback on any draft",
        "Permission roles: Editor (publish), Writer (draft only), Reviewer (comment only)",
        "Editorial calendar must sync to Google Calendar and export as iCal",
      ],
    },
  ],

  // ─── OTHERS ───────────────────────────────────────────────────────────────
  // Universal UX challenges that surface across communities and industries

  "Others-Easy": [
    {
      id: "oth-easy-1",
      title: "Empty State Design System",
      description: "Design a comprehensive set of empty states for a productivity app — turning dead ends into helpful starting points.",
      problemStatement: "Empty states are the most neglected screen in most product design sprints. When a user has no tasks, no files, no messages, or no results, the default response is a blank white screen. This is a missed opportunity: the empty state is often a new user's first interaction with a feature, and the blank screen communicates 'nothing here' instead of 'here's what to do next'.",
      userPersona: "Maya (25), a new user of a project management tool. She created an account, reached the dashboard, saw a blank screen, and wasn't sure if something was broken or if she needed to do something.",
      goals: [
        "Design empty states for 6 core scenarios: no tasks, no results, no notifications, no files, no connections, and error/failed load",
        "Each empty state includes: illustration, headline, explanation, and a primary CTA",
        "Tone: friendly and instructive, not clinical or apologetic",
      ],
      constraints: [
        "Illustrations must be SVG (scalable, theme-aware for dark mode)",
        "Copy must be written by a UX writer — no Lorem Ipsum in deliverables",
        "Each empty state should load in under 200ms — no heavy assets",
      ],
    },
    {
      id: "oth-easy-2",
      title: "Settings Page Redesign",
      description: "Tame the settings dumping ground — redesign an app's settings into an organised, discoverable experience.",
      problemStatement: "Settings pages accumulate over years of product development, becoming a disorganised list of 60+ options with no hierarchy or grouping. Users can't find what they need, so they either give up or contact support. A competitor audit of B2B SaaS tools shows that 'can't find settings' accounts for 18% of support tickets that never should have been tickets.",
      userPersona: "Daniel (38), a power user of a project management tool who knows the feature he wants to configure exists but has spent 11 minutes searching through 4 settings sub-menus to find it.",
      goals: [
        "Group all settings into a maximum of 6 logical categories with clear labels",
        "In-settings search that highlights and scrolls to matching options",
        "Most-accessed settings surfaced in a 'Quick Access' section at the top",
      ],
      constraints: [
        "All existing settings must be retained — nothing can be removed",
        "Keyboard-navigable throughout (Tab to focus groups, Arrow keys within)",
        "Settings changes auto-save — no 'Save Changes' button that can be forgotten",
      ],
    },
    {
      id: "oth-easy-3",
      title: "Address Autocomplete Form",
      description: "Design a reliable, frustration-free address entry experience that works internationally.",
      problemStatement: "Address forms are among the most failed interactions in e-commerce and SaaS. Common failures: postcode lookup that doesn't work for rural areas, autocomplete that overwrites a correct address with a wrong one, UK addresses that require 'county' (optional but marked required), and no support for apartment/flat numbers. Returns and delivery failures cost e-commerce businesses an average of $14 per order.",
      userPersona: "Anya (30), a frequent online shopper in the UK who lives in a new housing development. Her postcode returns her building but not her apartment number, requiring her to fix the autocomplete output every single time.",
      goals: [
        "Postcode-first lookup with manual fallback when autocomplete fails",
        "Apartment/unit number as a clearly visible separate field — not an afterthought",
        "International: adapt required fields dynamically based on selected country (no 'State' for UK)",
      ],
      constraints: [
        "Works offline: previously entered addresses retrievable without network",
        "Accessibility: screen reader announces which field is active and what the current autocomplete suggestions are",
        "No data sharing with third-party address enrichment services without user consent",
      ],
    },
  ],

  "Others-Medium": [
    {
      id: "oth-med-1",
      title: "Zero-Results Search Redesign",
      description: "Design the recovery experience when a search returns no results — turning a dead end into a useful redirect.",
      problemStatement: "A zero-results search page is a conversion killer. Most sites show 'No results found' with no guidance. Studies show that 68% of users who see a zero-results page leave the site entirely. Yet this screen is almost never designed — it's an afterthought from engineering. The best search experiences use zero results as data: what did the user search for, what did they mean, and how can we get them there anyway?",
      userPersona: "Leo (28), searching an e-commerce site for 'running shoes waterproof'. The search returns zero results. He can see the site sells running shoes. He's not sure if 'waterproof running shoes' just aren't sold, or if the search doesn't understand natural language.",
      goals: [
        "Spell-check and suggest the most likely corrected query with one-click apply",
        "Fallback to related category browsing: 'We don't have that exact match — here's Running Shoes'",
        "Log zero-result searches to a product team dashboard (what are users looking for that we don't have?)",
      ],
      constraints: [
        "Zero-results page must load in under 1 second — no complex ML inference client-side",
        "Suggested alternatives must be genuinely relevant — no irrelevant 'you might like' padding",
        "Search query preserved in the input bar after submission",
      ],
    },
    {
      id: "oth-med-2",
      title: "Complex Tool Onboarding Flow",
      description: "Design the first-run experience for a powerful but complex tool so new users reach their first 'aha moment' before they churn.",
      problemStatement: "Feature-rich products (design tools, developer platforms, analytics suites) suffer from a common problem: they're built by experts, for experts, which makes them impenetrable for new users. The average SaaS product loses 40–60% of new signups in the first session. Yet onboarding is rarely designed with the same rigour as core features — it's added at the end of the sprint, if at all.",
      userPersona: "Fatima (29), a junior data analyst who just got access to a complex BI tool her company uses. She has 30 minutes before her first presentation using it. The welcome screen has 8 options and no clear start.",
      goals: [
        "Identify the single 'aha moment' for the tool and design the onboarding to reach it within 3 minutes",
        "Progressive disclosure: show only what's needed for the first task — hide advanced features until relevant",
        "Interactive walkthrough that teaches by doing, not by showing tooltips the user has to dismiss",
      ],
      constraints: [
        "Onboarding must be skippable (advanced users) but restartable (from Help menu)",
        "Zero assumptions about prior knowledge — assume the user has never seen the tool",
        "Onboarding data (sample datasets, demo workspace) must be deletable in one action",
      ],
    },
    {
      id: "oth-med-3",
      title: "Offline-First Mobile App Design",
      description: "Design a field-work app that functions seamlessly with no internet — and syncs gracefully when connectivity returns.",
      problemStatement: "Field workers (construction inspectors, delivery drivers, community health workers) use apps in areas with no reliable connectivity. Most apps show a loading spinner indefinitely or a generic 'No internet connection' error and become completely non-functional. The apps were designed assuming a constant connection — a luxury that doesn't exist in the field.",
      userPersona: "James (45), a building inspector who visits 8 sites per day. Half his site visits are in structures with no mobile signal. He currently carries a paper checklist because the digital app stops working underground.",
      goals: [
        "All core workflows functional offline: create, edit, and complete inspections without connectivity",
        "Background sync: automatically upload when connectivity resumes, with conflict resolution for edited records",
        "Connectivity status clearly communicated — 'Working offline, 3 reports queued to sync'",
      ],
      constraints: [
        "Local storage budget: max 200MB cached data (inspection forms, reference images, previous records)",
        "Conflict resolution: if a record was edited offline and also online by a colleague, show a clear diff and let the user decide",
        "Battery-efficient background sync — no constant polling when offline",
      ],
    },
  ],

  "Others-Hard": [
    {
      id: "oth-hard-1",
      title: "Multi-Step Form with Progress Persistence",
      description: "Design a 10-step government or enterprise form that preserves every input across sessions, devices, and browser crashes.",
      problemStatement: "Complex multi-step forms — visa applications, grant submissions, tax filings, insurance claims — are among the highest-stakes UX challenges in existence. The average form abandonment rate for forms with more than 10 fields is 70%. The primary causes: session timeout data loss, browser crash data loss, and no ability to resume on a different device. For government forms, this often means missing a legal deadline.",
      userPersona: "Sandra (54), completing a government business grant application. The form has 10 sections, requires 14 documents, and must be submitted before a fiscal-year deadline. She can only work on it in 20-minute windows between work calls.",
      goals: [
        "Auto-save every 60 seconds with explicit 'Saved at 2:47pm' timestamp visible",
        "Shareable resume link: email yourself a link that reopens the form at exactly the section you left",
        "Section-level completion: each of the 10 sections can be completed independently in any order",
      ],
      constraints: [
        "Data at rest encrypted — the form contains sensitive business financial information",
        "Session must survive 24-hour inactivity without data loss",
        "Resume link authentication: magic link via email, no password required",
      ],
    },
    {
      id: "oth-hard-2",
      title: "Legacy App WCAG 2.1 AA Accessibility Retrofit",
      description: "Systematically bring a 5-year-old enterprise application into WCAG 2.1 AA compliance without a full rebuild.",
      problemStatement: "Accessibility is consistently the last sprint item and the first cut. Enterprise tools used by thousands of employees daily regularly fail basic accessibility audits — small font sizes, click targets under 24px, missing ARIA labels, no keyboard navigation, 1.8:1 contrast ratios. When a company with 200 employees discovers that 12 of them cannot effectively use the primary internal tool, it's a liability, a legal exposure, and a human failure.",
      userPersona: "Brendan (31), a screen reader user who recently joined a company that uses an enterprise analytics tool. He cannot navigate the primary dashboard with his keyboard and VoiceOver announces every widget as 'unlabeled element'.",
      goals: [
        "Audit: identify every WCAG 2.1 AA failure and create a prioritised fix backlog",
        "Sprint 1 fixes: all interactive elements keyboard-accessible, all images have alt text, all form fields labelled",
        "Design new component library tokens: minimum 4.5:1 contrast for normal text, 3:1 for large text, 44×44px minimum tap targets",
      ],
      constraints: [
        "Existing visual design must be preserved where contrast allows — this is a retrofit, not a rebrand",
        "Fixes must be applied incrementally — no big-bang release, each PR improves accessibility independently",
        "Validation: test with NVDA + Chrome, VoiceOver + Safari, and keyboard-only after each sprint",
      ],
    },
    {
      id: "oth-hard-3",
      title: "Design System for a Multi-Brand Enterprise",
      description: "Build a single design system that serves 4 distinct product brands sharing an engineering foundation, without making everything look the same.",
      problemStatement: "Companies that acquire multiple products or serve multiple markets face a design system dilemma: build one system and risk brand homogenisation, or build four systems and multiply maintenance costs by four. The engineering team shares a component library, but each brand's design team has diverged into their own Figma files with 200+ component variants that don't map to code. Every product release involves manual reconciliation.",
      userPersona: "The design systems team at a 400-person company: 2 designers, 1 developer. They serve 4 product teams, each with 2–3 product designers who have different needs, brand guidelines, and technical constraints.",
      goals: [
        "Base layer: 40 core components with no brand-specific styling — pure function and structure",
        "Theme layer: each brand overrides only tokens (colours, radius, typography) — zero structural changes",
        "Contribution model: how product teams propose additions to the base layer, and the governance process",
      ],
      constraints: [
        "All 4 brands must pass WCAG 2.1 AA — token system must enforce minimum contrast at theme level",
        "Component API must be stable for 12 months — product teams cannot absorb breaking changes",
        "Figma and code must stay in sync — any token change in Figma auto-generates a PR in the design system repo",
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
