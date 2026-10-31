// const usuario = {
//     nombre: 'Leonardo',
//     edad: 40,

// }

// console.log(usuario.edad)
//     usuario.nombre = 'Juan'
// console.log(usuario.nombre)

const body = document.querySelector('body')

const usuario = [
    {nombre: 'Leonardo', edad: 40},
    {nombre: 'Juan', edad: 30},
    {nombre: 'Pedro', edad: 20},
    {nombre: 'Maria', edad: 10},
    {nombre: 'Ana', edad: 5},
    {nombre: 'Luis', edad: 15}
]

usuario.forEach((usuario) => {
    console.log(usuario.nombre)
    body.innerHTML += `<h1>${usuario.nombre}</h1>`
})      