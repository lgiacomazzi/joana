// Abre Menu
function myFunctionOpen() {
  var menu = document.getElementById("myMenu");
  if (menu) {
    document.getElementById("myMenu").style.transform = "translateX(0)";
    document.getElementById("myMenuOpen").style.display = "none";
    document.getElementById("myMenuClose").style.display = "inherit";
    // BlurSections();
  }
}

function whiteSpace() {
  var whitespace = document.getElementById("whitespace");
  if (whitespace) {
    // whitespace.style.transform = "translateX(0)";
  }
}

function invertColors() {
  var body = document.getElementsByTagName("main");
  var button = document.getElementById("invertor");
  var icons = document.getElementsByClassName("icons");
  var img = document.getElementsByClassName("hover_scale_div");
  var logo = document.getElementsByClassName("logo_invert_special");
  button.setAttribute("onClick", "invertColorsOut()");
  for (var i = 0; i < body.length; i++) {
    body[i].style.webkitFilter = "invert(1)";
    body[i].style.backgroundColor = "white";
  }
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.webkitFilter = "invert(1)";
  };
  for (var i = 0; i < img.length; i++) {
    img[i].style.webkitFilter = "invert(1)";
  };
  for (var i = 0; i < logo.length; i++) {
    logo[i].style.webkitFilter = "invert(1)";
  };
}

function invertColorsOut() {
  var body = document.getElementsByTagName("main");
  var icons = document.getElementsByClassName("icons");
  var img = document.getElementsByClassName("hover_scale_div");
  var button = document.getElementById("invertor");
  var logo = document.getElementsByClassName("logo_invert_special");
  button.setAttribute("onClick", "invertColors()");
  for (var i = 0; i < body.length; i++) {
    body[i].style.webkitFilter = "invert(0)";
    body[i].style.backgroundColor = "black";
  }
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.webkitFilter = "invert(0)";
  }
  for (var i = 0; i < img.length; i++) {
    img[i].style.webkitFilter = "invert(0)";
  }
  for (var i = 0; i < logo.length; i++) {
    logo[i].style.webkitFilter = "invert(0)";
  }
}

function myFunctionClose() {
  document.getElementById("myMenu").style.transform = "translateX(-100vw)";
  document.getElementById("myMenuOpen").style.display = "inherit";
  document.getElementById("myMenuClose").style.display = "none";
  // BlurSections()
}

var myVar;

function SelectPage() {
  myVar = setTimeout(myFunctionClose(), 500);
}

var start = setInterval(GetBackground, 3000);

function GetBackground() {
  var images = document.getElementsByClassName("icons");
  var index = Math.floor(Math.random() * images.length);
  var home = document.getElementById("Home");
  if (home) {
    home.style.backgroundImage = "url('" + images[index].src + "')";
  }
}

function over() {
  var doctitle = event.target.title;
  var docimage = event.target.src;
  document.getElementById("nome_da_obra_container").style.visibility =
    "inherit";
  document.getElementById("nome_da_obra_container").style.backgroundImage =
    "url('" + docimage + "')";
  document.getElementById("nome_da_obra").innerHTML = doctitle;
}

function out() {
  document.getElementById("nome_da_obra_container").style.visibility = "hidden";
}

function LogoHover() {
  document.getElementById("HomeBackground").style.backgroundImage =
    "url('img/8.jpg')";
  document.getElementById("HomeBackground").style.webkitFilter = "invert(1)";
}

function LogoHoverOut() {
  document.getElementById("HomeBackground").style.backgroundImage =
    "url('img/home-min.jpg')";
  document.getElementById("HomeBackground").style.webkitFilter = "unset";
}
