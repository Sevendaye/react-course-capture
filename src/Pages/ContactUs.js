import React from "react";
//Page animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Composant: ContactUs
    </motion.div>
  );
};

export default ContactUs;
