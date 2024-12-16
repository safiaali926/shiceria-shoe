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

export default function BestP() {
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
      <h3 className="text-red-500">$115 <span className="line-through text-gray-500">$130</span></h3>
      <div className="flex"><StarRating rating={4} /><span className="text-gray-500 px-3">(88)</span>
      </div>
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
      <h3 className="text-red-500">$120 <span className="line-through text-gray-500">$140</span></h3>
      <div className="flex"><StarRating rating={5} /><span className="text-gray-500 px-3">(48)</span>
      </div>
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
      <h3 className="text-red-500">$110 <span className="line-through text-gray-500">$130</span></h3>
      <div className="flex"><StarRating rating={5} /><span className="text-gray-500 px-3">(58)</span>
      </div>
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
      <h3 className="text-red-500">$95 <span className="line-through text-gray-500">$115</span></h3>
      <div className="flex"><StarRating rating={4} /><span className="text-gray-500 px-3">(98)</span>
      </div>
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
      <h3 className="text-red-500">$125 <span className="line-through text-gray-500">$130</span></h3>
      <div className="flex"><StarRating rating={4} /><span className="text-gray-500 px-3">(58)</span>
      </div>
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