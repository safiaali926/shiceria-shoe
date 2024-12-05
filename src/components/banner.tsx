"use client";

import Image from "next/image";
import { useState } from "react";

interface Slide {
  title: string;
  description: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    title: "Women's Collection",
    description: "Empowering Every Step with Style and Grace!",
    image: "/b1.png", // Replace with your image path
    link: "/",
  },
  {
    title: "Men's Collection",
    description: "Shoes That Move You Forward!",
    image: "/b2.png", // Replace with your image path
    link: "/",
  },
  {
    title: "Kid's Collection",
    description: "Joyful Steps, Happy Kids!",
    image: "/b3.png", // Replace with your image path
    link: "/",
  },
  {
    title: "Watches for All",
    description: "Where Time Meets Fashion!",
    image: "/b4.png", // Replace with your image path
    link: "/",
  },
];

const sidebarLinks = [
  { 
    label: "Women's Collection", 
    link: "#", 
    subLinks: [
      { label: "Sneakers", link: "#" },
      { label: "Flats", link: "#" },
      { label: "Pumps", link: "#" },
      { label: "Heels", link: "#" },
      { label: "Boots", link: "#" },
    ]
  },
  { 
    label: "Men's Collection", 
    link: "#", 
    subLinks: [
      { label: "Sneakers", link: "#" },
      { label: "Loafers & Moccs", link: "#" },
      { label: "Formal Shoes", link: "#" },
      { label: "Slippers", link: "#" },
      { label: "Sandals", link: "#" },

    ]
  },
  { 
    label: "Boy's Collection", 
    link: "#", 
    subLinks: [
      { label: "Sneakers", link: "#" },
      { label: "Sandals", link: "#" },
      { label: "Slippers", link: "#" },
      { label: "School", link: "#" },
    ]
  },
  { 
    label: "Girl's Collection", 
    link: "#", 
    subLinks: [
      { label: "Sneakers", link: "#" },
      { label: "Flats", link: "#" },
      { label: "Pumps", link: "#" },
      { label: "Sandals", link: "#" },
      { label: "School", link: "#" },
    ]
  },


  { 
    label: "Watches", 
    link: "#", 
    subLinks: [
      { label: "Women", link: "#" },
      { label: "Men", link: "#" },
      { label: "Kids", link: "#" },
    ]
  },

  { label: "Fresh Sale", link: "#" },
  { label: "New In", link: "#" },
  { label: "Track your Order", link: "#" },

];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [expanded, setExpanded] = useState<string | null>(null); // To track expanded section

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleSubLinks = (label: string): void => {
    setExpanded(expanded === label ? null : label); // Toggle visibility of sub-links
  };

  return ( <div className="">
    <div className="flex ">
        <div>
      {/* Sidebar */}
      <aside className="w-64 bg-white pl-9 border-r  hidden md:block">
        <nav className="p-4">
          <ul className="space-y-4">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => link.subLinks && toggleSubLinks(link.label)} // Only toggle if subLinks exist
                >
                  <a
                    href={link.link}
                    className="block text-gray-800 hover:text-pink-500 font-medium"
                  >
                    {link.label}
                  </a>
                  {/* Add custom toggle button design */}
                  {link.subLinks && (
                    <button
                      className="transform transition-transform duration-300 ease-in-out"
                      style={{
                        transform: expanded === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        className="text-gray-600 hover:text-pink-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {/* Conditionally render sub-links */}
                {link.subLinks && expanded === link.label && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subLink.link}
                          className="block text-gray-600 hover:text-pink-500"
                        >
                          {subLink.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
</div>
      {/* Banner Slider */}
      <div>
      <div className="flex relative">
        <div className="relative w-full h-64 overflow-hidden bg-black text-white">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 h-64 flex items-center justify-center relative"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="relative z-10 p-8">
                  <h3 className="text-lg">{slide.title}</h3>
                  <h1 className="text-3xl font-bold mt-2">{slide.description}</h1>
                  <a
                    href={slide.link}
                    className="mt-4 inline-block px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
          >
            &#8594;
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-red-500" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  
  


    </div>

    
  );
}
