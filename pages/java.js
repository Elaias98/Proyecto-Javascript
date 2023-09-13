
// ----------------------------------------------------------------------------------------------------------
// class DefinirProducto{
//         constructor(id,producto,precio,cantidad,total){
//             this.id = id 
//             this.producto = producto
//             this.precio = precio
//             this.cantidad = cantidad
//             this.total = total
//         }
//     }
//     //CREANDO EL PRODUCTO
//     const p1 = new DefinirProducto(1,"Shampoo",600)
//     const p2 = new DefinirProducto(2,"Jabon",350)
//     const p3 = new DefinirProducto(3,"Lavandina",700)
//     const p4 = new DefinirProducto(4,"Dentrifico",300)
//     const p5 = new DefinirProducto(5,"Papel Higienico",800)
    
//     const MostrarProducto = [p1,p2,p3,p4,p5]
    
//     //MOSTRANDO EL PRODUCTO
//     let fijarLista = ""
//     MostrarProducto.forEach( (mostrarme) =>{
    
//     fijarLista = fijarLista + "\nID: "+mostrarme.id+"\nProducto: "+mostrarme.producto+"\nPrecio:$"+mostrarme.precio+"\n----------------------"
        
//     })
//     alert(fijarLista)
    
//     //PUSHEAR LOS PRODUCTOS FILTRADOS
//     let cerrar = "no"
//     let respuestas
    
//     const ProductoAdquirido = []

// while (cerrar !== "Si"){
//     function operacion() {
//     let id = prompt("Ingrese el Id o el producto");
//     CARRO = MostrarProducto.find(p => p.id == id || p.producto == id);
//     if (CARRO) {
//         alert("ID: " + CARRO.id + "\nProducto: " + CARRO.producto + "\nPrecio:$" + CARRO.precio);
        
//         let cantidad = prompt("¿Cuantas unidades desea llevar del producto escogido?");
//         let total = CARRO.precio * cantidad;
//         alert(cantidad + " x " + CARRO.producto + " de " + "$" + CARRO.precio + " = $" + total);
        
//         respuestas = prompt("¿Desea agregar mas productos? Y(Si) / N(No)");
//     } else {
//         alert("Producto no encontrado");
//     }
//     }

//     operacion();
//     if (respuestas == "Si" || respuestas == "Y") {
// // No es necesario llamar a operacion() nuevamente aquí

// // Agregamos directamente el producto al carrito
//     ProductoAdquirido.push(CARRO);
// // Mostramos el contenido del carrito
//     console.log("Carrito:", ProductoAdquirido);
//     }
    
//     cerrar = prompt("¿Desea cerrar la compra? Si/No");
// }


//Se me complico mucho hacer este codigo, pedi ayuda a coderask pero en cierta parte estoy medio saturado. Por momentos me pierdo en cosas tontas como en por ejemplo 
//fijarLista = fijarLista + "\nID: "+mostrarme.id+"\nProducto: "+mostrarme.producto+"\nPrecio:$"+mostrarme.precio
//Si bien la domino un poco pero masomenos para que se de una idea. Hay veces que por no agregar una [i] no se visualiza lo que quiero, en eso no se donde esta el error y veo en otros lugares del codigo pero solo era ese pequeño detalle
//Modificando y corrigiendo el resto pero a la vez desarmando lo que estaba bien 
//Lo veo medio pobre la entrega pero bueno que tipo de ejercicios me recomendaria como para mejorar o practicar? 
//Voy a tratar de hacerlo nuevamente hasta que me de. Pero bueno no esta mas ejemplos puntuales para que vaya perfeccionando esos errores ya que lo que busco por internet a la hora de ver las correciones 
//Salen con otro compilador o ya viendo temas un poco mas avanzados

//Les dejo los primeros codigos que hice y que recibieron correcciones


// ----------------------------------------------------------------1ER CODIGO----------------------------------------------------------------
// while(cerrar !="Si"){
//     function operacion(DefinirProducto) {

//     let id = prompt("Ingrese el Id o el producto")
//     const CARRO = MostrarProducto.find(p => (p.id == id || p.producto == id))
//     alert("ID: "+CARRO.id+"\nProducto: "+CARRO.producto+"\nPrecio:$"+CARRO.precio)

