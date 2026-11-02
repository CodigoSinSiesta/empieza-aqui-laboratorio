import { test } from 'node:test';
import assert from 'node:assert/strict';
import { crearLista, anadir, total } from '../src/compra.js';

test('una lista nueva está vacía y no cuesta nada', () => {
  assert.equal(total(crearLista()), 0);
});

test('el total, en céntimos, multiplica precio por cantidad', () => {
  let lista = crearLista();
  lista = anadir(lista, 'pan', 120, 2);
  lista = anadir(lista, 'leche', 95);
  assert.equal(total(lista), 335);
});
