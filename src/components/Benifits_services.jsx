import { benefits, benefitsservice } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { curve } from "../assets";
import { BackgroundCircles } from "./design/Hero";

const Benefits_services = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Services By"  
          text="Our services include simplest solutions powered by technology to help our clients. We provide a complete digital transformation service including a variety of web, app and software-based solutions to transform the way businesses work in all industries. We undertake complete design and development of applications to automate your business. Our products are deployed in companies across various industries to help them scale faster with security."
        />
        <BackgroundCircles/>


        <div className="flex flex-wrap gap-10 mb-10">
          
          {benefitsservice.map((item) => (
            <div
              className="block relative p-1 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-4 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={300}
                      height={280}
                      alt={item.title}
                      className="ml-5 object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits_services;
