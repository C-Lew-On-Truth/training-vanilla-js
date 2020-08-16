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

let autoStart = setInterval(pictureLoop, 1000);
let slideStart = document.getElementById('startSlide')
let slideStop = document.getElementById('stopSlide')
let slidesMoving = true;

realPic.onclick = function() {
        console.log('pic stop')
        clearInterval(autoStart)
}

slideStart.onclick = function() {
    setInterval(pictureLoop, 1000)
    console.log('start')
};

slideStop.onclick = function() {
        if(autoStart || pictureLoop)  {
            clearInterval(autoStart)
            console.log('button stop')  
        }
} 

const showHolder = document.querySelector('.showHolder')
showHolder.onclick = event => {
    let target = event.currentTarget
    if(target === 'showHolder') {
        console.log('hello')
    }
}
