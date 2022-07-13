var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsed-content = this.nextElementSibling;
    if (collapsed-content.style.display === "block") {
      collapsed-content.style.display = "none";
    } else {
      collapsed-content.style.display = "block";
    }
  });
}