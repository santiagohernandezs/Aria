# Generador de Contraseñas

Este proyecto se basa en la creación de una app capaz de generar una contraseña aleatoria y única para el usuario. Además, se le dispone al cliente con cuatro comodas opciones que afectarán a la contraseña que sea generada.

Esto es un proyecto de código abierto, siénte libre de modificarlo a tu gusto.

Puedes acceder al proyecto mediante este link [https://password-generator-application.netlify.app/](https://password-generator-application.netlify.app/) o puedes seguir leyendo para enterarte de como instalar el repositorio y ejecutarlo localmente en tu computadora.

## Opciones de Genereación de Contraseña

El Usario podrá generar una contraseña escogiendo cuatro parametros (Uno obligatorio y tres opcionales) los cuales determinaran el comportamiento de la contraseña generada.

### Opciones

- Incluye Letras Mayúsculas: Añade letras mayúsculas a la contraseña.
- Incluye Letras Minúsculas: Añade letras minúsculas a la contraseña.
- Incluye Números: Añade números a la contraseña.
- Incluye Símbolos: Añande símbolos a la contraseña.

Además el usuario contará conn un apartado donde podrá ver la contraseña generada y podrá copiarla.

## ¿Cómo desplegar la app?
Fácil, puedes clonar este repositorio o simplemente descargarlo, una vez dentro del directorio ejectuta el comando `npm start`

# Scripts Disponibles

Dentro del directorio de este proyecto podrás ejecutar:

### `npm start`

Inica la aplicación en modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se refrescará automáticamente si detecta algún cambio.

### `npm run build`

Crea la applicación en modo de producción en la carpeta `build`.

Esto hace que la aplición sea minificada e incluya mejoras en la optimización.
Puedes Ejeccutar este script si deseas desplegar la app en un servidor local, o alojarlo en un dominio.
