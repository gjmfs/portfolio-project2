import "./Nav.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/NavIcons/home.svg";
import folder from "../../assets/icons/NavIcons/folder.svg";
import work from "../../assets/icons/NavIcons/work.svg";
import tools from "../../assets/icons/NavIcons/tools.svg";
import thoughts from "../../assets/icons/NavIcons/thoughts.svg";

export const Nav = () => {
  const nav = [home, folder, tools, work, thoughts];
  const navicons = nav.map((nav, index) => (
    <div className="col">
      <img key={index} src={nav} alt="mufees web developer" />
    </div>
  ));

  return (
    <nav>
      <div className="container">
        <div className="row row-cols-5">{navicons}</div>
      </div>
    </nav>
  );
};
