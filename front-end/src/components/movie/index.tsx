import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { dataMovie } from "@/app/data";
import { useRef, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CirclePlay, CirclePlus, ThumbsUp } from "lucide-react";

export const works = [
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },

    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
]

export function Movie() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const duplicatedData = [...works, ...works]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;


        if (scrollElement) {
            const handleScroll = () => {
                const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
                if (scrollLeft <= 0) {
                    scrollElement.scrollTo({ left: scrollWidth / 2, behavior: "instant" });
                }

                if (scrollLeft + clientWidth >= scrollWidth) {
                    scrollElement.scrollTo({ left: scrollWidth / 2 - clientWidth, behavior: "instant" });
                }
            };

            handleScroll()
            scrollElement.addEventListener("scroll", handleScroll);

            return () => {
                scrollElement.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <div className="relative w-full flex items-center bottom-0">
            <Button
                onClick={() => scrollRef.current?.scrollBy({ left: -260 * 6, behavior: "smooth" })}
                className="absolute left-0 z-10 p-2 bg-gray-800 text-white w-[50px] h-[160px]"
                style={{ bottom: "36%" }}
            >
                ◀
            </Button>

            <ScrollArea className="w-full overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex space-x-4 pb-4 overflow-hidden scroll-smooth snap-x snap-mandatory items-center"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none", minHeight: "520px" }}
                >
                    {duplicatedData.map((v, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative shrink-0 rounded-md snap-start"

                        >
                            <motion.img
                                src={v.art}
                                alt="hover"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                                className="w-[260px] h-[160px] object-cover rounded-lg"
                            />
                            {hoveredIndex === i && (
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-lg rounded-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1.5 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    style={{
                                        top: -50,
                                        left: 0,
                                        transform: "translate(-50%, -50%)",
                                        width: "260px",
                                        height: "300px",
                                        zIndex: 10,
                                    }}
                                >
                                    <div className="h-full w-full flex flex-col justify-between ">
                                        <div className="w-full h-1/2 flex items-center justify-center">
                                            <img
                                                src={v.art}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="w-full h-1/2 p-4 flex flex-col gap-4">
                                            <div className="flex gap-2">
                                                <CirclePlay size={30} />
                                                <CirclePlus size={30} />
                                                <ThumbsUp size={30} />
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold">{v.artist}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}



                        </div>
                    ))}
                </div>
            </ScrollArea>

            <Button
                onClick={() => scrollRef.current?.scrollBy({ left: 260 * 6, behavior: "smooth" })}
                className="absolute right-0 z-10 p-2 bg-gray-800 text-white h-[160px] w-[50px] items-center"
                style={{ bottom: "36%" }}
            >
                ▶
            </Button>
        </div>
    );

}
