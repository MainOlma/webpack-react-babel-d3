import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import * as d3 from 'd3';

ReactDOM.render(<App />, document.getElementById("root"));

const square = d3.selectAll("rect");
square.style("fill", "orange");