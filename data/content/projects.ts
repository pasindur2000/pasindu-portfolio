import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "EPITONI (Promotion App)",
    desc: "An app that shows users personalized deals and promotions based on their interests, such as favorite brands, hobbies, places, and events.",
    img: "/static/projects/yei-learn.png",
    link: "https://play.google.com/store/apps/details?id=com.ebridge.epitoni&pcampaignid=web_share",
    github: "https://github.com/Aruni2000/Order-Management-System",
    tags: ["Flutter", "Dart", "Firebase", "GCP", "Neo4J "],
    caseStudy: "/case-studies/oms", 
  },
  {
    id: 1,
    title: "Mathru App",
    desc: "An AI-powered pregnancy app that helps expecting mothers track their baby’s growth, monitor symptoms, and get personalized guidance and support.",
    img: "/static/projects/buildfaster.png",
    link: "https://play.google.com/store/apps/details?id=com.mathru.lk&pcampaignid=web_share",
     github: "https://github.com/Aruni2000/gemify_app",
    tags: ["Flutter", "Dart", "Firebase", "GCP"],
    caseStudy: "/case-studies/case_study_web", 
  },
    {
    id: 2,
    title: "Vegetable Disease Detection App",
    desc: "A smart mobile app that detects vegetable diseases using AI and 3D scanning.",
    img: "/static/projects/create-html-boilerplate.png",
    link: "https://www.behance.net/gallery/203189421/Ceylon-Premium-Foods-Logo-Design",
    tags: ["Flutter", "Dart", "Firebase","Machine Learning", "3D Technology"],
    caseStudy: "/case-studies/case_study_web", 
  },
  {
    id: 3,
    title: " Notebook Mobile App",
    desc: "A modern Flutter app that helps gem traders manage stock and get real-time updates easily.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://www.behance.net/gallery/201751209/Gemify-Redesign",
     github: "https://github.com/Aruni2000/gemify_app",
    tags: ["Flutter", "Dart", "Firebase", "GCP"],
    caseStudy: "/case-studies/case_study_web", 
  },
      // {
  //   id: 4,
  //   title: "Horizon",
  //   desc: "Corporate Website for Fertilizer Trader",
  //   img: "/static/projects/bitcointemp.png",
  //   link: "https://bitcointemp.com",
  //   tags: ["React", "NextJS", "SCSS", "API"],
  //   caseStudy: "/case-studies/bitcointemp", 
  // },
  // {
  //   id: 5,
  //   title: "Logo Collection Vol. 01",
  //   desc: "A professional showcase of logo designs reflecting strong branding, creative skill, and visual harmony.",
  //   img: "/static/projects/8ball-rust.png",
  //     link: "https://www.behance.net/gallery/237867683/Log-Collection-Vol01",
  //   tags: ["Adobe Illustrator", "Figma", "Adobe XD"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe ",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

// Collect all unique tags
export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
