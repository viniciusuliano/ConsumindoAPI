// https://sujeitoprogramador.com/rn-api/?api=posts
let listElement = document.querySelector('ul#app')

let posts = []

function nutriApp(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) =>{
        posts = json
        posts.map((item)=>{
         let liElement = document.createElement('li')
         let title = document.createElement('strong')
         let capa = document.createElement('img')
         let subtitulo = document.createElement('p')

        let titleText = document.createTextNode(item.titulo)
        title.appendChild(titleText)
        capa.src = (item.capa)
        liElement.appendChild(capa)
        liElement.appendChild(title)
        let subText = document.createTextNode(item.subtitulo)
        subtitulo.appendChild(subText)
        liElement.appendChild(subtitulo)
        listElement.appendChild(liElement)

        })
    })
    .catch('DEU ERRO')
    
}


nutriApp()