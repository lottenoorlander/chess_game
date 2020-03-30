export default function queen(ctx, x, y, upOrDown, color, negativeColor) {
  let up = true;
  if (upOrDown === "down") {
    up = false;
  }

  let black = true;
  let line = 0.75;
  if (color === "rbg(255,255,255)") {
    black = false;
    line = 1.125;
  }

  // #path1418
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        x * 100 + -2.222222,
        y * 100 + -2.222222
      )
    : ctx.transform(
        2.222222,
        0.0,
        0.0,
        -2.222222,
        x * 100 + -2.222222,
        y * 100 + 102.222222
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  ctx.moveTo(8.999805, 13.000586);
  ctx.bezierCurveTo(
    8.999805,
    14.104492,
    8.105078,
    14.999219,
    6.999414,
    14.999219
  );
  ctx.bezierCurveTo(
    5.895508,
    14.999219,
    5.000781,
    14.104492,
    5.000781,
    13.000586
  );
  ctx.bezierCurveTo(
    5.000781,
    11.894922,
    5.895508,
    11.000195,
    6.999414,
    11.000195
  );
  ctx.bezierCurveTo(
    8.105078,
    11.000195,
    8.999805,
    11.894922,
    8.999805,
    13.000586
  );
  ctx.moveTo(8.999805, 13.000586);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1420
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        x * 100 + 34.444444,
        y * 100 + -12.222222
      )
    : ctx.transform(
        2.222222,
        0.0,
        0.0,
        -2.222222,
        x * 100 + 34.444444,
        y * 100 + 112.222222
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  ctx.moveTo(9.000391, 13.000586);
  ctx.bezierCurveTo(9.000391, 14.104492, 8.103906, 14.999219, 7.0, 14.999219);
  ctx.bezierCurveTo(
    5.896094,
    14.999219,
    4.999609,
    14.104492,
    4.999609,
    13.000586
  );
  ctx.bezierCurveTo(4.999609, 11.894922, 5.896094, 11.000195, 7.0, 11.000195);
  ctx.bezierCurveTo(
    8.103906,
    11.000195,
    9.000391,
    11.894922,
    9.000391,
    13.000586
  );
  ctx.moveTo(9.000391, 13.000586);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1422
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        x * 100 + 71.111111,
        y * 100 + -2.222222
      )
    : ctx.transform(
        2.222222,
        0.0,
        0.0,
        -2.222222,
        x * 100 + 71.111111,
        y * 100 + 102.222222
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  ctx.moveTo(8.999219, 13.000586);
  ctx.bezierCurveTo(
    8.999219,
    14.104492,
    8.104492,
    14.999219,
    7.000586,
    14.999219
  );
  ctx.bezierCurveTo(
    5.894922,
    14.999219,
    5.000195,
    14.104492,
    5.000195,
    13.000586
  );
  ctx.bezierCurveTo(
    5.000195,
    11.894922,
    5.894922,
    11.000195,
    7.000586,
    11.000195
  );
  ctx.bezierCurveTo(
    8.104492,
    11.000195,
    8.999219,
    11.894922,
    8.999219,
    13.000586
  );
  ctx.moveTo(8.999219, 13.000586);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1424
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        x * 100 + 15.555556,
        y * 100 + -10.0
      )
    : ctx.transform(
        2.222222,
        0.0,
        0.0,
        -2.222222,
        x * 100 + 15.555556,
        y * 100 + 110.0
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  ctx.moveTo(8.999609, 13.000781);
  ctx.bezierCurveTo(
    8.999609,
    14.104687,
    8.104883,
    14.999414,
    6.999219,
    14.999414
  );
  ctx.bezierCurveTo(
    5.895312,
    14.999414,
    5.000586,
    14.104687,
    5.000586,
    13.000781
  );
  ctx.bezierCurveTo(
    5.000586,
    11.895117,
    5.895312,
    11.000391,
    6.999219,
    11.000391
  );
  ctx.bezierCurveTo(
    8.104883,
    11.000391,
    8.999609,
    11.895117,
    8.999609,
    13.000781
  );
  ctx.moveTo(8.999609, 13.000781);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1426
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(
        2.222222,
        0.0,
        0.0,
        2.222222,
        x * 100 + 53.333333,
        y * 100 + -8.888889
      )
    : ctx.transform(
        2.222222,
        0.0,
        0.0,
        -2.222222,
        x * 100 + 53.333333,
        y * 100 + 108.888889
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  ctx.moveTo(8.999414, 13.0);
  ctx.bezierCurveTo(
    8.999414,
    14.103906,
    8.104687,
    15.000391,
    7.000781,
    15.000391
  );
  ctx.bezierCurveTo(5.895117, 15.000391, 5.000391, 14.103906, 5.000391, 13.0);
  ctx.bezierCurveTo(
    5.000391,
    11.896094,
    5.895117,
    10.999609,
    7.000781,
    10.999609
  );
  ctx.bezierCurveTo(8.104687, 10.999609, 8.999414, 11.896094, 8.999414, 13.0);
  ctx.moveTo(8.999414, 13.0);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1428
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = black ? "butt" : "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(9.0, 25.999805);
    ctx.bezierCurveTo(
      17.500781,
      24.500391,
      30.000586,
      24.500391,
      36.0,
      25.999805
    );
    ctx.lineTo(38.000391, 13.999219);
    ctx.lineTo(31.000781, 24.999609);
    ctx.lineTo(31.000781, 11.000391);
    ctx.lineTo(25.500586, 24.500391);
    ctx.lineTo(22.5, 9.499219);
    ctx.lineTo(19.499414, 24.500391);
    ctx.lineTo(13.999219, 10.499414);
    ctx.lineTo(13.999219, 24.999609);
    ctx.lineTo(6.999609, 13.999219);
    ctx.moveTo(9.0, 25.999805);
  } else {
    ctx.moveTo(9.0, 19.000195);
    ctx.bezierCurveTo(
      17.500781,
      20.499609,
      30.000586,
      20.499609,
      36.0,
      19.000195
    );
    ctx.lineTo(38.000391, 31.000781);
    ctx.lineTo(31.000781, 20.000391);
    ctx.lineTo(31.000781, 33.999609);
    ctx.lineTo(25.500586, 20.499609);
    ctx.lineTo(22.5, 35.500781);
    ctx.lineTo(19.499414, 20.499609);
    ctx.lineTo(13.999219, 34.500586);
    ctx.lineTo(13.999219, 20.000391);
    ctx.lineTo(6.999609, 31.000781);
    ctx.moveTo(9.0, 19.000195);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1430
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(9.0, 25.999805);
    ctx.bezierCurveTo(
      9.0,
      28.000195,
      10.499414,
      28.000195,
      11.499609,
      30.000586
    );
    ctx.bezierCurveTo(
      12.499805,
      31.5,
      12.499805,
      31.000781,
      12.000586,
      33.500391
    );
    ctx.bezierCurveTo(10.499414, 34.500586, 10.499414, 36.0, 10.499414, 36.0);
    ctx.bezierCurveTo(
      9.0,
      37.499414,
      11.000391,
      38.499609,
      11.000391,
      38.499609
    );
    ctx.bezierCurveTo(
      17.500781,
      39.499805,
      27.499219,
      39.499805,
      33.999609,
      38.499609
    );
    ctx.bezierCurveTo(
      33.999609,
      38.499609,
      35.500781,
      37.499414,
      33.999609,
      36.0
    );
    ctx.bezierCurveTo(
      33.999609,
      36.0,
      34.500586,
      34.500586,
      32.999414,
      33.500391
    );
    ctx.bezierCurveTo(
      32.500195,
      31.000781,
      32.500195,
      31.5,
      33.500391,
      30.000586
    );
    ctx.bezierCurveTo(34.500586, 28.000195, 36.0, 28.000195, 36.0, 25.999805);
    ctx.bezierCurveTo(
      27.499219,
      24.500391,
      17.500781,
      24.500391,
      9.0,
      25.999805
    );
    ctx.moveTo(9.0, 25.999805);
  } else {
    ctx.moveTo(9.0, 19.000195);
    ctx.bezierCurveTo(
      9.0,
      16.999805,
      10.499414,
      16.999805,
      11.499609,
      14.999414
    );
    ctx.bezierCurveTo(
      12.499805,
      13.5,
      12.499805,
      13.999219,
      12.000586,
      11.499609
    );
    ctx.bezierCurveTo(10.499414, 10.499414, 10.499414, 9.0, 10.499414, 9.0);
    ctx.bezierCurveTo(9.0, 7.500586, 11.000391, 6.500391, 11.000391, 6.500391);
    ctx.bezierCurveTo(
      17.500781,
      5.500195,
      27.499219,
      5.500195,
      33.999609,
      6.500391
    );
    ctx.bezierCurveTo(33.999609, 6.500391, 35.500781, 7.500586, 33.999609, 9.0);
    ctx.bezierCurveTo(
      33.999609,
      9.0,
      34.500586,
      10.499414,
      32.999414,
      11.499609
    );
    ctx.bezierCurveTo(
      32.500195,
      13.999219,
      32.500195,
      13.5,
      33.500391,
      14.999414
    );
    ctx.bezierCurveTo(34.500586, 16.999805, 36.0, 16.999805, 36.0, 19.000195);
    ctx.bezierCurveTo(
      27.499219,
      20.499609,
      17.500781,
      20.499609,
      9.0,
      19.000195
    );
    ctx.moveTo(9.0, 19.000195);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1432
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = up ? 1.125 : 0.75;
  if (up) {
    ctx.moveTo(11.499609, 30.000586);
    ctx.bezierCurveTo(
      14.999414,
      29.000391,
      30.000586,
      29.000391,
      33.500391,
      30.000586
    );
  } else {
    ctx.moveTo(11.499609, 14.999414);
    ctx.bezierCurveTo(
      14.999414,
      15.999609,
      30.000586,
      15.999609,
      33.500391,
      14.999414
    );
  }
  ctx.stroke();
  ctx.restore();

  // #path1434
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  if (up) {
    ///CHECK LINES!!!!!
    ctx.lineWidth = 1.125;
    ctx.moveTo(12.000586, 33.500391);
    ctx.bezierCurveTo(18.0, 32.500195, 27.0, 32.500195, 32.999414, 33.500391);
  } else {
    ctx.lineWidth = 0.75;
    ctx.moveTo(12.000586, 11.499609);
    ctx.bezierCurveTo(18.0, 12.499805, 27.0, 12.499805, 32.999414, 11.499609);
  }
  ctx.stroke();
  ctx.restore();

  // #path1436
  if (!up) {
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
    ctx.lineJoin = "round";
    ctx.strokeStyle = negativeColor;
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 0.75;
    ctx.moveTo(10.499414, 9.0);
    ctx.bezierCurveTo(
      15.500391,
      10.000195,
      29.000391,
      10.000195,
      33.999609,
      9.0
    );
    ctx.stroke();
    ctx.restore();
  }
}
