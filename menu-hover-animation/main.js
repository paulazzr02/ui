const bar = document.querySelector(".menu-bar");
const links = document.querySelectorAll(".menu-link");
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

// 이벤트 위임 : 이벤트 리스너를 하위 요소에 추가하는 대신 상위 요소에 추가하여 하위 요소의 이벤트를 제어하는 기법
// 리스너는 DOM의 이벤트 버블링으로 인해 하위 요소에 이벤트가 발생될 때마다 실행 됨.
// 이벤트 버블링 : 특정 요소에서 이벤트 발생 시 해당 이벤트를 최 상위에 있는 요소까지 전파시키는 방식
document.querySelector(".menu-list").addEventListener("click", clickMenuFunc);

function clickMenuFunc(event) {
  // 클릭한 요소 찾기
  let target = event.target;
  // UL 리스트 아이템인 LI 요소를 얻기 위해 LI 하위에서 클릭한 태그에 따라 상위 부모를 찾는 방법을 다르게 함.
  let clickedLi =
    target.tagName === "A"
      ? target.parentNode
      : target.tagName === "SPAN"
      ? target.parentNode.parentNode
      : target;

  if (clickedLi) {
    // 현재 활성 메뉴 초기화
    let currentCategory = document.querySelector(".menu-list .active");
    if (currentCategory) currentCategory.classList.remove("active");

    // 시 선택 메뉴 활성화
    clickedLi.classList.add("active");
    let pageURL = "/api/page?menuid=" + clickedLi.getAttribute("data-menuid");

    // AJAX로 새로 로딩할 새 페이지 내용을 가져 옴.
  }
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
  links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc() {
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

    bar.style.width = `${width}px`;
    bar.style.height = `${height}px`;
    bar.style.left = `${left}px`;
    bar.style.top = `${top}px`;
    bar.style.borderColor = color;
  }
} // mouseenterFunc

function resizeFunc() {
  const active = document.querySelector(".menu-item.active");

  if (active) {
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;

    bar.style.left = `${left}px`;
    bar.style.top = `${top}px`;
  }
}

window.addEventListener("resize", resizeFunc);
