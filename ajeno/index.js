// Utilidades de formato para la tienda de un compañero.
function formatearPrecio(centimos) {
  return (centimos / 100).toFixed(2).replace('.', ',') + ' €';
}

module.exports = { formatearPrecio };
