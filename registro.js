const REGISTROS = [];

function almacenarRegistros() {
  const form = document.getElementById('form1');
  const formElements = form.elements;
  const item = {};
  for (let index = 0; index < formElements.length; index++) {
    const element = formElements.item(index);
    if (element.type === 'submit') {
      continue;
    }
    item[element.id] = element.value;
  }
  REGISTROS.push(item);
  form.reset();
}

function ordenarRegistros(params) {
  return params.sort((a, b) => a.textNombre.localeCompare(b.textNombre));
}

module.exports.almacenarRegistros = almacenarRegistros;
module.exports.ordenarRegistros = ordenarRegistros;