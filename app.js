// Este programa es una simulacion de un carrito de Compras, es decir, el valor que se ingrese en el prompt, simula el valor en pesos que lleva acumulado el carrito de compras

// Si el valor de las compras es de 30.000 pesos o menos, se muestra un mensaje que invite al usuario a comprar mas, para que el envio sea gratis.

// Si el valor de las compras es mayor a 30.000 y menor a 90.000 pesos, se muestra un mensaje que indique cuanto dinero en compras hace falta para que el envio sea gratis.

// Si el valor de las compras es mayor o igual a 90.000 pesos, el envio es gratis.

// Si en la ventana prompt se oprime "cancelar" o "aceptar" sin introducir un valor, se muestra el mensaje "El carrito esta vacio"

// Nota: Los valores se ingresan sin puntos, ni comas. ejemplo= 30000 

let totalCompra = prompt('Valor total de la compra');

const valorDeCompra = () =>{
    if(totalCompra <= 30000){
        alert('Sigue comprando y el envio sera gratis');
    }else if( 30000 < totalCompra && totalCompra < 90000){
        alert(`Te faltan ${90000-totalCompra}$ en compras para que el envio sea gratis`);
    }else if(totalCompra >= 90000){
        alert('Perfecto!!! el envio es gratis');
    };
};


(totalCompra != null && totalCompra != 0)
    ? valorDeCompra()
    : alert('El carrito esta vacio');