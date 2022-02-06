import React from "react";

const Increment = () => {
  const [counter, setcounter] = React.useState(0);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {counter}
      </h1>

      <button
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          padding: "10px",
        }}
        onClick={() => setcounter(counter + 1)}
      >
        Increment +
      </button>
    </div>
  );
};

export default Increment;
