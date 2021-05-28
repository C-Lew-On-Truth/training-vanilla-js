let navSlide = document.getElementById('slideShow')
let navDnD  = document.getElementById('drag-and-drop')
let ajax = document.getElementById('ajax');
let imageUploader = document.getElementById('image-uploader')
let practice = document.getElementById("practice")
let test = document.getElementById("test")

navSlide.onclick = () => {
    window.location.href = 'practice/slideshow.html'
}

navDnD.onclick = () => {
    window.location.href = 'practice/drag-drop.html'
}

ajax.onclick = () => {
    window.location.href = 'practice/demo-ajax.html'
}

imageUploader.onclick = () => {
    window.location.href = 'practice/image-uploader.html'
}

practice.onclick = () => {
    window.location.href = 'practice/mdn-demo.html'
    console.log('goo')
}

test.onclick = () => {
    window.location.href = 'practice/testing.html'
}