import "./profile.css";
import profileImg from "../../assets/icons/user.svg";
import { animated, useSpring } from "@react-spring/web";
import img1 from "../../assets/images/profile/1.jpg";
import img2 from "../../assets/images/profile/2.jpg";
import img3 from "../../assets/images/profile/3.jpg";
import img4 from "../../assets/images/profile/4.jpg";
import img5 from "../../assets/images/profile/5.jpg";
import img6 from "../../assets/images/profile/6.jpg";
import img7 from "../../assets/images/profile/7.jpg";

import fiverr from "../../assets/icons/contact/fiverr.svg";
import upwork from "../../assets/icons/contact/upwork.svg";
import contact from "../../assets/icons/contact/contact.svg";
import email from "../../assets/icons/contact/email.svg";
import insta from "../../assets/icons/contact/instagram.svg";
import linkedin from "../../assets/icons/contact/linkedin.svg";
import web from "../../assets/icons/contact/web.svg";
import github from "../../assets/icons/contact/github.svg";
import { NavLink } from "react-router-dom";

export const Profile = () => {
  const conImg = [
    { name: "Contact", img: contact, nav: "tel:+94782974776" },
    { name: "E-mail", img: email, nav: "mailto:mufeeesmhd@gmail.com" },
    { name: "Web", img: web, nav: "https://www.mufees.space" },
    {
      name: "Github",
      img: github,
      nav: "https://www.github.com/gjmfs",
    },

    {
      name: "LinkedIn",
      img: linkedin,
      nav: "https://www.linkedin.com/in/mufees-mohamed-525485240/",
    },
    { name: "Fiverr", img: fiverr, nav: "https://www.fiverr.com/s/DB0K6w7" },
    {
      name: "Upwork",
      img: upwork,
      nav: "https://www.upwork.com/freelancers/~01b29aab5c0145c962?mp_source=share",
    },
    {
      name: "Instagram",
      img: insta,
      nav: "https://www.instagram.com/trap404.world/",
    },
  ];
  const contacts = conImg.map((con, index) => (
    <NavLink className="col col-3" key={index} target="_blank" to={con.nav}>
      <img className="con-img" src={con.img} alt={con.name} />
    </NavLink>
  ));
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const random = Math.floor(Math.random() * images.length);
  const profile = images[random];

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
            <img src={profile} alt="" className="img-fluid profile-pic" />
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
          <div className="containee">
            <div className="row con-row row-cols-2 d-flex justify-content-center align-items-center align-content-center">
              {contacts}
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
