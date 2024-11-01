"use client";

const { useEffect } = require("react");

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div>
      <h1>Error</h1>
      <p>{error}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
