import React from "react";
import { Heading } from "../Heading";
import "./Contact.css";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

export const Contact = () => {
  const contactSpring = useSpring({
    from: { x: +10000 },
    to: { x: 0 },
  });

  const [result, setResult] = useState("");
  const [style, setStyle] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "da0e40b2-d457-414d-aa92-6fbd509ce0cd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setStyle(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setStyle(fasle);
    }
  };

  return (
    <animated.div className="Contact" style={{ ...contactSpring }}>
      <Heading fir="Let's Make" sec="Some Deals" />
      <div className="container">
        <p className="heading">Contact US</p>
        <form onSubmit={onSubmit} method="post">
          <div className="row">
            <div className="col-3">
              <p className="subHead">Name</p>
            </div>
            <div className="col">
              <input
                required
                type="text"
                className="form-control"
                name="Name"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p className="subHead">E-mail:</p>
            </div>
            <div className="col">
              <input
                required
                type="email"
                name="E-mail"
                className="form-control"
                placeholder="your-email@gmail.com"
                onSubmit={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p className="subHead">Contact No:</p>
            </div>
            <div className="col">
              <input
                type="number"
                name="Contact"
                className="form-control"
                placeholder="07X-XX-XX-XXX"
                onSubmit={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p className="subHead">Message:</p>
            </div>
            <div className="col">
              <textarea
                rows={5}
                name="Message"
                className="form-control"
                required
                placeholder="Let's Talk..."
              ></textarea>
            </div>
          </div>
          <div className="row p-3">
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
        <p className={`pb-3 ps-3 ${style ? "success" : "failed"}`}>{result}</p>
      </div>
    </animated.div>
  );
};
