var tabNavLinks = document.querySelectorAll(".nav-tabs .nav-link");
var tabPanes = document.querySelectorAll(".tab-content > .tab-pane");

for (var i = 0; i < tabNavLinks.length; i++) {
  tabNavLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    var orgTarget = event.target.getAttribute("href");
    var tabTarget = orgTarget.replace("#", "");

    for (var j = 0; j < tabPanes.length; j++) {
      tabPanes[j].style.display = "none";
    }

    document.getElementById(tabTarget).style.display = "block";

    for (var k = 0; k < tabNavLinks.length; k++) {
      tabNavLinks[k].classList.remove("active");
      event.target.classList.add("active");
    }
  });
}
document.getElementById("tabs-1").style.display = "block";
