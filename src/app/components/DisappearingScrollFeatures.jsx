"use client"
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit bg-neutral-950">
        <Features />
      </div>

      
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-32 px-4 md:grid-cols-2">
      
      <Carousel />
      <Copy />
    </div>
  );
};

const Copy = () => {
  return (
    <div id="portfolio" className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-bloomYellow px-4 py-2 text-sm uppercase text-neutral-900">
        Our work
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight font-righteous text-neutral-300">
        Learn and grow with Lorem Ipsum Dolor
      </h2>
      <p className="text-lg text-neutral-300">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          imageUrl='/ygdental.png'
          bgColor='bg-white'
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={5}
        />
        <CarouselItem
          imageUrl='/docsapoth.png'
          bgColor='bg-white'
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={5}
        />
        <CarouselItem
        imageUrl='/rentalrealty.png'
          bgColor='bg-white'
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={5}
        />
        <CarouselItem
        imageUrl='/autoaccident.png'
          bgColor='bg-white'
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={5}
        />
        
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, imageUrl, bgColor }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className={`grid aspect-video w-full shrink-0 place-content-center rounded-2xl ${bgColor}`}
    >
      {/* Render the image instead of the text */}
      <Image
        src={imageUrl}
        alt="Carousel item"
        width={500}
        height={500}
        className="rounded-2xl"
      />
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full  md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;