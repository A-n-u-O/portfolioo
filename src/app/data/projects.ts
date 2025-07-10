import { Project } from "@/types/dataTypes";

export const projects: Project[] = [
  {
    title: "Mini-Commerce",
    description:
      "Next.js e-commerce prototype with persistent cart, TypeScript validation, and SEO optimization. Features product browsing, checkout flow, and responsive design.",
    image: "/assets/images/mini-commerce.png",
    alt: "Mini-Commerce product page screenshot",
    link: "https://mini-commerce.vercel.app/",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    title: "An Expense Tracker Dashboard",
    description:
      "A responsive financial dashboard built with Next.js, Zustand, Tailwind CSS, and Chart.js. It allows users to track income and expenses, view real-time summaries, and visualize their spending by category using dynamic charts.",
    image: "/assets/images/expense.png",
    alt: "Expense Tracker Dashboard app",
    link: "https://expense-tracker-dashboard-brown.vercel.app/",
    tech: ["Next.js", "Zustand", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "Auth App",
    description:
      "A full-stack authentication system with login, registration, and protected dashboard.",
    image: "/assets/images/auth-app.png",
    alt: "Auth app",
    link: "https://github.com/A-n-u-O/Authentication-with-PERN-stack",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Social App Project",
    description:
      "A social media platform with user authentication and real-time updates.",
    image: "/assets/images/social.png",
    alt: "Social app",
    link: "https://social-media-blue-theta.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Mantine UI"],
  },
  {
    title: "Human Resources Management System",
    description:
      "Feature-rich HRMS dashboard with role-based access, attendance, and payroll integration.",
    image: "/assets/images/hr.png",
    alt: "HR management system",
    link: "https://hrms-wine.vercel.app/",
    tech: ["React" ,"TypeScript" ,"Tailwind CSS", "Material UI"]
  },
  {
    title: "Todo App",
    description:
      "A drag-and-drop to-do list with task filtering and clean UI (Frontend Mentor).",
    image: "/assets/images/todo.png",
    alt: "Todo app",
    link: "https://todoapp-react-teal.vercel.app/",
    tech: ["React", "Vite", "HTML" ,"CSS"]
  },
  {
    title: "Attendance Logging App",
    description:
      "Efficient app for monitoring and analyzing attendance with a user-friendly interface.",
    image: "/assets/images/attendance.png",
    alt: "Attendance app",
    link: "https://attendance-logging-app.vercel.app/",
    tech: ["Javascript"]
  },
  {
    title: "E-commerce Product Page",
    description:
      "Interactive product display with dynamic preview and cart features.",
    image: "/assets/images/product.png",
    alt: "E-commerce product page",
    link: "https://e-commerce-page-two-tau.vercel.app/",
    tech: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "First Portfolio",
    description:
      "My first personal portfolio to showcase my skills and projects.",
    image: "/assets/images/old-portfolio.png",
    alt: "Portfolio Project",
    link: "https://a-n-u-o-github-io.vercel.app/",
    tech: ["HTML", "CSS", "Javascript"]
  },
];
