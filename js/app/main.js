// Nombres de las pestañas que abren los botones de «Aprendo con videos»
const NOMBRES_PESTANAS = {
  introduccion: "Introducción a la Caja", guias_modulos_pdf: "Módulos Oficiales (PDF)", r3directa_cat: "Regla de 3 Agropecuaria",
  algebra: "Álgebra y Finca", geometria_cat: "Conceptos Geométricos", despeje_cat: "Despeje de Variables",
  razonamiento_cat: "Razonamiento Deductivo", sumas: "Sumas (Enteros / Dec.)", restas: "Restas y Verificación",
  mults: "Multiplicación Paso a Paso", divs: "Divisiones y Decimales", fracciones: "Fracciones y Potencias",
  factorizacion_cat: "Factorización de Trinomios", expr: "Signos de Agrupación", probs: "Problemas Aritméticos",
};
function bf() {
  var re;
  const [C, P] = ye.useState("home"),
    [homeCategory, setHomeCategory] = ye.useState("todas"),
    [d, O] = ye.useState(null),
    [E, V] = ye.useState(null),
    [q, Z] = ye.useState([]),
    [I, J] = ye.useState(0),
    [G, ne] = ye.useState(null),
    [Q, ge] = ye.useState(""),
    [Ce, b] = ye.useState(null),
    [K, be] = ye.useState(false),
    [He, We] = ye.useState([{ role: "bot", text: "Hola. Escriba un tema (por ejemplo: fracciones, regla de tres, área, división) y le indico cómo se resuelve y qué herramienta usar." }]),
    [fe, Ie] = ye.useState(""),
    [showPotHint, setShowPotHint] = ye.useState(false),
    [fracWrong, setFracWrong] = ye.useState(false),
    [showEcuaHint, setShowEcuaHint] = ye.useState(false),
    [ecuaWrong, setEcuaWrong] = ye.useState(false),
    [showR3Hint, setShowR3Hint] = ye.useState(false),
    [r3Wrong, setR3Wrong] = ye.useState(false),
    [showFactHint, setShowFactHint] = ye.useState(false),
    [factWrong, setFactWrong] = ye.useState(false),
    [mixStep, setMixStep] = ye.useState(0),
    [mixShowHelp, setMixShowHelp] = ye.useState(false),
    [mixInputs, setMixInputs] = ye.useState([]),
    [mixCorrectionData, setMixCorrectionData] = ye.useState(null),
    [potMixStep, setPotMixStep] = ye.useState(0),
    [potMixShowHelp, setPotMixShowHelp] = ye.useState(false),
    [potMixInputs, setPotMixInputs] = ye.useState([]),
    [potMixCorrectionData, setPotMixCorrectionData] = ye.useState(null),
    [activePdf, setActivePdf] = ye.useState(null),
    [showModulosMenu, setShowModulosMenu] = ye.useState(false),
    [manualAviso, setManualAviso] = ye.useState(""),
    [revisado, setRevisado] = ye.useState(false),
    [geoEj, setGeoEj] = ye.useState(null),
    [geoResp, setGeoResp] = ye.useState(""),
    [geoRev, setGeoRev] = ye.useState(false),
    [geoAyuda, setGeoAyuda] = ye.useState(false),
    [despEj, setDespEj] = ye.useState(null),
    [despElegida, setDespElegida] = ye.useState(null),
    [despResp, setDespResp] = ye.useState(""),
    [despRev, setDespRev] = ye.useState(false),
    [despAyuda, setDespAyuda] = ye.useState(false),
    [logEj, setLogEj] = ye.useState(null),
    [logMarcas, setLogMarcas] = ye.useState({}),
    [logRev, setLogRev] = ye.useState(null),
    [logPista, setLogPista] = ye.useState(null),
    [logAuto, setLogAuto] = ye.useState(false),
    [logAyuda, setLogAyuda] = ye.useState(false),
    [dedEj, setDedEj] = ye.useState(null),
    [dedElegida, setDedElegida] = ye.useState(null),
    [xe, Pe] = ye.useState(() => {
      const f = localStorage.getItem("niv-v3");
      return f ? JSON.parse(f) : { history: [], reviews: {} };
    });
  ye.useEffect(() => {
    localStorage.setItem("niv-v3", JSON.stringify(xe));
  }, [xe]);
  // Al cambiar de pestaña, el contenido vuelve al principio (útil al venir de «Aprendo con videos»)
  ye.useEffect(() => {
    const c = document.querySelector(".contenido-principal");
    if (c) c.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [C]);
  const je = (f, S) => {
      Pe((N) => ({
        ...N,
        history: [
          ...N.history,
          { id: f, ok: S, date: new Date().toISOString() },
        ],
        reviews: { ...N.reviews, [f]: Zf(N.history) },
      }));
    },
    et = (f) => {
      O(f);
      const S = Jf(f.digits, f.count || 2);
      (V(S), Z(new Array(S.W).fill("")), J(S.W - 1), P("suma"));
    },
    wsd = (f) => {
      O(f);
      const S = genSumaDec(f.int, f.dec, f.count || 2);
      (V(S), Z(new Array(S.W).fill("")), J(S.W - 1), P("sumadec"));
    },
    er = (f) => {
      O(f);
      if (f.type === "restadec") {
        const S = genRestaDec(f.intA, f.intB, f.dec, f.integerA || false);
        (V(S), Z(new Array(S.CA).fill("")), J(S.CA - 1), P("restadec"));
      } else {
        const S = genResta(f.digitsA, f.digitsB);
        (V(S), Z(new Array(f.digitsA).fill("")), J(f.digitsA - 1), P("resta"));
      }
    },
    hr = (f) => {
      if (!E) return;
      if (E._phase === "verify") {
        // Fase verificación: sumar resultado + sustrayendo = minuendo
        const S = I, cin = S < E.CA - 1 ? E.vCarry[S + 1] : 0;
        const c = (E.dR[S] + E.dBpad[S] + cin) % 10;
        const y = [...q];
        y[S] = f; Z(y);
        if (parseInt(f) === c) { if (I > 0) J(I - 1); else J(-1); }
        return;
      }
      // Fase resta normal
      const S = I;
      const borrow_in = S < E.CA - 1 ? E.borrow[S + 1] : 0;
      const effTop = E.dA[S] - borrow_in;
      const c = effTop < E.dBpad[S] ? effTop + 10 - E.dBpad[S] : effTop - E.dBpad[S];
      const y = [...q]; y[S] = f; Z(y);
      je(d.id, parseInt(f) === c);
      if (parseInt(f) === c) { if (I > 0) J(I - 1); else J(-1); }
    },
    hdr = (f) => {
      if (!E) return;
      if (E._phase === "verify") {
        const S = I, cin = S < E.CA - 1 ? E.vCarry[S + 1] : 0;
        const c = (E.dR[S] + E.dBpad[S] + cin) % 10;
        const y = [...q]; y[S] = f; Z(y);
        if (parseInt(f) === c) { if (I > 0) J(I - 1); else J(-1); }
        return;
      }
      const S = I;
      const borrow_in = S < E.CA - 1 ? E.borrow[S + 1] : 0;
      const effTop = E.dA[S] - borrow_in;
      const c = effTop < E.dBpad[S] ? effTop + 10 - E.dBpad[S] : effTop - E.dBpad[S];
      const y = [...q]; y[S] = f; Z(y);
      je(d.id, parseInt(f) === c);
      if (parseInt(f) === c) { if (I > 0) J(I - 1); else J(-1); }
    },
    wf = (f) => {
      O(f);
      const S = genFraccion(f.op);
      V(S); Z(["", ""]); J(0); setShowPotHint(false); setFracWrong(false); P("fraccion");
    },
    wfm = (f) => {
      O(f);
      const S = genFracMixta();
      V(S); Z(["", ""]); J(0); setMixStep(0); setMixShowHelp(false); setMixInputs([]); setMixCorrectionData(null); P("fracmixta");
    },
    wfp = (f) => {
      O(f);
      const S = genFracPotMix();
      V(S); Z(["", ""]); J(0); setPotMixStep(0); setPotMixShowHelp(false); setPotMixInputs([]); setPotMixCorrectionData(null); P("fracpotmix");
    },
    // Conceptos geométricos: genera un ejercicio de la plantilla f.plantilla
    wgeo = (f) => {
      O(f); setGeoEj(genGeometria(f.plantilla)); setGeoResp(""); setGeoRev(false); setGeoAyuda(false); P("geometria");
    },
    wgeoGrupo = (g) => {
      const lista = GEO_EJERCICIOS.filter((e) => e.grupo === g);
      wgeo(lista[Math.floor(Math.random() * lista.length)]);
    },
    teclaGeo = (k) => {
      setGeoRev(false);
      if (k === "⌫") setGeoResp((x) => x.slice(0, -1));
      else if (k === ",") setGeoResp((x) => (x.includes(",") || x === "" ? x : x + ","));
      else setGeoResp((x) => (x.length < 9 ? x + k : x));
    },
    geoCorrecta = () => geoEj && geoResp !== "" && /^\d+(,\d+)?$/.test(geoResp) && Math.abs(parseFloat(geoResp.replace(",", ".")) - geoEj.respuesta) < 1e-9,
    verificarGeo = () => {
      if (!geoEj || geoResp === "") return;
      setGeoRev(true); je(d.id, geoCorrecta());
    },
    // Despeje de variables: paso 1 (elegir la fórmula despejada) y paso 2 (calcular el valor)
    wdesp = (f) => {
      O(f); setDespEj(genDespeje(f.plantilla)); setDespElegida(null); setDespResp(""); setDespRev(false); setDespAyuda(false); P("despeje");
    },
    wdespAzar = (filtro) => {
      const lista = DESPEJE_EJERCICIOS.filter(filtro);
      wdesp(lista[Math.floor(Math.random() * lista.length)]);
    },
    despPaso1 = () => despEj && despElegida !== null && despEj.opciones[despElegida].ok,
    elegirDesp = (i) => {
      if (despPaso1()) return;
      setDespElegida(i);
      if (!despEj.opciones[i].ok) je(d.id, false);
    },
    teclaDesp = (k) => {
      setDespRev(false);
      if (k === "⌫") setDespResp((x) => x.slice(0, -1));
      else if (k === ",") setDespResp((x) => (x.includes(",") || x === "" ? x : x + ","));
      else setDespResp((x) => (x.length < 9 ? x + k : x));
    },
    despCorrecta = () => despEj && despResp !== "" && /^\d+(,\d+)?$/.test(despResp) && Math.abs(parseFloat(despResp.replace(",", ".")) - despEj.respuesta) < 1e-9,
    verificarDesp = () => {
      if (!despEj || despResp === "") return;
      setDespRev(true); je(d.id, despCorrecta());
    },
    // Razonamiento deductivo 1: tabla lógica. Marcas: 1 = ✗, 2 = ✓ (por clave canónica de casilla)
    wlog = (f) => {
      O(f); setLogEj(genTablaLogica(f.nivel)); setLogMarcas({}); setLogRev(null); setLogPista(null); setLogAyuda(false); P("tablalogica");
    },
    nomCasilla = (k) => k.split("|").map((t) => { const [c, i] = t.split(":").map(Number); return logEj.cats[c].items[i]; }).join(" – "),
    marcarLog = (k) => {
      setLogRev(null); setLogPista(null);
      setLogMarcas((m) => {
        const nuevo = { ...m, [k]: ((m[k] || 0) + 1) % 3 };
        if (!nuevo[k]) delete nuevo[k];
        // Con «completar ✗» activo, un ✓ pone ✗ en las casillas vacías de su fila y su columna dentro del bloque
        if (logAuto && nuevo[k] === 2) {
          const [[c1, i], [c2, j]] = k.split("|").map((t) => t.split(":").map(Number));
          for (let x = 0; x < logEj.n; x++) {
            const fila = logicaClave(c1, i, c2, x), col = logicaClave(c1, x, c2, j);
            if (x !== j && !nuevo[fila]) nuevo[fila] = 1;
            if (x !== i && !nuevo[col]) nuevo[col] = 1;
          }
        }
        return nuevo;
      });
    },
    verificarLog = () => {
      const total = (logEj.K * (logEj.K - 1) / 2) * logEj.n;
      let bien = 0, malas = 0;
      for (const [k, v] of Object.entries(logMarcas)) if (v === 2) { if (logEj.verdad(k)) bien++; else malas++; }
      const ok = bien === total && malas === 0;
      setLogRev({ ok, bien, total, malas }); setLogPista(null); je(d.id, ok);
    },
    pistaLog = () => {
      const mal = Object.entries(logMarcas).find(([k, v]) => (v === 2) !== logEj.verdad(k));
      if (mal) { setLogPista({ k: mal[0], texto: `Revise la casilla ${nomCasilla(mal[0])}: esa marca no concuerda con las pistas.` }); return; }
      const paso = logEj.pasos.find((st) => logMarcas[st.k] !== (st.val ? 2 : 1));
      setLogPista(paso ? { k: paso.k, texto: `${paso.razon.charAt(0).toUpperCase() + paso.razon.slice(1)}: marque ${paso.val ? "✓" : "✗"} en ${paso.a} – ${paso.b}.` } : { k: null, texto: "Ya marcó todo lo que se deduce. Pulse «Verificar»." });
    },
    // Tabla matricial en escalera: filas = productores y luego las categorías de la última a la segunda
    tablaLog = (ej) => {
      const n = ej.n, K = ej.K, cols = Array.from({ length: K - 1 }, (_, c) => c + 1), filas = [0, ...Array.from({ length: K - 2 }, (_, t) => K - 1 - t)];
      const borde = "1px solid #6c757d", grueso = "2px solid #adb5bd";
      const th = (txt, extra = {}, attrs = {}) => v.jsx("th", { ...attrs, style: { padding: "2px 4px", fontSize: "0.75rem", color: "#e9ecef", fontWeight: "bold", ...extra }, children: txt });
      const celda = (k, i, j) => {
        const m = logMarcas[k] || 0, pista = logPista && logPista.k === k;
        return v.jsx("td", { style: { borderTop: i === 0 ? grueso : borde, borderLeft: j === 0 ? grueso : borde, borderRight: borde, borderBottom: borde, padding: 0 },
          children: v.jsx("button", { onClick: () => marcarLog(k), "aria-label": nomCasilla(k), title: nomCasilla(k),
            style: { width: "2.1rem", height: "2.1rem", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer", border: pista ? "3px solid #facc15" : "none",
              background: m === 2 ? "rgba(34,197,94,0.35)" : m === 1 ? "rgba(239,68,68,0.18)" : "rgba(255,255,255,0.05)", color: m === 2 ? "#4ade80" : "#fca5a5" },
            children: m === 2 ? "✓" : m === 1 ? "✗" : "" }) }, k);
      };
      return v.jsx("div", { style: { overflowX: "auto" }, children: v.jsxs("table", { style: { borderCollapse: "collapse", margin: "0 auto" }, children: [
        v.jsxs("thead", { children: [
          v.jsxs("tr", { children: [v.jsx("th", { colSpan: 2 }), ...cols.map((c) => th(ej.cats[c].nombre, { color: "#fde047", borderLeft: grueso }, { colSpan: n, key: "h" + c }))] }),
          v.jsxs("tr", { children: [v.jsx("th", { colSpan: 2 }), ...cols.flatMap((c) => ej.cats[c].items.map((it, j) => th(it, { writingMode: "vertical-rl", transform: "rotate(180deg)", height: "6.5rem", verticalAlign: "bottom", textAlign: "left", borderLeft: j === 0 ? grueso : "none" }, { key: c + "-" + j })))] }),
        ] }),
        v.jsx("tbody", { children: filas.flatMap((r) => ej.cats[r].items.map((it, i) => v.jsxs("tr", { children: [
          i === 0 && th(ej.cats[r].nombre, { color: "#fde047", writingMode: "vertical-rl", transform: "rotate(180deg)", borderTop: grueso }, { rowSpan: n, key: "cat" }),
          th(it, { textAlign: "right", whiteSpace: "nowrap", borderTop: i === 0 ? grueso : "none" }, { key: "nom" }),
          ...cols.filter((c) => r === 0 || c < r).flatMap((c) => ej.cats[c].items.map((_, j) => celda(logicaClave(r, i, c, j), i, j))),
        ] }, r + "-" + i))) }),
      ] }) });
    },
    // Razonamiento deductivo 2: ¿qué se puede concluir?
    wded = (f) => { O(f); setDedEj(genDeduccion(f.tipo)); setDedElegida(null); P("deduccion"); },
    elegirDed = (i) => { if (dedElegida !== null) return; setDedElegida(i); je(d.id, !!dedEj.opciones[i].ok); },
    // Dibujo SVG de la figura del ejercicio (rectángulo, triángulo rectángulo o caja)
    figuraGeo = (f) => {
      const W = 300, H = 180, txt = (x, y, t, anc = "middle") => v.jsx("text", { x, y, fill: "#fde047", fontSize: 13, fontWeight: "bold", textAnchor: anc, children: t });
      const linea = "#67e8f9", relleno = "rgba(34,197,94,0.18)";
      let hijos = [];
      if (f.tipo === "rect" || f.tipo === "tri") {
        const A = f.tipo === "rect" ? f.l : f.b, B = f.tipo === "rect" ? f.a : f.h;
        const tri = f.tipo === "tri", k = Math.min((tri ? 170 : 200) / A, 120 / B), w = Math.max(A * k, 40), h = Math.max(B * k, 22);
        const x0 = tri ? Math.max(85, (W - w) / 2 + 30) : (W - w) / 2 - 10, y0 = (H - h) / 2 - 8;
        hijos = f.tipo === "rect"
          ? [v.jsx("rect", { x: x0, y: y0, width: w, height: h, fill: relleno, stroke: linea, strokeWidth: 2.5 }),
             txt(x0 + w / 2, y0 + h + 20, `${f.l} ${f.u}`), txt(x0 + w + 8, y0 + h / 2 + 5, `${f.a} ${f.u}`, "start")]
          : [v.jsx("polygon", { points: `${x0},${y0} ${x0},${y0 + h} ${x0 + w},${y0 + h}`, fill: relleno, stroke: linea, strokeWidth: 2.5 }),
             v.jsx("rect", { x: x0, y: y0 + h - 12, width: 12, height: 12, fill: "none", stroke: linea, strokeWidth: 1.5 }),
             txt(x0 + w / 2, y0 + h + 20, `b = ${f.b} ${f.u}`), txt(x0 - 8, y0 + h / 2 + 5, `h = ${f.h} ${f.u}`, "end")];
      } else {
        const k = Math.min(150 / f.l, 90 / f.h, 70 / f.a), w = Math.max(f.l * k, 40), h = Math.max(f.h * k, 26), p = Math.max(f.a * k * 0.6, 16);
        const x0 = (W - w - p) / 2, y0 = (H - h - p) / 2 + p - 6;
        const cara = (pts, op) => v.jsx("polygon", { points: pts, fill: `rgba(59,130,246,${op})`, stroke: linea, strokeWidth: 2 });
        hijos = [cara(`${x0},${y0} ${x0 + p},${y0 - p} ${x0 + w + p},${y0 - p} ${x0 + w},${y0}`, 0.3),
                 cara(`${x0 + w},${y0} ${x0 + w + p},${y0 - p} ${x0 + w + p},${y0 + h - p} ${x0 + w},${y0 + h}`, 0.2),
                 cara(`${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 + h} ${x0},${y0 + h}`, 0.12),
                 txt(x0 + w / 2, y0 + h + 20, `${f.l} ${f.u}`), txt(x0 - 8, y0 + h / 2 + 5, `${f.h} ${f.u}`, "end"),
                 txt(x0 + w + p / 2 + 10, y0 + h - p / 2 + 4, `${f.a} ${f.u}`, "start")];
      }
      return v.jsx("svg", { viewBox: `0 0 ${W} ${H}`, style: { width: "100%", maxWidth: "360px", display: "block", margin: "0 auto" }, role: "img", "aria-label": "Figura del ejercicio", children: hijos });
    },
    wr3 = (f) => {
      O(f);
      const S = genR3Directa(f.plantilla);
      V(S); Z([""]); J(0); setShowR3Hint(false); setR3Wrong(false); P("r3directa");
    },
    hfr3 = (key) => {
      if (!E || I === -1) return;
      if (key === "⌫") {
        const y = [...q]; y[0] = y[0].slice(0, -1); Z(y);
        setR3Wrong(false); return;
      }
      if (key === "✓") {
        if (!q[0]) return;
        const inp = parseInt(q[0]);
        if (inp === E.X) {
          je(d.id, true); setR3Wrong(false); J(-1);
        } else {
          je(d.id, false); setR3Wrong(true); setShowR3Hint(true);
        }
        return;
      }
      if (q[0].length >= 6) return;
      const y = [...q]; y[0] = y[0] + key; Z(y);
      setR3Wrong(false);
    },
    weq = (f) => {
      O(f);
      const S = genEcuaCuad(f.plantilla);
      V(S); Z(["", ""]); J(0); setShowEcuaHint(false); setEcuaWrong(false); P("ecuacuad");
    },
    hfeq = (key) => {
      if (!E || I === -1) return;
      if (key === "⌫") {
        const y = [...q]; y[I] = y[I].slice(0, -1); Z(y);
        setEcuaWrong(false);
        return;
      }
      if (key === "✓") {
        if (!q[I]) return;
        const inp = parseInt(q[I]);
        if (I === 0) {
          // x₁ debe ser la raíz menor
          if (inp === E.r1) {
            setEcuaWrong(false);
            Z([q[0], ""]); J(1);
          } else {
            setEcuaWrong(true);
            setShowEcuaHint(true);
            je(d.id, false);
          }
          return;
        }
        // I === 1: x₂ debe ser la raíz mayor
        if (inp === E.r2) {
          je(d.id, true);
          setEcuaWrong(false);
          J(-1);
        } else {
          setEcuaWrong(true);
          setShowEcuaHint(true);
          je(d.id, false);
        }
        return;
      }
      if (q[I].length >= 3) return;
      const y = [...q]; y[I] = y[I] + key; Z(y);
      setEcuaWrong(false);
    },
    wfact = (f) => {
      O(f);
      const S = genFactorizacion(f.nivel);
      V(S); Z(["", ""]); J(0); setShowFactHint(false); setFactWrong(false); P("factorizacion");
    },
    hffact = (key) => {
      if (!E || I === -1) return;
      if (key === "⌫") {
        const y = [...q]; y[I] = y[I].slice(0, -1); Z(y);
        setFactWrong(false); return;
      }
      if (key === "±") {
        const y = [...q];
        if (y[I].startsWith("-")) y[I] = y[I].slice(1);
        else if (y[I].length > 0) y[I] = "-" + y[I];
        Z(y); setFactWrong(false); return;
      }
      if (key === "✓") {
        if (!q[I] || q[I] === "-") return;
        const inp = parseInt(q[I]);
        if (I === 0) {
          // primera raíz debe ser la menor
          if (inp === E.r1) { setFactWrong(false); Z([q[0], ""]); J(1); }
          else { setFactWrong(true); setShowFactHint(true); je(d.id, false); }
          return;
        }
        // I === 1: segunda raíz debe ser la mayor
        if (inp === E.r2) { je(d.id, true); setFactWrong(false); J(-1); }
        else { setFactWrong(true); setShowFactHint(true); je(d.id, false); }
        return;
      }
      if (q[I].replace("-","").length >= 2) return;
      const y = [...q]; y[I] = y[I] + key; Z(y);
      setFactWrong(false);
    },
    hf = (key) => {
      if (!E || I === -1) return;
      if (key === "⌫") {
        const y = [...q]; y[I] = y[I].slice(0, -1); Z(y);
        setFracWrong(false);
        return;
      }
      if (key === "✓") {
        if (!q[I]) return;
        if (I === 1 && parseInt(q[I]) === 0) return; // denominador no puede ser 0
        if (I === 0) { J(1); setFracWrong(false); return; }
        // Verificar respuesta completa (numerador + denominador)
        const inputN = parseInt(q[0]), inputD = parseInt(q[1]);
        const g = _gcd(Math.abs(inputN), inputD);
        const ansN = E.ans?.n ?? 0;
        const ansD = E.ans?.d ?? 1;
        const isCorrect = (inputN / g) === ansN && (inputD / g) === ansD;
        je(d.id, isCorrect);
        if (isCorrect) {
          setFracWrong(false);
          J(-1);
        } else {
          setFracWrong(true);
          setShowPotHint(true); // mostrar ayuda automáticamente al equivocarse
        }
        return;
      }
      if (q[I].length >= 4) return;
      const y = [...q]; y[I] = y[I] + key; Z(y);
      setFracWrong(false);
    },
    hfm = (key) => {
      if (!E) return;
      const currentStepData = E.steps[mixStep];
      if (!currentStepData) return;
      if (key === "⌫") {
        const y = [...q]; y[I] = y[I].slice(0, -1); Z(y); 
        if (mixCorrectionData) setMixCorrectionData(null);
        return;
      }
      if (key === "✓") {
        if (!q[I]) return;
        if (I === 1 && parseInt(q[I]) === 0) return;
        if (I === 0) { J(1); return; }
        const inputN = parseInt(q[0]), inputD = parseInt(q[1]);
        const g = _gcd(Math.abs(inputN), inputD);
        const simpN = inputN / g, simpD = inputD / g;
        const isCorrect = simpN === currentStepData.result.n && simpD === currentStepData.result.d;
        if (isCorrect) {
          const newInputs = [...mixInputs, { n: simpN, d: simpD, step: mixStep }];
          setMixInputs(newInputs);
          setMixShowHelp(false);
          setMixCorrectionData(null);
          if (mixStep < E.steps.length - 1) {
            setMixStep(mixStep + 1);
            Z(["", ""]);
            J(0);
          } else {
            J(-1);
          }
        } else {
          setMixShowHelp(true);
          setMixCorrectionData({ inputN, inputD, simpN, simpD, correctN: currentStepData.result.n, correctD: currentStepData.result.d, q0: q[0], q1: q[1] });
        }
        return;
      }
      if (q[I].length >= 4) return;
      const y = [...q];
      y[I] = y[I] + key;
      Z(y);
      if (mixCorrectionData) setMixCorrectionData(null);
    },
    applyMixCorrection = () => {
      if (!mixCorrectionData) return;
      setMixInputs([...mixInputs, { n: mixCorrectionData.correctN, d: mixCorrectionData.correctD, step: mixStep }]);
      setMixShowHelp(false);
      setMixCorrectionData(null);
      if (mixStep < E.steps.length - 1) {
        setMixStep(mixStep + 1);
        Z(["", ""]);
        J(0);
      } else {
        J(-1);
      }
    },
    hfp = (key) => {
      if (!E) return;
      const currentStepData = E.steps[potMixStep];
      if (!currentStepData) return;
      if (key === "⌫") {
        const y = [...q];
        y[I] = y[I].slice(0, -1);
        Z(y);
        if (potMixCorrectionData) setPotMixCorrectionData(null);
        return;
      }
      if (key === "✓") {
        if (!q[I]) return;
        if (I === 1 && parseInt(q[I]) === 0) return;
        if (I === 0) { J(1); return; }
        const inputN = parseInt(q[0]);
        const inputD = parseInt(q[1]);
        const g = _gcd(Math.abs(inputN), inputD);
        const simpN = inputN / g;
        const simpD = inputD / g;
        const isCorrect = simpN === currentStepData.result.n && simpD === currentStepData.result.d;
        if (isCorrect) {
          setPotMixInputs([...potMixInputs, { n: simpN, d: simpD, step: potMixStep }]);
          setPotMixShowHelp(false);
          setPotMixCorrectionData(null);
          if (potMixStep < E.steps.length - 1) {
            setPotMixStep(potMixStep + 1);
            Z(["", ""]);
            J(0);
          } else {
            J(-1);
          }
        } else {
          setPotMixShowHelp(true);
          setPotMixCorrectionData({ inputN, inputD, simpN, simpD, correctN: currentStepData.result.n, correctD: currentStepData.result.d, q0: q[0], q1: q[1] });
        }
        return;
      }
      if (q[I].length >= 4) return;
      const y = [...q];
      y[I] = y[I] + key;
      Z(y);
      if (potMixCorrectionData) setPotMixCorrectionData(null);
    },
    applyPotMixCorrection = () => {
      if (!potMixCorrectionData) return;
      setPotMixInputs([...potMixInputs, { n: potMixCorrectionData.correctN, d: potMixCorrectionData.correctD, step: potMixStep }]);
      setPotMixShowHelp(false);
      setPotMixCorrectionData(null);
      if (potMixStep < E.steps.length - 1) {
        setPotMixStep(potMixStep + 1);
        Z(["", ""]);
        J(0);
      } else {
        J(-1);
      }
    },
    Qe = (f) => {
      (O(f), ne(qf(f.id)), ge(""), setRevisado(false), P("expr_ej"));
    },
    tt = (f) => {
      O(f);
      const S = f.problemas || [];
      (b(S[Math.floor(Math.random() * S.length)]), ge(""), setRevisado(false), P("prob"));
    },
    ttf = (f) => {
      O(f);
      const S = f.problemas || [];
      b(S[Math.floor(Math.random() * S.length)]); Z(["",""]); J(0); P("probfrac");
    },
    hpf = (key) => {
      if (!Ce) return;
      if (key === "⌫") { const y = [...q]; y[I] = y[I].slice(0,-1); Z(y); return; }
      if (key === "✓") {
        if (!q[I]) return;
        if (I === 1 && parseInt(q[I]) === 0) return;
        if (I === 0) { J(1); return; }
        const iN = parseInt(q[0]), iD = parseInt(q[1]);
        const g = _gcd(Math.abs(iN), iD);
        je(d.id, (iN/g) === Ce.respuesta.n && (iD/g) === Ce.respuesta.d);
        J(-1); return;
      }
      if (q[I].length >= 4) return;
      const y = [...q]; y[I] = y[I] + key; Z(y);
    },
    rfrac = (texto) => {
      const parts = texto.split(/\[(\d+)\/(\d+)\]/);
      return parts.reduce((acc, p, i) => {
        if (i % 3 === 0) { if (p) acc.push(v.jsx("span", { children: p }, "t" + i)); }
        else if (i % 3 === 1) {
          const num = parts[i], den = parts[i + 1];
          acc.push(v.jsx("span", {
            style: { display: "inline", background: "rgba(251,191,36,0.25)", border: "1px solid rgba(251,191,36,0.6)", borderRadius: "0.3rem", padding: "1px 5px", fontWeight: "bold", fontFamily: "monospace", fontSize: "0.95em", color: "#fde68a", whiteSpace: "nowrap", verticalAlign: "baseline" },
            children: `${num}/${den}`,
          }, "f" + i));
        }
        return acc;
      }, []);
    },
    nt = (f) => {
      if (!E) return;
      const S = I,
        c = E.dAnswer[S],
        y = [...q];
      ((y[S] = f),
        Z(y),
        je(d.id, parseInt(f) === c),
        parseInt(f) === c && (I > 0 ? J(I - 1) : J(-1)));
    },
    nsd = (f) => {
      if (!E) return;
      const S = I, c = E.dAnswer[S], y = [...q];
      ((y[S] = f), Z(y),
        je(d.id, parseInt(f) === c),
        parseInt(f) === c && (I > 0 ? J(I - 1) : J(-1)));
    },
    wt = (f) => {
      O(f);
      const S = Nf(f.digits);
      (V(S), Z(new Array(S.R).fill("")), J(S.R - 1), P("mult"));
    },
    ht = (f) => {
      if (!E) return;
      const S = I,
        se = E.R - E.C,
        ae = S >= se ? E.dA[S - se] : 0,
        N = S < E.R - 1 ? E.carry[S + 1] : 0,
        c = (ae * E.b + N) % 10,
        y = [...q];
      ((y[S] = f),
        Z(y),
        je(d.id, parseInt(f) === c),
        parseInt(f) === c && (I > 0 ? J(I - 1) : J(-1)));
    },
    wm = (f) => {
      O(f);
      const S = Gm(f.digitsA, f.digitsB);
      (V(S),
        Z(new Array(S.parts[0].len).fill("")),
        J(S.parts[0].len - 1),
        P("multm"));
    },
    hm = (f) => {
      if (!E) return;
      const S = I,
        ph = E.phase;
      if (ph >= E.CB) {
        const c = E.dR[S], y = [...q];
        y[S] = f;
        Z(y);
        je(d.id, parseInt(f) === c);
        if (parseInt(f) === c) {
          if (I > 0) J(I - 1);
          else J(-1);
        }
        return;
      }
      const part = E.parts[ph],
        _ad = S >= 1 ? E.dA[S - 1] : 0,
        _cin = S < part.len - 1 ? part.carry[S + 1] : 0,
        c = (_ad * part.bDigit + _cin) % 10,
        y = [...q];
      ((y[S] = f), Z(y), je(d.id, parseInt(f) === c));
      if (parseInt(f) === c) {
        if (I > 0) J(I - 1);
        else {
          const _dn = [...E.done, [...y]],
            _nx = ph + 1;
          if (_nx < E.CB) {
            (V({ ...E, phase: _nx, done: _dn }),
              Z(new Array(E.parts[_nx].len).fill("")),
              J(E.parts[_nx].len - 1));
          } else {
            (V({ ...E, phase: _nx, done: _dn }),
              Z(new Array(E.RF).fill("")),
              J(E.RF - 1));
          }
        }
      }
    },
    wd = (f) => {
      O(f);
      const S = genDiv(f.digitsA, f.digitsB);
      V(S); Z(new Array(S.QLen).fill("")); J(0); P("divg");
    },
    wdd = (f) => {
      O(f);
      const S = genDivD(f.digitsA, f.digitsB);
      V(S); Z(new Array(S.QLen).fill("")); J(0); P("divg");
    },
    wdr = (f) => {
      O(f);
      const S = genDivR(f.digitsA, f.digitsB);
      V(S); Z(new Array(S.QLen).fill("")); J(0); P("divg");
    },
    wpi = (f) => {
      O(f);
      const probs = f.problemas;
      const prob = probs[Math.floor(Math.random() * probs.length)];
      let S;
      if (prob.op === "suma") {
        S = prob.nums ? genSumaMulti(prob.nums) : genSumaAB(prob.a, prob.b);
        S._probi = "suma"; S._pTexto = prob.texto;
        Z(new Array(S.W).fill("")); J(S.W - 1);
      } else if (prob.op === "mult") {
        S = genMultAB(prob.a, prob.b);
        S._probi = "mult"; S._pTexto = prob.texto;
        if (S._isMult1) {
          Z(new Array(S.R).fill("")); J(S.R - 1);
        } else {
          Z(new Array(S.parts[0].len).fill("")); J(S.parts[0].len - 1);
        }
      } else if (prob.op === "div") {
        S = genDivAB(prob.a, prob.b);
        S._probi = "div"; S._pTexto = prob.texto;
        Z(new Array(S.QLen).fill("")); J(0);
      }
      V(S); P("probi");
    },
    hspi = (f) => {
      if (!E) return;
      const S = I, c = E.dAnswer[S], y = [...q];
      y[S] = f; Z(y);
      je(d.id, parseInt(f) === c);
      if (parseInt(f) === c) { if (I > 0) J(I - 1); else J(-1); }
    },
    hpi = (f) => {
      if (!E) return;
      if (E._probi === "suma") hspi(f);
      else if (E._probi === "mult") {
        if (E._isMult1) ht(f);
        else hm(f);
      } else if (E._probi === "div") hd(f);
    },
    hd = (f) => {
      if (!E) return;
      const S = I;
      if (E.isRemainder && E.phase === 1) {
        const c = E.dRemainder[S], y = [...q];
        y[S] = f; Z(y);
        je(d.id, parseInt(f) === c);
        if (parseInt(f) === c) {
          if (I < E.RLen - 1) J(I + 1);
          else J(-1);
        }
        return;
      }
      const c = E.dQuotient[S], y = [...q];
      y[S] = f; Z(y);
      je(d.id, parseInt(f) === c);
      if (parseInt(f) === c) {
        if (I < E.QLen - 1) J(I + 1);
        else if (E.isRemainder) {
          V({ ...E, phase: 1 });
          Z(new Array(E.RLen).fill(""));
          J(0);
        } else J(-1);
      }
    },
    Me = () => {
      const f = Number(Q) === G.answer;
      je(d.id, f);
    },
    Ke = () => {
      const f = Number(Q) === Ce.respuesta;
      je(d.id, f);
    },
    // Ayuda rápida: reconoce palabras clave y sugiere la herramienta donde se practica
    Ye = () => {
      if (!fe.trim()) return;
      const f = fe.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const temas = [
        [/regla de tres|proporci|dosis|vacun|ivermectina|concentrado|semilla|fertiliz|riego/, "Regla de tres directa: organice los datos en una tabla de dos columnas; si al aumentar una magnitud aumenta la otra, x = (dato nuevo × valor conocido) ÷ dato conocido.", "r3directa_cat"],
        [/cuadratic|ecuacion|corral|parcela|estanque|invernadero/, "Ecuación cuadrática: plantee x(S − x) = A, llévela a x² − Sx + A = 0 y busque dos números que multiplicados den A y sumados den S.", "algebra"],
        [/factoriz|trinomio|po-?shen/, "Factorización x² + bx + c: busque dos números que multiplicados den c y sumados den b; con el método de Po-Shen Loh, m = −b/2, u² = m² − c y las raíces son m − u y m + u.", "factorizacion_cat"],
        [/\barea|perimetro|volumen|hectarea|cerca|poste|tanque|bebedero|geometr/, "Perímetro: suma de los lados, P = 2(l + a). Área del rectángulo: l · a; del triángulo: b · h / 2; 1 ha = 10.000 m². Volumen de una caja: l · a · h; 1 m³ = 1.000 L.", "geometria_cat"],
        [/fraccion|numerador|denominador|potencia/, "Fracciones: para sumar o restar use el mínimo común denominador; para multiplicar, numerador por numerador y denominador por denominador; para dividir, multiplique por el inverso. Simplifique al final.", "fracciones"],
        [/divi/, "División: tome las primeras cifras del dividendo que alcancen para el divisor, escriba cuántas veces cabe, multiplique, reste y baje la cifra siguiente.", "divs"],
        [/multipl|producto|por \d/, "Multiplicación en columna: multiplique cada cifra de abajo por todas las de arriba, de derecha a izquierda, llevando las decenas; luego sume los productos parciales.", "mults"],
        [/\brest|prestamo|diferencia/, "Resta en columna: de derecha a izquierda; si la cifra de arriba es menor, pida prestada una decena a la columna vecina. Compruebe sumando resultado + sustraendo = minuendo.", "restas"],
        [/\bsum|acarreo|llevar/, "Suma en columna: alinee las cifras por la derecha (y la coma decimal), sume de derecha a izquierda y, si una columna pasa de 9, escriba las unidades y lleve la decena a la columna siguiente.", "sumas"],
        [/signo|parentesis|corchete|llave|agrupaci|jerarquia/, "Signos de agrupación: resuelva primero lo de adentro (paréntesis, luego corchetes, luego llaves); recuerde que −(−a) = +a.", "expr"],
        [/despej|formula/, "Despeje: deje la incógnita sola haciendo la misma operación inversa a ambos lados de la igualdad.", "despeje_cat"],
        [/razonamiento|logic|deducci/, "Razonamiento deductivo: anote las premisas, descarte con una tabla las opciones imposibles y concluya solo lo que se sigue de los datos.", "razonamiento_cat"],
        [/problema|tienda|compra|venta|finca|animal|ganado|engorde/, "Problemas: lea el enunciado, identifique los datos y la pregunta, decida las operaciones (por ejemplo, cantidad × precio y luego sumar) y compruebe que la respuesta tenga sentido.", "probs"],
        [/video/, "En «Aprendo con videos» están los videos del profesor organizados por tema.", "aprendo_videos"],
        [/manual|ayuda|como se usa/, "El manual de usuario explica cada herramienta paso a paso.", "manual_usuario"],
        [/modulo|guia|pdf/, "Las guías de los módulos 1 a 7 están en «Módulos Oficiales (PDF)».", "guias_modulos_pdf"],
      ];
      const t = temas.find(([re]) => re.test(f));
      const S = t
        ? { role: "bot", text: t[1], ir: t[2] }
        : { role: "bot", text: "No reconocí el tema. Pruebe con palabras como suma, resta, multiplicación, división, fracciones, regla de tres, área, ecuación, factorización, signos o problemas." };
      (We([...He, { role: "user", text: fe }, S]), Ie(""));
    },
    // Renderiza una fracción con barra horizontal: n sobre d
    // hl: "" | "n" | "d" | "ok" | "err"   sm: true = tamaño pequeño
    // Tarjeta de video YouTube: miniatura clicable que abre el video en nueva pestaña
    ytCard = (videoId, title = "") =>
      v.jsxs("a", {
        href: `https://www.youtube.com/watch?v=${videoId}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "yt-card",
        title: "Abrir el video en YouTube (pestaña nueva)",
        children: [
          v.jsxs("span", {
            className: "yt-card-mini",
            children: [
              v.jsx("img", { src: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`, alt: "", loading: "lazy" }),
              v.jsx("span", { className: "yt-card-play", children: "▶" }),
            ],
          }),
          v.jsxs("span", {
            className: "yt-card-texto",
            children: [
              v.jsx("span", { className: "yt-card-titulo", children: (typeof VIDEOS_CANAL !== "undefined" && VIDEOS_CANAL.titulos[videoId]) || title.replace(/^▶\s*/, "").replace(/\s*—\s*Ver en YouTube$/, "") || "Ver en YouTube" }),
              v.jsx("span", { className: "yt-card-sub", children: "YouTube · se abre en una pestaña nueva" }),
            ],
          }),
        ],
      }),
    // Función para renderizar LaTeX - versión segura
    latexSpan = (latex, className = "") => {
      // Verificar que latex sea un string válido
      if (!latex || typeof latex !== 'string') {
        return v.jsx("span", { className, children: "..." });
      }
      // Limpiar valores undefined/null que podrían haberse colado
      const cleanLatex = latex.replace(/undefined|null/g, '?');
      
      try {
        if (typeof window !== 'undefined' && window.katex) {
          const html = window.katex.renderToString(cleanLatex, { throwOnError: false, strict: false });
          return v.jsx("span", { className, dangerouslySetInnerHTML: { __html: html } });
        }
      } catch (e) { 
        console.error('KaTeX error:', e, 'Latex:', cleanLatex);
      }
      
      // Fallback visual simple
      const simpleText = cleanLatex
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
        .replace(/\\left\(|\\right\)/g, '')
        .replace(/\\left\\\{|\\right\\\}/g, '')
        .replace(/\\\[|\\\]/g, '')
        .replace(/\\times/g, '×')
        .replace(/\\div/g, '÷')
        .replace(/\\rightarrow/g, '→')
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\/g, '');
      return v.jsx("span", { className: className + " font-mono", children: simpleText });
    },
    // Fracción como LaTeX
    fracLatex = (n, d) => `\\frac{${n}}{${d}}`,
    // Fracción con paréntesis para potenciación
    fracPotLatex = (n, d, exp) => `\\left(\\frac{${n}}{${d}}\\right)^{${exp}}`,
    // Función fracFn mejorada con KaTeX
    fracFn = (n, d, hl, sm) => {
      const latex = fracLatex(n, d);
      const baseClasses = "inline-flex items-center justify-center ";
      const highlightClasses = hl === "n" ? "bg-yellow-500/30 rounded px-1" : hl === "d" ? "bg-yellow-500/30 rounded px-1" : hl === "ok" ? "bg-green-500/30 rounded px-1" : hl === "err" ? "bg-red-500/30 rounded px-1" : "";
      const cls = baseClasses + highlightClasses + (sm ? " text-base" : " text-2xl");
      try {
        if (typeof window !== 'undefined' && window.katex) {
          const html = window.katex.renderToString(latex, { throwOnError: false, strict: false });
          return v.jsx("span", { className: cls, dangerouslySetInnerHTML: { __html: html } });
        }
      } catch (e) {
        console.error('KaTeX fracFn error:', e);
      }
      return v.jsx("span", { className: cls + " font-mono", children: `${n}/${d}` });
    },
    Ee = ((re = E == null ? void 0 : E.dA) == null ? void 0 : re.length) || 2;
  return v.jsxs("div", {
    className: "min-h-screen text-white",
    style: {
      backgroundColor: "#1e2227",
      backgroundImage: "linear-gradient(135deg, #1e2227 0%, #24292e 50%, #2b3036 100%)",
      color: "#ffffff"
    },
    children: [
      v.jsx("header", {
        style: {
          backgroundColor: "#2b3035",
          borderBottom: "1px solid #495057",
          padding: "0.85rem 1.25rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
        },
        children: v.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-3",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                v.jsx("div", { style: { fontSize: "2.5rem", lineHeight: 1 }, children: "🧠" }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "text-xl font-bold text-white",
                      children: "Matemáticas en Técnicas Agropecuarias",
                    }),
                    v.jsx("p", {
                      style: { fontSize: "0.75rem", color: "#adb5bd" },
                      children: "Aprende con práctica",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              style: { display: "flex", alignItems: "center", gap: "0.5rem" },
              children: [
                v.jsx("button", {
                  onClick: () => P("home"),
                  style: {
                    padding: "0.4rem 0.85rem",
                    background: C === "home" ? "#007bff" : "#495057",
                    border: "1px solid " + (C === "home" ? "#007bff" : "#6c757d"),
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "🏠 Inicio",
                }),
                v.jsx("button", {
                  onClick: () => P("introduccion"),
                  style: {
                    padding: "0.4rem 0.85rem",
                    background: C === "introduccion" ? "#007bff" : "#495057",
                    border: "1px solid " + (C === "introduccion" ? "#007bff" : "#6c757d"),
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "📖 Introducción",
                }),
                v.jsx("button", {
                  onClick: () => P("aprendo_videos"),
                  style: {
                    padding: "0.4rem 0.85rem",
                    background: C === "aprendo_videos" ? "#007bff" : "#495057",
                    border: "1px solid " + (C === "aprendo_videos" ? "#007bff" : "#6c757d"),
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "▶ Aprendo con videos",
                }),
                v.jsxs("div", {
                  style: { position: "relative" },
                  children: [
                    v.jsx("button", {
                      onClick: () => setShowModulosMenu((m) => !m),
                      style: {
                        padding: "0.4rem 0.9rem",
                        background: "#495057",
                        border: "1px solid #6c757d",
                        borderRadius: "0.5rem",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      },
                      children: "📚 Módulos PDF ▾",
                    }),
                    showModulosMenu && v.jsxs("div", {
                      style: {
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        right: 0,
                        background: "#2b3035",
                        border: "1px solid #495057",
                        borderRadius: "0.5rem",
                        minWidth: "260px",
                        zIndex: 9999,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                        overflow: "hidden",
                      },
                      children: [
                        { label: "Módulo 1 — Conceptos Básicos", file: "PDF/Practica_Modulo1_Conceptos_Basicos_Matematica.pdf" },
                        { label: "Módulo 2 — Importancia Números", file: "PDF/Practica_Modulo2_Importancia_Numeros.pdf" },
                        { label: "Módulo 3 — Regla de Tres", file: "PDF/Practica_Modulo3_Regla_de_Tres.pdf" },
                        { label: "Módulo 4 — Fraccionarios y Decimales", file: "PDF/Practica_Modulo4_Fraccionarios_Decimales.pdf" },
                        { label: "Módulo 5 — Potenciación y Proporciones", file: "PDF/Practica_Modulo5_Potenciacion_Proporciones.pdf" },
                        { label: "Módulo 6 — Ecuaciones Matemáticas", file: "PDF/Practica_Modulo6_Ecuaciones_Matematicas_Basicas.pdf" },
                        { label: "Módulo 7 — Conversión de Unidades", file: "PDF/Practica_Modulo7_Conversion_Unidades.pdf" },
                      ].map((m, i) =>
                        v.jsx("button", {
                          onClick: () => { setActivePdf(m); setShowModulosMenu(false); },
                          style: {
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            padding: "0.65rem 1rem",
                            background: "transparent",
                            border: "none",
                            borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.07)" : "none",
                            color: "#ffffff",
                            fontSize: "0.82rem",
                            cursor: "pointer",
                          },
                          onMouseEnter: (e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; },
                          onMouseLeave: (e) => { e.currentTarget.style.background = "transparent"; },
                          children: m.label,
                        }, i),
                      ),
                    }),
                  ],
                }),
                v.jsx("button", {
                  onClick: () => P("evaluaciones_modulos"),
                  style: {
                    padding: "0.4rem 0.85rem",
                    background: C === "evaluaciones_modulos" ? "#007bff" : "#495057",
                    border: "1px solid " + (C === "evaluaciones_modulos" ? "#007bff" : "#6c757d"),
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "📝 Evaluaciones",
                }),
                v.jsx("button", {
                  onClick: () => window.open("https://www.geogebra.org/classic?lang=es", "_blank", "noopener,noreferrer"),
                  style: {
                    padding: "0.4rem 0.85rem",
                    background: "#6f42c1",
                    border: "1px solid #59359a",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "🧭 GeoGebra Clásico",
                }),
                v.jsx("button", {
                  onClick: () => be(true),
                  title: "Ayuda rápida",
                  "aria-label": "Ayuda rápida",
                  className: "p-2 bg-white/10 rounded-lg",
                  children: v.jsx(window._icons.Yf, { className: "w-5 h-5" }),
                }),
              ],
            }),
          ],
        }),
      }),
      v.jsxs("div", {
        style: { display: "flex", flexDirection: "row", minHeight: "calc(100vh - 80px)" },
        children: [
          v.jsxs("aside", {
            id: "sidebar",
            className: "hidden md:block",
            style: { 
              width: "280px", 
              minWidth: "280px", 
              padding: "1.25rem 0.85rem", 
              background: "#343a40",
              borderRight: "1px solid #495057",
              overflowY: "auto",
              color: "#ffffff"
            },
            children: [
              // Encabezado del Menú Lateral Canónico
              v.jsxs("div", {
                style: { paddingBottom: "0.85rem", marginBottom: "0.85rem", borderBottom: "1px solid #495057" },
                children: [
                  v.jsx("h2", { style: { fontSize: "1.05rem", fontWeight: "bold", color: "#ffffff", lineHeight: "1.3" }, children: "Técnicas Agropecuarias" }),
                  v.jsx("div", { style: { fontSize: "0.75rem", color: "#86efac", fontWeight: "600", marginTop: "0.2rem" }, children: "Caja de Herramientas • UCES" }),
                ],
              }),

              // GRUPO 1: GENERAL
              v.jsx("div", { style: { fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#adb5bd", margin: "0.75rem 0 0.35rem 0.25rem" }, children: "General" }),
              [
                { id: "home", icon: "🏠", label: "Inicio" },
                { id: "introduccion", icon: "📖", label: "Introducción a la Caja" },
              ].map(t =>
                v.jsxs("button", {
                  key: t.id,
                  onClick: () => P(t.id),
                  className: "sidebar-tab-btn" + (C === t.id ? " active" : ""),
                  style: {
                    width: "100%",
                    textAlign: "left",
                    padding: "0.55rem 0.8rem",
                    borderRadius: "0.375rem",
                    marginBottom: "0.25rem",
                    background: C === t.id ? "#007bff" : "#495057",
                    color: "#ffffff",
                    fontSize: "0.825rem",
                    fontWeight: C === t.id ? "bold" : "500",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    transform: C === t.id ? "translateX(4px)" : "none",
                    boxShadow: C === t.id ? "0 2px 8px rgba(0, 123, 255, 0.45)" : "none",
                    transition: "all 0.15s ease",
                  },
                  children: [
                    v.jsx("span", { style: { fontSize: "1rem" }, children: t.icon }),
                    v.jsx("span", { style: { flex: 1 }, children: t.label }),
                  ],
                })
              ),

              // GRUPO 2: TÉCNICAS AGROPECUARIAS (EL CAMPO)
              v.jsx("div", { style: { fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#86efac", margin: "1rem 0 0.35rem 0.25rem" }, children: "Técnicas Agropecuarias" }),
              [
                { id: "r3directa_cat", icon: "💉", label: "Regla de 3 Agropecuaria" },
                { id: "algebra", icon: "🌾", label: "Álgebra y Finca" },
                { id: "geometria_cat", icon: "📐", label: "Conceptos Geométricos" },
                { id: "despeje_cat", icon: "🧪", label: "Despeje de Variables" },
                { id: "razonamiento_cat", icon: "🧩", label: "Razonamiento Deductivo" },
              ].map(t =>
                v.jsxs("button", {
                  key: t.id,
                  onClick: () => P(t.id),
                  className: "sidebar-tab-btn" + (C === t.id || (t.id === "r3directa_cat" && C === "r3directa") || (t.id === "algebra" && C === "ecuacuad") || (t.id === "geometria_cat" && C === "geometria") || (t.id === "despeje_cat" && C === "despeje") || (t.id === "razonamiento_cat" && (C === "tablalogica" || C === "deduccion")) ? " active" : ""),
                  style: {
                    width: "100%",
                    textAlign: "left",
                    padding: "0.55rem 0.8rem",
                    borderRadius: "0.375rem",
                    marginBottom: "0.25rem",
                    background: C === t.id || (t.id === "r3directa_cat" && C === "r3directa") || (t.id === "algebra" && C === "ecuacuad") || (t.id === "geometria_cat" && C === "geometria") || (t.id === "despeje_cat" && C === "despeje") || (t.id === "razonamiento_cat" && (C === "tablalogica" || C === "deduccion")) ? "#007bff" : "#495057",
                    color: "#ffffff",
                    fontSize: "0.825rem",
                    fontWeight: C === t.id ? "bold" : "500",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    transform: C === t.id ? "translateX(4px)" : "none",
                    boxShadow: C === t.id ? "0 2px 8px rgba(0, 123, 255, 0.45)" : "none",
                    transition: "all 0.15s ease",
                  },
                  children: [
                    v.jsx("span", { style: { fontSize: "1rem" }, children: t.icon }),
                    v.jsx("span", { style: { flex: 1 }, children: t.label }),
                  ],
                })
              ),

              // GRUPO 3: ARITMÉTICA Y ÁLGEBRA FUNDAMENTAL
              v.jsx("div", { style: { fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#93c5fd", margin: "1rem 0 0.35rem 0.25rem" }, children: "Aritmética y Álgebra" }),
              [
                { id: "sumas", icon: "➕", label: "Sumas (Enteros / Dec.)" },
                { id: "restas", icon: "➖", label: "Restas y Verificación" },
                { id: "mults", icon: "×", label: "Multiplicación Paso a Paso" },
                { id: "divs", icon: "÷", label: "Divisiones y Decimales" },
                { id: "fracciones", icon: "½", label: "Fracciones y Potencias" },
                { id: "factorizacion_cat", icon: "🔀", label: "Factorización de Trinomios" },
                { id: "expr", icon: "( )", label: "Signos de Agrupación" },
                { id: "probs", icon: "❓", label: "Problemas Aritméticos" },
              ].map(t =>
                v.jsxs("button", {
                  key: t.id,
                  onClick: () => P(t.id),
                  className: "sidebar-tab-btn" + (C === t.id || (t.id === "sumas" && (C === "suma" || C === "sumadec")) || (t.id === "restas" && (C === "resta" || C === "restadec")) || (t.id === "mults" && (C === "mult" || C === "multm")) || (t.id === "divs" && (C === "divg" || C === "divds" || C === "divrs")) || (t.id === "fracciones" && (C === "fraccion" || C === "fracmixta" || C === "fracpotmix")) || (t.id === "factorizacion_cat" && C === "factorizacion") || (t.id === "expr" && C === "expr_ej") || (t.id === "probs" && (C === "prob" || C === "probi" || C === "probfrac")) ? " active" : ""),
                  style: {
                    width: "100%",
                    textAlign: "left",
                    padding: "0.55rem 0.8rem",
                    borderRadius: "0.375rem",
                    marginBottom: "0.25rem",
                    background: C === t.id || (t.id === "sumas" && (C === "suma" || C === "sumadec")) || (t.id === "restas" && (C === "resta" || C === "restadec")) || (t.id === "mults" && (C === "mult" || C === "multm")) || (t.id === "divs" && (C === "divg" || C === "divds" || C === "divrs")) || (t.id === "fracciones" && (C === "fraccion" || C === "fracmixta" || C === "fracpotmix")) || (t.id === "factorizacion_cat" && C === "factorizacion") || (t.id === "expr" && C === "expr_ej") || (t.id === "probs" && (C === "prob" || C === "probi" || C === "probfrac")) ? "#007bff" : "#495057",
                    color: "#ffffff",
                    fontSize: "0.825rem",
                    fontWeight: C === t.id ? "bold" : "500",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    transform: C === t.id ? "translateX(4px)" : "none",
                    boxShadow: C === t.id ? "0 2px 8px rgba(0, 123, 255, 0.45)" : "none",
                    transition: "all 0.15s ease",
                  },
                  children: [
                    v.jsx("span", { style: { fontSize: "1rem" }, children: t.icon }),
                    v.jsx("span", { style: { flex: 1 }, children: t.label }),
                  ],
                })
              ),

              // GRUPO 4: MÓDULOS CURRICULARES Y RECURSOS
              v.jsx("div", { style: { fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#fbbf24", margin: "1rem 0 0.35rem 0.25rem" }, children: "Currículo y Recursos" }),
              [
                { id: "guias_modulos_pdf", icon: "📚", label: "Módulos Oficiales (PDF)" },
                { id: "aprendo_videos", icon: "▶", label: "Aprendo con videos" },
                { id: "evaluaciones_modulos", icon: "📝", label: "Evaluaciones en Línea" },
                { id: "geogebra", icon: "🧭", label: "GeoGebra Clásico" },
                { id: "manual_usuario", icon: "📘", label: "Manual de usuario" },
              ].map(t =>
                v.jsxs("button", {
                  key: t.id,
                  onClick: () => P(t.id),
                  className: "sidebar-tab-btn" + (C === t.id ? " active" : ""),
                  style: {
                    width: "100%",
                    textAlign: "left",
                    padding: "0.55rem 0.8rem",
                    borderRadius: "0.375rem",
                    marginBottom: "0.25rem",
                    background: C === t.id ? "#007bff" : "#495057",
                    color: "#ffffff",
                    fontSize: "0.825rem",
                    fontWeight: C === t.id ? "bold" : "500",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    transform: C === t.id ? "translateX(4px)" : "none",
                    boxShadow: C === t.id ? "0 2px 8px rgba(0, 123, 255, 0.45)" : "none",
                    transition: "all 0.15s ease",
                  },
                  children: [
                    v.jsx("span", { style: { fontSize: "1rem" }, children: t.icon }),
                    v.jsx("span", { style: { flex: 1 }, children: t.label }),
                  ],
                })
              ),

              // Videos de Ayuda en Sidebar
              v.jsxs("div", {
                style: { marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #495057" },
                children: [
                  v.jsx("h4", { style: { fontSize: "0.85rem", fontWeight: "bold", color: "#86efac", marginBottom: "0.5rem" }, children: "🎥 Video introductorio" }),
                  ytCard("7eu-h1H9Jug", "Ver video en YouTube"),
                  v.jsx("h4", { style: { fontSize: "0.85rem", fontWeight: "bold", color: "#86efac", marginTop: "1rem", marginBottom: "0.5rem" }, children: "🎥 Contenido de la App" }),
                  ytCard("FAUSouiv6dQ", "Descripción del contenido de la App"),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className: "contenido-principal",
            style: { flex: 1, overflowY: "auto" },
            children: [
      C === "home" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            // Banner Hero Agropecuario
            v.jsxs("div", {
              style: {
                background: "linear-gradient(135deg, #2b3035 0%, #343a40 100%)",
                border: "1px solid #495057",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "2rem",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              },
              children: [
                v.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem", flexWrap: "wrap" },
                  children: [
                    v.jsx("span", {
                      style: {
                        background: "rgba(59,130,246,0.25)",
                        border: "1px solid #3b82f6",
                        color: "#93c5fd",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      },
                      children: "Facultad de Ciencias Agropecuarias y Naturales",
                    }),
                    v.jsx("span", {
                      style: {
                        background: "rgba(40,167,69,0.25)",
                        border: "1px solid #28a745",
                        color: "#86efac",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      },
                      children: "Tecnología Agropecuaria",
                    }),
                  ],
                }),
                v.jsx("h2", {
                  style: { fontSize: "1.45rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.4rem" },
                  children: "Caja de Herramientas: Matemáticas en Técnicas Agropecuarias",
                }),
                v.jsx("p", {
                  style: { fontSize: "0.92rem", color: "#e2e8f0", lineHeight: "1.6", marginBottom: "1.2rem" },
                  children: "Plataforma de acompañamiento académico y formación práctica. Articula la aritmética, álgebra, proporciones, fracciones y lógica con aplicaciones reales del campo: dosificación de fármacos veterinarios, balanceo de dietas y concentrados, fertilizantes, riego, densidad de siembra y cálculo de áreas productivas.",
                }),
                v.jsxs("div", {
                  style: { display: "flex", gap: "0.6rem", flexWrap: "wrap" },
                  children: [
                    v.jsx("button", {
                      onClick: () => P("introduccion"),
                      style: {
                        background: "#007bff",
                        color: "#ffffff",
                        padding: "0.5rem 1.1rem",
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 3px 10px rgba(0,123,255,0.4)",
                      },
                      children: "📖 Leer Introducción Completa y Equipo",
                    }),
                    v.jsx("button", {
                      onClick: () => P("aprendo_videos"),
                      style: {
                        background: "#495057",
                        color: "#ffffff",
                        padding: "0.5rem 1.1rem",
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        border: "1px solid #6c757d",
                        cursor: "pointer",
                      },
                      children: "▶ Aprendo con videos",
                    }),
                    v.jsx("button", {
                      onClick: () => window.open("https://www.geogebra.org/classic?lang=es", "_blank", "noopener,noreferrer"),
                      style: {
                        background: "#6f42c1",
                        color: "#ffffff",
                        padding: "0.5rem 1.1rem",
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        border: "1px solid rgba(168,85,247,0.4)",
                        cursor: "pointer",
                      },
                      children: "🧭 GeoGebra Clásico ↗",
                    }),
                  ],
                }),
              ],
            }),

            // ── CATÁLOGO ORGANIZADO CON SUBMENÚ Y SUB-MÓDULOS ──
            v.jsxs("div", {
              style: { marginBottom: "2.5rem" },
              children: [
                v.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginBottom: "1rem"
                  },
                  children: [
                    v.jsxs("div", {
                      children: [
                        v.jsx("h3", {
                          style: { fontSize: "1.3rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.2rem" },
                          children: "🛠️ Caja de Herramientas Matemáticas",
                        }),
                        v.jsx("p", {
                          style: { fontSize: "0.85rem", color: "#adb5bd" },
                          children: "Seleccione una categoría o explore los sub-módulos directos de cada herramienta:",
                        }),
                      ],
                    }),
                    v.jsx("span", {
                      style: {
                        background: "rgba(0, 123, 255, 0.15)",
                        border: "1px solid #007bff",
                        color: "#93c5fd",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.8rem",
                        fontWeight: "600"
                      },
                      children: homeCategory === "todas" ? "18 Herramientas Disponibles" : homeCategory === "agro" ? "5 Herramientas Agropecuarias" : homeCategory === "aritmetica" ? "4 Herramientas de Aritmética" : homeCategory === "algebra" ? "4 Herramientas de Álgebra" : "5 Módulos y Recursos"
                    })
                  ]
                }),

                // SUBMENÚ DE CATEGORÍAS (Barra de Filtro y Navegación)
                v.jsx("div", {
                  style: {
                    background: "#2b3035",
                    border: "1px solid #495057",
                    borderRadius: "0.75rem",
                    padding: "0.45rem",
                    marginBottom: "1.5rem",
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                  },
                  children: [
                    { id: "todas", icon: "✨", label: "Todas las Herramientas" },
                    { id: "agro", icon: "🌿", label: "Técnicas Agropecuarias" },
                    { id: "aritmetica", icon: "➕", label: "Aritmética Paso a Paso" },
                    { id: "algebra", icon: "🔀", label: "Álgebra y Proporciones" },
                    { id: "curriculo", icon: "📚", label: "Módulos y Recursos" },
                  ].map((cat) =>
                    v.jsxs("button", {
                      key: cat.id,
                      onClick: () => setHomeCategory(cat.id),
                      style: {
                        padding: "0.45rem 0.85rem",
                        borderRadius: "0.5rem",
                        border: "none",
                        background: homeCategory === cat.id ? "#007bff" : "transparent",
                        color: homeCategory === cat.id ? "#ffffff" : "#ced4da",
                        fontWeight: homeCategory === cat.id ? "bold" : "500",
                        fontSize: "0.83rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        transition: "all 0.15s ease",
                        boxShadow: homeCategory === cat.id ? "0 2px 8px rgba(0,123,255,0.4)" : "none",
                      },
                      children: [
                        v.jsx("span", { style: { fontSize: "0.95rem" }, children: cat.icon }),
                        v.jsx("span", { children: cat.label }),
                      ],
                    })
                  ),
                }),

                // GRID DE TARJETAS PROFESIONALES
                v.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "1.2rem",
                  },
                  children: [
                    // ── 🌿 TÉCNICAS AGROPECUARIAS ──
                    {
                      id: "r3directa_cat",
                      cat: "agro",
                      badge: "Veterinaria y Campo",
                      badgeColor: "#86efac",
                      badgeBg: "rgba(34,197,94,0.15)",
                      badgeBorder: "rgba(34,197,94,0.4)",
                      icon: "💉",
                      title: "Regla de 3 Agropecuaria",
                      desc: "Dosificación de vacunas, dosis de ivermectina, raciones de concentrado, semillas de pasto, fertilizantes e intervalos de riego.",
                      submodules: [
                        { label: "💉 Vacunas", fn: () => wr3(xr.find((x) => x.id === "r3d_vacuna")) },
                        { label: "🐄 Ivermectina", fn: () => wr3(xr.find((x) => x.id === "r3d_ivermectina")) },
                        { label: "🌾 Concentrado", fn: () => wr3(xr.find((x) => x.id === "r3d_concentrado")) },
                        { label: "🌱 Pasto/Fert.", fn: () => wr3([xr.find((x) => x.id === "r3d_semillas"), xr.find((x) => x.id === "r3d_fertilizante")][Math.floor(Math.random() * 2)]) },
                      ],
                      mainFn: () => P("r3directa_cat"),
                      btnText: "Abrir Regla de 3 →",
                    },
                    {
                      id: "algebra",
                      cat: "agro",
                      badge: "Álgebra y Finca",
                      badgeColor: "#86efac",
                      badgeBg: "rgba(34,197,94,0.15)",
                      badgeBorder: "rgba(34,197,94,0.4)",
                      icon: "🌾",
                      title: "Álgebra y Ecuaciones Rurales",
                      desc: "Ecuaciones cuadráticas para calcular dimensiones óptimas de parcelas de cultivo, corrales, cercados y estanques de peces.",
                      submodules: [
                        { label: "📐 Corral", fn: () => weq(xr.find((x) => x.id === "eq_corral")) },
                        { label: "🌱 Parcela", fn: () => weq(xr.find((x) => x.id === "eq_parcela")) },
                        { label: "🐟 Estanque", fn: () => weq(xr.find((x) => x.id === "eq_estanque")) },
                      ],
                      mainFn: () => P("algebra"),
                      btnText: "Abrir Álgebra y Finca →",
                    },
                    {
                      id: "geometria_cat",
                      cat: "agro",
                      badge: "Agrimensura",
                      badgeColor: "#86efac",
                      badgeBg: "rgba(34,197,94,0.15)",
                      badgeBorder: "rgba(34,197,94,0.4)",
                      icon: "📐",
                      title: "Conceptos Geométricos",
                      desc: "Cálculo de perímetros de cerca, áreas de terrenos agrícolas, superficies de reservorios y volúmenes de almacenamiento.",
                      submodules: [
                        { label: "📏 Perímetros", fn: () => wgeoGrupo("perimetros") },
                        { label: "⬛ Áreas de Terreno", fn: () => wgeoGrupo("areas") },
                        { label: "🧊 Volúmenes", fn: () => wgeoGrupo("volumenes") },
                      ],
                      mainFn: () => P("geometria_cat"),
                      btnText: "Abrir Geometría →",
                    },
                    {
                      id: "despeje_cat",
                      cat: "agro",
                      badge: "Fórmulas Técnicas",
                      badgeColor: "#86efac",
                      badgeBg: "rgba(34,197,94,0.15)",
                      badgeBorder: "rgba(34,197,94,0.4)",
                      icon: "🧪",
                      title: "Despeje de Variables",
                      desc: "Aislamiento analítico paso a paso de incógnitas en fórmulas físicas, geométricas y de producción técnica agropecuaria.",
                      submodules: [
                        { label: "🧪 Fórmulas Físicas", fn: () => wdespAzar((e) => e.ciencia) },
                        { label: "📐 Fórmulas de Área", fn: () => wdespAzar((e) => e.area) },
                      ],
                      mainFn: () => P("despeje_cat"),
                      btnText: "Abrir Despeje →",
                    },
                    {
                      id: "razonamiento_cat",
                      cat: "agro",
                      badge: "Lógica y Deducción",
                      badgeColor: "#86efac",
                      badgeBg: "rgba(34,197,94,0.15)",
                      badgeBorder: "rgba(34,197,94,0.4)",
                      icon: "🧩",
                      title: "Razonamiento Deductivo",
                      desc: "Problemas lógicos con tablas de deducción, análisis de premisas y toma estructurada de decisiones cuantitativas.",
                      submodules: [
                        { label: "🧩 Tablas Lógicas", fn: () => wlog(LOGICA_NIVELES[0]) },
                        { label: "📊 Deducción", fn: () => wded(DEDUCCION_TIPOS[2]) },
                      ],
                      mainFn: () => P("razonamiento_cat"),
                      btnText: "Abrir Razonamiento →",
                    },

                    // ── ➕ ARITMÉTICA FUNDAMENTAL ──
                    {
                      id: "sumas",
                      cat: "aritmetica",
                      badge: "Aritmética Paso a Paso",
                      badgeColor: "#93c5fd",
                      badgeBg: "rgba(59,130,246,0.15)",
                      badgeBorder: "rgba(59,130,246,0.4)",
                      icon: "➕",
                      title: "Sumas Verticales y Decimales",
                      desc: "Algoritmo vertical interactivo con acarreo guiado columna por columna para números enteros y cifras decimales.",
                      submodules: [
                        { label: "➕ Suma Enteros", fn: () => P("sumas") },
                        { label: "🔢 Suma Decimales", fn: () => P("sumas") },
                      ],
                      mainFn: () => P("sumas"),
                      btnText: "Abrir Sumas →",
                    },
                    {
                      id: "restas",
                      cat: "aritmetica",
                      badge: "Aritmética Paso a Paso",
                      badgeColor: "#93c5fd",
                      badgeBg: "rgba(59,130,246,0.15)",
                      badgeBorder: "rgba(59,130,246,0.4)",
                      icon: "➖",
                      title: "Restas y Verificación",
                      desc: "Sustracciones con préstamos interactivos guiados y comprobación automática de la resta por suma inversa.",
                      submodules: [
                        { label: "➖ Resta Enteros", fn: () => P("restas") },
                        { label: "🔢 Resta Decimales", fn: () => P("restas") },
                      ],
                      mainFn: () => P("restas"),
                      btnText: "Abrir Restas →",
                    },
                    {
                      id: "mults",
                      cat: "aritmetica",
                      badge: "Aritmética Paso a Paso",
                      badgeColor: "#93c5fd",
                      badgeBg: "rgba(59,130,246,0.15)",
                      badgeBorder: "rgba(59,130,246,0.4)",
                      icon: "×",
                      title: "Multiplicación Paso a Paso",
                      desc: "Multiplicaciones de 1 cifra y multi-cifra con visualización de acarreos y suma estructurada de productos parciales.",
                      submodules: [
                        { label: "✖️ 1 Cifra", fn: () => P("mults") },
                        { label: "✖️ Multi-Cifra", fn: () => P("mults") },
                      ],
                      mainFn: () => P("mults"),
                      btnText: "Abrir Multiplicación →",
                    },
                    {
                      id: "divs",
                      cat: "aritmetica",
                      badge: "Aritmética Paso a Paso",
                      badgeColor: "#93c5fd",
                      badgeBg: "rgba(59,130,246,0.15)",
                      badgeBorder: "rgba(59,130,246,0.4)",
                      icon: "÷",
                      title: "Divisiones y Decimales",
                      desc: "Divisiones exactas paso a paso en galera, divisiones con cifras decimales en el dividendo y divisiones con residuo.",
                      submodules: [
                        { label: "÷ Exacta", fn: () => P("divs") },
                        { label: "÷. Con Decimales", fn: () => P("divds") },
                        { label: "÷R Con Residuo", fn: () => P("divrs") },
                      ],
                      mainFn: () => P("divs"),
                      btnText: "Abrir Divisiones →",
                    },

                    // ── 🔀 ÁLGEBRA Y PROPORCIONES ──
                    {
                      id: "fracciones",
                      cat: "algebra",
                      badge: "Proporciones y Mezclas",
                      badgeColor: "#c4b5fd",
                      badgeBg: "rgba(168,85,247,0.15)",
                      badgeBorder: "rgba(168,85,247,0.4)",
                      icon: "½",
                      title: "Operaciones con Fracciones",
                      desc: "Operaciones fundamentales con fracciones, números mixtos y potencias de fracciones aplicadas a dosis y concentraciones.",
                      submodules: [
                        { label: "½ Simples", fn: () => wf(xr.find((x) => x.id === "frac_suma")) },
                        { label: "± Op. Mixtas", fn: () => wfm(xr.find((x) => x.id === "frac_mixta")) },
                        { label: "² Potencias", fn: () => wfp(xr.find((x) => x.id === "frac_potmix")) },
                      ],
                      mainFn: () => P("fracciones"),
                      btnText: "Abrir Fracciones →",
                    },
                    {
                      id: "factorizacion_cat",
                      cat: "algebra",
                      badge: "Álgebra Intermedia",
                      badgeColor: "#c4b5fd",
                      badgeBg: "rgba(168,85,247,0.15)",
                      badgeBorder: "rgba(168,85,247,0.4)",
                      icon: "🔀",
                      title: "Factorización de Trinomios",
                      desc: "Descomposición en factores de la forma (x+a)(x+b) con raíces enteras positivas, negativas y combinadas.",
                      submodules: [
                        { label: "🔀 Positivas", fn: () => wfact(xr.find((x) => x.id === "fact_pp")) },
                        { label: "🔀 Negativas", fn: () => wfact(xr.find((x) => x.id === "fact_nn")) },
                        { label: "🔀 Signos Mixtos", fn: () => wfact(xr.find((x) => x.id === "fact_pn")) },
                      ],
                      mainFn: () => P("factorizacion_cat"),
                      btnText: "Abrir Factorización →",
                    },
                    {
                      id: "expr",
                      cat: "algebra",
                      badge: "Jerarquía de Operaciones",
                      badgeColor: "#c4b5fd",
                      badgeBg: "rgba(168,85,247,0.15)",
                      badgeBorder: "rgba(168,85,247,0.4)",
                      icon: "( )",
                      title: "Signos de Agrupación",
                      desc: "Evaluación rigurosa de expresiones aritméticas respetando la jerarquía de paréntesis, corchetes y llaves.",
                      submodules: [
                        { label: "( ) Paréntesis", fn: () => Qe(xr.find((x) => x.id === "parentesis")) },
                        { label: "[ ] Corchetes", fn: () => Qe(xr.find((x) => x.id === "corchetes")) },
                      ],
                      mainFn: () => P("expr"),
                      btnText: "Abrir Agrupación →",
                    },
                    {
                      id: "probs",
                      cat: "algebra",
                      badge: "Problemas Prácticos",
                      badgeColor: "#c4b5fd",
                      badgeBg: "rgba(168,85,247,0.15)",
                      badgeBorder: "rgba(168,85,247,0.4)",
                      icon: "❓",
                      title: "Problemas Aritméticos",
                      desc: "Situaciones de la vida real y productiva: transacciones comerciales, inventarios pecuarios y manejo de presupuestos.",
                      submodules: [
                        { label: "🛒 Tienda", fn: () => tt(xr.find((x) => x.id === "tienda")) },
                        { label: "🐄 Ganado", fn: () => tt(xr.find((x) => x.id === "ganado")) },
                      ],
                      mainFn: () => P("probs"),
                      btnText: "Abrir Problemas →",
                    },

                    // ── 📚 MÓDULOS Y RECURSOS ──
                    {
                      id: "guias_modulos_pdf",
                      cat: "curriculo",
                      badge: "Documentos Oficiales",
                      badgeColor: "#fde047",
                      badgeBg: "rgba(234,179,8,0.15)",
                      badgeBorder: "rgba(234,179,8,0.4)",
                      icon: "📚",
                      title: "Módulos Oficiales (PDF)",
                      desc: "Las 7 guías curriculares oficiales de práctica matemática con visor integrado, apertura emergente y descargas.",
                      submodules: [
                        { label: "📄 Visor Integrado", fn: () => P("guias_modulos_pdf") },
                        { label: "▶ Videos de las guías", fn: () => P("aprendo_videos") },
                      ],
                      mainFn: () => P("guias_modulos_pdf"),
                      btnText: "Ver Módulos PDF →",
                    },
                    {
                      id: "aprendo_videos",
                      cat: "curriculo",
                      badge: "Biblioteca Audiovisual",
                      badgeColor: "#fde047",
                      badgeBg: "rgba(234,179,8,0.15)",
                      badgeBorder: "rgba(234,179,8,0.4)",
                      icon: "🎓",
                      title: "Aprendo con videos",
                      desc: "Todos los videos del canal del profesor John Jairo Estrada, ordenados por tema y con el botón para abrir la herramienta donde se practica.",
                      submodules: [
                        { label: "▶ Ver todos los videos", fn: () => P("aprendo_videos") },
                      ],
                      mainFn: () => P("aprendo_videos"),
                      btnText: "Ver videos →",
                    },
                    {
                      id: "evaluaciones_modulos",
                      cat: "curriculo",
                      badge: "Evaluación Académica",
                      badgeColor: "#fde047",
                      badgeBg: "rgba(234,179,8,0.15)",
                      badgeBorder: "rgba(234,179,8,0.4)",
                      icon: "📝",
                      title: "Evaluaciones en Línea",
                      desc: "Cuestionarios interactivos para medir el dominio conceptual y la aplicación técnica de cada módulo.",
                      submodules: [
                        { label: "📝 Módulos 1 a 7", fn: () => P("evaluaciones_modulos") },
                      ],
                      mainFn: () => P("evaluaciones_modulos"),
                      btnText: "Ir a Evaluaciones →",
                    },
                    {
                      id: "geogebra",
                      cat: "curriculo",
                      badge: "Suite Matemática",
                      badgeColor: "#fde047",
                      badgeBg: "rgba(234,179,8,0.15)",
                      badgeBorder: "rgba(234,179,8,0.4)",
                      icon: "🧭",
                      title: "GeoGebra Clásico",
                      desc: "Calculadora gráfica, geometría interactiva y álgebra simbólica (CAS) integrada con comandos útiles para el agro.",
                      submodules: [
                        { label: "🧭 Embebido", fn: () => P("geogebra") },
                        { label: "↗ Pantalla Completa", fn: () => window.open("https://www.geogebra.org/classic?lang=es", "_blank", "noopener,noreferrer") },
                      ],
                      mainFn: () => P("geogebra"),
                      btnText: "Abrir GeoGebra →",
                    },
                    {
                      id: "manual_usuario",
                      cat: "curriculo",
                      badge: "Guía de uso",
                      badgeColor: "#fde047",
                      badgeBg: "rgba(234,179,8,0.15)",
                      badgeBorder: "rgba(234,179,8,0.4)",
                      icon: "📘",
                      title: "Manual de usuario",
                      desc: "Guía completa de la aplicación en PDF, con capturas y los pasos para usar cada herramienta.",
                      submodules: [
                        { label: "📘 Leer el manual", fn: () => P("manual_usuario") },
                      ],
                      mainFn: () => P("manual_usuario"),
                      btnText: "Abrir el manual →",
                    },
                  ]
                    .filter((t) => homeCategory === "todas" || t.cat === homeCategory)
                    .map((t) =>
                      v.jsxs(
                        "div",
                        {
                          style: {
                            background: "#2b3035",
                            border: "1px solid #495057",
                            borderRadius: "0.85rem",
                            padding: "1.25rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                            transition: "all 0.2s ease",
                          },
                          children: [
                            v.jsxs("div", {
                              children: [
                                v.jsxs("div", {
                                  style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" },
                                  children: [
                                    v.jsx("span", { style: { fontSize: "1.8rem" }, children: t.icon }),
                                    v.jsx("span", {
                                      style: {
                                        background: t.badgeBg,
                                        border: "1px solid " + t.badgeBorder,
                                        color: t.badgeColor,
                                        padding: "0.2rem 0.6rem",
                                        borderRadius: "9999px",
                                        fontSize: "0.72rem",
                                        fontWeight: "bold",
                                      },
                                      children: t.badge,
                                    }),
                                  ],
                                }),
                                v.jsx("h4", {
                                  style: { fontSize: "1.05rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.35rem" },
                                  children: t.title,
                                }),
                                v.jsx("p", {
                                  style: { fontSize: "0.825rem", color: "#cbd5e1", lineHeight: "1.5", marginBottom: "1rem" },
                                  children: t.desc,
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              style: { borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.85rem" },
                              children: [
                                v.jsx("div", {
                                  style: { fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.04em", color: "#adb5bd", marginBottom: "0.45rem" },
                                  children: "Sub-módulos y accesos rápidos:",
                                }),
                                v.jsx("div", {
                                  style: { display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.85rem" },
                                  children: t.submodules.map((sm, sidx) =>
                                    v.jsx(
                                      "button",
                                      {
                                        onClick: (e) => { e.stopPropagation(); sm.fn(); },
                                        style: {
                                          background: "#343a40",
                                          border: "1px solid #495057",
                                          color: "#e2e8f0",
                                          padding: "0.25rem 0.55rem",
                                          borderRadius: "0.375rem",
                                          fontSize: "0.74rem",
                                          fontWeight: "500",
                                          cursor: "pointer",
                                          transition: "all 0.12s ease",
                                        },
                                        onMouseEnter: (e) => { e.currentTarget.style.background = "#007bff"; e.currentTarget.style.borderColor = "#007bff"; e.currentTarget.style.color = "#ffffff"; },
                                        onMouseLeave: (e) => { e.currentTarget.style.background = "#343a40"; e.currentTarget.style.borderColor = "#495057"; e.currentTarget.style.color = "#e2e8f0"; },
                                        children: sm.label,
                                      },
                                      sidx
                                    )
                                  ),
                                }),
                                v.jsx("button", {
                                  onClick: t.mainFn,
                                  style: {
                                    width: "100%",
                                    background: "#007bff",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "0.45rem",
                                    padding: "0.5rem 0.85rem",
                                    fontWeight: "600",
                                    fontSize: "0.825rem",
                                    cursor: "pointer",
                                    transition: "background-color 0.15s ease",
                                    boxShadow: "0 2px 6px rgba(0,123,255,0.35)",
                                  },
                                  onMouseEnter: (e) => { e.currentTarget.style.background = "#0056b3"; },
                                  onMouseLeave: (e) => { e.currentTarget.style.background = "#007bff"; },
                                  children: t.btnText,
                                }),
                              ],
                            }),
                          ],
                        },
                        t.id
                      )
                    ),
                }),
              ],
            }),
            // Sección 3: Lecciones
            v.jsxs("div", {
              style: {
                background: "#2b3035",
                border: "1px solid #495057",
                borderRadius: "0.85rem",
                padding: "1.5rem",
                boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
              },
              children: [
                v.jsx("h2", {
                  className: "font-bold mb-4",
                  children: "Lecciones de Práctica Rápida",
                }),
                v.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                  children: xr
                    .slice(0, 8)
                    .map((f) =>
                      v.jsxs(
                        "button",
                        {
                          onClick: () =>
                            f.type === "suma"
                              ? et(f)
                              : f.type === "sumadec"
                                ? wsd(f)
                                : f.type === "resta" || f.type === "restadec"
                                ? er(f)
                                : f.type === "fraccion"
                                  ? wf(f)
                                  : f.type === "mult"
                                    ? wt(f)
                                    : f.type === "multm"
                                      ? wm(f)
                                      : f.type === "expr"
                                        ? Qe(f)
                                        : tt(f),
                          className:
                            "bg-white/5 p-3 rounded-xl text-center hover:bg-white/10",
                          children: [
                            v.jsx("div", {
                              className: "text-2xl",
                              children: f.icon,
                            }),
                            v.jsx("div", {
                              className: "text-sm font-bold",
                              children: f.title,
                            }),
                          ],
                        },
                        f.id,
                      ),
                    ),
                }),
              ],
            }),
          ],
        }),
      // ---------------------------------------------------------
      // Vista Introducción Canónica (Adaptada para Tecnología Agropecuaria)
      // ---------------------------------------------------------
      C === "introduccion" &&
        v.jsxs("main", {
          className: "max-w-5xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("home"),
              style: {
                marginBottom: "1.25rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0.5rem",
                color: "#93c5fd",
                padding: "0.4rem 0.9rem",
                fontSize: "0.85rem",
                cursor: "pointer",
              },
              children: "← Volver al Inicio",
            }),
            v.jsxs("div", {
              style: { marginBottom: "2rem" },
              children: [
                v.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" },
                  children: [
                    v.jsx("span", {
                      style: {
                        background: "rgba(16,185,129,0.25)",
                        border: "1px solid #10b981",
                        color: "#6ee7b7",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      },
                      children: "Facultad de Ciencias Agropecuarias y Naturales",
                    }),
                    v.jsx("span", {
                      style: {
                        background: "rgba(59,130,246,0.25)",
                        border: "1px solid #3b82f6",
                        color: "#93c5fd",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      },
                      children: "Tecnología Agropecuaria",
                    }),
                  ],
                }),
                v.jsx("h2", {
                  style: { fontSize: "2rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.3rem" },
                  children: "Introducción a la Caja de Herramientas",
                }),
                v.jsx("p", {
                  style: { color: "#86efac", fontSize: "1rem", fontWeight: "500" },
                  children: "Matemáticas en Técnicas Agropecuarias • Acompañamiento y Fortalecimiento Académico",
                }),
              ],
            }),
            // Tarjeta de 6 párrafos adaptados
            v.jsxs("div", {
              style: {
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "1rem",
                padding: "2rem",
                marginBottom: "2.5rem",
                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                lineHeight: "1.75",
                fontSize: "0.95rem",
                color: "#e2e8f0",
              },
              children: [
                v.jsx("p", {
                  style: { marginBottom: "1.25rem" },
                  children: "Hace algún tiempo, el profesor Carlos Andrés Escobar Guerra propuso la creación de una serie de cartillas y recursos pedagógicos orientados a fortalecer las competencias matemáticas en la Facultad de Ciencias Agropecuarias y Naturales. En el marco de este esfuerzo académico, surgió la necesidad de estructurar una herramienta interactiva diseñada a la medida del programa de Tecnología Agropecuaria, brindando a los estudiantes un entorno práctico para dominar los fundamentos matemáticos requeridos en su formación técnica y profesional.",
                }),
                v.jsx("p", {
                  style: { marginBottom: "1.25rem" },
                  children: "Como resultado de esta iniciativa, se consolidó esta Caja de Herramientas para Técnicas Agropecuarias, que articula la aritmética, el álgebra básica, las fracciones, la regla de tres, la proporcionalidad, las funciones y el razonamiento cuantitativo con los retos reales del sector productivo. Esta plataforma dinamiza el aprendizaje y permite que el estudiante adquiera con rapidez y solidez los saberes esenciales aplicados a la dosificación de medicamentos veterinarios (como vacunas e ivermectina), balanceo de raciones alimenticias y concentrados (porcinos y bovinos), cálculo de insumos agrícolas y fertilizantes, requerimientos de agua para riego, cálculo de semillas de pasto y dimensionamiento de unidades productivas (parcelas de cultivo, invernaderos, estanques de peces y corrales). No obstante, el éxito formativo radica en que docentes y estudiantes examinen rigurosamente cada procedimiento y no pasen por alto los detalles que conducen a la solución correcta.",
                }),
                v.jsx("p", {
                  style: { marginBottom: "1.25rem" },
                  children: "Para solucionar muchos de los ejercicios y problemas no es necesario ser un gran estudiante en matemáticas; lo fundamental es saber interiorizar, entender los conceptos que ayudan a solucionar el problema y en la caja de herramientas encontrará los instrumentos que le ayudarán a solucionar las situaciones de la práctica agropecuaria; depende del estudiante escoger la herramienta adecuada e interpretar analíticamente los resultados.",
                }),
                v.jsx("p", {
                  style: { marginBottom: "1.25rem" },
                  children: "Otra ventaja determinante de la caja de herramientas es que las aplicaciones se concentran en un único espacio virtual interactivo, diseñado acorde a las necesidades formativas de nuestros estudiantes. Para su construcción y evolución se integraron tecnologías web modernas como React, KaTeX para la renderización de expresiones matemáticas de alta calidad, JavaScript modular, hojas de estilo adaptadas y recursos dinámicos, complementados con guías de práctica en PDF y material audiovisual explicativo.",
                }),
                v.jsx("p", {
                  style: { marginBottom: "1.25rem" },
                  children: "Se puede decir que el equipo de trabajo está conformado por el profesor Carlos Andrés Escobar Guerra, Pablo Andrés Guzmán, John Jairo Estrada Álvarez y Juan Alberto Arias Quiceno. Gracias a la invaluable ayuda del profesor de estadística y programación Pablo Andrés Guzmán, quien inspiró la creación de un grupo de estudio en el cual compartió sus conocimientos y actualmente orienta el desarrollo analítico del proyecto. John Jairo Estrada Álvarez, el cerebro del proyecto, es el programador principal de todas las aplicaciones.",
                }),
                v.jsx("p", {
                  style: { marginBottom: "0", color: "#86efac", fontWeight: "500" },
                  children: "Invitamos cordialmente a los estudiantes de Tecnología Agropecuaria a explorar cada sección, ejercitarse con los generadores de problemas, estudiar las cartillas modulares y convertir esta caja de herramientas en un aliado constante durante su formación académica y su futuro desempeño en el campo.",
                }),
              ],
            }),
            // Tarjeta de Equipo
            v.jsxs("div", {
              style: {
                background: "linear-gradient(135deg, rgba(30,58,138,0.3) 0%, rgba(15,23,42,0.4) 100%)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "0.85rem",
                padding: "1.5rem",
                marginBottom: "2.5rem",
              },
              children: [
                v.jsx("h3", {
                  style: { fontSize: "1.1rem", fontWeight: "bold", color: "#93c5fd", marginBottom: "1rem" },
                  children: "👥 Equipo de Trabajo y Reconocimientos",
                }),
                v.jsxs("div", {
                  style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" },
                  children: [
                    v.jsxs("div", {
                      style: { background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "0.6rem" },
                      children: [
                        v.jsx("div", { style: { fontWeight: "bold", color: "#ffffff", fontSize: "0.9rem" }, children: "Carlos Andrés Escobar Guerra" }),
                        v.jsx("div", { style: { color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.25rem" }, children: "Profesor proponente y autor de las cartillas pedagógicas • Facultad de Ciencias Agropecuarias y Naturales" }),
                      ],
                    }),
                    v.jsxs("div", {
                      style: { background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "0.6rem" },
                      children: [
                        v.jsx("div", { style: { fontWeight: "bold", color: "#ffffff", fontSize: "0.9rem" }, children: "Pablo Andrés Guzmán" }),
                        v.jsx("div", { style: { color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.25rem" }, children: "Profesor de estadística y programación • Impulsor de grupos de estudio y fundamentación cuantitativa" }),
                      ],
                    }),
                    v.jsxs("div", {
                      style: { background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "0.6rem" },
                      children: [
                        v.jsx("div", { style: { fontWeight: "bold", color: "#ffffff", fontSize: "0.9rem" }, children: "John Jairo Estrada Álvarez" }),
                        v.jsx("div", { style: { color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.25rem" }, children: "Cerebro del proyecto y programador principal de las aplicaciones interactivas" }),
                      ],
                    }),
                    v.jsxs("div", {
                      style: { background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "0.6rem" },
                      children: [
                        v.jsx("div", { style: { fontWeight: "bold", color: "#ffffff", fontSize: "0.9rem" }, children: "Juan Alberto Arias Quiceno" }),
                        v.jsx("div", { style: { color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.25rem" }, children: "Colaborador académico y coautor del proyecto educativo" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            // Tarjetas de Herramientas Disponibles
            v.jsxs("div", {
              style: { marginBottom: "2.5rem" },
              children: [
                v.jsx("h3", {
                  style: { fontSize: "1.3rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.5rem" },
                  children: "🛠️ Herramientas y Módulos Disponibles",
                }),
                v.jsx("p", {
                  style: { color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1.25rem" },
                  children: "Elija una herramienta para acceder de inmediato al entorno interactivo de cálculo y práctica:",
                }),
                v.jsx("div", {
                  style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1rem" },
                  children: [
                    { id: "r3directa_cat", icon: "🌿", title: "Regla de 3 Agropecuaria", desc: "Dosificación de vacunas, ivermectina, concentrados, siembra de pastos, fertilizantes y riego.", btn: "Abrir Herramienta" },
                    { id: "algebra", icon: "🌾", title: "Álgebra y Finca", desc: "Ecuaciones cuadráticas para parcelas de cultivo, corrales, estanques de peces e invernaderos.", btn: "Abrir Herramienta" },
                    { id: "geometria_cat", icon: "📐", title: "Conceptos Geométricos", desc: "Cálculo de perímetros, áreas de terrenos agrícolas, superficies de estanques y volúmenes.", btn: "Abrir Herramienta" },
                    { id: "despeje_cat", icon: "🧪", title: "Despeje de Variables", desc: "Aislamiento analítico de incógnitas en fórmulas físicas, geométricas y de producción técnica.", btn: "Abrir Herramienta" },
                    { id: "razonamiento_cat", icon: "🧩", title: "Razonamiento Deductivo", desc: "Problemas lógicos, deducción de profesiones y toma estructurada de decisiones.", btn: "Abrir Herramienta" },
                    { id: "factorizacion_cat", icon: "🔀", title: "Factorización de Trinomios", desc: "Descomposición en factores de la forma (x+a)(x+b) con raíces positivas, negativas y mixtas.", btn: "Abrir Herramienta" },
                    { id: "fracciones", icon: "½", title: "Operaciones con Fracciones", desc: "Suma, resta, multiplicación, división, potencias y fracciones mixtas aplicadas a mezclas.", btn: "Abrir Herramienta" },
                    { id: "sumas", icon: "➕", title: "Sumas Verticales y Decimales", desc: "Algoritmo vertical con acarreo interactivo para números enteros y cifras decimales.", btn: "Abrir Herramienta" },
                    { id: "restas", icon: "➖", title: "Restas y Verificación", desc: "Sustracciones con préstamos interactivos y comprobación automática de la resta.", btn: "Abrir Herramienta" },
                    { id: "mults", icon: "×", title: "Multiplicaciones Paso a Paso", desc: "Multiplicaciones de 1 cifra y multi-cifra con acarreos y suma de productos parciales.", btn: "Abrir Herramienta" },
                    { id: "divs", icon: "÷", title: "Divisiones y Decimales", desc: "Divisiones exactas paso a paso, divisiones con cifras decimales y con residuo.", btn: "Abrir Herramienta" },
                    { id: "expr", icon: "( )", title: "Signos de Agrupación", desc: "Jerarquía de operaciones matemáticas evaluando paréntesis, corchetes y llaves.", btn: "Abrir Herramienta" },
                    { id: "probs", icon: "❓", title: "Problemas Aritméticos", desc: "Situaciones problemáticas cotidianas de compra, venta, inventario y manejo de recursos.", btn: "Abrir Herramienta" },
                    { id: "aprendo_videos", icon: "▶", title: "Aprendo con videos", desc: "Videos del canal del profesor John Jairo Estrada por tema: módulos, guías, regla de tres, aritmética, álgebra y método de Pólya.", btn: "Ver videos" },
                    { id: "evaluaciones_modulos", icon: "📝", title: "Evaluaciones en Línea", desc: "Cuestionarios interactivos de evaluación por cada módulo para medir el avance.", btn: "Ir a Evaluaciones" },
                    { id: "manual_usuario", icon: "📘", title: "Manual de usuario", desc: "Guía completa de la aplicación en PDF, con capturas y ejemplos de cada herramienta.", btn: "Abrir el manual" },
                  ].map((t) =>
                    v.jsxs("div", {
                      key: t.id,
                      style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "0.75rem",
                        padding: "1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      },
                      children: [
                        v.jsxs("div", {
                          children: [
                            v.jsxs("div", {
                              style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" },
                              children: [
                                v.jsx("span", { style: { fontSize: "1.3rem" }, children: t.icon }),
                                v.jsx("h4", { style: { fontSize: "1rem", fontWeight: "bold", color: "#ffffff" }, children: t.title }),
                              ],
                            }),
                            v.jsx("p", { style: { fontSize: "0.825rem", color: "#cbd5e1", lineHeight: "1.5", marginBottom: "1rem" }, children: t.desc }),
                          ],
                        }),
                        v.jsx("button", {
                          onClick: () => P(t.id),
                          style: {
                            background: "rgba(59,130,246,0.3)",
                            border: "1px solid rgba(59,130,246,0.5)",
                            borderRadius: "0.5rem",
                            color: "#93c5fd",
                            padding: "0.45rem 0.8rem",
                            fontSize: "0.825rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            textAlign: "center",
                            alignSelf: "flex-start",
                          },
                          children: t.btn + " →",
                        }),
                      ],
                    }),
                  ),
                }),
              ],
            }),
            // Sección Guías PDF
            v.jsxs("div", {
              style: { marginBottom: "2.5rem" },
              children: [
                v.jsx("h3", {
                  style: { fontSize: "1.3rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.5rem" },
                  children: "📚 Guías de Práctica Oficiales por Módulo (PDF)",
                }),
                v.jsx("p", {
                  style: { color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1.25rem" },
                  children: "Consulte los documentos curriculares completos en el visor interactivo o descárguelos para estudio independiente:",
                }),
                v.jsx("div", {
                  style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.85rem" },
                  children: [
                    { label: "Módulo 1 — Conceptos Básicos", file: "PDF/Practica_Modulo1_Conceptos_Basicos_Matematica.pdf" },
                    { label: "Módulo 2 — Importancia Números", file: "PDF/Practica_Modulo2_Importancia_Numeros.pdf" },
                    { label: "Módulo 3 — Regla de Tres", file: "PDF/Practica_Modulo3_Regla_de_Tres.pdf" },
                    { label: "Módulo 4 — Fraccionarios y Decimales", file: "PDF/Practica_Modulo4_Fraccionarios_Decimales.pdf" },
                    { label: "Módulo 5 — Potenciación y Proporciones", file: "PDF/Practica_Modulo5_Potenciacion_Proporciones.pdf" },
                    { label: "Módulo 6 — Ecuaciones Matemáticas", file: "PDF/Practica_Modulo6_Ecuaciones_Matematicas_Basicas.pdf" },
                    { label: "Módulo 7 — Conversión de Unidades", file: "PDF/Practica_Modulo7_Conversion_Unidades.pdf" },
                  ].map((m, i) =>
                    v.jsxs("div", {
                      key: i,
                      style: {
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.25)",
                        borderRadius: "0.6rem",
                        padding: "0.9rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                      },
                      children: [
                        v.jsx("span", { style: { fontSize: "0.85rem", fontWeight: "600", color: "#e2f5eb" }, children: "📄 " + m.label }),
                        v.jsxs("div", {
                          style: { display: "flex", gap: "0.35rem" },
                          children: [
                            v.jsx("button", {
                              onClick: () => setActivePdf(m),
                              style: {
                                background: "rgba(34,197,94,0.3)",
                                border: "none",
                                borderRadius: "0.35rem",
                                color: "#86efac",
                                fontSize: "0.75rem",
                                fontWeight: "bold",
                                padding: "0.3rem 0.55rem",
                                cursor: "pointer",
                              },
                              children: "Ver",
                            }),
                            v.jsx("a", {
                              href: m.file,
                              download: m.label.replace(/\s+/g, "_") + ".pdf",
                              style: {
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "0.35rem",
                                color: "#cbd5e1",
                                fontSize: "0.75rem",
                                padding: "0.3rem 0.55rem",
                                textDecoration: "none",
                              },
                              children: "⬇",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ),
                }),
              ],
            }),
            // GeoGebra Clásico Card
            v.jsxs("div", {
              style: {
                background: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(88,28,135,0.3) 100%)",
                border: "1px solid rgba(168,85,247,0.35)",
                borderRadius: "0.85rem",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              },
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("h4", { style: { fontSize: "1.1rem", fontWeight: "bold", color: "#d8b4fe", marginBottom: "0.3rem" }, children: "🧭 GeoGebra Clásico" }),
                    v.jsx("p", { style: { fontSize: "0.85rem", color: "#e2e8f0" }, children: "Acceda a la suite de GeoGebra para cálculo algebraico simbólico (CAS), geometría dinámica y representación gráfica de funciones." }),
                  ],
                }),
                v.jsx("button", {
                  onClick: () => window.open("https://www.geogebra.org/classic?lang=es", "_blank", "noopener,noreferrer"),
                  style: {
                    background: "#9333ea",
                    color: "#ffffff",
                    padding: "0.55rem 1.2rem",
                    borderRadius: "0.5rem",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    border: "none",
                    cursor: "pointer",
                  },
                  children: "Abrir GeoGebra Clásico ↗",
                }),
              ],
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              style: {
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0.5rem",
                color: "#93c5fd",
                padding: "0.5rem 1.2rem",
                fontSize: "0.9rem",
                cursor: "pointer",
              },
              children: "← Volver al Inicio",
            }),
          ],
        }),
      C === "sumas" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Sumas Verticales",
            }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    ytCard("679tKktW4G4", "▶ Suma sin decimales — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("0Pq9WjZ3E48", "▶ Suma con decimales — Ver en YouTube"),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: xr
                .filter((f) => f.type === "suma" || f.type === "sumadec")
                .map((f) =>
                  v.jsxs(
                    "button",
                    {
                      onClick: () => f.type === "sumadec" ? wsd(f) : et(f),
                      className: f.type === "sumadec"
                        ? "bg-teal-600 p-6 rounded-2xl hover:bg-teal-500"
                        : "bg-green-600 p-6 rounded-2xl hover:bg-green-500",
                      children: [
                        v.jsx("div", {
                          className: "font-bold text-lg",
                          children: f.title,
                        }),
                        v.jsx("div", {
                          className: f.type === "sumadec" ? "text-teal-200 text-sm" : "text-green-200 text-sm",
                          children: "Practicar",
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "restas" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Restas Verticales" }),
            ytCard("M2ytCNJPI2M", "▶ Restas Verticales — Ver en YouTube"),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: xr.filter((f) => f.type === "resta" || f.type === "restadec").map((f) =>
                v.jsxs("button", {
                  onClick: () => er(f),
                  className: f.type === "restadec"
                    ? "bg-rose-700 p-6 rounded-2xl hover:bg-rose-600"
                    : "bg-red-600 p-6 rounded-2xl hover:bg-red-500",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: f.type === "restadec" ? "−." : "−" }),
                    v.jsx("div", { className: "font-bold", children: f.title }),
                    v.jsx("div", { className: "text-red-200 text-sm", children: "Practicar" }),
                  ],
                }, f.id),
              ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "resta" && E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("restas"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsx("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: E._phase === "verify"
                    ? "Verificación: resultado + sustrayendo = minuendo"
                    : ["Resta Vertical — ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: E._phase === "verify" ? [
                      // Fila de acarreo de verificación
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: E.vCarry.map((f, S) =>
                          v.jsx("div", { className: "w-14 text-center",
                            children: E.vCarry[S + 1] > 0 && v.jsx("span", { className: "text-green-400 font-bold", children: E.vCarry[S + 1] }),
                          }, S),
                        ),
                      }),
                      // Fila resultado (primer sumando en verificación)
                      v.jsx("div", {
                        className: "mb-2",
                        children: E.dR.map((f, S) =>
                          v.jsx("span", { className: "inline-block w-14 text-center", children: f }, S),
                        ),
                      }),
                      // Fila sustrayendo (segundo sumando)
                      v.jsxs("div", {
                        className: "flex items-center justify-end mb-2",
                        children: [
                          v.jsx("span", { className: "mr-4 text-4xl", children: "+" }),
                          E.dBpad.map((f, S) =>
                            v.jsx("span", {
                              className: `inline-block w-14 text-center ${E.CB < E.CA && S < E.CA - E.CB ? "text-white/30" : ""}`,
                              children: f,
                            }, S),
                          ),
                        ],
                      }),
                      v.jsx("div", { className: "border-b-4 border-white mb-2" }),
                      // Fila respuesta verificación (debe dar dA)
                      v.jsx("div", {
                        children: q.map((f, S) =>
                          v.jsx("span", {
                            className: `inline-block w-14 text-center ${q[S] ? (parseInt(q[S]) === E.dA[S] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : S === I ? "bg-yellow-500/50 rounded" : ""}`,
                            children: f || (S === I ? "?" : "_"),
                          }, S),
                        ),
                      }),
                    ] : [
                      // Fila de préstamos (borrow): muestra "1" encima si la columna presta
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: E.borrow.map((bw, S) =>
                          v.jsx("div", { className: "w-14 text-center",
                            children: E.borrow[S] === 1 && v.jsx("span", { className: "text-orange-400 font-bold text-2xl", children: "¹" }),
                          }, S),
                        ),
                      }),
                      // Fila minuendo (dA)
                      v.jsx("div", {
                        className: "mb-2",
                        children: E.dA.map((f, S) =>
                          v.jsx("span", {
                            className: `inline-block w-14 text-center ${S === I ? "bg-yellow-500/50 rounded" : ""}`,
                            children: f,
                          }, S),
                        ),
                      }),
                      // Fila sustrayendo (dBpad, los ceros iniciales en gris)
                      v.jsxs("div", {
                        className: "flex items-center justify-end mb-2",
                        children: [
                          v.jsx("span", { className: "mr-4 text-4xl", children: "−" }),
                          E.dBpad.map((f, S) =>
                            v.jsx("span", {
                              className: `inline-block w-14 text-center ${E.CB < E.CA && S < E.CA - E.CB ? "text-white/30" : ""}`,
                              children: f,
                            }, S),
                          ),
                        ],
                      }),
                      v.jsx("div", { className: "border-b-4 border-white mb-2" }),
                      // Fila resultado (estudiante llena)
                      v.jsx("div", {
                        children: q.map((f, S) =>
                          v.jsx("span", {
                            className: `inline-block w-14 text-center ${q[S] ? (() => { const bin = S < E.CA - 1 ? E.borrow[S + 1] : 0; const eff = E.dA[S] - bin; const c = eff < E.dBpad[S] ? eff + 10 - E.dBpad[S] : eff - E.dBpad[S]; return parseInt(q[S]) === c ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"; })() : S === I ? "bg-yellow-500/50 rounded" : ""}`,
                            children: f || (S === I ? "?" : "_"),
                          }, S),
                        ),
                      }),
                    ],
                  }),
                }),
                // Estado completado / verificación
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: E._phase === "verify"
                        ? [
                            v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-4", children: "¡Verificación correcta! ✓" }),
                            v.jsx("div", { className: "text-blue-200 mb-6", children: ["resultado (", E.answer, ") + sustrayendo (", E.b, ") = minuendo (", E.a, ") ✓"] }),
                            v.jsx("button", { onClick: () => er(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                            v.jsx("button", { onClick: () => P("restas"), className: "w-full bg-blue-600 py-3 rounded-xl", children: "Cambiar Tipo" }),
                          ]
                        : [
                            v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-4", children: "¡Resta correcta! ✓" }),
                            v.jsx("div", { className: "text-blue-200 mb-4", children: [E.a, " − ", E.b, " = ", E.answer] }),
                            v.jsx("button", {
                              onClick: () => { V({ ...E, _phase: "verify" }); Z(new Array(E.CA).fill("")); J(E.CA - 1); },
                              className: "w-full bg-orange-500 py-4 rounded-xl font-bold mb-3",
                              children: "Verificar sumando ➕",
                            }),
                            v.jsx("button", { onClick: () => er(d), className: "w-full bg-green-600 py-3 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                            v.jsx("button", {
                              onClick: () => { Z(new Array(E.CA).fill("")); J(E.CA - 1); },
                              className: "w-full bg-blue-600 py-3 rounded-xl",
                              children: "Volver a Intentar",
                            }),
                          ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: E._phase === "verify"
                            ? (() => {
                                const S = I, cin = S < E.CA - 1 ? E.vCarry[S + 1] : 0;
                                return ["Verificación — columna ", E.CA - I, " de ", E.CA, ": ", E.dR[S], " + ", E.dBpad[S], " = ?",
                                  cin > 0 && v.jsxs("span", { className: "ml-2 text-green-400", children: ["(Llevas: ", cin, ")"] })];
                              })()
                            : (() => {
                                const S = I;
                                const bin = S < E.CA - 1 ? E.borrow[S + 1] : 0;
                                const eff = E.dA[S] - bin;
                                return ["Columna ", E.CA - I, " de ", E.CA, ": ",
                                  bin > 0
                                    ? v.jsxs("span", { children: [E.dA[S], " (−", bin, " prestado) − ", E.dBpad[S], " = ?"] })
                                    : [E.dA[S], " − ", E.dBpad[S], " = ?"],
                                  E.borrow[S] === 1 && v.jsxs("span", { className: "ml-2 text-orange-300", children: ["(Pide prestado al vecino)"] })];
                              })(),
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hr(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => er(d), className: "flex-1 bg-green-600 py-3 rounded-xl font-bold", children: "Nuevo" }),
                            v.jsx("button", {
                              onClick: () => { Z(new Array(E.CA).fill("")); J(E.CA - 1); V({ ...E, _phase: "resta" }); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "restadec" && E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("restas"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsx("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: E._phase === "verify"
                    ? "Verificación: resultado + sustraendo = minuendo"
                    : ["Resta Decimal — ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: (() => {
                      const CA = E.CA, dec = E.dec, dotIdx = CA - dec;
                      // Renderiza un array de dígitos con punto decimal insertado en dotIdx
                      const decRow = (arr, getCls) =>
                        Array.from({ length: CA + 1 }, (_, gi) => {
                          if (gi === dotIdx)
                            return v.jsx("span", { className: "inline-block w-5 text-center text-white/60 text-4xl", children: "." }, "dot");
                          const i = gi < dotIdx ? gi : gi - 1;
                          return v.jsx("span", { className: `inline-block w-14 text-center ${getCls(i)}`, children: arr[i] }, i);
                        });
                      return E._phase === "verify" ? [
                        // Fila acarreo verificación
                        v.jsx("div", {
                          className: "flex justify-end mb-1",
                          children: Array.from({ length: CA + 1 }, (_, gi) => {
                            if (gi === dotIdx) return v.jsx("span", { className: "inline-block w-5", children: "" }, "dot");
                            const i = gi < dotIdx ? gi : gi - 1;
                            return v.jsx("div", { className: "w-14 text-center",
                              children: E.vCarry[i + 1] > 0 && v.jsx("span", { className: "text-green-400 font-bold", children: E.vCarry[i + 1] }),
                            }, i);
                          }),
                        }),
                        // Fila resultado (primer sumando)
                        v.jsx("div", { className: "mb-2", children: decRow(E.dR, () => "") }),
                        // Fila sustraendo (segundo sumando) con "+"
                        v.jsxs("div", {
                          className: "flex items-center justify-end mb-2",
                          children: [
                            v.jsx("span", { className: "mr-4 text-4xl", children: "+" }),
                            decRow(E.dBpad, (i) => i === 0 && E.dBpad[i] === 0 ? "text-white/30" : ""),
                          ],
                        }),
                        v.jsx("div", { className: "border-b-4 border-white mb-2" }),
                        // Fila respuesta verificación
                        v.jsx("div", {
                          children: decRow(q.map((f, i) => f || (i === I ? "?" : "_")),
                            (i) => q[i] ? (parseInt(q[i]) === E.dA[i] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : i === I ? "bg-yellow-500/50 rounded" : ""),
                        }),
                      ] : [
                        // Fila préstamos
                        v.jsx("div", {
                          className: "flex justify-end mb-1",
                          children: Array.from({ length: CA + 1 }, (_, gi) => {
                            if (gi === dotIdx) return v.jsx("span", { className: "inline-block w-5", children: "" }, "dot");
                            const i = gi < dotIdx ? gi : gi - 1;
                            return v.jsx("div", { className: "w-14 text-center",
                              children: E.borrow[i] === 1 && v.jsx("span", { className: "text-orange-400 font-bold text-2xl", children: "¹" }),
                            }, i);
                          }),
                        }),
                        // Fila minuendo
                        v.jsx("div", { className: "mb-2", children: decRow(E.dA, (i) => i === I ? "bg-yellow-500/50 rounded" : "") }),
                        // Fila sustraendo con "−"
                        v.jsxs("div", {
                          className: "flex items-center justify-end mb-2",
                          children: [
                            v.jsx("span", { className: "mr-4 text-4xl", children: "−" }),
                            decRow(E.dBpad, (i) => i === 0 && E.dBpad[i] === 0 ? "text-white/30" : ""),
                          ],
                        }),
                        v.jsx("div", { className: "border-b-4 border-white mb-2" }),
                        // Fila resultado (estudiante llena)
                        v.jsx("div", {
                          children: decRow(q.map((f, i) => f || (i === I ? "?" : "_")),
                            (i) => q[i] ? (() => {
                              const bin = i < CA - 1 ? E.borrow[i + 1] : 0;
                              const eff = E.dA[i] - bin;
                              const c = eff < E.dBpad[i] ? eff + 10 - E.dBpad[i] : eff - E.dBpad[i];
                              return parseInt(q[i]) === c ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded";
                            })() : i === I ? "bg-yellow-500/50 rounded" : ""),
                        }),
                      ];
                    })(),
                  }),
                }),
                // Estado completado / teclado
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: E._phase === "verify"
                        ? [
                            v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-4", children: "¡Verificación correcta! ✓" }),
                            v.jsx("div", { className: "text-blue-200 mb-6", children: [E.b, " + ", E.answer, " = ", E.a, " ✓"] }),
                            v.jsx("button", { onClick: () => er(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                            v.jsx("button", { onClick: () => P("restas"), className: "w-full bg-blue-600 py-3 rounded-xl", children: "Cambiar Tipo" }),
                          ]
                        : [
                            v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-4", children: "¡Resta correcta! ✓" }),
                            v.jsx("div", { className: "text-blue-200 mb-4", children: [E.a, " − ", E.b, " = ", E.answer] }),
                            v.jsx("button", {
                              onClick: () => { V({ ...E, _phase: "verify" }); Z(new Array(E.CA).fill("")); J(E.CA - 1); },
                              className: "w-full bg-orange-500 py-4 rounded-xl font-bold mb-3",
                              children: "Verificar sumando ➕",
                            }),
                            v.jsx("button", { onClick: () => er(d), className: "w-full bg-green-600 py-3 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                            v.jsx("button", {
                              onClick: () => { Z(new Array(E.CA).fill("")); J(E.CA - 1); V({ ...E, _phase: "resta" }); },
                              className: "w-full bg-blue-600 py-3 rounded-xl",
                              children: "Volver a Intentar",
                            }),
                          ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: E._phase === "verify"
                            ? (() => {
                                const S = I, cin = S < E.CA - 1 ? E.vCarry[S + 1] : 0;
                                return ["Verificación — columna ", E.CA - I, " de ", E.CA, ": ",
                                  E.dR[S], " + ", E.dBpad[S], " = ?",
                                  cin > 0 && v.jsxs("span", { className: "ml-2 text-green-400", children: ["(Llevas: ", cin, ")"] })];
                              })()
                            : (() => {
                                const S = I;
                                const bin = S < E.CA - 1 ? E.borrow[S + 1] : 0;
                                return ["Columna ", E.CA - I, " de ", E.CA, ": ",
                                  bin > 0
                                    ? v.jsxs("span", { children: [E.dA[S], " (−", bin, " prestado) − ", E.dBpad[S], " = ?"] })
                                    : [E.dA[S], " − ", E.dBpad[S], " = ?"],
                                  E.borrow[S] === 1 && v.jsxs("span", { className: "ml-2 text-orange-300", children: ["(Pide prestado al vecino)"] })];
                              })(),
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hdr(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => er(d), className: "flex-1 bg-green-600 py-3 rounded-xl font-bold", children: "Nuevo" }),
                            v.jsx("button", {
                              onClick: () => { Z(new Array(E.CA).fill("")); J(E.CA - 1); V({ ...E, _phase: "resta" }); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "fracciones" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Fracciones" }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    ytCard("0ghKPQplRaE", "▶ Fracciones — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("lmHpxDThezI", "▶ Fracciones Mixtas — Ver en YouTube"),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr.filter((f) => f.type === "fraccion" || f.type === "fracmixta" || f.type === "fracpotmix").map((f) =>
                v.jsxs("button", {
                  onClick: () => f.type === "fracmixta" ? wfm(f) : f.type === "fracpotmix" ? wfp(f) : wf(f),
                  className: f.type === "fracmixta"
                    ? "bg-violet-700 p-6 rounded-2xl hover:bg-violet-600 flex flex-col items-center"
                    : f.type === "fracpotmix"
                    ? "bg-fuchsia-700 p-6 rounded-2xl hover:bg-fuchsia-600 flex flex-col items-center"
                    : "bg-indigo-600 p-6 rounded-2xl hover:bg-indigo-500 flex flex-col items-center",
                  children: [
                    v.jsxs("div", {
                      className: "inline-flex flex-col items-center text-3xl font-mono mb-3",
                      children: [
                        v.jsx("div", { className: "border-b-4 border-white px-3 min-w-[3rem] text-center leading-snug", children: f.type === "fracmixta" || f.type === "fracpotmix" ? "a±b" : "a" }),
                        v.jsx("div", { className: "px-3 min-w-[3rem] text-center leading-snug", children: "b" }),
                      ],
                    }),
                    v.jsx("div", { className: "font-bold", children: f.title }),
                    v.jsx("div", { className: f.type === "fracmixta" ? "text-violet-200 text-sm mt-1" : f.type === "fracpotmix" ? "text-fuchsia-200 text-sm mt-1" : "text-indigo-200 text-sm mt-1", children: f.icon }),
                  ],
                }, f.id),
              ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "fraccion" && E &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("fracciones"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                // Título
                v.jsx("h3", { className: "text-center text-xl font-bold mb-8", children: d == null ? void 0 : d.title }),
                // Problema en LaTeX
                v.jsx("div", {
                  className: "text-center text-4xl mb-4 overflow-x-auto",
                  children: (() => {
                    if (!E || !E.f1) return v.jsx("span", { children: "Cargando..." });
                    const os = (op) => op === 'suma' ? '+' : op === 'resta' ? '-' : op === 'mult' ? '\\times' : '\\div';
                    let latex = '';
                    const f1n = E.f1?.n ?? '?';
                    const f1d = E.f1?.d ?? '?';
                    if (E.op === "pot") {
                      latex = `\\left(\\frac{${f1n}}{${f1d}}\\right)^{${E.expo ?? '?'}}`;
                    } else {
                      const f2n = E.f2?.n ?? '?';
                      const f2d = E.f2?.d ?? '?';
                      latex = `\\frac{${f1n}}{${f1d}} ${os(E.op)} \\frac{${f2n}}{${f2d}}`;
                    }
                    return latexSpan(latex, "text-4xl");
                  })(),
                }),
                // Separador
                v.jsx("div", { className: "text-center text-2xl text-white/40 mb-4", children: "=" }),
                // Respuesta (input o resultado)
                v.jsx("div", {
                  className: "flex justify-center text-4xl mb-6",
                  children: (() => {
                    if (I === -1) {
                      const iN = parseInt(q[0]), iD = parseInt(q[1]);
                      const g = _gcd(Math.abs(iN), iD);
                      const ansN = E.ans?.n ?? 0;
                      const ansD = E.ans?.d ?? 1;
                      const ok = (iN / g) === ansN && (iD / g) === ansD;
                      return fracFn(q[0], q[1], ok ? "ok" : "err");
                    }
                    return fracFn(
                      q[0] !== "" ? q[0] : (I === 0 ? "?" : q[0] || "_"),
                      I >= 1 ? (q[1] !== "" ? q[1] : "?") : "?",
                      I === 0 ? "n" : "d"
                    );
                  })(),
                }),
                // Pista / Proceso — visible solo cuando showPotHint o al terminar
                (showPotHint || I === -1) && v.jsxs("div", {
                  className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-200",
                  children: [
                    v.jsx("div", { className: "font-bold mb-3 text-white text-base", children: "Proceso:" }),
                    (E.op === "suma" || E.op === "resta")
                      ? v.jsxs("div", {
                          children: [
                            v.jsx("div", { className: "mb-2", children: latexSpan(`\\text{MCM}(${E.f1?.d ?? '?'}, ${E.f2?.d ?? '?'}) = ${E.hint?.lcd ?? '?'}`) }),
                            v.jsx("div", { className: "flex flex-wrap items-center gap-2 mb-2",
                              children: latexSpan(`\\frac{${E.f1?.n ?? '?'}}{${E.f1?.d ?? '?'}} = \\frac{${E.hint?.e1 ?? '?'}}{${E.hint?.lcd ?? '?'}} \\quad \\frac{${E.f2?.n ?? '?'}}{${E.f2?.d ?? '?'}} = \\frac{${E.hint?.e2 ?? '?'}}{${E.hint?.lcd ?? '?'}}`) }),
                            v.jsx("div", { className: "flex items-center gap-2",
                              children: latexSpan(`\\frac{${E.hint?.e1 ?? '?'}}{${E.hint?.lcd ?? '?'}} ${E.op === "suma" ? '+' : '-'} \\frac{${E.hint?.e2 ?? '?'}}{${E.hint?.lcd ?? '?'}} = \\frac{${E.op === "suma" ? (E.hint?.e1 ?? 0) + (E.hint?.e2 ?? 0) : (E.hint?.e1 ?? 0) - (E.hint?.e2 ?? 0)}}{${E.hint?.lcd ?? '?'}} \\rightarrow \\frac{${E.ans?.n ?? '?'}}{${E.ans?.d ?? '?'}}`) }),
                          ],
                        })
                      : E.op === "mult"
                      ? v.jsxs("div", {
                          children: [
                            v.jsx("div", { className: "mb-1", children: latexSpan(`\\text{Numeradores: } ${E.f1?.n ?? '?'} \\times ${E.f2?.n ?? '?'} = ${(E.f1?.n ?? 0) * (E.f2?.n ?? 0)}`) }),
                            v.jsx("div", { className: "mb-2", children: latexSpan(`\\text{Denominadores: } ${E.f1?.d ?? '?'} \\times ${E.f2?.d ?? '?'} = ${(E.f1?.d ?? 0) * (E.f2?.d ?? 0)}`) }),
                            v.jsx("div", { className: "flex items-center gap-2", children: latexSpan(`\\frac{${E.f1?.n ?? '?'}}{${E.f1?.d ?? '?'}} \\times \\frac{${E.f2?.n ?? '?'}}{${E.f2?.d ?? '?'}} = \\frac{${(E.f1?.n ?? 0) * (E.f2?.n ?? 0)}}{${(E.f1?.d ?? 0) * (E.f2?.d ?? 0)}} \\rightarrow \\frac{${E.ans?.n ?? '?'}}{${E.ans?.d ?? '?'}}`) }),
                          ],
                        })
                      : E.op === "div"
                      ? v.jsxs("div", {
                          children: [
                            v.jsx("div", { className: "mb-2", children: latexSpan(`\\text{Invertir: } \\frac{${E.f2?.n ?? '?'}}{${E.f2?.d ?? '?'}} \\rightarrow \\frac{${E.hint?.recip?.n ?? '?'}}{${E.hint?.recip?.d ?? '?'}}`) }),
                            v.jsx("div", { className: "mb-2", children: latexSpan(`\\frac{${E.f1?.n ?? '?'}}{${E.f1?.d ?? '?'}} \\times \\frac{${E.hint?.recip?.n ?? '?'}}{${E.hint?.recip?.d ?? '?'}} = \\frac{${(E.f1?.n ?? 0) * (E.hint?.recip?.n ?? 0)}}{${(E.f1?.d ?? 0) * (E.hint?.recip?.d ?? 0)}}`) }),
                            v.jsx("div", { className: "flex items-center gap-2", children: latexSpan(`= \\frac{${(E.f1?.n ?? 0) * (E.hint?.recip?.n ?? 0)}}{${(E.f1?.d ?? 0) * (E.hint?.recip?.d ?? 0)}} \\rightarrow \\frac{${E.ans?.n ?? '?'}}{${E.ans?.d ?? '?'}}`) }),
                          ],
                        })
                      : v.jsxs("div", {
                          children: [
                            v.jsx("div", { className: "mb-1", children: latexSpan(`\\text{Numerador: } ${E.f1?.n ?? '?'}^{${E.expo ?? '?'}} = ${E.ans?.n ?? '?'}`) }),
                            v.jsx("div", { children: latexSpan(`\\text{Denominador: } ${E.f1?.d ?? '?'}^{${E.expo ?? '?'}} = ${E.ans?.d ?? '?'}`) }),
                          ],
                        }),
                  ],
                }),
                // Botón Ayuda — visible cuando la ayuda está oculta y el ejercicio no terminó
                !showPotHint && I !== -1 && v.jsx("div", {
                  className: "text-center mb-4",
                  children: v.jsx("button", {
                    onClick: () => setShowPotHint(true),
                    className: "bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold",
                    children: "📖 Ver Ayuda / Proceso",
                  }),
                }),
                // Mensaje de error inline cuando la respuesta es incorrecta
                fracWrong && I !== -1 && v.jsxs("div", {
                  className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                  children: [
                    v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Respuesta incorrecta" }),
                    v.jsxs("div", { className: "text-blue-200",
                      children: ["Ingresaste: ", latexSpan(`\\frac{${q[0] || '?'}}{${q[1] || '?'}}`, "text-red-300")],
                    }),
                    v.jsx("div", { className: "text-yellow-300 text-xs mt-1", children: "Corrige el numerador o denominador e inténtalo de nuevo" }),
                  ],
                }),
                // Teclado o resultado final
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-4", children: "¡Correcto! ✓" }),
                        v.jsx("button", { onClick: () => wf(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsx("div", { className: "text-center text-blue-200 mb-3",
                          children: I === 0 ? "Escriba el numerador de la respuesta:" : "Escriba el denominador de la respuesta:",
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) =>
                            v.jsx("button", {
                              onClick: () => hf(String(n)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: n,
                            }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto flex-wrap",
                          children: [
                            v.jsx("button", {
                              onClick: () => hf("⌫"),
                              className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl",
                              children: "⌫",
                            }),
                            I === 1 && v.jsx("button", {
                              onClick: () => { J(0); setFracWrong(false); },
                              className: "flex-1 bg-yellow-700 hover:bg-yellow-600 py-3 rounded-xl text-sm font-bold",
                              children: "← Numerador",
                            }),
                            v.jsx("button", {
                              onClick: () => hf("✓"),
                              className: `flex-1 py-3 rounded-xl text-xl font-bold ${q[I] ? fracWrong ? "bg-yellow-600 hover:bg-yellow-500" : "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"}`,
                              children: I === 0 ? "✓ Numerador" : fracWrong ? "✓ Reintentar" : "✓ Verificar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "fracmixta" && E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("fracciones"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-xl font-bold mb-6", children: "Operaciones Mixtas con Fracciones" }),
                // ── Barra de progreso ──
                v.jsxs("div", {
                  className: "flex justify-center gap-2 mb-4",
                  children: E.steps.map((_, idx) =>
                    v.jsx("div", {
                      className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        idx < mixStep ? "bg-green-500" : idx === mixStep ? "bg-yellow-500 animate-pulse" : "bg-white/20"
                      }`,
                      children: idx < mixStep ? "✓" : idx + 1,
                    }, idx),
                  ),
                }),
                // ── Expresión completa en LaTeX ──
                v.jsx("div", {
                  className: "text-center text-lg mb-4 bg-white/5 p-3 rounded-xl opacity-70 overflow-x-auto",
                  children: (() => {
                    const os = (op) => op === '+' ? '+' : op === '-' ? '-' : op === '×' ? '\\times' : '\\div';
                    const fr = (f) => f ? `\\frac{${f.n ?? '?' }}{${f.d ?? '?'}}` : '\\frac{?}{?}';
                    let latex = '';
                    if (E.tmpl === 0) {
                      latex = `\\left(${fr(E.A)} ${os(E.op1)} ${fr(E.B)}\\right) ${os(E.op2)} \\left[${fr(E.C)} ${os(E.op3)} \\left(${fr(E.D)} ${os(E.op4)} ${fr(E.E)}\\right)\\right]`;
                    } else if (E.tmpl === 1) {
                      latex = `\\left[${fr(E.A)} ${os(E.op1)} \\left(${fr(E.B)} ${os(E.op2)} ${fr(E.C)}\\right)\\right] ${os(E.op3)} \\left(${fr(E.D)} ${os(E.op4)} ${fr(E.E)}\\right)`;
                    } else {
                      latex = `\\left[${fr(E.A)} ${os(E.op1)} \\left(${fr(E.B)} ${os(E.op2)} ${fr(E.C)}\\right)\\right] ${os(E.op3)} \\left\\{ ${fr(E.D)} ${os(E.op4)} \\left[${fr(E.E)} ${os(E.op5)} \\left(${fr(E.F)} ${os(E.op6)} ${fr(E.G)}\\right)\\right] \\right\\}`;
                    }
                    return latexSpan(latex, "text-lg");
                  })(),
                }),
                // ── Operación actual ──
                (() => {
                  if (!E || !E.steps || mixStep >= E.steps.length) return null;
                  const step = E.steps[mixStep];
                  if (!step) return null;
                  const os = (op) => op === '+' ? '+' : op === '-' ? '−' : op === '×' ? '×' : '÷';
                  const bracketLabel = step.bracket === '()' ? 'Paréntesis' : step.bracket === '[]' ? 'Corchete' : step.bracket === '{}' ? 'Llave' : 'Resultado final';
                  const borderCls = step.bracket === '()' ? 'border-yellow-400/60' : step.bracket === '[]' ? 'border-blue-400/60' : step.bracket === '{}' ? 'border-purple-400/60' : 'border-green-400/60';
                  return v.jsxs("div", {
                    className: `bg-white/10 rounded-xl p-4 mb-4 border-2 ${borderCls}`,
                    children: [
                      v.jsxs("div", { className: "text-center mb-3",
                        children: [
                          v.jsx("div", { className: "text-sm text-blue-300 mb-1", children: `Paso ${mixStep + 1} de ${E.steps.length} — ${bracketLabel}` }),
                          v.jsxs("div", { className: "text-lg font-bold text-yellow-300", children: ["Resuelva: ", step.op === '×' ? 'Multiplicación' : step.op === '÷' ? 'División' : step.op === '+' ? 'Suma' : 'Resta'] }),
                        ],
                      }),
                      v.jsx("div", { className: "text-center text-2xl mb-4 overflow-x-auto",
                        children: (() => {
                          const os = (op) => op === '+' ? '+' : op === '-' ? '-' : op === '×' ? '\\times' : '\\div';
                          const qN = q[0] !== "" ? q[0] : (I === 0 ? "?" : "\\_");
                          const qD = I >= 1 ? (q[1] !== "" ? q[1] : "?") : "?";
                          const aN = step.a?.n ?? '?';
                          const aD = step.a?.d ?? '?';
                          const bN = step.b?.n ?? '?';
                          const bD = step.b?.d ?? '?';
                          const op = step.op ?? '+';
                          const latex = `\\frac{${aN}}{${aD}} ${os(op)} \\frac{${bN}}{${bD}} = \\frac{${qN}}{${qD}}`;
                          return latexSpan(latex, "text-2xl");
                        })(),
                      }),
                      mixShowHelp && v.jsxs("div", { className: "bg-blue-900/50 rounded-lg p-3 mb-3 text-sm",
                        children: [
                          v.jsx("div", { className: "font-bold text-yellow-300 mb-2", children: "💡 Ayuda — Resultado correcto:" }),
                          (() => {
                            const a = step.a || {};
                            const b = step.b || {};
                            const result = step.result || {};
                            const hint = step.hint || {};
                            const op = step.op;
                            if (op === '+' || op === '-') {
                              const lcd = hint.lcd ?? '?';
                              const e1 = hint.e1 ?? '?';
                              const e2 = hint.e2 ?? '?';
                              return v.jsxs("div", { className: "text-blue-200",
                                children: [
                                  v.jsx("div", { children: latexSpan(`\\text{MCM}(${a.d ?? '?'}, ${b.d ?? '?'}) = ${lcd}`) }),
                                  v.jsx("div", { className: "flex items-center gap-1 flex-wrap", children: latexSpan(`\\frac{${a.n ?? '?'}}{${a.d ?? '?'}} = \\frac{${e1}}{${lcd}} \\quad \\frac{${b.n ?? '?'}}{${b.d ?? '?'}} = \\frac{${e2}}{${lcd}}`) }),
                                  v.jsx("div", { children: latexSpan(`\\frac{${e1}}{${lcd}} ${op === '+' ? '+' : '-'} \\frac{${e2}}{${lcd}} = \\frac{${op === '+' ? (e1 + e2) : (e1 - e2)}}{${lcd}}`) }),
                                  v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                                ],
                              });
                            }
                            if (op === '×') {
                              const prodN = (a.n ?? 0) * (b.n ?? 0);
                              const prodD = (a.d ?? 1) * (b.d ?? 1);
                              return v.jsxs("div", { className: "text-blue-200",
                                children: [
                                  v.jsx("div", { children: latexSpan(`\\text{Numeradores: } \\frac{${a.n ?? '?'} \\times ${b.n ?? '?'}}{${a.d ?? '?'} \\times ${b.d ?? '?'}} = \\frac{${prodN}}{${prodD}}`) }),
                                  v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                                ],
                              });
                            }
                            const recip = hint.recip || {};
                            const prodN = (a.n ?? 0) * (recip.n ?? 0);
                            const prodD = (a.d ?? 1) * (recip.d ?? 1);
                            return v.jsxs("div", { className: "text-blue-200",
                              children: [
                                v.jsx("div", { children: latexSpan(`\\text{Invertir: } \\frac{${b.n ?? '?'}}{${b.d ?? '?'}} \\rightarrow \\frac{${recip.n ?? '?'}}{${recip.d ?? '?'}}`) }),
                                v.jsx("div", { children: latexSpan(`\\frac{${a.n ?? '?'}}{${a.d ?? '?'}} \\times \\frac{${recip.n ?? '?'}}{${recip.d ?? '?'}} = \\frac{${prodN}}{${prodD}}`) }),
                                v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                              ],
                            });
                          })(),
                        ],
                      }),
                      mixCorrectionData && v.jsxs("div", { className: "bg-red-900/60 border border-red-500 rounded-lg p-3 mb-3 text-sm",
                        children: [
                          v.jsx("div", { className: "font-bold text-red-300 mb-2", children: "❌ Respuesta incorrecta" }),
                          v.jsxs("div", { className: "text-blue-200 mb-2",
                            children: [
                              "Ingresaste: ", latexSpan(`\\frac{${mixCorrectionData?.inputN ?? '?'}}{${mixCorrectionData?.inputD ?? '?'}}`, "text-red-300"),
                              mixCorrectionData.simpN !== mixCorrectionData.inputN || mixCorrectionData.simpD !== mixCorrectionData.inputD
                                ? v.jsxs("span", { children: [" → simplificado: ", latexSpan(`\\frac{${mixCorrectionData.simpN}}{${mixCorrectionData.simpD}}`)] })
                                : null,
                            ],
                          }),
                          v.jsxs("div", { className: "text-green-300 font-bold mb-3",
                            children: ["Respuesta correcta: ", latexSpan(`\\frac{${mixCorrectionData.correctN}}{${mixCorrectionData.correctD}}`, "text-green-300")],
                          }),
                          v.jsx("button", {
                            onClick: applyMixCorrection,
                            className: "w-full bg-red-600 hover:bg-red-500 py-2 rounded-lg font-bold text-white",
                            children: "✓ Corregir y continuar",
                          }),
                        ],
                      }),
                    ],
                  });
                })(),
                // ── Teclado / Resultado ──
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: (() => {
                        const lastInput = mixInputs[mixInputs.length - 1];
                        const ansN = E.ans?.n ?? 0;
                        const ansD = E.ans?.d ?? 1;
                        const ok = lastInput && lastInput.n === ansN && lastInput.d === ansD;
                        return [
                          v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-4", children: "¡Problema completado! ✓" }),
                          v.jsxs("div", { className: "text-2xl mb-4", children: ["Respuesta final: ", latexSpan(`\\frac{${ansN}}{${ansD}}`, "text-green-300")] }),
                          v.jsx("button", { onClick: () => wfm(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                        ];
                      })(),
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", { className: "text-center text-blue-200 mb-4",
                          children: [I === 0 ? "Escriba el numerador:" : "Escriba el denominador:"],
                        }),
                        mixShowHelp && !mixCorrectionData && v.jsx("div", { className: "text-center text-orange-300 text-sm mb-2", children: "⚠️ Complete su respuesta y verifíquela" }),
                        mixCorrectionData && v.jsxs("div", { className: "text-center text-red-300 text-sm mb-2",
                          children: [
                            "❌ Respuesta incorrecta. ",
                            v.jsx("span", { className: "text-yellow-300", children: "Edite su respuesta o use «Corregir»" }),
                          ],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1,2,3,4,5,6,7,8,9,0].map((n) =>
                            v.jsx("button", { onClick: () => hfm(String(n)), className: "bg-white/20 p-4 rounded-xl text-2xl font-bold", children: n }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto flex-wrap",
                          children: [
                            v.jsx("button", { onClick: () => hfm("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", children: "⌫" }),
                            !mixShowHelp && !mixCorrectionData && v.jsx("button", {
                              onClick: () => setMixShowHelp(true),
                              className: "flex-1 bg-orange-600/80 hover:bg-orange-600 py-3 rounded-xl text-sm font-bold",
                              children: "💡 Ayuda",
                            }),
                            mixCorrectionData && v.jsx("button", {
                              onClick: applyMixCorrection,
                              className: "flex-1 bg-red-600 hover:bg-red-500 py-3 rounded-xl text-base font-bold",
                              children: "✓ Corregir",
                            }),
                            v.jsx("button", {
                              onClick: () => hfm("✓"),
                              className: `flex-1 py-3 rounded-xl text-xl font-bold ${q[I] ? mixCorrectionData ? "bg-yellow-600 hover:bg-yellow-500" : "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"}`,
                              children: I === 0 ? "✓" : mixCorrectionData ? "✓ Reintentar" : "✓ Listo",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "fracpotmix" && E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("fracciones"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-xl font-bold mb-6", children: "Operaciones Mixtas con Potenciación" }),
                // ── Barra de progreso ──
                v.jsxs("div", {
                  className: "flex justify-center gap-2 mb-4",
                  children: E.steps.map((_, idx) =>
                    v.jsx("div", {
                      className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        idx < potMixStep ? "bg-green-500" : idx === potMixStep ? "bg-yellow-500 animate-pulse" : "bg-white/20"
                      }`,
                      children: idx < potMixStep ? "✓" : idx + 1,
                    }, idx),
                  ),
                }),
                // ── Expresión completa en LaTeX ──
                v.jsx("div", {
                  className: "text-center text-lg mb-4 bg-white/5 p-3 rounded-xl opacity-70 overflow-x-auto",
                  children: (() => {
                    const os = (op) => op === '+' ? '+' : op === '-' ? '-' : op === '×' ? '\\times' : '\\div';
                    let latex = '';
                    if (E.tmpl === 0) {
                      latex = `\\left(\\frac{${E.A?.n ?? '?' }}{${E.A?.d ?? '?'}}\\right)^{${E.expA}} ${os(E.op)} \\left(\\frac{${E.B?.n ?? '?' }}{${E.B?.d ?? '?'}}\\right)^{${E.expB}}`;
                    } else if (E.tmpl === 1) {
                      latex = `\\left[\\left(\\frac{${E.A?.n ?? '?' }}{${E.A?.d ?? '?'}}\\right)^{${E.expA}} ${os(E.op1)} \\frac{${E.B?.n ?? '?' }}{${E.B?.d ?? '?'}}\\right] ${os(E.op2)} \\left(\\frac{${E.C?.n ?? '?' }}{${E.C?.d ?? '?'}}\\right)^{${E.expC}}`;
                    } else {
                      latex = `\\left\\{ \\left(\\frac{${E.A?.n ?? '?' }}{${E.A?.d ?? '?'}}\\right)^{${E.expA}} ${os(E.op2)} \\left[ \\left(\\frac{${E.B?.n ?? '?' }}{${E.B?.d ?? '?'}}\\right)^{${E.expB}} ${os(E.op1)} \\frac{${E.C?.n ?? '?' }}{${E.C?.d ?? '?'}} \\right] \\right\\}`;
                    }
                    return latexSpan(latex, "text-xl");
                  })(),
                }),
                // ── Operación actual ──
                (() => {
                  if (!E || !E.steps || potMixStep >= E.steps.length) return null;
                  const step = E.steps[potMixStep];
                  if (!step) return null;
                  const os = (op) => op === '+' ? '+' : op === '-' ? '−' : op === '×' ? '×' : '÷';
                  const borderCls = step.isPot ? 'border-pink-400/60' : step.bracket === '()' ? 'border-yellow-400/60' : step.bracket === '[]' ? 'border-blue-400/60' : step.bracket === '{}' ? 'border-purple-400/60' : 'border-green-400/60';
                  return v.jsxs("div", {
                    className: `bg-white/10 rounded-xl p-4 mb-4 border-2 ${borderCls}`,
                    children: [
                      v.jsxs("div", { className: "text-center mb-3",
                        children: [
                          v.jsx("div", { className: "text-sm text-blue-300 mb-1", children: `Paso ${potMixStep + 1} de ${E.steps.length}` }),
                          v.jsxs("div", { className: "text-lg font-bold text-yellow-300", children: [step.isPot ? "Resuelva: Potenciación" : `Resuelva: ${step.op === '×' ? 'Multiplicación' : step.op === '÷' ? 'División' : step.op === '+' ? 'Suma' : 'Resta'}`] }),
                        ],
                      }),
                      v.jsx("div", { className: "flex justify-center items-center gap-2 text-2xl mb-4 overflow-x-auto",
                        children: (() => {
                          const os = (op) => op === '+' ? '+' : op === '-' ? '-' : op === '×' ? '\\times' : '\\div';
                          const aN = step.a?.n ?? '?';
                          const aD = step.a?.d ?? '?';
                          const bN = step.b?.n ?? '?';
                          const bD = step.b?.d ?? '?';
                          const exp = step.exp ?? '?';
                          const op = step.op ?? '+';
                          let latex = '';
                          if (step.isPot) {
                            const qN = q[0] !== "" ? q[0] : (I === 0 ? "?" : "\\_");
                            const qD = I >= 1 ? (q[1] !== "" ? q[1] : "?") : "?";
                            latex = `\\left(\\frac{${aN}}{${aD}}\\right)^{${exp}} = \\frac{${qN}}{${qD}}`;
                          } else {
                            const qN = q[0] !== "" ? q[0] : (I === 0 ? "?" : "\\_");
                            const qD = I >= 1 ? (q[1] !== "" ? q[1] : "?") : "?";
                            latex = `\\frac{${aN}}{${aD}} ${os(op)} \\frac{${bN}}{${bD}} = \\frac{${qN}}{${qD}}`;
                          }
                          return latexSpan(latex, "text-2xl");
                        })(),
                      }),
                      potMixShowHelp && v.jsxs("div", { className: "bg-blue-900/50 rounded-lg p-3 mb-3 text-sm",
                        children: [
                          v.jsx("div", { className: "font-bold text-yellow-300 mb-2", children: "💡 Ayuda — Resultado correcto:" }),
                          (() => {
                            const a = step.a || {};
                            const b = step.b || {};
                            const result = step.result || {};
                            const hint = step.hint || {};
                            const op = step.op;
                            const isPot = step.isPot;
                            const exp = step.exp;
                            if (isPot) {
                              return v.jsxs("div", { className: "text-blue-200",
                                children: [
                                  v.jsx("div", { children: latexSpan(`\\text{Numerador: }${a.n ?? '?' }^{${exp ?? '?'}} = ${result.n ?? '?'}`) }),
                                  v.jsx("div", { children: latexSpan(`\\text{Denominador: }${a.d ?? '?' }^{${exp ?? '?'}} = ${result.d ?? '?'}`) }),
                                  v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                                ],
                              });
                            }
                            if (op === '+' || op === '-') {
                              const lcd = hint.lcd ?? '?';
                              const e1 = hint.e1 ?? '?';
                              const e2 = hint.e2 ?? '?';
                              return v.jsxs("div", { className: "text-blue-200",
                                children: [
                                  v.jsx("div", { children: latexSpan(`\\text{MCM}(${a.d ?? '?'}, ${b.d ?? '?'}) = ${lcd}`) }),
                                  v.jsx("div", { className: "flex items-center gap-1 flex-wrap", children: latexSpan(`\\frac{${a.n ?? '?'}}{${a.d ?? '?'}} = \\frac{${e1}}{${lcd}} \\quad \\frac{${b.n ?? '?'}}{${b.d ?? '?'}} = \\frac{${e2}}{${lcd}}`) }),
                                  v.jsx("div", { children: latexSpan(`\\frac{${e1}}{${lcd}} ${op === '+' ? '+' : '-'} \\frac{${e2}}{${lcd}} = \\frac{${op === '+' ? (e1 + e2) : (e1 - e2)}}{${lcd}}`) }),
                                  v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                                ],
                              });
                            }
                            if (op === '×') {
                              const prodN = (a.n ?? 0) * (b.n ?? 0);
                              const prodD = (a.d ?? 1) * (b.d ?? 1);
                              return v.jsxs("div", { className: "text-blue-200",
                                children: [
                                  v.jsx("div", { children: latexSpan(`\\text{Numeradores: } \\frac{${a.n ?? '?'} \\times ${b.n ?? '?'}}{${a.d ?? '?'} \\times ${b.d ?? '?'}} = \\frac{${prodN}}{${prodD}}`) }),
                                  v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                                ],
                              });
                            }
                            const recip = hint.recip || {};
                            const prodN = (a.n ?? 0) * (recip.n ?? 0);
                            const prodD = (a.d ?? 1) * (recip.d ?? 1);
                            return v.jsxs("div", { className: "text-blue-200",
                              children: [
                                v.jsx("div", { children: latexSpan(`\\text{Invertir: } \\frac{${b.n ?? '?'}}{${b.d ?? '?'}} \\rightarrow \\frac{${recip.n ?? '?'}}{${recip.d ?? '?'}}`) }),
                                v.jsx("div", { children: latexSpan(`\\frac{${a.n ?? '?'}}{${a.d ?? '?'}} \\times \\frac{${recip.n ?? '?'}}{${recip.d ?? '?'}} = \\frac{${prodN}}{${prodD}}`) }),
                                v.jsxs("div", { className: "text-green-300 font-bold mt-1", children: ["Respuesta: ", latexSpan(`\\frac{${result.n ?? '?'}}{${result.d ?? '?'}}`)] }),
                              ],
                            });
                          })(),
                        ],
                      }),
                      potMixCorrectionData && v.jsxs("div", { className: "bg-red-900/60 border border-red-500 rounded-lg p-3 mb-3 text-sm",
                        children: [
                          v.jsx("div", { className: "font-bold text-red-300 mb-2", children: "❌ Respuesta incorrecta" }),
                          v.jsxs("div", { className: "text-blue-200 mb-2",
                            children: [
                              "Ingresaste: ", latexSpan(`\\frac{${potMixCorrectionData.inputN}}{${potMixCorrectionData.inputD}}`, "text-red-300"),
                              potMixCorrectionData.simpN !== potMixCorrectionData.inputN || potMixCorrectionData.simpD !== potMixCorrectionData.inputD
                                ? v.jsxs("span", { children: [" → simplificado: ", latexSpan(`\\frac{${potMixCorrectionData.simpN}}{${potMixCorrectionData.simpD}}`)] })
                                : null,
                            ],
                          }),
                          v.jsxs("div", { className: "text-green-300 font-bold mb-3",
                            children: ["Respuesta correcta: ", latexSpan(`\\frac{${potMixCorrectionData.correctN}}{${potMixCorrectionData.correctD}}`, "text-green-300")],
                          }),
                        ],
                      }),
                    ],
                  });
                })(),
                // ── Teclado / Resultado ──
                I === -1
                  ? (() => {
                      const ansN = E.ans?.n ?? 0;
                      const ansD = E.ans?.d ?? 1;
                      return v.jsxs("div", {
                        className: "text-center",
                        children: [
                          v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-4", children: "¡Problema completado! ✓" }),
                          v.jsxs("div", { className: "text-2xl mb-4", children: ["Respuesta final: ", latexSpan(`\\frac{${ansN}}{${ansD}}`, "text-green-300")] }),
                          v.jsx("button", { onClick: () => wfp(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                        ],
                      });
                    })()
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", { className: "text-center text-blue-200 mb-4",
                          children: [I === 0 ? "Escriba el numerador:" : "Escriba el denominador:"],
                        }),
                        potMixShowHelp && !potMixCorrectionData && v.jsx("div", { className: "text-center text-orange-300 text-sm mb-2", children: "⚠️ Complete su respuesta y verifíquela" }),
                        potMixCorrectionData && v.jsxs("div", { className: "text-center text-red-300 text-sm mb-2",
                          children: [
                            "❌ Respuesta incorrecta. ",
                            v.jsx("span", { className: "text-yellow-300", children: "Edite su respuesta o use «Corregir»" }),
                          ],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1,2,3,4,5,6,7,8,9,0].map((n) =>
                            v.jsx("button", { onClick: () => hfp(String(n)), className: "bg-white/20 p-4 rounded-xl text-2xl font-bold", children: n }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto flex-wrap",
                          children: [
                            v.jsx("button", { onClick: () => hfp("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", children: "⌫" }),
                            !potMixShowHelp && !potMixCorrectionData && v.jsx("button", {
                              onClick: () => setPotMixShowHelp(true),
                              className: "flex-1 bg-orange-600/80 hover:bg-orange-600 py-3 rounded-xl text-sm font-bold",
                              children: "💡 Ayuda",
                            }),
                            potMixCorrectionData && v.jsx("button", {
                              onClick: applyPotMixCorrection,
                              className: "flex-1 bg-red-600 hover:bg-red-500 py-3 rounded-xl text-base font-bold",
                              children: "✓ Corregir",
                            }),
                            v.jsx("button", {
                              onClick: () => hfp("✓"),
                              className: `flex-1 py-3 rounded-xl text-xl font-bold ${q[I] ? potMixCorrectionData ? "bg-yellow-600 hover:bg-yellow-500" : "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"}`,
                              children: I === 0 ? "✓" : potMixCorrectionData ? "✓ Reintentar" : "✓ Listo",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "expr" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Signos de Agrupación",
            }),
            ytCard("AwS2nmRv-U4", "▶ Expresiones Algebraicas — Ver en YouTube"),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: xr
                .filter((f) => f.type === "expr")
                .map((f) =>
                  v.jsx(
                    "button",
                    {
                      onClick: () => Qe(f),
                      className: "bg-purple-600 p-6 rounded-2xl",
                      children: v.jsx("div", {
                        className: "font-bold",
                        children: f.title,
                      }),
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "probs" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Problemas",
            }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    ytCard("u8F-ZnBaXhA", "▶ Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("C01tANWnSNU", "▶ Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("11bNyZW9tlY", "▶ Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("SlDNOnmV7q8", "▶ Ver en YouTube"),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: xr
                .filter((f) => f.type === "problema")
                .map((f) =>
                  v.jsxs(
                    "button",
                    {
                      onClick: () => tt(f),
                      className: "bg-orange-600 p-6 rounded-2xl text-left",
                      children: [
                        v.jsx("div", {
                          className: "text-3xl mb-2",
                          children: f.icon,
                        }),
                        v.jsx("div", {
                          className: "font-bold",
                          children: f.title,
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Problemas Interactivos" }),
            v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: xr
                .filter((f) => f.type === "probi")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wpi(f),
                    className: "bg-teal-600 p-6 rounded-2xl text-left",
                    children: [
                      v.jsx("div", { className: "text-3xl mb-2", children: f.icon }),
                      v.jsx("div", { className: "font-bold", children: f.title }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Problemas con Fracciones" }),
            v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: xr
                .filter((f) => f.type === "probfrac")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => ttf(f),
                    className: "bg-indigo-600 p-6 rounded-2xl text-left",
                    children: [
                      v.jsxs("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                          v.jsx("div", { className: "text-3xl", children: f.icon }),
                          v.jsxs("div", { className: "inline-flex flex-col items-center font-mono text-xl",
                            children: [
                              v.jsx("div", { className: "border-b-2 border-white px-1 leading-tight", children: "a" }),
                              v.jsx("div", { className: "px-1 leading-tight", children: "b" }),
                            ],
                          }),
                        ],
                      }),
                      v.jsx("div", { className: "font-bold", children: f.title }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "mults" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Multiplicaciones",
            }),
            ytCard("gHNWX-7tbJY", "▶ Multiplicaciones — Ver en YouTube"),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "mult" || f.type === "multm")
                .map((f) =>
                  v.jsxs(
                    "button",
                    {
                      onClick: () => (f.type === "mult" ? wt(f) : wm(f)),
                      className:
                        "bg-yellow-600 p-6 rounded-2xl hover:bg-yellow-500",
                      children: [
                        v.jsx("div", {
                          className: "font-bold text-lg",
                          children: f.title,
                        }),
                        v.jsx("div", {
                          className: "text-yellow-200 text-sm",
                          children: "Practicar",
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "divs" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Divisiones" }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    ytCard("MhuDuTe8bZ0", "▶ Divisiones — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("mTrLfZ9e028", "▶ División por una Cifra — Ver en YouTube"),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "div")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wd(f),
                    className: "bg-cyan-600 p-6 rounded-2xl hover:bg-cyan-500",
                    children: [
                      v.jsx("div", { className: "font-bold text-lg", children: f.title }),
                      v.jsx("div", { className: "text-cyan-200 text-sm", children: "Practicar" }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Otras divisiones" }),
            v.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                v.jsxs("button", {
                  onClick: () => P("divds"),
                  className: "bg-pink-600 p-6 rounded-2xl hover:bg-pink-500",
                  children: [
                    v.jsx("div", { className: "font-bold text-lg", children: "÷. Con decimales" }),
                    v.jsx("div", { className: "text-pink-200 text-sm", children: "El cociente tiene cifras decimales" }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("divrs"),
                  className: "bg-amber-600 p-6 rounded-2xl hover:bg-amber-500",
                  children: [
                    v.jsx("div", { className: "font-bold text-lg", children: "÷R Con residuo" }),
                    v.jsx("div", { className: "text-amber-200 text-sm", children: "La división no es exacta" }),
                  ],
                }),
              ],
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "divds" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Divisiones Decimales" }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "divd")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wdd(f),
                    className: "bg-pink-600 p-6 rounded-2xl hover:bg-pink-500",
                    children: [
                      v.jsx("div", { className: "font-bold text-lg", children: f.title }),
                      v.jsx("div", { className: "text-pink-200 text-sm", children: "Practicar" }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", { onClick: () => P("divs"), className: "mt-6 text-blue-300", children: "← Volver a Divisiones" }),
          ],
        }),
      C === "divrs" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Divisiones con Residuo" }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "divr")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wdr(f),
                    className: "bg-amber-600 p-6 rounded-2xl hover:bg-amber-500",
                    children: [
                      v.jsx("div", { className: "font-bold text-lg", children: f.title }),
                      v.jsx("div", { className: "text-amber-200 text-sm", children: "Practicar" }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", { onClick: () => P("divs"), className: "mt-6 text-blue-300", children: "← Volver a Divisiones" }),
          ],
        }),
      C === "divg" &&
        E &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P(E.isRemainder ? "divrs" : E.isDecimal ? "divds" : "divs"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              style: { display: "flex", gap: "1rem", alignItems: "flex-start" },
              children: [
            v.jsxs("div", {
              style: { flex: 1 },
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["División - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8 overflow-x-auto",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: (() => {
                          const cells = [];
                          for (let _i = 0; _i < E.SLen + 1; _i++)
                            cells.push(v.jsx("div", { className: "w-12 text-center", children: " " }, "qs" + _i));
                          for (let _i = 0; _i < E.QLen; _i++) {
                            if (E.isDecimal && _i === E.decimalPos)
                              cells.push(v.jsx("div", { className: "w-4 text-center text-white", children: "." }, "qdot"));
                            const inRemPhase = E.isRemainder && E.phase === 1;
                            const col = inRemPhase
                              ? "bg-green-500/50 rounded"
                              : q[_i]
                                ? parseInt(q[_i]) === E.dQuotient[_i]
                                  ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"
                                : _i === I ? "bg-yellow-500/50 rounded" : "";
                            const ch = inRemPhase
                              ? E.dQuotient[_i]
                              : q[_i] || (_i === I ? "?" : "_");
                            cells.push(v.jsx("div", {
                              className: "w-12 text-center " + col,
                              children: ch,
                            }, "qq" + _i));
                          }
                          return cells;
                        })(),
                      }),
                      v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                      v.jsx("div", {
                        className: "flex items-center",
                        children: (() => {
                          const cells = [];
                          E.dDivisor.forEach((dg, _i) =>
                            cells.push(v.jsx("div", { className: "w-12 text-center", children: dg }, "ds" + _i))
                          );
                          cells.push(v.jsx("div", { className: "w-12 text-center text-2xl", children: "│" }, "bar"));
                          E.dDividend.forEach((dg, _i) =>
                            cells.push(v.jsx("div", { className: "w-12 text-center", children: dg }, "dd" + _i))
                          );
                          if (E.isDecimal) {
                            cells.push(v.jsx("div", { className: "w-4 text-center", children: "." }, "ddot"));
                            const decLen = E.decStr ? E.decStr.length : 1;
                            for (let _i = 0; _i < decLen; _i++)
                              cells.push(v.jsx("div", { className: "w-12 text-center text-blue-300", children: "0" }, "dz" + _i));
                          }
                          return cells;
                        })(),
                      }),
                    ],
                  }),
                }),
                E.isRemainder && v.jsxs("div", {
                  className: "flex justify-center mb-6",
                  children: v.jsxs("div", {
                    className: "font-mono text-2xl inline-flex items-center gap-2",
                    children: [
                      v.jsx("span", { className: "text-blue-200 font-bold", children: "Residuo:" }),
                      ...(() => {
                        if (!E.isRemainder) return [];
                        if (E.phase === 0) {
                          return E.dRemainder.map((_d, _i) =>
                            v.jsx("span", { className: "inline-block w-10 text-center text-gray-400", children: "_" }, "r" + _i)
                          );
                        }
                        if (I === -1) {
                          return E.dRemainder.map((_d, _i) =>
                            v.jsx("span", { className: "inline-block w-10 text-center bg-green-500/50 rounded", children: _d }, "r" + _i)
                          );
                        }
                        return E.dRemainder.map((_d, _i) => {
                          const col = q[_i]
                            ? parseInt(q[_i]) === E.dRemainder[_i]
                              ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"
                            : _i === I ? "bg-yellow-500/50 rounded" : "";
                          return v.jsx("span", {
                            className: "inline-block w-10 text-center " + col,
                            children: q[_i] || (_i === I ? "?" : "_"),
                          }, "r" + _i);
                        });
                      })(),
                    ],
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => (E.isRemainder ? wdr(d) : E.isDecimal ? wdd(d) : wd(d)),
                          className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => { const ph0 = E.isRemainder ? { ...E, phase: 0 } : E; V(ph0); Z(new Array(E.QLen).fill("")); J(0); },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: E.isRemainder && E.phase === 1
                            ? ["Dígito ", I + 1, " de ", E.RLen, " del residuo"]
                            : ["Dígito ", I + 1, " de ", E.QLen, " del cociente"],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-2",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hd(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            if (!E) return;
                            const y = [...q];
                            if (y[I] !== undefined && y[I] !== "") {
                              y[I] = "";
                              Z(y);
                            } else if (I > 0) {
                              y[I - 1] = "";
                              Z(y);
                              J(I - 1);
                            }
                          },
                          className: "w-full bg-red-700 hover:bg-red-600 py-3 rounded-xl text-xl font-bold mb-4 max-w-xs mx-auto block",
                          children: "⌫ Borrar",
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => (E.isRemainder ? wdr(d) : E.isDecimal ? wdd(d) : wd(d)),
                              className: "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => { const ph0 = E.isRemainder ? { ...E, phase: 0 } : E; V(ph0); Z(new Array(E.QLen).fill("")); J(0); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
            v.jsxs("div", {
              style: { minWidth: "175px" },
              className: "bg-white/10 p-4 rounded-2xl",
              children: [
                v.jsx("div", {
                  style: { textAlign: "center", fontWeight: "bold", fontSize: "0.85rem", color: "#fde68a", marginBottom: "0.75rem" },
                  children: "Tabla del " + E.divisor,
                }),
                ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                  const esCorrecta = I >= 0 && n === E.dQuotient[I];
                  return v.jsxs("div", {
                    style: {
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "4px 8px", borderRadius: "6px",
                      fontFamily: "monospace", fontSize: "0.95rem",
                      background: esCorrecta ? "rgba(234,179,8,0.25)" : "transparent",
                      color: esCorrecta ? "#fde68a" : "white",
                      fontWeight: esCorrecta ? "bold" : "normal",
                      marginBottom: "2px",
                    },
                    children: [
                      v.jsx("span", { children: n + " × " + E.divisor + " =" }),
                      v.jsx("span", {
                        style: { fontWeight: "bold", color: esCorrecta ? "#86efac" : "#93c5fd", marginLeft: "8px" },
                        children: n * E.divisor,
                      }),
                    ],
                  }, n);
                }),
              ],
            }),
              ],
            }),
          ],
        }),
      C === "suma" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("sumas"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Suma Vertical - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: E.carry.map((f, S) =>
                          v.jsx(
                            "div",
                            {
                              className: "w-14 text-center",
                              children:
                                E.carry[S + 1] > 0 &&
                                v.jsx("span", {
                                  className: "text-green-400 font-bold",
                                  children: E.carry[S + 1],
                                }),
                            },
                            S,
                          ),
                        ),
                      }),
                      ...E.dNums.slice(0, -1).map((row, ri) =>
                        v.jsx(
                          "div",
                          {
                            className: "mb-2",
                            children: row.map((f, S) =>
                              v.jsx(
                                "span",
                                {
                                  className: `inline-block w-14 text-center ${S === I ? "bg-yellow-500/50 rounded" : ""}`,
                                  children: S < E.W - String(E.nums[ri]).length ? "" : f,
                                },
                                S,
                              ),
                            ),
                          },
                          "r" + ri,
                        )
                      ),
                      v.jsxs("div", {
                        className: "flex items-center justify-end mb-2",
                        children: [
                          v.jsx("span", {
                            className: "mr-4 text-4xl",
                            children: "+",
                          }),
                          E.dNums[E.dNums.length - 1].map((f, S) =>
                            v.jsx(
                              "span",
                              {
                                className: `inline-block w-14 text-center ${S === I ? "bg-yellow-500/50 rounded" : ""}`,
                                children: S < E.W - String(E.nums[E.dNums.length - 1]).length ? "" : f,
                              },
                              S,
                            ),
                          ),
                        ],
                      }),
                      v.jsx("div", {
                        className: "border-b-4 border-white mb-2",
                      }),
                      v.jsx("div", {
                        children: q.map((f, S) =>
                          v.jsx(
                            "span",
                            {
                              className: `inline-block w-14 text-center ${q[S] ? (parseInt(q[S]) === E.dAnswer[S] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : S === I ? "bg-yellow-500/50 rounded" : ""}`,
                              children: f || (S === I ? "?" : "_"),
                            },
                            S,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => et(d),
                          className:
                            "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            Z(new Array(E.dA.length).fill(""));
                            J(E.dA.length - 1);
                          },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: [
                            "Columna ",
                            Ee - I,
                            " de ",
                            Ee,
                            ": ",
                            E.dNums.map((row) => row[I]).join(" + "),
                            " = ?",
                            I < Ee - 1 &&
                              E.carry[I + 1] > 0 &&
                              v.jsxs("span", {
                                className: "ml-2 text-green-400",
                                children: ["(Llevas: ", E.carry[I + 1], ")"],
                              }),
                          ],
                        }),
                        v.jsx("div", {
                          className:
                            "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx(
                              "button",
                              {
                                onClick: () => nt(String(f)),
                                className:
                                  "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                                children: f,
                              },
                              f,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => et(d),
                              className:
                                "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => {
                                Z(new Array(E.dA.length).fill(""));
                                J(E.dA.length - 1);
                              },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "sumadec" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("sumas"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsx("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Suma Decimal — ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: (() => {
                      const W = E.W, dec = E.dec, dotIdx = W - dec;
                      const leadZeros = W - E.origW;
                      const decRow = (arr, getCls, hideLead) =>
                        Array.from({ length: W + 1 }, (_, gi) => {
                          if (gi === dotIdx)
                            return v.jsx("span", { className: "inline-block w-5 text-center text-white/60 text-4xl", children: "." }, "dot");
                          const i = gi < dotIdx ? gi : gi - 1;
                          const hide = hideLead && i < leadZeros;
                          return v.jsx("span", { className: `inline-block w-14 text-center ${getCls(i)}`, children: hide ? "" : arr[i] }, i);
                        });
                      return [
                        v.jsx("div", {
                          className: "flex justify-end mb-1",
                          children: Array.from({ length: W + 1 }, (_, gi) => {
                            if (gi === dotIdx) return v.jsx("span", { className: "inline-block w-5", children: "" }, "dot");
                            const i = gi < dotIdx ? gi : gi - 1;
                            return v.jsx("div", { className: "w-14 text-center",
                              children: E.carry[i + 1] > 0 && v.jsx("span", { className: "text-green-400 font-bold", children: E.carry[i + 1] }),
                            }, i);
                          }),
                        }),
                        ...E.dNums.slice(0, -1).map((row, ri) =>
                          v.jsx("div", {
                            className: "mb-2",
                            children: decRow(row, (i) => i === I ? "bg-yellow-500/50 rounded" : "", true),
                          }, "r" + ri)
                        ),
                        v.jsxs("div", {
                          className: "flex items-center justify-end mb-2",
                          children: [
                            v.jsx("span", { className: "mr-4 text-4xl", children: "+" }),
                            decRow(E.dNums[E.dNums.length - 1], (i) => i === I ? "bg-yellow-500/50 rounded" : "", true),
                          ],
                        }),
                        v.jsx("div", { className: "border-b-4 border-white mb-2" }),
                        v.jsx("div", {
                          children: Array.from({ length: W + 1 }, (_, gi) => {
                            if (gi === dotIdx)
                              return v.jsx("span", { className: "inline-block w-5 text-center text-white/60 text-4xl", children: "." }, "dot");
                            const i = gi < dotIdx ? gi : gi - 1;
                            return v.jsx("span", {
                              className: `inline-block w-14 text-center ${q[i] ? (parseInt(q[i]) === E.dAnswer[i] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : i === I ? "bg-yellow-500/50 rounded" : ""}`,
                              children: q[i] || (i === I ? "?" : "_"),
                            }, i);
                          }),
                        }),
                      ];
                    })(),
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-6", children: "¡Muy bien! ✓" }),
                        v.jsx("button", { onClick: () => wsd(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                        v.jsx("button", {
                          onClick: () => { Z(new Array(E.W).fill("")); J(E.W - 1); },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: [
                            "Columna ", E.W - I, " de ", E.W, ": ",
                            E.dNums.map((row) => row[I]).join(" + "),
                            " = ?",
                            I < E.W - 1 && E.carry[I + 1] > 0 &&
                              v.jsxs("span", {
                                className: "ml-2 text-green-400",
                                children: ["(Llevas: ", E.carry[I + 1], ")"],
                              }),
                          ],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => nsd(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => wsd(d), className: "flex-1 bg-green-600 py-3 rounded-xl font-bold", children: "Nuevo" }),
                            v.jsx("button", {
                              onClick: () => { Z(new Array(E.W).fill("")); J(E.W - 1); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "mult" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("mults"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Multiplicación - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: E.carry.map((f, S) =>
                          v.jsx(
                            "div",
                            {
                              className: "w-14 text-center",
                              children:
                                E.carry[S + 1] > 0 &&
                                v.jsx("span", {
                                  className:
                                    "text-green-400 font-bold text-2xl",
                                  children: E.carry[S + 1],
                                }),
                            },
                            S,
                          ),
                        ),
                      }),
                      v.jsx("div", {
                        className: "mb-2",
                        children: Array.from({ length: E.R }, (_, S) => {
                          const oe = E.R - E.C;
                          return v.jsx(
                            "span",
                            {
                              className:
                                "inline-block w-14 text-center " +
                                (S === I ? "bg-yellow-500/50 rounded" : ""),
                              children: S >= oe ? E.dA[S - oe] : "",
                            },
                            S,
                          );
                        }),
                      }),
                      v.jsxs("div", {
                        className: "flex items-center justify-end mb-2",
                        children: [
                          v.jsx("span", {
                            className: "mr-4 text-4xl",
                            children: "×",
                          }),
                          Array.from({ length: E.R }, (_, S) =>
                            v.jsx(
                              "span",
                              {
                                className:
                                  "inline-block w-14 text-center " +
                                  (S === I ? "bg-yellow-500/50 rounded" : ""),
                                children: S === E.R - 1 ? E.b : "",
                              },
                              S,
                            ),
                          ),
                        ],
                      }),
                      v.jsx("div", {
                        className: "border-b-4 border-white mb-2",
                      }),
                      v.jsx("div", {
                        children: q.map((f, S) =>
                          v.jsx(
                            "span",
                            {
                              className:
                                "inline-block w-14 text-center " +
                                (q[S]
                                  ? parseInt(q[S]) === E.dR[S]
                                    ? "bg-green-500/50 rounded"
                                    : "bg-red-500/50 rounded"
                                  : S === I
                                    ? "bg-yellow-500/50 rounded"
                                    : ""),
                              children: f || (S === I ? "?" : "_"),
                            },
                            S,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => wt(d),
                          className:
                            "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            Z(new Array(E.R).fill(""));
                            J(E.R - 1);
                          },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: [
                            "Columna ",
                            E.R - I,
                            " de ",
                            E.R,
                            ": ",
                            (() => {
                              const oe = E.R - E.C;
                              return I >= oe ? E.dA[I - oe] : 0;
                            })(),
                            " × ",
                            E.b,
                            " = ?",
                            I < E.R - 1 &&
                              E.carry[I + 1] > 0 &&
                              v.jsxs("span", {
                                className: "ml-2 text-green-400",
                                children: ["(Llevas: ", E.carry[I + 1], ")"],
                              }),
                          ],
                        }),
                        v.jsx("div", {
                          className:
                            "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx(
                              "button",
                              {
                                onClick: () => ht(String(f)),
                                className:
                                  "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                                children: f,
                              },
                              f,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => wt(d),
                              className:
                                "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => {
                                Z(new Array(E.R).fill(""));
                                J(E.R - 1);
                              },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "multm" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("mults"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Multiplicación - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-6 overflow-x-auto",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: Array.from({ length: E.W }, (_, gc) => {
                          const ridx = gc - (E.W - E.CA);
                          return v.jsx(
                            "div",
                            {
                              className: "w-10 text-center",
                              children: ridx >= 0 ? E.dA[ridx] : " ",
                            },
                            gc,
                          );
                        }),
                      }),
                      v.jsxs("div", {
                        className: "flex justify-end items-center mb-1",
                        children: [
                          v.jsx("span", {
                            className: "text-2xl mr-1",
                            children: "×",
                          }),
                          Array.from({ length: E.W }, (_, gc) => {
                            const ridx = gc - (E.W - E.CB);
                            return v.jsx(
                              "div",
                              {
                                className: "w-10 text-center",
                                children: ridx >= 0 ? E.dB[ridx] : " ",
                              },
                              gc,
                            );
                          }),
                        ],
                      }),
                      v.jsx("div", {
                        className: "border-b-4 border-white mb-1",
                      }),
                      ...E.done.map((dn, pi) => {
                        const pt = E.parts[pi];
                        return v.jsx(
                          "div",
                          {
                            className: "flex justify-end mb-1",
                            children: Array.from({ length: E.W }, (_, gc) => {
                              const qidx = gc - (E.W - pt.shift - pt.len);
                              const isTrail = gc >= E.W - pt.shift;
                              return v.jsx(
                                "div",
                                {
                                  className: "w-10 text-center text-green-400",
                                  children: isTrail
                                    ? "0"
                                    : qidx >= 0 && qidx < pt.len
                                      ? dn[qidx]
                                      : " ",
                                },
                                gc,
                              );
                            }),
                          },
                          pi,
                        );
                      }),
                      E.phase < E.CB &&
                        (() => {
                          const pt = E.parts[E.phase];
                          return v.jsx("div", {
                            className: "flex justify-end mb-1",
                            children: Array.from({ length: E.W }, (_, gc) => {
                              const qidx = gc - (E.W - pt.shift - pt.len);
                              const isTrail = gc >= E.W - pt.shift;
                              if (isTrail)
                                return v.jsx(
                                  "div",
                                  {
                                    className: "w-10 text-center text-blue-300",
                                    children: "0",
                                  },
                                  gc,
                                );
                              if (qidx >= 0 && qidx < pt.len) {
                                const S = qidx;
                                const _ad = S >= 1 ? E.dA[S - 1] : 0,
                                  _cin = S < pt.len - 1 ? pt.carry[S + 1] : 0,
                                  c = (_ad * pt.bDigit + _cin) % 10;
                                const col = q[S]
                                  ? parseInt(q[S]) === c
                                    ? "bg-green-500/50 rounded"
                                    : "bg-red-500/50 rounded"
                                  : S === I
                                    ? "bg-yellow-500/50 rounded"
                                    : "";
                                return v.jsx(
                                  "div",
                                  {
                                    className: "w-10 text-center " + col,
                                    children: q[S] || (S === I ? "?" : "_"),
                                  },
                                  gc,
                                );
                              }
                              return v.jsx(
                                "div",
                                {
                                  className: "w-10 text-center",
                                  children: " ",
                                },
                                gc,
                              );
                            }),
                          });
                        })(),
                      E.phase >= E.CB &&
                        v.jsxs("div", {
                          children: [
                            v.jsx("div", {
                              className: "border-b-4 border-white mb-1",
                            }),
                            v.jsx("div", {
                              className: "flex justify-end",
                              children: Array.from({ length: E.W }, (_, gc) => {
                                const ridx = gc - (E.W - E.RF);
                                if (ridx >= 0 && ridx < E.RF) {
                                  const S = ridx;
                                  const col = q[S] ? (parseInt(q[S]) === E.dR[S] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : (S === I ? "bg-yellow-500/50 rounded" : "");
                                  return v.jsx(
                                    "div",
                                    {
                                      className: "w-10 text-center text-yellow-400 font-bold " + col,
                                      children: I === -1 ? E.dR[ridx] : (q[S] || (S === I ? "?" : "_"))
                                    },
                                    gc,
                                  );
                                }
                                return v.jsx(
                                  "div",
                                  {
                                    className: "w-10 text-center",
                                    children: " ",
                                  },
                                  gc,
                                );
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                E.phase >= E.CB && I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => wm(d),
                          className:
                            "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            V({ ...E, phase: 0, done: [] });
                            Z(new Array(E.parts[0].len).fill(""));
                            J(E.parts[0].len - 1);
                          },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-4 text-blue-200",
                          children: E.phase >= E.CB ? [
                            "Suma final: columna ",
                            E.RF - I,
                            " de ",
                            E.RF
                          ] : [
                            "Parcial ",
                            E.phase + 1,
                            " de ",
                            E.CB,
                            " (dígito: ",
                            E.parts[E.phase].bDigit,
                            "): columna ",
                            E.parts[E.phase].len - I,
                            " de ",
                            E.parts[E.phase].len,
                          ],
                        }),
                        v.jsx("div", {
                          className:
                            "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx(
                              "button",
                              {
                                onClick: () => hm(String(f)),
                                className:
                                  "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                                children: f,
                              },
                              f,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => wm(d),
                              className:
                                "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => {
                                if (E.phase >= E.CB) {
                                  Z(new Array(E.RF).fill(""));
                                  J(E.RF - 1);
                                } else {
                                  Z(new Array(E.parts[E.phase].len).fill(""));
                                  J(E.parts[E.phase].len - 1);
                                }
                              },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "expr_ej" &&
        G &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("expr"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsx("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: d == null ? void 0 : d.title,
                }),
                v.jsx("div", {
                  className: "bg-black/30 p-6 rounded-xl mb-6 text-center",
                  children: v.jsx("div", {
                    className: "text-3xl font-mono",
                    children: G.expr,
                  }),
                }),
                v.jsx("input", {
                  type: "number",
                  value: Q,
                  onChange: (f) => { ge(f.target.value); setRevisado(false); },
                  placeholder: "Respuesta",
                  className:
                    "w-full p-4 text-center text-xl bg-white/20 rounded-xl mb-4",
                }),
                revisado && Q !== "" &&
                  v.jsx("div", {
                    className:
                      "text-center text-xl font-bold mb-3 " +
                      (Number(Q) === G.answer
                        ? "text-green-400"
                        : "text-red-400"),
                    children:
                      Number(Q) === G.answer
                        ? "¡Correcto! ✓"
                        : "Incorrecto ✗",
                  }),
                // El proceso se muestra solo después de verificar, para no revelar la respuesta
                revisado && Q !== "" && G.steps &&
                  v.jsx("div", {
                    className: "mb-4 text-sm text-blue-200 text-center",
                    children: "Proceso: " + G.steps.join(" | "),
                  }),
                v.jsx("button", {
                  onClick: () => { if (Q === "") return; Me(); setRevisado(true); },
                  className:
                    "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                  children: "Verificar",
                }),
                v.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    v.jsx("button", {
                      onClick: () => Qe(d),
                      className: "flex-1 bg-blue-600 py-3 rounded-xl font-bold",
                      children: "Nuevo",
                    }),
                    v.jsx("button", {
                      onClick: () => { ge(""); setRevisado(false); },
                      className: "flex-1 bg-yellow-600 py-3 rounded-xl",
                      children: "Reintentar",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      C === "probi" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("probs"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsxs("div", {
                  className: "bg-yellow-600/20 border border-yellow-500 p-4 rounded-xl mb-6",
                  children: [
                    v.jsx("div", { className: "text-sm text-yellow-200 mb-2", children: "PROBLEMA:" }),
                    v.jsx("div", { className: "text-lg", children: E._pTexto }),
                  ],
                }),
                E._probi === "suma" && v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      ...E.dNums.map((row, ri) =>
                        v.jsx("div", {
                          className: "flex justify-end",
                          children: (() => {
                            const cells = [];
                            cells.push(v.jsx("div", { className: "w-10 text-center", children: ri === E.N - 1 ? "+" : " " }, "s" + ri));
                            row.forEach((x, ci) => cells.push(v.jsx("div", { className: "w-10 text-center", children: x === 0 && ci < row.length - 1 && row.slice(0, ci + 1).every(d => d === 0) ? " " : x }, ri + "c" + ci)));
                            return cells;
                          })(),
                        }, "row" + ri),
                      ),
                      v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                      v.jsx("div", {
                        className: "flex justify-end",
                        children: (() => {
                          const cells = [v.jsx("div", { className: "w-10", children: " " }, "rs")];
                          for (let i = 0; i < E.W; i++) {
                            const col = q[i] ? parseInt(q[i]) === E.dAnswer[i] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"
                              : i === I ? "bg-yellow-500/50 rounded" : "";
                            cells.push(v.jsx("div", { className: "w-10 text-center " + col, children: q[i] || (i === I ? "?" : "_") }, "r" + i));
                          }
                          return cells;
                        })(),
                      }),
                    ],
                  }),
                }),
                E._probi === "mult" && E._isMultM && v.jsxs("div", {
                  children: [
                    v.jsx("div", {
                      className: "flex justify-center mb-8",
                      children: v.jsxs("div", {
                        className: "font-mono text-3xl inline-block",
                        children: [
                          v.jsx("div", { className: "flex justify-end", children: E.dA.map((x, i) => v.jsx("div", { className: "w-10 text-center", children: x }, i)) }),
                          v.jsxs("div", { className: "flex justify-end", children: [v.jsx("div", { className: "w-10 text-center", children: "×" }), ...E.dB.map((x, i) => v.jsx("div", { className: "w-10 text-center", children: x }, "b" + i))] }),
                          v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                          ...E.parts.map((p, pi) => {
                            const isDone = pi < E.done.length, isCur = E.phase === pi;
                            const digitCells = p.digits.map((x, di) => {
                              const col = isDone ? "text-green-300" : isCur ? (q[di] ? parseInt(q[di]) === x ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : di === I ? "bg-yellow-500/50 rounded" : "") : "";
                              return v.jsx("div", { className: "w-10 text-center " + col, children: isDone ? x : isCur ? (q[di] || (di === I ? "?" : "_")) : "_" }, pi + "d" + di);
                            });
                            const trailCells = Array.from({ length: p.shift }, (_, ti) =>
                              v.jsx("div", { className: "w-10 text-center text-blue-300/50", children: "0" }, pi + "t" + ti)
                            );
                            return v.jsx("div", {
                              className: "flex justify-end",
                              children: [...digitCells, ...trailCells],
                            }, "p" + pi);
                          }),
                          v.jsx("div", { className: "border-b-4 border-white mb-1 mt-1" }),
                          E.phase >= E.CB && v.jsx("div", {
                            className: "flex justify-end",
                            children: E.dR.map((x, i) => {
                              const col = (E.phase >= E.CB && I !== -1) ? (q[i] ? parseInt(q[i]) === x ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : i === I ? "bg-yellow-500/50 rounded" : "") : I === -1 ? "text-green-300" : "";
                              return v.jsx("div", { className: "w-10 text-center " + col, children: I === -1 ? x : (q[i] || (i === I ? "?" : "_")) }, "f" + i);
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                E._probi === "mult" && E._isMult1 && v.jsxs("div", {
                  children: [
                    v.jsx("div", {
                      className: "flex justify-center mb-8",
                      children: v.jsxs("div", {
                        className: "font-mono text-3xl inline-block",
                        children: [
                          v.jsx("div", { className: "flex justify-end", children: E.dA.map((x, i) => v.jsx("div", { className: "w-10 text-center", children: x }, i)) }),
                          v.jsxs("div", { className: "flex justify-end", children: [v.jsx("div", { className: "w-10 text-center", children: "×" }), v.jsx("div", { className: "w-10 text-center", children: E.b })] }),
                          v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                          v.jsx("div", {
                            className: "flex justify-end",
                            children: E.dR.map((x, i) => {
                              const col = q[i] ? parseInt(q[i]) === x ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : i === I ? "bg-yellow-500/50 rounded" : "";
                              return v.jsx("div", { className: "w-10 text-center " + col, children: q[i] || (i === I ? "?" : "_") }, "r" + i);
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                E._probi === "div" && v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: (() => {
                          const cells = [];
                          for (let i = 0; i < E.SLen + 1; i++) cells.push(v.jsx("div", { className: "w-12 text-center", children: " " }, "qs" + i));
                          for (let i = 0; i < E.QLen; i++) {
                            const col = q[i] ? parseInt(q[i]) === E.dQuotient[i] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : i === I ? "bg-yellow-500/50 rounded" : "";
                            cells.push(v.jsx("div", { className: "w-12 text-center " + col, children: q[i] || (i === I ? "?" : "_") }, "qq" + i));
                          }
                          return cells;
                        })(),
                      }),
                      v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                      v.jsx("div", {
                        className: "flex items-center",
                        children: (() => {
                          const cells = [];
                          E.dDivisor.forEach((x, i) => cells.push(v.jsx("div", { className: "w-12 text-center", children: x }, "ds" + i)));
                          cells.push(v.jsx("div", { className: "w-12 text-center text-2xl", children: "│" }, "bar"));
                          E.dDividend.forEach((x, i) => cells.push(v.jsx("div", { className: "w-12 text-center", children: x }, "dd" + i)));
                          return cells;
                        })(),
                      }),
                    ],
                  }),
                }),
                I === -1 && (E._probi === "suma" || E._probi === "div" || (E._probi === "mult" && E._isMult1) || (E._probi === "mult" && E._isMultM && E.phase >= E.CB))
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-6", children: "¡Muy bien! ✓" }),
                        v.jsx("button", {
                          onClick: () => wpi(d),
                          className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => { const nE = E._probi === "mult" && E._isMultM ? { ...E, phase: 0, done: [] } : E; V(nE); const len = E._probi === "suma" ? E.W : E._probi === "div" ? E.QLen : E._isMult1 ? E.R : E.parts[0].len; Z(new Array(len).fill("")); J(E._probi === "div" ? 0 : len - 1); },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Reintentar",
                        }),
                      ],
                    })
                  : I !== -1 && v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-4 text-blue-200",
                          children: E._probi === "div"
                            ? ["Dígito ", I + 1, " de ", E.QLen, " del cociente"]
                            : E._probi === "mult" && E._isMultM
                              ? E.phase < E.CB
                                ? ["Producto parcial ", E.phase + 1, " — Columna ", E.parts[E.phase].len - I, " de ", E.parts[E.phase].len]
                                : ["Suma final — Dígito ", E.RF - I, " de ", E.RF]
                              : ["Dígito (derecha a izquierda)"],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hpi(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => wpi(d), className: "flex-1 bg-green-600 py-3 rounded-xl font-bold", children: "Nuevo" }),
                            v.jsx("button", {
                              onClick: () => { const nE = E._probi === "mult" && E._isMultM ? { ...E, phase: 0, done: [] } : E; V(nE); const len = E._probi === "suma" ? E.W : E._probi === "div" ? E.QLen : E._isMult1 ? E.R : E.parts[0].len; Z(new Array(len).fill("")); J(E._probi === "div" ? 0 : len - 1); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "prob" &&
        Ce &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("probs"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("div", {
                  className: "text-3xl mb-4",
                  children: d == null ? void 0 : d.icon,
                }),
                v.jsxs("div", {
                  className:
                    "bg-yellow-600/20 border border-yellow-500 p-4 rounded-xl mb-6",
                  children: [
                    v.jsx("div", {
                      className: "text-sm text-yellow-200 mb-2",
                      children: "PROBLEMA:",
                    }),
                    v.jsx("div", { className: "text-lg", children: Ce.texto }),
                  ],
                }),
                v.jsx("input", {
                  type: "number",
                  value: Q,
                  onChange: (f) => { ge(f.target.value); setRevisado(false); },
                  placeholder: "Su respuesta",
                  className:
                    "w-full p-4 text-center text-xl bg-white/20 rounded-xl mb-4",
                }),
                revisado && Q !== "" &&
                  v.jsx("div", {
                    className:
                      "text-center text-xl font-bold mb-3 " +
                      (Number(Q) === Ce.respuesta
                        ? "text-green-400"
                        : "text-red-400"),
                    children:
                      Number(Q) === Ce.respuesta
                        ? "¡Correcto! ✓"
                        : "Incorrecto ✗",
                  }),
                v.jsx("button", {
                  onClick: () => { if (Q === "") return; Ke(); setRevisado(true); },
                  className: "w-full bg-green-600 py-4 rounded-xl font-bold",
                  children: "Verificar",
                }),
                v.jsxs("div", {
                  className: "flex gap-3 mt-2",
                  children: [
                    v.jsx("button", {
                      onClick: () => tt(d),
                      className: "flex-1 bg-blue-600 py-3 rounded-xl font-bold",
                      children: "Nuevo Problema",
                    }),
                    v.jsx("button", {
                      onClick: () => { ge(""); setRevisado(false); },
                      className: "flex-1 bg-yellow-600 py-3 rounded-xl",
                      children: "Reintentar",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      C === "probfrac" && Ce &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("probs"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-4", children: d == null ? void 0 : d.icon }),
                v.jsxs("div", {
                  className: "bg-yellow-600/20 border border-yellow-500 p-4 rounded-xl mb-6",
                  children: [
                    v.jsx("div", { className: "text-sm text-yellow-200 mb-2", children: "PROBLEMA:" }),
                    v.jsx("div", { className: "text-lg leading-relaxed", children: rfrac(Ce.texto) }),
                  ],
                }),
                v.jsx("div", { className: "text-center text-white/60 mb-3", children: "Escriba la respuesta como fracción:" }),
                v.jsxs("div", { className: "flex justify-center mb-5",
                  children: [
                    I === -1
                      ? (() => {
                          const iN = parseInt(q[0]), iD = parseInt(q[1]);
                          const g = _gcd(Math.abs(iN), iD);
                          const ok = (iN/g) === Ce.respuesta.n && (iD/g) === Ce.respuesta.d;
                          return fracFn(q[0], q[1], ok ? "ok" : "err");
                        })()
                      : fracFn(
                          q[0] !== "" ? q[0] : (I === 0 ? "?" : "_"),
                          I >= 1 ? (q[1] !== "" ? q[1] : "?") : "?",
                          I === 0 ? "n" : "d"
                        ),
                  ],
                }),
                I !== -1 && v.jsxs("div", {
                  children: [
                    v.jsx("div", { className: "text-center text-blue-200 mb-3",
                      children: I === 0 ? "Escriba el numerador:" : "Escriba el denominador:",
                    }),
                    v.jsx("div", {
                      className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                      children: [1,2,3,4,5,6,7,8,9,0].map((n) =>
                        v.jsx("button", {
                          onClick: () => hpf(String(n)),
                          className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                          children: n,
                        }, n),
                      ),
                    }),
                    v.jsxs("div", { className: "flex gap-3 max-w-xs mx-auto",
                      children: [
                        v.jsx("button", { onClick: () => hpf("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", children: "⌫" }),
                        v.jsx("button", { onClick: () => hpf("✓"), className: "flex-1 bg-green-600 py-3 rounded-xl text-xl font-bold", children: "✓" }),
                      ],
                    }),
                  ],
                }),
                I === -1 && (() => {
                  const iN = parseInt(q[0]), iD = parseInt(q[1]);
                  const g = _gcd(Math.abs(iN), iD);
                  const ok = (iN/g) === Ce.respuesta.n && (iD/g) === Ce.respuesta.d;
                  return v.jsxs("div", { className: "text-center",
                    children: [
                      ok
                        ? v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-4", children: "¡Correcto! ✓" })
                        : v.jsxs("div", { className: "mb-4",
                            children: [
                              v.jsx("div", { className: "text-2xl text-red-400 font-bold mb-2", children: "Incorrecto ✗" }),
                              v.jsxs("div", { className: "flex justify-center items-center gap-2 text-blue-200",
                                children: ["Respuesta correcta: ", fracFn(Ce.respuesta.n, Ce.respuesta.d, "ok")],
                              }),
                            ],
                          }),
                      v.jsx("button", { onClick: () => ttf(d), className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                      v.jsx("button", { onClick: () => { Z(["",""]); J(0); }, className: "w-full bg-blue-600 py-3 rounded-xl", children: "Reintentar" }),
                    ],
                  });
                })(),
              ],
            }),
          ],
        }),
      K &&
        v.jsx("div", {
          className:
            "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
          children: v.jsxs("div", {
            className:
              "bg-gray-900 rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col",
            children: [
              v.jsxs("div", {
                className: "p-4 border-b border-white/20 flex justify-between",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx(window._icons.Kf, { className: "w-6 h-6 text-yellow-400" }),
                      v.jsx("span", {
                        className: "font-bold",
                        children: "Ayuda rápida",
                      }),
                    ],
                  }),
                  v.jsx("button", {
                    onClick: () => be(false),
                    children: v.jsx(window._icons.Gf, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              v.jsx("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-3",
                children: He.map((f, S) =>
                  v.jsx(
                    "div",
                    {
                      className:
                        "p-3 rounded-lg " +
                        (f.role === "user"
                          ? "bg-blue-600 ml-8"
                          : "bg-white/10 mr-8"),
                      children: f.ir
                        ? [f.text, v.jsx("button", { onClick: () => { be(false); P(f.ir); }, className: "block mt-2 text-sm font-bold text-blue-300 underline", children: "Abrir la herramienta →" }, "ir")]
                        : f.text,
                    },
                    S,
                  ),
                ),
              }),
              v.jsxs("div", {
                className: "p-4 border-t border-white/20 flex gap-2",
                children: [
                  v.jsx("input", {
                    value: fe,
                    onChange: (f) => Ie(f.target.value),
                    onKeyDown: (f) => f.key === "Enter" && Ye(),
                    placeholder: "Escriba un tema (p. ej., fracciones)",
                    className:
                      "flex-1 bg-white/10 rounded-lg px-4 py-2 outline-none",
                  }),
                  v.jsx("button", {
                    onClick: Ye,
                    className: "bg-blue-600 p-2 rounded-lg",
                    children: v.jsx(window._icons.Xf, { className: "w-5 h-5" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      // ── Categoría Regla de Tres Directa ───────────────────────────────────
      C === "r3directa_cat" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-1", children: "Regla de Tres Directa" }),
            v.jsx("p", { className: "text-cyan-200 text-sm mb-5", children: "Resuelve proporciones directas aplicadas al sector agropecuario. A mayor cantidad → mayor resultado." }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    ytCard("QOO3NczV_dg", "▶ Regla de Tres Directa — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("ZorbD4FDix8", "▶ Despeje de Variable PARTE UNO — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    ytCard("YnwrGKNJKX0", "▶ Despeje de Variable PARTE DOS — Ver en YouTube"),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-6",
              children: xr.filter((f) => f.type === "r3directa").map((f) =>
                v.jsxs("button", {
                  onClick: () => wr3(f),
                  className: "bg-cyan-800 hover:bg-cyan-700 p-6 rounded-2xl flex flex-col items-center",
                  children: [
                    v.jsx("div", { className: "text-4xl mb-3", children: f.icon }),
                    v.jsx("div", { className: "font-bold text-center", children: f.title }),
                    v.jsx("div", { className: "text-cyan-200 text-sm mt-1", children: "a₁/b₁ = a₂/x" }),
                  ],
                }, f.id),
              ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-2 text-blue-300", children: "Volver" }),
          ],
        }),
      // ── Ejercicio Regla de Tres Directa ───────────────────────────────────
      C === "r3directa" && E &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("r3directa_cat"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                // Título
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-cyan-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-cyan-400 mb-4", children: "Regla de Tres Directa — Contexto Agropecuario" }),
                // Problema
                v.jsx("div", { className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-100 leading-relaxed", children: E.texto }),
                // Verificación de proporcionalidad
                v.jsx("div", { className: "text-center text-xs text-green-300 font-bold mb-4", children: E.verifica }),
                // Tabla de proporciones
                v.jsx("div", {
                  className: "mb-4",
                  children: v.jsxs("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: [
                      v.jsx("table", {
                        style: { borderCollapse: "collapse", fontSize: "1rem" },
                        children: v.jsxs("tbody", {
                          children: [
                            v.jsxs("tr", {
                              children: [
                                v.jsx("th", { style: { background: "rgba(6,182,212,0.25)", color: "#67e8f9", padding: "6px 16px", border: "1px solid rgba(255,255,255,0.15)", fontWeight: "bold" }, children: E.hdrA }),
                                v.jsx("th", { style: { background: "rgba(6,182,212,0.25)", color: "#67e8f9", padding: "6px 16px", border: "1px solid rgba(255,255,255,0.15)", fontWeight: "bold" }, children: E.hdrB }),
                              ],
                            }),
                            v.jsxs("tr", {
                              children: [
                                v.jsx("td", { style: { background: "rgba(255,255,255,0.05)", color: "white", padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", textAlign: "center", fontSize: "1.1rem" }, children: E.a1 }),
                                v.jsx("td", { style: { background: "rgba(255,255,255,0.05)", color: "white", padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", textAlign: "center", fontSize: "1.1rem" }, children: E.b1 }),
                              ],
                            }),
                            v.jsxs("tr", {
                              children: [
                                v.jsx("td", { style: { background: "rgba(234,179,8,0.15)", color: "#fde047", padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", textAlign: "center", fontWeight: "bold", fontSize: "1.1rem" }, children: E.a2 }),
                                v.jsx("td", {
                                  style: { background: I === -1 ? "rgba(34,197,94,0.2)" : "rgba(234,179,8,0.15)", color: I === -1 ? "#4ade80" : "#fde047", padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", textAlign: "center", fontWeight: "bold", fontSize: "1.3rem" },
                                  children: I === -1 ? E.X : (q[0] !== "" ? q[0] : "x"),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                // Error inline
                r3Wrong && I !== -1 && v.jsxs("div", {
                  className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                  children: [
                    v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Respuesta incorrecta" }),
                    v.jsxs("div", { className: "text-yellow-200 text-xs",
                      children: ["Recuerde: x = (", v.jsx("b", {children: E.a2}), " × ", v.jsx("b", {children: E.b1}), ") ÷ ", v.jsx("b", {children: E.a1})],
                    }),
                  ],
                }),
                // Sección de Ayuda
                showR3Hint && v.jsxs("div", {
                  className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-200",
                  children: [
                    v.jsx("div", { className: "font-bold mb-3 text-white text-base", children: "Proceso — Multiplicación cruzada:" }),
                    v.jsxs("div", { className: "mb-2",
                      children: [
                        v.jsx("div", { className: "text-xs text-cyan-300 font-bold mb-1", children: "Paso 1 — Plantear la proporción:" }),
                        v.jsx("div", { children: latexSpan(E.paso1LaTeX) }),
                      ],
                    }),
                    v.jsxs("div", { className: "mb-2",
                      children: [
                        v.jsx("div", { className: "text-xs text-cyan-300 font-bold mb-1", children: "Paso 2 — Multiplicación cruzada:" }),
                        v.jsx("div", { children: latexSpan(E.paso2LaTeX) }),
                      ],
                    }),
                    v.jsxs("div", { className: "mb-2",
                      children: [
                        v.jsx("div", { className: "text-xs text-cyan-300 font-bold mb-1", children: "Paso 3 — Despejar x:" }),
                        v.jsx("div", { children: latexSpan(E.paso3LaTeX) }),
                      ],
                    }),
                    v.jsxs("div", {
                      children: [
                        v.jsx("div", { className: "text-xs text-cyan-300 font-bold mb-1", children: "Resultado:" }),
                        v.jsx("div", { className: "text-green-300 font-bold text-lg", children: latexSpan(E.paso4LaTeX) }),
                      ],
                    }),
                  ],
                }),
                // Botón Ayuda
                !showR3Hint && I !== -1 && v.jsx("div", {
                  className: "text-center mb-4",
                  children: v.jsx("button", {
                    onClick: () => setShowR3Hint(true),
                    className: "bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold",
                    children: "📖 Ver Ayuda / Proceso",
                  }),
                }),
                // Teclado o resultado final
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-3", children: "¡Correcto! ✓" }),
                        v.jsx("div", { className: "bg-cyan-900/50 rounded-xl p-3 mb-4 text-sm text-cyan-200", children: E.conclusion }),
                        v.jsx("button", { onClick: () => wr3(d), className: "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsx("div", { className: "text-center text-blue-200 mb-3 text-sm", children: "Calcule el valor de x y escríbalo:" }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1,2,3,4,5,6,7,8,9,0].map((n) =>
                            v.jsx("button", {
                              onClick: () => hfr3(String(n)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold hover:bg-white/30",
                              children: n,
                            }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => hfr3("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", children: "⌫" }),
                            v.jsx("button", {
                              onClick: () => hfr3("✓"),
                              className: `flex-1 py-3 rounded-xl font-bold ${q[0] ? r3Wrong ? "bg-yellow-600 hover:bg-yellow-500" : "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"}`,
                              children: r3Wrong ? "✓ Reintentar" : "✓ Verificar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      // ── Categoría Álgebra ─────────────────────────────────────────────────
      C === "algebra" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Álgebra" }),
            v.jsx("p", { className: "text-green-200 text-sm mb-6", children: "Resuelve problemas del sector agropecuario aplicando ecuaciones algebraicas." }),
            v.jsx("h3", { className: "text-lg font-bold text-yellow-300 mb-3", children: "Ecuaciones Cuadráticas" }),
            ytCard("vrWH6JnlB4I", "▶ Ecuaciones Cuadráticas — Ver en YouTube"),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-6",
              children: xr.filter((f) => f.type === "ecuacuad").map((f) =>
                v.jsxs("button", {
                  onClick: () => weq(f),
                  className: "bg-emerald-700 hover:bg-emerald-600 p-6 rounded-2xl flex flex-col items-center",
                  children: [
                    v.jsx("div", { className: "text-4xl mb-3", children: f.icon }),
                    v.jsx("div", { className: "font-bold text-center", children: f.title }),
                    v.jsx("div", { className: "text-emerald-200 text-sm mt-1", children: "x² + bx + c = 0" }),
                  ],
                }, f.id),
              ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-2 text-blue-300", children: "Volver" }),
          ],
        }),
      // ── Ejercicio Ecuación Cuadrática ──────────────────────────────────────
      C === "ecuacuad" && E &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("algebra"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                // Título
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-yellow-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-emerald-300 mb-5", children: "Ecuación Cuadrática — Contexto Agropecuario" }),
                // Problema contextualizado
                v.jsx("div", {
                  className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-100 leading-relaxed",
                  children: E.texto,
                }),
                // Planteamiento algebraico
                v.jsxs("div", {
                  className: "bg-emerald-900/40 border border-emerald-600/40 rounded-xl p-4 mb-4",
                  children: [
                    v.jsx("div", { className: "text-xs text-emerald-300 font-bold mb-2", children: "Planteamiento:" }),
                    v.jsx("div", { className: "text-sm text-blue-200 mb-3", children: E.variable }),
                    v.jsx("div", { className: "text-center text-xl mb-2", children: latexSpan(E.eq1LaTeX, "text-xl") }),
                    v.jsx("div", { className: "text-center text-xs text-white/50 mb-2", children: "⟶  Forma estándar:" }),
                    v.jsx("div", {
                      className: "text-center text-2xl font-bold",
                      children: latexSpan(E.eq2LaTeX, "text-2xl text-yellow-300"),
                    }),
                  ],
                }),
                // Barra de progreso (x₁ → x₂)
                I !== -1 && v.jsxs("div", {
                  className: "flex justify-center gap-4 mb-4",
                  children: [
                    v.jsxs("div", {
                      className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold ${I === 0 ? "bg-yellow-500 text-black" : "bg-green-600"}`,
                      children: [I === 0 ? "●" : "✓", " x₁ (menor)"],
                    }),
                    v.jsxs("div", {
                      className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold ${I === 1 ? "bg-yellow-500 text-black" : I === -1 ? "bg-green-600" : "bg-white/20"}`,
                      children: [I === 1 ? "●" : I === -1 ? "✓" : "○", " x₂ (mayor)"],
                    }),
                  ],
                }),
                // Valores ingresados (visualización)
                I !== -1 && v.jsx("div", {
                  className: "flex justify-center gap-6 text-center mb-4",
                  children: [
                    v.jsxs("div", {
                      className: `rounded-xl px-6 py-3 text-2xl font-mono font-bold border-2 ${I === 0 ? "border-yellow-400 bg-yellow-500/20" : "border-green-500 bg-green-500/20"}`,
                      children: [
                        v.jsx("div", { className: "text-xs text-white/60 mb-1", children: "x₁ (menor)" }),
                        q[0] !== "" ? q[0] : (I === 0 ? "?" : "_"),
                      ],
                    }),
                    v.jsxs("div", {
                      className: `rounded-xl px-6 py-3 text-2xl font-mono font-bold border-2 ${I === 1 ? "border-yellow-400 bg-yellow-500/20" : "border-white/20 bg-white/5"}`,
                      children: [
                        v.jsx("div", { className: "text-xs text-white/60 mb-1", children: "x₂ (mayor)" }),
                        I >= 1 ? (q[1] !== "" ? q[1] : "?") : "—",
                      ],
                    }),
                  ],
                }),
                // Error inline
                ecuaWrong && I !== -1 && v.jsxs("div", {
                  className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                  children: [
                    v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Respuesta incorrecta" }),
                    v.jsxs("div", { className: "text-yellow-200 text-xs",
                      children: ["Busque dos números que multiplicados den ", v.jsx("b", {children: E.A}), " y sumados den ", v.jsx("b", {children: E.S}), "."],
                    }),
                  ],
                }),
                // Sección de Ayuda / Proceso
                showEcuaHint && v.jsxs("div", {
                  className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-200",
                  children: [
                    v.jsx("div", { className: "font-bold mb-3 text-white text-base", children: "Proceso de resolución:" }),
                    // Paso 1: discriminante
                    v.jsxs("div", { className: "mb-3",
                      children: [
                        v.jsx("div", { className: "text-xs text-emerald-300 font-bold mb-1", children: "Paso 1 — Calcular el discriminante (Δ):" }),
                        v.jsx("div", { children: latexSpan(`\\Delta = b^2 - 4ac = (-${E.S})^2 - 4(1)(${E.A}) = ${E.S*E.S} - ${4*E.A} = ${E.disc}`) }),
                        v.jsx("div", { className: "mt-1", children: latexSpan(`\\sqrt{\\Delta} = \\sqrt{${E.disc}} = ${E.sqrtDisc}`) }),
                      ],
                    }),
                    // Paso 2: fórmulas
                    v.jsxs("div", { className: "mb-3",
                      children: [
                        v.jsx("div", { className: "text-xs text-emerald-300 font-bold mb-1", children: "Paso 2 — Aplicar la fórmula cuadrática:" }),
                        v.jsx("div", { className: "mb-1", children: latexSpan(`x_1 = \\frac{${E.S} - ${E.sqrtDisc}}{2} = \\frac{${E.S - E.sqrtDisc}}{2} = ${E.r1}`) }),
                        v.jsx("div", { children: latexSpan(`x_2 = \\frac{${E.S} + ${E.sqrtDisc}}{2} = \\frac{${E.S + E.sqrtDisc}}{2} = ${E.r2}`) }),
                      ],
                    }),
                    // Paso 3: factorización
                    v.jsxs("div", {
                      children: [
                        v.jsx("div", { className: "text-xs text-emerald-300 font-bold mb-1", children: "Paso 3 — Forma factorizada:" }),
                        v.jsx("div", { children: latexSpan(`(x - ${E.r1})(x - ${E.r2}) = 0`) }),
                      ],
                    }),
                  ],
                }),
                // Botón Ayuda
                !showEcuaHint && I !== -1 && v.jsx("div", {
                  className: "text-center mb-4",
                  children: v.jsx("button", {
                    onClick: () => setShowEcuaHint(true),
                    className: "bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold",
                    children: "📖 Ver Ayuda / Proceso",
                  }),
                }),
                // Teclado numérico o pantalla final
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-3", children: "¡Correcto! ✓" }),
                        v.jsxs("div", { className: "flex justify-center gap-6 mb-4",
                          children: [
                            v.jsxs("div", { className: "bg-green-500/20 border border-green-500 rounded-xl px-6 py-3 text-center",
                              children: [v.jsx("div", {className:"text-xs text-green-300 mb-1", children:"x₁"}), v.jsx("div", {className:"text-2xl font-bold font-mono", children: E.r1})],
                            }),
                            v.jsxs("div", { className: "bg-green-500/20 border border-green-500 rounded-xl px-6 py-3 text-center",
                              children: [v.jsx("div", {className:"text-xs text-green-300 mb-1", children:"x₂"}), v.jsx("div", {className:"text-2xl font-bold font-mono", children: E.r2})],
                            }),
                          ],
                        }),
                        v.jsx("div", { className: "bg-emerald-900/50 rounded-xl p-3 mb-4 text-sm text-emerald-200", children: E.conclusion }),
                        v.jsx("button", { onClick: () => weq(d), className: "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsx("div", { className: "text-center text-blue-200 mb-3 text-sm",
                          children: I === 0 ? "Escriba x₁ (la solución menor):" : "Escriba x₂ (la solución mayor):",
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1,2,3,4,5,6,7,8,9,0].map((n) =>
                            v.jsx("button", {
                              onClick: () => hfeq(String(n)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold hover:bg-white/30",
                              children: n,
                            }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => hfeq("⌫"),
                              className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl",
                              children: "⌫",
                            }),
                            I === 1 && v.jsx("button", {
                              onClick: () => { J(0); setEcuaWrong(false); },
                              className: "flex-1 bg-yellow-700 hover:bg-yellow-600 py-3 rounded-xl text-sm font-bold",
                              children: "← x₁",
                            }),
                            v.jsx("button", {
                              onClick: () => hfeq("✓"),
                              className: `flex-1 py-3 rounded-xl font-bold ${q[I] ? ecuaWrong ? "bg-yellow-600 hover:bg-yellow-500" : "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"}`,
                              children: ecuaWrong ? "✓ Reintentar" : "✓ Verificar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      // ── Categoría Factorización ───────────────────────────────────────────
      C === "factorizacion_cat" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-1", children: "Factorización de Expresiones Cuadráticas" }),
            v.jsx("p", { className: "text-violet-200 text-sm mb-5", children: "Factorice trinomios cuadráticos con el método de Po-Shen Loh: encuentre las dos raíces enteras." }),
            ytCard("PbSb8ifiJBk", "▶ Factorización de Expresiones Cuadráticas — Ver en YouTube"),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
              children: xr.filter((f) => f.type === "factorizacion").map((f) =>
                v.jsxs("button", {
                  onClick: () => wfact(f),
                  className: "bg-violet-800 hover:bg-violet-700 p-6 rounded-2xl flex flex-col items-center",
                  children: [
                    v.jsx("div", { className: "text-4xl mb-3", children: f.icon }),
                    v.jsx("div", { className: "font-bold text-center", children: f.title }),
                    v.jsx("div", { className: "text-violet-200 text-sm mt-1", children: "x² + bx + c" }),
                  ],
                }, f.id),
              ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-2 text-blue-300", children: "Volver" }),
          ],
        }),
      // ── Ejercicio Factorización ────────────────────────────────────────────
      C === "factorizacion" && E &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("factorizacion_cat"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-violet-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-violet-400 mb-4", children: "Factorización — Método Po-Shen Loh" }),
                // Expresión cuadrática
                v.jsxs("div", {
                  className: "bg-violet-900/50 border border-violet-500/50 rounded-xl p-4 mb-4 text-center",
                  children: [
                    v.jsx("div", { className: "text-xs text-violet-300 mb-2", children: "Factorice la expresión:" }),
                    v.jsx("div", { className: "text-2xl font-bold", children: latexSpan(E.exprTex) }),
                  ],
                }),
                // Vista previa de la forma factorizada mientras escribe
                v.jsxs("div", {
                  className: "bg-white/5 rounded-xl p-3 mb-4 text-center text-sm",
                  children: [
                    v.jsx("div", { className: "text-xs text-violet-300 mb-1", children: "Forma factorizada:" }),
                    I === -1
                      ? v.jsx("div", { className: "text-green-400 font-bold text-lg", children: latexSpan(E.factTex) })
                      : v.jsxs("div", { className: "text-blue-100 font-mono text-lg",
                          children: (() => {
                            const fStr = (raw) => {
                              if (!raw || raw === "-") return "?";
                              const n = -parseInt(raw);
                              return n >= 0 ? `+${n}` : `${n}`;
                            };
                            return [
                              "(x", v.jsx("span",{className:"text-yellow-300 font-bold",children:fStr(q[0])}),
                              ")(x", v.jsx("span",{className:"text-yellow-300 font-bold",children:I>=1?fStr(q[1]):"?"}), ")",
                            ];
                          })(),
                        }),
                  ],
                }),
                // Panel de ayuda Po-Shen Loh
                v.jsxs("div", {
                  className: "mb-4",
                  children: [
                    v.jsxs("button", {
                      onClick: () => setShowFactHint(!showFactHint),
                      style: { width:"100%", padding:"0.5rem 1rem", borderRadius:"0.75rem", fontSize:"0.8rem", fontWeight:"bold",
                        background: showFactHint ? "rgba(139,92,246,0.4)" : "rgba(139,92,246,0.2)",
                        border: "1px solid rgba(139,92,246,0.4)", color:"#c4b5fd", marginBottom:"0.5rem", cursor:"pointer" },
                      children: [showFactHint ? "▲ " : "▼ ", "Ayuda — Método Po-Shen Loh"],
                    }),
                    showFactHint && v.jsxs("div", {
                      className: "bg-violet-900/40 border border-violet-500/30 rounded-xl p-4 text-xs",
                      children: [
                        v.jsx("div", { className: "font-bold text-violet-300 mb-2", children: "Pasos del Método Po-Shen Loh:" }),
                        v.jsxs("div", { className: "space-y-2 text-blue-100",
                          children: [
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 1:"}), " Identifique b y c en x² + bx + c"] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 2:"}), " Calcule m = −b / 2 (punto medio de las raíces): ", latexSpan(E.paso2)] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 3:"}), " Calcule u²: ", latexSpan(E.paso3)] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 4:"}), " Calcule u: ", latexSpan(E.paso4)] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 5:"}), " Raíces: ", latexSpan(E.paso5)] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Resultado:"}), " ", latexSpan(E.factTex)] }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                // Error inline
                factWrong && I !== -1 && v.jsxs("div", {
                  className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                  children: [
                    v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Respuesta incorrecta" }),
                    v.jsxs("div", { className: "text-yellow-200 text-xs",
                      children: ["Busque dos números que multiplicados den ", v.jsx("b", {children: E.cCoef}),
                        " y sumados den ", v.jsx("b", {children: E.bCoef}), " (con su signo); las raíces son esos dos números cambiados de signo."] }),
                  ],
                }),
                // Resultado final o teclado
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-3", children: "¡Correcto! ✓" }),
                        v.jsxs("div", { className: "bg-violet-900/50 rounded-xl p-3 mb-4 text-sm",
                          children: [
                            v.jsx("div", { className: "text-violet-200 mb-1", children: "Forma factorizada:" }),
                            v.jsx("div", { className: "text-xl font-bold", children: latexSpan(E.factTex) }),
                            v.jsxs("div", { className: "text-xs text-violet-300 mt-2",
                              children: ["Raíces: x₁ = ", v.jsx("b",{children:E.r1}), ", x₂ = ", v.jsx("b",{children:E.r2})] }),
                          ],
                        }),
                        v.jsx("button", { onClick: () => wfact(d), className: "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold mb-3", children: "Nuevo Problema" }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsx("div", { className: "text-center text-blue-200 mb-2 text-sm",
                          children: I === 0 ? "Escriba la primera raíz (x₁, la menor):" : "Escriba la segunda raíz (x₂, la mayor):",
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-2",
                          children: [1,2,3,4,5,6,7,8,9,0].map((n) =>
                            v.jsx("button", {
                              onClick: () => hffact(String(n)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold hover:bg-white/30",
                              children: n,
                            }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => hffact("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", children: "⌫" }),
                            v.jsx("button", { onClick: () => hffact("±"), className: "flex-1 bg-orange-700 hover:bg-orange-600 py-3 rounded-xl font-bold text-lg", children: "±" }),
                            I === 1 && v.jsx("button", {
                              onClick: () => { J(0); setFactWrong(false); },
                              className: "flex-1 bg-yellow-700 hover:bg-yellow-600 py-3 rounded-xl text-sm font-bold",
                              children: "← x₁",
                            }),
                            v.jsx("button", {
                              onClick: () => hffact("✓"),
                              className: `flex-1 py-3 rounded-xl font-bold ${q[I] && q[I] !== "-" ? factWrong ? "bg-yellow-600 hover:bg-yellow-500" : "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"}`,
                              children: factWrong ? "✓ Reintentar" : "✓ Verificar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      // ── Categoría Conceptos Geométricos ─────────────────────────────────────
      C === "geometria_cat" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Conceptos Geométricos" }),
            v.jsx("p", { className: "text-green-200 text-sm mb-4", children: "Perímetros, áreas y volúmenes con situaciones del campo: cercas, lotes de siembra, tanques y bebederos." }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" },
              children: [
                v.jsx("div", { children: ytCard("WadkpkbyfRY") }),
                v.jsx("div", { children: ytCard("PBb-jFGTN0I") }),
              ],
            }),
            GEO_GRUPOS.map((g) =>
              v.jsxs("section", {
                className: "mb-6",
                children: [
                  v.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    v.jsx("h3", { className: "text-lg font-bold text-yellow-300", children: g.titulo }),
                    v.jsx("span", { className: "text-sm", style: { color: "#adb5bd" }, children: g.desc }),
                  ] }),
                  v.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                    children: GEO_EJERCICIOS.filter((e) => e.grupo === g.id).map((f) =>
                      v.jsxs("button", {
                        onClick: () => wgeo(f),
                        className: "bg-teal-600 hover:bg-teal-500 p-5 rounded-2xl flex flex-col items-center",
                        children: [
                          v.jsx("div", { className: "text-4xl mb-2", children: f.icon }),
                          v.jsx("div", { className: "font-bold text-center", children: f.title }),
                          v.jsx("div", { className: "text-sm mt-1", style: { color: "#ccfbf1" }, children: "Practicar" }),
                        ],
                      }, f.id),
                    ),
                  }),
                ],
              }, g.id),
            ),
            v.jsx("button", { onClick: () => P("home"), className: "mt-2 text-blue-300", children: "Volver" }),
          ],
        }),
      // ── Ejercicio de Conceptos Geométricos ─────────────────────────────────
      C === "geometria" && geoEj &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("geometria_cat"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-cyan-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-cyan-400 mb-4", children: geoEj.grupo + " — Contexto agropecuario" }),
                v.jsx("div", { className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-100 leading-relaxed", children: geoEj.texto }),
                v.jsx("div", { className: "mb-3", children: figuraGeo(geoEj.figura) }),
                v.jsxs("div", { className: "text-center text-sm mb-3", style: { color: "#ced4da" }, children: ["Fórmula: ", latexSpan(geoEj.formula)] }),
                v.jsxs("div", {
                  className: "flex items-center justify-center gap-2 mb-4",
                  children: [
                    v.jsx("span", { className: "text-sm", style: { color: "#ced4da" }, children: geoEj.pregunta + " =" }),
                    v.jsx("span", {
                      style: { minWidth: "7rem", padding: "0.4rem 0.8rem", borderRadius: "0.5rem", textAlign: "center", fontSize: "1.4rem", fontWeight: "bold",
                        background: geoRev ? (geoCorrecta() ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)") : "rgba(234,179,8,0.2)",
                        border: "2px solid " + (geoRev ? (geoCorrecta() ? "#22c55e" : "#ef4444") : "#eab308"),
                        color: geoRev ? (geoCorrecta() ? "#4ade80" : "#fca5a5") : "#fde047" },
                      children: geoResp || "?",
                    }),
                    v.jsx("span", { className: "text-sm", style: { color: "#ced4da" }, children: geoEj.unidad }),
                  ],
                }),
                geoRev && !geoCorrecta() && v.jsxs("div", {
                  className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                  children: [
                    v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Respuesta incorrecta" }),
                    v.jsx("div", { className: "text-yellow-200 text-xs", children: geoEj.pista }),
                  ],
                }),
                (geoAyuda || (geoRev && geoCorrecta())) && v.jsxs("div", {
                  className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-200",
                  children: [
                    v.jsx("div", { className: "font-bold mb-2 text-white", children: "Proceso:" }),
                    v.jsx("div", { className: "mb-2", children: latexSpan(geoEj.formula) }),
                    geoEj.pasos.map((t, i) => v.jsx("div", { className: "mb-1", children: latexSpan(t) }, i)),
                  ],
                }),
                geoRev && geoCorrecta()
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-3", children: "¡Correcto! ✓" }),
                        v.jsx("div", { className: "bg-cyan-900/50 rounded-xl p-3 mb-4 text-sm text-cyan-200", children: geoEj.conclusion }),
                        v.jsx("button", { onClick: () => wgeo(d), className: "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold", children: "Nuevo ejercicio" }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        !geoAyuda && v.jsx("div", {
                          className: "text-center mb-4",
                          children: v.jsx("button", { onClick: () => setGeoAyuda(true), className: "bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold", children: "📖 Ver Ayuda / Proceso" }),
                        }),
                        geoEj.decimales && v.jsx("div", { className: "text-center text-xs mb-2", style: { color: "#adb5bd" }, children: "Use la tecla «,» para escribir decimales (por ejemplo 0,75)." }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) =>
                            v.jsx("button", { onClick: () => teclaGeo(String(n)), className: "bg-white/20 p-4 rounded-xl text-2xl font-bold hover:bg-white/30", children: n }, n),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => teclaGeo("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", "aria-label": "Borrar", children: "⌫" }),
                            geoEj.decimales && v.jsx("button", { onClick: () => teclaGeo(","), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl font-bold", children: "," }),
                            v.jsx("button", {
                              onClick: verificarGeo,
                              className: "flex-1 py-3 rounded-xl font-bold " + (geoResp ? "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"),
                              children: "✓ Verificar",
                            }),
                          ],
                        }),
                        v.jsx("div", { className: "text-center mt-3", children: v.jsx("button", { onClick: () => wgeo(d), className: "text-blue-300 text-sm", children: "Otro ejercicio de este tipo →" }) }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      // ── Categoría Razonamiento Deductivo ────────────────────────────────────
      C === "razonamiento_cat" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Razonamiento Deductivo" }),
            v.jsx("p", { className: "text-green-200 text-sm mb-4", children: "Problemas de lógica del campo: tablas con pistas, como en los videos del profesor, y conclusiones a partir de premisas." }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" },
              children: [
                v.jsx("div", { children: ytCard("X2X7ckrTW_Y") }),
                v.jsx("div", { children: ytCard("RSXhqPLTKgQ") }),
              ],
            }),
            v.jsxs("section", { className: "mb-6", children: [
              v.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                v.jsx("h3", { className: "text-lg font-bold text-yellow-300", children: "Tablas lógicas" }),
                v.jsx("span", { className: "text-sm", style: { color: "#adb5bd" }, children: "Lea las pistas y marque ✓ o ✗ en la tabla matricial." }),
              ] }),
              v.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: LOGICA_NIVELES.map((f) => v.jsxs("button", {
                        onClick: () => wlog(f),
                        className: "bg-teal-600 hover:bg-teal-500 p-5 rounded-2xl flex flex-col items-center",
                        children: [
                          v.jsx("div", { className: "text-4xl mb-2", children: f.icon }),
                          v.jsx("div", { className: "font-bold text-center", children: f.title }),
                          v.jsx("div", { className: "text-sm mt-1 text-center", style: { color: "#ccfbf1" }, children: f.desc }),
                        ],
                      }, f.id)) }),
            ] }),
            v.jsxs("section", { className: "mb-6", children: [
              v.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                v.jsx("h3", { className: "text-lg font-bold text-yellow-300", children: "Deducción" }),
                v.jsx("span", { className: "text-sm", style: { color: "#adb5bd" }, children: "¿Qué se puede concluir de dos premisas?" }),
              ] }),
              v.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: DEDUCCION_TIPOS.map((f) => v.jsxs("button", {
                        onClick: () => wded(f),
                        className: "bg-teal-600 hover:bg-teal-500 p-5 rounded-2xl flex flex-col items-center",
                        children: [
                          v.jsx("div", { className: "text-4xl mb-2", children: f.icon }),
                          v.jsx("div", { className: "font-bold text-center", children: f.title }),
                          v.jsx("div", { className: "text-sm mt-1 text-center", style: { color: "#ccfbf1" }, children: f.desc }),
                        ],
                      }, f.id)) }),
            ] }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-2 text-blue-300", children: "Volver" }),
          ],
        }),
      // ── Ejercicio: tabla lógica ───────────────────────────────────────────
      C === "tablalogica" && logEj &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("razonamiento_cat"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-cyan-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-cyan-400 mb-4", children: "Razonamiento deductivo — Tabla matricial" }),
                v.jsx("div", { className: "bg-white/5 rounded-xl p-4 mb-3 text-sm text-blue-100 leading-relaxed", children:
                  `Cada productor tiene exactamente un${logEj.K > 2 ? "a opción de cada categoría" : " cultivo"} y no hay dos productores con la misma. Con las pistas, descubra quién tiene qué.` }),
                v.jsx("ol", { className: "mb-4 text-sm", style: { color: "#f8f9fa", paddingLeft: "1.5rem", listStyle: "decimal" }, children: logEj.textos.map((t, i) => v.jsx("li", { className: "mb-1", children: t }, i)) }),
                v.jsx("div", { className: "text-center text-xs mb-2", style: { color: "#adb5bd" }, children: "Toque una casilla para marcar ✗ (no va); otra vez para ✓ (sí va); otra vez para borrarla." }),
                tablaLog(logEj),
                v.jsx("div", { className: "text-center mt-3 mb-3 text-sm", style: { color: "#ced4da" }, children: v.jsxs("label", { style: { cursor: "pointer" }, children: [
                  v.jsx("input", { type: "checkbox", checked: logAuto, onChange: (e) => setLogAuto(e.target.checked), style: { marginRight: "0.4rem" } }),
                  "Al marcar ✓, completar con ✗ el resto de su fila y su columna" ] }) }),
                logPista && v.jsx("div", { className: "rounded-xl p-3 mb-3 text-sm text-center", style: { background: "rgba(234,179,8,0.15)", border: "1px solid #eab308", color: "#fde68a" }, children: "💡 " + logPista.texto }),
                logRev && (logRev.ok
                  ? v.jsxs("div", { className: "text-center mb-3", children: [
                      v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-2", children: "¡Correcto! ✓" }),
                      v.jsx("div", { className: "bg-cyan-900/50 rounded-xl p-3 text-sm text-cyan-200", children: logEj.cats[0].items.map((nom, p) =>
                        v.jsx("div", { children: nom + ": " + logEj.cats.slice(1).map((c, t) => c.items[logEj.sol[t + 1].indexOf(p)]).join(", ") }, p)) }),
                    ] })
                  : v.jsxs("div", { className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-3 text-sm text-center", children: [
                      v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "Todavía no" }),
                      v.jsx("div", { className: "text-yellow-200 text-xs", children: `Tiene ${logRev.bien} de ${logRev.total} parejas ✓ correctas` + (logRev.malas ? ` y ${logRev.malas} ✓ que no corresponden.` : ".") + " Use «Pista» si necesita ayuda." }),
                    ] })),
                logAyuda && v.jsxs("div", { className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-200", children: [
                  v.jsx("div", { className: "font-bold mb-2 text-white", children: "Proceso (cómo se deduce cada ✓):" }),
                  v.jsx("ol", { style: { paddingLeft: "1.5rem", listStyle: "decimal" }, children: logEj.pasos.filter((st) => st.val).map((st, i) => v.jsx("li", { className: "mb-1", children: `${st.a} – ${st.b}: ${st.razon.startsWith("Por ") ? "p" + st.razon.slice(1) : st.razon}.` }, i)) }),
                  v.jsx("div", { className: "text-xs mt-2", style: { color: "#adb5bd" }, children: "Las ✗ salen de las pistas negativas y de descartar el resto de la fila y la columna de cada ✓." }),
                ] }),
                v.jsxs("div", { className: "flex gap-2 justify-center flex-wrap", children: [
                  !(logRev && logRev.ok) && v.jsx("button", { onClick: verificarLog, className: "bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-bold", children: "✓ Verificar" }),
                  !(logRev && logRev.ok) && v.jsx("button", { onClick: pistaLog, className: "bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-xl font-bold", children: "💡 Pista" }),
                  !logAyuda && v.jsx("button", { onClick: () => setLogAyuda(true), className: "bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold", children: "📖 Ver Ayuda / Proceso" }),
                  v.jsx("button", { onClick: () => { setLogMarcas({}); setLogRev(null); setLogPista(null); }, className: "bg-gray-600 px-6 py-3 rounded-xl text-sm", children: "Borrar marcas" }),
                ] }),
                v.jsx("div", { className: "text-center mt-3", children: v.jsx("button", { onClick: () => wlog(d), className: (logRev && logRev.ok ? "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold" : "text-blue-300 text-sm"), children: logRev && logRev.ok ? "Nuevo ejercicio" : "Otra tabla de este nivel →" }) }),
              ],
            }),
          ],
        }),
      // ── Ejercicio: deducción ──────────────────────────────────────────────
      C === "deduccion" && dedEj &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("razonamiento_cat"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-cyan-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-cyan-400 mb-4", children: "Razonamiento deductivo — ¿Qué se puede concluir?" }),
                v.jsx("div", { className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-100 leading-relaxed", children: dedEj.premisas.map((t, i) =>
                  v.jsxs("div", { className: "mb-1", children: [v.jsx("b", { className: "text-yellow-300", children: `Premisa ${i + 1}: ` }), t] }, i)) }),
                v.jsx("div", { className: "text-sm font-bold text-yellow-300 mb-2", children: "Si las dos premisas son verdaderas, ¿qué se concluye con certeza?" }),
                v.jsx("div", { className: "flex flex-col gap-2 mb-4", children: dedEj.opciones.map((op, i) => {
                  const fin = dedElegida !== null, esta = dedElegida === i;
                  const estilo = fin && op.ok ? { background: "rgba(34,197,94,0.25)", border: "2px solid #22c55e" }
                    : esta ? { background: "rgba(239,68,68,0.25)", border: "2px solid #ef4444" }
                    : { background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)", opacity: fin ? 0.55 : 1 };
                  return v.jsx("button", { onClick: () => elegirDed(i), disabled: fin, className: "rounded-xl text-sm text-left", style: { ...estilo, padding: "0.75rem 1rem", color: "#fff" }, children: op.t }, i);
                }) }),
                dedElegida !== null && v.jsxs("div", { className: "text-center", children: [
                  v.jsx("div", { className: "text-2xl font-bold mb-2 " + (dedEj.opciones[dedElegida].ok ? "text-green-400" : "text-red-300"), children: dedEj.opciones[dedElegida].ok ? "¡Correcto! ✓" : "No es correcta" }),
                  !dedEj.opciones[dedElegida].ok && v.jsx("div", { className: "text-yellow-200 text-sm mb-2", children: dedEj.opciones[dedElegida].nota }),
                  v.jsxs("div", { className: "bg-cyan-900/50 rounded-xl p-3 mb-4 text-sm text-cyan-200 text-left", children: [v.jsx("b", { children: dedEj.forma + ". " }), dedEj.explicacion] }),
                  v.jsx("button", { onClick: () => wded(d), className: "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold", children: "Nuevo ejercicio" }),
                ] }),
              ],
            }),
          ],
        }),
      // ── Categoría Despeje de Variables ──────────────────────────────────────
      C === "despeje_cat" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Despeje de Variables" }),
            v.jsx("p", { className: "text-green-200 text-sm mb-4", children: "Fórmulas del campo y de las ciencias: primero elija cómo queda despejada la letra pedida y después calcule su valor con los datos." }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" },
              children: [
                v.jsx("div", { children: ytCard("ZorbD4FDix8") }),
                v.jsx("div", { children: ytCard("YnwrGKNJKX0") }),
              ],
            }),
            DESPEJE_NIVELES.map((g) =>
              v.jsxs("section", {
                className: "mb-6",
                children: [
                  v.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    v.jsx("h3", { className: "text-lg font-bold text-yellow-300", children: g.titulo }),
                    v.jsx("span", { className: "text-sm", style: { color: "#adb5bd" }, children: g.desc }),
                  ] }),
                  v.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                    children: DESPEJE_EJERCICIOS.filter((e) => e.nivel === g.nivel).map((f) =>
                      v.jsxs("button", {
                        onClick: () => wdesp(f),
                        className: "bg-teal-600 hover:bg-teal-500 p-5 rounded-2xl flex flex-col items-center",
                        children: [
                          v.jsx("div", { className: "text-4xl mb-2", children: f.icon }),
                          v.jsx("div", { className: "font-bold text-center", children: f.title }),
                          v.jsx("div", { className: "text-sm mt-1", style: { color: "#ccfbf1" }, children: "Practicar" }),
                        ],
                      }, f.id),
                    ),
                  }),
                ],
              }, g.nivel),
            ),
            v.jsx("button", { onClick: () => P("home"), className: "mt-2 text-blue-300", children: "Volver" }),
          ],
        }),
      // ── Ejercicio de Despeje de Variables ─────────────────────────────────
      C === "despeje" && despEj &&
        v.jsxs("main", {
          className: "max-w-xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("despeje_cat"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("h3", { className: "text-center text-lg font-bold mb-1 text-cyan-300", children: d?.title }),
                v.jsx("div", { className: "text-center text-xs text-cyan-400 mb-4", children: `Nivel ${d?.nivel} — Despeje de variables` }),
                v.jsx("div", { className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-100 leading-relaxed", children: despEj.texto }),
                v.jsxs("div", { className: "text-center mb-1", style: { color: "#ced4da" }, children: ["Fórmula: ", v.jsx("span", { className: "text-xl", children: latexSpan(despEj.formula) })] }),
                v.jsx("div", { className: "text-center text-xs mb-4", style: { color: "#adb5bd" }, children: despEj.leyenda }),
                // Paso 1: elegir la fórmula despejada
                v.jsx("div", { className: "text-sm font-bold text-yellow-300 mb-2", children: `Paso 1. ¿Cómo queda ${despEj.incognita} despejada?` }),
                v.jsx("div", {
                  className: "grid grid-cols-2 gap-2 mb-3",
                  children: despEj.opciones.map((op, i) => {
                    const elegida = despElegida === i, fin = despPaso1();
                    const estilo = elegida ? (op.ok ? { background: "rgba(34,197,94,0.25)", border: "2px solid #22c55e" } : { background: "rgba(239,68,68,0.25)", border: "2px solid #ef4444" })
                      : { background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)", opacity: fin ? 0.45 : 1 };
                    return v.jsx("button", { onClick: () => elegirDesp(i), disabled: fin, className: "rounded-xl text-lg", style: { ...estilo, padding: "0.75rem 0.5rem", color: "#fff" }, "aria-label": `Opción ${i + 1}`, children: latexSpan(op.tex) }, i);
                  }),
                }),
                despElegida !== null && !despPaso1() && v.jsxs("div", {
                  className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                  children: [
                    v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Esa no es" }),
                    v.jsx("div", { className: "text-yellow-200 text-xs", children: despEj.opciones[despElegida].pista + " Elija otra opción." }),
                  ],
                }),
                despPaso1() && v.jsxs("div", { className: "text-center text-green-300 text-sm mb-4", children: ["✓ Bien despejada: ", latexSpan(despEj.correcta)] }),
                // Paso 2: calcular el valor
                despPaso1() && v.jsxs("div", {
                  children: [
                    v.jsx("div", { className: "text-sm font-bold text-yellow-300 mb-2", children: `Paso 2. Calcule ${despEj.incognita} con los datos del enunciado.` }),
                    v.jsxs("div", {
                      className: "flex items-center justify-center gap-2 mb-4",
                      children: [
                        v.jsx("span", { className: "text-lg", style: { color: "#ced4da" }, children: latexSpan(despEj.pregunta + " =") }),
                        v.jsx("span", {
                          style: { minWidth: "7rem", padding: "0.4rem 0.8rem", borderRadius: "0.5rem", textAlign: "center", fontSize: "1.4rem", fontWeight: "bold",
                            background: despRev ? (despCorrecta() ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)") : "rgba(234,179,8,0.2)",
                            border: "2px solid " + (despRev ? (despCorrecta() ? "#22c55e" : "#ef4444") : "#eab308"),
                            color: despRev ? (despCorrecta() ? "#4ade80" : "#fca5a5") : "#fde047" },
                          children: despResp || "?",
                        }),
                        v.jsx("span", { className: "text-sm", style: { color: "#ced4da" }, children: despEj.unidad }),
                      ],
                    }),
                    despRev && !despCorrecta() && v.jsxs("div", {
                      className: "bg-red-900/60 border border-red-500 rounded-xl p-3 mb-4 text-sm text-center",
                      children: [
                        v.jsx("div", { className: "font-bold text-red-300 mb-1", children: "❌ Respuesta incorrecta" }),
                        v.jsx("div", { className: "text-yellow-200 text-xs", children: "Reemplace los datos en la fórmula despejada y haga primero lo que está dentro de los paréntesis o arriba de la fracción." }),
                      ],
                    }),
                  ],
                }),
                (despAyuda || (despRev && despCorrecta())) && v.jsxs("div", {
                  className: "bg-white/5 rounded-xl p-4 mb-4 text-sm text-blue-200",
                  children: [
                    v.jsx("div", { className: "font-bold mb-2 text-white", children: "Proceso (la misma operación a ambos lados):" }),
                    v.jsxs("div", { className: "mb-2", children: [latexSpan(despEj.formula), "  →  ", latexSpan(despEj.correcta)] }),
                    despEj.pasos.map((t, i) => v.jsx("div", { className: "mb-1", children: latexSpan(t) }, i)),
                  ],
                }),
                despRev && despCorrecta()
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-3xl text-green-400 font-bold mb-3", children: "¡Correcto! ✓" }),
                        v.jsxs("div", { className: "bg-cyan-900/50 rounded-xl p-3 mb-4 text-sm text-cyan-200", children: [
                          v.jsx("div", { className: "mb-1", children: despEj.conclusion }),
                          v.jsxs("div", { children: ["Comprobación: ", latexSpan(despEj.comprobacion)] }),
                        ] }),
                        v.jsx("button", { onClick: () => wdesp(d), className: "w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-bold", children: "Nuevo ejercicio" }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        !despAyuda && v.jsx("div", {
                          className: "text-center mb-4",
                          children: v.jsx("button", { onClick: () => setDespAyuda(true), className: "bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-xl text-sm font-bold", children: "📖 Ver Ayuda / Proceso" }),
                        }),
                        despPaso1() && despEj.decimales && v.jsx("div", { className: "text-center text-xs mb-2", style: { color: "#adb5bd" }, children: "Use la tecla «,» para escribir decimales (por ejemplo 1,5)." }),
                        despPaso1() && v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-3",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) =>
                            v.jsx("button", { onClick: () => teclaDesp(String(n)), className: "bg-white/20 p-4 rounded-xl text-2xl font-bold hover:bg-white/30", children: n }, n),
                          ),
                        }),
                        despPaso1() && v.jsxs("div", {
                          className: "flex gap-2 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => teclaDesp("⌫"), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl", "aria-label": "Borrar", children: "⌫" }),
                            despEj.decimales && v.jsx("button", { onClick: () => teclaDesp(","), className: "flex-1 bg-gray-600 py-3 rounded-xl text-xl font-bold", children: "," }),
                            v.jsx("button", {
                              onClick: verificarDesp,
                              className: "flex-1 py-3 rounded-xl font-bold " + (despResp ? "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-50"),
                              children: "✓ Verificar",
                            }),
                          ],
                        }),
                        v.jsx("div", { className: "text-center mt-3", children: v.jsx("button", { onClick: () => wdesp(d), className: "text-blue-300 text-sm", children: "Otro ejercicio de este tipo →" }) }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "aprendo_videos" &&
        v.jsxs("main", {
          className: "max-w-5xl mx-auto p-6 aprendo-videos",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-2", children: "▶ Aprendo con videos" }),
            v.jsxs("p", {
              className: "mb-4",
              style: { color: "#ced4da" },
              children: [
                "Videos del canal del profesor ", v.jsx("strong", { children: "John Jairo Estrada" }),
                `, del equipo de la Caja de Herramientas, ordenados por tema (${new Set(VIDEOS_CANAL.temas.flatMap((t) => t[3])).size} videos). Cada tema tiene un botón que abre la herramienta de la aplicación donde se practica lo que se ve en el video.`,
              ],
            }),
            v.jsx("a", { className: "av-canal", href: VIDEOS_CANAL.canal, target: "_blank", rel: "noopener noreferrer", children: "▶ Ver el canal completo" }),
            v.jsx("div", {
              className: "av-lista",
              children: VIDEOS_CANAL.temas.map(([tema, pestana, que, ids], i) =>
                v.jsxs("section", {
                  className: "av-tema",
                  children: [
                    v.jsxs("div", {
                      className: "av-tema-info",
                      children: [
                        v.jsx("h3", { children: `${i + 1}. ${tema}` }),
                        v.jsx("p", { children: que }),
                        pestana
                          ? v.jsx("button", { className: "av-boton", onClick: () => P(pestana), children: `Ver en la aplicación: ${NOMBRES_PESTANAS[pestana] || pestana} →` })
                          : v.jsx("p", { className: "av-nota", children: "Tema de apoyo: no tiene una herramienta propia en la aplicación." }),
                      ],
                    }),
                    v.jsx("div", { className: "av-tema-videos", children: ids.map((id) => v.jsx("div", { children: ytCard(id) }, id)) }),
                  ],
                }, tema)
              ),
            }),
            v.jsx("div", { className: "alert alert-warning mt-6", children: "⚠ Los videos se abren en una pestaña nueva del navegador y necesitan conexión a internet." }),
          ],
        }),
      C === "evaluaciones_modulos" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              style: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.4rem", color: "#63cab7" },
              children: "📝 Evaluaciones por Módulo",
            }),
            v.jsx("p", {
              style: { fontSize: "0.9rem", color: "#94a3b8", marginBottom: "1.5rem" },
              children: "Seleccione el módulo para abrir su evaluación en línea.",
            }),
            v.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.2rem",
                marginBottom: "2rem",
              },
              children: [
                { label: "Módulo Uno", url: "https://jestrada2020.github.io/Evaluacion_moduloUno_2026/", num: "01" },
                { label: "Módulo Dos", url: "https://jestrada2020.github.io/Evaluacion_ModuloDos_2026/", num: "02" },
                { label: "Módulo Tres", url: "https://jestrada2020.github.io/Evaluacion_ModuloTres_2026/", num: "03" },
                { label: "Módulo Cuatro", url: "https://jestrada2020.github.io/Evaluacion_ModuloCuatro_2026/", num: "04" },
                { label: "Módulo Cinco", url: "https://jestrada2020.github.io/Evaluacion_ModoloCinco_2026/", num: "05" },
                { label: "Módulo Seis", url: "https://jestrada2020.github.io/Evaluacion_ModuloSeis_2026/", num: "06" },
                { label: "Módulo Siete", url: "https://jestrada2020.github.io/Evaluacion_ModuloSiete_2026/", num: "07" },
              ].map((m) =>
                v.jsx("a", {
                  href: m.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "linear-gradient(135deg, rgba(99,202,183,0.15) 0%, rgba(15,45,31,0.6) 100%)",
                    border: "1px solid rgba(99,202,183,0.35)",
                    borderRadius: "1rem",
                    padding: "1.1rem 1.3rem",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "transform 0.15s, box-shadow 0.15s",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,202,183,0.25)";
                    e.currentTarget.style.borderColor = "rgba(99,202,183,0.7)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.3)";
                    e.currentTarget.style.borderColor = "rgba(99,202,183,0.35)";
                  },
                  children: [
                    v.jsx("div", {
                      style: {
                        minWidth: "52px",
                        height: "52px",
                        borderRadius: "0.75rem",
                        background: "rgba(99,202,183,0.25)",
                        border: "2px solid rgba(99,202,183,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        color: "#63cab7",
                        flexShrink: 0,
                      },
                      children: m.num,
                    }),
                    v.jsxs("div", {
                      style: { flex: 1 },
                      children: [
                        v.jsx("div", {
                          style: { fontSize: "0.75rem", color: "#63cab7", fontWeight: "bold", marginBottom: "0.2rem", letterSpacing: "0.05em" },
                          children: "EVALUACIÓN",
                        }),
                        v.jsx("div", {
                          style: { fontSize: "1rem", fontWeight: "bold", color: "#e2f5eb" },
                          children: m.label,
                        }),
                        v.jsx("div", {
                          style: { fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.2rem" },
                          children: "Abrir evaluación →",
                        }),
                      ],
                    }),
                  ],
                }, m.num)
              ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              style: {
                marginTop: "0.5rem",
                padding: "0.4rem 1rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "0.5rem",
                color: "#93c5fd",
                cursor: "pointer",
                fontSize: "0.9rem",
              },
              children: "← Volver",
            }),
          ],
        }),
      // ── Pestaña Dedicada: Módulos Curriculares en PDF ────────────────────────
      C === "guias_modulos_pdf" &&
        v.jsxs("main", {
          className: "max-w-5xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("home"), className: "mb-4 text-blue-300", children: "← Volver al Inicio" }),
            v.jsx("h2", { style: { fontSize: "1.6rem", fontWeight: "bold", color: "#86efac", marginBottom: "0.4rem" }, children: "📚 Módulos y Guías Curriculares Oficiales (PDF)" }),
            v.jsx("p", { style: { fontSize: "0.95rem", color: "#cbd5e1", marginBottom: "1.5rem" }, children: "Documentos de práctica pedagógica oficiales para los estudiantes de Tecnología Agropecuaria (Facultad de Ciencias Agropecuarias y Naturales). Puede consultarlos directamente en el visor integrado, abrirlos en ventana emergente o descargarlos para su estudio." }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.2rem", marginBottom: "2rem" },
              children: [
                { num: "1", title: "Módulo 1 — Conceptos Básicos de Matemática", desc: "Números naturales, enteros, operaciones fundamentales y jerarquía de operaciones.", file: "PDF/Practica_Modulo1_Conceptos_Basicos_Matematica.pdf" },
                { num: "2", title: "Módulo 2 — Importancia de los Números", desc: "Sistemas numéricos, representación decimal, valor posicional y estimación en el campo.", file: "PDF/Practica_Modulo2_Importancia_Numeros.pdf" },
                { num: "3", title: "Módulo 3 — Regla de Tres y Proporcionalidad", desc: "Proporcionalidad directa e inversa aplicada a dosificación veterinaria, raciones y mezclas.", file: "PDF/Practica_Modulo3_Regla_de_Tres.pdf" },
                { num: "4", title: "Módulo 4 — Fraccionarios y Decimales", desc: "Operaciones con fracciones, conversiones decimales, porcentajes y proporciones agrícolas.", file: "PDF/Practica_Modulo4_Fraccionarios_Decimales.pdf" },
                { num: "5", title: "Módulo 5 — Potenciación y Proporciones", desc: "Leyes de exponentes, potencias de base 10, notación científica y crecimiento de poblaciones.", file: "PDF/Practica_Modulo5_Potenciacion_Proporciones.pdf" },
                { num: "6", title: "Módulo 6 — Ecuaciones Matemáticas Básicas", desc: "Ecuaciones lineales y cuadráticas aplicadas a corrales, parcelas, densidades y áreas.", file: "PDF/Practica_Modulo6_Ecuaciones_Matematicas_Basicas.pdf" },
                { num: "7", title: "Módulo 7 — Conversión de Unidades", desc: "Unidades de masa, volumen, superficie (hectáreas, m²), concentración y caudal en el agro.", file: "PDF/Practica_Modulo7_Conversion_Unidades.pdf" },
              ].map((m, i) =>
                v.jsxs("div", {
                  key: i,
                  style: {
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "0.85rem",
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  },
                  children: [
                    v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" },
                          children: [
                            v.jsx("span", { style: { background: "#10b981", color: "#ffffff", padding: "0.2rem 0.5rem", borderRadius: "0.35rem", fontSize: "0.75rem", fontWeight: "bold" }, children: "MOD " + m.num }),
                            v.jsx("h3", { style: { fontSize: "1rem", fontWeight: "bold", color: "#ffffff" }, children: m.title }),
                          ],
                        }),
                        v.jsx("p", { style: { fontSize: "0.825rem", color: "#cbd5e1", lineHeight: "1.5", marginBottom: "1.2rem" }, children: m.desc }),
                      ],
                    }),
                    v.jsxs("div", {
                      style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
                      children: [
                        v.jsx("button", {
                          onClick: () => setActivePdf({ label: m.title, file: m.file }),
                          style: {
                            background: "rgba(34,197,94,0.3)",
                            border: "1px solid rgba(34,197,94,0.5)",
                            borderRadius: "0.4rem",
                            color: "#86efac",
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                          },
                          children: "👁️ Ver en Visor",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            const w = Math.min(1000, screen.availWidth - 40), h = screen.availHeight - 60;
                            const win = window.open(m.file, "visorPdf", "width=" + w + ",height=" + h + ",left=" + Math.max(0,(screen.availWidth-w)/2) + ",top=20,resizable=yes,scrollbars=yes");
                            if (win) win.focus();
                          },
                          style: {
                            background: "rgba(59,130,246,0.3)",
                            border: "1px solid rgba(59,130,246,0.5)",
                            borderRadius: "0.4rem",
                            color: "#93c5fd",
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                          },
                          children: "↗ Ventana",
                        }),
                        v.jsx("a", {
                          href: m.file,
                          download: m.title.replace(/\s+/g, "_") + ".pdf",
                          style: {
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: "0.4rem",
                            color: "#cbd5e1",
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.8rem",
                            textDecoration: "none",
                          },
                          children: "⬇ Descargar",
                        }),
                      ],
                    }),
                  ],
                }),
              ),
            }),
          ],
        }),
      // ── Pestaña: Manual de usuario ────────────────────────────────────────────
      C === "manual_usuario" &&
        v.jsxs("main", {
          className: "max-w-5xl mx-auto p-6 manual-tool",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-2", children: "📘 Manual de usuario" }),
            v.jsx("p", { className: "mb-4", style: { color: "#ced4da" }, children: "Guía de uso de todas las herramientas, con capturas y ejemplos. Puede leerla aquí, abrirla en una ventana aparte para consultarla mientras trabaja, o descargarla." }),
            v.jsxs("div", {
              style: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" },
              children: [
                v.jsx("button", {
                  className: "manual-btn manual-btn-primario",
                  onClick: () => {
                    const w = Math.min(1000, screen.availWidth - 40), h = screen.availHeight - 60;
                    const win = window.open("docs/manual_usuario.pdf", "manualUsuario", "width=" + w + ",height=" + h + ",left=" + Math.max(0, (screen.availWidth - w) / 2) + ",top=20,resizable=yes,scrollbars=yes");
                    if (win) { win.focus(); setManualAviso(""); }
                    else setManualAviso("El navegador bloqueó la ventana emergente. Permita las ventanas emergentes para esta página o use «Descargar PDF».");
                  },
                  children: "↗ Ver en ventana emergente",
                }),
                v.jsx("a", { className: "manual-btn", href: "docs/manual_usuario.pdf", download: "Manual de usuario - Matemáticas en Técnicas Agropecuarias.pdf", children: "⬇ Descargar PDF" }),
              ],
            }),
            manualAviso && v.jsxs("div", {
              className: "alert alert-warning",
              role: "alert",
              style: { display: "flex", justifyContent: "space-between", gap: "1rem" },
              children: [
                v.jsx("span", { children: manualAviso }),
                v.jsx("button", { onClick: () => setManualAviso(""), "aria-label": "Cerrar", style: { fontWeight: "bold" }, children: "✕" }),
              ],
            }),
            v.jsx("iframe", { src: "docs/manual_usuario.pdf", title: "Manual de usuario (PDF)", className: "visor-manual" }),
            v.jsx("p", { className: "text-sm mt-2", style: { color: "#adb5bd" }, children: "Si el manual no se ve en el recuadro, use «Ver en ventana emergente» o «Descargar PDF»." }),
          ],
        }),
      // ── Pestaña Dedicada: GeoGebra Clásico ────────────────────────────────────
      C === "geogebra" &&
        v.jsxs("main", {
          className: "max-w-6xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("home"), className: "mb-4 text-blue-300", children: "← Volver al Inicio" }),
            v.jsxs("div", {
              style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("h2", { style: { fontSize: "1.6rem", fontWeight: "bold", color: "#d8b4fe" }, children: "🧭 GeoGebra Clásico" }),
                    v.jsx("p", { style: { fontSize: "0.875rem", color: "#cbd5e1" }, children: "Calculadora gráfica, geometría interactiva y álgebra computacional (CAS) integrada." }),
                  ],
                }),
                v.jsx("button", {
                  onClick: () => window.open("https://www.geogebra.org/classic?lang=es", "_blank", "noopener,noreferrer"),
                  style: {
                    background: "#9333ea",
                    color: "#ffffff",
                    padding: "0.5rem 1.1rem",
                    borderRadius: "0.5rem",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    border: "none",
                    cursor: "pointer",
                  },
                  children: "Abrir en Pantalla Completa ↗",
                }),
              ],
            }),
            v.jsx("div", {
              style: { width: "100%", height: "70vh", minHeight: "500px", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid rgba(168,85,247,0.3)", marginBottom: "1.5rem" },
              children: v.jsx("iframe", {
                src: "https://www.geogebra.org/classic?lang=es",
                style: { width: "100%", height: "100%", border: "none" },
                title: "GeoGebra Clásico",
              }),
            }),
            v.jsxs("div", {
              style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", padding: "1.25rem" },
              children: [
                v.jsx("h3", { style: { fontSize: "1rem", fontWeight: "bold", color: "#86efac", marginBottom: "0.5rem" }, children: "Comandos Rápidos en Español útiles para el sector agropecuario:" }),
                v.jsxs("div", {
                  style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", fontSize: "0.825rem", color: "#e2e8f0" },
                  children: [
                    v.jsxs("div", { children: [v.jsx("code", { style: { color: "#fde047" }, children: "Resuelve(x^2 - 15x + 50 = 0)" }), v.jsx("div", { style: { color: "#94a3b8" }, children: "Halla las dimensiones del corral o parcela." })] }),
                    v.jsxs("div", { children: [v.jsx("code", { style: { color: "#fde047" }, children: "Polígono((0,0), (20,0), (20,15), (0,15))" }), v.jsx("div", { style: { color: "#94a3b8" }, children: "Traza el perímetro y calcula el área del terreno." })] }),
                    v.jsxs("div", { children: [v.jsx("code", { style: { color: "#fde047" }, children: "Distancia(A, B)" }), v.jsx("div", { style: { color: "#94a3b8" }, children: "Longitud de cerca perimetral entre postes." })] }),
                    v.jsxs("div", { children: [v.jsx("code", { style: { color: "#fde047" }, children: "f(x) = 2.5 x + 10" }), v.jsx("div", { style: { color: "#94a3b8" }, children: "Modela costo de insumos en función de unidades." })] }),
                  ],
                }),
              ],
            }),
          ],
        }),
            ]
          }),
        ]
      }),
      activePdf && v.jsx("div", {
        onClick: () => setActivePdf(null),
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        },
        children: v.jsxs("div", {
          onClick: (e) => e.stopPropagation(),
          style: {
            background: "#212529",
            borderRadius: "0.75rem",
            border: "1px solid #495057",
            width: "min(900px, 96vw)",
            height: "min(680px, 90vh)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
          },
          children: [
            v.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1.25rem",
                background: "#2b3035",
                borderBottom: "1px solid #495057",
              },
              children: [
                v.jsx("span", {
                  style: { color: "#ffffff", fontWeight: "bold", fontSize: "0.95rem" },
                  children: "📄 " + activePdf.label,
                }),
                v.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "0.5rem" },
                  children: [
                    v.jsx("button", {
                      onClick: () => {
                        const w = Math.min(1000, screen.availWidth - 40), h = screen.availHeight - 60;
                        const win = window.open(activePdf.file, "visorPdf", "width=" + w + ",height=" + h + ",left=" + Math.max(0,(screen.availWidth-w)/2) + ",top=20,resizable=yes,scrollbars=yes");
                        if (win) win.focus();
                      },
                      style: {
                        background: "rgba(59,130,246,0.3)",
                        border: "1px solid rgba(59,130,246,0.5)",
                        borderRadius: "0.4rem",
                        color: "#93c5fd",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        padding: "0.3rem 0.6rem",
                        whiteSpace: "nowrap",
                      },
                      children: "↗ Ventana emergente",
                    }),
                    v.jsx("a", {
                      href: activePdf.file,
                      download: activePdf.label.replace(/\s+/g, "_") + ".pdf",
                      style: {
                        background: "rgba(34,197,94,0.25)",
                        border: "1px solid rgba(34,197,94,0.4)",
                        borderRadius: "0.4rem",
                        color: "#86efac",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        padding: "0.3rem 0.6rem",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      },
                      children: "⬇ Descargar PDF",
                    }),
                    v.jsx("button", {
                      onClick: () => setActivePdf(null),
                  style: {
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: "0.4rem",
                    color: "#fff",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    padding: "0.1rem 0.5rem",
                    lineHeight: 1,
                  },
                  children: "✕",
                }),
              ],
            }),
          ],
        }),
        v.jsx("iframe", {
              src: activePdf.file,
              style: { flex: 1, width: "100%", border: "none" },
              title: activePdf.label,
            }),
          ],
        }),
      }),
      showModulosMenu && v.jsx("div", {
        onClick: () => setShowModulosMenu(false),
        style: { position: "fixed", inset: 0, zIndex: 9998 },
      }),
    ],
  });
}
$f.createRoot(document.getElementById("root")).render(
  v.jsx(ye.StrictMode, { children: v.jsx(bf, {}) }),
);
