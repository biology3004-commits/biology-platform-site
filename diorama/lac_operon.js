/* ديوراما: أوبرون Lac — التحكُّم في التعبير الجيني — الدرس ٢-٦ (كتاب الطالب ص ٧٣–٧٥، الشكل ٢-١٠) */
(function () {
  const { V, sm, M, COLORS: COL, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const Y0 = 1.55, RD = 0.32;                                          // ارتفاع محور DNA ونصف قطر الأنبوب
  // مناطق DNA بترتيب الشكل ٢-١٠ (من اليسار إلى اليمين على المحور x)
  const REG = [
    ['flankL', -11.4, -9.8, 0xF8E1EC], ['pReg', -9.8, -8.0, 0xF5A623], ['reg', -8.0, -4.8, 0xE87AB0],
    ['pStr', -4.8, -2.4, 0xE8735A], ['op', -2.4, -0.8, 0xB24C8A], ['lacZ', -0.8, 3.0, 0xF3A9C9],
    ['lacY', 3.0, 6.6, 0xF3A9C9], ['lacA', 6.6, 9.8, 0xF3A9C9], ['flankR', 9.8, 11.4, 0xF8E1EC]];
  const RX = {}; REG.forEach(([k, a, b]) => { RX[k] = { a, b, c: (a + b) / 2 }; });
  const PX0 = RX.pStr.c, XEND = 10.4;                                  // مسار RNA بوليميريز على الجينات التركيبيَّة
  const RX0 = RX.pReg.c, REND = -4.3;                                  // مسار RNA بوليميريز على الجين المنظِّم
  const MS0 = RX.lacZ.a, MS1 = RX.lacA.b;                              // مدى mRNA الجينات التركيبيَّة
  const MR0 = RX.reg.a, MR1 = RX.reg.b;                                // مدى mRNA الجين المنظِّم
  const MEM_Z = -3.2;                                                  // موضع حدِّ البكتيريوم (الغشاء)
  const REP_BIRTH = V(-6.6, Y0 + 2.5, 3.3), REP_BOUND = V(RX.op.c, Y0 + 0.05, 0), REP_PARK = V(-2.6, Y0 + 3.2, -1.3);
  const BG = V(0.5, Y0 + 2.3, 2.9), EY = V(4.3, Y0 + 2.3, 2.9), EA = V(7.9, Y0 + 2.3, 2.9);   // مواضع الإنزيمات الثلاثة
  const BG_SITE = BG.clone().add(V(0.1, 0.6, 0.7));                     // موقع تحليل اللاكتوز على الإنزيم
  const matRNA = new THREE.MeshStandardMaterial({ color: COL.mrna, roughness: 0.4, transparent: true, opacity: 1 }); matRNA.color.convertSRGBToLinear();
  const matRNA_R = matRNA.clone();
  const matLac = M(0x2E86DE, { roughness: 0.35 }), matGlu = M(0x2E86DE, { roughness: 0.35 }), matGal = M(0x2E86DE, { roughness: 0.35 });
  const cBlue = new THREE.Color(0x2E86DE).convertSRGBToLinear(), cGlu = new THREE.Color(0x3DBB5C).convertSRGBToLinear(), cGal = new THREE.Color(0xF2B33D).convertSRGBToLinear();
  const matRep = M(0xE7A79C, { roughness: 0.5 });
  let S, pol, polR, repG, repSub = [], lacs = [], bgal, enzY, enzA, lastTween = false;
  const NL = 5;
  const O = [V(-7.0, 1.2, -4.6), V(-3.5, 2.0, -4.4), V(0.5, 1.5, -4.7), V(3.5, 2.4, -4.5), V(6.5, 1.0, -4.6)];        // خارج البكتيريوم
  const I = [V(-4.5, 1.7, -1.8), V(1.5, 2.5, -1.4), V(-1.0, 3.0, -2.2), V(4.0, 2.0, -1.0), V(7.5, 2.7, -1.9)];      // داخل البكتيريوم
  const lerp = (a, b, t) => a.clone().lerp(b, t);
  const clamp01 = t => Math.min(1, Math.max(0, t));
  const LTR = s => `<span class="ltr">${s}</span>`;
  const BETA = 'بيتا (β)-جلاكتوسيديز';

  // ---- مواضع الكائنات كدوالَّ في الحالة S ----
  const polPos = () => V(PX0 + (XEND - PX0) * S.px, Y0 + 2.7 - 1.55 * sm(S.pa) - 2.55 * sm(S.pb) + 2.4 * sm(S.pl), 0);
  const polRPos = () => V(RX0 + (REND - RX0) * S.rpx, Y0 + 2.7 - 2.55 * sm(S.rpd) + 2.4 * sm(S.rpl), 0);
  function repPos() {
    if (S.rr > 0) { const u = sm(S.rr); return lerp(REP_BOUND, REP_PARK, u).add(V(0, 0.9 * Math.sin(Math.PI * u), 0)); }
    const u = sm(S.rb); return lerp(REP_BIRTH, REP_BOUND, u).add(V(0, 1.3 * Math.sin(Math.PI * u), 0));
  }
  // وحدات المثبِّط الأربع: زوج علوي ثابت وزوج سفلي يكوِّن التجويف الذي يحتضن DNA؛ يُغلق التجويف مع shp
  function repSubs() {
    const s = sm(S.shp);
    return [V(-0.5, 0.85, 0), V(0.5, 0.85, 0), lerp(V(0, -0.05, 0.78), V(0, 0.38, 0.4), s), lerp(V(0, -0.05, -0.78), V(0, 0.38, -0.4), s)];
  }
  const repSite = () => repPos().add(V(0, 1.5, 0));                    // موقع ارتباط اللاكتوز (أعلى)
  const repCleft = () => repPos().add(V(0, -0.25, 0));                 // موقع ربط DNA (التجويف السفلي)
  function lacPos(i) {
    const e = sm(clamp01(S.lac * 1.5 - i * 0.12));
    let p = lerp(O[i], I[i], e).add(V(0, 0.6 * Math.sin(Math.PI * e), 0));
    if (i === 0 && S.lb > 0) p = p.lerp(repSite(), sm(S.lb));
    if (i === 1 && S.hy1 > 0) p = p.lerp(BG_SITE, sm(S.hy1));
    return p;
  }
  const gluPos = () => lacPos(1).add(V(1.5, 0.9, 0.9).multiplyScalar(sm(S.hy2)));
  const galPos = () => lacPos(1).add(V(-1.3, 1.1, 1.0).multiplyScalar(sm(S.hy2)));
  const enzPos = p => V(p.x, Y0 + 0.6 + (p.y - Y0 - 0.6) * sm(S.tr), p.z);
  // mRNA: ذيل يخرج من خلف الإنزيم (نحو الأمام والأعلى) ثم يستقرُّ موازياً لـ DNA
  const trail = (x, P) => { const d = Math.max(0, P - x); return V(x + 0.12 * d, Y0 + 0.55 + 1.1 * sm(d / 2.5) + 0.1 * d, 0.55 + 1.5 * sm(d / 2.5) + 0.1 * d); };
  const mS = x => lerp(trail(x, polPos().x), V(x - 0.4, Y0 + 0.6, 2.9), sm(S.rel));
  const mR = x => lerp(trail(x, polRPos().x), V(x - 0.2, Y0 + 2.2, 1.7), sm(S.rmu));
  const mSend = () => Math.min(MS1, polPos().x - 0.1), mRend = () => Math.min(MR1, polRPos().x - 0.1);

  window.DIORAMA = {
    id: 'lac_operon', title: 'أوبرون Lac: التحكُّم في التعبير الجيني', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الثانية: الوراثة — الدرس ٢-٦',
    source: 'النص من كتاب الطالب: ٢-٦ التحكم في التعبير الجيني — التحكم الجيني في بدائيات النواة (ص ٧٣–٧٥) والشكل ٢-١٠',
    legend: [['#F5A623', 'محفز لجين منظم'], ['#E87AB0', 'جين منظم'], ['#E8735A', 'محفز للجينات التركيبية'], ['#B24C8A', 'مشغل'], ['#F3A9C9', 'جينات تركيبية'], null,
             ['#D9B45A', 'RNA بوليميريز'], ['#E7A79C', 'بروتين المثبط Lac'], ['#2E86DE', 'لاكتوز', 'dot'], ['#E0407F', 'mRNA', 'tube'], null,
             ['#0E8C88', BETA], ['#8E9AAF', 'الإنزيمان الآخران'], ['#3DBB5C', 'جلوكوز', 'dot'], ['#F2B33D', 'جلاكتوز', 'dot']],
    camera: { VH: 20.5, center: [0, 0.9, 0] },
    base: { L: 24.5, W: 10, x: 0 },
    BASE: { fo: 0, rpv: 0, rpd: 0, rpx: 0, rpl: 0, rpf: 0, rmu: 0, rmf: 0, rep: 0, rb: 0, rr: 0, shp: 0, pv: 0, pa: 0, pb: 0, px: 0, pl: 0, pf: 0, rel: 0, lac: 0, lb: 0, tr: 0, hy1: 0, hy2: 0 },
    noGeom: ['fo', 'rpv', 'rpd', 'rpf', 'rmf', 'rep', 'rb', 'rr', 'shp', 'pv', 'pa', 'pb', 'pf', 'lac', 'lb', 'tr', 'hy1', 'hy2'],
    // نقطة التركيز: 0 المثبِّط، 1 RNA بوليميريز، 2 بيتا-جلاكتوسيديز، 3 بوليميريز الجين المنظِّم ثم مولد المثبِّط، 4 بين البوليميريز والمثبِّط
    focus(s) {
      S = s; const k = Math.round(S.fo || 0);
      if (k === 1) return polPos().add(V(0.6, -0.4, 0));
      if (k === 2) return BG_SITE.clone().add(V(0.2, 0.3, 0.2));
      if (k === 3) return lerp(polRPos(), REP_BIRTH, sm(S.rmu)).add(V(0, 0.2, 0.4));
      if (k === 4) return lerp(polPos(), repPos(), 0.5).add(V(0, -0.6, 0));
      return repPos().add(V(0, 0.5, 0));
    },
    STEPS: [
      { t: 'مكوِّنات أوبرون Lac',
        p: 'الجينات التركيبية والمناطق الأخرى من DNA المجاورة لها (المشغل Operator والمحفز Promoter) التي توجد بشكل عام في مجموعة تسمى أوبرون Operon. ويسمّى الأوبرون المسؤول عن إنتاج إنزيم اللاكتيز في البكتيريا أوبرون Lac (حيث Lac اختصار لـ Lactose). يتم التحكم في نسخ جميع جينات Lac التركيبية الثلاثة بواسطة المحفز نفسه، ويتم نسخها جميعًا في الوقت نفسه.',
        seq: [[{}, 0]],
        pills: [['جزيء من DNA البكتيريوم', GRY, () => V(-10.8, Y0, 0), -30, -75], ['محفز لجين منظم', ORG, () => V(RX.pReg.c, Y0 - RD, 0), 10, 85],
                ['جين منظم', PNK, () => V(RX.reg.c, Y0 + RD, 0), 0, -70], ['محفز للجينات التركيبية', RED, () => V(RX.pStr.c, Y0 - RD, 0), 20, 100],
                ['مشغل', PUR, () => V(RX.op.c, Y0 + RD, 0), -20, -70], ['جين ' + BETA + ' ' + LTR('lacZ'), PNK, () => V(RX.lacZ.c, Y0 - RD, 0), 40, 95],
                [LTR('lacY'), PNK, () => V(RX.lacY.c, Y0 + RD, 0), 0, -65], [LTR('lacA'), PNK, () => V(RX.lacA.c, Y0 - RD, 0), 30, 80],
                ['جينات تركيبية', PNK, () => V(RX.lacA.a, Y0 + RD, 0), 90, -120], ['أوبرون Lac: من المحفز إلى ' + LTR('lacA'), GRN, () => V(RX.lacZ.a - 1.0, Y0 + RD, 0), 90, -165]] },
      { t: 'عدم وجود اللاكتوز: الجين المنظم يشفر للمثبط',
        p: 'فيما يأتي تسلسل الأحداث عند عدم وجود لاكتوز في الوسط الذي تنمو فيه البكتيريوم. يشفر الجين المنظم لبروتين يسمّى المُثبط Repressor. يُقال عن الجين «معبر عنه» عندما يُنسخ إلى mRNA، ثم تتم ترجمة mRNA لإنتاج البروتين.',
        n: 'الترجمة مختصرة في العرض: يظهر البروتين المثبط مكان mRNA دون رسم الرايبوسوم.',
        seq: [[{ '!fo': 3, rpv: 1 }, 500], [{ zoom: 1.7 }, 700], [{ rpd: 1 }, 600], [{ rpx: 1 }, 2200], [{ rpl: 1 }, 600], [{ rmu: 1 }, 900], [{ rep: 1 }, 1100], [{ zoom: 1 }, 700]],
        pills: [['الجين المنظم', PNK, () => V(RX.reg.c, Y0 - RD, 0), 30, 90], ['RNA بوليميريز', GLD, () => polRPos().add(V(0, 0.9, 0)), 120, -60],
                ['البروتين المثبط Lac', RED, () => repPos().add(V(0, 1.6, 0)), -20, -80], ['mRNA الجين المنظم', PNK, () => mR((MR0 + MR1) / 2).add(V(0, 0.2, 0)), -150, 60]] },
      { t: 'المثبط يرتبط بمنطقة المشغل',
        p: 'يرتبط المُثبط بمنطقة المشغل، قريبًا من جين بيتا(β) - جلاكتوسيديز. للبروتين المُثبط موقعا ارتباط، حيث يمكن أن يرتبط البروتين المُثبط مع DNA عند موقع، ومع اللاكتوز عند موقع آخر.',
        seq: [[{ '!fo': 0, zoom: 2.3, rpf: 1, rmf: 1 }, 900], [{ rb: 1 }, 2200]],
        pills: [['المُثبط', RED, () => repPos().add(V(0.6, 1.0, 0)), 110, -70], ['موقع ربط DNA', GRY, () => repCleft().add(V(0, 0, 0.6)), -170, 20],
                ['موقع ارتباط اللاكتوز', BLU, () => repSite().add(V(0, 0.1, 0)), -60, -95], ['منطقة المشغل', PUR, () => V(RX.op.a + 0.3, Y0 - RD, 0), -60, 140],
                ['جين ' + BETA, PNK, () => V(RX.lacZ.a + 1.2, Y0 - RD, 0), 90, 110]] },
      { t: 'RNA بوليميريز لا يستطيع الارتباط بالمحفز',
        p: 'لأن المثبط مرتبط بمنطقة المشغل، فإن ذلك يمنع ارتباط RNA بوليميريز بمنطقة المحفز. نتيجة لذلك، لن تنسخ الجينات التركيبية الثلاثة.',
        seq: [[{ '!fo': 4, pv: 1 }, 600], [{ zoom: 1.8 }, 700], [{ pa: 1 }, 900], [{ pa: 0 }, 700], [{ pa: 0.75 }, 600], [{ pa: 0 }, 600], [{ zoom: 1 }, 800]],
        pills: [['RNA بوليميريز', GLD, () => polPos().add(V(0, 1.0, 0)), -40, -75], ['منطقة المحفز', RED, () => V(RX.pStr.c, Y0 - RD, 0), -110, 95],
                ['المثبط مرتبط بمنطقة المشغل', PUR, () => repPos().add(V(0.5, 0.9, 0)), 150, -60], ['لن تنسخ الجينات التركيبية الثلاثة', GRY, () => V(RX.lacY.c, Y0 + RD, 0), 40, -75]] },
      { t: 'وجود اللاكتوز: يرتبط بالمثبط فيتغير شكله وينفصل عن DNA',
        p: 'عندما يوجد اللاكتوز في الوسط الذي تنمو فيه البكتيريوم تحدث العمليات الآتية: تمتص البكتيريوم اللاكتوز. يرتبط اللاكتوز مع البروتين المُثبط، الأمر الذي يؤدي إلى تغيير شكله ومنعه من الارتباط مع DNA في موقع التشغيل. ويتغير شكل البروتين المثبط عندما يرتبط اللاكتوز بموقعه، لذلك يغلق موقع ربط DNA.',
        seq: [[{ lac: 1 }, 1800], [{ '!fo': 0, zoom: 2.3 }, 700], [{ lb: 1 }, 1000], [{ shp: 1, rr: 0.3 }, 1100], [{ rr: 1 }, 1100], [{ zoom: 1 }, 700]],
        pills: [['الوسط الذي تنمو فيه البكتيريوم', TEAL, () => V(-9.5, 0.2, -4.6), -40, -60], ['تمتص البكتيريوم اللاكتوز', BLU, () => lacPos(3).add(V(0, 0.3, 0)), 110, -60],
                ['لاكتوز مرتبط بالمثبط', BLU, () => lacPos(0).add(V(0, 0.3, 0)), 150, -50], ['يتغير شكل البروتين المثبط وينفصل عن DNA', RED, () => repPos().add(V(0, -0.3, 0.9)), -120, 90],
                ['منطقة المشغل', PUR, () => V(RX.op.c, Y0 - RD, 0), 60, 95]] },
      { t: 'RNA بوليميريز يرتبط بالمحفز وتُنسخ الجينات التركيبية الثلاثة',
        p: 'لم يعد النسخ مُثبطًا، الأمر الذي يؤدي إلى إنتاج mRNA من الجينات التركيبية الثلاثة. يتم تشغيل الجينات ونسخها في آن واحد. يرتبط اللاكتوز عند وجوده بالبروتين المثبط Lac والذي ينفصل عن DNA، بما يسمح لإنزيم RNA بوليميريز بالارتباط ونسخ جينات الأوبرون التركيبية.',
        seq: [[{ '!fo': 1, zoom: 1.8 }, 700], [{ pb: 1 }, 800], [{ zoom: 1.25 }, 500], [{ px: 1 }, 3200], [{ pl: 1 }, 600], [{ rel: 1 }, 900], [{ zoom: 1 }, 600]],
        pills: [['RNA بوليميريز', GLD, () => polPos().add(V(0, 1.0, 0)), 110, -60], ['منطقة المحفز', RED, () => V(RX.pStr.c, Y0 - RD, 0), -90, 95],
                ['عملية النسخ', GRY, () => V(RX.lacY.c, Y0 + RD, 0), 60, -80], ['mRNA من الجينات التركيبية الثلاثة', PNK, () => mS(RX.lacZ.c).add(V(0, 0.2, 0)), -150, 70]] },
      { t: 'إنتاج بيتا-جلاكتوسيديز والإنزيمين الآخرين',
        p: 'تتيح هذه الآلية للبكتيريوم إنتاج بيتا(β) - جلاكتوسيديز والإنزيمين الآخرين (اللذان يُشفر لهما من الجينين lacY و lacA) وبكميات متساوية فقط عندما يوجد اللاكتوز في الوسط المحيط. وهي بذلك تتجنب إهدار الطاقة والمواد. إنزيم بيتا(β) - جلاكتوسيديز هو إنزيم قابل للتحفيز Inducible enzyme، أي أنه يتم إنتاجه فقط عندما توجد مادته المتفاعلة.',
        n: 'الترجمة مختصرة في العرض: تظهر الإنزيمات الثلاثة فوق mRNA دون رسم الرايبوسومات.',
        seq: [[{ '!fo': 2, pf: 1 }, 600], [{ tr: 1 }, 1800]],
        pills: [[BETA + ' (من ' + LTR('lacZ') + ')', TEAL, () => enzPos(BG).add(V(0, 0.9, 0)), -60, -80], ['إنزيم (من ' + LTR('lacY') + ')', GRY, () => enzPos(EY).add(V(0, 0.7, 0)), 40, -80],
                ['إنزيم (من ' + LTR('lacA') + ')', GRY, () => enzPos(EA).add(V(0, 0.7, 0)), 120, -60], ['mRNA', PNK, () => mS(RX.lacY.a).add(V(0, -0.2, 0.3)), -60, 80]] },
      { t: 'تحليل اللاكتوز إلى جلوكوز وجلاكتوز',
        p: 'تستخدم بعض البكتيريا هذا الإنزيم لتحليل اللاكتوز في بيئة البكتيريوم إلى جلوكوز وجلاكتوز، حيث يمكن امتصاصهما واستخدامهما كمصدر للطاقة في الخلية. فيمكن الآن أن تمتص البكتيريوم اللاكتوز وتفككه.',
        seq: [[{ '!fo': 2, zoom: 2.2 }, 800], [{ hy1: 1 }, 1200], [{ hy2: 1 }, 1400], [{ zoom: 1.4 }, 800]],
        pills: [[BETA, TEAL, () => enzPos(BG).add(V(-0.4, -0.3, 0.5)), -110, 80], ['جلوكوز', GRN, () => gluPos().add(V(0, 0.25, 0)), 90, -55],
                ['جلاكتوز', GLD, () => galPos().add(V(0, 0.25, 0)), -90, -55]] },
    ],
    setup(ctx) {
      // DNA: أنبوب مستقيم بمناطق ملوَّنة + حلقات فاصلة بيضاء بين الجينات التركيبيَّة
      REG.forEach(([k, a, b, col]) => ctx.rod(V(a - 0.02, Y0, 0), V(b + 0.02, Y0, 0), RD, M(col, { roughness: 0.6 }), ctx.scene));
      [RX.lacZ.b, RX.lacY.b].forEach(x => ctx.rod(V(x - 0.05, Y0, 0), V(x + 0.05, Y0, 0), RD + 0.05, M(0xffffff, { roughness: 0.5 }), ctx.scene));
      [V(-11.4, Y0, 0), V(11.4, Y0, 0)].forEach(p => ctx.ball(p, RD, M(0xF8E1EC, { roughness: 0.6 }), ctx.scene));
      // حدُّ البكتيريوم: جدار شفَّاف منخفض يفصل الوسط الخارجي (خلف) عن داخل البكتيريوم
      const wallM = new THREE.MeshStandardMaterial({ color: 0x5FA8A0, transparent: true, opacity: 0.38, roughness: 0.3, depthWrite: false }); wallM.color.convertSRGBToLinear();
      const wall = ctx.mesh(new THREE.BoxGeometry(24, 2.2, 0.22), wallM, V(0, 0.8, MEM_Z)); wall.castShadow = false;
      // الإنزيمان: RNA بوليميريز (للجينات التركيبيَّة وللجين المنظِّم)
      pol = ctx.blob(0xD9B45A, 0.9); polR = ctx.blob(0xD9B45A, 0.9);
      // البروتين المثبِّط: أربع وحدات
      repG = new THREE.Group(); ctx.scene.add(repG);
      for (let i = 0; i < 4; i++) repSub.push(ctx.ball(V(0, 0, 0), 0.5, matRep, repG));
      // اللاكتوز: ثنائي سكَّر (كرتان ملتحمتان)
      for (let i = 0; i < NL; i++) {
        const g = new THREE.Group(); ctx.scene.add(g);
        const a = ctx.ball(V(-0.17, 0, 0), 0.22, i === 1 ? matGlu : matLac, g), b = ctx.ball(V(0.17, 0, 0), 0.22, i === 1 ? matGal : matLac, g);
        lacs.push({ g, a, b, ph: i * 1.7 });
      }
      // الإنزيمات الناتجة
      bgal = ctx.blob(0x0E8C88, 0.92); enzY = ctx.blob(0x8E9AAF, 0.92); enzA = ctx.blob(0x8E9AAF, 0.92);
    },
    rebuild(s, ctx) {
      S = s;
      if (S.rpx > 0.02 && mRend() > MR0 + 0.15) ctx.tube(mR, MR0, mRend(), 0.14, matRNA_R);
      if (S.px > 0.02 && mSend() > MS0 + 0.15) ctx.tube(mS, MS0, mSend(), 0.14, matRNA);
    },
    place(s) {
      S = s;
      // RNA بوليميريز
      const pv = sm(S.pv) * (1 - 0.95 * sm(S.pf));
      pol.visible = pv > 0.02; pol.material.opacity = 0.9 * Math.min(1, pv * 1.6); pol.scale.set(1.25, 0.9, 1.05).multiplyScalar(Math.max(0.001, pv)); pol.position.copy(polPos());
      const rv = sm(S.rpv) * (1 - 0.95 * sm(S.rpf));
      polR.visible = rv > 0.02; polR.material.opacity = 0.9 * Math.min(1, rv * 1.6); polR.scale.set(1.25, 0.9, 1.05).multiplyScalar(Math.max(0.001, rv)); polR.position.copy(polRPos());
      matRNA_R.opacity = 1 - sm(S.rmf);
      // المثبِّط
      repG.visible = S.rep > 0.02; repG.position.copy(repPos()); repG.scale.setScalar(Math.max(0.001, sm(S.rep)));
      repSubs().forEach((o, i) => repSub[i].position.copy(o));
      // اللاكتوز
      lacs.forEach((l, i) => {
        l.g.visible = S.lac > 0.01;
        const p = lacPos(i); l.g.position.copy(p); l.g.userData.y0 = p.y;
        l.g.rotation.y = i * 0.9;
        if (i === 1) {
          const h = sm(S.hy2);
          l.a.position.copy(gluPos().sub(p).add(V(-0.17 * (1 - h), 0, 0))); l.b.position.copy(galPos().sub(p).add(V(0.17 * (1 - h), 0, 0)));
          matGlu.color.copy(cBlue).lerp(cGlu, h); matGal.color.copy(cBlue).lerp(cGal, h);
          l.g.rotation.y = 0;
        }
      });
      // الإنزيمات الناتجة
      const tv = sm(S.tr);
      [[bgal, BG, 1.05, 0.8, 0.9], [enzY, EY, 0.8, 0.62, 0.7], [enzA, EA, 0.8, 0.62, 0.7]].forEach(([o, p, a, b, c]) => {
        o.visible = tv > 0.02; o.position.copy(enzPos(p)); o.scale.set(a, b, c).multiplyScalar(Math.max(0.001, tv));
      });
    },
    idle(t, s, ctx, tweening) {
      lacs.forEach((l, i) => { const free = i >= 2 || (i === 0 && S.lb < 0.01) || (i === 1 && S.hy1 < 0.01); if (l.g.visible && free) l.g.position.y = (l.g.userData.y0 || l.g.position.y) + Math.sin(t * 1.4 + l.ph) * 0.1; });
      if (!tweening) {
        const k = 1 + Math.sin(t * 2.2) * 0.03;
        if (pol.visible) pol.scale.set(1.25 * k, 0.9 * k, 1.05 * k).multiplyScalar(Math.max(0.001, sm(S.pv) * (1 - 0.95 * sm(S.pf))));
        if (polR.visible) polR.scale.set(1.25 * k, 0.9 * k, 1.05 * k).multiplyScalar(Math.max(0.001, sm(S.rpv) * (1 - 0.95 * sm(S.rpf))));
      }
    },
  };
})();
