import { Heading, Heading2 } from "../Heading";
import "./Tools.css";
import * as images from "./images";

export const Tools = () => {
  const process = (element) => (
    <div className="row row-cols-2 p-2 single">
      <div className="col-4 d-flex justify-content-center align-content-center">
        <img src={element.img} alt={element.name} className="img-fluid" />
      </div>
      <div className="col tool-name  d-flex align-items-center">
        {element.name}
      </div>
    </div>
  );

  //Programming Language
  const PL = images.PL.map(process);
  //Database Technologies
  const DB = images.default.DB.map(process);

  //frameworks
  const frameworks = images.default.frameworks.map(process);

  //structure and styles
  const structure = images.default.Structure.map(process);

  //Graphic Design
  const GD = images.default.GD.map(process);

  //version control
  const vc = images.default.vc.map(process);

  //Package Manager
  const pm = images.default.PM.map(process);

  //os
  const os = images.default.OS.map(process);

  //Libraries
  const lib = images.default.Libraries.map(process);

  const componentArr = [
    { fir: "Programming", sec: "Languages", process: PL },
    { fir: "DataBase", sec: "technologies", process: DB },
    { fir: "Frameworks", process: frameworks },
    { fir: "Version", sec: "control", process: vc },
    { fir: "package", sec: "manager", process: pm },
    { fir: "Operting", sec: "system", process: os },
    { fir: "Libraries", process: lib },
    { fir: "structure &", sec: "styles", process: structure },
    { fir: "Graphic", sec: "Design", process: GD },
  ];

  const show = componentArr.map((element) => (
    <>
      <Heading2 fir={element.fir} sec={element.sec} />
      <div className="mt-4 row-1 row row-cols-2 gap-5 mb-5">
        {element.process}
      </div>
    </>
  ));

  return (
    <div className="Tools">
      <Heading fir="Development" sec="Tools" />
      {show}
    </div>
  );
};
