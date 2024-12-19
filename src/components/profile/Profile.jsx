import "./profile.css";
import profileImg from "../../assets/icons/user.svg";
import { animated, useSpring } from "@react-spring/web";

export const Profile = () => {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });
  return (
    <animated.div
      style={{
        ...springs,
      }}
      className="Profile"
    >
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <img src={profileImg} alt="" className="img-fluid" />
          </div>
          <div className="col">
            <h3>Mufees Mohammed</h3>
          </div>
          <div className="col">
            <p>
              Dedicated software engineer with a passion for crafting efficient
              and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
