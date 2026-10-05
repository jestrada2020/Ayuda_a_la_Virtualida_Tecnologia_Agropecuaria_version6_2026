# Registro de Cambios (CHANGELOG)

## Versión 7.7.6 (Octubre de 2026) - Números de cuatro cifras sin separador (RAE)

- En las guías de los Módulos 2 a 7, los números de **cuatro cifras** van ahora **sin punto**, como recomienda la RAE: «1.000» pasa a «1000», «2.560» a «2560», «$1.350,50» a «$1350,50» y «4.047 m²» a «4047 m²». Desde cinco cifras se mantiene el punto («12.750», «102.400», «50.000.000»), y los decimales siguen con coma.
- Se rehízo la conversión en un solo paso desde las guías anteriores al cambio de formato. Así se eliminan los pequeños huecos que dejaba la compensación de la versión 7.7.5 y la que exigía quitar el punto.
- **Cómo se compensa**: lo que sigue al número en la misma línea se corre con él, sin huecos, incluidos los superíndices «m²», «dm³» y «°C». La diferencia se recupera en el siguiente hueco grande (antes del número de ecuación, entre columnas de una tabla o al final de la línea).
- **Verificación**:
  - los 1 596 números conservan su valor;
  - ninguna palabra cambió de lugar salvo las que siguen a un número acortado en la misma línea (2 a 5 pt a la izquierda);
  - las columnas y los números de ecuación quedaron idénticos;
  - se revisaron en captura las ecuaciones del Módulo 3, el ejercicio de bacterias del Módulo 5 y las tablas de unidades del Módulo 7.

## Versión 7.7.5 (Octubre de 2026) - Formato de los números en las guías

- Las guías de los **Módulos 2 a 7** usan ahora **coma para decimales y punto para miles**. Antes se mezclaban «156.8» con «156,8», «5, 737,5» y «$285,750.50». Ejemplos de cómo quedaron:
  - «0.85» pasa a «0,85»;
  - «216,750» pasa a «216.750»;
  - «$1,350.50» pasa a «$1.350,50»;
  - «x = 2, 560 × 1,5» pasa a «x = 2.560 × 1,5»;
  - «I = 35, 000x + 15, 000y» pasa a «I = 35.000x + 15.000y».
- **Cuántos cambios**:
  - en el texto, unos 220 separadores (coma y punto tienen el mismo ancho en esa fuente, así que nada se mueve);
  - en las fórmulas, 25 comas de miles: se quitó el espacio fino que TeX dejaba tras la coma y el desplazamiento se compensó en el siguiente espacio, así que el resto de la línea y los números de ecuación siguen en su sitio.
- **Qué no se tocó**:
  - números de sección y de pregunta («3.1»);
  - las comas que separan elementos de un conjunto;
  - las comas decimales que ya estaban bien («1,5», «3,785 L/gal»);
  - el Módulo 1, que no tiene cifras con separadores.
- **Verificación**: los 1 596 números de las seis guías tienen el mismo valor antes y después. Ninguna palabra sin cifras cambió de posición, según la comparación de las coordenadas de todas las palabras. Se revisaron en captura las páginas con fórmulas.

## Versión 7.7.4 (Octubre de 2026) - Corrección de la guía del Módulo 1

- **Descripción del artículo del nivel 3**: la guía decía que el artículo trataba estadística agrícola, cálculo diferencial, modelado, punto de equilibrio, rentabilidad y densidad de siembra, pero el artículo (Torres Castillo, *Green World Journal*, 2021) no trae esos temas. Se reescribieron con lo que el artículo sí contiene:
  - el párrafo de contexto;
  - las cinco viñetas: **conversiones y proporciones** (acres, cuartos, secciones; precio por tonelada y por bushel), **clasificación de semillas**, **estimación** (rendimiento, horas, grados-día), **programación lineal** (cultivos y piensos) y **dosis de agroquímicos y fertilizantes** (con agricultura de precisión).
- **Pregunta 3.1**: pedía elegir entre «estadística, geometría, álgebra», que el texto no trata; ahora pide elegir entre «proporciones y conversiones, estimación, programación lineal».
- **Pregunta 3.2**: pedía «datos sobre productividad… densidad de siembra», que el artículo no tiene; ahora parte de lo que sí dice (la agricultura de precisión reduce el desperdicio de fertilizante y los nitratos en el agua) y pregunta por las consecuencias de **no** calcular bien las dosis.
- **Enlace**: el texto visible pasa de «greenworldjournal.com | Matemática en la Agricultura (PDF)» a «Importancia de las ciencias matemáticas en la agricultura (DOI)». El área del enlace se ajustó al texto nuevo.
- **Criterios de evaluación**: la pregunta 2.4 no estaba en ningún criterio; ahora cuenta en «Análisis y reflexión (preguntas 1.3, 2.3, 2.4, 3.3)».
- **Encabezados de los niveles**: «Dificultad Baja / Media / Alta» estaba escrito del mismo color que el fondo del encabezado y no se veía; ahora va en blanco.
- Los párrafos se recompusieron con los anchos reales de la fuente: cada viñeta conserva sus dos líneas, las líneas quedan justificadas al mismo margen que el resto (x = 500,3) y las tildes se colocan como en TeX. Las fuentes incrustadas no traen «h» ni «k» en negrita, ni «/» ni «K» en el texto normal; por eso se escribió «litros por hectárea» y se omitió la sigla HVK.
- **Verificación**: solo cambian las páginas 2, 4, 7, 8 y 10, todas revisadas en captura.

