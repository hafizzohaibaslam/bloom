"use client"
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCopy,
  FiDatabase,
} from "react-icons/fi";
import { useNav } from "../context/NavContext";

const CARD_HEIGHT = 500;

export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { active, setActive } = useNav();

  const CARDS = [
    {
      id: 1,
      Icon: FiCalendar,
      title: "Why BloomMedia?",
      description: "Check out our Process below.",
      ctaClasses: " hidden	",
      routeTo: () => setActive(!active),
    },
    {
      id: 2,
      Icon: FiDatabase,
      title: "Discovery & Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
      ctaClasses: "hidden",
      routeTo: () => setActive(!active),
    },
    {
      id: 3,
      Icon: FiCopy,
      title: "Strategy & Revision",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
      ctaClasses: "hidden",
      routeTo: () => setActive(!active),
    },
    {
      id: 4,
      Icon: FiAward,
      title: "Execution & Analysis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
      ctaClasses: "mt-10 bg-bloomRed",
      routeTo: () => setActive(!active),
    },
  ];

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            totalCards={CARDS.length}
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ position, card, scrollYProgress, totalCards }) => {
  const scaleFromPct = (position - 1) / totalCards;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  const handleClick = () => {
    if (typeof card.routeTo === 'function') {
      card.routeTo();
    }
  };

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === totalCards ? undefined : y,
        background: isOddCard ? "#0a0a0a" : "white",
        color: isOddCard ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl font-righteous">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Learn more</span>
        <FiArrowRight />
      </button>
    </motion.div>
  );
};