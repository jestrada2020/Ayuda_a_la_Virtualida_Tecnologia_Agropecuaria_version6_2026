var Zf = (C) => {
  const P = [1, 3, 7, 14, 30];
  if (C.length === 0) return new Date();
  const d = C.filter((E) => E.correct).length,
    O = new Date();
  return (O.setDate(O.getDate() + P[Math.min(d, P.length - 1)]), O);
};

var Jf = (C, count) => {
  const n = count || 2;
  const P = Math.pow(10, C - 1),
    d = Math.pow(10, C) - 1;
  const nums = Array.from({ length: n }, () => Math.floor(Math.random() * (d - P) + P));
  return genSumaMulti(nums);
};

var qf = (C) => {
  if (C === "parentesis") {
    const d = Math.floor(Math.random() * 10) + 1,
      O = Math.floor(Math.random() * 10) + 1,
      E = Math.floor(Math.random() * 10) + 1;
    return {
      expr: `(${d} + ${O}) x ${E}`,
      answer: (d + O) * E,
      steps: [`${d} + ${O} = ${d + O}`, `${d + O} x ${E} = ${(d + O) * E}`],
    };
  }
  if (C === "corchetes") {
    const d = Math.floor(Math.random() * 15) + 5,
      O = Math.floor(Math.random() * 5) + 1,
      E = Math.floor(Math.random() * 5) + 1;
    return {
      expr: `[${d} - (${O} + ${E})] x 2`,
      answer: (d - (O + E)) * 2,
      steps: [
        `${O} + ${E} = ${O + E}`,
        `${d} - ${O + E} = ${d - (O + E)}`,
        `${d - (O + E)} x 2 = ${(d - (O + E)) * 2}`,
      ],
    };
  }
  if (C === "llaves") {
    const d = Math.floor(Math.random() * 6) + 2;
    return {
      expr: `{[(${d} + 3) - 2]} + 1`,
      answer: d + 2,
      steps: [
        `${d} + 3 = ${d + 3}`,
        `${d + 3} - 2 = ${d + 1}`,
        `${d + 1} + 1 = ${d + 2}`,
      ],
    };
  }
  if (C === "signos_par") {
    const a = Math.floor(Math.random() * 9) + 2,
      b = Math.floor(Math.random() * 9) + 2,
      c = Math.floor(Math.random() * 5) + 2;
    return {
      expr: `(${a} - (-${b})) × ${c}`,
      answer: (a + b) * c,
      steps: [
        `-(-${b}) = +${b}`,
        `${a} + ${b} = ${a + b}`,
        `${a + b} × ${c} = ${(a + b) * c}`,
      ],
    };
  }
  if (C === "signos_cor") {
    const a = Math.floor(Math.random() * 10) + 5,
      b = Math.floor(Math.random() * 4) + 2,
      c = Math.floor(Math.random() * 3) + 1,
      d = Math.floor(Math.random() * 4) + 2;
    const inner = a + b - c;
    return {
      expr: `[${a} - (-${b} + ${c})] × ${d}`,
      answer: inner * d,
      steps: [
        `-(-${b} + ${c}) = +${b} - ${c}`,
        `${a} + ${b} - ${c} = ${inner}`,
        `${inner} × ${d} = ${inner * d}`,
      ],
    };
  }
  if (C === "signos_lla") {
    const a = Math.floor(Math.random() * 5) + 2,
      b = Math.floor(Math.random() * 5) + 1,
      c = Math.floor(Math.random() * 3) + 2,
      d = Math.floor(Math.random() * 5) + 1;
    const s1 = a + b,
      s2 = s1 * c,
      ans = s2 + d;
    return {
      expr: `{[(${a} - (-${b})) × ${c}] + ${d}}`,
      answer: ans,
      steps: [
        `-(-${b}) = +${b}`,
        `${a} + ${b} = ${s1}`,
        `${s1} × ${c} = ${s2}`,
        `${s2} + ${d} = ${ans}`,
      ],
    };
  }
  const P = Math.floor(Math.random() * 10) + 1;
  return {
    expr: `5 - (-${P})`,
    answer: 5 + P,
    steps: ["Menos con menos = mas", `5 + ${P} = ${5 + P}`],
  };
};

