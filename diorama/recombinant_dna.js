/* ديوراما: تكوين DNA معاد التركيب وإدخاله في البكتيريا — الدرس ٣-٢ أدوات تقنية الجينات (كتاب الطالب ص ٨٧، ٩٠–٩١، ٩٤) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  // ---- الأبعاد: البلازميد حلقة من NP زوجاً من القواعد، والجين قطعة من NG زوجاً، والحلقة معادة التركيب NT ----
  const NP = 60, NG = 24, NT = NP + NG, SP = 0.27, OFF = 0.5, GAP = 0.07;
  const RP = SP * NP / (2 * Math.PI), RT = SP * NT / (2 * Math.PI);
  const PC = V(-3.4, 1.6, -0.9);                       // مركز البلازميد
  const XL = -9.3, YG = 1.25, ZG = 4.0;                // قطعة DNA الخطِّيَّة (جين الإنسان) في مقدِّمة المشهد
  const B1 = V(6.3, 1.1, 0.3), B2 = V(6.3, 1.1, -3.0), B3 = V(6.3, 1.1, 3.6);   // ثلاث بكتيريا
  const SIN = 0.2, DVX = 2.3;                          // مقياس البلازميد داخل الخليَّة، وإزاحة الخليَّتين الناتجتين
  const AMP = [12, 24], GFP = [34, 48];                // مواضع الجينين على البلازميد (بالفتحات)
  const COMP = { A: 'T', T: 'A', G: 'C', C: 'G' };
  const FILL = 'ATGCCGTAAGCTTACGGTACCGATTGCAAGCTAGGCTTAACGTCAGGTACCATGGTTCAAGCTGATCGCATATCCGTAAGGTCAATGCCTAGTCGAATCGGCA';
  // تتابع الشريط الخارجي للبلازميد: موقع BamHI (GGATCC) في الفتحات 0–5
  const PO = ('GGATCC' + FILL.slice(0, NP - 6)).split('');
  // التتابع الخطِّي (الفتحات −6 … NG+9): موقع BamHI يسار الجين (−1…4) ويمينه (NG−1…NG+4)
  const LO = {}; for (let j = -6; j <= NG + 9; j++) LO[j] = FILL[(j + 40) % FILL.length];
  'GGATCC'.split('').forEach((b, i) => { LO[i - 1] = b; LO[NG - 1 + i] = b; });
  const nHof = b => (b === 'A' || b === 'T') ? 2 : 3;
  const matB = { A: M(COL.A), T: M(COL.T), G: M(COL.G), C: M(COL.C) };
  const matP = M(0x8E44AD), matAmp = M(0xE67E22), matGfp = M(0x7CB342), matGene = M(0x1A3C8F), matFl = M(0x1A3C8F);
  const UP = V(0, 1, 0);
  let S, grp, enP, enL, enR, lig, c1a, c1b, c2, c3, g1a, g1b, cone, lamp, ions = [], prots = [], ctxRef;
  const CELL = 0xD9A066, GLOW = 0x39FF14;

  // ---- هندسة الحلقة: الزاوية ونصف القطر دالَّتان في m (0 = بلازميد مغلق، 1 = حلقة معادة التركيب) ----
  const dth = m => 2 * Math.PI / NP * (1 - m) + 2 * Math.PI / NT * m;
  const rad = m => RP * (1 - m) + RT * m;
  const ang = (w, m) => Math.PI / 4 - (w - 2.5) * dth(m);
  const ringP = (w, s, m, extra) => { const a = ang(w, m), r = rad(m) + s * (OFF + (extra || 0)); return V(PC.x + r * Math.cos(a), PC.y, PC.z + r * Math.sin(a)); };
  const linPos = (j, s, sh, extra) => V(XL + (j + 6) * SP + (sh || 0), YG, ZG - s * (OFF + (extra || 0)));
  const shL = () => -1.4 * S.fl, shR = () => 1.4 * S.fl;
  const lift = () => 2.2 * Math.sin(Math.PI * sm(S.d));
  const gp = (k, s, extra) => { const u = sm(S.d); const p = linPos(k, s, 0, extra).lerp(ringP(NP + 1 + k, s, S.m, extra), u); p.y += lift() * (1 - u) * u * 4; return p; };
  // تحويل منظومة البلازميد (والجين بعد دمجه) عند دخولها الخليَّة
  const tgt = () => B1.clone().add(V(-DVX * S.dv, 0, 0));
  const scl = () => 1 - (1 - SIN) * S.e;
  const WT = p => { const s = scl(), T = PC.clone().lerp(tgt(), S.e); return T.add(p.clone().sub(PC).multiplyScalar(s)); };
  const junB = () => WT(ringP(NP + 2.5, 0, S.m)), junA = () => WT(ringP(2.5, 0, S.m));
  const ligPos = () => junB().lerp(junA(), sm(S.lj)).add(V(0, 0.3, 0));
  const siteL = () => linPos(1.5, 0, 0), siteR = () => linPos(NG + 1.5, 0, 0);

  // ---- عناصر الرسم ----
  function half(p, q, mat, parent) { const d = q.clone().sub(p), L = d.length(); if (L < 1e-3) return; d.multiplyScalar((L - GAP) / L); ctxRef.rod(p, p.clone().add(d), 0.1, mat, parent); }
  function hb(mid, dir, n, k, parent) { if (k < 0.03) return; const side = new THREE.Vector3().crossVectors(dir, UP).normalize(); for (let i = 0; i < n; i++) ctxRef.ball(mid.clone().addScaledVector(side, (i - (n - 1) / 2) * 0.115), 0.055 * k, ctxRef.matH, parent); }
  function arc(f, a, b, step, r, mat, parent) { if (b - a < 0.05) return; const pts = []; const n = Math.max(2, Math.ceil((b - a) / step)); for (let i = 0; i <= n; i++) pts.push(f(a + (b - a) * i / n)); ctxRef.tubePts(pts, r, mat, parent); }
  // شريطا البلازميد بقطعهما الملوَّنة (جين المقاومة، جين GFP) بين الحدَّين a و b
  function plasmidStrand(f, a, b, step, r, parent) {
    const segs = [[a, AMP[0], matP], [AMP[0], AMP[1], matAmp], [AMP[1], GFP[0], matP], [GFP[0], GFP[1], matGfp], [GFP[1], b, matP]];
    segs.forEach(([x, y, m]) => arc(f, Math.max(a, x), Math.min(b, y), step, r, m, parent));
  }
  function miniRing(C, s, parent) {
    const f = sg => w => C.clone().add(ringP(w, sg, 1).sub(PC).multiplyScalar(s));
    plasmidStrand(f(1), 1, NP + 0.5, 2, 0.05, parent); plasmidStrand(f(-1), 5, NP + 4.5, 2, 0.05, parent);
    arc(f(1), NP + 0.5, NT, 2, 0.05, matGene, parent); arc(f(-1), NP + 4.5, NT + 4, 2, 0.05, matGene, parent);
  }

  window.DIORAMA = {
    id: 'recombinant_dna', title: 'تكوين DNA معاد التركيب وإدخاله في البكتيريا', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الثالثة: التقنية الجينية — الدرس ٣-٢ أدوات تقنية الجينات',
    source: 'النص من كتاب الطالب: ٣-٢ أدوات تقنية الجينات (ص ٨٧، ٩٠–٩١، ٩٤) والشكلان ٣-١ و٣-٤',
    legend: [['#2FA866', 'أدنين (A)'], ['#E4472E', 'ثايمين (T)'], ['#2C7BE5', 'جوانين (G)'], ['#8E5BD9', 'سايتوسين (C)'], ['#fff;border:2px solid #9aa7b4', 'رابطة هيدروجينية', 'dot'], null,
             ['#8E44AD', 'DNA البلازميد', 'tube'], ['#E67E22', 'جين مقاومة لمضاد حيوي', 'tube'], ['#7CB342', 'جين GFP (علامة جينية)', 'tube'], ['#1A3C8F', 'DNA يحتوي على جين إنسان', 'tube'], null,
             ['#C8B88A', 'إنزيم القطع BamHI'], ['#E84393', 'إنزيم DNA لايجيز'], ['#D9A066', 'بكتيريا'], ['#F4B942', 'أيونات الكالسيوم', 'dot']],
    camera: { VH: 18.5, center: [0.3, 0.4, 0.5] },
    base: { L: 23.5, W: 12.8, x: -0.5, z: 0.3 },
    BASE: { fo: 0, m: 0, cp: 0, cg: 0, fl: 0, d: 0, hb: 0, lt: 0, en: 0, en2: 0, lg: 0, lj: 0, sA: 0, sB: 0, e: 0, rp: 0, dv: 0, pr: 0, ca: 0, hs: 0, uv: 0, gl: 0 },
    noGeom: ['fo', 'lt', 'en', 'en2', 'lg', 'lj', 'pr', 'ca', 'hs', 'uv', 'gl'],
    // نقطة التركيز: 0 موقع القطع في البلازميد، 1 موقع القطع يسار الجين، 2 يمينه، 3 اللايجيز، 4 الخليَّة الأولى، 5 بين البلازميد والجين، 6 وسط قطعة الجين، 7 البكتيريا الثلاث
    focus(s) {
      S = s; const k = Math.round(S.fo || 0);
      if (k === 1) return siteL(); if (k === 2) return siteR(); if (k === 3) return ligPos(); if (k === 4) return tgt().clone().add(V(0, 0.3, 0));
      if (k === 5) return V(-3.4, 1.4, 1.2); if (k === 6) return linPos(NG / 2 + 1.5, 0, 0); if (k === 7) return V(6.3, 1.3, 0.3);
      return WT(ringP(2.5, 0, S.m));
    },
    STEPS: [
      { t: 'البلازميد ناقل، والجين المطلوب', p: 'أحد أنواع النواقل هو البلازميد Plasmid، وهي قطع حلقية صغيرة من أشرطة DNA مزدوجة. توجد البلازميدات طبيعيًا في البكتيريا، والتي غالبًا ما تحتوي على جينات مقاومة للمضادات الحيوية. فإذا أدخل مهندس جيني قطعة من DNA في بلازميد، يمكن استخدام هذا البلازميد لنقل DNA إلى خلية البكتيريا.',
        n: 'للتوضيح كُبِّر البلازميد وقطعة DNA كثيرًا بالنسبة إلى خلية البكتيريا.',
        seq: [[{}, 0]],
        pills: [['بلازميد: قطعة حلقية من أشرطة DNA مزدوجة', PUR, () => ringP(27, 1, S.m), -60, -95], ['جين مقاومة لمضاد حيوي', ORG, () => ringP(18, 1, S.m), 60, 100], ['جين GFP (علامة جينية)', GRN, () => ringP(41, 1, S.m), -150, -30],
                ['موقع قطع BamHI: التتابع GGATCC', RED, () => ringP(2.5, 1, S.m), 170, 60], ['DNA يحتوي على جين إنسان', BLU, () => linPos(NG / 2 + 2, 1, 0), -40, 95], ['بكتيريا', GRY, () => B3.clone().add(V(0, 0.9, 0)), 60, -70]] },
      { t: 'إنزيم القطع يفتح البلازميد', p: 'يُستخدم إنزيم القطع لفتح DNA البلازميد الحلقي. يستهدف كل إنزيم موقع قطع Restriction site، وهو تتابع محدّد من أربع إلى ست قواعد. على سبيل المثال، إنزيم القطع المسمّى BamHI، يقطع DNA عند التتابع GGATCC على الشريط <span class="ltr">5′</span> إلى <span class="ltr">3′</span> والتتابع المكمل CCTAGG على الشريط <span class="ltr">3′</span> إلى <span class="ltr">5′</span>.',
        seq: [[{ en: 1, '!fo': 0 }, 700], [{ zoom: 3.0, '!lt': 1 }, 1000], [{ cp: 1 }, 1400], [{ en: 0 }, 600], [{ m: 0.3 }, 1300]],
        pills: [['إنزيم القطع BamHI', GLD, () => enP.position.clone().add(V(0, 0.5, 0)), 0, -75], ['يقطع بطريقة متعرّجة', RED, () => WT(ringP(2.5, -1, S.m, 1.1)), 120, 70], ['نهايات لاصقة', TEAL, () => WT(ringP(NP + 2.5, 1, S.m, 1.1)), -120, -40]] },
      { t: 'الإنزيم نفسه يقطع DNA حول الجين', p: 'ويجب أن يُستخدم الإنزيم نفسه في قطع الجين المطلوب، لتصبح النهايات اللاصقة لكل من الجين و DNA البلازميد مكملة لبعضها. يمكن أن يقطع إنزيم القطع بطريقة مستقيمة عبر العمود الفقري سكر– فوسفات لتكوين نهايات مستقيمة، أو بطريقة متعرّجة لتكوين «نهايات لاصقة»، تاركًا أجزاء قصيرة من قواعد غير مزدوجة.',
        n: 'للتوضيح يُعرض القطع على جانبَي الجين في وقت واحد بإنزيمَين من النوع نفسه.',
        seq: [[{ zoom: 1, '!lt': 0, en: 0 }, 900], [{ en2: 1, '!fo': 1 }, 700], [{ zoom: 2.6, '!lt': 2 }, 1000], [{ cg: 1 }, 1400], [{ zoom: 1.25, '!fo': 6, '!lt': 0 }, 900], [{ fl: 1 }, 1300]],
        pills: [['إنزيم القطع BamHI', GLD, () => enL.position.clone().add(V(0, 0.5, 0)), -40, -75], ['إنزيم القطع BamHI', GLD, () => enR.position.clone().add(V(0, 0.5, 0)), 40, -75], ['الجين المطلوب بنهايات لاصقة', BLU, () => gp(NG / 2, -1, 0.3), 0, 85],
                ['نهايات لاصقة مكملة لتتابع القواعد CTAG- و GATC-', TEAL, () => gp(1.5, 1, 0.9), -150, -40]] },
      { t: 'ازدواج القواعد المكملة في النهايات اللاصقة', p: 'تمزج البلازميدات المفتوحة وأجزاء DNA التي تحتوي على الجين المطلوب معًا، حيث ترتبط بعض النهايات اللاصقة على البلازميدات مع النهايات اللاصقة على DNA. ويمكن عند هذه النهايات اللاصقة تكوين روابط هيدروجينية مع تتابع القواعد المكملة على أجزاء أخرى من DNA المقطوع.',
        n: 'والعديد منها ببساطة يعود إلى وضعه الطبيعي (حلقة مغلقة) من دون دمج DNA.',
        seq: [[{ en2: 0, '!fo': 5, zoom: 1.1 }, 800], [{ d: 1, m: 1 }, 2800], [{ '!fo': 3, '!lj': 0, zoom: 2.8, '!lt': 3 }, 1000], [{ hb: 1 }, 1300], [{ zoom: 1, '!lt': 0 }, 1000]],
        pills: [['ازدواج القواعد المكملة بروابط هيدروجينية', TEAL, () => junB().add(V(0, 0.2, 0)), 120, -80], ['ازدواج القواعد المكملة بروابط هيدروجينية', TEAL, () => junA().add(V(0, 0.2, 0)), 120, 80], ['الجين المطلوب داخل البلازميد المفتوح', BLU, () => WT(ringP(NP + NG / 2, 1, S.m, 0.4)), -40, 90]] },
      { t: 'إنزيم DNA لايجيز يربط العمود الفقري', p: 'يربط إنزيم DNA لايجيز معًا العمود الفقري سكر– فوسفات في DNA والبلازميد. حيث يقوم الإنزيم بذلك عن طريق تحفيز تكوين روابط فوسفات ثنائية الإستر، وهذا يكوّن حلقة مغلقة من أشرطة DNA المزدوجة المحتوية على الجين الجديد، فيتكون البلازميد معاد التركيب.',
        seq: [[{ lg: 1, '!lj': 0, '!fo': 3 }, 700], [{ zoom: 2.8, '!lt': 3 }, 1000], [{ sB: 1 }, 1300], [{ lj: 1 }, 1100], [{ sA: 1 }, 1300], [{ zoom: 1, '!lt': 0 }, 1000], [{ lg: 0 }, 500]],
        pills: [['إنزيم DNA لايجيز', PNK, () => ligPos().add(V(0, 0.4, 0)), 0, -75], ['روابط فوسفات ثنائية الإستر في العمود الفقري سكر– فوسفات', GLD, () => junB().add(V(0, 0.1, 0)), 150, 60],
                ['بلازميد معاد التركيب: بلازميد بكتيري مع جين بشري مضاف', PUR, () => WT(ringP(50, 1, S.m, 0.5)), -170, 40]] },
      { t: 'إدخال البلازميد إلى البكتيريا', p: 'تتمثل الخطوة التالية للعملية في جعل البكتيريا تمتص البلازميدات. توضع البكتيريا والبلازميدات أولًا في محلول يوجد فيه تركيز عالٍ من أيونات الكالسيوم، ثم يبرد المزيج ويُعرض لصدمة حرارية؛ فيزيد ذلك من احتمال عبور البلازميدات عبر غشاء سطح خلية البكتيريا. نسبة قليلة من البكتيريا، ربما 1%، تمتص البلازميدات معادة التركيب، فيقال إنها عُدّلت Transformed.',
        n: 'والبقية تمتص البلازميدات المغلقة من دون جين مدمج بها، أو لا تمتص أي بلازميد على الإطلاق.',
        seq: [[{ ca: 1 }, 1000], [{ hs: 1 }, 800], [{ hs: 0 }, 700], [{ '!fo': 4, zoom: 1.5 }, 900], [{ e: 1 }, 2600], [{ zoom: 1 }, 900]],
        pills: [['أيونات الكالسيوم', GLD, () => ions[8].position.clone(), -60, -70], ['صدمة حرارية', RED, () => B3.clone().add(V(0, 1.0, 0)), -120, 60], ['عبور البلازميد عبر غشاء سطح خلية البكتيريا', PUR, () => tgt().add(V(-1.0, 0.9, 0.6)), -60, -95],
                ['بكتيريا عُدّلت Transformed', GRN, () => tgt().add(V(1.0, -0.4, 0.8)), 60, 95], ['لم تمتص أي بلازميد', GRY, () => B2.clone().add(V(0, 0.8, 0)), 80, -70]] },
      { t: 'الاستنساخ الجيني والبروتين معاد التركيب', p: 'ينسخ DNA بوليميريز في البكتيريا البلازميدات، ثم تنقسم البكتيريا بالانشطار الثنائي، بحيث تحتوي كل خلية ناتجة على عدة نسخ من البلازميد. يعرف إنتاج عدة نسخ من البلازميد معاد التركيب باسم الاستنساخ الجيني Gene cloning. تنسخ البكتيريا الجين الجديد إلى mRNA لتستخدمه في الترجمة لتكوين بروتين يسمّى البروتين معاد التركيب.',
        n: 'للتوضيح يُعرض انقسام واحد؛ وتُرسم نسخ البلازميد بلا قواعد.',
        seq: [[{ '!fo': 4, zoom: 1.7 }, 900], [{ rp: 1 }, 1500], [{ dv: 1 }, 2300], [{ pr: 1 }, 1200], [{ zoom: 1 }, 900]],
        pills: [['عدة نسخ من البلازميد معاد التركيب', PUR, () => tgt().add(V(0.9, 0.9, 0.4)), -60, -80], ['خليتان ناتجتان بالانشطار الثنائي', ORG, () => B1.clone().add(V(DVX * S.dv, 0.9, 0)), 60, -75], ['البروتين معاد التركيب', BLU, () => prots[7].position.clone(), 110, 70]] },
      { t: 'العلامة الجينية: البروتين المتوهج الأخضر GFP', p: 'تُستخدم العلامات الجينية Genetic markers لتحديد البكتيريا المعدلة جينيًا. الإنزيمات التي تم الحصول عليها من قنديل البحر تصنع بروتينًا يسمّى GFP (البروتين المتوهج الأخضر)، والذي يتوهج باللون الأخضر في الضوء فوق البنفسجي. يُدخَل جين الإنزيم في البلازميدات، لذا كل ما يجب القيام به لتحديد البكتيريا التي امتصت البلازميد معاد التركيب، هو تسليط الضوء فوق البنفسجي عليها. فتلك التي تتوهج باللون الأخضر هي البكتيريا المعدلة جينيًا.',
        seq: [[{ '!fo': 7, zoom: 1.3 }, 900], [{ uv: 1 }, 1200], [{ gl: 1 }, 1300]],
        pills: [['الضوء فوق البنفسجي', PUR, () => V(6.3, 8.6, 0.3), 0, -60], ['تتوهج باللون الأخضر: بكتيريا معدلة جينيًا', GRN, () => B1.clone().add(V(-DVX, 0.7, 0.9)), -120, 80], ['لا تتوهج: لم تمتص البلازميد', GRY, () => B3.clone().add(V(0, 0.6, 0)), -140, 60]] },
    ],
    setup(ctx) {
      ctxRef = ctx;
      enP = ctx.blob(0xC8B88A, 0.78); enL = ctx.blob(0xC8B88A, 0.78); enR = ctx.blob(0xC8B88A, 0.78); lig = ctx.blob(0xE84393, 0.7);
      const cell = () => { const b = ctx.blob(CELL, 0.45); b.userData.base = new THREE.Color(CELL).convertSRGBToLinear(); return b; };
      c1a = cell(); c1b = cell(); c2 = cell(); c3 = cell();
      g1a = ctx.blob(GLOW, 0.32); g1b = ctx.blob(GLOW, 0.32);
      const mC = new THREE.MeshStandardMaterial({ color: 0x7C4DFF, transparent: true, opacity: 0.16, roughness: 0.3, depthWrite: false, side: THREE.DoubleSide }); mC.color.convertSRGBToLinear();
      cone = new THREE.Mesh(new THREE.ConeGeometry(5.6, 8, 40, 1, true), mC); cone.position.set(6.3, 5.1, 0.3); ctx.scene.add(cone);
      lamp = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.4), M(0x5E35B1)); lamp.position.set(6.3, 9.3, 0.3); ctx.scene.add(lamp);
      const mI = M(0xF4B942, { roughness: 0.35 });
      [[3.2, 0.5, -1.2], [4.4, 2.4, 2.6], [9.2, 0.6, -4.6], [2.6, 1.6, 1.2], [8.6, 2.6, 1.8], [3.8, 0.4, 5.2], [9.6, 1.9, 4.4], [5.5, 2.9, -1.8], [2.2, 2.2, -3.6], [10.2, 0.5, -1.4], [7.4, 2.8, 5.4], [1.6, 0.6, 3.0], [8.0, 0.4, -5.0], [4.2, 1.3, -4.4]].forEach(([x, y, z]) => {
        const o = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), mI); o.position.set(x, y, z); o.castShadow = true; ctx.scene.add(o); ions.push(o);
      });
      const mPr = M(0x1A3C8F, { roughness: 0.4 });
      [[-1.1, 0.25, -0.35], [0.3, -0.3, 0.45], [1.2, 0.3, 0.1], [-0.4, 0.45, 0.3], [0.9, -0.35, -0.5], [-1.2, 0.3, 0.3], [0.2, 0.5, -0.4], [1.1, -0.2, 0.5], [-0.6, -0.4, -0.2], [0.7, 0.4, 0.1]].forEach(([x, y, z], i) => {
        const o = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), mPr); o.userData.off = V(x, y, z); o.userData.cell = i < 5 ? 0 : 1; o.castShadow = true; ctx.scene.add(o); prots.push(o);
      });
    },
    rebuild(s, ctx) {
      S = s;
      grp = new THREE.Group(); ctx.dyn.add(grp);
      const sc = scl(), T = PC.clone().lerp(tgt(), S.e); grp.position.copy(T).sub(PC.clone().multiplyScalar(sc)); grp.scale.setScalar(sc);
      const m = S.m, eCp = 1 - S.cp, eCg = 1 - S.cg;
      // --- شريطا البلازميد ---
      const fO = w => ringP(w, 1, m), fI = w => ringP(w, -1, m);
      plasmidStrand(fO, 1 - 0.5 * Math.max(eCp, S.sA), NP + 0.5 * Math.max(eCp, S.sB), 0.5, 0.13, grp);
      plasmidStrand(fI, 5 - 0.5 * Math.max(eCp, S.sA), NP + 4 + 0.5 * Math.max(eCp, S.sB), 0.5, 0.13, grp);
      // --- شريطا قطعة الجين (خطِّيَّة ثم قوس على الحلقة) ---
      const gO = k => gp(k, 1), gI = k => gp(k, -1);
      arc(gO, 0 - 0.5 * Math.max(eCg, S.sB), NG - 1 + 0.5 * Math.max(eCg, S.sA), 0.5, 0.13, matGene, grp);
      arc(gI, 4 - 0.5 * Math.max(eCg, S.sA), NG + 3 + 0.5 * Math.max(eCg, S.sB), 0.5, 0.13, matGene, grp);
      // --- الجزآن الجانبيَّان من DNA الخطِّي (يبقيان خارج الحلقة) ---
      const lO = j => linPos(j, 1, shL()), lI = j => linPos(j, -1, shL()), rO = j => linPos(j, 1, shR()), rI = j => linPos(j, -1, shR());
      arc(lO, -6, -1 + 0.5 * eCg, 0.5, 0.13, matFl); arc(lI, -6, 3 + 0.5 * eCg, 0.5, 0.13, matFl);
      arc(rO, NG - 0.5 * eCg, NG + 9, 0.5, 0.13, matFl); arc(rI, NG + 4 - 0.5 * eCg, NG + 9, 0.5, 0.13, matFl);
      // --- قواعد البلازميد ---
      for (let w = 1; w <= NP; w++) {
        const b = PO[w % NP], c = COMP[b], pO = ringP(w, 1, m), mid = ringP(w, 0, m);
        half(pO, mid, matB[b], grp);
        if (w >= 5) { const pI = ringP(w, -1, m); half(pI, mid, matB[c], grp); hb(mid, pI.clone().sub(pO), nHof(b), 1, grp); continue; }
        // الفتحات 1–4: النهايتان اللاصقتان (الشريط الداخلي في الفتحة NP+w)
        const pI = ringP(NP + w, -1, m), midI = ringP(NP + w, 0, m); half(pI, midI, matB[c], grp);
        if (S.cp < 0.5) hb(mid, pI.clone().sub(pO), nHof(b), 1 - 2 * S.cp, grp);
        if (S.hb > 0.02 && S.d > 0.99) { hb(mid, pO.clone().sub(mid), nHof(b), S.hb, grp); hb(midI, pI.clone().sub(midI), nHof(LO[w - 1]), S.hb, grp); }
      }
      // --- قواعد قطعة الجين ---
      for (let k = 0; k <= NG + 3; k++) {
        const mid = gp(k, 0);
        if (k <= NG - 1) { const b = LO[k], p = gp(k, 1); half(p, mid, matB[b], grp); if (k >= 4) hb(mid, mid.clone().sub(p), nHof(b), 1, grp); else if (S.cg < 0.5) hb(mid, mid.clone().sub(p), nHof(b), 1 - 2 * S.cg, grp); }
        if (k >= 4) { const c = COMP[LO[k]], p = gp(k, -1); half(p, mid, matB[c], grp); if (k > NG - 1 && S.cg < 0.5) hb(mid, p.clone().sub(mid), nHof(c), 1 - 2 * S.cg, grp); }
      }
      // --- قواعد الجزأين الجانبيَّين ---
      for (let j = -6; j <= 3; j++) { const b = LO[j], mid = linPos(j, 0, shL()); if (j <= -1) { const p = linPos(j, 1, shL()); half(p, mid, matB[b]); hb(mid, mid.clone().sub(p), nHof(b), 1); } half(linPos(j, -1, shL()), mid, matB[COMP[b]]); }
      for (let j = NG; j <= NG + 9; j++) { const b = LO[j], mid = linPos(j, 0, shR()); const p = linPos(j, 1, shR()); half(p, mid, matB[b]); if (j >= NG + 4) { half(linPos(j, -1, shR()), mid, matB[COMP[b]]); hb(mid, mid.clone().sub(p), nHof(b), 1); } }
      // --- نسخ البلازميد داخل الخليَّتين الناتجتين ---
      if (S.rp > 0.02) {
        const s2 = SIN * S.rp, d1 = B1.clone().add(V(-DVX * S.dv, 0, 0)), d2 = B1.clone().add(V(DVX * S.dv, 0, 0));
        [[d1, 1.0, 0.1, 0.45], [d1, 0.1, 0.25, -0.5], [d2, -0.9, 0.1, 0.35], [d2, 0.5, 0.2, -0.4], [d2, -0.2, -0.05, 0.5]].forEach(([c, x, y, z]) => miniRing(c.clone().add(V(x * S.rp, y, z * S.rp)), s2, ctx.dyn));
      }
    },
    place(s) {
      S = s;
      const set = (o, vis, p, sx, sy, sz) => { o.visible = vis > 0.02; o.material.opacity = o.userData.op * vis; o.position.copy(p); o.scale.set(sx, sy, sz); };
      set(enP, S.en, WT(ringP(2.5, 0, S.m)).add(V(0, 0.3, 0)), 0.8, 0.62, 0.8);
      set(enL, S.en2, siteL().add(V(0, 0.3, 0)), 0.8, 0.62, 0.8); set(enR, S.en2, siteR().add(V(0, 0.3, 0)), 0.8, 0.62, 0.8);
      set(lig, S.lg, ligPos(), 0.62, 0.55, 0.62);
      const d1 = B1.clone().add(V(-DVX * S.dv, 0, 0)), d2 = B1.clone().add(V(DVX * S.dv, 0, 0));
      set(c1a, 1, d1, 2.2, 1.0, 1.1); set(c1b, 1, d2, 2.2, 1.0, 1.1); set(c2, 1, B2, 2.2, 1.0, 1.1); set(c3, 1, B3, 2.2, 1.0, 1.1);
      [c1a, c1b, c2, c3].forEach(c => { c.material.emissive.setRGB(0.5 * S.hs, 0.04 * S.hs, 0); c.material.color.copy(c.userData.base); });
      const gl = S.gl, green = new THREE.Color(GLOW).convertSRGBToLinear();
      [c1a, c1b].forEach(c => { c.material.color.lerp(green, gl * 0.7); c.material.emissive.setRGB(0.5 * S.hs, 0.04 * S.hs + 0.45 * gl, 0.05 * gl); });
      set(g1a, gl, d1, 2.7, 1.4, 1.5); set(g1b, gl, d2, 2.7, 1.4, 1.5);
      cone.visible = lamp.visible = S.uv > 0.02; cone.material.opacity = 0.16 * S.uv; lamp.scale.setScalar(Math.max(0.001, S.uv));
      ions.forEach(o => { o.visible = S.ca > 0.02; o.scale.setScalar(Math.max(0.001, S.ca)); });
      prots.forEach(o => { o.visible = S.pr > 0.02; o.scale.setScalar(Math.max(0.001, S.pr)); o.position.copy(o.userData.cell ? d2 : d1).add(o.userData.off); });
    },
    // أحرف القواعد في مواقع القطع (تظهر عند التقريب فقط)
    ends(s) {
      S = s; const L = Math.round(S.lt || 0); if (!L) return [];
      const out = [];
      const ringL = (w, sg, b) => out.push([WT(ringP(w, sg, S.m, 0.55)), b]);
      const linL = (j, sg, sh, b) => out.push([linPos(j, sg, sh, 0.55), b]);
      const geneL = (k, sg, b) => out.push([WT(gp(k, sg, 0.55)), b]);
      if (L === 1) { [NP, 1, 2, 3, 4, 5].forEach(w => ringL(w, 1, PO[w % NP])); [NP, NP + 1, NP + 2, NP + 3, NP + 4, 5].forEach(w => ringL(w, -1, COMP[PO[w % NP]])); }
      if (L === 2) { linL(-1, 1, shL(), LO[-1]); for (let k = 0; k <= 4; k++) geneL(k, 1, LO[k]); for (let j = -1; j <= 3; j++) linL(j, -1, shL(), COMP[LO[j]]); geneL(4, -1, COMP[LO[4]]); }
      if (L === 3) { ringL(NP, 1, PO[0]); for (let k = 0; k <= 4; k++) geneL(k, 1, LO[k]); [NP, NP + 1, NP + 2, NP + 3, NP + 4].forEach(w => ringL(w, -1, COMP[PO[w % NP]])); geneL(4, -1, COMP[LO[4]]); }
      return out;
    },
    idle(t, s, ctx, tweening) {
      if (tweening) return;
      const k = 1 + Math.sin(t * 2.2) * 0.035;
      [enP, enL, enR].forEach(o => { if (o.visible) o.scale.set(0.8 * k, 0.62 * k, 0.8 * k); });
      if (lig.visible) lig.scale.set(0.62 * k, 0.55 * k, 0.62 * k);
      ions.forEach((o, i) => { if (o.visible) o.position.y += Math.sin(t * 1.5 + i) * 0.002; });
    },
  };
})();
