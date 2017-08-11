//tipoCliente > 1: normal, 2: plata, 3: oro
function obtenerClientes(){
  var listaClientes = JSON.parse(localStorage.getItem('listaClientesLS'));

  if(listaClientes == null){
    listaClientes =
    [
      [1,'110130289','Tatiana','','Estrada','Ruíz',25000,'testradar@ucenfotec.ac.cr','1tatiana9'],
      [2,'114880481','Joseph', '','Pérez','Lizano',32000,'jperezl@ucenfotec.ac.cr','1joseph9'],
      [1,'117010431','Nicole','','Retana', 'Álvarez', 21000,'nretanaa@ucenfotec.ac.cr','1nicole9']
    ]
  }
  return listaClientes;
}
function registrarCliente(paInfoCliente){
  var listaClientes = obtenerClientes();
  listaClientes.push(paInfoCliente);
  localStorage.setItem('listaClientesLS', JSON.stringify(listaClientes));
}
