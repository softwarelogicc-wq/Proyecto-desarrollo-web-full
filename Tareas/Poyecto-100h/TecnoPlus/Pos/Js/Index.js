// ==================LISTADO DE ARTICULOS======================

const articulos = [
    {
        id: `cerveza`,
        nombre: `Cerveza Light 330ml`,
        Precio:  6000,
        Image: `https://lh3.googleusercontent.com/d/1-x1Am5xhfjenIjfxCZ_A9ip236MUCQM7`
    },

    {
        id: `coca-cola`,
        nombre: `Gaseosa Coca-Cola 400ml`,
        precio: 4000,
        Image: `https://mercacentro.vtexassets.com/arquivos/ids/164538/gaseosa-coca-cola-400-ml-1.jpg?v=638936504623630000`

    },

    {
        id: `michelada`,
        nombre: `Gaseosa tamarindo michelada 400ml`,
        precio:  8000,
        Image: `https://exitocol.vtexassets.com/arquivos/ids/35048811/Bebida-Gaseosa-POSTOBON-1500-ml-3555185_a.jpg?v=639239498433400000`

    },

    {
        id: `whisky`,
        nombre: `whisky red label 750ml`,
        precio:  150000,
        Image: `https://carulla.vtexassets.com/arquivos/ids/24611642/Whisky-JOHNNIE-WALKER-Mezclado-Escoces-Red-Label-200-ml-3709869_a.jpg?v=639082514289300000`
    }
]

// =================CARITO DE COMPRAS==========================

let carrito =[]

// ===============

document.getElementById('productos').addEventListener('click', (e) => {
    const card = e.target.closest('.producto-card');
    if (!card) return;

    const id = card.dataset.id;
    const existente = carrito.find(p => p.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: id,
            nombre: card.dataset.nombre,
            precio: Number(card.dataset.precio),
            cantidad: 1
        });
    }

    dibujarCarrito();
});

const dibujarCarrito = () => {
    const contenedor = document.getElementById('carrito');
    contenedor.innerHTML = '';

    carrito.forEach(p => {
        contenedor.innerHTML += `
            <div class="d-flex justify-content-between align-items-center p-2 border-bottom text-white">
                <div>
                    <div class="fw-bold">${p.nombre}</div>
                    <small>${p.cantidad} x $${p.precio.toLocaleString('es-CO')}</small>
                </div>
                <div class="fw-bold">$${(p.cantidad * p.precio).toLocaleString('es-CO')}</div>
            </div>`;
    });
};