var Nf = (C) => {
  const _P = Math.pow(10, C - 1),
    _d = Math.pow(10, C) - 1,
    _O = Math.floor(Math.random() * (_d - _P) + _P),
    _b = Math.floor(Math.random() * 8) + 2,
    _V = String(_O).padStart(C, "0").split("").map(Number),
    _q = String(_O * _b)
      .split("")
      .map(Number),
    _R = _q.length,
    _off = _R - C,
    _carry = new Array(_R).fill(0);
  let _cin = 0;
  for (let _j = _R - 1; _j >= 0; _j--) {
    const _ad = _j >= _off ? _V[_j - _off] : 0,
      _prod = _ad * _b + _cin;
    ((_carry[_j] = Math.floor(_prod / 10)), (_cin = _carry[_j]));
  }
  return {
    a: _O,
    b: _b,
    answer: _O * _b,
    dA: _V,
    dR: _q,
    carry: _carry,
    R: _R,
    C,
  };
};
var Gm = (CA, CB) => {
  const _mA = Math.pow(10, CA - 1),
    _MA = Math.pow(10, CA) - 1,
    _A = Math.floor(Math.random() * (_MA - _mA) + _mA),
    _mB = Math.pow(10, CB - 1),
    _MB = Math.pow(10, CB) - 1,
    _B = Math.floor(Math.random() * (_MB - _mB) + _mB),
    _dA = String(_A).padStart(CA, "0").split("").map(Number),
    _dB = String(_B).padStart(CB, "0").split("").map(Number),
    _pLen = CA + 1,
    _parts = [];
  for (let _i = CB - 1; _i >= 0; _i--) {
    const _bd = _dB[_i],
      _sh = CB - 1 - _i,
      _carry = new Array(_pLen).fill(0);
    let _cin = 0;
    for (let _j = _pLen - 1; _j >= 0; _j--) {
      const _ad = _j >= 1 ? _dA[_j - 1] : 0,
        _pr = _ad * _bd + _cin;
      ((_carry[_j] = Math.floor(_pr / 10)), (_cin = _carry[_j]));
    }
    _parts.push({
      bDigit: _bd,
      shift: _sh,
      digits: String(_A * _bd)
        .padStart(_pLen, "0")
        .split("")
        .map(Number),
      carry: _carry,
      len: _pLen,
    });
  }
  const _ans = _A * _B,
    _dR = String(_ans).split("").map(Number),
    _RF = _dR.length,
    _W = Math.max(_RF, CA + CB + 1);
  return {
    a: _A,
    b: _B,
    answer: _ans,
    dA: _dA,
    dB: _dB,
    parts: _parts,
    dR: _dR,
    RF: _RF,
    W: _W,
    CA,
    CB,
    phase: 0,
    done: [],
  };
};
var genDiv = (dividendDigits, divisorDigits) => {
  for (let _t = 0; _t < 200; _t++) {
    const minS = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
    const maxS = Math.pow(10, divisorDigits) - 1;
    const _div = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    const minD = Math.pow(10, dividendDigits - 1);
    const maxD = Math.pow(10, dividendDigits) - 1;
    const minQ = Math.ceil(minD / _div);
    const maxQ = Math.floor(maxD / _div);
    if (minQ < 1 || minQ > maxQ) continue;
    const _q = Math.floor(Math.random() * (maxQ - minQ + 1)) + minQ;
    const _dd = _q * _div;
    if (String(_dd).length !== dividendDigits) continue;
    const dDividend = String(_dd).split("").map(Number);
    const dDivisor = String(_div).split("").map(Number);
    const dQuotient = String(_q).split("").map(Number);
    return {
      dividend: _dd, divisor: _div, quotient: _q,
      dDividend, dDivisor, dQuotient,
      QLen: dQuotient.length, DLen: dividendDigits, SLen: divisorDigits,
      isDecimal: false, decimalPos: -1,
    };
  }
  return genDiv(dividendDigits, divisorDigits);
};
var genDivD = (dividendDigits, divisorDigits) => {
  const decOpts = [
    { val: 0.5, str: "5" }, { val: 0.25, str: "25" }, { val: 0.75, str: "75" },
    { val: 0.2, str: "2" }, { val: 0.4, str: "4" }, { val: 0.6, str: "6" }, { val: 0.8, str: "8" },
  ];
  for (let _t = 0; _t < 500; _t++) {
    const dec = decOpts[Math.floor(Math.random() * decOpts.length)];
    const minS = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
    const maxS = Math.pow(10, divisorDigits) - 1;
    const _div = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    const fracC = dec.val * _div;
    if (Math.abs(fracC - Math.round(fracC)) > 0.001) continue;
    const fracInt = Math.round(fracC);
    const minD = Math.pow(10, dividendDigits - 1);
    const maxD = Math.pow(10, dividendDigits) - 1;
    const minIQ = Math.max(1, Math.ceil((minD - fracInt) / _div));
    const maxIQ = Math.floor((maxD - fracInt) / _div);
    if (minIQ > maxIQ) continue;
    const intQ = Math.floor(Math.random() * (maxIQ - minIQ + 1)) + minIQ;
    const _dd = intQ * _div + fracInt;
    if (_dd < minD || _dd > maxD || String(_dd).length !== dividendDigits) continue;
    const qStr = String(intQ);
    const dQuotient = (qStr + dec.str).split("").map(Number);
    const decPos = qStr.length;
    return {
      dividend: _dd, divisor: _div, quotient: _dd / _div,
      quotientStr: intQ + "." + dec.str,
      dDividend: String(_dd).split("").map(Number),
      dDivisor: String(_div).split("").map(Number),
      dQuotient, decimalPos: decPos,
      QLen: dQuotient.length, DLen: dividendDigits, SLen: divisorDigits,
      isDecimal: true, decStr: dec.str,
    };
  }
  return genDivD(dividendDigits, divisorDigits);
};
var genDivR = (dividendDigits, divisorDigits) => {
  for (let _t = 0; _t < 200; _t++) {
    const minS = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
    const maxS = Math.pow(10, divisorDigits) - 1;
    const _div = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    const minD = Math.pow(10, dividendDigits - 1);
    const maxD = Math.pow(10, dividendDigits) - 1;
    const _dd = Math.floor(Math.random() * (maxD - minD + 1)) + minD;
    if (_dd % _div === 0) continue;
    const _q = Math.floor(_dd / _div);
    if (_q < 1) continue;
    const _r = _dd % _div;
    const dDividend = String(_dd).split("").map(Number);
    const dDivisor = String(_div).split("").map(Number);
    const dQuotient = String(_q).split("").map(Number);
    const dRemainder = String(_r).split("").map(Number);
    return {
      dividend: _dd, divisor: _div, quotient: _q, remainder: _r,
      dDividend, dDivisor, dQuotient, dRemainder,
      QLen: dQuotient.length, RLen: dRemainder.length,
      DLen: dividendDigits, SLen: divisorDigits,
      isDecimal: false, isRemainder: true, decimalPos: -1, phase: 0,
    };
  }
  return genDivR(dividendDigits, divisorDigits);
};
var genSumaAB = (a, b) => genSumaMulti([a, b]);
var genSumaMulti = (nums) => {
  const answer = nums.reduce((s, n) => s + n, 0);
  const W = Math.max(...nums.map(n => String(n).length), String(answer).length);
  const dNums = nums.map(n => String(n).padStart(W, "0").split("").map(Number));
  const dAnswer = String(answer).padStart(W, "0").split("").map(Number);
  const carry = new Array(W).fill(0);
  let c = 0;
  for (let j = W - 1; j >= 0; j--) {
    let cs = c;
    for (let i = 0; i < nums.length; i++) cs += dNums[i][j];
    carry[j] = Math.floor(cs / 10); c = carry[j];
  }
  return { nums, dNums, answer, dAnswer, W, N: nums.length, carry, dA: dNums[0], dB: dNums.length > 1 ? dNums[1] : dNums[0] };
};
var genMultAB = (_a, _b) => {
  const a = Math.max(_a, _b), b = Math.min(_a, _b);
  const dA = String(a).split("").map(Number);
  const dB = String(b).split("").map(Number);
  const CA = dA.length, CB = dB.length;
  if (CB === 1) {
    const _b = b;
    const _q = String(a * _b).split("").map(Number);
    const _R = _q.length, _off = _R - CA;
    const _carry = new Array(_R).fill(0);
    let _cin = 0;
    for (let _j = _R - 1; _j >= 0; _j--) {
      const _ad = _j >= _off ? dA[_j - _off] : 0;
      const _prod = _ad * _b + _cin;
      _carry[_j] = Math.floor(_prod / 10); _cin = _carry[_j];
    }
    return { a, b: _b, answer: a * _b, dA, dR: _q, carry: _carry, R: _R, C: CA, _isMult1: true };
  }
  const _pLen = CA + 1, _parts = [];
  for (let _i = CB - 1; _i >= 0; _i--) {
    const _bd = dB[_i], _sh = CB - 1 - _i;
    const _carry = new Array(_pLen).fill(0);
    let _cin = 0;
    for (let _j = _pLen - 1; _j >= 0; _j--) {
      const _ad = _j >= 1 ? dA[_j - 1] : 0;
      const _pr = _ad * _bd + _cin;
      _carry[_j] = Math.floor(_pr / 10); _cin = _carry[_j];
    }
    _parts.push({ bDigit: _bd, shift: _sh, digits: String(a * _bd).padStart(_pLen, "0").split("").map(Number), carry: _carry, len: _pLen });
  }
  const _ans = a * b, _dR = String(_ans).split("").map(Number), _RF = _dR.length;
  const _W = Math.max(_RF, CA + CB + 1);
  return { a, b, answer: _ans, dA, dB, parts: _parts, dR: _dR, RF: _RF, W: _W, CA, CB, phase: 0, done: [], _isMultM: true };
};
var genResta = (CA, CB) => {
  const minA = Math.pow(10, CA - 1), maxA = Math.pow(10, CA) - 1;
  const minB = Math.pow(10, CB - 1), maxB = Math.pow(10, CB) - 1;
  let a, b;
  // Garantizar a > b y que haya al menos un préstamo (para que sea instructivo)
  let attempts = 0;
  do {
    a = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    b = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    attempts++;
  } while (a <= b && attempts < 100);
  if (a <= b) a = b + 1;

  const dA = String(a).padStart(CA, "0").split("").map(Number);
  const dBpad = String(b).padStart(CA, "0").split("").map(Number); // dB alineado a CA dígitos
  const dB = String(b).split("").map(Number);                      // dB original CB dígitos

  // Calcular préstamos y resultado
  const borrow = new Array(CA).fill(0); // borrow[j]=1: columna j pide prestado a columna j-1
  const dR = new Array(CA).fill(0);
  let prevBorrow = 0;
  for (let j = CA - 1; j >= 0; j--) {
    const effTop = dA[j] - prevBorrow;
    if (effTop < dBpad[j]) {
      dR[j] = effTop + 10 - dBpad[j];
      borrow[j] = 1;
    } else {
      dR[j] = effTop - dBpad[j];
      borrow[j] = 0;
    }
    prevBorrow = borrow[j];
  }

  // Calcular acarreo para la verificación: dR + dBpad debe dar dA
  const vCarry = new Array(CA).fill(0);
  let cin = 0;
  for (let j = CA - 1; j >= 0; j--) {
    const G = dR[j] + dBpad[j] + cin;
    vCarry[j] = G >= 10 ? Math.floor(G / 10) : 0;
    cin = vCarry[j];
  }

  return { a, b, answer: a - b, dA, dB, dBpad, borrow, CA, CB, dR, vCarry, _phase: "resta" };
};

