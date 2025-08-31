import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { FaMicrophone, FaCalendarAlt, FaMusic } from "react-icons/fa";
import { ShimmerButton } from "./magicui/shimmer-button";

export const Route = createFileRoute("/services")({
  component: Service,
});

const services = [
  {
    title: "MC services ",
    description:
      "Professional Master of Ceremony (MC) services to keep your event lively, engaging, and memorable. We ensure smooth flow and joyful moments for all your guests.",
    icon: <FaMicrophone className="text-4xl text-[#584910]" />,
  },
  {
    title: "Event Planning",
    description:
      "Comprehensive event planning for weddings, corporate events, and special occasions. We handle every detail so you can enjoy your celebration stress-free.",
    icon: <FaCalendarAlt className="text-4xl text-[#584910]" />,
  },
  {
    title: "Gospel Artist",
    description:
      "Book talented gospel artists to uplift your event with inspiring music and performances, creating a soulful and joyful atmosphere.",
    icon: <FaMusic className="text-4xl text-[#584910]" />,
  },
];

function Service() {
  return (
    <>
      <section className="relative bg-[#584910] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <Card className="bg-transparent border-none shadow-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              What We Offer
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white w-full md:w-[370px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                >
                  <CardHeader>
                    <div className="flex flex-col items-center">
                      {service.icon}
                      <CardTitle className="text-xl font-semibold text-[#584910] mt-4 text-center">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-center">{service.description}</p>
                  </CardContent>
                  <ShimmerButton className="shadow-2xl mt-6 bg-[#584910] w-full">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg w-full">
                      Learn more
                    </span>
                  </ShimmerButton>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Service;
