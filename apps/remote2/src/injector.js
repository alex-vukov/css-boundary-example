import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

let root = {};

export const inject = (parentElementId) => {
  root[parentElementId] = createRoot(document.getElementById(parentElementId));
  root[parentElementId].render(<App />);
};

export const destroy = (parentElementId) => {
  root[parentElementId]?.unmount();
};
