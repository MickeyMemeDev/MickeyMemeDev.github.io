function changeNav() {
  var x = document.getElementById("NavLinksRoot");
  if (x.className === "nav-links-root") {
    x.className += " nav-links-main";
  } else {
    x.className = "nav-links-root";
  }
}
