function colorCalculator(colorOfPiece) {
  if (colorOfPiece == "white") {
    return "rgb(255, 255, 255)";
  } else {
    return "rgb(0,0,0)";
  }
}

function negativeColorCalculator(colorOfPiece) {
  if (colorOfPiece == "white") {
    return "rgb(0,0,0)";
  } else {
    return "rgb(255, 255, 255)";
  }
}

function isUp(orientation) {
  if (orientation === "up") {
    return true;
  } else {
    return false;
  }
}

function isBlack(colorOfPiece) {
  if (colorOfPiece === "black") {
    true;
  } else {
    return false;
  }
}

function lineCalculator(colorOfPiece) {
  if (colorOfPiece === "black") {
    return 0.75;
  } else {
    return 1.125;
  }
}

export {
  colorCalculator,
  negativeColorCalculator,
  isUp,
  isBlack,
  lineCalculator
};
