import React, { useState } from 'react';
import { benefits } from "../constants";
import { portfolio_cards } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { curve } from "../assets";
import { BackgroundCircles } from "./design/Hero";
import Modal from './Modal';

const Portfolio_cards = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="As We Work In" />
        <div className="flex flex-wrap gap-10 mb-10">
          {portfolio_cards.map((item) => (
            <div
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[2.4rem]">
                <div className="overflow-y-auto h-60 rounded-lg maincardcheck">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full object-cover rounded-lg"
                    />
                  )}
                </div>
                {item.light && <GradientLight />}
              </div>
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              ></div>
              <ClipPath />
            </div>
          ))}
        </div>
        <BackgroundCircles/>
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </Section>
  );
};

export default Portfolio_cards;
