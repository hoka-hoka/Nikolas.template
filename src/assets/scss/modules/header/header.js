window.onscroll = () => { myFunction() };
var header = document.querySelector('.header');
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("toffee");
  } else {
    header.classList.remove("toffee");
  }
}
