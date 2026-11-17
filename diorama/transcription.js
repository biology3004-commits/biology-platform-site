/* ديوراما: النسخ (بناء البروتين — المرحلة الأولى) — الدرس ١-٤ (كتاب الطالب ص ٢٩–٣١) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const Y0 = 2.35, R = 0.95, RISE = 0.40, PITCH = RISE * 10, N = 42;
  const XL = -9.2, XR = XL + 0.3 + (N - 1) * RISE + 0.3;              // طرفا الجزيء
  const G0 = 6, G1 = 32;                                               // الجين: من القاعدة 6 إلى 32 (27 نيوكليوتيداً)
  const BUB = 2.6, EDGE = 1.3;                                        // نصف عرض الجزء المفكوك وطول انتقال الانفكاك
  const SPREAD = 1.5;
  // الشريط القالب (أ) يُقرأ من 3′ إلى 5′ باتجاه +x؛ mRNA يُبنى من 5′ إلى 3′
  const TEMPL = 'GCATCGTACTTGCAGGTACCGTTACGAGCTTAACGCATTGCA';  // 42 قاعدة (شريط القالب)؛ القواعد 6–8 = TAC (كودون البدء على القالب)، 30–32 = ATT (كودون الإيقاف)
  const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' }, RNA = { A: 'U', T: 'A', G: 'C', C: 'G' };
  const INTRON = i => (i >= 13 && i <= 16) || (i >= 22 && i <= 25);   // الإنترونان في النسخة الأوَّليَّة
  const xi = i => XL + 0.3 + i * RISE;
  const matOld = M(COL.old), matRNA = M(COL.mrna, { roughness: 0.4 }), matIntron = M(0x9AA3AE, { roughness: 0.6 });
  const matB = { A: M(COL.A), T: M(COL.T), G: M(COL.G), C: M(COL.C), U: M(COL.U) };
  let S;
  const th = x => x * 2 * Math.PI / PITCH;
  const hA = x => V(x, Y0 + R * Math.cos(th(x)), R * Math.sin(th(x)));
  const hB = x => V(x, Y0 - R * Math.cos(th(x)), -R * Math.sin(th(x)));
  // مقدار الانفكاك عند x: جرس حول موضع الإنزيم P بعرض BUB (يتَّسع مع S.open)
  const open = x => S.open * sm((S.bub - Math.abs(x - S.P)) / EDGE + 0.5);
  const pA = x => { const o = open(x); return hA(x).lerp(V(x, Y0, -(R + SPREAD)), o); };   // القالب (خلف)
  const pB = x => { const o = open(x); return hB(x).lerp(V(x, Y0, +(R + SPREAD)), o); };   // اللاقالب (أمام)
  const mAt = x => V(x, Y0, -(R + SPREAD) + 2 * R);                     // موضع نيوكليوتيد mRNA المزدوج مع القالب
  const PAIRWIN = 1.3;                                                 // طول نافذة الازدواج خلف الإنزيم
  // مسار mRNA الحرِّ (المتدلِّي) من الإنزيم رجوعاً: ينسحب إلى الخلف والأعلى
  const trail = (x, L) => { const u = (S.P - PAIRWIN - x) / Math.max(0.5, L); return V(x - 0.25 * u * L, Y0 + 1.2 * sm(u) + 0.6 * u, -(R + SPREAD) + 2 * R - 2.6 * sm(u)); };
  // مسار الخروج: من داخل النواة إلى الثقب النووي ثم السيتوبلازم (منحنى)
  const ROUTE = new THREE.CatmullRomCurve3([V(2.0, 3.6, -3.2), V(-4.0, 3.0, -4.0), V(-10.6, 1.2, -4.3), V(-13.0, 1.1, -3.5), V(-14.6, 1.0, -1.2), V(-14.8, 1.0, 1.6), V(-13.6, 1.0, 3.9)]);
  const NUC_X = -10.6;                                                 // موضع الغلاف النووي (x)
  let pol, freeG, envelope, poreMarks; const free = [];
  const P5 = '<span class="ltr">5′</span>', P3 = '<span class="ltr">3′</span>';
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const XG0 = xi(G0), XG1 = xi(G1);
  const nts = () => { const a = []; for (let i = G0; i <= G1; i++) a.push({ i, b: RNA[TEMPL[i]], intron: INTRON(i) }); return a; };

  window.DIORAMA = {
    id: 'transcription', title: 'بناء البروتين (١): النسخ', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الأولى: الأحماض النووية وبناء البروتين',
    source: 'النص من كتاب الطالب: ١-٤ بناء البروتين — النسخ وتعديل mRNA (ص ٢٩–٣١)',
    legend: [['#2FA866', 'أدنين (A)'], ['#E4472E', 'ثايمين (T)'], ['#2C7BE5', 'جوانين (G)'], ['#8E5BD9', 'سايتوسين (C)'], ['#F08C2E', 'يوراسيل (U)'], null,
             ['#5B6B8C', 'DNA', 'tube'], ['#E0407F', 'mRNA', 'tube'], ['#9AA3AE', 'إنترون', 'tube'], ['#F0874F', 'RNA بوليميريز']],
    camera: { VH: 23.5, center: [-2.6, 0.3, 0] },
    base: { L: 26, W: 12.5, x: -2.6 },
    BASE: { fo: 0, P: XG0 - 0.6, open: 0, bub: BUB, pol: 0, m: XG0 - 1, fn: 0, rel: 0, mv: 0, spl: 0, mvl: 1 },
    noGeom: ['pol', 'fn', 'fo'],
    // نقطة التركيز: 0 الإنزيم (يتتبَّعه)، 1 منتصف mRNA المتحرِّر، 2 الثقب النووي
    focus(s) { S = s; const k = Math.round(S.fo || 0); if (k === 1) return routeNt(Math.round((G0 + G1) / 2)); if (k === 2) return V(NUC_X, 1.4, -4.3); return V(S.P - 0.2, Y0 + 0.2, 0); },
    STEPS: [
      { t: 'الجين على DNA في النواة', p: 'يحدث النسخ في النواة (حيث يوجد DNA)، ويسمّى الإنزيم المسؤول عن النسخ RNA بوليميريز. ويتم نسخ أحد الشريطَين فقط، الذي يسمى الشريط القالب أو شريط النسخ، ويسمّى الشريط الآخر شريط اللانسخ أو اللاقالب.',
        seq: [[{}, 0]],
        pills: [['النواة', PUR, () => V(1.5, 0.0, -5.0), 0, -40], ['الغلاف النووي', PUR, () => V(NUC_X, 2.4, 3.5), 0, 120], ['السيتوبلازم', GRN, () => V(-14.5, 0.0, 2.5), 0, 70],
                ['الشريط القالب (شريط النسخ)', GRY, () => pA(xi(20)), 110, -110], ['شريط اللاقالب', GRY, () => pB(xi(24)), 60, 100],
                ['كودون البدء على الشريط القالب', GRN, () => V(xi(7), Y0, 0), -30, -115], ['كودون الإيقاف على الشريط القالب', RED, () => V(xi(31), Y0, 0), 120, 90]] },
      { t: 'ارتباط RNA بوليميريز وانفكاك DNA', p: 'يرتبط إنزيم RNA بوليميريز ببداية الجين المراد نسخه، ويبدأ بفكِّ التفاف DNA للجين ويؤدي ذلك إلى كسر الروابط الهيدروجينية بين أزواج القواعد بين الشريطين (انفكاك DNA)، وبالتالي تكوين شريطين منفصلين لجزء من DNA (في الجزء المفكوك) مع بقاء تركيب اللولب المزدوج الطبيعي على جانبيه.',
        seq: [[{ pol: 1, '!fo': 0 }, 700], [{ zoom: 2.2 }, 1000], [{ open: 1 }, 2200]],
        pills: [['إنزيم RNA بوليميريز', ORG, () => pol.position.clone().add(V(0, 1.0, 0)), 0, -90], ['الجزء المفكوك من DNA', RED, () => V(S.P, Y0, 0), 150, 100], ['اللولب المزدوج الطبيعي على الجانبَين', GRY, () => hA(xi(20)), 110, -100]] },
      { t: 'بناء mRNA من نيوكليوتيدات RNA الحرَّة', p: `يتكوّن جزيء mRNA من نيوكليوتيدات RNA توجد حرة في النواة. ومع انتقال RNA بوليميريز على طول الجين، تقترب النيوكليوتيدات الحرة وترتبط بروابط هيدروجينية مع النيوكليوتيدات المكملة لها في الشريط القالب. تذكّر أن RNA يحتوي على القاعدة يوراسيل بدلاً من الثايمين.`,
        seq: [[{ fn: 1, zoom: 2.6 }, 800], [{ P: xi(14), m: xi(14) }, 3000]],
        pills: [['نيوكليوتيدات RNA حرَّة', GRY, () => V(S.P + 2.0, 4.4, -2.6), 120, -60], ['جزيء mRNA النامي', PNK, () => trail(S.m - 1.5, S.m - XG0), -120, -80], ['روابط هيدروجينية مع الشريط القالب', TEAL, () => mAt(S.P - 0.7), 160, 110]] },
      { t: 'ربط النيوكليوتيدات وانفصال mRNA عن القالب', p: 'ومع وصول كل نيوكليوتيد يقوم إنزيم RNA بوليميريز بربطه إلى جزيء mRNA النامي برابطة فوسفات ثنائية الإستر، ومع تكوّن تلك الروابط تتكسر الروابط الهيدروجينية بين جزيء mRNA والشريط القالب.',
        seq: [[{ P: xi(27), m: xi(27) }, 3400], [{ zoom: 1 }, 1000]],
        pills: [['رابطة فوسفات ثنائية الإستر', PNK, () => mAt(S.P - 0.3).add(V(0, 0.25, 0)), 150, -90], ['تتكسَّر الروابط الهيدروجينية خلف الإنزيم', TEAL, () => trail(S.P - PAIRWIN - 0.6, S.m - XG0), -40, 110], ['اتجاه النسخ', GRY, () => V(S.P + 1.5, Y0 + 0.6, -(R + SPREAD) - 0.3), 110, -50]] },
      { t: 'الوصول إلى كودون الإيقاف', p: 'وفي النهاية يتم الوصول إلى كودون إيقاف، فيطلق عندها إنزيم RNA بوليميريز جزيء mRNA الذي اكتمل تكوينه حرًّا في النواة، ويغادر إنزيم RNA بوليميريز جزيء DNA الذي يعود للشكل اللولبي.',
        seq: [[{ P: xi(32) + 0.3, m: XG1 + 0.01 }, 2000], [{ rel: 1 }, 1600], [{ open: 0, pol: 0, fn: 0 }, 1400]],
        pills: [['كودون الإيقاف', RED, () => V(xi(31), Y0, 0), 110, 90], ['mRNA حرٌّ في النواة (النسخة الأوَّليَّة)', PNK, () => routeNt(18), 0, -85], ['يعود DNA إلى الشكل اللولبي', GRY, () => hA(xi(18)), 60, 100]] },
      { t: 'تعديل mRNA: إزالة الإنترونات وربط الإكسونات', p: 'في حقيقيات النواة يتم تعديله (تغيير جزئي) قبل أن يغادر النواة. ويسمّى الجزيء الأصلي قبل تعديله نسخة RNA الأولية، وتسمّى عملية التعديل معالجة RNA. وإحدى خطوات المعالجة هي الربط: يتضمن الربط بداية إزالة التتابعات غير المشفرة، والتي تسمى إنترونات، من النسخة الأولية، ثم ربط تتابعات التشفير المتبقية معًا، والتي تسمى إكسونات.',
        seq: [[{ mv: 0.05, '!fo': 1 }, 1000], [{ zoom: 1.9 }, 900], [{ spl: 1 }, 2400], [{ zoom: 1 }, 900]],
        pills: [['إنترون (يُزال)', GRY, () => routeNt(14), 0, -75], ['إنترون (يُزال)', GRY, () => routeNt(23), 60, -75], ['إكسون', PNK, () => routeNt(10), -40, 90], ['إكسون', PNK, () => routeNt(19), 0, 95], ['إكسون', PNK, () => routeNt(29), 60, 95]] },
      { t: 'مغادرة mRNA النواة', p: 'يغادر mRNA النواة عبر الثقوب النووية في الغلاف النووي، وهو شريط مفرد من عديد نيوكليوتيد، وبعد تكوّنه لا ينطوي ليشكل تركيبًا أكثر تعقيدًا، عكس النوعَين الآخرَين من RNA المشاركَين في عملية الترجمة (tRNA و rRNA).',
        seq: [[{ '!fo': 2, zoom: 1.8 }, 900], [{ mv: 1 }, 3000], [{ zoom: 1 }, 900]],
        pills: [['ثقب نووي في الغلاف النووي', PUR, () => V(NUC_X, 2.2, -4.3), 60, -80], ['mRNA يغادر إلى السيتوبلازم', PNK, () => routeNt(8), -20, 120], ['السيتوبلازم: إلى الرايبوسوم (الترجمة)', GRN, () => V(-15.0, 0.0, 4.2), -40, 60]] },
    ],
    setup(ctx) {
      pol = ctx.blob(COL.rib, 0.55);
      freeG = new THREE.Group(); ctx.scene.add(freeG);
      [['A', -1.0, 3.6, -3.4], ['U', 0.3, 4.1, -4.6], ['G', 1.6, 3.8, -2.8], ['C', -0.4, 4.4, -5.2], ['U', 2.4, 4.2, -4.0], ['G', 0.9, 3.5, -5.6]].forEach(([b, x, y, z], i) => {
        const g = new THREE.Group();
        const ph = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10), M(0xF39C12)); ph.position.set(0, 0, 0.3);
        const su = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.12, 5), M(0xE9A4C1));
        const ba = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.42), matB[b]); ba.position.set(0, 0, -0.34);
        [ph, su, ba].forEach(m => { m.castShadow = true; g.add(m); });
        g.position.set(x, y, z); g.scale.setScalar(1.6); g.rotation.set(0.5 + i, i * 1.7, i * 0.6); freeG.add(g); free.push({ g, y, ph: i * 1.9 });
      });
      // النواة: أرضيَّة شفَّافة بنفسجيَّة + غلاف نووي (جدار منخفض شفَّاف) فيه ثقوب
      const floor = ctx.mesh(new THREE.BoxGeometry(14.6, 0.04, 11.4), new THREE.MeshStandardMaterial({ color: 0xE7DDF5, roughness: 1, transparent: true, opacity: 0.9 }), V(-3.3, -0.27, 0));
      floor.castShadow = false;
      const wallM = new THREE.MeshStandardMaterial({ color: 0xB79BE0, transparent: true, opacity: 0.42, roughness: 0.3, depthWrite: false }); wallM.color.convertSRGBToLinear();
      envelope = new THREE.Group(); ctx.scene.add(envelope);
      const seg = (z0, z1) => { const w = ctx.mesh(new THREE.BoxGeometry(0.28, 3.0, z1 - z0), wallM, V(NUC_X, 1.2, (z0 + z1) / 2), envelope); w.castShadow = false; };
      // ثقوب نوويَّة: فجوات في الجدار
      seg(-5.7, -4.9); seg(-3.7, -1.6); seg(-0.8, 1.4); seg(2.2, 5.7);
      poreMarks = [-4.3, -1.2, 1.8];
      poreMarks.forEach(z => { const ring = ctx.mesh(new THREE.TorusGeometry(0.42, 0.07, 10, 28), M(0x7E57C2), V(NUC_X, 1.2, z), envelope); ring.rotation.y = Math.PI / 2; ring.castShadow = false; });
    },
    rebuild(s, ctx) {
      S = s;
      ctx.tube(pA, XL - 0.25, XR + 0.25, 0.17, matOld); ctx.tube(pB, XL - 0.25, XR + 0.25, 0.17, matOld);
      for (let i = 0; i < N; i++) {
        const x = xi(i), b = TEMPL[i], c = PAIR[b], nH = (b === 'A' || b === 'T') ? 2 : 3, o = open(x);
        if (o < 0.55) { ctx.pair(pA(x), pB(x), matB[b], matB[c], nH, true); continue; }
        // في الجزء المفكوك: قاعدة القالب مكشوفة نحو الداخل، وقاعدة اللاقالب كذلك
        const a = pA(x), q = pB(x);
        ctx.rod(q, V(q.x, q.y, q.z - 0.75), 0.115, matB[c]);
        const paired = i >= G0 && x <= S.m + 0.01 && x >= S.P - PAIRWIN && S.rel < 0.5 && !(S.open < 0.6);
        if (paired) ctx.pair(a, mAt(x), matB[b], matB[RNA[b]], nH, true);
        else ctx.rod(a, V(a.x, a.y, a.z + 0.75), 0.115, matB[b]);
      }
      // mRNA النامي: جزء مزدوج قرب الإنزيم + ذيل حرٌّ
      const made = nts().filter(n => xi(n.i) <= S.m + 0.01);
      if (!made.length) return;
      const L = S.m - XG0;
      if (S.rel < 1) {
        // نقاط المسار المتَّصل بالإنزيم
        const pts = made.map(n => { const x = xi(n.i); return (x >= S.P - PAIRWIN && S.rel < 0.5) ? mAt(x) : trail(x, L); });
        drawRNA(ctx, made, pts, 1 - S.rel);
      }
      if (S.rel > 0) {
        // الجزيء المتحرِّر على مسار الخروج
        const pts = made.map((n, k) => routeNt(n.i));
        drawRNA(ctx, made, pts, S.rel, true);
      }
    },
    place(s) {
      S = s;
      pol.visible = S.pol > 0.02; pol.material.opacity = pol.userData.op * S.pol; pol.position.set(S.P - 0.2, Y0 + 0.1, 0); pol.scale.set(1.6, 1.5, 2.9);
      freeG.visible = S.fn > 0.02; freeG.position.x = S.P - xi(14); freeG.scale.setScalar(Math.max(0.001, S.fn));
    },
    ends(s) {
      S = s;
      const e = [[pA(XR + 0.3), '5′'], [pB(XR + 0.3), '3′'], [pA(XL - 0.3), '3′'], [pB(XL - 0.3), '5′']];
      if (S.m > XG0 + 1.5) e.push([S.rel > 0.5 ? routeNt(G0).add(V(0, 0.5, 0)) : trail(XG0, S.m - XG0).add(V(0, 0.45, 0)), '5′']);
      return e;
    },
    idle(t, s, ctx, tweening) {
      free.forEach(f => { f.g.position.y = f.y + Math.sin(t * 1.3 + f.ph) * 0.14; f.g.rotation.y += 0.008; });
      if (!tweening) { const k = 1 + Math.sin(t * 2.2) * 0.03; pol.scale.set(1.6 * k, 1.5 * k, 2.9 * k); }
    },
  };

  // موضع النيوكليوتيد i من mRNA على مسار الخروج (بعد التحرُّر)؛ الإنترونات تنكمش مع S.spl
  const ROUTE_LEN = ROUTE.getLength();
  function routeNt(i) {
    let d = 0;
    for (let j = G0; j < i; j++) d += INTRON(j) ? RISE * (1 - S.spl) : RISE;
    // رأس الجزيء (5′) يتقدَّم على المسار بمقدار mv؛ الذيل خلفه
    const HEAD0 = (G1 - G0 + 1) * RISE + 0.4;                           // عند التحرُّر يكون الجزيء كلُّه داخل النواة
    const head = HEAD0 + S.mv * (ROUTE_LEN - HEAD0 - 0.3);
    const u = Math.min(1, Math.max(0, (head - d) / ROUTE_LEN));
    const p = ROUTE.getPointAt(u);
    if (INTRON(i)) p.y += 0.9 * S.spl;                                   // الإنترون يُرفع ويتلاشى أثناء الإزالة
    return p;
  }
  function drawRNA(ctx, made, pts, alpha, released) {
    if (alpha < 0.03) return;
    const back = [], segs = [];
    // العمود الفقري: قطع متَّصلة من الإكسونات (الإنترونات تختفي تدريجيّاً)
    let cur = [];
    made.forEach((n, k) => {
      const p = pts[k];
      if (released && n.intron && S.spl > 0.5) { if (cur.length) { segs.push(cur); cur = []; } return; }
      cur.push(p);
    });
    if (cur.length) segs.push(cur);
    const mat = alpha < 0.98 ? (() => { const m = matRNA.clone(); m.transparent = true; m.opacity = alpha; return m; })() : matRNA;
    segs.forEach(sg => { if (sg.length > 1) ctx.tubePts(sg, 0.15, mat); });
    made.forEach((n, k) => {
      const p = pts[k];
      if (released && n.intron && S.spl > 0.5) return;
      const towards = released ? V(0, -0.72, 0) : V(0, 0, -0.72);                 // اتجاه بروز القاعدة
      const xx = xi(n.i);
      if (!released && xx >= S.P - PAIRWIN && S.rel < 0.5) return;                     // مرسومة كزوج مع القالب
      const bm = (released && n.intron) ? matIntron : matB[n.b];
      ctx.rod(p, p.clone().add(towards), 0.11, alpha < 0.98 ? (() => { const m = bm.clone(); m.transparent = true; m.opacity = alpha; return m; })() : bm);
    });
    if (released) {
      // تلوين العمود الفقري عند الإنترونات باللون الرمادي: نُعيد رسم قطع الإنترون فوق المسار
      made.forEach((n, k) => { if (n.intron && S.spl <= 0.5 && k + 1 < made.length && made[k + 1].intron) ctx.tubePts([pts[k], pts[k + 1]], 0.16, matIntron); });
    }
  }
})();
