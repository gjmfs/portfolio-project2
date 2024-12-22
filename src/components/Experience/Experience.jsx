import "./Experience.css";
import { animated, useSpring } from "@react-spring/web";
import { Heading } from "../Heading";

export const Experience = () => {
  const expSpring = useSpring({
    from: { x: +10000 },
    to: { x: 0 },
  });
  return (
    <animated.div
      style={{
        ...expSpring,
      }}
      className="Experience ps-2"
    >
      <Heading fir="Year of Experience" sec="+1" />
      <div className="container">
        <div className="row">
          <p>
            Highly motivated and results-oriented Freelance Web Developer with
            one year of experience. Successfully completed a diverse range of
            web development projects for clients worldwide, demonstrating strong
            problem-solving and communication skills.
          </p>
        </div>
      </div>
    </animated.div>
  );
};
