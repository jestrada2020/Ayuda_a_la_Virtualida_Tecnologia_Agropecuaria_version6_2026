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
      expr: `(${d} + ${O}) × ${E}`,
      answer: (d + O) * E,
      steps: [`${d} + ${O} = ${d + O}`, `${d + O} × ${E} = ${(d + O) * E}`],
    };
  }
  if (C === "corchetes") {
    // El minuendo supera a la suma del paréntesis: el resultado es positivo (los negativos se practican en «Signos»)
    const O = Math.floor(Math.random() * 5) + 1,
      E = Math.floor(Math.random() * 5) + 1,
      d = O + E + 1 + Math.floor(Math.random() * 12);
    return {
      expr: `[${d} - (${O} + ${E})] × 2`,
      answer: (d - (O + E)) * 2,
      steps: [
        `${O} + ${E} = ${O + E}`,
        `${d} - ${O + E} = ${d - (O + E)}`,
        `${d - (O + E)} × 2 = ${(d - (O + E)) * 2}`,
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
    steps: [`-(-${P}) = +${P} (menos por menos da más)`, `5 + ${P} = ${5 + P}`],
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
var genRestaDec = (intA = 2, intB = 1, dec = 1, integerA = false) => {
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
    const bStr = (bCoef > 0 ? "+" : "-") + (Math.abs(bCoef) === 1 ? "" : Math.abs(bCoef));
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

// ── CONCEPTOS GEOMÉTRICOS: perímetros, áreas y volúmenes en contexto agropecuario ──
// Cada plantilla elige datos enteros para que la respuesta sea exacta (en hectáreas, múltiplo de 0,25).
var GEO_EJERCICIOS = [
  { id: "geo_cerca", grupo: "perimetros", plantilla: "cerca", icon: "🐄", title: "Cerca de potrero" },
  { id: "geo_hileras", grupo: "perimetros", plantilla: "hileras", icon: "〰️", title: "Cerca de varias hileras" },
  { id: "geo_postes", grupo: "perimetros", plantilla: "postes", icon: "🪵", title: "Postes de una cerca" },
  { id: "geo_lote", grupo: "areas", plantilla: "lote", icon: "🌽", title: "Lote rectangular" },
  { id: "geo_triangulo", grupo: "areas", plantilla: "triangulo", icon: "📐", title: "Lote triangular" },
  { id: "geo_hectareas", grupo: "areas", plantilla: "hectareas", icon: "🗺️", title: "Área en hectáreas" },
  { id: "geo_semilla", grupo: "areas", plantilla: "semilla", icon: "🌱", title: "Semilla por área" },
  { id: "geo_tanque", grupo: "volumenes", plantilla: "tanque", icon: "💧", title: "Tanque de agua" },
  { id: "geo_bebedero", grupo: "volumenes", plantilla: "bebedero", icon: "🐮", title: "Bebedero" },
];
var GEO_GRUPOS = [
  { id: "perimetros", titulo: "Perímetros", desc: "Contorno de una figura: suma de sus lados.", formula: "P = 2(l + a)" },
  { id: "areas", titulo: "Áreas", desc: "Superficie de un terreno, en m² o en hectáreas.", formula: "A = l \\cdot a" },
  { id: "volumenes", titulo: "Volúmenes", desc: "Capacidad de tanques y bebederos, en litros.", formula: "V = l \\cdot a \\cdot h" },
];

var genGeometria = (plantilla) => {
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const miles = (n) => {
    const [ent, dec] = String(n).split(".");
    return ent.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (dec ? "," + dec : "");
  };
  const tex = (n) => {
    const [ent, dec] = String(n).split(".");
    return ent.replace(/\B(?=(\d{3})+(?!\d))/g, "\\,") + (dec ? "{,}" + dec : "");
  };
  let o;
  switch (plantilla) {
    case "cerca": {
      const l = r(15, 80), a = r(8, l - 3), P = 2 * (l + a);
      o = { grupo: "Perímetro", texto: `Un potrero rectangular mide ${l} m de largo y ${a} m de ancho. ¿Cuántos metros de alambre se necesitan para cercarlo con una sola hilera?`,
        figura: { tipo: "rect", l, a, u: "m" }, formula: "P = 2(l + a)", pregunta: "Perímetro P", unidad: "m", respuesta: P,
        pasos: [`P = 2(${l} + ${a})`, `P = 2 \\cdot ${l + a}`, `P = ${tex(P)}\\ \\text{m}`],
        pista: "El perímetro suma los cuatro lados: dos largos y dos anchos.",
        conclusion: `Se necesitan ${miles(P)} m de alambre para una hilera.` };
      break;
    }
    case "hileras": {
      const l = r(15, 60), a = r(8, l - 3), n = r(2, 5), P = 2 * (l + a), T = P * n;
      o = { grupo: "Perímetro", texto: `Un corral rectangular mide ${l} m de largo y ${a} m de ancho. La cerca lleva ${n} hileras de alambre de púas. ¿Cuántos metros de alambre se necesitan en total?`,
        figura: { tipo: "rect", l, a, u: "m" }, formula: "\\text{Alambre} = P \\cdot n", pregunta: "Alambre total", unidad: "m", respuesta: T,
        pasos: [`P = 2(${l} + ${a}) = ${tex(P)}\\ \\text{m}`, `\\text{Alambre} = ${tex(P)} \\cdot ${n}`, `\\text{Alambre} = ${tex(T)}\\ \\text{m}`],
        pista: "Primero halle el perímetro; luego multiplíquelo por el número de hileras.",
        conclusion: `Con ${n} hileras se necesitan ${miles(T)} m de alambre.` };
      break;
    }
    case "postes": {
      const d = [2, 3, 4, 5][r(0, 3)], l = d * r(5, 16), a = d * r(3, l / d - 1), P = 2 * (l + a), N = P / d;
      o = { grupo: "Perímetro", texto: `Se va a cercar un lote rectangular de ${l} m de largo y ${a} m de ancho, con un poste cada ${d} m alrededor de todo el lote. ¿Cuántos postes se necesitan?`,
        figura: { tipo: "rect", l, a, u: "m" }, formula: "\\text{Postes} = \\dfrac{P}{d}", pregunta: "Número de postes", unidad: "postes", respuesta: N,
        pasos: [`P = 2(${l} + ${a}) = ${tex(P)}\\ \\text{m}`, `\\text{Postes} = \\dfrac{${tex(P)}}{${d}}`, `\\text{Postes} = ${tex(N)}`],
        pista: "En una cerca cerrada hay tantos postes como tramos: perímetro ÷ distancia entre postes.",
        conclusion: `Se necesitan ${miles(N)} postes (la cerca es cerrada: el último tramo llega al primer poste).` };
      break;
    }
    case "lote": {
      const l = r(10, 60), a = r(5, Math.min(40, l - 1)), A = l * a;
      o = { grupo: "Área", texto: `Un lote de siembra rectangular mide ${l} m de largo y ${a} m de ancho. ¿Cuál es su área en metros cuadrados?`,
        figura: { tipo: "rect", l, a, u: "m" }, formula: "A = l \\cdot a", pregunta: "Área A", unidad: "m²", respuesta: A,
        pasos: [`A = ${l} \\cdot ${a}`, `A = ${tex(A)}\\ \\text{m}^2`],
        pista: "El área de un rectángulo es largo por ancho.",
        conclusion: `El lote tiene ${miles(A)} m² para sembrar.` };
      break;
    }
    case "triangulo": {
      let b, h; do { b = r(6, 40); h = r(4, 30); } while ((b * h) % 2);
      const A = b * h / 2;
      o = { grupo: "Área", texto: `La esquina de un potrero tiene forma de triángulo rectángulo, con ${b} m de base y ${h} m de altura. ¿Cuál es su área?`,
        figura: { tipo: "tri", b, h, u: "m" }, formula: "A = \\dfrac{b \\cdot h}{2}", pregunta: "Área A", unidad: "m²", respuesta: A,
        pasos: [`A = \\dfrac{${b} \\cdot ${h}}{2}`, `A = \\dfrac{${tex(b * h)}}{2}`, `A = ${tex(A)}\\ \\text{m}^2`],
        pista: "El triángulo es la mitad del rectángulo de base b y altura h.",
        conclusion: `La esquina mide ${miles(A)} m².` };
      break;
    }
    case "hectareas": {
      let p, q; do { p = r(1, 8); q = r(1, 6); } while ((p * q) % 4 === 0 && Math.random() < 0.6);
      const l = 50 * Math.max(p, q), a = 50 * Math.min(p, q), A = l * a, ha = A / 10000;
      o = { grupo: "Área", texto: `Una parcela rectangular mide ${l} m de largo y ${a} m de ancho. ¿Cuántas hectáreas tiene? (1 ha = 10.000 m²)`,
        figura: { tipo: "rect", l, a, u: "m" }, formula: "\\text{ha} = \\dfrac{l \\cdot a}{10\\,000}", pregunta: "Área en hectáreas", unidad: "ha", respuesta: ha, decimales: true,
        pasos: [`A = ${l} \\cdot ${a} = ${tex(A)}\\ \\text{m}^2`, `\\text{ha} = \\dfrac{${tex(A)}}{10\\,000}`, `\\text{ha} = ${tex(ha)}`],
        pista: "Calcule el área en m² y divida entre 10.000. Use la tecla «,» para los decimales.",
        conclusion: `La parcela tiene ${miles(ha)} ha (${miles(A)} m²).` };
      break;
    }
    case "semilla": {
      const l = 10 * r(3, 10), a = 10 * r(1, Math.min(6, l / 10 - 1)), dosis = r(1, 5), A = l * a, kg = A / 100 * dosis;
      o = { grupo: "Área", texto: `Se va a sembrar pasto en un lote de ${l} m × ${a} m. La recomendación es ${dosis} kg de semilla por cada 100 m². ¿Cuántos kilogramos de semilla se necesitan?`,
        figura: { tipo: "rect", l, a, u: "m" }, formula: "\\text{kg} = \\dfrac{A}{100} \\cdot \\text{dosis}", pregunta: "Semilla", unidad: "kg", respuesta: kg,
        pasos: [`A = ${l} \\cdot ${a} = ${tex(A)}\\ \\text{m}^2`, `\\dfrac{${tex(A)}}{100} = ${tex(A / 100)}\\ \\text{bloques de } 100\\ \\text{m}^2`, `\\text{kg} = ${tex(A / 100)} \\cdot ${dosis} = ${tex(kg)}\\ \\text{kg}`],
        pista: "Halle el área, cuente cuántos bloques de 100 m² caben y multiplique por la dosis.",
        conclusion: `Se necesitan ${miles(kg)} kg de semilla.` };
      break;
    }
    case "tanque": {
      const l = r(2, 5), a = r(1, l), h = r(1, 3), V = l * a * h, L = V * 1000;
      o = { grupo: "Volumen", texto: `Un tanque de agua en forma de caja mide ${l} m de largo, ${a} m de ancho y ${h} m de alto. ¿Cuántos litros caben cuando está lleno? (1 m³ = 1.000 L)`,
        figura: { tipo: "caja", l, a, h, u: "m" }, formula: "V = l \\cdot a \\cdot h", pregunta: "Capacidad", unidad: "L", respuesta: L,
        pasos: [`V = ${l} \\cdot ${a} \\cdot ${h} = ${tex(V)}\\ \\text{m}^3`, `\\text{L} = ${tex(V)} \\cdot 1\\,000`, `\\text{L} = ${tex(L)}\\ \\text{L}`],
        pista: "Multiplique largo, ancho y alto para tener m³; cada m³ son 1.000 litros.",
        conclusion: `El tanque almacena ${miles(L)} litros.` };
      break;
    }
    default: { // bebedero
      const l = r(9, 30), a = r(2, 8), h = r(2, 6), V = l * a * h;
      o = { grupo: "Volumen", texto: `Un bebedero para ganado tiene forma de caja de ${l} dm de largo, ${a} dm de ancho y ${h} dm de profundidad. ¿Cuántos litros de agua le caben? (1 dm³ = 1 L)`,
        figura: { tipo: "caja", l, a, h, u: "dm" }, formula: "V = l \\cdot a \\cdot h", pregunta: "Capacidad", unidad: "L", respuesta: V,
        pasos: [`V = ${l} \\cdot ${a} \\cdot ${h}`, `V = ${tex(V)}\\ \\text{dm}^3 = ${tex(V)}\\ \\text{L}`],
        pista: "Multiplique las tres medidas; como están en decímetros, el resultado ya está en litros.",
        conclusion: `Al bebedero le caben ${miles(V)} litros.` };
    }
  }
  return { plantilla, decimales: false, ...o };
};

// ── DESPEJE DE VARIABLES: fórmulas del campo y de las ciencias ─────────────────
// Cada ejercicio tiene dos pasos: (1) elegir la fórmula bien despejada entre cuatro
// (la correcta y tres errores típicos, cada uno con su pista) y (2) calcular el valor.
// Los datos se eligen para que la respuesta sea exacta (entera o con un decimal).
var DESPEJE_EJERCICIOS = [
  { id: "desp_dosis", nivel: 1, plantilla: "dosis", icon: "💉", title: "Peso por dosis", ciencia: true },
  { id: "desp_area", nivel: 1, plantilla: "area", icon: "🌽", title: "Largo del lote", area: true },
  { id: "desp_riego", nivel: 1, plantilla: "riego", icon: "💧", title: "Tiempo de riego", ciencia: true },
  { id: "desp_concentracion", nivel: 1, plantilla: "concentracion", icon: "🧪", title: "Producto en la mezcla", ciencia: true },
  { id: "desp_distancia", nivel: 1, plantilla: "distancia", icon: "🚜", title: "Tiempo del tractor", ciencia: true },
  { id: "desp_costo", nivel: 2, plantilla: "costo", icon: "💰", title: "Animales vacunados" },
  { id: "desp_engorde", nivel: 2, plantilla: "engorde", icon: "🐖", title: "Ganancia de peso" },
  { id: "desp_temperatura", nivel: 2, plantilla: "temperatura", icon: "🌡️", title: "Temperatura del bovino", ciencia: true },
  { id: "desp_cerca", nivel: 2, plantilla: "cerca", icon: "🐄", title: "Lado del potrero", area: true },
  { id: "desp_tanque", nivel: 3, plantilla: "tanque", icon: "🛢️", title: "Altura del tanque", area: true },
  { id: "desp_siembra", nivel: 3, plantilla: "siembra", icon: "🌱", title: "Largo del lote sembrado", area: true },
];
var DESPEJE_NIVELES = [
  { nivel: 1, titulo: "Nivel 1: una operación", desc: "Se deshace una multiplicación o una división." },
  { nivel: 2, titulo: "Nivel 2: dos operaciones", desc: "Primero se pasa lo que suma o resta; luego, lo que multiplica." },
  { nivel: 3, titulo: "Nivel 3: varios factores", desc: "La incógnita está multiplicada por dos o más datos." },
];

var genDespeje = (plantilla) => {
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const elige = (xs) => xs[Math.floor(Math.random() * xs.length)];
  const red = (x) => Math.round(x * 1000) / 1000;
  // Número con coma decimal y punto de miles (texto) o \, de miles (LaTeX)
  const partes = (n) => { const [e, d] = String(red(n)).split("."); return [e, d]; };
  const miles = (n) => { const [e, d] = partes(n); return e.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (d ? "," + d : ""); };
  const tx = (n) => { const [e, d] = partes(n); return e.replace(/\B(?=(\d{3})+(?!\d))/g, "\\,") + (d ? "{,}" + d : ""); };
  let o;
  switch (plantilla) {
    case "dosis": {
      const k = elige([20, 25, 50]), D = r(Math.ceil(200 / k), Math.floor(600 / k)), P = k * D; // novillo de 200 a 600 kg
      o = { texto: `Un desparasitante se aplica a razón de 1 ml por cada ${k} kg de peso. A un novillo se le aplicaron ${D} ml. ¿Cuánto pesa el novillo?`,
        formula: `D = \\dfrac{P}{${k}}`, incognita: "P", leyenda: `D: dosis (ml), P: peso (kg)`,
        correcta: `P = ${k}\\,D`,
        errores: [[`P = \\dfrac{D}{${k}}`, `P está dividida entre ${k}: para dejarla sola se multiplica por ${k}, no se divide.`],
                  [`P = \\dfrac{${k}}{D}`, "La fracción quedó invertida. Multiplique ambos lados por el denominador."],
                  [`P = D + ${k}`, `${k} no está restando: está dividiendo. La operación inversa de dividir es multiplicar.`]],
        pasos: [`${D} = \\dfrac{P}{${k}}`, `${D} \\cdot ${k} = P \\quad \\text{(se multiplica por ${k} a ambos lados)}`, `P = ${tx(P)}\\ \\text{kg}`],
        respuesta: P, unidad: "kg", pregunta: "P",
        comprobacion: `\\dfrac{${tx(P)}}{${k}} = ${D}\\ \\text{ml}\\ ✓`,
        conclusion: `El novillo pesa ${miles(P)} kg.` };
      break;
    }
    case "area": {
      const a = r(10, 40), l = r(a + 1, 80), A = l * a;
      o = { texto: `Un lote rectangular de siembra tiene ${miles(A)} m² de área y ${a} m de ancho. ¿Cuánto mide de largo?`,
        formula: `A = l \\cdot a`, incognita: "l", leyenda: "A: área (m²), l: largo (m), a: ancho (m)",
        correcta: `l = \\dfrac{A}{a}`,
        errores: [[`l = A \\cdot a`, "a está multiplicando a l: pasa al otro lado dividiendo."],
                  [`l = \\dfrac{a}{A}`, "La fracción quedó invertida: el área va arriba."],
                  [`l = A - a`, "a no está sumando: está multiplicando. Lo inverso de multiplicar es dividir."]],
        pasos: [`${tx(A)} = l \\cdot ${a}`, `\\dfrac{${tx(A)}}{${a}} = l \\quad \\text{(se divide entre ${a})}`, `l = ${l}\\ \\text{m}`],
        respuesta: l, unidad: "m", pregunta: "l",
        comprobacion: `${l} \\cdot ${a} = ${tx(A)}\\ \\text{m}^2\\ ✓`,
        conclusion: `El lote mide ${l} m de largo.` };
      break;
    }
    case "riego": {
      const Q = elige([200, 250, 300, 400, 500]), t = r(2, 20), V = Q * t;
      o = { texto: `Una bomba de riego entrega ${Q} litros por hora. ¿Cuántas horas tarda en llenar un reservorio de ${miles(V)} litros?`,
        formula: `Q = \\dfrac{V}{t}`, incognita: "t", leyenda: "Q: caudal (L/h), V: volumen (L), t: tiempo (h)",
        correcta: `t = \\dfrac{V}{Q}`,
        errores: [[`t = V \\cdot Q`, "Al multiplicar por t y dividir entre Q, el caudal queda dividiendo, no multiplicando."],
                  [`t = \\dfrac{Q}{V}`, "La fracción quedó invertida: el volumen va arriba."],
                  [`t = V - Q`, "Q no se resta: la fórmula es una división."]],
        pasos: [`${Q} = \\dfrac{${tx(V)}}{t}`, `${Q}\\,t = ${tx(V)} \\quad \\text{(se multiplica por } t)`, `t = \\dfrac{${tx(V)}}{${Q}} = ${t}\\ \\text{h}`],
        respuesta: t, unidad: "h", pregunta: "t",
        comprobacion: `\\dfrac{${tx(V)}}{${t}} = ${Q}\\ \\text{L/h}\\ ✓`,
        conclusion: `La bomba tarda ${t} horas en llenar el reservorio.` };
      break;
    }
    case "concentracion": {
      const c = r(2, 10), V = 5 * r(1, 10), m = c * V;
      o = { texto: `Un fungicida se prepara con una concentración de ${c} gramos por litro de agua. ¿Cuántos gramos de producto se necesitan para una bomba de ${V} litros?`,
        formula: `c = \\dfrac{m}{V}`, incognita: "m", leyenda: "c: concentración (g/L), m: masa de producto (g), V: volumen de agua (L)",
        correcta: `m = c \\cdot V`,
        errores: [[`m = \\dfrac{c}{V}`, "m está dividida entre V: se despeja multiplicando por V."],
                  [`m = \\dfrac{V}{c}`, "Así se despejaría otra letra. m está dividida entre V: multiplique por V."],
                  [`m = c + V`, "V no está restando: está dividiendo."]],
        pasos: [`${c} = \\dfrac{m}{${V}}`, `${c} \\cdot ${V} = m \\quad \\text{(se multiplica por ${V})}`, `m = ${tx(m)}\\ \\text{g}`],
        respuesta: m, unidad: "g", pregunta: "m",
        comprobacion: `\\dfrac{${tx(m)}}{${V}} = ${c}\\ \\text{g/L}\\ ✓`,
        conclusion: `Se necesitan ${miles(m)} g de fungicida para ${V} litros de agua.` };
      break;
    }
    case "distancia": {
      const v = r(4, 12), t = r(2, 8), dd = v * t;
      o = { texto: `Un tractor avanza a ${v} km/h por un camino de la finca. ¿Cuántas horas tarda en recorrer ${dd} km?`,
        formula: `d = v \\cdot t`, incognita: "t", leyenda: "d: distancia (km), v: velocidad (km/h), t: tiempo (h)",
        correcta: `t = \\dfrac{d}{v}`,
        errores: [[`t = d \\cdot v`, "v está multiplicando a t: pasa al otro lado dividiendo."],
                  [`t = \\dfrac{v}{d}`, "La fracción quedó invertida: la distancia va arriba."],
                  [`t = d - v`, "v no está sumando: está multiplicando."]],
        pasos: [`${dd} = ${v}\\,t`, `\\dfrac{${dd}}{${v}} = t \\quad \\text{(se divide entre ${v})}`, `t = ${t}\\ \\text{h}`],
        respuesta: t, unidad: "h", pregunta: "t",
        comprobacion: `${v} \\cdot ${t} = ${dd}\\ \\text{km}\\ ✓`,
        conclusion: `El tractor tarda ${t} horas en recorrer ${dd} km.` };
      break;
    }
    case "costo": {
      const p = elige([800, 1000, 1200, 1500, 2000]), F = 500 * r(6, 16), n = r(5, 40), C = p * n + F;
      o = { texto: `El veterinario cobra $${miles(F)} por la visita más $${miles(p)} por cada animal vacunado. La factura fue de $${miles(C)}. ¿Cuántos animales vacunó?`,
        formula: `C = p\\,n + F`, incognita: "n", leyenda: "C: costo total ($), p: precio por animal ($), n: animales, F: costo de la visita ($)",
        correcta: `n = \\dfrac{C - F}{p}`,
        errores: [[`n = \\dfrac{C + F}{p}`, "F está sumando: al pasarla al otro lado se resta, no se suma."],
                  [`n = \\dfrac{C}{p} - F`, "Primero se quita F (que suma) y después se divide todo entre p; aquí F quedó sin dividir."],
                  [`n = \\dfrac{p}{C - F}`, "La fracción quedó invertida: p está multiplicando a n, así que va abajo."]],
        pasos: [`${tx(C)} = ${tx(p)}\\,n + ${tx(F)}`, `${tx(C)} - ${tx(F)} = ${tx(p)}\\,n \\quad \\text{(se resta ${tx(F)})}`, `${tx(C - F)} = ${tx(p)}\\,n`, `n = \\dfrac{${tx(C - F)}}{${tx(p)}} = ${n}`],
        respuesta: n, unidad: "animales", pregunta: "n",
        comprobacion: `${tx(p)} \\cdot ${n} + ${tx(F)} = ${tx(C)}\\ ✓`,
        conclusion: `Se vacunaron ${n} animales.` };
      break;
    }
    case "engorde": {
      const Pi = r(20, 40), g = r(8, 20), t = r(2, 6), Pf = Pi + g * t;
      o = { texto: `Un cerdo entró al corral de engorde con ${Pi} kg y ${t} meses después pesaba ${Pf} kg. Si ganó el mismo peso cada mes, ¿cuántos kilogramos ganó por mes?`,
        formula: `P_f = P_i + g\\,t`, incognita: "g", leyenda: "P_f: peso final (kg), P_i: peso inicial (kg), g: ganancia por mes (kg), t: meses",
        correcta: `g = \\dfrac{P_f - P_i}{t}`,
        errores: [[`g = \\dfrac{P_f + P_i}{t}`, "P_i está sumando: pasa al otro lado restando."],
                  [`g = \\dfrac{P_f}{t} - P_i`, "Primero se resta P_i y después se divide todo entre t."],
                  [`g = P_f - \\dfrac{P_i}{t}`, "Lo que se divide entre t es la diferencia completa P_f − P_i."]],
        pasos: [`${Pf} = ${Pi} + g \\cdot ${t}`, `${Pf} - ${Pi} = ${t}\\,g \\quad \\text{(se resta ${Pi})}`, `${Pf - Pi} = ${t}\\,g`, `g = \\dfrac{${Pf - Pi}}{${t}} = ${g}\\ \\text{kg/mes}`],
        respuesta: g, unidad: "kg/mes", pregunta: "g",
        comprobacion: `${Pi} + ${g} \\cdot ${t} = ${Pf}\\ \\text{kg}\\ ✓`,
        conclusion: `El cerdo ganó ${g} kg por mes.` };
      break;
    }
    case "temperatura": {
      const C = elige([38, 38.5, 39, 39.5, 40, 40.5, 41]), F = red(1.8 * C + 32);
      const estado = C > 39.5 ? "tiene fiebre (más de 39,5 °C)" : "está en el rango normal de un bovino adulto (hasta 39,5 °C)";
      o = { texto: `Un termómetro importado marca la temperatura en grados Fahrenheit. La vaca Lucero marcó ${miles(F)} °F. ¿Cuál es su temperatura en grados Celsius?`,
        formula: `F = 1{,}8\\,C + 32`, incognita: "C", leyenda: "F: grados Fahrenheit, C: grados Celsius",
        correcta: `C = \\dfrac{F - 32}{1{,}8}`,
        errores: [[`C = \\dfrac{F + 32}{1{,}8}`, "32 está sumando: pasa al otro lado restando."],
                  [`C = \\dfrac{F}{1{,}8} - 32`, "Primero se resta 32 y después se divide todo entre 1,8."],
                  [`C = 1{,}8\\,(F - 32)`, "1,8 multiplica a C: pasa al otro lado dividiendo, no multiplicando."]],
        pasos: [`${tx(F)} = 1{,}8\\,C + 32`, `${tx(F)} - 32 = 1{,}8\\,C \\quad \\text{(se resta 32)}`, `${tx(red(F - 32))} = 1{,}8\\,C`, `C = \\dfrac{${tx(red(F - 32))}}{1{,}8} = ${tx(C)}\\ ^{\\circ}\\text{C}`],
        respuesta: C, unidad: "°C", pregunta: "C",
        comprobacion: `1{,}8 \\cdot ${tx(C)} + 32 = ${tx(F)}\\ ^{\\circ}\\text{F}\\ ✓`,
        conclusion: `Lucero tiene ${miles(C)} °C: ${estado}.` };
      break;
    }
    case "cerca": {
      const a = r(10, 50), l = r(a, a + 60), Pm = 2 * (l + a);
      o = { texto: `Para cercar un potrero rectangular se usaron ${Pm} m de alambre en una hilera. El potrero mide ${a} m de ancho. ¿Cuánto mide de largo?`,
        formula: `P = 2\\,(l + a)`, incognita: "l", leyenda: "P: perímetro (m), l: largo (m), a: ancho (m)",
        correcta: `l = \\dfrac{P}{2} - a`,
        errores: [[`l = \\dfrac{P - a}{2}`, "Primero se divide entre 2 (que multiplica al paréntesis) y después se resta a."],
                  [`l = \\dfrac{P}{2} + a`, "a está sumando dentro del paréntesis: pasa al otro lado restando."],
                  [`l = 2P - a`, "El 2 multiplica al paréntesis: se pasa dividiendo, no multiplicando."]],
        pasos: [`${Pm} = 2\\,(l + ${a})`, `\\dfrac{${Pm}}{2} = l + ${a} \\quad \\text{(se divide entre 2)}`, `${Pm / 2} - ${a} = l \\quad \\text{(se resta ${a})}`, `l = ${l}\\ \\text{m}`],
        respuesta: l, unidad: "m", pregunta: "l",
        comprobacion: `2\\,(${l} + ${a}) = ${Pm}\\ \\text{m}\\ ✓`,
        conclusion: `El potrero mide ${l} m de largo.` };
      break;
    }
    case "tanque": {
      const l = r(2, 6), a = r(1, l), h = elige([1, 1.5, 2, 2.5, 3]), V = red(l * a * h);
      o = { texto: `Un tanque en forma de caja tiene ${miles(V)} m³ de capacidad. Su base mide ${l} m de largo y ${a} m de ancho. ¿Qué altura tiene?`,
        formula: `V = l \\cdot a \\cdot h`, incognita: "h", leyenda: "V: volumen (m³), l: largo (m), a: ancho (m), h: altura (m)",
        correcta: `h = \\dfrac{V}{l \\cdot a}`,
        errores: [[`h = V \\cdot l \\cdot a`, "l y a multiplican a h: pasan al otro lado dividiendo."],
                  [`h = \\dfrac{V}{l} - a`, "a también multiplica a h: se divide entre l y entre a."],
                  [`h = \\dfrac{l \\cdot a}{V}`, "La fracción quedó invertida: el volumen va arriba."]],
        pasos: [`${tx(V)} = ${l} \\cdot ${a} \\cdot h`, `${tx(V)} = ${l * a}\\,h`, `h = \\dfrac{${tx(V)}}{${l * a}} = ${tx(h)}\\ \\text{m}`],
        respuesta: h, unidad: "m", pregunta: "h",
        comprobacion: `${l} \\cdot ${a} \\cdot ${tx(h)} = ${tx(V)}\\ \\text{m}^3\\ ✓`,
        conclusion: `El tanque tiene ${miles(h)} m de altura.` };
      break;
    }
    default: { // siembra
      const rho = r(2, 6), a = r(10, 30), l = r(a, 60), N = rho * l * a;
      o = { texto: `En un lote rectangular de ${a} m de ancho se sembraron ${miles(N)} plantas, a razón de ${rho} plantas por metro cuadrado. ¿Cuánto mide el lote de largo?`,
        formula: `N = \\rho \\cdot l \\cdot a`, incognita: "l", leyenda: "N: plantas, ρ: plantas por m², l: largo (m), a: ancho (m)",
        correcta: `l = \\dfrac{N}{\\rho \\cdot a}`,
        errores: [[`l = \\dfrac{N \\cdot \\rho}{a}`, "ρ multiplica a l: pasa dividiendo, igual que a."],
                  [`l = \\dfrac{N}{\\rho} - a`, "a multiplica a l, no suma: se divide entre a."],
                  [`l = \\dfrac{\\rho \\cdot a}{N}`, "La fracción quedó invertida: el número de plantas va arriba."]],
        pasos: [`${tx(N)} = ${rho} \\cdot l \\cdot ${a}`, `\\dfrac{${tx(N)}}{${rho}} = ${tx(N / rho)} = l \\cdot ${a} \\quad \\text{(área en m}^2)`, `l = \\dfrac{${tx(N / rho)}}{${a}} = ${l}\\ \\text{m}`],
        respuesta: l, unidad: "m", pregunta: "l",
        comprobacion: `${rho} \\cdot ${l} \\cdot ${a} = ${tx(N)}\\ \\text{plantas}\\ ✓`,
        conclusion: `El lote mide ${l} m de largo (${miles(N / rho)} m² sembrados).` };
    }
  }
  // Las cuatro opciones en orden aleatorio; se guarda cuál es la correcta
  const opciones = [{ tex: o.correcta, ok: true, pista: "" }, ...o.errores.map(([tex, pista]) => ({ tex, ok: false, pista }))];
  for (let i = opciones.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [opciones[i], opciones[j]] = [opciones[j], opciones[i]]; }
  return { plantilla, ...o, opciones, decimales: !Number.isInteger(o.respuesta) };
};

// ── RAZONAMIENTO DEDUCTIVO 1: tablas lógicas (tabla matricial con pistas) ──────
// Se sortea una solución y se agregan pistas verdaderas hasta que el solucionador
// paso a paso (pistas directas, descarte en filas/columnas y encadenamiento) la
// determina por completo; luego se quitan las pistas que sobran. Así la solución es
// única y siempre se puede deducir sin probar casos.
var LOGICA_DATOS = {
  personas: ["Ana", "Beto", "Carla", "Darío", "Elena", "Felipe", "Gloria", "Hugo"],
  cats: {
    cultivo: { nombre: "Cultivo", v: "cultiva", o: (x) => x, ni: "ni", items: ["café", "maíz", "plátano", "yuca", "cacao", "fríjol", "papa", "aguacate"] },
    animal: { nombre: "Animal", v: "cría", o: (x) => x, ni: "ni", items: ["cabras", "cerdos", "gallinas", "ovejas", "conejos", "patos", "abejas"] },
    finca: { nombre: "Finca", v: "vive en", o: (x) => "la finca " + x, ni: "ni en", items: ["El Roble", "La Esperanza", "El Porvenir", "Villa Luz", "Los Pinos", "La Palma"] },
  },
};
var LOGICA_NIVELES = [
  { id: "logica_basico", nivel: "basico", title: "Tabla básica", icon: "🧩", desc: "3 productores y su cultivo", n: 3, cats: ["cultivo"] },
  { id: "logica_intermedio", nivel: "intermedio", title: "Tabla intermedia", icon: "🧩", desc: "3 productores, cultivo y animal", n: 3, cats: ["cultivo", "animal"] },
  { id: "logica_avanzado", nivel: "avanzado", title: "Tabla avanzada", icon: "🧩", desc: "4 productores, finca, cultivo y animal", n: 4, cats: ["finca", "cultivo", "animal"] },
];
// Clave canónica de la casilla que relaciona el ítem i de la categoría c1 con el ítem j de c2
var logicaClave = (c1, i, c2, j) => (c1 < c2 ? `${c1}:${i}|${c2}:${j}` : `${c2}:${j}|${c1}:${i}`);

// Solucionador paso a paso. Devuelve los pasos (casilla, valor, razón) y si quedó completa.
var logicaResolver = (cats, n, pistas) => {
  const K = cats.length, G = new Map(), pasos = [];
  const nm = (c, i) => cats[c].items[i];
  const set = (c1, i, c2, j, val, razon) => {
    const k = logicaClave(c1, i, c2, j);
    if (G.has(k)) return false;
    G.set(k, val);
    // a y b en el orden de la tabla: primero el productor, luego finca, cultivo y animal
    const [x, y] = c1 < c2 ? [nm(c1, i), nm(c2, j)] : [nm(c2, j), nm(c1, i)];
    pasos.push({ k, val, razon, a: x, b: y }); return true;
  };
  const get = (c1, i, c2, j) => G.get(logicaClave(c1, i, c2, j));
  pistas.forEach((p, t) => {
    const r = `Por la pista ${t + 1}`;
    if (p.tipo === "pos") set(p.a[0], p.a[1], p.b[0], p.b[1], true, r);
    else { set(p.a[0], p.a[1], p.b[0], p.b[1], false, r); if (p.tipo === "neg2") set(p.a[0], p.a[1], p.b2[0], p.b2[1], false, r); }
  });
  let cambio = true;
  while (cambio) {
    cambio = false;
    for (let c1 = 0; c1 < K; c1++) for (let c2 = 0; c2 < K; c2++) {
      if (c1 === c2) continue;
      for (let i = 0; i < n; i++) {
        const vals = Array.from({ length: n }, (_, j) => get(c1, i, c2, j));
        const si = vals.indexOf(true);
        if (si >= 0) {
          for (let j = 0; j < n; j++) if (j !== si && vals[j] === undefined) cambio = set(c1, i, c2, j, false, `${nm(c1, i)} ya va con ${nm(c2, si)}`) || cambio;
        } else if (vals.filter((x) => x === false).length === n - 1) {
          const j = vals.indexOf(undefined);
          if (j >= 0) cambio = set(c1, i, c2, j, true, `Por descarte: ${nm(c1, i)} no va con ninguna otra opción de ${cats[c2].nombre.toLowerCase()}`) || cambio;
        }
      }
    }
    for (let a = 0; a < K; a++) for (let b = 0; b < K; b++) for (let c = 0; c < K; c++) {
      if (a === b || b === c || a === c) continue;
      for (let x = 0; x < n; x++) for (let y = 0; y < n; y++) {
        if (get(a, x, b, y) !== true) continue;
        for (let z = 0; z < n; z++) {
          const yz = get(b, y, c, z);
          if (yz === true) cambio = set(a, x, c, z, true, `${nm(a, x)} va con ${nm(b, y)}, y ${nm(b, y)} va con ${nm(c, z)}`) || cambio;
          else if (yz === false) cambio = set(a, x, c, z, false, `${nm(a, x)} va con ${nm(b, y)}, y ${nm(b, y)} no va con ${nm(c, z)}`) || cambio;
        }
      }
    }
  }
  const total = (K * (K - 1) / 2) * n * n;
  return { pasos, completo: G.size === total };
};

var genTablaLogica = (nivel) => {
  const cfg = LOGICA_NIVELES.find((x) => x.nivel === nivel) || LOGICA_NIVELES[0];
  const n = cfg.n;
  const mezcla = (xs) => { const a = [...xs]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const r = (k) => Math.floor(Math.random() * k);
  for (let intento = 0; intento < 100; intento++) {
    const cats = [{ nombre: "Productor", items: mezcla(LOGICA_DATOS.personas).slice(0, n).sort((a, b) => a.localeCompare(b, "es")) },
      ...cfg.cats.map((k) => ({ ...LOGICA_DATOS.cats[k], clave: k, items: mezcla(LOGICA_DATOS.cats[k].items).slice(0, n) }))];
    const K = cats.length;
    // sol[c][i] = productor que tiene el ítem i de la categoría c
    const sol = cats.map((_, c) => (c === 0 ? Array.from({ length: n }, (_, i) => i) : mezcla(Array.from({ length: n }, (_, i) => i))));
    const socio = (c, i, c2) => sol[c2].indexOf(sol[c][i]);
    const nueva = () => {
      const cb = 1 + r(K - 1);
      let ca = Math.random() < 0.55 ? 0 : r(K);
      if (ca === cb) ca = 0;
      const i = r(n), j0 = socio(ca, i, cb), t = Math.random();
      if (t < 0.18 && (ca !== 0 || Math.random() < 0.3)) return { tipo: "pos", a: [ca, i], b: [cb, j0] };
      const otros = mezcla(Array.from({ length: n }, (_, j) => j).filter((j) => j !== j0));
      if (t < 0.45 && otros.length >= 2) return { tipo: "neg2", a: [ca, i], b: [cb, otros[0]], b2: [cb, otros[1]] };
      return { tipo: "neg", a: [ca, i], b: [cb, otros[0]] };
    };
    const firma = (p) => p.tipo + p.a + "|" + [p.b, p.b2 || []].map(String).sort().join("|");
    let pistas = [], guarda = 0;
    while (!logicaResolver(cats, n, pistas).completo && guarda++ < 80) {
      const p = nueva();
      if (!pistas.some((q) => firma(q) === firma(p))) pistas.push(p);
    }
    if (!logicaResolver(cats, n, pistas).completo) continue;
    for (let k = pistas.length - 1; k >= 0; k--) {
      const sin = pistas.filter((_, t) => t !== k);
      if (logicaResolver(cats, n, sin).completo) pistas = sin;
    }
    const sujeto = ([c, i]) => (c === 0 ? cats[0].items[i] : `Quien ${cats[c].v} ${cats[c].o(cats[c].items[i])}`);
    const pred = ([c, j]) => `${cats[c].v} ${cats[c].o(cats[c].items[j])}`;
    const textos = pistas.map((p) =>
      p.tipo === "pos" ? `${sujeto(p.a)} ${pred(p.b)}.`
        : p.tipo === "neg" ? `${sujeto(p.a)} no ${pred(p.b)}.`
          : `${sujeto(p.a)} no ${pred(p.b)} ${cats[p.b[0]].ni} ${cats[p.b2[0]].o(cats[p.b2[0]].items[p.b2[1]])}.`);
    const res = logicaResolver(cats, n, pistas);
    return {
      nivel: cfg.nivel, n, K,
      cats: cats.map((c) => ({ nombre: c.nombre, items: c.items })),
      pistas, textos, sol, pasos: res.pasos,
      // ¿La casilla (clave canónica) es verdadera en la solución?
      verdad: (k) => { const [[c1, i], [c2, j]] = k.split("|").map((s) => s.split(":").map(Number)); return sol[c1][i] === sol[c2][j]; },
    };
  }
  return genTablaLogica(nivel);
};

// ── RAZONAMIENTO DEDUCTIVO 2: ¿qué se puede concluir? ─────────────────────────
var DEDUCCION_TIPOS = [
  { id: "ded_silogismo", tipo: "silogismo", icon: "🐄", title: "Silogismos", desc: "«Todos los… son…»" },
  { id: "ded_condicional", tipo: "condicional", icon: "🔀", title: "Si…, entonces…", desc: "Reglas con una condición" },
  { id: "ded_variado", tipo: "variado", icon: "🎲", title: "Variado", desc: "Cualquiera de los anteriores" },
];
var DEDUCCION_NADA = "No se puede concluir nada con certeza.";
var DEDUCCION_SILOGISMOS = [
  { todos: "Todos los bovinos son rumiantes.", es: "Lucero es un bovino.", conc: "Lucero es rumiante.", no: "Lucero no es rumiante.", inversa: "Todos los rumiantes son bovinos." },
  { todos: "Todas las gallinas son aves.", es: "La Pinta es una gallina.", conc: "La Pinta es un ave.", no: "La Pinta no es un ave.", inversa: "Todas las aves son gallinas." },
  { todos: "Todas las leguminosas fijan nitrógeno en el suelo.", es: "El fríjol es una leguminosa.", conc: "El fríjol fija nitrógeno en el suelo.", no: "El fríjol no fija nitrógeno en el suelo.", inversa: "Todas las plantas que fijan nitrógeno son leguminosas." },
  { todos: "Todos los cerdos son omnívoros.", es: "Rosita es una cerda.", conc: "Rosita es omnívora.", no: "Rosita no es omnívora.", inversa: "Todos los omnívoros son cerdos." },
  { todos: "Todos los equinos son herbívoros.", es: "Trueno es un equino.", conc: "Trueno es herbívoro.", no: "Trueno no es herbívoro.", inversa: "Todos los herbívoros son equinos." },
];
// Reglas «si P, entonces Q» con los hechos y conclusiones posibles, y otra causa de Q (para las falacias)
var DEDUCCION_REGLAS = [
  { regla: "Si llueven más de 50 mm en el día, entonces se suspende la fumigación.",
    P: "Hoy llovieron 70 mm.", noP: "Hoy llovieron 20 mm.", Q: "Hoy se suspendió la fumigación.", noQ: "Hoy no se suspendió la fumigación.",
    cP: "Hoy llovieron más de 50 mm.", cNoP: "Hoy no llovieron más de 50 mm.", cQ: "Hoy se suspende la fumigación.", cNoQ: "Hoy no se suspende la fumigación.",
    otra: "la fumigación también se puede suspender por viento fuerte o por falta de producto" },
  { regla: "Si una vaca tiene fiebre, entonces su temperatura pasa de 39,5 °C.",
    P: "Lucero tiene fiebre.", noP: "Lucero no tiene fiebre.", Q: "La temperatura de Lucero pasa de 39,5 °C.", noQ: "La temperatura de Lucero es 38,6 °C.",
    cP: "Lucero tiene fiebre.", cNoP: "Lucero no tiene fiebre.", cQ: "La temperatura de Lucero pasa de 39,5 °C.", cNoQ: "La temperatura de Lucero no pasa de 39,5 °C.",
    otra: "la temperatura también sube por un golpe de calor o después de un esfuerzo, sin que haya fiebre" },
  { regla: "Si el lote tiene gusano cogollero, entonces las hojas del maíz tienen perforaciones.",
    P: "El lote 3 tiene gusano cogollero.", noP: "El lote 3 no tiene gusano cogollero.", Q: "Las hojas del maíz del lote 3 tienen perforaciones.", noQ: "Las hojas del maíz del lote 3 no tienen perforaciones.",
    cP: "El lote 3 tiene gusano cogollero.", cNoP: "El lote 3 no tiene gusano cogollero.", cQ: "Las hojas del lote 3 tienen perforaciones.", cNoQ: "Las hojas del lote 3 no tienen perforaciones.",
    otra: "las perforaciones también pueden deberse al granizo o a otros insectos" },
  { regla: "Si la leche está ácida, entonces no pasa la prueba de alcohol.",
    P: "La leche del tanque está ácida.", noP: "La leche del tanque no está ácida.", Q: "La leche del tanque no pasó la prueba de alcohol.", noQ: "La leche del tanque pasó la prueba de alcohol.",
    cP: "La leche del tanque está ácida.", cNoP: "La leche del tanque no está ácida.", cQ: "La leche del tanque no pasa la prueba de alcohol.", cNoQ: "La leche del tanque pasa la prueba de alcohol.",
    otra: "la leche también puede fallar la prueba por mastitis o por tener calostro" },
  { regla: "Si un ternero fue vacunado contra aftosa, entonces aparece en el registro de vacunación.",
    P: "El ternero Pecas fue vacunado contra aftosa.", noP: "El ternero Pecas no fue vacunado contra aftosa.", Q: "Pecas aparece en el registro de vacunación.", noQ: "Pecas no aparece en el registro de vacunación.",
    cP: "Pecas fue vacunado contra aftosa.", cNoP: "Pecas no fue vacunado contra aftosa.", cQ: "Pecas aparece en el registro de vacunación.", cNoQ: "Pecas no aparece en el registro de vacunación.",
    otra: "un ternero puede estar en el registro por error, o porque la vacuna se programó y no se aplicó" },
  { regla: "Si se riega el pasto en verano, entonces el potrero se mantiene verde.",
    P: "Este verano se regó el potrero La Loma.", noP: "Este verano no se regó el potrero La Loma.", Q: "El potrero La Loma se mantuvo verde.", noQ: "El potrero La Loma no se mantuvo verde.",
    cP: "Este verano se regó La Loma.", cNoP: "Este verano no se regó La Loma.", cQ: "La Loma se mantiene verde.", cNoQ: "La Loma no se mantiene verde.",
    otra: "el potrero también puede seguir verde porque llovió o porque tiene un nacimiento de agua" },
];
var genDeduccion = (tipo) => {
  const elige = (xs) => xs[Math.floor(Math.random() * xs.length)];
  const t = tipo === "variado" ? elige(["silogismo", "condicional", "condicional"]) : tipo;
  let o;
  if (t === "silogismo") {
    const s = elige(DEDUCCION_SILOGISMOS);
    o = { forma: "Silogismo", premisas: [s.todos, s.es],
      opciones: [{ t: s.conc, ok: true }, { t: s.no, nota: "Contradice las premisas." }, { t: s.inversa, nota: "Es la frase al revés: que todos los A sean B no dice que todos los B sean A." }, { t: DEDUCCION_NADA, nota: "Sí se puede concluir algo: el caso pertenece al grupo y hereda su propiedad." }],
      explicacion: `Si todo el grupo cumple la propiedad y el caso pertenece al grupo, el caso también la cumple: ${s.conc}` };
  } else {
    const g = elige(DEDUCCION_REGLAS), f = elige(["ponens", "tollens", "afirmar", "negar"]);
    if (f === "ponens") o = { forma: "Modus ponens", premisas: [g.regla, g.P],
      opciones: [{ t: g.cQ, ok: true }, { t: g.cNoQ, nota: "Contradice la regla: la condición se cumplió." }, { t: g.cNoP, nota: "Contradice el hecho dado." }, { t: DEDUCCION_NADA, nota: "Sí se puede: la condición se cumplió, así que la consecuencia también." }],
      explicacion: `La condición de la regla se cumple, así que la consecuencia también: ${g.cQ}` };
    else if (f === "tollens") o = { forma: "Modus tollens", premisas: [g.regla, g.noQ],
      opciones: [{ t: g.cNoP, ok: true }, { t: g.cP, nota: "Si fuera así, por la regla se habría cumplido la consecuencia, y no se cumplió." }, { t: g.cQ, nota: "Contradice el hecho dado." }, { t: DEDUCCION_NADA, nota: "Sí se puede: si la condición se hubiera cumplido, la consecuencia también; como la consecuencia no se cumplió, la condición tampoco." }],
      explicacion: `Si la condición se hubiera cumplido, la regla obliga a que se cumpla la consecuencia; como la consecuencia no se cumplió, la condición tampoco: ${g.cNoP}` };
    else if (f === "afirmar") o = { forma: "Falacia de afirmar el consecuente", premisas: [g.regla, g.Q],
      opciones: [{ t: DEDUCCION_NADA, ok: true }, { t: g.cP, nota: "Es la falacia de afirmar el consecuente: la consecuencia puede tener otras causas." }, { t: g.cNoP, nota: "Tampoco se sabe: la condición pudo cumplirse o no." }, { t: g.cNoQ, nota: "Contradice el hecho dado." }],
      explicacion: `La regla dice qué pasa cuando se cumple la condición, pero la consecuencia puede tener otras causas: ${g.otra}. Concluir que la condición se cumplió sería la falacia de afirmar el consecuente.` };
    else o = { forma: "Falacia de negar el antecedente", premisas: [g.regla, g.noP],
      opciones: [{ t: DEDUCCION_NADA, ok: true }, { t: g.cNoQ, nota: "Es la falacia de negar el antecedente: la consecuencia puede ocurrir por otras causas." }, { t: g.cQ, nota: "Tampoco se sabe: la regla no dice qué pasa cuando la condición no se cumple." }, { t: g.cP, nota: "Contradice el hecho dado." }],
      explicacion: `La regla no dice qué pasa cuando la condición no se cumple; la consecuencia puede ocurrir igual por otras causas: ${g.otra}. Concluir lo contrario sería la falacia de negar el antecedente.` };
  }
  const op = [...o.opciones];
  for (let i = op.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [op[i], op[j]] = [op[j], op[i]]; }
  return { tipo: t, ...o, opciones: op };
};
