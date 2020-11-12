import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  if (inView) {
    animation.start("show");
  } else {
    animation.start("hidden");
  }
  return [ref, animation];
};

export default useScroll;
