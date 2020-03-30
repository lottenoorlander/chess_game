export default function(ctx, x, y, upOrDown, color, negativeColor) {
  let up = true;
  if (upOrDown === "down") {
    up = false;
  }

  let black = true;
  if (color === "rbg(255,255,255)") {
    black = false;
  }

  // #path1844
  ctx.save();
  ctx.beginPath();
  black && !up
    ? ctx.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        x * 100 + 100.0,
        y * 100 + 100.0
      )
    : ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "miter";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  if (black) {
    ctx.moveTo(22.5, 11.629688);
    ctx.lineTo(22.5, 5.999414);
  } else {
    ctx.moveTo(22.5, 33.375586);
    ctx.lineTo(22.5, 39.000586);
  }
  ctx.stroke();
  ctx.restore();

  // #path1846
  ctx.save();
  ctx.beginPath();
  black && !up
    ? ctx.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        x * 100 + 100.0,
        y * 100 + 100.0
      )
    : ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "miter";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (black) {
    ctx.moveTo(22.5, 24.999609);
    ctx.bezierCurveTo(22.5, 24.999609, 27.0, 17.500781, 25.500586, 14.500195);
    ctx.bezierCurveTo(
      25.500586,
      14.500195,
      24.500391,
      12.000586,
      22.5,
      12.000586
    );
    ctx.bezierCurveTo(
      20.499609,
      12.000586,
      19.499414,
      14.500195,
      19.499414,
      14.500195
    );
    ctx.bezierCurveTo(18.0, 17.500781, 22.5, 24.999609, 22.5, 24.999609);
  } else {
    ctx.moveTo(22.5, 20.000391);
    ctx.bezierCurveTo(22.5, 20.000391, 27.0, 27.499219, 25.500586, 30.499805);
    ctx.bezierCurveTo(
      25.500586,
      30.499805,
      24.500391,
      32.999414,
      22.5,
      32.999414
    );
    ctx.bezierCurveTo(
      20.499609,
      32.999414,
      19.499414,
      30.499805,
      19.499414,
      30.499805
    );
    ctx.bezierCurveTo(18.0, 27.499219, 22.5, 20.000391, 22.5, 20.000391);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1848
  ctx.save();
  ctx.beginPath();
  black && !up
    ? ctx.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        x * 100 + 100.0,
        y * 100 + 100.0
      )
    : ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (black) {
    ctx.moveTo(11.499609, 37.000195);
    ctx.bezierCurveTo(16.999805, 40.5, 27.0, 40.5, 32.500195, 37.000195);
    ctx.lineTo(32.500195, 30.000586);
    ctx.bezierCurveTo(
      32.500195,
      30.000586,
      41.500195,
      25.500586,
      38.499609,
      19.499414
    );
    ctx.bezierCurveTo(
      34.500586,
      13.000781,
      24.999609,
      15.999609,
      22.5,
      23.500195
    );
    ctx.lineTo(22.5, 27.0);
    ctx.lineTo(22.5, 23.500195);
    ctx.bezierCurveTo(
      19.000195,
      15.999609,
      9.499219,
      13.000781,
      6.500391,
      19.499414
    );
    ctx.bezierCurveTo(
      3.499805,
      25.500586,
      11.499609,
      29.499609,
      11.499609,
      29.499609
    );
    ctx.moveTo(11.499609, 37.000195);
  } else {
    ctx.moveTo(11.499609, 7.999805);
    ctx.bezierCurveTo(16.999805, 4.5, 27.0, 4.5, 32.500195, 7.999805);
    ctx.lineTo(32.500195, 14.999414);
    ctx.bezierCurveTo(
      32.500195,
      14.999414,
      41.500195,
      19.499414,
      38.499609,
      25.500586
    );
    ctx.bezierCurveTo(
      34.500586,
      31.999219,
      24.999609,
      29.000391,
      22.5,
      21.499805
    );
    ctx.lineTo(22.5, 18.0);
    ctx.lineTo(22.5, 21.499805);
    ctx.bezierCurveTo(
      19.000195,
      29.000391,
      9.499219,
      31.999219,
      6.500391,
      25.500586
    );
    ctx.bezierCurveTo(
      3.499805,
      19.499414,
      11.499609,
      15.500391,
      11.499609,
      15.500391
    );
    ctx.moveTo(11.499609, 7.999805);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1850
  ctx.save();
  ctx.beginPath();
  black && !up
    ? ctx.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        x * 100 + 100.0,
        y * 100 + 100.0
      )
    : ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "miter";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  if (black) {
    ctx.moveTo(20.000391, 7.999805);
    ctx.lineTo(24.999609, 7.999805);
  } else {
    ctx.moveTo(20.000391, 37.000195);
    ctx.lineTo(24.999609, 37.000195);
  }
  ctx.stroke();
  ctx.restore();

  // #path1852
  ctx.save();
  ctx.beginPath();
  black && !up
    ? ctx.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        x * 100 + 100.0,
        y * 100 + 100.0
      )
    : ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = black ? "round" : "miter";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  if (black) {
    ctx.moveTo(31.999219, 29.499609);
    ctx.bezierCurveTo(
      31.999219,
      29.499609,
      40.5,
      25.500586,
      38.030273,
      19.849219
    );
    ctx.bezierCurveTo(34.150781, 13.999219, 24.999609, 18.0, 22.5, 24.500391);
    ctx.lineTo(22.510547, 26.599219);
    ctx.lineTo(22.5, 24.500391);
    ctx.bezierCurveTo(
      20.000391,
      18.0,
      9.905273,
      13.999219,
      6.997852,
      19.849219
    );
    ctx.bezierCurveTo(
      4.5,
      25.500586,
      11.849414,
      28.849219,
      11.849414,
      28.849219
    );
  } else {
    ctx.moveTo(11.499609, 15.500391);
    ctx.bezierCurveTo(16.999805, 18.0, 27.0, 18.0, 32.500195, 14.999414);
  }
  ctx.stroke();
  ctx.restore();

  // #path1854
  ctx.save();
  ctx.beginPath();
  black && !up
    ? ctx.transform(
        -2.222222,
        0.0,
        -0.0,
        -2.222222,
        x * 100 + 100.0,
        y * 100 + 100.0
      )
    : ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  if (black) {
    ctx.moveTo(11.499609, 30.000586);
    ctx.bezierCurveTo(16.999805, 27.0, 27.0, 27.0, 32.500195, 30.000586);
    ctx.moveTo(11.499609, 33.500391);
    ctx.bezierCurveTo(
      16.999805,
      30.499805,
      27.0,
      30.499805,
      32.500195,
      33.500391
    );
    ctx.moveTo(11.499609, 37.000195);
    ctx.bezierCurveTo(
      16.999805,
      33.999609,
      27.0,
      33.999609,
      32.500195,
      37.000195
    );
  } else {
    ctx.moveTo(11.499609, 7.999805);
    ctx.bezierCurveTo(
      16.999805,
      10.499414,
      27.0,
      10.499414,
      32.500195,
      7.999805
    );
  }
  ctx.stroke();
  ctx.restore();

  if (!black) {
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 1.125;
    ctx.moveTo(11.499609, 11.499609);
    ctx.bezierCurveTo(16.999805, 13.5, 27.0, 13.5, 32.500195, 11.499609);
    ctx.stroke();
    ctx.restore();
  }
}
