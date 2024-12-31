import bankApp from "../../assets/images/Projects/BankApp.png";
import BloodTest from "../../assets/images/Projects/BloodTest.png";
import CloudLogics from "../../assets/images/Projects/CloudLogics.png";
import portfolio from "../../assets/images/Projects/portfolio.png";
import portfolio2 from "../../assets/images/Projects/portfolio2.png";
import realTeaAndSpices from "../../assets/images/Projects/realTeaAndSpices.png";
import zimaTravels from "../../assets/images/Projects/zimaTravels.png";
import { Heading } from "../Heading";
import "./Projects.css";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  const ProjectList = [
    {
      name: "Blood Test App",
      desc: "A web app maded for showing online hospital medical results for their patients. in order to make their work efficiently and this will help doctors to make decision fasterthan before",
      img: BloodTest,
      link: "https://github.com/gjmfs/BloodTest",
    },
    {
      name: "Real Tea And Spices",
      desc: "This is a landing web app for a wholesale company. this website just show case their products to the sellers and buyers",
      img: realTeaAndSpices,
      link: "http://realteaandspices.com/",
    },
    {
      name: "Zima Travels and Tours",
      desc: "This web app showcase a tourism companies packages and their service to customers",
      img: zimaTravels,
      link: "https://github.com/gjmfs/ZimaTravels",
    },
    {
      name: "Cloud Logics",
      desc: "This is a Landing page of Cloud Logics Technologies. they provide some tech related supports like Web App development, Desktop App development and Mobile App development",
      img: CloudLogics,
      link: "",
    },
    {
      name: "Portfolio Site",
      desc: "This is a basic level portfolio site made by myself and for myself. if you wanna try something like this give it a try",
      img: portfolio,
      link: "https://github.com/gjmfs/portfolio-project",
    },
    {
      name: "Bank App",
      desc: "This is just a basic and incomplete web app which can make bank activites on online.",
      img: bankApp,
      link: "https://github.com/gjmfs/BankingSystem",
    },
    {
      name: "Portfolio Project 2",
      desc: "This project just made by myself for myself. describe my skills to others",
      img: portfolio2,
      link: "https://github.com/gjmfs/portfolio-project2",
    },
  ];

  const show = ProjectList.map((project, index) => (
    <NavLink to={project.link} key={index} target="_blank">
      <div className="row p-2 single">
        <div className="col justify-content-center d-flex align-content-center">
          <img src={project.img} alt={project.name} />
        </div>
        <div className="col d-flex justify-content-start align-items-center ">
          <h3>{project.name}</h3>
        </div>
      </div>
    </NavLink>
  ));
  return (
    <div className="Projects">
      <Heading fir="Recent" sec="Projects" />
      <div className="container">
        <div className="row">
          <div className="col">{show}</div>
        </div>
      </div>
    </div>
  );
};
