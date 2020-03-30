export default function rook(ctx, x, y, upOrDown, color, negativeColor) {
  let up = true;
  if (upOrDown === "down") {
    up = false;
  }

  let black = true;
  if (color === "rbg(255,255,255)") {
    black = false;
  }

  // #path1737
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(9.0, 39.000586);
    ctx.lineTo(36.0, 39.000586);
    ctx.lineTo(36.0, 36.0);
    ctx.lineTo(9.0, 36.0);
    ctx.moveTo(9.0, 39.000586);
  } else {
    ctx.moveTo(9.0, 5.999414);
    ctx.lineTo(36.0, 5.999414);
    ctx.lineTo(36.0, 9.0);
    ctx.lineTo(9.0, 9.0);
    ctx.moveTo(9.0, 5.999414);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1739
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(12.000586, 36.0);
    ctx.lineTo(12.000586, 31.999219);
    ctx.lineTo(32.999414, 31.999219);
    ctx.lineTo(32.999414, 36.0);
    ctx.moveTo(12.000586, 36.0);
  } else {
    ctx.moveTo(12.499805, 13.000781);
    ctx.lineTo(13.999219, 15.500391);
    ctx.lineTo(31.000781, 15.500391);
    ctx.lineTo(32.500195, 13.000781);
    ctx.moveTo(12.499805, 13.000781);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1741
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(11.000391, 13.999219);
    ctx.lineTo(11.000391, 9.0);
    ctx.lineTo(14.999414, 9.0);
    ctx.lineTo(14.999414, 11.000391);
    ctx.lineTo(20.000391, 11.000391);
    ctx.lineTo(20.000391, 9.0);
    ctx.lineTo(24.999609, 9.0);
    ctx.lineTo(24.999609, 11.000391);
    ctx.lineTo(30.000586, 11.000391);
    ctx.lineTo(30.000586, 9.0);
    ctx.lineTo(33.999609, 9.0);
    ctx.lineTo(33.999609, 13.999219);
  } else {
    ctx.moveTo(12.000586, 9.0);
    ctx.lineTo(12.000586, 13.000781);
    ctx.lineTo(32.999414, 13.000781);
    ctx.lineTo(32.999414, 9.0);
    ctx.moveTo(12.000586, 9.0);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1743
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "miter";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(33.999609, 13.999219);
    ctx.lineTo(31.000781, 16.999805);
    ctx.lineTo(13.999219, 16.999805);
    ctx.lineTo(11.000391, 13.999219);
  } else {
    ctx.moveTo(13.999219, 15.500391);
    ctx.lineTo(13.999219, 28.499414);
    ctx.lineTo(31.000781, 28.499414);
    ctx.lineTo(31.000781, 15.500391);
    ctx.moveTo(13.999219, 15.500391);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1745
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(31.000781, 16.999805);
    ctx.lineTo(31.000781, 29.499609);
    ctx.lineTo(13.999219, 29.499609);
    ctx.lineTo(13.999219, 16.999805);
  } else {
    ctx.moveTo(13.999219, 28.499414);
    ctx.lineTo(11.000391, 31.000781);
    ctx.lineTo(33.999609, 31.000781);
    ctx.lineTo(31.000781, 28.499414);
    ctx.moveTo(13.999219, 28.499414);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1747
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.lineCap = "butt";
  ctx.miterLimit = 4;
  ctx.lineWidth = 1.125;
  ctx.fillStyle = color;
  if (up) {
    ctx.moveTo(31.000781, 29.499609);
    ctx.lineTo(32.500195, 31.999219);
    ctx.lineTo(12.499805, 31.999219);
    ctx.lineTo(13.999219, 29.499609);
  } else {
    ctx.moveTo(11.000391, 31.000781);
    ctx.lineTo(11.000391, 36.0);
    ctx.lineTo(14.999414, 36.0);
    ctx.lineTo(14.999414, 33.999609);
    ctx.lineTo(20.000391, 33.999609);
    ctx.lineTo(20.000391, 36.0);
    ctx.lineTo(24.999609, 36.0);
    ctx.lineTo(24.999609, 33.999609);
    ctx.lineTo(30.000586, 33.999609);
    ctx.lineTo(30.000586, 36.0);
    ctx.lineTo(33.999609, 36.0);
    ctx.lineTo(33.999609, 31.000781);
    ctx.moveTo(11.000391, 31.000781);
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // #path1749
  ctx.save();
  ctx.beginPath();
  ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
  ctx.lineJoin = "miter";
  ctx.strokeStyle = negativeColor;
  ctx.lineCap = "round";
  ctx.miterLimit = 4;
  if (up) {
    ctx.lineWidth = 1.125;
    ctx.moveTo(11.000391, 13.999219);
    ctx.lineTo(33.999609, 13.999219);
  } else {
    ctx.lineWidth = 0.75;
    ctx.moveTo(12.000586, 9.499219);
    ctx.lineTo(32.999414, 9.499219);
  }
  ctx.stroke();
  ctx.restore();

  if (!up) {
    // #path1751
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
    ctx.lineJoin = "miter";
    ctx.strokeStyle = negativeColor;
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 0.75;
    ctx.moveTo(13.000781, 13.5);
    ctx.lineTo(31.999219, 13.5);
    ctx.stroke();
    ctx.restore();

    // #path1753
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
    ctx.lineJoin = "miter";
    ctx.strokeStyle = negativeColor;
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 0.75;
    ctx.moveTo(13.999219, 15.500391);
    ctx.lineTo(31.000781, 15.500391);
    ctx.stroke();
    ctx.restore();

    // #path1755
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
    ctx.lineJoin = "miter";
    ctx.strokeStyle = negativeColor;
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 0.75;
    ctx.moveTo(13.999219, 28.499414);
    ctx.lineTo(31.000781, 28.499414);
    ctx.stroke();
    ctx.restore();

    // #path1757
    ctx.save();
    ctx.beginPath();
    ctx.transform(2.222222, 0.0, 0.0, 2.222222, 0.0, 0.0);
    ctx.lineJoin = "miter";
    ctx.strokeStyle = negativeColor;
    ctx.lineCap = "round";
    ctx.miterLimit = 4;
    ctx.lineWidth = 0.75;
    ctx.moveTo(11.000391, 31.000781);
    ctx.lineTo(33.999609, 31.000781);
    ctx.stroke();
    ctx.restore();
  }
}