## Versión 7.7.3 (Octubre de 2026) - Corrección de la guía del Módulo 5

- **Ejercicio 12**: el punto 1 preguntaba «¿Cuánto queso de 1,500 L en 4 horas con 3 queseros?», pero el queso solo depende de la leche, así que no era una proporción compuesta. Ahora pregunta «**¿Cuántas horas tardan 3 queseros en procesar 1,500 L?**»: los litros son directos y los queseros inversos; 6 × 1,5 × 2/3 = **6 horas**.
- **Proyecto integrador «Expansión escalada»**: llamaba «economías de escala» a costos que crecen con el factor (1,08)ⁿ, y no daba costos ni precios. Ahora:
  - el plan define **n = 1, 2 y 3** para duplicar, triplicar y cuadruplicar;
  - el punto 5 dice «**Costo por cerdo: 700,000 pesos por (1,08)ⁿ (deseconomía de escala)**»;
  - el punto 6 dice «**Ingresos (110 kg por cerdo a 8,000 pesos/kg) vs costos**».

  La utilidad por ciclo queda en 18,0 millones (actual), 24,8 (duplicar), 19,1 (triplicar) y −0,7 (cuadruplicar), así que la pregunta 7 tiene una respuesta clara: duplicar.
- Esa página no trae las fuentes de los signos «×» ni «$», por eso se escribieron «por» y «pesos». Solo cambian las páginas 5 y 6 (comparación imagen por imagen con el original).

## Versión 7.7.2 (Octubre de 2026) - Revisión de las guías de los Módulos 1 a 7

Se revisaron las siete guías en PDF (cálculos rehechos de forma independiente, enlaces y tipografía). El informe completo está en `docs/REVISION_guias_modulos.md`. Se corrigió directamente en los PDF:

- **Módulo 1**: el enlace al artículo del nivel 3 estaba caído («410 Gone»). Ahora apunta al DOI del artículo, «Importancia de las ciencias matemáticas en la agricultura» (Green World Journal 4(2), 2021): <https://doi.org/10.53313/gwj42008>.
- **Módulo 2**:
  - Proyecto integrador: con 8 500 ponedoras al 85 % salen 216 750 huevos en 30 días, no 212 500, y el 2,5 % de 212 500 son 5 312,5 huevos rotos. Ahora dice **216 750 huevos y 2,0 % rotos** (4 335 rotos).
  - En la tabla de huevos, «¿72» pasa a **«73 o más»**.
- **Módulo 3**:
  - Ejercicio guiado 3: 2 550 × 2,25 = 5 737,5 huevos, que la guía redondeaba a «≈ 5 738». Ahora parte de **2 560** huevos y da **5 760** exactos.
  - Ejercicio 11 b): el heno ya duraba exactamente 15 días, así que «¿cuánto más comprar para 15 días?» daba 0. Ahora pregunta por **20 días** (faltan 700 kg).
- **Módulo 4**: «numerador ¡denominador» / «¿denominador» pasan a **«menor que el» / «mayor que el»**, y «.ºtros”» pasa a **«Otros»**.
- **Módulo 6**, ejercicio 12: con C(x) = 250x + 15 000 000 e I(x) = 450x el equilibrio era de 75 000 cerdos. Ahora el ejercicio está expresado **en miles de pesos** (C(x) = 250x + 15 000, I(x) = 450x, utilidad buscada $10 000): equilibrio **75 cerdos**, utilidad con 100 cerdos 5 000 (5 millones), 125 cerdos para 10 millones.
- **Módulo 7**, tabla resumen: la fila °C → °F decía «(9/5) + 32»; ahora dice **«x × 9/5 + 32»**.
- **Pendiente (requiere la fuente LaTeX)**:
  - Módulo 5: el ejercicio 12, que no es una proporción compuesta, y el proyecto, que habla de «economías de escala» con costos crecientes y no da datos de costo ni precio.
  - Módulo 1: la descripción del artículo no coincide con su contenido, y la pregunta 2.4 falta en los criterios.
  - Todas las guías: formato de números mezclado (punto y coma decimales, comas de miles).
- **Verificación**: comparación imagen por imagen de cada guía con su original. Solo cambian las páginas corregidas (Módulo 2: págs. 4 y 8; Módulo 3: 3, 4 y 6; Módulo 4: 2 y 3; Módulo 6: 5; Módulo 7: 7; Módulo 1: solo el enlace). El texto de los cambios se revisó en capturas: alineación de ecuaciones, centrado en tablas y tildes.
- Los originales sin corregir quedaron guardados aparte, fuera de la aplicación.

