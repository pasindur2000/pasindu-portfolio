"use client";

import React, { useState, useEffect, useRef } from "react";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
  caseStudy?: string;
  role?: string;
  overview?: string;
  problem?: string;
  solution?: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Get case study content based on project title or caseStudy field
  const getCaseStudyContent = () => {
    // First priority: Check if project has custom fields defined
    if (
      project.role &&
      project.overview &&
      project.problem &&
      project.solution
    ) {
      return {
        role: project.role,
        overview: project.overview,
        problem: project.problem,
        solution: project.solution,
      };
    }

    // Second priority: Match by title or caseStudy field
    const titleLower = project.title.toLowerCase();
    const caseStudyLower = (project.caseStudy || "").toLowerCase();
    const projectIdentifier = titleLower + " " + caseStudyLower;

    // EPITONI (Promotion App)
    if (
      projectIdentifier.includes("epitoni") ||
      projectIdentifier.includes("promotion")
    ) {
      return {
        role: "Full Stack Developer",
        overview:
          "A personalized promotion platform that lets users select their interests like favorite brands, cities, events, hobbies, shopping malls, and places to visit.",
        problem:
          "Users often receive generic promotions that arent relevant to their interests, making it hard to discover offers or experiences they actually care about.",
        solution:
          "The app intelligently matches users interests with promotional posts from restaurants and shops, showing only tailored offers and experiences that fit their preferences.",
      };
    }

    // Mathru App
    if (projectIdentifier.includes("mathru")) {
      return {
        role: "Mobile Developer",
        overview:
          "An AI-powered pregnancy tracking app that supports expecting mothers with personalized insights, symptom analysis, and real-time guidance.",
        problem:
          "Many expecting mothers lack access to continuous health guidance and struggle to track symptoms and baby development accurately.",
        solution:
          "Mathru provides smart symptom analysis, emotional support, and personalized recommendations — helping mothers monitor their health and their babys growth with real-time updates and doctor connectivity.",
      };
    }

    // Vegetable Disease Detection App
    if (
      projectIdentifier.includes("vegetable") ||
      projectIdentifier.includes("disease detection")
    ) {
      return {
        role: "Mobile Developer",
        overview:
          "A smart mobile application that leverages artificial intelligence and 3D scanning technology to detect diseases in vegetables, helping farmers and agricultural professionals identify plant health issues quickly and accurately.",
        problem:
          "Farmers struggle to identify vegetable diseases early, leading to crop loss and reduced yields. Traditional diagnosis methods are time-consuming and require expert knowledge.",
        solution:
          "The app uses machine learning and 3D scanning to instantly analyze vegetable health, providing accurate disease detection and treatment recommendations in real-time.",
      };
    }

    // Notebook Mobile App (Gemify)
    if (
      projectIdentifier.includes("notebook") ||
      projectIdentifier.includes("gemify")
    ) {
      return {
        role: "Frontend Developer",
        overview:
          "A modern, fully redesigned mobile application that enhances the Gemify platform with new functionalities and a refined user experience. The app focuses on seamless performance, responsive design, and real-time interaction to deliver an optimized gem trading and management experience.",
        problem:
          "Gem traders and businessmen needed a simple yet powerful tool to manage and grow their gem business efficiently, with better stock management and real-time updates.",
        solution:
          "A redesigned mobile app enhancing the Gemify platform with improved performance, real-time interaction, intuitive stock management, and an optimized user experience for gem traders.",
      };
    }

    // Default fallback
    return {
      role: "Mobile Developer",
      overview: project.desc,
      problem: "This project addressed specific challenges in its domain.",
      solution: `${project.title} provides an effective solution with modern technologies.`,
    };
  };

  const caseStudyContent = getCaseStudyContent();

  return (
    <div
      className="max-w-sm mx-auto flex flex-col items-center md:items-start md:justify-center"
      key={project.id}
    >
      {/* Project Image */}
      <a
        href={project.link || project.github}
        target="_blank"
        rel="noreferrer"
        className="w-full relative rounded-xl border border-fun-gray p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-transform"
      >
        <img
          className="w-full rounded-md"
          src={project.img}
          alt={project.title}
        />
      </a>

      {/* Project Info */}
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <a
            href={project.link || project.github}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>

          <div className="space-x-2 flex items-center">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src="/pasindu-portfolio/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <img
                  src="/pasindu-portfolio/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-fun-gray text-left text-sm mt-1">{project.desc}</p>

        {/* Tags */}
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/projects/tag/${kebabCase(tag)}`} passHref>
                <a className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                  {tag}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Case Study Button */}
        {project.caseStudy && (
          <div className="mt-3">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-fun-pink text-white rounded-md hover:opacity-80 transition"
            >
              View Case Study
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div
            ref={modalRef}
            className="bg-[#111] text-white rounded-2xl overflow-y-auto max-h-[90vh] w-[95%] md:w-[800px] shadow-2xl relative animate-slideUp"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-gray-400 text-3xl font-bold hover:text-white z-10 transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Banner Image */}
            <div className="relative w-full">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Title + Role */}
              <div>
                <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
                <p className="text-sm text-gray-400">{caseStudyContent.role}</p>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudyContent.overview}
                </p>
              </div>

              {/* Problem + Solution */}
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div>
                  <h4 className="flex items-center gap-2 text-fun-pink text-lg font-semibold">
                    <span>🔒</span> Problem
                  </h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {caseStudyContent.problem}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-fun-pink text-lg font-semibold">
                    <span>⚡</span> Solution
                  </h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {caseStudyContent.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 bg-fun-pink-dark text-white rounded-full text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 bg-fun-pink text-white rounded-md hover:opacity-80"
                  >
                    Visit Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
