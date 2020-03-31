import { negativeColorCalculator, colorCalculator, isUp } from "./calculators";

export default function rook(board, x, y, colorOfPiece) {
  let color = colorCalculator(colorOfPiece);
  let negativeColor = negativeColorCalculator(colorOfPiece);
  let up = isUp("up");

  // #path1737
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(9.0, 39.000586);
    board.lineTo(36.0, 39.000586);
    board.lineTo(36.0, 36.0);
    board.lineTo(9.0, 36.0);
    board.moveTo(9.0, 39.000586);
  } else {
    board.moveTo(9.0, 5.999414);
    board.lineTo(36.0, 5.999414);
    board.lineTo(36.0, 9.0);
    board.lineTo(9.0, 9.0);
    board.moveTo(9.0, 5.999414);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1739
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(12.000586, 36.0);
    board.lineTo(12.000586, 31.999219);
    board.lineTo(32.999414, 31.999219);
    board.lineTo(32.999414, 36.0);
    board.moveTo(12.000586, 36.0);
  } else {
    board.moveTo(12.499805, 13.000781);
    board.lineTo(13.999219, 15.500391);
    board.lineTo(31.000781, 15.500391);
    board.lineTo(32.500195, 13.000781);
    board.moveTo(12.499805, 13.000781);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1741
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(11.000391, 13.999219);
    board.lineTo(11.000391, 9.0);
    board.lineTo(14.999414, 9.0);
    board.lineTo(14.999414, 11.000391);
    board.lineTo(20.000391, 11.000391);
    board.lineTo(20.000391, 9.0);
    board.lineTo(24.999609, 9.0);
    board.lineTo(24.999609, 11.000391);
    board.lineTo(30.000586, 11.000391);
    board.lineTo(30.000586, 9.0);
    board.lineTo(33.999609, 9.0);
    board.lineTo(33.999609, 13.999219);
  } else {
    board.moveTo(12.000586, 9.0);
    board.lineTo(12.000586, 13.000781);
    board.lineTo(32.999414, 13.000781);
    board.lineTo(32.999414, 9.0);
    board.moveTo(12.000586, 9.0);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1743
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "miter";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(33.999609, 13.999219);
    board.lineTo(31.000781, 16.999805);
    board.lineTo(13.999219, 16.999805);
    board.lineTo(11.000391, 13.999219);
  } else {
    board.moveTo(13.999219, 15.500391);
    board.lineTo(13.999219, 28.499414);
    board.lineTo(31.000781, 28.499414);
    board.lineTo(31.000781, 15.500391);
    board.moveTo(13.999219, 15.500391);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1745
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(31.000781, 16.999805);
    board.lineTo(31.000781, 29.499609);
    board.lineTo(13.999219, 29.499609);
    board.lineTo(13.999219, 16.999805);
  } else {
    board.moveTo(13.999219, 28.499414);
    board.lineTo(11.000391, 31.000781);
    board.lineTo(33.999609, 31.000781);
    board.lineTo(31.000781, 28.499414);
    board.moveTo(13.999219, 28.499414);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1747
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(31.000781, 29.499609);
    board.lineTo(32.500195, 31.999219);
    board.lineTo(12.499805, 31.999219);
    board.lineTo(13.999219, 29.499609);
  } else {
    board.moveTo(11.000391, 31.000781);
    board.lineTo(11.000391, 36.0);
    board.lineTo(14.999414, 36.0);
    board.lineTo(14.999414, 33.999609);
    board.lineTo(20.000391, 33.999609);
    board.lineTo(20.000391, 36.0);
    board.lineTo(24.999609, 36.0);
    board.lineTo(24.999609, 33.999609);
    board.lineTo(30.000586, 33.999609);
    board.lineTo(30.000586, 36.0);
    board.lineTo(33.999609, 36.0);
    board.lineTo(33.999609, 31.000781);
    board.moveTo(11.000391, 31.000781);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1749
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "miter";
  board.strokeStyle = negativeColor;
  board.lineCap = "round";
  board.miterLimit = 4;
  if (up) {
    board.lineWidth = 1.125;
    board.moveTo(11.000391, 13.999219);
    board.lineTo(33.999609, 13.999219);
  } else {
    board.lineWidth = 0.75;
    board.moveTo(12.000586, 9.499219);
    board.lineTo(32.999414, 9.499219);
  }
  board.stroke();
  board.restore();

  if (!up) {
    // #path1751
    board.save();
    board.beginPath();
    board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
    board.lineJoin = "miter";
    board.strokeStyle = negativeColor;
    board.lineCap = "round";
    board.miterLimit = 4;
    board.lineWidth = 0.75;
    board.moveTo(13.000781, 13.5);
    board.lineTo(31.999219, 13.5);
    board.stroke();
    board.restore();

    // #path1753
    board.save();
    board.beginPath();
    board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
    board.lineJoin = "miter";
    board.strokeStyle = negativeColor;
    board.lineCap = "round";
    board.miterLimit = 4;
    board.lineWidth = 0.75;
    board.moveTo(13.999219, 15.500391);
    board.lineTo(31.000781, 15.500391);
    board.stroke();
    board.restore();

    // #path1755
    board.save();
    board.beginPath();
    board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
    board.lineJoin = "miter";
    board.strokeStyle = negativeColor;
    board.lineCap = "round";
    board.miterLimit = 4;
    board.lineWidth = 0.75;
    board.moveTo(13.999219, 28.499414);
    board.lineTo(31.000781, 28.499414);
    board.stroke();
    board.restore();

    // #path1757
    board.save();
    board.beginPath();
    board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
    board.lineJoin = "miter";
    board.strokeStyle = negativeColor;
    board.lineCap = "round";
    board.miterLimit = 4;
    board.lineWidth = 0.75;
    board.moveTo(11.000391, 31.000781);
    board.lineTo(33.999609, 31.000781);
    board.stroke();
    board.restore();
  }
}
