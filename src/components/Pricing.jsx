import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import StarsCanvas from "./StarsCanvas";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">

        <Heading
          tag="Pay Once, Use Forever"
          title="Flexible Plans with"
        />
        <StarsCanvas />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
