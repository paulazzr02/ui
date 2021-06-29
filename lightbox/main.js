document.addEventListener("click", lightbox);

function lightbox(event) {
  var el = event.target;
  var elId = el.getAttribute("id");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightbox = document.getElementById("lightbox-overlay");
  var newImg = new Image();

  if (el.hasAttribute("data-lightbox")) {
    event.preventDefault();

    newImg.onload = function () {
      lightboxImg.src = this.src;
      console.log(this.src);
    };

    newImg.src = el.getAttribute("data-lightbox");
    lightbox.classList.add("visible");
  }

  if (elId === "lightbox-overlay" || elId == "lightbox-img") {
    lightbox.classList.remove("visible");
  }
}
