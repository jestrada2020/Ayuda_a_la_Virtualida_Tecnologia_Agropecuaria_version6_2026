# Caja de Herramientas: Matemáticas en Técnicas Agropecuarias

Aplicación interactiva de la **Caja de Herramientas Matemáticas** desarrollada para la **Facultad de Ciencias Agropecuarias y Naturales**, con el propósito de brindar acompañamiento y fortalecimiento académico a los estudiantes del programa de **Tecnología Agropecuaria**.

---

## 🌾 Presentación y Contexto

Esta plataforma articula las matemáticas fundamentales con los desafíos reales de la producción agropecuaria y el trabajo de campo. A través de módulos interactivos paso a paso, ejercicios contextualizados y retroalimentación inmediata, el estudiante aprende a dominar y aplicar conceptos como:

- **Dosificación veterinaria:** Aplicación de vacunas, desparasitantes (ivermectina) y medicamentos según el peso y especie animal (bovinos, porcinos).
- **Nutrición animal:** Balanceo y pesaje de raciones y concentrados alimenticios.
- **Manejo agrícola y suelos:** Cálculo de fertilizantes por hectárea, requerimientos de agua para riego y densidades de siembra de pastos.
- **Dimensionamiento de unidades productivas:** Geometría y álgebra aplicada para planificar parcelas de cultivo, invernaderos, estanques piscícolas y corrales.
- **Conversión de unidades y análisis:** Relaciones entre magnitudes, porcentajes, fracciones y razonamiento cuantitativo.

---

## 🛠️ Herramientas y Módulos Disponibles

| Categoría | Herramienta | Descripción y Aplicación |
|---|---|---|
| **Campo y Producción** | **Regla de 3 Agropecuaria** | Problemas directos de vacunación, dosis de ivermectina bovina, raciones de concentrado porcino, semillas de pasto, fertilizantes e intervalos de riego. |
| **Campo y Producción** | **Álgebra y Finca** | Ecuaciones cuadráticas para calcular dimensiones óptimas de parcelas, corrales, cercas perimetrales, estanques y filas de siembra. |
| **Campo y Producción** | **Conceptos Geométricos** | Nueve ejercicios interactivos con dibujo de la figura: perímetros (cerca de potrero, varias hileras, postes), áreas (lote rectangular y triangular, hectáreas con decimales, semilla por área) y volúmenes (tanque y bebedero en litros). |
| **Campo y Producción** | **Despeje de Variables** | Once ejercicios en tres niveles (dosis, riego, mezclas, costos, engorde, temperatura, cercas, tanques, siembra): primero se elige la fórmula bien despejada entre cuatro (con pista para cada error típico) y después se calcula el valor, con proceso y comprobación. |
| **Razonamiento** | **Razonamiento Deductivo** | Tablas lógicas con pistas (básica 3×1, intermedia 3×2 y avanzada 4×3 categorías) generadas al azar con solución única y deducible paso a paso, con «Pista», «Verificar» y proceso; y deducción a partir de premisas (silogismos, modus ponens, modus tollens y dos falacias) con explicación. |
| **Razonamiento** | **Factorización** | Factorización de trinomios $(x+a)(x+b)$ con raíces positivas, negativas y combinadas. |
| **Aritmética** | **Fracciones y Mixtas** | Suma, resta, multiplicación, división, potencias y operaciones mixtas aplicadas a proporciones. |
| **Aritmética** | **Sumas Verticales** | Algoritmo vertical interactivo con acarreos para números enteros y cifras decimales. |
| **Aritmética** | **Restas y Verificación** | Restas con algoritmo de préstamos paso a paso y verificación automática. |
| **Aritmética** | **Multiplicaciones** | Multiplicación por una y varias cifras con visualización de acarreos y productos parciales. |
| **Aritmética** | **Divisiones** | Divisiones exactas paso a paso, divisiones con decimales y divisiones con residuo. |
| **Aritmética** | **Signos de Agrupación** | Evaluación de expresiones con jerarquía de operaciones usando paréntesis, corchetes y llaves. |
| **Aritmética** | **Problemas Aritméticos** | Enunciados contextualizados de compra, venta, inventario y manejo de recursos. |
| **Curricular** | **Guías de Estudio (PDF)** | Módulos oficiales 1 al 7 con visor integrado, apertura en ventana emergente y descarga. |
| **Curricular** | **Aprendo con videos** | 46 videos del canal del profesor John Jairo Estrada en 17 temas (módulos, guías, regla de tres, aritmética, álgebra, geometría, lógica, método de Pólya), cada tema con el botón «Ver en la aplicación» que abre la herramienta relacionada. |
| **Curricular** | **Evaluaciones en Línea** | Cuestionarios interactivos para medir el progreso y afianzar competencias. |
| **Recursos** | **Manual de usuario** | Guía completa en PDF (`docs/manual_usuario.pdf`) con visor integrado, botón «Ver en ventana emergente» (con aviso en la página si el navegador la bloquea) y «Descargar PDF». |
| **Recursos** | **Ayuda rápida (💬)** | Botón del encabezado: se escribe un tema (suma, fracciones, regla de tres, área…) y responde con una explicación breve y el botón «Abrir la herramienta →». |
| **Recursos** | **GeoGebra Clásico** | Acceso a la suite de geometría, álgebra simbólica (CAS) y cálculo gráfico dinámico. |

