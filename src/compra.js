// Lista de la compra: el proyecto de juguete del laboratorio.
// Cada guía de «Empieza aquí» lo hace crecer un poco (una rama por guía).
// Los precios van en céntimos: con euros en coma flotante, 1.2 * 2 + 0.95 da 3.3499999999999996.

export function crearLista() {
  return [];
}

export function anadir(lista, nombre, precio, cantidad = 1) {
  return [...lista, { nombre, precio, cantidad }];
}

export function total(lista) {
  return lista.reduce((suma, p) => suma + p.precio * p.cantidad, 0);
}
