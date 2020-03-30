export default function horse(ctx, x, y, upOrDown, color, negativeColor) {
  // #surface1
  let line = 0;
  let black = true;
  if (color === "rbg(255,255,255)") {
    line = 0.75;
    black = false;
  } else {
    line = 1.125;
  }

  let up = true;
  if (upOrDown === "down") {
    up = false;
  }

  // #path1527
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = up ? "round" : "miter";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(22.000781, 10.000195);
    ctx.bezierCurveTo(
      32.500195,
      11.000391,
      38.499609,
      18.0,
      38.000391,
      39.000586
    );
    ctx.lineTo(14.999414, 39.000586);
    ctx.bezierCurveTo(
      14.999414,
      30.000586,
      24.999609,
      32.500195,
      22.999219,
      18.0
    );
  } else {
    ctx.moveTo(22.028906, 36.0);
    ctx.bezierCurveTo(
      11.529492,
      34.999805,
      5.52832,
      28.000195,
      6.029297,
      6.999609
    );
    ctx.lineTo(29.028516, 6.999609);
    ctx.bezierCurveTo(
      29.028516,
      15.999609,
      19.02832,
      13.5,
      21.028711,
      28.000195
    );
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1529
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(23.999414, 18.0);
    ctx.bezierCurveTo(24.380859, 20.90918, 18.45, 25.370508, 15.999609, 27.0);
    ctx.bezierCurveTo(
      13.000781,
      29.000391,
      13.180078,
      31.340039,
      11.000391,
      31.000781
    );
    ctx.bezierCurveTo(
      9.958008,
      30.060352,
      12.410156,
      27.959766,
      11.000391,
      28.000195
    );
    ctx.bezierCurveTo(
      10.000195,
      28.000195,
      11.190234,
      29.230664,
      10.000195,
      30.000586
    );
    ctx.bezierCurveTo(9.0, 30.000586, 5.997656, 31.000781, 5.999414, 25.999805);
    ctx.bezierCurveTo(
      5.999414,
      23.999414,
      12.000586,
      13.999219,
      12.000586,
      13.999219
    );
    ctx.bezierCurveTo(
      12.000586,
      13.999219,
      13.890234,
      12.100781,
      13.999219,
      10.499414
    );
    ctx.bezierCurveTo(13.269727, 9.50625, 13.5, 8.500781, 13.5, 7.500586);
    ctx.bezierCurveTo(
      14.500195,
      6.500391,
      16.500586,
      10.000195,
      16.500586,
      10.000195
    );
    ctx.lineTo(18.499219, 10.000195);
    ctx.bezierCurveTo(
      18.499219,
      10.000195,
      19.279687,
      8.008594,
      21.000586,
      6.999609
    );
    ctx.bezierCurveTo(
      22.000781,
      6.999609,
      22.000781,
      10.000195,
      22.000781,
      10.000195
    );
  } else {
    ctx.moveTo(20.028516, 28.000195);
    ctx.bezierCurveTo(
      19.645312,
      25.089258,
      25.581445,
      20.631445,
      28.02832,
      19.000195
    );
    ctx.bezierCurveTo(
      31.028906,
      16.999805,
      30.847852,
      14.656641,
      33.029297,
      14.999414
    );
    ctx.bezierCurveTo(
      34.069922,
      15.943359,
      31.616016,
      18.036914,
      33.029297,
      18.0
    );
    ctx.bezierCurveTo(
      34.029492,
      18.0,
      32.841211,
      16.767773,
      34.029492,
      15.999609
    );
    ctx.bezierCurveTo(
      35.029687,
      15.999609,
      38.032031,
      14.999414,
      38.028516,
      20.000391
    );
    ctx.bezierCurveTo(
      38.028516,
      22.000781,
      32.029102,
      31.999219,
      32.029102,
      31.999219
    );
    ctx.bezierCurveTo(
      32.029102,
      31.999219,
      30.142969,
      33.90293,
      30.028711,
      35.500781
    );
    ctx.bezierCurveTo(
      30.754687,
      36.493945,
      30.529687,
      37.499414,
      30.529687,
      38.499609
    );
    ctx.bezierCurveTo(29.529492, 39.499805, 27.529102, 36.0, 27.529102, 36.0);
    ctx.lineTo(25.528711, 36.0);
    ctx.bezierCurveTo(
      25.528711,
      36.0,
      24.746484,
      37.991602,
      23.029102,
      39.000586
    );
    ctx.bezierCurveTo(22.028906, 39.000586, 22.028906, 36.0, 22.028906, 36.0);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1531
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0)
    : ctx.transform(
        -2.222222,
        0.0,
        0.0,
        -2.222222,
        x * 100 + 96.731018,
        y * 100 + 97.777778
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  if (up) {
    ctx.fillStyle = negativeColor;
    ctx.moveTo(9.499219, 25.500586);
    ctx.bezierCurveTo(9.499219, 25.776562, 9.275977, 25.999805, 9.0, 25.999805);
    ctx.bezierCurveTo(
      8.724023,
      25.999805,
      8.500781,
      25.776562,
      8.500781,
      25.500586
    );
    ctx.bezierCurveTo(8.500781, 25.224609, 8.724023, 24.999609, 9.0, 24.999609);
    ctx.bezierCurveTo(
      9.275977,
      24.999609,
      9.499219,
      25.224609,
      9.499219,
      25.500586
    );
    ctx.moveTo(9.499219, 25.500586);
  } else {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.moveTo(9.000247, 23.500391);
    ctx.bezierCurveTo(
      9.000247,
      23.776367,
      8.777005,
      23.999609,
      8.499271,
      23.999609
    );
    ctx.bezierCurveTo(
      8.223294,
      23.999609,
      8.000052,
      23.776367,
      8.000052,
      23.500391
    );
    ctx.bezierCurveTo(
      8.000052,
      23.224414,
      8.223294,
      22.999414,
      8.499271,
      22.999414
    );
    ctx.bezierCurveTo(
      8.777005,
      22.999414,
      9.000247,
      23.224414,
      9.000247,
      23.500391
    );
    ctx.moveTo(9.000247, 23.500391);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1533
  ctx.save();
  ctx.beginPath();
  up
    ? ctx.transform(
        1.924444,
        1.111111,
        -1.111111,
        1.924444,
        x * 100 + 21.54,
        y * 100 + -11.495556
      )
    : ctx.transform(
        -1.9245,
        -1.111111,
        1.111111,
        -1.9245,
        x * 100 + 76.302947,
        y * 100 + 113.718653
      );
  ctx.lineJoin = "round";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  ctx.lineWidth = line;
  if (up) {
    ctx.fillStyle = negativeColor;
    ctx.moveTo(14.999668, 15.500191);
    ctx.bezierCurveTo(
      15.00053,
      16.327855,
      14.775464,
      16.999759,
      14.499869,
      17.000554
    );
    ctx.bezierCurveTo(
      14.223395,
      16.999826,
      14.0004,
      16.328833,
      14.00106,
      15.50029
    );
    ctx.bezierCurveTo(
      13.99932,
      14.671104,
      14.224386,
      13.9992,
      14.50086,
      13.999927
    );
    ctx.bezierCurveTo(
      14.776455,
      13.999133,
      15.000329,
      14.671649,
      14.999668,
      15.500191
    );
    ctx.moveTo(14.999668, 15.500191);
  } else {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.moveTo(15.000459, 15.499517);
    ctx.bezierCurveTo(
      14.999787,
      16.328042,
      14.77624,
      16.99905,
      14.500651,
      16.999841
    );
    ctx.bezierCurveTo(
      14.224183,
      16.99911,
      13.999679,
      16.329007,
      14.00035,
      15.500482
    );
    ctx.bezierCurveTo(
      14.001021,
      14.671957,
      14.22369,
      13.999427,
      14.500158,
      14.000158
    );
    ctx.bezierCurveTo(
      14.775746,
      13.999367,
      14.999608,
      14.671871,
      15.000459,
      15.499517
    );
    ctx.moveTo(15.000459, 15.499517);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1535
  if (black) {
    if (up) {
      ctx.beginPath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.moveTo(54.554688, 23.109375);
      ctx.lineTo(53.554688, 26.332031);
      ctx.lineTo(54.667969, 26.667969);
      ctx.bezierCurveTo(
        61.667969,
        28.890625,
        67.222656,
        32.199219,
        72.222656,
        41.667969
      );
      ctx.bezierCurveTo(
        77.222656,
        51.132812,
        79.445312,
        64.578125,
        78.332031,
        86.667969
      );
      ctx.lineTo(78.222656, 87.777344);
      ctx.lineTo(83.222656, 87.777344);
      ctx.lineTo(83.332031, 86.667969);
      ctx.bezierCurveTo(
        84.445312,
        64.3125,
        81.378906,
        49.222656,
        76.109375,
        39.246094
      );
      ctx.bezierCurveTo(
        70.84375,
        29.265625,
        63.246094,
        24.488281,
        55.6875,
        23.332031
      );
      ctx.moveTo(54.554688, 23.109375);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.moveTo(43.285156, 79.109375);
      ctx.lineTo(43.953125, 76.667969);
      ctx.lineTo(42.730469, 76.445312);
      ctx.bezierCurveTo(
        35.839844,
        75.382812,
        28.679688,
        71.480469,
        23.675781,
        62.015625
      );
      ctx.bezierCurveTo(
        18.671875,
        52.546875,
        17.183594,
        37.652344,
        18.285156,
        15.554688
      );
      ctx.lineTo(18.398438, 14.445312);
      ctx.lineTo(14.507812, 14.445312);
      ctx.lineTo(14.507812, 15.554688);
      ctx.bezierCurveTo(
        13.390625,
        37.902344,
        16.457031,
        53.007812,
        21.730469,
        62.984375
      );
      ctx.bezierCurveTo(
        27.003906,
        72.964844,
        34.59375,
        77.726562,
        42.148438,
        78.890625
      );
      ctx.moveTo(43.285156, 79.109375);
      ctx.fill();
    }
  } else {
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, x * 100 + 0.0, y * 100 + 0.0);
    ctx.lineJoin = "miter";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 0.75;
    ctx.moveTo(7.029492, 6.999609);
    ctx.bezierCurveTo(
      6.029297,
      27.0,
      12.529687,
      34.500586,
      19.02832,
      35.500781
    );
    ctx.stroke();
    ctx.restore();
  }
}
