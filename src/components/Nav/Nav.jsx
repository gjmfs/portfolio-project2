import "./Nav.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/NavIcons/home.svg";
import folder from "../../assets/icons/NavIcons/folder.svg";
import work from "../../assets/icons/NavIcons/work.svg";
import tools from "../../assets/icons/NavIcons/tools.svg";
import thoughts from "../../assets/icons/NavIcons/thoughts.svg";
import { animated, useSpring } from "@react-spring/web";

export const Nav = () => {
  const springNav = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  });

  const nav = [
    {
      img: home,
      nav: "/portfolio-project2",
      name: "Home",
    },
    {
      img: folder,
      nav: "/portfolio-project2/projects",
      name: "Projects",
    },
    {
      img: work,
      nav: "/portfolio-project2/experience",
      name: "Experience",
    },
    {
      img: tools,
      nav: "/portfolio-project2/devtools",
      name: "Tools",
    },
    {
      img: thoughts,
      nav: "/portfolio-project2/contact",
      name: "Contact",
    },
  ];
  const navicons = nav.map((nav, index) => (
    <div className="col">
      <NavLink className="text-decoration-none" to={nav.nav}>
        <img key={index} src={nav.img} alt="mufees web developer" />
        <div className="name">{nav.name}</div>
      </NavLink>
    </div>
  ));

  return (
    <animated.div style={{ ...springNav }}>
      <nav>
        <div className="container">
          <div className="row row-cols-5">{navicons}</div>
        </div>
      </nav>
    </animated.div>
  );
};
