import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
export const myProjects = [
  {
    id: 2,
    title: "Utsav - Movie Streaming App",
    description:
      "A modern movie streaming website with a sleek, responsive interface for discovering and watching movies.",
    subDescription: [
      "Developed using Next.js and React.js for server-side rendering and optimized routing.",
      "Created dynamic pages for movie details with responsive layouts.",
      "Implemented Tailwind CSS for a modern and clean UI design.",
      "Deployed on Vercel for seamless CI/CD integration.",
    ],
    href: "https://utsav-delta.vercel.app",
    github: "https://github.com/savyagupta-2004/utsav", // replace with your actual repo
    image: "/assets/projects/utsav.png", // put an actual image
    tags: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Vercel" },
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "Another iteration of my portfolio showcasing my latest projects, design improvements, and development skills.",
    subDescription: [
      "Refined UI design with enhanced animations and transitions using Tailwind CSS.",
      "Improved component structure and performance optimization.",
      "Added advanced features like modal previews, parallax backgrounds, and custom 3D models.",
      "Continuously updated with my latest work and experience.",
    ],
    href: "https://savyagupta.netlify.app",
    github: "https://github.com/savyagupta-2004/portfolio-version2", // replace with your actual repo
    image: "/assets/projects/port2.png", // put an actual image
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Vite.js" },
      { id: 4, name: "Threejs" },
    ],
  },
  {
    id: 3,
    title: "FixMyBug - Freelance Service",
    description:
      "A freelance initiative providing bug-fixing services to clients worldwide, managing a skilled team to deliver timely solutions.",
    subDescription: [
      "Successfully solved over 150+ issues for various clients, ensuring high-quality and prompt delivery.",
      "Managed and led a team of 5 experienced bug fixers to scale operations.",
      "Handled communication, task assignment, and code reviews for efficient workflows.",
      "Built trust and recurring client relationships through professional support.",
    ],
    href: "https://fixmybug.me",
    github: "https://github.com/savyagupta-2004/fixmybug-frontend",
    image: "/assets/projects/fixmybug.png", // put an actual image
    tags: [
      { id: 1, name: "Freelance" },
      { id: 2, name: "Team Management" },
      { id: 3, name: "Problem Solving" },
      { id: 4, name: "Client Support" },
    ],
  },
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience in a modern, interactive design.",
    subDescription: [
      "Built entirely with React and Tailwind CSS for a highly maintainable and modular structure.",
      "Implemented reusable components, responsive design principles, and smooth animations.",
      "Optimized for SEO and performance to ensure a fast-loading experience.",
      "Deployed on Netlify with custom domain integration.",
    ],
    // href: "https://savyagupta.netlify.app",
    // github: "https://github.com/yourusername/portfolio", // replace with your actual repo
    image: "/assets/projects/port1.png", // put an actual image
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Vite.js" },
      { id: 4, name: "Netlify" },
    ],
  },
];

export const mySocials = [
  {
    name: "Email",
    href: "mailto:guptasavya667@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/-savyagupta/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/savyagupta-2004",
    icon: FaGithub,
  },
];

export const experiences = [
  {
    title: "Amar Machine Tools",
    job: "Enterprise Resourse & Maintenance Management System",
    date: "May to June 2025",
    certification:
      "https://drive.google.com/drive/folders/1IxPB_wM7dN1SBEFuNniBfwhNIRxBmT3v?usp=drive_link",
    contents: [
      "Worked on enhancing and maintaining internal enterprise resource applications used for departmental operations.",
      "Assisted in the design, optimization, and management of relational databases to support internal workflows.",
      "Developed internal modules to automate employee or inventory management.",
      "Implemented backend logic for resource allocation features.",
      "Created and optimized SQL queries for performance and accuracy.",
    ],
  },
  {
    title: "Keyncoders Innovations Private Limited ",
    job: " Senior Developer",
    date: "Jully to Dec 2024",
    certification:
      "https://drive.google.com/drive/folders/1IxPB_wM7dN1SBEFuNniBfwhNIRxBmT3v?usp=drive_link",
    contents: [
      "Led a team of developers in designing and implementing scalable solutions for various client projects.",
      "Actively participated in coding, particularly in frontend and backend development, ensuring code quality.",
      "✅ Managed the entire software development lifecycle, from planning and design to deployment and maintenance.",
      "✅ Assisted in backend API development, ensuring seamless data flow and integration with the frontend.",
      "✅ Collaborated closely with senior developers to troubleshoot issues and optimize code for better performance.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    certification:
      "https://drive.google.com/drive/folders/1IxPB_wM7dN1SBEFuNniBfwhNIRxBmT3v?usp=drive_link",
    contents: [
      " Provided bug-fixing services under the brand FixmyBug, successfully solving 150+ issues for various clients.",
      "Hired and managed a team of 5 skilled bug fixers to scale operations and ensure timely delivery of solutions.",
    ],
  },
];
export const reviews = [
  {
    name: "Aarav Sharma",
    username: "@aarav",
    body: "I had an urgent bug in my React app. FixMyBug's team resolved it within hours. Truly impressed with their responsiveness and skill!",
    img: "https://robohash.org/aarav",
  },
  {
    name: "Priya Patel",
    username: "@priya",
    body: "Great experience! They fixed a stubborn API error that had stalled my project for days. Highly recommend FixMyBug for quick solutions.",
    img: "https://robohash.org/priya",
  },
  {
    name: "Rahul Verma",
    username: "@rahul",
    body: "Professional and reliable. The team helped me debug my Node.js backend seamlessly. Will definitely use FixMyBug again.",
    img: "https://robohash.org/rahul",
  },
  {
    name: "Sneha Iyer",
    username: "@sneha",
    body: "I was stuck with a CSS issue that ruined my layout. FixMyBug sorted it out perfectly. Super friendly and efficient service!",
    img: "https://robohash.org/sneha",
  },
  {
    name: "Vikram Singh",
    username: "@vikram",
    body: "Incredible service! They debugged my entire site and even suggested improvements. FixMyBug is now my go-to for all issues.",
    img: "https://robohash.org/vikram",
  },
  {
    name: "Neha Desai",
    username: "@neha",
    body: "Prompt and professional. Fixed a payment gateway integration bug I had struggled with for weeks. Thanks, FixMyBug!",
    img: "https://robohash.org/neha",
  },
  {
    name: "Karan Mehta",
    username: "@karan",
    body: "The best support I've received so far. They patiently explained the problem and fixed my database migration error quickly.",
    img: "https://robohash.org/karan",
  },
  {
    name: "Ananya Rao",
    username: "@ananya",
    body: "Absolutely reliable. Resolved a critical production bug late at night. I'm grateful for their 24/7 availability!",
    img: "https://robohash.org/ananya",
  },
];
