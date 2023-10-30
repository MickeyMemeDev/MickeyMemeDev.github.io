window.addEventListener('load', function() {
  let hamburgers = document.getElementsByClassName("hamburger");
  for (let i = 0; i < hamburgers.length; i++) {
      hamburgers[i].addEventListener('click', function(event) {
          let lists = document.getElementsByClassName("mobile_ul");
          for (let j = 0; j < lists.length; j++) {
              if (lists[j].classList.contains('visible')) {
                  lists[j].classList.remove('visible');
                  lists[j].classList.add('invisible');
              } else {
                  lists[j].classList.remove('invisible');
                  lists[j].classList.add('visible');
              }
          }
      });
  }
});

function changeNav() {
  var x = document.getElementById("NavLinksRoot");
  if (x.className === "nav-links-root") {
    x.className += " nav-links-main";
  } else {
    x.className = "nav-links-root";
  }
}
