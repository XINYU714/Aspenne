const anneani = bodymovin.loadAnimation({
  container: document.getElementById("anne"),
  path: "js/anne.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});
anneani.setSpeed(0.5);
