export default function black_bishop(
  ctx,
  x,
  y,
  upOrDown,
  color,
  negativeColor
) {
  let orientation = 0;
  if (upOrDown === "up") {
    orientation = 1;
  } else {
    orientation = -1;
    x += 1;
    y += 1;
  }

  // #path910
  ctx.save();
  ctx.beginPath();
  ctx.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    x * 100.0,
    y * 100.0
  );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  ctx.moveTo(9.0, 36.0);
  ctx.bezierCurveTo(12.39082, 35.029688, 19.10918, 36.430664, 22.5, 33.999609);
  ctx.bezierCurveTo(25.89082, 36.430664, 32.60918, 35.029688, 36.0, 36.0);
  ctx.bezierCurveTo(36.0, 36.0, 37.650586, 36.539648, 39.000586, 38.000391);
  ctx.bezierCurveTo(38.320312, 38.970703, 37.35, 38.990039, 36.0, 38.499609);
  ctx.bezierCurveTo(32.60918, 37.529297, 25.89082, 38.960156, 22.5, 37.499414);
  ctx.bezierCurveTo(19.10918, 38.960156, 12.39082, 37.529297, 9.0, 38.499609);
  ctx.bezierCurveTo(
    7.646484,
    38.990039,
    6.676172,
    38.970703,
    5.999414,
    38.000391
  );
  ctx.bezierCurveTo(7.354687, 36.059766, 9.0, 36.0, 9.0, 36.0);
  ctx.moveTo(9.0, 36.0);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path912
  ctx.save();
  ctx.beginPath();
  ctx.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    x * 100.0,
    y * 100.0
  );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  ctx.moveTo(14.999414, 31.999219);
  ctx.bezierCurveTo(
    17.500781,
    34.500586,
    27.499219,
    34.500586,
    30.000586,
    31.999219
  );
  ctx.bezierCurveTo(
    30.499805,
    30.499805,
    30.000586,
    30.000586,
    30.000586,
    30.000586
  );
  ctx.bezierCurveTo(
    30.000586,
    27.499219,
    27.499219,
    25.999805,
    27.499219,
    25.999805
  );
  ctx.bezierCurveTo(
    32.999414,
    24.500391,
    33.500391,
    14.500195,
    22.5,
    10.499414
  );
  ctx.bezierCurveTo(
    11.499609,
    14.500195,
    12.000586,
    24.500391,
    17.500781,
    25.999805
  );
  ctx.bezierCurveTo(
    17.500781,
    25.999805,
    14.999414,
    27.499219,
    14.999414,
    30.000586
  );
  ctx.bezierCurveTo(
    14.999414,
    30.000586,
    14.500195,
    30.499805,
    14.999414,
    31.999219
  );
  ctx.moveTo(14.999414, 31.999219);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path914
  ctx.save();
  ctx.beginPath();
  ctx.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    x * 100.0,
    y * 100.0
  );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  ctx.moveTo(24.999609, 7.999805);
  ctx.bezierCurveTo(24.999609, 9.381445, 23.879883, 10.499414, 22.5, 10.499414);
  ctx.bezierCurveTo(
    21.120117,
    10.499414,
    20.000391,
    9.381445,
    20.000391,
    7.999805
  );
  ctx.bezierCurveTo(20.000391, 6.619922, 21.120117, 5.500195, 22.5, 5.500195);
  ctx.bezierCurveTo(
    23.879883,
    5.500195,
    24.999609,
    6.619922,
    24.999609,
    7.999805
  );
  ctx.moveTo(24.999609, 7.999805);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path916
  ctx.save();
  ctx.beginPath();
  ctx.transform(
    orientation * 2.222222,
    0.0,
    orientation * 0.0,
    orientation * 2.222222,
    x * 100.0,
    y * 100.0
  );
  ctx.lineJoin = "miter";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.moveTo(17.500781, 25.999805);
  ctx.lineTo(27.499219, 25.999805);
  ctx.moveTo(14.999414, 30.000586);
  ctx.lineTo(30.000586, 30.000586);
  ctx.moveTo(22.5, 15.500391);
  ctx.lineTo(22.5, 20.499609);
  ctx.moveTo(20.000391, 18.0);
  ctx.lineTo(24.999609, 18.0);
  ctx.stroke();
  ctx.restore();
}
