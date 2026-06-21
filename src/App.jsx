import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

const slides = [Home, About, Skills];

export default function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const Slide = slides[index];

  return <Slide onNext={next} onPrev={prev} />;
}