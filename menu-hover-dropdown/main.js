var header = document.querySelector(".page-header"),
  mainMenuItems = document.querySelectorAll(".navbar-nav > li"),
  subMenuItems = document.querySelectorAll(".navbar-nav .sub-nav"),
  headerHeight = header.offsetHeight,
  subMenuHeight = 0;

// 헤더 높이에 따라 헤더 그라디언트 배경 주기
header.style.backgroundImage =
  "linear-gradient(" +
  "white " +
  headerHeight +
  "px, rgba(255, 255, 255, 0.5) " +
  headerHeight +
  "px, rgba(255, 255, 255, 0.5))";

// 노출되는 메뉴 높이 구하기
for (var i = 0; i < mainMenuItems.length; i++) {
  mainMenuItems[i].addEventListener("mouseover", function () {
    if (this.getElementsByTagName("ul").length > 0) {
      subMenuHeight = this.querySelector("ul").offsetHeight;
      header.style.height = headerHeight + subMenuHeight + "px";
    }
  });
  mainMenuItems[i].addEventListener("mouseout", function () {
    header.style.height = headerHeight + "px";
  });
}

// 전체 메뉴 노출
// 전체 메뉴 높이 구하기
// for (var i = 0; i < subMenuItems.length; i++) {
//   if (subMenuItems[i].offsetHeight > subMenuHeight) {
//     subMenuHeight = subMenuItems[i].offsetHeight;
//   }
// }
// 헤더 높이값 주기
// for (var i = 0; i < mainMenuItems.length; i++) {
//   nav.addEventListener("mouseover", function () {
//     //header.style.height = "270px";
//     header.style.height = headerHeight + subMenuHeight + "px";
//   });
//   nav.addEventListener("mouseout", function () {
//     header.style.height = headerHeight + "px";
//   });
// }
