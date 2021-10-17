let arreglo = [];

function almacenarRegistros() {
  let objeto =
  {
    'nombre': document.getElementById('campoNombre').value,
    'contrasena': document.getElementById('campoContrasena').value,
    'correo': document.getElementById('campoCorreo').value,
    'confirmacioncorreo': document.getElementById('campoConfirmacionCorreo').value,
    'telefono': document.getElementById('campoTelefono').value
  };
  console.log(objeto);
  arreglo.push(objeto);
}

function ordenarRegistros(params) {
  return params.sort(function (a, b) {
    if (a.nombre < b.nombre) { return -1; }
    if (a.nombre > b.nombre) { return 1; }
    return 0;
  })
}

module.exports.almacenarRegistros = almacenarRegistros;
module.exports.ordenarRegistros = ordenarRegistros;
module.exports.arreglo = arreglo;