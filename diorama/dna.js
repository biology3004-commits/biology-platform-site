/* ديوراما: تركيب DNA وتضاعفه — الدرسان ١-١ و١-٢ (كتاب الطالب ص ٢٠–٢٧) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const Y0 = 2.35, R = 0.95, RISE = 0.40, PITCH = RISE * 10, N = 40;
  const XL = -8.6, XR = XL + 0.3 + (N - 1) * RISE + 0.3;
  const SPREAD = 2.35, LFORK = 4.2, LAGMIN = 1.9;
  const B1 = XL + 0.3 + RISE * 9 + 0.2, B2 = XL + 0.3 + RISE * 22 + 0.2;     // حدود قطع أوكازاكي
  const SEQ = 'ATGCCGTAAGCTTACGGATCCGATTGCAAGCTAGGCTTAACG';
  const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
  const xi = i => XL + 0.3 + i * RISE;
  const matOld = M(COL.old), matNew = M(COL.neu, { roughness: 0.4 });
  const matB = { A: M(COL.A), T: M(COL.T), G: M(COL.G), C: M(COL.C) };
  let S;
  const th = x => (x - S.F) * 2 * Math.PI / PITCH - Math.PI / 2;
  const off = s => SPREAD * sm(s / LFORK);
  const pA = x => x >= S.F ? V(x, Y0 + R * Math.cos(th(x)), R * Math.sin(th(x))) : V(x, Y0, -(R + off(S.F - x)));
  const pB = x => x >= S.F ? V(x, Y0 - R * Math.cos(th(x)), -R * Math.sin(th(x))) : V(x, Y0, +(R + off(S.F - x)));
  const nA = x => V(x, Y0, -(off(S.F - x) - R));          // الشريط الجديد المقابل للقالب (أ) = المتقدِّم
  const nB = x => V(x, Y0, +(off(S.F - x) - R));          // الشريط الجديد المقابل للقالب (ب) = المتأخِّر
  let polLead, polLag, ligase, freeG, nuc; const free = [];
  const P5 = '<span class="ltr">5′</span>', P3 = '<span class="ltr">3′</span>';
  const F1 = B1 + LAGMIN, F2 = B2 + LAGMIN, FEND = XR + LFORK + 0.5;
  const { BLU, RED, GLD, TEAL, PNK, GRY } = CSS;

  window.DIORAMA = {
    id: 'dna', title: 'تركيب DNA وتضاعفه', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الأولى: الأحماض النووية وبناء البروتين',
    source: 'النص من كتاب الطالب: ١-١ تركيب DNA و RNA (ص ٢٠–٢٥)، ١-٢ تضاعف DNA (ص ٢٦–٢٧)',
    legend: [['#2FA866', 'أدنين (A)'], ['#E4472E', 'ثايمين (T)'], ['#2C7BE5', 'جوانين (G)'], ['#8E5BD9', 'سايتوسين (C)'], null,
             ['#5B6B8C', 'شريط أصلي (قالب)', 'tube'], ['#E8B923', 'شريط جديد', 'tube'], ['#fff;border:2px solid #9aa7b4', 'رابطة هيدروجينية', 'dot']],
    camera: { VH: 22.5, center: [-0.6, 0.2, 0] },
    BASE: { fo: 0, F: XL - 0.35, lead: XL - 1, f1l: B1, f1r: B1, f2l: B2, f2r: B2, f3l: XR, f3r: XR, j1: 0, j2: 0, pL: 0, pG: 0, pGx: B1, lg: 0, lgx: B1, fn: 0, nm: 1 },
    noGeom: ['pL', 'pG', 'lg', 'fn', 'nm', 'pGx', 'lgx', 'fo'],
    // نقطة التركيز للكاميرا: 0 الشوكة، 1 بوليميريز المتقدِّم، 2 بوليميريز المتأخِّر، 3 لايجيز، 4 منتصف الجزيء
    focus(s) { S = s; const k = Math.round(S.fo || 0); if (k === 1) return polLead.position.clone(); if (k === 2) return polLag.position.clone(); if (k === 3) return ligase.position.clone(); if (k === 4) return V((XL + XR) / 2, Y0, 0); return V(S.F, Y0, 0); },
    STEPS: [
      { t: 'تركيب DNA', p: 'يتكوَّن جزيء DNA من شريطَي عديد نيوكليوتيد متعاكسَي الاتجاه، يرتبطان بروابط هيدروجينية بين القواعد: يرتبط A دائماً مع T برابطتَين هيدروجينيتَين، ويرتبط G دائماً مع C بثلاث روابط هيدروجينية، ويلتفُّ الشريطان ليشكِّلا لولباً مزدوجاً. يحتوي النيوكليوتيد على سكر خماسي ومجموعة فوسفات وقاعدة نيتروجينية.',
        seq: [[{}, 0]],
        pills: [['اللولب المزدوج', BLU, () => pA(-3.0), 0, -70], ['العمود الفقري سكر-فوسفات', BLU, () => pB(2.4), 40, 80], ['ازدواج القواعد المكمِّلة', BLU, () => V(xi(24), Y0, 0), 150, -95], ['النيوكليوتيد', GRY, () => V(7.2, 1.4, 3.7), -110, 70]] },
      { t: 'انفكاك اللولب المزدوج', p: 'يبدأ التضاعف بانفكاك اللولب المزدوج وانفصال الشريطَين بكسر الروابط الهيدروجينية بين القواعد، فيعمل كل شريط قالباً.',
        seq: [[{ nm: 0, '!fo': 0, zoom: 1.7 }, 900], [{ F: F1 }, 2600], [{ zoom: 1 }, 900]],
        pills: [['شريط قالب', GRY, () => pA(XL + 1.5), -40, -70], ['شريط قالب', GRY, () => pB(XL + 1.5), -90, 60], ['كسر الروابط الهيدروجينية', RED, () => V(S.F - 0.5, Y0, 0), 120, -110]] },
      { t: 'الشريط المتقدِّم', p: `يضيف إنزيم DNA بوليميريز نيوكليوتيدات حرَّة تكمِّل قواعدُها قواعدَ الشريط القالب (A مع T، و G مع C)، ولا يستطيع بناء الشريط الجديد إلا في الاتجاه من ${P5} إلى ${P3}. يُبنى أحد الشريطَين باستمرار، ويُسمَّى الشريط المتقدِّم.`,
        seq: [[{ pL: 1, fn: 1, '!fo': 1 }, 600], [{ zoom: 2.4 }, 1000], [{ lead: B1 }, 2600], [{ zoom: 1 }, 1000]],
        pills: [['إنزيم DNA بوليميريز', TEAL, () => polLead.position.clone().add(V(0, 0.7, 0)), 90, -105], ['الشريط المتقدِّم', GLD, () => nA(XL + 1.6), -70, -80], ['نيوكليوتيدات حرَّة', GRY, () => V(S.F + 1.1, 4.0, -3.0), 110, -60]] },
      { t: 'الشريط المتأخِّر', p: 'أمَّا الشريط الآخر فيُبنى على شكل أجزاء قصيرة تُسمَّى قطع أوكازاكي، ويُسمَّى الشريط المتأخِّر.',
        n: 'للتوضيح يُعرض البناء خطوةً خطوةً؛ في الخلية يُبنى الشريطان الجديدان في وقت واحد.',
        seq: [[{ pG: 1, '!pGx': B1, '!fo': 2 }, 500], [{ zoom: 2.4 }, 1000], [{ f1l: XL, pGx: XL + 0.3 }, 2600], [{ zoom: 1 }, 1000]],
        pills: [['إنزيم DNA بوليميريز', TEAL, () => polLag.position.clone().add(V(0, 0.7, 0)), -150, 30], ['قطعة أوكازاكي', GLD, () => nB((S.f1l + S.f1r) / 2), -60, 110], ['الشريط المتقدِّم', GLD, () => nA(XL + 1.6), -70, -80]] },
      { t: 'يستمرُّ انفكاك اللولب', p: 'يستمرُّ بناء الشريط المتقدِّم ناسخاً DNA أثناء انفكاكه.',
        seq: [[{ pG: 0, '!fo': 1 }, 300], [{ F: F2, lead: B2 }, 3000]],
        pills: [['الشريط المتقدِّم يُبنى باستمرار', GLD, () => nA(-2.0), 60, -110], ['إنزيم DNA بوليميريز', TEAL, () => polLead.position.clone().add(V(0, 0.7, 0)), 150, -70]] },
      { t: 'قطعة أوكازاكي ثانية', p: 'يُبنى الشريط المتأخِّر على شكل أجزاء قصيرة: تتكوَّن قطعة أوكازاكي ثانية بجوار الأولى.',
        seq: [[{ pG: 1, '!pGx': B2, '!fo': 2 }, 500], [{ zoom: 2.0 }, 900], [{ f2l: B1, pGx: B1 + 0.3 }, 2600], [{ zoom: 1 }, 900]],
        pills: [['قطعة أوكازاكي (١)', GLD, () => nB((XL + B1) / 2), -110, 90], ['قطعة أوكازاكي (٢)', GLD, () => nB((S.f2l + S.f2r) / 2), -40, 120], ['إنزيم DNA بوليميريز', TEAL, () => polLag.position.clone().add(V(0, 0.7, 0)), -170, -10]] },
      { t: 'إنزيم DNA لايجيز', p: 'يربط إنزيم DNA لايجيز قطع أوكازاكي معاً مكوِّناً العمود الفقري سكر-فوسفات لجزيء DNA الجديد.',
        seq: [[{ pG: 0, lg: 1, '!lgx': B1, '!fo': 3 }, 600], [{ zoom: 2.8 }, 1000], [{ j1: 1 }, 1500], [{ zoom: 1 }, 1000]],
        pills: [['إنزيم DNA لايجيز', PNK, () => ligase.position.clone(), -90, 110], ['الشريط المتأخِّر', GLD, () => nB(-1.5), 30, 130]] },
      { t: 'التضاعف شبه المحافظ', p: 'ينتج جزيئا DNA متطابقان، يحتوي كلٌّ من الجزيئَين الجديدَين المتكوِّنَين على شريط أصلي واحد وشريط جديد واحد.',
        seq: [[{ lg: 0, '!fo': 4 }, 300], [{ F: FEND, lead: XR }, 3200], [{ pL: 0, fn: 0, '!f3r': XR, f3l: B2 }, 1500], [{ j2: 1 }, 500], [{ zoom: 0.9 }, 900]],
        pills: [['شريط أصلي', GRY, () => pA(3.0), 110, -70], ['شريط جديد', GLD, () => nA(-1.0), 30, -95], ['شريط أصلي', GRY, () => pB(-3.0), -110, 70], ['شريط جديد', GLD, () => nB(2.0), 40, 110]] },
    ],
    setup(ctx) {
      polLead = ctx.blob(0x12A5A0, 0.5); polLag = ctx.blob(0x12A5A0, 0.5); ligase = ctx.blob(0xE84393, 0.62);
      freeG = new THREE.Group(); ctx.scene.add(freeG);
      [['A', -1.3, 3.5, -1.2], ['G', -0.5, 3.9, -3.0], ['T', -2.6, 3.7, -0.2], ['C', -1.6, 3.4, 1.0], ['T', -0.2, 3.6, 2.9], ['G', -3.3, 3.9, 0.7], ['C', 0.5, 4.1, -2.2]].forEach(([b, x, y, z], i) => {
        const g = new THREE.Group();
        const ph = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10), M(0xF39C12)); ph.position.set(0, 0, 0.3);
        const su = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.12, 5), M(0xAEB9C7));
        const ba = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.42), matB[b]); ba.position.set(0, 0, -0.34);
        [ph, su, ba].forEach(m => { m.castShadow = true; g.add(m); });
        g.position.set(x, y, z); g.scale.setScalar(1.7); g.rotation.set(0.5 + i, i * 1.7, i * 0.6); freeG.add(g); free.push({ g, y, ph: i * 1.9 });
      });
      nuc = new THREE.Group(); ctx.scene.add(nuc);
      const add = (g, m, x, y, z) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; nuc.add(o); return o; };
      add(new THREE.CylinderGeometry(1.95, 2.1, 0.5, 48), M(0xBFD3EA, { roughness: 0.7 }), 0, -0.05, 0);
      add(new THREE.SphereGeometry(0.55, 24, 18), M(0xF39C12), 1.05, 1.15, 0.65);
      add(new THREE.CylinderGeometry(0.72, 0.72, 0.4, 5), M(0x8FA1B8), 0, 1.15, 0).rotation.y = 0.3;
      add(new THREE.BoxGeometry(0.58, 0.42, 1.4), matB.A, -0.2, 1.15, -1.3);
      nuc.position.set(7.2, 0, 3.7);
    },
    rebuild(s, ctx) {
      S = s;
      ctx.tube(pA, XL - 0.25, XR + 0.25, 0.17, matOld); ctx.tube(pB, XL - 0.25, XR + 0.25, 0.17, matOld);
      const fr = [[S.f1l, S.f1r], [S.f2l, S.f2r], [S.f3l, S.f3r]];
      for (let i = 0; i < N; i++) {
        const x = xi(i), b = SEQ[i], c = PAIR[b], nH = (b === 'A' || b === 'T') ? 2 : 3;
        if (x >= S.F) { ctx.pair(pA(x), pB(x), matB[b], matB[c], nH, true); continue; }
        const d = S.F - x;
        if (off(d) < 0.9) {                                   // قرب نقطة الانفكاك: قاعدتان مكشوفتان بلا روابط
          const len = Math.min(R * 0.92, R + off(d) - 0.12), a = pA(x), q = pB(x);
          ctx.rod(a, V(a.x, a.y, a.z + len), 0.115, matB[b]); ctx.rod(q, V(q.x, q.y, q.z - len), 0.115, matB[c]); continue;
        }
        ctx.pair(pA(x), nA(x), matB[b], matB[c], nH, x <= S.lead + 0.02);
        ctx.pair(pB(x), nB(x), matB[c], matB[b], nH, fr.some(([l, r]) => r - l > 0.05 && x >= l - 0.02 && x <= r + 0.02));
      }
      if (S.lead > XL) ctx.tube(nA, XL - 0.25, S.lead + 0.13, 0.17, matNew);
      const g1 = 0.13 * (1 - S.j1), g2 = 0.13 * (1 - S.j2);
      if (S.f1r > S.f1l) ctx.tube(nB, S.f1l === XL ? XL - 0.25 : S.f1l - 0.13, S.f1r - g1, 0.17, matNew);
      if (S.f2r > S.f2l) ctx.tube(nB, S.f2l + (S.f2l <= B1 + 0.01 ? g1 : -0.13), S.f2r - g2, 0.17, matNew);
      if (S.f3r > S.f3l) ctx.tube(nB, S.f3l + (S.f3l <= B2 + 0.01 ? g2 : -0.13), S.f3r + (S.f3r >= XR ? 0.25 : 0.13), 0.17, matNew);
    },
    place(s) {
      S = s;
      const set = (o, vis, p, sx, sy, sz) => { o.visible = vis > 0.02; o.material.opacity = o.userData.op * vis; o.position.copy(p); o.scale.set(sx, sy, sz); };
      const xl = Math.max(XL, S.lead) + 0.25;
      set(polLead, S.pL, V(xl, Y0, -off(S.F - xl)), 0.95, 0.8, 1.35);
      set(polLag, S.pG, V(S.pGx - 0.15, Y0, off(S.F - S.pGx + 0.15)), 0.95, 0.8, 1.35);
      set(ligase, S.lg, nB(S.lgx), 0.62, 0.6, 0.62);
      freeG.visible = S.fn > 0.02; freeG.position.x = S.F + 1.6; freeG.scale.setScalar(Math.max(0.001, S.fn));
      nuc.visible = S.nm > 0.02; nuc.scale.setScalar(Math.max(0.001, S.nm));
    },
    ends(s) {
      S = s;
      const e = [[pA(XR + 0.3), '5′'], [pB(XR + 0.3), '3′'], [pA(XL - 0.3), '3′'], [pB(XL - 0.3), '5′']];
      if (S.lead > XL + 1) e.push([nA(XL - 0.3).add(V(0, 0, 0.25)), '5′']);
      if (S.f1r - S.f1l > 3.5) e.push([nB(XL - 0.3).add(V(0, 0, -0.25)), '3′']);
      return e;
    },
    idle(t, s, ctx, tweening) {
      free.forEach(f => { f.g.position.y = f.y + Math.sin(t * 1.3 + f.ph) * 0.14; f.g.rotation.y += 0.008; });
      if (!tweening) { const k = 1 + Math.sin(t * 2.2) * 0.035; polLead.scale.set(0.95 * k, 0.8 * k, 1.35 * k); polLag.scale.set(0.95 * k, 0.8 * k, 1.35 * k); }
    },
  };
})();
