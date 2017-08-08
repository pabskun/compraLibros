
function obtenerLibros(){
  var listaLibros = JSON.parse(localStorage.getItem('listaClientesLS'));

  if(listaLibros == null){
    //isbn, titulo, editorial, año, costo
    listaLibros =
    [
      ['ABC1234','Harry Potter y la Piedra Filosofal','Salamandra','1997',12000],
      ['ABC1235','Harry Potter y la Cámara de los Secretos', 'Salamandra','1998',12000],
      ['ABC1236','Harry Potter y el Prisionero de Azkaban','Salamandra','1999',12000]
    ]
  }
  return listaLibros;
}

function obtenerLibroPorIsbn(pIsbn){
  var mListaLibros = obtenerLibros();
  var libroEncontrado ='';

  for (var i = 0; i < mListaLibros.length; i++) {
    if(pIsbn == mListaLibros[i][0]){
      libroEncontrado = mListaLibros[i];
    }
  }
  return libroEncontrado;
}
