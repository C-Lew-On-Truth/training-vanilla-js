let drag = document.getElementById('drag');
let drop = document.querySelector('.drop-zone')
let dragging = false;
console.log(dragging)
drag.style.display = 'block'

drag.ondragstart = event => {
    event.dataTransfer.setData('text/plain', event.target.id)
}

drag.ondrag = event => {
    let target = event.currentTarget
    console.log('draggging now')
    dragging = true
    if(dragging === true) {
        target.style.color = 'blue';
        target.style.display = 'none'
    } 
    console.log(dragging)
}

document.ondragend = event => {
    dragging = false
    let target = event.currentTarget
    if(dragging === false) {
        drag.style.display = 'block'
    }
    console.log('stopped dragging')
    console.log(dragging)
}


drop.ondragover = event => {
    event.preventDefault()
    console.log('dragged over')
}

drop.ondrop = event => {   
        const id = event.dataTransfer.getData('text');
        const dragItem = document.getElementById(id);
        const dropZone = event.target;
        dropZone.appendChild(dragItem);
        event.dataTransfer.clearData()
        dragItem.style.display = 'block'
        dragItem.style.display = 'red'
        console.log('dropped')
}