const links = document.querySelectorAll(".text-link");
const bg = document.querySelector(".bg");
const showClass = "bg-show";

for (const link of links) {
  const img = new Image();
  img.src = link.dataset.bg; // 빠른 로드를 위해 이미지를 미리 불러놓음

  link.addEventListener("mouseenter", function (event) {
    bg.style.backgroundImage = `url(${this.dataset.bg})`;
    document.body.classList.add(showClass);
  });
  link.addEventListener("mouseleave", function (event) {
    // bg.style.backgroundImage = "";
    document.body.classList.remove(showClass);
  });
}
