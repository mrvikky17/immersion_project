const btn = document.getElementById("btn");
const inner = document.getElementById("inner");

let progress = 0;

btn.addEventListener("click", () => {
  if (progress < 100) {
    progress += 50;
    inner.style.width = progress+"%";
  }
});
