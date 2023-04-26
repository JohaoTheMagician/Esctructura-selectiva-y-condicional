let cantidad, descuento, monto, totalpagar 


//leer o asignar informacion
cantidad = parseInt(prompt('Ingrese cantidad'))

//Proceso
monto = cantidad * 2000000

if (cantidad<10) {
alert('No tiene descuento')
} else if(cantidad > 10 && cantidad < 20) {
    descuento = monto * 0.10
} else if (cantidad >= 20 && cantidad < 30) {
    descuento = monto * 0.20
} else if (cantidad >= 30 ) {
    descuento = monto * 0.40
}

totalpagar = monto - descuento;
alert('El total a pagar es'+ totalpagar )