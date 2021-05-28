console.log("seen");
const dropZone = document.querySelector(".drop-zone");
let testAudio = document.querySelector(".test-audio");
let play = document.querySelector(".play")

play.onclick = () => {
  testAudio.play()
}


document.body.ondragover = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();

};

document.body.ondrop = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
};

dropZone.ondrop = (ev) => {
  ev.preventDefault()
  let target = ev.dataTransfer.files[0]
  let url = URL.createObjectURL(target)
  console.log(url)

  let request = new XMLHttpRequest()
  request.open("GET", url)
  request.responseType = "blob"
  request.onload = () => {
   
    setTimeout(() => {
      dropZone.innerHTML = "MUSIC HAS BEEN UPLOADED"
    }, 1000)
    setTimeout(() => {
      dropZone.innerHTML = ""
    }, 3000)
  }
  request.send()
  testAudio.src = url
};