## Versión 7.7.1 (Octubre de 2026) - Corrección de la guía del Módulo 6

- **Ejercicio 1 «Cálculo de Animales»** de `PDF/Practica_Modulo6_Ecuaciones_Matematicas_Basicas.pdf`: planteaba 45 animales con las vacas el triple de los terneros. Eso da $4x = 45$, $x = 11{,}25$ terneros, un número no entero. La guía lo redondeaba a 11 y su propia verificación sumaba $11 + 33 = 44$, no 45. Ahora el total es **48 animales**: $x + 3x = 48$, $4x = 48$, $x = 12$ terneros, $3(12) = 36$ vacas y verificación $12 + 36 = 48$ (coincide con el total).
- No había fuente LaTeX, así que se editó el texto del PDF conservando su tipografía. En la fuente Computer Modern todas las cifras tienen el mismo ancho, y la línea (6) se recolocó con los anchos reales de la fuente para que el número de ecuación siga alineado.
- **Verificación**: las páginas 1 y 3 a 6 son idénticas píxel a píxel a las originales; en la página 2 solo cambia la zona del ejercicio. El texto extraído muestra los valores nuevos.

## Versión 7.7 (Octubre de 2026) - Ejercicios de Razonamiento Deductivo

Segunda y última entrega del plan `docs/PLAN_despeje_razonamiento.md`. La pestaña «Razonamiento Deductivo», que solo tenía dos videos, tiene ahora dos grupos de ejercicios.

### Tablas lógicas (tabla matricial, como en los videos del profesor)
- **Tres niveles**: básica (3 productores y su cultivo, 9 casillas), intermedia (3 productores, cultivo y animal, 27 casillas) y avanzada (4 productores, finca, cultivo y animal, 96 casillas).
- **Tabla en escalera**: los productores contra cada categoría y, debajo, las categorías entre sí. Cada casilla pasa de vacía a ✗, a ✓ y de nuevo a vacía. Opción «Al marcar ✓, completar con ✗ el resto de su fila y su columna».
- **💡 Pista**: propone una deducción segura y resalta la casilla («Por la pista 2…», «Por descarte…», «Ana va con maíz, y maíz va con gallinas…»). Si hay una marca equivocada, la señala primero.
- **✓ Verificar** dice cuántas parejas ✓ están bien, sin revelar cuáles. Al terminar se muestra quién tiene qué. **Ver Ayuda / Proceso** explica cómo se deduce cada ✓.
- **Generador** `genTablaLogica(nivel)`: sortea la solución y agrega pistas verdaderas (afirmativas, negativas, dobles «ni…» y cruzadas «Quien cultiva… cría…») hasta que el solucionador paso a paso (`logicaResolver`: pistas directas, descarte y encadenamiento) completa la tabla. Después quita las pistas que sobran. Así la solución es única y se deduce siempre sin probar casos.

### Deducción: ¿qué se puede concluir?
- **Silogismos** (5 contextos: bovinos, gallinas, leguminosas, cerdos, equinos) y **reglas «si…, entonces…»** (6 contextos: fumigación, fiebre en bovinos, gusano cogollero, prueba de alcohol de la leche, registro de vacunación, riego del potrero) en cuatro formas: modus ponens, modus tollens, afirmar el consecuente y negar el antecedente.
- Cuatro conclusiones, una sola válida; en las falacias es «No se puede concluir nada con certeza». Al responder, cada opción equivocada explica su error y se muestra la regla con su nombre; en las falacias se da otra causa posible (por ejemplo, la leche también falla la prueba de alcohol por mastitis o calostro).

### Otros cambios
- Accesos rápidos del Inicio: «Tablas Lógicas» abre una tabla básica y «Deducción», un ejercicio variado. Antes solo abrían los videos.
- La barra lateral resalta «Razonamiento Deductivo» durante los ejercicios. Las vistas `tablalogica` y `deduccion` tienen estados propios.
- **Manual**: sección 5.5 reescrita, con tabla de ejercicios, pasos de las tablas y de la deducción, tabla de formas con ejemplos y tres figuras nuevas. Figuras renumeradas (25). PDF regenerado (31 páginas).

### Verificación
- **En Node**, 1 200 tablas (500 básicas, 500 intermedias, 200 avanzadas):
  - un solucionador independiente por fuerza bruta confirmó que cada una tiene una sola solución y que coincide con la sorteada;
  - ningún paso deducido es falso;
  - el número de pasos cubre todas las casillas.
  - La tabla avanzada se genera en unos 50 ms.
