"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MeetAheadCard = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 relative mt-7 mb-32">
      <div className="bg-red-50 overflow-hidden relative flex flex-col md:flex-row rounded-lg h-auto min-h-[450px]">
        <div className="md:basis-1/2 p-5 md:p-7">
          <div className="flex flex-col mt-10 md:mt-20 gap-3">
            <div>
              <p className="text-sm md:text-md text-left">Built Out of Frustration</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl font-bold">Meet the ahead app</p>
            </div>
          </div>
        </div>
        <div className="md:basis-1/2 flex items-center p-5 md:p-0">
          <div className="flex flex-col gap-6 md:gap-12 w-full md:w-4/5 items-center">
            <div>
              <p className="text-base md:text-lg">
                A personalized pocket coach that provides
                bite-sized, science-driven tools to boost emotional intelligence.
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling life.
              </p>
            </div>
          </div>
        </div>

        {/* Circle div */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: {
              x: [0, -100, -250, -350],
              y: [55, 25, 0, -18],
            },
          }}
          animate={{
            x: [0, -100, -250, -350],
            y: [55, 25, 0, -18],
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-darkPeach h-40 w-40 md:h-60 md:w-60 absolute rounded-full bottom-[-16px] right-[5%] sm:right-[15%] md:right-[50%]"
        ></motion.div>

        {/* Leaves division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -25],
              rotate: 25,
            },
            hidden: { y: 55 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 25,
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="h-20 w-20 md:h-28 md:w-24 absolute right-[60%] top-[20%] transform translate-x-1/2 translate-y-1/2"
        >
          <Image height={100} width={100} src="/assets/leaf.png" alt="" />
        </motion.div>

        {/* Ghost Div */}
        <div className="absolute flex justify-center items-center rounded-full bg-white h-32 w-32 md:h-44 md:w-44 border-4 md:border-8 border-borderGrey top-[62%] left-[15%] transform translate-x-[-50%] translate-y-[-50%]">
          <motion.div
            transition={{ duration: "1.5" }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: [0, 25, -15, 0] },
              hidden: { opacity: 0, scale: 0.5, rotate: 0 },
            }}
            className="h-16 w-12 md:h-20 md:w-16 inline-block"
          >
            <Image height={100} width={100} src="/assets/newGhost.png" className="h-full w-full" alt="" />
          </motion.div>
          {/* Badge */}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute h-7 w-7 md:h-11 md:w-11 top-[-22px]"
          >
            <Image height={100} width={100} src="/assets/badge.png" alt="" />
          </motion.div>
        </div>
      </div>
      {/* Flower div */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 2,
        }}
        className="h-7 w-7 md:h-11 md:w-11 absolute right-[80px] md:right-[280px] top-[-20px]"
      >
        <Image height={100} width={100} src="/assets/flower.png" alt="" />
      </motion.div>
    </div>
  );
};

export default MeetAheadCard;
