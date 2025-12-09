import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import heroImg1 from "@/assets/image/2206.i126.060.F.m005.c9.motorcycle bikers.jpg";
import heroImg2 from "@/assets/image/7610.jpg";
import { useNavigate } from "react-router";
import StarBorder from "@/components/StarBorder";
import "@/styles/animations.css";

const ServiceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <h1 className="text-3xl font-semibold md:text-4xl animate-fade-up transition-all duration-500">
          Our <span className="text-primary"> Services</span>
        </h1>

        <div className="mt-10 flex flex-col gap-20">
          {/* Ride a request section starts */}
          <div className="grid items-center gap-8 lg:grid-cols-2 transition-all duration-500">
            <div
              className="flex flex-col items-center text-center lg:items-start lg:text-left animate-slide-left transition-all duration-500 hover:scale-105"
              style={{ animationDelay: "0.1s" }}
            >
              <Badge
                variant="outline"
                className="animate-fade-up transition-all duration-300 hover:scale-105"
                style={{ animationDelay: "0.15s" }}
              >
                Do you want a quick ride???
                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Badge>

              <h1
                className="my-6 text-pretty text-4xl font-bold lg:text-6xl animate-fade-up transition-all duration-500"
                style={{ animationDelay: "0.2s" }}
              >
                Request a <span className="text-primary"> Ride </span> Now ...
              </h1>

              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <StarBorder
                  as="div"
                  className="custom-class animate-fade-up transition-all duration-300"
                  color="cyan"
                  speed="5s"
                  style={{ animationDelay: "0.25s" }}
                >
                  <button
                    onClick={() => navigate("/request-ride")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                  >
                    Request Ride
                  </button>
                </StarBorder>
              </div>
            </div>
            <div
              className="max-h-screen w-fit rounded-4xl object-cover animate-slide-right transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                className="rounded-4xl transition-all duration-500"
                src={heroImg1}
                alt="Motorcycle bikers"
              />
            </div>
          </div>
          {/* Ride a request section ends */}

          {/* Register as a Driver section starts */}
          <div className="grid items-center gap-8 lg:grid-cols-2 transition-all duration-500">
            <div
              className="max-h-screen w-fit rounded-4xl object-cover animate-slide-left transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                className="rounded-4xl transition-all duration-500"
                src={heroImg2}
                alt="Motorcycle bikers"
              />
            </div>
            <div
              className="flex flex-col items-center text-center lg:items-start lg:text-left animate-slide-right transition-all duration-500 hover:scale-105"
              style={{ animationDelay: "0.1s" }}
            >
              <Badge
                variant="outline"
                className="animate-fade-up transition-all duration-300 hover:scale-105"
                style={{ animationDelay: "0.15s" }}
              >
                Wanna earn money by sharing ride with your own vehicle???
                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Badge>

              <h1
                className="my-6 text-pretty text-4xl font-bold lg:text-6xl animate-fade-up transition-all duration-500"
                style={{ animationDelay: "0.2s" }}
              >
                Register as a <span className="text-primary"> Driver </span> !
              </h1>

              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <StarBorder
                  as="div"
                  className="custom-class animate-fade-up transition-all duration-300"
                  color="cyan"
                  speed="5s"
                  style={{ animationDelay: "0.25s" }}
                >
                  <button
                    onClick={() => navigate("/driver-register")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                  >
                    Register as Driver
                  </button>
                </StarBorder>
              </div>
            </div>
          </div>
          {/* Register as a Driver section ends */}
        </div>
      </div>
    </section>
  );
};

export { ServiceSection };
