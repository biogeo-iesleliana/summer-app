# APP SUMMER

Aplicación web libre para aprender **vocabulario básico de una asignatura con pictogramas**, pensada para alumnado con movilidad muy reducida (sin motricidad fina) que trabaja con apoyo de una educadora.

- El profesorado escribe las palabras y la app propone pictogramas de **ARASAAC** para elegir, o se usa una foto propia (desde el dispositivo o desde una dirección web), optimizada automáticamente (≤ ~90 KB).
- La alumna responde **tocando la pantalla** (tablet), con **un pulsador y barrido** (portátil; el pulsador envía Espacio o Intro) o con el **ratón** (clic o permanencia; sirve también con ratón de cabeza y para probar la app).
- Pestaña **5 · Ayuda** con la guía de uso para el profesorado.
- Palabras organizadas en **bloques temáticos** (una palabra puede estar en varios); las sesiones pueden limitarse a un bloque.
- Sesión libre con 9 actividades: causa-efecto, presentación, «¿Dónde está…?», escucha y elige, lee y elige, «¿Cómo se llama?», sí o no, completa la frase y repaso mezclado; con 2–4 opciones, ayudas de menos a más (repetir → la correcta parpadea → solo queda la correcta) y refuerzo.
- Barra para la educadora: repetir, «con mi ayuda», «no cuenta» (fallo de acceso), pausa, saltar, terminar.
- Registro por pregunta (sola / con ayuda / no ha podido) y por sesión, por asignatura, exportable a CSV.
- Importación de asignaturas desde **hoja de cálculo** (.xlsx o .csv) con la plantilla de `plantillas/plantilla-asignatura.xlsx`: para docentes sin cuenta de GitHub.
- Varias **asignaturas** en el mismo dispositivo (cada una con sus palabras y bloques temáticos); se cambia de una a otra con un desplegable.
- Cada asignatura (palabras, pictogramas y fotos) se guarda en la carpeta `unidades/` del repositorio con el botón **☁️ Guardar en GitHub** (requiere una clave de GitHub limitada a este repositorio) y se cargan desde cualquier dispositivo.
- **Los datos de la alumna se guardan solo en el dispositivo.**

## Estado
Prototipo 0.11: `index.html` + `sw.js` + `manifest.webmanifest` (sin compilación). Instalable y con funcionamiento sin conexión.

Novedades de la 0.11 (la app decide qué enseñar):
- **▶ Sesión de hoy**: la app elige las palabras (hasta 2 nuevas, las que están en progreso y repaso espaciado de las dominadas), pregunta cada una 3 veces intercaladas y ajusta los niveles al terminar.
- **Escalera de 7 niveles por palabra**: entre 2 muy distinta → entre 2 parecida → entre varias solo oída → otra imagen → sí o no → palabra escrita → completa la frase. Sube con ≥ 80 % de respuestas sola en 2 sesiones seguidas, baja con < 50 %; dominada al superar los niveles 3, 4 y 5. Todo ajustable.
- **Palabras nuevas sin error**: primero con la respuesta destacada, después con ayuda con demora y por último sin ayuda.
- **Distractores con criterio**: categorías y palabras marcadas «no juntar al principio».
- **🔎 Comprobación sin ayudas** (línea base, seguimiento y mantenimiento), con tabla de evolución palabra a palabra.
- Actividades nuevas: **sí o no** (por nombre y por categoría) y **completa la frase**; **segunda imagen** para generalizar.
- **Más datos por palabra**: categoría, frase, segunda imagen, palabras parecidas y **voz grabada** por la educadora. Pegar una lista de palabras; proponer segunda imagen.
- **Panel «Qué sabe ya»** con semáforo por palabra, nivel editable y sugerencias (palabras atascadas o confundidas); **informe de una página** para imprimir o guardar en PDF.
- **Guía de una página para la educadora** (pestaña Ayuda, imprimible).
- Compartir asignaturas por archivo sin clave de GitHub; plantilla de hoja de cálculo con columnas de categoría y frase.

La 0.10 añadió: instalación y uso sin conexión, toque adaptado a dedo y palma, asistente de ajuste, mayúsculas o minúsculas, refuerzo con música, registro de una fila por pregunta, «No cuenta», pausa, tiempo máximo y copia de seguridad completa.

## Probarla
Abrir la versión publicada en GitHub Pages o abrir `index.html` en Chrome. En el ordenador, la barra espaciadora hace de pulsador.

## Licencias
- Código: **GPL-3.0**.
- Pictogramas: autor Sergio Palao. Procedencia: [ARASAAC](https://arasaac.org). Licencia CC BY-NC-SA, propiedad del Gobierno de Aragón.
