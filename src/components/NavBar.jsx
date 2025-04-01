import React from "react";
import { motion } from "framer-motion";
// import logo from '../assets/logo.png'

import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-2 w-15"
          src="vsc.png"
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <a href="https://www.youtube.com/@chhengg_cc">
            <FaYoutube />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <a href="https://github.com/chhengz">
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
