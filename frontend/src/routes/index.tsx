
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { TypeAnimation } from "react-type-animation";
import Services from "@/components/services";
import { WorkWithUsForm } from "@/components/workwithus";
import OurPartners from "@/components/partener";
import Footer from "@/components/footer";
import { OurImpact } from "@/components/ourimpact";
import BookingCalendar, {  } from "@/components/aboutus";
import TestimonialSection from "@/components/testmony";
import Service from "@/components/service";

const bannerImages = [
  "/home01.jpg",
  "/home02.jpg",
  "/home03.jpg",
];

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % bannerImages.length
      );
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Fading Images */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        {/* Rotating Images with Crossfade */}
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/85 via-indigo-800/60 to-transparent" />
          </div>
        ))}

        <div className="relative text-center text-white z-10 max-w-7xl mx-auto w-full">
          <Card className="bg-transparent border-none shadow-none" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-200">
            Mc Tamba
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 animate-fade-in-up animation-delay-400">
            Making Events great, one step at a time
          </p>
          <TypeAnimation
            sequence={[
              "Wedding Ceremonies",
              2000,
              "Gospel Events",
              2000,
              "Events Planner",
              2000,
              "Graduations Ceremonies",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl text-purple-300 animate-fade-in-up animation-delay-600"
          />

              <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-60 space-y-4">
  {/* Twitter/X */}
   <a
    href="https://twitter.com/yourhandle"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center z-50 rounded-full bg-[#000000] hover:scale-105 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center z-50 justify-center rounded-full bg-[#1877F2] hover:scale-105 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
    >
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/yourwhatsapplink"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:scale-105 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347m-5.421 6.449h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.86 9.86 0 015.262 1.53 9.825 9.825 0 013.627 4.169 9.853 9.853 0 01-8.893 13.077m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .21 5.285.207 11.841c0 2.085.547 4.118 1.588 5.918L0 24l6.367-1.668a11.81 11.81 0 005.675 1.447h.005c6.553 0 11.84-5.286 11.843-11.841a11.821 11.821 0 00-3.5-8.449" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/mc_tamba"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-105 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
    >
      <path d="M7.75 2C5.12665 2 3 4.12665 3 6.75V17.25C3 19.8734 5.12665 22 7.75 22H16.25C18.8734 22 21 19.8734 21 17.25V6.75C21 4.12665 18.8734 2 16.25 2H7.75ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM18 5.5C18.5523 5.5 19 5.94772 19 6.5C19 7.05228 18.5523 7.5 18 7.5C17.4477 7.5 17 7.05228 17 6.5C17 5.94772 17.4477 5.5 18 5.5ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" />
    </svg>
  </a>

      </div>
        </div>

        <style>{`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

     
      <Services />
      <Service />
      <BookingCalendar/>
      {/* <WorkWithUsForm /> */}
      {/* <OurImpact /> */}
      <TestimonialSection />
      <OurPartners />
      <Footer />
    </>
  );
}

export default HomePage;
