

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { createFileRoute } from "@tanstack/react-router";
  import {
    FaCode,
    FaMobileAlt,
    FaShieldAlt,
    FaLightbulb,
    FaBullhorn,
    FaNetworkWired,
    FaRobot,
    FaComments,
    FaChartBar,
  } from "react-icons/fa";
import { ShimmerButton } from "./components/magicui/shimmer-button";
import { FlickeringGrid } from "./components/magicui/flickering-grid";
//   import { FlickeringGrid } from "./magicui/flickering-grid";
// import { ShimmerButton } from "./magicui/shimmer-button";

  
  export const Route = createFileRoute("/services")({
    component: Services,
  });

  
  
  const services = [
    {
      title: "Web Development",
      description:
        "Crafting responsive and dynamic websites and web applications tailored to your business needs, ensuring seamless user experiences across devices.",
      icon: <FaCode className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Building innovative mobile applications for iOS and Android, leveraging native features to deliver engaging and functional user experiences.",
      icon: <FaMobileAlt className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Cyber Security",
      description:
        "Protecting your digital assets with robust security measures, including threat detection and data protection, to safeguard against cyber attacks.",
      icon: <FaShieldAlt className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Brand Development",
      description:
        "Creating a distinctive brand identity that resonates with your audience, aligning your image and values with business objectives.",
      icon: <FaLightbulb className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Marketing Strategy",
      description:
        "Developing strategic plans to boost brand awareness and attract customers through targeted campaigns and data-driven insights.",
      icon: <FaBullhorn className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Integrating smart devices and sensors to create interconnected systems that enhance efficiency, automate processes, and provide real-time data insights.",
      icon: <FaNetworkWired className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Artificial Intelligence (AI)",
      description:
        "Developing intelligent solutions that leverage machine learning, natural language processing, and computer vision to solve complex problems and drive innovation.",
      icon: <FaRobot className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Consultation",
      description:
        "Offering expert guidance and strategic advice to help businesses navigate technology challenges, optimize operations, and achieve their goals.",
      icon: <FaComments className="text-4xl text-[#ff6600]" />,
    },
    {
      title: "Data Analysis",
      description:
        "Utilizing advanced analytical techniques to interpret data, uncover patterns, and provide actionable insights that inform decision-making and strategy.",
      icon: <FaChartBar className="text-4xl text-[#ff6600]" />,
    },
  ];
  
  function Services() {
    return (
      <>
        <section className="relative bg-indigo-900  min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          {/* Background grid animation */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <FlickeringGrid
              className="size-full w-full h-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            //   height={800}
            //   width={800}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#ff6600]-900/85 via-indigo-800/60 to-transparent" /> */}
          </div>
  
          {/* Main content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <Card className="bg-transparent border-none shadow-none">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Our Services
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-purple-800">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">{service.icon}</div>
                      <p className="text-gray-700">{service.description}</p>
                    </CardContent>
                    <ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg w-1/2">
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
  
  export default Services;
  