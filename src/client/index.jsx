import * as React from "react";
import * as ReactDom from "react-dom";
import { Header } from "../shared/Header.tsx";

window.addEventListener("load", () => {
  ReactDom.hydrate(<Header />, document.getElementById("react_root"));
});
