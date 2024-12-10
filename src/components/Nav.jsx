import "./Nav.css";
import { NavLink } from "react-router-dom";
import close from "../assets/icons/NavIcons/close.svg";
import menu from "../assets/icons/NavIcons/menu.svg";

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/ZimaTravels">
        <img id="logo" src="" alt="logo" />
      </NavLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <img className="icons" src={menu} />
      </label>
      <label htmlFor="sidebar-active" id="overlay"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <img className="icons" src={close} />
        </label>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="packages">Packages</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </div>
    </nav>
  );
};
