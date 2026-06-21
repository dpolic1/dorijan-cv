import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

const slides = [Home, About, Skills];

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const next = () => {
    setDirection(1);
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const Slide = slides[index];

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={index}
        className="slide-wrapper"
        custom={direction}
        variants={{
          enter: (dir) => ({
            opacity: 0,
            x: dir > 0 ? 80 : -80,
          }),
          center: {
            opacity: 1,
            x: 0,
          },
          exit: (dir) => ({
            opacity: 0,
            x: dir > 0 ? -80 : 80,
          }),
        }}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <Slide onNext={next} onPrev={prev} />
      </motion.div>
    </AnimatePresence>
  );
}