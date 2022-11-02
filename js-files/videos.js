import { info } from "./video-info.js";

//Video info
let vName = document.querySelector(".v-name");
let vInfo = document.querySelector(".v-info");
let vStory = document.querySelector(".v-story");
let vExit = document.querySelector(".v-exit");

//home button info
let backHome = document.querySelector(".back-home");
backHome.onclick = () => {window.location.href = "./index.html"};

//Carousel identifiers
let carousel = document.querySelector(".carousel");
let carouselHolder = document.querySelector(".carousel-holder");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

vInfo.style.display = "none";
vExit.style.display = "none";

vExit.onclick = () => {
  vInfo.style.display = "none";
  vExit.style.display = "none";
};

let videos = [
  'SWEET PLANS OF REVENGE <p class="info">Info</p>',
  'SUNDAY <p class="info">Info</p>',
  'BUFFALO SPORTS <p class="info">Info</p>',
  'AN UNDERGROUND CLASSIC <p class="info">Info</p>',
];

let media = [
  "media/spor_original.mp4 ",
  "media/sunday_skate_video.mp4",
  "media/wivb_pkg.mp4",
  "media/another_damn_cooking_video.mp4",
];

vName.innerHTML = videos[1];
vStory.innerHTML = info[1];
carousel.src = media[1];
let position = 1;

carouselHolder.onclick = (e) => {
  let vTarget = e.target.className;
  if (vTarget === "info" || vTarget === 'v-story' || vTarget === 'v-info') {
    vInfo.style.display = "block";
    vExit.style.display = "block";
    backHome.style.display = "none";
    carousel.pause();
  } else if(vInfo.style.display === "none" || vExit.style.display === "none") {
    backHome.style.display = "block"
  }
  //console.log(vTarget);
};

right.onclick = () => {
  if (
    position >= media.length - 1 &&
    position >= videos.length - 1 &&
    position >= info.length - 1
  ) {
    position = 0;
    vStory.innerHTML = info[position];
    vName.innerHTML = videos[position];
    carousel.src = media[position];
    return;
  }
  vStory.innerHTML = info[position + 1];
  vName.innerHTML = videos[position + 1];
  carousel.src = media[position + 1];
  position++;
  carousel.pause();
};

left.onclick = () => {
  if (position < 1) {
    position = media.length - 1 && videos.length - 1 && info.length - 1;
    vStory.innerHTML = info[position];
    vName.innerHTML = videos[position];
    carousel.src = media[position];
    return;
  }
  vStory.innerHTML = info[position - 1];
  vName.innerHTML = videos[position - 1];
  carousel.src = media[position - 1];
  position--;
  carousel.pause();
};

//console.log('height is ' + window.innerHeight);
//console.log('width is ' + window.innerWidth);
