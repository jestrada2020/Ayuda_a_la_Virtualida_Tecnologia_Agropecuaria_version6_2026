#!/usr/bin/env python3
"""Apply mult/multm rendering and navigation changes to scripts.js"""

import subprocess, sys

data = open('js/scripts.js','r').read()

steps = []

# ─── Step 1: Fix home onClick to route mult/multm types ───
OLD1 = 'f.type==="suma"?et(f):f.type==="expr"?Qe(f):tt(f)'
NEW1 = 'f.type==="suma"?et(f):f.type==="mult"?wt(f):f.type==="multm"?wm(f):f.type==="expr"?Qe(f):tt(f)'
steps.append(('home onClick', OLD1, NEW1))

# ─── Step 2: Add Multiplicaciones button to home category grid ───
OLD2 = 'onClick:()=>P("probs"),className:"bg-orange-600 p-6 rounded-2xl"'
NEW2 = 'onClick:()=>P("probs"),className:"bg-orange-600 p-6 rounded-2xl"'
# Actually let's add it after the probs button. Find the closing of the grid.
# The home grid buttons section ends at the closing of that div, before the Lecciones section.
# Pattern: after probs button closing, before the Lecciones bg-white/10 div
OLD2 = 'v.jsx("div",{className:"font-bold",children:"Problemas"})]}),v.jsxs("div",{className:"bg-white/10 rounded-2xl p-6"'
NEW2 = 'v.jsx("div",{className:"font-bold",children:"Problemas"})]}),v.jsxs("button",{onClick:()=>P("mults"),className:"bg-yellow-600 p-6 rounded-2xl",children:[v.jsx("div",{className:"text-3xl mb-2",children:"×"}),v.jsx("div",{className:"font-bold",children:"Multiplicaciones"})]}),v.jsxs("div",{className:"bg-white/10 rounded-2xl p-6"'
steps.append(('home mults button', OLD2, NEW2))

# ─── Step 3: Add mults category page after restas page ───
OLD3 = 'children:"Volver"})]}),C==="suma"&&E&&v.jsxs("main"'
NEW3 = 'children:"Volver"})]}),C==="mults"&&v.jsxs("main",{className:"max-w-4xl mx-auto p-6",children:[v.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Multiplicaciones"}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:xr.filter(f=>f.type==="mult"||f.type==="multm").map(f=>v.jsxs("button",{onClick:()=>f.type==="mult"?wt(f):wm(f),className:"bg-yellow-600 p-6 rounded-2xl hover:bg-yellow-500",children:[v.jsx("div",{className:"font-bold text-lg",children:f.title}),v.jsx("div",{className:"text-yellow-200 text-sm",children:"Practicar"})]},f.id))}),v.jsx("button",{onClick:()=>P("home"),className:"mt-6 text-blue-300",children:"Volver"})]}),C==="suma"&&E&&v.jsxs("main"'
steps.append(('mults category page', OLD3, NEW3))

