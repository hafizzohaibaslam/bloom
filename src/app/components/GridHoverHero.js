"use client"
import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

const colors = {
  bloomYellow: "#FEEC56",
  bloomOrange: "#FEA604",
  bloomRed: "#E73705",
  bloomPurple: "#DB1359",
  bloomPink: "#E15889",
};

export const GridHoverHero = () => {
  const [scope, animate] = useAnimate();
  const [size, setSize] = useState({
    columns: 0,
    rows: 0,
  });
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const generateGridCount = () => {
      if (typeof window !== "undefined") {
        const columns = Math.floor(window.innerWidth / 75);
        const rows = Math.floor(window.innerHeight / 75);
        setSize({
          columns,
          rows,
        });
      }
    };

    // Set initial grid size when the component mounts
    generateGridCount();

    window.addEventListener("resize", generateGridCount);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const handleMouseLeave = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(0, 0, 0, 0)" }, { duration: 1.5 });
  };

  const handleMouseEnter = (e) => {
    const id = `#${e.target.id}`;
    const colorKeys = Object.keys(colors);
    const nextColorIndex = (currentColorIndex + 1) % colorKeys.length;
    setCurrentColorIndex(nextColorIndex);

    animate(
      id,
      { background: colors[colorKeys[nextColorIndex]] },
      { duration: 0.15 }
    );
  };

  // Ensure grid only renders when there are columns and rows > 0
  if (size.columns === 0 || size.rows === 0) {
    return null;
  }

  return (
    <div className="bg-neutral-950">
      <div
        ref={scope}
        className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
        id="hero"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-neutral-900"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <h1 className="text-center text-6xl font-black uppercase text-white sm:text-8xl md:text-9xl mix-blend-difference">
          Marketing
        </h1>
        <h2 className="font-righteous text-center text-6xl font-black uppercase text-white sm:text-8xl md:text-9xl mix-blend-difference">
          Made Easy
        </h2>
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          quisquam nemo excepturi officia necessitatibus veritatis enim ipsam!
          Laudantium, reiciendis officia!
        </p>
        <button className="pointer-events-auto rounded-md bg-white px-8 py-4 text-xl font-bold uppercase text-neutral-950 mix-blend-difference">
          Let's Talk!
        </button>
      </div>
    </div>
  );
};
