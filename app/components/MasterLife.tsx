"use client";
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const MasterLife: React.FC = () => {
    return (
        <div className="px-4 sm:px-10 md:px-20">
            <div className="bg-bgBlue relative rounded-3xl flex flex-col md:flex-row overflow-hidden bg-slate-200" style={{ height: "550px" }}>
                <div className="flex flex-1 items-center justify-center p-4 md:pl-20">
                    <div className="flex flex-col items-start">
                        <div className="w-full">
                            <p className="text-lg">Ahead app</p>
                        </div>
                        <div>
                            <p className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold">
                                Master Your life by mastering emotions
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-7 items-center w-full mt-5">
                            <Image
                                width={150}
                                height={30}
                                alt="Apple Play Store"
                                src="/assets/appleStoreIcon.svg"
                                className="cursor-pointer"
                            />
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, index) => (
                                        <Image
                                            alt="star"
                                            src="/assets/starIcon.svg"
                                            width={16}
                                            height={16}
                                            key={index}
                                        />
                                    ))}
                                </div>
                                <p>100+ AppStore reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <div className="h-40 w-40 sm:h-64 sm:w-64 flex items-center">
                        <Image className="h-full w-full" height={100} width={100} src="/assets/mobile.svg" alt="Mobile" />
                    </div>
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: { opacity: 1, rotate: 360 },
                        }}
                        transition={{
                            type: "",
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        className="absolute rounded-full h-64 w-64 sm:h-96 sm:w-96 border-dashed border-white"
                        style={{ border: "3px solid white" }}
                    >
                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            className="absolute h-10 w-8 sm:h-16 sm:w-12"
                            style={{ top: "35px" }}
                        >
                            <Image height={100} width={100} className="h-full w-full" src="/assets/blue-ghost.png" alt="Blue Ghost" />
                        </motion.div>
                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            className="absolute h-10 w-8 sm:h-16 sm:w-14"
                            style={{ right: "-20px", top: "50%", transform: "translate(-50%,-50%)" }}
                        >
                            <Image height={100} width={100} className="h-full w-full" src="/assets/red-ghost.png" alt="Red Ghost" />
                        </motion.div>
                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            className="absolute h-10 w-8 sm:h-14 sm:w-12"
                            style={{ bottom: "-22px", right: "50%" }}
                        >
                            <Image height={100} width={100} src="/assets/newGhost.png" alt="New Ghost" />
                        </motion.div>
                    </motion.div>
                </div>
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
                        hidden: { y: 35 },
                    }}
                    animate={{
                        x: [0, 10],
                        y: [55, -5],
                        rotate: 25,
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="h-20 w-20 sm:h-28 sm:w-24 absolute"
                    style={{ right: "50%", top: "40%", transform: "translate(50%,50%)" }}
                >
                    <Image height={100} width={100} src="/assets/leaf.png" alt="Leaf" />
                </motion.div>
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: -100 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    className="absolute bg-orange-300 rounded-full h-8 w-8 sm:h-12 sm:w-12"
                    style={{ bottom: "-10px", left: "100px" }}
                ></motion.div>
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ y: -100 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    className="absolute bg-blue-300 rounded-full h-8 w-8 sm:h-12 sm:w-12"
                    style={{ left: "-10px", top: "50%" }}
                ></motion.div>
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: -100 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    className="absolute bg-yellow-300 rounded-full h-8 w-8 sm:h-12 sm:w-12"
                    style={{ right: "100px", top: "-10px" }}
                ></motion.div>
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: 100 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    className="absolute h-8 w-8 sm:h-12 sm:w-12"
                    style={{ left: "100px", top: "0px" }}
                >
                    <Image src="/assets/singleLeaf.png" height={48} width={48} alt="Single Leaf" />
                </motion.div>
            </div>
        </div>
    );
}

export default MasterLife;
