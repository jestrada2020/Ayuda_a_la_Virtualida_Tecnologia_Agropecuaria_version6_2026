# Revisión de las guías de práctica (Módulos 1 a 7)

Fecha: 5 de octubre de 2026. **Estado:** se aplicaron en los PDF todas las correcciones marcadas «✔ Corregido» (versión 7.7.2); las marcadas «Pendiente (fuente)» requieren el archivo LaTeX.

Se revisaron las siete guías de la carpeta `PDF/`. En cada una se recalcularon todos los ejercicios resueltos y se revisaron los datos de los ejercicios propuestos, los enlaces y la tipografía. El ejercicio 1 del Módulo 6 ya se corrigió en la versión 7.7.1.

**Columna «¿Se puede corregir en el PDF?»:** «Sí» significa que el cambio es pequeño y se puede hacer sobre el PDF, como se hizo en el Módulo 6. «Fuente» significa que hay que reescribir texto, y conviene hacerlo en el archivo LaTeX original.

## Errores de cálculo o de planteamiento

| Módulo | Dónde | Problema | Corrección propuesta | ¿Se puede corregir en el PDF? |
|---|---|---|---|---|
| 2 | Proyecto integrador (empresa avícola) | Con 8 500 ponedoras al 85 % de postura en 30 días salen 216 750 huevos, no 212 500 (con 212 500 la tasa da 83,3 %). Además, el 2,5 % de 212 500 son 5 312,5 huevos rotos, que no es un número entero. | Huevos totales: **216 750**. Rotos: **2,0 %** (4 335 rotos, 212 415 comercializables). | ✔ Corregido |
| 3 | Ejercicio guiado 3 (gallinas) | 2 550 × 1,5 × 1,5 = 5 737,5 huevos: el resultado se redondea a «≈ 5 738». | Partir de **2 560** huevos: x = 2 560 × 2,25 = **5 760** huevos, exacto. | ✔ Corregido |
| 3 | Ejercicio 11 b) y c) (heno) | Las 70 vacas consumen 140 kg/día y los 2 100 kg duran exactamente 15 días, así que «¿cuánto más se debe comprar para 15 días?» da 0 y la pregunta c) pierde sentido. | Preguntar por **20 días**: faltan 700 kg, que cuestan $560 000. | ✔ Corregido |
| 5 | Ejercicio 12 (queso) | «¿Cuánto queso de 1 500 L en 4 horas con 3 queseros?»: el queso solo depende de la leche (150 kg); las horas y los queseros no intervienen, así que no es una proporción compuesta. | «¿Cuántas horas tardarán 3 queseros en procesar 1 500 L?» → 6 × 1,5 × 2/3 = **6 horas**. | ✔ Corregido (7.7.3): «¿Cuántas horas tardan 3 queseros en procesar 1,500 L?» |
| 5 | Proyecto integrador | «Costos (aumentan con factor (1,08)ⁿ por economías de escala)»: si los costos crecen más que la producción, eso es lo contrario de una economía de escala. Además, no se dan los costos ni los precios base, así que los puntos 5 a 7 no se pueden calcular. | Agregar costos y precio por cerdo, y decir «deseconomías de escala» o cambiar el factor. | ✔ Corregido (7.7.3): plan «(n = 1, 2 y 3)», punto 5 «Costo por cerdo: 700,000 pesos por (1,08)ⁿ (deseconomía de escala)», punto 6 «Ingresos (110 kg por cerdo a 8,000 pesos/kg) vs costos». Utilidad por ciclo: 18,0 / 24,8 / 19,1 / −0,7 millones; escala óptima: duplicar. |
| 6 | Ejercicio 12 (punto de equilibrio) | Con C(x) = 250x + 15 000 000 e I(x) = 450x, el equilibrio es de **75 000 cerdos** y con 100 cerdos se pierden $14 980 000: faltan tres ceros en los valores por cerdo. | C(x) = 250 000x + 15 000 000 e I(x) = 450 000x → equilibrio **75 cerdos**; utilidad con 100 cerdos: $5 000 000; para $10 000 000 de utilidad: 125 cerdos. | ✔ Corregido, expresado **en miles de pesos**: C(x) = 250x + 15 000 e I(x) = 450x «(en miles de pesos)», y en el punto 3 «$10 000». La línea ya ocupaba todo el ancho y no cabían tres ceros más. |
| 7 | Tabla resumen de factores | La fila «°C → °F» dice «(9/5) + 32», sin la variable; la fila inversa sí la tiene: «(x − 32) × 5/9». Leída en la columna «Multiplicar por», sugiere multiplicar por 33,8. | «x × 9/5 + 32». | ✔ Corregido |

## Enlaces y contenido del Módulo 1

| Problema | Detalle | Corrección |
|---|---|---|
| **Enlace caído** (nivel 3) | El enlace al artículo de Green World Journal responde «410 Gone»: el archivo se retiró. | El artículo es «Importancia de las ciencias matemáticas en la agricultura» (R. Torres Castillo, *Green World Journal* 4(2), 2021). Su DOI funciona: <https://doi.org/10.53313/gwj42008>. ✔ Enlace cambiado en el PDF. |
| La descripción no coincide con el artículo | La guía dice que el artículo trata estadística agrícola, cálculo diferencial, modelado, punto de equilibrio, rentabilidad y densidad de siembra. El artículo es una revisión de 6 páginas sobre suelos (humedad, pH), fertilizantes, proporciones, conversiones y costos, y no trae esos temas ni «datos de productividad». La pregunta 3.2 pide datos que el texto no tiene. | ✔ Corregido (7.7.4): párrafo de contexto, las cinco viñetas (conversiones y proporciones, clasificación de semillas, estimación, programación lineal, dosis y agricultura de precisión), la pregunta 3.1 (herramientas que sí trae el artículo) y la pregunta 3.2 (agricultura de precisión y nitratos). El texto del enlace dice ahora «Importancia de las ciencias matemáticas en la agricultura (DOI)». |
| Criterios de evaluación | La tabla de puntajes no incluye la pregunta 2.4 (Aplicación). | ✔ Corregido (7.7.4): «Análisis y reflexión (preguntas 1.3, 2.3, 2.4, 3.3)». |

