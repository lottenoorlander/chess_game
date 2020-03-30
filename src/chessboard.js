import "./chessboard.css";
import bishop from "./chess-pieces/bishop";
import horse from "./chess-pieces/horse";

export default function chessboard(width, height) {
  const canvas = drawCanvas(width, height);
  drawBoard(canvas, width, height);
  return canvas;
}

function drawCanvas(width, height) {
  const chessboard = document.createElement("canvas");
  chessboard.classList.add("chessboard-container");
  chessboard.width = width * 100;
  chessboard.height = height * 100;
  return chessboard;
}

function drawBoard(canvas, width, height) {
  const chessboard = canvas.getContext("2d");

  for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
      const color = getColor(i, j);
      drawTile(chessboard, 100, color, i, j);
      drawPiece(chessboard, i, j);
    }
  }
  return chessboard;
}

function getColor(x, y) {
  if (y % 2 === 0) {
    if (x % 2 === 0) {
      return "white";
    } else {
      return "black";
    }
  } else {
    if (x % 2 === 0) {
      return "black";
    } else {
      return "white";
    }
  }
}

function drawTile(board, width, color, x, y) {
  board.fillStyle = color;
  board.fillRect(y * width, x * width, width, width);
}

function drawPiece(board, x, y) {
  //check if there should be a piece/
  //draw piece
  // bishop(board, 0, 0, "up", "rgb(255, 255, 255)", "rgb(0,0,0)");
  // horse(board, 2, 6, "up", "rgb(255, 255, 255)", "rgb(0,0,0)");
}

const PiecesSetup = [
  [
    "black_rook",
    "black_horse",
    "black_bishop",
    "black_queen",
    "black_king",
    "black_bishop",
    "black_horse",
    "black_rook"
  ],
  [
    "black_pawn",
    "black_pawn",
    "black_pawn",
    "black_pawn",
    "black_pawn",
    "black_pawn",
    "black_pawn",
    "black_pawn"
  ],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  [
    "white_pawn",
    "white_pawn",
    "white_pawn",
    "white_pawn",
    "white_pawn",
    "white_pawn",
    "white_pawn",
    "white_pawn"
  ],
  [
    "white_rook",
    "white_horse",
    "white_bishop",
    "white_queen",
    "white_king",
    "white_bishop",
    "white_horse",
    "white_rook"
  ]
];
