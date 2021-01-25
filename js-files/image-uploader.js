const showPic = document.getElementById("show-pic");
const picZone = document.querySelector(".image-preview");
const viewImage = document.querySelector(".image-preview-pic");
const dropMessage = document.querySelector(".drop-message");

//const read = new FileReader();

function showImage(ev) {
  const file = ev.target.files[0];
  console.log(file);

  if (file) {
    dropMessage.style.display = "none";
    viewImage.style.display = "block";
    viewImage.src = URL.createObjectURL(file);
  } else {
    dropMessage.style.display = null;
    viewImage.style.display = null;
  }
}

showPic.addEventListener("change", showImage);

document.body.ondragover = function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
};

document.body.ondrop = function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
};
picZone.ondrop = function (ev) {
  const file = ev.dataTransfer.files[0];
  console.log(file);
  dropMessage.style.display = "none";
  viewImage.style.display = "block";
  viewImage.src = URL.createObjectURL(file);
};

// Original showImage function code
/*
  if (file) {
    message.style.display = "none";
    viewImage.style.display = "block";

    read.addEventListener("load", (ev) => {
      viewImage.setAttribute("src", ev.target.result);
    });

    read.readAsDataURL(file);
  } else {
    message.style.display = null;
    viewImage.style.display = null;
  }
  */
