const showPic = document.getElementById('show-pic')
const picZone = document.querySelector('.image-preview');
const viewImage = document.querySelector('.image-preview-pic');
const previewMessage = document.querySelector('.preview-message')

const read = new FileReader()

 function showImage (ev) {
    const file = ev.target.files[0]
    console.log(file)

    if(file) {

        previewMessage.style.display = 'none';
        viewImage.style.display = 'block'

        read.addEventListener('load', (ev) => {
            viewImage.setAttribute('src', ev.target.result); 
        })

        read.readAsDataURL(file)
    } else {
        previewMessage.style.display = null;
        viewImage.style.display = null
    }
}

showPic.addEventListener('change', showImage)



document.body.ondragover = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()  
    const dt = ev.dataTransfer
    const files = dt.files
    ev.dataTransfer.setData(files)
} 

document.body.ondrop = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
} 
picZone.ondrop = (ev) => {

    ev.dataTransfer.getData(files)
}

//picZone.addEventListener('drop', showImage)