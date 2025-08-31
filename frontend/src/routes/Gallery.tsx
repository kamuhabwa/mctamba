import { createFileRoute } from '@tanstack/react-router'
import Footer from "@/components/footer";
import OurPartners from '@/components/partener';

const photos = [
  // "/photo01.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
  "/gallery/photo11.jpg",
  "/gallery/photo7.jpg",
  "/gallery/photo8.jpg",
  "/gallery/photo10.jpg",
  "/gallery/photo1.jpg",


  // Add more image paths as needed
];

export const Route = createFileRoute('/Gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <><section className="min-h-screen w-full bg-[#584910] flex flex-col items-center py-12 px-2">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Gallery
      </h1>
      <div
        className="w-full max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={src}
              alt={`Gallery photo ${idx + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy" />
          </div>
        ))}
      </div>

    </section>
    <OurPartners/>
    <div className="w-full ">
        <Footer />
      </div></>
  );
}
