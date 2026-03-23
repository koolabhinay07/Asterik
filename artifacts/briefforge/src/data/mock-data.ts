export const INDUSTRIES = [
  "Fintech", "Healthcare", "E-commerce", "AI", "EdTech", "Travel", "Social"
] as const;

export const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;

export const PLATFORMS = ["Mobile", "Web", "Cross-Platform"] as const;

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
  deliverables: string[];
}

export const FEATURED_BRIEFS: Brief[] = [
  {
    id: "1",
    title: "Mobile Banking Onboarding Redesign",
    industry: "Fintech",
    difficulty: "Hard",
    platform: "Mobile",
    description: "Redesign the onboarding experience for a digital-first bank to reduce drop-offs during KYC.",
    problemStatement: "The current onboarding process for 'NovaBank' has a 45% drop-off rate during the identity verification (KYC) step. Users find the process intimidating, confusing, and overly lengthy.",
    userPersona: "Sarah (28), a busy professional who wants a hassle-free way to open a secondary checking account for her freelance income.",
    goals: [
      "Increase onboarding completion rate by 20%",
      "Reduce time-to-completion from 8 minutes to 3 minutes",
      "Establish trust during the document scanning phase"
    ],
    constraints: [
      "Must include legal disclaimers and terms of service",
      "Identity verification requires front/back ID scan + selfie",
      "Adhere to strict AA accessibility guidelines"
    ],
    deliverables: [
      "User flow diagram",
      "High-fidelity wireframes of the onboarding flow",
      "Interactive prototype of the KYC steps"
    ]
  },
  {
    id: "2",
    title: "Patient Dashboard for Chronic Care",
    industry: "Healthcare",
    difficulty: "Medium",
    platform: "Web",
    description: "Design a desktop dashboard for patients managing type 2 diabetes to track their daily metrics.",
    problemStatement: "Patients with type 2 diabetes struggle to visualize how their diet, medication, and glucose levels correlate over time, leading to poor disease management.",
    userPersona: "David (55), recently diagnosed, somewhat tech-savvy but easily overwhelmed by dense medical jargon.",
    goals: [
      "Provide clear, actionable insights from daily data logs",
      "Create an intuitive input system for meals and glucose readings",
      "Facilitate easy data sharing with primary care physicians"
    ],
    constraints: [
      "HIPAA compliance implies strict privacy modes",
      "Must optimize for older screens/browsers common in clinical settings",
      "Visual hierarchy must accommodate low-vision users"
    ],
    deliverables: [
      "Dashboard layout strategy",
      "Component library for data visualization (charts/graphs)",
      "High-fidelity mockup of the main overview page"
    ]
  },
  {
    id: "3",
    title: "AI-Powered Product Discovery",
    industry: "E-commerce",
    difficulty: "Medium",
    platform: "Mobile",
    description: "Integrate a conversational AI assistant into an existing fashion retail app.",
    problemStatement: "Users often abandon searches when they can't find specific styles using traditional keyword filters. The retailer wants to introduce a conversational UI to act as a 'personal stylist'.",
    userPersona: "Mia (22), fashion-conscious shopper looking for specific outfits for an upcoming destination wedding.",
    goals: [
      "Design a natural entry point for the AI assistant",
      "Create a chat interface that supports rich media (images, product cards)",
      "Ensure a graceful fallback if the AI misunderstands the query"
    ],
    constraints: [
      "Must integrate seamlessly into the existing app's design system",
      "Loading states must mask AI response latency (up to 3 seconds)"
    ],
    deliverables: [
      "Chatbot interaction flow",
      "UI components for conversational product recommendations",
      "Prototyped happy path of a successful search and add-to-cart"
    ]
  },
  {
    id: "4",
    title: "Personalized Learning Paths",
    industry: "EdTech",
    difficulty: "Hard",
    platform: "Cross-Platform",
    description: "A platform that adapts course material based on a student's real-time performance.",
    problemStatement: "Adult learners in self-paced bootcamps lose motivation when content is too difficult or get bored when it's too easy. The system needs to dynamically adjust and visually communicate their tailored path.",
    userPersona: "James (34), transitioning into tech, studying part-time after work, needs to see clear progress to stay motivated.",
    goals: [
      "Visualize the adaptive curriculum map",
      "Design a non-demotivating intervention state when a user struggles",
      "Gamify progress without making it feel juvenile"
    ],
    constraints: [
      "Pathways can branch infinitely; UI must handle complex nested nodes",
      "Mobile view must condense large syllabus maps effectively"
    ],
    deliverables: [
      "Responsive layout mapping",
      "High-fidelity mockups for desktop and mobile",
      "Micro-interaction designs for unlocking new modules"
    ]
  },
  {
    id: "5",
    title: "Travel Expense Tracker",
    industry: "Travel",
    difficulty: "Easy",
    platform: "Mobile",
    description: "A simple app for groups to track and split shared expenses during a trip.",
    problemStatement: "Group trips often result in messy, disjointed accounting on spreadsheets or notes apps, causing friction when it's time to settle up.",
    userPersona: "Chloe (26), the designated 'planner' for her friend group of 6, wants an easy way to log costs on the go.",
    goals: [
      "Quick entry form for adding an expense with a receipt photo",
      "Clear visualization of 'who owes who'",
      "Support multiple currencies with real-time conversion"
    ],
    constraints: [
      "App must work primarily offline due to roaming data limits",
      "Inputs must be large and tappable for on-the-go usage"
    ],
    deliverables: [
      "Information architecture",
      "Wireframes for the core 3 screens",
      "High-fidelity UI of the 'Settle Up' flow"
    ]
  },
  {
    id: "6",
    title: "Mental Health Check-in Mini App",
    industry: "Healthcare",
    difficulty: "Easy",
    platform: "Mobile",
    description: "A standalone widget inside a larger wellness app for daily mood logging.",
    problemStatement: "Users forget to log their mood. The process needs to be completely frictionless, taking less than 10 seconds, while still capturing meaningful emotional data.",
    userPersona: "Liam (30), deals with mild anxiety, wants a low-effort way to spot mood trends over weeks.",
    goals: [
      "Design a 10-second interaction loop",
      "Use color and micro-animations to reflect emotional states",
      "Encourage streaks without guilt-tripping missed days"
    ],
    constraints: [
      "Minimal text; rely on iconography and sliders/gestures",
      "Must adhere strictly to the parent app's soft, calming brand guidelines"
    ],
    deliverables: [
      "Gesture-based interaction design",
      "High-fidelity mockups",
      "Framer/ProtoPie animation demonstrating the 'log successful' state"
    ]
  }
];

