import "./Footer.css";

export const Footer = (props) => {
  return (
    <div className="Footer">
      <p>
        Made by <span>{props.name}</span>
      </p>
    </div>
  );
};
