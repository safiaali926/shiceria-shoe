import Image from "next/image";

export default function CollageLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {/* Left Column */}
      <div className="relative">
        <Image
          src="/s2.png"
          alt="Fresh Sale"
          width={1170}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
          <h3 className="text-pink-200 text-lg">Fresh Arrivals in Roller Skates</h3>
          <h1 className="text-3xl lg:text-4xl font-bold">Roll into the New Year with Style!</h1>
          <button className="mt-2 bg-white text-black px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-rows-2 gap-4">
        {/* Top Row - Single Image */}
        <div className="relative">
          <Image
            src="/s1.png"
            alt="Women's Collection"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
            <h3 className="text-pink-200 text-lg">New Collection for Men</h3>
            <h1 className="text-2xl lg:text-3xl font-bold">Step Up Your Style!</h1>
            <button className="mt-2 bg-white text-black px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Row - Two Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative">
            <Image
              src="/s3.png"
              alt="Speakers"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
              <h3 className="text-pink-200 text-lg drop-shadow-2xl">Shop the Latest Ladies' Heels </h3>
              <h1 className="text-2xl lg:text-3xl font-bold">Classy Comfort</h1>
              <button className="mt-2 bg-white text-black px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <Image
              src="/s4.png"
              alt="Perfume"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
              <h3 className="text-pink-200 text-lg drop-shadow-2xl">Kid's Collection</h3>
              <h1 className="text-2xl lg:text-3xl font-bold">Playful Styles</h1>
              <button className="mt-2 bg-white text-black px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
