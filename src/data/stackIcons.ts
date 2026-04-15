export interface StackIcon {
  name: string;
  url: string;
  alt: string;
}

export interface StackCategory {
  category: string;
  icons: StackIcon[];
}

export const stackCategories: StackCategory[] = [
  {
    category: "Frontend",
    icons: [
      {
        name: "React",
        url: "https://skillicons.dev/icons?i=react",
        alt: "React icon",
      },
      {
        name: "TypeScript",
        url: "https://skillicons.dev/icons?i=ts",
        alt: "TypeScript icon",
      },
      {
        name: "Next.js",
        url: "https://skillicons.dev/icons?i=nextjs",
        alt: "Next.js icon",
      },
      {
        name: "Vue.js",
        url: "https://skillicons.dev/icons?i=vue",
        alt: "Vue.js icon",
      },
      {
        name: "Tailwind CSS",
        url: "https://skillicons.dev/icons?i=tailwind",
        alt: "Tailwind CSS icon",
      },
      {
        name: "Bootstrap",
        url: "https://skillicons.dev/icons?i=bootstrap",
        alt: "Bootstrap icon",
      },
      {
        name: "Astro",
        url: "https://skillicons.dev/icons?i=astro",
        alt: "Astro icon",
      },
    ],
  },
  {
    category: "Backend",
    icons: [
      {
        name: "Express",
        url: "https://skillicons.dev/icons?i=express",
        alt: "Express icon",
      },
      {
        name: "FastAPI",
        url: "https://skillicons.dev/icons?i=fastapi",
        alt: "FastAPI icon",
      },
      {
        name: "Spring",
        url: "https://skillicons.dev/icons?i=spring",
        alt: "Spring icon",
      },
    ],
  },
  {
    category: "Database",
    icons: [
      {
        name: "PostgreSQL",
        url: "https://skillicons.dev/icons?i=postgres",
        alt: "PostgreSQL icon",
      },
      {
        name: "MySQL",
        url: "https://skillicons.dev/icons?i=mysql",
        alt: "MySQL icon",
      },
    ],
  },
  {
    category: "Deployment",
    icons: [
      {
        name: "Vercel",
        url: "https://skillicons.dev/icons?i=vercel",
        alt: "Vercel icon",
      },
      {
        name: "GitHub Actions",
        url: "https://skillicons.dev/icons?i=githubactions",
        alt: "GitHub Actions icon",
      },
      {
        name: "Netlify",
        url: "https://skillicons.dev/icons?i=netlify",
        alt: "Netlify icon",
      },
    ],
  },
];
