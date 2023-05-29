import { animated, useSpring, useScroll } from "@react-spring/web";

export const FadeIn = ({ trigger, children }) => {
  const [textStyles, textApi] = useSpring(() => ({
    opacity: 0,
    y: "100%",
  }));

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      // console.log("scrollYProgress", scrollYProgress);
      if (scrollYProgress > trigger) {
        textApi.start({ opacity: 1, y: "0%" });
      }
    },
    default: {
      immediate: false,
    },
  });

  // const styles = useSpring({
  //   opacity: scrollYProgress,
  // });

  return <animated.div style={textStyles}>{children}</animated.div>;
};