// genRestaDec: resta con decimales
// intA: dígitos enteros del minuendo, intB: dígitos enteros del sustraendo, dec: cifras decimales
// integerA: si true, el minuendo no tiene parte decimal (ej. 15.0 - 3.7)
var genRestaDec = (intA, intB, dec, integerA) => {
  const scale = Math.pow(10, dec);
  const CA = intA + dec;   // total columnas de dígitos
  const minAint = Math.pow(10, intA - 1), maxAint = Math.pow(10, intA) - 1;
  const minBint = Math.pow(10, intB - 1), maxBint = Math.pow(10, intB) - 1;
  let aScaled, bScaled, attempts = 0;
  do {
    const aInt = Math.floor(Math.random() * (maxAint - minAint + 1)) + minAint;
    const aDec = integerA ? 0 : Math.floor(Math.random() * scale);
    const bInt = Math.floor(Math.random() * (maxBint - minBint + 1)) + minBint;
    const bDec = Math.floor(Math.random() * scale);
    aScaled = aInt * scale + aDec;
    bScaled = bInt * scale + bDec;
    attempts++;
  } while (aScaled <= bScaled && attempts < 200);
  if (aScaled <= bScaled) aScaled = bScaled + 1;
  const a = aScaled / scale;
  const b = bScaled / scale;
  const aStr = a.toFixed(dec).replace(".", "");
  const bStr = b.toFixed(dec).replace(".", "");
  const dA = aStr.padStart(CA, "0").split("").map(Number);
  const dBpad = bStr.padStart(CA, "0").split("").map(Number);
  const borrow = new Array(CA).fill(0);
  const dR = new Array(CA).fill(0);
  let prevBorrow = 0;
  for (let j = CA - 1; j >= 0; j--) {
    const effTop = dA[j] - prevBorrow;
    if (effTop < dBpad[j]) { dR[j] = effTop + 10 - dBpad[j]; borrow[j] = 1; }
    else { dR[j] = effTop - dBpad[j]; borrow[j] = 0; }
    prevBorrow = borrow[j];
  }
  const vCarry = new Array(CA).fill(0);
  let cin = 0;
  for (let j = CA - 1; j >= 0; j--) {
    const G = dR[j] + dBpad[j] + cin;
    vCarry[j] = G >= 10 ? Math.floor(G / 10) : 0;
    cin = vCarry[j];
  }
  return { a, b, answer: (aScaled - bScaled) / scale, dA, dBpad, borrow, CA, dec, dR, vCarry, _phase: "resta" };
};

