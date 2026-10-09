/* ديوراما: الفصل الكهربائي الهلامي — الدرس ٣-٣ فصل وتضخيم DNA (كتاب الطالب ص ٩٨–١٠٠، الشكلان ٣-٧ و٣-٨) */
(function () {
  const { V, sm, M, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  // الخزان على طول المحور x: الآبار والقطب السالب عند x السالب، والقطب الموجب عند x الموجب؛ الأعمدة (الممرَّات) على المحور z
  const WX = -4.9, GY = 0.82;                        // موضع الآبار وسطح الهلام
  const LZ = j => -2.5 + j * 1.0;                     // موضع العمود j (0 = سلَّم DNA، 1–5 = الأشخاص)
  const LADDER = [1200, 1000, 800, 600, 400, 200];
  // قطع الأشخاص الخمسة بحسب الشكل ٣-٨ (لكل شخص قطعة أو قطعتان بين 400 و800؛ العمود 4 قطعة 600 بضعف الكمية)
  const LANES = [LADDER, [600, 400], [700, 500], [600], [600, 400], [750, 500]];
  const DARK = 3;                                     // العمود 4 (الفهرس 3) متماثل الأليلات
  const dist = len => 0.9 + 9.3 * Math.log(1200 / len) / Math.log(6);   // المسافة تتناسب عكسيّاً مع الطول (تبسيط بصري)
  const bandX = (len, mig) => WX + dist(len) * mig;
  const dyeX = mig => WX + 10.9 * mig;
  const PSX = -0.3, PSZ = -5.5;                       // مصدر الطاقة (حزمة البطاريات)
  let S, ctxRef;
  let buffer, gel, wellsDye = [], bands = [], dyes = [], pip, pipGroup, led, elecN, elecP, lamp;
  const colGel = new THREE.Color(0xE6F1EE).convertSRGBToLinear(), colStain = new THREE.Color(0x8E7CC3).convertSRGBToLinear();
  const matBand = () => { const m = new THREE.MeshStandardMaterial({ color: 0x1E3A8A, transparent: true, opacity: 0, roughness: 0.4 }); m.color.convertSRGBToLinear(); return m; };
  const BP = n => `<span class="ltr">${n}</span> زوج من القواعد`;

  window.DIORAMA = {
    id: 'gel_electrophoresis', title: 'الفصل الكهربائي الهلامي', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الثالثة: التقنية الجينية — الدرس ٣-٣ فصل وتضخيم DNA',
    source: 'النص من كتاب الطالب: ٣-٣ فصل وتضخيم DNA — الفصل الكهربائي الهلامي (ص ٩٨–١٠٠) والشكلان ٣-٧ و٣-٨',
    legend: [['#E6F1EE;border:1px solid #9aa7b4', 'هلام آجاروس'], ['#7FBDE8', 'محلول منظِّم'], ['#2B6CB0', 'صبغة تتبُّع', 'dot'], ['#1E3A8A', 'قطع DNA (تظهر بعد الصبغ)', 'tube'], null,
             ['#1F2937', 'قطب كهربائي (ألياف كربون)', 'tube'], ['#C8102E', 'سلك إلى مصدر الطاقة', 'tube'], ['#8E7CC3', 'صبغة الكشف', 'dot']],
    camera: { VH: 17.5, center: [0.2, 0.4, -0.2], elevation: 50, azimuth: 45 },
    base: { L: 20, W: 12.5, x: -0.3 },
    BASE: { fo: 0, buf: 0, pv: 0, pl: 1, dip: 0, w0: 0, w1: 0, w2: 0, w3: 0, w4: 0, w5: 0, wr: 0, pw: 0, mig: 0, st: 0, rn: 0 },
    noGeom: ['fo', 'buf', 'pv', 'pl', 'dip', 'w0', 'w1', 'w2', 'w3', 'w4', 'w5', 'pw', 'mig', 'st', 'rn'],
    // نقطة التركيز: 0 الخزان، 1 الآبار، 2 عمود السلَّم، 3 مصدر الطاقة، 4 جبهة صبغة التتبُّع، 5 العمود 4
    focus(s) {
      S = s; const k = Math.round(S.fo || 0);
      if (k === 1) return V(WX, 1.8, 0);
      if (k === 2) return V(bandX(600, S.mig), GY, LZ(0) + 0.6);
      if (k === 3) return V(PSX, 1.2, PSZ);
      if (k === 4) return V(dyeX(S.mig), GY, 0);
      if (k === 5) return V(bandX(600, S.mig), GY, LZ(DARK));
      return V(0.2, 0.5, 0);
    },
    STEPS: [
      { t: 'ما الفصل الكهربائي الهلامي؟',
        p: 'الفصل الكهربائي الهلامي <span class="ltr">Gel electrophoresis</span> تقنية تستخدم لفصل جزيئات مختلفة (الصورة ٣-٦). وهي تستخدم على نطاق واسع في تحليل DNA بفصل أجزاء من DNA. تتضمن هذه التقنية وضع خليط من الجزيئات في آبار <span class="ltr">Wells</span> تُحفر في هلام وتعرَّض لمجال كهربائي.',
        n: 'المسمَّيات من الشكل ٣-٧. في هذه الديوراما يُعرض الخزان والهلام مكبَّرين، والأعمدة ستَّة: الأوَّل لسلَّم DNA وخمسة لعيِّنات خمسة أشخاص كما في الشكل ٣-٨.',
        seq: [[{ fo: 0 }, 300]],
        pills: [['هلام آجاروس', TEAL, () => V(1.5, GY, 1.2), 40, -70],
                ['آبار تُحفر في الهلام', BLU, () => V(WX, GY, LZ(5)), 60, -120],
                ['القطب السالب (ألياف كربون)', GRY, () => V(-7.1, 0.5, 2.2), -150, 40],
                ['القطب الموجب', GRY, () => V(7.1, 0.5, 1.5), 130, 40],
                ['إلى مصدر الطاقة', RED, () => V(PSX, 1.7, PSZ), -150, 70]] },
      { t: 'الخطوة ١: الهلام والمحلول المنظِّم',
        p: 'بعد تحضير الهلام (من أجاروس <span class="ltr">Agarose</span> مثلًا)، يصبّ محلول منظم في الخزان بحيث يغطي الهلام، ليوفر pH ثابت.',
        seq: [[{ buf: 1 }, 2200]],
        pills: [['هلام من أجاروس', TEAL, () => V(2.0, GY, 0.5), 30, -70],
                ['محلول منظِّم يغطِّي الهلام: pH ثابت', BLU, () => V(-2.5, 1.15, 3.4), -60, 70]] },
      { t: 'الخطوة ٢: تحميل العيِّنات بالماصَّة الدقيقة',
        p: 'تستخدم ماصة دقيقة <span class="ltr">Micropipette</span> لنقل عيّنات DNA إلى جميع الآبار (الصورتان ٣-٦ و ٣-٧). تحتوي عيّنات DNA على صبغة تتبُّع <span class="ltr">Tracking dye</span>.',
        n: 'للتوضيح تُحمَّل عيِّنات الأشخاص الخمسة أوَّلاً (الأعمدة ٢–٦)، ثمَّ سلَّم DNA في العمود ١ في الخطوة التالية.',
        seq: [[{ '!fo': 1, zoom: 1.5 }, 700], [{ pv: 1, '!pl': 1 }, 400],
              [{ dip: 1 }, 380], [{ '!w1': 1 }, 10], [{ dip: 0 }, 300], [{ pl: 2 }, 320],
              [{ dip: 1 }, 380], [{ '!w2': 1 }, 10], [{ dip: 0 }, 300], [{ pl: 3 }, 320],
              [{ dip: 1 }, 380], [{ '!w3': 1 }, 10], [{ dip: 0 }, 300], [{ pl: 4 }, 320],
              [{ dip: 1 }, 380], [{ '!w4': 1 }, 10], [{ dip: 0 }, 300], [{ pl: 5 }, 320],
              [{ dip: 1 }, 380], [{ '!w5': 1 }, 10], [{ dip: 0 }, 300]],
        pills: [['ماصَّة دقيقة', GRY, () => pipGroup.position.clone().add(V(0, 2.2, 0)), 60, -70],
                ['عيِّنة DNA مع صبغة تتبُّع في البئر', BLU, () => V(WX, GY, LZ(1)), -150, 60]] },
      { t: 'الخطوة ٣: سلَّم DNA',
        p: 'غالبًا ما توضع عيّنة مرجعية بأطوال معروفة من قطع DNA في بئر على أحد جانبَي الهلام أو كلا الجانبَين، ويستخدم بمثابة «سلّم» DNA لتحديد أطوال قطع DNA في العيّنات الأخرى (الشكلان ٣-٧ و ٣-٨).',
        seq: [[{ pl: 0 }, 500], [{ dip: 1 }, 380], [{ '!w0': 1 }, 10], [{ dip: 0 }, 300], [{ pv: 0 }, 400], [{ zoom: 1 }, 700]],
        pills: [['عيِّنة مرجعيَّة بأطوال معروفة: «سلَّم» DNA (العمود ١)', GLD, () => V(WX, GY, LZ(0)), -120, -80]] },
      { t: 'الخطوة ٤: توصيل الأقطاب',
        p: 'توصل حزمة بطاريات بأقطاب كهربائية. يكون القطب السالب في الطرف نفسه للآبار المحملة بـ DNA (الشكل ٣-٧).',
        seq: [[{ '!fo': 3, zoom: 1.4 }, 700], [{ wr: 1 }, 1600], [{ pw: 1 }, 500], [{ '!fo': 0, zoom: 1 }, 700]],
        pills: [['حزمة بطاريات (مصدر الطاقة)', RED, () => V(PSX, 1.7, PSZ), -150, 70],
                ['القطب السالب (−) في طرف الآبار', GRY, () => V(-7.1, 0.5, 2.2), -150, 40],
                ['القطب الموجب (+)', GRY, () => V(7.1, 0.5, 1.5), 130, 40]] },
      { t: 'الشُحنة: قطع DNA تتحرَّك نحو القطب الموجب',
        p: 'الشُحنة – إن مجموعة الفوسفات في DNA ذات شحنة سالبة، لذا ستتحرك قطع DNA باتجاه القطب الموجب (+).',
        n: 'قطع DNA لا تُرى أثناء التشغيل؛ رُسمت هنا باهتة للتوضيح، ولا تظهر فعلاً إلَّا بعد الصبغ (الخطوة ٦).',
        seq: [[{ '!fo': 1, zoom: 1.5 }, 600], [{ mig: 0.3 }, 2600]],
        pills: [['DNA سالب الشحنة يتحرَّك نحو (+)', BLU, () => V(bandX(600, S.mig), GY, LZ(3)), 40, -90],
                ['القطب الموجب (+)', GRY, () => V(7.1, 0.5, 1.5), 130, 40]] },
      { t: 'الحجم: الأقصر يقطع مسافة أطول',
        p: 'الحجم – تتحرك الجزيئات الأصغر أو الأقصر عبر الهلام بشكل أسرع من الجزيئات الأكبر أو الأطول، وتتناسب المسافة التي تقطعها قطعة DNA عكسيًا مع طولها، فكلما كانت أقصر تقطع مسافة أطول عبر الهلام.',
        seq: [[{ '!fo': 2, zoom: 1.6 }, 700], [{ mig: 1 }, 4200], [{ zoom: 1.2 }, 700]],
        pills: [['أقصر قطعة (200): الأسرع، تقطع أطول مسافة', GRN, () => V(bandX(200, S.mig), GY, LZ(0)), 120, 60],
                ['أطول قطعة (1200): الأبطأ، تقطع أقصر مسافة', RED, () => V(bandX(1200, S.mig), GY, LZ(0)), -140, -80],
                ['الآبار (نقطة البداية)', GRY, () => V(WX, GY, LZ(5)), -40, -90]] },
      { t: 'الخطوة ٥: صبغة التتبُّع',
        p: 'تُظهر صبغة التتبُّع المسافة التي تحركتها المادة في العينات عبر الهلام.',
        n: 'من الشكل ٣-٧: ينفصل DNA إلى قطع مختلفة الأحجام مع المحافظة على فرق الجهد (يعتمد الزمن على فرق الجهد المزوَّد به).',
        seq: [[{ '!fo': 4, zoom: 1.5 }, 900], [{ zoom: 1 }, 900]],
        pills: [['صبغة التتبُّع تتقدَّم أمام القطع وتُظهر مسافة الحركة', BLU, () => V(dyeX(S.mig), GY, LZ(1)), -60, -130],
                ['قطع DNA (باهتة: لم تُصبغ بعد)', GRY, () => V(bandX(600, S.mig), GY, LZ(4)), 170, 80]] },
      { t: 'الخطوة ٦: الصبغ والكشف عن القطع',
        p: 'يسكب المحلول المنظم خارجًا، وتضاف صبغة مناسبة إلى الهلام. تشطف الصبغة لتكشف عن قطع عبر الهلام التي تمثل مواقع قطع DNA. يمكن تحديد أطوال قطع DNA بمقارنتها مع «سلّم» DNA على جانب الهلام.',
        seq: [[{ pw: 0 }, 400], [{ buf: 0 }, 1500], [{ st: 1 }, 1600], [{ rn: 1 }, 1600], [{ '!fo': 2, zoom: 1.5 }, 900]],
        pills: [['يُسكب المحلول المنظِّم خارجاً', BLU, () => V(-2.5, 0.9, 3.4), -60, 70],
                ['تُضاف صبغة ثمَّ تُشطف: تكشف مواقع قطع DNA', PUR, () => V(bandX(600, 1), GY, LZ(1)), 100, -90],
                ['«سلَّم» DNA على جانب الهلام', GLD, () => V(bandX(1000, 1), GY, LZ(0)), -120, 60]] },
      { t: 'قراءة الهلام: مقارنة القطع مع سلَّم DNA (الشكل ٣-٨)',
        p: 'رسم تخطيطي لهلام مصبوغ يبين نواتج PCR لخمسة أشخاص، لكل شخص قطعة أو قطعتان تتراوح أطوالها بين 400 و 800 زوج من القواعد. DNA في العمود 4 مصبوغ بلون داكن لأن الشخص متماثل الأليلات مع القطعة ذات 600 زوج من القواعد، لذلك يوجد ضعف كمية DNA في القطع مقارنة بتلك التي في الأعمدة 2، 3، 5، 6.',
        n: 'أرقام الأعمدة ١–٦ وأطوال السلَّم (1200 إلى 200 زوج من القواعد) من الشكل ٣-٨.',
        seq: [[{ '!fo': 5, zoom: 1.7 }, 900], [{ '!fo': 2, zoom: 1.35 }, 900]],
        pills: [[BP(1200), GLD, () => V(bandX(1200, 1), GY, LZ(0)), -110, -70],
                [BP(800), GLD, () => V(bandX(800, 1), GY, LZ(0)), -110, 40],
                [BP(600), GLD, () => V(bandX(600, 1), GY, LZ(0)), -110, 40],
                [BP(400), GLD, () => V(bandX(400, 1), GY, LZ(0)), -100, 40],
                [BP(200), GLD, () => V(bandX(200, 1), GY, LZ(0)), 130, -40],
                ['العمود 4: قطعة 600 داكنة (ضعف كميَّة DNA)', PUR, () => V(bandX(600, 1), GY, LZ(DARK)), 150, -80],
                ['قطعة بين 400 و800 (العمود 2)', PNK, () => V(bandX(400, 1), GY, LZ(1)), -170, 90]] },
    ],
    setup(ctx) {
      ctxRef = ctx;
      // الخزان: أرضيَّة وجدران شفَّافة
      ctx.mesh(new THREE.BoxGeometry(15.2, 0.25, 8.8), M(0x3B4252, { roughness: 0.6 }), V(0, 0.12, 0));
      const mGlass = new THREE.MeshStandardMaterial({ color: 0xE6F2FA, transparent: true, opacity: 0.18, roughness: 0.08, depthWrite: false, side: THREE.DoubleSide }); mGlass.color.convertSRGBToLinear();
      [[0, -4.4, 15.2, 0.12], [0, 4.4, 15.2, 0.12], [-7.6, 0, 0.12, 8.8], [7.6, 0, 0.12, 8.8]].forEach(([x, z, lx, lz]) => {
        const w = ctx.mesh(new THREE.BoxGeometry(lx, 2.0, lz), mGlass, V(x, 1.2, z)); w.castShadow = false; w.renderOrder = 5;
      });
      // الهلام والآبار
      const mGel = new THREE.MeshStandardMaterial({ color: 0xE6F1EE, transparent: true, opacity: 0.8, roughness: 0.35 }); mGel.color.copy(colGel);
      gel = ctx.mesh(new THREE.BoxGeometry(12.4, 0.57, 6.4), mGel, V(0.2, 0.25 + 0.285, 0)); gel.renderOrder = 1;
      for (let j = 0; j < 6; j++) {
        ctx.mesh(new THREE.BoxGeometry(0.5, 0.4, 0.66), M(0x9FB6BE, { roughness: 0.6 }), V(WX, GY - 0.19, LZ(j))).castShadow = false;
        const mD = new THREE.MeshStandardMaterial({ color: 0x2B6CB0, transparent: true, opacity: 0, roughness: 0.4 }); mD.color.convertSRGBToLinear();
        const d = ctx.mesh(new THREE.BoxGeometry(0.42, 0.16, 0.58), mD, V(WX, GY - 0.02, LZ(j))); d.castShadow = false; wellsDye.push(d);
        const f = ctx.mesh(new THREE.BoxGeometry(0.42, 0.14, 0.58), mD.clone(), V(WX, GY, LZ(j))); f.castShadow = false; dyes.push(f);
        bands.push(LANES[j].map(len => { const b = ctx.mesh(new THREE.BoxGeometry(0.3, 0.13, 0.7), matBand(), V(WX, GY, LZ(j))); b.castShadow = false; b.userData.len = len; return b; }));
      }
      // المحلول المنظِّم
      const mBuf = new THREE.MeshStandardMaterial({ color: 0x7FBDE8, transparent: true, opacity: 0.5, roughness: 0.2, depthWrite: false }); mBuf.color.convertSRGBToLinear();
      buffer = ctx.mesh(new THREE.BoxGeometry(14.9, 1.0, 8.5), mBuf, V(0, 0.75, 0)); buffer.castShadow = false; buffer.renderOrder = 3; buffer.scale.y = 0.001;
      // القطبان (ألياف كربون) ومصدر الطاقة
      const mC = M(0x1F2937, { roughness: 0.5 });
      elecN = ctx.rod(V(-7.1, 0.5, -4.1), V(-7.1, 0.5, 4.1), 0.14, mC, ctx.scene);
      elecP = ctx.rod(V(7.1, 0.5, -4.1), V(7.1, 0.5, 4.1), 0.14, mC, ctx.scene);
      ctx.mesh(new THREE.BoxGeometry(3.8, 1.5, 2.0), M(0x44546A, { roughness: 0.55 }), V(PSX, 0.75, PSZ));
      ctx.mesh(new THREE.BoxGeometry(2.2, 0.08, 0.8), M(0x8FD3F4, { roughness: 0.3, emissive: 0x2a6f8f }), V(PSX, 1.55, PSZ + 0.2));
      led = ctx.mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshStandardMaterial({ color: 0x334155, emissive: 0x000000, roughness: 0.3 }), V(PSX + 1.3, 1.6, PSZ - 0.4));
      lamp = new THREE.PointLight(0x22c55e, 0, 6); lamp.position.set(PSX + 1.3, 2.2, PSZ - 0.4); ctx.scene.add(lamp);
      [[-1.3, 'red'], [1.3, 'blk']].forEach(([dx]) => ctx.mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.2, 16), M(0x111827), V(PSX + dx, 1.6, PSZ - 0.4)));
      // الماصَّة الدقيقة (مجموعة تتحرَّك)
      pipGroup = new THREE.Group(); ctx.scene.add(pipGroup);
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 3.0, 20), M(0xF3F4F6, { roughness: 0.4 })); body.position.y = 2.6; body.castShadow = true; pipGroup.add(body);
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.9, 20), M(0x2563EB, { roughness: 0.5 })); grip.position.y = 3.3; grip.castShadow = true; pipGroup.add(grip);
      const plunger = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.9, 12), M(0x9CA3AF)); plunger.position.y = 4.5; pipGroup.add(plunger);
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 16), M(0x2563EB)); knob.position.y = 5.0; pipGroup.add(knob);
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.2, 1.3, 14), M(0xFACC15, { roughness: 0.4 })); tip.position.y = 0.45; tip.castShadow = true; pipGroup.add(tip);
      pipGroup.position.set(WX, 2.0, LZ(1)); pipGroup.scale.setScalar(0.001);
    },
    rebuild(s, ctx) {
      S = s;
      // السلكان ينموان من القطبين إلى مصدر الطاقة بحسب wr
      const f = sm(S.wr); if (f < 0.01) return;
      const wire = (pts, col) => {
        const curve = new THREE.CatmullRomCurve3(pts), n = Math.max(2, Math.round(40 * f)), out = [];
        for (let k = 0; k <= n; k++) out.push(curve.getPoint(f * k / n));
        ctx.tubePts(out, 0.09, M(col, { roughness: 0.5 }));
      };
      wire([V(-7.1, 0.5, -4.1), V(-7.1, 2.4, -4.6), V(-4.5, 2.6, -5.6), V(PSX - 1.3, 1.9, PSZ - 0.4)], 0x1F2937);
      wire([V(7.1, 0.5, -4.1), V(7.1, 2.4, -4.6), V(4.2, 2.7, -5.9), V(PSX + 1.3, 1.9, PSZ - 0.4)], 0xC8102E);
    },
    place(s) {
      S = s;
      const buf = sm(S.buf); buffer.scale.y = Math.max(0.001, buf); buffer.position.y = 0.25 + 0.5 * buf;
      // الماصَّة
      const sc = Math.max(0.001, sm(S.pv)); pipGroup.scale.setScalar(sc);
      pipGroup.position.set(WX, 2.0 + 1.3 * (1 - sm(S.dip)), LZ(S.pl));
      // الهلام: يتلوَّن بالصبغة ثمَّ يُشطف
      const tint = sm(S.st) * (1 - sm(S.rn)); gel.material.color.copy(colGel).lerp(colStain, tint * 0.8);
      // الآبار والقطع وصبغة التتبُّع
      const mig = sm(S.mig), stain = sm(S.st), rinse = sm(S.rn);
      for (let j = 0; j < 6; j++) {
        const w = S['w' + j] || 0;
        wellsDye[j].material.opacity = w * (mig > 0.02 ? Math.max(0, 1 - mig * 6) : 1) * 0.95;
        dyes[j].material.opacity = w * (mig > 0.02 ? 0.95 : 0) * (1 - rinse) * (1 - 0.4 * sm(S.buf) * 0);
        dyes[j].position.x = dyeX(mig);
        for (const b of bands[j]) {
          const show = w > 0 && mig > 0.02;
          const dark = j === DARK ? 1 : 0.72;
          b.material.opacity = show ? (0.2 + 0.15 * stain + 0.65 * rinse) * dark : 0;
          b.scale.y = j === DARK ? 1.5 : 1;
          b.position.x = bandX(b.userData.len, mig);
        }
      }
      // مصدر الطاقة والأقطاب
      const pw = sm(S.pw);
      led.material.emissive.setHex(0x22c55e).multiplyScalar(pw); led.material.color.setHex(pw > 0.5 ? 0x4ade80 : 0x334155);
      lamp.intensity = 1.2 * pw;
    },
    ends(s) {
      S = s;
      const e = [];
      for (let j = 0; j < 6; j++) e.push([V(WX - 1.1, GY + 0.15, LZ(j)), String(j + 1)]);
      if (S.pw > 0.5) { e.push([V(-7.1, 1.5, 4.5), '−']); e.push([V(7.1, 1.5, 4.5), '+']); }
      return e;
    },
    idle(t, s) {
      if (led && s.pw > 0.5) { const k = 0.85 + 0.15 * Math.sin(t * 5); led.scale.setScalar(k); }
    },
  };
})();
