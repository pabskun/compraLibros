document.querySelector('#btnAgregarAlCarrito').addEventListener('click', agregarLibroAlCarrito);
document.querySelector('#btnComprar').addEventListener('click', realizarCompra);
var selectLibros = document.querySelector('#sltLibros');
var aListaLibrosAComprar = [];
llenarClientes();
llenarLibros();
llenarTablaCompras();

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

  document.querySelector('#txtLibrosEnCarrito').value += sIsbnLibroSeleccionado + ' ' + sNombreLibroSeleccionado +'\n'; // '\n' deja un salto de linea
  aListaLibrosAComprar.push(libroSeleccionado);

}
function realizarCompra(){
  var selectClientes = document.querySelector('#sltClientes');
  var idCliente = selectClientes.value;

  procesarCompra(idCliente,aListaLibrosAComprar);
  llenarTablaCompras();
}
function llenarTablaCompras(){
  var listaCompras = obtenerListaCompras();
  var tbody = document.querySelector('#tblCompras tbody');
  tbody.innerHTML = '';

  for(var i = 0; i < listaCompras.length;i++){
    var fila = tbody.insertRow(i);
    var celdaCliente = fila.insertCell();
    var celdaLibros = fila.insertCell();
    var celdaFecha = fila.insertCell();

    var listaLibrosComprados = listaCompras[i][1];
    celdaCliente.innerHTML = listaCompras[i][0];

    for (var j = 0; j < listaLibrosComprados.length; j++) {
      celdaLibros.innerHTML += listaLibrosComprados[j][1] + ',';
    }

    celdaFecha.innerHTML = listaCompras[i][2];
  }
}
