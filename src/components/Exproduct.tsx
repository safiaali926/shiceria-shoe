"use client";
import Link from "next/link"
import Image from "next/image";
import StarRating from "@/components/rating";
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ExProduct() {
  return (
    <div>
        <Carousel className="pt-9">
<CarouselContent >
  <CarouselItem className="md:basis-1/3 lg:basis-1/5">
    <div className="relative group">
      {/* Default Image */}
      <Image
        src="/w3.webp"
        alt="Default Image"
        width={250}
        height={250}
        className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      {/* Hover Image */}
      <Image
        src="/w3h.webp"
        alt="Hover Image"
        width={250}
        height={250}
        className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      <div className="p-2">
      <p>Women's Statement Sneakers</p>
      <h3 className="text-red-500 flex">$115 <div className="flex ml-2"><StarRating rating={4} /><span className="text-gray-500 px-3">(88)</span>
      </div></h3>
      
      </div>
      <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
      <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

    </div>  
  </CarouselItem>
  

  <CarouselItem className="md:basis-1/3 lg:basis-1/5">
    <div className="relative group">
      {/* Default Image */}
      <Image
        src="/m3.webp"
        alt="Default Image"
        width={250}
        height={250}
        className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      {/* Hover Image */}
      <Image
        src="/m3h.webp"
        alt="Hover Image"
        width={250}
        height={250}
        className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      <div className="p-2">
      <p>Men's Street Vibe Sneakers</p>
      <h3 className="text-red-500 flex">$120 <div className="flex ml-2"><StarRating rating={4} /><span className="text-gray-500 px-3">(82)</span>
      </div></h3>
      </div>
      <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
      <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

    </div>  
  </CarouselItem>


  <CarouselItem className="md:basis-1/3 lg:basis-1/5">
    <div className="relative group">
      {/* Default Image */}
      <Image
        src="/w4.webp"
        alt="Default Image"
        width={250}
        height={250}
        className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      {/* Hover Image */}
      <Image
        src="/w4h.webp"
        alt="Hover Image"
        width={250}
        height={250}
        className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      <div className="p-2">
      <p>Women's Effortless Mules</p>
      <h3 className="text-red-500 flex">$110 <div className="flex ml-2"><StarRating rating={5} /><span className="text-gray-500 px-3">(56)</span>
      </div></h3>
      </div>
      <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
      <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

    </div>  
  </CarouselItem>



  <CarouselItem className="md:basis-1/3 lg:basis-1/5">
    <div className="relative group">
      {/* Default Image */}
      <Image
        src="/k3.webp"
        alt="Default Image"
        width={250}
        height={250}
        className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      {/* Hover Image */}
      <Image
        src="/k3h.webp"
        alt="Hover Image"
        width={250}
        height={250}
        className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      <div className="p-2">
      <p>Boys' ActivePlay School Shoes</p>
      <h3 className="text-red-500 flex">$105 <div className="flex ml-2"><StarRating rating={5} /><span className="text-gray-500 px-3">(48)</span>
      </div></h3>
      </div>
      <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
      <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

    </div>  
  </CarouselItem>


  <CarouselItem className="md:basis-1/3 lg:basis-1/5">
    <div className="relative group">
      {/* Default Image */}
      <Image
        src="/k4.webp"
        alt="Default Image"
        width={250}
        height={250}
        className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      {/* Hover Image */}
      <Image
        src="/k4h.webp"
        alt="Hover Image"
        width={250}
        height={250}
        className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      <div className="p-2">
      <p>Girls' Reflective Sandals</p>
      <h3 className="text-red-500 flex">$85 <div className="flex ml-2"><StarRating rating={4} /><span className="text-gray-500 px-3">(88)</span>
      </div></h3>
      </div>
      <div className="absolute top-3 right-7 bg-white p-2 rounded-full"><Heart /> </div>
      <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full"> <Eye /> </div>

    </div>  
  </CarouselItem>


  </CarouselContent>
      </Carousel>
    </div>
  );
}