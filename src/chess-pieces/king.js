import { negativeColorCalculator, colorCalculator, isUp } from "./calculators";

export default function(board, x, y, colorOfPiece) {
  let negativeColor = negativeColorCalculator(colorOfPiece);
  let color = colorCalculator(colorOfPiece);
  let up = isUp("up");
  //down doesn't work

  // #path1844
  board.save();
  board.beginPath();
  up
    ? board.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        y * 100 + 0.0,
        x * 100 + 0.0
      )
    : board.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        y * 100 + 100.0,
        x * 100 + 100.0
      );
  board.lineJoin = "miter";
  board.strokeStyle = "rgb(0,0,0)";
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  if (up) {
    board.moveTo(22.5, 11.629688);
    board.lineTo(22.5, 5.999414);
  } else {
    board.moveTo(22.5, 33.375586);
    board.lineTo(22.5, 39.000586);
  }
  board.stroke();
  board.restore();

  // #path1846
  board.save();
  board.beginPath();
  up
    ? board.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        y * 100 + 0.0,
        x * 100 + 0.0
      )
    : board.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        y * 100 + 100.0,
        x * 100 + 100.0
      );
  board.lineJoin = "miter";
  board.strokeStyle = "rgb(0,0,0)";
  board.lineCap = "butt";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(22.5, 24.999609);
    board.bezierCurveTo(22.5, 24.999609, 27.0, 17.500781, 25.500586, 14.500195);
    board.bezierCurveTo(
      25.500586,
      14.500195,
      24.500391,
      12.000586,
      22.5,
      12.000586
    );
    board.bezierCurveTo(
      20.499609,
      12.000586,
      19.499414,
      14.500195,
      19.499414,
      14.500195
    );
    board.bezierCurveTo(18.0, 17.500781, 22.5, 24.999609, 22.5, 24.999609);
  } else {
    board.moveTo(22.5, 20.000391);
    board.bezierCurveTo(22.5, 20.000391, 27.0, 27.499219, 25.500586, 30.499805);
    board.bezierCurveTo(
      25.500586,
      30.499805,
      24.500391,
      32.999414,
      22.5,
      32.999414
    );
    board.bezierCurveTo(
      20.499609,
      32.999414,
      19.499414,
      30.499805,
      19.499414,
      30.499805
    );
    board.bezierCurveTo(18.0, 27.499219, 22.5, 20.000391, 22.5, 20.000391);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1848
  board.save();
  board.beginPath();
  up
    ? board.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        y * 100 + 0.0,
        x * 100 + 0.0
      )
    : board.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        y * 100 + 100.0,
        x * 100 + 100.0
      );
  board.lineJoin = "round";
  board.strokeStyle = "rgb(0,0,0)";
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  board.fillStyle = color;
  if (up) {
    board.moveTo(11.499609, 37.000195);
    board.bezierCurveTo(16.999805, 40.5, 27.0, 40.5, 32.500195, 37.000195);
    board.lineTo(32.500195, 30.000586);
    board.bezierCurveTo(
      32.500195,
      30.000586,
      41.500195,
      25.500586,
      38.499609,
      19.499414
    );
    board.bezierCurveTo(
      34.500586,
      13.000781,
      24.999609,
      15.999609,
      22.5,
      23.500195
    );
    board.lineTo(22.5, 27.0);
    board.lineTo(22.5, 23.500195);
    board.bezierCurveTo(
      19.000195,
      15.999609,
      9.499219,
      13.000781,
      6.500391,
      19.499414
    );
    board.bezierCurveTo(
      3.499805,
      25.500586,
      11.499609,
      29.499609,
      11.499609,
      29.499609
    );
    board.moveTo(11.499609, 37.000195);
  } else {
    board.moveTo(11.499609, 7.999805);
    board.bezierCurveTo(16.999805, 4.5, 27.0, 4.5, 32.500195, 7.999805);
    board.lineTo(32.500195, 14.999414);
    board.bezierCurveTo(
      32.500195,
      14.999414,
      41.500195,
      19.499414,
      38.499609,
      25.500586
    );
    board.bezierCurveTo(
      34.500586,
      31.999219,
      24.999609,
      29.000391,
      22.5,
      21.499805
    );
    board.lineTo(22.5, 18.0);
    board.lineTo(22.5, 21.499805);
    board.bezierCurveTo(
      19.000195,
      29.000391,
      9.499219,
      31.999219,
      6.500391,
      25.500586
    );
    board.bezierCurveTo(
      3.499805,
      19.499414,
      11.499609,
      15.500391,
      11.499609,
      15.500391
    );
    board.moveTo(11.499609, 7.999805);
  }
  board.fill();
  board.stroke();
  board.restore();

  // #path1850
  board.save();
  board.beginPath();
  up
    ? board.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        y * 100 + 0.0,
        x * 100 + 0.0
      )
    : board.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        y * 100 + 100.0,
        x * 100 + 100.0
      );
  board.lineJoin = "miter";
  board.strokeStyle = "rgb(0,0,0)";
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  if (up) {
    board.moveTo(20.000391, 7.999805);
    board.lineTo(24.999609, 7.999805);
  } else {
    board.moveTo(20.000391, 37.000195);
    board.lineTo(24.999609, 37.000195);
  }
  board.stroke();
  board.restore();

  // #path1852
  board.save();
  board.beginPath();
  up
    ? board.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        y * 100 + 0.0,
        x * 100 + 0.0
      )
    : board.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        y * 100 + 100.0,
        x * 100 + 100.0
      );
  board.lineJoin = "miter";
  board.strokeStyle = negativeColor;
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  if (up) {
    board.moveTo(31.999219, 29.499609);
    board.bezierCurveTo(
      31.999219,
      29.499609,
      40.5,
      25.500586,
      38.030273,
      19.849219
    );
    board.bezierCurveTo(34.150781, 13.999219, 24.999609, 18.0, 22.5, 24.500391);
    board.lineTo(22.510547, 26.599219);
    board.lineTo(22.5, 24.500391);
    board.bezierCurveTo(
      20.000391,
      18.0,
      9.905273,
      13.999219,
      6.997852,
      19.849219
    );
    board.bezierCurveTo(
      4.5,
      25.500586,
      11.849414,
      28.849219,
      11.849414,
      28.849219
    );
  } else {
    board.moveTo(11.499609, 15.500391);
    board.bezierCurveTo(16.999805, 18.0, 27.0, 18.0, 32.500195, 14.999414);
  }
  board.stroke();
  board.restore();

  // #path1854
  board.save();
  board.beginPath();
  up
    ? board.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        y * 100 + 0.0,
        x * 100 + 0.0
      )
    : board.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        y * 100 + 100.0,
        x * 100 + 100.0
      );
  board.lineJoin = "round";
  board.strokeStyle = negativeColor;
  board.lineCap = "round";
  board.miterLimit = 4;
  board.lineWidth = 1.125;
  if (up) {
    board.moveTo(11.499609, 30.000586);
    board.bezierCurveTo(16.999805, 27.0, 27.0, 27.0, 32.500195, 30.000586);
    board.moveTo(11.499609, 33.500391);
    board.bezierCurveTo(
      16.999805,
      30.499805,
      27.0,
      30.499805,
      32.500195,
      33.500391
    );
    board.moveTo(11.499609, 37.000195);
    board.bezierCurveTo(
      16.999805,
      33.999609,
      27.0,
      33.999609,
      32.500195,
      37.000195
    );
  } else {
    board.moveTo(11.499609, 7.999805);
    board.bezierCurveTo(
      16.999805,
      10.499414,
      27.0,
      10.499414,
      32.500195,
      7.999805
    );
  }
  board.stroke();
  board.restore();

  if (!up) {
    board.save();
    board.beginPath();
    board.transform(2.222222, 0.0, 0.0, 2.222222, y * 100 + 0.0, x * 100 + 0.0);
    board.lineJoin = "round";
    board.strokeStyle = "rgb(0,0,0)";
    board.lineCap = "round";
    board.miterLimit = 4;
    board.lineWidth = 1.125;
    board.moveTo(11.499609, 11.499609);
    board.bezierCurveTo(16.999805, 13.5, 27.0, 13.5, 32.500195, 11.499609);
    board.stroke();
    board.restore();
  }
}
