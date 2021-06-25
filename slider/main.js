var sliderContainer = document.getElementsByClassName("slide-container");
var sliderList = document.getElementsByClassName("slide-list");
var slideItems = document.getElementsByClassName("slide-item");
var slideCount = slideItems.length;
var currentIndex = 0;
var topHeight = 0;
var navPrev = document.getElementById("slidePrev");
var navNext = document.getElementById("slideNext");

// 슬라이드 높이 확인해서 부모 높이로 주기
function calculateTallestSlide() {
  for (var i = 0; i < slideCount; i++) {
    if (slideItems[i].offsetHeight > topHeight)
      topHeight = slideItems[i].offsetHeight;
    sliderContainer[0].style.height = topHeight + "px";
    sliderList[0].style.height = topHeight + "px";
  }
}
calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기
for (var i = 0; i < slideCount; i++) {
  slideItems[i].style.left = i * 100 + "%";
}

// 슬라이드 이동 함수
function goToSlide(idx) {
  sliderList[0].style.left = idx * -100 + "%";
  sliderList[0].classList.add("animated");
  currentIndex = idx;

  //updateNav();
}

// 버튼기능 업데이트 함수
function updateNav() {
  if (currentIndex == 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
  if (currentIndex == slideCount.length - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
}

// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(slideCount - 1);
  }
});
navNext.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentIndex < slideCount - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
});

// 첫 번째 슬라이드 먼저 보이게 하기
goToSlide(0);