//     let cantidad = prompt("¿Cuantas unidades desea llevar del producto escogido?")

//     total = CARRO.precio*cantidad
//     alert(cantidad + " x " + CARRO.producto + " de " + "$" + CARRO.precio + " = $" + total )

//     respuestas = prompt("¿Desea agregar mas productos? Y(Si) / N(No)")
//     }

//     operacion()

//     if(respuestas == "Si" || respuestas == "Y"){
//         operacion()                                                                               //LLEGO UNA PARTE QUE NO PODIA INGRESAR A CARRO POR EL TEMA QUE NO ME RECONOCIA A LA HORA DE REFLEJARLO, TAMPOCO ENTRABA AL BUCLE FOR PARA RECORRER CADA ARRAY
//         alert("INGRESO AL IF")
        
//         for (let i = 0; i < CARRO.length; i++) {
//             alert("ingreso al for")
//             const el = CARRO[i].id;
//             CARRO.push(ProductoAdquirido)
//             alert(ProductoAdquirido)
//         }
//     }
    // else(){

    // }
//}


    // let id = prompt("Ingrese el Id o el producto")
    // const CARRO = MostrarProducto.find(p => (p.id == id || p.producto == id))    
    // alert("ID: "+CARRO.id+"\nProducto: "+CARRO.producto+"\nPrecio:$"+CARRO.precio)

    // let cantidad = prompt("¿Cuantas unidades desea llevar del producto escogido?")

    // total = CARRO.precio*cantidad
    // alert(cantidad + " x " + CARRO.producto + " de " + "$" + CARRO.precio + " = $" + total )

    // respuestas = prompt("¿Desea agregar mas productos? Y(Si) / N(No)")


    // --------------------------------------------------------2DO CODIGO-----------------------------------------------------------------------

// class DefinirProducto{
//     constructor(id,producto,precio,cantidad,total){
//         this.id = id 
//         this.producto = producto
//         this.precio = precio
//         this.cantidad = cantidad
//         this.total = total
//     }
// }
// //CREANDO EL PRODUCTO
// const p1 = new DefinirProducto(1,"Shampoo",600)
// const p2 = new DefinirProducto(2,"Jabon",350)
// const p3 = new DefinirProducto(3,"Lavandina",700)
// const p4 = new DefinirProducto(4,"Dentrifico",300)
// const p5 = new DefinirProducto(5,"Papel Higienico",800)

// const MostrarProducto = [p1,p2,p3,p4,p5]

// //MOSTRANDO EL PRODUCTO
// let fijarLista = ""
// MostrarProducto.forEach( (mostrarme) =>{

//     fijarLista = fijarLista + "\nID: "+mostrarme.id+"\nProducto: "+mostrarme.producto+"\nPrecio:$"+mostrarme.precio+"\n----------------------"
    
// })
// alert(fijarLista)

// //PUSHEAR LOS PRODUCTOS FILTRADOS
// let cerrar = "no"
// let respuestas

// const ProductoAdquirido = []
                                                                                                                //EN ESTA PARTE YA NISIQUIERA PODIA INGRESAR, PEDI AYUDA A CODER ASK CORRIGIENDO UN POCO MI CODIGO
// while (cerrar != "Si") {
//     function operacion(DefinirProducto) {
//         console.log(ProductoAdquirido)

//         let id = prompt("Ingrese el Id o el producto")
//         const CARRO = MostrarProducto.find(p => (p.id == id || p.producto == id))
//         alert("ID: " + CARRO.id + "\nProducto: " + CARRO.producto + "\nPrecio:$" + CARRO.precio)

//         let cantidad = prompt("¿Cuantas unidades desea llevar del producto escogido?")

//         total = CARRO.precio * cantidad
//         alert(cantidad + " x " + CARRO.producto + " de " + "$" + CARRO.precio + " = $" + total)

//         respuestas = prompt("¿Desea agregar mas productos? Y(Si) / N(No)")
//     }
    
//     operacion()
    

//     if (respuestas == "Si" || respuestas == "Y") {
//         operacion()
//         for (let i = 0; i < CARRO.length; i++) {
//             if( id == CARRO[i].id){
//             ProductoAdquirido.push(CARRO[i])
//             alert(ProductoAdquirido)
//         }
//     }
//     }
// }



