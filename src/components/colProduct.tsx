"use client";
import { useState } from "react";
import Image from "next/image";
import StarRating from "@/components/rating";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Type definitions
type ProductId = "product1" | "product2" | "product3" | "product4" | "product5";
type Color = "red" | "blue" | "gray" | "black" | "pink" | "white" | "brown";

interface Product {
  id: ProductId;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  colors: Partial<Record<Color, string>>; // Making each color optional
}

export default function ColProduct() {
  // State to manage selected colors for each product
  const [selectedColors, setSelectedColors] = useState<Record<ProductId, Color>>({
    product1: "brown",
    product2: "blue",
    product3: "white",
    product4: "black",
    product5: "white",
  });

  // Product data with optional color options
  const products: Product[] = [
    {
      id: "product1",
      name: "Women's Backless Moccs",
      price: "$115",
      rating: 4,
      reviews: 88,
      colors: {
        brown: "/c1.webp",
        black: "/c1h.webp",
      },
    },
    {
      id: "product2",
      name: "Men's Retro Style Sneakers",
      price: "$110",
      rating: 5,
      reviews: 72,
      colors: {
        blue: "/c2.webp",
        brown: "/c2h.webp",
        white: "/c2hh.webp",
      },
    },
    {
      id: "product3",
      name: "Men's Knit Strike Sneakers",
      price: "$112",
      rating: 5,
      reviews: 56,
      colors: {
        white: "/c3.webp",
        pink: "/c3h.webp",
        blue: "/c3hh.webp",
      },
    },
    {
      id: "product4",
      name: "Boys' ActivePlay School Shoes",
      price: "$105",
      rating: 5,
      reviews: 48,
      colors: {
        blue: "/c4.webp",
        black: "/c4h.webp",
      },
    },
    {
      id: "product5",
      name: "Girls' Reflective Sandals",
      price: "$85",
      rating: 4,
      reviews: 88,
      colors: {
        black: "/c5.webp",
        white: "/c5h.webp",
      },
    },
  ];

  // Function to handle color change
  const handleColorChange = (productId: ProductId, color: Color) => {
    setSelectedColors((prevState) => ({
      ...prevState,
      [productId]: color,
    }));
  };

  return (
    <div>
      <Carousel className="pt-9">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/3 lg:basis-1/5">
              <div className="relative group">
                {/* Product Image based on selected color */}
                <Image
                  src={product.colors[selectedColors[product.id]] || "/default-image.webp"} // Fallback to a default image if color is missing
                  alt={`${product.name} - ${selectedColors[product.id]}`}
                  width={250}
                  height={250}
                  className="transition-opacity duration-300 ease-in-out"
                />

                {/* Product Details */}
                <div className="p-2">
                  <p>{product.name}</p>
                  <h3 className="text-red-500 flex">
                    {product.price}
                    <div className="flex ml-2">
                      <StarRating rating={product.rating} />
                      <span className="text-gray-500 px-3">
                        ({product.reviews})
                      </span>
                    </div>
                  </h3>
                </div>

                {/* Color Options */}
                <div className="flex gap-2 mt-2">
                  {Object.keys(product.colors).map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 relative rounded-full border-2 ${
                        selectedColors[product.id] === color
                          ? "border-black"
                          : "border-white"
                      } shadow-md cursor-pointer`}
                      onClick={() => handleColorChange(product.id as ProductId, color as Color)}
                    >
                      {/* Display the color image as background */}
                      <Image
                        src={product.colors[color as Color] || "/default-image.webp"}
                        alt={`${color} color`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-3 right-7 bg-white p-2 rounded-full">
                  <Heart />
                </div>
                <div className="absolute top-14 mt-2 right-7 bg-white p-2 rounded-full">
                  <Eye />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
