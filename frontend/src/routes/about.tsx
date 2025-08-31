import BookingCalendar from '@/components/aboutus';
import Footer from '@/components/footer';
import OurPartners from '@/components/partener';
import { createFileRoute } from '@tanstack/react-router'
import { FaYoutube, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { useRef, useState } from "react";

const galleryPhotos = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
  "/gallery/photo7.jpg",
  "/gallery/photo8.jpg",
  "/gallery/photo9.jpg",
  "/gallery/photo10.jpg",
  "/gallery/photo11.jpg",
];

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function PinterestHorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse and touch drag scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Arrow scroll
  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  // Split images into two rows for a staggered Pinterest effect
  const topRow = galleryPhotos.filter((_, idx) => idx % 2 === 0);
  const bottomRow = galleryPhotos.filter((_, idx) => idx % 2 !== 0);

  return (
    <section
      className="w-full bg-[#584910] py-12 relative"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Photo Gallery</h2>
      <p className="text-white text-center mb-6 max-w-2xl mx-auto">
        Swipe or drag to explore MC Tamba's event moments. Use arrows or your finger to scroll through our unique, Pinterest-style gallery!
      </p>
      {/* Arrow buttons */}
      <button
        aria-label="Scroll left"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#584910]/80 hover:bg-[#584910] text-white rounded-full p-2 shadow-lg transition hidden md:block"
        onClick={() => scrollBy(-320)}
        type="button"
      >
        <span style={{ fontSize: 32 }}>&larr;</span>
      </button>
      <button
        aria-label="Scroll right"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#584910]/80 hover:bg-[#584910] text-white rounded-full p-2 shadow-lg transition hidden md:block"
        onClick={() => scrollBy(320)}
        type="button"
      >
        <span style={{ fontSize: 32 }}>&rarr;</span>
      </button>
      <div className="w-full overflow-x-auto no-scrollbar relative">
        <div
          ref={scrollRef}
          className={`flex flex-col gap-8 px-6 cursor-${isDragging ? "grabbing" : "grab"}`}
          style={{ minHeight: "480px" }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {/* Top Row */}
          <div className="flex gap-6">
            {topRow.map((src, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-end"
                style={{
                  minWidth: "220px",
                  maxWidth: "260px",
                  height: `${220 + ((idx % 3) * 60)}px`,
                }}
              >
                <img
                  src={src}
                  alt={`Gallery photo top ${idx + 1}`}
                  className="rounded-xl shadow-lg bg-white object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Bottom Row */}
          <div className="flex gap-6 justify-center">
            {bottomRow.map((src, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start"
                style={{
                  minWidth: "220px",
                  maxWidth: "260px",
                  height: `${160 + ((idx % 3) * 60)}px`,
                }}
              >
                <img
                  src={src}
                  alt={`Gallery photo bottom ${idx + 1}`}
                  className="rounded-xl shadow-lg bg-white object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteComponent() {
  return (
    <>
      <section className="min-h-screen bg-[#584910] flex flex-col items-center justify-start py-16 px-4">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/mctamba.jpg"
            className="w-48 h-48 rounded-full object-cover object-top border-4 border-white shadow-xl mb-4"
            alt="MC Tamba"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            MC Tamba
          </h1>
          <h2 className="text-lg text-yellow-200 text-center mb-4">
            Master of Ceremony & Event Specialist
          </h2>
          {/* Social Links below h2 */}
          <div className="flex gap-6 mb-4">
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-3xl text-white hover:text-red-600 transition" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-3xl text-white hover:text-pink-500 transition" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter className="text-3xl text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://wa.me/255700000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-3xl text-white hover:text-green-500 transition" />
            </a>
          </div>
        </div>
        {/* Biography & Experience */}
        <div className="max-w-2xl bg-white/90 rounded-xl shadow-lg p-8 text-[#584910] mb-8">
          <h3 className="text-2xl font-semibold mb-4">Biography</h3>
          <p className="mb-4">
            MC Tamba is a renowned Master of Ceremony with over a decade of experience in hosting and coordinating events across Tanzania and beyond. Known for his vibrant personality, professionalism, and ability to engage audiences of all sizes, MC Tamba has become a trusted name for weddings, corporate functions, concerts, and special occasions.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Hosted 500+ weddings, corporate galas, and community events with outstanding reviews.
            </li>
            <li>
              Expert in event flow management, guest engagement, and creating memorable moments.
            </li>
            <li>
              Collaborated with top event planners, venues, and artists in the region.
            </li>
            <li>
              Passionate about uplifting every celebration with energy, humor, and professionalism.
            </li>
          </ul>
        </div>
      </section>
      {/* Pinterest-style horizontal gallery with background image, explanation, and arrow/finger scroll */}
      <PinterestHorizontalGallery />
      <BookingCalendar />
      <OurPartners />
      <Footer />
    </>
  );
}
