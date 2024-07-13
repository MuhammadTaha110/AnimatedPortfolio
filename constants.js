export const METADATA = {
  author: "M Babar Waseem",
  title: "Portfolio | M Babar Waseem",
  description:
    "M Babar Waseem is a passionate Full Stack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "M Babar Waseem",
    "Frontend Engineer",
    "Full Stack Developer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
  themeColor: "#000000",
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
  "I create aesthetic and modern apps",
  "A skilled Full Stack Developer",
  "Crafting seamless user experiences",
  "Passionate about cutting-edge technologies",
  "Transforming ideas into digital solutions",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: mbabarwaseem@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/muhammadbabarwaseem/",
  },
  {
    name: "github",
    url: "https://github.com/muhammadbabarwaseem",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/muhammadbabarwaseem/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "graphql",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "vite",
    "pusher",
    "firebase",
    "tensorflow",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "nestjs",
    "nextjs",
    "tailwindcss",
    "chakra-ui",
  ],
  databases: ["mysql", "postgresql", "mongodb", "redis"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Chat App",
    image: "/projects/ChatApp.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "A Advance and Scalable Chat App Using AES Encryption 🚀",
    gradient: ["#F14658", "#DC2537"],
    url: "https://aes-chat-app.vercel.app/",
    tech: ["nextjs", "tailwindcss", "redis", "pusher"],
  },
  {
    name: "Hotels By Day",
    image: "/projects/HBD.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A React Native App for Booking Hotels 🚀",
    // 
    gradient: ["#62cff4", "#2c67f2"],
    url: "https://play.google.com/store/apps/details?id=com.hotelsbyday.app&hl=en&pli=1",
    tech: ["react", "firebase", "javascript", "css"],
  },
  {
    name: "Zindabhag",
    image: "/projects/ZB.jpeg",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Zindabhag WebApp Using MERN Stack 📰",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://zindabhag.com/",
    tech: ["typescript", "react", "nodejs", "tailwindcss", "mysql"],
  },
  {
    name: "NextJS Object Detection",
    image: "/projects/ObjectDetection.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "NextJS Object Detection Using ShadCN, Tensorflow.js and Coco-ssd Model 🚀",
    gradient: ["#000066", "#6699FF"],
    url: "https://nextjs-object-detection.onrender.com/",
    tech: ["nextjs", "tailwindcss", "tensorflow", "react"],
  },
  {
    name: "CatStronaut",
    image: "/projects/CatStronaut.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A CatStronaut WebApp Using React and GraphQL 🚀",
    gradient: ["#142D46", "#2E4964"],
    url: "https://lift-off-client-demo.netlify.app/",
    tech: ["react", "graphql", "typescript", "chakra-ui"],
  },
];

export const WORK_CONTENTS = {
  GEEKSOFKOLACHI: [
    {
      title: "Geeks Of Kolachi",
      description: "A company focused on innovative software solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing software development, one line of code at a time.
        </div>
      ),
    },
    {
      title: "Frontend Development",
      description:
        "As an Associate Software Engineer, I focus on frontend development using TypeScript, React, GraphQL, Next.js, and React Native. My specialization in clean and maintainable code ensures optimal user experiences. With expertise in TypeScript, I contribute to robust codebases and efficient data management using MongoDB.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Associate Software Engineer
        </div>
      ),
    },
    {
      title: "Internship Experience",
      description:
        "During my internship, I engaged with a dynamic range of technologies, including TypeScript, Next.js, and React Native. I gained practical experience across multiple fronts and contributed to projects involving seamless user experiences spanning various platforms.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],

  SHARYNG: [
    {
      title: "Sharyng.ai",
      description:
        "A platform aimed at enhancing user experience and functionality through innovative mobile applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Innovating user interactions, one app at a time.
        </div>
      ),
    },
    {
      title: "Mobile Application Development",
      description:
        "As a Software Engineer (Contract) from October 2023 to March 2024, I developed a cross-platform mobile application using React Native. Key achievements include implementing seamless photo uploads, integrating basic face recognition for user identity verification, designing an integrated gallery feature for managing bulk photos, enabling file sharing for various types, and developing a QR code scanner feature.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Software Engineer – Contract
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
