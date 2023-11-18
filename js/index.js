const formDom = document.getElementById('form')



var usuariosDB = [
    { nombre: 'Mali', password: '123', saldo: 200 },
    { nombre: 'gera', password: '456', saldo: 290 },
    { nombre: 'maui', password: '789', saldo: 67 }
  ];
  // Redirigir a otra página///
  function redirigirAInicio() {
    window.location.href = 'inicio.html';
  }


function mostrarError(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('escondido')
    error.classList.add('error')
    document.getElementById('GatoFeliz').classList.add('escondido')
    document.getElementById('GatoEnojado').classList.remove('escondido')
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
        document.getElementById('GatoFeliz').classList.remove('escondido')
        document.getElementById('GatoEnojado').classList.add('escondido')
    }, 5000)
}



function comparar(usuario, password) {
    if (usuario === '' && password === '') {
      mostrarError('Vacio');
      console.log('Ingresa tus datos');
    } else {

      //Para encontrar el usuario en el arreglo
      const usuarioEncontrado = usuariosDB.find(u => u.nombre.toLowerCase() === usuario.toLowerCase());
  
      if (usuarioEncontrado && usuarioEncontrado.password === password) {
        console.log('Bienvenido!');
        // Almacenar información en local
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
        // Redirigir a otra página///
        redirigirAInicio();
      } else if (usuario != usuario){
        mostrarError('Usuario')
      } else if(password != password){
        mostrarError('Password');
      } else {
        mostrarError('Userin');
        console.log('El usuario o contraseña son incorrectos');
      } 
    }
  }



formDom.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('me diste click!');

    let usuarioDOM = document.getElementById('usuario').value
    console.log(usuarioDOM)

    let passwordDOM = document.getElementById('password').value
    console.log(passwordDOM)

    comparar(usuarioDOM, passwordDOM)


});

