import React from "react";

// SectionTitle Component
function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-fun-pink">
      {title}
    </h2>
  );
}

// Experience data
const experiences = [
  {
    role: "Software Engineer",
    company: "Fardar Express Domestic (Private) Limited",
    companyUrl: "https://www.fdedomestic.com",
    type: "Full-time",
    duration: "Jul 2024 - Nov 2025",
    location: "Nugegoda, Western Province, Sri Lanka",
    locationType: "On-site",
    description: "Worked on impactful web development projects that enhanced operational efficiency and improved user experience through modern, scalable solutions.",
    achievements: [
      "Developed and enhanced the Order Management System (OMS) with inventory management, real-time tracking, and automated delivery routing",
      "Built full-stack application using PHP, MySQL, JavaScript, and React with optimized database queries and RESTful APIs",
      "Designed responsive frontend interfaces with React.js and Bootstrap following modern UI/UX principles",
      "Implemented backend logic for order processing, validation, role-based access control, and maintained clean code using Git"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "React.js", "Bootstrap", "REST APIs", "Git", "UI/UX"]
  },
  {
    role: "Software Engineering Intern",
    company: "Fardar Express Domestic (Private) Limited",
    companyUrl: "https://www.fdedomestic.com",
    type: "Internship",
    duration: "Jul 2024 - Jan 2025",
    location: "Nugegoda, Western Province, Sri Lanka",
    locationType: "On-site",
    description: "Gained hands-on experience in software development and real-world project environments, contributing to multiple web projects.",
    achievements: [
      "Collaborated with senior engineers to design and develop scalable web applications",
      "Worked on both frontend and backend tasks, strengthening Core PHP and MySQL database skills",
      "Enhanced problem-solving and teamwork skills through agile workflows, code reviews, and Git best practices"
    ],
    technologies: ["Core PHP", "MySQL", "JavaScript", "jQuery", "RESTful APIs"]
  }
];

// SVG Icons as components
const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

function Experience() {
  return (
    <div className="flex flex-col text-left max-w-5xl w-full m-auto px-4 py-12">
      <SectionTitle title="Professional Experience" />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-[29px] top-0 bottom-0 w-0.5 bg-gray-700"></div>
        
        <div className="space-y-12">
          {experiences.map((item, index) => {
            return (
              <div key={index} className="relative flex gap-6">
                {/* Icon */}
                <div className="hidden md:flex flex-shrink-0 w-[60px] h-[60px] rounded-full border-2 border-fun-pink bg-fun-pink-darker items-center justify-center z-10">
                  <BriefcaseIcon />
                </div>

                {/* Content Card */}
                <div className="flex-1 max-w-3xl bg-fun-pink-darker border border-fun-pink-light rounded-lg p-6 hover:border-fun-pink transition-colors outline-none">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.role}
                      </h3>
                      <a 
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fun-pink hover:text-pink-400 inline-flex items-center gap-2 text-base font-medium mb-2"
                      >
                        {item.company}
                        <ExternalLinkIcon />
                      </a>
                    </div>
                    <span className="px-3 py-1 bg-fun-pink bg-opacity-20 text-fun-pink rounded-full text-xs font-medium w-fit border border-fun-pink-light">
                      {item.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-fun-gray text-xs">
                    <div className="flex items-center gap-2">
                      <CalendarIcon />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <h4 className="text-white font-semibold mb-3 text-sm">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start text-sm leading-relaxed">
                          <span className="text-fun-pink mr-2 mt-1 flex-shrink-0 text-xs">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-opacity-10 bg-fun-pink border border-fun-pink-light text-fun-gray rounded text-xs font-medium hover:bg-opacity-20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;