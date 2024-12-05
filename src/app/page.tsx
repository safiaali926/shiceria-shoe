"use client"
import BannerSliderWithSidebar from "@/components/banner";


const countdownDate = new Date('2024-05-19T23:18:07')


export default function Home() {
  return (
    <div>
      <BannerSliderWithSidebar />
<div className="m-9">
      <div className="text-black p-2 border-pink-500 bg-white border-l-4">Today's</div>
<div className="flex gap-x-9">
      <div className="text-3xl text-black font-semibold	 pt-5">Fresh Sales</div>

     
  
    </div>


    </div>
    </div>
  );
}
