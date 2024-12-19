import { NavLink } from "react-router-dom";
import "./Err.css";

export const Err = () => {
  return (
    <div className="Err">
      <div className="container ">
        <div className="row ">
          <div className="col  d-flex justify-content-center align-content-center align-items-center">
            <h1 className="text-light">
              Page Not Found <span>404</span>
            </h1>
          </div>
        </div>
        <div className="col d-flex justify-content-center m-5">
          <NavLink to={"/"}>
            <div className="btn ">Return Home</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