export function generateMockBrief(industry: string, difficulty: string, platform: string): Brief {
  // Find a matching brief, or return a dynamically constructed one if no exact match
  const match = FEATURED_BRIEFS.find(
    b => b.industry === industry && b.difficulty === difficulty
  );

  if (match) {
    return { ...match, platform };
  }

  // Generate a plausible mock based on inputs
  return {
    id: `gen-${Date.now()}`,
    title: `${industry} ${platform} Experience`,
    industry,
    difficulty: difficulty as "Easy" | "Medium" | "Hard",
    platform,
    description: `A ${difficulty.toLowerCase()} difficulty UX challenge focusing on designing a ${platform.toLowerCase()} solution for the ${industry} sector.`,
    problemStatement: `Companies in the ${industry} space are struggling to provide a seamless ${platform} experience. Users report high friction and low satisfaction when attempting core tasks. Your goal is to reimagine the primary user flow to maximize engagement and reduce cognitive load.`,
    userPersona: `Alex (32), a typical user in the ${industry} demographic who expects fast, intuitive, and modern digital experiences.`,
    goals: [
      "Improve the core conversion metric by 15%",
      `Optimize the layout specifically for ${platform} usage`,
      "Establish a modern, trustworthy visual identity"
    ],
    constraints: [
      "Must utilize standard native UI components where possible",
      "Accessibility standard WCAG 2.1 AA must be met",
      "Assume a slow network connection as the baseline"
    ],
    deliverables: [
      "Core user flow diagram",
      "3-5 high-fidelity key screens",
      "A brief design rationale (max 250 words) explaining your choices"
    ]
  };
}
