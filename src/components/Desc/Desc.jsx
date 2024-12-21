import "./Desc.css";
import { Heading } from "../Heading";
import { NavLink } from "react-router-dom";

export const Desc = () => {
  const sub = [
    {
      c1: "+1",
      c2: "Years of Experience",
    },
    {
      c1: "+10",
      c2: "Projects Completed",
    },
    {
      c1: "+5",
      c2: "Worldwide Clients",
    },
  ];
  const desc = sub.map((sub, index) => (
    <div className="container" key={index}>
      <div className="col">
        <div className="c1">{sub.c1}</div>
      </div>
      <div className="col">
        <div className="c2">{sub.c2}</div>
      </div>
    </div>
  ));

  return (
    <div className="Desc">
      <Heading fir="Software" sec="Engineer" />
      <p className=" mt-4 mb-5">
        A undergrade Software Engineer Who can make simple ideas into creative
        design and functional Software
      </p>
      <div className="row row-cols-3">{desc}</div>
      <div className="container d-flex justify-content-center align-content-center pt-5">
        <NavLink to={"/contact"}>
          <div className="btn">Hire me</div>
        </NavLink>
      </div>
    </div>
  );
};
