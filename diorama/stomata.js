/* ديوراما: فتح الثغر وإغلاقه — الدرس ٤-٥ الاتزان الداخلي في النباتات (كتاب الطالب ص ١٤٦–١٥٠) */
(function () {
  const { V, sm, M, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const UP = V(0, 1, 0), ZH = V(0, 0, 1);
  const L0 = 10.0, DL = 0.6, Y0 = 0.12, PHI = 0.72;                  // طول الخليَّة، زيادة الطول عند الفتح، ارتفاع سطح البشرة، زاوية مواقع البروتينات على السطح العلوي الخارجي
  const clamp = (t, a = 0, b = 1) => Math.min(b, Math.max(a, t));
  const sinp = u => Math.sin(Math.PI * clamp(u));
  const RH = u => 0.36 + 0.84 * Math.pow(sinp(u), 0.8);               // نصف القطر الأفقي للمقطع عند u
  const RV = u => 0.46 + 0.32 * sinp(u);                             // نصف القطر الرأسي
  let S, ctxRef;
  // مركز مقطع الخليَّة الحارسة s (±1) عند الموضع u على طولها؛ الانحناء دالَّة في S.open (0 مغلق … 1 مفتوح)
  function C(s, u) { return V((u - 0.5) * (L0 + DL * S.len), Y0 + RV(u), s * (RH(u) + 0.03 + 1.4 * S.open * sinp(u))); }
  function frame(s, u) {                                               // الإطار المحلِّي: T على الطول، n1 أفقي إلى الخارج، n2 إلى الأعلى
    const T = C(s, u + 0.01).sub(C(s, u - 0.01)).normalize();
    const n1 = new THREE.Vector3().crossVectors(T, UP).normalize().multiplyScalar(s);
    return { T, n1, n2: UP };
  }
  // نقطة على نصف قطر f من المقطع عند الزاوية phi (0 إلى الخارج أفقيّاً، π/2 إلى الأعلى)
  function P(s, u, phi, f) { const { n1, n2 } = frame(s, u); return C(s, u).addScaledVector(n1, f * RH(u) * Math.cos(phi)).addScaledVector(n2, f * RV(u) * Math.sin(phi)); }
  function NRM(s, u, phi) { const { n1, n2 } = frame(s, u); return n1.clone().multiplyScalar(Math.cos(phi) / RH(u)).addScaledVector(n2, Math.sin(phi) / RV(u)).normalize(); }

  // ---- المواد
  const matCell = new THREE.MeshStandardMaterial({ color: 0xDCC58F, transparent: true, opacity: 0.62, roughness: 0.5, depthWrite: false, side: THREE.DoubleSide }); matCell.color.convertSRGBToLinear();
  const matWallT = M(0x5A5F66, { roughness: 0.7 }), matWallN = M(0x8A9099, { roughness: 0.7 });
  const matFib = M(0xF2D230, { roughness: 0.45 }), matChl = M(0x3C9D4E, { roughness: 0.5 }), matStarch = M(0xFFFFFF, { roughness: 0.4 });
  const matVac = new THREE.MeshStandardMaterial({ color: 0x9ED3F5, transparent: true, opacity: 0.8, roughness: 0.3 }); matVac.color.convertSRGBToLinear();
  const matPump = M(0xE4472E, { roughness: 0.4 }), matPumpOff = M(0xB9B9B9, { roughness: 0.7 }), matK = M(0x2C7BE5, { roughness: 0.4 }), matAq = M(0x0E8C88, { roughness: 0.4 });
  const matH = M(0xF08C2E), matKi = M(0x8E5BD9), matW = M(0x4FB3E8, { roughness: 0.3 }), matMal = M(0x1B5E20);
  const matTile = [M(0xCFE3B4, { roughness: 0.9 }), M(0xC4DBA8, { roughness: 0.9 }), M(0xD6E8BE, { roughness: 0.9 })], matSlot = M(0x26331F, { roughness: 1 });
  const gSph = new THREE.SphereGeometry(1, 18, 14), gTor = new THREE.TorusGeometry(1, 0.045, 6, 28), gBox = new THREE.BoxGeometry(1, 1, 1);

  // ---- مواقع البروتينات في الغشاء (u على طول الخليَّة) والعضيَّات
  const PUMPS = [0.32, 0.5, 0.68], KCH = [0.41, 0.59], AQP = [0.23, 0.77];
  const CHL = [0.2, 0.34, 0.5, 0.66, 0.8], VAC = [0.28, 0.42, 0.58, 0.72], RINGS = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  const chlPos = (s, u) => P(s, u, Math.PI, 0.3).addScaledVector(UP, 0.02);                // البلاستيدات نحو جهة الثغر
  const vacPos = (s, u) => P(s, u, 0, 0.32).addScaledVector(UP, -0.04);                   // الفجوات نحو الجهة الخارجية
  const vacR = () => 0.19 + 0.2 * S.vac;
  const nearestVac = u => VAC.reduce((a, b) => Math.abs(b - u) < Math.abs(a - u) ? b : a);
  // توزيع ثابت (شبه عشوائي) للأيونات
  const R1 = n => Array.from({ length: n }, (_, i) => ((i * 7919) % 97) / 97 - 0.5);
  const JIT = R1(40);
  const prog = (key, i, n, lam = 0.8) => clamp(S[key] * (1 + lam) - lam * i / Math.max(1, n - 1));
  const bump = t => sm(Math.min(t * 6, (1 - t) * 6));                 // يظهر على المسار ويختفي عند طرفيه

  const surf = (s, u) => P(s, u, PHI, 1), nrm = (s, u) => NRM(s, u, PHI);
  // H⁺: 2 لكل مضخَّة — من داخل الخليَّة إلى خارجها عبر المضخَّة
  function hPos(s, q, i) {
    const u = PUMPS[q], idx = q * 2 + i, n = nrm(s, u);
    const inside = P(s, u, PHI, 0.35).addScaledVector(frame(s, u).T, 0.25 * JIT[idx]);
    const outside = P(s, u, 0, 1).addScaledVector(frame(s, u).n1, 0.6 + 0.5 * i).addScaledVector(frame(s, u).T, 0.5 * JIT[idx + 7]); outside.y = 0.3 + 0.15 * i;
    return inside.lerp(outside, sm(prog('h', idx, 6)));
  }
  // K⁺: 4 لكل قناة — من خارج الخليَّة إلى داخلها عبر القناة، وعند الإغلاق من الداخل إلى الخلايا المجاورة
  function kPos(s, q, i) {
    const u = KCH[q], idx = q * 4 + i, n = nrm(s, u), { T } = frame(s, u);
    const uin = u + (i - 1.5) * 0.09;
    const inside = P(s, uin, 0.5 + 1.2 * ((i % 2) ? 1 : -1), 0.25 + 0.15 * (i % 2)).addScaledVector(UP, -0.12);
    if (S.kx > 0) {
      const far = P(s, u, 0, 1).addScaledVector(frame(s, u).n1, 1.2 + 0.45 * i).addScaledVector(T, 0.7 * JIT[idx + 11]); far.y = 0.34;
      return inside.lerp(far, sm(prog('kx', idx, 8)));
    }
    const out = P(s, u, 0, 1).addScaledVector(frame(s, u).n1, 0.7 + 0.4 * i).addScaledVector(T, 0.5 * JIT[idx + 3]); out.y = 0.32 + 0.12 * i;
    return out.lerp(inside, sm(prog('k', idx, 8)));
  }
  // الماء: 3 لكل أكوابورين — من الخارج إلى أقرب فجوة؛ وعند الإغلاق بالعكس
  function wPos(s, q, i) {
    const u = AQP[q], idx = q * 3 + i, n = nrm(s, u), { T } = frame(s, u);
    const out = P(s, u, 0, 1).addScaledVector(frame(s, u).n1, 0.6 + 0.4 * i).addScaledVector(T, 0.45 * JIT[idx + 17]); out.y = 0.3 + 0.12 * i;
    const vac = vacPos(s, nearestVac(u)).addScaledVector(T, 0.1 * JIT[idx + 5]);
    const t = S.wx > 0 ? prog('wx', idx, 6) : prog('w', idx, 6);
    return S.wx > 0 ? [vac.lerp(out, sm(t)), bump(t)] : [out.lerp(vac, sm(t)), bump(t)];
  }
  // المالات: 1 من كل بلاستيدة إلى أقرب فجوة؛ وعند الإغلاق تعود
  function mPos(s, q) {
    const u = CHL[q], a = chlPos(s, u), b = vacPos(s, nearestVac(u));
    const t = S.mx > 0 ? prog('mx', q, 5) : prog('m', q, 5);
    return S.mx > 0 ? [b.lerp(a, sm(t)), bump(t)] : [a.lerp(b, sm(t)), bump(t)];
  }
  const starch = () => 1 - sm(S.m) * (1 - sm(S.mx));                 // مستوى النشا في البلاستيدة

  // ---- جسم الخليَّة الحارسة: أنبوب بمقطع بيضاوي متغيِّر (كلوي الشكل)
  function cellBody(s, ctx) {
    const N = 44, K = 18, pos = [], nor = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N, c = C(s, u), { n1, n2 } = frame(s, u), rh = RH(u), rv = RV(u);
      for (let k = 0; k <= K; k++) {
        const a = k / K * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
        pos.push(c.x + rh * ca * n1.x + rv * sa * n2.x, c.y + rh * ca * n1.y + rv * sa * n2.y, c.z + rh * ca * n1.z + rv * sa * n2.z);
        const nn = n1.clone().multiplyScalar(ca / rh).addScaledVector(n2, sa / rv).normalize(); nor.push(nn.x, nn.y, nn.z);
      }
    }
    for (let i = 0; i < N; i++) for (let k = 0; k < K; k++) { const a = i * (K + 1) + k, b = a + K + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setIndex(idx);
    const o = new THREE.Mesh(g, matCell); o.userData.own = true; o.castShadow = true; o.renderOrder = 2; ctx.dyn.add(o);
    [0, 1].forEach(u => { const e = new THREE.Mesh(gSph, matCell); e.position.copy(C(s, u)); e.scale.set(0.3, RV(u), RH(u)); e.renderOrder = 2; ctx.dyn.add(e); });
  }
  function wallTubes(s, ctx) {
    const pts = f => { const a = []; for (let u = 0.03; u <= 0.971; u += 0.04) a.push(f(u)); return a; };
    ctx.tubePts(pts(u => P(s, u, Math.PI, 1).addScaledVector(frame(s, u).n1, 0.2)), 0.2, matWallT);          // الجدار الداخلي السميك (يواجه فتحة الثغر)
    ctx.tubePts(pts(u => P(s, u, 0, 1).addScaledVector(frame(s, u).n1, -0.07)), 0.07, matWallN);              // الجدار الخارجي الرقيق (يواجه خلايا البشرة المجاورة)
    RINGS.forEach(u => {                                                                                         // حزم ألياف السليلوز الدقيقة (أطواق حول الخليَّة)
      const { T, n1, n2 } = frame(s, u), r = new THREE.Mesh(gTor, matFib);
      r.position.copy(C(s, u)); r.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(n1, n2, T)); r.scale.set(RH(u) + 0.03, RV(u) + 0.03, 1); r.castShadow = true; ctx.dyn.add(r);
    });
  }
  function protein(s, u, r, mat, len, ctx) { const p = surf(s, u), n = nrm(s, u); return ctx.rod(p.clone().addScaledVector(n, -len), p.clone().addScaledVector(n, len), r, mat); }
  const ell = (p, sx, sy, sz, mat, ctx) => { const o = new THREE.Mesh(gSph, mat); o.position.copy(p); o.scale.set(sx, sy, sz); o.castShadow = true; ctx.dyn.add(o); return o; };

  window.DIORAMA = {
    id: 'stomata', title: 'فتح الثغر وإغلاقه', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الرابعة: الاتزان الداخلي — ٤-٥ الاتزان الداخلي في النباتات',
    source: 'النص من كتاب الطالب: ٤-٥ الاتزان الداخلي في النباتات (ص ١٤٦–١٥٠) والشكل ٤-٢٦',
    legend: [['#DCC58F', 'خليَّة حارسة'], ['#CFE3B4', 'خليَّة بشرة مجاورة'], ['#5A5F66', 'الجدار الداخلي السميك', 'tube'], ['#8A9099', 'الجدار الخارجي الرقيق', 'tube'], ['#F2D230', 'حزم ألياف السليلوز الدقيقة', 'tube'], null,
             ['#3C9D4E', 'بلاستيدة خضراء (وحبيبة نشا)', 'dot'], ['#9ED3F5', 'فجوة', 'dot'], ['#E4472E', 'مضخَّة بروتون'], ['#2C7BE5', 'قناة <span class="ltr">K⁺</span>'], ['#0E8C88', 'أكوابورين'], null,
             ['#F08C2E', '<span class="ltr">H⁺</span>', 'dot'], ['#8E5BD9', '<span class="ltr">K⁺</span>', 'dot'], ['#4FB3E8', 'ماء', 'dot'], ['#1B5E20', 'مالات', 'dot']],
    camera: { VH: 18.5, center: [0, 0.9, 0], elevation: 60, azimuth: 45 },
    base: { L: 22.5, W: 12.5, x: 0 },
    BASE: { fo: 0, open: 0, len: 0, h: 0, hx: 0, ksh: 0, k: 0, kx: 0, khd: 0, vac: 0, w: 0, wx: 0, m: 0, mx: 0, pump: 1 },
    noGeom: ['fo'],
    // نقطة التركيز: 0 الثغر كاملاً، 1 مضخَّة/قناة على الخليَّة القريبة، 2 فتحة الثغر، 3 البلاستيدات، 4 أكوابورين
    focus(s) {
      S = s; const k = Math.round(S.fo || 0);
      if (k === 1) return surf(1, 0.5).addScaledVector(UP, -0.1);
      if (k === 2) return V(0, 0.9, 0);
      if (k === 3) return chlPos(1, 0.5);
      if (k === 4) return surf(1, 0.77).addScaledVector(UP, -0.2);
      return V(0, 0.9, 0);
    },
    STEPS: [
      { t: 'الثغر: خليَّتان حارستان وفتحة بينهما', p: 'تتحكم الثغور بانتشار الغازات إلى الأوراق ومنها، وبالتالي تتحكم في دخول ثاني أكسيد الكربون إلى الأوراق. الثغور هي الفتحات الموجودة بين الخلايا الحارسة <span class="ltr">Guard cells</span>، لكن المصطلح يستخدم عادة للإشارة إلى الخليتَين الحارستَين والفتحة بينهما (الصورة ٤-١١). تحاط فتحة الثغر بخليتَين حارستَين كما هو مبيّن في الصورة ٤-١١، ٤-١٢.',
        seq: [[{ zoom: 1.2 }, 900], [{ zoom: 1 }, 900]],
        pills: [['خليَّة حارسة', GLD, () => P(1, 0.5, Math.PI / 2, 1), -170, 60], ['خليَّة حارسة', GLD, () => P(-1, 0.5, Math.PI / 2, 1), 160, -70], ['فتحة الثغر مغلقة', RED, () => V(0, 0.55, 0), 20, -130], ['خلايا البشرة المجاورة', GRN, () => V(-8.5, 0.1, 3.3), -40, 90], ['خلايا البشرة المجاورة', GRN, () => V(8.5, 0.1, -3.3), 60, -80]] },
      { t: 'تركيب الخليَّة الحارسة', p: 'للخلايا الحارسة جدران سميكة تواجه الهواء خارج الورقة وفتحة الثغر، حيث يُحاط الجدار الخارجي بطبقة الكيوتيكل الشمعية السميكة، وغالبًا ما يمتد على شكل حواف بارزة. وتكون الجدران التي تواجه خلايا البشرة المجاورة أرق بكثير. ألياف السليلوز الدقيقة مرتبة على هيئة حزم كما هي مبيّنة في الشكل ٤-٢٦. غالبًا ما يكون غشاء سطح الخلية منثنيًا ويحتوي على العديد من القنوات والبروتينات الناقلة. يحتوي السيتوبلازم على عدد كبير من البلاستيدات الخضراء والميتوكندريا. يوجد العديد من الفجوات الصغيرة بدلًا من فجوة واحدة كبيرة.',
        n: 'الميتوكندريا والكيوتيكل غير مرسومَين في المجسَّم.',
        seq: [[{ '!fo': 0, zoom: 2.0 }, 1100]],
        pills: [['الجدار الداخلي السميك (يواجه فتحة الثغر)', GRY, () => P(1, 0.62, Math.PI, 1).addScaledVector(UP, 0.1), 150, 95], ['الجدار الخارجي الرقيق (يواجه خلايا البشرة المجاورة)', GRY, () => P(-1, 0.38, 0, 1), -100, -95], ['حزم ألياف السليلوز الدقيقة', GLD, () => P(-1, 0.8, Math.PI / 2, 1.05), 120, -70], ['بلاستيدات خضراء', GRN, () => chlPos(1, 0.34).addScaledVector(UP, 0.15), -220, -20], ['فجوات صغيرة', BLU, () => vacPos(1, 0.72), 90, 70], ['غشاء سطح الخليَّة: قنوات وبروتينات ناقلة', TEAL, () => surf(1, 0.23), -150, 80]] },
      { t: 'فتح الثغر (١): مضخَّات البروتون تنقل أيونات الهيدروجين إلى الخارج', p: 'تفتح الخلايا الحارسة عندما تحصل على الماء وتصبح منتفخة. وتغلق عندما تفقد الماء وتصبح رخوة، وتقوم بذلك عن طريق الأسموزية. من الضروري انخفاض جهد الماء قبل أن يدخل الماء إلى الأوراق بالأسموزية. يحدث هذا الانخفاض بفعل نشاط البروتينات الناقلة في أغشية سطح الخلية. تنقل مضخات البروتون في الغشاء التي تعمل بطاقة <span class="ltr">ATP</span> أيونات الهيدروجين (<span class="ltr">H⁺</span>) إلى خارج الخلايا الحارسة استجابة للضوء.',
        seq: [[{ '!fo': 1, zoom: 3.0 }, 900], [{ h: 1 }, 2800], [{ zoom: 1.7 }, 900]],
        pills: [['مضخَّة بروتون تعمل بطاقة <span class="ltr">ATP</span>', RED, () => surf(1, 0.5), -40, -95], ['أيونات الهيدروجين <span class="ltr">H⁺</span> إلى خارج الخليَّة الحارسة', ORG, () => hPos(1, 1, 1), 150, 60], ['داخل الخليَّة الحارسة', GLD, () => P(1, 0.4, Math.PI / 2, 0.3), -150, 70]] },
      { t: 'فتح الثغر (٢): دخول أيونات البوتاسيوم عبر القنوات', p: 'ويؤدي الانخفاض في تركيز أيونات الهيدروجين داخل الخلايا إلى فتح القنوات البروتينية الناقلة لأيونات البوتاسيوم (<span class="ltr">K⁺</span>)، فتدخل إلى الخلية. ويحدث ذلك لأن إزالة أيونات الهيدروجين أدّى إلى أن يصبح داخل الخلية مشحونًا بشحنة سالبة مقارنة مع خارجها. ولكون أيونات البوتاسيوم ذات شحنة موجبة، فإنها تنتقل مع المنحدر الكهربائي باتجاه المنطقة ذات الشحنة السالبة. كما تنتشر أيونات البوتاسيوم إلى الخلايا مع منحدر التركيز. هذا المنحدر المشترك هو المنحدر الكهروكيميائي <span class="ltr">Electrochemical gradient</span>.',
        n: 'تدخل أيضًا أيونات أخرى خاصة الكلوريد والنترات (غير موضحة بالشكل) للحفاظ على التوازن الكهربائي.',
        seq: [[{ '!fo': 1, zoom: 3.0 }, 800], [{ ksh: 1 }, 600], [{ k: 1 }, 3000], [{ zoom: 1.7 }, 900]],
        pills: [['قناة بروتينيَّة ناقلة لأيونات البوتاسيوم', BLU, () => surf(1, 0.59), 110, -95], ['<span class="ltr">K⁺</span> تدخل مع المنحدر الكهروكيميائي', PUR, () => kPos(1, 0, 2), 230, 70], ['داخل الخليَّة مشحون بشحنة سالبة', GRY, () => P(1, 0.5, Math.PI / 2, 0.3), -20, 120]] },
      { t: 'فتح الثغر (٣): انخفاض جهد الماء ودخول الماء بالأسموزيَّة', p: 'المزيد من أيونات البوتاسيوم داخل الخلايا الحارسة يزيد من تركيز المواد المذابة، الأمر الذي يقلل من جهد الماء. فيتكوّن منحدر جهد للماء بين خارج الخلية وداخلها، فينتقل الماء بالأسموزية عبر الأكوابورينات في الغشاء ويدخل معظمه إلى الفجوات ليسبب زيادة في حجمها. يزداد ضغط الامتلاء للخلايا الحارسة وتفتح الثغور.',
        seq: [[{ '!fo': 4, zoom: 2.4 }, 800], [{ w: 1, vac: 1, open: 0.3, len: 0.4 }, 3200], [{ zoom: 1.5 }, 900]],
        pills: [['أكوابورين', TEAL, () => surf(1, 0.77), 110, -90], ['الماء يدخل بالأسموزيَّة عبر الأكوابورينات', BLU, () => surf(1, 0.23).addScaledVector(nrm(1, 0.23), 0.5), -170, -40], ['الفجوات يزداد حجمها', BLU, () => vacPos(1, 0.58), -30, 95], ['يزداد ضغط الامتلاء', GLD, () => P(-1, 0.5, Math.PI / 2, 1), -250, 20]] },
      { t: 'فتح الثغر (٤): النشا يتفكَّك إلى أيونات المالات', p: 'النشا المختزن في البلاستيدات الخضراء يتفكك لتكوين أيونات المالات السالبة التي تدخل إلى الفجوات. وتساعد هذه الأيونات أيضًا في الحفاظ على التوازن الكهربائي، كما تُسهم في تقليل جهد الماء أثناء فتح الثغور.',
        n: 'يحدث ذلك أثناء فتح الثغر مع دخول الأيونات والماء؛ وعُرض هنا خطوةً مستقلَّة للتوضيح.',
        seq: [[{ '!fo': 3, zoom: 2.6 }, 800], [{ m: 1 }, 2400], [{ zoom: 1.5 }, 800]],
        pills: [['النشا في البلاستيدات الخضراء يتفكَّك', GRN, () => chlPos(1, 0.5).addScaledVector(UP, 0.2), -130, -80], ['أيونات المالات السالبة تدخل إلى الفجوات', GRN, () => vacPos(1, 0.58), 130, 80]] },
      { t: 'فتح الثغر (٥): تنتفخ الخليَّتان وتنحنيان فيفتح الثغر', p: 'تُسهم السماكة غير المتساوية لجدران الخلايا الحارسة ووجود حزم ألياف السليلوز الدقيقة في منع تمددها في جميع الاتجاهات. فبدلًا من ذلك تزداد الخلايا في الطول وليس في القطر. وفيما ترتبط نهايات الخليتَين الحارستَين وتنحني الجدران الرقيقة الخارجية بسهولة أكبر مقارنة بالجدران الداخلية السميكة، تصبح الخلايا الحارسة مقوّسة، كما تنتفخ الخلايا الحارسة باتجاه الخلايا المجاورة، وتبدو أشبه بزوج من ثمار الموز، وبالتالي يفتح الثغر بين الخليتَين.',
        seq: [[{ '!fo': 2, zoom: 1.7 }, 800], [{ open: 1, len: 1 }, 3200], [{ zoom: 1 }, 900]],
        pills: [['الجدار الخارجي الرقيق يتمدَّد أكثر', GRY, () => P(1, 0.5, 0, 1), 190, 90], ['الجدار الداخلي السميك', GRY, () => P(-1, 0.6, Math.PI, 1), 200, -90], ['حزم ألياف السليلوز الدقيقة تمنع التمدُّد في جميع الاتجاهات', GLD, () => P(-1, 0.3, Math.PI / 2, 1.05), -110, -100], ['فتحة الثغر مفتوحة', RED, () => V(0, 0.4, 0), -240, -20], ['تنتفخ الخليَّة الحارسة باتجاه الخلايا المجاورة', GLD, () => P(1, 0.75, Math.PI / 2, 1), 240, 40]] },
      { t: 'الإغلاق (١): تتوقَّف المضخَّات وتغادر أيونات البوتاسيوم', p: 'وتغلق الثغور استجابة لما يأتي: الظلام • التركيز العالي من غاز ثاني أكسيد الكربون في الفراغات الهوائية في الورقة • انخفاض نسبة الرطوبة • درجة الحرارة المرتفعة • الإجهاد المائي، عندما يكون إمداد الماء من الجذور محدودًا، و/ أو توجد معدلات عالية من النتح.<br>تغلق الثغور عندما تتوقف بروتينات مضخة أيونات الهيدروجين، وتغادر أيونات البوتاسيوم الخلايا الحارسة لتدخل إلى الخلايا المجاورة.',
        seq: [[{ '!fo': 1, zoom: 2.6 }, 900], [{ pump: 0, hx: 1 }, 900], [{ kx: 1 }, 2600], [{ khd: 1 }, 500], [{ zoom: 1.5 }, 800]],
        pills: [['تتوقَّف بروتينات مضخَّة أيونات الهيدروجين', GRY, () => surf(1, 0.5), -30, -95], ['أيونات البوتاسيوم تغادر إلى الخلايا المجاورة', PUR, () => surf(1, 0.59).addScaledVector(nrm(1, 0.59), 1.5), 140, 70]] },
      { t: 'الإغلاق (٢): تعود المالات نشا ويغادر الماء فتصبح الخليَّتان رخوتين', p: 'تعود أيونات المالات إلى البلاستيدات الخضراء لتتحوّل إلى نشا. فيتكوّن منحدر جهد للماء في الاتجاه المعاكس، لذا يغادر الماء الخلايا الحارسة فتصبح رخوة وتغلق الثغور. وتتمثل ميزة إغلاق الثغور في احتجاز الماء داخل الورقة، وهذا أمر مهم في وقت الاجهاد المائي.',
        seq: [[{ '!fo': 3, zoom: 2.4 }, 800], [{ mx: 1 }, 1800], [{ '!fo': 4 }, 1], [{ wx: 1, vac: 0 }, 2200], [{ '!fo': 2, zoom: 1.4 }, 700], [{ open: 0, len: 0 }, 2600], [{ zoom: 1 }, 800]],
        pills: [['المالات تعود إلى البلاستيدات لتتحوَّل إلى نشا', GRN, () => chlPos(1, 0.5).addScaledVector(UP, 0.2), -140, -80], ['يغادر الماء الخليَّة الحارسة', BLU, () => surf(1, 0.77).addScaledVector(nrm(1, 0.77), 1.0), 120, 60], ['خليَّة حارسة رخوة', GLD, () => P(-1, 0.5, Math.PI / 2, 1), 150, -70], ['فتحة الثغر مغلقة', RED, () => V(0, 0.55, 0), -40, 120]] },
    ],
    setup(ctx) {
      ctxRef = ctx;
      // قطعة من بشرة الورقة: خلايا بشرة مجاورة مسطَّحة حول الثغر، وفتحة الثغر شقٌّ داكن تحت الخليَّتين
      const tiles = [[-10.8, -6.3, -6.0, -0.15, 0], [-10.8, -6.3, 0.15, 6.0, 1], [6.3, 10.8, -6.0, -0.15, 1], [6.3, 10.8, 0.15, 6.0, 0],
                     [-6.0, -0.15, 3.3, 6.0, 2], [0.15, 6.0, 3.3, 6.0, 0], [-6.0, -0.15, -6.0, -3.3, 0], [0.15, 6.0, -6.0, -3.3, 2], [-6.0, 6.0, -3.0, 3.0, 1]];
      tiles.forEach(([x0, x1, z0, z1, m]) => { const o = new THREE.Mesh(gBox, matTile[m]); o.scale.set(x1 - x0, 0.42, z1 - z0); o.position.set((x0 + x1) / 2, -0.11, (z0 + z1) / 2); o.receiveShadow = o.castShadow = true; ctx.scene.add(o); });
      const slot = new THREE.Mesh(gBox, matSlot); slot.scale.set(8.6, 0.03, 1.1); slot.position.set(0, 0.095, 0); ctx.scene.add(slot);
    },
    rebuild(s, ctx) {
      S = s;
      for (const side of [1, -1]) {
        wallTubes(side, ctx);
        CHL.forEach((u, q) => { ell(chlPos(side, u), 0.32, 0.17, 0.22, matChl, ctx); ctx.ball(chlPos(side, u).addScaledVector(UP, 0.12), 0.05 + 0.07 * starch(), matStarch); });
        VAC.forEach(u => ctx.ball(vacPos(side, u), vacR(), matVac));
        PUMPS.forEach(u => protein(side, u, 0.2, S.pump > 0.5 ? matPump : matPumpOff, 0.3, ctx));
        KCH.forEach(u => protein(side, u, 0.17, matK, 0.3, ctx));
        AQP.forEach(u => protein(side, u, 0.14, matAq, 0.28, ctx));
        const hs = 1 - sm(S.hx), ks = sm(S.ksh) * (1 - sm(S.khd));
        if (hs > 0.02) PUMPS.forEach((u, q) => [0, 1].forEach(i => ctx.ball(hPos(side, q, i), 0.11 * hs, matH)));
        if (ks > 0.02) KCH.forEach((u, q) => [0, 1, 2, 3].forEach(i => ctx.ball(kPos(side, q, i), 0.13 * ks, matKi)));
        AQP.forEach((u, q) => [0, 1, 2].forEach(i => { const [p, b] = wPos(side, q, i); if (b > 0.02) ctx.ball(p, 0.1 * b, matW); }));
        CHL.forEach((u, q) => { const [p, b] = mPos(side, q); if (b > 0.02) ctx.ball(p, 0.1 * b, matMal); });
        cellBody(side, ctx);                                            // الجسم الشفَّاف آخراً ليُرى ما بداخله
      }
    },
    place() {},
    idle(t, s, ctx, tweening) {},
  };
})();
