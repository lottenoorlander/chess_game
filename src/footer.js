export default function footer() {
  const footer = document.createElement("footer");
  footer.innerHTML =
    "<p>" +
    "Chesspieces By Francois-Pier - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=48195964" +
    "</p>" +
    "<p>" +
    "website created by Lotte Noorlander 2020" +
    "</p>";
  footer.classList.add("footer");
  return footer;
}
