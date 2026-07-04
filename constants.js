import WorkLogoPanel from "@/components/Work/WorkLogoPanel/WorkLogoPanel";
import WorkRolePanel from "@/components/Work/WorkRolePanel/WorkRolePanel";

export const METADATA = {
  author: "Muhammad Taha Talib",
  title: "Portfolio | Muhammad Taha Talib",
  description:
    "Muhammad Taha Talib is a Full-Stack Software Engineer with 2+ years shipping production Next.js/React/TypeScript applications and Node.js backends. Founder & Lead Architect of TestHub.",
  siteUrl: "https://github.com/MuhammadTaha110",
  keywords: [
    "Muhammad Taha Talib",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "TestHub",
    "Portfolio",
    "Karachi",
  ].join(", "),
  language: "English",
  themeColor: "#3136ff",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I ship production Next.js & React apps",
  "Founder & Lead Architect of TestHub",
  "Focused on clean component architecture",
  "2+ years building scalable full-stack products",
  "Winner of two frontend hackathons at Zab-E-Fest",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:mtahatalib110@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/mtahatalib",
  },
  {
    name: "github",
    url: "https://github.com/MuhammadTaha110",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "typescript",
    "javascript",
    "html",
    "css",
    "git",
    "python",
    "github",
  ],
  librariesAndFrameworks: [
    "nextjs",
    "react",
    "tailwindcss",
    "nodejs",
    "expressjs",
    "chakra-ui",
  ],
  databases: ["postgresql", "mongodb", "sql"],
  other: ["vite", "webpack", "tanstack-query", "aws"],
};

export const SKILL_ICON_SRC = {
  sql: "/skills/sql.png",
  aws: "/awslogo.png",
};

export const GITHUB_ICON_SRC = {
  light: "/skills/github-light.png",
  dark: "/skills/github-dark.svg",
};

export const getSkillIconSrc = (skill, isDark = false) => {
  if (skill === "github") {
    return isDark ? GITHUB_ICON_SRC.dark : GITHUB_ICON_SRC.light;
  }

  if (isDark && skill === "nodejs") {
    return "/skills/nodejs-dark.svg";
  }

  if (isDark && skill === "expressjs") {
    return "/skills/expressjs-dark.svg";
  }

  return SKILL_ICON_SRC[skill] ?? `/skills/${skill}.svg`;
};

export const PROJECTS = [
  {
    name: "TestHub",
    image: "/projects/TestHub.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description:
      "Founded & architected a live SaaS QA platform for test plans, test cases, bug tracking, and team collaboration — Winner, Best FYP Idea at Zab-E-Fest 2026. 🚀",
    gradient: ["#1e40af", "#3b82f6"],
    url: "https://testhubbeta.netlify.app",
    tech: ["nextjs", "typescript", "javascript", "tailwindcss", "expressjs", "mongodb"],
  },
  {
    name: "ExBoard AI",
    image: "/projects/ExBoardAI.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description:
      "AI-powered AKUEB board exam prep platform with past papers, instant AI marking, handwritten answer grading, and competitive leaderboards. 🎓",
    gradient: ["#14532d", "#22c55e"],
    url: "https://exboardai.netlify.app",
    tech: ["nextjs", "typescript", "javascript", "tailwindcss", "postgresql"],
  },
  {
    name: "Meerento",
    image: "/projects/Meerento.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description:
      "All-in-one business platform for inventory management, online storefronts, professional invoicing, and real-time revenue analytics. 💼",
    gradient: ["#4c1d95", "#7c3aed"],
    url: "https://meerento.netlify.app",
    tech: ["react", "typescript", "javascript", "tailwindcss", "expressjs"],
  },
  {
    name: "Medtrixo",
    image: "/projects/Medtrixo.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description:
      "AI-powered health recruiter connecting doctors and hospitals with smart job matching, CV builder, video profiles, and real-time analytics. 🏥",
    gradient: ["#b91c1c", "#ef4444"],
    url: "https://www.medtrixo.com",
    tech: ["nextjs", "typescript", "javascript", "tailwindcss", "postgresql"],
  },
  {
    name: "Do Something Else",
    image: "/projects/DoSomethingElse.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description:
      "Career inspiration platform helping professionals discover AI risk scores, future-proof roadmaps, and personalized career transitions in a post-AI world. 🧭",
    gradient: ["#1d4ed8", "#3b82f6"],
    url: "https://www.dosomethingelse.ai",
    tech: ["nextjs", "typescript", "javascript", "tailwindcss", "postgresql"],
  },
];

export const WORK_CONTENTS = {
  GEEKSOFKOLACHI: [
    {
      title: "Geeks of Kolachi",
      description:
        "Karachi-based software company focused on delivering innovative, production-ready client products. Jun 2024 – Present · Karachi.",
      content: (
        <WorkLogoPanel
          href="https://geeksofkolachi.com/"
          logoSrc="/work/geeksofkolachi.png"
          logoAlt="Geeks of Kolachi"
          label="geeksofkolachi.com"
        />
      ),
    },
    {
      title: "Associate Software Engineer",
      description:
        "Architected and shipped 10+ responsive, pixel-perfect Next.js/React/TypeScript interfaces for production client products, cutting UI-to-integration handoff time with a reusable component library.",
      content: <WorkRolePanel title="Associate Software Engineer" />,
    },
    {
      title: "Performance & Integration",
      description:
        "Refactored state management and rendering logic to reduce page load time and eliminate cross-browser bugs. Partnered with backend engineers on RESTful APIs backed by PostgreSQL and MongoDB.",
      content: <WorkRolePanel title="Full-Stack Delivery" />,
    },
  ],

  FREELANCE: [
    {
      title: "Freelance",
      description:
        "Self-employed full-stack development for local and international clients across the full project lifecycle.",
      content: (
        <WorkRolePanel title="Freelance" subtitle="May 2022 – Present · Remote" />
      ),
    },
    {
      title: "Full-Stack Web Developer",
      description:
        "Delivered end-to-end web projects independently — from requirements gathering and architecture through development and deployment.",
      content: <WorkRolePanel title="Full-Stack Web Developer" />,
    },
    {
      title: "Client Outcomes",
      description:
        "Built custom Next.js/React applications and WordPress sites with theme customization and plugin configuration, achieving a 95% average client satisfaction and repeat-business rate.",
      content: <WorkRolePanel title="End-to-End Ownership" />,
    },
  ],

  SMIT: [
    {
      title: "Saylani SMIT",
      description:
        "Saylani Mass IT Training — intensive full-stack program covering hybrid web and mobile development. Feb 2023 – Oct 2024 · Karachi.",
      content: (
        <WorkLogoPanel
          href="https://www.saylanimit.com/"
          logoSrc="/work/smit.png"
          logoAlt="Saylani Mass IT Training"
          label="saylanimit.com"
        />
      ),
    },
    {
      title: "Web & Mobile Development Intern",
      description:
        "Completed an intensive full-stack training program, building hybrid web and mobile projects using JavaScript and React.js under senior engineer mentorship.",
      content: <WorkRolePanel title="Development Intern" />,
    },
    {
      title: "Foundation Building",
      description:
        "Designed relational and NoSQL data models and secure API integrations, establishing the full-stack foundation applied across subsequent professional roles.",
      content: <WorkRolePanel title="Full-Stack Training" />,
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
