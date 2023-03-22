import React, { StrictMode, useEffect } from "react";
import { CssBoundary } from "css-boundary";
import "./styles.css";

const App = () => {
  return (
    <StrictMode>
      <CssBoundary>
        <div>
          <h1>Remote application 2 - React Version {React.version}</h1>
        </div>
      </CssBoundary>
    </StrictMode>
  );
};

export default App;
