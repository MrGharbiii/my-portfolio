"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200">
              Hello, I&apos;m{" Ahmed"}
            </span> 
            <br></br>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Data Analyst",
                1000,
                "Wordpress Developer",
                2000,
                "SAPUI5 Developer",
                1000,
               
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Full-stack web developer specializing in building modern, responsive web applications. Skilled in React, WordPress, REST APIs, and backend integration. Experienced in developing performant, scalable interfaces and delivering clean, user-focused digital experiences.
          </p>
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-teal-200 w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/imgg.png"
              alt="hero image"
              priority={true}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