# ─── Step 4: Add mult mode render (single-digit multiplier) ───
# Insert before C==="expr"&&G&&
OLD4 = 'children:"Reintentar"})]})]})]})]}),C==="expr"&&G&&v.jsx'
MULT_RENDER = (
    'C==="mult"&&E&&v.jsxs("main",{className:"max-w-2xl mx-auto p-6",children:['
    'v.jsx("button",{onClick:()=>P("mults"),className:"mb-4 text-blue-300",children:"Salir"}),'
    'v.jsxs("div",{className:"bg-white/10 p-8 rounded-2xl",children:['
    'v.jsxs("h3",{className:"text-center text-xl font-bold mb-6",children:["Multiplicación - ",d==null?void 0:d.title]}),'
    'v.jsx("div",{className:"flex justify-center mb-8",children:'
    'v.jsxs("div",{className:"text-right font-mono text-5xl",children:['
    # Carry row
    'v.jsx("div",{className:"flex justify-end mb-1",children:'
    'E.carry.map((f,S)=>v.jsx("div",{className:"w-14 text-center",children:'
    'E.carry[S+1]>0&&v.jsx("span",{className:"text-green-400 font-bold text-2xl",children:E.carry[S+1]})},S))}),'
    # Multiplicand row (padded to R digits)
    'v.jsx("div",{className:"mb-2",children:'
    'Array.from({length:E.R},(_,S)=>{const oe=E.R-E.C;return v.jsx("span",{className:"inline-block w-14 text-center "+(S===I?"bg-yellow-500/50 rounded":""),children:S>=oe?E.dA[S-oe]:""},S)})}),'
    # Multiplier row
    'v.jsxs("div",{className:"flex items-center justify-end mb-2",children:['
    'v.jsx("span",{className:"mr-4 text-4xl",children:"×"}),'
    'Array.from({length:E.R},(_,S)=>v.jsx("span",{className:"inline-block w-14 text-center "+(S===I?"bg-yellow-500/50 rounded":""),children:S===E.R-1?E.b:""},S))]}),'
    # Line
    'v.jsx("div",{className:"border-b-4 border-white mb-2"}),'
    # Answer row
    'v.jsx("div",{children:q.map((f,S)=>v.jsx("span",{className:"inline-block w-14 text-center "+(q[S]?parseInt(q[S])===E.dR[S]?"bg-green-500/50 rounded":"bg-red-500/50 rounded":S===I?"bg-yellow-500/50 rounded":""),children:f||(S===I?"?":"_")},S))})'
    ']})})'
    # Done state
    ',I===-1?v.jsxs("div",{className:"text-center",children:['
    'v.jsx("div",{className:"text-4xl text-green-400 font-bold mb-6",children:"¡Muy bien! ✓"}),'
    'v.jsx("button",{onClick:()=>wt(d),className:"w-full bg-green-600 py-4 rounded-xl font-bold mb-3",children:"Nuevo Problema"}),'
    'v.jsx("button",{onClick:()=>{Z(new Array(E.R).fill(""));J(E.R-1)},className:"w-full bg-blue-600 py-3 rounded-xl",children:"Volver a Intentar"})'
    ']}):'
    # Active state
    'v.jsxs("div",{children:['
    'v.jsxs("div",{className:"text-center mb-6 text-blue-200",children:['
    '"Columna ",E.R-I," de ",E.R,": ",(()=>{const oe=E.R-E.C;return I>=oe?E.dA[I-oe]:0})()," × ",E.b," = ?",'
    'I<E.R-1&&E.carry[I+1]>0&&v.jsxs("span",{className:"ml-2 text-green-400",children:["(Llevas: ",E.carry[I+1],")"]})}'
    ']},'
    'v.jsx("div",{className:"grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",children:'
    '[1,2,3,4,5,6,7,8,9,0].map(f=>v.jsx("button",{onClick:()=>ht(String(f)),className:"bg-white/20 p-4 rounded-xl text-2xl font-bold",children:f},f))}),'
    'v.jsxs("div",{className:"flex gap-3 max-w-xs mx-auto",children:['
    'v.jsx("button",{onClick:()=>wt(d),className:"flex-1 bg-green-600 py-3 rounded-xl font-bold",children:"Nuevo"}),'
    'v.jsx("button",{onClick:()=>{Z(new Array(E.R).fill(""));J(E.R-1)},className:"flex-1 bg-blue-600 py-3 rounded-xl",children:"Reintentar"})'
    ']})]}'
    ')]})]}),'
)
NEW4 = MULT_RENDER + 'children:"Reintentar"})]})]})]})]}),C==="expr"&&G&&v.jsx'
steps.append(('mult render', OLD4, NEW4))

