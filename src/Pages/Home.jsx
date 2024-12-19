import { Desc } from "../components/Desc/Desc";
import { Projects } from "../components/Projects/Projects";
import { animated, useSpring } from "@react-spring/web";

export const Home = () => {
  const homeSpring = useSpring({
    from: { x: +10000 },
    to: { x: 0 },
  });
  return (
    <animated.div style={{ ...homeSpring }} className="Home">
      <Desc />
      <Projects />
    </animated.div>
  );
};
