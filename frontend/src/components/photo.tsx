import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
// Remove route definition from this component file.
// Define the route in /src/routes/photos.tsx if you want this to be a page component.

const photoList = [
  "/photo01.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
];

function Photos() {
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
      className="relative bg-[#584910] min-h-screen  min-w-full py-8  sm:px-6 lg:px-8"
    
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Photo Gallery
        </h1>

        <p className="text-white text-center max-w-2xl mx-auto mb-10 text-lg">
          Explore moments from MC Tamba's events, celebrations, and special occasions.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 px-2 touch-pan-x snap-x snap-mandatory scroll-smooth cursor-grab"
        //     style={{
        // backgroundImage: "url('/photos.png')",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
    //   }}
        >
          {photoList.map((photo, index) => (
            <Card
              key={index}
              className="snap-start flex-shrink-0  bg-[#584910] shadow-xl rounded-xl overflow-hidden"
            >
              <CardContent className="p-0 h-full w-full">
                <img
                  src={photo}
                  alt={`MC Tamba event photo ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Photos;