# ─── Step 5: Add multm mode render (multi-digit multiplier) ───
# Insert right after the mult render (which is now before C==="expr"...)
# Find the unique boundary after mult render
OLD5 = MULT_RENDER + 'children:"Reintentar"})]})]})]})]}),C==="expr"&&G&&v.jsx'
MULTM_RENDER = (
    'C==="multm"&&E&&v.jsxs("main",{className:"max-w-2xl mx-auto p-6",children:['
    'v.jsx("button",{onClick:()=>P("mults"),className:"mb-4 text-blue-300",children:"Salir"}),'
    'v.jsxs("div",{className:"bg-white/10 p-8 rounded-2xl",children:['
    'v.jsxs("h3",{className:"text-center text-xl font-bold mb-6",children:["Multiplicación - ",d==null?void 0:d.title]}),'
    # Grid display
    'v.jsx("div",{className:"flex justify-center mb-6 overflow-x-auto",children:'
    'v.jsxs("div",{className:"font-mono text-3xl inline-block",children:['
    # Multiplicand row (W columns)
    'v.jsx("div",{className:"flex justify-end mb-1",children:'
    'Array.from({length:E.W},(_,gc)=>{const ridx=gc-(E.W-E.CA);return v.jsx("div",{className:"w-10 text-center",children:ridx>=0?E.dA[ridx]:" "},gc)})}),'
    # Multiplier row
    'v.jsxs("div",{className:"flex justify-end items-center mb-1",children:['
    'v.jsx("span",{className:"text-2xl mr-1",children:"×"}),'
    'Array.from({length:E.W},(_,gc)=>{const ridx=gc-(E.W-E.CB);return v.jsx("div",{className:"w-10 text-center",children:ridx>=0?E.dB[ridx]:" "},gc)})]}),'
    'v.jsx("div",{className:"border-b-4 border-white mb-1"}),'
    # Done partial product rows
    '...E.done.map((dn,pi)=>{const pt=E.parts[pi];return v.jsx("div",{className:"flex justify-end mb-1",children:'
    'Array.from({length:E.W},(_,gc)=>{const qidx=gc-(E.W-pt.shift-pt.len);const isTrail=gc>=E.W-pt.shift;'
    'return v.jsx("div",{className:"w-10 text-center text-green-400",children:isTrail?"0":qidx>=0&&qidx<pt.len?dn[qidx]:" "},gc)})},pi)}),'
    # Current phase row
    'E.phase<E.CB&&(()=>{const pt=E.parts[E.phase];return v.jsx("div",{className:"flex justify-end mb-1",children:'
    'Array.from({length:E.W},(_,gc)=>{const qidx=gc-(E.W-pt.shift-pt.len);const isTrail=gc>=E.W-pt.shift;'
    'if(isTrail)return v.jsx("div",{className:"w-10 text-center text-blue-300",children:"0"},gc);'
    'if(qidx>=0&&qidx<pt.len){const S=qidx;const _ad=S>=1?E.dA[S-1]:0,_cin=S<pt.len-1?pt.carry[S+1]:0,c=(_ad*pt.bDigit+_cin)%10;'
    'const col=q[S]?parseInt(q[S])===c?"bg-green-500/50 rounded":"bg-red-500/50 rounded":S===I?"bg-yellow-500/50 rounded":"";'
    'return v.jsx("div",{className:"w-10 text-center "+col,children:q[S]||(S===I?"?":"_")},gc)}'
    'return v.jsx("div",{className:"w-10 text-center",children:" "},gc)})})})(),'
    # Final result (when all phases done)
    'E.phase>=E.CB&&v.jsxs("div",{children:['
    'v.jsx("div",{className:"border-b-4 border-white mb-1"}),'
    'v.jsx("div",{className:"flex justify-end",children:'
    'Array.from({length:E.W},(_,gc)=>{const ridx=gc-(E.W-E.RF);return v.jsx("div",{className:"w-10 text-center text-yellow-400 font-bold",children:ridx>=0&&ridx<E.RF?E.dR[ridx]:" "},gc)})})'
    ']})'
    ']})})'
    # Controls
    ',E.phase>=E.CB?v.jsxs("div",{className:"text-center",children:['
    'v.jsx("div",{className:"text-4xl text-green-400 font-bold mb-6",children:"¡Muy bien! ✓"}),'
    'v.jsx("button",{onClick:()=>wm(d),className:"w-full bg-green-600 py-4 rounded-xl font-bold mb-3",children:"Nuevo Problema"}),'
    'v.jsx("button",{onClick:()=>wm(d),className:"w-full bg-blue-600 py-3 rounded-xl",children:"Volver a Intentar"})'
    ']}):v.jsxs("div",{children:['
    'v.jsxs("div",{className:"text-center mb-4 text-blue-200",children:['
    '"Parcial ",E.phase+1," de ",E.CB," (dígito: ",E.parts[E.phase].bDigit,"): columna ",E.parts[E.phase].len-I," de ",E.parts[E.phase].len'
    ']}),'
    'v.jsx("div",{className:"grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",children:'
    '[1,2,3,4,5,6,7,8,9,0].map(f=>v.jsx("button",{onClick:()=>hm(String(f)),className:"bg-white/20 p-4 rounded-xl text-2xl font-bold",children:f},f))}),'
    'v.jsxs("div",{className:"flex gap-3 max-w-xs mx-auto",children:['
    'v.jsx("button",{onClick:()=>wm(d),className:"flex-1 bg-green-600 py-3 rounded-xl font-bold",children:"Nuevo"}),'
    'v.jsx("button",{onClick:()=>wm(d),className:"flex-1 bg-blue-600 py-3 rounded-xl",children:"Reintentar"})'
    ']})]}'
    ')]})]}),'
)
NEW5 = MULT_RENDER + MULTM_RENDER + 'children:"Reintentar"})]})]})]})]}),C==="expr"&&G&&v.jsx'
steps.append(('multm render', OLD5, NEW5))

# Apply all steps
for name, old, new in steps:
    if old not in data:
        print(f'FAIL [{name}]: target string not found')
        print(f'  Looking for: {repr(old[:80])}...')
        sys.exit(1)
    count = data.count(old)
    if count > 1:
        print(f'WARN [{name}]: {count} occurrences, replacing first')
    data = data.replace(old, new, 1)
    print(f'OK   [{name}]')

open('js/scripts.js','w').write(data)
print('Written.')

# Verify syntax
result = subprocess.run(['node','--check','js/scripts.js'], capture_output=True, text=True)
if result.returncode == 0:
    print('Syntax OK')
else:
    print('SYNTAX ERROR:')
    print(result.stderr[:2000])
    sys.exit(1)
