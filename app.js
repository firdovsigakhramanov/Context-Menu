let box = document.querySelector(".box"),
  contextMenu = document.querySelector(".context-menu");

box.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  contextMenu.style.top = `${e.y}px`;
  contextMenu.style.left = `${e.x}px`;
  contextMenu.classList.add("active");
  contextMenu.addEventListener("click", function (e) {
    box.style.backgroundColor = `${e.target.textContent}`;
  });
});

document.body.addEventListener("click", function (e) {
  if (!e.target.classList.contains("li")) {
    contextMenu.classList.remove("active");
  }
});
