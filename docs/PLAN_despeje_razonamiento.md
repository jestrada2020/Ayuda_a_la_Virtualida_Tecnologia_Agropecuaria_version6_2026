# Plan: ejercicios interactivos de «Despeje de Variables» y «Razonamiento Deductivo»

Aplicación: *Matemáticas en Técnicas Agropecuarias* (versión 7.5 → 7.6)

Estado actual:
- `despeje_cat` muestra solo 2 videos («Despeje de variables, parte 1» `ZorbD4FDix8` y «parte 2» `YnwrGKNJKX0`).
- `razonamiento_cat` muestra solo 2 videos («Problema lógico Uno – Tecnología Agropecuaria» `X2X7ckrTW_Y` y «Problema lógico de las profesiones» `RSXhqPLTKgQ`). Ambos enseñan la **tabla matricial** para resolver problemas a partir de pistas.
- En el Inicio, los accesos rápidos «Fórmulas Físicas», «Fórmulas de Área», «Tablas Lógicas» y «Deducción» abren esas mismas pestañas, sin ejercicios.

Referencia curricular: la guía del **Módulo 6** (Ecuaciones Matemáticas Básicas) trabaja el despeje en $ax + b = c$ con contextos pecuarios (dosis, alimento, costos, crecimiento).

---

## Parte A. Despeje de Variables

### A.1 Objetivo

Que el estudiante practique las **dos destrezas** del despeje:
1. **Despejar la letra**: reconocer qué operación inversa se aplica a cada lado de la igualdad.
2. **Calcular su valor** con datos reales del campo.

Se mantiene el esquema de Regla de 3 y Conceptos Geométricos: enunciado, fórmula, «✓ Verificar», «📖 Ver Ayuda / Proceso», «Otro ejercicio» y «Salir».

### A.2 Ejercicios

Hay tres niveles, según cuántas operaciones hay que deshacer.

| Nivel | Ejercicio | Contexto | Fórmula | Se despeja | Ejemplo (datos al azar) | Respuesta |
|---|---|---|---|---|---|---|
| **1. Una operación** | Peso por dosis | Producto de 1 ml por cada 50 kg | $D = \dfrac{P}{50}$ | $P = 50D$ | Se aplicaron 15 ml | 750 kg |
| | Área del lote | Lote rectangular | $A = l \cdot a$ | $l = \dfrac{A}{a}$ | $A$ = 1 200 m², $a$ = 30 m | 40 m |
| | Tiempo de riego | Caudal de la bomba | $Q = \dfrac{V}{t}$ | $t = \dfrac{V}{Q}$ | 6 000 L a 400 L/h | 15 h |
| | Concentración | Producto disuelto en agua | $c = \dfrac{m}{V}$ | $m = c \cdot V$ | 5 g/L en 20 L | 100 g |
| | Distancia (física) | Tractor a velocidad constante | $d = v \cdot t$ | $t = \dfrac{d}{v}$ | 24 km a 8 km/h | 3 h |
| **2. Dos operaciones** | Animales por costo | Costo fijo más costo por animal | $C = p\,n + F$ | $n = \dfrac{C - F}{p}$ | $C$ = 17 000, $p$ = 1 200, $F$ = 5 000 | 10 animales |
| | Ganancia de peso | Engorde | $P_f = P_i + g\,t$ | $g = \dfrac{P_f - P_i}{t}$ | de 30 kg a 94 kg en 4 meses | 16 kg/mes |
| | Temperatura | Fiebre en bovinos | $F = 1{,}8\,C + 32$ | $C = \dfrac{F - 32}{1{,}8}$ | 101,3 °F | 38,5 °C |
| | Cerca | Lado de un potrero | $P = 2(l + a)$ | $l = \dfrac{P}{2} - a$ | $P$ = 180 m, $a$ = 35 m | 55 m |
| **3. Tres factores** | Altura del tanque | Tanque en forma de caja | $V = l \cdot a \cdot h$ | $h = \dfrac{V}{l \cdot a}$ | 12 m³, 4 m × 2 m | 1,5 m |
| | Densidad de siembra | Plantas por m² | $N = A \cdot \rho$ | $A = \dfrac{N}{\rho}$, luego un lado | 4 800 plantas, 4 por m², ancho 30 m | 40 m |

En total son 11 ejercicios. Los datos se eligen para que la respuesta sea **exacta** (entera o con un solo decimal sencillo, como 1,5 o 38,5).

### A.3 Pantalla de un ejercicio (dos pasos)

