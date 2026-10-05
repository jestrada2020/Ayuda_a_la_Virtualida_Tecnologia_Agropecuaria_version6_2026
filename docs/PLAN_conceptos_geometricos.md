# Plan: ejercicios interactivos de «Conceptos Geométricos»

Aplicación: *Matemáticas en Técnicas Agropecuarias* (versión 7.3 → 7.4)
Estado actual: la pestaña `geometria_cat` solo muestra 2 videos («Conceptos geométricos claves…» y «Cuándo aplicar el concepto de línea recta»). En el Inicio, los accesos rápidos «Perímetros», «Áreas de Terreno» y «Volúmenes» abren esa misma pestaña sin ejercicios.

## 1. Objetivo

Que el estudiante practique **perímetro, área y volumen** con situaciones del campo, siguiendo el mismo esquema que ya usan «Regla de 3» y «Álgebra y Finca»: un enunciado, una figura, un teclado numérico en pantalla, «✓ Verificar», «📖 Ver Ayuda / Proceso», «Nuevo» y «Salir».

## 2. Contenido de la pestaña

Arriba quedan los 2 videos actuales (además de «Áreas y volúmenes: conceptos geométricos claves», `XUDgJga7zSI`, que ya está en «Aprendo con videos»). Debajo van tres grupos de tarjetas:

| Grupo | Ejercicio | Contexto agropecuario | Fórmula | Datos (enteros, al azar) |
|---|---|---|---|---|
| **Perímetros** | Cerca de potrero rectangular | Metros de alambre para cercar | P = 2(l + a) | l, a de 10 a 80 m |
| | Cerca con varias hileras | Alambre para *n* hileras | P·n | n de 2 a 5 |
| | Postes de una cerca | Postes cada *d* metros | P / d | d divide a P |
| **Áreas** | Lote rectangular | m² de un lote de siembra | A = l·a | l, a de 5 a 60 m |
| | Lote triangular | Esquina de un potrero | A = b·h / 2 | b·h par |
| | Pasar a hectáreas | Lote en ha | 1 ha = 10 000 m² | A múltiplo de 2 500 m² (respuesta 0,25; 0,5…) |
| | Semilla por área | kg de semilla del lote | A · dosis | dosis en kg/m² sencilla |
| **Volúmenes** | Tanque o reservorio | Litros de agua de un tanque en caja | V = l·a·h, 1 m³ = 1 000 L | l, a, h de 1 a 6 m |
| | Comedero / bebedero | Litros de un bebedero | V = l·a·h (en dm) | medidas en dm |
| | Silo cilíndrico (opcional) | m³ de un silo | V = π r² h | se pide redondeado a entero; π = 3,14 |

Son 10 ejercicios en total; todas las respuestas son números enteros, salvo «pasar a hectáreas», que usa un decimal sencillo (ver el punto 5).

## 3. Pantalla de un ejercicio

```
Salir
┌──────────────────────────────────────────┐
│  Cerca de potrero                         │
│  Perímetro — Contexto agropecuario        │
│  ┌──────────────────────────────────────┐ │
│  │ Un potrero rectangular mide 45 m de   │ │
│  │ largo y 30 m de ancho. ¿Cuántos metros│ │
│  │ de alambre se necesitan para una      │ │
│  │ hilera de cerca?                      │ │
│  └──────────────────────────────────────┘ │
│        [ dibujo SVG del rectángulo        │
│          con las medidas 45 m y 30 m ]    │
│   Fórmula: P = 2(l + a)                   │
│   P = [ ? ] m                             │
│   [📖 Ver Ayuda / Proceso]                │
│   1 2 3 4 5 / 6 7 8 9 0 / ⌫  ✓ Verificar │
│   [Nuevo]   [Reintentar]                  │
└──────────────────────────────────────────┘
```

