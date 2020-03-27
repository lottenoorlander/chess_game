import "./chessboard.css";

export default function chessboard(width, height) {
  const chessboard = document.createElement("canvas");
  chessboard.width = width * 100;
  chessboard.height = height * 100;
  const filled = chessboard.getContext("2d");

  for (let i = 0; i <= height; i += 2) {
    for (let j = 0; j <= width; j += 2) {
      filled.fillStyle = i % 2 === 0 ? "white" : "black";
      filled.fillRect(j * 100, i * 100, 100, 100);
      filled.fillStyle = i % 2 === 0 ? "black" : "white";
      filled.fillRect((j + 1) * 100, (i + 1) * 100, 100, 100);
    }
  }

  chessboard.classList.add("chessboard-container");

  return chessboard;
}
