'use client'
import { NavigationMenuHome } from "@/components/navigate";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { dataMovie } from "./data";
import { Movie } from "@/components/movie";
export default function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 200, 0.5);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black ">
      <div className="relative w-full h-screen">
        <img
          src="https://cms.dmpcdn.com/movie/2024/10/03/e0453de0-816c-11ef-af21-8df0975922ba_webp_original.webp"
          alt="Full screen background"
          className="w-full h-[90%] object-cover"
        />
      </div>
      <div className="fixed top-0 px-5 w-full z-50">
        <NavigationMenuHome
          className="w-full flex items-center justify-between p-4 bg-black transition-opacity duration-300"
          style={{ opacity }}
        />
      </div>
      <div className="px-5">
        <div className="absolute  " style={{ top: "50%" }}>
          <Button>xxx</Button>
        </div>

        <div className="absolute  bottom-[-150px] z-10 ">
          <Movie />
        </div>
      </div>
    </div>
  );
}
