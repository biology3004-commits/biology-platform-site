// إضافات الفصل الأوَّل (v309): روابط مباشرة ومشاركة · ربط الدروس بالمخططات · «اختبر نفسك» في المخططات ·
// ورقة تسمية للطباعة · المخطَّط الجيني التفاعلي · خطَّة المراجعة قبل الامتحان.
// يُحمَّل بعد index.html و s1_diagrams.js ويعتمد على: unitDiagrams, dgShowDiagram, kbOpenDiagram, igOpenIds, showLesson, curriculumData.
(function () {
  'use strict';
  if (typeof unitDiagrams !== 'object') return;

  // ---------------------------------------------------------------- أدوات عامَّة
  var $ = function (id) { return document.getElementById(id); };
  var AR = '٠١٢٣٤٥٦٧٨٩';
  function ar(n) { return String(n).replace(/\d/g, function (d) { return AR[d]; }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function norm(s) { return String(s || '').replace(/[\u064B-\u0652\u0670\u0640\u200e\u200f\u2066-\u2069]/g, '').replace(/\s+/g, ''); }
  function isS1() { try { return curriculumData.units.some(function (u) { return u.id == 1; }); } catch (e) { return false; } }
  function findDiagram(id) {
    for (var u in unitDiagrams) {
      var d = (unitDiagrams[u] || []).find(function (x) { return x.id === id; });
      if (d) return { unit: parseInt(u, 10), d: d };
    }
    return null;
  }
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'sx-toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('on'); }, 10);
    setTimeout(function () { t.classList.remove('on'); setTimeout(function () { t.remove(); }, 300); }, 2600);
  }

  var css = document.createElement('style');
  css.textContent = [
    '.sx-toast{position:fixed;bottom:28px;left:50%;transform:translate(-50%,20px);background:#0b1f4c;color:#fff;padding:12px 22px;border-radius:12px;font-family:Tajawal;font-weight:700;font-size:1rem;z-index:100050;opacity:0;transition:all .25s ease;box-shadow:0 6px 20px rgba(0,0,0,.3);max-width:90vw;text-align:center;}',
    '.sx-toast.on{opacity:1;transform:translate(-50%,0);}',
    '#sxDgTools{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 10px;}',
    '.sx-btn{background:#eceff1;color:#263238;border:none;padding:8px 14px;border-radius:8px;cursor:pointer;font-family:Tajawal;font-weight:700;font-size:0.88rem;min-height:38px;}',
    '.sx-btn:hover{background:#cfd8dc;}',
    '.sx-btn.pri{background:#007a36;color:#fff;}.sx-btn.pri:hover{background:#00602b;}',
    '.sx-btn.on{background:#C8102E;color:#fff;}',
    '.sx-hide{visibility:hidden !important;}',
    '#dgRenderArea.sx-quiz .dg-hotspot{cursor:crosshair;}',
    '#dgRenderArea.sx-quiz .dg-hotspot:hover{filter:drop-shadow(0 0 5px #90caf9);}',
    '.dg-hotspot.sx-ok{filter:drop-shadow(0 0 9px #2e7d32) brightness(1.05) !important;}',
    '.dg-hotspot.sx-bad{filter:drop-shadow(0 0 9px #c62828) !important;}',
    '.dg-hotspot.sx-hint{animation:sxPulse .8s ease-in-out infinite alternate;}',
    '@keyframes sxPulse{from{filter:drop-shadow(0 0 3px #ffb300);}to{filter:drop-shadow(0 0 14px #ff6f00) brightness(1.1);}}',
    '#sxQuizBar{display:none;position:fixed;left:0;right:0;bottom:0;z-index:100040;background:#0b1f4c;color:#fff;font-family:Tajawal;padding:10px 14px calc(10px + env(safe-area-inset-bottom));box-shadow:0 -4px 16px rgba(0,0,0,.3);text-align:center;}',
    '#sxQuizBar small{display:block;font-size:0.82rem;opacity:.9;}#sxQuizBar b{display:block;font-size:1.25rem;line-height:1.5;}#sxQuizBar i{display:block;font-style:normal;font-weight:800;font-size:0.95rem;min-height:1.4em;}',
    '#sxQuizBar i.ok{color:#a5d6a7;}#sxQuizBar i.bad{color:#ffab91;}',
    '@media (max-width:768px){body.sx-quizzing #sxQuizBar{display:block;}body.sx-quizzing .sx-toast{bottom:140px;}}',
    '.sx-quiz-card{font-family:Tajawal;line-height:1.8;}',
    '.sx-quiz-card .how{background:#e8f5e9;border-right:4px solid #2e7d32;border-radius:8px;padding:10px 12px;color:#1b5e20;font-size:0.95em;}',
    '.sx-quiz-card .how b{display:block;margin-bottom:2px;}',
    '.sx-quiz-card .ask{margin:14px 0 6px;font-size:0.9em;color:#455a64;font-weight:700;}',
    '.sx-quiz-card .target{background:#0b1f4c;color:#fff;border-radius:12px;padding:14px 16px;font-size:1.35em;font-weight:800;text-align:center;line-height:1.5;}',
    '.sx-quiz-card .fb{min-height:2.2em;margin-top:10px;font-weight:800;font-size:1.05em;}',
    '.sx-quiz-card .fb.ok{color:#1b5e20;}.sx-quiz-card .fb.bad{color:#b71c1c;}',
    '.sx-quiz-card .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;}',
    '.sx-pn{font-family:Tajawal,sans-serif;background:#fdfdfb;border-radius:12px;padding:6px;}',
    '.sx-pn table{border-collapse:collapse;margin:10px auto;}',
    '.sx-pn td,.sx-pn th{border:2px solid #37474f;padding:10px 16px;text-align:center;font-size:1.15rem;font-weight:800;min-width:92px;}',
    '.sx-pn th{background:#eceff1;color:#0b1f4c;}',
    '.sx-pn td small{display:block;font-size:0.8rem;font-weight:700;color:#455a64;margin-top:3px;}',
    '.sx-pn .gt{direction:ltr;unicode-bidi:isolate;display:inline-block;font-family:Arial,sans-serif;}',
    '.sx-pn .rw{display:flex;gap:10px;align-items:center;flex-wrap:wrap;background:#f3f6fb;border:1px solid #d6dde9;border-radius:10px;padding:10px 14px;margin:8px 0;font-size:1.02rem;}',
    '.sx-pn .rw b{color:#0b1f4c;min-width:11.5em;}',
    '.sx-pn select{font-family:Tajawal;font-size:1rem;font-weight:700;padding:8px 10px;border:2px solid #0b1f4c;border-radius:8px;background:#fff;min-height:42px;}',
    '.sx-pn .gam{display:inline-flex;align-items:center;justify-content:center;min-width:44px;height:44px;border:2px solid #37474f;border-radius:50%;background:#fff;padding:0 6px;font-weight:800;}',
    '.sx-pn .ratio{background:#e8f5e9;border:2px solid #81c784;border-radius:12px;padding:12px 16px;font-weight:800;color:#1b5e20;font-size:1.08rem;line-height:1.9;margin-top:10px;}',
    '#sxFigQ{margin-top:18px;font-family:Tajawal;}',
    '#sxFigQ > summary{background:#0b1f4c;color:#fff;padding:12px 16px;border-radius:10px;cursor:pointer;font-weight:800;font-size:1rem;list-style:none;}',
    '#sxFigQ > summary::-webkit-details-marker{display:none;}',
    '#sxFigQ[open] > summary{border-radius:10px 10px 0 0;}',
    '.sx-fq{border:1.5px solid #d6dde9;border-top:none;padding:16px 18px;background:#fff;}',
    '.sx-fq:last-child{border-radius:0 0 10px 10px;}',
    '.sx-fq .tg{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;}',
    '.sx-fq .tg span{background:#eef2f7;color:#263238;border-radius:999px;padding:3px 12px;font-size:0.85rem;font-weight:700;}',
    '.sx-fq .tg span.px{background:#fdecea;color:#b71c1c;}',
    '.sx-fq img{max-width:min(100%,560px);height:auto;display:block;margin:6px auto 12px;border:1px solid #cfd8dc;border-radius:8px;background:#fff;padding:6px;}',
    '.sx-fq .qt{font-size:1.08rem;line-height:1.95;color:#14213d;font-weight:500;}',
    '.sx-fq .an{display:none;margin-top:12px;background:#e8f5e9;border-right:4px solid #2e7d32;border-radius:8px;padding:12px 14px;font-size:1.02rem;line-height:1.95;color:#1b5e20;}',
    '.sx-fq.open .an{display:block;}',
    '.sx-plan{background:#fff;border:2px solid #d6dde9;border-radius:14px;padding:18px 20px;margin-bottom:24px;font-family:Tajawal;}',
    '.sx-plan h3{color:#0b1f4c;font-size:1.25rem;margin:0 0 6px;}',
    '.sx-plan .note{color:#455a64;font-size:0.92rem;line-height:1.8;margin-bottom:12px;}',
    '.sx-plan .wk{font-weight:800;color:#fff;background:#0b1f4c;border-radius:8px;padding:6px 12px;margin:14px 0 8px;font-size:0.98rem;}',
    '.sx-day{display:grid;grid-template-columns:8.6em 1fr;gap:10px;align-items:center;border:1px solid #e0e6ef;border-right:6px solid var(--c,#90a4ae);border-radius:10px;padding:9px 12px;margin:6px 0;background:#fafbfd;}',
    '.sx-day.today{background:#fff8e1;border-color:#ffb300;box-shadow:0 0 0 2px #ffb300 inset;}',
    '.sx-day.past{opacity:.55;}',
    '.sx-day .dt{font-weight:800;color:#263238;font-size:0.95rem;line-height:1.5;}',
    '.sx-day .dt small{display:block;font-weight:600;color:#546e7a;font-size:0.82rem;}',
    '.sx-day .what{display:flex;gap:6px;flex-wrap:wrap;align-items:center;}',
    '.sx-day .u{font-weight:800;color:var(--c,#37474f);font-size:0.9rem;margin-inline-end:4px;}',
    '.sx-chip{background:#fff;border:1.5px solid var(--c,#90a4ae);color:#263238;border-radius:8px;padding:6px 11px;font-family:Tajawal;font-weight:700;font-size:0.9rem;cursor:pointer;min-height:36px;}',
    '.sx-chip:hover{background:#eef2f7;}',
    '@media (max-width:600px){.only-desktop-inline{display:none;}.sx-day{grid-template-columns:1fr;}.sx-pn td,.sx-pn th{min-width:64px;padding:8px 8px;font-size:1rem;}}'
  ].join('\n');
  document.head.appendChild(css);

  // ---------------------------------------------------------------- 1) روابط مباشرة + مشاركة
  function buildUrl(params) {
    var q = Object.keys(params).map(function (k) { return k + '=' + encodeURIComponent(params[k]); }).join('&');
    var base = (location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/.test(location.hostname))
      ? 'https://zesty-sundae-b271b3.netlify.app/' : location.origin + location.pathname;
    return base + '?' + q;
  }
  window.sxShare = function (params, title) {
    var url = buildUrl(params);
    var text = (title ? title + ' — ' : '') + 'منصَّة الأحياء التفاعليَّة';
    if (navigator.share && /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)) {
      navigator.share({ title: text, text: text, url: url }).catch(function () {});
      return;
    }
    var done = function () { toast('نُسخ الرابط المباشر — الصقه في واتساب أو أيِّ مكان'); };
    var fallback = function () {
      var ta = document.createElement('textarea'); ta.value = url; ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { prompt('انسخ الرابط:', url); }
      ta.remove();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, fallback);
    else fallback();
  };

  function handleDeepLink() {
    var p;
    try { p = new URLSearchParams(location.search); } catch (e) { return; }
    var d = p.get('d'), ig = p.get('ig'), lesson = p.get('lesson'), dio = p.get('dio');
    if (dio && /^[a-z0-9_-]{2,40}$/.test(dio) && typeof dioOpen === 'function') {
      setTimeout(function () { dioOpen(dio); }, 400);
    } else if (d && /^[a-z0-9-]{3,60}$/.test(d)) {
      var f = findDiagram(d);
      if (f && typeof kbOpenDiagram === 'function') setTimeout(function () { kbOpenDiagram(f.unit, d); }, 400);
    } else if (ig && /^[a-z0-9-]{2,40}$/i.test(ig)) {
      setTimeout(function () {
        var tab = document.querySelector('.nav-tab[data-tab="infographics"]');
        if (tab) tab.click();
        setTimeout(function () { try { if (typeof igListByIds === 'function' && igListByIds([ig]).length) igOpenIds([ig]); } catch (e) {} }, 350);
      }, 400);
    } else if (lesson && /^[1-9]-\d{1,2}$/.test(lesson)) {
      setTimeout(function () {
        try {
          var unit = curriculumData.units.find(function (u) { return u.lessons.some(function (l) { return l.id === lesson; }); });
          if (unit) {
            var ct = document.querySelector('.nav-tab[data-tab="curriculum"]');   // آخر تبويب محفوظ قد يكون غير المنهج
            if (ct && !ct.classList.contains('active')) ct.click();
            showLesson(String(unit.id), lesson);
          }
        } catch (e) {}
      }, 400);
    }
  }

  // ---------------------------------------------------------------- 2) ربط الدروس بمخططاتها
  var DG_LESSON = {
    '1-1': ['dna-structure-s1', 'dna-rna-atp-s1'], '1-3': ['codon-translator-s1'], '1-4': ['transcription-s1', 'translation-s1'],
    '2-1': ['meiosis-s1'], '2-2': ['crossing-assortment-s1'], '2-4': ['genetic-diagram-s1', 'punnett-tool-s1'],
    '2-6': ['lac-operon-s1', 'transcription-factors-s1'],
    '3-2': ['recombinant-dna-s1', 'restriction-ligase-s1', 'reverse-transcription-s1'], '3-3': ['pcr-s1', 'gel-electrophoresis-s1'],
    '4-1': ['negative-feedback-s1'], '4-2': ['nephron-s1', 'ultrafiltration-s1'], '4-3': ['adh-s1'], '4-4': ['blood-glucose-s1'], '4-5': ['stomata-s1'],
    '5-2': ['motor-neuron-s1', 'reflex-arc-s1', 'action-potential-s1', 'cholinergic-synapse-s1'], '5-3': ['sarcomere-s1']
  };
  window.dgLessonList = function (lessonId) {
    return (DG_LESSON[lessonId] || []).filter(function (id) { return !!findDiagram(id); });
  };
  window.dgOpenLesson = function (lessonId) {
    var ids = window.dgLessonList(lessonId);
    if (!ids.length) return;
    var f = findDiagram(ids[0]);
    kbOpenDiagram(f.unit, ids[0]);
    if (ids.length > 1) setTimeout(function () { toast('لهذا الدرس ' + ar(ids.length) + ' مخططات — تجدها في الأزرار أعلى الرسم'); }, 600);
  };

  // ---------------------------------------------------------------- 2ب) ربط الدروس بالديوراما (تبويب «الديوراما»)
  var DIO_LESSON = { '1-1': ['dna'], '1-2': ['dna'], '1-3': ['translation'], '1-4': ['transcription', 'translation'], '1-5': ['sickle_cell'],
    '2-1': ['meiosis'], '2-5': ['sickle_cell'], '2-6': ['lac_operon'], '3-2': ['recombinant_dna'], '3-3': ['pcr', 'gel_electrophoresis'],
    '4-2': ['nephron'], '4-3': ['nephron'], '4-4': ['glucose'], '4-5': ['stomata'],
    '5-2': ['action_potential', 'synapse'], '5-3': ['sarcomere'] };
  window.dioLessonList = function (lessonId) {
    return (DIO_LESSON[lessonId] || []).filter(function (id) { return typeof DIORAMAS !== 'undefined' && DIORAMAS.some(function (x) { return x.id === id; }); });
  };
  window.dioOpenLesson = function (lessonId) {
    var ids = window.dioLessonList(lessonId);
    if (ids.length && typeof dioOpen === 'function') dioOpen(ids[0]);
  };

  // ---------------------------------------------------------------- 3) «اختبر نفسك» + 6) ورقة التسمية
  // المخططات التي يصلح فيها إخفاء التسميات (رسوم تراكيب؛ لا مخططات صناديق نصيَّة)
  var QUIZ_OK = ['dna-structure-s1', 'transcription-s1', 'translation-s1', 'meiosis-s1', 'lac-operon-s1', 'transcription-factors-s1',
    'gel-electrophoresis-s1', 'nephron-s1', 'ultrafiltration-s1', 'adh-s1', 'stomata-s1', 'motor-neuron-s1', 'reflex-arc-s1',
    'action-potential-s1', 'cholinergic-synapse-s1', 'sarcomere-s1'];
  var quiz = null;

  function curDiagram() {
    try { return dgGetCurrentList().find(function (x) { return x.id === dgCurrentDiagramId; }) || null; } catch (e) { return null; }
  }
  function liveSvg() { return document.querySelector('#dgRenderArea svg'); }
  // النقاط الصالحة للاختبار: التي فيها رسم فعلي (لا صندوق نصِّي فقط) — صناديق العناوين تبقى ظاهرة كسياق
  function quizIds(svg, d) {
    var ids = [];
    svg.querySelectorAll('.dg-hotspot').forEach(function (h) {
      var id = h.getAttribute('data-id');
      if (!d.hotspots[id] || ids.indexOf(id) !== -1) return;
      var drawn = false;
      svg.querySelectorAll('.dg-hotspot[data-id="' + id + '"] *').forEach(function (el) {
        if (!/^(rect|text|tspan|title|g)$/i.test(el.tagName)) drawn = true;
      });
      if (drawn) ids.push(id);
    });
    return ids;
  }
  // النصوص التي تكشف اسم الجزء: كل نص داخل نقطة مختبَرة + أيُّ نص خارج النقاط يطابق اسم نقطة مختبَرة
  function labelTexts(svg, d) {
    var ids = quizIds(svg, d);
    var labels = ids.map(function (k) { return norm(d.hotspots[k].label); }).filter(function (s) { return s.length >= 3; });
    var out = [];
    svg.querySelectorAll('text').forEach(function (t) {
      var g = t.closest('.dg-hotspot');
      if (g) { if (ids.indexOf(g.getAttribute('data-id')) !== -1 && !/^[\d٠-٩\s]{1,3}$/.test(t.textContent)) out.push(t); return; }
      var n = norm(t.textContent);
      if (n.length < 3) return;
      if (labels.some(function (l) { return l.indexOf(n) !== -1 || n.indexOf(l) !== -1; })) out.push(t);
    });
    return out;
  }

  function toolbar() {
    var bar = $('dgTitleBar');
    if (!bar) return;
    var box = $('sxDgTools');
    if (!box) {
      box = document.createElement('div'); box.id = 'sxDgTools';
      bar.parentNode.insertBefore(box, bar.nextSibling);
    }
    var d = curDiagram();
    if (!d) { box.innerHTML = ''; return; }
    var can = QUIZ_OK.indexOf(d.id) !== -1 && !!liveSvg() && quizIds(liveSvg(), d).length >= 4;
    box.innerHTML =
      (can ? '<button type="button" class="sx-btn pri" id="sxQuizBtn" onclick="sxQuizToggle()">🎯 اختبر نفسك في هذا الرسم</button>' : '') +
      (can ? '<button type="button" class="sx-btn only-desktop-inline" onclick="sxPrintSheet()">🖨 ورقة تسمية للطباعة</button>' : '') +
      '<button type="button" class="sx-btn" onclick="sxShare({d:\'' + d.id + '\'}, \'' + esc(d.title).replace(/'/g, '') + '\')">🔗 مشاركة رابط المخطَّط</button>';
  }

  function quizStop(silent) {
    if (!quiz) return;
    var area = $('dgRenderArea');
    if (area) { area.classList.remove('sx-quiz'); area.removeEventListener('click', quizClick, true); }
    document.querySelectorAll('#dgRenderArea .sx-hide').forEach(function (t) { t.classList.remove('sx-hide'); });
    document.querySelectorAll('#dgRenderArea .dg-hotspot').forEach(function (h) { h.classList.remove('sx-ok', 'sx-bad', 'sx-hint', 'dg-active'); });
    quiz = null;
    document.body.classList.remove('sx-quizzing');
    var b = $('sxQuizBtn'); if (b) { b.classList.remove('on'); b.classList.add('pri'); b.textContent = '🎯 اختبر نفسك في هذا الرسم'; }
    if (!silent) {
      var info = $('dgInfo');
      if (info) { info.className = 'dg-info-panel empty'; info.innerHTML = 'انقر على أحد أجزاء الرسم لعرض شرحه هنا.'; }
    }
  }
  function quizBar(fb, cls) {
    var bar = $('sxQuizBar');
    if (!bar) { bar = document.createElement('div'); bar.id = 'sxQuizBar'; document.body.appendChild(bar); }
    if (!quiz || quiz.idx >= quiz.order.length) { bar.innerHTML = quiz ? '<b>انتهى الاختبار — انزل لترى نتيجتك</b>' : ''; return; }
    bar.innerHTML = '<small>السؤال ' + ar(quiz.idx + 1) + ' من ' + ar(quiz.order.length) + ' — اضغط في الرسم على:</small><b>' + esc(quiz.d.hotspots[quiz.order[quiz.idx]].label) + '</b><i class="' + (cls || '') + '">' + (fb || '') + '</i>';
  }
  function quizRender(fb, cls) {
    quizBar(fb, cls);
    var info = $('dgInfo'); if (!info || !quiz) return;
    info.className = 'dg-info-panel';
    var total = quiz.order.length;
    if (quiz.idx >= total) {
      var pct = Math.round(quiz.score / total * 100);
      info.innerHTML = '<div class="sx-quiz-card"><div style="font-weight:800;color:#1b5e20;font-size:1.15em;">🎯 انتهى الاختبار</div>' +
        '<div class="target" style="margin-top:10px;">أصبتَ ' + ar(quiz.score) + ' من ' + ar(total) + ' من المحاولة الأولى</div>' +
        '<div class="fb ' + (pct >= 80 ? 'ok' : 'bad') + '">' + (pct === 100 ? 'ممتاز! تعرف أجزاء هذا الرسم كلَّها.' : pct >= 80 ? 'جيِّد جدّاً. راجع ما أخطأتَ فيه ثم أعد المحاولة.' : 'تحتاج إلى مراجعة. اعرض التسميات واقرأ الشرح ثم أعد الاختبار.') + '</div>' +
        '<div class="row"><button type="button" class="sx-btn pri" onclick="sxQuizStart()">↻ أعد الاختبار</button>' +
        '<button type="button" class="sx-btn" onclick="sxQuizToggle()">اعرض التسميات والشرح</button></div></div>';
      return;
    }
    var h = quiz.d.hotspots[quiz.order[quiz.idx]];
    info.innerHTML = '<div class="sx-quiz-card">' +
      '<div class="how"><b>المطلوب منك:</b>أُخفيت أسماء الأجزاء من الرسم. اقرأ الاسم المكتوب في المربَّع الأزرق، ثم <u>اضغط على مكان هذا الجزء في الرسم</u>.</div>' +
      '<div class="ask">السؤال ' + ar(quiz.idx + 1) + ' من ' + ar(total) + ' — اضغط في الرسم على:</div>' +
      '<div class="target">' + esc(h.label) + '</div>' +
      '<div class="fb ' + (cls || '') + '">' + (fb || '') + '</div>' +
      '<div class="row"><button type="button" class="sx-btn" onclick="sxQuizSkip()">لا أعرف — أرِني مكانه</button>' +
      '<button type="button" class="sx-btn" onclick="sxQuizToggle()">إنهاء الاختبار</button></div>' +
      '<div style="margin-top:10px;font-size:0.85em;color:#546e7a;">النتيجة حتى الآن: ' + ar(quiz.score) + ' صحيحة من المحاولة الأولى</div></div>';
  }
  function quizNext() {
    document.querySelectorAll('#dgRenderArea .dg-hotspot').forEach(function (x) { x.classList.remove('sx-bad', 'sx-hint'); });
    quiz.idx++; quiz.tries = 0; quiz.lock = false;
    quizRender('', '');
  }
  function quizClick(e) {
    if (!quiz) return;
    var g = e.target.closest && e.target.closest('.dg-hotspot');
    e.stopPropagation(); e.preventDefault();
    if (!g || quiz.lock || quiz.idx >= quiz.order.length) return;
    var id = g.getAttribute('data-id'), target = quiz.order[quiz.idx];
    if (quiz.order.indexOf(id) === -1) return;
    if (id === target) {
      if (quiz.tries === 0) quiz.score++;
      g.classList.remove('sx-hint', 'sx-bad'); g.classList.add('sx-ok');
      g.querySelectorAll('.sx-hide').forEach(function (t) { t.classList.remove('sx-hide'); });
      quiz.lock = true;
      quizRender(quiz.tries === 0 ? '✓ صحيح!' : '✓ صحيح الآن.', 'ok');
      setTimeout(function () { if (quiz) quizNext(); }, 1100);
    } else {
      quiz.tries++;
      g.classList.add('sx-bad');
      setTimeout(function () { g.classList.remove('sx-bad'); }, 700);
      if (quiz.tries >= 2) {
        var right = document.querySelector('#dgRenderArea .dg-hotspot[data-id="' + target + '"]');
        if (right) right.classList.add('sx-hint');
        quizRender('✗ ليس هذا. الجزء الصحيح يومض الآن باللون البرتقالي — اضغط عليه للمتابعة.', 'bad');
      } else {
        quizRender('✗ ليس هذا الجزء. حاول مرَّة أخرى.', 'bad');
      }
    }
  }
  window.sxQuizSkip = function () {
    if (!quiz || quiz.idx >= quiz.order.length) return;
    quiz.tries = 2;
    var right = document.querySelector('#dgRenderArea .dg-hotspot[data-id="' + quiz.order[quiz.idx] + '"]');
    if (right) right.classList.add('sx-hint');
    quizRender('الجزء المطلوب يومض الآن باللون البرتقالي — اضغط عليه للمتابعة.', 'bad');
  };
  window.sxQuizStart = function () {
    var d = curDiagram(), svg = liveSvg(), area = $('dgRenderArea');
    if (!d || !svg || !area) return;
    quizStop(true);
    var ids = quizIds(svg, d);
    for (var i = ids.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = ids[i]; ids[i] = ids[j]; ids[j] = t; }
    labelTexts(svg, d).forEach(function (t) { t.classList.add('sx-hide'); });
    svg.querySelectorAll('.dg-hotspot').forEach(function (h) { h.classList.remove('dg-active', 'sx-ok'); });
    quiz = { d: d, order: ids, idx: 0, score: 0, tries: 0, lock: false };
    area.classList.add('sx-quiz');
    document.body.classList.add('sx-quizzing');
    area.addEventListener('click', quizClick, true);
    var b = $('sxQuizBtn'); if (b) { b.classList.add('on'); b.classList.remove('pri'); b.textContent = '✕ إنهاء الاختبار وعرض التسميات'; }
    var lg = $('dgLegend'); if (lg) lg.dataset.sx = '1';
    quizRender('', '');
    if (window.innerWidth <= 768) { area.scrollIntoView({ behavior: 'smooth', block: 'start' }); toast('اسم الجزء المطلوب في الشريط الأزرق أسفل الشاشة — اسحب الرسم واضغط على مكانه'); }
  };
  window.sxQuizToggle = function () { if (quiz) quizStop(false); else window.sxQuizStart(); };

  // ورقة تسمية A4: الرسم بلا تسميات مع أرقام، وأسطر للإجابة، ثم صفحة مفتاح الإجابة للمعلِّم
  window.sxPrintSheet = function () {
    var d = curDiagram(), svg = liveSvg();
    if (!d || !svg) return;
    var wasQuiz = !!quiz; if (wasQuiz) quizStop(true);
    var ids = [], boxes = {};
    var hide = labelTexts(svg, d);
    hide.forEach(function (t) { t.style.display = 'none'; });
    quizIds(svg, d).forEach(function (id) {
      var h = svg.querySelector('.dg-hotspot[data-id="' + id + '"]');
      var b = null; try { b = h.getBBox(); } catch (e) {}
      ids.push(id); boxes[id] = b;
    });
    hide.forEach(function (t) { t.style.display = ''; });
    ids.forEach(function (id) {   // نقطة نصيَّة فقط: خذ صندوقها مع النص
      if (!boxes[id] || (boxes[id].width < 2 && boxes[id].height < 2)) {
        try { boxes[id] = svg.querySelector('.dg-hotspot[data-id="' + id + '"]').getBBox(); } catch (e) {}
      }
    });
    ids.sort(function (p, q) { var A = boxes[p], B = boxes[q]; return (A ? A.width * A.height : 0) - (B ? B.width * B.height : 0); });
    var clone = svg.cloneNode(true);
    labelTexts(clone, d).forEach(function (t) { t.setAttribute('visibility', 'hidden'); });
    var NS = 'http://www.w3.org/2000/svg', n = 0, key = [], placed = [];
    var ABJ = ['أ', 'ب', 'ج', 'د', 'هـ', 'و', 'ز', 'ح', 'ط', 'ي', 'ك', 'ل', 'م', 'ن'];   // حروف لا أرقام: بعض الرسوم فيها خطوات مرقَّمة
    ids.forEach(function (id) {
      var b = boxes[id]; if (!b) return;
      n++; var tag = ABJ[n - 1] || String(n); key.push([tag, d.hotspots[id].label]);
      var g = document.createElementNS(NS, 'g');
      var cx = b.x + b.width / 2, cy = b.y + b.height / 2;
      // تفادي تراكب الأرقام (أجزاء متداخلة مثل الكُبيبة داخل محفظة بومان): انقل الرقم إلى حافَّة الجزء
      var hits = function (x, y) { return placed.some(function (q) { return Math.abs(q[0] - x) < 34 && Math.abs(q[1] - y) < 34; }); };
      if (hits(cx, cy)) { var alt = [[cx, b.y + 4], [cx, b.y + b.height - 4], [b.x + 4, cy], [b.x + b.width - 4, cy]].find(function (c) { return !hits(c[0], c[1]); }); if (alt) { cx = alt[0]; cy = alt[1]; } }
      placed.push([cx, cy]);
      g.innerHTML = '<circle cx="' + cx + '" cy="' + cy + '" r="15" fill="#fff" stroke="#000" stroke-width="2.5"/>' +
        '<text x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle" font-size="17" font-weight="800" fill="#000" font-family="Arial">' + tag + '</text>';
      clone.appendChild(g);
    });
    clone.removeAttribute('style'); clone.setAttribute('width', '100%');
    var svgBlank = new XMLSerializer().serializeToString(clone);
    var full = svg.cloneNode(true); full.removeAttribute('style'); full.setAttribute('width', '100%');
    full.querySelectorAll('.sx-hide').forEach(function (t) { t.classList.remove('sx-hide'); });
    var svgFull = new XMLSerializer().serializeToString(full);
    var lines = key.map(function (k) { return '<div class="ln"><b>' + k[0] + '.</b><span></span></div>'; }).join('');
    var ans = key.map(function (k) { return '<div class="an"><b>' + k[0] + '.</b> ' + esc(k[1]) + '</div>'; }).join('');
    var w = window.open('', '_blank');
    if (!w) { toast('اسمح بالنوافذ المنبثقة لهذا الموقع ثم أعد المحاولة'); return; }
    w.document.write('<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>ورقة تسمية — ' + esc(d.title) + '</title>' +
      '<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">' +
      '<style>@page{size:A4;margin:12mm}*{box-sizing:border-box}body{font-family:Tajawal,Arial,sans-serif;margin:0;color:#000}' +
      '.pg{page-break-after:always}.pg:last-child{page-break-after:auto}h1{font-size:19pt;margin:0 0 2mm;border-bottom:2.5pt solid #C8102E;padding-bottom:2mm}' +
      '.meta{display:flex;justify-content:space-between;font-size:11.5pt;margin:3mm 0 2mm;font-weight:700}.ins{font-size:12.5pt;font-weight:700;margin:2mm 0 3mm;background:#f1f3f5;padding:2.5mm 4mm;border-radius:2mm}' +
      'svg{max-width:100%;height:auto;display:block;margin:0 auto;border:1pt solid #999;border-radius:2mm}svg text{unicode-bidi:plaintext}' +
      '.lines{display:grid;grid-template-columns:1fr 1fr;gap:3.2mm 10mm;margin-top:5mm}.ln{display:flex;gap:2mm;align-items:flex-end;font-size:12.5pt}.ln span{flex:1;border-bottom:1pt dotted #000;height:7mm}' +
      '.ans{display:grid;grid-template-columns:1fr 1fr;gap:2mm 10mm;margin:4mm 0 5mm;font-size:12.5pt}.ft{font-size:9.5pt;color:#333;margin-top:4mm;text-align:center}' +
      '.dg-hotspot{cursor:default}</style></head><body>' +
      '<div class="pg"><h1>' + esc(d.title) + '</h1><div class="meta"><span>الاسم: ...................................................</span><span>الصف: ...............</span><span>التاريخ: ...............</span></div>' +
      '<div class="ins">اكتب أمام كل حرف اسم الجزء الذي يشير إليه في الرسم.</div>' + svgBlank + '<div class="lines">' + lines + '</div>' +
      '<div class="ft">' + esc(d.figure) + ' — كتاب الطالب ' + esc(d.page) + ' · منصَّة الأحياء التفاعليَّة</div></div>' +
      '<div class="pg"><h1>مفتاح الإجابة — ' + esc(d.title) + '</h1><div class="ans">' + ans + '</div>' + svgFull +
      '<div class="ft">' + esc(d.figure) + ' — كتاب الطالب ' + esc(d.page) + ' · نسخة المعلِّم</div></div>' +
      '<scr' + 'ipt>window.onload=function(){setTimeout(function(){window.print()},700)}</scr' + 'ipt></body></html>');
    w.document.close();
  };

  // ---------------------------------------------------------------- أسئلة الأشكال تحت المخطَّط (من بنك الأسئلة: _figQ)
  function lessonsOf(diagramId) {
    return Object.keys(DG_LESSON).filter(function (l) { return DG_LESSON[l].indexOf(diagramId) !== -1; });
  }
  function figQuestions() {
    var old = $('sxFigQ'); if (old) old.remove();
    var d = curDiagram(), lay = document.querySelector('#tab-diagrams .dg-layout');
    if (!d || !lay || typeof extendedQuestions !== 'object') return;
    var qs = [];
    lessonsOf(d.id).forEach(function (l) {
      (extendedQuestions[l] || []).forEach(function (q) { if (q && q._figQ && q.fig && q.q && q.a) qs.push([l, q]); });
    });
    if (!qs.length) return;
    var les = lessonsOf(d.id).join(' و ');
    var box = document.createElement('details');
    box.id = 'sxFigQ';
    box.innerHTML = '<summary>📝 أسئلة على أشكال من الدرس ' + les + ' — ' + ar(qs.length) + (qs.length === 1 ? ' سؤال' : qs.length === 2 ? ' سؤالان' : qs.length <= 10 ? ' أسئلة' : ' سؤالاً') + ' (اضغط للعرض)</summary>' +
      qs.map(function (x, i) {
        var q = x[1];
        return '<div class="sx-fq"><div class="tg"><span>السؤال ' + ar(i + 1) + '</span>' + (q.marks ? '<span>' + ar(q.marks) + (q.marks <= 2 ? (q.marks === 1 ? ' درجة' : ' درجتان') : ' درجات') + '</span>' : '') +
          (q.levelAr ? '<span>' + esc(q.levelAr) + '</span>' : '') + (q._pastExam ? '<span class="px">من امتحان وزاري سابق</span>' : '') + '</div>' +
          '<img loading="lazy" src="' + esc(q.fig) + '" alt="شكل السؤال">' +
          '<div class="qt">' + q.q + '</div>' +
          '<div style="margin-top:12px;"><button type="button" class="sx-btn pri" onclick="var c=this.closest(\'.sx-fq\');c.classList.toggle(\'open\');this.textContent=c.classList.contains(\'open\')?\'إخفاء الإجابة\':\'أظهر الإجابة النموذجيَّة\';">أظهر الإجابة النموذجيَّة</button></div>' +
          '<div class="an">' + q.a + '</div></div>';
      }).join('');
    lay.parentNode.insertBefore(box, lay.nextSibling);
  }

  // ---------------------------------------------------------------- 4) المخطَّط الجيني التفاعلي (مربَّع بانيت)
  // الأمثلة والرموز والطرز المظهريَّة من كتاب الطالب ص 55–57.
  var PN = {
    fur: {
      name: 'لون الفراء في الأرانب — أليل سائد وأليل مُتنحٍّ',
      genotypes: [['B', 'B'], ['B', 'b'], ['b', 'b']],
      order: ['B', 'b'],
      show: function (a) { return a; },
      pheno: function (g) { return g.indexOf('B') !== -1 ? 'فراء بني' : 'فراء أبيض'; },
      note: 'الأليل B سائد Dominant، والأليل b مُتنحٍّ Recessive. ويؤثر الأليل b فقط في الطراز المظهري عند غياب الأليل B. <small>— كتاب الطالب ص 55</small>'
    },
    blood: {
      name: 'فصائل الدم في الإنسان — سيادة مشتركة وأليلات متعددة',
      genotypes: [['A', 'A'], ['A', 'O'], ['B', 'B'], ['B', 'O'], ['A', 'B'], ['O', 'O']],
      order: ['A', 'B', 'O'],
      show: function (a) { return 'I<sup>' + a + '</sup>'; },
      pheno: function (g) {
        var a = g.indexOf('A') !== -1, b = g.indexOf('B') !== -1;
        return 'فصيلة الدم ' + (a && b ? 'AB' : a ? 'A' : b ? 'B' : 'O');
      },
      note: 'إذا كان لدى شخص نسخة من A ونسخة من B، تكون فصيلة دمه AB. هذان أليلان ذات سيادة مشتركة Codominant؛ فكلا الأليلين يؤثران في الشخص غير متماثل الأليلات. <small>— كتاب الطالب ص 55–56</small>'
    }
  };
  function pnGeno(ex, pair) {
    var o = PN[ex].order, s = pair.slice().sort(function (x, y) { return o.indexOf(x) - o.indexOf(y); });
    return '<span class="gt">' + s.map(PN[ex].show).join('') + '</span>';
  }
  function pnKey(ex, pair) { var o = PN[ex].order; return pair.slice().sort(function (x, y) { return o.indexOf(x) - o.indexOf(y); }).join(''); }
  // قد تُعرض الأداة في أكثر من مكان (تبويب المخططات + ردِّ المساعد) بالمعرِّفات نفسها: اختر النسخة الظاهرة
  function vis(id) {
    var all = document.querySelectorAll('[id="' + id + '"]');
    for (var i = 0; i < all.length; i++) { var p = all[i].parentElement; if (p && p.offsetParent !== null) return all[i]; }
    return all[0] || null;
  }
  function pnRender() {
    var exSel = vis('sxPnEx'), a = vis('sxPnA'), b = vis('sxPnB'), out = vis('sxPnOut');
    if (!exSel || !out) return;
    var ex = exSel.value, E = PN[ex];
    var pa = E.genotypes[+a.value] || E.genotypes[0], pb = E.genotypes[+b.value] || E.genotypes[0];
    var uniq = function (p) { return p[0] === p[1] ? [p[0]] : p; };
    var ga = uniq(pa), gb = uniq(pb);
    var gam = function (g) { return g.map(function (x) { return '<span class="gam"><span class="gt">' + E.show(x) + '</span></span>'; }).join(' <span style="font-weight:700;">أو</span> '); };
    var cells = {}, phen = {}, total = 0;
    var rows = gb.map(function (y) {
      return '<tr><th><span class="gt">' + E.show(y) + '</span></th>' + ga.map(function (x) {
        var k = pnKey(ex, [x, y]), ph = E.pheno([x, y]);
        cells[k] = (cells[k] || 0) + 1; phen[ph] = (phen[ph] || 0) + 1; total++;
        return '<td>' + pnGeno(ex, [x, y]) + '<small>' + ph + '</small></td>';
      }).join('') + '</tr>';
    }).join('');
    var gcd = function (x, y) { return y ? gcd(y, x % y) : x; };
    var ratio = function (obj, fmt) {
      var ks = Object.keys(obj), g = ks.reduce(function (acc, k) { return gcd(acc, obj[k]); }, 0);
      if (ks.length === 1) return 'جميع الأبناء: ' + fmt(ks[0]);
      return ks.map(function (k) { return (obj[k] / g) + ' ' + fmt(k); }).join(' : ');
    };
    var genoFmt = function (k) { return pnGeno(ex, k.split('')); };
    out.innerHTML =
      '<div class="rw"><b>الطراز المظهري للأبوين</b><span>' + E.pheno(pa) + '</span><span style="font-weight:800;">×</span><span>' + E.pheno(pb) + '</span></div>' +
      '<div class="rw"><b>الطراز الجيني للأبوين</b><span>' + pnGeno(ex, pa) + '</span><span style="font-weight:800;">×</span><span>' + pnGeno(ex, pb) + '</span></div>' +
      '<div class="rw"><b>أمشاج الأبوين</b><span>' + gam(ga) + '</span><span style="font-weight:800;">×</span><span>' + gam(gb) + '</span></div>' +
      '<div style="text-align:center;font-weight:800;color:#0b1f4c;margin-top:12px;">الطرز الجينية والطرز المظهرية للأبناء</div>' +
      '<div style="overflow-x:auto;"><table><tr><th style="background:#fff;border:none;"></th>' + ga.map(function (x) { return '<th><span class="gt">' + E.show(x) + '</span></th>'; }).join('') + '</tr>' + rows + '</table></div>' +
      '<div style="text-align:center;font-size:0.85rem;color:#455a64;">الصفُّ العلوي: أمشاج الذكر · العمود الجانبي: أمشاج الأنثى</div>' +
      '<div class="ratio">النسبة المتوقعة للطرز الجينية للأبناء: ' + ratio(cells, genoFmt) + '<br>النسبة المتوقعة للطرز المظهرية للأبناء: ' + ratio(phen, function (k) { return k; }) + '</div>' +
      '<div style="margin-top:10px;font-size:0.88rem;color:#37474f;line-height:1.8;">' + E.note + '</div>';
  }
  function pnFill() {
    var ex = vis('sxPnEx').value, E = PN[ex];
    var opts = E.genotypes.map(function (g, i) { return '<option value="' + i + '">' + E.pheno(g) + ' (\u2066' + pnKey(ex, g).split('').map(function (x) { return ex === 'blood' ? 'I' + ({ A: 'ᴬ', B: 'ᴮ', O: 'ᴼ' })[x] : x; }).join('') + '\u2069)</option>'; }).join('');
    vis('sxPnA').innerHTML = opts; vis('sxPnB').innerHTML = opts;
    vis('sxPnA').value = '1'; vis('sxPnB').value = '1';
    pnRender();
  }
  window.sxPnFill = pnFill; window.sxPnRender = pnRender;
  var punnett = {
    id: 'punnett-tool-s1',
    title: 'المخطَّط الجيني (تفاعلي)',
    figure: 'المخطط الجيني في كتاب الطالب',
    page: 'ص 55-57',
    obj: '2-10',
    legend: 'عندما تجيب عن أسئلة الوراثة، ستساعدك كتابة جميع تراكيب الأليلات – جميع الطرز الجينية المختلفة– والطرز المظهرية المحتملة في فهم مسائل الوراثة.',
    init: function () { try { pnFill(); } catch (e) {} },
    svg: '<div class="sx-pn">' +
      '<div style="text-align:center;font-size:1.2rem;font-weight:800;color:#0b1f4c;margin:6px 0 12px;">المخطَّط الجيني — اختر الأبوين وشاهد الأبناء</div>' +
      '<div class="dg-hotspot" data-id="howto" style="background:#e8f5e9;border-right:4px solid #2e7d32;border-radius:10px;padding:10px 14px;margin-bottom:12px;font-size:0.98rem;color:#1b5e20;line-height:1.8;cursor:pointer;">' +
      '<b>طريقة الاستعمال:</b> ١) اختر المثال. ٢) اختر الطراز الجيني لكلٍّ من الأبوين. ٣) اقرأ الأمشاج ثم مربَّع الأبناء والنسبة المتوقعة. غيِّر الأبوين وتوقَّع النتيجة قبل أن تنظر إليها.</div>' +
      '<div class="rw"><b>المثال</b><select id="sxPnEx" onchange="sxPnFill()"><option value="fur">' + PN.fur.name + '</option><option value="blood">' + PN.blood.name + '</option></select></div>' +
      '<div class="rw"><b>الطراز الجيني للذكر</b><select id="sxPnA" onchange="sxPnRender()"></select></div>' +
      '<div class="rw"><b>الطراز الجيني للأنثى</b><select id="sxPnB" onchange="sxPnRender()"></select></div>' +
      '<div id="sxPnOut" style="margin-top:8px;"></div>' +
      '<div style="margin-top:12px;font-size:0.8rem;color:#546e7a;text-align:center;">الأمثلة والرموز والطرز المظهريَّة من كتاب الطالب — الموضوعان ٢-٣ و ٢-٤ (ص ٥٥–٥٧).</div></div>',
    hotspots: {
      howto: { label: 'المخطط الجيني', desc: 'عندما تجيب عن أسئلة الوراثة، ستساعدك كتابة جميع تراكيب الأليلات – جميع الطرز الجينية المختلفة– والطرز المظهرية المحتملة في فهم مسائل الوراثة. <br><small>كتاب الطالب — ص 56</small>' }
    }
  };
  if (unitDiagrams[2] && !findDiagram('punnett-tool-s1')) {
    var at = unitDiagrams[2].findIndex(function (x) { return x.id === 'genetic-diagram-s1'; });
    unitDiagrams[2].splice(at === -1 ? unitDiagrams[2].length : at + 1, 0, punnett);
  }

  // ---------------------------------------------------------------- 5) خطَّة المراجعة قبل الامتحان
  // 28 يوماً تنتهي في اليوم السابق لبدء فترة الامتحانات. أيام كل وحدة بنسبة درجاتها من 70 (14/16/14/14/12).
  var PLAN = [
    [1, ['1-1']], [1, ['1-2']], [1, ['1-3']], [1, ['1-4']], [1, ['1-5'], 'sum'],
    [2, ['2-1']], [2, ['2-2', '2-3']], [2, ['2-4']], [2, ['2-4', '2-5']], [2, ['2-6'], 'sum'],
    [3, ['3-1']], [3, ['3-2']], [3, ['3-3']], [3, ['3-4']], [3, ['3-5'], 'sum'],
    [4, ['4-1']], [4, ['4-2']], [4, ['4-3']], [4, ['4-4']], [4, ['4-5'], 'sum'],
    [5, ['5-1', '5-2']], [5, ['5-2']], [5, ['5-3']], [5, ['5-4'], 'sum'],
    ['all', 'ملخَّصات الوحدات الخمس', 'sums'], ['all', 'امتحان تجريبي كامل (٧٠ درجة) في وقته', 'exam'],
    ['all', 'راجع أخطاءك مع المساعد التعليمي', 'assistant'], ['all', 'مراجعة خفيفة: «اختبر نفسك» في المخططات، ثم نم مبكِّراً', 'diagrams']
  ];
  var UC = { 1: '#1565c0', 2: '#00702f', 3: '#8a5a00', 4: '#C8102E', 5: '#5b2a86', all: '#0b1f4c' };
  var UN = { 1: 'الأولى', 2: 'الثانية', 3: 'الثالثة', 4: 'الرابعة', 5: 'الخامسة' };
  var DAYS = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  var MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  window.sxPlanGo = function (kind, arg) {
    var click = function (t) { var el = document.querySelector('.nav-tab[data-tab="' + t + '"]'); if (el) el.click(); };
    if (kind === 'lesson') {
      click('curriculum');
      setTimeout(function () { try { showLesson(String(arg.split('-')[0]), arg); window.scrollTo(0, 0); } catch (e) {} }, 150);
    } else if (kind === 'sum') {
      try { igOpenIds([IG_UNIT_SUMMARY[arg]]); } catch (e) {}
    } else if (kind === 'sums') {
      try { igOpenIds([1, 2, 3, 4, 5].map(function (u) { return IG_UNIT_SUMMARY[u]; })); } catch (e) {}
    } else if (kind === 'exam') {
      var x = $('tab-examspec'); if (x) x.scrollIntoView({ behavior: 'smooth' });
      toast('نموذج الامتحان ومواصفاته في هذا التبويب — انزل قليلاً');
    } else if (kind === 'assistant' || kind === 'diagrams') { click(kind); window.scrollTo(0, 0); }
  };
  function lessonTitle(id) {
    try {
      var u = curriculumData.units.find(function (x) { return x.id == id.split('-')[0]; });
      return u.lessons.find(function (l) { return l.id === id; }).title;
    } catch (e) { return ''; }
  }
  function renderPlan() {
    var anchor = $('examCountdown');
    if (!anchor) return;
    var old = $('sxPlan'); if (old) old.remove();
    if (!isS1() || typeof _examPeriod !== 'function') return;
    var p = _examPeriod('S1'); if (!p) return;
    var examStart = new Date(p.from + 'T00:00:00');
    var start = new Date(examStart); start.setDate(start.getDate() - PLAN.length);
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var until = Math.round((start - today) / 86400000);
    var fmt = function (d) { return ar(d.getDate()) + ' ' + MONTHS[d.getMonth()]; };
    var head;
    if (today >= examStart) head = 'انتهت مدَّة الخطَّة — بدأت فترة الامتحانات.';
    else if (until > 0) head = 'تبدأ الخطَّة يوم ' + DAYS[start.getDay()] + ' ' + fmt(start) + ' (بعد ' + ar(until) + ' يوماً) وتنتهي قبل بدء فترة الامتحانات بيوم. يمكنك البدء بها من الآن.';
    else head = 'أنت الآن في اليوم ' + ar(Math.min(PLAN.length, 1 - until)) + ' من ' + ar(PLAN.length) + ' — يوم اليوم مظلَّل بالأصفر.';
    var html = '<h3>🗓 خطَّة المراجعة: ماذا أراجع اليوم؟ <button type="button" class="sx-btn" style="float:left;font-size:0.85rem;" onclick="sxPrintPlan()">🖨 اطبع الخطَّة (A4)</button></h3>' +
      '<div class="note">' + head + '<br>أيام كل وحدة موزَّعة بحسب وزنها في الامتحان (١٤ · ١٦ · ١٤ · ١٤ · ١٢ درجة من ٧٠)، والأيام الأربعة الأخيرة للمراجعة الشاملة. اضغط على اسم الدرس لفتحه.</div>';
    PLAN.forEach(function (row, i) {
      var d = new Date(start); d.setDate(d.getDate() + i);
      if (i % 7 === 0) html += '<div class="wk">الأسبوع ' + ar(i / 7 + 1) + ' — من ' + fmt(d) + '</div>';
      var cls = d.getTime() === today.getTime() ? ' today' : (d < today ? ' past' : '');
      var u = row[0], what;
      if (u === 'all') {
        what = '<span class="u">مراجعة شاملة</span><button type="button" class="sx-chip" onclick="sxPlanGo(\'' + row[2] + '\')">' + row[1] + '</button>';
      } else {
        what = '<span class="u">الوحدة ' + UN[u] + '</span>' + row[1].map(function (id) {
          return '<button type="button" class="sx-chip" onclick="sxPlanGo(\'lesson\',\'' + id + '\')">' + id + ' ' + esc(lessonTitle(id)) + '</button>';
        }).join('') + (row[2] === 'sum' ? '<button type="button" class="sx-chip" style="background:#f3f6fb;" onclick="sxPlanGo(\'sum\',' + u + ')">📄 ملخَّص الوحدة</button>' : '');
      }
      html += '<div class="sx-day' + cls + '" style="--c:' + UC[u] + '"><div class="dt">اليوم ' + ar(i + 1) + '<small>' + DAYS[d.getDay()] + ' ' + fmt(d) + '</small></div><div class="what">' + what + '</div></div>';
    });
    var box = document.createElement('div');
    box.id = 'sxPlan'; box.className = 'sx-plan'; box.innerHTML = html;
    anchor.parentNode.insertBefore(box, anchor.nextSibling);
  }
  window.sxRenderPlan = renderPlan;
  window.sxPrintPlan = function () {
    if (typeof _examPeriod !== 'function') return;
    var p = _examPeriod('S1'); if (!p) return;
    var examStart = new Date(p.from + 'T00:00:00');
    var start = new Date(examStart); start.setDate(start.getDate() - PLAN.length);
    var fmt = function (d) { return ar(d.getDate()) + ' ' + MONTHS[d.getMonth()]; };
    var rows = PLAN.map(function (row, i) {
      var d = new Date(start); d.setDate(d.getDate() + i);
      var u = row[0], what = u === 'all' ? esc(row[1]) : row[1].map(function (id) { return '<b>' + id + '</b> ' + esc(lessonTitle(id)); }).join(' &nbsp;+&nbsp; ') + (row[2] === 'sum' ? ' &nbsp;+&nbsp; ملخَّص الوحدة' : '');
      return '<tr' + (i % 7 === 0 ? ' class="w"' : '') + '><td class="n">' + ar(i + 1) + '</td><td class="d">' + DAYS[d.getDay()] + ' ' + fmt(d) + '</td><td class="u" style="color:' + UC[u] + '">' + (u === 'all' ? 'مراجعة شاملة' : 'الوحدة ' + UN[u]) + '</td><td>' + what + '</td><td class="c"></td></tr>';
    }).join('');
    var w = window.open('', '_blank');
    if (!w) { toast('اسمح بالنوافذ المنبثقة لهذا الموقع ثم أعد المحاولة'); return; }
    w.document.write('<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>خطَّة المراجعة — الأحياء ١٢</title>' +
      '<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">' +
      '<style>@page{size:A4;margin:11mm}*{box-sizing:border-box}body{font-family:Tajawal,Arial,sans-serif;margin:0;color:#000}' +
      'h1{font-size:17pt;margin:0;border-bottom:2.5pt solid #C8102E;padding-bottom:2mm}.s{font-size:10.5pt;margin:2mm 0 3mm;line-height:1.7}' +
      'table{width:100%;border-collapse:collapse;font-size:10.5pt}td,th{border:0.8pt solid #555;padding:1.35mm 2.2mm;text-align:right;vertical-align:middle}' +
      'th{background:#0b1f4c;color:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}tr.w td{border-top:2pt solid #000}' +
      '.n{width:9mm;text-align:center;font-weight:800}.d{width:31mm;white-space:nowrap}.u{width:27mm;font-weight:800;white-space:nowrap;-webkit-print-color-adjust:exact;print-color-adjust:exact}.c{width:11mm}' +
      '.ft{font-size:9pt;margin-top:3mm;text-align:center;color:#333}</style></head><body>' +
      '<h1>خطَّة المراجعة قبل امتحان الأحياء — الصف الثاني عشر، الفصل الأوَّل</h1>' +
      '<div class="s">٢٨ يوماً تنتهي في اليوم السابق لبدء فترة الامتحانات (' + fmt(examStart) + '). أيام كل وحدة بحسب وزنها في الامتحان (١٤ · ١٦ · ١٤ · ١٤ · ١٢ درجة من ٧٠). ضع علامة ✓ في الخانة الأخيرة بعد إتمام مراجعة اليوم.</div>' +
      '<table><tr><th>اليوم</th><th>التاريخ</th><th>الوحدة</th><th>ما أراجعه</th><th>✓</th></tr>' + rows + '</table>' +
      '<div class="ft">كل الدروس والملخَّصات والأسئلة في منصَّة الأحياء التفاعليَّة — zesty-sundae-b271b3.netlify.app</div>' +
      '<scr' + 'ipt>window.onload=function(){setTimeout(function(){window.print()},700)}</scr' + 'ipt></body></html>');
    w.document.close();
  };

  // ---------------------------------------------------------------- الربط بالمنصَّة
  var origShow = window.dgShowDiagram;
  if (typeof origShow === 'function') {
    window.dgShowDiagram = function (id) {
      quizStop(true);
      origShow(id);
      toolbar();
      try { figQuestions(); } catch (e) {}
    };
  }
  var origChange = window.dgOnUnitChange;
  if (typeof origChange === 'function') {
    window.dgOnUnitChange = function () { quizStop(true); origChange(); toolbar(); try { figQuestions(); } catch (e) {} };
  }
  var origCountdown = window.renderExamCountdown;
  if (typeof origCountdown === 'function') {
    window.renderExamCountdown = function (sem) { origCountdown(sem); try { renderPlan(); } catch (e) {} };
  }
  function boot() {
    try { renderPlan(); } catch (e) {}
    try { toolbar(); } catch (e) {}
    var et = document.querySelector('.nav-tab[data-tab="examspec"]');
    if (et) et.addEventListener('click', function () { setTimeout(function () { try { renderPlan(); } catch (e) {} }, 150); });
    handleDeepLink();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
