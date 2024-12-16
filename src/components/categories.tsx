"use client";
import Link from "next/link"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Category() {
  return (
    <div>
      <Carousel className="pt-9">
        <CarouselContent className="gap-1"> {/* Add gap here */}
          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i1.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Heels</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i1h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Heels</Link>
              </div>
            </div>
          </CarouselItem>


          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i2.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Sneakers</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i2h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Sneakers</Link>
              </div>
            </div>
          </CarouselItem>






          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i5.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Flats</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i5h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Flats</Link>
              </div>
            </div>
          </CarouselItem>



          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i7.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Boots</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i7h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Boots</Link>
              </div>
            </div>
          </CarouselItem>


          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i3.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Slippers</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i3h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Slippers</Link>
              </div>
            </div>
          </CarouselItem>



          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i4.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Formal</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i4h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Formal</Link>
              </div>
            </div>
          </CarouselItem>


          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i6.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Loafers & Moccs</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i6h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Loafers & Moccs</Link>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/4 lg:basis-1/6"> {/* Adjust item basis for less spacing */}
            <div className="group relative flex items-center justify-center border w-40 h-40 cursor-pointer">
              {/* Default State */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/i8.png"
                  alt="Default Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-black font-medium">Pumps</Link>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Image
                  src="/i8h.png"
                  alt="Hover Image"
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <Link href="/" className="text-white font-medium">Pumps</Link>
              </div>
            </div>
          </CarouselItem>


        </CarouselContent>
      </Carousel>
    </div>
  );
}
