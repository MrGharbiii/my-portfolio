"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProject = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" id="featured-project">
      <div className="bg-[#181818] rounded-xl overflow-hidden border border-[#33353F] shadow-lg flex flex-col md:flex-row">
        {/* Screenshot */}
        <div className="md:w-1/2 min-h-[300px] flex items-center justify-center bg-[#2b2b2b] relative">
          <Image 
            src="/images/meinwegmain.png" 
            alt="German Migration Guide Theme" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        
        {/* Short Description */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">Newest Project: German Migration Guide</h2>
          <p className="text-[#ADB7BE] text-lg mb-6 line-clamp-4">
            A fully custom WordPress theme built from scratch for a website focused on guiding users through migrating to Germany. It features a custom theme structure, a distinct header with a diagonal German flag accent, responsive design, and an interactive Javascript-powered Visa Finder decision tree tool.
          </p>
          <div>
            <Link
              href="/projects/german-migration"
              className="inline-block px-8 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white border border-white hover:text-black font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;