// genSumaDec: suma vertical con decimales
// intA: dígitos enteros de cada sumando, dec: cifras decimales, count: cantidad de sumandos
var genSumaDec = (intA, dec, count) => {
  const n = count || 2;
  const scale = Math.pow(10, dec);
  const minInt = Math.pow(10, intA - 1), maxInt = Math.pow(10, intA) - 1;
  const numsScaled = Array.from({ length: n }, () => {
    const intPart = Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    const decPart = Math.floor(Math.random() * scale);
    return intPart * scale + decPart;
  });
  const origW = intA + dec;
  const r = genSumaMulti(numsScaled);
  const nums = numsScaled.map(x => x / scale);
  const answer = r.answer / scale;
  return { ...r, nums, answer, dec, origW, CA: r.W };
};

// ─── Fracciones ─────────────────────────────────────────────────────────────
var _gcd = (a, b) => b === 0 ? a : _gcd(b, a % b);
var _lcm = (a, b) => (a * b) / _gcd(a, b);
var _simp = (n, d) => { const g = _gcd(Math.abs(n), d); return { n: n / g, d: d / g }; };

// op: "suma" | "resta" | "mult" | "div" | "pot"
var genFraccion = (op) => {
  const dens = [2, 3, 4, 5, 6];
  const rDen = () => dens[Math.floor(Math.random() * dens.length)];
  const rNum = (d) => Math.floor(Math.random() * (d - 1)) + 1; // 1..d-1
  let f1, f2 = null, ans, hint = {}, expo = null;
  let attempts = 0;
  while (attempts < 200) {
    attempts++;
    let d1 = rDen(), n1 = rNum(d1);
    let d2 = rDen(), n2 = rNum(d2);
    f1 = _simp(n1, d1);
    f2 = _simp(n2, d2);
    if (op === "suma") {
      const lcd = _lcm(f1.d, f2.d);
      const e1 = f1.n * (lcd / f1.d), e2 = f2.n * (lcd / f2.d);
      ans = _simp(e1 + e2, lcd);
      hint = { lcd, e1, e2 };
      break;
    }
    if (op === "resta") {
      const lcd = _lcm(f1.d, f2.d);
      const e1 = f1.n * (lcd / f1.d), e2 = f2.n * (lcd / f2.d);
      if (e1 <= e2) continue;
      ans = _simp(e1 - e2, lcd);
      hint = { lcd, e1, e2 };
      break;
    }
    if (op === "mult") {
      ans = _simp(f1.n * f2.n, f1.d * f2.d);
      hint = {};
      break;
    }
    if (op === "div") {
      ans = _simp(f1.n * f2.d, f1.d * f2.n);
      hint = { recip: { n: f2.d, d: f2.n } };
      break;
    }
    if (op === "pot") {
      expo = Math.random() < 0.5 ? 2 : 3;
      const pd = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
      const pn = Math.floor(Math.random() * (pd - 1)) + 1;
      f1 = _simp(pn, pd); f2 = null;
      ans = { n: Math.pow(f1.n, expo), d: Math.pow(f1.d, expo) };
      hint = { exp: expo };
      break;
    }
  }
  return { f1, f2, ans, op, hint, expo, _phase: "fraccion" };
};

