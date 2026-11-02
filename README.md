# Laboratorio · Empieza aquí

El sitio donde vas a hacer todas las prácticas de la ruta [Empieza aquí](https://codigosinsiesta.com/rutas/empieza-aqui)
de Código Sin Siesta.

Es una caja aislada de tu ordenador con [OpenCode](https://opencode.ai) dentro y un proyecto pequeño, una lista de
la compra, en el que el agente puede leer, cambiar y ejecutar cosas. Si algo se rompe, se tira y se vuelve a
empezar. **Haz aquí todas las prácticas, nunca en tu ordenador ni con código de tu empresa.**

## Abrirlo

**En el navegador, sin instalar nada (recomendado):**
1. Pulsa **Use this template → Open in a codespace**. Necesitas una cuenta de GitHub; la gratuita incluye horas de
   Codespaces cada mes.
2. Espera a que termine de prepararse: verás «Laboratorio listo».
3. En la terminal, escribe `opencode`.

**En tu ordenador:** con [Docker Desktop](https://www.docker.com/products/docker-desktop/), VS Code y la extensión
Dev Containers, clona el repositorio y elige **Reopen in Container**.

No hace falta cuenta en OpenCode ni tarjeta: el laboratorio usa sus modelos gratuitos. Elige uno con `/models`.

## Qué te protege

- El agente trabaja dentro de la caja con un usuario sin privilegios: no puede hacerse administrador (`sudo` está
  bloqueado), ni ver tus ficheros, ni tus claves, ni el resto de tu ordenador.
- OpenCode está configurado (`opencode.json`) para **preguntarte** antes de ejecutar un comando, editar un fichero,
  salir de la carpeta del proyecto o descargar algo de internet. Lee lo que te pide antes de aceptar.
- Dentro no hay secretos: los modelos gratuitos no necesitan clave.

Lo que **no** cubre: lo que cambie dentro de esta carpeta (para eso está git) y lo que envíes al modelo. Algunos
modelos gratuitos pueden usar lo que les mandas para mejorarse. Por eso, aquí solo va el proyecto de prácticas.

## Volver a empezar

Cada guía tiene su rama (`guia-02`, `guia-03`…). Para dejar una guía como al principio:

```bash
git checkout guia-03
git reset --hard origin/guia-03
```

Y si se estropea la caja entera: borra el codespace y crea otro (o **Rebuild Container** en local).

## El proyecto

`src/compra.js` es una lista de la compra (los precios van en céntimos) y `tests/` sus pruebas. Para comprobar que
todo va bien:

```bash
npm test
```
