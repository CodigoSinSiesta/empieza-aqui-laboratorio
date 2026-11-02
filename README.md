# Laboratorio · Empieza aquí

El sitio donde vas a hacer todas las prácticas de la ruta [Empieza aquí](https://codigosinsiesta.com/rutas/empieza-aqui)
de Código Sin Siesta.

Es una caja aislada de tu ordenador con [OpenCode](https://opencode.ai) dentro y un proyecto pequeño, una lista de
la compra, en el que el agente puede leer, cambiar y ejecutar cosas. Si algo se rompe, se tira y se vuelve a
empezar. **Haz aquí todas las prácticas, nunca en tu ordenador ni con código de tu empresa.**

## Abrirlo

Hay dos formas. Las dos dan la misma caja; cambia dónde corre y qué modelo usa el agente.

### En tu ordenador (recomendado si puedes instalar Docker)

1. Instala [Docker Desktop](https://www.docker.com/products/docker-desktop/) (o Rancher Desktop), [VS Code](https://code.visualstudio.com/)
   y la extensión **Dev Containers**.
2. Clona este repositorio, ábrelo en VS Code y elige **Reopen in Container**.
3. Cuando veas «Laboratorio listo», escribe `opencode` en la terminal.

**Modelo:** los gratuitos de OpenCode. No hace falta cuenta, ni clave, ni tarjeta. Elige uno con `/models`; los
gratuitos acaban en `-free`.

### En el navegador, con GitHub Codespaces (si no puedes instalar nada)

1. Consigue una clave gratuita en [build.nvidia.com](https://build.nvidia.com/settings/api-keys). Necesitas una
   cuenta de NVIDIA y verificar tu teléfono.
2. Pulsa **Use this template → Open in a codespace**. GitHub te pedirá el secreto `NVIDIA_API_KEY`: pega ahí tu
   clave. Así entra en la caja como variable de entorno y nunca se guarda en el repositorio.
3. Cuando veas «Laboratorio listo», escribe `opencode` y elige con `/models` el modelo
   `nvidia/poolside/laguna-xs-2.1`.

**Por qué aquí no sirven los modelos gratuitos de OpenCode:** desde Codespaces llegan con el límite gratuito ya
agotado.

**La alternativa, si tienes GitHub Copilot:** en OpenCode escribe `/connect`, elige GitHub Copilot y sigue los pasos.

## Qué te protege

- **El agente no sale de la caja.** Trabaja con un usuario sin privilegios: no puede hacerse administrador (`sudo`
  está bloqueado), ni ver tus ficheros, ni el resto de tu ordenador.
- **OpenCode te pregunta antes de actuar.** Está configurado (`opencode.json`) para pedirte permiso antes de
  ejecutar un comando, editar un fichero, salir de la carpeta del proyecto o descargar algo de internet. Lee lo que
  te pide antes de aceptar.

**Lo que no cubre:**
- **Lo que cambie dentro de esta carpeta.** Para eso está git.
- **Lo que envíes al modelo.** Algunos proveedores gratuitos pueden usarlo para mejorar sus modelos.
- **Lo que hay dentro de la caja,** que el agente sí puede leer. En Codespaces eso incluye tu clave de NVIDIA o tu
  sesión de Copilot, y el token de GitHub del codespace. Por eso aquí solo va el proyecto de prácticas, y al
  terminar conviene borrar el codespace.

## Volver a empezar

Cada guía tiene su rama (`guia-02`, `guia-03`…). Para dejar una guía como al principio:

```bash
git checkout guia-03
git reset --hard origin/guia-03
```

Si se estropea la caja entera, borra el codespace y crea otro. En local, usa **Rebuild Container**.

## El proyecto

`src/compra.js` es una lista de la compra (los precios van en céntimos) y `tests/` sus pruebas. Para comprobar que
todo va bien:

```bash
npm test
```
