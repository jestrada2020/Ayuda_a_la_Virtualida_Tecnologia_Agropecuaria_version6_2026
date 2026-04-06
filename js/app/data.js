var xr = [
    {
      id: "sumas2",
      title: "Suma 2 Cifras",
      icon: "+",
      type: "suma",
      digits: 2,
    },
    {
      id: "sumas3",
      title: "Suma 3 Cifras",
      icon: "+",
      type: "suma",
      digits: 3,
    },
    {
      id: "sumas4",
      title: "Suma 4 Cifras",
      icon: "+",
      type: "suma",
      digits: 4,
    },
    {
      id: "sumas5",
      title: "Suma 5 Cifras",
      icon: "+",
      type: "suma",
      digits: 5,
    },
    { id: "sumas2_3", title: "3 Sumandos 2C", icon: "+", type: "suma", digits: 2, count: 3 },
    { id: "sumas2_4", title: "4 Sumandos 2C", icon: "+", type: "suma", digits: 2, count: 4 },
    { id: "sumas2_5", title: "5 Sumandos 2C", icon: "+", type: "suma", digits: 2, count: 5 },
    { id: "sumas2_6", title: "6 Sumandos 2C", icon: "+", type: "suma", digits: 2, count: 6 },
    { id: "sumas2_7", title: "7 Sumandos 2C", icon: "+", type: "suma", digits: 2, count: 7 },
    { id: "sumas3_3", title: "3 Sumandos 3C", icon: "+", type: "suma", digits: 3, count: 3 },
    { id: "sumas3_4", title: "4 Sumandos 3C", icon: "+", type: "suma", digits: 3, count: 4 },
    { id: "sumas3_5", title: "5 Sumandos 3C", icon: "+", type: "suma", digits: 3, count: 5 },
    { id: "sumas3_6", title: "6 Sumandos 3C", icon: "+", type: "suma", digits: 3, count: 6 },
    { id: "sumas3_7", title: "7 Sumandos 3C", icon: "+", type: "suma", digits: 3, count: 7 },
    { id: "sumas4_3", title: "3 Sumandos 4C", icon: "+", type: "suma", digits: 4, count: 3 },
    { id: "sumas4_4", title: "4 Sumandos 4C", icon: "+", type: "suma", digits: 4, count: 4 },
    { id: "sumas4_5", title: "5 Sumandos 4C", icon: "+", type: "suma", digits: 4, count: 5 },
    { id: "sumas4_6", title: "6 Sumandos 4C", icon: "+", type: "suma", digits: 4, count: 6 },
    { id: "sumas4_7", title: "7 Sumandos 4C", icon: "+", type: "suma", digits: 4, count: 7 },
    { id: "sumas5_3", title: "3 Sumandos 5C", icon: "+", type: "suma", digits: 5, count: 3 },
    { id: "sumas5_4", title: "4 Sumandos 5C", icon: "+", type: "suma", digits: 5, count: 4 },
    { id: "sumas5_5", title: "5 Sumandos 5C", icon: "+", type: "suma", digits: 5, count: 5 },
    { id: "sumas5_6", title: "6 Sumandos 5C", icon: "+", type: "suma", digits: 5, count: 6 },
    { id: "sumas5_7", title: "7 Sumandos 5C", icon: "+", type: "suma", digits: 5, count: 7 },
    { id: "sumadec1_1",   title: "Suma 1+1 Dec.",    icon: "+.", type: "sumadec", int: 1, dec: 1, count: 2 },
    { id: "sumadec2_1",   title: "Suma 2+1 Dec.",    icon: "+.", type: "sumadec", int: 2, dec: 1, count: 2 },
    { id: "sumadec2_2",   title: "Suma 2+2 Dec.",    icon: "+.", type: "sumadec", int: 2, dec: 2, count: 2 },
    { id: "sumadec3_2",   title: "Suma 3+2 Dec.",    icon: "+.", type: "sumadec", int: 3, dec: 2, count: 2 },
    { id: "sumadec2_1_3", title: "3 Sum. 2+1 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 1, count: 3 },
    { id: "sumadec2_1_4", title: "4 Sum. 2+1 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 1, count: 4 },
    { id: "sumadec2_1_5", title: "5 Sum. 2+1 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 1, count: 5 },
    { id: "sumadec2_1_6", title: "6 Sum. 2+1 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 1, count: 6 },
    { id: "sumadec2_1_7", title: "7 Sum. 2+1 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 1, count: 7 },
    { id: "sumadec2_2_3", title: "3 Sum. 2+2 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 2, count: 3 },
    { id: "sumadec2_2_4", title: "4 Sum. 2+2 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 2, count: 4 },
    { id: "sumadec2_2_5", title: "5 Sum. 2+2 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 2, count: 5 },
    { id: "sumadec2_2_6", title: "6 Sum. 2+2 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 2, count: 6 },
    { id: "sumadec2_2_7", title: "7 Sum. 2+2 Dec.",  icon: "+.", type: "sumadec", int: 2, dec: 2, count: 7 },
    {
      id: "restas2",    title: "Resta 2 Cifras",      icon: "-", type: "resta", digitsA: 2, digitsB: 2 },
    { id: "restas3",    title: "Resta 3 Cifras",      icon: "-", type: "resta", digitsA: 3, digitsB: 3 },
    { id: "restas32",   title: "Resta 3 − 2 Cifras",  icon: "-", type: "resta", digitsA: 3, digitsB: 2 },
    { id: "restas43",   title: "Resta 4 − 3 Cifras",  icon: "-", type: "resta", digitsA: 4, digitsB: 3 },
    { id: "restadec1",  title: "Resta 1 Decimal",     icon: "-.", type: "restadec", intA: 2, intB: 1, dec: 1 },
    { id: "restadec2",  title: "Resta 2 Decimales",   icon: "-.", type: "restadec", intA: 2, intB: 1, dec: 2 },
    { id: "restadec3",  title: "Entero − Decimal",    icon: "-.", type: "restadec", intA: 2, intB: 1, dec: 1, integerA: true },
    { id: "frac_suma",  title: "Suma",                icon: "½+", type: "fraccion", op: "suma"  },
    { id: "frac_resta", title: "Resta",               icon: "½−", type: "fraccion", op: "resta" },
    { id: "frac_mult",  title: "Multiplicación",      icon: "½×", type: "fraccion", op: "mult"  },
    { id: "frac_div",   title: "División",            icon: "½÷", type: "fraccion", op: "div"   },
    { id: "frac_pot",   title: "Potenciación",        icon: "½ⁿ", type: "fraccion", op: "pot"   },
    { id: "frac_mixta", title: "Op. Mixtas",           icon: "½±×", type: "fracmixta" },
    { id: "frac_potmix", title: "Op. Mixtas Pot.",     icon: "(½)ⁿ", type: "fracpotmix" },
    { id: "fact_pp",  title: "Raíces Positivas", icon: "➕", type: "factorizacion", nivel: "pp"  },
    { id: "fact_pn",  title: "Signos Mixtos",    icon: "±",  type: "factorizacion", nivel: "pn"  },
    { id: "fact_nn",  title: "Raíces Negativas", icon: "➖", type: "factorizacion", nivel: "nn"  },
    { id: "fact_mix", title: "Variado",          icon: "🔀", type: "factorizacion", nivel: "mix" },
    { id: "r3d_vacuna",       title: "Vacunación",         icon: "💉", type: "r3directa", plantilla: "vacuna"       },
    { id: "r3d_concentrado",  title: "Concentrado",        icon: "🐷", type: "r3directa", plantilla: "concentrado"  },
    { id: "r3d_ivermectina",  title: "Ivermectina",        icon: "🐮", type: "r3directa", plantilla: "ivermectina"  },
    { id: "r3d_semillas",     title: "Semillas de Pasto",  icon: "🌿", type: "r3directa", plantilla: "semillas"     },
    { id: "r3d_fertilizante", title: "Fertilizante",       icon: "🧪", type: "r3directa", plantilla: "fertilizante" },
    { id: "r3d_riego",        title: "Agua de Riego",      icon: "💧", type: "r3directa", plantilla: "riego"        },
    { id: "eq_corral",      title: "Corral / Cerca",    icon: "🐄", type: "ecuacuad", plantilla: "corral"      },
    { id: "eq_parcela",     title: "Parcela de Cultivo",icon: "🌾", type: "ecuacuad", plantilla: "parcela"     },
    { id: "eq_estanque",    title: "Estanque Peces",    icon: "🐟", type: "ecuacuad", plantilla: "estanque"    },
    { id: "eq_invernadero", title: "Invernadero",       icon: "🏗", type: "ecuacuad", plantilla: "invernadero" },
    { id: "eq_siembra",     title: "Filas de Siembra",  icon: "🌱", type: "ecuacuad", plantilla: "siembra"     },
    { id: "mult2", title: "Mult 2 Cifras", icon: "×", type: "mult", digits: 2 },
    { id: "mult3", title: "Mult 3 Cifras", icon: "×", type: "mult", digits: 3 },
    { id: "mult4", title: "Mult 4 Cifras", icon: "×", type: "mult", digits: 4 },
    {
      id: "mult2x2",
      title: "2×2 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 2,
      digitsB: 2,
    },
    {
      id: "mult3x2",
      title: "3×2 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 3,
      digitsB: 2,
    },
    {
      id: "mult2x3",
      title: "2×3 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 2,
      digitsB: 3,
    },
    {
      id: "mult3x3",
      title: "3×3 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 3,
      digitsB: 3,
    },
    {
      id: "mult4x3",
      title: "4×3 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 4,
      digitsB: 3,
    },
    {
      id: "mult5x4",
      title: "5×4 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 5,
      digitsB: 4,
    },
    {
      id: "mult6x5",
      title: "6×5 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 6,
      digitsB: 5,
    },
    { id: "parentesis", title: "Con Paréntesis", icon: "()", type: "expr" },
    { id: "div2x1", title: "Div 2÷1", icon: "÷", type: "div", digitsA: 2, digitsB: 1 },
    { id: "div3x1", title: "Div 3÷1", icon: "÷", type: "div", digitsA: 3, digitsB: 1 },
    { id: "div4x1", title: "Div 4÷1", icon: "÷", type: "div", digitsA: 4, digitsB: 1 },
    { id: "div3x2", title: "Div 3÷2", icon: "÷", type: "div", digitsA: 3, digitsB: 2 },
    { id: "div4x2", title: "Div 4÷2", icon: "÷", type: "div", digitsA: 4, digitsB: 2 },
    { id: "div5x2", title: "Div 5÷2", icon: "÷", type: "div", digitsA: 5, digitsB: 2 },
    { id: "div4x3", title: "Div 4÷3", icon: "÷", type: "div", digitsA: 4, digitsB: 3 },
    { id: "div5x3", title: "Div 5÷3", icon: "÷", type: "div", digitsA: 5, digitsB: 3 },
    { id: "div6x3", title: "Div 6÷3", icon: "÷", type: "div", digitsA: 6, digitsB: 3 },
    { id: "div6x4", title: "Div 6÷4", icon: "÷", type: "div", digitsA: 6, digitsB: 4 },
    { id: "divd2x1", title: "DivD 2÷1", icon: "÷.", type: "divd", digitsA: 2, digitsB: 1 },
    { id: "divd3x1", title: "DivD 3÷1", icon: "÷.", type: "divd", digitsA: 3, digitsB: 1 },
    { id: "divd4x1", title: "DivD 4÷1", icon: "÷.", type: "divd", digitsA: 4, digitsB: 1 },
    { id: "divd3x2", title: "DivD 3÷2", icon: "÷.", type: "divd", digitsA: 3, digitsB: 2 },
    { id: "divd4x2", title: "DivD 4÷2", icon: "÷.", type: "divd", digitsA: 4, digitsB: 2 },
    { id: "divd5x2", title: "DivD 5÷2", icon: "÷.", type: "divd", digitsA: 5, digitsB: 2 },
    { id: "divd4x3", title: "DivD 4÷3", icon: "÷.", type: "divd", digitsA: 4, digitsB: 3 },
    { id: "divd5x3", title: "DivD 5÷3", icon: "÷.", type: "divd", digitsA: 5, digitsB: 3 },
    { id: "divd6x3", title: "DivD 6÷3", icon: "÷.", type: "divd", digitsA: 6, digitsB: 3 },
    { id: "divd6x4", title: "DivD 6÷4", icon: "÷.", type: "divd", digitsA: 6, digitsB: 4 },
    { id: "divr2x1", title: "DivR 2÷1", icon: "÷R", type: "divr", digitsA: 2, digitsB: 1 },
    { id: "divr3x1", title: "DivR 3÷1", icon: "÷R", type: "divr", digitsA: 3, digitsB: 1 },
    { id: "divr4x1", title: "DivR 4÷1", icon: "÷R", type: "divr", digitsA: 4, digitsB: 1 },
    { id: "divr3x2", title: "DivR 3÷2", icon: "÷R", type: "divr", digitsA: 3, digitsB: 2 },
    { id: "divr4x2", title: "DivR 4÷2", icon: "÷R", type: "divr", digitsA: 4, digitsB: 2 },
    { id: "divr5x2", title: "DivR 5÷2", icon: "÷R", type: "divr", digitsA: 5, digitsB: 2 },
    { id: "divr4x3", title: "DivR 4÷3", icon: "÷R", type: "divr", digitsA: 4, digitsB: 3 },
    { id: "divr5x3", title: "DivR 5÷3", icon: "÷R", type: "divr", digitsA: 5, digitsB: 3 },
    { id: "divr6x3", title: "DivR 6÷3", icon: "÷R", type: "divr", digitsA: 6, digitsB: 3 },
    { id: "divr6x4", title: "DivR 6÷4", icon: "÷R", type: "divr", digitsA: 6, digitsB: 4 },
    { id: "corchetes", title: "Con Corchetes", icon: "[]", type: "expr" },
    { id: "llaves", title: "Con Llaves", icon: "{}", type: "expr" },
    { id: "signos", title: "Signos", icon: "+-", type: "expr" },
    { id: "signos_par", title: "Signos + ( )", icon: "-()", type: "expr" },
    { id: "signos_cor", title: "Signos + [ ]", icon: "-[]", type: "expr" },
    { id: "signos_lla", title: "Signos + { }", icon: "-{}", type: "expr" },
    {
      id: "tienda",
      title: "Tienda",
      icon: "🛒",
      type: "problema",
      category: "tienda",
      problemas: [
        // 1: 3×2 + 2×3 + 1×5 = 6+6+5 = 17
        { texto: "María compró 3 kilos de arroz a $2 c/u, 2 kilos de azúcar a $3 c/u y 1 litro de aceite a $5. ¿Cuánto gastó?", respuesta: 17 },
        // 2: 5×4 + 3×7 = 20+21 = 41 → 50-41 = 9
        { texto: "Juan compró 5 libras de pollo a $4 c/u y 3 libras de carne a $7 c/u. Pagó con $50. ¿Cuánto le devolvieron?", respuesta: 9 },
        // 3: 45+30+25 = 100 → 120-100 = 20
        { texto: "La señora gastó $45 en frutas, $30 en verduras y $25 en carnes. Pagó con $120. ¿Cuánto le sobró?", respuesta: 20 },
        // 4: (8+5)×3 = 13×3 = 39
        { texto: "En la frutería las manzanas cuestan $3 c/u. Ana compró 8 y Luis compró 5. ¿Cuánto pagaron entre los dos?", respuesta: 39 },
        // 5: 5×4 + 4×3 = 20+12 = 32
        { texto: "Rosa compró 5 kg de tomates a $4/kg y 4 kg de cebollas a $3/kg. ¿Cuánto gastó en total?", respuesta: 32 },
        // 6: 150×2×5 = 1500
        { texto: "Don José vende 150 bolsas de leche por día a $2 cada una. ¿Cuánto gana en 5 días?", respuesta: 1500 },
        // 7: 200-45-63-78 = 14
        { texto: "La tienda tenía 200 unidades. El lunes vendió 45, el martes 63 y el miércoles 78. ¿Cuántas unidades le quedan?", respuesta: 14 },
        // 8: 3×15 + 2×25 = 45+50 = 95
        { texto: "Carlos compró 3 camisas a $15 cada una y 2 pantalones a $25 cada uno. ¿Cuánto gastó en total?", respuesta: 95 },
        // 9: 24×2 = 48
        { texto: "Una caja de chocolates tiene 24 unidades a $2 cada una. ¿Cuánto cuesta la caja completa?", respuesta: 48 },
        // 10: 3×2 + 4×3 + 2×5 = 6+12+10 = 28
        { texto: "En la plaza: 3 kg de banano a $2/kg, 4 kg de naranja a $3/kg y 2 kg de manzana a $5/kg. ¿Cuánto es el total?", respuesta: 28 },
        // 11: 4×3 + 6×1 + 2×2 = 12+6+4 = 22
        { texto: "Sofía compró útiles: 4 cuadernos a $3, 6 lápices a $1 y 2 borradores a $2. ¿Cuánto gastó?", respuesta: 22 },
        // 12: 15×8 = 120
        { texto: "Una papelería vende resmas de papel a $8 cada una. Un colegio compró 15 resmas. ¿Cuánto pagó?", respuesta: 120 },
        // 13: (35+42)×4 = 77×4 = 308
        { texto: "Pedro vende jugos a $4 cada uno. El lunes vendió 35 jugos y el martes 42. ¿Cuánto ganó en los dos días?", respuesta: 308 },
        // 14: 20×1 + 8×5 + 3×12 = 20+40+36 = 96
        { texto: "La ferretería vendió: 20 tornillos a $1, 8 llaves a $5 y 3 martillos a $12. ¿Cuánto recaudó en total?", respuesta: 96 },
        // 15: 80-23-15-18 = 24
        { texto: "Ana tenía $80. Gastó $23 en comida, $15 en transporte y $18 en entretenimiento. ¿Cuánto le queda?", respuesta: 24 },
      ],
    },
    {
      id: "finca",
      title: "Finca",
      icon: "🌾",
      type: "problema",
      category: "finca",
      problemas: [
        // 1: 25+12+8 = 45 → 45-15 = 30
        { texto: "En una finca hay 25 gallinas, 12 gallos y 8 pollos. Se venden 15 animales. ¿Cuántos quedan?", respuesta: 30 },
        // 2: mayor=105 kg × $2 = 210
        { texto: "Un granjero tiene 3 cerdos de 80 kg, 95 kg y 105 kg. Vende el más pesado a $2/kg. ¿Cuánto obtiene?", respuesta: 210 },
        // 3: 120+85+65 = 270 → 270-200 = 70
        { texto: "La finca produjo 120 kg de maíz, 85 kg de frijol y 65 kg de arroz. Se vendieron 200 kg. ¿Cuántos kg quedan?", respuesta: 70 },
        // 4: 4×12×7 = 336
        { texto: "Una finca tiene 4 vacas que producen 12 litros de leche cada una por día. ¿Cuántos litros producen en una semana?", respuesta: 336 },
        // 5: 8×50 = 400
        { texto: "Se sembraron 8 hectáreas de maíz. Cada hectárea produce 50 bultos. ¿Cuántos bultos se obtienen en total?", respuesta: 400 },
        // 6: (85+63)×5 = 148×5 = 740
        { texto: "El agricultor recogió 85 kg de café en la mañana y 63 kg en la tarde. Si vende todo a $5 el kg, ¿cuánto recibe?", respuesta: 740 },
        // 7: 3×25×15 = 1125
        { texto: "La finca tiene 3 lotes con 25 árboles de naranja cada uno. Cada árbol produce 15 naranjas. ¿Cuántas naranjas hay en total?", respuesta: 1125 },
        // 8: (240-80)×3 = 160×3 = 480
        { texto: "Se cosecharon 240 kg de papa. Se guardan 80 kg para semilla y el resto se vende a $3/kg. ¿Cuánto se obtiene?", respuesta: 480 },
        // 9: 15+12+18-8 = 37
        { texto: "En la finca nacieron 15 terneros en enero, 12 en febrero y 18 en marzo. Si murieron 8, ¿cuántos terneros hay?", respuesta: 37 },
        // 10: 60×5×4 = 1200
        { texto: "Un gallinero tiene 60 gallinas. Cada una pone 5 huevos por semana. ¿Cuántos huevos se recogen en 4 semanas?", respuesta: 1200 },
        // 11: 200×6 = 1200
        { texto: "Se plantan 200 matas de yuca en una hectárea. Cada mata produce 6 kg. ¿Cuántos kg produce la hectárea?", respuesta: 1200 },
        // 12: 350×4 = 1400
        { texto: "La finca cosecha 350 kg de tomates por semana. ¿Cuántos kg cosecha en un mes de 4 semanas?", respuesta: 1400 },
        // 13: 12×15 + 8×20 = 180+160 = 340
        { texto: "El dueño compró 12 sacos de abono a $15 cada uno y 8 litros de fungicida a $20 el litro. ¿Cuánto gastó?", respuesta: 340 },
        // 14: (45+30+25)-40 = 100-40 = 60
        { texto: "En la finca hay 45 patos, 30 gallinas y 25 gansos. Si se venden 40 aves, ¿cuántas quedan?", respuesta: 60 },
        // 15: 4×80 + 2×60 = 320+120 = 440
        { texto: "Se sembró maíz en 6 hectáreas: las primeras 4 produjeron 80 bultos c/u y las otras 2 produjeron 60 bultos c/u. ¿Total de bultos?", respuesta: 440 },
      ],
    },
    {
      id: "ganado",
      title: "Ganado",
      icon: "🐄",
      type: "problema",
      category: "ganado",
      problemas: [
        // 1: 45×8×7 = 2520
        { texto: "Don Pedro tiene 45 vacas. Cada una produce 8 litros de leche al día. ¿Cuántos litros producen en una semana?", respuesta: 2520 },
        // 2: 120×2 = 240 → 240-80 = 160
        { texto: "Un ganadero tiene 120 ovejas. Cada oveja produce 2 kg de lana. Si vende 80 kg, ¿cuántos kg le quedan?", respuesta: 160 },
        // 3: (25+15+10)×200 = 50×200 = 10000
        { texto: "El corral tiene 25 pollos, 15 gallinas y 10 patos. Cada uno come 200 g de alimento. ¿Cuántos gramos se necesitan al día?", respuesta: 10000 },
        // 4: 8×450×3 = 10800
        { texto: "Don Carlos tiene 8 toros que pesan 450 kg cada uno. Si los vende a $3 el kg, ¿cuánto recibe?", respuesta: 10800 },
        // 5: 30×15×2 = 900
        { texto: "Una hacienda tiene 30 vacas lecheras que producen 15 litros diarios cada una. Si el litro se vende a $2, ¿cuánto gana al día?", respuesta: 900 },
        // 6: 5×(950-800) = 5×150 = 750
        { texto: "El ganadero compró 5 novillos a $800 cada uno y los vendió a $950 cada uno. ¿Cuánto ganó en total?", respuesta: 750 },
        // 7: 150+12-25 = 137
        { texto: "Una finca ganadera tiene 150 reses. En el mes nacen 12 y se venden 25. ¿Cuántas reses hay al final del mes?", respuesta: 137 },
        // 8: 40×2×7×3 = 1680
        { texto: "Se ordeñan 40 vacas dos veces al día y cada ordeño produce 7 litros. ¿Cuántos litros se obtienen en 3 días?", respuesta: 1680 },
        // 9: 60×2×7 = 840
        { texto: "Un ganadero tiene 60 cabras. Cada una produce 2 litros de leche al día. ¿Cuántos litros se obtienen en una semana?", respuesta: 840 },
        // 10: 20×(550-300) = 20×250 = 5000
        { texto: "Se compraron 20 terneros a $300 cada uno y se vendieron a $550 cada uno. ¿Cuánto se ganó en total?", respuesta: 5000 },
        // 11: 85+12+34 = 131
        { texto: "En el potrero hay 85 vacas, 12 toros y 34 terneros. ¿Cuántas cabezas de ganado hay en total?", respuesta: 131 },
        // 12: 18×25×7 = 3150
        { texto: "Cada vaca come 25 kg de pasto al día. Si hay 18 vacas, ¿cuántos kg de pasto se necesitan en una semana?", respuesta: 3150 },
        // 13: 6×1200=7200 → 7200÷800 = 9
        { texto: "Un ganadero vendió 6 vacas a $1200 cada una. Con ese dinero quiere comprar novillos a $800 cada uno. ¿Cuántos novillos puede comprar?", respuesta: 9 },
        // 14: 280+265+310 = 855
        { texto: "La producción de leche fue: lunes 280 litros, martes 265 litros y miércoles 310 litros. ¿Cuántos litros en los 3 días?", respuesta: 855 },
        // 15: 45+38+52 = 135
        { texto: "Un ganadero tiene 3 potreros con 45, 38 y 52 reses respectivamente. ¿Cuántas reses tiene en total?", respuesta: 135 },
      ],
    },
    {
      id: "engorde",
      title: "Engorde",
      icon: "🐖",
      type: "problema",
      category: "engorde",
      problemas: [
        // 1: 50×1.5×3 = 225
        { texto: "Un criador tiene 50 cerdos para engorde. Cada uno aumenta 1.5 kg por mes. ¿Cuánto aumentan en total en 3 meses?", respuesta: 225 },
        // 2: 30×25 = 750
        { texto: "Se engordan 30 reses. Cada una gana 25 kg en 6 meses. ¿Cuántos kg ganan en total?", respuesta: 750 },
        // 3: 3×80×2 = 480
        { texto: "El criador alimenta 3 veces al día a 80 cerdos. Cada comida es de 2 kg por cerdo. ¿Cuántos kg usa al día?", respuesta: 480 },
        // 4: 95-30 = 65
        { texto: "Un cerdo entra al corral pesando 30 kg. Después de 4 meses de engorde pesa 95 kg. ¿Cuántos kg aumentó?", respuesta: 65 },
        // 5: 25×(1+3×2) = 25×7 = 175
        { texto: "Se compraron 25 pollos de 1 kg cada uno. Si cada pollo gana 3 kg por mes, ¿cuánto pesan todos juntos después de 2 meses?", respuesta: 175 },
        // 6: 40×4×15 = 2400
        { texto: "Un criador tiene 40 cerdos. Cada uno consume 4 kg de alimento al día. ¿Cuántos kg de alimento necesita para 15 días?", respuesta: 2400 },
        // 7: 15×(380-200) = 15×180 = 2700
        { texto: "Se engordaron 15 novillos que pesaban 200 kg al entrar. Al salir pesaban 380 kg cada uno. ¿Cuántos kg ganaron en total?", respuesta: 2700 },
        // 8: 6×80×3 = 1440
        { texto: "El criador vende 6 cerdos de 80 kg cada uno a $3 el kg. ¿Cuánto recibe en total?", respuesta: 1440 },
        // 9: 80×150 = 12000
        { texto: "Cada pollo de engorde consume 150 gramos de alimento al día. Si hay 80 pollos, ¿cuántos gramos consumen en un día?", respuesta: 12000 },
        // 10: 12×2×6 = 144
        { texto: "Un corral de engorde tiene 12 cerdos. Cada uno gana 2 kg de peso por semana. ¿Cuántos kg ganan en total en 6 semanas?", respuesta: 144 },
        // 11: 35×8×10 = 2800
        { texto: "Un corral tiene 35 cerdos. El alimento cuesta $8 al día por cerdo. ¿Cuánto cuesta alimentarlos durante 10 días?", respuesta: 2800 },
        // 12: 50×45 - 50×5 = 2250-250 = 2000
        { texto: "Se compraron 50 pollitos a $5 cada uno y se vendieron engordados a $45 cada uno. ¿Cuánto se ganó?", respuesta: 2000 },
        // 13: 3×120×2×6 = 4320
        { texto: "Un engorde tiene 3 galpones con 120 pollos cada uno. Cada pollo pesa 2 kg al vender y el kg vale $6. ¿Cuánto se obtiene?", respuesta: 4320 },
        // 14: 18×(100-25) = 18×75 = 1350
        { texto: "Se engordan 18 cerdos que entraron pesando 25 kg y salen pesando 100 kg cada uno. ¿Cuántos kg ganaron en total?", respuesta: 1350 },
        // 15: 60×3×3×5 = 2700
        { texto: "Un criador alimenta a sus 60 cerdos 3 veces al día con 3 kg por comida cada uno. ¿Cuántos kg de alimento usa en 5 días?", respuesta: 2700 },
      ],
    },
    {
      id: "probi_suma", title: "Prob. Sumas", icon: "➕", type: "probi",
      problemas: [
        { texto: "María compró 245 manzanas y 178 naranjas. ¿Cuántas frutas tiene en total?", a: 245, b: 178, op: "suma" },
        { texto: "En la mañana se vendieron 356 boletos y en la tarde 289. ¿Cuántos boletos se vendieron en total?", a: 356, b: 289, op: "suma" },
        { texto: "Un almacén tiene 1234 cajas en bodega y recibe 567 más. ¿Cuántas cajas tiene ahora?", a: 1234, b: 567, op: "suma" },
        { texto: "Una escuela tiene 428 estudiantes de primaria y 395 de secundaria. ¿Cuántos estudiantes hay?", a: 428, b: 395, op: "suma" },
        { texto: "Pedro recorrió 1567 metros caminando y 2345 metros en bicicleta. ¿Cuántos metros recorrió?", a: 1567, b: 2345, op: "suma" },
      ],
    },
    {
      id: "probi_mult", title: "Prob. Multiplicación", icon: "✖️", type: "probi",
      problemas: [
        { texto: "Una caja tiene 24 huevos. Si hay 13 cajas, ¿cuántos huevos hay en total?", a: 24, b: 13, op: "mult" },
        { texto: "Cada fila del teatro tiene 35 sillas y hay 12 filas. ¿Cuántas sillas hay en total?", a: 35, b: 12, op: "mult" },
        { texto: "Un camión lleva 48 sacos de arroz. Si hacen 15 viajes, ¿cuántos sacos transportan?", a: 48, b: 15, op: "mult" },
        { texto: "Una granja produce 125 litros de leche diarios. ¿Cuántos litros produce en 8 días?", a: 125, b: 8, op: "mult" },
        { texto: "En una panadería hacen 56 panes por hora. ¿Cuántos panes hacen en 23 horas?", a: 56, b: 23, op: "mult" },
      ],
    },
    {
      id: "probi_div", title: "Prob. División", icon: "➗", type: "probi",
      problemas: [
        { texto: "Se reparten 156 dulces entre 12 niños por igual. ¿Cuántos dulces recibe cada niño?", a: 156, b: 12, op: "div" },
        { texto: "Un agricultor tiene 750 naranjas y las empaca en cajas de 25. ¿Cuántas cajas necesita?", a: 750, b: 25, op: "div" },
        { texto: "Una fábrica produce 1296 botellas y las empaca en paquetes de 6. ¿Cuántos paquetes hace?", a: 1296, b: 6, op: "div" },
        { texto: "Un bus recorre 2184 km en 7 días. ¿Cuántos kilómetros recorre por día?", a: 2184, b: 7, op: "div" },
        { texto: "Se tienen 4560 hojas y se reparten en 15 cuadernos iguales. ¿Cuántas hojas tiene cada cuaderno?", a: 4560, b: 15, op: "div" },
      ],
    },
    {
      id: "probi_sumam", title: "Prob. Sumas Múltiples", icon: "➕➕", type: "probi",
      problemas: [
        { texto: "En una tienda se vendieron: lunes $345, martes $278, miércoles $412, jueves $189. ¿Cuánto se vendió en total?", nums: [345, 278, 412, 189], op: "suma" },
        { texto: "Un granjero cosechó 156 kg de maíz, 234 kg de frijol, 89 kg de arroz, 312 kg de trigo y 178 kg de cebada. ¿Cuántos kg cosechó?", nums: [156, 234, 89, 312, 178], op: "suma" },
        { texto: "En 5 meses una fábrica produjo: 1234, 987, 1456, 876, 1123 unidades. ¿Cuántas produjo en total?", nums: [1234, 987, 1456, 876, 1123], op: "suma" },
        { texto: "Una escuela tiene 5 salones con 38, 42, 35, 41 y 39 estudiantes. ¿Cuántos estudiantes hay?", nums: [38, 42, 35, 41, 39], op: "suma" },
        { texto: "Pedro compró útiles: cuadernos $450, lápices $125, borrador $35, regla $80, colores $310. ¿Cuánto gastó?", nums: [450, 125, 35, 80, 310], op: "suma" },
      ],
    },
    {
      id: "probi_conv", title: "Prob. Conversiones", icon: "🔄", type: "probi",
      problemas: [
        { texto: "Convierte 15 kilómetros a metros (1 km = 1000 m). ¿Cuántos metros son?", a: 15, b: 1000, op: "mult" },
        { texto: "¿Cuántos minutos hay en 24 horas? (1 hora = 60 minutos)", a: 24, b: 60, op: "mult" },
        { texto: "Convierte 35 kilogramos a gramos (1 kg = 1000 g). ¿Cuántos gramos son?", a: 35, b: 1000, op: "mult" },
        { texto: "¿Cuántos centímetros hay en 48 metros? (1 m = 100 cm)", a: 48, b: 100, op: "mult" },
        { texto: "¿Cuántos segundos hay en 5 horas? (1 hora = 3600 segundos)", a: 5, b: 3600, op: "mult" },
      ],
    },
    {
      id: "probfrac_pizza", title: "Pizza y Pasteles", icon: "🍕", type: "probfrac",
      problemas: [
        { texto: "De una pizza de 8 porciones, Ana comió 3. ¿Qué fracción comió?", respuesta: { n:3, d:8 } },
        { texto: "Un pastel se corta en 6 partes iguales. Se comen 4 partes. ¿Qué fracción queda?", respuesta: { n:1, d:3 } },
        { texto: "Una pizza tiene 5 porciones. Luis come [2/5] y María come [1/5]. ¿Cuánto comieron en total?", respuesta: { n:3, d:5 } },
        { texto: "Una torta tiene 4 rebanadas. Si se comen 3, ¿qué fracción sobra?", respuesta: { n:1, d:4 } },
        { texto: "De una pizza con 10 porciones, se vendieron 7. ¿Qué fracción quedó?", respuesta: { n:3, d:10 } },
        { texto: "Pedro tiene [3/4] de una pizza y se come [1/4]. ¿Qué fracción le queda?", respuesta: { n:1, d:2 } },
        { texto: "Un pastel de 12 partes: se comieron 9. ¿Qué fracción sobra?", respuesta: { n:1, d:4 } },
        { texto: "Una barra de chocolate tiene 6 cuadros. Ana come 2. ¿Qué fracción comió?", respuesta: { n:1, d:3 } },
        { texto: "Una manzana se divide en 4 trozos. Si comes 3, ¿qué fracción comiste?", respuesta: { n:3, d:4 } },
        { texto: "Una pizza tiene 8 porciones: [3/8] son de pepperoni y [2/8] de vegetales. ¿Qué fracción tienen entre los dos ingredientes?", respuesta: { n:5, d:8 } },
        { texto: "Un pastel se reparte en partes iguales entre 5 niños. ¿Qué fracción le toca a cada uno?", respuesta: { n:1, d:5 } },
        { texto: "De una naranja de 8 gajos, comes 5. ¿Qué fracción comiste?", respuesta: { n:5, d:8 } },
        { texto: "Una pizza se divide en 6 partes. Se comen [3/6]. ¿Qué fracción queda?", respuesta: { n:1, d:2 } },
        { texto: "De un pastel dividido en 5 partes, se comen [3/5]. ¿Qué fracción queda?", respuesta: { n:2, d:5 } },
        { texto: "Una pizza de 10 porciones: 4 son de queso y el resto de jamón. ¿Qué fracción es de jamón?", respuesta: { n:3, d:5 } },
      ],
    },
    {
      id: "probfrac_escuela", title: "Escuela y Libros", icon: "📚", type: "probfrac",
      problemas: [
        { texto: "En una clase de 20 estudiantes, 5 son zurdos. ¿Qué fracción son zurdos?", respuesta: { n:1, d:4 } },
        { texto: "Un libro tiene 30 páginas. Leíste 10. ¿Qué fracción del libro leíste?", respuesta: { n:1, d:3 } },
        { texto: "De 12 lápices, 4 están rotos. ¿Qué fracción está en buen estado?", respuesta: { n:2, d:3 } },
        { texto: "En un salón de 25 estudiantes, 15 son niñas. ¿Qué fracción son niños?", respuesta: { n:2, d:5 } },
        { texto: "Un cuaderno tiene 40 hojas. Ya usaste [3/4] de ellas. ¿Qué fracción queda?", respuesta: { n:1, d:4 } },
        { texto: "De 18 preguntas de un examen, respondiste bien 12. ¿Qué fracción acertaste?", respuesta: { n:2, d:3 } },
        { texto: "Un estuche tiene 6 colores. Perdiste 2. ¿Qué fracción te queda?", respuesta: { n:2, d:3 } },
        { texto: "Ana leyó [2/5] de su libro el lunes y [1/5] el martes. ¿Qué fracción leyó en total?", respuesta: { n:3, d:5 } },
        { texto: "En una biblioteca de 50 libros, [2/5] son de ciencias. ¿Qué fracción no es de ciencias?", respuesta: { n:3, d:5 } },
        { texto: "Un examen tiene 20 preguntas. Respondiste 15 correctamente. ¿Qué fracción fallaste?", respuesta: { n:1, d:4 } },
        { texto: "De 24 bolígrafos, [1/4] son rojos y [1/4] son azules. ¿Qué fracción es de otro color?", respuesta: { n:1, d:2 } },
        { texto: "Luis necesita leer 30 páginas. Ya leyó 20. ¿Qué fracción le falta?", respuesta: { n:1, d:3 } },
        { texto: "Un libro tiene 5 capítulos iguales. Ya terminaste 3. ¿Qué fracción completaste?", respuesta: { n:3, d:5 } },
        { texto: "De 16 estudiantes que presentaron examen, aprobaron 12. ¿Qué fracción aprobó?", respuesta: { n:3, d:4 } },
        { texto: "En un grupo de 15 niños, [2/5] practican natación. ¿Qué fracción no practica natación?", respuesta: { n:3, d:5 } },
      ],
    },
    {
      id: "probfrac_jardin", title: "Jardín y Naturaleza", icon: "🌿", type: "probfrac",
      problemas: [
        { texto: "Un jardín tiene 12 flores: 4 son rosas, 3 tulipanes y 5 margaritas. ¿Qué fracción son margaritas?", respuesta: { n:5, d:12 } },
        { texto: "De un saco de 20 semillas, plantaste 15. ¿Qué fracción queda por plantar?", respuesta: { n:1, d:4 } },
        { texto: "Una canasta tiene 8 frutas: 3 manzanas, 2 peras y 3 naranjas. ¿Qué fracción son peras?", respuesta: { n:1, d:4 } },
        { texto: "De 10 plantas, [3/5] florecieron esta semana. ¿Qué fracción no ha florecido?", respuesta: { n:2, d:5 } },
        { texto: "Un árbol tiene 16 ramas. Se podaron 4. ¿Qué fracción queda?", respuesta: { n:3, d:4 } },
        { texto: "En un campo de 20 árboles, 5 son frutales. ¿Qué fracción son frutales?", respuesta: { n:1, d:4 } },
        { texto: "Una flor tiene 6 pétalos. Si se caen 2, ¿qué fracción queda?", respuesta: { n:2, d:3 } },
        { texto: "De 15 semillas sembradas, germinaron 10. ¿Qué fracción germinó?", respuesta: { n:2, d:3 } },
        { texto: "Un huerto tiene 9 surcos: [2/3] son de verduras y el resto de frutas. ¿Qué fracción son de frutas?", respuesta: { n:1, d:3 } },
        { texto: "Un árbol produjo 24 frutas. Se recogieron [3/4]. ¿Qué fracción queda en el árbol?", respuesta: { n:1, d:4 } },
        { texto: "De 18 hojas en una rama, cayeron 6. ¿Qué fracción de hojas cayó?", respuesta: { n:1, d:3 } },
        { texto: "Un jardín se divide en 5 partes iguales. Se siembran flores en 2 partes. ¿Qué fracción tiene flores?", respuesta: { n:2, d:5 } },
        { texto: "En una pecera de 10 peces, [2/5] son naranjas. ¿Qué fracción no es naranja?", respuesta: { n:3, d:5 } },
        { texto: "De 20 mariposas en un jardín, 8 son amarillas. ¿Qué fracción no es amarilla?", respuesta: { n:3, d:5 } },
        { texto: "Una maceta tiene 4 plantas. Si muere [1/4] de ellas, ¿qué fracción queda viva?", respuesta: { n:3, d:4 } },
      ],
    },
    {
      id: "probfrac_tiempo", title: "Tiempo y Caminos", icon: "⏰", type: "probfrac",
      problemas: [
        { texto: "Una carrera es de 6 km. Si recorriste 4 km, ¿qué fracción te falta?", respuesta: { n:1, d:3 } },
        { texto: "El día tiene 24 horas. Si duermes 8 horas, ¿qué fracción del día duermes?", respuesta: { n:1, d:3 } },
        { texto: "Un viaje tarda 4 horas. El bus ya lleva [3/4] del camino. ¿Qué fracción le falta?", respuesta: { n:1, d:4 } },
        { texto: "Una hora tiene 60 minutos. Si estudias 20 minutos, ¿qué fracción de la hora estudias?", respuesta: { n:1, d:3 } },
        { texto: "Un camino de 15 bloques: Pedro caminó 9. ¿Qué fracción del camino recorrió?", respuesta: { n:3, d:5 } },
        { texto: "Una tarea tiene 5 partes iguales. Ya hiciste [2/5]. ¿Qué fracción te falta?", respuesta: { n:3, d:5 } },
        { texto: "Un paseo es de 10 km. María recorrió 6 km. ¿Qué fracción del paseo completó?", respuesta: { n:3, d:5 } },
        { texto: "De 8 horas de trabajo, ya pasaron 6. ¿Qué fracción falta?", respuesta: { n:1, d:4 } },
        { texto: "Una piscina tiene 4 carriles: [1/4] está reservado para principiantes. ¿Qué fracción queda libre?", respuesta: { n:3, d:4 } },
        { texto: "Un viaje de 20 km: ya se recorrieron [3/4] del trayecto. ¿Qué fracción falta?", respuesta: { n:1, d:4 } },
        { texto: "Un trayecto de 30 minutos: ya pasaron 20 minutos. ¿Qué fracción del trayecto falta?", respuesta: { n:1, d:3 } },
        { texto: "Una semana tiene 7 días. Si trabajas 5 días, ¿qué fracción descansas?", respuesta: { n:2, d:7 } },
        { texto: "De un camino de 12 tramos, se recorrieron 8. ¿Qué fracción queda?", respuesta: { n:1, d:3 } },
        { texto: "Luis tiene [2/3] de su tarea hecha. ¿Qué fracción le falta?", respuesta: { n:1, d:3 } },
        { texto: "Un reloj marca 12 horas. Si son las 9, ¿qué fracción del reloj falta para llegar a las 12?", respuesta: { n:1, d:4 } },
      ],
    },
  ];
