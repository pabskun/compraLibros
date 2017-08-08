//Se llama a la funcion que muestra la tabla de clientes
llenarTablaClientes();



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
