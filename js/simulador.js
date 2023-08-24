alert("Bienvenido a la tienda de los Geeks, elige el juego de tu preferencia, te deseo lo mejor c:");

class Videojuego {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const nombreUsuario = prompt("Ingrese su nombre pofavor:");
  const saldoUsuario = parseFloat(prompt("Ingrese su saldo disponible c:"));
  
  let carrito = [];
  let totalCompra = 0;
  
  const agregarAlCarrito = (videojuego) => {
    carrito.push(videojuego);
    totalCompra += videojuego.precio;
  };
  
  const eliminarDelCarrito = (videojuego) => {
    const index = carrito.findIndex((item) => item.nombre === videojuego.nombre);
    if (index !== -1) {
      totalCompra -= carrito[index].precio;
      carrito.splice(index, 1);
    }
  };
  
  const mostrarCarrito = () => {
    let mensaje = `Carrito de ${nombreUsuario}:\n`;
    for (let i = 0; i < carrito.length; i++) {
      mensaje += `${carrito[i].nombre} - Precio: ${carrito[i].precio}\n`;
    }
    mensaje += `Total de la compra: ${totalCompra}`;
  
    alert(mensaje);
  };
  
  
  const videojuego1 = new Videojuego("Assassin creed Odyssey", 50);
  const videojuego2 = new Videojuego("The Legend of Zelda: Breath of the Wild", 60);
  const videojuego3 = new Videojuego("Halo Reach", 55);
  
  // Permitir al usuario elegir videojuegos
  let opcion = prompt(
    "Ingrese el número del videojuego que desea agregar al carrito:\n1. assassins creed Odyssey\n2. The Legend of Zelda: Breath of the Wild\n3. Halo Reach\n0. Finalizar compra"
  );
  
  while (opcion !== "0") {
    switch (opcion) {
      case "1":
        agregarAlCarrito(videojuego1);
        break;
      case "2":
        agregarAlCarrito(videojuego2);
        break;
      case "3":
        agregarAlCarrito(videojuego3);
        break;
      default:
        console.log("Opción inválida");
        break;
    }
  
    opcion = prompt(
        "Ingrese el número del videojuego que desea agregar al carrito:\n1. assassins creed Odyssey\n2. The Legend of Zelda: Breath of the Wild\n3. Halo Reach\n0. Finalizar compra"
        );
  }
  
  mostrarCarrito();
  
  opcion = prompt(
    "Ingrese el número del videojuego que desea eliminar del carrito (o 0 para finalizar):"
  );
  
  while (opcion !== "0") {
    switch (opcion) {
      case "1":
        eliminarDelCarrito(videojuego1);
        break;
      case "2":
        eliminarDelCarrito(videojuego2);
        break;
      case "3":
        eliminarDelCarrito(videojuego3);
        break;
      default:
        console.log("Opción inválida");
        break;
    }
  
    opcion = prompt(
      "Ingrese el número del videojuego que desea eliminar del carrito (o 0 para finalizar):"
    );
  }
  
  mostrarCarrito();
  
if (totalCompra > saldoUsuario) {
    alert(`Lo siento, ${nombreUsuario}, no tienes suficiente saldo para realizar la compra.`);
  } else {
    const saldoRestante = saldoUsuario - totalCompra;
    alert(`¡Compra realizada con éxito, ${nombreUsuario}!`);
    alert("Has comprado los siguientes videojuegos:");
    mostrarCarrito();
    alert(`Saldo restante: ${saldoRestante}`);
  }
  