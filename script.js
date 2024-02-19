// write your JavaScript here
function myFunction() {
  var element = document.getElementById("menu");
  element.classList.toggle("open");
}

function openNav() {
  let x = document.getElementById("myNav");
  if(x.style.height === "100%") {
    x.style.height = "0%"
  } else {
    x.style.height = "100%"
  }
}

function navResize() {
  if (screen.width > 1300) {
    let x = document.getElementById("myNav");
    x.style.height = "15vh"
  }
}