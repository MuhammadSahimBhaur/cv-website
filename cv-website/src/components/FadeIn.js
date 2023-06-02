import { animated, useSpring, useScroll } from "@react-spring/web";

export const FadeIn = ({ trigger, children }) => {
  // Creating an animated div that
  // has 0 opacity and maximum y allowed in the div
  const [smoothStyles, textApi] = useSpring(() => ({
    opacity: 0,
    y: "100%",
    config: {
      mass: 1,
      friction: 14,
      tension: 50,
    },
  }));

  // Animating on scroll by start animation when
  // scrollYProgress gets larger than the passed trigger value
  useScroll({
    onChange: (props) => {
      let { scrollYProgress } = props.value;
      if (scrollYProgress > trigger) {
        textApi.start({ opacity: 1, y: "0%" });
      }
    },
    default: {
      immediate: false,
    },
  });

  return <animated.div style={smoothStyles}>{children}</animated.div>;
};
