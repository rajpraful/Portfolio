import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  zysk,
  trica,
  gojek,
  refcoat,
  vidyawin,
  tricass,
  takatuf,
  reproaster,
  revvin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML, CSS, JS, TS",
    icon: backend,
  },
  {
    title: "Next.js, React.js, Three.js",
    icon: web,
  },
  {
    title: "Tailwind, MUI, Styled Components",
    icon: css,
  },
  {
    title: "PWA, Playstore, AWS",
    icon: mobile,
  },
  {
    title: "UI-UX, Figma",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Frontend Developer, Tech Lead, Core team member",
    company_name: "Zyzk Technologies PVT LTD",
    company_link: "https://www.zysk.tech/",
    icon: zysk,
    iconBg: "#ffffff",
    date: "Feb 2018 - Jul 2022 (4+ years)",
    points: [
      "I acquired knowledge, successfully applied and introduced novel frameworks/technologies like Next.js, React-hook-form.",
      "Front end architect, Tech lead",
      "Design-code method to improve UI, UX, and technical aspects of the app",
      "Client management, QA team management, Scrum master",
      "Hiring, training, and deploying freshers to projects",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Trica - a Letsventure company",
    company_link: "https://www.trica.co/",
    icon: trica,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Refcoat Website",
    description:
      "My first SEO-friendly website which is intuitive, responsive from mobile to XL screens.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: refcoat,
    source_project_link: "https://www.refcoat.com/",
  },
  {
    name: "Takatuf HR tool",
    description:
      "Fully responsive app for HRs to maintain employee records with dynamic surveys. Custom form component to handle validation and security",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: takatuf,
  },
  {
    name: "Revvin Garages",
    description:
      "Designed, developed, and released 2 PWAs to the playstore for garage and end users. Implemented real-time status update, Google maps, React-hook-form, query params, MUI animations.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "PWA",
        color: "green-text-gradient",
      },
      {
        name: "Play-store",
        color: "blue-text-gradient",
      },
    ],
    image: revvin,
  },
  {
    name: "Gojek Careers Website",
    description:
      "Developed SEO friendly website and blog pages(Static + Server generated) using CMS integration, Whatsapp and Lever integratoin.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Ghost CMS",
        color: "green-text-gradient",
      },
      {
        name: "Whatsapp",
        color: "orange-text-gradient",
      },
    ],
    image: gojek,
    source_project_link: "https://www.gojek.io/",
  },
  {
    name: "Reproster Dealer",
    description:
      "Complex table components with advanced filters, Fully responsive application with dynamic theme configuration. Custom CSS styling and variables without any UI library, Google recaptcha authentication, lazy loading",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: reproaster,
  },
  {
    name: "Vidyawin ed-tech",
    description:
      "Tech Lead - Fully responsive PWA, multi-language support. Vimeo, Razorpay, PDF viewer, Cheat detection, DB design, UI, UX, Team and Client management.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "PWA",
        color: "green-text-gradient",
      },
      {
        name: "Vimeo",
        color: "blue-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: vidyawin,
    source_project_link: "https://www.vidyawin.com/",
  },
  {
    name: "Trica - Letsventure",
    description:
      "Frontend Lead - Develop and maintain fully responsive products for ESOP, Capital management, Portfolios along with Team development",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Handsontable",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "Bitcloud",
        color: "pink-text-gradient",
      },
    ],
    image: tricass,
    source_project_link: "https://www.trica.co/",
  },
];

export { services, technologies, experiences, testimonials, projects };