- **Figura en SVG** (dentro del código, sin imágenes externas): rectángulo, triángulo, caja en perspectiva o cilindro, con las medidas escritas. Usará los mismos colores oscuros de la aplicación.
- **Ayuda / Proceso**: muestra la fórmula, la sustitución y el resultado con KaTeX (`latexSpan`), por ejemplo P = 2(45 + 30) = 2·75 = 150 m.
- **Calificación solo al pulsar Verificar** (como ya se corrigió en Signos de Agrupación). Si la respuesta es incorrecta, la casilla se marca en rojo y se da una pista: «Revise: ¿sumó los cuatro lados?».

## 4. Cambios en el código

| Archivo | Cambio |
|---|---|
| `js/app/generators.js` | Nueva función `genGeometria(plantilla)` que devuelve `{ plantilla, titulo, texto, figura: {tipo, medidas}, formulaLaTeX, pasosLaTeX[], respuesta, unidad, decimales, pista }`. Una rama por plantilla (`cerca`, `hileras`, `postes`, `lote`, `triangulo`, `hectareas`, `semilla`, `tanque`, `bebedero`, `silo`). Los datos se eligen para que la respuesta sea exacta. |
| `js/app/data.js` | 10 entradas `{ id, type: "geometria", plantilla, title, icon, grupo }` en la lista de ejercicios (`xr`). |
| `js/app/main.js` | (a) Manejador `wgeo(f)`, como `wr3`: genera el ejercicio, limpia la casilla y abre la vista `"geometria"`. (b) Vista `geometria_cat`: los videos y las tarjetas agrupadas por Perímetros, Áreas y Volúmenes. (c) Vista `geometria` del ejercicio, con el diseño del punto 3, el teclado existente y una tecla «,» para decimales en «hectáreas». (d) Componente `figuraGeo(figura)` que dibuja el SVG. (e) Accesos rápidos del Inicio: «Perímetros», «Áreas de Terreno» y «Volúmenes» abren un ejercicio al azar de su grupo. (f) La barra lateral resalta «Conceptos Geométricos» también cuando está abierta la vista `geometria`. |
| `css/styles.css` | Si se usan clases de Tailwind nuevas, regenerar el bloque de utilidades (README, «Cómo regenerar los estilos»). |
| `docs/manual_usuario.html` | Reemplazar la parte de Conceptos Geométricos de la sección 5.3 por una sección 5.3 propia, con pasos y una figura (por ejemplo, cerca de 45 m × 30 m → 150 m), y regenerar el PDF. |
| `README.md`, `CHANGELOG.md` | Versión 7.4. |

## 5. Decisiones

1. **Decimales**: las respuestas en hectáreas (0,25; 0,5; 1,75) necesitan la tecla «,». Se comparará como número, aceptando coma o punto. *Alternativa*: pedir la respuesta en m² y mostrar la conversión solo en la ayuda.
2. **Silo cilíndrico (π)**: es opcional porque obliga a redondear. Se puede dejar para una segunda versión.
3. **Progreso**: se registrará cada intento con la función existente `je(id, acierto)`, igual que los demás ejercicios.

## 6. Pruebas antes de entregar

- En Node: 200 ejercicios al azar por plantilla, con respuesta finita, entera (o con los decimales previstos) y medidas dentro de los rangos.
- Casos conocidos: cerca de 45 × 30 → 150 m; lote de 40 × 25 → 1 000 m²; 5 000 m² → 0,5 ha; tanque de 2 × 1,5 × 1 m → 3 000 L; triángulo de base 20 y altura 15 → 150 m².
- En Chrome sin interfaz: barrido de todos los botones (hoy hay 194 sin errores), respuesta correcta e incorrecta en cada plantilla, sin calificación mientras se escribe, ayuda y figura visibles, y accesos rápidos del Inicio.
- Capturas para el manual, PDF regenerado y copia de seguridad en CASORES.

## 7. Orden de trabajo sugerido

1. `genGeometria` y las pruebas en Node (lo más importante).
2. La vista del ejercicio y la figura SVG.
3. La lista de la pestaña y los accesos rápidos del Inicio.
4. El barrido de pruebas.
5. Manual, README, CHANGELOG y copia de seguridad.

Después, el mismo esquema sirve para **Despeje de Variables** (despejar una letra de una fórmula del campo y calcular su valor) y **Razonamiento Deductivo** (tablas lógicas con casillas Sí/No).