// genFracMixta: expresión con operaciones mixtas y agrupadores anidados
// Plantilla 0: (A op1 B) op2 [C op3 (D op4 E)]
// Plantilla 1: [A op1 (B op2 C)] op3 (D op4 E)
// Plantilla 2: [A op1 (B op2 C)] op3 {D op4 [E op5 (F op6 G)]}
var genFracMixta = () => {
  const dens = [2, 3, 4, 5, 6, 8, 10, 12];
  const rF = () => {
    const d = dens[Math.floor(Math.random() * dens.length)];
    const n = Math.floor(Math.random() * (d - 1)) + 1;
    return _simp(n, d);
  };
  const addF = (a, b) => { const l = _lcm(a.d, b.d); return _simp(a.n*(l/a.d) + b.n*(l/b.d), l); };
  const subF = (a, b) => { const l = _lcm(a.d, b.d); return _simp(a.n*(l/a.d) - b.n*(l/b.d), l); };
  const mulF = (a, b) => _simp(a.n * b.n, a.d * b.d);
  const divF = (a, b) => _simp(a.n * b.d, a.d * b.n);
  const applyOp = (op, a, b) =>
    op === '+' ? addF(a, b) : op === '-' ? subF(a, b) : op === '×' ? mulF(a, b) : divF(a, b);
  const isOK = (f) => f && f.n > 0 && f.d > 0 && f.d <= 180 && f.n <= 180;
  const mkHint = (a, b, op) => {
    if (op === '+' || op === '-') {
      const l = _lcm(a.d, b.d);
      return { lcd: l, e1: a.n*(l/a.d), e2: b.n*(l/b.d) };
    }
    if (op === '÷') return { recip: { n: b.d, d: b.n } };
    return null;
  };
  const rAS = () => (Math.random() < 0.5 ? '+' : '-');
  const rMD = () => (Math.random() < 0.5 ? '×' : '÷');
  const tmpl = Math.floor(Math.random() * 3);
  let attempts = 0;
  while (attempts++ < 2000) {
    try {
      if (tmpl === 0) {
        const A = rF(), B = rF(), C = rF(), D = rF(), E = rF();
        const op1 = rAS(), op2 = rMD(), op3 = rAS(), op4 = rAS();
        const P1 = applyOp(op1, A, B); if (!isOK(P1)) continue;
        const P2 = applyOp(op4, D, E); if (!isOK(P2)) continue;
        const P3 = applyOp(op3, C, P2); if (!isOK(P3)) continue;
        const ans = applyOp(op2, P1, P3); if (!isOK(ans)) continue;
        return { tmpl: 0, A, B, C, D, E, op1, op2, op3, op4, P1, P2, P3, ans,
          steps: [
            { num:1, bracket:'()', a:A, b:B, op:op1, result:P1, hint:mkHint(A,B,op1) },
            { num:2, bracket:'()', a:D, b:E, op:op4, result:P2, hint:mkHint(D,E,op4) },
            { num:3, bracket:'[]', a:C, b:P2, op:op3, result:P3, hint:mkHint(C,P2,op3) },
            { num:4, bracket:'final', a:P1, b:P3, op:op2, result:ans, hint:mkHint(P1,P3,op2) },
          ], _phase:"fracmixta" };
      }
      if (tmpl === 1) {
        const A = rF(), B = rF(), C = rF(), D = rF(), E = rF();
        const op2 = rAS(), op1 = rAS(), op4 = rMD(), op3 = rMD();
        const P1 = applyOp(op2, B, C); if (!isOK(P1)) continue;
        const P2 = applyOp(op1, A, P1); if (!isOK(P2)) continue;
        const P3 = applyOp(op4, D, E); if (!isOK(P3)) continue;
        const ans = applyOp(op3, P2, P3); if (!isOK(ans)) continue;
        return { tmpl: 1, A, B, C, D, E, op1, op2, op3, op4, P1, P2, P3, ans,
          steps: [
            { num:1, bracket:'()', a:B, b:C, op:op2, result:P1, hint:mkHint(B,C,op2) },
            { num:2, bracket:'[]', a:A, b:P1, op:op1, result:P2, hint:mkHint(A,P1,op1) },
            { num:3, bracket:'()', a:D, b:E, op:op4, result:P3, hint:mkHint(D,E,op4) },
            { num:4, bracket:'final', a:P2, b:P3, op:op3, result:ans, hint:mkHint(P2,P3,op3) },
          ], _phase:"fracmixta" };
      }
      if (tmpl === 2) {
        const A = rF(), B = rF(), C = rF(), D = rF(), E = rF(), F = rF(), G = rF();
        const op2 = rAS(), op1 = rAS(), op6 = rAS(), op5 = rAS(), op4 = rMD(), op3 = rMD();
        const P1 = applyOp(op2, B, C); if (!isOK(P1)) continue;
        const P2 = applyOp(op1, A, P1); if (!isOK(P2)) continue;
        const P3 = applyOp(op6, F, G); if (!isOK(P3)) continue;
        const P4 = applyOp(op5, E, P3); if (!isOK(P4)) continue;
        const P5 = applyOp(op4, D, P4); if (!isOK(P5)) continue;
        const ans = applyOp(op3, P2, P5); if (!isOK(ans)) continue;
        return { tmpl: 2, A, B, C, D, E, F, G, op1, op2, op3, op4, op5, op6,
          P1, P2, P3, P4, P5, ans,
          steps: [
            { num:1, bracket:'()', a:B, b:C, op:op2, result:P1, hint:mkHint(B,C,op2) },
            { num:2, bracket:'[]', a:A, b:P1, op:op1, result:P2, hint:mkHint(A,P1,op1) },
            { num:3, bracket:'()', a:F, b:G, op:op6, result:P3, hint:mkHint(F,G,op6) },
            { num:4, bracket:'[]', a:E, b:P3, op:op5, result:P4, hint:mkHint(E,P3,op5) },
            { num:5, bracket:'{}', a:D, b:P4, op:op4, result:P5, hint:mkHint(D,P4,op4) },
            { num:6, bracket:'final', a:P2, b:P5, op:op3, result:ans, hint:mkHint(P2,P5,op3) },
          ], _phase:"fracmixta" };
      }
    } catch(e) { continue; }
  }
  return genFracMixta();
};

