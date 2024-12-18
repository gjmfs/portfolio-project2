import "./Nav.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/NavIcons/home.svg";
import folder from "../../assets/icons/NavIcons/folder.svg";
import work from "../../assets/icons/NavIcons/work.svg";
import tools from "../../assets/icons/NavIcons/tools.svg";
import thoughts from "../../assets/icons/NavIcons/thoughts.svg";

export const Nav = () => {
  const nav = [
    {
      name: home,
      nav: "/",
    },
    {
      name: folder,
      nav: "/projects",
    },
    {
      name: work,
      nav: "/experience",
    },
    {
      name: tools,
      nav: "/devtools",
    },
    {
      name: thoughts,
      nav: "/thoughts",
    },
  ];
  const navicons = nav.map((nav, index) => (
    <div className="col">
      <NavLink to={nav.nav}>
        <img key={index} src={nav.name} alt="mufees web developer" />
      </NavLink>
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
