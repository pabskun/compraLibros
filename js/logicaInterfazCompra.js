document.querySelector('#btnAgregarAlCarrito').addEventListener('click', agregarLibroAlCarrito);
var selectLibros = document.querySelector('#sltLibros');
llenarClientes();
llenarLibros();

function llenarClientes(){
  //Se llama a la función obtenerClientes que se encuentra dentro de la logicaClientes
  var listaClientes = obtenerClientes();
  var selectClientes = document.querySelector('#sltClientes');

  selectClientes.innerHTML = '';

  //Se crea una opción
  var opcion = document.createElement('option');
  opcion.value = '';
  opcion.text = '--Seleccione un cliente--';

  //Agrega la opción al selectClientes
  selectClientes.appendChild(opcion);

  for (var i = 0; i < listaClientes.length; i++) {
    var sNombre1 = listaClientes[i][2];
    var sNombre2 = listaClientes[i][3];
    var sApellido1 = listaClientes[i][4];
    var sApellido2 = listaClientes[i][5];

    var sNombreCompleto = sNombre1 + ' ' + sNombre2 + ' ' + sApellido1 + ' ' + sApellido2;

    //Se crea una opción
    var opcion = document.createElement('option');
    opcion.value = listaClientes[i][1];//agrega al value la identificación, para que cuando le den click sea obtenido
    opcion.text = sNombreCompleto;

    //Agrega la opción al selectClientes
    selectClientes.appendChild(opcion);
  }
}

function llenarLibros(){
  //Se llama a la función obtenerClientes que se encuentra dentro de la logicaClientes
  var listaLibros = obtenerLibros();
  var selectLibros = document.querySelector('#sltLibros');

  selectLibros.innerHTML = '';

  //Se crea una opción
  var opcion = document.createElement('option');
  opcion.value = '';
  opcion.text = '--Seleccione un libro--';

  //Agrega la opción al selectClientes
  selectLibros.appendChild(opcion);

  for (var i = 0; i < listaLibros.length; i++) {


    //Se crea una opción
    var opcion = document.createElement('option');
    opcion.value = listaLibros[i][0];//agrega al value la identificación, para que cuando le den click sea obtenido
    opcion.text = listaLibros[i][1];

    //Agrega la opción al selectClientes
    selectLibros.appendChild(opcion);
  }
}

function agregarLibroAlCarrito(){
  var sIsbnLibroSeleccionado = selectLibros.value;
  var libroSeleccionado = obtenerLibroPorIsbn(sIsbnLibroSeleccionado);
  var sNombreLibroSeleccionado = libroSeleccionado[1];

  document.querySelector('#txtLibrosEnCarrito').value += sIsbnLibroSeleccionado + ' ' + sNombreLibroSeleccionado;

}