// genFracPotMix: operaciones mixtas con potenciación de fracciones
// Plantilla 0: (A/B)^n op (C/D)^m
// Plantilla 1: [(A/B)^n op C/D] op (E/F)^m
// Plantilla 2: {(A/B)^n op [(C/D)^m op E/F]}
var genFracPotMix = () => {
  const dens = [2, 3, 4, 5, 6];
  const rF = () => {
    const d = dens[Math.floor(Math.random() * dens.length)];
    const n = Math.floor(Math.random() * (d - 1)) + 1;
    return _simp(n, d);
  };
  const rExp = () => Math.random() < 0.5 ? 2 : 3;
  const potF = (f, e) => ({ n: Math.pow(f.n, e), d: Math.pow(f.d, e) });
  const addF = (a, b) => { const l = _lcm(a.d, b.d); return _simp(a.n*(l/a.d) + b.n*(l/b.d), l); };
  const subF = (a, b) => { const l = _lcm(a.d, b.d); return _simp(a.n*(l/a.d) - b.n*(l/b.d), l); };
  const mulF = (a, b) => _simp(a.n * b.n, a.d * b.d);
  const divF = (a, b) => _simp(a.n * b.d, a.d * b.n);
  const applyOp = (op, a, b) =>
    op === '+' ? addF(a, b) : op === '-' ? subF(a, b) : op === '×' ? mulF(a, b) : divF(a, b);
  const isOK = (f) => f && f.n > 0 && f.d > 0 && f.d <= 500 && f.n <= 500 && f.n < 1000 && f.d < 1000;
  const mkHint = (a, b, op) => {
    if (op === '+' || op === '-') {
      const l = _lcm(a.d, b.d);
      return { lcd: l, e1: a.n*(l/a.d), e2: b.n*(l/b.d) };
    }
    if (op === '÷') return { recip: { n: b.d, d: b.n } };
    return null;
  };
  const rAS = () => (Math.random() < 0.5 ? '+' : '-');
  const rMD = () => (Math.random() < 0.5 ? '×' : '÷');
  const tmpl = Math.floor(Math.random() * 3);
  let attempts = 0;
  while (attempts++ < 2000) {
    try {
      if (tmpl === 0) {
        const A = rF(), B = rF();
        const expA = rExp(), expB = rExp();
        const op = rMD();
        const potA = potF(A, expA), potB = potF(B, expB);
        if (!isOK(potA) || !isOK(potB)) continue;
        const ans = applyOp(op, potA, potB); if (!isOK(ans)) continue;
        return { tmpl: 0, A, B, expA, expB, op, potA, potB, ans,
          steps: [
            { num:1, bracket:'pot', a:A, exp:expA, result:potA, isPot:true },
            { num:2, bracket:'pot', a:B, exp:expB, result:potB, isPot:true },
            { num:3, bracket:'final', a:potA, b:potB, op, result:ans, hint:mkHint(potA,potB,op) },
          ], _phase:"fracpotmix" };
      }
      if (tmpl === 1) {
        const A = rF(), B = rF(), C = rF();
        const expA = rExp(), expC = rExp();
        const op1 = rAS(), op2 = rMD();
        const potA = potF(A, expA), potC = potF(C, expC);
        if (!isOK(potA) || !isOK(potC)) continue;
        const P1 = applyOp(op1, potA, B); if (!isOK(P1)) continue;
        const ans = applyOp(op2, P1, potC); if (!isOK(ans)) continue;
        return { tmpl: 1, A, B, C, expA, expC, op1, op2, potA, potC, P1, ans,
          steps: [
            { num:1, bracket:'pot', a:A, exp:expA, result:potA, isPot:true },
            { num:2, bracket:'[]', a:potA, b:B, op:op1, result:P1, hint:mkHint(potA,B,op1) },
            { num:3, bracket:'pot', a:C, exp:expC, result:potC, isPot:true },
            { num:4, bracket:'final', a:P1, b:potC, op:op2, result:ans, hint:mkHint(P1,potC,op2) },
          ], _phase:"fracpotmix" };
      }
      if (tmpl === 2) {
        const A = rF(), B = rF(), C = rF();
        const expA = rExp(), expB = rExp();
        const op1 = rMD(), op2 = rAS();
        const potA = potF(A, expA), potB = potF(B, expB);
        if (!isOK(potA) || !isOK(potB)) continue;
        const P1 = applyOp(op1, potB, C); if (!isOK(P1)) continue;
        const ans = applyOp(op2, potA, P1); if (!isOK(ans)) continue;
        return { tmpl: 2, A, B, C, expA, expB, op1, op2, potA, potB, P1, ans,
          steps: [
            { num:1, bracket:'pot', a:A, exp:expA, result:potA, isPot:true },
            { num:2, bracket:'pot', a:B, exp:expB, result:potB, isPot:true },
            { num:3, bracket:'()', a:potB, b:C, op:op1, result:P1, hint:mkHint(potB,C,op1) },
            { num:4, bracket:'final', a:potA, b:P1, op:op2, result:ans, hint:mkHint(potA,P1,op2) },
          ], _phase:"fracpotmix" };
      }
    } catch(e) { continue; }
  }
  return genFracPotMix();
};

