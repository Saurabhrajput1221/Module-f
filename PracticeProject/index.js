const slidercontainer = document.querySelector(".slider-container");
const leftslide = document.querySelector(".left-slider");
const rightslide = document.querySelector(".right-slider");

const upbtn = document.querySelector(".up-btn");
const downbtn = document.querySelector(".down-btn");

let activeslid = 0;

upbtn.addEventListener("click", () => changeslide("up"));
downbtn.addEventListener("click", () => changeslide("down"));

const changeslide = (direction) => {
  const sliderheight = slidercontainer.clientHeight;
  // console.log(sliderheight)
  if (direction === "up") {
    activeslid++;
    if (activeslid > 3) {
      activeslid = 0;
    }
  } else if (direction === "down") {
    activeslid--;
    if (activeslid < 0) {
      activeslid = 4 - 1;
    }
  }
  rightslide.style.transform = `translateY(-${sliderheight * activeslid}px)`;
  leftslide.style.transform = `translateY(-${sliderheight * activeslid}px)`;
};
