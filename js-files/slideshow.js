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

let showHolder = document.querySelector('#showHolder')
showHolder.onclick = event => {
    let target = event.target
    console.log(target)

    if(target.classList.contains('start')) {
        console.log('start!')
        setInterval(pictureLoop, 1000);
    } if(target.classList.contains('stop')) {
        console.log('stop')
        clearInterval(autoStart)
    }
}

