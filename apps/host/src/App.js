import React, { useEffect } from "react";
import { inject as inject1, destroy as destroy1 } from "remote1/injector";
import { inject as inject2, destroy as destroy2 } from "remote2/injector";

const parentElementId1 = "parent1";
const parentElementId2 = "parent2";

const App = () => {
  useEffect(() => {
    inject1(parentElementId1);
    inject2(parentElementId2);
    return () => {
      destroy1(parentElementId1);
      destroy2(parentElementId2);
    };
  }, []);

  // App2 will be injected in the div with parentElementId
  return (
    <div>
      <h1>Host Application - React Version {React.version}</h1>
      <div id={parentElementId1} style={{ border: "solid 1px red" }}></div>
      <br />
      <div id={parentElementId2} style={{ border: "solid 1px green" }}></div>
    </div>
  );
};

export default App;
