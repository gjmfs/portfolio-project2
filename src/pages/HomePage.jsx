import { Contact } from "../components/Contact/Contact";
import { Desc } from "../components/Desc/Desc";
import { Experience } from "../components/Experience/Experience";
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
      <Experience />
      <Projects />
      <Contact />
    </animated.div>
  );
};
