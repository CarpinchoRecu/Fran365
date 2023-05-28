// Mostrar productos del array stock
const mostrarProducto = stock
  .map(
    (producto) => `<label class="labelProductos">${producto.producto}</label>`
  )
  .join("");
// Muestra un label
const productosForm = document.getElementById("productosForm");
productosForm.innerHTML = mostrarProducto;

const mostrarSistema = stock
  .map(
    (stockSistema) =>
      `<input type="number" class="inputSistema" value="${stockSistema.stockSistema}">`
  )
  .join("");
const sistemaForm = document.getElementById("sistemaForm");
sistemaForm.innerHTML = mostrarSistema;

const mostrarDeposito = stock
  .map(
    (stockDeposito) =>
      `<input type="number" class="inputDeposito" value="${stockDeposito.stockDeposito}">`
  )
  .join("");
const depositoForm = document.getElementById("depositoForm");
depositoForm.innerHTML = mostrarDeposito;

function calcularStock() {
  const sistemas = document.querySelectorAll('.inputSistema');
  const depositos = document.querySelectorAll('.inputDeposito');
  const heladeras = document.querySelectorAll('.heladera');
  const diferencias = document.querySelectorAll('.diferencia');

  for (let i = 0; i < sistemas.length; i++) {
    const sistema = parseInt(sistemas[i].value);
    const deposito = parseInt(depositos[i].value);
    const heladera = parseInt(heladeras[i].value);

    const suma = deposito + heladera;

    if (suma === sistema) {
      diferencias[i].innerHTML = '0';
    } else if (suma < sistema) {
      let diferencia = sistema - suma;
      diferencias[i].innerHTML = '-' + diferencia.toString();
    } else {
      let exceso = suma - sistema;
      diferencias[i].innerHTML = '+' + exceso.toString();
    }
  }
}
