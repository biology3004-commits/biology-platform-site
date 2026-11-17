/* ديوراما: الترجمة (بناء البروتين — المرحلة الثانية) — الدرس ١-٤ (كتاب الطالب ص ٣١–٣٣) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const Y0 = 1.9, STEP = 0.5, GAP = 0.22;                               // ارتفاع mRNA، تباعد النيوكليوتيدات، فجوة بين الكودونات
  // mRNA: قائد قصير + كودون البدء AUG + ... + كودون إيقاف UAA + ذيل قصير
  const LEAD = 'GC', CODONS = ['AUG', 'AAA', 'GCU', 'UCA', 'GGC', 'CUG', 'UAA'], TAIL = 'CA';
  const AA = ['Met', 'Lys', 'Ala', 'Ser', 'Gly', 'Leu'];                   // الأحماض الأمينيَّة بالترتيب (الكودون الأخير إيقاف)
  const AA_AR = ['ميثيونين', 'لايسين', 'ألانين', 'سيرين', 'جلايسين', 'ليوسين'];
  const ANTI = c => c.split('').map(b => ({ A: 'U', U: 'A', G: 'C', C: 'G' })[b]).join('');
  const XL = -8.6;
  // مواضع النيوكليوتيدات
  const seq = []; let x = XL;
  LEAD.split('').forEach(b => { seq.push({ b, x, codon: -1 }); x += STEP; });
  x += GAP;
  CODONS.forEach((c, ci) => { c.split('').forEach(b => { seq.push({ b, x, codon: ci }); x += STEP; }); x += GAP; });
  TAIL.split('').forEach(b => { seq.push({ b, x, codon: -2 }); x += STEP; });
  const XR = x - STEP;
  const codonX = ci => { const n = seq.filter(s => s.codon === ci); return (n[0].x + n[2].x) / 2; };
  const matRNA = M(COL.mrna, { roughness: 0.4 }), matT = M(0xC2185B, { roughness: 0.45 }), matAA = M(COL.aa), matBond = M(0x1F2937);
  const matB = { A: M(COL.A), U: M(COL.U), G: M(COL.G), C: M(COL.C) };
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  let S, large, small, ctxRef;
  const NT = 6;                                                        // عدد جزيئات tRNA

  // موضع tRNA رقم j: يدخل من الأعلى اليمين (+x، +y) إلى موقعه فوق الكودون j، ويغادر إلى الأعلى اليسار
  const seat = j => V(codonX(j), Y0 + 0.35, 0);
  function tPos(j) {
    const e = S['e' + j], xo = S['x' + j];
    const s = seat(j);
    if (xo > 0) return s.clone().add(V(-1.6 * xo, 2.2 * xo, -1.2 * xo));
    if (e < 1) return s.clone().lerp(V(s.x + 3.2, s.y + 3.6, 2.2), 1 - sm(e));
    return s;
  }
  const tVisible = j => S['e' + j] > 0.01 && S['x' + j] < 0.99;
  const H_T = 2.2;                                                     // طول ساق tRNA
  const topOf = j => tPos(j).add(V(0, H_T, 0));                       // موقع ارتباط الحمض الأميني
  // حامل السلسلة: آخر tRNA تكوَّنت الرابطة بين حمضه والذي قبله (b_{j-1} = 1)
  function holder() { let h = 0; for (let j = 1; j < NT; j++) if (S['b' + (j - 1)] >= 1) h = j; return h; }
  // مواضع الأحماض الأمينيَّة
  function aaPositions() {
    const h = holder(), pos = [];
    for (let j = 0; j < NT; j++) {
      if (S['e' + j] <= 0.01 && !(j <= h)) { pos.push(null); continue; }
      if (j > h + 1) { pos.push(tVisible(j) ? topOf(j) : null); continue; }
      if (j === h + 1) {                                                // الحمض الذي تتكوَّن الرابطة معه الآن
        pos.push(tVisible(j) ? topOf(j) : null); continue;
      }
      // j <= h: جزء من السلسلة المعلَّقة بالحامل، يمتدُّ خلف الرايبوسوم (−x) وإلى الأعلى
      const anchor = topOf(h), k = h - j;
      const bNext = S['b' + h] || 0;                                   // أثناء تكوُّن رابطة جديدة تنتقل السلسلة إلى الحمض التالي
      let p = anchor.clone().add(V(-0.62 * k, 0.28 * k + 0.15 * Math.sin(k * 1.3), 0.12 * k));
      if (bNext > 0 && tVisible(h + 1)) { const a2 = topOf(h + 1); const p2 = a2.clone().add(V(-0.62 * (k + 1), 0.28 * (k + 1), 0.12 * (k + 1))); p.lerp(p2, sm(bNext)); }
      pos.push(p);
    }
    // التحرُّر والانطواء: السلسلة تغادر إلى الأعلى اليسار وتتكوَّر
    if (S.rel > 0) {
      const c = V(-1.6, Y0 + 6.0, -3.2), r = S.rel;
      pos.forEach((p, j) => { if (!p) return; const fold = V(c.x + 0.9 * Math.cos(j * 2.1), c.y + 0.55 * Math.sin(j * 1.7) + 0.3 * (j % 2), c.z + 0.9 * Math.sin(j * 2.1)); p.lerp(fold, sm(r)); });
    }
    return pos;
  }
  const RIB_LAG = x => codonX(0) + 0.75 + (x) * (STEP * 3 + GAP);       // مركز الرايبوسوم عند الموضع x (بين الكودون k و k+1)
  const ribX = () => RIB_LAG(S.k);

  window.DIORAMA = {
    id: 'translation', title: 'بناء البروتين (٢): الترجمة', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الأولى: الأحماض النووية وبناء البروتين',
    source: 'النص من كتاب الطالب: ١-٤ بناء البروتين — الترجمة (ص ٣١–٣٣) والشكل ١-١٣',
    legend: [['#2FA866', 'أدنين (A)'], ['#F08C2E', 'يوراسيل (U)'], ['#2C7BE5', 'جوانين (G)'], ['#8E5BD9', 'سايتوسين (C)'], null,
             ['#E0407F', 'mRNA', 'tube'], ['#C2185B', 'tRNA', 'tube'], ['#4F7FE0', 'حمض أميني', 'dot'], ['#F0874F', 'الرايبوسوم (وحدة كبيرة وصغيرة)']],
    camera: { VH: 21, center: [-0.6, 1.4, 0] },
    base: { L: 21.5, W: 11.5, x: -0.6 },
    BASE: Object.assign({ fo: 0, rib: 0, k: 0, rel: 0 }, ...Array.from({ length: NT }, (_, j) => ({ ['e' + j]: 0, ['x' + j]: 0, ['b' + j]: 0 }))),
    noGeom: ['fo'],
    // نقطة التركيز: 0 الرايبوسوم، 1 قمَّة tRNA في الموقع الأوَّل (الرابطة الببتيديَّة)، 2 عديد الببتيد المنطوي
    focus(s) { S = s; const k = Math.round(S.fo || 0); if (k === 1) { const h = holder(); return topOf(Math.min(NT - 1, h + 1)).add(V(0, -0.6, 0)); } if (k === 2) return V(-1.6, Y0 + 6.0, -3.2); return V(ribX(), Y0 + 0.9, 0); },
    STEPS: [
      { t: 'mRNA والرايبوسوم في السيتوبلازم', p: 'الترجمةُ هي العملية التي يتم من خلالها تحويل تتابع القواعد في mRNA إلى تتابع الأحماض الأمينية في عديد ببتيد. تذكّر أن كل رايبوسوم مكوّن من وحدتَين: وحدة صغيرة ووحدة كبيرة، وأنها تتكوّن من rRNA وبروتين. لبدء الترجمة، يرتبط الرايبوسوم بجزيء mRNA الذي يظهر محصورًا داخل أخدود بين وحدتَي الرايبوسوم (الصغيرة والكبيرة)، ويصبح جاهزًا لاستقبال أول جزيء tRNA.',
        seq: [[{ rib: 1 }, 2200], [{ zoom: 1.9 }, 900]],
        pills: [['mRNA', PNK, () => V(XR - 1.0, Y0, 0), 60, 90], ['الوحدة الكبيرة في الرايبوسوم', ORG, () => large.position.clone().add(V(0, 1.2, 0)), -40, -90], ['الوحدة الصغيرة في الرايبوسوم', ORG, () => small.position.clone().add(V(0, -0.9, 0)), 60, 90],
                ['كودون البدء AUG', GRN, () => V(codonX(0), Y0 - 0.2, 0.5), -120, 110], ['الكودون: ثلاث قواعد على mRNA', BLU, () => V(codonX(3), Y0, 0), 120, -90]] },
      { t: 'tRNA الأول يحمل الميثيونين', p: 'يمثل tRNA رابطًا بين mRNA وتتابع الأحماض الأمينية في البروتين. لكل حمض أميني جزيء tRNA معيّن يحمله. يرتبط الحمض الأميني بأحد طرفَي الجزيء، وفي الطرف الآخر من الجزيء تبرز ثلاث قواعد تشكل الكودون المضاد، وهي مكملة لكودون الحمض الأميني المحمول على tRNA. يدخل إلى الرايبوسوم جزيء tRNA الأول وبه الكودون المضاد والمكمل لأول كودون على mRNA ويرتبط برابطة هيدروجينية مع الكودون. كودون البدء AUG (كودون mRNA للمثيونين)، لذا فإن أول حمض أميني هو الميثيونين.',
        seq: [[{ zoom: 2.6 }, 800], [{ e0: 1 }, 2200]],
        pills: [['tRNA الأول', PNK, () => tPos(0).add(V(0, 1.1, 0)), -130, -40], ['الكودون المضاد UAC', TEAL, () => tPos(0).add(V(0, -0.15, 0)), 150, 70], ['الحمض الأميني: الميثيونين (Met)', BLU, () => topOf(0), 0, -80], ['موقع ارتباط الحمض الأميني', GRY, () => topOf(0).add(V(0, -0.5, 0)), 150, -20]] },
      { t: 'tRNA الثاني', p: 'يمكن أن يستقبل الرايبوسوم جزيئَين من tRNA في الوقت نفسه، لذا فإن tRNA الثاني يدخل الرايبوسوم، والذي يحتوي على الكودون المضاد الذي يطابق الكودون الثاني في mRNA. يرتبط tRNA الثاني مع الكودون الثاني بواسطة روابط هيدروجينية.',
        seq: [[{ e1: 1 }, 2200]],
        pills: [['tRNA الثاني', PNK, () => tPos(1).add(V(0, 1.1, 0)), 130, -30], ['الكودون الثاني AAA', BLU, () => V(codonX(1), Y0 - 0.2, 0.5), 60, 110], ['الكودون المضاد UUU', TEAL, () => tPos(1).add(V(0, -0.15, 0)), 170, 50], ['لايسين (Lys)', BLU, () => topOf(1), 90, -70]] },
      { t: 'الرابطة الببتيدية', p: 'وبذلك يتموضع الحمضان الأمينيان اللذان نقلهما جزيئان من tRNA أحدهما بجوار الآخر، وتتكوّن رابطة ببتيدية بينهما.',
        seq: [[{ '!fo': 1, zoom: 3.2 }, 900], [{ b0: 1 }, 1600], [{ '!fo': 0, zoom: 2.0 }, 900]],
        pills: [['رابطة ببتيدية تتكوَّن بين أول حمضَين أمينيَّين', GLD, () => { const p = aaPositions(); return p[0] && p[1] ? p[0].clone().lerp(p[1], 0.5) : topOf(1); }, 0, -85]] },
      { t: 'يغادر tRNA الأول ويتقدَّم الرايبوسوم', p: 'بعد ذلك يغادر أول tRNA، ويتقدم الرايبوسوم كودون واحد إلى الأمام، ويدخل tRNA الثالث، ناقلًا الحمض الأميني التالي.',
        seq: [[{ x0: 1 }, 1400], [{ k: 1 }, 1200], [{ e2: 1 }, 1800], [{ zoom: 1.4 }, 800]],
        pills: [['يغادر tRNA الأول الرايبوسوم', PNK, () => tPos(0).add(V(0, 1.1, 0)), -120, 60], ['يتقدَّم الرايبوسوم كودوناً واحداً إلى الأمام', ORG, () => V(ribX(), Y0 - 1.9, 1.8), 40, 95], ['tRNA الثالث', PNK, () => tPos(2).add(V(0, 1.1, 0)), 150, -20]] },
      { t: 'تتكرَّر العملية', p: 'وتتكرر هذه العملية إلى حين الوصول إلى كودون إيقاف. تُنقل الأحماض الأمينية واحداً تلو الآخر، فتطول سلسلة عديد الببتيد كودوناً بعد كودون.',
        seq: [[{ b1: 1 }, 900], [{ x1: 1 }, 800], [{ k: 2 }, 700], [{ e3: 1 }, 1000], [{ b2: 1 }, 900], [{ x2: 1 }, 800], [{ k: 3 }, 700], [{ e4: 1 }, 1000], [{ b3: 1 }, 900], [{ x3: 1 }, 800], [{ k: 4 }, 700], [{ e5: 1 }, 1000], [{ b4: 1 }, 900], [{ x4: 1 }, 800], [{ k: 5 }, 700], [{ zoom: 1 }, 900]],
        pills: [['سلسلة عديد ببتيد', GLD, () => { const p = aaPositions().filter(Boolean); return p.length ? p[Math.max(0, p.length - 3)] : topOf(2); }, -100, -70], ['يتقدَّم الرايبوسوم كودوناً واحداً في كل مرَّة', ORG, () => V(ribX(), Y0 - 1.9, 1.8), 40, 95]] },
      { t: 'كودون الإيقاف ومغادرة عديد الببتيد', p: 'ثم يغادر عديد البتيد المكتمل الرايبوسوم، وينطوي ليشكل التركيب الثانوي والثالثي. وتساعد بروتينات خاصة في عملية الطي هذه وتتحكم فيها، وقد يدخل عديد الببتيد الشبكة الإندوبلازمية الخشنة لينقل إلى جزء آخر من الخلية.',
        seq: [[{ zoom: 1.8 }, 800], [{ '!fo': 2, rel: 1 }, 2400], [{ x5: 1 }, 1400], [{ zoom: 1 }, 900]],
        pills: [['كودون الإيقاف UAA', RED, () => V(codonX(6), Y0 - 0.2, 0.5), 80, 110], ['عديد الببتيد المكتمل ينطوي', GLD, () => V(-1.6, Y0 + 6.0, -3.2), 0, -80], ['يغادر tRNA الأخير', PNK, () => tPos(5).add(V(0, 1.1, 0)), 150, 60]] },
    ],
    setup(ctx) {
      ctxRef = ctx;
      const mR = new THREE.MeshStandardMaterial({ color: COL.rib, transparent: true, opacity: 0.5, roughness: 0.3, depthWrite: false }); mR.color.convertSRGBToLinear();
      large = new THREE.Mesh(new THREE.SphereGeometry(1, 36, 26), mR); large.scale.set(2.25, 1.55, 2.0); ctx.scene.add(large);
      small = new THREE.Mesh(new THREE.SphereGeometry(1, 36, 26), mR.clone()); small.scale.set(1.9, 0.95, 1.7); ctx.scene.add(small);
      // mRNA: أنبوب ثابت على طول المحور مع قواعد بارزة إلى الأعلى
      const pts = []; for (let xx = XL - 0.4; xx <= XR + 0.4; xx += 0.2) pts.push(V(xx, Y0, 0));
      ctx.tubePts(pts, 0.15, matRNA, ctx.scene);
      seq.forEach(n => ctx.rod(V(n.x, Y0, 0), V(n.x, Y0 + 0.62, 0), 0.11, matB[n.b], ctx.scene));
    },
    rebuild(s, ctx) {
      S = s;
      const pos = aaPositions();
      for (let j = 0; j < NT; j++) {
        if (!tVisible(j)) continue;
        const p = tPos(j), top = p.clone().add(V(0, H_T, 0));
        // ساق tRNA + عارضة قصيرة في الأسفل تحمل الكودون المضاد (ثلاث قواعد)
        ctx.rod(p.clone().add(V(0, 0.75, 0)), top, 0.13, matT);
        ctx.rod(p.clone().add(V(-0.55, 0.75, 0)), p.clone().add(V(0.55, 0.75, 0)), 0.11, matT);
        const anti = ANTI(CODONS[j]);
        [-STEP, 0, STEP].forEach((dx, q) => ctx.rod(p.clone().add(V(dx, 0.75, 0)), p.clone().add(V(dx, 0.12, 0)), 0.11, matB[anti[q]]));
        // الحمض الأميني فوق tRNA ما دام لم يُسلَّم للسلسلة
        if (pos[j] && j > holder()) ctx.ball(pos[j], 0.42, matAA);
        else if (pos[j] && j === holder()) ctx.ball(pos[j], 0.42, matAA);
      }
      // السلسلة: الأحماض المسلَّمة + روابط ببتيديَّة
      for (let j = 0; j < NT; j++) {
        if (!pos[j]) continue;
        const h = holder();
        if (j < h || (j === h && S.rel > 0)) ctx.ball(pos[j], 0.42, matAA);
        const bj = S['b' + j] || 0;
        if (bj > 0 && pos[j + 1]) { const a = pos[j], b2 = pos[j + 1]; ctx.rod(a, a.clone().lerp(b2, bj), 0.12, matBond); }
      }
    },
    place(s) {
      S = s;
      const rx = ribX(), v = sm(S.rib);
      large.position.set(rx, Y0 + 1.25 + 4.0 * (1 - v), 0); small.position.set(rx, Y0 - 0.85 - 3.0 * (1 - v), 0);
      large.material.opacity = 0.5 * Math.max(0.15, v); small.material.opacity = 0.5 * Math.max(0.15, v);
      large.visible = small.visible = S.rib > 0.02;
    },
    ends() { return [[V(XL - 0.5, Y0, 0), '5′'], [V(XR + 0.5, Y0, 0), '3′']]; },
    idle(t, s, ctx, tweening) { if (!tweening && large.visible) { const k = 1 + Math.sin(t * 2.0) * 0.02; large.scale.set(2.25 * k, 1.55 * k, 2.0 * k); } },
  };
})();