Los dos videos (TEDx de Eduardo Sáenz de Cabezón y de Vicky Ponza) funcionan y corresponden a lo que describe la guía.

También se encontró y corrigió (7.7.4) que en los encabezados de los tres niveles las palabras «Dificultad Baja / Media / Alta» estaban escritas del mismo color que el fondo del encabezado (verde, azul y rojo) y no se veían; ahora van en blanco.

## Tipografía (errores de compilación de LaTeX)

| Módulo | Dónde | Se ve | Ahora dice | Causa |
|---|---|---|---|---|
| 2 | Tabla de huevos, «Extra Grande» | «¿72» | ✔ Corregido como «73 o más» (la fuente incrustada no trae «>») | El signo «>» escrito como texto se imprime como «¿» con la codificación de fuente antigua (OT1). |
| 4 | Tipos de fracciones | «numerador ¡denominador» / «numerador ¿denominador» | ✔ Corregido como «numerador menor que el denominador» / «mayor que» | Igual. |
| 4 | Ejercicio guiado 1 | «Para calcular .ºtros”» | ✔ Corregido como «Para calcular Otros» | Comillas rectas `"O` con el idioma español activo. |

En la fuente LaTeX se corrigen todos con `\usepackage[T1]{fontenc}` o escribiendo `$<$` y `$>$`, y con comillas «…».

## Formato de los números (todas las guías) — ✔ Unificado (7.7.5)

Se mezclaban tres convenciones: punto decimal en el texto y coma decimal en las fórmulas («156.8 kg» y «156,8»), coma de miles junto a coma decimal («x = 5, 737,5») y formato estadounidense («$285,750.50»). Ahora todas las guías usan **coma para decimales y punto para miles**, siguiendo la norma de la RAE: los números de **cuatro cifras van sin separador** (7.7.6). Ejemplos: «0,85», «2,205 lb/kg», «2205 lb/t», «$285.750,50», «$1350,50», «x = 2560 × 1,5», «35.000x + 15.000y», «12.750 huevos».

- **Texto**: unos 220 separadores en los Módulos 2 a 7. En esa fuente la coma y el punto tienen el mismo ancho, así que nada se mueve.
- **Fórmulas**: 25 comas de miles. TeX las escribía con un espacio fino («2, 560»), que se quitó; el desplazamiento se compensó en el siguiente espacio, de modo que el resto de la línea y los números de ecuación quedan exactamente donde estaban. Las comas decimales de las fórmulas ya estaban bien («1,5», «0,4536», «3,785 L/gal»).
- **No se tocaron**: los números de sección y de pregunta («3.1», «preguntas 1.1, 2.1»), las comas que separan elementos de un conjunto (Z = {…, −1, 0, 1, …}) ni el Módulo 1, que no tiene cifras con separadores.
- **Números de cuatro cifras (7.7.6)**: al quitar el separador, el número se acorta unos 3 a 5 pt. Lo que sigue al número en la misma línea se corre con él, sin dejar huecos, y la diferencia se recupera en el siguiente hueco grande: el espacio antes del número de ecuación, la separación de columnas de una tabla o el fin de línea. Así las ecuaciones y las columnas no se mueven.
- **Verificación**:
  - los 1 596 números de las seis guías tienen el mismo valor antes y después;
  - las únicas palabras que cambiaron de lugar están en la misma línea y a la derecha de un número acortado, corridas hacia la izquierda solo unos puntos;
  - las columnas de las tablas, los números de ecuación y las demás líneas quedaron idénticos;
  - no quedan superíndices («m²», «dm³», «°C») separados de su unidad.

## Observaciones menores (no son errores)

- **Módulo 2, ejercicio 6 c):** con datos agrupados en rangos no se puede saber cuántos cerdos pesan menos de 115 kg (el rango 110-119 lo contiene). El último rango (130-140) tiene un ancho distinto a los demás.
- **Módulo 2, ejercicio 10:** dice «Viabilidad: 95 % (0.95)», pero la fórmula del índice usa el porcentaje (95). Con 0,95 el resultado sale 100 veces menor que el umbral de 350.
- **Módulo 3, ejercicio 12:** $50 000 por hora-hombre es unas ocho veces el valor real del jornal. El caso 1 da pérdida con los precios dados, lo cual puede ser intencional.
- **Módulo 4, proyecto integrador:** pide cumplir calcio y fósforo, pero la tabla de ingredientes no da esos valores.
- **Módulo 6, ejercicio 3:** usa derivadas (A′(x) = 0) en una sección de ecuaciones cuadráticas; con el vértice de la parábola se llega al mismo resultado sin cálculo.

## Verificación

Los cálculos se rehicieron de forma independiente (en Node). Todos los demás ejercicios resueltos de las siete guías dan el resultado que muestra la guía, entre ellos:
- Módulo 2: inventario 170 → 160 animales;
- Módulo 3: ejercicios 1, 2, 4 a 10;
- Módulo 4: ejercicios 1, 2 y 3;
- Módulo 5: ejercicios 1 a 4;
- Módulo 6: ejercicios 2 y 4;
- Módulo 7: ejercicios 1 a 4.
