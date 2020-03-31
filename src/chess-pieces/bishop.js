import { negativeColorCalculator, colorCalculator, isUp } from "./calculators";

export default function bishop(board, x, y, colorOfPiece) {
  let negativeColor = negativeColorCalculator(colorOfPiece);
  let color = colorCalculator(colorOfPiece);
  let orientation = isUp("up") ? 1 : -1;

  // #path910
  board.save();
  board.beginPath();
  board.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    y * 100 + 0.0,
    x * 100.0 + 0.0
  );
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  board.moveTo(9.0, 36.0);
  board.bezierCurveTo(
    12.39082,
    35.029688,
    19.10918,
    36.430664,
    22.5,
    33.999609
  );
  board.bezierCurveTo(25.89082, 36.430664, 32.60918, 35.029688, 36.0, 36.0);
  board.bezierCurveTo(36.0, 36.0, 37.650586, 36.539648, 39.000586, 38.000391);
  board.bezierCurveTo(38.320312, 38.970703, 37.35, 38.990039, 36.0, 38.499609);
  board.bezierCurveTo(
    32.60918,
    37.529297,
    25.89082,
    38.960156,
    22.5,
    37.499414
  );
  board.bezierCurveTo(19.10918, 38.960156, 12.39082, 37.529297, 9.0, 38.499609);
  board.bezierCurveTo(
    7.646484,
    38.990039,
    6.676172,
    38.970703,
    5.999414,
    38.000391
  );
  board.bezierCurveTo(7.354687, 36.059766, 9.0, 36.0, 9.0, 36.0);
  board.moveTo(9.0, 36.0);
  board.fill();
  board.stroke();
  board.restore();

  // #path912
  board.save();
  board.beginPath();
  board.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    y * 100.0 + 0.0,
    x * 100.0 + 0.0
  );
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  board.moveTo(14.999414, 31.999219);
  board.bezierCurveTo(
    17.500781,
    34.500586,
    27.499219,
    34.500586,
    30.000586,
    31.999219
  );
  board.bezierCurveTo(
    30.499805,
    30.499805,
    30.000586,
    30.000586,
    30.000586,
    30.000586
  );
  board.bezierCurveTo(
    30.000586,
    27.499219,
    27.499219,
    25.999805,
    27.499219,
    25.999805
  );
  board.bezierCurveTo(
    32.999414,
    24.500391,
    33.500391,
    14.500195,
    22.5,
    10.499414
  );
  board.bezierCurveTo(
    11.499609,
    14.500195,
    12.000586,
    24.500391,
    17.500781,
    25.999805
  );
  board.bezierCurveTo(
    17.500781,
    25.999805,
    14.999414,
    27.499219,
    14.999414,
    30.000586
  );
  board.bezierCurveTo(
    14.999414,
    30.000586,
    14.500195,
    30.499805,
    14.999414,
    31.999219
  );
  board.moveTo(14.999414, 31.999219);
  board.fill();
  board.stroke();
  board.restore();

  // #path914
  board.save();
  board.beginPath();
  board.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    y * 100.0 + 0.0,
    x * 100.0 + 0.0
  );
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  board.moveTo(24.999609, 7.999805);
  board.bezierCurveTo(
    24.999609,
    9.381445,
    23.879883,
    10.499414,
    22.5,
    10.499414
  );
  board.bezierCurveTo(
    21.120117,
    10.499414,
    20.000391,
    9.381445,
    20.000391,
    7.999805
  );
  board.bezierCurveTo(20.000391, 6.619922, 21.120117, 5.500195, 22.5, 5.500195);
  board.bezierCurveTo(
    23.879883,
    5.500195,
    24.999609,
    6.619922,
    24.999609,
    7.999805
  );
  board.moveTo(24.999609, 7.999805);
  board.fill();
  board.stroke();
  board.restore();

  // #path916
  board.save();
  board.beginPath();
  board.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    y * 100.0 + 0.0,
    x * 100.0 + 0.0
  );
  board.lineJoin = "miter";
  board.strokeStyle = negativeColor;
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.moveTo(17.500781, 25.999805);
  board.lineTo(27.499219, 25.999805);
  board.moveTo(14.999414, 30.000586);
  board.lineTo(30.000586, 30.000586);
  board.moveTo(22.5, 15.500391);
  board.lineTo(22.5, 20.499609);
  board.moveTo(20.000391, 18.0);
  board.lineTo(24.999609, 18.0);
  board.stroke();
  board.restore();
}
