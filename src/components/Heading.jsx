export const Heading = (props) => {
  return (
    <h4 className="Heading">
      <span className="fir">{props.fir} </span>
      <br />
      <span className="sec">{props.sec}</span>
    </h4>
  );
};