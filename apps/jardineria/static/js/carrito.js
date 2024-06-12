//variable que mantiene el estado vasible del carrito
var carritoVisible = false;

//XD
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    //Agregamos funcionalidades a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito)
    }

    //agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i < botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }

        //agrego funcionalidad al boton restar cantidad
        var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
        for(var i=0; i < botonesRestarCantidad.length;i++){
            var button = botonesRestarCantidad[i];
            button.addEventListener('click', restarCantidad);
        }

    //agregamos la funcionalidad a los botones de agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton_item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //agregar funcionalidad al boton pagar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked);

}



//eliminar el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //elelmto controla si hay elementos en el carrito una vez eliminados
    ocultarCarrito();

}

function actualizarTotalCarrito(){
    //Seleccionamos el contenedor de carrto
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar
    for(var i=0; i < carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
        //quitamos el simbolo peso y el punto de milesimo
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        console.log(precio);
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total;
}

function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity='0';
        carritoVisible = false;

        //maximizo el contenedor de los elementos
        var items = document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%'
    }
}

//aumentamos en un la cantidad de elementos seleccionados
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    //actulizamos el total 
    actualizarTotalCarrito();
}

function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;
    //controlamos que no sea menor que 1
    if(cantidadActual >=1 ){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        //actulizamos el total 
        actualizarTotalCarrito();
    }

}

function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo_item')[0].innerText;
    console.log(titulo);
    var precio = item.getElementsByClassName('precio-items')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img_item')[0].src;
    console.log(imagenSrc);

    // la sgte funcion agrega elementos al carrito 

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    //hacemos visible el carrito caundo agregamos algo por primera vez

    hacerVisibleCarrito();

}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemCarrito = document.getElementsByClassName('carrito-items')[0];

    //se verifica que el item ingresado no se encunetre en el carrito
    var nombresItemsCarrito = itemCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0; i<nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("el item ya se encuentra en el carrito");
            return;
        }
    }
    var itemCarritoContenido = `
    <div class="carrito-item">
        <img src="${imagenSrc}" alt="" width="80px" >
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="carrito-item-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <span class="carrito-item-precio">${precio}</span>
        </div>
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemCarrito.append(item);

    //agregamos la funcionalidad eliminar del nuevo item
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);
    //agregamos la funcionalidad de sumar
    var botonesSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonesSumarCantidad.addEventListener('click', sumarCantidad);
        //agregamos la funcionalidad de restar
        var botonesRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
        botonesRestarCantidad.addEventListener('click', restarCantidad);
}

function pagarClicked(event){
    alert("Gracias por su compra!!");
    //elimino todos los elementos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();

    //funcion de ocultar el carrito

    ocultarCarrito();
}

function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

let btnCarrito = document.getElementById("btnCarrito")

btnCarrito.addEventListener('click',function(){
    productos = [
        {
            sku:1,
            cantidad:10,
            nombre:"Limon"
        },
        {
            sku:2,
            cantidad:60,
            nombre:"Naranja"
        },
        {
            sku:3,
            cantidad:20,
            nombre:"durazno"
        },
    ]
    //localStorage.getItem("")
    let token = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    fetch('/carrito',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'X-CSRFToken' :token
        },
        body: JSON.stringify(productos)
    })
})