- En Node, 9 000 ejercicios de deducción: una sola opción correcta, cuatro opciones distintas y nota en cada opción equivocada.
- **En Chrome**:
  - un estudiante simulado que solo sigue «💡 Pista» resolvió 9 tablas de los tres niveles y obtuvo «¡Correcto!»;
  - una ✓ falsa se detecta con la pista y con «Verificar»;
  - el autocompletado pone las 4 ✗ esperadas en la tabla básica;
  - se probaron 12 ejercicios de deducción, con opciones bloqueadas después de responder, y los accesos rápidos.
- Barrido de regresión: 237 botones, 2 616 pulsaciones internas y los 74 botones del Inicio, sin errores.
- Durante la revisión se corrigió que los encabezados de categoría usaban `rowSpan`/`colSpan` como estilo y desalineaban la primera fila de la tabla.

## Versión 7.6 (Octubre de 2026) - Ejercicios de Despeje de Variables

Primera entrega del plan `docs/PLAN_despeje_razonamiento.md` (Razonamiento Deductivo queda para la versión 7.7). La pestaña «Despeje de Variables», que solo tenía dos videos, tiene ahora ejercicios interactivos.

- **Once ejercicios en tres niveles**:
  - **Nivel 1, una operación**: peso por dosis, largo del lote, tiempo de riego, producto en la mezcla, tiempo del tractor.
  - **Nivel 2, dos operaciones**: animales vacunados ($C = p\,n + F$), ganancia de peso en engorde, temperatura del bovino (°F a °C, con aviso de fiebre por encima de 39,5 °C), lado del potrero.
  - **Nivel 3, varios factores**: altura del tanque y largo del lote sembrado.
- **Dos pasos por ejercicio**:
  1. Elegir la fórmula bien despejada entre cuatro. Las otras tres son errores típicos (sumar lo que había que restar, invertir la fracción, dividir solo una parte), cada uno con su pista; se puede volver a elegir. El intento fallido queda en el historial.
  2. Calcular el valor con el teclado (tecla «,» solo cuando la respuesta tiene decimales). Califica solo al pulsar «✓ Verificar».
- **Ayuda / Proceso** con el despeje hecho a ambos lados de la igualdad; al acertar, conclusión y **comprobación** con los datos originales.
- **Generador** `genDespeje(plantilla)` en `js/app/generators.js`, con `DESPEJE_EJERCICIOS` y `DESPEJE_NIVELES`. Los datos dan siempre una respuesta exacta (entera o con un decimal) y realista (por ejemplo, novillos de 200 a 600 kg; temperaturas de 38 a 41 °C).
- **Estados propios** (`despEj`, `despElegida`…) y vista `despeje` separada de la lista, para no repetir el fallo que tenía Signos de Agrupación. La barra lateral resalta «Despeje de Variables» durante el ejercicio (y ahora también resalta «Conceptos Geométricos» en el fondo azul de su botón).
- **Accesos rápidos del Inicio**: «Fórmulas Físicas» y «Fórmulas de Área» abren un ejercicio al azar de su tipo; antes solo abrían los videos.
- **Manual**: nueva sección 5.4 «Despeje de Variables» con tabla de fórmulas, pasos y tres figuras (lista, opción equivocada con su pista y ejercicio resuelto); Razonamiento Deductivo pasa a la 5.5. Figuras renumeradas (22). PDF regenerado (29 páginas).
- **Verificación**:
  - En Node: 22 000 ejercicios (2 000 por plantilla). En todos, la comprobación cuadra, la respuesta es exacta y aparece en el último paso, las cuatro opciones son distintas con una sola correcta, y KaTeX compila todas las fórmulas.
  - En Chrome: en los 11 ejercicios, el teclado no aparece antes del paso 1, una opción equivocada da su pista, una respuesta errada da «incorrecta» y la respuesta calculada aparte desde el enunciado da «¡Correcto!» (incluida una con decimal, 2,5 m). «Salir» vuelve a la lista.
  - Barrido de regresión: 231 botones, 2 317 pulsaciones internas y los 74 botones del Inicio sin errores.

## Versión 7.5 (Octubre de 2026) - Nueva revisión: accesos rápidos, Signos de Agrupación y ayuda

Revisión completa con el procedimiento `reformadoryfiscal-aplicaciones`.

### Correcciones
- **Accesos rápidos del Inicio que abrían otra cosa**:
  - «Pasto/Fert.» pedía la plantilla `pasto`, que no existe, y abría un problema de **agua de riego**. Ahora abre al azar Semillas de Pasto o Fertilizante.
  - «Positivas», «Negativas» y «Mixtas» de Factorización llamaban al generador con un número (1, 2, 3) en lugar del nivel y los tres abrían **signos mixtos**. Ahora abren su nivel; «Mixtas» pasa a llamarse «Signos Mixtos».
  - «Paréntesis» y «Corchetes» pasaban `subtype` y el generador lee `id`: abrían el ejercicio genérico 5 − (−P), sin título.
  - «Compra/Venta» e «Inventario» buscaban problemas que no existen y dejaban la **página en blanco**. Ahora son «Tienda» y «Ganado» y abren un problema de ese grupo.
  - Todos los accesos usan ahora las entradas de `js/app/data.js`, por lo que el ejercicio muestra su título (antes salía vacío) y el historial registra el identificador correcto.
