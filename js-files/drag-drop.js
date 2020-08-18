let drag = document.getElementById('drag');
let drop = document.querySelector('.drop-zone')
let dragging = true;

drag.ondragstart = event => {
    event.dataTransfer.setData('text', event.target.id)
    console.log('dragging')
    console.log(event.target.id)
}

drag.ondragover = event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    console.log('dragged over')
}

drop.ondrop = event => {
   
        event.preventDefault()
        console.log('dropped')
        let dropData = event.dataTransfer.getData(event.target.id);
        event.target.appendChild(document.getElementById(dropData))

}