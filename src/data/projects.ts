export type Project = {
  id: string;
  title: string;
  stack: string[];
  summary: string;
  duration: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  contributions: string[];
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "dvmbr.github.io (Side Project)",
    stack: ["Astro", "TypeScript", "React", "Tailwind CSS", "MDX"],
    summary:
      "Personal portfolio website built with Astro, optimized for static content and maintainability.",
    duration: "2026.04 - Present",
    overview:
      "Designed and developed a personal portfolio website using Astro, focusing on content-centric structure and static page optimization.",
    problem:
      "Needed a maintainable, content-driven static site with consistent UI and automated deployment.",
    solution:
      "Built a design token-based UI system with Tailwind CSS, integrated MDX for content-component composition, structured UI with reusable components, and automated CI/CD with GitHub Actions and GitHub Pages.",
    impact:
      "Achieved a scalable, maintainable portfolio site with automated deployment and enhanced user experience.",
    contributions: [
      "Designed content-centric structure and static page optimization with Astro",
      "Built a consistent UI system using Tailwind CSS design tokens",
      "Integrated MDX for unified content and component management",
      "Structured UI with reusable, maintainable components",
      "Automated CI/CD pipeline and deployment with GitHub Actions and Pages",
      "Implemented interactive elements to enhance user experience",
    ],
  },
  {
    id: "project-2",
    title: "Ui-interaction-showcase (Side Project)",
    stack: ["Vue.js", "TypeScript", "Tailwind CSS"],
    summary:
      "Showcase of state-driven UI interaction patterns and reusable components.",
    duration: "2026.01 - Present",
    overview:
      "Designed state-based UI interaction structures to clearly express various UI states (default/loading/success/error).",
    problem:
      "Needed predictable UI flows, clear user feedback for each state, and scalable, reusable component structure.",
    solution:
      "Used props/events patterns, modularized UI patterns (toast, modal, tab), and automated deployment with Netlify.",
    impact:
      "Established a scalable, consistent UI interaction structure with automated deployment and continuous updates.",
    contributions: [
      "Designed and implemented state-driven UI interaction structures",
      "Separated loading/success/error states for clear user feedback",
      "Used props/events for explicit state flow",
      "Modularized UI patterns like toast, modal, tab",
      "Automated deployment and continuous updates with Netlify",
    ],
  },
  {
    id: "project-3",
    title: "dvmbr-chat (Side Project)",
    stack: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSocket",
    ],
    summary:
      "Real-time chat application with hybrid SSR/CSR rendering and automated deployment.",
    duration: "2026.01 - 2026.02",
    overview:
      "Designed a real-time messaging structure using WebSocket and implemented client-server data flow. Built API routes and DB integration with Next.js and Prisma.",
    problem:
      "Needed real-time messaging, hybrid SSR/CSR rendering, DB integration, and automated deployment.",
    solution:
      "WebSocket-based real-time structure, Next.js API routes, Prisma data modeling, and automated deployment with Vercel, Railway, and Neon.",
    impact:
      "Achieved real-time, scalable chat with automated deployment and efficient operations.",
    contributions: [
      "Designed real-time messaging structure with WebSocket",
      "Implemented API routes and DB integration with Next.js and Prisma",
      "Hybrid SSR/CSR rendering for initial and live updates",
      "File-based routing and separated async/error UI/UX",
      "Data modeling and DB access with Prisma",
      "Automated deployment with Vercel, Railway, and Neon",
    ],
  },
  {
    id: "project-4",
    title: "Invite Benefit & Chat Service",
    stack: ["TypeScript", "Next.js", "TailwindCSS"],
    summary: "Invite link-based user acquisition and chat connection flow.",
    duration: "2025.09 - 2025.12",
    overview:
      "Designed user inflow identification and chat connection flow using invite link parameters.",
    problem:
      "Needed consistent user flow based on URL parameters, user state branching, and stable chat connection.",
    solution:
      "Used Next.js API routes, SSR/CSR, and Middleware for inflow handling and user flow control.",
    impact:
      "Provided consistent user experience and stable service flow for each inflow path.",
    contributions: [
      "Implemented user inflow identification logic using invite link parameters",
      "Designed URL-based inflow handling and state branching",
      "Designed flow from sign-up to chat connection for members/non-members",
      "Built chat service communication with Next.js API routes",
      "Optimized rendering and flow control with SSR/CSR and Middleware",
    ],
  },
  {
    id: "project-5",
    title: "Fisher App (Production Service)",
    stack: ["TypeScript", "React", "TailwindCSS"],
    summary: "Maintenance and improvement of app/web UI and user flows.",
    duration: "2024.12 - 2025.07",
    overview:
      "Maintained and improved overall app/web UI and user flow-based screen structure.",
    problem:
      "Needed to address operational issues, remove redundant logic, and improve long-term maintainability.",
    solution:
      "Refactored structure, improved React components, and applied TailwindCSS design system.",
    impact:
      "Improved operational efficiency, code readability, and scalability.",
    contributions: [
      "Maintained and improved overall app/web UI",
      "Analyzed and improved UI/functionality for order/settlement flows",
      "Addressed operational issues with root cause analysis and structural improvements",
      "Removed redundant logic and refactored structure",
      "Improved React component structure and applied TailwindCSS design system",
    ],
  },
  {
    id: "project-6",
    title: "Customer Consultation Redirect Service",
    stack: ["TypeScript"],
    summary: "Redirect layer for external consultation service integration.",
    duration: "2024.12",
    overview:
      "Designed and implemented a redirect layer for external consultation service integration.",
    problem:
      "Needed to overcome fixed URL constraints, generate dynamic consultation URLs, and ensure stable consultation entry flow.",
    solution:
      "Generated dynamic consultation URLs, connected users to chat rooms based on user/group info, and organized integration/auth structures.",
    impact:
      "Stabilized consultation entry flow within app environment constraints.",
    contributions: [
      "Designed and implemented redirect layer for external consultation integration",
      "Generated dynamic consultation URLs",
      "Connected users to chat rooms based on user/group info",
      "Organized integration/auth structures",
      "Stabilized consultation entry flow considering app constraints",
    ],
  },
  {
    id: "project-7",
    title: "Waybill Registration Automation Tool",
    stack: ["TypeScript", "React", "Bootstrap"],
    summary: "Automated waybill registration process and bulk data handling.",
    duration: "2024.09 - 2024.11",
    overview:
      "Redesigned manual waybill registration process for automation and bulk data handling.",
    problem:
      "Needed to reduce repetitive input, matching errors, and improve bulk data handling and input accuracy.",
    solution:
      "Implemented Excel upload for bulk processing, image upload→data extraction→auto registration flow.",
    impact: "Reduced input errors and shortened processing time.",
    contributions: [
      "Redesigned manual waybill registration for automation",
      "Implemented auto-matching and validation logic for orders/waybills",
      "Built bulk data handling with Excel upload",
      "Designed image upload→data extraction→auto registration flow",
      "Reduced input errors and processing time",
    ],
  },
  {
    id: "project-8",
    title: "Redash Data Dashboard Operations",
    stack: ["SQL"],
    summary: "Designed and operated Redash-based data dashboards.",
    duration: "2024.04 - 2025.12",
    overview:
      "Designed and operated Redash-based data dashboards for business metrics and reporting automation.",
    problem:
      "Needed to automate repetitive reports and improve data accessibility for non-developers.",
    solution:
      "Built parameterized dashboards, defined key metrics, and automated SQL queries.",
    impact: "Improved operational efficiency and data utilization.",
    contributions: [
      "Designed and operated Redash-based data dashboards",
      "Defined key metrics and wrote SQL queries for purchase/payment/user behavior data",
      "Established business metric system and automated recurring reports",
      "Improved data accessibility with parameterized dashboards",
    ],
  },
  {
    id: "project-9",
    title: "Smart Sensor Dashboard Page Development",
    stack: ["TypeScript", "React", "Chart.js", "WebSocket", "Spring", "Netty"],
    summary: "Real-time sensor data reception and visualization dashboard.",
    duration: "2022.02 - 2023.02",
    overview:
      "Designed Netty-based socket server communication, WebSocket real-time streaming, and Chart.js visualization UI.",
    problem:
      "Needed real-time data flow, state monitoring, and efficient visualization.",
    solution:
      "Implemented Netty server communication, WebSocket streaming, and Chart.js-based visualization UI.",
    impact: "Improved real-time data monitoring and visualization efficiency.",
    contributions: [
      "Designed and implemented Netty-based sensor data server communication",
      "Built real-time data streaming with WebSocket",
      "Implemented data visualization UI with Chart.js",
    ],
  },
  {
    id: "project-10",
    title: "Vehicle Damage Detection Webpage Development",
    stack: ["JavaScript", "jQuery", "Python", "Canvas API"],
    summary:
      "Webpage for visualizing vehicle damage and license plate recognition results.",
    duration: "2021.04 - 2021.10",
    overview:
      "Developed overlay visualization for detection areas using Canvas API and reflected Python server data in UI.",
    problem:
      "Needed browser compatibility and efficient visualization of detection results.",
    solution:
      "Visualized detection areas with Canvas API and improved DOM handling with jQuery.",
    impact: "Improved visualization flow and development efficiency.",
    contributions: [
      "Developed visualization for vehicle damage/license plate detection with Canvas API",
      "Reflected Python server data in UI",
      "Improved DOM handling efficiency with jQuery",
    ],
  },
  {
    id: "project-11",
    title: "Admin Webpage Development",
    stack: ["JavaScript", "Java", "Spring", "MySQL"],
    summary: "Admin webpage based on RESTful API.",
    duration: "2020.11 - 2021.04",
    overview:
      "Developed admin UI and CRUD features based on SpringBoot and MySQL.",
    problem: "Needed operational data management and admin UI.",
    solution:
      "Integrated RESTful API, processed server data, and reflected it in admin UI.",
    impact: "Improved operational efficiency and data management.",
    contributions: [
      "Developed admin webpage based on RESTful API",
      "Implemented CRUD features with SpringBoot and MySQL",
      "Processed server data and reflected it in admin UI",
    ],
  },
];
