var btt = document.getElementById("scrollToTop");
var docEl = document.documentElement;
var offset, scrollPos, docHeight;

// 문서 높이 얻어오기
// 브라우저마다 offsetHeight 와 offsetHeight 높이를 계산하는 방식이 다르므로
// Math.max 로 높은쪽을 취함
docHeight = Math.max(docEl.offsetHeight, docEl.scrollHeight);
if (docHeight !== "undefined") {
  offset = docHeight / 4;
}

// 스크롤 이벤트 추가
window.addEventListener("scroll", function () {
  scrollPos = docEl.scrollTop;

  if (scrollPos > offset) {
    btt.classList.add("visible");
  } else {
    btt.classList.remove("visible");
  }
});

// 클릭 이벤트 추가
btt.addEventListener("click", function (e) {
  e.preventDefault();
  scrollToTop();
});

function scrollToTop() {
  var scrollInterval = setInterval(function () {
    if (scrollPos != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
