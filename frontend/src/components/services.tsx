

import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

const videoList = [
  "/events01.mp4",
  "/events03.mp4",
  "/events02.mp4",
  "/events04.mp4",
  "/events01.mp4",
  "/events01.mp4",
];

function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative bg-[#584910] min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/services.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Events
        </h1>

 <p className="text-white text-center max-w-2xl mx-auto mb-10 text-lg">
  MC Tamba is a talented Master of Ceremony, event planner, and gospel artist.  
  He brings energy, creativity, and inspiration to every stage he steps on.
</p>


        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 px-2 touch-pan-x snap-x snap-mandatory scroll-smooth cursor-grab"
        >
          {videoList.map((video, index) => (
            <Card
              key={index}
              className="snap-start flex-shrink-0 w-[90vw] sm:w-[500px] h-[340px] bg-[#584910] shadow-xl rounded-xl overflow-hidden transparent"
          >
              <CardContent className="p-0 h-full w-full">
                <video
                  src={video}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

