const titulo = document.getElementById(`titulo`)
    titulo.textContent = `hola soy el nuevo contenido`
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'blue'
    })

console.log(titulo) 