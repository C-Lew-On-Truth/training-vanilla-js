
let button = document.querySelector('button')

let billy = {name: "Billy"};
let nameMap = {}

nameMap[billy] = 'Billy is a buster'


button.onclick = () => {
      console.log(nameMap)
}
