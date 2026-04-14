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
    title: "Invite Benefit & Chat Service",
    stack: ["TypeScript", "React", "Redux", "CSS Modules"],
    summary:
      "A web-based invite flow designed to connect user acquisition, benefit distribution, and chat entry through shared links and parameter-based routing.",
    duration: "2025.09 - 2025.12",
    overview:
      "This project focused on building an invite-based entry structure shared through external channels. It was designed to identify where users came from, guide them through sign-up and chat access based on their state, and connect the flow to invite benefits in a maintainable way.",
    problem:
      "Users entering through external invite links needed a clear and structured flow that could distinguish inflow paths, handle different user states, and connect them to the right next action.",
    solution:
      "Designed a parameter-based invite structure using invite codes and routing logic. Built a user-state-driven flow that connected entry, sign-up, benefit handling, and chat access into one consistent experience.",
    impact:
      "Made the invite flow easier to manage and extend, while reducing maintenance cost through shared configuration and clearer structural organization.",
    contributions: [
      "Designed an inflow structure based on invite links shared through external channels.",
      "Implemented route identification logic using invite codes and parameters.",
      "Structured sign-up and chat connection flows based on user state.",
      "Connected inflow user data to benefit handling logic.",
      "Reduced maintenance cost by organizing shared settings and common structure.",
    ],
  },
  {
    id: "project-2",
    title: "Redash Data Dashboard Operations",
    stack: ["Redash", "Amazon RDS"],
    summary:
      "Designed and maintained operational dashboards for service metrics, user behavior, and recurring reporting workflows.",
    duration: "2024.04 - 2025.12",
    overview:
      "This project focused on defining service metrics and turning recurring reporting work into reusable dashboards. It supported operational visibility by organizing purchasing, payment, and user behavior data into accessible views.",
    problem:
      "Operational reporting relied on repeated manual work, and non-technical stakeholders needed easier access to meaningful service metrics.",
    solution:
      "Built Redash dashboards with SQL-based queries for monthly metrics, repurchase rate, loyal user analysis, and parameterized views that could be reused across teams.",
    impact:
      "Improved operational efficiency by replacing repetitive reporting with dashboards and increased usability for non-technical roles through parameter-based exploration.",
    contributions: [
      "Built Redash dashboards for operational service metrics.",
      "Wrote SQL queries based on purchasing, payment, and user behavior data.",
      "Designed dashboards for monthly KPIs, repurchase rate, and loyal user analysis.",
      "Created parameter-based dashboards for easier use by non-technical teams.",
      "Reduced repeated reporting work by converting it into reusable dashboards.",
    ],
  },
  {
    id: "project-3",
    title: "fisher App Operations Service",
    stack: ["TypeScript", "React", "Redux", "TailwindCSS"],
    summary:
      "Designed and improved operational web app interfaces for a live service, covering user flows such as orders and settlements.",
    duration: "2024.12 - 2025.07",
    overview:
      "This project covered the overall design and improvement of web app interfaces used in a live operational service. It focused on building practical flows around real user and business operations while continuously refining structure for long-term maintenance.",
    problem:
      "A live service required stable and adaptable operational interfaces that could support changing needs, user flows, and ongoing issue resolution.",
    solution:
      "Designed and improved web app interfaces around operational workflows such as orders and settlements, while continuously refactoring and restructuring for maintainability.",
    impact:
      "Supported ongoing operations with more reliable interfaces and a cleaner structure that was easier to maintain over time.",
    contributions: [
      "Handled the overall web app interface for a live operational service.",
      "Designed interfaces and features based on user flows such as orders and settlements.",
      "Repeatedly responded to operational issues and improved existing functionality.",
      "Refactored and reorganized the structure with long-term maintenance in mind.",
    ],
  },
  {
    id: "project-4",
    title: "Customer Consultation Redirect Service",
    stack: ["TypeScript"],
    summary:
      "Built a redirect service to connect users to an external consultation platform despite fixed in-app URL constraints.",
    duration: "2024.12",
    overview:
      "This project focused on bridging an app environment with an external consultation service. It solved the limitation of fixed in-app URLs by rebuilding consultation entry links dynamically based on API-fetched information.",
    problem:
      "The app environment had fixed URL constraints, which made it difficult to connect users dynamically to the correct external consultation room.",
    solution:
      "Built an intermediate redirect service that fetched user and group information, reconstructed dynamic consultation URLs, and connected users to the correct chat room in the external service.",
    impact:
      "Stabilized the consultation access flow in an environment with platform constraints and made the external integration more manageable.",
    contributions: [
      "Built an intermediate redirect service for Happytalk integration.",
      "Reconstructed consultation URLs dynamically to bypass fixed in-app URL limitations.",
      "Fetched user and group information before connecting users to consultation chat rooms.",
      "Organized external service access information and related configuration.",
      "Improved consultation flow stability under operational constraints.",
    ],
  },
  {
    id: "project-5",
    title: "Waybill Registration Automation Tool",
    stack: ["TypeScript", "TailwindCSS"],
    summary:
      "Designed an internal tool to automate a manual waybill registration workflow using upload-based matching and OCR-assisted input.",
    duration: "2024.09 - 2024.11",
    overview:
      "This project analyzed a repetitive manual registration process and redesigned it into a partial automation workflow. It focused on matching order data with uploaded waybill information and reducing manual entry effort.",
    problem:
      "Waybill registration was handled manually, which caused repeated input work, matching errors, and unnecessary processing time.",
    solution:
      "Designed an automated matching flow between orders and waybill data, built a bulk registration interface based on Excel uploads, and introduced OCR-assisted input for image-based waybill recognition.",
    impact:
      "Reduced input errors and improved processing time by partially automating a previously manual workflow.",
    contributions: [
      "Analyzed and redesigned the manual waybill registration process.",
      "Designed an automatic matching flow between order lists and waybill data.",
      "Built a bulk registration interface using Excel uploads.",
      "Introduced OCR-linked input flow for image-based waybill recognition.",
      "Reduced processing errors and saved time through partial automation.",
    ],
  },
  {
    id: "project-6",
    title: "D-meta Corporate Website",
    stack: ["TypeScript", "React", "Bootstrap"],
    summary:
      "Built a company introduction website with semantic HTML, structured layouts, and consistent UI components.",
    duration: "2023.02 - 2023.05",
    overview:
      "This project focused on developing a company website using React and TypeScript. It emphasized clear layout composition, reusable components, and semantic structure for better discoverability.",
    problem:
      "The site needed a structured and consistent web presence that could communicate company information clearly while remaining maintainable.",
    solution:
      "Built the website with React and TypeScript, used semantic HTML for SEO, and organized the layout and components with Bootstrap.",
    impact:
      "Delivered a consistent corporate website with improved semantic structure and maintainable UI composition.",
    contributions: [
      "Developed the company introduction website with TypeScript and React.",
      "Applied semantic HTML tags to improve SEO.",
      "Built consistent layouts and components using Bootstrap.",
    ],
  },
  {
    id: "project-7",
    title: "Smartsensor Dashboard",
    stack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Chart.js",
      "Spring Boot",
      "Netty",
      "MySQL",
    ],
    summary:
      "Built a real-time dashboard with device communication, WebSocket updates, and data visualization for sensor-based systems.",
    duration: "2022.02 - 2023.02",
    overview:
      "This project combined server-side communication and front-end dashboard development for sensor data systems. It included socket communication, real-time updates, and chart-based visualization.",
    problem:
      "The system needed reliable communication with transmission devices and a dashboard capable of showing continuously updated data in a usable way.",
    solution:
      "Implemented socket communication with Netty, added WebSocket-based real-time updates, and introduced Chart.js to build the graph UI more efficiently.",
    impact:
      "Enabled real-time dashboard updates, improved maintainability of graph rendering, and reduced chart-related implementation complexity.",
    contributions: [
      "Implemented server socket communication for data transmission devices using Netty.",
      "Built real-time update functionality with WebSocket communication.",
      "Introduced Chart.js and reduced graph UI code volume significantly.",
      "Applied semantic HTML tags to improve SEO.",
    ],
  },
  {
    id: "project-8",
    title: "Ssocio Living Community App",
    stack: ["JavaScript", "HTML", "CSS", "AWS"],
    summary:
      "Maintained and developed web pages for a community app, including server-driven data display and chart-based visualization.",
    duration: "2021.10 - 2022.02",
    overview:
      "This project involved maintaining and improving community app web pages while handling server data display. It also included chart-based visual output for data presentation.",
    problem:
      "The app needed stable web page maintenance and clearer ways to present data from the server.",
    solution:
      "Built and maintained web pages while implementing data visualization with Chart.js to improve readability.",
    impact:
      "Improved the usability of server-driven data presentation within the community app.",
    contributions: [
      "Maintained and developed web pages for the community app.",
      "Handled server data display on the web interface.",
      "Implemented data visualization using Chart.js.",
    ],
  },
  {
    id: "project-9",
    title: "Peoplecar Damage Detection Website",
    stack: ["jQuery", "HTML", "CSS", "Canvas API", "Python", "MySQL"],
    summary:
      "Built a web interface for visualizing vehicle damage and license plate recognition positions using Canvas-based rendering.",
    duration: "2021.04 - 2021.10",
    overview:
      "This project focused on building a web interface that displayed server data and visualized damage-related detection areas. It required browser compatibility considerations and efficient rendering of recognition results.",
    problem:
      "The product needed a way to visually represent vehicle damage and recognition coordinates clearly across browsers.",
    solution:
      "Used the Canvas API to render damage and license plate recognition positions, and adopted jQuery to improve cross-browser support and implementation speed.",
    impact:
      "Delivered a clearer visualization flow for detection results while improving compatibility and development efficiency.",
    contributions: [
      "Visualized vehicle damage and license plate recognition positions with the Canvas API.",
      "Improved cross-browser compatibility and development speed using jQuery.",
      "Built web pages and displayed server-side data in the interface.",
    ],
  },
  {
    id: "project-10",
    title: "Jeil Steel Admin Website",
    stack: ["SpringBoot", "MySQL", "JavaScript"],
    summary:
      "Developed an admin website connected to a RESTful API server for data lookup and management workflows.",
    duration: "2020.11 - 2021.04",
    overview:
      "This project focused on building an admin-facing website connected to a RESTful backend. It supported data retrieval and screen rendering for operational use.",
    problem:
      "The service needed an admin interface that could communicate with backend APIs and present operational data clearly.",
    solution:
      "Built an admin website connected to a RESTful API server and implemented server data lookup and rendering functionality.",
    impact:
      "Provided an operational admin interface for managing and viewing backend-driven data.",
    contributions: [
      "Developed an admin website connected to a RESTful API server.",
      "Implemented server data retrieval and screen rendering features.",
    ],
  },
];
