function bf() {
  var re;
  const [C, P] = ye.useState("home"),
    [d, O] = ye.useState(null),
    [E, V] = ye.useState(null),
    [q, Z] = ye.useState([]),
    [I, J] = ye.useState(0),
    [G, ne] = ye.useState(null),
    [Q, ge] = ye.useState(""),
    [Ce, b] = ye.useState(null),
    [K, be] = ye.useState(false),
    [He, We] = ye.useState([]),
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
    [xe, Pe] = ye.useState(() => {
      const f = localStorage.getItem("niv-v3");
      return f ? JSON.parse(f) : { history: [], reviews: {} };
    });
  ye.useEffect(() => {
    localStorage.setItem("niv-v3", JSON.stringify(xe));
  }, [xe]);
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
      (O(f), ne(qf(f.id)), ge(""), P("expr"));
    },
    tt = (f) => {
      O(f);
      const S = f.problemas || [];
      (b(S[Math.floor(Math.random() * S.length)]), P("prob"));
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
      const f = parseInt(Q) === G.answer;
      je(d.id, f);
    },
    Ke = () => {
      const f = parseInt(Q) === Ce.respuesta;
      je(d.id, f);
    },
    Ye = () => {
      if (!fe.trim()) return;
      const f = fe.toLowerCase();
      let S = "Puedo ayudarte con matemáticas!";
      (f.includes("suma")
        ? (S = "Para sumar:竖方向从右到左相加，超过9进位")
        : f.includes("tienda") || f.includes("compra")
          ? (S = "Problema de tienda: multiplica cantidad x precio, luego suma")
          : (f.includes("finca") || f.includes("animal")) &&
            (S = "Problema de finca: suma los animales, resta los vendidos"),
        We([...He, { role: "user", text: fe }, { role: "bot", text: S }]),
        Ie(""));
    },
    // Renderiza una fracción con barra horizontal: n sobre d
    // hl: "" | "n" | "d" | "ok" | "err"   sm: true = tamaño pequeño
    // Tarjeta de video YouTube: miniatura clicable que abre el video en nueva pestaña
    ytCard = (videoId, title = "") =>
      v.jsx("a", {
        href: `https://www.youtube.com/watch?v=${videoId}`,
        target: "_blank",
        rel: "noopener noreferrer",
        style: { display: "block", position: "relative", paddingTop: "56.25%", width: "100%", marginBottom: "1.5rem", borderRadius: "0.75rem", overflow: "hidden", background: "#000", cursor: "pointer", textDecoration: "none" },
        children: [
          v.jsx("img", {
            src: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            alt: title,
            style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" },
          }),
          v.jsx("div", {
            style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.6rem", background: "rgba(0,0,0,0.25)" },
            children: [
              v.jsx("div", {
                style: { width: "68px", height: "68px", borderRadius: "50%", background: "rgba(255,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.6)" },
                children: v.jsx("div", { style: { width: 0, height: 0, borderTop: "16px solid transparent", borderBottom: "16px solid transparent", borderLeft: "28px solid white", marginLeft: "6px" } }),
              }),
              v.jsx("div", {
                style: { background: "rgba(0,0,0,0.65)", color: "white", fontSize: "0.82rem", fontWeight: "bold", padding: "5px 14px", borderRadius: "999px" },
                children: title || "▶ Ver en YouTube",
              }),
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
    className:
      "min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white",
    children: [
      v.jsx("header", {
        className: "bg-white/10 p-4",
        children: v.jsxs("div", {
          className: "max-w-7xl mx-auto flex items-center justify-between",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                v.jsx("div", { style: { fontSize: "2.5rem", lineHeight: 1 }, children: "🧠" }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "text-xl font-bold",
                      children: "Matemáticas en Técnicas Agropecuarias",
                    }),
                    v.jsx("p", {
                      className: "text-xs text-green-200",
                      children: "Aprende con práctica",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              style: { display: "flex", alignItems: "center", gap: "0.5rem" },
              children: [
                v.jsxs("div", {
                  style: { position: "relative" },
                  children: [
                    v.jsx("button", {
                      onClick: () => setShowModulosMenu((m) => !m),
                      style: {
                        padding: "0.4rem 0.9rem",
                        background: "rgba(134,239,172,0.18)",
                        border: "1px solid rgba(134,239,172,0.4)",
                        borderRadius: "0.6rem",
                        color: "#86efac",
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
                        background: "#1a3a2a",
                        border: "1px solid rgba(134,239,172,0.3)",
                        borderRadius: "0.75rem",
                        minWidth: "260px",
                        zIndex: 9999,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
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
                            color: "#e2f5eb",
                            fontSize: "0.82rem",
                            cursor: "pointer",
                          },
                          onMouseEnter: (e) => { e.currentTarget.style.background = "rgba(134,239,172,0.12)"; },
                          onMouseLeave: (e) => { e.currentTarget.style.background = "transparent"; },
                          children: m.label,
                        }, i),
                      ),
                    }),
                  ],
                }),
                v.jsx("button", {
                  onClick: () => P("videos_modulos"),
                  style: {
                    padding: "0.4rem 0.9rem",
                    background: C === "videos_modulos" ? "rgba(251,191,36,0.35)" : "rgba(251,191,36,0.18)",
                    border: "1px solid rgba(251,191,36,0.5)",
                    borderRadius: "0.6rem",
                    color: "#fbbf24",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "🎬 Videos por Módulo",
                }),
                v.jsx("button", {
                  onClick: () => P("evaluaciones_modulos"),
                  style: {
                    padding: "0.4rem 0.9rem",
                    background: C === "evaluaciones_modulos" ? "rgba(99,202,183,0.35)" : "rgba(99,202,183,0.18)",
                    border: "1px solid rgba(99,202,183,0.5)",
                    borderRadius: "0.6rem",
                    color: "#63cab7",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  },
                  children: "📝 Evaluaciones_Módulos",
                }),
                v.jsx("button", {
                  onClick: () => be(true),
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
            className: "hidden md:block",
            style: { 
              width: "340px", 
              minWidth: "340px", 
              padding: "1.5rem", 
              background: "rgba(0,0,0,0.2)",
              borderRight: "1px solid rgba(255,255,255,0.1)",
              overflowY: "auto"
            },
            children: [
              v.jsx("h3", { 
                style: { 
                  fontSize: "1rem", 
                  fontWeight: "bold", 
                  marginBottom: "1rem",
                  color: "#86efac"
                }, 
                children: "🎥 Video introductorio" 
              }),
              ytCard("7eu-h1H9Jug", "Ver video en YouTube"),
              v.jsx("h3", {
                style: {
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginTop: "1.5rem",
                  marginBottom: "1rem",
                  color: "#86efac"
                },
                children: "🎥 Descripción del contenido de la App"
              }),
              ytCard("FAUSouiv6dQ", "Descripción del contenido de la App"),
              v.jsxs("div", {
                style: { 
                  marginTop: "1rem", 
                  padding: "1rem", 
                  background: "rgba(255,255,255,0.05)", 
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  color: "#cbd5e1"
                },
                children: [
                  v.jsx("p", { style: { fontWeight: "bold", marginBottom: "0.5rem", color: "#86efac" }, children: "¡Aprende matemáticas!" }),
                  v.jsx("p", { children: "Este video te ayudará a entender los conceptos clave para resolver los ejercicios de esta aplicación." }),
                ]
              })
            ]
          }),
          v.jsxs("div", {
            style: { flex: 1, overflowY: "auto" },
            children: [
      C === "home" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
              children: [
                v.jsxs("button", {
                  onClick: () => P("sumas"),
                  className: "bg-green-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: "+" }),
                    v.jsx("div", { className: "font-bold", children: "Sumas" }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("restas"),
                  className: "bg-red-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: "-" }),
                    v.jsx("div", {
                      className: "font-bold",
                      children: "Restas",
                    }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("expr"),
                  className: "bg-purple-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", {
                      className: "text-3xl mb-2",
                      children: "()",
                    }),
                    v.jsx("div", {
                      className: "font-bold",
                      children: "Expresiones",
                    }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("probs"),
                  className: "bg-orange-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: "?" }),
                    v.jsx("div", {
                      className: "font-bold",
                      children: "Problemas",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("mults"),
              className: "bg-yellow-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "×" }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Multiplicaciones",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("divs"),
              className: "bg-cyan-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "÷" }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Divisiones",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("divds"),
              className: "bg-pink-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "÷." }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Div. Decimales",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("divrs"),
              className: "bg-amber-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "÷R" }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Div. con Residuo",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("fracciones"),
              className: "bg-indigo-600 p-6 rounded-2xl",
              children: [
                v.jsxs("div", {
                  className: "inline-flex flex-col items-center text-2xl mb-2 font-mono",
                  children: [
                    v.jsx("div", { className: "border-b-2 border-white px-2 leading-tight", children: "a" }),
                    v.jsx("div", { className: "px-2 leading-tight", children: "b" }),
                  ],
                }),
                v.jsx("div", { className: "font-bold", children: "Fracciones" }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("algebra"),
              className: "bg-emerald-700 p-6 rounded-2xl hover:bg-emerald-600",
              children: [
                v.jsx("div", { className: "text-3xl mb-2 font-bold font-mono", children: "x²" }),
                v.jsx("div", { className: "font-bold", children: "Álgebra" }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("r3directa_cat"),
              className: "bg-cyan-800 p-6 rounded-2xl hover:bg-cyan-700",
              children: [
                v.jsx("div", { className: "text-3xl mb-2 font-bold font-mono", children: "a/b" }),
                v.jsx("div", { className: "font-bold", children: "Regla de 3" }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("factorizacion_cat"),
              className: "bg-violet-800 p-6 rounded-2xl hover:bg-violet-700",
              children: [
                v.jsx("div", { className: "text-3xl mb-2 font-bold font-mono", children: "(x+a)(x+b)" }),
                v.jsx("div", { className: "font-bold", children: "Factorizar" }),
              ],
            }),
            v.jsxs("div", {
              className: "bg-white/10 rounded-2xl p-6",
              children: [
                v.jsx("h2", {
                  className: "font-bold mb-4",
                  children: "Lecciones",
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
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Sumas Verticales" }),
                    ytCard("gdZsyRJo7sI", "▶ Sumas Verticales — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Suma y Resta de Fracciones" }),
                    ytCard("UVb0xbN2ySc", "▶ Suma y Resta de Fracciones — Ver en YouTube"),
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
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Fracciones" }),
                    ytCard("0ghKPQplRaE", "▶ Fracciones — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Fracciones Mixtas" }),
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
                          children: I === 0 ? "Ingresa el numerador de la respuesta:" : "Ingresa el denominador de la respuesta:",
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
                          v.jsxs("div", { className: "text-lg font-bold text-yellow-300", children: ["Resuelve: ", step.op === '×' ? 'Multiplicación' : step.op === '÷' ? 'División' : step.op === '+' ? 'Suma' : 'Resta'] }),
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
                          children: [I === 0 ? "Ingresa el numerador:" : "Ingresa el denominador:"],
                        }),
                        mixShowHelp && !mixCorrectionData && v.jsx("div", { className: "text-center text-orange-300 text-sm mb-2", children: "⚠️ Completa tu respuesta y verifica" }),
                        mixCorrectionData && v.jsxs("div", { className: "text-center text-red-300 text-sm mb-2",
                          children: [
                            "❌ Respuesta incorrecta. ",
                            v.jsx("span", { className: "text-yellow-300", children: "Edita tu respuesta o usa 'Corregir'" }),
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
                          v.jsxs("div", { className: "text-lg font-bold text-yellow-300", children: [step.isPot ? "Resuelve: Potenciación" : `Resuelve: ${step.op === '×' ? 'Multiplicación' : step.op === '÷' ? 'División' : step.op === '+' ? 'Suma' : 'Resta'}`] }),
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
                          children: [I === 0 ? "Ingresa el numerador:" : "Ingresa el denominador:"],
                        }),
                        potMixShowHelp && !potMixCorrectionData && v.jsx("div", { className: "text-center text-orange-300 text-sm mb-2", children: "⚠️ Completa tu respuesta y verifica" }),
                        potMixCorrectionData && v.jsxs("div", { className: "text-center text-red-300 text-sm mb-2",
                          children: [
                            "❌ Respuesta incorrecta. ",
                            v.jsx("span", { className: "text-yellow-300", children: "Edita tu respuesta o usa 'Corregir'" }),
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
              children: "Expresiones",
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
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Video 1" }),
                    ytCard("u8F-ZnBaXhA", "▶ Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Video 2" }),
                    ytCard("C01tANWnSNU", "▶ Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Video 3" }),
                    ytCard("11bNyZW9tlY", "▶ Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "Video 4" }),
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
            ytCard("MhuDuTe8bZ0", "▶ Divisiones — Ver en YouTube"),
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
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
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
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "divg" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P(E.isRemainder ? "divrs" : E.isDecimal ? "divds" : "divs"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
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
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hd(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
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
      C === "expr" &&
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
                G.steps &&
                  v.jsx("div", {
                    className: "mb-4 text-sm text-blue-200",
                    children: G.steps.join(" | "),
                  }),
                v.jsx("input", {
                  type: "number",
                  value: Q,
                  onChange: (f) => ge(f.target.value),
                  placeholder: "Respuesta",
                  className:
                    "w-full p-4 text-center text-xl bg-white/20 rounded-xl mb-4",
                }),
                Q !== "" &&
                  v.jsx("div", {
                    className:
                      "text-center text-xl font-bold mb-3 " +
                      (parseInt(Q) === G.answer
                        ? "text-green-400"
                        : "text-red-400"),
                    children:
                      parseInt(Q) === G.answer
                        ? "¡Correcto! ✓"
                        : "Incorrecto ✗",
                  }),
                v.jsx("button", {
                  onClick: Me,
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
                      onClick: () => ge(""),
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
                  onChange: (f) => ge(f.target.value),
                  placeholder: "Tu respuesta",
                  className:
                    "w-full p-4 text-center text-xl bg-white/20 rounded-xl mb-4",
                }),
                Q !== "" &&
                  v.jsx("div", {
                    className:
                      "text-center text-xl font-bold mb-3 " +
                      (parseInt(Q) === Ce.respuesta
                        ? "text-green-400"
                        : "text-red-400"),
                    children:
                      parseInt(Q) === Ce.respuesta
                        ? "¡Correcto! ✓"
                        : "Incorrecto ✗",
                  }),
                v.jsx("button", {
                  onClick: Ke,
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
                      onClick: () => ge(""),
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
                v.jsx("div", { className: "text-center text-white/60 mb-3", children: "Escribe la respuesta como fracción:" }),
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
                      children: I === 0 ? "Ingresa el numerador:" : "Ingresa el denominador:",
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
                        children: "AI Tutor",
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
                      children: f.text,
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
                    placeholder: "Pregunta...",
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
            ytCard("QOO3NczV_dg", "▶ Regla de Tres Directa — Ver en YouTube"),
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
                      children: ["Recuerda: x = (", v.jsx("b", {children: E.a2}), " × ", v.jsx("b", {children: E.b1}), ") ÷ ", v.jsx("b", {children: E.a1})],
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
                        v.jsx("div", { className: "text-center text-blue-200 mb-3 text-sm", children: "Calcula el valor de x e ingrésalo:" }),
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
                      children: ["Busca dos números que multiplicados den ", v.jsx("b", {children: E.A}), " y sumados den ", v.jsx("b", {children: E.S}), "."],
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
                          children: I === 0 ? "Ingresa x₁ (la solución menor):" : "Ingresa x₂ (la solución mayor):",
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
            v.jsx("p", { className: "text-violet-200 text-sm mb-5", children: "Factoriza trinomios cuadráticos usando el método de Po-Shen Loh. Encuentra las dos raíces enteras." }),
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
                    v.jsx("div", { className: "text-xs text-violet-300 mb-2", children: "Factoriza la expresión:" }),
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
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 1:"}), " Identifica b y c en x² + bx + c"] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 2:"}), " Calcula m = (suma raíces) / 2: ", latexSpan(E.paso2)] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 3:"}), " Calcula u²: ", latexSpan(E.paso3)] }),
                            v.jsxs("div", { children: [v.jsx("b", {className:"text-violet-300", children:"Paso 4:"}), " Calcula u: ", latexSpan(E.paso4)] }),
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
                      children: ["Busca dos números que multiplicados den ", v.jsx("b", {children: E.cCoef}),
                        " y restados den ", v.jsx("b", {children: Math.abs(E.bCoef)}), "."] }),
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
                          children: I === 0 ? "Ingresa la primera raíz (x₁, la menor):" : "Ingresa la segunda raíz (x₂, la mayor):",
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
      C === "videos_modulos" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Videos por Módulo" }),
            v.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" },
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "MODULO UNO" }),
                    ytCard("GwkOku6-wK4", "▶ MODULO UNO — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "MODULO DOS" }),
                    ytCard("S9aFBc4mZts", "▶ MODULO DOS — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "MODULO TRES" }),
                    ytCard("jzHb8EC6ztk", "▶ MODULO TRES — Ver en YouTube"),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "MODULO CUARTO" }),
                    ytCard("M_dPUEl8xy0", "▶ MODULO CUARTO — Ver en YouTube"),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              style: { maxWidth: "50%", margin: "0 auto" },
              children: v.jsxs("div", {
                children: [
                  v.jsx("div", { style: { color: "white", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "0.4rem", textAlign: "center" }, children: "MODULO CINCO" }),
                  ytCard("FAVEFS31OhQ", "▶ MODULO CINCO — Ver en YouTube"),
                ],
              }),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
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
              children: "Selecciona el módulo para acceder a su evaluación en línea.",
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
            ]
          }),
        ]
      }),
      activePdf && v.jsx("div", {
        onClick: () => setActivePdf(null),
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        },
        children: v.jsxs("div", {
          onClick: (e) => e.stopPropagation(),
          style: {
            background: "#0f2d1f",
            borderRadius: "1rem",
            border: "1px solid rgba(134,239,172,0.3)",
            width: "min(900px, 96vw)",
            height: "min(680px, 90vh)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
          },
          children: [
            v.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1.25rem",
                background: "rgba(134,239,172,0.1)",
                borderBottom: "1px solid rgba(134,239,172,0.2)",
              },
              children: [
                v.jsx("span", {
                  style: { color: "#86efac", fontWeight: "bold", fontSize: "0.95rem" },
                  children: "📄 " + activePdf.label,
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