- **Signos de Agrupación**: el ejercicio se mostraba **debajo de la lista** de tipos y «Salir» no hacía nada (llevaba a la misma vista). El ejercicio tiene ahora su propia vista (`expr_ej`), «Salir» vuelve a la lista y la barra lateral sigue resaltando la pestaña. El título «Expresiones» pasa a «Signos de Agrupación».
- **Calificación exacta**: en Signos de Agrupación y en los problemas de Tienda, Finca, Ganado y Engorde se usaba `parseInt`, de modo que «22.9» se aceptaba como 22. Ahora se compara el número completo.
- **Ayuda rápida (💬)**: el chat «AI Tutor» respondía **en chino** a las preguntas sobre sumas («竖方向从右到左相加…») y solo reconocía tres palabras. Se reescribió en español: reconoce 16 temas (con o sin tildes), da una explicación breve y ofrece «Abrir la herramienta →».
- **Pista de Factorización equivocada**: decía «busque dos números que multiplicados den c y **restados** den |b|», lo que es falso cuando las raíces tienen el mismo signo (en x² − 6x + 8 los números −2 y −4 se suman). Ahora: «multiplicados den c y sumados den b (con su signo); las raíces son esos números cambiados de signo».
- **Trinomios con b = ±1** se mostraban como «x² + 1x − 6»; ahora «x² + x − 6».
- **Paso 2 de Po-Shen Loh**: decía «m = (suma raíces) / 2» junto a la fórmula m = −b/2; ahora dice «m = −b / 2 (punto medio de las raíces)».
- **Divisiones con decimales**: la tarjeta decía «Dividendo con cifras decimales», pero el dividendo es entero y es el cociente el que tiene decimales (p. ej. 918 ÷ 4 = 229,5). Se corrigió la tarjeta y el manual.
- **Generador de signos**: «Con Corchetes» podía dar resultados negativos ([5 − (6 + 4)] × 2 = −10) en un nivel sin negativos; ahora siempre es positivo. Se usa «×» en lugar de «x» y el paso «Menos con menos = mas» pasa a «−(−P) = +P (menos por menos da más)».
- **Textos**: instrucciones en «usted» (Escriba, Calcule, Factorice, Busque, Seleccione, Recuerde, Resuelva, Su respuesta…); «1.5 kg» → «1,5 kg»; «Convierte» → «Convierta»; «2½ Mixtas» → «± Op. Mixtas» (son operaciones mixtas, no números mixtos).

### Nombre de la facultad
- «Facultad de Ciencias y Biotecnología» pasa a **«Facultad de Ciencias Agropecuarias y Naturales»** en el Inicio, la Introducción (texto y créditos del equipo), la pestaña de Módulos PDF, el manual (portada y presentación, con la figura de la interfaz rehecha) y el README.

### Manual
- Secciones 3, 4, 6.4, 6.6, 6.7 y 6.8 actualizadas; nuevas figuras 12 (Factorización) y 13 (Signos de Agrupación, ya verificado: la anterior mostraba el fallo de la lista y el ejercicio juntos). PDF regenerado (27 páginas).

### Verificación
- En Node: 35 000 expresiones de signos evaluadas de forma independiente (0 diferencias, todas positivas), 20 000 trinomios (forma factorizada = expandida en 4 puntos, signos según el nivel, sin «1x») y 18 000 reglas de tres (x entero y = a₂·b₁/a₁).
- Se comprobaron a mano las 120 respuestas fijas de los problemas (tienda, finca, ganado, engorde, divisiones y fracciones): todas correctas.
- En Chrome sin interfaz: 220 botones de primer nivel y unas 2 200 pulsaciones dentro de los ejercicios sin errores de consola; los 74 botones del Inicio; los 17 accesos rápidos abren su ejercicio; Signos de Agrupación («22.9» → Incorrecto, «22» → Correcto, «Salir» vuelve a la lista); Ayuda rápida con cinco preguntas.
- Los 7 enlaces de Evaluaciones responden (el del Módulo 5 se llama `Evaluacion_ModoloCinco_2026` en el repositorio y funciona; `ModuloCinco` da 404, así que se dejó).

## Versión 7.4 (Octubre de 2026) - Ejercicios de Conceptos Geométricos

Implementa el plan de `docs/PLAN_conceptos_geometricos.md`. Las respuestas en hectáreas se escriben con decimales (tecla «,»). El silo cilíndrico queda para una versión posterior.

- **Nueve ejercicios interactivos** en la pestaña «Conceptos Geométricos», que antes solo tenía videos:
  - **Perímetros:** cerca de potrero, cerca de varias hileras y postes de una cerca.
  - **Áreas:** lote rectangular, lote triangular, área en hectáreas y semilla por área.
  - **Volúmenes:** tanque de agua (m³ a litros) y bebedero (dm³ = L).
