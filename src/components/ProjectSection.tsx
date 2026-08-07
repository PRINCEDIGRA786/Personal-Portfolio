// import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

// Import images statically
import bazaarhubImg from "../assets/bazaarhub.png";
import apiappImg from "../assets/apiapp.png";
import instagramImg from "../assets/instagram.png";
import netflixImg from "../assets/netflixcopy.png";
import parcelhanger from "../assets/parcel-hanger.png";
import nexifyIndia from "../assets/nexify.png";
import jobsBankImg from "../assets/jobs-bank.png";

import portfolioImg from "../assets/portfolio.png";
import weatherImg from "../assets/weather.png";
import chatgptImg from "../assets/chatgpt.png";
import dribbleImg from "../assets/dribble.png";
import hairSkinLuxe from "../assets/hair-skin-luxe.png";

const projectsTab1 = [
  {
    pic: nexifyIndia,
    name: "Nexify India",
    description:
      "A modern brand website for a cosmetics and beauty product company. Also have admin panel.",
    link: "https://www.nexifyindia.in/",
  },
  {
    pic: parcelhanger,
    name: "Parcel Hanger",
    description:
      "A package tracking web app built with MERN stack and Tailwind CSS. Also have admin panel.",
    link: "https://www.info-parcel-hanger.com/",
  },
  {
    pic: jobsBankImg,
    name: "JobsBank",
    description:
      "A job portal web app built with MERN stack and Tailwind CSS. Also have admin panel.",
    link: "https://global-jobs-bank.vercel.app/",
  },
  {
    pic: hairSkinLuxe,
    name: "Hair Skin Luxe",
    description:
      "A modern brand website for a hair and skin care product company.",
    link: "https://www.hairskinluxe.com/",
  },
];

const projectsTab3 = [
  {
    pic: apiappImg,
    name: "Apiapp",
    description:
      "Create user-defined APIs using a custom-built MERN stack app.",
    link: "https://apiapp-frontend-i8deug2ca-princedigra786s-projects.vercel.app/",
  },
  {
    pic: weatherImg,
    name: "Weatherapp",
    description: "A weather forecast app using React and public APIs.",
    link: "https://weatherapp-one-fawn.vercel.app/",
  },
  {
    pic: chatgptImg,
    name: "Chatgptclone",
    description: "An AI chatbot clone using OpenAI API and MERN stack.",
    link: "https://client-ai-iota.vercel.app/",
  },
  {
    pic: dribbleImg,
    name: "Dribbleintern",
    description: "Login & signup screens inspired by Dribbble's UI in MERN.",
    link: "https://dribbleintern-3p6q.vercel.app/",
  },
];
const projectsTab2 = [
  {
    pic: instagramImg,
    name: "Instagramclone",
    description: "A clone of Instagram built with MERN stack and Tailwind CSS.",
    link: "https://instagramclone-frontend.vercel.app/",
  },
  {
    pic: netflixImg,
    name: "Netflixcopy",
    description: "A responsive Netflix clone with advanced UI and MERN stack.",
    link: "https://netflixcopy-oas4.vercel.app/",
  },
  {
    pic: bazaarhubImg,
    name: "Bazaarhub",
    description:
      "An eCommerce platform built with MERN stack and Tailwind CSS.",
    link: "https://ecommercemern-y3wn-dbfj8m1qv-princedigra786.vercel.app",
  },
  {
    pic: portfolioImg,
    name: "Portfolio.com",
    description:
      "My personal portfolio built with MERN stack and Tailwind CSS.",
    link: "https://portfoliofrontend-eight.vercel.app/",
  },
];

export default function Projects() {
  const [tab, setTab] = useState("1");

  const selectedProjects =
    tab === "1" ? projectsTab1 : tab === "2" ? projectsTab2 : projectsTab3;

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto min-h-screen" id="projects">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Projects 🚀
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {["1", "2", "3"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 cursor-pointer rounded-full text-sm font-semibold transition-all duration-300 ${
              tab === t
                ? "bg-purple-600 text-white shadow-md scale-105"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            }`}>
            Tab {t}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === "4" ? (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 font-extrabold text-3xl text-center mt-20">
          Developer is still working on it 🚧
        </motion.h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">
          {selectedProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              //   variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.pic}
                alt={project.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="text-sm mt-2 text-center">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
}
