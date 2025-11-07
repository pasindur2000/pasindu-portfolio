import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative max-w-5xl mx-auto">
      {/* Name */}
      <h1 className="text-2xl sm:text-5xl font-bold inline-block w-auto mb-6 relative">
      Pasindu Rathnathilake
        <img
          className="sqD w-12 -top-6 -right-8 absolute"
          src="/static/doodles/skills/fillStar.svg"
          alt="star doodle"
        />
      </h1>

      {/* Role */}
      <p className="text-blue-500 text-1xl sm:text-3xl font-semibold mb-6">
        Mobile Developer
      </p>

      {/* Description */}
      <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-4">
        I am a Software Engineering graduate and Associate Mobile Developer with a strong interest in growing in the IT field. I have a good foundation in programming languages and mobile development frameworks. I am dedicated, detail-oriented, and eager to keep learning. I want to improve my skills and contribute to your organization’s projects.
      </p>

  
    </div>
  );
}


export default Heading;
