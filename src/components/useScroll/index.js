import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const [element, controls] = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  if (controls) {
    animation.start("show");
  } else {
    animation.start("hidden");
  }
  return [element, animation];
};

export default useScroll;
