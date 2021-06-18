document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".page-header");
  const headerClone = header.innerHTML;
  const headerCloneContainer = document.createElement("div");
  let threshold = header.offsetTop + header.offsetHeight;

  headerCloneContainer.className += " page-header page-header-clone";
  headerCloneContainer.innerHTML = headerClone;
  document.body.appendChild(headerCloneContainer);

  headerCloneContainer.style.top =
    "-" + headerCloneContainer.offsetHeight + "px";

  window.addEventListener("scroll", function () {
    if (this.pageYOffset > threshold) {
      headerCloneContainer.classList.add("visible");
      headerCloneContainer.style.top = "0";
    } else {
      headerCloneContainer.classList.remove("visible");
      headerCloneContainer.style.top =
        "-" + headerCloneContainer.offsetHeight + "px";
    }
  });

  let hamburger = {
    navCollapses: document.querySelectorAll(".navbar-collapse"),
    navTogglers: document.querySelectorAll(".navbar-toggler"),

    init() {
      [].map.call(this.navTogglers, (toggler) => {
        toggler.addEventListener("click", () => {
          this.toggleActiveClass();
        });
      });
    },

    toggleActiveClass() {
      [].map.call(this.navTogglers, (toggler) => {
        toggler.classList.toggle("active");
        toggler.classList.toggle("not-active");
      });
      [].map.call(this.navCollapses, (collapse) => {
        collapse.classList.toggle("active");
      });
    },
  };

  hamburger.init();
}); //dom loaded

/*
$(function () {
  var $window = $(window),
    $navbar = $(".page-header .navbar"),
    $navbarClone = $navbar.contents().clone(),
    $navbarCloneContainer = $(`<div class="navbar navbar-expanded-lg navbar-clone"></div>`),
    $threshold = $navbar.offset().top + $navbar.outerHeight();

  $navbarCloneContainer.append($navbarClone);
  $navbarCloneContainer.appendTo("body");

  // 윈도우에 스크롤이 생기면 할일
  $window.scroll(function () {
    if ($(this).scrollTop() > $threshold) {
      $navbarCloneContainer.addClass("visible");
    } else {
      $navbarCloneContainer.removeClass("visible");
    }
  });
});
*/
