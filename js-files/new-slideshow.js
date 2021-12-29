const s = document.querySelectorAll(".slide")

let sp = 1;

setTimeout(() => {
    s[0].classList.remove("first")
},3000)

const slideShow = () => {
    if(sp !== s.length) {
        s[sp].classList.add("slideIn")
        s[sp].classList.remove("slideOut")
        console.log("1")
    }

    if( sp > 0) {
        s[sp - 1].classList.add("slideOut")
        s[sp - 1].classList.remove("slideIn")
        console.log("2")
    }
    sp++
    if (s.length + 1 === sp) {
        sp = 0
        s[0].classList.remove("slideOut")
        s[0].classList.add("slideIn")
         console.log("3")
    }
}

setInterval(slideShow, 3000)

let flashBoarder = document.querySelector(".slide-show")

setInterval(function() {flashBoarder.style.color = "green"}, 300)
setInterval(function() {flashBoarder.style.color = "blue"}, 600)
