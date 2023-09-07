// ---------------Navbar--------------------
let navbar = document.getElementById("navbar");
let navlinks = document.querySelectorAll("a");
const toglebtn = () => {
  navbar.classList.toggle("hidden");
  navbar.classList.add("transition-all");
  navbar.classList.add("duration-1000");
};

// ---------------Navbar---------------------
// -------------------DropDown-Button--------
let DropDown = document.getElementById("Drop-Down");
const dp = () => {
  DropDown.classList.toggle("hidden");
};
// -------------------DropDown-Button--------
// -------------------Men Products Filter--------
var mbutton = document.querySelectorAll(".btn1");
var mcards = document.querySelectorAll(".mcard");
const filtermen = (e) => {
  mcards.forEach((card) => {
    card.classList.add("hidden");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "mall"
    ) {
      card.classList.remove("hidden");
    }
  });
};
mbutton.forEach((button) => {
  button.addEventListener("click", filtermen);
});
// -------------------Women Products Filter--------
var wbutton = document.querySelectorAll(".btn2");
var wcards = document.querySelectorAll(".wcard");
const womenfilter = (e) => {
  wcards.forEach((card) => {
    card.classList.add("hidden");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "wall"
    ) {
      card.classList.remove("hidden");
    }
  });
};
wbutton.forEach((button) => {
  button.addEventListener("click", womenfilter);
});
// ---------------Gallery--------------
var image = document.querySelectorAll(".gimg");
var box = document.getElementById("lightbox");
var boximg = document.getElementById("Image");
var boxbtn = document.getElementById("close");
for (let imge of image) {
  imge.addEventListener("click", () => {
    box.classList.remove("hidden");
    boximg.src = imge.src;
  });
}
boxbtn.addEventListener("click", function () {
  box.classList.add("hidden");
});
