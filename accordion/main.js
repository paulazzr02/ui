var btnCollapse = document.getElementById("btnCollapse");
var panels = document.getElementsByClassName("panel");
var panelHeadings = document.getElementsByClassName("panel-heading");
var panelBodies = document.getElementsByClassName("panel-body");

for (var i = 0; i < panelHeadings.length; i++) {
  panelHeadings[i].addEventListener("click", function (event) {
    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.remove("active");
      event.target.parentNode.classList.add("active");
      activateBody();
    }
  });
}
function activateBody() {
  for (var i = 0; i < panelBodies.length; i++) {
    panelBodies[i].style.display = "none";
  }
  document.querySelector(".panel.active .panel-body").style.display = "block";
}
activateBody();

btnCollapse.addEventListener("click", function () {
  for (var i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active");
  }
  for (var j = 0; j < panelBodies.length; j++) {
    panelBodies[j].style.display = "none";
  }
});
