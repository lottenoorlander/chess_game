import bishop from "./chess-pieces/bishop";
import horse from "./chess-pieces/horse";
import pawn from "./chess-pieces/pawn";
import king from "./chess-pieces/king";
import queen from "./chess-pieces/queen";
import rook from "./chess-pieces/rook";
import "./chessboard.css";

const initialSetup = [
  [
    { piece: "rook", color: "black" },
    { piece: "horse", color: "black" },
    { piece: "bishop", color: "black" },
    { piece: "queen", color: "black" },
    { piece: "king", color: "black" },
    { piece: "bishop", color: "black" },
    { piece: "horse", color: "black" },
    { piece: "rook", color: "black" }
  ],
  [
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" },
    { piece: "pawn", color: "black" }
  ],
  [
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" }
  ],
  [
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" }
  ],
  [
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" }
  ],
  [
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" },
    { piece: "empty", color: "empty" }
  ],
  [
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" },
    { piece: "pawn", color: "white" }
  ],
  [
    { piece: "rook", color: "white" },
    { piece: "horse", color: "white" },
    { piece: "bishop", color: "white" },
    { piece: "queen", color: "white" },
    { piece: "king", color: "white" },
    { piece: "bishop", color: "white" },
    { piece: "horse", color: "white" },
    { piece: "rook", color: "white" }
  ]
];

let pieceDrawerFunctions = {
  rook,
  horse,
  bishop,
  queen,
  king,
  pawn,
  empty: () => {}
};

let boardState = [...initialSetup];

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

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
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
      return "khaki";
    } else {
      return "chocolate";
    }
  } else {
    if (x % 2 === 0) {
      return "chocolate";
    } else {
      return "khaki";
    }
  }
}

function drawTile(board, width, color, x, y) {
  board.fillStyle = color;
  board.fillRect(y * width, x * width, width, width);
}

function drawPiece(board, x, y) {
  let pieceToDraw = boardState[x][y].piece;
  let colorToDraw = boardState[x][y].color;
  pieceDrawerFunctions[pieceToDraw](board, x, y, colorToDraw);
}