- **Generador** `genGeometria(plantilla)` en `js/app/generators.js`, con las listas `GEO_EJERCICIOS` y `GEO_GRUPOS`. Elige datos enteros para que la respuesta sea exacta; en hectáreas, la respuesta es múltiplo de 0,25. El largo siempre es mayor o igual que el ancho.
- **Pantalla del ejercicio:**
  - enunciado, **dibujo en SVG** de la figura (rectángulo, triángulo rectángulo o caja) con sus medidas, y la fórmula;
  - teclado numérico, con tecla «,» solo en hectáreas;
  - «✓ Verificar»: califica solo al pulsarlo; si la respuesta es incorrecta, da una pista;
  - «📖 Ver Ayuda / Proceso» con la sustitución paso a paso en KaTeX;
  - al acertar, una conclusión y «Nuevo ejercicio».
- **Accesos rápidos del Inicio**: «Perímetros», «Áreas de Terreno» y «Volúmenes» abren un ejercicio al azar de su grupo; antes abrían la pestaña sin ejercicios.
- Durante el ejercicio, la barra lateral resalta «Conceptos Geométricos».
- **Manual**: nueva sección 5.3 «Conceptos Geométricos», con tabla de ejercicios y fórmulas, pasos y dos figuras; Despeje y Razonamiento pasan a la 5.4. PDF regenerado (27 páginas).
- **Verificación**:
  - En Node: 18 000 ejercicios al azar (2 000 por plantilla) con respuesta positiva y exacta, y largo ≥ ancho.
  - En Chrome: en cada uno de los 9 ejercicios se probó que no califica mientras se escribe, que una respuesta errada da «incorrecta» y que la respuesta correcta, calculada aparte desde el enunciado, da «¡Correcto!» (incluida la de hectáreas con coma).
  - Los 3 accesos del Inicio abren un ejercicio de su grupo.
  - Barrido de regresión: 203 botones sin errores.

## Versión 7.3 (Octubre de 2026) - Manual de usuario y correcciones

### Manual de usuario
- **Manual en PDF** (`docs/manual_usuario.pdf`, 25 páginas, 18 figuras), con la misma estructura que los de las otras aplicaciones de la Caja de Herramientas: portada, contenido, presentación, requisitos, interfaz (Inicio con filtros y accesos rápidos, Introducción), cómo se resuelve un ejercicio, una sección por herramienta con pasos y un ejemplo verificado (por ejemplo, corral de 12 m × 16 m, $624 \div 8 = 78$, $x^2 - 6x + 8 = (x-2)(x-4)$), los recursos del currículo, una guía rápida de GeoGebra con comandos en español y solución de problemas.
- **Pestaña «Manual de usuario»** al final de la barra lateral, con visor integrado, «↗ Ver en ventana emergente» (si el navegador la bloquea, avisa dentro de la página, nunca con `alert`) y «⬇ Descargar PDF». También tiene tarjeta en el Inicio (categoría Módulos y Recursos) y en la Introducción. Los contadores del Inicio pasan a 18 herramientas y 5 en Módulos y Recursos.

### Correcciones
- **Accesos rápidos del Inicio que dejaban la aplicación en blanco**: «Suma Enteros», «Suma Decimales», «Resta Enteros», «Resta Decimales», «1 Cifra» y «Multi-Cifra» abrían la vista de un ejercicio que no se había creado (`TypeError: Cannot read properties of undefined`) y la aplicación entera dejaba de responder. «Exacta» mostraba una página vacía. Ahora abren la lista de ejercicios de su tema.
- **Divisiones con decimales y con residuo**: solo se podían abrir desde los accesos rápidos del Inicio. Ahora la pestaña «Divisiones y Decimales» tiene al pie «Otras divisiones» con los dos accesos, y desde esas listas «← Volver a Divisiones» regresa a la pestaña.
- **Signos de Agrupación mostraba la solución**: el proceso («10 + 6 = 16 | 16 x 8 = 128») aparecía encima de la casilla antes de responder, y el mensaje «¡Correcto!/Incorrecto» cambiaba mientras se escribía, de modo que se podía adivinar probando números. Ahora se califica solo al pulsar «Verificar», y el proceso se muestra después de verificar.
- **Problemas de Tienda, Finca, Ganado y Engorde**: tenían el mismo fallo de calificar mientras se escribía; ahora califican solo al pulsar «Verificar». «Nuevo Problema» limpia la respuesta anterior.

### Verificación
- Barrido automático de los 194 botones de todas las pestañas (incluidos los accesos rápidos del Inicio) y de los 20 ejercicios de divisiones con decimales y con residuo: sin errores de consola y sin vistas vacías.
- Prueba de «Verificar» en Signos de Agrupación y en Problemas: sin calificación al escribir, «Incorrecto» y el proceso al verificar, y limpieza con «Reintentar».
- Pestaña del manual: visor, enlace de descarga y aviso cuando la ventana emergente se bloquea (se simuló el bloqueo), que se cierra con ✕.

