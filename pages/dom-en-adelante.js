
//CLASES
class Producto{
    constructor(id,nombre,precio,imagen){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
        this.productos = []
    }
}

class Carrito{
    constructor(){
        this.carrito = []
        this.cantidad = this.cantidad
    }
}
//FUNCIONES

function crearProductos(){
const p1 = new Producto(1,"Gancia",100,"../img/GANICA.jpg") 
const p2 = new Producto(2,"Fernet",300,"../img/D_NQ_NP_881234-MLA52993744544_122022-O.webp") 
const p3 = new Producto(3,"Campari",500,"../img/aperitivo_campari1-0e0d3863b056e8e0f616547008775055-640-0.jpg") 
const p4 = new Producto(4,"Fernet Menta",1200,"../img/image_1024.jpg") 
const p5 = new Producto(5,"Sernova",800,"../img/Vodka-Sernova-Wild-Berries-700-Ml-_1.webp") 
const p6 = new Producto(6,"SKYY Vodka",2000,"./img/sky.webp") 
const p7 = new Producto(7,"Ron Rico",900,"../img/Ron-Rico-Plata-Botella.png") 
const p8 = new Producto(8,"Blue Label",3000,"../img/blue-ok1-3981bf93239f4efbe616455423206961-640-0.png") 
const p9 = new Producto(9,"Gondon's",500,"../img/gin-miniatura.jpg",) 
const p10 = new Producto(10,"Jack Daniels",5000,"../img/jack daniels.webp") 
const p11 = new Producto(11,"Old Parr",3000,"../img/whiskt old parr.webp") 
const p12 = new Producto(12,"Smirnoff",2500,"../img/thumb_52844_default_big.jpeg") 

productos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]
}

const carritoCompras = new Carrito()

crearProductos()

const mostrarProductos = document.querySelector(".cuerpo");


productos.forEach((producto) => {
    let div = document.createElement("div");
    
    div.innerHTML = `
    
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top imagenes"  alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btn-primary boton-agregar${productos.id}">Añadir al carrito</a>
            </div>
        </div>
        
    `;
    mostrarProductos.appendChild(div);
})


//AGREGAR AL CARRO

// const botonAgregar = document.querySelector(".boton-agregar")
// console.log(botonAgregar.innerHTML)
//     botonAgregar.forEach(boton => {
//     boton.addEventListener("click", () => {
//         console.log("Hola");
//     });
//     });


// botonAgregar.addEventListener("click",()=>{
//     console.log("Hola")
// })


// const botonAgregar = document.querySelector(".boton-agregar")
// console.log(botonAgregar.innerHTML)

const botonAgregar = document.querySelector(`.boton-agregar${productos.id}`);
console.log(botonAgregar.innerHTML);
// Agrega el eventListener a cada botón
botonAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const productoSeleccionado = productos.find((producto)=> productos.id === producto.id)
            carritoCompras.push(productoSeleccionado)
            console.log(carritoCompras)
        }
    );
});

//Le pude añadir el evento para que por consola me muestre un "hola" intente con productos para que me muestre
//el producto ELEGIDO. Una vez hecho eso mandarlo al carrito de compras que tengo en el header pero me quede estancado en esta parte

//veo las clases del profe pero en donde me mareo es en los metodos y en los nombres












