"use client"
import BannerSliderWithSidebar from "@/components/banner";
import Image from "next/image";
import StarRating from "@/components/rating";
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import Category from "@/components/categories";
import BestP from "@/components/bestp"
import React, { useState, useEffect } from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ExProduct from "@/components/Exproduct";
import ColProduct from "@/components/colProduct";
import Sone from "@/components/sone";
import Service from "@/components/service";



export default function Home() {  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval); // Clean up on unmount
}, []);

  return (
    <div>
      <BannerSliderWithSidebar />
<div className="m-9">
      <div className="text-black p-2 border-pink-500 bg-white border-l-4">Today's</div>
<div className="flex gap-x-9">
      <div className="text-3xl text-black font-semibold	 pt-5">Fresh Sales</div>
      </div>
      
      <Carousel className="pt-9">
  <CarouselContent >
    <CarouselItem className="md:basis-1/3 lg:basis-1/5">
      <div className="relative group">
        {/* Default Image */}
        <Image
          src="/w1.webp"
          alt="Default Image"
          width={250}
          height={250}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <Image
          src="/w1h.webp"
          alt="Hover Image"
          width={250}
          height={250}
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        <div className="p-2">
        <p>Women's Edgy Mesh Trainers</p>
        <h3 className="text-red-500">$120 <span className="line-through text-gray-500">$160</span></h3>
        <div className="flex"><StarRating rating={4} /><span className="text-gray-500 px-3">(88)</span>
        </div>
        </div>
        <div className="bg-pink-500 px-2 w-14 text-white rounded-md absolute top-3 left-4">-40%</div>
        <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
        <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

      </div>  

    </CarouselItem>
    
    <CarouselItem className="md:basis-1/3 lg:basis-1/5">
      <div className="relative group">
        {/* Default Image */}
       <Image
          src="/m1.webp"
          alt="Default Image"
          width={250}
          height={250}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <Image
          src="/m1h.webp"
          alt="Hover Image"
          width={250}
          height={250}
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        <div className="p-2">
        <p>Men's Stylish Slip Ons</p>
        <h3 className="text-red-500">$110 <span className="line-through text-gray-500">$140</span></h3>
        <div className="flex"><StarRating rating={4} /><span className="text-gray-500 px-3">(55)</span>
        </div>
        </div>
        <div className="bg-pink-500 px-2 w-14 text-white rounded-md absolute top-3 left-4">-35%</div>
        <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
        <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

      </div>  


    </CarouselItem>


    <CarouselItem className="md:basis-1/3 lg:basis-1/5">
      <div className="relative group">
        {/* Default Image */}
        <Image
          src="/k1.webp"
          alt="Default Image"
          width={250}
          height={250}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <Image
          src="/k1h.webp"
          alt="Hover Image"
          width={250}
          height={250}
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        <div className="p-2">
        <p>Daily Wear Girls Sandals</p>
        <h3 className="text-red-500">$90 <span className="line-through text-gray-500">$120</span></h3>
        <div className="flex"><StarRating rating={5} /><span className="text-gray-500 px-3">(78)</span>
        </div>
        </div>
        <div className="bg-pink-500 px-2 w-14 text-white rounded-md absolute top-3 left-4">-45%</div>
        <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
        <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

      </div>  
    </CarouselItem>


    <CarouselItem className="md:basis-1/3 lg:basis-1/5">
      <div className="relative group">
        {/* Default Image */}
        <Image
          src="/w2.webp"
          alt="Default Image"
          width={250}
          height={250}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <Image
          src="/w2h.webp"
          alt="Hover Image"
          width={250}
          height={250}
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        <div className="p-2">
        <p>Daily Wear Girls Sandals</p>
        <h3 className="text-red-500">$90 <span className="line-through text-gray-500">$120</span></h3>
        <div className="flex"><StarRating rating={5} /><span className="text-gray-500 px-3">(78)</span>
        </div>
        </div>
        <div className="bg-pink-500 px-2 w-14 text-white rounded-md absolute top-3 left-4">-45%</div>
        <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
        <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

      </div>  
    </CarouselItem>



    <CarouselItem className="md:basis-1/3 lg:basis-1/5">
      <div className="relative group">
        {/* Default Image */}
        <Image
          src="/m2.webp"
          alt="Default Image"
          width={250}
          height={250}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <Image
          src="/m2h.webp"
          alt="Hover Image"
          width={250}
          height={250}
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        <div className="p-2">
        <p>Sturdy Chappals for Men</p>
        <h3 className="text-red-500">$115 <span className="line-through text-gray-500">$100</span></h3>
        <div className="flex"><StarRating rating={5} /><span className="text-gray-500 px-3">(69)</span>
        </div>
        </div>
        <div className="bg-pink-500 px-2 w-14 text-white rounded-md absolute top-3 left-4">-35%</div>
        <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
        <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>
      </div>  
    </CarouselItem>


    <CarouselItem className="md:basis-1/3 lg:basis-1/5">
      <div className="relative group">
        {/* Default Image */}
        <Image
          src="/k2.webp"
          alt="Default Image"
          width={250}
          height={250}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <Image
          src="/k2h.webp"
          alt="Hover Image"
          width={250}
          height={250}
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        <div className="p-2">
        <p>Boys Color Block Sneakers</p>
        <h3 className="text-red-500">$105 <span className="line-through text-gray-500">$98</span></h3>
        <div className="flex"><StarRating rating={5} /><span className="text-gray-500 px-3">(82)</span>
        </div>
        </div>
        <div className="bg-pink-500 px-2 w-14 text-white rounded-md absolute top-3 left-4">-15%</div>
        <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
        <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>
      </div>  
    </CarouselItem>
    
  </CarouselContent>
</Carousel>

    </div>
    <div className="flex justify-center items-center h-full">
  <a href="/"><button className="bg-pink-500 px-4 py-2 text-white rounded-md">
    View All Products
  </button></a>
</div>



<div className="m-9">
      <div className="text-black p-2 border-pink-500 bg-white border-l-4">Categories</div>
<div className="flex gap-x-9">
      <div className="text-3xl text-black font-semibold	 pt-5">Browse by Category</div>
      </div>
      
      <Category/>



      
</div>

{/* Best Selling Products */}
<div className="m-9">
      <div className="text-black p-2 border-pink-500 bg-white border-l-4">This Month</div>
<div className="flex gap-x-9 justify-between">
      <div className="text-3xl text-black font-semibold	 pt-5">Best Selling Products</div>

      <div className="flex justify-center items-center mr-9 h-full">
  <a href="/"><button className="bg-pink-500 px-6 py-2 text-white rounded-md">
    View All
  </button></a>
</div>


      </div>
      <BestP/>
      </div>

      <div className="relative w-full m-9 flex justify-center items-center bg-black text-white">
      {/* Banner Image */}
      <Image
        src="/b5.png"
        alt="banner"
        width={1170}
        height={400}
        className="w-full object-cover opacity-70"
      />

      {/* Text and Timer Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-10">
        {/* Category Text */}
        <h3 className="text-pink-500 text-xl mb-2">Upto 50% Off</h3>
        
        {/* Main Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Fresh Sale
        </h1>
        
        {/* Timer */}
        <div className="flex mt-6 gap-6 text-center">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full w-20 h-20 flex items-center justify-center">
                <p className="text-3xl font-bold">
                  {timeLeft[unit as keyof typeof timeLeft]}
                </p>
              </div>
              <p className="text-sm mt-2 capitalize">{unit}</p>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-500 transition-all"
        >
          Buy Now!
        </a>
      </div>
      
    </div>

    <div className="m-9">
      <div className="text-black p-2 border-pink-500 bg-white border-l-4">Our Products</div>
<div className="flex gap-x-9 justify-between">
      <div className="text-3xl text-black font-semibold	 pt-5">Explore Our Products</div>

      <div className="flex justify-center items-center mr-9 h-full">
  
</div></div>
<div><ExProduct/>
</div>

<div> <ColProduct/>
</div>

</div>

<div className="flex justify-center items-center h-full mt-9">
  <a href="/"><button className="bg-pink-500 px-4 py-2 text-white rounded-md">
    View All Products
  </button></a>
</div>



<div className="m-9">
      <div className="text-black p-2 border-pink-500 bg-white border-l-4">Featured</div>
<div className="flex gap-x-9 justify-between">
      <div className="text-3xl text-black font-semibold	 pt-5">New Arrival</div>

      <div className="flex justify-center items-center mr-9 h-full">
  
</div>




</div>



</div>

<div>
  <Sone/>
</div>

<div>
  <Service/>
</div>




    </div>
  );
}
