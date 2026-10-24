/* ديوراما: فقر الدم المنجلي — الدرسان ١-٥ الطفرات الجينية و٢-٥ الجينات والبروتينات والطراز المظهري (كتاب الطالب ص ٣٥ و٧٢) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const L = s => `<span class="ltr">${s}</span>`;
  const clamp = (t, a = 0, b = 1) => Math.min(b, Math.max(a, t));
  const prog = (v, i, n, lam = 0.8) => clamp(v * (1 + lam) - lam * i / Math.max(1, n - 1));
  const TM = (c, op) => { const m = new THREE.MeshStandardMaterial({ color: c, transparent: true, opacity: op, roughness: 0.35, depthWrite: false, side: THREE.DoubleSide }); m.color.convertSRGBToLinear(); return m; };
  let S;

  // ── إحداثيَّات المشهد ─────────────────────────────────────────────
  const HBc = V(-8.3, 1.75, -2.3);                                    // نموذج الهيموجلوبين المكبَّر
  const SUB = [                                                       // السلاسل الأربع: [الإزاحة، بيتا؟]
    [V(-0.62, 0.55, 0.12), false], [V(0.62, -0.5, -0.12), false],
    [V(0.62, 0.55, -0.08), true], [V(-0.62, -0.5, 0.08), true]];
  const CAMDIR = V(0.5, 0.7071, 0.5).normalize();
  const haemPos = k => HBc.clone().add(SUB[k][0].clone().multiplyScalar(1.45)).addScaledVector(CAMDIR, 0.5);

  const CHY = 0.55, CHZ = 3.3, CHZ2 = 4.75;                           // الكروموسوم 11 (ونظيره في الخطوة الأخيرة)
  const CX = 2.6, XHBB = -9.95 + CX, XTYR = -7.6 + CX;

  const XB0 = -1.2, DX = 0.38, ZD = 2.3, YB = 0.32, YT = 1.0;         // شريط القالب: 8 ثلاثيات = 24 قاعدة
  const xb = i => XB0 + i * DX;
  const xt = j => xb(3 * j + 1);                                      // مركز الثلاثية j
  const ZA = 4.1, YA = 0.5;                                           // سلسلة الأحماض الأمينية
  const AA = ['Val', 'His', 'Leu', 'Thr', 'Pro', 'Glu', 'Glu', 'Lys'];

  const RC = V(-1.7, 1.15, -2.45), TILT = 0.55;                      // خليَّة الدم الحمراء المكبَّرة (مائلة لتُرى وجهاً)
  const QR = new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), TILT);
  const RD = 2.4, HD = 0.75;                                          // القرص: نصف القطر ونصف السمك
  const AS = 1.25, RCV = 2.6, WS = 0.72, HS = 0.5, ZOFF = 0.9;        // المنجل: نصف الزاوية، نصف قطر القوس، العرض، السمك
  // نقطة كرويَّة الوسيط v (كرة الوحدة) ← موضع محلِّي على القرص (s=0) أو المنجل (s=1)
  function morph(x, y, z, s) {
    const r2 = Math.min(1, x * x + z * z);
    const dx = RD * x, dy = HD * y * (0.35 + 1.3 * r2), dz = RD * z;
    if (s <= 0) return [dx, dy, dz];
    const a = x * AS, sa = Math.sin(a), ca = Math.cos(a);
    const sx = RCV * sa - sa * WS * z, sy = HS * y, sz = RCV * (1 - ca) - ZOFF + ca * WS * z;
    return [dx + (sx - dx) * s, dy + (sy - dy) * s, dz + (sz - dz) * s];
  }
  const toWorld = (p, q, c, sc = 1) => V(p[0] * sc, p[1] * sc, p[2] * sc).applyQuaternion(q).add(c);

  // جزيئات الهيموجلوبين داخل الخليَّة: موضع متفرِّق (مذاب) وموضع في ليف
  const NM = 15, R1 = n => Array.from({ length: n }, (_, i) => ((i * 7919 + 13) % 97) / 97 - 0.5);
  const JA = R1(40);
  const SCAT = Array.from({ length: NM }, (_, i) => {
    const a = i * 2.39996 + 0.3, r = 0.2 + 0.55 * Math.sqrt((i + 0.5) / NM);
    return [r * Math.cos(a), 0.18 * JA[i], r * Math.sin(a)];
  });
  const FIB = Array.from({ length: NM }, (_, i) => {
    const f = i % 3, k = Math.floor(i / 3);                           // 3 ألياف × 5 جزيئات
    return [-0.72 + k * 0.36, 0, (f - 1) * 0.3];
  });
  const molParam = (i, fib) => SCAT[i].map((v, d) => v + (FIB[i][d] - v) * sm(prog(fib, i % 5, 5, 0.6)));
  const molPos = (i, s) => { const p = molParam(i, s.fib); return toWorld(morph(p[0], p[1], p[2], s.sick), QR, RC); };

  // الشعيرة الدمويَّة وخلايا الدم الصغيرة فيها
  const XC0 = 3.0, XC1 = 10.4, YC = 1.05, ZC = -2.5, RCAP = 0.82;
  const QC = new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), Math.PI / 2);
  function capCells(s) {                                              // [x، مقياس، منجليَّة؟، ميل]
    const c = s.cap, k = s.clr;
    const e = t => sm(clamp(t));
    return [
      [4.2 + 4.3 * e(c / 0.6), 1, false, 0],
      [5.7 + 4.0 * e(c / 0.6), 1, false, 0],
      [2.7 + 3.7 * e((c - 0.05) / 0.6), e((c - 0.02) / 0.12) * (1 - sm(k)), true, 0.38 * e((c - 0.5) / 0.3)],
      [2.7 + 2.3 * e((c - 0.3) / 0.6) + 1.6 * e(k), e((c - 0.28) / 0.12), false, 0],
      [2.7 + 1.2 * e((c - 0.55) / 0.45) + 1.4 * e(k), e((c - 0.53) / 0.12), false, 0]];
  }

  // ── المواد ────────────────────────────────────────────────────────
  const matA = M(0xE8B923), matB = M(0x2BA3A3), matHaem = M(0x8B1A1A, { roughness: 0.5 }), matFe = M(0xB0B4BA, { metalness: 0.5, roughness: 0.3 });
  const matO2 = M(0x8FD3F4, { roughness: 0.3 }), matVal = M(0xD9641E), matGlu = M(0xC2327A), matAA = M(COL.aa), matPep = M(0x9AA3B5);
  const matBack = M(COL.old), matUnk = M(0xBFC5CF, { roughness: 0.7 }), matBase = { A: M(COL.A), T: M(COL.T), C: M(COL.C) };
  const matSep = M(0x2B2F36), matLink = TM(0x8A93A6, 0.45);
  const matHbA = M(0x6CC07A), matHbS = M(0x6A1B9A), matFibre = M(0x6A1B9A, { roughness: 0.4 });
  const matChr = M(0x8C7CC4, { roughness: 0.6 }), matTYR = M(0x5E6470), matAlN = M(0x6CC07A), matAlS = M(0x6A1B9A);
  const matRBC = TM(0xD23A3A, 0.42), matCellN = M(0xD64545, { roughness: 0.45 }), matCellS = M(0x9C2A55, { roughness: 0.45 });
  const matCap = TM(0xF0A8A8, 0.28), matCapRim = M(0xE58A8A, { roughness: 0.6 });
  const gSph = new THREE.SphereGeometry(1, 18, 14), gCyl = new THREE.CylinderGeometry(1, 1, 1, 24);

  // جسم خليَّة قابل للتشكُّل (كرة وحدة تُشوَّه في place)
  function cellGeom(seg) { const g = new THREE.SphereGeometry(1, seg, Math.round(seg * 0.62)); g.userData.base = g.attributes.position.array.slice(); return g; }
  function shapeCell(g, s, sc) {
    const b = g.userData.base, p = g.attributes.position.array;
    for (let i = 0; i < b.length; i += 3) { const q = morph(b[i], b[i + 1], b[i + 2], s); p[i] = q[0] * sc; p[i + 1] = q[1] * sc; p[i + 2] = q[2] * sc; }
    g.attributes.position.needsUpdate = true; g.computeVertexNormals();
  }
  let rbc, capMesh = [], lastSick = -1;

  function chromosome(ctx, z, band) {
    const y = CHY;
    ctx.tube(x => V(x, y, z), -10.4 + CX, -9.32 + CX, 0.4, matChr);
    ctx.tube(x => V(x, y, z), -9.0 + CX, -6.6 + CX, 0.4, matChr);
    ctx.rod(V(-9.36 + CX, y, z), V(-8.96 + CX, y, z), 0.24, matChr);
    [-10.4, -9.32, -9.0, -6.6].forEach(x => ctx.ball(V(x + CX, y, z), 0.4, matChr));
    ctx.rod(V(XHBB - 0.1, y, z), V(XHBB + 0.1, y, z), 0.43, band);
    ctx.rod(V(XTYR - 0.08, y, z), V(XTYR + 0.08, y, z), 0.43, matTYR);
  }

  window.DIORAMA = {
    id: 'sickle_cell', title: 'فقر الدم المنجلي',
    subtitle: 'الأحياء — الصف الثاني عشر — ١-٥ الطفرات الجينية • ٢-٥ الجينات والبروتينات والطراز المظهري',
    source: 'النص من كتاب الطالب: ١-٥ الطفرات الجينية (ص ٣٥) و٢-٥ الجينات والبروتينات والطراز المظهري (ص ٧٢) والشكل ٢-٩',
    legend: [['#E8B923', 'سلسلة ألفا (α)'], ['#2BA3A3', 'سلسلة بيتا (β)'], ['#8B1A1A', 'مجموعة هيم', 'dot'], ['#8FD3F4', 'أكسجين', 'dot'], null,
             ['#BFC5CF', 'قاعدة (لم يذكرها الكتاب)', 'tube'], ['#8E5BD9', 'C', 'tube'], ['#E4472E', 'T', 'tube'], ['#2FA866', 'A', 'tube'], null,
             ['#D9641E', L('Val') + ' فالين', 'dot'], ['#C2327A', L('Glu'), 'dot'], ['#4F7FE0', 'حمض أميني آخر', 'dot'], null,
             ['#6CC07A', 'هيموجلوبين طبيعي / الأليل الطبيعي', 'dot'], ['#6A1B9A', 'هيموجلوبين الخلايا المنجلية / أليل فقر الدم المنجلي', 'dot']],
    camera: { VH: 20.5, center: [-0.6, 1.0, 0.9] },
    base: { L: 23.4, W: 12.6, x: -0.2, z: 0.9 },
    BASE: { fo: 0, chr: 0, dna: 0, aa: 0, mut: 0, aa6: 0, o2: 1, fib: 0, sick: 0, cap: 0, clr: 0, het: 0 },
    noGeom: ['fo'],
    // 0 كامل، 1 الهيموجلوبين، 2 الكروموسوم، 3 الثلاثية السادسة، 4 الحمض الأميني السادس، 5 الخليَّة، 6 الشعيرة، 7 الكروموسومان
    focus(s) {
      const k = Math.round(s.fo || 0);
      if (k === 1) return HBc.clone();
      if (k === 2) return V(-8.6 + CX, CHY, CHZ);
      if (k === 3) return V(xt(5), 0.7, ZD + 0.8);
      if (k === 4) return V(xt(5), 0.6, (ZD + ZA) / 2);
      if (k === 5) return RC.clone();
      if (k === 6) return V(6.2, YC, ZC);
      if (k === 7) return V(-8.5 + CX, CHY, (CHZ + CHZ2) / 2);
      return V(-0.6, 1.0, 0.9);
    },
    STEPS: [
      { t: 'الهيموجلوبين في خلايا الدم الحمراء',
        p: 'الهيموجلوبين هو الصبغة الحمراء في خلايا الدم الحمراء، وهو يحمل الأكسجين في جميع أنحاء الجسم. وكما درست في الصف الحادي عشر، يتكوّن جزيء الهيموجلوبين من 4 سلاسل عديد ببتيد، تحتوي كل سلسلة على مجموعة هيم واحدة، تتضمّن الحديد في مركزها. تسمّى سلسلتان من عديد الببتيد سلسلتَي ألفا (α)، وتسمّى السلسلتان الأخريان سلسلتَي بيتا (β).',
        seq: [[{ '!fo': 1, zoom: 2.1 }, 1100], [{ fo: 1 }, 1600], [{ zoom: 1 }, 1000]],
        pills: [['سلسلة ألفا (α)', GLD, () => HBc.clone().add(SUB[0][0]).add(V(-0.4, 0.4, 0)), -120, -70], ['سلسلة بيتا (β)', TEAL, () => HBc.clone().add(SUB[2][0]).add(V(0.4, 0.4, 0)), 90, -80],
                ['مجموعة هيم (الحديد في مركزها)', RED, () => haemPos(1), 40, 120], ['أكسجين', BLU, () => haemPos(3).addScaledVector(CAMDIR, 0.3).add(V(-0.25, 0.1, 0.25)), -150, 50],
                ['خليَّة دم حمراء', RED, () => toWorld(morph(0.95, 0.2, 0.1, 0), QR, RC), 120, 30]] },
      { t: 'الجين HBB على الكروموسوم 11',
        p: `يشفر الجين ${L('HBB')} لتتابع الأحماض الأمينية في عديد الببتيد بيتا(β)- جلوبين في الهيموجلوبين، ويوجد على الذراع القصيرة للكروموسوم 11 (الشكل ٢-٩).`,
        seq: [[{ '!fo': 2, zoom: 2.0 }, 1000], [{ chr: 1 }, 1400], [{ zoom: 1.35 }, 900]],
        pills: [['الكروموسوم 11', PUR, () => V(-7.4 + CX, CHY + 0.4, CHZ), 60, -85], [`الجين ${L('HBB')} على الذراع القصيرة`, GRN, () => V(XHBB, CHY + 0.45, CHZ), -40, -110],
                [L('TYR'), GRY, () => V(XTYR, CHY - 0.3, CHZ + 0.3), 50, 70]] },
      { t: 'التتابع الطبيعي: من الثلاثيات إلى الأحماض الأمينية',
        p: `والجين الذي يشفر لتتابع الأحماض الأمينية في سلسلتَي بيتا (β) ليس هو نفسه في جميع الناس. تبدأ سلسلتا بيتا (β) لدى معظم الناس بتتابع الأحماض الأمينية الآتي (من اليسار إلى اليمين): ${L('Val–His–Leu–Thr–Pro–Glu–Glu–Lys–')}`,
        n: 'رُسمت قواعد الثلاثية CTT وحدها بألوانها؛ لم يذكر الكتاب بقيَّة القواعد فرُسمت رماديَّة. الخطوط الداكنة تفصل الثلاثيات كما في الكتاب.',
        seq: [[{ '!fo': 0, zoom: 1.45 }, 900], [{ dna: 1 }, 2200], [{ aa: 1 }, 2200]],
        pills: [[`شريط القالب في الجين ${L('HBB')}`, GRY, () => V(xb(2), YT, ZD), -60, -95], [`الثلاثية ${L('CTT')}`, PUR, () => V(xt(5), YT + 0.1, ZD), 40, -110],
                [L('Val–His–Leu–Thr–Pro–Glu–Glu–Lys–'), BLU, () => V(xt(3), YA, ZA), 60, 110], [L('Glu'), PNK, () => V(xt(5), YA + 0.25, ZA), 120, 70]] },
      { t: 'طفرة استبدال: T تحلُّ محلَّها A',
        p: `الاستبدال ${L('Substitution')}: استبدال قاعدة بأخرى (تحل قاعدة محل قاعدة أخرى في ${L('DNA')}). الطفرة المسؤولة هي طفرة استبدال حيث تمّ استبدال القاعدة ${L('T')} الثانية في الثلاثية ${L('CTT')} بـ ${L('A')}.`,
        seq: [[{ '!fo': 3, zoom: 2.8 }, 1000], [{ mut: 1 }, 2400], [{ zoom: 1.8 }, 800]],
        pills: [[`القاعدة ${L('T')} الثانية تُستبدل بـ ${L('A')}`, RED, () => V(xb(16), YT + 0.15, ZD), -150, -95], [`الثلاثية تصبح ${L('CAT')}`, GRN, () => V(xb(17), 0.65, ZD), 140, 70]] },
      { t: 'يتغيَّر حمض أميني واحد: Glu يصبح Val',
        p: `لكن، يُستبدل تتابع القواعد ${L('CTT')} ب ${L('CAT')} الأمر الذي يحدث تغيرًا طفيفًا في تتابع الأحماض الأمينية هذه ليصبح التتابع كالآتي: ${L('Val–His–Leu–Thr–Pro–Val–Glu–Lys–')} وفي هذه الحالة ينتج من الفرق البسيط في تتابع الأحماض الأمينية فقر الدم المنجلي.`,
        n: 'ألوان جزيئات الهيموجلوبين داخل الخليَّة تغيَّرت لأنَّها صارت تحمل سلسلتَي بيتا (β) غير الطبيعيَّتين.',
        seq: [[{ '!fo': 4, zoom: 2.3 }, 900], [{ aa6: 1 }, 2200], [{ zoom: 1 }, 1000]],
        pills: [[`${L('Val')} بدل ${L('Glu')}`, ORG, () => V(xt(5), YA + 0.25, ZA), 170, -30], [L('Val–His–Leu–Thr–Pro–Val–Glu–Lys–'), BLU, () => V(xt(3), YA, ZA), 60, 110],
                ['سلسلتا بيتا (β) غير الطبيعيَّتين', TEAL, () => HBc.clone().add(SUB[2][0]).add(V(0.5, 0.3, 0.2)), 80, -85]] },
      { t: 'مع الأكسجين: اختلاف بسيط فقط',
        p: 'يؤدي هذا الاختلاف البسيط في تتابع الأحماض الأمينية إلى اختلاف بسيط في جزيء الهيموجلوبين عندما يكون مرتبطًا مع الأكسجين.',
        seq: [[{ '!fo': 5, zoom: 2.0 }, 1100], [{ fo: 5 }, 1400]],
        pills: [['جزيئات هيموجلوبين مرتبطة بالأكسجين (متفرِّقة)', PUR, () => molPos(4, S), 150, -95], ['أكسجين', BLU, () => molPos(9, S).add(V(0.17, 0.17, 0)), -170, 70],
                ['خليَّة دم حمراء', RED, () => toWorld(morph(-0.85, 0.4, 0.3, 0), QR, RC), -110, -80]] },
      { t: 'دون أكسجين: تلتصق الجزيئات مكوِّنةً أليافاً طويلة',
        p: 'لكن عندما لا يكون مرتبطًا مع الأكسجين، فإن عديد الببتيد بيتا(β)- جلوبين غير الطبيعي يجعل جزيء الهيموجلوبين أقل ذوبانًا، فتميل الجزيئات إلى الالتصاق بعضها ببعض مكوّنةً أليافًا طويلةً داخل خلايا الدم الحمراء،',
        seq: [[{ '!fo': 5, zoom: 2.0 }, 600], [{ o2: 0 }, 1300], [{ fib: 1 }, 3000]],
        pills: [['يغادر الأكسجين', BLU, () => toWorld(morph(0.85, 0.6, -0.2, 0), QR, RC), 150, -80], ['ألياف طويلة من جزيئات ملتصقة', PUR, () => molPos(13, S), 160, 75]] },
      { t: 'تتغيَّر الخليَّة إلى شكل منجلي',
        p: 'ويتغير شكل خلايا الدم الحمراء إلى شكل منجلي. وعندما يحدث هذا الالتصاق، تصبح الخلايا ذات الشكل المنجلي غير قادرة على نقل الأكسجين.',
        seq: [[{ '!fo': 5, zoom: 1.8 }, 700], [{ sick: 1 }, 3200], [{ zoom: 1.3 }, 900]],
        pills: [['خليَّة دم حمراء منجليَّة', RED, () => toWorld(morph(0.95, 0.3, 0, 1), QR, RC), 130, -85], ['الألياف', PUR, () => molPos(7, S), -150, 80]] },
      { t: 'تعلق الخلايا المنجليَّة في الشعيرات الدمويَّة',
        p: 'كما تعلق بالشعيرات الدموية الصغيرة، فتمنع مرور أي خلايا سليمة. الشخص المصاب بهذا النوع غير الطبيعي من بيتا (β)- جلوبين قد يعاني فقر الدم بشدة (نقص الأكسجين الذي ينقل إلى الخلايا)، ويمكن أن يتسبب المرض بالوفاة.',
        seq: [[{ '!fo': 6, zoom: 1.9 }, 1000], [{ cap: 1 }, 4200], [{ zoom: 1.4 }, 900]],
        pills: [['شعيرة دمويَّة صغيرة', RED, () => V(9.4, YC + RCAP, ZC), 40, -95], ['خليَّة منجليَّة عالقة', PUR, () => V(6.4, YC + 0.3, ZC), -20, -120],
                ['خلايا سليمة لا تستطيع المرور', RED, () => V(4.4, YC - 0.3, ZC + 0.3), -140, 85]] },
      { t: 'نسخة واحدة من الأليل الطبيعي ونسخة من أليل فقر الدم المنجلي',
        p: `والشخص الذي لديه نسخة واحدة من الأليل ${L('HBB')} الطبيعي ونسخة واحدة من أليل فقر الدم المنجلي يتكوّن لديه بعض الهيموجلوبين الطبيعي وبعض هيموجلوبين الخلايا المنجلية. لا تظهر على المصابين أية أعراض بشكل عام، إلا إذا وجدوا في ظروف تتطلب فيها العضلات الكثير من الأكسجين- على سبيل المثال ممارسة تمارين رياضية مجهدة.`,
        n: 'رُسم نظير الكروموسوم 11 الثاني ليُظهر الأليلين؛ الخليَّة المكبَّرة صارت لهذا الشخص.',
        seq: [[{ clr: 1, sick: 0, fib: 0, zoom: 1 }, 2400], [{ '!fo': 7, zoom: 1.9 }, 900], [{ het: 1 }, 1600], [{ zoom: 1.2 }, 900], [{ o2: 1 }, 1000]],
        pills: [['الأليل الطبيعي', GRN, () => V(XHBB, CHY + 0.45, CHZ2), -60, 95], ['أليل فقر الدم المنجلي', PUR, () => V(XHBB, CHY + 0.45, CHZ), -40, -105],
                ['بعض الهيموجلوبين الطبيعي', GRN, () => molPos(0, S), -210, -30], ['وبعض هيموجلوبين الخلايا المنجلية', PUR, () => molPos(5, S), 190, 80]] },
    ],
    setup(ctx) {
      // نموذج الهيموجلوبين المكبَّر: 4 سلاسل (كتل كرويَّة) + مجموعة هيم وحديد لكل سلسلة
      const g = new THREE.Group(); ctx.scene.add(g);
      SUB.forEach(([o, beta], k) => {
        const c = HBc.clone().add(o), m = beta ? matB : matA;
        [[0, 0, 0, 0.62], [0.28, 0.22, 0.12, 0.44], [-0.24, -0.2, -0.1, 0.46]].forEach(([a, b, d, r]) => ctx.ball(c.clone().add(V(a * Math.sign(o.x), b * Math.sign(o.y), d)), r, m, g));
        const hp = haemPos(k), disc = new THREE.Mesh(gCyl, matHaem); disc.scale.set(0.26, 0.07, 0.26); disc.position.copy(hp);
        disc.quaternion.setFromUnitVectors(V(0, 1, 0), CAMDIR); disc.castShadow = true; g.add(disc);
        ctx.ball(hp.clone().addScaledVector(CAMDIR, 0.05), 0.08, matFe, g);
      });
      // خليَّة الدم الحمراء المكبَّرة (تتشكَّل في place)
      rbc = new THREE.Mesh(cellGeom(64), matRBC); rbc.position.copy(RC); rbc.quaternion.copy(QR); rbc.renderOrder = 3; ctx.scene.add(rbc);
      // الشعيرة الدمويَّة
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(RCAP, RCAP, XC1 - XC0, 32, 1, true), matCap);
      cap.rotation.z = Math.PI / 2; cap.position.set((XC0 + XC1) / 2, YC, ZC); cap.renderOrder = 3; ctx.scene.add(cap);
      [XC0, XC1].forEach(x => { const r = new THREE.Mesh(new THREE.TorusGeometry(RCAP, 0.06, 8, 32), matCapRim); r.rotation.y = Math.PI / 2; r.position.set(x, YC, ZC); ctx.scene.add(r); });
      for (let i = 0; i < 5; i++) {
        const m = new THREE.Mesh(cellGeom(32), i === 2 ? matCellS : matCellN); m.castShadow = true; ctx.scene.add(m);
        shapeCell(m.geometry, i === 2 ? 1 : 0, i === 2 ? 0.4 : 0.27); capMesh.push(m);
      }
    },
    rebuild(s, ctx) {
      S = s;
      // الكروموسوم 11: شريط HBB أخضر (أليل طبيعي) ثم بنفسجي بعد الطفرة؛ ونظيره الطبيعي في الخطوة الأخيرة
      chromosome(ctx, CHZ, s.mut > 0.5 ? matAlS : matAlN);
      if (s.chr > 0.01 && s.chr < 0.99) ctx.ball(V(XHBB, CHY, CHZ), 0.45 + 0.25 * Math.sin(Math.PI * s.chr), TM(0x6CC07A, 0.35));
      if (s.het > 0.02) {
        const k = sm(s.het), z = CHZ + (CHZ2 - CHZ) * k;
        ctx.tube(x => V(x, CHY, z), -10.4 + CX, -10.4 + CX + 3.8 * k, 0.4 * k + 0.01, matChr);
        if (k > 0.95) { chromosome(ctx, CHZ2, matAlN); }
      }
      // شريط القالب: 24 قاعدة؛ الثلاثية السادسة (القواعد 15–17) C T T ← C A T
      if (s.dna > 0.01) {
        const n = 24, xEnd = xb(0) - 0.2 + (xb(23) - xb(0) + 0.4) * sm(s.dna);
        ctx.tube(x => V(x, YB, ZD), xb(0) - 0.2, xEnd, 0.11, matBack);
        for (let i = 0; i < n; i++) {
          const g = sm(prog(s.dna, i, n, 1.2)); if (g < 0.02) continue;
          let mat = matUnk, h = 1;
          if (i === 15) mat = matBase.C;
          if (i === 16 || i === 17) mat = matBase.T;
          if (i === 16) {
            const out = sm(clamp(s.mut * 2)), inn = sm(clamp(s.mut * 2 - 1));
            if (s.mut > 0 && s.mut < 1) ctx.ball(V(xb(16), YT + 0.35, ZD), 0.22 * Math.sin(Math.PI * s.mut), TM(0xFFD24D, 0.6));
            if (inn > 0) { mat = matBase.A; h = inn; } else h = 1 - out;
          }
          if (h > 0.02) ctx.rod(V(xb(i), YB, ZD), V(xb(i), YB + (YT - YB) * g * h, ZD), 0.11, mat);
        }
        for (let j = 1; j < 8; j++) { const x = xb(3 * j) - DX / 2; if (sm(s.dna) > j / 8) ctx.rod(V(x, YB - 0.15, ZD), V(x, YT + 0.2, ZD), 0.028, matSep); }
      }
      // سلسلة الأحماض الأمينية: Val (برتقالي)، Glu (أرجواني)، غيرهما (أزرق)
      if (s.aa > 0.01) {
        for (let j = 0; j < 8; j++) {
          const g = sm(prog(s.aa, j, 8, 1.0)); if (g < 0.02) continue;
          const p = V(xt(j), YA, ZA);
          let mat = AA[j] === 'Val' ? matVal : AA[j] === 'Glu' ? matGlu : matAA;
          let r = 0.28 * g;
          if (j === 5 && s.aa6 > 0) { const a = s.aa6; r *= 1 + 0.35 * Math.sin(Math.PI * a); if (a > 0.5) mat = matVal; }
          ctx.ball(p, r, mat);
          if (j > 0 && g > 0.5) ctx.rod(V(xt(j - 1), YA, ZA), p, 0.07, matPep);
          ctx.rod(V(xt(j), YB, ZD + 0.12), V(xt(j), YA, ZA - 0.3), 0.02 * g, matLink);
        }
      }
      // سلسلتا بيتا: علامة الحمض الأميني المتغيِّر بعد الطفرة
      if (s.aa6 > 0.5) SUB.forEach(([o, beta]) => { if (beta) ctx.ball(HBc.clone().add(o).add(V(0.35 * Math.sign(o.x), 0.42 * Math.sign(o.y), 0.35)), 0.13, matVal); });
      // الأكسجين على مجموعات الهيم في النموذج المكبَّر
      if (s.o2 > 0.02) for (let k = 0; k < 4; k++) {
        const hp = haemPos(k).addScaledVector(CAMDIR, 0.25 + 0.6 * (1 - s.o2)), d = V(0.13, 0, -0.13);
        ctx.ball(hp.clone().add(d), 0.1 * s.o2, matO2); ctx.ball(hp.clone().sub(d), 0.1 * s.o2, matO2);
      }
      // جزيئات الهيموجلوبين داخل الخليَّة
      const mut = s.aa6 > 0.5;
      for (let i = 0; i < NM; i++) {
        const p = molPos(i, s), sickHb = mut && !(s.het > 0.5 && i % 2 === 0);
        const mat = sickHb ? matHbS : matHbA;
        [[0.09, 0.08, 0], [-0.09, 0.08, 0], [0.09, -0.08, 0.02], [-0.09, -0.08, -0.02]].forEach(([a, b, c]) => ctx.ball(p.clone().add(V(a, b, c)), 0.1, mat));
        if (s.o2 > 0.02) ctx.ball(p.clone().add(V(0.15, 0.17, 0.08).multiplyScalar(1 + 2.5 * (1 - s.o2))), 0.07 * s.o2, matO2);
      }
      if (s.fib > 0.6) for (let f = 0; f < 3; f++) {
        const pts = []; for (let k = 0; k < 5; k++) pts.push(molPos(k * 3 + f, s));
        ctx.tubePts(pts, 0.05 * sm((s.fib - 0.6) / 0.4), matFibre);
      }
    },
    place(s) {
      if (rbc && Math.abs(s.sick - lastSick) > 1e-4) { shapeCell(rbc.geometry, s.sick, 1); lastSick = s.sick; }
      capCells(s).forEach(([x, sc, sk, tilt], i) => {
        const m = capMesh[i]; m.visible = sc > 0.02; m.position.set(x, YC, ZC);
        m.quaternion.copy(QC); if (tilt) m.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), tilt));
        m.scale.setScalar(Math.max(0.001, sc));
      });
    },
  };
})();
