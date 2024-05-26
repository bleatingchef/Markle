import Section from "./Section";
import Heading from "./Heading";
import { service6, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons,productServices } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Product_Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="FREE Trip With"
          text="Markle unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute justify-center w-full h-full  md:w-4/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-40"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service6}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Our Vision</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Come along on our projects.
              </p>
              <ul className="body-2">
                {productServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Product_Services;
