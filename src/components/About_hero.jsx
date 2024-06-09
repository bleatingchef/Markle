import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import StarsCanvas from "./StarsCanvas";

const About_hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
      <StarsCanvas />
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            About {` `}
            <span className="inline-block relative">
              Markle.{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Markle Tech and Media is the most trusted and leading Website Designing, Development, and Digital Marketing Company in West Delhi. We provide brands 360- degree digital marketing solutions.

          </p>
          {/* <Button href="/pricing" white>
            Get start
          </Button> */}
        </div>

        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          About Markle Tech And Media
          </h1>
          
          <p className="body-1 max-w-6xl mx-auto mb-6 text-n-3 lg:mb-8">
          Markle Tech And Media is the Best Digital Marketing Company in West Delhi. We are one of the most trusted and premier Digital Marketing Agencies in Delhi. We have served many renowned Hospitals, Real Estate, Educational institutes, radiology labs, path labs, clinics, doctors, physiotherapy centers, fitness centers, and dieticians. From Website development to YouTube Marketing, every service has been delivered at an affordable cost. Our team constitutes of expert website developers, web designers, graphic designers, social media marketers, content writers, video editors, YouTube Marketing Experts, and Digital Marketers. Markle Tech And Media is known for its Social Media Marketing service that helps business leaders to garner more attention and increased the footfall of customers. The focused sectors of our company are Healthcare, E- learning, and Real Estate. Markle Tech And Media provides smooth-less and error-free service to their clients.

          </p>
          
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          
          <div className="absolute top-80">
            {/* <img
              src={heroBackground}
              className="w-full  opacity-20 "
              width={1440}
              height={1800}
              alt="hero"
            /> */}
          </div>

          
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> //caraosal */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default About_hero;
