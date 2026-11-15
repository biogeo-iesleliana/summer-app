# APP SUMMER

Aplicación web libre para aprender **vocabulario básico de una asignatura con pictogramas**, pensada para alumnado con movilidad muy reducida (sin motricidad fina) que trabaja con apoyo de una educadora.

- El profesorado escribe las palabras y la app propone pictogramas de **ARASAAC** para elegir, o se usa una foto propia (desde el dispositivo o desde una dirección web), optimizada automáticamente (≤ ~90 KB).
- La alumna responde **tocando la pantalla** (tablet) o con **un pulsador y barrido** (portátil; el pulsador envía Espacio o Intro).
- Palabras organizadas en **bloques temáticos** (una palabra puede estar en varios); las sesiones pueden limitarse a un bloque.
- 7 actividades: causa-efecto, presentación, «¿Dónde está…?», escucha y elige, lee y elige, «¿Cómo se llama?» y repaso mezclado; con 2–4 opciones, ayudas de menos a más (repetir → la correcta parpadea → solo queda la correcta) y refuerzo.
- Barra para la educadora: repetir, marcar «respuesta con mi ayuda», saltar, terminar.
- Registro de respuestas (sola / con ayuda / error / sin respuesta) por asignatura, exportable a CSV.
- Varias **asignaturas** en el mismo dispositivo (cada una con sus palabras y bloques temáticos); se cambia de una a otra con un desplegable.
- Cada asignatura (palabras, pictogramas y fotos) se guarda en la carpeta `unidades/` del repositorio con el botón **☁️ Guardar en GitHub** (requiere una clave de GitHub limitada a este repositorio) y se cargan desde cualquier dispositivo.
- **Los datos de la alumna se guardan solo en el dispositivo.**

## Estado
Prototipo 0.7: un único archivo `index.html`, sin instalación. Necesita internet para buscar pictogramas.

Próxima versión: instalable como app (PWA), funcionamiento sin conexión, más niveles de actividad y versión en valenciano.

## Probarla
Abrir la versión publicada en GitHub Pages o abrir `index.html` en Chrome. En el ordenador, la barra espaciadora hace de pulsador.

## Licencias
- Código: **GPL-3.0**.
- Pictogramas: autor Sergio Palao. Procedencia: [ARASAAC](https://arasaac.org). Licencia CC BY-NC-SA, propiedad del Gobierno de Aragón.
