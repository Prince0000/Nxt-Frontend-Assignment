"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DoesThisSoundsFamiliar: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const boxContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && boxContainerRef.current) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: "smooth",
      });
    }
  }, [isIntersecting]);

  return (
    <section className="overflow-x-hidden mt-12 mb-32 p-4 sm:px-10 lg:px-20" ref={ref}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: 0.1 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold px-4 mb-5">
            Does this sound familiar...
          </h1>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 0.3 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image width={70} height={70} alt="Red Ghost" src="/assets/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className="p-4 sm:p-10 flex space-x-4 sm:space-x-8 gap-4 sm:gap-7 items-center overflow-x-auto hide-scrollbar"
        ref={boxContainerRef}
      >
        {[
          {
            bgColor: "bg-purple-200",
            imageSrc: "/assets/angry-emoji.svg",
            title: "You argue with a colleague",
            description: "You get angry and defensive, instead of staying open and working towards common ground",
          },
          {
            bgColor: "bg-blue-300",
            imageSrc: "/assets/angry-emoji.svg",
            title: "You get a promotion at work",
            description: "You question yourself and wonder unqualified imposter instead of trusting yourself & your abilities",
          },
          {
            bgColor: "bg-yellow-200",
            imageSrc: "/assets/angry-emoji.svg",
            title: "You attend a class reunion",
            description: "You compare yourself with your peers and your self-judgement becomes more independent of others.",
          },
          {
            bgColor: "bg-violet-600",
            imageSrc: "/assets/angry-emoji.svg",
            title: "You are at a lively dinner party",
            description: "You play on your phone instead of confidently approaching strangers and striking up a chat.",
          },
          {
            bgColor: "bg-blue-100",
            imageSrc: "/assets/angry-emoji.svg",
            title: "You hit a dead end in a negotiation",
            description: "You get frazzled, nervous, and frustrated instead of staying optimistic and solution-oriented.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-xl ${item.bgColor} min-w-[300px] sm:min-w-[350px] p-4 sm:p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}
          >
            <Image width={70} height={70} alt="Emoji" src={item.imageSrc} />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoesThisSoundsFamiliar;
