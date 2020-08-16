const realPic = document.getElementById("realPic1");

let i = 0;
let picArray = [
    "../pictures/Bullshittin.jpg",
    "../pictures/IMG_2756.JPG",
    "../pictures/Me-Bro-Momma.jpg",
    "../pictures/Princeton_and_Me.jpg",
    "../pictures/Rooftop-Click_Harlem_3.jpg"
];

realPic.src = picArray[0];

function pictureLoop() {
    if (i < picArray.length) {
        realPic.src = picArray[i]
        i++
    } else {
        i = 0
    }   
}

let autoStart = setInterval(pictureLoop, 2000);
let slideStart = document.getElementById('startSlide')
let slideStop = document.getElementById('stopSlide')

realPic.onclick = function() {
    clearInterval(autoStart)
    console.log('picture stop')
}

slideStart.onclick = function() {
    setInterval(pictureLoop, 2000)
    console.log('start')
};

slideStop.onclick = function() {
    clearInterval(pictureLoop)
    console.log('button stop')
}