// ── Generador de Regla de Tres Directa (contexto agropecuario) ───────────────
// Fórmula: X = (a2 × b1) / a1  — X siempre es entero
var genR3Directa = (plantilla) => {
  // Devuelve un múltiplo de base dentro de [min, max]
  const rMult = (min, max, base) => {
    const lo = Math.ceil(min / base), hi = Math.floor(max / base);
    return (lo + Math.floor(Math.random() * (hi - lo + 1))) * base;
  };
  let a1, b1, a2, X, texto, hdrA, hdrB, conclusion, verifica;

  if (plantilla === 'vacuna') {
    // 1 res = $b1 (precio unitario), a2 reses = $X
    a1 = 1;
    b1 = rMult(50, 200, 5);           // precio por dosis: 50–200 en múltiplos de 5
    a2 = rMult(10, 80, 5);            // cantidad de reses: 10–80 en múltiplos de 5
    X  = a2 * b1;
    hdrA = 'Reses'; hdrB = 'Costo ($)';
    texto = `La veterinaria cobra $${b1} por cada dosis de vacuna contra aftosa. El ganadero necesita vacunar ${a2} reses. ¿Cuánto debe pagar en total?`;
    verifica = `✔ DIRECTA: más reses → más dosis → más dinero.`;
    conclusion = `El ganadero debe pagar $${X.toLocaleString('es')} para vacunar sus ${a2} reses.`;

  } else if (plantilla === 'concentrado') {
    // a1 cerdos = b1 sacos, a2 cerdos = X sacos  (X entero)
    b1 = 1 + Math.floor(Math.random() * 5);          // 1–5 sacos
    a1 = rMult(20, 80, 10);                           // base: 20–80 cerdos (múltiplos de 10)
    const factor = 2 + Math.floor(Math.random() * 5); // escala ×2 a ×6
    a2 = a1 * factor;
    X  = b1 * factor;
    hdrA = 'Cerdos'; hdrB = 'Sacos de concentrado';
    texto = `${a1} cerdos consumen ${b1} saco${b1 > 1 ? 's' : ''} de concentrado de 40 kg en una semana. El granjero amplió su granja y ahora tiene ${a2} cerdos. ¿Cuántos sacos necesita comprar para esa misma semana?`;
    verifica = `✔ DIRECTA: más cerdos → más alimento → más sacos.`;
    conclusion = `Para alimentar ${a2} cerdos durante una semana se necesitan ${X} sacos de concentrado.`;

  } else if (plantilla === 'ivermectina') {
    // a1 bovinos = b1 ml, a2 bovinos = X ml  (X entero)
    b1 = rMult(30, 120, 10);          // ml base: 30–120 en múltiplos de 10
    a1 = rMult(20, 80, 10);           // bovinos base
    const factor = 1 + Math.floor(Math.random() * 5); // ×1 a ×5 pero aseguramos X > b1
    a2 = a1 * (factor + 1);
    X  = b1 * (factor + 1);
    hdrA = 'Bovinos'; hdrB = 'Ivermectina (ml)';
    texto = `Para desparasitar ${a1} bovinos con ivermectina se necesitan ${b1} ml. El ganadero quiere desparasitar su hato completo de ${a2} bovinos. ¿Cuántos mililitros debe comprar en la tienda agropecuaria?`;
    verifica = `✔ DIRECTA: más bovinos → más producto veterinario.`;
    conclusion = `El ganadero necesita comprar ${X} ml de ivermectina para desparasitar ${a2} bovinos.`;

  } else if (plantilla === 'semillas') {
    // a1 m² = b1 kg semilla, a2 m² = X kg
    b1 = rMult(2, 15, 1);             // kg de semilla
    a1 = rMult(100, 500, 100);        // m² base
    const factor = 2 + Math.floor(Math.random() * 4);
    a2 = a1 * factor;
    X  = b1 * factor;
    hdrA = 'Área (m²)'; hdrB = 'Semillas (kg)';
    texto = `Para sembrar pasto en ${a1} m² se necesitan ${b1} kg de semilla. El agricultor quiere sembrar ${a2} m². ¿Cuántos kilogramos de semilla debe comprar?`;
    verifica = `✔ DIRECTA: mayor área → más semillas.`;
    conclusion = `Para sembrar ${a2} m² se necesitan ${X} kg de semilla de pasto.`;

  } else if (plantilla === 'fertilizante') {
    // a1 plantas = b1 gramos fertilizante, a2 plantas = X gramos
    b1 = rMult(5, 40, 5);             // gramos por lote base
    a1 = rMult(10, 50, 10);           // plantas base
    const factor = 2 + Math.floor(Math.random() * 6);
    a2 = a1 * factor;
    X  = b1 * factor;
    hdrA = 'Plantas'; hdrB = 'Fertilizante (g)';
    texto = `${a1} plantas de cultivo requieren ${b1} g de fertilizante granulado. El agricultor tiene ${a2} plantas en su parcela. ¿Cuántos gramos de fertilizante necesita en total?`;
    verifica = `✔ DIRECTA: más plantas → más fertilizante.`;
    conclusion = `Para ${a2} plantas se necesitan ${X} g de fertilizante granulado.`;

  } else { // riego
    // a1 hectáreas = b1 litros/hora, a2 hectáreas = X litros/hora
    b1 = rMult(200, 800, 100);        // litros/hora
    a1 = 1 + Math.floor(Math.random() * 4);  // 1–4 hectáreas
    a2 = a1 * (2 + Math.floor(Math.random() * 4));
    X  = b1 * (a2 / a1);
    hdrA = 'Hectáreas'; hdrB = 'Agua (L/hora)';
    texto = `El sistema de riego suministra ${b1} litros por hora para ${a1} hectárea${a1 > 1 ? 's' : ''} de cultivo. El productor quiere regar ${a2} hectáreas. ¿Cuántos litros por hora necesita el sistema?`;
    verifica = `✔ DIRECTA: más hectáreas → más agua de riego.`;
    conclusion = `Para regar ${a2} hectáreas el sistema debe suministrar ${X.toLocaleString('es')} litros por hora.`;
  }

  // Paso a paso para la ayuda
  const paso1LaTeX = `\\frac{${a1}}{${a2}} = \\frac{${b1}}{x}`;
  const paso2LaTeX = `${a1} \\times x = ${a2} \\times ${b1}`;
  const paso3LaTeX = `x = \\frac{${a2} \\times ${b1}}{${a1}} = \\frac{${a2 * b1}}{${a1}}`;
  const paso4LaTeX = `x = ${X}`;

  return { plantilla, a1, b1, a2, X, texto, hdrA, hdrB, verifica, conclusion, paso1LaTeX, paso2LaTeX, paso3LaTeX, paso4LaTeX, _phase: 'r3directa' };
};

// ── Generador de Ecuaciones Cuadráticas (contexto agropecuario) ──────────────
// Genera x² - Sx + A = 0  con raíces enteras r1 < r2
var genEcuaCuad = (plantilla) => {
  const nicePairs = [
    [5,10],[5,15],[5,20],[5,25],
    [6,12],[6,14],[6,18],[6,24],
    [8,12],[8,16],[8,20],
    [9,12],[9,16],[9,18],
    [10,15],[10,20],[10,25],[10,30],
    [12,15],[12,16],[12,18],[12,20],
    [15,20],[15,25],[15,30],
    [20,25],[20,30],
  ];
  const [r1, r2] = nicePairs[Math.floor(Math.random() * nicePairs.length)];
  const S = r1 + r2;      // suma de raíces  → coef b (negado)
  const A = r1 * r2;      // producto de raíces → coef c
  const disc = S * S - 4 * A;   // = (r2 - r1)²
  const sqrtDisc = r2 - r1;
  let texto, variable, eq1LaTeX, eq2LaTeX, conclusion;
  if (plantilla === 'corral') {
    const P = 2 * S;
    texto = `Un ganadero dispone de ${P} m de malla ciclónica para construir un corral rectangular. Por normas de bienestar animal, el área del corral debe ser exactamente ${A} m². ¿Cuáles son las dimensiones (ancho y largo) del corral?`;
    variable = `Sea x el ancho del corral (m). Entonces el largo es ${S} - x.`;
    eq1LaTeX = `x(${S}-x)=${A}`;
    eq2LaTeX = `x^{2}-${S}x+${A}=0`;
    conclusion = `El corral mide ${r1} m de ancho × ${r2} m de largo.`;
  } else if (plantilla === 'parcela') {
    texto = `Una parcela rectangular para cultivo tiene un área de ${A} m². La suma del largo y el ancho de la parcela es ${S} metros. ¿Cuáles son sus dimensiones?`;
    variable = `Sea x el ancho de la parcela (m). El largo es ${S} - x.`;
    eq1LaTeX = `x(${S}-x)=${A}`;
    eq2LaTeX = `x^{2}-${S}x+${A}=0`;
    conclusion = `La parcela mide ${r1} m de ancho × ${r2} m de largo.`;
  } else if (plantilla === 'estanque') {
    const P = 2 * S;
    texto = `En una finca se construirá un estanque rectangular para piscicultura. Se cuenta con ${P} m de bordillo para el perímetro y el área del espejo de agua debe ser de ${A} m². ¿Qué dimensiones debe tener el estanque?`;
    variable = `Sea x el ancho del estanque (m). El largo es ${S} - x.`;
    eq1LaTeX = `x(${S}-x)=${A}`;
    eq2LaTeX = `x^{2}-${S}x+${A}=0`;
    conclusion = `El estanque mide ${r1} m de ancho × ${r2} m de largo.`;
  } else if (plantilla === 'invernadero') {
    const P = 2 * S;
    texto = `Se instalará un invernadero rectangular con ${P} m de estructura perimetral. El área de cultivo debe ser de ${A} m² para satisfacer la producción proyectada. ¿Cuáles son sus dimensiones?`;
    variable = `Sea x el ancho del invernadero (m). El largo es ${S} - x.`;
    eq1LaTeX = `x(${S}-x)=${A}`;
    eq2LaTeX = `x^{2}-${S}x+${A}=0`;
    conclusion = `El invernadero mide ${r1} m de ancho × ${r2} m de largo.`;
  } else { // siembra
    texto = `Un agricultor quiere distribuir ${A} plantas en un arreglo rectangular de filas y columnas. El número de filas más el número de plantas por fila suman ${S}. ¿Cuántas filas y cuántas plantas por fila debe haber?`;
    variable = `Sea x el número de filas. Las plantas por fila son ${S} - x.`;
    eq1LaTeX = `x(${S}-x)=${A}`;
    eq2LaTeX = `x^{2}-${S}x+${A}=0`;
    conclusion = `Se forman ${r1} filas con ${r2} plantas cada una (o viceversa).`;
  }
  return { plantilla, r1, r2, S, A, disc, sqrtDisc, texto, variable, eq1LaTeX, eq2LaTeX, conclusion, _phase:'ecuacuad' };
};