## Versión 7.2 (Octubre de 2026) - Interfaz mejorada y «Aprendo con videos»

### Nueva pestaña «Aprendo con videos»
- Reúne en un solo lugar **46 videos** del canal de YouTube del profesor John Jairo Estrada, en **17 temas**: presentación del curso, los siete módulos, las siete guías, regla de tres (directa, inversa y compuesta), ecuaciones cuadráticas, geometría, despeje, razonamiento deductivo, sumas, restas, multiplicación, división, fracciones y potencias, factorización, signos de agrupación, método de Pólya y conversión de unidades.
- Cada tema tiene el botón **«Ver en la aplicación»**, que abre la herramienta donde se practica. Los 16 botones se probaron uno por uno.
- Catálogo en `js/app/videos.js`. Todos los videos pertenecen al canal, que se revisó completo en octubre de 2026, y sus títulos se muestran con la ortografía corregida.
- Reemplaza a las pestañas «Videotutoriales de Guías» y «Videos por Módulo», cuyos videos quedaron incluidos. Se actualizaron el menú superior, la barra lateral, el botón principal del inicio y las tarjetas del inicio y de la Introducción.
- Al abrir una herramienta desde esta pestaña, la vista vuelve al principio de la página.

### Interfaz
- **Estilos que faltaban**: `css/styles.css` era una compilación recortada de Tailwind y no traía unas 120 clases que el código sí usa (colores de texto, márgenes, `md:grid-cols-3`, botones con `hover`, fondos de las tarjetas de ejercicios…). Por eso las tarjetas de Regla de 3 (Vacunación, Concentrado, Ivermectina…) y de otras herramientas se veían sin fondo ni borde. Se regeneraron las utilidades con Tailwind 3 a partir de `js/app/*.js`.
- **Tarjetas de video compactas**: los videos de cada herramienta ocupaban casi toda la pantalla (miniaturas a lo ancho) y empujaban los ejercicios hacia abajo. Ahora cada video es una fila con una miniatura pequeña, el título corregido y la indicación «se abre en una pestaña nueva». Se quitaron 19 rótulos que repetían el título encima de cada video.
- **Encabezado**: el título ya no se parte en tres líneas, y el menú pasa a la línea siguiente cuando la ventana es estrecha.

### Verificación
- Barrido automático en Chrome sin interfaz: las 19 pestañas de la barra lateral cargan sin errores de consola, y los 16 botones «Ver en la aplicación» abren la pestaña correcta.
- Se revisaron con capturas el inicio, Aprendo con videos, Regla de 3, Sumas y Fracciones.

## Versión 7.1 (Octubre de 2026) - Reforma y Fiscalización Integral

Reforma de interfaz, adaptación de la introducción y fiscalización completa conforme al procedimiento del skill `reformadoryfiscal-aplicaciones` para la Caja de Herramientas Matemáticas (Facultad de Ciencias y Biotecnología):

### 1. Introducción y Redacción Adaptada a Tecnología Agropecuaria
- **Redacción canónica adaptada:** Se redactaron los 6 párrafos institucionales y metodológicos adaptados específicamente al programa de **Tecnología Agropecuaria**, explicando el origen pedagógico con el profesor Carlos Andrés Escobar Guerra, la articulación con los problemas productivos del campo (dosificación de fármacos veterinarios como vacunas e ivermectina, balanceo de dietas y concentrados para bovinos y porcinos, fertilizantes, riego, semillas y dimensionamiento de unidades de producción), la importancia de interiorizar conceptos, el espacio virtual único con tecnologías modernas y el equipo de trabajo.
- **Créditos rigurosos del equipo:** Se incluyó el reconocimiento formal a Carlos Andrés Escobar Guerra, Pablo Andrés Guzmán, John Jairo Estrada Álvarez y **Juan Alberto Arias Quiceno** (verificado ortográficamente, nunca "Albero").
- **Vista dedicada de Introducción:** Se implementó la vista `introduccion` con botón de retorno, tarjeta principal de presentación, tarjeta destacada del equipo de colaboradores, catálogo con tarjetas individuales ("Abrir Herramienta") para cada una de las 16 herramientas disponibles, y panel de acceso a las 7 guías curriculares oficiales en PDF y GeoGebra Clásico.

### 2. Estructura y Navegación
- **Paleta canónica unificada y fondo dark charcoal/slate:** Se eliminó el fondo verdoso anterior (`bg-gradient-to-br from-green-900 via-teal-900 to-blue-900`) y se reemplazó por un fondo pizarra/carbón oscuro de alta elegancia (`linear-gradient(135deg, #1e2227 0%, #24292e 50%, #2b3036 100%)`) que armoniza de forma óptima con la barra lateral `#343a40` y el encabezado superior `#2b3035`, garantizando una relación de contraste superior a 15:1 para caracteres blancos y una legibilidad impecable.
- **Submenú Interactivo en la Presentación Principal (Home):** Se rediseñó totalmente la cuadrícula de herramientas del inicio, sustituyendo los bloques aislados y multicolores por un **submenú de categorías filtrables** (*Todas las Herramientas*, *Técnicas Agropecuarias*, *Aritmética Paso a Paso*, *Álgebra y Proporciones*, *Módulos y Recursos*) con contador dinámico de herramientas y tarjetas uniformes en fondo `#2b3035` con bordes `#495057`.
- **Sub-módulos y Accesos Rápidos Directos:** Cada tarjeta incorpora ahora su propia botonera de sub-módulos temáticos específicos (ej. en Regla de 3: *Vacunas*, *Ivermectina*, *Concentrado*, *Pasto/Fert.*; en Divisiones: *Exacta*, *Con Decimales*, *Con Residuo*; en Fracciones: *Simples*, *Mixtas*, *Potencias*; en Álgebra: *Corral*, *Parcela*, *Estanque*), permitiendo al usuario ir directo al problema deseado sin rodeos.
- **Barra lateral reorganizada con 20 pestañas de primer orden:** Organizada en 4 grupos temáticos claros:
  1. *General:* Inicio y la Introducción a la Caja de Herramientas.
  2. *Técnicas Agropecuarias:* Regla de 3 Agropecuaria, Álgebra y Finca, Conceptos Geométricos, Despeje de Variables y Razonamiento Deductivo.
  3. *Aritmética Fundamental:* Sumas (Enteros/Dec.), Restas y Verificación, Multiplicación Paso a Paso, Divisiones y Decimales, Fracciones y Potencias, Factorización de Trinomios, Signos de Agrupación y Problemas Aritméticos.
  4. *Módulos Curriculares y Recursos:* Módulos Oficiales (PDF), Videotutoriales de Guías, Videos por Módulo, Evaluaciones en Línea y GeoGebra Clásico integrado.
- **Vistas Dedicadas Nuevas:** Pestaña dedicada para *Módulos y Guías Curriculares en PDF* (`guias_modulos_pdf`) con visor y descargas directas, y pestaña dedicada para *GeoGebra Clásico* (`geogebra`) con calculadora gráfica embebida y comandos rápidos en español para agronomía.
- **Menú superior enriquecido:** Acceso inmediato a *Inicio*, *Introducción*, *Guías por Módulo*, *Módulos PDF ▾*, *Videos por Módulo*, *Evaluaciones* y *GeoGebra Clásico*.

### 3. Visor de Documentos PDF
- **Apertura en ventana emergente:** Se incorporó el botón «↗ Ventana emergente» (`window.open`) para facilitar la consulta del manual y guías sin perder el estado de los ejercicios en pantalla.
- **Descarga directa:** Botón «⬇ Descargar PDF» para almacenamiento y lectura offline.
- **Aviso informativo:** Mensaje preventivo con alternativas en caso de que el navegador restrinja la visualización embebida en `<iframe>`.

### 4. Corrección de Algoritmos y Robustecimiento de Generadores
- **Parámetros seguros en `genRestaDec`:** Se incorporaron valores por defecto seguros (`intA = 2, intB = 1, dec = 1, integerA = false`) para evitar longitudes de arreglo no válidas (`RangeError: Invalid array length`) ante invocaciones con argumentos parciales.
- **Pruebas algorítmicas masivas:** Se verificaron 100 ejecuciones aleatorias continuas para cada uno de los 17 generadores matemáticos en Node.js sin un solo fallo.

### 5. Limpieza y Depuración de Código
- **Saneamiento de `index.html`:** Se removieron más de 450 líneas de un script inyectado ajeno al proyecto (*iframe highlight injector*), dejando un documento HTML5 limpio y agregando soporte para Font Awesome 6.
- **Eliminación de archivos obsoletos:** Se eliminaron del entorno de trabajo `apply_changes.py` y `js/scripts.js` (código antiguo redundante reemplazado por la arquitectura modular en `js/app/`), reduciendo el peso del proyecto y evitando inconsistencias.

### 6. Verificación Automatizada End-to-End
- Sintaxis comprobada con `node --check` en todos los archivos JavaScript (`js/app/main.js`, `js/app/data.js`, `js/app/generators.js`).
- Verificación de renderizado en Chrome Headless mediante Chrome DevTools Protocol (CDP), probando el montaje del DOM, la navegación interactiva por las 20 pestañas, la apertura y cierre del visor modal PDF, la integración de GeoGebra y la presencia de todos los textos institucionales sin errores de consola.

---

## Versiones Anteriores

### Versión 7.0 (Abril de 2026)
- Incorporación de módulos de regla de tres directa para veterinaria y campo.
- Generadores de ecuaciones cuadráticas con contexto de corrales, parcelas y estanques.
- Integración de KaTeX para visualización de expresiones matemáticas.
- Adición de guías de práctica en PDF y biblioteca de videos de YouTube.
