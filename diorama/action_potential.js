/* ديوراما: جهد الفعل وانتقاله على المحور — الدرس ٥-٢ التواصل العصبي (كتاب الطالب ص ١٧٠–١٧٩) */
(function () {
  const { V, sm, M, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const D2R = Math.PI / 180;
  // محور أسطواني على طول x، مقطوع طوليّاً (النصف العلوي محذوف) ومائل نحو الكاميرا بزاوية ALPHA
  const XL = -9, XR = 9, R = 2.0, Y0 = 2.5, TH = 0.22;
  const ALPHA = 35 * D2R, CA = Math.cos(ALPHA), SA = Math.sin(ALPHA);
  const W = (x, y, z) => V(x, Y0 + y * CA - z * SA, y * SA + z * CA);                 // إحداثيات محلِّيَّة ← عالميَّة
  const P = (x, phi, r) => W(x, -r * Math.cos(phi), -r * Math.sin(phi));              // زاوية phi من قاع الأنبوب نحو الجدار الخلفي
  const PHC = 72 * D2R, PHO = 85 * D2R, PHI = 42 * D2R;                                // زاوية القنوات، صفُّ الشحنات الخارجي، الداخلي
  const xP = -3.0;                                                                     // موقع «الرقعة» التي نراقب فيها القنوات
  const XNG = xP - 1.8, XPM = xP - 0.6, XNA = xP + 0.6, XK = xP + 1.8;                   // قناة غير مبوَّبة، مضخَّة، قناة صوديوم، قناة بوتاسيوم
  const NX = [-6.3, -2.1, 2.1, 6.3], NW = 0.8;                                         // مراكز عقد رانفييه ونصف عرضها
  const SLEEVES = [[XL, NX[0] - NW], [NX[0] + NW, NX[1] - NW], [NX[1] + NW, NX[2] - NW], [NX[2] + NW, NX[3] - NW], [NX[3] + NW, XR]];
  const REP = []; for (let x = XL + 1; x < XR - 0.5; x += 2) if (Math.abs(x - xP) > 2.6) REP.push(x);   // أزواج قنوات متكرِّرة على طول المحور
  const SIGNX = []; for (let x = XL + 0.55; x < XR - 0.4; x += 0.85) SIGNX.push(x);
  const GX = 1.6, GZ = -3.2, GY0 = 2.2, GH = 3.3, gy = v => GY0 + (v + 90) / 130 * GH;   // مقياس الجهد
  const L = s => `<span class="ltr">${s}</span>`;
  const NA = L('Na⁺'), K = L('K⁺');

  const matMem = M(0xF2DC6B, { roughness: 0.6 }), matCyto = M(0xD8B384, { roughness: 0.85 });
  const matMy = new THREE.MeshStandardMaterial({ color: 0xDCCFAE, transparent: true, opacity: 0, roughness: 0.8 }); matMy.color.convertSRGBToLinear();
  const matNa = M(0xF5D328, { roughness: 0.35 }), matK = M(0x8B6FC9, { roughness: 0.35 });
  const matCNa = M(0x7CB342), matCK = M(0xD9607A), matCNG = M(0x4A90D9), matPump = M(0xE08A3C), matProt = M(0xE88FA0);
  const matPlus = M(0xD64545), matMinus = M(0x2F6FD6), matLoop = M(0xE0309A, { roughness: 0.4 });
  const matBar = M(0xB0BAC6), matCol = M(0xE74C3C), matTick = { 30: M(0xC8102E), 0: M(0x44546A), '-50': M(0xD9641E), '-70': M(0x1B6FD0) };
  const gCone = new THREE.ConeGeometry(0.17, 0.42, 10), gSph = new THREE.SphereGeometry(1, 14, 10);
  let S, ctx, elG, spark, column, marker, gaugeG, sleeves = [], ionsOut = [], ionsIn = [], ionsMoving = [];
  const clamp01 = u => Math.min(1, Math.max(0, u));

  // ---- هندسة مساعدة ----
  // دوران (sx, sy, t) ← (t, −sy, sx): عمق البثق يصير المحور x، والنصف العلوي من الشكل يصير النصف السفلي (y < 0)
  function alongX(g) { const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const sx = p.getX(i), sy = p.getY(i), t = p.getZ(i); p.setXYZ(i, t, -sy, sx); } p.needsUpdate = true; g.computeVertexNormals(); return g; }
  function halfRing(ro, ri, len) {                                                     // نصف حلقة سفليَّة (مقطع طولي) ممتدَّة على طول x
    const s = new THREE.Shape(); s.moveTo(ro, 0); s.absarc(0, 0, ro, 0, Math.PI, false);
    if (ri > 0) { s.lineTo(-ri, 0); s.absarc(0, 0, ri, Math.PI, 0, true); }
    s.closePath();
    return alongX(new THREE.ExtrudeGeometry(s, { depth: len, bevelEnabled: false, curveSegments: 48 }));
  }
  function section(ro, ri, x0, x1, mat) { const o = new THREE.Mesh(halfRing(ro, ri, x1 - x0), mat); o.position.set(x0, Y0, 0); o.rotation.x = ALPHA; o.castShadow = o.receiveShadow = true; ctx.scene.add(o); return o; }
  function chan(x, mat, open, sc) {                                                   // قناة = فصَّان متجاوران؛ الفتح = اتِّساع الفجوة
    if (sc < 0.05) return;
    const r = 0.2 * sc, len = 0.55 * sc, off = r + 0.17 * sc * open;
    [-1, 1].forEach(s => ctx.rod(P(x + s * off, PHC, R - len), P(x + s * off, PHC, R + len), r, mat));
  }
  function pump(x, sc) { if (sc < 0.05) return; const r = 0.27 * sc; [-1, 1].forEach(s => ctx.rod(P(x + s * r, PHC, R - 0.6 * sc), P(x + s * r, PHC, R + 0.6 * sc), r, matPump)); }
  function sign(x, phi, r, plus, mat) {
    const h = 0.17; ctx.rod(P(x - h, phi, r), P(x + h, phi, r), 0.045, mat);
    if (plus) ctx.rod(P(x, phi - h / r, r), P(x, phi + h / r, r), 0.045, mat);
  }
  const seg3 = (A, B, C, D, u) => u < 0.35 ? A.clone().lerp(B, u / 0.35) : u < 0.65 ? B.clone().lerp(C, (u - 0.35) / 0.3) : C.clone().lerp(D, (u - 0.65) / 0.35);
  function ionPath(x, u, inward, sx, sy, sz) {                                        // مسار أيون عبر قناة عند x: خارج ← فوهة ← فوهة ← داخل
    const O = P(x + sx, PHC + 8 * D2R + sz, R + 1.25 + sy), OM = P(x, PHC, R + 0.62), IM = P(x, PHC, R - 0.62), I = P(x + sx, PHC - 20 * D2R - sz, R - 1.25 - sy);
    return inward ? seg3(O, OM, IM, I, u) : seg3(I, IM, OM, O, u);
  }
  function ions(x, prog, inward, n, mat, r) {                                         // n أيونات متتابعة عبر القناة
    for (let j = 0; j < n; j++) { const u = clamp01(prog * (1 + 0.18 * (n - 1)) - 0.18 * j); const k = j - (n - 1) / 2; ctx.ball(ionPath(x, u, inward, 0.42 * k, 0.25 * Math.abs(k), 0.09 * k), r || 0.17, mat); }
  }
  function cone(p, dir) { const o = new THREE.Mesh(gCone, matLoop); o.position.copy(p); o.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize()); o.castShadow = true; ctx.dyn.add(o); }
  function loop(x0, x1, b, prog) {                                                    // دائرة موضعيَّة: داخل الغشاء إلى الأمام، خارجه إلى الخلف
    if (prog <= 0.03) return;
    const cx = (x0 + x1) / 2, a = (x1 - x0) / 2, n = 40, m = Math.max(2, Math.round(n * prog)), pts = [];
    const pt = t => { const th = 2 * Math.PI * t; return P(cx - a * Math.cos(th), PHC, R - b * Math.sin(th)); };
    for (let i = 0; i <= m; i++) pts.push(pt(i / n));
    ctx.tubePts(pts, 0.07, matLoop);
    [0.25, 0.75].forEach(t => { if (t < prog) cone(pt(t), pt(t + 0.01).sub(pt(t - 0.01))); });
  }
  // ---- منطق الموجة ----
  const fronts = () => [xP + S.sp, xP - S.sp];
  function depol(x) {                                                                 // هل الغشاء عند x في إزالة الاستقطاب الآن؟
    if (S.my > 0.5) { if (S.nd < -0.5) return 0; let f = 0; NX.forEach((nx, i) => { if (Math.abs(x - nx) <= NW && Math.abs(S.nd - i) < 0.5) f = 1; }); return f; }
    if (S.wa < 0.5) return 0;
    return fronts().some(f => Math.abs(x - f) < 1.2) ? 1 : 0;
  }
  function kOpen(x) {                                                                 // قنوات البوتاسيوم تُفتح خلف الجبهة (إعادة الاستقطاب)
    if (S.my > 0.5) { let f = 0; NX.forEach((nx, i) => { const d = S.nd - i; if (Math.abs(x - nx) <= NW && d >= 0.5 && d < 1.3) f = 1; }); return f; }
    if (S.wa < 0.5 || S.sp < 0.5) return 0;
    const d = Math.min(...fronts().map(f => Math.abs(x - f)));
    return (Math.abs(x - xP) < S.sp && d >= 1.2 && d < 2.6) ? 1 : 0;
  }
  const patchC = () => P(xP + 0.6, PHC, R);
  const jumpC = () => { const i = Math.min(2, Math.max(0, Math.floor(S.nd))); return P((NX[i] + NX[i + 1]) / 2, PHC, R); };
  const tick = v => V(GX, gy(v), GZ);
  const fmt = v => { const r = Math.round(v); return (r < 0 ? '−' : r > 0 ? '+' : '') + Math.abs(r); };
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

  window.DIORAMA = {
    id: 'action_potential', title: 'جهد الفعل وانتقاله على المحور', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الخامسة: التحكم والتنسيق — ٥-٢ التواصل العصبي',
    source: 'النص من كتاب الطالب: جهد الراحة وجهود الفعل (ص ١٧١–١٧٦)، غمد المايلين وعقد رانفييه (ص ١٧٠)، سرعة انتقال النبضات العصبية (ص ١٧٨–١٧٩)',
    legend: [['#F5D328', `أيون صوديوم ${NA}`, 'dot'], ['#8B6FC9', `أيون بوتاسيوم ${K}`, 'dot'], ['#E88FA0', 'بروتين سالب الشحنة', 'dot'], null,
             ['#E08A3C', 'مضخة الصوديوم - البوتاسيوم'], ['#7CB342', 'قناة صوديوم مبوبة بالفولتية'], ['#D9607A', 'قناة بوتاسيوم مبوبة بالفولتية'], ['#4A90D9', 'قناة غير مبوبة'], null,
             ['#F2DC6B', 'غشاء سطح المحور الأسطواني', 'tube'], ['#DCCFAE', 'غمد المايلين', 'tube'], ['#D64545', 'شحنة موجبة'], ['#2F6FD6', 'شحنة سالبة'], ['#E0309A', 'تدفُّق التيار (دائرة موضعية)', 'tube']],
    camera: { VH: 22.5, center: [0, 1.7, 0], elevation: 25, azimuth: 45 },
    base: { L: 21, W: 11.5, x: 0 },
    BASE: { fo: 0, pa: 0, lk: 0, elc: 0, spk: 0, na: 0, nin: 0, k: 0, kout: 0, v: -70, wa: 0, sp: 0, lc: 0, my: 0, nd: -1 },
    noGeom: ['fo', 'elc', 'spk', 'v'],
    // نقطة التركيز: 0 الرقعة (قناة الصوديوم)، 1 الجبهة اليمنى للموجة، 2 منتصف القفزة بين عقدتين، 3 المضخَّة
    focus(s) { S = s; const k = Math.round(S.fo || 0); if (k === 1) return P(Math.min(XR - 1, xP + S.sp), PHC, R); if (k === 2) return jumpC(); if (k === 3) return P(XPM, PHC, R); return patchC(); },
    STEPS: [
      { t: 'جهد الراحة ومضخة الصوديوم - البوتاسيوم',
        p: `المحور الأسطواني في حالة الراحة والذي لا يقوم بنقل النبضات الكهربائية، يكون داخله سالبًا مقارنة بالخارج. يطلق على هذا الاختلاف اسم جهد الراحة؛ عادة ما يكون نحو ${L('−70 mV')} بالداخل. تقوم مضخات الصوديوم - البوتاسيوم باستمرار بضخ أيونات الصوديوم (${NA}) إلى خارج المحور الأسطواني وأيونات البوتاسيوم (${K}) إلى داخل المحور الأسطواني. يتم إخراج ثلاثة أيونات صوديوم من المحور الأسطواني مقابل إدخال اثنين من أيونات بوتاسيوم باستخدام الطاقة الناتجة من التحلل المائي لجزيء واحد من ${L('ATP')}.`,
        seq: [[{ '!fo': 3, zoom: 2.1 }, 900], [{ pa: 0.5 }, 1500], [{ pa: 1 }, 1500]],
        pills: [['مضخة الصوديوم - البوتاسيوم', ORG, () => P(XPM, PHC, R + 0.9), -10, -120], ['غشاء سطح الخلية للمحور الأسطواني', GRY, () => P(xP + 3.2, PHC, R + 0.1), 120, -80],
                ['سيتوبلازم المحور الأسطواني', TEAL, () => P(xP + 2.6, 10 * D2R, R - 0.6), 80, 80], ['السائل النسيجي', BLU, () => P(xP - 3.4, 100 * D2R, R + 1.8), -120, -40],
                [`جهد الراحة ${L('−70 mV')}`, BLU, () => tick(-70), -130, 10], ['بروتينات سالبة الشحنة', PNK, () => P(xP + 1.2, -20 * D2R, R - 1.0), 140, 60]] },
      { t: 'قنوات مفتوحة طوال الوقت وقنوات مبوبة بالفولتية مغلقة',
        p: `يحتوي غشاء الخلية على بروتينات قنوية تمر عبرها أيونات البوتاسيوم وأخرى تمر عبرها أيونات الصوديوم تكون مفتوحة طوال الوقت. يوجد عدد أكبر منها خاص بأيونات البوتاسيوم مقارنة بتلك الخاصة بأيونات الصوديوم. بالإضافة إلى البروتينات القنوية المفتوحة طوال الوقت، هناك بروتينات قنوية أخرى في غشاء سطح الخلية تسمح لأيونات الصوديوم أو أيونات البوتاسيوم بالمرور عبرها. تفتح البروتينات القنوية وتغلق اعتمادًا على الفولتية أو حالة الجهد الكهربائي عبر الغشاء، ويطلق عليها اسم البروتينات القنوية المبوبة بالفولتية. عندما يكون الغشاء في جهد الراحة، تكون هذه القنوات مغلقة.`,
        seq: [[{ '!fo': 0, zoom: 2.1 }, 800], [{ lk: 1 }, 1800]],
        pills: [['بروتين قنوي غير مبوب يبقى مفتوحًا طوال الوقت', BLU, () => P(XNG, PHC, R + 0.9), -60, -115], ['القناة المبوبة بالفولتية للصوديوم مغلقة', GRN, () => P(XNA, PHC, R - 0.8), 30, 95],
                ['القناة المبوبة بالفولتية للبوتاسيوم مغلقة', PNK, () => P(XK, PHC, R + 0.9), 110, -70], [`${K} ينتشر إلى الخارج`, PUR, () => ionPath(XNG, 0.8, false, 0, 0, 0), -140, 20]] },
      { t: 'التنبيه وإزالة الاستقطاب',
        p: `يتسبب التيار الكهربائي المستخدم لتنبيه المحور الأسطواني بفتح قنوات الصوديوم المبوبة بالفولتية في غشاء سطح الخلية، ما يسمح بدخول أيونات الصوديوم عبرها. وتسبب حركة أيونات الصوديوم نحو الداخل تغييرات في فرق الجهد عبر الغشاء، والذي يصبح أقل سالبية في الداخل مقارنة بالخارج. وهذا ما يسمى بإزالة الاستقطاب. يؤدي هذا إلى فتح المزيد من القنوات بحيث تدخل المزيد من أيونات الصوديوم، ويترتب على ذلك المزيد من إزالة الاستقطاب. إذا وصل فرق الجهد إلى نحو ${L('−50 mV')}، فسيتم فتح المزيد من القنوات حتى يصل داخل الغشاء إلى جهد يعادل ${L('+30 mV')} مقارنة بالخارج.`,
        n: `جهد العتبة: يتم توليد جهود الفعل فقط إذا وصل فرق الجهد إلى قيمة بين −60 mV و −50 mV. وإذا لم يتم الوصول إلى هذه القيمة، فلن يحدث جهد فعل.`,
        seq: [[{ '!fo': 0, elc: 1, zoom: 2.4 }, 800], [{ spk: 1, na: 0.4, v: -50, wa: 0.3 }, 1000], [{ na: 1, nin: 1, v: 30, wa: 1 }, 2200]],
        pills: [['قطب كهربائي (المنبّه)', GRY, () => elG.position.clone().add(V(0.3, 2.4, -1.2)), 60, -40], ['القناة المبوبة بالفولتية للصوديوم مفتوحة', GRN, () => P(XNA, PHC, R + 0.9), -30, -120],
                [`أيونات الصوديوم ${NA} تدخل`, GLD, () => ionPath(XNA, 0.85, true, 0, 0, 0), 60, 100], [`جهد العتبة ${L('−50 mV')}`, ORG, () => tick(-50), -125, 10], [L('+30 mV'), RED, () => tick(30), -90, -10],
                ['إزالة الاستقطاب: الداخل موجب', RED, () => P(xP + 3.0, PHI, R - 0.3), 150, 70]] },
      { t: 'إعادة الاستقطاب',
        p: `بعد نحو ${L('1 ms')}، تغلق جميع القنوات المبوبة بالفولتية لأيونات الصوديوم. في الوقت نفسه، تفتح مجموعة أخرى من البروتينات القنوية المبوبة بالفولتية للسماح بانتشار أيونات البوتاسيوم إلى خارج المحور الأسطواني، مع منحدر تركيزها. تتسبب حركة أيونات البوتاسيوم إلى الخارج بانتقال الشحنة الموجبة من داخل المحور الأسطواني إلى خارجه، وبالتالي تعيد فرق الجهد إلى الوضع الطبيعي ${L('−70 mV')}. وهذا ما يُسمى إعادة الاستقطاب. وفي الواقع، يصبح فرق الجهد عبر الغشاء، لفترة وجيزة، أكثر سالبية من جهد الراحة في الحالة الطبيعية. بعد ذلك، تنغلق البروتينات القنوية المبوبة بالفولتية لأيونات البوتاسيوم، وتعود البروتينات القنوية المبوبة بالفولتية لأيونات الصوديوم للاستجابة مرة أخرى لحالة إزالة الاستقطاب.`,
        n: 'تستغرق العملية بأكملها نحو 3 ms. تستمر مضخة الصوديوم-البوتاسيوم في ضخ أيونات الصوديوم إلى الخارج وأيونات البوتاسيوم إلى الداخل طوال الوقت.',
        seq: [[{ na: 0, k: 1, elc: 0, spk: 0 }, 700], [{ kout: 1, v: -80, wa: 0 }, 1800], [{ k: 0, v: -70 }, 900]],
        pills: [['القناة المبوبة بالفولتية للصوديوم مغلقة', GRN, () => P(XNA, PHC, R - 0.8), -20, 100], ['القناة المبوبة بالفولتية للبوتاسيوم مفتوحة', PNK, () => P(XK, PHC, R + 0.9), 40, -120],
                [`أيونات البوتاسيوم ${K} تخرج`, PUR, () => ionPath(XK, 0.85, false, 0, 0, 0), 150, -20], [`العودة إلى ${L('−70 mV')}`, BLU, () => tick(-70), -120, -10],
                ['لفترة وجيزة أكثر سالبية من جهد الراحة', GRY, () => tick(-80), -150, 50]] },
      { t: 'انتقال جهد الفعل: دوائر موضعية',
        p: 'يؤدي جهد الفعل عند أي نقطة في غشاء سطح خلية محور أسطواني إلى إنتاج جهد فعل في الغشاء على جانبَي تلك النقطة. يؤدي إزالة الاستقطاب المؤقت للغشاء في موقع جهد الفعل إلى تدفق التيار في كلا الاتجاهَين بين منطقة إزالة الاستقطاب والمناطق التي تكون في حالة راحة على جانبيها. تزيل هذه الدوائر الموضعية الاستقطاب في المناطق التي تكون في حالة الراحة، حيث تفتح البروتينات القنوية المبوبة بالفولتية لأيونات الصوديوم، ويصل الجهد الكهربائي للغشاء إلى جهد العتبة بحيث تتمكن جهود الفعل من المرور على طول الغشاء.',
        n: 'من المتفق عليه توضيح اتجاه تدفق التيار بواسطة أسهم تشير من الشحنة الموجبة باتجاه الشحنة السالبة. تم تنبيه وسط المحور الأسطواني بواسطة قطب كهربائي، فينتقل جهد الفعل في كلا الاتجاهَين بعيدًا عن الجزء الذي تمّ تنبيهه.',
        seq: [[{ '!sp': 1.6, '!wa': 1, '!fo': 1, zoom: 1.5 }, 800], [{ sp: 4.4, lc: 1 }, 3000]],
        pills: [['جزء من محور أسطواني في جهد الفعل', RED, () => P(xP + S.sp, PHO, R + 0.4), 30, -110], ['دوائر موضعية تزيل الاستقطاب من المناطق المجاورة لها', PNK, () => P(xP + S.sp + 1.3, PHC, R + 0.85), 120, -60],
                ['منطقة في حالة الراحة', BLU, () => P(xP + S.sp + 3.0, PHI, R - 0.3), 110, 80], ['جزء من محور أسطواني في جهد الفعل', RED, () => P(xP - S.sp, PHO, R + 0.4), -60, -110]] },
      { t: 'فترة الجموح: اتجاه واحد للنبضة',
        p: 'في الجسم، تبدأ جهود الفعل عند أحد طرفَي المحاور الأسطوانية، على سبيل المثال، في مكان اتصال المحور الأسطواني مع جسم الخلية العصبية. يتم توليد جهود فعل «جديدة» في اتجاه الأمام وليس في اتجاه الخلف. هذا لأن المنطقة الواقعة في الخلف تكون في حالة تعافٍ من جهد الفعل الذي حدث فيها للتو، لذلك يتم إغلاق البروتينات القنوية المبوبة بالفولتية لأيونات الصوديوم. تكون هذه القنوات مغلقة بإحكام بحيث لا يمكن فتحها. تسمى فترة التعافي (العودة إلى الوضع الطبيعي)، والتي لا يستجيب خلالها المحور الأسطواني، باسم فترة الجموح.',
        n: 'يحدد طول فترة الجموح أقصى تكرار تنتقل به النبضات العصبية؛ بالنسبة إلى العديد من الخلايا العصبية، يتراوح هذا بين 200 و 300 نبضة عصبية في الثانية.',
        seq: [[{ sp: 11.4, zoom: 1.25 }, 3400], [{ '!wa': 0, '!lc': 0, zoom: 1 }, 700]],
        pills: [['جهد الفعل ينتقل إلى الأمام', RED, () => P(Math.min(XR - 0.8, xP + S.sp), PHO, R + 0.4), 20, -110],
                ['فترة الجموح: قنوات الصوديوم مغلقة بإحكام', GRY, () => P(Math.min(XR - 2.6, xP + S.sp - 2.0), PHC, R - 0.9), 40, 110],
                ['عاد إلى جهد الراحة', BLU, () => P(Math.max(XL + 0.8, xP + S.sp - 7.5), PHI, R - 0.3), -80, 110]] },
      { t: 'محور مايليني: غمد المايلين وعقد رانفييه',
        p: `يتكوّن هذا الغلاف المحيط، المسمى بغمد المايلين، إلى حد كبير من الدهون، مع بعض البروتينات. يؤثر هذا الغمد على سرعة توصيل النبضات العصبية. يطلق على المناطق الصغيرة المكشوفة من المحور الأسطواني بين خلايا شوان اسم عقد رانفييه. لا تستطيع أيونات الصوديوم وأيونات البوتاسيوم المرور عبر غمد المايلين، لذلك فإنه من غير الممكن إزالة الاستقطاب أو تكوّن جهود الفعل في أجزاء من المحور العصبي المحاطة بغلاف المايلين. يمكن لجهود الفعل أن تحدث فقط في عقد رانفييه، حيث تتركز فيها جميع جزيئات البروتينات القنوية وبروتينات مضخة ${L('Na⁺/K⁺')}.`,
        n: 'توجد عقد رانفييه كل (1-3 mm) تقريبًا على طول المحاور الأسطوانية للخلايا العصبية في الإنسان. العقد نفسها صغيرة جدًا ويتراوح طولها بين (2-3 μm).',
        seq: [[{ '!sp': 0, zoom: 1 }, 500], [{ my: 1 }, 2400]],
        pills: [['غمد المايلين', GLD, () => P(0, 80 * D2R, R + 0.7), 0, -110], ['عقدة رانفييه', TEAL, () => P(NX[1], PHC, R + 0.8), -80, -70], ['عقدة رانفييه', TEAL, () => P(NX[2], PHC, R + 0.8), 90, -75],
                ['البروتينات القنوية ومضخات Na⁺/K⁺ تتركز في العقد', ORG, () => P(NX[3], PHC, R - 0.8), 30, 95], ['يعمل غلاف المايلين كعازل', GRY, () => P(-4.2, 60 * D2R, R + 0.7), -120, 80]] },
      { t: 'النقل الوثبي: جهد الفعل «يقفز» من عقدة إلى العقدة التي تليها',
        p: `تنتقل الدوائر الموضعية من عقدة رانفييه إلى العقدة التي تليها. وبالتالي، فإن جهود الفعل «تقفز» من عقدة إلى العقدة التي تليها، وعبر مسافة مقدارها نحو ${L('(1-3 mm)')}. تسمى طريقة الانتقال هذه باسم النقل الوثبي ${L('Saltatory conduction')}. في المحور الأسطواني المايليني، يمكن للنقل الوثبي أن يزيد من سرعة التوصيل بما يصل إلى 50 ضعف سرعة انتقالها على طول محور أسطواني غير مايليني له القطر نفسه.`,
        n: 'في الخلايا العصبية غير المايلينية تصل سرعة انتقال التوصيل إلى 0.5 m/s في بعض الحالات؛ وفي الخلايا العصبية المايلينية في الثدييات تنتقل جهود الفعل بسرعات كبيرة تصل إلى 100 m/s.',
        seq: [[{ '!nd': 0, '!fo': 2, '!lc': 1, zoom: 1.9 }, 800], [{ nd: 1 }, 1300], [{ nd: 2 }, 1300], [{ nd: 3 }, 1300], [{ zoom: 1 }, 800]],
        pills: [['عقدة رانفييه في جهد الفعل', RED, () => { const i = Math.min(3, Math.max(0, Math.round(S.nd))); return P(NX[i], PHO, R + 0.4); }, -40, -110],
                ['تنتقل الدوائر الموضعية من عقدة إلى العقدة التي تليها', PNK, () => { const i = Math.min(2, Math.max(0, Math.floor(S.nd))); return P((NX[i] + NX[i + 1]) / 2, PHC, R + 1.25); }, 110, -60],
                ['عقدة رانفييه في جهد الراحة', BLU, () => { const i = Math.min(3, Math.floor(S.nd) + 1); return P(NX[Math.min(3, i + 1)], PHI, R - 0.3); }, 120, 85]] },
    ],
    setup(c) {
      ctx = c;
      // الغشاء (نصف أنبوب مقطوع طوليّاً) والسيتوبلازم وأغماد المايلين
      section(R, R - TH, XL, XR, matMem);
      section(R - TH - 0.01, R - TH - 0.16, XL + 0.02, XR - 0.02, matCyto);                 // بطانة السيتوبلازم (الداخل)
      sleeves = SLEEVES.map(([a, b]) => { const o = section(R + 0.62, R + 0.06, a, b, matMy); o.visible = false; return o; });
      // أيونات ساكنة: خارج المحور صوديوم كثير وبوتاسيوم قليل؛ داخله العكس + بروتينات سالبة الشحنة
      const stat = (n, kind, out) => { for (let i = 0; i < n; i++) {
        const x = XL + 0.6 + rnd() * (XR - XL - 1.2);
        const p = out ? P(x, (70 + rnd() * 52) * D2R, R + 0.75 + rnd() * 1.35) : P(x, (-65 + rnd() * 120) * D2R, 0.35 + rnd() * (R - 0.75));
        if (Math.abs(x - xP) < 2.6 && out && rnd() < 0.5) continue;                     // أفسح المجال للأيونات المتحرِّكة عند الرقعة
        const o = ctx.ball(p, kind === 'P' ? 0.3 : 0.16, kind === 'Na' ? matNa : kind === 'K' ? matK : matProt, ctx.scene);
        (out ? ionsOut : ionsIn).push({ o, p: p.clone(), ph: rnd() * 6.28 }); } };
      stat(40, 'Na', true); stat(9, 'K', true); stat(34, 'K', false); stat(7, 'Na', false); stat(6, 'P', false);
      // القطب الكهربائي المنبِّه وشرارة التنبيه
      elG = new THREE.Group(); ctx.scene.add(elG);
      ctx.rod(V(0, 0, 0), V(0.3, 2.6, -1.3), 0.1, M(0x8A94A6), elG); ctx.ball(V(0, 0, 0), 0.17, M(0xC8102E), elG);
      spark = ctx.blob(0xFFD54A, 0.75); spark.visible = false;
      // مقياس فرق الجهد: قاعدة وعمود وعلامات (+30، 0، −50، −70) ومؤشِّر
      gaugeG = new THREE.Group(); ctx.scene.add(gaugeG);
      ctx.mesh(new THREE.BoxGeometry(0.9, 0.5, 0.9), M(0x8C7B6B, { roughness: 0.8 }), V(GX, -0.05, GZ), gaugeG);
      ctx.mesh(new THREE.BoxGeometry(0.14, GY0 + 0.3, 0.14), M(0x8C7B6B, { roughness: 0.8 }), V(GX, GY0 / 2 - 0.15, GZ), gaugeG);   // ساق المقياس
      ctx.mesh(new THREE.BoxGeometry(0.9, 0.16, 0.9), matBar, V(GX, GY0 - 0.1, GZ), gaugeG);
      ctx.mesh(new THREE.BoxGeometry(0.28, GH + 0.35, 0.28), matBar, V(GX, GY0 + GH / 2 + 0.1, GZ), gaugeG);
      [30, 0, -50, -70].forEach(v => ctx.rod(V(GX - 0.38, gy(v), GZ), V(GX + 0.38, gy(v), GZ), 0.055, matTick[v], gaugeG));
      column = ctx.mesh(new THREE.BoxGeometry(0.18, 1, 0.18), matCol, V(GX, GY0, GZ), gaugeG);
      marker = ctx.mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.14, 20), M(0xC8102E), V(GX, gy(-70), GZ), gaugeG);
    },
    rebuild(s, c) {
      S = s; ctx = c;
      const sc = 1 - sm(S.my), nsc = sm(S.my) * 0.85;
      // بروتينات الرقعة
      chan(XNG, matCNG, 1, sc); pump(XPM, sc);
      chan(XNA, matCNa, Math.max(S.na, depol(XNA)), sc); chan(XK, matCK, Math.max(S.k, kOpen(XK)), sc);
      // قنوات متكرِّرة على طول المحور (تُفتح مع مرور الموجة)
      REP.forEach(x => { const dn = depol(x - 0.3), ko = kOpen(x + 0.3); chan(x - 0.3, matCNa, dn, sc); chan(x + 0.3, matCK, ko, sc);
        if (sc > 0.5 && dn) ions(x - 0.3, 0.5, true, 2, matNa, 0.14); if (sc > 0.5 && ko) ions(x + 0.3, 0.5, false, 2, matK, 0.14); });
      // عقد رانفييه: تتركَّز فيها القنوات والمضخَّات
      NX.forEach(nx => { const dn = depol(nx), ko = kOpen(nx); chan(nx - 0.5, matCNa, dn, nsc); pump(nx, nsc * 0.8); chan(nx + 0.5, matCK, ko, nsc);
        if (nsc > 0.4 && dn) ions(nx - 0.5, 0.5, true, 2, matNa, 0.14); if (nsc > 0.4 && ko) ions(nx + 0.5, 0.5, false, 2, matK, 0.14); });
      // الشحنات على سطحَي الغشاء: + خارج و− داخل في الراحة، وتنعكس في إزالة الاستقطاب
      const xs = S.my > 0.5 ? NX.flatMap(nx => [nx - 0.45, nx + 0.45]) : SIGNX;
      xs.forEach(x => { const f = depol(x); sign(x, PHO, R + 0.3, !f, f ? matMinus : matPlus); sign(x, PHI, R - 0.32, !!f, f ? matPlus : matMinus); });
      // أيونات متحرِّكة عبر المضخَّة والقنوات
      ions(XPM, clamp01(S.pa * 2), false, 3, matNa); ions(XPM, clamp01(S.pa * 2 - 1), true, 2, matK);
      ions(XNG, S.lk, false, 1, matK);
      ions(XNA, S.nin, true, 5, matNa); ions(XK, S.kout, false, 4, matK);
      // الدوائر الموضعيَّة
      if (S.my > 0.5) { if (S.nd >= 0 && S.nd < 3) { const i = Math.floor(S.nd); loop(NX[i], NX[Math.min(3, i + 1)], 1.15, Math.min(1, (S.nd - i) * 1.4 + 0.15)); } }
      else if (S.lc > 0.02 && S.wa > 0.5) { const [fr, fl] = fronts(); if (fr < XR - 1.5) loop(fr, fr + 2.4, 0.8, S.lc); if (fl > XL + 1.5) loop(fl, fl - 2.4, 0.8, S.lc); }
    },
    place(s) {
      S = s;
      const tip = P(xP + 1.2, PHC, R + 0.5), e = sm(S.elc);
      elG.visible = S.elc > 0.02; elG.position.copy(tip).add(V(0, 1.8, -0.9).multiplyScalar(1 - e));
      spark.visible = S.spk > 0.02; spark.position.copy(tip); spark.scale.setScalar(0.1 + 0.4 * S.spk); spark.material.opacity = 0.75 * S.spk;
      sleeves.forEach(o => { o.visible = S.my > 0.02; o.material.opacity = 0.96 * sm(S.my); });
      gaugeG.visible = S.my < 0.5;                                                     // المقياس يخصُّ الرقعة؛ يُخفى في المحور المايليني
      const h = Math.max(0.02, gy(S.v) - GY0); column.scale.y = h; column.position.y = GY0 + h / 2; marker.position.y = gy(S.v);
    },
    ends(s) { S = s; return S.my < 0.5 ? [[V(GX + 0.75, gy(S.v), GZ - 0.75), fmt(S.v)]] : []; },
    idle(t, s) {
      ionsOut.forEach((n, i) => { n.o.position.copy(n.p).add(V(Math.sin(t * 0.9 + n.ph) * 0.09, Math.cos(t * 0.7 + n.ph) * 0.07, Math.sin(t * 0.5 + i) * 0.05)); });
      ionsIn.forEach((n, i) => { n.o.position.copy(n.p).add(V(Math.cos(t * 0.8 + n.ph) * 0.07, Math.sin(t * 0.6 + n.ph) * 0.06, Math.cos(t * 0.5 + i) * 0.05)); });
      if (spark.visible) spark.scale.setScalar((0.1 + 0.4 * S.spk) * (1 + 0.15 * Math.sin(t * 9)));
    },
  };
})();
