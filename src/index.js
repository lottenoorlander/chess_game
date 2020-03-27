import _ from "lodash";
import "./style.css";
import printMe from "./print.js";
import title from "./title.js";
import chessboard from "./chessboard.js";

function component() {
  const element = document.createElement("div");
  element.classList.add("title-and-board");

  element.appendChild(title());
  element.append(chessboard(8, 8));

  const button = document.createElement("button");
  button.innerHTML = "Click me!";
  button.onclick = printMe;
  element.appendChild(button);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
  module.hot.accept("./title.js", function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
  module.hot.accept("./chessboard.js", function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
