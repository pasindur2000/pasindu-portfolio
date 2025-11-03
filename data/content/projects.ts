import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Order Management System (OMS)",
    desc: "Built a scalable Order Management System with real-time orders and automated inventory.",
    img: "/static/projects/yei-learn.png",
    link: "https://www.behance.net/gallery/237792013/Smart-Order-Management-System-UXUI-Design-2025",
    github: "https://github.com/Aruni2000/Order-Management-System",
    tags: ["PHP", "Javascript", "CSS", "SQL"],
    caseStudy: "/case-studies/oms", 
  },
  {
    id: 1,
    title: "Gemify App",
    desc: "Modern gem trading app with real-time updates, easy navigation, and a refreshed user experience.",
    img: "/static/projects/buildfaster.png",
    link: "https://www.behance.net/gallery/201751209/Gemify-Redesign",
     github: "https://github.com/braydentw/react-emoji-search",
    tags: ["Flutter", "Dart", "Firebase", "GetX"],
    caseStudy: "/case-studies/case_study_web", 
  },
  {
    id: 2,
    title: "Fardar Express Logistics",
    desc: "Enhanced website for a global logistics partner with a clear, fast, and smooth user experience.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://www.feitsolutions.com/new_web/fardarlogistics/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["HTML", "CSS", "Javascript"],
    caseStudy: "/case-studies/case_study_web", 
  },
  {
    id: 3,
    title: "Horizon",
    desc: "Corporate Website for Fertilizer Trader",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["React", "NextJS", "SCSS", "API"],
    caseStudy: "/case-studies/bitcointemp", 
  },
  {
    id: 4,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "DontLeaveMe 😭",
    desc: "Beg for users to stay on your website.",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/BraydenTW/dontleaveme/",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

// Collect all unique tags
export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
