console.log('this is seen')

let navSlide = document.getElementById('slideShow')
let navDnD  = document.getElementById('drag-and-drop')

navSlide.onclick = () => {
    window.location.href = '../practice/slideshow.html'
}

navDnD.onclick = () => {
    window.location.href = '../practice/drag-drop.html'
}