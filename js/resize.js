window.onload = function (event) {
  getHeight();
};
window.onresize = function (event) {
  getHeight();
};
function getHeight() {
  var indexbgHeight = document.querySelector("img.mbg").clientHeight;
  var styleHeight = document.head.appendChild(document.createElement("style"));

  styleHeight.innerHTML =
    ".linear::after {top: calc(" +
    indexbgHeight +
    "px " +
    "-" +
    " 120px" +
    ");};";
}
