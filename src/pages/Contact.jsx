import { CONTACT } from "../data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0 }}
          className="mb-4 "
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 "
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="mailto:sokchheng802@gmail.com" className="mb-4 border-b">
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
