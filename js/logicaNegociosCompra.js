function obtenerListaCompras(){
  var listaCompras = JSON.parse(localStorage.getItem('listaComprasLS'));
  if(listaCompras == null){
    listaCompras=[];
  }
  return listaCompras;
}

function procesarCompra(pidCliente, plistaLibros){
  var aListaCompras = obtenerListaCompras();
  var aCompraActual =[];
  var dFechaActual = new Date();
  var dFechaConFormato = dFechaActual.getFullYear()+'-'+ dFechaActual.getMonth() + '-'+ dFechaActual.getDate();

  aCompraActual.push(pidCliente,plistaLibros,dFechaConFormato);
  aListaCompras.push(aCompraActual);
  localStorage.setItem('listaComprasLS', JSON.stringify(aListaCompras) )
}
