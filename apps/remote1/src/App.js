import React, { useEffect } from "react";
import { CssBoundary } from "css-boundary";
import "./styles.css";

const App = () => {
  return (
    <CssBoundary>
      <div>
        <h1>Remote application 1 - React Version {React.version}</h1>
      </div>
    </CssBoundary>
  );
};

export default App;
