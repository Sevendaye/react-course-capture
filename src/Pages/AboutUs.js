import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//Page animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => (
  <motion.div
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
  >
    <AboutSection />
    <ServicesSection />
    <FaqSection />
  </motion.div>
);

export default AboutUs;
