import _ from "lodash";
import "./style.css";
import Chessboard from "./Chess_Board.svg";
import Data from "./data.xml";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  element.classList.add("title-and-board");

  const title = document.createElement("h1");
  title.innerHTML = "Welcome to this chessgame";
  title.classList.add("title");
  element.append(title);

  const chessboard = new Image();
  chessboard.src = Chessboard;
  chessboard.classList.add("chessboard");
  element.append(chessboard);

  const email = document.createElement("p");
  email.innerHTML = Data.note.from;
  element.append(email);

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
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
