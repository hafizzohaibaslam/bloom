"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-neutral-950 pt-32">
       <div className="flex justify-center">
        <h2 className="text-white mb-2 font-righteous text-center text-7xl md:mb-4 ">Services</h2>
       </div>
        <ExampleContent />
      
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContentTwo />
      </TextParallaxContent>
      
    </div>
  );
};

const IMG_PADDING = 70;

export const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(80vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-20 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 font-righteous text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-white text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};



const ExampleContent = () => {
  const h2Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div id="services" className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <motion.h2
          className="font-righteous col-span-1 text-3xl font-bold md:col-span-4 text-bloomYellow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={h2Variants}
        >
          SEO & Web Design
        </motion.h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
            SEO is a crucial component of web design and digital marketing, ensuring your site is visible to the right audience...
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
        <motion.h2
          className="col-span-1 font-righteous text-3xl font-bold md:col-span-4 text-bloomOrange"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={h2Variants}
        >
          Paid Ads
        </motion.h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
            Give your business a kick-start with our selection of paid advertising services...
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
        <motion.h2
          className="col-span-1 font-righteous text-3xl font-bold md:col-span-4 text-bloomRed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={h2Variants}
        >
          Social Media Management
        </motion.h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
            The realm of Instagram, Facebook, Pinterest, Twitter, and other platforms can be overwhelming...
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
        <motion.h2
          className="col-span-1 font-righteous text-3xl font-bold md:col-span-4 text-bloomPurple"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={h2Variants}
        >
          Content Creation
        </motion.h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
            Professional blogs, photos, videos, and website copy are just a few of the things we can offer your business...
          </p>
        </div>
      </div>
    </>
  );
};


const ExampleContentTwo = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-bloomPink">
        Lets talk about our Digital Marketing Services
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
          maiores voluptate est ut saepe accusantium maxime doloremque nulla
          consectetur possimus.
        </p>
        <p className="mb-8 text-xl text-neutral-300 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          reiciendis blanditiis aliquam aut fugit sint.
        </p>
        <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
          Learn more <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );