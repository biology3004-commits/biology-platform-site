/* ديوراما: التحكُّم في تركيز جلوكوز الدم — الدرس ٤-٤ (كتاب الطالب ص ١٣٩–١٤٣) */
(function () {
  const { V, sm, M, CSS } = DioramaCore;
  const { BLU, RED, GLD, TEAL, PNK, GRY, GRN, ORG, PUR } = CSS;
  const L = s => `<span class="ltr">${s}</span>`;
  // ── إحداثيَّات المشهد ─────────────────────────────────────────────
  const ZS = -2.0;                                   // صفُّ المحطَّات (z)
  const XV0 = -12.6, XV1 = 10.8, YV = 0.55, ZV = 2.0, RV = 0.5;   // الوعاء الدموي (أمام المحطَّات)
  const LV = XV1 - XV0;
  const GX = -10.9;                                  // المقياس
  const XP = -6.6;                                   // البنكرياس (جزيرة لانجرهانس)
  const LX = [-2.4, 0.2, 2.8], LZF = -0.9;           // خلايا الكبد الثلاث ووجهها الأمامي
  const XM = 7.3, RM = 1.15, YM = 1.15, MZF = -0.85; // الخليَّة العضليَّة (أسطوانة على x)
  const RECM = V(XM - 1.9, 1.5, -0.905);             // مستقبل الإنسولين على الخليَّة العضليَّة
  const RECL = V(-3.0, 1.5, LZF);                    // مستقبل الإنسولين على خليَّة الكبد (اليسرى)
  const RECG = V(-0.3, 2.1, LZF);                    // مستقبل الجلوكاجون على خليَّة الكبد (الوسطى)
  const GLUT2_IN = V(-1.9, 0.9, LZF), GLUT2_OUT = V(1.0, 0.75, LZF);
  const SITES = [XM - 0.6, XM + 0.4, XM + 1.4];      // مواقع اندماج حويصلات GLUT4
  const GLY_L = [V(-2.6, 0.9, -2.1), V(1.1, 0.45, -2.0), V(2.6, 0.9, -2.0)];   // عناقيد الجلايكوجين في الكبد
  const GLY_M = V(XM + 2.1, 0.75, -1.9);
  // تتالي التأشير داخل خليَّة الكبد الوسطى (ترتيب الكتاب: بروتين G ← أدينيليل سيكليز ← cAMP ← بروتين كاينيز A ← كاينيز فوسفوريليز ← جلايكوجين فوسفوريليز)
  const CAS = [V(-0.9, 1.1, -1.5), V(0.8, 2.2, -0.95), V(0.3, 1.1, -1.7), V(-0.3, 0.25, -1.4), V(0.4, 0.3, -2.5), V(1.2, 1.0, -2.9)];
  const CAS_R = [0.22, 0.27, 0.16, 0.24, 0.24, 0.26];
  const CAS_C = [0x6AA84F, 0x7C6A3A, 0xE0407F, 0x1B6FD0, 0x8E5BD9, 0xD9641E];
  // ── موادُّ ─────────────────────────────────────────────────────────
  const matGlu = M(0xE8B923, { roughness: 0.35 }), matIns = M(0x1B6FD0, { roughness: 0.35 }), matGlg = M(0x8E5BD9, { roughness: 0.35 });
  const matGly = M(0x8B4A2B), matRecI = M(0x1B6FD0), matRecG = M(0x8E5BD9), matG2 = M(0x8A94A3), matG4 = M(0x12B5A5), matVes = M(0xE9C46A, { transparent: true }), matG4v = M(0x12B5A5, { transparent: true });
  const matBeta = M(0x4FB3A8), matAlpha = M(0xF08C2E), matAcin = M(0xF0B8C4), matTis = M(0xF2C4C4, { roughness: 0.8 });
  const matNuc = M(0x5B4A7A), matRod = M(0x1F2937);
  let S, ctxRef;
  const O = {};                                      // الكائنات الدائمة
  // ── مسارات ───────────────────────────────────────────────────────
  const seg = (A, B, u, lift) => A.clone().lerp(B, u).add(V(0, (lift || 0) * Math.sin(Math.PI * u), 0));
  const path2 = (A, B, C, u, lift) => u <= 1 ? seg(A, B, u, lift) : seg(B, C, Math.min(1, u - 1), 0);
  const jit = i => V(Math.sin(i * 7.3) * 0.22, Math.cos(i * 5.1) * 0.18, Math.sin(i * 3.7) * 0.2);
  // جزيرة لانجرهانس: مواضع الخلايا
  const BETA = [V(XP, 0.95, ZS)].concat(Array.from({ length: 6 }, (_, k) => V(XP + 0.72 * Math.cos(k * Math.PI / 3), 0.92, ZS + 0.72 * Math.sin(k * Math.PI / 3))));
  const ALPHA = Array.from({ length: 5 }, (_, k) => { const a = k * 2 * Math.PI / 5 + 0.3; return V(XP + 1.0 * Math.cos(a), 0.86, ZS + 1.0 * Math.sin(a)); });
  const ENTRY = V(XP + 0.6, YV, ZV);                 // دخول الهرمونات إلى الوعاء
  const NH = 12;                                     // عدد جزيئات كلِّ هرمون في الوعاء
  const hRun = i => 3.0 + 13.5 * ((i * 0.618) % 1);  // مسافة انتشار الجزيء في الوعاء
  // موضع الجزيء i من الهرمون (prog = تقدُّم الإفراز 0..1)، cells = خلاياه
  function hPos(i, prog, cells) {
    const u = prog * 2.2 - (i / NH) * 0.6; if (u <= 0) return null;
    const A = cells[i % cells.length], ctrl = V(A.x + 0.6, 2.4, ZS + 1.6);
    let p;
    if (u <= 1) { const a = seg(A, ctrl, u, 0), b = seg(ctrl, ENTRY, u, 0); p = a.lerp(b, u); }
    else { const r = Math.min(1, u - 1); p = V(Math.min(XV1 - 0.4, ENTRY.x + r * hRun(i)), YV, ZV).add(jit(i).multiplyScalar(0.9)); }
    return { p, s: Math.min(1, u * 4) };
  }
  const gluCount = g => 6 + 30 * g;
  const YG = g => 0.4 + 3.3 * g;                      // ارتفاع مؤشِّر المقياس
  const NG = 40;
  const gluBase = i => (i * 0.5873 * LV) % LV;
  // جلوكوز يدخل الخليَّة العضليَّة عبر GLUT4 (6 جزيئات)
  const M_IN = Array.from({ length: 6 }, (_, i) => { const k = i % 3; return [V(SITES[k] - 0.6 + 0.4 * (i % 2), YV, ZV), V(SITES[k], YM, MZF), V(SITES[k], YM, -1.75).add(jit(i + 3).multiplyScalar(1.4))]; });
  const L_IN = Array.from({ length: 6 }, (_, i) => [V(-2.9 + 0.35 * i, YV, ZV), GLUT2_IN, GLY_L[0].clone().add(jit(i + 11).multiplyScalar(2.2))]);
  const L_OUT = Array.from({ length: 6 }, (_, i) => [GLY_L[1].clone().add(jit(i + 17).multiplyScalar(1.6)), GLUT2_OUT, V(1.2 + 0.5 * i, YV, ZV).add(jit(i).multiplyScalar(0.6))]);
  const bindPath = (from, rec, u) => seg(from, rec, u, 1.2);
  const recCup = r => r.clone().add(V(0, 0.12, 0.72));

  window.DIORAMA = {
    id: 'glucose', title: 'التحكُّم في تركيز جلوكوز الدم', subtitle: 'الأحياء — الصف الثاني عشر — الوحدة الرابعة: الاتزان الداخلي',
    source: 'النص من كتاب الطالب: ٤-٤ التحكُّم في تركيز جلوكوز الدم (ص ١٣٩–١٤٣) والأشكال ٤-١٩ و٤-٢٠ و٤-٢١',
    legend: [['#E8B923', 'جلوكوز', 'dot'], ['#1B6FD0', 'الإنسولين', 'dot'], ['#8E5BD9', 'الجلوكاجون', 'dot'], ['#8B4A2B', 'جلايكوجين', 'dot'], null,
             ['#4FB3A8', 'خلايا بيتا (β)'], ['#F08C2E', 'خلايا ألفا (α)'], ['#0E8C88', 'GLUT4', 'tube'], ['#8A94A3', 'GLUT2', 'tube'], ['#D96C7A', 'وعاء دموي', 'tube']],
    camera: { VH: 22.5, center: [-0.9, 1.9, 0] },
    base: { L: 24, W: 11.5, x: -0.9 },
    BASE: { fo: 0, g: 0.5, ins: 0, insV: 1, glg: 0, glgV: 1, bM: 0, bL: 0, v4: 0, inM: 0, inL: 0, gly: 0.5, gG: 0, cas: 0, outL: 0 },
    noGeom: ['fo', 'g', 'v4', 'gly'],
    // نقطة التركيز: 0 المشهد، 1 مستقبل الإنسولين (عضلة)، 2 مواقع GLUT4، 3 مستقبل الإنسولين (كبد)، 4 الجزيرة، 5 المقياس، 6 جلايكوجين الكبد، 7 مستقبل الجلوكاجون والتتالي
    focus(s) {
      S = s; const k = Math.round(S.fo || 0);
      return [V(-0.9, 1.9, 0), RECM.clone().add(V(0, 0.1, 0.4)), V(SITES[1], YM, -1.3), RECL.clone().add(V(0, 0.1, 0.4)), V(XP, 0.9, ZS), V(GX, 2.3, ZS), V(0.2, 1.1, -2.0), V(0.2, 0.0, -0.8)][k];
    },
    STEPS: [
      { t: 'الحالة الطبيعيَّة: الجلوكوز في الدم والبنكرياس',
        p: `تُنقل الكربوهيدرات في مجرى دم الإنسان على شكل جلوكوز ذائب في بلازما الدم. يحتوي كل ${L('100 mL')} من الدم في الإنسان الطبيعي عادة ما بين ${L('80 mg')} و ${L('120 mg')} من الجلوكوز ${L('(4.4–6.7 mmol/L)')}. ويعمل هرمونان يفرزهما نسيج الغدة الصماء في البنكرياس على التحكم في تركيز جلوكوز الدم لتحقيق الاتزان الداخلي للجلوكوز. يحتوي هذا النسيج على مجموعات من الخلايا تعرف باسم جُزيرات لانجرهانس. تحتوي هذه الجُزيرات على نوعَين من الخلايا: خلايا ألفا ${L('(α)')} وتفرز هرمون الجلوكاجون، وخلايا بيتا ${L('(β)')} وتفرز هرمون الإنسولين.`,
        seq: [[{}, 0]],
        pills: [['تركيز الجلوكوز في الدم', GRY, () => V(GX, 4.4, ZS), 0, -60], ['النطاق الطبيعي للجلوكوز في الدم', GRN, () => V(GX - 0.8, 2.05, ZS + 0.2), -150, 70],
                ['جلوكوز ذائب في بلازما الدم', GLD, () => V(-8.5, YV + 0.3, ZV), -40, 95], ['جُزيرات لانجرهانس في البنكرياس', ORG, () => V(XP, 1.4, ZS), 0, -95],
                ['خلايا الكبد', GRY, () => V(0.2, 2.7, -2.0), 20, -80], ['خلية عضليَّة', RED, () => V(XM + 0.5, 2.3, -2.0), 60, -80]] },
      { t: 'ارتفاع تركيز الجلوكوز في الدم بعد الوجبة',
        p: 'بعد تناول وجبة تحتوي على الكربوهيدرات، يُمتص الجلوكوز من الطعام الذي تم هضمه من الأمعاء الدقيقة، ويمر إلى الدم.',
        seq: [[{ '!fo': 5, zoom: 1.5 }, 900], [{ g: 0.92 }, 2400], [{ zoom: 1 }, 800]],
        pills: [['ارتفاع تركيز الجلوكوز في الدم', RED, () => V(GX, 0.4 + 3.8 * S.g, ZS + 0.3), -170, -40], ['يُمتص الجلوكوز من الأمعاء الدقيقة، ويمر إلى الدم', GLD, () => V(XV0 + 1.0, YV + 0.3, ZV), 200, 80],
                ['النقطة المرجعية', GRN, () => V(GX + 0.8, 2.05, ZS + 0.2), 120, 70]] },
      { t: 'خلايا بيتا تفرز الإنسولين وخلايا ألفا توقف الجلوكاجون',
        p: `وتتحسس خلايا ${L('(α)')} و ${L('(β)')} الزيادة في تركيز الجلوكوز عند تدفق الدم عبر البنكرياس. تستجيب خلايا ${L('(α)')} بإيقاف إفراز الجلوكاجون، في حين تستجيب خلايا ${L('(β)')} بإفراز الإنسولين إلى بلازما الدم، لينتقل إلى جميع أنحاء الجسم.`,
        n: 'تعمل خلايا (α) و (β) كمستقبلات ومركز تحكم في آلية الاتزان الداخلي هذه.',
        seq: [[{ '!fo': 4, zoom: 2.0 }, 900], [{ ins: 1 }, 3000], [{ zoom: 1.3 }, 900]],
        pills: [['تستجيب خلايا (β) بإفراز الإنسولين إلى بلازما الدم', TEAL, () => BETA[0].clone().add(V(0, 0.4, 0)), -60, -110], ['تستجيب خلايا (α) بإيقاف إفراز الجلوكاجون', ORG, () => ALPHA[2].clone().add(V(0, 0.3, 0)), -190, 50],
                ['الإنسولين ينتقل إلى جميع أنحاء الجسم', BLU, () => V(XP + 4.5, YV, ZV), 120, 80]] },
      { t: 'الإنسولين يرتبط بمستقبل في غشاء سطح الخليَّة',
        p: 'الإنسولين بروتين، ولا يستطيع المرور عبر أغشية سطح الخلية لتحفيز الآليات داخل الخلية مباشرة. وبدلًا من ذلك، يرتبط الإنسولين بمستقبل في غشاء سطح الخلية، ويؤثر في الخلية بشكل غير مباشر من خلال عمل المراسيل داخل الخلوية. توجد مستقبلات خاصة بالإنسولين في العديد من خلايا الأنسجة (على سبيل المثال، الخلايا في الكبد، والأنسجة العضلية، والأنسجة الدهنية).',
        seq: [[{ zoom: 1 }, 600], [{ '!fo': 3, zoom: 2.2 }, 900], [{ bL: 1 }, 1500], [{ zoom: 1.2 }, 700], [{ '!fo': 1, zoom: 2.4 }, 900], [{ bM: 1 }, 1500]],
        pills: [['يرتبط الإنسولين بمستقبل في غشاء سطح الخلية العضليَّة', BLU, () => recCup(RECM), 0, -90], ['مستقبل الإنسولين', BLU, () => RECM.clone().add(V(0, 0, 0.3)), 150, 60],
                ['مستقبل الإنسولين في خليَّة الكبد', BLU, () => recCup(RECL), 60, 80]] },
      { t: 'حويصلات GLUT4 تنتقل إلى غشاء سطح الخليَّة العضليَّة وتندمج معه',
        p: `يدخل الجلوكوز الخلايا بالانتشار المسهل فقط، عبر بروتينات ناقل الجلوكوز ${L('GLUT')}، وهي عدة أنواع. تحتوي خلايا العضلات على نوع يسمّى ${L('GLUT4')}. وتبقى عادة بروتينات ${L('GLUT')} في السيتوبلازم بالطريقة نفسها التي تبقى فيها الأكوابورينات في خلايا القناة الجامعة. عندما ترتبط جزيئات الإنسولين بالمستقبلات على الخلايا العضلية، تنتقل الحويصلات مع بروتينات ${L('GLUT4')} إلى غشاء سطح الخلية، وتندمج معه. تسهل بروتينات ${L('GLUT4')} حركة الجلوكوز إلى داخل الخلية.`,
        n: 'تحتوي خلايا الدماغ على بروتينات GLUT1، وتحتوي خلايا الكبد على بروتينات GLUT2. تبقى بروتينات GLUT1 و GLUT2 دائمًا في غشاء سطح الخلية، ولا يتغير توزيعها بفعل الإنسولين.',
        seq: [[{ '!fo': 2, zoom: 2.4 }, 900], [{ v4: 1 }, 2800], [{ inM: 1 }, 2400]],
        pills: [['حويصلات مع بروتينات GLUT4 تندمج مع غشاء سطح الخلية', TEAL, () => V(SITES[1], YM + 0.35, MZF), 0, -95], ['ناقل الجلوكوز GLUT4', TEAL, () => V(SITES[2], YM - 0.1, MZF), 200, -60],
                ['الجلوكوز يدخل بالانتشار المسهل', GLD, () => M_IN[2][2], 170, 90], ['سيتوبلازم', GRY, () => V(XM + 2.2, YM + 0.5, -2.6), 190, -140]] },
      { t: 'الكبد يحوِّل الجلوكوز إلى جلايكوجين فينخفض تركيز الجلوكوز في الدم',
        p: 'يُحفز الإنسولين الخلايا التي توجد فيها هذه المستقبلات لزيادة معدل امتصاصها للجلوكوز من الدم وتحويله إلى جلايكوجين. كما يزيد الإنسولين أيضًا من استخدام الجلوكوز في التنفس، فينخفض بذلك تركيز الجلوكوز في الدم. يحفز الإنسولين تنشيط إنزيمَين، فوسفوفركتوكاينيز وجلايكوجين سينثيز، واللذَين معًا يحفزان إضافة جزيئات جلوكوز للجلايكوجين – هذه العملية تعرف باسم تكوّن الجلايكوجين. الجلايكوجين مخزن للطاقة قصير الأمد يوجد في خلايا الكبد والعضلات، ويتحوّل بسهولة مرة أخرى إلى جلوكوز.',
        n: 'يحفز الإنسولين تنشيط إنزيم جلوكوكاينيز، والذي يعمل على إضافة الفوسفات إلى الجلوكوز، والذي يُحتجز داخل الخلايا.',
        seq: [[{ zoom: 1 }, 700], [{ '!fo': 6, zoom: 1.9 }, 900], [{ inL: 1 }, 2200], [{ gly: 1 }, 1600], [{ zoom: 1 }, 900], [{ g: 0.5 }, 2200]],
        pills: [['تحتوي خلايا الكبد على بروتينات GLUT2', GRY, () => GLUT2_IN.clone().add(V(0, 0, 0.3)), 160, 60], ['تكوُّن الجلايكوجين: إضافة جزيئات جلوكوز للجلايكوجين', PNK, () => GLY_L[0].clone().add(V(0, 0.6, 0)), -60, -95],
                ['الجلايكوجين: مخزن للطاقة قصير الأمد', GLD, () => GLY_M.clone().add(V(0, 0.5, 0)), 80, -80], ['ينخفض تركيز الجلوكوز في الدم', GRN, () => V(GX, 0.4 + 3.8 * S.g, ZS + 0.3), -150, -50]] },
      { t: 'انخفاض تركيز الجلوكوز: خلايا ألفا تفرز الجلوكاجون',
        p: `عندما تتحسس خلايا ألفا ${L('(α)')} وخلايا بيتا ${L('(β)')} في البنكرياس انخفاضًا في تركيز الجلوكوز في الدم، تستجيب خلايا ألفا ${L('(α)')} بإفراز الجلوكاجون، في حين تستجيب خلايا بيتا ${L('(β)')} بإيقاف إفراز الإنسولين. يقلل انخفاض تركيز الإنسولين في الدم من معدل امتصاص واستخدام الكبد والخلايا العضلية للجلوكوز. يستمر الامتصاص لكن بمعدل أقل.`,
        seq: [[{ '!fo': 5, zoom: 1.4 }, 900], [{ g: 0.15 }, 2000], [{ '!fo': 4, zoom: 2.0 }, 900], [{ insV: 0, glg: 1 }, 3000], [{ zoom: 1.3 }, 900]],
        pills: [['تستجيب خلايا ألفا (α) بإفراز الجلوكاجون', PUR, () => ALPHA[2].clone().add(V(0, 0.3, 0)), -170, 50], ['تستجيب خلايا بيتا (β) بإيقاف إفراز الإنسولين', TEAL, () => BETA[0].clone().add(V(0, 0.4, 0)), -60, -110],
                ['انخفاض تركيز الجلوكوز في الدم', RED, () => V(GX, 0.4 + 3.8 * S.g, ZS + 0.3), -40, -90], ['الجلوكاجون', PUR, () => V(XP + 4.5, YV, ZV), 120, 80]] },
      { t: 'الجلوكاجون يرتبط بمستقبلات خلايا الكبد فقط: تتالي الإنزيمات',
        p: `يرتبط الجلوكاجون بمستقبلات محددة مختلفة في أغشية سطح الخلية لخلايا الكبد. لا توجد مستقبلات للجلوكاجون على سطح خلايا العضلات. ويسبب الارتباط تغيّرًا في شكل الجزيئات في البروتين المستقبِل الذي ينشط بروتين ${L('G')}، والذي بدوره ينشط إنزيم أدينيليل سيكليز، وهو جزء من غشاء سطح الخلية مثل المستقبل. يحفز الأدينيليل سيكليز تحويل ${L('ATP')} إلى ${L('AMP')} الحلقي ${L('(cAMP)')}، وهو مرسال ثان. ترتبط جزيئات ${L('cAMP')} مع إنزيمات بروتين كاينيز ${L('A')} في السيتوبلازم وتنشطها.`,
        n: 'وتنشط إنزيمات بروتين كاينيز A بدورها إنزيمات كاينيز فوسفوريليز بإضافة مجموعات فوسفات إليها. وينشط كاينيز فوسفوريليز جلايكوجين فوسفوريليز من خلال إضافة مجموعات فوسفات إليها. ويمثل هذا تتالي إنزيمات يؤدي إلى تضخيم الإشارة الخلوية الأصلية من الجلوكاجون.',
        seq: [[{ zoom: 1 }, 600], [{ '!fo': 7, zoom: 2.4 }, 900], [{ gG: 1 }, 1500], [{ cas: 1 }, 3600]],
        pills: [['يرتبط الجلوكاجون مع مستقبل غشائي', PUR, () => recCup(RECG), -60, -110], ['بروتين G', GRN, () => CAS[0], -230, -20], ['أدينيليل سيكليز (في غشاء سطح الخلية)', GRY, () => CAS[1], 200, -110],
                ['AMP الحلقي (cAMP): مرسال ثان', PNK, () => CAS[2], 230, -20], ['بروتين كاينيز A', BLU, () => CAS[3], -210, 20], ['كاينيز فوسفوريليز', PUR, () => CAS[4], -40, 150], ['جلايكوجين فوسفوريليز', ORG, () => CAS[5], 230, 90],
                ['لا توجد مستقبلات للجلوكاجون على سطح خلايا العضلات', RED, () => V(XM - 1.0, YM + 0.6, MZF), 0, -80]] },
      { t: 'تحلُّل الجلايكوجين واستحداث الجلوكوز: تغذية راجعة سلبية',
        p: 'يحفز جلايكوجين فوسفوريليز تفكك الجلايكوجين إلى جلوكوز في عملية تعرف باسم تحلل الجلايكوجين، وذلك بإزالة مونمرات جلوكوز من «النهايات» العديدة لكل جزيء جلايكوجين. يزداد تركيز الجلوكوز داخل الخلية، وتنتشر جزيئات الجلوكوز إلى الخارج عبر البروتينات الناقلة إلى الدم. يحفز الجلوكاجون أيضًا تكوّن الجلوكوز من الأحماض الأمينية والأحماض الدهنية والجليسرول والبيروفات واللاكتات في عملية تعرف باسم استحداث الجلوكوز. يعمل الجلوكاجون والإنسولين معًا كجزء من التغذية الراجعة السلبية، أيّ انحراف في تركيز الجلوكوز عن النقطة المرجعية يحفّز إجراءات المستجيبات لإعادته إلى مستواه الطبيعي.',
        seq: [[{ zoom: 1 }, 600], [{ '!fo': 6, zoom: 1.9 }, 900], [{ gly: 0.2, outL: 1 }, 2600], [{ zoom: 1 }, 900], [{ g: 0.5 }, 2200]],
        pills: [['تحلل الجلايكوجين: إزالة مونمرات جلوكوز من «النهايات»', ORG, () => GLY_L[1].clone().add(V(0, 0.5, 0)), 40, -95], ['تنتشر جزيئات الجلوكوز إلى الخارج عبر البروتينات الناقلة إلى الدم', GLD, () => GLUT2_OUT.clone().add(V(0, 0, 0.3)), 120, 90],
                ['استحداث الجلوكوز: تكوّن جزيء جلوكوز «جديد»', PNK, () => GLY_L[2].clone().add(V(0, 0.6, 0)), 150, -70], ['لإعادته إلى مستواه الطبيعي: التغذية الراجعة السلبية', GRN, () => V(GX, 0.4 + 3.8 * S.g, ZS + 0.3), -140, -60]] },
    ],
    setup(ctx) {
      ctxRef = ctx; const sc = ctx.scene;
      const add = (g, m, p, parent) => ctx.mesh(g, m, p, parent);
      const trans = (c, op) => { const m = new THREE.MeshStandardMaterial({ color: c, transparent: true, opacity: op, roughness: 0.3, depthWrite: false }); m.color.convertSRGBToLinear(); return m; };
      // ── الوعاء الدموي ──
      const ves = new THREE.Mesh(new THREE.CylinderGeometry(RV, RV, LV + 0.6, 28, 1, true), trans(0xD96C7A, 0.3)); ves.material.side = THREE.DoubleSide;
      ves.rotation.z = Math.PI / 2; ves.position.set((XV0 + XV1) / 2, YV, ZV); sc.add(ves);
      [XV0 - 0.3, XV1 + 0.3].forEach(x => { const r = new THREE.Mesh(new THREE.TorusGeometry(RV, 0.06, 8, 28), M(0xB04C5C)); r.rotation.y = Math.PI / 2; r.position.set(x, YV, ZV); sc.add(r); });
      // جزيئات الجلوكوز في الوعاء
      O.glu = []; for (let i = 0; i < NG; i++) { const b = add(new THREE.SphereGeometry(0.19, 12, 10), matGlu, V(XV0, YV, ZV)); b.userData.j = jit(i).multiplyScalar(1.1); O.glu.push(b); }
      // ── المقياس ──
      const pz = ZS;
      add(new THREE.BoxGeometry(2.3, 0.3, 0.9), M(0x7B8794, { roughness: 0.7 }), V(GX, 0.15, pz));
      add(new THREE.BoxGeometry(1.7, 4.0, 0.3), M(0xF7F7F2, { roughness: 0.9 }), V(GX, 2.3, pz));
      add(new THREE.BoxGeometry(1.5, 1.1, 0.08), M(0x9FD8A8, { roughness: 0.9 }), V(GX, 2.05, pz + 0.19));
      add(new THREE.BoxGeometry(1.5, 0.06, 0.1), M(0x0A7A3D), V(GX, 2.05, pz + 0.2));
      O.col = add(new THREE.BoxGeometry(0.7, 1, 0.14), matGlu, V(GX, 1, pz + 0.24));
      O.mark = add(new THREE.BoxGeometry(1.6, 0.08, 0.2), M(0xC8102E), V(GX, 1, pz + 0.25));
      // ── البنكرياس: جزيرة لانجرهانس وسط نسيج إفرازي ──
      add(new THREE.CylinderGeometry(2.1, 2.2, 0.5, 36), matTis, V(XP, 0.25, ZS));
      for (let k = 0; k < 10; k++) { const a = k * Math.PI / 5; add(new THREE.SphereGeometry(0.5, 16, 12), matAcin, V(XP + 1.62 * Math.cos(a), 0.78, ZS + 1.62 * Math.sin(a))); }
      O.beta = BETA.map(p => add(new THREE.SphereGeometry(0.42, 16, 12), matBeta, p));
      O.alpha = ALPHA.map(p => add(new THREE.SphereGeometry(0.4, 16, 12), matAlpha, p));
      // ── خلايا الكبد ──
      const matLiv = trans(0xB5654A, 0.36);
      LX.forEach(cx => {
        const c = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.6, 2.2), matLiv); c.position.set(cx, 1.3, ZS); c.castShadow = true; sc.add(c);
        add(new THREE.SphereGeometry(0.4, 16, 12), matNuc, V(cx + 0.7, 1.95, ZS - 0.4));
      });
      O.glyL = GLY_L.map(p => granules(ctx, p)); O.glyM = granules(ctx, GLY_M);
      receptor(ctx, RECL, matRecI); receptor(ctx, RECG, matRecG);
      channel(ctx, GLUT2_IN, matG2, 1); channel(ctx, GLUT2_OUT, matG2, 1);
      O.cas = CAS.map((p, i) => add(new THREE.SphereGeometry(CAS_R[i], 16, 12), M(CAS_C[i]), p));
      // ── الخليَّة العضليَّة ──
      const mus = new THREE.Mesh(new THREE.CylinderGeometry(RM, RM, 5.6, 36), trans(0xD9534F, 0.36)); mus.rotation.z = Math.PI / 2; mus.position.set(XM, YM, ZS); mus.castShadow = true; sc.add(mus);
      [-2.8, 2.8].forEach(dx => { const cap = new THREE.Mesh(new THREE.SphereGeometry(RM, 24, 16), mus.material); cap.position.set(XM + dx, YM, ZS); sc.add(cap); });
      const nu = add(new THREE.SphereGeometry(1, 16, 12), matNuc, V(XM + 1.6, 1.9, -2.5)); nu.scale.set(0.55, 0.25, 0.25);
      receptor(ctx, RECM, matRecI);
      O.ves = SITES.map(x => { const g = new THREE.Group(); g.position.set(x, YM, -2.6); sc.add(g);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.08, 10, 24), matVes); ring.castShadow = true; g.add(ring);
        for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + 0.4; const q = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.22), matG4v); q.position.set(0.34 * Math.cos(a), 0.34 * Math.sin(a), 0); g.add(q); }
        return g; });
      O.g4 = SITES.map(x => channel(ctx, V(x, YM, MZF), matG4, 0.001));
      // كرات الارتباط (هرمون يرتبط بالمستقبل)
      O.bL = add(new THREE.SphereGeometry(0.21, 14, 10), matIns, RECL); O.bM = add(new THREE.SphereGeometry(0.21, 14, 10), matIns, RECM); O.bG = add(new THREE.SphereGeometry(0.21, 14, 10), matGlg, RECG);
    },
    rebuild(s, ctx) {
      S = s;
      // الهرمونات المفرَزة في الوعاء
      for (let i = 0; i < NH; i++) {
        const a = hPos(i, S.ins, BETA); if (a && S.insV > 0.02) ctx.ball(a.p, 0.2 * a.s * S.insV, matIns);
        const b = hPos(i, S.glg, ALPHA); if (b && S.glgV > 0.02) ctx.ball(b.p, 0.2 * b.s * S.glgV, matGlg);
      }
      // جلوكوز يدخل العضلة (بعد اندماج الحويصلات) والكبد، ويخرج من الكبد
      const flow = (paths, prog, lift) => paths.forEach(([A, B, C], i) => { const u = prog * 2.6 - i * 0.25; if (u <= 0) return; ctx.ball(path2(A, B, C, u, lift), 0.19 * Math.min(1, u * 5), matGlu); });
      flow(M_IN, S.inM, 0.5); flow(L_IN, S.inL, 0.5); flow(L_OUT, S.outL, 0.3);
      // تتالي التأشير: وصلات بين الإنزيمات المنشَّطة
      for (let k = 0; k < CAS.length - 1; k++) { const u = Math.min(1, Math.max(0, S.cas * 6 - k - 0.5)); if (u > 0) ctx.rod(CAS[k], CAS[k].clone().lerp(CAS[k + 1], u), 0.05, matRod); }
    },
    place(s) {
      S = s;
      // المقياس
      const ym = YG(S.g); O.col.scale.y = Math.max(0.01, ym - 0.35); O.col.position.y = 0.35 + (ym - 0.35) / 2; O.mark.position.y = ym;
      // الجلوكوز في الوعاء
      const n = gluCount(S.g);
      O.glu.forEach((b, i) => { const sc = Math.min(1, Math.max(0, n - i)); b.visible = sc > 0.02; b.scale.setScalar(Math.max(0.001, sc)); if (!b.userData.t) b.position.set(XV0 + gluBase(i), YV + b.userData.j.y, ZV + b.userData.j.z); });
      // الجلايكوجين
      const gs = 0.35 + 0.9 * S.gly; O.glyL.forEach(g => g.scale.setScalar(gs)); O.glyM.scale.setScalar(gs);
      // حويصلات GLUT4: انتقال ثم اندماج
      const v = S.v4, mv = sm(Math.min(1, v / 0.8)), fu = sm(Math.max(0, (v - 0.8) / 0.2));
      O.ves.forEach((g, k) => { g.position.set(SITES[k], YM, -2.6 + 1.75 * mv); g.scale.set(1 + 0.5 * fu, 1 + 0.5 * fu, Math.max(0.001, 1 - fu)); g.visible = fu < 0.98; });
      matVes.opacity = matG4v.opacity = 1 - fu;
      O.g4.forEach(c => c.scale.setScalar(Math.max(0.001, fu)));
      // التتالي: تكبُّر الإنزيمات عند تنشيطها
      O.cas.forEach((o, k) => { const u = Math.min(1, Math.max(0, S.cas * 6 - k)); o.scale.setScalar(0.45 + 0.75 * sm(u)); });
      // كرات الارتباط
      const bind = (o, from, rec, u) => { o.visible = u > 0.01; o.position.copy(bindPath(from, recCup(rec), u)); };
      bind(O.bL, V(RECL.x, YV, ZV), RECL, S.bL); bind(O.bM, V(RECM.x, YV, ZV), RECM, S.bM); bind(O.bG, V(RECG.x, YV, ZV), RECG, S.gG);
      O.bL.scale.setScalar(S.insV > 0.02 ? 1 : 0.001); O.bM.scale.setScalar(S.insV > 0.02 ? 1 : 0.001);
    },
    idle(t, s) {
      S = s;
      O.glu.forEach((b, i) => { if (!b.visible) return; b.userData.t = 1; b.position.x = XV0 + (gluBase(i) + t * 1.1) % LV; b.position.y = YV + b.userData.j.y + Math.sin(t * 2 + i) * 0.05; });
      const pulse = (arr, on) => arr.forEach((o, i) => o.scale.setScalar(on ? 1 + 0.07 * Math.sin(t * 5 + i) : 1));
      pulse(O.beta, S.ins > 0.02 && S.ins < 1 && S.insV > 0.5); pulse(O.alpha, S.glg > 0.02 && S.glg < 1);
    },
  };

  // عنقود حبيبات جلايكوجين
  function granules(ctx, p) {
    const g = new THREE.Group(); g.position.copy(p); ctx.scene.add(g);
    for (let k = 0; k < 9; k++) { const q = jit(k * 2 + 1).multiplyScalar(2.2); const m = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), matGly); m.position.copy(q); m.castShadow = true; g.add(m); }
    return g;
  }
  // مستقبل على غشاء سطح الخليَّة (شكل Y بارز إلى الأمام)
  function receptor(ctx, r, mat) {
    const top = r.clone().add(V(0, 0, 0.45));
    ctx.rod(r.clone().add(V(0, 0, -0.1)), top, 0.09, mat, ctx.scene);
    ctx.rod(top, r.clone().add(V(-0.3, 0.2, 0.78)), 0.08, mat, ctx.scene); ctx.rod(top, r.clone().add(V(0.3, 0.2, 0.78)), 0.08, mat, ctx.scene);
  }
  // قناة ناقلة عبر الغشاء (أسطوانة على z)
  function channel(ctx, p, mat, sc) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.8, 14), mat); c.rotation.x = Math.PI / 2; c.position.copy(p); c.castShadow = true; c.scale.setScalar(sc); ctx.scene.add(c);
    return c;
  }
})();
