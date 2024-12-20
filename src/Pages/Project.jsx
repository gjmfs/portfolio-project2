import { Projects } from "../components/Projects/Projects";
import { animated, useSpring } from "@react-spring/web";

export const Project = () => {
  const projectSpring = useSpring({
    from: { x: +10000 },
    to: { x: 0 },
  });
  return (
    <animated.div
      style={{
        ...projectSpring,
      }}
      className="Project"
    >
      <Projects />
    </animated.div>
  );
};