---

## 📚 Módulos Curriculares en PDF

La aplicación incluye acceso directo a las 7 guías de práctica oficiales:

1. **Módulo 1:** Conceptos Básicos de Matemáticas
2. **Módulo 2:** Importancia de los Números
3. **Módulo 3:** Regla de Tres y Proporcionalidad
4. **Módulo 4:** Fraccionarios y Decimales
5. **Módulo 5:** Potenciación y Proporciones
6. **Módulo 6:** Ecuaciones Matemáticas Básicas
7. **Módulo 7:** Conversión de Unidades en el Sector Agropecuario

Cada guía puede leerse en el visor modal, abrirse en una ventana emergente (`window.open`) o descargarse localmente.

---

## 🚀 Cómo Iniciar la Aplicación

1. Abra una terminal en el directorio de la aplicación.
2. Ejecute el script de inicio:
   ```bash
   ./iniciar.sh
   ```
   O manualmente con Python:
   ```bash
   python3 -m http.server 8080
   ```
3. Abra su navegador web en `http://localhost:8080` (o abra directamente `index.html`).

---

## 📁 Estructura del Proyecto

```
.
├── index.html          # Punto de entrada de la aplicación
├── iniciar.sh          # Script de arranque rápido con servidor local
├── css/
│   └── styles.css      # Utilidades Tailwind generadas + estilos propios (tarjetas de video, «Aprendo con videos»)
├── js/
│   ├── vendor.js       # React, ReactDOM, librerías base y componentes
│   └── app/
│       ├── data.js       # Base de datos de ejercicios y configuraciones
│       ├── generators.js # Generadores algorítmicos de problemas matemáticos
│       ├── videos.js     # Catálogo de «Aprendo con videos» (videos del canal por tema)
│       └── main.js       # Componente principal, navegación, interfaz y vistas
├── PDF/                # Guías oficiales de estudio en PDF (Módulos 1 al 7)
└── docs/
    ├── manual_usuario.html # Fuente del manual de usuario
    ├── estilo_manual.css   # Estilo de impresión del manual
    ├── img/                # Capturas usadas en el manual
    └── manual_usuario.pdf  # Manual generado (lo muestra la pestaña «Manual de usuario»)
```

---

## 👥 Equipo de Trabajo

- **Carlos Andrés Escobar Guerra:** Profesor proponente y autor de las cartillas pedagógicas de la Facultad de Ciencias Agropecuarias y Naturales.
- **Pablo Andrés Guzmán:** Profesor de estadística y programación; impulsor de los grupos de estudio y fundamentación cuantitativa.
- **John Jairo Estrada Álvarez:** Cerebro del proyecto y programador principal de las aplicaciones interactivas de la Caja de Herramientas.
- **Juan Alberto Arias Quiceno:** Colaborador académico y coautor del proyecto educativo.

---

## 📘 Cómo actualizar el manual de usuario

Edite `docs/manual_usuario.html` (las fórmulas se escriben entre `$…$` y se muestran con KaTeX) y regenere el PDF desde la carpeta `docs/`:

```bash
google-chrome --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf=manual_usuario.pdf manual_usuario.html
```

---

## 🎨 Cómo regenerar los estilos

`css/styles.css` empieza con las utilidades de Tailwind 3 generadas a partir de las clases que usa `js/app/*.js`. Si agrega clases nuevas en el código, regenere ese bloque con:

```bash
npx tailwindcss@3 -i entrada.css -o salida.css --minify   # entrada.css: @tailwind base; @tailwind components; @tailwind utilities;
```

(con `content: ["js/app/*.js"]` en `tailwind.config.js`) y reemplace la parte inicial de `css/styles.css`, conservando las reglas propias que siguen al comentario «Skill Reformador y Fiscal».

---

## 📌 Versión

- **Versión:** 7.7 (Octubre de 2026)
- **Facultad:** Ciencias Agropecuarias y Naturales
- **Programa:** Tecnología Agropecuaria
