const realPic = document.getElementById("realPic1");
let slidesMoving = true

let i = 0;
let picArray = [
    "../pictures/Bullshittin.jpg",
    "../pictures/IMG_2756.JPG",
    "../pictures/Me-Bro-Momma.jpg",
    "../pictures/Princeton_and_Me.jpg",
    "../pictures/Rooftop-Click_Harlem_3.jpg"
];

realPic.src = picArray[0];

let pictureLoop = function () {
    if (slidesMoving === true) {
        
        if (i < picArray.length) {
            realPic.src = picArray[i]
            i++
        } else {
            i = 0
        }
    } 
    console.log(picArray[i])
}

let autoStart = setInterval(pictureLoop, 2000);
let showHolder = document.querySelector('#showHolder');

showHolder.onclick = event => {

    let target = event.target

    console.log(target)

    if (target.classList.contains('start')) {
        console.log('start!')
        slidesMoving = true

    } else if (target.classList.contains('stop')) {
        console.log('stop')
        slidesMoving = false
    }
 
    function checkPic() {
        if() {
            console.log('fucking a')
        }
    }
    checkPic()
}

