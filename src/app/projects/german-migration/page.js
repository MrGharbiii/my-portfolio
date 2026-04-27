import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function GermanMigrationProject() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-12">
        <Link
          href="/"
          className="text-[#ADB7BE] hover:text-white mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Custom WordPress Theme for German Migration Guide
        </h1>

        {/* Video Demo */}
        <div className="relative w-full rounded-xl overflow-hidden mb-12 border border-[#33353F] bg-black">
          <video
            src="/videos/meinweg.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto object-cover max-h-[70vh]"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <section className="mb-10 text-[#ADB7BE]">
              <h2 className="text-2xl font-bold text-white mb-4">
                Project Overview
              </h2>
              <p className="mb-4">
                A fully custom WordPress theme built from scratch to guide users
                migrating to Germany. It provides an intuitive layout, a modern
                aesthetic inspired by German national colors, and an interactive
                Visa Finder tool to simplify the process.
              </p>
            </section>

            <section className="mb-10 text-[#ADB7BE]">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Features
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-4">
                <li>
                  <strong className="text-white">Custom Architecture:</strong> A
                  fast, modular WordPress theme built from the ground up without
                  relying on heavy page builders.
                </li>
                <li>
                  <strong className="text-white">
                    Interactive Visa Finder:
                  </strong>{' '}
                  A dynamic JavaScript decision tree that guides users
                  step-by-step to assess their visa eligibility in real time.
                </li>
                <li>
                  <strong className="text-white">Optimized UX/UI:</strong> Fully
                  responsive design featuring custom blog layouts, tailored
                  comment sections, and subtle animations for a premium feel.
                </li>
              </ul>
            </section>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-[#181818] p-6 rounded-xl border border-[#33353F] sticky top-32">
              <h3 className="text-xl text-white font-bold mb-4">
                Project Info
              </h3>

              <div className="mb-6">
                <h4 className="text-sm text-[#ADB7BE] uppercase tracking-wider mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#121212] border border-[#33353F] px-3 py-1 rounded-full text-sm text-[#ADB7BE]">
                    WordPress CMS
                  </span>
                  <span className="bg-[#121212] border border-[#33353F] px-3 py-1 rounded-full text-sm text-[#ADB7BE]">
                    PHP
                  </span>
                  <span className="bg-[#121212] border border-[#33353F] px-3 py-1 rounded-full text-sm text-[#ADB7BE]">
                    Vanilla JS
                  </span>
                  <span className="bg-[#121212] border border-[#33353F] px-3 py-1 rounded-full text-sm text-[#ADB7BE]">
                    HTML5/CSS3
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm text-[#ADB7BE] uppercase tracking-wider mb-2">
                  Links
                </h4>
                {/* Placeholder for GitHub Link */}
                <a
                  href="#"
                  className="flex items-center gap-2 text-white hover:text-[#ADB7BE] transition-colors bg-[#121212] p-3 rounded border border-[#33353F]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>[ GitHub Link Placeholder ]</span>
                </a>
              </div>

              <div className="mb-2 mt-8">
                <h4 className="text-sm text-[#ADB7BE] uppercase tracking-wider mb-2">
                  Highlight
                </h4>
                <p className="text-[#ADB7BE] text-sm">
                  Created the "Visa Finder" tool completely with Vanilla JS to
                  keep page speeds fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
