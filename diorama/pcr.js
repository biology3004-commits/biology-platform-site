/* ديوراما: تفاعل البوليميريز المتسلسل (PCR) — الدرس ٣-٣ فصل وتضخيم DNA (كتاب الطالب ص ٩٦–٩٧) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  // جزء DNA المراد تضخيمه: N زوجاً من القواعد، والبادئة PL قواعد (تبسيط بصري؛ الكتاب: 20 تقريباً)
  const N = 16, PL = 4, RISE = 0.34, Y0 = 1.45, L = (N - 1) * RISE;
  const SEP = 1.1;                                   // تباعد الشريطين في الجزيء المزدوج
  const TX = -2.3, TZ = 0;                           // مركز الأنبوبة
  const THX = 6.6, THZ = -1.0;                       // مقياس الحرارة
  const SEQ = 'ATGCCGTAAGCTTACG';
  const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
  const yi = i => Y0 + i * RISE;
  const nHof = b => (b === 'A' || b === 'T') ? 2 : 3;
  const matOld = M(COL.old), matNew = M(COL.neu, { roughness: 0.4 }), matPri = M(0xE0407F, { roughness: 0.4 });
  const matB = { A: M(COL.A), T: M(COL.T), G: M(COL.G), C: M(COL.C) };
  let S, ctxRef, hud;
  // مواضع الجزيئات بعد k دورة (داخل الأنبوبة): x,z نسبة إلى مركز الأنبوبة
  const LAY = [
    [[0, 0]],
    [[-1.9, 0], [1.9, 0]],
    [[-2.0, -1.7], [-2.0, 1.7], [2.0, -1.7], [2.0, 1.7]],
    [[-3.15, -1.7], [-1.05, -1.7], [-3.15, 1.7], [-1.05, 1.7], [1.05, -1.7], [3.15, -1.7], [1.05, 1.7], [3.15, 1.7]],
  ];
  const lay = (k, m) => { const [x, z] = LAY[k][m]; return V(TX + x, Y0, TZ + z); };
  const OPEN = k => k >= 3 ? 0.3 : 0.8;              // نصف زيادة التباعد عند التمسُّخ
  // هل الشريط (أ) / (ب) في الجزيء m بعد k دورة شريط أصلي من العيِّنة؟
  const origA = (k, m) => k === 0 ? true : (m % 2 === 0 ? origA(k - 1, m >> 1) : false);
  const origB = (k, m) => k === 0 ? true : (m % 2 === 1 ? origB(k - 1, m >> 1) : false);
  // هندسة الجزيء الأب j في الدورة الجارية: c مركزه، c1 مركز الناتج (قالب أ + شريط ب جديد)، c2 مركز الناتج (شريط أ جديد + قالب ب)
  function par(j) {
    const k = S.cyc, c = lay(k, j), op = OPEN(k) * sm(S.den), sp = sm(S.split);
    const Ax = c.x - SEP / 2 - op, Bx = c.x + SEP / 2 + op;
    const n1 = k < 3 ? lay(k + 1, 2 * j) : c, n2 = k < 3 ? lay(k + 1, 2 * j + 1) : c;
    const c1 = V(Ax + SEP / 2, Y0, c.z).lerp(n1, sp), c2 = V(Bx - SEP / 2, Y0, c.z).lerp(n2, sp);
    return { c, c1, c2, aOld: origA(k, j), bOld: origB(k, j) };
  }
  const nPar = () => 1 << S.cyc;
  const grown = () => (N - PL) * sm(S.ext);          // عدد القواعد المبنيَّة بعد البادئة
  const docked = () => S.ann > 0.985;
  // مسار البادئة قبل الالتصاق (إزاحة من موضعها النهائي)
  const flyB = () => V(1.9, 2.6, 1.7).multiplyScalar(1 - sm(S.ann));
  const flyA = () => V(-1.9, -1.0, 1.9).multiplyScalar(1 - sm(S.ann));
  // موضع البوليميريز على جبهة البناء
  function polPos(P, kind) {
    const g = grown();
    if (kind === 'B') return V(P.c1.x + SEP / 2 + 0.45, yi(N - PL) - RISE * g - 0.05, P.c1.z + 0.25);
    return V(P.c2.x - SEP / 2 - 0.45, yi(PL - 1) + RISE * g + 0.05, P.c2.z + 0.25);
  }
  const thermoH = T => 0.3 + 7.0 * (T - 20) / 80;    // ارتفاع عمود مقياس الحرارة
  const yT = T => 0.55 + thermoH(T);

  let glass, liquid, cap, block, thGlass, thCol, thBulb, freeG, freePri = [], freePol = [], pol = [];
  const free = [];
  const colCold = new THREE.Color(0xBFE3F5).convertSRGBToLinear(), colHot = new THREE.Color(0xF6C6BD).convertSRGBToLinear();
  const T95 = '<span class="ltr">95°C</span>', T60 = '<span class="ltr">60°C</span>', T72 = '<span class="ltr">72°C</span>';

  window.DIORAMA = {
    id: 'pcr', title: 'تفاعل البوليميريز المتسلسل (PCR)', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الثالثة: التقنية الجينية — الدرس ٣-٣ فصل وتضخيم DNA',
    source: 'النص من كتاب الطالب: ٣-٣ فصل وتضخيم DNA — تفاعل البوليميريز المتسلسل (ص ٩٦–٩٧) والشكل ٣-٦',
    legend: [['#2FA866', 'أدنين (A)'], ['#E4472E', 'ثايمين (T)'], ['#2C7BE5', 'جوانين (G)'], ['#8E5BD9', 'سايتوسين (C)'], null,
             ['#5B6B8C', 'شريط DNA أصلي (من العيِّنة)', 'tube'], ['#E8B923', 'شريط جديد', 'tube'], ['#E0407F', 'بادئة', 'tube'], null,
             ['#12A5A0', 'إنزيم DNA بوليميريز', 'dot'], ['#F39C12', 'dNTPs (نيوكليوتيدات حرَّة)', 'dot'], ['#fff;border:2px solid #9aa7b4', 'رابطة هيدروجينية', 'dot']],
    camera: { VH: 20, center: [-0.6, 2.6, 0] },
    base: { L: 19, W: 10.5, x: -0.6 },
    BASE: { fo: 0, cyc: 0, den: 0, ann: 0, ext: 0, split: 0, T: 25, pv: 0, hud: 0 },
    noGeom: ['fo', 'T', 'pv', 'hud'],
    // نقطة التركيز: 0 الأنبوبة، 1 موضع التصاق البادئة الأولى، 2 البوليميريز على الشريط الجديد، 3 مقياس الحرارة، 4 الجزيء الأوَّل، 5 بوليميريز حرٌّ
    focus(s) {
      S = s; const k = Math.round(S.fo || 0), P = par(0);
      if (k === 1) return V(P.c1.x + SEP / 2, yi(N - 2), P.c1.z);
      if (k === 2) return polPos(P, 'B');
      if (k === 3) return V(THX, 5.5, THZ);
      if (k === 4) return V(P.c.x, Y0 + L / 2, P.c.z);
      if (k === 5) return freePol[0].position.clone();
      return V(TX, 4.2, TZ);
    },
    STEPS: [
      { t: 'مكوِّنات أنبوبة PCR',
        p: 'يُستخدم تفاعل البوليميريز المتسلسل (اختصارًا PCR) تقريبًا في كل تطبيقات التقنية الجينية لتضخيم جزء معيّن من DNA. يضاف ما يأتي إلى كل أنبوبة في جهاز PCR: عيّنة من DNA، وهي جزء DNA المراد تضخيمه. جزآن قصيران مختلفان من شريط DNA مفرد يعملان كبادئات لإنزيم DNA بوليميريز. جزيئات حرة من ديوكسي نيوكليوتيد ثلاثي الفوسفات (dNTPs)، والتي تعمل كوحدات أساسية لبناء أشرطة جديدة من DNA. محلول منظم عند <span class="ltr">pH 7–8</span>. محلول من DNA بوليميريز مستقر حراريًا.',
        n: 'للتوضيح كُبِّرت الأنبوبة ومحتوياتها كثيرًا؛ الأنابيب صغيرة جدًا (تستوعب 0.05 mL تقريبًا)، وجدرانها رقيقة جدًا، لذا تتغير درجة الحرارة فيها بسرعة.',
        seq: [[{ hud: 1 }, 400]],
        pills: [['عيّنة من DNA: جزء DNA المراد تضخيمه', GRY, () => V(TX, Y0 + L + 0.2, TZ), 20, -75],
                ['بادئتان: جزآن قصيران من شريط DNA مفرد', PNK, () => freePri[0].position.clone().add(V(0, 0.3, 0)), -130, 60],
                ['dNTPs: وحدات أساسية لبناء أشرطة جديدة', ORG, () => free[4].g.position.clone(), 170, -60],
                ['DNA بوليميريز مستقر حراريًا', TEAL, () => freePol[0].position.clone(), -100, 140],
                ['محلول منظم عند <span class="ltr">pH 7–8</span>', BLU, () => V(TX + 2.6, 2.4, TZ + 3.6), 150, 70],
                ['درجة حرارة المزيج', RED, () => V(THX, yT(25) + 0.2, THZ), 0, -80],
                ['أنبوبة PCR في الجهاز', GRY, () => V(TX, 9.4, TZ + 5.0), -60, -110]] },
      { t: 'المرحلة الأولى: التمسخ عند 95°C تقريبًا',
        p: 'يتم أولًا تمسيخ DNA بتسخينه إلى <span class="ltr">95°C</span> تقريبًا، الأمر الذي يكسر الروابط الهيدروجينية بين أزواج القواعد، ويفصل شريطي DNA أحدهما عن الآخر، لتبقى القواعد مكشوفة (غير مزدوجة).',
        seq: [[{ T: 95 }, 1200], [{ '!fo': 4, zoom: 1.8 }, 700], [{ den: 1 }, 2200], [{ zoom: 1.3 }, 600]],
        pills: [['تسخين إلى ' + T95 + ' تقريبًا', RED, () => V(THX, yT(95) + 0.1, THZ), 0, -80],
                ['يكسر الروابط الهيدروجينية بين أزواج القواعد', RED, () => { const P = par(0); return V(P.c.x, yi(8), P.c.z); }, 0, -120],
                ['شريط DNA؛ القواعد مكشوفة (غير مزدوجة)', GRY, () => { const P = par(0); return V(P.c1.x - SEP / 2, yi(3), P.c1.z); }, -150, 60],
                ['شريط DNA؛ القواعد مكشوفة (غير مزدوجة)', GRY, () => { const P = par(0); return V(P.c2.x + SEP / 2, yi(3), P.c2.z); }, 150, 60]] },
      { t: 'المرحلة الثانية: الالتصاق عند 60°C تقريبًا',
        p: 'ترتبط البادئات مع تتابع القواعد على كلا جانبَي DNA الجاري تضخيمه عن طريق تكوين روابط هيدروجينية. وتتطلب العملية وجود البادئات إذ لا يمكن أن يبدأ إنزيم DNA بوليميريز بتكوين DNA بدون وجود شريط يمكن البناء عليه. تتكوّن البادئات غالبًا من 20 زوجًا من القواعد تقريبًا، ذات تتابع مكمل لتتابع القواعد على كلا جانبَي جزء DNA الجاري نسخه. تحتوي البادئات على تتابع قواعد مختلف، حيث ترتبط إحداهما بالشريط «صعودًا» وترتبط الأخرى بالشريط «نزولًا». يتطلب الارتباط بالبادئات درجة حرارة <span class="ltr">60°C</span> تقريبًا.',
        n: 'للتوضيح رُسمت كل بادئة بأربع قواعد فقط؛ في الواقع تتكوّن البادئات غالبًا من 20 زوجًا من القواعد تقريبًا.',
        seq: [[{ T: 60, zoom: 1 }, 900], [{ '!fo': 1, zoom: 2.5 }, 900], [{ ann: 1 }, 2400], [{ zoom: 1 }, 600], [{ '!fo': 4, zoom: 1.3 }, 500]],
        pills: [['بادئة ترتبط بالشريط «صعودًا»', PNK, () => { const P = par(0); return V(P.c1.x + SEP / 2, yi(N - 2), P.c1.z); }, 160, -60],
                ['بادئة ترتبط بالشريط «نزولًا»', PNK, () => { const P = par(0); return V(P.c2.x - SEP / 2, yi(1), P.c2.z); }, 180, 70],
                ['روابط هيدروجينية بين البادئة والقالب', GRY, () => { const P = par(0); return V(P.c1.x, yi(N - 2), P.c1.z); }, -150, -110],
                ['تبريد إلى ' + T60 + ' تقريبًا', BLU, () => V(THX, yT(60) + 0.1, THZ), 0, -80]] },
      { t: 'المرحلة الثالثة: الإطالة عند 72°C تقريبًا',
        p: 'يستخدم إنزيم DNA بوليميريز بعد ذلك dNTPs لتكوين أشرطة جديدة من DNA مقابل تلك المكشوفة. ويتطلب ذلك درجة حرارة <span class="ltr">72°C</span> تقريبًا. ويتم الحصول على إنزيم DNA بوليميريز المستخدم في هذه العملية من الكائنات الحية الدقيقة التي تكيّفت للعيش في البيئات الحارة.',
        seq: [[{ T: 72, zoom: 1 }, 900], [{ pv: 1, '!fo': 2, zoom: 2.5 }, 900], [{ ext: 1 }, 3000], [{ zoom: 1 }, 600], [{ '!fo': 4, zoom: 1.3 }, 500]],
        pills: [['إنزيم DNA بوليميريز', TEAL, () => pol[0].position.clone(), 180, 60],
                ['إنزيم DNA بوليميريز', TEAL, () => pol[1].position.clone(), -170, -40],
                ['شريط جديد مبنيٌّ من dNTPs مقابل القالب المكشوف', GLD, () => { const P = par(0); return V(P.c1.x + SEP / 2, yi(6), P.c1.z); }, -200, 80],
                ['درجة حرارة ' + T72 + ' تقريبًا', ORG, () => V(THX, yT(72) + 0.1, THZ), 0, -80]] },
      { t: 'نهاية الدورة الأولى: جزيئان من DNA',
        p: 'تم نسخ جزء DNA والذي قد شكّل جزيئَين من DNA. تفاعل البوليميريز المتسلسل (PCR): عملية يتم فيها تضخيم أجزاء معيّنة من DNA آليًا باستخدام مراحل متناوبة من فصل عديد النيوكليوتيد (تمسخ DNA) وبناء DNA الذي يحفزه إنزيم DNA بوليميريز.',
        n: 'المنطقة الوحيدة في العيّنة المراد تضخيمها هي تلك التي بين البادئتين؛ للتوضيح رُسم هذا الجزء وحده دون بقيَّة العيّنة.',
        seq: [[{ pv: 0 }, 400], [{ split: 1 }, 1800], [{ '!cyc': 1, '!den': 0, '!ann': 0, '!ext': 0, '!split': 0 }, 10], [{ zoom: 1.3 }, 300]],
        pills: [['جزيء DNA (١): شريط أصلي وشريط جديد', GRY, () => { const c = lay(1, 0); return V(c.x, yi(N - 1) + 0.2, c.z); }, -40, -80],
                ['جزيء DNA (٢): شريط جديد وشريط أصلي', GRY, () => { const c = lay(1, 1); return V(c.x, yi(N - 1) + 0.2, c.z); }, 60, -80],
                ['شريط أصلي', GRY, () => { const c = lay(1, 0); return V(c.x - SEP / 2, yi(2), c.z); }, -130, 60],
                ['شريط جديد (يبدأ بالبادئة)', GLD, () => { const c = lay(1, 1); return V(c.x - SEP / 2, yi(6), c.z); }, -170, 90],
                ['بادئة', PNK, () => { const c = lay(1, 0); return V(c.x + SEP / 2, yi(N - 2), c.z); }, 130, 20]] },
      { t: 'الدورة الثانية: أربعة جزيئات',
        p: 'في نهاية الدورة الأولى، بعد أن يكون DNA قد تم نسخه، يسخن المزيج مرة أخرى للبدء بالدورة الثانية، والتي ينتج منها أربعة جزيئات من DNA مزدوج.',
        n: 'تُعرض الدورة هنا مسرَّعة: تسخين DNA يسبب تمسخه، والذي يبدأ دورة جديدة من النسخ متتبعًا المراحل 1 إلى 3.',
        seq: [[{ '!fo': 0, zoom: 1.1 }, 500], [{ T: 95 }, 500], [{ den: 1 }, 1100], [{ T: 60 }, 400], [{ ann: 1 }, 1200], [{ T: 72, pv: 1 }, 400], [{ ext: 1 }, 1600], [{ split: 1, pv: 0 }, 1100], [{ '!cyc': 2, '!den': 0, '!ann': 0, '!ext': 0, '!split': 0 }, 10], [{ zoom: 1 }, 300]],
        pills: [['أربعة جزيئات من DNA مزدوج', GRY, () => { const c = lay(2, 1); return V(c.x, yi(N - 1) + 0.3, c.z); }, -120, -90],
                ['شريطان أصليان فقط من العيِّنة', GRY, () => { const c = lay(2, 0); return V(c.x - SEP / 2, yi(2), c.z); }, -150, 70],
                ['تسخين ثم تبريد ثم إطالة', RED, () => V(THX, yT(72) + 0.1, THZ), 0, -80]] },
      { t: 'الدورة الثالثة: ثمانية جزيئات — يتكرَّر التضاعف',
        p: 'يمكنك أن ترى أنه من الناحية النظرية قد يستمر تكرار التفاعل للأبد، مكوِّنًا نسخًا أكثر وأكثر، من عدد ضئيل من جزيئات DNA الأصلية. يمكن استخدام جزيء DNA واحد لإنتاج مليارات النسخ المماثلة في غضون ساعات قليلة.',
        n: 'تكرار الدورة من 10 إلى 12 مرة ينسخ قطعة DNA عدة مرات. بعد 30 دورة في هذا الجهاز، سيتكون ملياري نسخة (2³⁰) من DNA الأصلي.',
        seq: [[{ T: 95 }, 500], [{ den: 1 }, 1100], [{ T: 60 }, 400], [{ ann: 1 }, 1200], [{ T: 72, pv: 1 }, 400], [{ ext: 1 }, 1600], [{ split: 1, pv: 0 }, 1100], [{ '!cyc': 3, '!den': 0, '!ann': 0, '!ext': 0, '!split': 0 }, 10], [{ zoom: 0.9 }, 600]],
        pills: [['ثمانية جزيئات بعد ثلاث دورات: ١ ← ٢ ← ٤ ← ٨', GRY, () => { const c = lay(3, 3); return V(c.x, yi(N - 1) + 0.3, c.z); }, -30, -90],
                ['شريط أصلي', GRY, () => { const c = lay(3, 0); return V(c.x - SEP / 2, yi(2), c.z); }, -130, 60],
                ['شريط أصلي', GRY, () => { const c = lay(3, 7); return V(c.x + SEP / 2, yi(2), c.z); }, 130, 60]] },
      { t: 'إنزيم Taq بوليميريز المستقر حراريًا',
        p: 'Taq بوليميريز هو أول إنزيم DNA بوليميريز مستقر حراريًا يستخدم في PCR. وقد استخلص من البكتيريا المحبة للحرارة <span class="ltr">Thermus aquaticus</span>، التي وجدت في الينابيع الحارة في منتزه يلوستون <span class="ltr">Yellowstone Park</span> في الولايات المتحدة الأمريكية. يمثل هذا الإنزيم قيمة كبيرة لـ PCR لسببَين: الأول لأنه لا يتحطم في مرحلة التمسخ، لذا يجب ألّا نستبدله أثناء كل دورة، والثاني، له درجة حرارة مثلى عالية، الأمر الذي يعني أن درجة الحرارة لمرحلة الإطالة يجب ألّا تنخفض إلى أقل من تلك في عملية الالتصاق، ما يزيد من الكفاءة إلى أقصى حد.',
        seq: [[{ zoom: 1 }, 400], [{ '!fo': 5, zoom: 2.2 }, 900], [{ T: 95 }, 900], [{ den: 1 }, 1400], [{ zoom: 1 }, 600], [{ '!fo': 0, zoom: 0.9 }, 300]],
        pills: [['Taq بوليميريز: لا يتحطم في مرحلة التمسخ', TEAL, () => freePol[0].position.clone(), 170, -50],
                ['تسخين إلى ' + T95 + ' تقريبًا: تبدأ دورة جديدة', RED, () => V(THX, yT(95) + 0.1, THZ), 0, -80],
                ['الأشرطة الثمانية عشر مفصولة، والإنزيم سليم', GRY, () => { const c = lay(3, 1); return V(c.x, yi(N - 1) + 0.3, c.z); }, -60, -90]] },
    ],
    setup(ctx) {
      ctxRef = ctx;
      // جهاز PCR (الكتلة الحراريَّة) والأنبوبة والمحلول
      block = ctx.mesh(new THREE.BoxGeometry(12, 1.3, 9.8), M(0x3B4252, { roughness: 0.6 }), V(TX, 0.35, TZ));
      ctx.mesh(new THREE.BoxGeometry(2.4, 0.08, 1.2), M(0x8FD3F4, { roughness: 0.3, emissive: 0x2a6f8f }), V(TX + 4.2, 1.02, TZ + 3.6));
      const mGlass = new THREE.MeshStandardMaterial({ color: 0xE6F2FA, transparent: true, opacity: 0.16, roughness: 0.08, metalness: 0.05, depthWrite: false, side: THREE.DoubleSide }); mGlass.color.convertSRGBToLinear();
      glass = ctx.mesh(new THREE.CylinderGeometry(4.95, 4.55, 8.4, 56, 1, true), mGlass, V(TX, 5.15, TZ)); glass.castShadow = false; glass.renderOrder = 3;
      const mLiq = new THREE.MeshStandardMaterial({ color: 0xBFE3F5, transparent: true, opacity: 0.34, roughness: 0.2, depthWrite: false }); mLiq.color.copy(colCold);
      liquid = ctx.mesh(new THREE.CylinderGeometry(4.5, 4.4, 6.8, 56), mLiq, V(TX, 4.35, TZ)); liquid.castShadow = false; liquid.renderOrder = 2;
      const mCap = new THREE.MeshStandardMaterial({ color: 0xE8EEF3, transparent: true, opacity: 0.38, roughness: 0.5, depthWrite: false }); mCap.color.convertSRGBToLinear();
      cap = ctx.mesh(new THREE.CylinderGeometry(5.15, 5.15, 0.35, 56), mCap, V(TX, 9.55, TZ)); cap.renderOrder = 4; cap.castShadow = false;
      ctx.mesh(new THREE.BoxGeometry(1.6, 0.3, 1.4), mCap, V(TX, 9.55, TZ - 5.6)).castShadow = false;
      // مقياس الحرارة
      ctx.mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.3, 24), M(0x3B4252), V(THX, -0.15, THZ));
      thBulb = ctx.mesh(new THREE.SphereGeometry(0.62, 24, 18), M(0xE4472E, { roughness: 0.35 }), V(THX, 0.55, THZ));
      thCol = ctx.mesh(new THREE.CylinderGeometry(1, 1, 1, 16), M(0xE4472E, { roughness: 0.35 }), V(THX, 1, THZ));
      const mTh = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.3, roughness: 0.1, depthWrite: false, side: THREE.DoubleSide }); mTh.color.convertSRGBToLinear();
      thGlass = ctx.mesh(new THREE.CylinderGeometry(0.34, 0.34, 7.9, 24, 1, true), mTh, V(THX, 4.5, THZ)); thGlass.castShadow = false; thGlass.renderOrder = 3;
      ctx.mesh(new THREE.SphereGeometry(0.34, 16, 12), mTh, V(THX, 8.45, THZ)).castShadow = false;
      [60, 72, 95].forEach(T => ctx.rod(V(THX - 0.5, yT(T), THZ), V(THX + 0.5, yT(T), THZ), 0.045, M(0x1F2937), ctx.scene));
      // المكوِّنات الحرَّة الطافية في المحلول: dNTPs (ثلاث مجموعات فوسفات + سكر + قاعدة)
      freeG = new THREE.Group(); ctx.scene.add(freeG);
      [['A', -3.6, 7.0, -3.2], ['G', -1.0, 7.3, -3.6], ['T', 1.6, 7.0, -3.0], ['C', 3.4, 7.3, -2.2], ['T', 4.1, 6.9, 0.6], ['G', -4.0, 7.2, -1.2], ['C', 3.9, 7.2, 2.6], ['A', -0.5, 7.4, -2.4], ['T', 2.3, 7.5, -3.8]].forEach(([b, x, y, z], i) => {
        const g = new THREE.Group();
        [0.3, 0.58, 0.86].forEach(dz => { const ph = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 9), M(0xF39C12)); ph.position.set(0, 0, dz); ph.castShadow = true; g.add(ph); });
        const su = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.12, 5), M(0xAEB9C7)); su.castShadow = true; g.add(su);
        const ba = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.42), matB[b]); ba.position.set(0, 0, -0.34); ba.castShadow = true; g.add(ba);
        g.position.set(TX + x, y, TZ + z); g.scale.setScalar(1.45); g.rotation.set(0.4 + i, i * 1.7, i * 0.5); freeG.add(g); free.push({ g, y, ph: i * 1.9 });
      });
      // بادئات حرَّة (شريط مفرد قصير)
      [[-3.4, 6.8, 2.6, 0.9], [-2.6, 7.2, -2.2, 0.4], [3.6, 7.4, -3.4, -0.5], [0.8, 7.5, -3.9, 2.2]].forEach(([x, y, z, ry]) => {
        const g = new THREE.Group();
        ctx.rod(V(0, 0, 0), V(0, RISE * (PL - 1) + 0.2, 0), 0.14, matPri, g);
        for (let q = 0; q < PL; q++) { const b = SEQ[q]; ctx.rod(V(0, 0.1 + q * RISE, 0), V(0.5, 0.1 + q * RISE, 0), 0.11, matB[b], g); }
        g.position.set(TX + x, y, TZ + z); g.rotation.set(0.4, ry, 0.9); ctx.scene.add(g); freePri.push(g);
      });
      // بوليميريز حرٌّ في المحلول + بوليميريزات العمل (اثنان لكل جزيء أب، حتى أربعة آباء)
      [[-3.2, 6.7, 3.0], [2.8, 7.3, -3.9], [4.3, 7.1, 1.6]].forEach(([x, y, z]) => { const b = ctx.blob(0x12A5A0, 0.55); b.position.set(TX + x, y, TZ + z); b.scale.set(0.62, 0.5, 0.62); b.userData.y = y; freePol.push(b); });
      for (let i = 0; i < 8; i++) pol.push(ctx.blob(0x12A5A0, 0.55));
      // لوحة العدَّاد: درجة الحرارة، الدورة والمرحلة، عدد الجزيئات
      hud = document.createElement('div'); hud.id = 'pcrHud';
      hud.style.cssText = 'position:absolute;left:26px;top:72px;min-width:300px;background:rgba(255,255,255,.96);border-radius:14px;padding:10px 18px 12px;box-shadow:0 3px 12px rgba(30,45,70,.16);font-size:21px;font-weight:800;color:#1F2937;line-height:1.55;border-right:7px solid #C8102E;direction:rtl;text-align:right;opacity:0;transition:opacity .4s';
      document.getElementById('stage').appendChild(hud);
    },
    rebuild(s, ctx) {
      S = s;
      const sep = S.den < 0.35 && S.cyc < 4;
      const g = grown(), dk = docked();
      const Mn = Math.min(nPar(), 8);
      for (let j = 0; j < Mn; j++) {
        const P = par(j);
        const xAo = P.c1.x - SEP / 2, zAo = P.c1.z, xBo = P.c2.x + SEP / 2, zBo = P.c2.z;
        const xBn = P.c1.x + SEP / 2, xAn = P.c2.x - SEP / 2;
        // أنابيب الشريطين القالبين (أصلي رمادي، أو جديد من دورة سابقة: بادئة ورديَّة + ذهبي)
        const tubeY = (x, z, i0, i1, mat) => ctx.tube(t => V(x, t, z), yi(i0) - 0.17, yi(i1) + 0.17, 0.16, mat);
        if (P.aOld) tubeY(xAo, zAo, 0, N - 1, matOld); else { tubeY(xAo, zAo, 0, PL - 1, matPri); tubeY(xAo, zAo, PL, N - 1, matNew); }
        if (P.bOld) tubeY(xBo, zBo, 0, N - 1, matOld); else { tubeY(xBo, zBo, 0, N - PL - 1, matNew); tubeY(xBo, zBo, N - PL, N - 1, matPri); }
        for (let i = 0; i < N; i++) {
          const b = SEQ[i], c = PAIR[b], nH = nHof(b), y = yi(i);
          if (sep) { ctx.pair(V(xAo, y, zAo), V(xBo, y, zBo), matB[b], matB[c], nH, true); continue; }
          // الشريط (أ) القالب: مزدوج مع الشريط (ب) الجديد (بادئة أو مبنيٌّ) وإلَّا مكشوف
          const bNewHere = dk && (i >= N - PL || (N - PL - 1 - i) < g);
          const aNewHere = dk && (i < PL || (i - PL) < g);
          if (bNewHere) ctx.pair(V(xAo, y, zAo), V(xBn, y, zAo), matB[b], matB[c], nH, true);
          else ctx.pair(V(xAo, y, zAo), V(xAo + SEP, y, zAo), matB[b], null, 0, false);
          if (aNewHere) ctx.pair(V(xBo, y, zBo), V(xAn, y, zBo), matB[c], matB[b], nH, true);
          else ctx.pair(V(xBo, y, zBo), V(xBo - SEP, y, zBo), matB[c], null, 0, false);
        }
        if (sep || S.ann <= 0.001) continue;
        // البادئة (ب) تقترب من أعلى الشريط (أ)، والبادئة (أ) من أسفل الشريط (ب)
        const fB = flyB(), fA = flyA();
        ctx.tube(t => V(xBn + fB.x, t, zAo + fB.z), yi(N - PL) - 0.17 + fB.y, yi(N - 1) + 0.17 + fB.y, 0.16, matPri);
        ctx.tube(t => V(xAn + fA.x, t, zBo + fA.z), yi(0) - 0.17 + fA.y, yi(PL - 1) + 0.17 + fA.y, 0.16, matPri);
        if (!dk) for (let q = 0; q < PL; q++) {
          const iB = N - PL + q, pB = V(xBn + fB.x, yi(iB) + fB.y, zAo + fB.z); ctx.pair(pB, pB.clone().add(V(-SEP, 0, 0)), matB[PAIR[SEQ[iB]]], null, 0, false);
          const pA = V(xAn + fA.x, yi(q) + fA.y, zBo + fA.z); ctx.pair(pA, pA.clone().add(V(SEP, 0, 0)), matB[SEQ[q]], null, 0, false);
        }
        // الشريط الجديد يمتدُّ من البادئة
        if (g > 0.25) {
          ctx.tube(t => V(xBn, t, zAo), yi(N - PL) - RISE * g - 0.05, yi(N - PL) + 0.05, 0.16, matNew);
          ctx.tube(t => V(xAn, t, zBo), yi(PL - 1) - 0.05, yi(PL - 1) + RISE * g + 0.05, 0.16, matNew);
        }
      }
    },
    place(s) {
      S = s;
      const T = S.T || 25, h = thermoH(T);
      thCol.scale.set(0.17, h, 0.17); thCol.position.set(THX, 0.55 + h / 2, THZ);
      liquid.material.color.copy(colCold).lerp(colHot, Math.min(1, Math.max(0, (T - 25) / 70)));
      const Mn = Math.min(nPar(), 4), vis = S.pv;
      for (let j = 0; j < 8; j++) {
        const o = pol[j], pj = j >> 1;
        if (pj >= Mn || vis < 0.02) { o.visible = false; continue; }
        const P = par(pj); o.visible = true; o.material.opacity = o.userData.op * vis;
        o.position.copy(polPos(P, j % 2 ? 'A' : 'B')); o.scale.set(0.62 * vis, 0.5 * vis, 0.62 * vis);
      }
      if (hud) {
        const K = S.cyc + (S.den > 0.001 || S.ann > 0.001 || S.ext > 0.001 || S.split > 0.001 ? 1 : 0);
        const ph = S.split > 0.001 ? 'نهاية الدورة' : S.ext > 0.001 ? 'الإطالة' : S.ann > 0.001 ? 'الالتصاق' : S.den > 0.001 ? 'التمسخ' : (S.cyc ? 'اكتملت' : 'قبل التشغيل');
        const n = 1 << (S.cyc + (S.split >= 0.5 ? 1 : 0));
        hud.style.opacity = S.hud > 0.5 ? 1 : 0;
        hud.innerHTML = `درجة الحرارة: <span class="ltr" style="color:#C8102E">${Math.round(T)} °C</span><br>` +
          (K ? `الدورة ${K}: ${ph}<br>` : `${ph}<br>`) +
          `جزيئات DNA: <span class="ltr" style="color:#0A7A3D">${n}</span>` + (S.cyc ? ` <span class="ltr" style="color:#6b7785;font-size:17px">= 2<sup>${S.cyc + (S.split >= 0.5 ? 1 : 0)}</sup></span>` : '');
      }
    },
    ends(s) {
      S = s;
      const e = [[V(THX + 0.95, yT(60), THZ), '60'], [V(THX + 0.95, yT(72), THZ), '72'], [V(THX + 0.95, yT(95), THZ), '95']];
      if (S.cyc === 0) {
        const P = par(0), xA = P.c1.x - SEP / 2, xB = P.c2.x + SEP / 2;
        e.push([V(xA, yi(N - 1) + 0.55, P.c1.z), '3′'], [V(xA, yi(0) - 0.55, P.c1.z), '5′'], [V(xB, yi(N - 1) + 0.55, P.c2.z), '5′'], [V(xB, yi(0) - 0.55, P.c2.z), '3′']);
        if (docked()) { e.push([V(P.c1.x + SEP / 2, yi(N - 1) + 0.55, P.c1.z), '5′']); e.push([V(P.c2.x - SEP / 2, yi(0) - 0.55, P.c2.z), '5′']); }
      }
      return e;
    },
    idle(t, s, ctx, tweening) {
      free.forEach(f => { f.g.position.y = f.y + Math.sin(t * 1.3 + f.ph) * 0.12; f.g.rotation.y += 0.008; });
      freePri.forEach((g, i) => { g.rotation.y += 0.004; g.position.y += Math.sin(t * 1.1 + i) * 0.0025; });
      freePol.forEach((b, i) => { b.position.y = b.userData.y + Math.sin(t * 1.0 + i * 2.1) * 0.1; const k = 1 + Math.sin(t * 2.2 + i) * 0.04; b.scale.set(0.62 * k, 0.5 * k, 0.62 * k); });
    },
  };
})();
