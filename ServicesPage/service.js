function showSidebar(){
  const nav = document.querySelector('nav')
  nav.style.display= 'flex'
}

function hideSidebar(){
  const nav = document.querySelector('nav')
  nav.style.display= 'none'
}

var navIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(navIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("nav_list");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}