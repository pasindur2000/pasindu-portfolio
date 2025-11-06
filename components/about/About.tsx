import React from "react";

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Career Journey */}
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-400 mb-4 leading-relaxed text-justify">
I’m a passionate designer focused on creating practical and visually engaging solutions. With expertise in UI/UX design, branding, and digital content, I craft experiences that blend creativity with usability.
          </p>
          <p className="text-lg text-gray-400 mb-4 leading-relaxed text-justify">
        My journey began with a curiosity about how the web works and how to deliver seamless digital experiences. Over time, I’ve specialized in front-end and full-stack development using React, Next.js, Node.js, and MongoDB, while integrating design tools like Figma, Adobe Suite, and AI-assisted workflows to create modern, high-quality, and performance-driven solutions focused on accessibility, security, and user experience.
          </p>
          <p className="text-lg text-gray-400 mb-4 leading-relaxed text-justify">
            Currently, I work on diverse web projects, focusing on delivering user-friendly, high-performance applications that businesses and users rely on daily.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed text-justify">
            Based in Colombo, Sri Lanka
          </p>
        </div>

        {/* Right Side: Education */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 mx-auto"></div>

          <div className="flex flex-col space-y-10 ml-12">
            {/* Education 1: BSc (Hons) Software Engineering */}
            <div className="flex items-start gap-4">
              {/* Graduation Icon as SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM12 13L3.5 8.5 12 4l8.5 4.5L12 13zM11 19h2v2h-2v-2z" />
              </svg>
              <div className="text-justify">
                <h3 className="text-xl font-semibold">
                  BSc (Hons) in Software Engineering
                </h3>
                <p className="text-blue-500 font-medium">
                  Plymouth University, United Kingdom
                </p>
                <p className="text-gray-500 text-sm">Nov 2021 - Dec 2024</p>
                <p className="text-gray-500 mt-1">
                  Completed BSc (Hons) in Software Engineering with Second Upper Division
                </p>
              </div>
            </div>

            {/* Education 2: Foundation Programme */}
            <div className="flex items-start gap-4">
              {/* Graduation Icon as SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM12 13L3.5 8.5 12 4l8.5 4.5L12 13zM11 19h2v2h-2v-2z" />
              </svg>
              <div className="text-justify">
                <h3 className="text-xl font-semibold">
                  Foundation Programme for Bachelors Degree
                </h3>
                <p className="text-blue-500 font-medium">
                  NSBM Green University, Sri Lanka
                </p>
                <p className="text-gray-500 text-sm">Mar 2021 - Mar 2022 | Colombo, Sri Lanka</p>
                <p className="text-gray-500 mt-1">
                  Successfully completed the Foundation Programme in preparation for Bachelors studies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
