//CLASES

class Producto{
    constructor(id,nombre,precio,imagen){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}

class Carrito{
    constructor(cantidad){
        this.cantidad = cantidad
    }
}

let productos = []
let carrito = []

//FUNCIONES

function crearProductos(){
const p1 = new Producto(1,"Gancia",100) 
const p2 = new Producto(2,"Fernet",300) 
const p3 = new Producto(3,"Campari",500) 
const p4 = new Producto(4,"Fernet Menta",1200) 
const p5 = new Producto(5,"Sernovia",800) 
const p6 = new Producto(6,"SKYY Vodka",2000) 
const p7 = new Producto(7,"Ron Rico",900) 
const p8 = new Producto(8,"Blue Label",3000) 
const p9 = new Producto(9,"Gondon's",500) 
const p10 = new Producto(10,"Jack Daniels",5000) 
const p11 = new Producto(11,"Old Parr",3000) 

productos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11]
}

//FUNCIONA
function detallarProductos(){
    
    productos.forEach(objeto => {
        console.log(objeto)
    });
}

crearProductos()
detallarProductos()

let cartas = document.querySelector(".cuerpo .cartas ")
 for (let i = 0; i < cartas.length; i++) {
    cartas.innerHTML =
    `<div class="card" style="width: 18rem;">
                    <img src="${p1.imagen}" class="card-img-top" alt="gancia">
                    <div class="card-body">
                    <h5 class="card-title">${p1.nombre}</h5>
                    <p class="card-text">Precio: ${p1.precio}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
 }













