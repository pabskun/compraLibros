//Se llama a la funcion que muestra la tabla de clientes
llenarTablaClientes();
document.querySelector('#btnRegistrarCliente').addEventListener('click', obtenerDatosRegistro);
function obtenerDatosRegistro(){
  var aInfoCliente = [];
  var nTipoCliente = document.querySelector('#txtTipoCliente').value;
  var sIdentificacion = document.querySelector('#txtIdentificacion').value;
  var sNombre1 = document.querySelector('#txtNombre1').value;
  var sNombre2 = document.querySelector('#txtNombre2').value;
  var sApellido1 = document.querySelector('#txtApellido1').value;
  var sApellido2 = document.querySelector('#txtApellido2').value;
  var nCantDinero = document.querySelector('#txtCantDinero').value;
  var sCorreo = document.querySelector('#txtCorreo').value;
  var sContrasenna = document.querySelector('#txtContrasenna').value;

  aInfoCliente.push(nTipoCliente, sIdentificacion,sNombre1,sNombre2,sApellido1,sApellido2,nCantDinero,sCorreo,sContrasenna);

  registrarCliente(aInfoCliente);
  llenarTablaClientes();

}

function llenarTablaClientes(){
  var listaClientes = obtenerClientes();//llama a la función de la lógica de negocios obtenerClientes que retorna la matriz de clientes
  var cuerpoTabla = document.querySelector('#tblClientes tbody');

  cuerpoTabla.innerHTML = ''; //Limpia el tbody de la tabla

  for (var i = 0; i < listaClientes.length; i++) {
    //Se toman los datos del nombre de la matriz de clientes
    var sNombre1 = listaClientes[i][2];
    var sNombre2 = listaClientes[i][3];
    var sApellido1 = listaClientes[i][4];
    var sApellido2 = listaClientes[i][5];

    var sNombreCompleto = sNombre1 + ' ' + sNombre2 + ' ' + sApellido1 + ' ' + sApellido2;

    // se crea una fila dentro del cuerpo de la tabla en la posición i
    var fila = cuerpoTabla.insertRow(i);

    //Se crean las columnas de la tabla

    var celdaTipoCliente = fila.insertCell();
    var celdaIdentificacion = fila.insertCell();
    var celdaNombre = fila.insertCell();
    var celdaCantDinero = fila.insertCell();
    var celdaCorreo = fila.insertCell();

    //Llenar la información de las celdas con los datos de la matriz
    celdaTipoCliente.innerHTML = listaClientes[i][0];
    celdaIdentificacion.innerHTML = listaClientes[i][1];
    celdaNombre.innerHTML = sNombreCompleto;
    celdaCantDinero.innerHTML = '₡ ' + listaClientes[i][6];
    celdaCorreo.innerHTML = listaClientes[i][7];
  }
}
