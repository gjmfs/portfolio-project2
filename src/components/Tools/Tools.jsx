import { useState, useEffect } from "react";
import { Heading, Heading2 } from "../Heading";
import "./Tools.css";
import * as images from "./images";

export const Tools = () => {
  const [btn, setBtn] = useState();
  const [render, setRender] = useState();
  const [fir, setFir] = useState("");
  const [sec, setSec] = useState("");

  useEffect(() => {
    check("pl");
  }, []);

  const process = (element, index) => (
    <div key={index} className="row row-cols-2 p-2 single">
      <div className="col-4 d-flex justify-content-center align-content-center">
        <img src={element.img} alt={element.name} className="img-fluid" />
      </div>
      <div className="col tool-name  d-flex align-items-center">
        {element.name}
      </div>
    </div>
  );

  const check = (btn) => {
    switch (btn) {
      case "os":
        {
          setRender(images.default.OS.map(process));
          setFir("Operting");
          setSec("system");
        }
        break;
      case "str":
        {
          setRender(images.default.Structure.map(process));
          setFir("structure &");
          setSec("styles");
        }
        break;
      case "db":
        {
          setRender(images.default.DB.map(process));
          setFir("Database");
          setSec("Technologies");
        }
        break;
      case "vc":
        {
          setRender(images.default.vc.map(process));
          setFir("version");
          setSec("Control");
        }
        break;
      case "gd":
        {
          setRender(images.default.GD.map(process));
          setFir("Graphic");
          setSec("design");
        }
        break;
      case "pm":
        {
          setRender(images.default.PM.map(process));
          setFir("Package");
          setSec("Manager");
        }
        break;
      case "lib":
        {
          setRender(images.default.Libraries.map(process));
          setFir("libraries");
        }
        break;
      case "fra":
        {
          setRender(images.default.frameworks.map(process));
          setFir("frameworks");
        }
        break;
      case "pl":
        {
          setRender(images.default.PL.map(process));
          setFir("programming");
          setSec("languages");
        }
        break;
      default:
        {
          setRender(images.default.PL.map(process));
          setFir("programming");
          setSec("languages");
        }
        break;
    }
  };
  // //Programming Language
  // const PL= images.default.PL.map(process);

  // //Database Technologies
  // const DB = images.default.DB.map(process);

  // //frameworks
  // const frameworks = images.default.frameworks.map(process);

  // //structure and styles
  // const structure = images.default.Structure.map(process);

  // //Graphic Design
  // const GD = images.default.GD.map(process);

  // //version control
  // const vc = images.default.vc.map(process);

  // //Package Manager
  // const pm = images.default.PM.map(process);

  // //os
  // const os = images.default.OS.map(process);

  // //Libraries
  // const lib = images.default.Libraries.map(process);
  const change = async (btn) => {
    setBtn(btn);
    check(btn);
  };
  return (
    <div className="Tools">
      <Heading fir="Development" sec="Tools" />
      <div className="row mb-4 mt-4 ps-3">
        <div
          className="col value"
          onClick={() => {
            change("pl");
          }}
        >
          Programming Languages
        </div>
        <div
          className="col value"
          onClick={() => {
            change("db");
          }}
        >
          Database
        </div>
        <div
          className="col value"
          onClick={() => {
            change("fra");
          }}
        >
          {" "}
          Frameworks
        </div>
        <div
          className="col value"
          onClick={() => {
            change("vc");
          }}
        >
          {" "}
          version control
        </div>
        <div
          className="col value"
          onClick={() => {
            change("pm");
          }}
        >
          {" "}
          package manager
        </div>
        <div
          className="col value"
          onClick={() => {
            change("os");
          }}
        >
          {" "}
          OS
        </div>
        <div
          className="col value"
          onClick={() => {
            change("lib");
          }}
        >
          {" "}
          libraries
        </div>
        <div
          className="col value "
          onClick={() => {
            change("str");
          }}
        >
          {" "}
          structure and style
        </div>
        <div
          className="col value"
          onClick={() => {
            change("gd");
          }}
        >
          {" "}
          graphic design
        </div>
      </div>
      <Heading2 fir={fir} sec={sec} />
      <div className="mt-4 row-1 row row-cols-2 gap-4 mb-5">{render}</div>
    </div>
  );
};
