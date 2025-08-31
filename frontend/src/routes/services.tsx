import BookingCalendar from "@/components/aboutus";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import OurPartners from "@/components/partener";
import Photos from "@/components/photo";
import ServiceCover from "@/components/servicescover";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import { FaMicrophone, FaCalendarAlt, FaMusic } from "react-icons/fa";
import React from "react";
import BookedCalendar from "@/components/BookedCalendar";

export const Route = createFileRoute("/services")({
  component: Services,
});

const services = [
  {
    title: "Master of Ceremony",
    description:
      "Bring energy, elegance, and seamless flow to your event with MC Tamba’s professional hosting. From weddings to corporate galas, MC Tamba ensures every moment is memorable.",
    icon: <FaMicrophone className="text-5xl text-white bg-[#584910] rounded-full p-3 shadow-lg" />,
  },
  {
    title: "Event Planning",
    description:
      "Full-service event planning for weddings, birthdays, and special occasions. We handle every detail—venue, decor, entertainment, and logistics—so you can enjoy your day stress-free.",
    icon: <FaCalendarAlt className="text-5xl text-white bg-[#584910] rounded-full p-3 shadow-lg" />,
  },
  {
    title: "Gospel Artist Booking",
    description:
      "Book top gospel artists to inspire and uplift your event. We connect you with talented performers who create a soulful, joyful atmosphere for your guests.",
    icon: <FaMusic className="text-5xl text-white bg-[#584910] rounded-full p-3 shadow-lg" />,
  },
];

function Services() {
  return (
    <>
      <ServiceCover />
      <section className="w-full min-h-screen bg-[#584910] py-16 px-0 flex flex-col justify-center items-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-white mb-4 text-center tracking-tight drop-shadow-lg">
            MC Tamba Services
          </h1>
        
          <p className="text-lg text-yellow-100 mb-12 text-center max-w-2xl">
            Elevate your event with MC Tamba’s unique blend of professionalism, charisma, and experience. Choose from our core services below to make your celebration unforgettable.
          </p>
            <div className="flex mb-8 w-full max-w-2xl justify-center items-center">
      <BookedCalendar/>

          </div>
          <div className="flex flex-row w-full justify-center items-stretch gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`flex-1 flex flex-col items-center px-6 py-10 bg-white/95 rounded-2xl shadow-2xl border-none ${
                  idx !== services.length - 1 ? "border-r-2 border-[#584910]/30" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  {/* Icon without circle, with brand color */}
                  {React.cloneElement(service.icon, { className: "text-5xl", color: "#584910" })}
                  <CardTitle className="mt-6 text-2xl font-bold text-[#584910] text-center">
                    {service.title}
                  </CardTitle>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 w-full">
            <ShimmerButton className="bg-[#584910] w-full max-w-[220px]">
              <span className="text-white font-semibold text-base">Book now</span>
            </ShimmerButton>
          </div>
        </div>
        
      </section>
      {/* <BookingCalendar /> */}
        <OurPartners />
        <Footer />
    </>
  );
}

export default Services;