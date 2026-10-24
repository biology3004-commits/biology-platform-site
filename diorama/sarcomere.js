/* ديوراما: الانقباض العضلي — انزلاق الخيوط — الدرس ٥-٣ (كتاب الطالب ص ١٨٨–١٩٣، الأشكال ٥-٢٣ و٥-٢٤ و٥-٢٥) */
(function () {
  const { V, sm, M, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  // ---- الأبعاد (وحدات المشهد) ----
  const Y = 1.0;                                   // ارتفاع طبقة الخيوط
  const Z0 = 8.0, SHR = 1.65;                      // نصف طول القطعة في الاسترخاء، ومقدار اقتراب كلِّ قرص Z عند الانقباض الكامل (c = 1)
  const A2 = 5.0, LA = 6.2, TIP0 = Z0 - LA;        // نصف الحزمة A (الخيوط السميكة ثابتة)، طول الخيط الرفيع، طرف الأكتين في الاسترخاء
  const THICK = [-1.9, 0, 1.9], THIN = [-2.85, -0.95, 0.95, 2.85];   // مواضع الخيوط على المحور z
  const RT = 0.26, HR = 0.19, X0 = 1.2, STEPX = 0.55, NK = 7;        // نصف قطر الخيط السميك، نصف قطر الرأس، أوَّل رأس بعيداً عن الخط M، تباعد الرؤوس، عددها لكلِّ نصف
  const TP = [1.025, 2.675, 4.325];                // مواضع التروبونين على الخيط الرفيع (من القرص Z)
  const SRY = 3.3, TY = 3.5, TX = 5.0, PLY = 5.2, PLZ = -3.7;        // الشبكة الساركوبلازميَّة، أنيبيبا T (عند حدِّ الحزمتين A وI)، الساركوليما في الخلف
  const CIS = [4.4, 5.6];                          // الصهاريج الطرفيَّة للشبكة حول كلِّ أنيبيب T
  const RUL_Y = 2.3, RUL_Z = -4.1, RUL_Y2 = 2.95; // مسطرة الحزم: قضبان عائمة خلف القطعة (لا تحجبها الخيوط ولا لوحة النص)
  const rnd = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
  const ATP = '<span class="ltr">ATP</span>', ADP = '<span class="ltr">ADP</span>', PI = '<span class="ltr">P<sub>i</sub></span>', SR = '<span class="ltr">(SR)</span>';

  // ---- المواد ----
  const matMyo = M(0x7B4B2A), matHead = M(0xD98E3A, { roughness: 0.4 }), matNeck = M(0xB5713A);
  const matAct = M(0xE07A5F), matSite = M(0xFFF176, { roughness: 0.3 }), matTm = M(0xF5C400, { roughness: 0.4 }), matTn = M(0x6A1B9A);
  const matCa = M(0x2C7BE5, { roughness: 0.3 }), matPump = M(0xC2185B), matATP = M(0x2FA866, { roughness: 0.3 }), matPi = M(0x9AA7B4);
  const tr = (c, o, extra) => { const m = new THREE.MeshStandardMaterial(Object.assign({ color: c, transparent: true, opacity: o, roughness: 0.35, depthWrite: false }, extra || {})); m.color.convertSRGBToLinear(); return m; };
  const matSR = tr(0x8FCF9A, 0.5), matT = tr(0x4FB3BF, 0.75, { depthWrite: true }), matPlate = tr(0x4FB3BF, 0.7);
  const matZ = tr(0x2F3E55, 0.5), matM = tr(0x8A94A6, 0.45);
  const matGlow = new THREE.MeshStandardMaterial({ color: 0xFFF59D, emissive: 0xFFC107, emissiveIntensity: 1.2, roughness: 0.2 });
  const matRulA = M(0x7B4B2A, { roughness: 0.8 }), matRulI = M(0xE86A9C, { roughness: 0.8 }), matRulH = M(0xF29C3A, { roughness: 0.8 });
  const gBox = new THREE.BoxGeometry(1, 1, 1), gSph = new THREE.SphereGeometry(1, 16, 12), gCyl = new THREE.CylinderGeometry(1, 1, 1, 12), UP = V(0, 1, 0);

  let S, ctxRef, heads = [], thins = [], zDisc = [], rul = {}, ions = [], glows = [], atpB, adpB, piB, readout;
  const Zc = () => Z0 - SHR * S.c, tip = () => Zc() - LA;
  const off = (zt, s) => ((zt > 1 && s < 0) || (zt < -1 && s > 0)) ? 0.275 : 0;   // تداخل رؤوس خيطين سميكين على الخيط الرفيع نفسه
  const cov = x => sm((Math.abs(x) - tip() - 0.05) / 0.35);                      // هل يغطِّي الأكتين موضع هذا الرأس؟
  const setRod = (o, a, b, r) => { const d = new THREE.Vector3().subVectors(b, a), L = d.length(); o.scale.set(r, Math.max(L, 1e-3), r); o.position.copy(a).addScaledVector(d, 0.5); o.quaternion.setFromUnitVectors(UP, d.normalize()); };

  // ---- مواضع مشتقَّة من الحالة ----
  function headPos(h) {                                                          // مركز كرة الرأس
    const c = cov(h.x), a = S.att * c, pw = S.pw * c;
    return V(h.x + h.h * 0.4 * (1 - 2 * pw), Y, h.zt + h.s * (0.36 + 0.16 * a));
  }
  const tmAng = () => sm(S.tm) * Math.PI / 2;
  function tropW(ti, m) {                                                        // موضع التروبونين في المشهد (ti: رقم الخيط الرفيع 0–7)
    const side = ti < 4 ? -1 : 1, zj = THIN[ti % 4], th = tmAng(), xl = TP[m];
    const y2 = 0.12 * Math.cos(th) + 0.3 * Math.sin(th), z2 = 0.12 * Math.sin(th) - 0.3 * Math.cos(th);
    return V(side * (Zc() - xl), Y + y2, zj - side * z2);
  }
  const ionStart = i => { const ti = (i / 3) | 0, side = ti < 4 ? -1 : 1; return V(side * CIS[i % 2] + 0.12 * Math.sin(i * 3.1), SRY + 0.05 * Math.cos(i * 2.3), -2.7 + 5.4 * rnd(i, 5)); };
  function ionPos(i) {
    const st = ionStart(i), tg = tropW((i / 3) | 0, i % 3).add(V(0, 0.32, 0));
    const u = sm(Math.min(1, S.ca * (1.15 - 0.3 * rnd(i, 6))));
    let p = st.clone().lerp(tg, u); p.y += 0.9 * Math.sin(Math.PI * u) * (0.7 + 0.5 * rnd(i, 7));
    if (S.car > 0) { const v = sm(S.car); p = tg.clone().lerp(st, v); p.y += 0.9 * Math.sin(Math.PI * v) * (0.7 + 0.5 * rnd(i, 8)); }
    return p;
  }
  function glowPos(sg, u) {                                                      // مسار النبضة: على الساركوليما إلى فوَّهة الأنيبيب، ثم نزولاً، ثم عبر الليف
    const L1 = TX, L2 = PLY - TY, L3 = 3.4 - PLZ, T = L1 + L2 + L3, d = Math.max(0, u) * T;
    if (d <= L1) return V(sg * d, PLY + 0.15, PLZ);
    if (d <= L1 + L2) return V(sg * TX, PLY - (d - L1), PLZ);
    return V(sg * TX, TY, PLZ + (d - L1 - L2));
  }
  let hero;
  const heroPos = () => headPos(hero);
  const atpPos = () => heroPos().add(V(1.1, 1.5, 1.0)).lerp(heroPos().add(V(0, 0.32, 0.05)), sm(S.atp));
  const adpPos = () => heroPos().add(V(0, 0.32, 0.05)).add(V(-0.45, 0.85, 0.55).multiplyScalar(sm(S.hyd)));
  const piPos = () => heroPos().add(V(0, 0.32, 0.05)).add(V(0.55, 0.7, 0.7).multiplyScalar(sm(S.hyd)));
  const pct = v => '<span class="ltr">' + Math.round(v * 100) + '%</span>';

  window.DIORAMA = {
    id: 'sarcomere', title: 'الانقباض العضلي: انزلاق الخيوط', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الخامسة: التحكُّم والتنسيق — الدرس ٥-٣',
    source: 'النص من كتاب الطالب: ٥-٣ الانقباض العضلي (ص ١٨٨–١٩٣) والأشكال ٥-٢٣ و٥-٢٤ و٥-٢٥',
    legend: [['#7B4B2A', 'خيط سميك (الميوسين)', 'tube'], ['#D98E3A', 'رأس الميوسين', 'dot'], ['#E07A5F', 'خيط رفيع (الأكتين)', 'tube'], ['#F5C400', 'التروبوميوسين', 'tube'], ['#6A1B9A', 'التروبونين', 'dot'], ['#FFF176', 'موقع ربط الميوسين', 'dot'], null,
             ['#2C7BE5', 'أيونات الكالسيوم', 'dot'], ['#8FCF9A', 'الشبكة الساركوبلازمية (SR)', 'tube'], ['#4FB3BF', 'أنيبيب T والساركوليما', 'tube'], ['#C2185B', 'مضخَّة بروتينيَّة'], ['#2F3E55', 'القرص Z'], ['#8A94A6', 'الخط M'], ['#2FA866', 'ATP', 'dot']],
    camera: { VH: 18.5, center: [0.3, 1.5, 0.3], elevation: 20, azimuth: 25 },
    base: { L: 20, W: 10.5, x: 0.01 },
    BASE: { c: 0, imp: 0, ca: 0, car: 0, tm: 0, att: 0, pw: 0, atp: 0, hyd: 0, fo: 0 },
    noGeom: ['fo'],
    // نقطة التركيز: 0 المشهد كلُّه، 1 تروبونين على الخيط الأمامي، 2 الرأس المختار، 3 الساركوليما وأنيبيب T، 4 الصهاريج اليمنى
    focus(s) { S = s; const k = Math.round(S.fo || 0);
      if (k === 1) return tropW(7, 1); if (k === 2) return heroPos(); if (k === 3) return V(2.5, 4.3, -2.8); if (k === 4) return V(TX, 2.4, 0.8); return V(0, 1.4, 0); },
    STEPS: [
      { t: 'القطعة العضليَّة في حالة الاسترخاء',
        p: 'يسمى جزء اللييف العضلي الواقع بين خطي Z باسم القطعة العضلية Sarcomere. فتتكوّن الخيوط السميكة في الغالب من بروتين الميوسين Myosin، بينما الخيوط الرفيعة فتتكوّن من بروتين الأكتين Actin. تشير الأجزاء الداكنة من الخطوط، الحزمة A، إلى خيوط الميوسين السميكة. وأما الأجزاء الفاتحة، الحزمة I، فهي حيث لا توجد خيوط الميوسين السميكة، وتوجد فقط خيوط الأكتين الرفيعة. والمنطقة في وسط الحزمة A والتي تبدو أفتح لونًا تسمى الحزمة H وتمثل الأجزاء التي توجد بها الخيوط السميكة فقط.',
        seq: [[{ '!fo': 0 }, 400]],
        pills: [['خيط سميك من الميوسين', GLD, () => V(-3.3, Y, -1.9), -150, -10], ['خيط رفيع من الأكتين', RED, () => V(Zc() - 2.2, Y, 2.85), 70, 70],
                ['القرص Z', GRY, () => V(Zc(), Y + 1.0, -2.0), -40, 90], ['الخط M', GRY, () => V(0, Y + 0.6, 0), 110, 60],
                ['الحزمة A: خيوط الميوسين السميكة', GLD, () => V(-4.0, RUL_Y, RUL_Z), -50, 60], ['الحزمة I: خيوط الأكتين الرفيعة فقط', PNK, () => V((Zc() + A2) / 2, RUL_Y, RUL_Z), 90, 70], ['الحزمة H: الخيوط السميكة فقط', ORG, () => V(0.6, RUL_Y2, RUL_Z), -80, -70]] },
      { t: 'وصول النبضات العصبيَّة عبر أنيبيبات T',
        p: 'تنقبض العضلات المخططة فقط عندما يتم تنبيهها للقيام بذلك عن طريق النبضات العصبية التي تصل إليها عبر الخلايا العصبية الحركية. يحتوي الساركوليما على العديد من الانثناءات العميقة تمتد إلى داخل الألياف العضلية، تسمى أُنيبيبات (T). تمتد هذه الأُنيبيبات بالقرب من (SR).',
        n: 'أنيبيبات T: انثناءات من الساركوليما تمتد عميقًا داخل الليف العضلي وتنقل إليها النبضات العصبية.',
        seq: [[{ '!fo': 3, zoom: 1.3 }, 700], [{ imp: 1 }, 2600], [{ zoom: 1 }, 600]],
        pills: [['الساركوليما', TEAL, () => V(-2.0, PLY, PLZ), -60, -45], ['أنيبيب T', TEAL, () => V(TX, TY, 2.6), 110, 50], ['الشبكة الساركوبلازمية (SR)', GRN, () => V(-2.0, SRY, 2.4), -110, 70],
                ['النبضات العصبية', RED, () => glowPos(-1, S.imp), -60, -60]] },
      { t: 'إطلاق أيونات الكالسيوم من الشبكة الساركوبلازميَّة',
        p: 'عندما تنقبض العضلة، يتم إطلاق أيونات الكالسيوم من (SR) وترتبط بالتروبونين.',
        seq: [[{ '!fo': 4, zoom: 1.5 }, 700], [{ ca: 1 }, 2400], [{ zoom: 1 }, 700]],
        pills: [['أيونات الكالسيوم', BLU, () => ionPos(19), -70, -60], ['الشبكة الساركوبلازمية (SR)', GRN, () => V(CIS[1], SRY, -1.5), 120, -60], ['التروبونين', PUR, () => tropW(7, 1), 100, 60]] },
      { t: 'ارتباط الكالسيوم بالتروبونين وانكشاف مواقع الارتباط',
        p: 'هذا الارتباط يحفز جزيئات التروبونين لتغيير شكلها. ونتيجة لذلك، تنتقل جزيئات التروبونين والتروبوميوسين إلى موضع مختلف على الخيوط الرفيعة، ما يؤدي إلى انكشاف أجزاء من جزيئات الأكتين، والتي تعمل كمواقع لربط الميوسين.',
        n: 'عندما تنبسط العضلة، يستقر التروبوميوسين والتروبونين في موضع في خيوط الأكتين وهذا يمنع الميوسين من الارتباط.',
        seq: [[{ '!fo': 1, zoom: 3.0 }, 900], [{ tm: 1 }, 1800]],
        pills: [['التروبونين يغيِّر شكله', PUR, () => tropW(7, 1), 110, -70], ['التروبوميوسين ينتقل إلى موضع مختلف', GLD, () => { const th = tmAng(); return V(Zc() - 3.6, Y - 0.3 * Math.sin(th), 2.85 + 0.3 * Math.cos(th)); }, -40, 90],
                ['مواقع ربط الميوسين المكشوفة', ORG, () => V(Zc() - 2.95, Y, 2.85 - 0.27), -120, -40]] },
      { t: 'ارتباط رؤوس الميوسين بالأكتين: الجسور المتقاطعة',
        p: 'تتكوّن الخيوط السميكة من العديد من جزيئات الميوسين، وهو بروتين ليفي له رأس كروي الشكل. ترتبط رؤوس الميوسين بهذه المواقع، وتشكل جسورًا متقاطعة بين نوعَي الخيوط.',
        seq: [[{ '!fo': 2, zoom: 3.0 }, 900], [{ att: 1 }, 1400]],
        pills: [['رأس الميوسين', GLD, () => heroPos(), 100, -70], ['جسر متقاطع بين الخيطين', RED, () => heroPos().add(V(0, 0, -0.15)), -120, 60], ['موقع الربط على الأكتين', ORG, () => heroPos().add(V(0, 0, 0.45)), 120, 50]] },
      { t: 'تتحرَّك الرؤوس وتسحب الأكتين نحو مركز القطعة',
        p: 'بعد ذلك تتحرك رؤوس الميوسين، وتسحب خيوط الأكتين نحو مركز القطعة العضلية. تصبح القطع العضلية في كل لييف عضلي أقصر مع سحب أقراص Z قرب بعضها. يُعرف النموذج الذي يفسر كيفية انقباض اللييف العضلي باسم نموذج الخيط المنزلق Sliding filament model للانقباض العضلي.',
        n: 'لاحظ في المسطرة: تضيق الحزمة I والحزمة H بينما يبقى طول الحزمة A (الخيوط السميكة) ثابتاً.',
        seq: [[{ pw: 1, c: 1 / 3 }, 1800], [{ zoom: 1 }, 1000]],
        pills: [['تتحرك رؤوس الميوسين فتسحب الأكتين', RED, () => heroPos(), 90, -80], ['تُسحب أقراص Z قرب بعضها', GRY, () => V(-Zc(), Y + 1.0, -2.0), -130, 60],
                ['الحزمة I تضيق', PNK, () => V((Zc() + A2) / 2, RUL_Y, RUL_Z), 90, 70], ['الحزمة H تضيق', ORG, () => V(0.4, RUL_Y2, RUL_Z), -80, -70], ['الحزمة A ثابتة', GLD, () => V(-4.0, RUL_Y, RUL_Z), -50, 60]] },
      { t: 'ATP: انفكاك الرؤوس وعودتها',
        p: 'ثم تقوم الرؤوس بالتحلُّل المائي لجزيئات ATP، لتوفير طاقة كافية لتمكينها من الانفكاك عن خيوط الأكتين. تعود الرؤوس وتتحرك إلى مواقعها السابقة وترتبط مرة أخرى بالمواقع المكشوفة على الأكتين.',
        n: 'كل رأس ميوسين يحتوي على الإنزيم ATPase الذي يحلل مائيًا ATP إلى ADP و Pi — يُعرض ذلك على رأس واحد للتوضيح.',
        seq: [[{ '!fo': 2, zoom: 3.0 }, 700], [{ atp: 1 }, 900], [{ att: 0, hyd: 1 }, 900], [{ pw: 0 }, 900], [{ att: 1 }, 900]],
        pills: [[ATP + ' يرتبط برأس الميوسين', GRN, () => atpPos(), 110, -60], [ADP + ' + ' + PI, GRN, () => adpPos(), -90, -60], ['ينفكُّ الرأس عن الأكتين ثم يعود ويرتبط من جديد', GLD, () => heroPos(), -110, 70]] },
      { t: 'تتكرَّر الدورة ما دام ATP متوافراً',
        p: 'لقد تحركت الخيوط الرفيعة نتيجة لقوة التحريك السابقة، لذلك ترتبط رؤوس الميوسين الآن أبعد قليلًا على طول الخيوط الرفيعة مقتربة من القرص Z. يستمر ويتكرر هذا طالما أن العضلة لديها إمدادات كافية من ATP.',
        n: 'تأتي الطاقة اللازمة للحركة من جزيئات ATP التي ترتبط برؤوس الميوسين.',
        seq: [[{ '!atp': 0, '!hyd': 0, pw: 1, c: 2 / 3 }, 1400], [{ zoom: 1.3 }, 500], [{ att: 0 }, 450], [{ pw: 0 }, 450], [{ att: 1 }, 450], [{ pw: 1, c: 1 }, 1100], [{ zoom: 1 }, 600]],
        pills: [['ترتبط الرؤوس أبعد قليلاً مقتربة من القرص Z', GLD, () => heroPos(), 90, -80], ['القرص Z', GRY, () => V(-Zc(), Y + 1.0, -2.0), -110, 60], ['الحزمة I', PNK, () => V((Zc() + A2) / 2, RUL_Y, RUL_Z), 90, 70], ['الحزمة H', ORG, () => V(0.3, RUL_Y2, RUL_Z), -80, -70]] },
      { t: 'الاسترخاء: إعادة أيونات الكالسيوم إلى الشبكة بالمضخَّات البروتينيَّة',
        p: 'تحتوي أغشية (SR) على عدد ضخم من المضخات البروتينية التي تنقل أيونات الكالسيوم إلى التجاويف الداخلية لـ (SR). عندما تنبسط العضلة، يستقر التروبوميوسين والتروبونين في موضع في خيوط الأكتين وهذا يمنع الميوسين من الارتباط.',
        seq: [[{ '!fo': 4, zoom: 1.5 }, 600], [{ car: 1 }, 2200], [{ tm: 0, att: 0 }, 1000], [{ pw: 0, zoom: 1 }, 700]],
        pills: [['مضخات بروتينية في أغشية (SR)', PNK, () => V(CIS[1], SRY + 0.3, 1.9), 120, -60], ['أيونات الكالسيوم تعود إلى (SR)', BLU, () => ionPos(19), -80, -60], ['التروبوميوسين يمنع الميوسين من الارتباط', GLD, () => V(Zc() - 3.6, Y, 2.85 + 0.3), -40, 90]] },
    ],
    setup(ctx) {
      ctxRef = ctx; S = Object.assign({}, this.BASE);
      const scene = ctx.scene;
      // الخيوط السميكة: ثلاثة أنابيب ثابتة على طول الحزمة A، ورؤوس الميوسين (كرة + عنق) تتَّجه بعيداً عن الخط M
      THICK.forEach(zt => {
        ctx.rod(V(-A2, Y, zt), V(A2, Y, zt), RT, matMyo, scene);
        [-1, 1].forEach(s => [-1, 1].forEach(h => { for (let k = 0; k < NK; k++) {
          const x = h * (X0 + STEPX * k + off(zt, s));
          const neck = ctx.mesh(gCyl, matNeck, null, scene), ball = ctx.mesh(gSph, matHead, null, scene);
          heads.push({ zt, s, h, k, x, neck, ball });
        } }));
      });
      hero = heads.find(h => h.zt > 1 && h.s > 0 && h.h > 0 && h.k === 4);
      // الخيوط الرفيعة: سلسلتا أكتين ملتفَّتان + مواقع الربط + شريطا التروبوميوسين + التروبونين (في مجموعة تدور حول محور الخيط)
      THIN.forEach((zj, j) => [-1, 1].forEach(side => {
        const g = new THREE.Group(); g.position.set(side * Z0, Y, zj); if (side > 0) g.rotation.y = Math.PI; scene.add(g);
        for (let x = 0.15; x <= LA; x += 0.275) [0, Math.PI].forEach(ph => { const a = 2 * Math.PI * x / 2.2 + ph; ctx.ball(V(x, 0.1 * Math.sin(a), 0.1 * Math.cos(a)), 0.16, matAct, g); });
        [-1, 1].forEach(l => {
          const w = side > 0 ? -l : l, zt = zj + 0.95 * w, has = THICK.some(z => Math.abs(z - zt) < 0.01), o = has ? off(zt, -w) : 0;
          for (let x = 0.2 + o; x <= LA - 0.15; x += STEPX) { const m = ctx.mesh(gSph, matSite, V(x, 0, l * 0.27), g); m.scale.set(0.085, 0.085, 0.03); }
        });
        const inner = new THREE.Group(); g.add(inner);
        [-1, 1].forEach(l => ctx.rod(V(0.05, 0, l * 0.3), V(LA, 0, l * 0.3), 0.09, matTm, inner));
        const tn = TP.map(xl => ctx.ball(V(xl, 0.12, -0.3), 0.17, matTn, inner));
        thins.push({ g, inner, tn, side, zj, ti: (side < 0 ? 0 : 4) + j });
      }));
      // قرصا Z والخط M
      [-1, 1].forEach(side => { const d = ctx.mesh(gBox, matZ, V(side * Z0, Y, 0), scene); d.scale.set(0.2, 2.2, 6.6); zDisc.push(d); });
      ctx.mesh(gBox, matM, V(0, Y, 0), scene).scale.set(0.1, 2.2, 6.2);
      // الساركوليما (لوح في الخلف) وأنيبيبا T والشبكة الساركوبلازميَّة ومضخَّاتها
      ctx.mesh(gBox, matPlate, V(0, PLY, PLZ), scene).scale.set(12.4, 0.1, 0.9);
      [-1, 1].forEach(sg => {
        ctx.rod(V(sg * TX, PLY, PLZ), V(sg * TX, TY, PLZ), 0.2, matT, scene);
        ctx.rod(V(sg * TX, TY, PLZ), V(sg * TX, TY, 3.4), 0.2, matT, scene);
        CIS.forEach((cx, q) => { ctx.rod(V(sg * cx, SRY, -3.2), V(sg * cx, SRY, 3.2), 0.27, matSR, scene); (q ? [-0.8, 1.9] : [-2.0, 0.6]).forEach(z => ctx.mesh(gBox, matPump, V(sg * cx, SRY + 0.3, z), scene).scale.setScalar(0.24)); });
        [-2.4, 0, 2.4].forEach(z => ctx.rod(V(sg * CIS[1], SRY, z), V(sg * 7.3, SRY, z), 0.11, matSR, scene));
        ctx.rod(V(sg * 7.3, SRY, -2.4), V(sg * 7.3, SRY, 2.4), 0.11, matSR, scene);
      });
      [-2.4, 0, 2.4].forEach(z => ctx.rod(V(-CIS[0], SRY, z), V(CIS[0], SRY, z), 0.11, matSR, scene));
      // أيونات الكالسيوم، النبضة، ATP
      for (let i = 0; i < 24; i++) ions.push(ctx.mesh(gSph, matCa, null, scene));
      for (let q = 0; q < 6; q++) glows.push(ctx.mesh(gSph, matGlow, null, scene));
      atpB = ctx.mesh(gSph, matATP, null, scene); adpB = ctx.mesh(gSph, matATP, null, scene); piB = ctx.mesh(gSph, matPi, null, scene);
      // مسطرة الحزم على اللوح أمام القطعة + لوحة النِّسب
      rul.A = ctx.mesh(gBox, matRulA, V(0, RUL_Y, RUL_Z), scene); rul.A.scale.set(2 * A2, 0.16, 0.4);
      rul.H = ctx.mesh(gBox, matRulH, V(0, RUL_Y2, RUL_Z), scene);
      rul.IL = ctx.mesh(gBox, matRulI, null, scene); rul.IR = ctx.mesh(gBox, matRulI, null, scene);
      const stage = document.getElementById('stage');
      if (stage) {
        readout = document.createElement('div');
        readout.style.cssText = 'position:absolute;left:26px;top:72px;background:rgba(255,255,255,.95);border-radius:14px;padding:8px 16px 10px;box-shadow:0 3px 12px rgba(30,45,70,.16);font-size:16px;font-weight:700;color:#1F2937;direction:rtl;text-align:right;line-height:1.75;border-right:6px solid #C8102E;min-width:250px';
        stage.appendChild(readout);
      }
    },
    rebuild() {},
    place(s) {
      S = s;
      const zc = Zc(), tp = tip();
      heads.forEach(h => { const p = headPos(h); h.ball.position.copy(p); h.ball.scale.setScalar(HR); setRod(h.neck, V(h.x, Y, h.zt + h.s * RT), p, 0.07); });
      const th = tmAng();
      thins.forEach(t => { t.g.position.x = t.side * zc; t.inner.rotation.x = th; t.tn.forEach(b => b.scale.set(0.17 * (1 + 0.5 * sm(S.tm)), 0.17 * (1 - 0.15 * sm(S.tm)), 0.17 * (1 - 0.15 * sm(S.tm)))); });
      zDisc[0].position.x = -zc; zDisc[1].position.x = zc;
      rul.H.scale.set(Math.max(0.05, 2 * tp), 0.16, 0.4);
      rul.IL.position.set(-(zc + A2) / 2, RUL_Y, RUL_Z); rul.IL.scale.set(zc - A2, 0.16, 0.4);
      rul.IR.position.set((zc + A2) / 2, RUL_Y, RUL_Z); rul.IR.scale.set(zc - A2, 0.16, 0.4);
      ions.forEach((o, i) => { o.position.copy(ionPos(i)); o.scale.setScalar(0.12); });
      const gv = S.imp > 0.005 && S.ca < 0.6 ? Math.max(0, 1 - S.ca / 0.6) : 0;
      glows.forEach((o, q) => { const sg = q < 3 ? -1 : 1, k = q % 3; o.visible = gv > 0; o.position.copy(glowPos(sg, S.imp - 0.025 * k)); o.scale.setScalar(gv * (0.32 - 0.07 * k)); });
      atpB.visible = S.atp > 0.01 && S.hyd < 0.01; atpB.position.copy(atpPos()); atpB.scale.setScalar(0.17);
      adpB.visible = piB.visible = S.hyd > 0.01; adpB.position.copy(adpPos()); adpB.scale.setScalar(0.15); piB.position.copy(piPos()); piB.scale.setScalar(0.1);
      if (readout) readout.innerHTML = '<div style="color:#0A4D2E;font-size:15px">أطوال الحزم نسبةً إلى الاسترخاء</div>' +
        'القطعة العضليَّة (بين قرصَي Z): ' + pct(zc / Z0) + '<br>الحزمة A: ' + pct(1) + '<br>الحزمة I: ' + pct((zc - A2) / (Z0 - A2)) + '<br>الحزمة H: ' + pct(tp / TIP0);
    },
    ends() { const zc = Zc(); return [[V(-zc, Y + 1.55, 0), 'Z'], [V(zc, Y + 1.55, 0), 'Z'], [V(0, Y + 1.55, 0), 'M'], [V(-3.0, RUL_Y, RUL_Z), 'A'], [V(0, RUL_Y2, RUL_Z), 'H'], [V(-(zc + A2) / 2, RUL_Y, RUL_Z), 'I'], [V((zc + A2) / 2, RUL_Y, RUL_Z), 'I']]; },
  };
})();
