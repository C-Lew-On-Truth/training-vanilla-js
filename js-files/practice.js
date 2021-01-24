
let button = document.querySelector('button')

let billy = {name: "Billy"};
let nameMap = {}

nameMap[billy] = 'Billy is a homo'


button.onclick = () => {
      console.log(nameMap)
}