console.log('this is seen')

let navSlide = document.getElementById('slideShow')
let navDnD  = document.getElementById('drag-and-drop')
let ajax = document.getElementById('ajax');

navSlide.onclick = () => {
    window.location.href = 'practice/slideshow.html'
}

navDnD.onclick = () => {
    window.location.href = 'practice/drag-drop.html'
}

ajax.onclick = () => {
    window.location.href = 'practice/demo-ajax.html'
}