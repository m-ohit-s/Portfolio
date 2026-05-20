import { Cloud, Server, TerminalSquare } from "lucide-react";
import energyImg from "../assets/energy.png"
import expenseImg from "../assets/expense.png"

export interface Experience {
  period:string;
  title: string;
  company: string;
  description: string;
  active: boolean
}

export const technologies = [
    {name: "Frontend Engineering", desc: "Building performant, accessible user interfaces with modern web standards.", tags: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Zustand", "Context API"], icon: TerminalSquare},
    {name: "Backend Systems", desc: "Designing robust APIs and scalable microservice architectures.", tags: ["Core Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring AI", "REST APIs", "JWT",
      "OAuth2", "RBAC", "PostgreSQL", "MySQL"], icon: Server},
    {name: "Cloud & Devops", desc: "Automating Deployment Pipelines and managing cloud infrastructure", tags: ["Docker", "AWS", "CI/CD", "Github Actions", "Kubernetes"], icon: Cloud}
]

export const featuredProjects = [
    {name: "Expense Manager Application", desc: "Designed and developed a scalable Expense Manager platform using microservice architecture with Spring Boot, Kafka, Redis, PostgreSQL, Docker, and AWS.", image: energyImg, repoUrl: ""},
    {name: "Energy Usage Tracker", desc: "Developed a real-time IoT analytics platform using Spring Boot microservices, Kafka event streaming, time-series databases, AI-driven insights, and cloud-native architecture.", image: expenseImg, repoUrl: ""}
]

export const skills = [
    {name: "Languages", tags: ["Typescript", "Javascript", "Java", "SQL"]},
    {name: "Frameworks", tags: ["Java Spring Boot", "React", "Next", "Tailwind CSS"]},
    {name: "Infrastructure", tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]}
]

export const experiences = [
  {
    period: "July 2024 — Present",
    title: "Software Engineer",
    company: "MRI Software — Bangalore",
    description:
      "Engineered a scalable full-stack rent payment platform serving 50K+ users, implementing RBAC across tenants, property managers, and admins within a microservices architecture. Designed idempotent payment processing and integrated Google Pay for reliable financial transactions. Built fault-tolerant microservices using retry mechanisms and circuit breakers, improving resilience across downstream services. Implemented caching strategies to optimize performance under high concurrency and managed inter-service communication using OpenFeign. Enhanced frontend performance and user experience through optimized state management and API integration. Strengthened platform security with MFA (Email + SMS) using Twilio. Led Java 8 to Java 21 migration and established CI/CD pipelines using GitHub Actions.",
    active: true,
  },
  {
    period: "Feb 2022 — Sept 2023",
    title: "Software Engineer",
    company: "In Time Tec — Jaipur",
    description:
      "Engineered frontend solutions for an e-commerce platform with RBAC-based access control for secure and role-specific user experiences. Integrated and managed REST APIs using Axios while handling asynchronous data flows for improved reliability. Built responsive and reusable UI components, optimizing frontend performance and usability. Collaborated with cross-functional teams to streamline API integration and accelerate feature delivery across the application.",
    active: false,
  },
];