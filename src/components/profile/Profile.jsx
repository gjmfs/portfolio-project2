import "./profile.css";
import profileImg from "../../assets/icons/user.svg";

export const Profile = () => {
  return (
    <div className="Profile">
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
              A Software Engineer who has develop multi-functional web and
              mobile apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
