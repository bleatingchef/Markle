import { benefits, emp } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { curve } from "../assets";

const About_emp = () => {
  return (
    <Section id="features">
      <div className="container relative z-2 ">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="The Team Members of"  
          text={"Introducing the formidable team whose expertise fuels our journey to success."}
        />
        
        <div className="flex flex-wrap gap-10 mb-10">
          {emp.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] ">
                <div className="flex-grow">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full object-cover rounded-t-[2rem]"
                    />
                  )}
                </div>
                <div className="p-4">
                  <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    {item.text}
                  </p>
                </div>
              </div>
              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About_emp;
