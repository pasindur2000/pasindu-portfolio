import React from "react";

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Career Journey */}
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-400 mb-4 leading-relaxed text-justify">
I am a Software Engineering graduate and Associate Mobile Developer with a passion for technology. I have experience in programming and mobile development, which helps me build practical and easy-to-use applications. I enjoy solving problems, learning new skills, and working on real projects.
          </p>
          <p className="text-lg text-gray-400 mb-4 leading-relaxed text-justify">
      Moving from academics to professional work has improved my skills in software design, coding, testing, and teamwork. I am careful, dedicated, and eager to grow while contributing to innovative projects.
          </p>
          <p className="text-lg text-gray-400 mb-4 leading-relaxed text-justify">
            Outside of coding, I enjoy exploring new technologies, staying updated with industry trends, and finding ways to combine creativity with technical solutions.
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
