# APP SUMMER

Aplicación web libre para aprender **vocabulario básico de una asignatura con pictogramas**, pensada para alumnado con movilidad muy reducida (sin motricidad fina) que trabaja con apoyo de una educadora.

- El profesorado escribe las palabras y la app propone pictogramas de **ARASAAC** para elegir, o se usa una foto propia (desde el dispositivo o desde una dirección web), optimizada automáticamente (≤ ~90 KB).
- La alumna responde **tocando la pantalla** (tablet), con **un pulsador y barrido** (portátil; el pulsador envía Espacio o Intro) o con el **ratón** (clic o permanencia; sirve también con ratón de cabeza y para probar la app).
- Pestaña **5 · Ayuda** con la guía de uso para el profesorado.
- Palabras organizadas en **bloques temáticos** (una palabra puede estar en varios); las sesiones pueden limitarse a un bloque.
- 7 actividades: causa-efecto, presentación, «¿Dónde está…?», escucha y elige, lee y elige, «¿Cómo se llama?» y repaso mezclado; con 2–4 opciones, ayudas de menos a más (repetir → la correcta parpadea → solo queda la correcta) y refuerzo.
- Barra para la educadora: repetir, «con mi ayuda», «no cuenta» (fallo de acceso), pausa, saltar, terminar.
- Registro por pregunta (sola / con ayuda / no ha podido) y por sesión, por asignatura, exportable a CSV.
- Importación de asignaturas desde **hoja de cálculo** (.xlsx o .csv) con la plantilla de `plantillas/plantilla-asignatura.xlsx`: para docentes sin cuenta de GitHub.
- Varias **asignaturas** en el mismo dispositivo (cada una con sus palabras y bloques temáticos); se cambia de una a otra con un desplegable.
- Cada asignatura (palabras, pictogramas y fotos) se guarda en la carpeta `unidades/` del repositorio con el botón **☁️ Guardar en GitHub** (requiere una clave de GitHub limitada a este repositorio) y se cargan desde cualquier dispositivo.
- **Los datos de la alumna se guardan solo en el dispositivo.**

## Estado
Prototipo 0.10: un único archivo `index.html` más `sw.js` y `manifest.webmanifest` (sin compilación).

Novedades de la 0.10 (fiabilidad antes de usarla con la alumna):
- **Instalable y sin conexión** (PWA): la app y los pictogramas elegidos se guardan en el dispositivo. Internet solo hace falta para buscar pictogramas nuevos y para GitHub.
- **Toque adaptado a dedo y palma**: solo cuenta el primer contacto; se ignoran los arrastres y los toques mientras habla la app; la respuesta puede contar al tocar, al levantar o al mantener. Zona útil de la pantalla y colocación de las opciones configurables. Pantalla completa y siempre encendida.
- **Asistente de ajuste** (2 minutos): mide alcance, duración del toque, toques repetidos o tiempo de reacción con pulsador, y propone los ajustes.
- **Mayúsculas o minúsculas** a elegir.
- **Refuerzo con música** (melodías incluidas o canciones propias), mayor cuando acierta sola; sistema ampliable a otros refuerzos.
- **Registro de una fila por pregunta** con primer intento, ayuda máxima, tiempo de respuesta, posición de la correcta y palabra con la que la confunde; botón **«No cuenta»** para los fallos de acceso; CSV con punto y coma.
- **Sesión con tiempo máximo**, pausa, confirmación para terminar y nota final de la educadora.
- **Copia de seguridad completa** (vocabulario, ajustes y registro) con aviso periódico.
- Textos externos saneados (archivos, hojas, GitHub), sin palabras duplicadas y ajustes validados.

Próximo bloque: selección automática de palabras por sesión («Sesión de hoy»), progresión por palabra, inicio sin error para palabras nuevas, distractores con criterio y modo de comprobación sin ayudas.

## Probarla
Abrir la versión publicada en GitHub Pages o abrir `index.html` en Chrome. En el ordenador, la barra espaciadora hace de pulsador.

## Licencias
- Código: **GPL-3.0**.
- Pictogramas: autor Sergio Palao. Procedencia: [ARASAAC](https://arasaac.org). Licencia CC BY-NC-SA, propiedad del Gobierno de Aragón.
