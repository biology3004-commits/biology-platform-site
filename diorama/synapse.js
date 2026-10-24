/* ديوراما: التشابك الكوليني — الدرس ٥-٢ التواصل العصبي (كتاب الطالب ص ١٨٤–١٨٧، الأشكال ٥-١٩ و٥-٢٠ و٥-٢١) */
(function () {
  const { V, sm, M, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const PRE = 2.8, POST = 1.2;                                        // قاع الزرِّ التشابكي (غشاء قبل تشابكي) / سطح الغشاء بعد التشابكي
  const BX = 0.5, BR = 3.2;                                           // مركز الزرِّ التشابكي (x) ونصف قطره
  const AX_Y = PRE + 1.8, AX_Z = -0.2, AX_X0 = -7.6, AX_X1 = -2.0;          // المحور الأسطواني
  const rnd = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
  const ACH = '<span class="ltr">(ACh)</span>', NA = '<span class="ltr">Na⁺</span>';

  // الحويصلات: ثلاث متحرِّكة (تندمج) + سبع ثابتة
  const HOME = [V(-1.2, PRE + 1.5, 1.3), V(0.6, PRE + 1.8, 1.6), V(2.2, PRE + 1.3, 1.0)];
  const DOCK = [V(-1.2, PRE + 0.42, 2.3), V(0.3, PRE + 0.42, 2.7), V(1.8, PRE + 0.42, 2.2)];
  const STAT = [V(-1.6, PRE + 1.1, -0.6), V(-0.4, PRE + 2.0, 0.3), V(0.9, PRE + 0.8, -1.4), V(1.9, PRE + 1.9, 0.2), V(-0.9, PRE + 0.7, 0.6), V(2.4, PRE + 1.0, -0.4), V(0.2, PRE + 2.6, -0.5)];
  const MITO = [[V(-1.0, PRE + 1.9, -1.2), 0.3], [V(1.4, PRE + 2.3, -0.9), -0.5]];
  const RX = [-1.5, -0.2, 1.1, 2.4], RZ = 2.6;                          // أربعة مستقبلات على الغشاء بعد التشابكي
  const CH = [V(-1.9, PRE, 1.9), V(2.9, PRE, 1.9)];                     // قناتا كالسيوم
  const EZ = [V(-3.3, POST + 0.3, 2.6), V(4.1, POST + 0.3, 2.6)];       // إنزيم الأستيل كولين إستريز (على سطح الغشاء بعد التشابكي)
  const REC = V(0.3, PRE + 1.1, 0.2);                                         // موضع إعادة تكوين (ACh) داخل الزرِّ
  const NACH = 18, NNA = 12, NCA = 8, NCOA = 6;
  const DA = V(-0.34, 0.14, 0.26), DC = V(0.34, 0.16, -0.26);          // انفصال الأسيتات / الكولين عند الإنزيم

  const matACh = M(0x2FA866, { roughness: 0.35 }), matChol = M(0x4F7FE0, { roughness: 0.35 }), matAcet = M(0x9AA7B4), matCoA = M(0xE0407F);
  const matCa = M(0xF08C2E, { roughness: 0.3 }), matNa = M(0x8E5BD9, { roughness: 0.3 });
  const matRec = M(0xE8B923), matRecOpen = M(0xF5D45A, { roughness: 0.3 }), matChan = M(0x0E8C88), matChanOpen = M(0x2FBFB8, { roughness: 0.3 });
  const matMito = M(0x7FB069), matVesACh = M(0x2FA866);
  let S, dome, wall, preMem, postMem, postBody, apRing, apBand, movers = [], recs = [], chans = [], enz = [], newVes, ctxRef;
  const C_PRE0 = new THREE.Color(0xA9CFEE).convertSRGBToLinear(), C_PRE1 = new THREE.Color(0xF2B27A).convertSRGBToLinear();
  const C_PM0 = new THREE.Color(0x6FA6D8).convertSRGBToLinear(), C_PM1 = new THREE.Color(0xF2A65A).convertSRGBToLinear();
  const C_PB0 = new THREE.Color(0xBFD9F0).convertSRGBToLinear(), C_PB1 = new THREE.Color(0xF7C9A0).convertSRGBToLinear();

  // ---- مواضع مشتقَّة من الحالة ----
  const OFF = Array.from({ length: NACH }, (_, i) => V(rnd(i, 1) - 0.5, rnd(i, 2) - 0.5, rnd(i, 3) - 0.5).normalize());
  const moverPos = v => HOME[v].clone().lerp(DOCK[v], sm(S.vm)).add(V(0, -0.42 * sm(S.vf) + 0.08 * sm(S.vf), 0));
  const ringR = () => 0.27 + 0.13 * sm(S.open);
  const recC = k => V(RX[k], POST, RZ);
  const ang = m => m * 2 * Math.PI / 5 + Math.PI / 2 + 0.3;
  const site = (k, s) => { const a = ang(s ? 2 : 0), r = ringR() + 0.14; return recC(k).add(V(r * Math.cos(a), 0.62, r * Math.sin(a))); };
  const SCAT = Array.from({ length: NACH - 8 }, (_, j) => V(-2.4 + 5.6 * rnd(j, 7), POST + 0.4 + 0.9 * rnd(j, 8), 1.6 + 1.5 * rnd(j, 9)));
  const target = i => i < 8 ? site(i >> 1, i & 1).add(V(0, 0.35, 0)) : SCAT[i - 8];
  const enzOf = i => target(i).x < 0.6 ? 0 : 1;
  const enzPt = i => { const a = rnd(i, 11) * Math.PI * 2, r = 0.42; return EZ[enzOf(i)].clone().add(V(r * Math.cos(a), 0.18 + 0.22 * rnd(i, 12), r * Math.sin(a))); };
  const retPt = i => REC.clone().add(V((rnd(i, 13) - 0.5) * 1.4, (rnd(i, 14) - 0.5) * 0.9, (rnd(i, 15) - 0.5) * 1.2));
  const nvPt = i => REC.clone().add(OFF[i].clone().multiplyScalar(0.26));
  function achPos(i) {                                               // موضع جزيء (ACh) رقم i حتى وصوله إلى الإنزيم
    const v = (i / 6) | 0;
    let p = moverPos(v).add(OFF[i].clone().multiplyScalar(0.26 * (1 - 0.6 * sm(S.vf))));
    if (S.rel > 0) p.lerp(DOCK[v].clone().add(V(OFF[i].x * 0.6, -0.42 - 0.3 * rnd(i, 4), OFF[i].z * 0.6)), sm(S.rel));
    if (S.dif > 0) { const t = sm(S.dif); p.lerp(target(i), t); p.y += 0.25 * Math.sin(Math.PI * t) * (rnd(i, 5) - 0.5); }
    if (S.bind > 0 && i < 8) p.lerp(site(i >> 1, i & 1), sm(S.bind));
    if (S.enz > 0) { const t = sm(S.enz); p.lerp(enzPt(i), t); p.y += 0.35 * Math.sin(Math.PI * t); }
    return p;
  }
  function caPos(j) {
    const c = j >> 2, k = j & 3, ch = CH[c];
    const O = ch.clone().add(V(0.6 * Math.cos(k * 1.7 + c), -0.45 - 0.2 * k, 0.6 * Math.sin(k * 1.7 + c)));
    const I = ch.clone().add(V(0.55 * Math.cos(k * 2.1 + 1), 0.75 + 0.28 * k, 0.55 * Math.sin(k * 2.1 + 1)));
    const t = sm(S.cai) * (1 - 0.18 * k) ;
    if (t < 0.5) return O.lerp(ch.clone().add(V(0, 0.05, 0)), t * 2);
    return ch.clone().add(V(0, 0.05, 0)).lerp(I, (t - 0.5) * 2);
  }
  function naPos(j) {
    if (j >= 8) return V(-2.6 + 6.0 * rnd(j, 21), POST + 0.35 + 0.9 * rnd(j, 22), 1.5 + 1.7 * rnd(j, 23));
    const k = j >> 1, s = j & 1, c = recC(k), sg = s ? 1 : -1;
    const A = c.clone().add(V(0.32 * sg, 0.95 + 0.18 * s, -0.22 * sg)), B = c.clone().add(V(0, 0.6, 0)), D = c.clone().add(V(0, -0.25, 0)), E = c.clone().add(V(0.5 * sg, -0.72, 0.35 * sg));
    const t = sm(S.na) * (1 - 0.15 * s);
    if (t < 0.3) return A.lerp(B, t / 0.3);
    if (t < 0.65) return B.lerp(D, (t - 0.3) / 0.35);
    return D.lerp(E, (t - 0.65) / 0.35);
  }
  const apX = () => AX_X0 + 0.9 + (AX_X1 - AX_X0 - 1.4) * S.ap;

  window.DIORAMA = {
    id: 'synapse', title: 'التشابك الكوليني', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الخامسة: التحكم والتنسيق — ٥-٢ التواصل العصبي',
    source: 'النص من كتاب الطالب: ٥-٢ التواصل العصبي — التشابكات العصبية (ص ١٨٤–١٨٧) والأشكال ٥-١٩ و٥-٢٠ و٥-٢١',
    legend: [['#2FA866', 'الأستيل كولين (ACh)', 'dot'], ['#F08C2E', 'أيونات الكالسيوم', 'dot'], ['#8E5BD9', 'أيونات الصوديوم', 'dot'], ['#4F7FE0', 'الكولين', 'dot'], ['#9AA7B4', 'الأسيتات', 'dot'], ['#E0407F', 'الأستيل مرافق الإنزيم (A)', 'dot'], null,
             ['#0E8C88', 'قناة كالسيوم'], ['#E8B923', 'بروتين مستقبل (ACh)'], ['#E4472E', 'إنزيم الأستيل كولين إستريز'], ['#fff;border:2px solid #9aa7b4', 'حويصلة تشابكية'], ['#7FB069', 'ميتوكندريون']],
    camera: { VH: 12.8, center: [0.1, 3.4, 0.9], elevation: 25, azimuth: 45 },
    base: { L: 15, W: 9, x: -1.0 },
    BASE: { fo: 0, apv: 0, ap: 0, dpre: 0, ca: 0, cai: 0, vm: 0, vf: 0, rel: 0, dif: 0, bind: 0, open: 0, na: 0, dep: 0, ap2: 0, enz: 0, spl: 0, ret: 0, rec: 0 },
    noGeom: ['fo', 'apv', 'ap', 'dpre', 'ca', 'open', 'dep', 'ap2'],
    // نقطة التركيز: 0 الزرُّ التشابكي، 1 قناة الكالسيوم، 2 الحويصلة المندمجة، 3 المستقبل، 4 الإنزيم، 5 موضع إعادة التكوين، 6 جهد الفعل على المحور
    focus(s) { S = s; const k = Math.round(S.fo || 0);
      if (k === 1) return CH[1].clone().add(V(0, 0.2, 0)); if (k === 2) return DOCK[1].clone().add(V(0, -0.3, 0)); if (k === 3) return recC(2).add(V(0, 0.45, 0));
      if (k === 4) return EZ[1].clone().add(V(0, 0.1, 0)); if (k === 5) return REC.clone(); if (k === 6) return V(apX(), AX_Y, AX_Z); return V(BX, PRE + 1.0, 0); },
    STEPS: [
      { t: 'تركيب التشابك العصبي الكوليني',
        p: 'عندما تلتقي خليتان عصبيتان، فإنهما لا تتلامسان تمامًا. هناك فجوة صغيرة جدًا يبلغ عرضها نحو <span class="ltr">20 nm</span> بينهما. هذه الفجوة تسمى الشق التشابكي. تُشكِّل أجزاء الخليتين العصبيتين القريبتَين من هذا الشق، بالإضافة إلى الشق نفسه، ما يسمى التشابك العصبي (الشكل ٥-١٩). يحتوي السيتوبلازم في الخلية العصبية قبل التشابكية على حويصلات ممتلئة بالناقل العصبي (الصورة ٥-٥).',
        n: 'للتوضيح يُعرض الشق التشابكي أعرض ممَّا هو عليه؛ عرضه الحقيقي نحو 20 nm.',
        seq: [[{}, 1]],
        pills: [['خلية عصبية قبل تشابكية', BLU, () => V(BX - 1.2, PRE + 2.9, -0.6), -120, -70], ['محور أسطواني', GRY, () => V(-6.0, AX_Y + 0.9, AX_Z), 0, -70],
                ['حويصلة تشابكية تحتوي على الأستيل كولين', GRN, () => STAT[1].clone(), -190, -60], ['ميتوكندريون', GRN, () => MITO[0][0].clone(), -120, 40],
                ['غشاء قبل تشابكي', TEAL, () => V(BX - 2.4, PRE, 2.0), -150, 40], ['شق تشابكي', RED, () => V(BX + 1.6, (PRE + POST) / 2, 2.95), 150, 30],
                ['غشاء بعد تشابكي', GLD, () => V(BX + 4.8, POST, 0.6), 120, 60], ['خلية عصبية بعد تشابكية', BLU, () => V(BX + 3.6, 0.3, 3.0), 40, 90]] },
      { t: 'وصول جهد الفعل إلى الزرِّ التشابكي',
        p: 'لا يمكن للنبضات العصبية «الوثب» عبر تشابك عصبي كما يتضّح في الشكل ٥-١٩. بدلًا من ذلك، يتم إطلاق جزيئات من ناقل عصبي، لتنبيه الخلية العصبية التالية. يحدث جهد فعل على غشاء سطح الخلية العصبية قبل التشابكية.',
        seq: [[{ '!apv': 1, '!fo': 6, zoom: 1.25 }, 700], [{ ap: 1 }, 2600], [{ dpre: 1 }, 700], [{ '!fo': 0, zoom: 1 }, 700]],
        pills: [['وصول جهد فعل', ORG, () => V(apX(), AX_Y + 1.1, AX_Z), 0, -70], ['إزالة الاستقطاب في النهاية التشابكية', RED, () => V(BX - 1.5, PRE + 2.8, 0.5), -170, -60]] },
      { t: 'فتح قنوات الكالسيوم ودخول أيونات الكالسيوم',
        p: 'حدوث جهد الفعل وإزالة الاستقطاب في الخلية العصبية قبل التشابكية، يحفز فتح البروتينات القنوية المبوبة بالفولتية لأيونات الكالسيوم، فيؤدي ذلك إلى انتشار أيونات الكالسيوم إلى داخل الخلية مع المنحدر الكهروكيميائي الحاد لها؛ على افتراض أنه لا توجد أيونات كالسيوم في السيتوبلازم، إنما فقط في السائل المحيط بها (الشكل ٥-٢٠).',
        seq: [[{ '!fo': 1, zoom: 2.6 }, 900], [{ ca: 1 }, 800], [{ cai: 1 }, 2400], [{ zoom: 1 }, 900]],
        pills: [['قناة كالسيوم مفتوحة', TEAL, () => CH[1].clone().add(V(0, 0.35, 0)), -150, -60], ['أيونات الكالسيوم', ORG, () => caPos(5), 130, 40],
                ['قناة كالسيوم مفتوحة', TEAL, () => CH[0].clone().add(V(0, 0.35, 0)), -150, 40]] },
      { t: 'اندماج الحويصلات وإفراغ (ACh) في الشق التشابكي',
        p: 'يحفز تدفق أيونات الكالسيوم الحويصلات التي تحتوي على ' + ACH + ' للانتقال إلى الغشاء قبل التشابكي والاندماج معه، ما يؤدي إلى إفراغ محتوياتها في الشق التشابكي. يتسبب كل جهد فعل في دفع بضع حويصلات فقط للقيام بذلك. تحتوي كل حويصلة على ما يصل إلى <span class="ltr">10000</span> جزيء من ' + ACH + '.',
        n: 'للتوضيح تُعرض ثلاث حويصلات وبضعة جزيئات في كل حويصلة فقط.',
        seq: [[{ '!fo': 2, vm: 1 }, 2000], [{ zoom: 2.5 }, 900], [{ vf: 1 }, 1200], [{ rel: 1 }, 1100], [{ zoom: 1.4 }, 800]],
        pills: [['تندمج الحويصلات التشابكية في الغشاء قبل التشابكي', TEAL, () => moverPos(1).add(V(0, 0.3, 0)), -40, -80], ['جزيئات (ACh) في الشق التشابكي', GRN, () => achPos(9), 150, 60]] },
      { t: 'انتشار (ACh) عبر الشق وارتباطه بالمستقبلات',
        p: 'ينتشر ' + ACH + ' عبر الشق التشابكي عادة في أقل من <span class="ltr">(0.5 ms)</span>. يحتوي غشاء سطح الخلية العصبية بعد التشابكية على بروتينات مستقبلة. لجزء من جزيء البروتين المستقبل شكل مكمل لجزء من ' + ACH + '، بحيث يمكن لجزيئات ' + ACH + ' الارتباط مؤقتًا بجزيئات هذا البروتين المستقبل.',
        n: 'الشكل ٥-٢١: يتكوّن المستقبل الواحد من خمس وحدات بروتينية مرتبة في شكل أسطوانة تخترق الغشاء بعد التشابكي. تحتوي اثنتان من هذه الوحدات البروتينية على مواقع مستقبلة (ACh).',
        seq: [[{ '!fo': 3, dif: 1 }, 2300], [{ zoom: 2.9 }, 900], [{ bind: 1 }, 1300]],
        pills: [['تنتشر جزيئات (ACh) عبر الشق التشابكي', GRN, () => achPos(12), -40, -90], ['بروتين مستقبل', GLD, () => recC(2).add(V(0, 0.1, 0.35)), 150, 60],
                ['موقع مستقبل (ACh)', GRN, () => site(2, 0), 0, -75], ['غشاء بعد تشابكي', GLD, () => V(RX[0] - 0.9, POST, RZ + 0.3), -150, 40]] },
      { t: 'فتح القناة ودخول أيونات الصوديوم: إزالة الاستقطاب',
        p: 'تخضع المستقبلات لتغييرات في تركيبها وتفتح القنوات الأيونية للسماح لأيونات الصوديوم بالانتشار إلى داخل الخلايا العصبية بعد التشابكية. يصبح الغشاء بعد التشابكي في حالة إزالة استقطاب. يؤدي إزالة استقطاب الخلية العصبية بعد التشابكية إلى توليد جهد فعل عندما يكون فرق الجهد أعلى من جهد العتبة لتلك الخلية العصبية.',
        seq: [[{ open: 1 }, 1000], [{ na: 1 }, 2200], [{ zoom: 1 }, 900], [{ dep: 1 }, 1200], [{ ap2: 1 }, 1500]],
        pills: [['قناة مفتوحة', GLD, () => recC(2).add(V(0, 0.85, 0)), 0, -75], ['أيونات الصوديوم', PUR, () => naPos(9), 150, 40],
                ['الغشاء بعد التشابكي في حالة إزالة استقطاب', RED, () => V(BX + 4.4, POST, -1.0), 120, 60], ['جهد فعل', ORG, () => V(1.0 + 4.8 * S.ap2, 1.5, -3.0), 110, -60]] },
      { t: 'إنزيم الأستيل كولين إستريز يحلِّل (ACh)',
        p: 'إذا بقيت جزيئات ' + ACH + ' مرتبطة بالبروتينات المستقبلة في الغشاء بعد التشابكي، فستظل قنوات أيونات الصوديوم مفتوحة، وستكون الخلايا العصبية بعد التشابكية في حالة إزالة استقطاب بشكل دائم. يتم إعادة تدوير جزيئات ' + ACH + ' لمنع حدوث ذلك، وأيضًا لتجنب إهدارها. يحتوي الشق التشابكي على إنزيم، يسمى الأستيل كولين إستريز، والذي يحفز التحلل المائي لكل جزيء ' + ACH + ' إلى مادتَي الأسيتات والكولين.',
        seq: [[{ '!fo': 4, '!ap2': 0, zoom: 2.4 }, 900], [{ enz: 1, open: 0 }, 2200], [{ spl: 1 }, 1300], [{ dep: 0 }, 700]],
        pills: [['إنزيم الأستيل كولين إستريز', RED, () => EZ[1].clone().add(V(0, 0.45, 0)), -20, -85], ['الأسيتات', GRY, () => achPos(5).add(DA), -140, 50], ['الكولين', BLU, () => achPos(6).add(DC), 140, 40], ['قناة مغلقة', GLD, () => recC(3).add(V(0, 0.85, 0)), -140, -50]] },
      { t: 'إعادة الكولين وتكوين (ACh) من جديد',
        p: 'يُعاد الكولين إلى الخلايا العصبية قبل التشابكية، حيث يتفاعل مع الأستيل مرافق الإنزيم (A) لتكوين ' + ACH + ' مرة أخرى. ثم نقله إلى داخل حويصلات قبل تشابكية جديدة، لتكون جاهزة لنقل جهد الفعل التالي. يستغرق التسلسل الكامل لهذه الأحداث، من لحظة الوصول الأولي لجهد الفعل إلى إعادة تشكيل ' + ACH + '، نحو <span class="ltr">(5-10 ms)</span>.',
        seq: [[{ '!fo': 5, zoom: 1.7 }, 900], [{ ret: 1 }, 2600], [{ rec: 1 }, 1700], [{ zoom: 1 }, 900]],
        pills: [['يُعاد الكولين إلى الخلية العصبية قبل التشابكية', BLU, () => { const p = achPos(7).add(DC); const t = sm(S.ret); p.lerp(retPt(7), t); p.y += 0.9 * Math.sin(Math.PI * t); return p; }, -60, -85],
                ['الأستيل مرافق الإنزيم (A)', PNK, () => REC.clone().add(V(0.9, 0.5, 0.6)), 160, -40], ['حويصلة قبل تشابكية جديدة تحتوي على (ACh)', GRN, () => REC.clone().add(V(0, -0.5, 0)), 40, 95]] },
    ],
    setup(ctx) {
      ctxRef = ctx;
      const memMat = (c, op) => { const m = new THREE.MeshStandardMaterial({ color: c, transparent: true, opacity: op, roughness: 0.35, depthWrite: false, side: THREE.FrontSide }); m.color.convertSRGBToLinear(); return m; };
      // الخلية العصبية قبل التشابكية: محور أسطواني + زرٌّ تشابكي (قبَّة فوق جدار أسطواني) وقاعه غشاء قبل تشابكي
      const axPts = []; for (let x = AX_X0; x <= AX_X1 + 0.01; x += 0.5) axPts.push(V(x, AX_Y, AX_Z));
      ctx.tubePts(axPts, 0.95, memMat(0xA9CFEE, 0.5), ctx.scene);
      dome = ctx.mesh(new THREE.SphereGeometry(1, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), memMat(0xA9CFEE, 0.26), V(BX, PRE + 1.3, 0)); dome.scale.set(BR, 2.1, BR); dome.castShadow = false;
      wall = ctx.mesh(new THREE.CylinderGeometry(BR, BR, 1.3, 48, 1, true), memMat(0xA9CFEE, 0.26), V(BX, PRE + 0.65, 0)); wall.castShadow = false;
      preMem = ctx.mesh(new THREE.CylinderGeometry(BR, BR, 0.12, 48), memMat(0x6FA6D8, 0.55), V(BX, PRE + 0.06, 0)); preMem.castShadow = false;
      // الخلية العصبية بعد التشابكية: غشاء بعد تشابكي (لوح) فوق جسم الخلية
      postMem = ctx.mesh(new THREE.BoxGeometry(11.5, 0.3, 7.4), memMat(0x6FA6D8, 0.96), V(BX, POST - 0.15, 0));
      postBody = ctx.mesh(new THREE.BoxGeometry(11.5, 1.2, 7.4), memMat(0xBFD9F0, 0.35), V(BX, 0.3, 0)); postBody.castShadow = false;
      // الميتوكندريا
      MITO.forEach(([p, rz]) => { const o = ctx.mesh(new THREE.SphereGeometry(1, 20, 12), matMito, p); o.scale.set(0.95, 0.4, 0.4); o.rotation.y = rz; });
      // الحويصلات الثابتة وما فيها من (ACh)
      STAT.forEach((p, k) => { const b = ctx.blob(0xffffff, 0.45); b.position.copy(p); b.scale.setScalar(0.42);
        for (let q = 0; q < 6; q++) ctx.ball(p.clone().add(V(rnd(k, q + 30) - 0.5, rnd(k, q + 40) - 0.5, rnd(k, q + 50) - 0.5).multiplyScalar(0.5)), 0.08, matVesACh, ctx.scene); });
      // الحويصلات المتحرِّكة (تندمج بالغشاء)
      movers = HOME.map(() => { const b = ctx.blob(0xffffff, 0.45); b.scale.setScalar(0.42); return b; });
      newVes = ctx.blob(0xffffff, 0.45); newVes.position.copy(REC); newVes.scale.setScalar(0.01);
      // المستقبلات: خمس وحدات بروتينية في شكل أسطوانة تخترق الغشاء بعد التشابكي (الشكل ٥-٢١)
      const gSub = new THREE.CylinderGeometry(0.13, 0.13, 0.72, 10);
      recs = RX.map(x => { const g = new THREE.Group(); g.position.set(x, POST + 0.16, RZ); ctx.scene.add(g); g.userData.subs = [];
        for (let m = 0; m < 5; m++) { const o = new THREE.Mesh(gSub, matRec); o.castShadow = true; g.add(o); g.userData.subs.push(o); } return g; });
      // قناتا الكالسيوم في الغشاء قبل التشابكي (أربع وحدات)
      const gCh = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 10);
      chans = CH.map(p => { const g = new THREE.Group(); g.position.copy(p); ctx.scene.add(g); g.userData.subs = [];
        for (let m = 0; m < 4; m++) { const o = new THREE.Mesh(gCh, matChan); o.castShadow = true; g.add(o); g.userData.subs.push(o); } return g; });
      // إنزيم الأستيل كولين إستريز على سطح الغشاء بعد التشابكي
      enz = EZ.map(p => { const b = ctx.blob(0xE4472E, 0.85); b.position.copy(p); b.scale.set(0.42, 0.3, 0.36); return b; });
      // جهد الفعل: حلقة مضيئة على المحور، وشريط مضيء على الخلية بعد التشابكية
      const glow = new THREE.MeshStandardMaterial({ color: 0xFFD23F, emissive: 0xFFB000, emissiveIntensity: 0.7, roughness: 0.3 });
      apRing = ctx.mesh(new THREE.TorusGeometry(1.12, 0.14, 10, 36), glow, V(AX_X0, AX_Y, AX_Z)); apRing.rotation.y = Math.PI / 2; apRing.castShadow = false; apRing.visible = false;
      const glow2 = new THREE.MeshStandardMaterial({ color: 0xFFD23F, emissive: 0xFFB000, emissiveIntensity: 0.6, transparent: true, opacity: 0.55, depthWrite: false });
      apBand = ctx.mesh(new THREE.BoxGeometry(0.45, 1.6, 7.5), glow2, V(1.0, 0.45, 0)); apBand.castShadow = false; apBand.visible = false;
    },
    rebuild(s, ctx) {
      S = s;
      // جزيئات (ACh) ومصيرها: انتشار → ارتباط → تحلُّل إلى أسيتات وكولين → عودة الكولين وإعادة التكوين
      for (let i = 0; i < NACH; i++) {
        const p = achPos(i);
        if (S.spl <= 0.001) { ctx.ball(p, 0.13, matACh); continue; }
        const k = sm(S.spl);
        ctx.ball(p.clone().add(DA.clone().multiplyScalar(k)), 0.1 * (1 - 0.4 * sm(S.rec)), matAcet);
        let c = p.clone().add(DC.clone().multiplyScalar(k));
        if (S.ret > 0) { const t = sm(S.ret); c.lerp(retPt(i), t); c.y += 0.9 * Math.sin(Math.PI * t); }
        if (S.rec > 0) c.lerp(nvPt(i), sm(S.rec));
        ctx.ball(c, 0.1 + 0.03 * sm(S.rec), S.rec > 0.5 ? matACh : matChol);
      }
      for (let j = 0; j < NCA; j++) ctx.ball(caPos(j), 0.11, matCa);
      for (let j = 0; j < NNA; j++) ctx.ball(naPos(j), 0.11, matNa);
      // الأستيل مرافق الإنزيم (A) داخل الزرِّ، يختفي بتكوُّن (ACh)
      const sc = 0.12 * sm(S.ret) * (1 - sm(S.rec));
      if (sc > 0.005) for (let q = 0; q < NCOA; q++) ctx.ball(REC.clone().add(V(rnd(q, 61) - 0.5, rnd(q, 62) - 0.3, rnd(q, 63) - 0.5).multiplyScalar(1.6)).lerp(nvPt(q * 3), sm(S.rec)), sc, matCoA);
    },
    place(s) {
      S = s;
      movers.forEach((b, v) => { b.position.copy(moverPos(v)); const f = sm(S.vf); b.scale.set(0.42 * (1 + 0.35 * f), 0.42 * (1 - 0.85 * f), 0.42 * (1 + 0.35 * f)); b.material.opacity = 0.45 * (1 - 0.5 * f); });
      const nv = sm(S.rec); newVes.scale.setScalar(0.01 + 0.44 * nv); newVes.material.opacity = 0.45 * nv;
      const r = ringR(), op = S.open > 0.5;
      recs.forEach(g => g.userData.subs.forEach((o, m) => { o.position.set(r * Math.cos(ang(m)), 0, r * Math.sin(ang(m))); o.material = op ? matRecOpen : matRec; }));
      const rc = 0.2 + 0.12 * sm(S.ca), oc = S.ca > 0.5;
      chans.forEach(g => g.userData.subs.forEach((o, m) => { const a = m * Math.PI / 2 + 0.4; o.position.set(rc * Math.cos(a), 0, rc * Math.sin(a)); o.material = oc ? matChanOpen : matChan; }));
      apRing.visible = S.apv > 0.5 && S.ap < 0.995; apRing.position.x = apX();
      apBand.visible = S.ap2 > 0.01; apBand.position.x = 1.0 + 4.8 * S.ap2;
      const d = sm(S.dpre); dome.material.color.copy(C_PRE0).lerp(C_PRE1, d); wall.material.color.copy(C_PRE0).lerp(C_PRE1, d);
      const e = sm(S.dep); postMem.material.color.copy(C_PM0).lerp(C_PM1, e); postBody.material.color.copy(C_PB0).lerp(C_PB1, e);
    },
    idle(t, s, ctx, tweening) {
      if (apRing.visible) { const k = 1 + 0.06 * Math.sin(t * 9); apRing.scale.set(1, k, k); }
      if (!tweening) enz.forEach((b, i) => { b.position.y = EZ[i].y + 0.04 * Math.sin(t * 1.8 + i); });
    },
  };
})();
