
const Bombay = 9700;
const Fernet = 3000;
const Smirnoff = 4500;
let sumartotal = 0;
let sumaBombay = 0;
let sumaFernet = 0;
let sumaSmirnoff = 0;
let medioDePago = 0;
let cuotas = 0;
let precio = 0;
let compra = 0;
let total = 0;


// Cantidad de productos agregados al carrito, suma de los mismos y seleccionar medio de pago 
function mostrarResultado() {
  alert(`Compraste:
  ${sumaBombay} Bombay
  ${sumaFernet} Fernet
  ${sumaSmirnoff} Smirnoff
  Total de su compra : $ ${sumartotal}`);

  while (sumartotal != 0) {
    medioDePago = prompt(`
      Seleccione medio de pago:
      1 Transferencia 
      2 Efectivo
      3 *Sin interes* 3 Cuotas
      4 *40% interes 6 Cuotas*
      5 12 Cuotas`);
    if (
      medioDePago == 1 ||
      medioDePago == 2 ||
      medioDePago == 3 ||
      medioDePago == 4
    ) {
      switch (medioDePago) {       
        case "1":
          if (sumartotal >= 50000) {
            sumartotal = (sumartotal * 0.10).toFixed(2);
            alert(`Con Efectivo obtenes un 10% DESC, debe abonar : $ ${sumartotal} ARS
            Gracias por su Compra!`);
          } else {
            alert(`Debe abonar : $ ${sumartotal} ARS.
            Gracias por su compra`);
          }
          break;
          case "2":
          if (sumartotal >= 50000) {
            sumartotal = (sumartotal * 0.10).toFixed(2);
            alert(`Con Transferencia obtenes un 10% DESC, debe abonar : $ ${sumartotal} ARS
            Gracias por su Compra!`);
          } else {
            alert(`Debe abonar : $ ${sumartotal} ARS.
            Gracias por su compra!`);
          }
        case "3":
          sumartotal = (sumartotal / 3).toFixed(2);
          alert(`Debe Abonar 3 cuotas de : $ ${sumartotal} ARS.
            Gracias por su compra!`);
          break;
        case "4":
          total = (sumartotal * 1.40).toFixed(2);
          cuotas = (total / 3).toFixed(2);
          alert(`Debe Abonar 6 cuotas de : $ ${cuotas} ARS.
             El total de la compra es : $ ${total} ARS.
            Gracias por confiar en nosotros!`);
          break;
      }
      break;
    } else {
      alert("12 Cuotas se encuentra temporalmente deshabilitada ");
      continue;
    }
  }
}

// Agregar al carrito productos deseados
while (true) {
  compra = prompt(`Seleccionar bebidas:
1 Bombay 
2 Fernet 
3 Smirnoff 
4 Gin Vulcan
Buy Para finalizar compra`);

  if (compra == "buy" || compra == "BUY") {
    alert(`Total de : $ ${sumartotal} ARS`);
    break;
  } else if (compra == 1) {
    precio = 9700;
    sumartotal += precio;
    sumaBombay += 1;
  } else if (compra == 2) {
    precio = 3000;
    sumartotal += precio;
    sumaFernet += 1;
  } else if (compra == 3) {
    precio = 4500;
    sumartotal += precio;
    sumaSmirnoff += 1;
  } else {
    alert("Fuera de stock, Lo lamentamos!");
    continue;
  }
  alert(`Lleva un total de : $ ${sumartotal} ARS.`);
}

mostrarResultado();
