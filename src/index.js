import _ from "lodash";
import "./style.css";
import Chessboard from "./Chess_Board.svg";

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

  return element;
}

document.body.appendChild(component());
