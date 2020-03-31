import { colorCalculator, isUp } from "./calculators";

export default function(board, x, y, colorOfPiece) {
  let color = colorCalculator(colorOfPiece);
  let up = isUp("up");

  // #path1726
  board.save();
  board.beginPath();
  board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
  board.lineJoin = "miter";
  board.strokeStyle = "rgb(0, 0, 0)";
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(22.000781, 9.0);
    board.bezierCurveTo(19.789453, 9.0, 18.0, 10.789453, 18.0, 13.000781);
    board.bezierCurveTo(
      18.0,
      13.890234,
      18.290039,
      14.709375,
      18.780469,
      15.380859
    );
    board.bezierCurveTo(
      16.829297,
      16.500586,
      15.500391,
      18.590625,
      15.500391,
      21.000586
    );
    board.bezierCurveTo(
      15.500391,
      23.030859,
      16.44082,
      24.839648,
      17.910352,
      26.029687
    );
    board.bezierCurveTo(
      14.909766,
      27.089648,
      10.499414,
      31.580859,
      10.499414,
      39.499805
    );
    board.lineTo(33.500391, 39.499805);
    board.bezierCurveTo(
      33.500391,
      31.580859,
      29.090039,
      27.089648,
      26.089453,
      26.029687
    );
    board.bezierCurveTo(
      27.560742,
      24.839648,
      28.499414,
      23.030859,
      28.499414,
      21.000586
    );
    board.bezierCurveTo(
      28.499414,
      18.590625,
      27.170508,
      16.500586,
      25.219336,
      15.380859
    );
    board.bezierCurveTo(
      25.709766,
      14.709375,
      25.999805,
      13.890234,
      25.999805,
      13.000781
    );
    board.bezierCurveTo(25.999805, 10.789453, 24.210352, 9.0, 22.000781, 9.0);
    board.moveTo(22.000781, 9.0);
  } else {
    board.moveTo(22.000781, 39.499805);
    board.bezierCurveTo(
      24.208594,
      39.499805,
      25.999805,
      37.708594,
      25.999805,
      35.500781
    );
    board.bezierCurveTo(
      25.999805,
      34.614844,
      25.70625,
      33.786914,
      25.219336,
      33.124219
    );
    board.bezierCurveTo(
      27.170508,
      32.002734,
      28.499414,
      29.910937,
      28.499414,
      27.499219
    );
    board.bezierCurveTo(
      28.499414,
      25.46543,
      27.557227,
      23.660156,
      26.092969,
      22.468359
    );
    board.bezierCurveTo(
      29.093555,
      21.410156,
      33.500391,
      16.922461,
      33.500391,
      9.0
    );
    board.lineTo(10.499414, 9.0);
    board.bezierCurveTo(
      10.499414,
      16.922461,
      14.90625,
      21.410156,
      17.906836,
      22.468359
    );
    board.bezierCurveTo(
      16.442578,
      23.660156,
      15.500391,
      25.46543,
      15.500391,
      27.499219
    );
    board.bezierCurveTo(
      15.500391,
      29.910937,
      16.829297,
      32.002734,
      18.780469,
      33.124219
    );
    board.bezierCurveTo(18.293555, 33.786914, 18.0, 34.614844, 18.0, 35.500781);
    board.bezierCurveTo(
      18.0,
      37.708594,
      19.791211,
      39.499805,
      22.000781,
      39.499805
    );
    board.moveTo(22.000781, 39.499805);
  }
  board.fill();
  board.stroke();
  board.restore();
}
