const target = document.querySelector(".nav-target");
const links = document.querySelectorAll(".nav-link");
const colors = [
  "#08d9d6",
  "#252a34",
  "#ff2e63",
  "#eaeaea",
  "#f9ed69",
  "#f08a5d",
  "#b83b5e",
  "#6a2c70",
];

// 링크
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
  links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc() {
  console.log("this: " + this + ", parentNode: " + this.parentNode);
  if (!this.parentNode.classList.contains("active")) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("active")) {
        links[i].parentNode.classList.remove("active");
      }
      links[i].style.opacity = "0.25";
    } // 마우스가 올라가지 않은 다른 메뉴들 마다 할일
    this.parentNode.classList.add("active");
    this.style.opacity = "1";
    const width = this.getBoundingClientRect().width; // a.getBoundingClientRect().width
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left + window.pageXOffset;
    const top = this.getBoundingClientRect().top + window.pageYOffset;
    const color = colors[Math.floor(Math.random() * links.length)];

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
  }
} // mouseenterFunc

function resizeFunc() {
  const active = document.querySelector(".nav-item.active");

  if (active) {
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;

    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
  }
}

window.addEventListener("resize", resizeFunc);
