"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 8,
    title: "Obesity Profiles Classifier",
    description: "Random Forest model (scikit-learn) classifying obesity profiles with a 73.4% F1-score, reducing manual diagnostic effort for nutritionists.",
    image: "/images/projects/8.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://profile-prediction-website.vercel.app",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "SAP Quality Management with Fiori",
    description: "SAPUI5 Fiori UIs that streamlined defect detection & refund processes for quality managers.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },
   {
    id: 9,
    title: "Slim&Healthy Digital Health Assistant",
    description: "cross-platform health app (React Native, Node.js/Express, React.js dashboard) adopted by early users for personalized health tracking.",
    image: "/images/projects/9.png",
    tag: ["All","AI","Mobile","Web"],
    gitUrl: "https://admin-dashboard-slim-healthy.vercel.app",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Easybank op",
    description: "Simplify banking operations with a user-friendly interface and essential banking features using Vue.js, Express.js and OCR Api",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MrGharbiii/Easy-bank-op",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Olea Divina Website",
    description: "Product Website for Olive Oil Company using React.js",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://olea-divina.vercel.app",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pizzar.io",
    description: "Full JavaFX restaurant ordering app with client-server",
    image: "/images/projects/3.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/WAJDA9/Pizzario",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "SWAPI Paginator",
    description: "Simple Next.js Paginator for the Starwars API",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MrGharbiii/SWAPI-explorer",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React.js Authentication Template",
    description: "Authentication using React.js",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MrGharbiii/Authentification-Using-React.js",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React-native Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MrGharbiii/whatsapp-like-react-native",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "React.js E-commerce Website",
    description: "Fetching Objects from Express.js server",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MrGharbiii/e-shop-electronics",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
