import React from "react";
// import AVATAR_LOGO from '../assets/avatar.png'
import { HOME_CONTENT } from "../data";
import { motion } from "framer-motion";

const fadeIn = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const HomePage = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={fadeIn(0)}
              initial="hidden"
              animate="show"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              V.SC
            </motion.h1>

            <motion.span
              variants={fadeIn(0.5)}
              initial="hidden"
              animate="show"
              className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent  "
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={fadeIn(1)}
              initial="hidden"
              animate="show"
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              {HOME_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              src="avatar.png"
              alt="avatar"
              className="w-100 rounded-full border p-2 lg:w-80 lg:p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
