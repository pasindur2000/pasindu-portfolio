import React, { useState } from "react";

const CTA_CONTENT = {
  heading: "Let's Work Together",
  subHeading:
    "Have a project in mind? Let's create something amazing together and build a seamless, user-friendly digital experience that brings your ideas to life.",
  contactInfo: {
    email: "pasindurathnathilake19@gmail.com",
    phone: "+(94) 70 2027 128",
    location: "Colombo, Sri Lanka",
  },
  whyWorkWithMe: [
    "React & Next.js expertise",
    "Specialized in UI/UX",
    "Experience with e-commerce",
    "Clean, maintainable code practices",
  ],
  formPlaceholders: {
    fullName: "Your full name",
    email: "your.email@example.com",
    subject: "Project discussion, consultation, etc.",
    message:
      "Tell me about your project, timeline, budget, and any specific requirements...",
  },
};

function CTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "message") setCharCount(value.length);
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <section className="relative w-full bg-[#0A0F1C] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white">
            {CTA_CONTENT.heading}
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            {CTA_CONTENT.subHeading}
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info & Why Work With Me */}
          <div className="space-y-8">
            {/* Get in Touch */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-6 text-white text-left">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white mb-1">Email</p>
                    <a
                      href={`mailto:${CTA_CONTENT.contactInfo.email}`}
                      className="text-gray-400 hover:text-blue-400 text-sm transition break-all"
                    >
                      {CTA_CONTENT.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white mb-1">Phone</p>
                    <a
                      href={`tel:${CTA_CONTENT.contactInfo.phone}`}
                      className="text-gray-400 hover:text-blue-400 text-sm transition"
                    >
                      {CTA_CONTENT.contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white mb-1">Location</p>
                    <p className="text-gray-400 text-sm">
                      {CTA_CONTENT.contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white text-left">
                Why work with me?
              </h3>
              <div className="space-y-3">
                {CTA_CONTENT.whyWorkWithMe.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green-400 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Compact Contact Form */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-300 text-left"
                  htmlFor="fullName"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-white"
                  placeholder={CTA_CONTENT.formPlaceholders.fullName}
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-300 text-left"
                  htmlFor="email"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-white"
                  placeholder={CTA_CONTENT.formPlaceholders.email}
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-300 text-left"
                  htmlFor="subject"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-white"
                  placeholder={CTA_CONTENT.formPlaceholders.subject}
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-300 text-left"
                  htmlFor="message"
                >
                  Message * ({charCount}/1000)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-white resize-none"
                  placeholder={CTA_CONTENT.formPlaceholders.message}
                  rows={4}
                  maxLength={1000}
                  required
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-blue-500"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-xs text-gray-400 leading-snug"
                >
                  I agree to be contacted regarding this inquiry and understand
                  my information will be handled according to privacy practices.
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full mt-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;