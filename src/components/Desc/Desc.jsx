import "./Desc.css";

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
    <div className="container">
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
      <h4 className="Heading ">
        <span className="fir">Software</span>
        <br />
        <span className="sec">Engineer</span>
      </h4>
      <p className=" mt-4 mb-5">
        A undergrade Software Engineer Who can make simple ideas into creative
        design and functional Software
      </p>
      <div className="row row-cols-3">{desc}</div>
      <div className="container d-flex justify-content-center align-content-center pt-5">
        <div className="btn">Hire me</div>
      </div>
    </div>
  );
};
