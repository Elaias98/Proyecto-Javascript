// SECCION DE CLASES
class Producto{
    constructor(id,nombre,precio,cantidad,total){
        this.id = id 
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.total = total
    }
}

class ProductoSeleccionado{
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
}


// SECCION DE VARIABLES Y CONSTANTES GLOBALES

//este es mi carrito
let carrito = [];

//estos son mis productos en stock
let productos = [];


// SECCION DE FUNCIONES
function crearProductos(){
    const p1 = new Producto(1,"Shampoo",600)
    const p2 = new Producto(2,"Jabon",350)
    const p3 = new Producto(3,"Lavandina",700)
    const p4 = new Producto(4,"Dentrifico",300)
    const p5 = new Producto(5,"Papel Higienico",800)

    productos = [p1,p2,p3,p4,p5]
}

function mostrarDetalleProducto(){
    let mensaje = ""
    productos.forEach( (producto) =>{
        mensaje = mensaje + "\nID: "+producto.id+"\nProducto: "+producto.nombre+"\nPrecio:$"+producto.precio+"\n----------------------"
    })
    alert(mensaje)
}

function mostrarDetalleCarrito(){
    let mensaje = ""
    carrito.forEach( (productoSelecciodo) =>{
        mensaje = mensaje + "\nID: "+productoSelecciodo.producto.id+"\nProducto: "+productoSelecciodo.producto.nombre+"\nPrecio:$"+productoSelecciodo.producto.precio+"\n----------------------"
    })
    alert(mensaje)
}

function cargarCarrito(){
    let continua = true;

    //while(continua){
    while(continua === true){
        //1 - pedir al usuario el id del producto
        let id = prompt("Ingrese el ID del Producto: ")
        let producto = productos.find(p => p.id == id)

        //2 - preguntarle la cantidad que desea
        let cantidad = prompt("Ingrese cantidad: ")

        //3 - guardar en el carrillo el produto elegido y la cantidad
        let productoSeleccionado = new ProductoSeleccionado(producto, cantidad)
        carrito.push(productoSeleccionado);
        let respuesta = prompt("¿desea continua cargando productos al carrito? (SI/NO)")

        if(respuesta === "NO") continua = false;
        //continua = respuesta === "NO"
    }

    //4 - mostrar detalle de los productos elegidos.
    mostrarDetalleCarrito();
}

function iniciar() {
    crearProductos()
    mostrarDetalleProducto()
    cargarCarrito()
}

iniciar();