```
Salir
┌──────────────────────────────────────────────┐
│  Animales por costo · Nivel 2                 │
│  Vacunar cuesta $5.000 de visita más $1.200   │
│  por animal. La factura fue de $17.000.       │
│  ¿Cuántos animales se vacunaron?              │
│                                                │
│  Fórmula:   C = p·n + F                        │
│                                                │
│  Paso 1. ¿Cómo queda n despejada?              │
│   ( ) n = (C + F) / p                          │
│   ( ) n = C / p − F                            │
│   ( ) n = (C − F) / p     ← correcta           │
│   ( ) n = p / (C − F)                          │
│                                                │
│  Paso 2. n = [ ? ]  animales                   │
│   1 2 3 4 5 / 6 7 8 9 0 / , ⌫  ✓ Verificar    │
│  [📖 Ver Ayuda / Proceso]                      │
└──────────────────────────────────────────────┘
```

- **Paso 1, opción múltiple** con 4 fórmulas en KaTeX: la correcta y tres **errores típicos** escritos para cada fórmula (operación inversa equivocada, orden de las operaciones al revés, fracción invertida). Al acertar se desbloquea el paso 2. Si se equivoca, recibe una pista concreta. Por ejemplo: «F está sumando: pasa al otro lado restando, antes de dividir por p».
- **Paso 2**, teclado numérico (con «,» solo cuando la respuesta tiene decimal). Califica solo al pulsar «Verificar».
- **Ayuda / Proceso**: el despeje línea por línea, haciendo la misma operación a ambos lados:
  $17\,000 = 1\,200\,n + 5\,000 \;\Rightarrow\; 12\,000 = 1\,200\,n \;\Rightarrow\; n = 10$.
- **Conclusión** al acertar: «Se vacunaron 10 animales» y la comprobación $1\,200 \cdot 10 + 5\,000 = 17\,000$ ✓.

---

## Parte B. Razonamiento Deductivo

### B.1 Objetivo

Practicar la **tabla matricial** que enseñan los videos del profesor, y la **deducción a partir de premisas** con situaciones del campo.

### B.2 Grupo 1: Tablas lógicas (con pistas)

| Nivel | Tamaño | Categorías (ejemplo) |
|---|---|---|
| Básico | 3 personas × 2 categorías | Productor, cultivo |
| Intermedio | 3 personas × 3 categorías | Productor, cultivo, animal |
| Avanzado | 4 personas × 3 categorías | Productor, finca, cultivo, animal |

Ejemplo de nivel intermedio. La solución es única: Ana–maíz–gallinas, Beto–café–cerdos, Carla–plátano–cabras.
1. Ana no cultiva café ni plátano.
2. Quien cultiva plátano cría cabras.
3. Beto no cría cabras ni gallinas.
4. Carla no cultiva café.

**Pantalla**: arriba van las pistas, numeradas. Debajo, la tabla matricial: filas de personas y columnas de cada categoría, con los bloques separados como en el video. Cada casilla cambia al tocarla: vacía → ✗ → ✓ → vacía.

- **Verificar** compara las ✓ con la solución y dice cuántas parejas están bien, sin revelar cuáles.
- **Pista** muestra **una deducción** posible desde el estado actual, por ejemplo: «Por la pista 1, Ana no cultiva café: marque ✗». La calcula el propio programa.
- **Ayuda / Proceso** muestra la solución completa paso a paso. Indica qué pista justifica cada ✓ o ✗.
- Opcional: al marcar ✓ en una casilla, se pueden poner ✗ automáticas en el resto de la fila y de la columna. Se activa con una casilla de selección, para no hacer el trabajo por el estudiante.

**Generador** (`genTablaLogica(nivel)`): elige al azar nombres y categorías de listas agropecuarias (fincas, cultivos, animales, razas, insumos). Sortea una solución y agrega pistas una a una (afirmativas, negativas, compuestas y de enlace «quien… también…»). Se detiene en cuanto un **solucionador por fuerza bruta** confirma que la solución es **única**: hay solo 36 combinaciones en 3×3 y 13 824 en 4×4×4, lo cual es instantáneo. Después quita las pistas que sobran.

### B.3 Grupo 2: Deducción (¿qué se puede concluir?)

Dos premisas y cuatro conclusiones posibles. El estudiante elige la válida, o «no se puede concluir nada».

| Forma | Ejemplo | Conclusión |
|---|---|---|
| Silogismo | Todos los bovinos son rumiantes. Lucero es un bovino. | Lucero es rumiante. ✓ |
| Modus ponens | Si llueve más de 50 mm, se suspende la fumigación. Llovieron 70 mm. | Se suspende. ✓ |
| Modus tollens | Si una vaca tiene fiebre, su temperatura pasa de 39,5 °C. Lucero tiene 38,6 °C. | Lucero no tiene fiebre. ✓ |
| Afirmar el consecuente (falacia) | Si el lote tiene plaga, las hojas se amarillan. Las hojas se amarillan. | No se puede concluir (puede ser falta de nitrógeno). |
| Negar el antecedente (falacia) | Si se fertiliza, la producción sube. No se fertilizó. | No se puede concluir. |

