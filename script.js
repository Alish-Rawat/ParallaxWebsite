let text = document.getElementById("text");
let cloudLeft = document.getElementById("cloud-left");
let cloudRight = document.getElementById("cloud-right");
let gateleft = document.getElementById("gate-left");
let gateRight = document.getElementById("gate-right");
let grass = document.getElementById("grass");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px";
  cloudLeft.style.left = value * -1.5 + "px";
  cloudRight.style.right = value * -1.5 + "px";
  gateleft.style.left = value * 0.5 + "px";
  gateRight.style.right = value * 0.5 + "px";
});
