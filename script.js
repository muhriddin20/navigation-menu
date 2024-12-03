const nav = document.querySelector("nav");

let scroll1 = window.scrollY;

window.addEventListener("scroll", windowScroll);

function windowScroll() {
  let scroll2 = window.scrollY;

  if (scroll1 > scroll2) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-100px";
  }

  scroll1 = scroll2;
}
