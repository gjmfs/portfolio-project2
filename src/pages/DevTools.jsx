import { Contact } from "../components/Contact/Contact";
import { Tools } from "../components/Tools/Tools";
import { animated, useSpring } from "@react-spring/web";

export const DevTools = () => {
  const toolSpring = useSpring({
    from: { x: +10000 },
    to: { x: 0 },
  });
  return (
    <animated.div style={{ ...toolSpring }} className="DevTools">
      <Tools />
      <Contact />
    </animated.div>
  );
};
