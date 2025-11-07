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
        Web Developer
      </p>

      {/* Description */}
      <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-4">
        Passionate designer skilled in creating impactful visuals and scalable design systems.from branding and social media to responsive web dashboards — using Figma, Adobe Suite, AI tools, Next.js, Tailwind CSS, and TypeScript. Experienced in React, Next.js, Node.js, and MongoDB with a focus on performance, accessibility, and security.
      </p>

  
    </div>
  );
}


export default Heading;