// ── Generador de Factorización de Expresiones Cuadráticas (Po-Shen Loh) ─────
// Nivel pp: ambas raíces positivas  (r1>0, r2>0)
// Nivel pn: raíces de signos mixtos (r1>0, r2<0 o viceversa)
// Nivel nn: ambas raíces negativas  (r1<0, r2<0)
// Nivel mix: cualquiera de los anteriores al azar
// La expresión siempre es x² + bx + c (coef. líder 1), raíces enteras
var genFactorizacion = (nivel) => {
  const rInt = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const tipo = nivel === "mix"
    ? ["pp","pn","nn"][Math.floor(Math.random() * 3)]
    : nivel;
  for (let _t = 0; _t < 300; _t++) {
    let r1, r2;
    if (tipo === "pp") {
      r1 = rInt(1, 9); r2 = rInt(1, 9);
      if (r1 === r2) continue;
    } else if (tipo === "nn") {
      r1 = -rInt(1, 9); r2 = -rInt(1, 9);
      if (r1 === r2) continue;
    } else { // pn
      r1 = rInt(1, 9); r2 = -rInt(1, 9);
      if (Math.abs(r1) === Math.abs(r2)) continue; // evitaría b=0
    }
    if (r1 > r2) { const tmp = r1; r1 = r2; r2 = tmp; }
    const bCoef = -(r1 + r2); // coef de x en x² + bx + c
    const cCoef = r1 * r2;
    if (bCoef === 0) continue; // sin término lineal
    // Representación LaTeX de la expresión
    const bStr = bCoef > 0 ? `+${bCoef}` : `-${Math.abs(bCoef)}`;
    const cStr = cCoef > 0 ? `+${cCoef}` : `-${Math.abs(cCoef)}`;
    const exprTex = `x^{2}${bStr}x${cStr}`;
    // Forma factorizada (x - r1)(x - r2), con signos explícitos
    const fs1 = (-r1) >= 0 ? `+${-r1}` : `${-r1}`;
    const fs2 = (-r2) >= 0 ? `+${-r2}` : `${-r2}`;
    const factTex = `(x${fs1})(x${fs2})`;
    // ── Po-Shen Loh ──────────────────────────────────────────
    // sumRoots = r1+r2 = -bCoef
    // m = sumRoots/2  (punto medio entre las raíces)
    // u = (r2-r1)/2   (siempre positivo, r2>r1)
    // u² = m² - c
    const sumR = r1 + r2;     // = -bCoef
    const diff = r2 - r1;     // > 0
    // Representación de m: si sumR es par → entero, si impar → fracción /2
    const mIsInt = sumR % 2 === 0;
    const mDisplay = mIsInt ? `${sumR / 2}` : `\\tfrac{${sumR}}{2}`;
    // u²*4 = (r2-r1)² (siempre perfecto)
    const u2times4 = diff * diff;
    const u2Disp = mIsInt ? `${diff * diff / 4}` : `\\tfrac{${u2times4}}{4}`;
    const uDisp  = mIsInt ? `${diff / 2}` : `\\tfrac{${diff}}{2}`;
    // m² en LaTeX
    const m2Disp = mIsInt ? `${(sumR/2)*(sumR/2)}` : `\\tfrac{${sumR*sumR}}{4}`;
    const paso2 = `m = \\frac{-b}{2} = \\frac{${sumR}}{2} = ${mDisplay}`;
    const paso3 = `u^{2} = m^{2} - c = ${m2Disp} - (${cCoef}) = ${u2Disp}`;
    const paso4 = `u = \\sqrt{${u2Disp}} = ${uDisp}`;
    const paso5 = `x_1 = m - u = ${r1}, \\quad x_2 = m + u = ${r2}`;
    return {
      nivel, tipo, r1, r2, bCoef, cCoef,
      exprTex, factTex,
      paso2, paso3, paso4, paso5,
      mDisplay, uDisp,
      _phase: "factorizacion",
    };
  }
  // fallback
  return genFactorizacion(tipo === "pp" ? "nn" : "pp");
};

var genDivAB = (a, b) => {
  const _q = Math.floor(a / b);
  const dDividend = String(a).split("").map(Number);
  const dDivisor = String(b).split("").map(Number);
  const dQuotient = String(_q).split("").map(Number);
  return {
    dividend: a, divisor: b, quotient: _q,
    dDividend, dDivisor, dQuotient,
    QLen: dQuotient.length, DLen: String(a).length, SLen: String(b).length,
    isDecimal: false, isRemainder: false, decimalPos: -1,
  };
};
