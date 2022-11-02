//console.log(window.innerWidth);
let story = document.querySelector(".story");
let storyTime = document.querySelector(".story-time");
storyTime.innerHTML = 
`
My name is Clayton Lewis and I'm a Tech Professional based
out of Queens, New York.
I've always considered myself to be an active indvidual 
with many interest that are truly eclectic.
I was born in Upland, California, but have been blessed
and fortunate to visit and reside in many locations
within North America. I'm throughly "down to earth" and 
because of all these living experiences,  
I have groomed myself to become a well rounded specimen.
My work ethic is relentless, but I love to have a good time!
In 2015, I packed my bags and hopped on a train to 
New York City to seek a position in the media industry! 
Fast forward 6 years later,
I now have established myself as a true media 
professional in transition to starting a career
in Software Development and Informational Technology! 
I thank you for taking the 
time to read my entry and hope you enjoy my work because
this web page has been conducted from scratch by 
yours truly ;)
`;

let extra = document.querySelector(".extra");
let gitHub = document.querySelector(".github");
let resume = document.querySelector(".resume");
let home = document.querySelector(".home");

extra.onclick = (ev) => {
  let target = ev.target.className;
  switch (target) {
    case "github":
      //console.log("github");
      break;
    case "resume":
      //console.log("show resume");
      
      break;
    case "home":
      window.location.href = "index.html";
      break;
  }
};
