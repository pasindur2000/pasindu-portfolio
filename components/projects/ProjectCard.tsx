"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
    if (project.role || project.overview || project.problem || project.solution) {
      return {
        role: project.role || 'Developer',
        overview: project.overview || project.desc,
        problem: project.problem || 'This project addressed specific business challenges.',
        solution: project.solution || `${project.title} provides an effective solution.`
      };
    }

    // Second priority: Match by title or caseStudy field
    const projectIdentifier = (project.title.toLowerCase() + ' ' + (project.caseStudy || '')).toLowerCase();

    // Order Management System (OMS)
    if (projectIdentifier.includes('order management') || projectIdentifier.includes('oms')) {
      return {
        role: 'Full stack Developer',
        overview: 'A scalable Order Management System (OMS), built to streamline workflows, manage inventory, and optimize order tracking and delivery with a responsive full-stack architecture using PHP, MySQL, and React.',
        problem: 'Managing orders across multiple Sri Lankan couriers can be time-consuming and error-prone, with manual tracking, delayed updates, and difficulty handling delivery issues.',
        solution: 'A smart Order Management System (OMS) that integrates with multiple courier APIs to automatically track orders, update statuses in real time, and simplify overall delivery management.'
      };
    }

    // Gemify App
    if (projectIdentifier.includes('gemify')) {
      return {
        role: 'Frontend Developer (UI & UX Design)',
        overview: 'A modern, fully redesigned mobile application that enhances the Gemify platform with new functionalities and a refined user experience. The app focuses on seamless performance, responsive design, and real-time interaction to deliver an optimized gem trading and management experience.',
        problem: 'Gem traders and businessmen needed a simple yet powerful tool to manage and grow their gem business efficiently.',
        solution: 'A redesigned mobile app enhancing the Gemify platform with improved performance, real-time interaction, and an optimized user experience.'
      };
    }

    // Fardar Express Logistics
    if (projectIdentifier.includes('fardar') || projectIdentifier.includes('express logistics')) {
      return {
        role: 'Web Developer (UI & UX Design)',
        overview: 'Enhanced website for a global logistics partner with a clear, fast, and smooth user experience.',
        problem: 'The previous logistics website lacked clear navigation, speed, and overall usability.',
        solution: 'An enhanced website designed for a global logistics partner, offering a clear, fast, and seamless user experience.'
      };
    }

    // Default fallback
    return {
      role: 'Web Developer',
      overview: project.desc,
      problem: 'This project addressed specific business challenges and requirements.',
      solution: `${project.title} was developed to provide an effective solution with modern technologies and best practices.`
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
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
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