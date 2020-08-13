function myFunction(x) {
  if (x.matches) {
    // If media query matches
    var el = document.querySelector(".leaflet-control-layers");
    el.classList.remove("leaflet-control-layers-expanded");
  } else {
    var el = document.querySelector(".leaflet-control-layers");
    el.classList.add("leaflet-control-layers-expanded");
  }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// Get the modal
var modal = document.getElementById("myModal");

function createModal() {
  /*
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  //var img = document.getElementById(myImg);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  //img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  //};
  */
  console.log(this);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
