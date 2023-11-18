// Obtén la información almacenada
var usuarioActualString = localStorage.getItem('usuarioActual');

// Verifica si hay información almacenada
if (usuarioActualString) {
    // Convierte la cadena JSON a un objeto JavaScript
    var usuarioActual = JSON.parse(usuarioActualString);

    console.log('Nombre del usuario:' + usuarioActual.nombre);
    console.log('Saldo del usuario:' + usuarioActual.saldo);
    
    let saldoactual = usuarioActual.saldo;
    // Actualiza el contenido del elemento con el nombre del usuario
    document.getElementById('bienvenida').textContent = 'Hola Bienvenido ' + usuarioActual.nombre;
    document.getElementById('saldo').textContent = 'saldo: ' + saldoactual;


    function actualizarSaldoEnHTML() {
      document.getElementById('saldo').textContent = 'saldo: ' + saldoactual;
    }

  //funcion de caja


  function mostrarError(tipo, mensaje) {
    let error = document.getElementById(`error${tipo}`);
    let felicidadGato = document.getElementById('GatoFeliz');
    let enojoGato = document.getElementById('GatoEnojado');
  
    error.innerHTML = mensaje;
    error.classList.remove('escondido');
    error.classList.add('error');
    felicidadGato.classList.add('escondido');
    enojoGato.classList.remove('escondido');
  
    setTimeout(() => {
      error.classList.remove('error');
      error.classList.add('escondido');
      felicidadGato.classList.remove('escondido');
      enojoGato.classList.add('escondido');
    }, 5000);
  }


  function Resta(a, b) {
    return a - b;
  }

  function retirar() {
    let monto = document.getElementById('retirar').value;
    let retirarmonto = parseFloat(monto);
    if (retirarmonto > saldoactual) {
      mostrarError('Retiro', 'No puedes retirar más de lo que tienes en tu cuenta');
    } else if (monto === '') {
      mostrarError('Retiro', 'Debe de agregar el monto');
    } else if (saldoactual - retirarmonto >= 10) {
      saldoactual = Resta(saldoactual, retirarmonto);
      document.getElementById('resta').innerHTML = '- $' + retirarmonto;
      setTimeout(() => {
        document.getElementById('resta').innerHTML = '';
      }, 3000);
      actualizarSaldoEnHTML();
    } else {
      mostrarError('Retiro', 'Debes tener al menos $10 en tu cuenta');
    }
  }


  function Suma(a, b) {
  return a + b;
  }

  function abonar() {
    let monto = document.getElementById('depositar').value;
    let agregarmonto = parseFloat(monto);
    if (monto === '') {
      mostrarError('Abono', 'Debe de agregar el monto');
    } else if (agregarmonto > 100) {
      mostrarError('Abono', 'No puedes abonar más de $100, considera cambiar a una cuenta premium');
    } else if ((saldoactual + agregarmonto) > 990) {
      mostrarError('Abono', 'El saldo no puede superar los $990');
    } else {
      saldoactual = Suma(saldoactual, agregarmonto);
      document.getElementById('suma').innerHTML = '+ $' + agregarmonto;
      setTimeout(() => {
        document.getElementById('suma').innerHTML = '';
      }, 3000);
      actualizarSaldoEnHTML();
    }
  }
  
  function saldo(){
    alert('Tu saldo es: $' + saldoactual);
  }


} else {
  console.log('No se encontró información del usuario en localStorage');
}