Al responder, la aplicación explica **por qué** la conclusión es válida o no, con el nombre de la regla y un contraejemplo en las falacias. Cada forma tiene de 4 a 6 contextos agropecuarios, para que no se repitan.

---

## Cambios en el código

| Archivo | Cambio |
|---|---|
| `js/app/generators.js` | `genDespeje(plantilla)` → `{ nivel, texto, formulaTex, incognita, opciones[4] (tex), correcta, pistaOpcion, datos, respuesta, decimales, pasosTex[], conclusion, comprobacionTex }`. `genTablaLogica(nivel)` con su solucionador `resolverTabla(pistas)` y `siguienteDeduccion(estado, pistas)` para el botón Pista. `genDeduccion(forma)` con plantillas de premisas. |
| `js/app/data.js` | Listas `DESPEJE_EJERCICIOS` (11) y `RAZONAMIENTO_EJERCICIOS` (3 niveles de tablas + 5 formas de deducción), como `GEO_EJERCICIOS`. |
| `js/app/main.js` | (a) Vistas `despeje_cat` y `razonamiento_cat`: los videos actuales arriba y las tarjetas por nivel o grupo debajo. (b) Vistas de ejercicio `despeje`, `tablalogica` y `deduccion`. (c) Estados propios (`despEj`, `despPaso`, `tablaEstado`…), sin reutilizar los genéricos `q`/`I`, para no repetir el fallo de vistas mezcladas que tenía Signos de Agrupación. (d) Accesos rápidos del Inicio: «Fórmulas Físicas» → un ejercicio de dosis, riego, distancia o temperatura; «Fórmulas de Área» → área, cerca, tanque o siembra; «Tablas Lógicas» → tabla básica; «Deducción» → una forma al azar. (e) Resaltado de la barra lateral en las vistas nuevas. (f) La Ayuda rápida (💬) ya lleva a estas pestañas. |
| `css/styles.css` | Estilos de la tabla matricial (bloques, casillas ✓/✗). Si se usan clases de Tailwind nuevas, regenerar las utilidades. |
| `docs/manual_usuario.html` | La sección 5.4 se divide en 5.4 «Despeje de Variables» y 5.5 «Razonamiento Deductivo». Cada una lleva pasos, un ejemplo verificado y figuras. Después se regenera el PDF. |
| `README.md`, `CHANGELOG.md` | Versión 7.6. |

## Decisiones (necesito su visto bueno)

1. **Paso 1 de Despeje con opción múltiple** (recomendado), en lugar de que el estudiante escriba la fórmula. Escribir fórmulas con el teclado del celular es engorroso, y calificar expresiones equivalentes, como $(C-F)/p$ frente a $C/p - F/p$, complica mucho la aplicación. La opción múltiple con errores típicos sigue obligando a razonar el despeje.
2. **Tablas lógicas generadas al azar** (recomendado), en lugar de un banco fijo. Así hay ejercicios ilimitados y la unicidad se comprueba siempre. *Alternativa:* 10 a 15 problemas escritos a mano, con textos más naturales pero que se repiten.
3. **Grupo «Deducción»** con silogismos y falacias: se incluye porque el Inicio ya anuncia «Deducción». Si prefiere centrarse solo en tablas, se omite.
4. **Decimales** solo donde son naturales (38,5 °C; 1,5 m), con la tecla «,», igual que en hectáreas.

## Pruebas antes de entregar

- **En Node:**
  - 2 000 ejercicios de despeje por plantilla: la respuesta sustituida en la fórmula original reproduce el dato, es exacta, y las 4 opciones son distintas, con una sola correcta.
  - 2 000 tablas por nivel: solución única según el solucionador y sin pistas sobrantes.
  - La «Pista» siempre propone una deducción válida.
- **Casos conocidos:** los ejemplos de las tablas A.2 y B.3 (750 kg, 10 animales, 38,5 °C, 1,5 m…) y el problema de Ana, Beto y Carla.
- **En Chrome sin interfaz:**
  - barrido de todos los botones (hoy 220 y unas 2 200 pulsaciones internas, sin errores);
  - respuesta correcta e incorrecta en cada ejercicio, sin calificación mientras se escribe;
  - tabla completada correcta e incorrectamente;
  - los 4 accesos rápidos del Inicio;
  - «Salir» vuelve a la lista.
- Capturas para el manual, PDF regenerado y copia de seguridad en CASORES.

## Orden de trabajo sugerido

1. `genDespeje` y sus pruebas en Node.
2. Vista de Despeje (los dos pasos) y su lista.
3. `genTablaLogica` con el solucionador y sus pruebas en Node (la parte más delicada).
4. Vista de la tabla matricial con Verificar y Pista.
5. Grupo Deducción.
6. Accesos rápidos, barrido de pruebas, manual, README, CHANGELOG y copia de seguridad.

Despeje (pasos 1 y 2) puede entregarse primero como versión 7.6 y Razonamiento como 7.7, si prefiere revisarlos por separado.
