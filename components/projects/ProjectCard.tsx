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
      // Prevent body scroll when modal is open
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
                <p className="text-sm text-gray-400">
                  {project.caseStudy === 'oms' 
                    ? 'Fullstack Developer (Backend & System Integration)'
                    : project.caseStudy === 'gemify'
                    ? 'Mobile Developer (UX & Real-Time Functionality)'
                    : 'Mobile Developer (Security & Performance)'
                  }
                </p>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.caseStudy === 'oms' ? (
                    <>
                      Developed a comprehensive Order Management System (OMS) to handle order creation, 
                      tracking, and inventory updates for a mid-sized retail operation. The system 
                      centralized all order data and improved communication between sales, warehouse, 
                      and delivery teams.
                    </>
                  ) : project.caseStudy === 'gemify' ? (
                    <>
                      Developed Gemify, a modern gem trading platform that connects buyers and sellers 
                      in real-time. Focused on creating a visually refined, intuitive mobile experience 
                      that simplifies gem listings, live price tracking, and secure transactions.
                    </>
                  ) : (
                    <>
                      Contributed to the development and enhancement of <b>{project.title}</b>, 
                      a digital lifestyle application. Focused on improving security, user 
                      experience, and performance for a growing customer base.
                    </>
                  )}
                </p>
              </div>

              {/* Problem + Solution */}
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div>
                  <h4 className="flex items-center gap-2 text-fun-pink text-lg font-semibold">
                    <span>🔒</span> Problem
                  </h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {project.caseStudy === 'oms' ? (
                      <>
                        The previous manual process caused order delays, stock mismatches, and lacked 
                        real-time visibility into order status. The business needed a reliable web-based 
                        solution to automate operations and maintain accurate inventory records.
                      </>
                    ) : project.caseStudy === 'gemify' ? (
                      <>
                        Traditional gem trading involved limited transparency and delayed communication 
                        between traders. Users needed a platform that allowed them to browse, buy, and 
                        sell gems instantly with trust and ease.
                      </>
                    ) : (
                      <>
                        The app required strong security features to handle sensitive financial data 
                        while maintaining a smooth, user-friendly experience.
                      </>
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-fun-pink text-lg font-semibold">
                    <span>⚡</span> Solution
                  </h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {project.caseStudy === 'oms' ? (
                      <>
                        Built a PHP-based web application with MySQL for database management and a 
                        responsive Bootstrap frontend. Integrated automated order workflows, dynamic 
                        inventory tracking, and user roles (admin, staff, and clients) to improve 
                        coordination and reduce manual effort.
                      </>
                    ) : project.caseStudy === 'gemify' ? (
                      <>
                        Designed and implemented a Flutter-based mobile application with an intuitive 
                        user interface, integrated real-time updates for listings, and secure user 
                        authentication. Added advanced filtering, push notifications, and instant 
                        messaging to support seamless trading experiences.
                      </>
                    ) : (
                      <>
                        Designed and implemented native modules with secure data handling, improved 
                        encryption layers, and optimized app performance.
                      </>
                    )}
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

              {/* Impact & Results */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Impact & Results</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.caseStudy === 'oms' ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Reduced order processing time by 45% with automated updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Improved stock accuracy through synchronized database operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Enhanced transparency with real-time order tracking dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Simplified user access management with secure authentication</span>
                      </li>
                    </>
                  ) : project.caseStudy === 'gemify' ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Enabled real-time gem listing updates and instant buyer–seller communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Increased user engagement with a modern, visually appealing UI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Improved transaction reliability through Firebase-backed security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Enhanced overall trading speed and transparency</span>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>

              {/* Architecture */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Architecture</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.caseStudy === 'oms' ? (
                    <>
                      Modular PHP architecture with MVC pattern, REST API endpoints for external 
                      integration, and MySQL relational structure ensuring data consistency and performance.
                    </>
                  ) : project.caseStudy === 'gemify' ? (
                    <>
                      Flutter mobile app integrated with Firebase backend and Firestore real-time database. 
                      Includes push notification system, secure authentication modules, and modular 
                      architecture for scalable feature development.
                    </>
                  ) : null}
                </p>
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