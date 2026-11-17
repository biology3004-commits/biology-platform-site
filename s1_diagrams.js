// المخططات التفاعليَّة — الفصل الأوَّل، الوحدات 1–5 (مخططات الوحدة 1 تستبدل القديمة التي في index.html؛ مترجم الشيفرة يبقى منه).
// رسوم SVG تحاكي أشكال كتاب الطالب، ونصوص الشرح حرفيَّة منه بصفحاتها.
// المصدر: Captures/diagrams_src/unitN.js — لا يُعدَّل هذا الملف يدويًّا؛ عدِّل المصدر ثم شغِّل build.sh
(function () { if (typeof unitDiagrams !== 'object') return;
unitDiagrams[1] = [
  {
    id: 'dna-structure-s1',
    title: 'تركيب جزيء DNA',
    figure: 'الأشكال ١-١ و ١-٣ و ١-٦',
    page: 'ص 20-25',
    obj: '1-3',
    legend: 'يتم تثبيت شريطي عديد النيوكليوتيد اللذَين يمتدان في اتجاهَين متعاكسين، معًا بروابط هيدروجينية بين القواعد. ترتبط A مع T برابطتَين هيدروجينيتَين، وترتبط C مع G بثلاث روابط هيدروجينية، وهو ما يسمّى ازدواج القواعد المكمّلة.',
    svg: `<svg viewBox="0 0 860 610" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
</defs>
<rect width="860" height="610" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">تركيب جزيء DNA</text>
<rect x="632" y="50" width="218" height="546" rx="14" fill="#f4f7fa" stroke="#cfd8dc" stroke-width="1.2"/>
<rect x="362" y="50" width="260" height="546" rx="14" fill="#f4f7fa" stroke="#cfd8dc" stroke-width="1.2"/>
<rect x="10" y="50" width="342" height="546" rx="14" fill="#f4f7fa" stroke="#cfd8dc" stroke-width="1.2"/>
<text x="741" y="80" text-anchor="middle" font-size="18" font-weight="800" fill="#0d47a1">النيوكليوتيد</text>
<g class="dg-hotspot" data-id="n-phos" style="cursor:pointer">
<rect x="640" y="98" width="110" height="84" fill="#ffffff" fill-opacity="0"/>
<line x1="672.3" y1="223.8" x2="664" y2="176" stroke="#546e7a" stroke-width="1.5"/>
<line x1="694" y1="126" x2="670" y2="148" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="660" cy="162" r="16" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="660" y="167.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<text x="730" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">مجموعة فوسفات</text>
</g>
<g class="dg-hotspot" data-id="n-base" style="cursor:pointer">
<line x1="759.7" y1="223.8" x2="759.7" y2="186" stroke="#546e7a" stroke-width="1.5"/>
<rect x="744" y="136" width="98" height="50" rx="3" fill="#4fc3f7" stroke="#01579b" stroke-width="1.6"/>
<text x="793" y="157" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">قاعدة</text>
<text x="793" y="177" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">نيتروجينية</text>
</g>
<g class="dg-hotspot" data-id="n-sugar" style="cursor:pointer">
<polygon points="716,192 759.7,223.8 743,275.2 689,275.2 672.3,223.8" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="716" y="240" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">سكر</text>
<text x="716" y="260" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">خماسي</text>
</g>
<line x1="646" y1="304" x2="836" y2="304" stroke="#b0bec5" stroke-width="1.5"/>
<g class="dg-hotspot" data-id="purine" style="cursor:pointer">
<rect x="636" y="300" width="210" height="290" fill="#ffffff" fill-opacity="0"/>
<text x="741" y="332" text-anchor="middle" font-size="17" font-weight="800" fill="#4527a0">البيورينات</text>
<polygon points="790.2,357.5 810.2,351 822.5,368 810.2,385 790.2,378.5" fill="#5c59a8" stroke="#37474f" stroke-width="1.5"/>
<polygon points="790.2,378.5 772,389 753.8,378.5 753.8,357.5 772,347 790.2,357.5" fill="#5c59a8" stroke="#37474f" stroke-width="1.5"/>
<text x="772" y="374" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">A</text>
<polygon points="690.2,357.5 710.2,351 722.5,368 710.2,385 690.2,378.5" fill="#29b6f6" stroke="#37474f" stroke-width="1.5"/>
<polygon points="690.2,378.5 672,389 653.8,378.5 653.8,357.5 672,347 690.2,357.5" fill="#29b6f6" stroke="#37474f" stroke-width="1.5"/>
<text x="672" y="374" text-anchor="middle" font-size="17" font-weight="800" fill="#0d2b45">G</text>
<text x="787" y="412" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">أدنين</text>
<text x="687" y="412" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">جوانين</text>
<text x="741" y="448" text-anchor="middle" font-size="17" font-weight="800" fill="#1b5e20">البيريميدينات</text>
<polygon points="813.2,492.5 795,503 776.8,492.5 776.8,471.5 795,461 813.2,471.5" fill="#66bb8a" stroke="#37474f" stroke-width="1.5"/>
<text x="795" y="488" text-anchor="middle" font-size="17" font-weight="800" fill="#0b2e1a">T</text>
<polygon points="705.2,492.5 687,503 668.8,492.5 668.8,471.5 687,461 705.2,471.5" fill="#fff176" stroke="#37474f" stroke-width="1.5"/>
<text x="687" y="488" text-anchor="middle" font-size="17" font-weight="800" fill="#3e3200">C</text>
<polygon points="813.2,568.5 795,579 776.8,568.5 776.8,547.5 795,537 813.2,547.5" fill="#ffb74d" stroke="#37474f" stroke-width="1.5"/>
<text x="795" y="564" text-anchor="middle" font-size="17" font-weight="800" fill="#3e2200">U</text>
<text x="795" y="525" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">ثايمين</text>
<text x="687" y="525" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سايتوسين</text>
<text x="720" y="564" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">يوراسيل</text>
</g>
<text x="492" y="80" text-anchor="middle" font-size="18" font-weight="800" fill="#0d47a1">عديد النيوكليوتيد</text>
<line x1="458" y1="111" x2="458" y2="90" stroke="#546e7a" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="461" y1="137" x2="475.7" y2="165.5" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="458" cy="124" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="458" y="129.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<line x1="540.3" y1="165.5" x2="540.3" y2="142" stroke="#546e7a" stroke-width="1.5"/>
<rect x="526" y="114" width="72" height="28" rx="3" fill="#4fc3f7" stroke="#01579b" stroke-width="1.5"/>
<text x="562" y="133.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">قاعدة</text>
<polygon points="508,142 540.3,165.5 528,203.5 488,203.5 475.7,165.5" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="508" y="184" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="552.3" y1="287.5" x2="552.3" y2="264" stroke="#546e7a" stroke-width="1.5"/>
<rect x="538" y="236" width="72" height="28" rx="3" fill="#4fc3f7" stroke="#01579b" stroke-width="1.5"/>
<text x="574" y="255.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">قاعدة</text>
<polygon points="520,264 552.3,287.5 540,325.5 500,325.5 487.7,287.5" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="520" y="306" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="564.3" y1="409.5" x2="564.3" y2="386" stroke="#546e7a" stroke-width="1.5"/>
<rect x="550" y="358" width="72" height="28" rx="3" fill="#4fc3f7" stroke="#01579b" stroke-width="1.5"/>
<text x="586" y="377.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">قاعدة</text>
<polygon points="532,386 564.3,409.5 552,447.5 512,447.5 499.7,409.5" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="532" y="428" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="512" y1="447.5" x2="512" y2="477.5" stroke="#546e7a" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="492" y="481.5" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">3′</text>
<text x="432" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">5′</text>
<g class="dg-hotspot" data-id="phosphodiester" style="cursor:pointer">
<line x1="473" y1="259" x2="487.7" y2="287.5" stroke="#546e7a" stroke-width="1.5"/>
<line x1="488" y1="203.5" x2="470" y2="233" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="470" cy="246" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="470" y="251.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<line x1="485" y1="381" x2="499.7" y2="409.5" stroke="#546e7a" stroke-width="1.5"/>
<line x1="500" y1="325.5" x2="482" y2="355" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="482" cy="368" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="482" y="373.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<rect x="380" y="505" width="224" height="60" fill="#ffffff" fill-opacity="0"/>
<line x1="440" y1="508" x2="474" y2="384" stroke="#b71c1c" stroke-width="1.5"/>
<line x1="432" y1="508" x2="462" y2="262" stroke="#b71c1c" stroke-width="1.5"/>
<text x="492" y="528" text-anchor="middle" font-size="16" font-weight="800" fill="#b71c1c">رابطة فوسفات</text>
<text x="492" y="550" text-anchor="middle" font-size="16" font-weight="800" fill="#b71c1c">ثنائية الإستر</text>
</g>
<text x="181" y="80" text-anchor="middle" font-size="18" font-weight="800" fill="#0d47a1">جزء من جزيء DNA</text>
<g class="dg-hotspot" data-id="backbone2" style="cursor:pointer">
<rect x="18" y="132" width="60" height="360" fill="#ffffff" fill-opacity="0"/>
<rect x="284" y="164" width="60" height="380" fill="#ffffff" fill-opacity="0"/>
<line x1="36" y1="167" x2="41.3" y2="197.5" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="36" cy="154" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="36" y="159.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<polygon points="92,214 72.7,240.6 41.3,230.5 41.3,197.5 72.7,187.4" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="62" y="219.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="320.7" y1="230.5" x2="326" y2="261" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="326" cy="274" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="326" y="279.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<polygon points="270,214 289.3,187.4 320.7,197.5 320.7,230.5 289.3,240.6" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="300" y="219.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="36" y1="283" x2="41.3" y2="313.5" stroke="#546e7a" stroke-width="1.5"/>
<line x1="41.3" y1="230.5" x2="36" y2="257" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="36" cy="270" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="36" y="275.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<polygon points="92,330 72.7,356.6 41.3,346.5 41.3,313.5 72.7,303.4" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="62" y="335.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="320.7" y1="346.5" x2="326" y2="377" stroke="#546e7a" stroke-width="1.5"/>
<line x1="326" y1="287" x2="320.7" y2="313.5" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="326" cy="390" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="326" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<polygon points="270,330 289.3,303.4 320.7,313.5 320.7,346.5 289.3,356.6" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="300" y="335.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="36" y1="399" x2="41.3" y2="429.5" stroke="#546e7a" stroke-width="1.5"/>
<line x1="41.3" y1="346.5" x2="36" y2="373" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="36" cy="386" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="36" y="391.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<polygon points="92,446 72.7,472.6 41.3,462.5 41.3,429.5 72.7,419.4" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="62" y="451.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="320.7" y1="462.5" x2="326" y2="493" stroke="#546e7a" stroke-width="1.5"/>
<line x1="326" y1="403" x2="320.7" y2="429.5" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="326" cy="506" r="13" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="326" y="511.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<polygon points="270,446 289.3,419.4 320.7,429.5 320.7,462.5 289.3,472.6" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="300" y="451.5" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">سكر</text>
<line x1="124" y1="562" x2="80" y2="480" stroke="#546e7a" stroke-width="1.5"/>
<line x1="238" y1="562" x2="286" y2="480" stroke="#546e7a" stroke-width="1.5"/>
<text x="181" y="582" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">عمود فقري من سكر - فوسفات</text>
</g>
<g class="dg-hotspot" data-id="at-pair" style="cursor:pointer">
<rect x="96" y="158" width="170" height="72" fill="#ffffff" fill-opacity="0"/>
<line x1="92" y1="214" x2="98" y2="214" stroke="#546e7a" stroke-width="2"/>
<line x1="264" y1="214" x2="270" y2="214" stroke="#546e7a" stroke-width="2"/>
<rect x="98" y="199" width="58" height="30" rx="3" fill="#66bb8a" stroke="#37474f" stroke-width="1.4"/>
<text x="127" y="220" text-anchor="middle" font-size="17" font-weight="800" fill="#0b2e1a">T</text>
<rect x="170" y="199" width="94" height="30" rx="3" fill="#5c59a8" stroke="#37474f" stroke-width="1.4"/>
<text x="217" y="220" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">A</text>
<line x1="155" y1="208" x2="171" y2="208" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="155" y1="220" x2="171" y2="220" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="163" y1="180" x2="163" y2="205" stroke="#546e7a" stroke-width="1.5"/>
<text x="181" y="174" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">رابطتان هيدروجينيتان</text>
</g>
<g class="dg-hotspot" data-id="gc-pair" style="cursor:pointer">
<rect x="96" y="274" width="170" height="72" fill="#ffffff" fill-opacity="0"/>
<line x1="92" y1="330" x2="98" y2="330" stroke="#546e7a" stroke-width="2"/>
<line x1="264" y1="330" x2="270" y2="330" stroke="#546e7a" stroke-width="2"/>
<rect x="98" y="315" width="58" height="30" rx="3" fill="#fff176" stroke="#37474f" stroke-width="1.4"/>
<text x="127" y="336" text-anchor="middle" font-size="17" font-weight="800" fill="#3e3200">C</text>
<rect x="170" y="315" width="94" height="30" rx="3" fill="#29b6f6" stroke="#37474f" stroke-width="1.4"/>
<text x="217" y="336" text-anchor="middle" font-size="17" font-weight="800" fill="#0d2b45">G</text>
<line x1="155" y1="321" x2="171" y2="321" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="155" y1="330" x2="171" y2="330" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="155" y1="339" x2="171" y2="339" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="163" y1="296" x2="163" y2="318" stroke="#546e7a" stroke-width="1.5"/>
<text x="181" y="290" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">ثلاث روابط هيدروجينية</text>
</g>
<g class="dg-hotspot" data-id="rungs" style="cursor:pointer">
<rect x="96" y="390" width="170" height="72" fill="#ffffff" fill-opacity="0"/>
<line x1="92" y1="446" x2="98" y2="446" stroke="#546e7a" stroke-width="2"/>
<line x1="264" y1="446" x2="270" y2="446" stroke="#546e7a" stroke-width="2"/>
<rect x="98" y="431" width="94" height="30" rx="3" fill="#5c59a8" stroke="#37474f" stroke-width="1.4"/>
<text x="145" y="452" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">A</text>
<rect x="206" y="431" width="58" height="30" rx="3" fill="#66bb8a" stroke="#37474f" stroke-width="1.4"/>
<text x="235" y="452" text-anchor="middle" font-size="17" font-weight="800" fill="#0b2e1a">T</text>
<line x1="191" y1="440" x2="207" y2="440" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="191" y1="452" x2="207" y2="452" stroke="#263238" stroke-width="1.8" stroke-dasharray="3 2.5"/>
<line x1="199" y1="412" x2="199" y2="437" stroke="#546e7a" stroke-width="1.5"/>
<text x="181" y="406" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">روابط هيدروجينية</text>
</g>
<g class="dg-hotspot" data-id="ends" style="cursor:pointer">
<line x1="36" y1="141" x2="36" y2="127" stroke="#546e7a" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="36" cy="112" r="15" fill="#fff" stroke="#c62828" stroke-width="1.6"/>
<text x="36" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#c62828">5′</text>
<line x1="320.7" y1="197.5" x2="326" y2="173" stroke="#546e7a" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="326" cy="158" r="15" fill="#fff" stroke="#c62828" stroke-width="1.6"/>
<text x="326" y="164" text-anchor="middle" font-size="16" font-weight="800" fill="#c62828">3′</text>
<line x1="41.3" y1="462.5" x2="36" y2="497" stroke="#546e7a" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="36" cy="512" r="15" fill="#fff" stroke="#c62828" stroke-width="1.6"/>
<text x="36" y="518" text-anchor="middle" font-size="16" font-weight="800" fill="#c62828">3′</text>
<line x1="326" y1="519" x2="326" y2="531" stroke="#546e7a" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="326" cy="546" r="15" fill="#fff" stroke="#c62828" stroke-width="1.6"/>
<text x="326" y="552" text-anchor="middle" font-size="16" font-weight="800" fill="#c62828">5′</text>
</g>
</svg>`,
    hotspots: {
      'n-phos': { label: 'مجموعة الفوسفات', desc: 'تتكوّن النيوكليوتيدات من ثلاثة مكوّنات أصغر منها هي: قاعدة نيتروجينية، سكر خماسي، مجموعة فوسفات. تعطي مجموعة الفوسفات الأحماض النووية طبيعتها الحمضية.<br><small>كتاب الطالب — ص 20-21</small>' },
      'n-base': { label: 'القاعدة النيتروجينية', desc: 'توجد أربع قواعد نيتروجينية (تحتوي على النيتروجين) مختلفة، في كل من DNA و RNA. القواعد في DNA هي: أدنين Adenine، جوانين Guanine، ثايمين Thymine، وسايتوسين Cytosine وفي RNA تحل قاعدة مماثلة تسمّى يوراسيل Uracil محل الثايمين.<br><small>كتاب الطالب — ص 20</small>' },
      'n-sugar': { label: 'السكر الخماسي', desc: 'تسمّى السكريات التي تحتوي على خمس ذرات كربون سكريات خماسية Pentoses. يوجد نوعان من السكر الخماسي في الأحماض النووية، الرايبوز Ribose والرايبوز منقوص الأكسجين Deoxyribose. وكما يدل الاسم، فإن الرايبوز منقوص الأكسجين هو تقريبًا الرايبوز نفسه ينقصه ذرة أكسجين واحدة في الجزيء.<br><small>كتاب الطالب — ص 21</small>' },
      'purine': { label: 'البيورينات والبيريميدينات', desc: 'تنتمي القاعدتان أدنين وجوانين كيميائيًا إلى البيورينات Purines، وهي ذات تركيب ثنائي الحلقة، وتنتمي القواعد الثلاث الأخرى، ثايمين وسايتوسين ويوراسيل كيميائيًا إلى البيريميدينات Pyrimidines، وهي ذات تركيب أحادي الحلقة. يرتبط البيورين دائمًا مع البيريميدين. تكون البيورينات بعرض حلقتَين، والبيريميدينات بعرض حلقة واحدة. وتكون المسافة بين عمودَي الشريطين ثابتة وبعرض ثلاث حلقات دائمًا.<br><small>كتاب الطالب — ص 20 و 25</small>' },
      'phosphodiester': { label: 'رابطة فوسفات ثنائية الإستر', desc: 'يسمّى الجزيء المتكوّن من ارتباط نيوكليوتيدَين معًا ثنائي النيوكليوتيد Dinucleotide. وتسمّى الرابطة التي تنشأ رابطة فوسفات ثنائية الإستر Phosphodiester bond. يستخدم المصطلح ثنائية الإستر Diester لأن مجموعة الفوسفات هنا تحتوي على رابطتَي إستر؛ واحدة لكل من السكرَين المرتبطَين بها.<br><small>كتاب الطالب — ص 22</small>' },
      'backbone2': { label: 'العمود الفقري سكر - فوسفات', desc: 'ترتبط جزيئات السكر ومجموعات الفوسفات بواسطة روابط فوسفات ثنائية الإستر لتكوّن عمودًا فقريًا تبرز منه القواعد جانبيًا من جهة اليمين بزوايا قائمة. لكل شريط عمود فقري من سكر - فوسفات تبرز منه قواعد بزوايا قائمة.<br><small>كتاب الطالب — ص 22 و 24</small>' },
      'at-pair': { label: 'ازدواج A مع T', desc: 'بسبب ارتباط الشريطين معًا (مثل قطع أحجية الصور المقطوعة Puzzel)، يرتبط الأدنين (A) دائمًا مع الثايمين (T)، ويرتبط الجوانين (G) دائمًا مع السايتوسين (C) وهذا يسمى ازدواج القواعد المكملة Complementary base pairing. ترتبط A مع T برابطتَين هيدروجينيتَين، وترتبط G مع C بثلاث روابط هيدروجينية.<br><small>كتاب الطالب — ص 25</small>' },
      'gc-pair': { label: 'ازدواج G مع C', desc: 'لاحظ أن هناك رابطتَين هيدروجينيتَين بين A و T وثلاث روابط هيدروجينية بين G و C. يعتمد تتابع القواعد في الشريط الواحد على تتابع القواعد في الشريط الآخر، لأن القاعدة A يجب أن ترتبط مع القاعدة T، والقاعدة G يجب أن ترتبط مع القاعدة C. أي أن الشريطين يكمل أحدهما الآخر.<br><small>كتاب الطالب — ص 24-25</small>' },
      'rungs': { label: 'الروابط الهيدروجينية بين القواعد', desc: 'تنجذب القواعد في الشريط الواحد إلى القواعد في الشريط الآخر بواسطة روابط هيدروجينية بين القواعد، بحيث يبقى الشريطان معًا.<br><small>كتاب الطالب — ص 24</small>' },
      'ends': { label: 'الطرف 5′ والطرف 3′', desc: 'يشير 5′ و 3′ في الشكل ١-٦ إلى ذرات الكربون 5 و 3 من السكر. ويُسمّى طرفا شريط DNA الطرف 5′ والطرف 3′. حيث يوجد عند الطرف 5′ الفوسفات، وعند الطرف 3′ السكر. يمتد الشريطان في اتجاهَين متعاكسَين، لذا يقال إنهما متوازيان ومتعاكسا الاتجاه.<br><small>كتاب الطالب — ص 24</small>' }
    }
  },
  {
    id: 'dna-rna-atp-s1',
    title: 'مقارنة بين DNA و RNA و ATP',
    figure: 'الشكلان ١-١ و ١-٢',
    page: 'ص 20-26',
    obj: '1-1',
    legend: 'وجزيئات DNA و RNA هي جزيئات كبيرة مثل البروتينات وعديدة التسكر، أي أنها بوليمرات طويلة السلسلة مكوّنة من وحدات مونومر مرتبطة معًا تسمّى النيوكليوتيدات Nucleotides، وبالتالي فإن DNA و RNA هي عديدة النيوكليوتيد Polynucleotides.',
    svg: `<svg viewBox="0 0 860 506" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
</defs>
<rect width="860" height="506" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">مقارنة بين DNA و RNA و ATP</text>
<rect x="580" y="50" width="270" height="442" rx="14" fill="#f1f6fb" stroke="#cfd8dc" stroke-width="1.2"/>
<rect x="295" y="50" width="275" height="442" rx="14" fill="#f3f8f1" stroke="#cfd8dc" stroke-width="1.2"/>
<rect x="10" y="50" width="275" height="442" rx="14" fill="#fdf6ec" stroke="#cfd8dc" stroke-width="1.2"/>
<g class="dg-hotspot" data-id="dna" style="cursor:pointer">
<rect x="590" y="58" width="250" height="250" fill="#ffffff" fill-opacity="0"/>
<text x="715" y="86" text-anchor="middle" font-size="25" font-weight="800" fill="#0d47a1">DNA</text>
<text x="715" y="110" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">الحمض النووي الرايبوزي</text>
<text x="715" y="131" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">منقوص الأكسجين</text>
<line x1="603" y1="166" x2="827" y2="166" stroke="#8d6e63" stroke-width="7" stroke-linecap="round"/>
<line x1="603" y1="250" x2="827" y2="250" stroke="#8d6e63" stroke-width="7" stroke-linecap="round"/>
<rect x="790" y="170" width="26" height="33" fill="#5c59a8" stroke="#37474f" stroke-width="1.2"/>
<text x="803" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">A</text>
<rect x="790" y="213" width="26" height="33" fill="#66bb8a" stroke="#37474f" stroke-width="1.2"/>
<text x="803" y="235" text-anchor="middle" font-size="15" font-weight="800" fill="#0b2e1a">T</text>
<line x1="798" y1="203" x2="798" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="808" y1="203" x2="808" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<rect x="746" y="170" width="26" height="33" fill="#29b6f6" stroke="#37474f" stroke-width="1.2"/>
<text x="759" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#0d2b45">G</text>
<rect x="746" y="213" width="26" height="33" fill="#fff176" stroke="#37474f" stroke-width="1.2"/>
<text x="759" y="235" text-anchor="middle" font-size="15" font-weight="800" fill="#3e3200">C</text>
<line x1="752" y1="203" x2="752" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="759" y1="203" x2="759" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="766" y1="203" x2="766" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<rect x="702" y="170" width="26" height="33" fill="#66bb8a" stroke="#37474f" stroke-width="1.2"/>
<text x="715" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#0b2e1a">T</text>
<rect x="702" y="213" width="26" height="33" fill="#5c59a8" stroke="#37474f" stroke-width="1.2"/>
<text x="715" y="235" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">A</text>
<line x1="710" y1="203" x2="710" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="720" y1="203" x2="720" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<rect x="658" y="170" width="26" height="33" fill="#fff176" stroke="#37474f" stroke-width="1.2"/>
<text x="671" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#3e3200">C</text>
<rect x="658" y="213" width="26" height="33" fill="#29b6f6" stroke="#37474f" stroke-width="1.2"/>
<text x="671" y="235" text-anchor="middle" font-size="15" font-weight="800" fill="#0d2b45">G</text>
<line x1="664" y1="203" x2="664" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="671" y1="203" x2="671" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="678" y1="203" x2="678" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<rect x="614" y="170" width="26" height="33" fill="#5c59a8" stroke="#37474f" stroke-width="1.2"/>
<text x="627" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">A</text>
<rect x="614" y="213" width="26" height="33" fill="#66bb8a" stroke="#37474f" stroke-width="1.2"/>
<text x="627" y="235" text-anchor="middle" font-size="15" font-weight="800" fill="#0b2e1a">T</text>
<line x1="622" y1="203" x2="622" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<line x1="632" y1="203" x2="632" y2="213" stroke="#263238" stroke-width="1.6" stroke-dasharray="2.5 2"/>
<text x="715" y="292" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">شريطان من عديد النيوكليوتيد</text>
</g>
<g class="dg-hotspot" data-id="dna-sugar" style="cursor:pointer">
<rect x="590" y="314" width="250" height="72" fill="#ffffff" fill-opacity="0"/>
<text x="715" y="332" text-anchor="middle" font-size="15" font-weight="700" fill="#455a64">السكر الخماسي</text>
<rect x="595" y="342" width="240" height="38" rx="19" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.5"/>
<text x="715" y="367" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">الرايبوز منقوص الأكسجين</text>
</g>
<g class="dg-hotspot" data-id="dna-bases" style="cursor:pointer">
<rect x="590" y="396" width="250" height="84" fill="#ffffff" fill-opacity="0"/>
<text x="715" y="414" text-anchor="middle" font-size="15" font-weight="700" fill="#455a64">القواعد النيتروجينية</text>
<rect x="777" y="426" width="44" height="42" rx="6" fill="#5c59a8" stroke="#37474f" stroke-width="1.4"/>
<text x="799" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">A</text>
<rect x="721" y="426" width="44" height="42" rx="6" fill="#29b6f6" stroke="#37474f" stroke-width="1.4"/>
<text x="743" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#0d2b45">G</text>
<rect x="665" y="426" width="44" height="42" rx="6" fill="#fff176" stroke="#37474f" stroke-width="1.4"/>
<text x="687" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#3e3200">C</text>
<rect x="609" y="426" width="44" height="42" rx="6" fill="#66bb8a" stroke="#b71c1c" stroke-width="3.2"/>
<text x="631" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#0b2e1a">T</text>
</g>
<g class="dg-hotspot" data-id="rna" style="cursor:pointer">
<rect x="305" y="58" width="255" height="250" fill="#ffffff" fill-opacity="0"/>
<text x="432" y="86" text-anchor="middle" font-size="25" font-weight="800" fill="#1b5e20">RNA</text>
<text x="432" y="110" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">الحمض النووي الرايبوزي</text>
<line x1="320" y1="166" x2="544" y2="166" stroke="#8d6e63" stroke-width="7" stroke-linecap="round"/>
<rect x="507" y="170" width="26" height="33" fill="#5c59a8" stroke="#37474f" stroke-width="1.2"/>
<text x="520" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">A</text>
<rect x="463" y="170" width="26" height="33" fill="#ffb74d" stroke="#37474f" stroke-width="1.2"/>
<text x="476" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#3e2200">U</text>
<rect x="419" y="170" width="26" height="33" fill="#29b6f6" stroke="#37474f" stroke-width="1.2"/>
<text x="432" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#0d2b45">G</text>
<rect x="375" y="170" width="26" height="33" fill="#fff176" stroke="#37474f" stroke-width="1.2"/>
<text x="388" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#3e3200">C</text>
<rect x="331" y="170" width="26" height="33" fill="#ffb74d" stroke="#37474f" stroke-width="1.2"/>
<text x="344" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#3e2200">U</text>
<text x="432" y="250" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">شريط مفرد</text>
<text x="432" y="272" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">من عديد النيوكليوتيد</text>
</g>
<g class="dg-hotspot" data-id="rna-sugar" style="cursor:pointer">
<rect x="305" y="314" width="255" height="72" fill="#ffffff" fill-opacity="0"/>
<text x="432" y="332" text-anchor="middle" font-size="15" font-weight="700" fill="#455a64">السكر الخماسي</text>
<rect x="367" y="342" width="130" height="38" rx="19" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.5"/>
<text x="432" y="367" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">الرايبوز</text>
</g>
<g class="dg-hotspot" data-id="rna-bases" style="cursor:pointer">
<rect x="305" y="396" width="255" height="84" fill="#ffffff" fill-opacity="0"/>
<text x="432" y="414" text-anchor="middle" font-size="15" font-weight="700" fill="#455a64">القواعد النيتروجينية</text>
<rect x="494" y="426" width="44" height="42" rx="6" fill="#5c59a8" stroke="#37474f" stroke-width="1.4"/>
<text x="516" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">A</text>
<rect x="438" y="426" width="44" height="42" rx="6" fill="#29b6f6" stroke="#37474f" stroke-width="1.4"/>
<text x="460" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#0d2b45">G</text>
<rect x="382" y="426" width="44" height="42" rx="6" fill="#fff176" stroke="#37474f" stroke-width="1.4"/>
<text x="404" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#3e3200">C</text>
<rect x="326" y="426" width="44" height="42" rx="6" fill="#ffb74d" stroke="#b71c1c" stroke-width="3.2"/>
<text x="348" y="454" text-anchor="middle" font-size="19" font-weight="800" fill="#3e2200">U</text>
</g>
<g class="dg-hotspot" data-id="atp" style="cursor:pointer">
<rect x="20" y="58" width="255" height="82" fill="#ffffff" fill-opacity="0"/>
<text x="147" y="86" text-anchor="middle" font-size="25" font-weight="800" fill="#bf360c">ATP</text>
<text x="147" y="110" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">أدينوسين ثلاثي الفوسفات</text>
</g>
<g class="dg-hotspot" data-id="atp-phos" style="cursor:pointer">
<rect x="20" y="144" width="255" height="60" fill="#ffffff" fill-opacity="0"/>
<rect x="50" y="200" width="50" height="90" fill="#ffffff" fill-opacity="0"/>
<line x1="80.6" y1="313.3" x2="76" y2="283" stroke="#546e7a" stroke-width="1.5"/>
<line x1="74" y1="200" x2="74" y2="268" stroke="#546e7a" stroke-width="1.5"/>
<circle cx="74" cy="268" r="15" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="74" y="273.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<circle cx="74" cy="234" r="15" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="74" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<circle cx="74" cy="200" r="15" fill="#ffe082" stroke="#8d6e00" stroke-width="1.6"/>
<text x="74" y="205.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">P</text>
<text x="147" y="166" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">ثلاث مجموعات من الفوسفات</text>
<line x1="92" y1="174" x2="82" y2="186" stroke="#546e7a" stroke-width="1.5"/>
</g>
<g class="dg-hotspot" data-id="caution" style="cursor:pointer">
<rect x="100" y="220" width="175" height="240" fill="#ffffff" fill-opacity="0"/>
<line x1="183.4" y1="313.3" x2="183.4" y2="268" stroke="#546e7a" stroke-width="1.5"/>
<rect x="166" y="228" width="100" height="40" rx="3" fill="#b0aee0" stroke="#3f3d8f" stroke-width="1.6"/>
<text x="216" y="254" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أدنين</text>
<polygon points="132,276 183.4,313.3 163.7,373.7 100.3,373.7 80.6,313.3" fill="#f8bbd9" stroke="#ad1457" stroke-width="1.6"/>
<text x="132" y="340" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">رايبوز</text>
<rect x="25" y="412" width="244" height="40" rx="8" fill="#fff" stroke="#bf360c" stroke-width="1.5"/>
<text x="147" y="438" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أدنين + رايبوز = أدينوسين</text>
</g>
</svg>`,
    hotspots: {
      'dna': { label: 'DNA — الحمض النووي الرايبوزي منقوص الأكسجين', desc: 'يرمز DNA إلى الحمض النووي الرايبوزي منقوص الأكسجين Deoxyribonucleic acid. يتصف جزيء DNA بالخصائص الآتية: يتكوّن من شريطي (سلسلتَي) عديد النيوكليوتيد. يلتفّ الشريطان أحدهما حول الآخر ليشكلا لولبًا مزدوجًا.<br><small>كتاب الطالب — ص 20 و 24</small>' },
      'dna-sugar': { label: 'الرايبوز منقوص الأكسجين', desc: 'ويسمّى الحمض النووي الذي يحتوي على الرايبوز منقوص الأكسجين، الحمض النووي الرايبوزي منقوص الأكسجين (DNA). وكما يدل الاسم، فإن الرايبوز منقوص الأكسجين هو تقريبًا الرايبوز نفسه ينقصه ذرة أكسجين واحدة في الجزيء.<br><small>كتاب الطالب — ص 21</small>' },
      'dna-bases': { label: 'القواعد في DNA', desc: 'توجد أربع قواعد نيتروجينية (تحتوي على النيتروجين) مختلفة، في كل من DNA و RNA. القواعد في DNA هي: أدنين Adenine، جوانين Guanine، ثايمين Thymine، وسايتوسين Cytosine. ويشار غالبًا إلى القواعد بترميزها بالحرف الأول من الكلمة الإنجليزية: A,G,T,C,U.<br><small>كتاب الطالب — ص 20</small>' },
      'rna': { label: 'RNA — الحمض النووي الرايبوزي', desc: 'يرمز RNA إلى الحمض النووي الرايبوزي Ribonucleic acid. جزيء RNA شريط مفرد من عديد النيوكليوتيد على العكس من DNA. ستدرس لاحقًا في هذه الوحدة بناء البروتين. وهذا يتضمن ثلاثة أنواع من RNA هي RNA المرسال Messenger RNA (mRNA)، و RNA الناقل Transfer RNA (tRNA)، و RNA الرايبوسومي Ribosomal RNA (rRNA). ينثني RNA الناقل و RNA الرايبوسومي على شكل تراكيب معقدة، في حين يبقى RNA المرسال على شكل شريط غير ملتف.<br><small>كتاب الطالب — ص 20 و 26</small>' },
      'rna-sugar': { label: 'الرايبوز', desc: 'يوجد نوعان من السكر الخماسي في الأحماض النووية، الرايبوز Ribose والرايبوز منقوص الأكسجين Deoxyribose. يسمّى الحمض النووي الذي يحتوي على الرايبوز، الحمض النووي الرايبوزي (RNA).<br><small>كتاب الطالب — ص 21</small>' },
      'rna-bases': { label: 'القواعد في RNA', desc: 'توجد أربع قواعد نيتروجينية (تحتوي على النيتروجين) مختلفة، في كل من DNA و RNA. وفي RNA تحل قاعدة مماثلة تسمّى يوراسيل Uracil محل الثايمين.<br><small>كتاب الطالب — ص 20</small>' },
      'atp': { label: 'ATP — أدينوسين ثلاثي الفوسفات', desc: 'على الرغم من أن ATP (أدينوسين ثلاثي الفوسفات) ليس جزءًا من DNA أو RNA، فإنك ستتعرف على تركيبه هنا لأنه نيوكليوتيد أيضًا. يبيّن الشكل ١-٢ تركيب ATP، ومكوّناته الثلاثة هي أدنين ورايبوز وفوسفات.<br><small>كتاب الطالب — ص 21</small>' },
      'atp-phos': { label: 'مجموعات الفوسفات', desc: 'يشكل الأدنين والرايبوز معًا الأدينوسين، والذي يمكنه أن يرتبط مع مجموعة أو مجموعتَين أو ثلاث مجموعات من الفوسفات ليكوّن أدينوسين أحادي الفوسفات (AMP)، أو أدينوسين ثنائي الفوسفات (ADP)، أو أدينوسين ثلاثي الفوسفات (ATP) على التوالي.<br><small>كتاب الطالب — ص 21</small>' },
      'caution': { label: 'أدنين + رايبوز = أدينوسين', desc: 'لا تخلط بين الأدنين والأدينوسين، فالأدينوسين هو جزء من اسم ATP (أدينوسين ثلاثي الفوسفات)، وهو أدنين يرتبط مع سكر؛ ولا تخلط بين الثايمين Thymine والثيامين Thiamine، فالثيامين هو فيتامين.<br><small>كتاب الطالب — ص 21</small>' }
    }
  },
  {
    id: 'transcription-s1',
    title: 'النسخ وتعديل mRNA',
    figure: 'الشكل ١-١١',
    page: 'ص 29-31',
    obj: '1-7',
    legend: 'تبيّن هذه العبارة أن بناء البروتين عملية تحدث على مرحلتَين: المرحلة التي فيها DNA يكوّن mRNA وتسمّى النسخ Transcription، والمرحلة التي تشفَّر فيها الرسالة التي يحملها mRNA لتكوين البروتين وتسمّى الترجمة Translation.',
    svg: `<svg viewBox="0 0 860 600" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
<marker id="trArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="11" refX="13" refY="5.5" orient="auto">
<path d="M0,0 L14,5.5 L0,11 Z" fill="#263238"/>
</marker>
<marker id="trArr2" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="11" refX="13" refY="5.5" orient="auto">
<path d="M0,0 L14,5.5 L0,11 Z" fill="#00695c"/>
</marker>
</defs>
<rect width="860" height="600" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">النسخ وتعديل mRNA</text>
<rect x="12" y="50" width="836" height="312" rx="14" fill="#f7f9fb" stroke="#cfd8dc" stroke-width="1.2"/>
<g class="dg-hotspot" data-id="polymerase" style="cursor:pointer">
<path d="M292,205 C292,150 350,122 412,124 C480,126 532,158 528,208 C524,262 470,290 408,288 C340,286 292,258 292,205 Z" fill="#f6a56a" stroke="#bf5b17" stroke-width="2"/>
<line x1="330" y1="322" x2="352" y2="281" stroke="#546e7a" stroke-width="1.5"/>
<text x="322" y="342" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏RNA بوليميريز</text>
<line x1="548" y1="150" x2="660" y2="150" stroke="#263238" stroke-width="2.2" marker-end="url(#trArr)"/>
<text x="604" y="138" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">اتجاه النسخ</text>
</g>
<g class="dg-hotspot" data-id="dna-closed" style="cursor:pointer">
<rect x="30" y="165" width="300" height="80" fill="#ffffff" fill-opacity="0"/>
<rect x="490" y="165" width="300" height="80" fill="#ffffff" fill-opacity="0"/>
<path d="M60 235 L65 233.5 L70 229.3 L75 222.6 L80 214.3 L85 205 L90 195.7 L95 187.4 L100 180.7 L105 176.5 L110 175 L115 176.5 L120 180.7 L125 187.4 L130 195.7 L135 205 L140 214.3 L145 222.6 L150 229.3 L155 233.5 L160 235 L165 233.5 L170 229.3 L175 222.6 L180 214.3 L185 205 L190 195.7 L195 187.4 L200 180.7 L205 176.5 L210 175 L215 176.5 L220 180.7 L225 187.4 L230 195.7 L235 205 L240 214.3 L245 222.6 L250 229.3 L255 233.5 L260 235 L265 233.5 L270 229.3 L275 222.6 L280 214.3 L285 205 L290 195.7 L295 187.4 L300 180.7 L305 176.5 L310 175 L315 176.5 L320 180.7 L325 187.4 L330 195.7 L335 205" fill="none" stroke="#d81b60" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60 175 L65 176.5 L70 180.7 L75 187.4 L80 195.7 L85 205 L90 214.3 L95 222.6 L100 229.3 L105 233.5 L110 235 L115 233.5 L120 229.3 L125 222.6 L130 214.3 L135 205 L140 195.7 L145 187.4 L150 180.7 L155 176.5 L160 175 L165 176.5 L170 180.7 L175 187.4 L180 195.7 L185 205 L190 214.3 L195 222.6 L200 229.3 L205 233.5 L210 235 L215 233.5 L220 229.3 L225 222.6 L230 214.3 L235 205 L240 195.7 L245 187.4 L250 180.7 L255 176.5 L260 175 L265 176.5 L270 180.7 L275 187.4 L280 195.7 L285 205 L290 214.3 L295 222.6 L300 229.3 L305 233.5 L310 235 L315 233.5 L320 229.3 L325 222.6 L330 214.3 L335 205" fill="none" stroke="#4a3fa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M485 205 L490 195.7 L495 187.4 L500 180.7 L505 176.5 L510 175 L515 176.5 L520 180.7 L525 187.4 L530 195.7 L535 205 L540 214.3 L545 222.6 L550 229.3 L555 233.5 L560 235 L565 233.5 L570 229.3 L575 222.6 L580 214.3 L585 205 L590 195.7 L595 187.4 L600 180.7 L605 176.5 L610 175 L615 176.5 L620 180.7 L625 187.4 L630 195.7 L635 205 L640 214.3 L645 222.6 L650 229.3 L655 233.5 L660 235 L665 233.5 L670 229.3 L675 222.6 L680 214.3 L685 205 L690 195.7 L695 187.4 L700 180.7 L705 176.5 L710 175 L715 176.5 L720 180.7 L725 187.4 L730 195.7 L735 205 L740 214.3 L745 222.6 L750 229.3 L755 233.5 L760 235" fill="none" stroke="#d81b60" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M485 205 L490 214.3 L495 222.6 L500 229.3 L505 233.5 L510 235 L515 233.5 L520 229.3 L525 222.6 L530 214.3 L535 205 L540 195.7 L545 187.4 L550 180.7 L555 176.5 L560 175 L565 176.5 L570 180.7 L575 187.4 L580 195.7 L585 205 L590 214.3 L595 222.6 L600 229.3 L605 233.5 L610 235 L615 233.5 L620 229.3 L625 222.6 L630 214.3 L635 205 L640 195.7 L645 187.4 L650 180.7 L655 176.5 L660 175 L665 176.5 L670 180.7 L675 187.4 L680 195.7 L685 205 L690 214.3 L695 222.6 L700 229.3 L705 233.5 L710 235 L715 233.5 L720 229.3 L725 222.6 L730 214.3 L735 205 L740 195.7 L745 187.4 L750 180.7 L755 176.5 L760 175" fill="none" stroke="#4a3fa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<text x="38" y="184" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">3′</text>
<text x="38" y="244" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">5′</text>
<text x="784" y="184" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">5′</text>
<text x="784" y="244" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">3′</text>
</g>
<g class="dg-hotspot" data-id="unwound" style="cursor:pointer">
<path d="M335 205 C367 271 453 271 485 205" fill="none" stroke="#d81b60" stroke-width="4"/>
<path d="M335 205 C367 139 453 139 485 205" fill="none" stroke="#4a3fa0" stroke-width="4"/>
<line x1="520" y1="104" x2="440" y2="158" stroke="#546e7a" stroke-width="1.5"/>
<text x="560" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">يتم نسخ الشريط القالب لـ DNA؛</text>
<text x="560" y="97" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">المنفك وغير الملتف</text>
</g>
<g class="dg-hotspot" data-id="template" style="cursor:pointer">
<rect x="52" y="100" width="200" height="34" fill="#ffffff" fill-opacity="0"/>
<line x1="120" y1="132" x2="108" y2="180" stroke="#546e7a" stroke-width="1.5"/>
<text x="152" y="122" text-anchor="middle" font-size="16" font-weight="800" fill="#4a3fa0">الشريط القالب (⁦3′⁩ إلى ⁦5′⁩)</text>
</g>
<g class="dg-hotspot" data-id="mrna" style="cursor:pointer">
<path d="M462 186 C430 168 392 174 366 160 C338 144 330 108 296 100" fill="none" stroke="#f06292" stroke-width="5" stroke-linecap="round"/>
<text x="280" y="104" text-anchor="middle" font-size="16" font-weight="800" fill="#ad1457">5′</text>
<text x="453" y="214" text-anchor="middle" font-size="15" font-weight="800" fill="#ad1457">3′</text>
<text x="318" y="76" text-anchor="middle" font-size="16" font-weight="800" fill="#ad1457">جزيء mRNA النامي</text>
<line x1="470" y1="318" x2="420" y2="174" stroke="#ad1457" stroke-width="1.5"/>
<rect x="410" y="310" width="150" height="46" fill="#ffffff" fill-opacity="0"/>
<text x="484" y="334" text-anchor="middle" font-size="15" font-weight="700" fill="#ad1457">نسخة mRNA</text>
<text x="484" y="353" text-anchor="middle" font-size="15" font-weight="700" fill="#ad1457">مكملة من الجين</text>
</g>
<g class="dg-hotspot" data-id="codons" style="cursor:pointer">
<rect x="90" y="290" width="190" height="62" fill="#ffffff" fill-opacity="0"/>
<rect x="590" y="290" width="190" height="62" fill="#ffffff" fill-opacity="0"/>
<path d="M168 178.7 L173 184.5 L178 192.2 L183 201.2" fill="none" stroke="#2e9d48" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M668 178.7 L673 184.5 L678 192.2 L683 201.2" fill="none" stroke="#ff3d00" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="180" y1="296" x2="176" y2="212" stroke="#546e7a" stroke-width="1.5"/>
<text x="186" y="314" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">كودون البدء على</text>
<text x="186" y="334" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الشريط القالب</text>
<line x1="680" y1="296" x2="676" y2="212" stroke="#546e7a" stroke-width="1.5"/>
<text x="686" y="314" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">كودون الإيقاف على</text>
<text x="686" y="334" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الشريط القالب</text>
</g>
<rect x="12" y="372" width="836" height="216" rx="14" fill="#f3f8f6" stroke="#cfd8dc" stroke-width="1.2"/>
<text x="430" y="400" text-anchor="middle" font-size="18" font-weight="800" fill="#0d47a1">تعديل mRNA في حقيقيات النواة</text>
<g class="dg-hotspot" data-id="primary" style="cursor:pointer">
<rect x="100" y="416" width="100" height="36" fill="#4db6ac" stroke="#00695c" stroke-width="1.5"/>
<text x="150" y="440" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إكسونات</text>
<rect x="200" y="416" width="90" height="36" fill="#cfd8dc" stroke="#607d8b" stroke-width="1.5"/>
<text x="245" y="440" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إنترونات</text>
<rect x="290" y="416" width="100" height="36" fill="#4db6ac" stroke="#00695c" stroke-width="1.5"/>
<text x="340" y="440" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إكسونات</text>
<rect x="390" y="416" width="90" height="36" fill="#cfd8dc" stroke="#607d8b" stroke-width="1.5"/>
<text x="435" y="440" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إنترونات</text>
<rect x="480" y="416" width="100" height="36" fill="#4db6ac" stroke="#00695c" stroke-width="1.5"/>
<text x="530" y="440" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إكسونات</text>
<text x="712" y="440" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">نسخة RNA الأولية</text>
</g>
<g class="dg-hotspot" data-id="splicing" style="cursor:pointer">
<rect x="300" y="456" width="180" height="56" fill="#ffffff" fill-opacity="0"/>
<line x1="345" y1="458" x2="345" y2="508" stroke="#00695c" stroke-width="2.4" marker-end="url(#trArr2)"/>
<text x="398" y="490" text-anchor="middle" font-size="17" font-weight="800" fill="#00695c">الربط</text>
</g>
<g class="dg-hotspot" data-id="exit" style="cursor:pointer">
<rect x="195" y="518" width="100" height="36" fill="#4db6ac" stroke="#00695c" stroke-width="1.5"/>
<text x="245" y="542" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إكسونات</text>
<rect x="295" y="518" width="100" height="36" fill="#4db6ac" stroke="#00695c" stroke-width="1.5"/>
<text x="345" y="542" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إكسونات</text>
<rect x="395" y="518" width="100" height="36" fill="#4db6ac" stroke="#00695c" stroke-width="1.5"/>
<text x="445" y="542" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">إكسونات</text>
<text x="712" y="542" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">mRNA</text>
</g>
</svg>`,
    hotspots: {
      'polymerase': { label: 'إنزيم RNA بوليميريز', desc: 'يحدث النسخ في النواة (حيث يوجد DNA)، ويسمّى الإنزيم المسؤول عن النسخ RNA بوليميريز. النسخ Transcription: نسخ المعلومات الجينية في جزيء DNA وتحويلها إلى شريط مكمل من mRNA، ويستخدم شريط واحد من شريطي DNA كقالب أثناء عملية النسخ (يسمّى شريط القالب أو شريط النسخ)، والتي يقوم بها إنزيم RNA بوليميريز.<br><small>كتاب الطالب — ص 29</small>' },
      'dna-closed': { label: 'جزيء DNA', desc: 'درست سابقًا أن DNA هو شيفرة للبروتينات. ولكن DNA يوجد في النواة، وتُصنع البروتينات في الرايبوسومات التي توجد في السيتوبلازم خارج النواة. لا بد إذًا من وجود طريقة تصل عبرها المعلومات من DNA إلى الرايبوسومات؛ واستخدام جزيء وسيط يوفر الحل.<br><small>كتاب الطالب — ص 29</small>' },
      'unwound': { label: 'الجزء المنفك وغير الملتف', desc: 'يرتبط إنزيم RNA بوليميريز ببداية الجين المراد نسخه، ويبدأ بفكّ التفاف DNA للجين ويؤدي ذلك إلى كسر الروابط الهيدروجينية بين أزواج القواعد بين الشريطين (انفكاك DNA)، وبالتالي تكوين شريطين منفصلين لجزء من DNA (في الجزء المفكوك) مع بقاء تركيب اللولب المزدوج الطبيعي على جانبيه.<br><small>كتاب الطالب — ص 29</small>' },
      'template': { label: 'الشريط القالب (شريط النسخ)', desc: 'ويتم نسخ أحد الشريطين فقط، الذي يسمى الشريط القالب Template strand أو شريط النسخ Transcribed strand. ويسمى الشريط الآخر شريط اللانسخ أو اللاقالب. وتتكوّن نسخة mRNA المكملة من شريط النسخ.<br><small>كتاب الطالب — ص 29</small>' },
      'mrna': { label: 'جزيء mRNA النامي', desc: 'يتكوّن جزيء mRNA من نيوكليوتيدات توجد حرة في النواة. ومع انتقال RNA بوليميريز على طول الجين، تقترب النيوكليوتيدات الحرة وترتبط بروابط هيدروجينية مع النيوكليوتيدات المكملة لها في الشريط القالب. ومع وصول كل نيوكليوتيد يقوم إنزيم RNA بوليميريز بربطه إلى جزيء mRNA النامي برابطة فوسفات ثنائية الإستر، ومع تكوّن تلك الروابط تتكسر الروابط الهيدروجينية بين جزيء mRNA والشريط القالب.<br><small>كتاب الطالب — ص 30</small>' },
      'codons': { label: 'كودون البدء وكودون الإيقاف', desc: 'وفي النهاية يتم الوصول إلى كودون إيقاف، فيطلق عندها إنزيم RNA بوليميريز جزيء mRNA الذي اكتمل تكوينه حرًا في النواة، ويغادر إنزيم RNA بوليميريز جزيء DNA الذي يعود للشكل اللولبي.<br><small>كتاب الطالب — ص 30</small>' },
      'primary': { label: 'نسخة RNA الأولية', desc: 'في حقيقيات النواة، mRNA يتم تعديله Modification (تغيير جزئي) قبل أن يغادر النواة. ويسمّى الجزيء الأصلي قبل تعديله نسخة RNA الأولية Primary transcript. وتسمّى عملية التعديل معالجة RNA Processing RNA.<br><small>كتاب الطالب — ص 31</small>' },
      'splicing': { label: 'الربط Splicing', desc: 'وإحدى خطوات المعالجة هي الربط Splicing. يتضمن الربط بداية إزالة التتابعات غير المشفرة، والتي تسمى إنترونات Entrons، من النسخة الأولية، ثم ربط تتابعات التشفير المتبقية معًا، والتي تسمى إكسونات Exons.<br><small>كتاب الطالب — ص 31</small>' },
      'exit': { label: 'mRNA يغادر النواة', desc: 'يغادر mRNA النواة عبر الثقوب النووية في الغلاف النووي، وهو شريط مفرد من عديد نيوكليوتيد، وبعد تكوّنه لا ينطوي ليشكل تركيبًا أكثر تعقيدًا، عكس النوعَين الآخرَين من RNA المشاركَين في عملية الترجمة (tRNA و rRNA).<br><small>كتاب الطالب — ص 30</small>' }
    }
  },
  {
    id: 'translation-s1',
    title: 'الترجمة — بناء البروتين',
    figure: 'الشكلان ١-١٢ و ١-١٣',
    page: 'ص 31-33',
    obj: '1-7',
    legend: 'الترجمة Translation هي العملية التي يتم من خلالها تحويل تتابع القواعد في mRNA إلى تتابع الأحماض الأمينية في عديد ببتيد.',
    svg: `<svg viewBox="0 0 860 612" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
</defs>
<rect width="860" height="612" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">الترجمة — بناء البروتين</text>
<rect x="10" y="50" width="540" height="286" rx="14" fill="#f7f9fb" stroke="#cfd8dc" stroke-width="1.2"/>
<rect x="10" y="346" width="540" height="254" rx="14" fill="#f7f9fb" stroke="#cfd8dc" stroke-width="1.2"/>
<rect x="560" y="50" width="290" height="550" rx="14" fill="#fbf6fa" stroke="#cfd8dc" stroke-width="1.2"/>
<g class="dg-hotspot" data-id="ribosome" style="cursor:pointer">
<ellipse cx="280" cy="284" rx="86" ry="30" fill="#f6a56a" stroke="#bf5b17" stroke-width="2"/>
<ellipse cx="280" cy="194" rx="102" ry="64" fill="#f6a56a" stroke="#bf5b17" stroke-width="2"/>
<line x1="396" y1="178" x2="380" y2="184" stroke="#546e7a" stroke-width="1.5"/>
<text x="466" y="172" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الوحدة الكبيرة</text>
<text x="466" y="192" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">في الرايبوسوم</text>
<line x1="396" y1="300" x2="364" y2="290" stroke="#546e7a" stroke-width="1.5"/>
<text x="466" y="298" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الوحدة الصغيرة</text>
<text x="466" y="318" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">في الرايبوسوم</text>
</g>
<g class="dg-hotspot" data-id="mrna-groove" style="cursor:pointer">
<rect x="30" y="244" width="160" height="76" fill="#ffffff" fill-opacity="0"/>
<rect x="380" y="232" width="160" height="40" fill="#ffffff" fill-opacity="0"/>
<line x1="40" y1="262" x2="524" y2="262" stroke="#d81b60" stroke-width="4"/>
<line x1="52" y1="262" x2="52" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="76" y1="262" x2="76" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="100" y1="262" x2="100" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="124" y1="262" x2="124" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="148" y1="262" x2="148" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="172" y1="262" x2="172" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="196" y1="262" x2="196" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="364" y1="262" x2="364" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="388" y1="262" x2="388" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="412" y1="262" x2="412" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="436" y1="262" x2="436" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="460" y1="262" x2="460" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="484" y1="262" x2="484" y2="250" stroke="#d81b60" stroke-width="2"/>
<line x1="508" y1="262" x2="508" y2="250" stroke="#d81b60" stroke-width="2"/>
<circle cx="220" cy="258" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="220" y="263.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<circle cx="244" cy="258" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="244" y="263.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">U</text>
<circle cx="268" cy="258" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="268" y="263.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">G</text>
<circle cx="292" cy="258" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="292" y="263.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<circle cx="316" cy="258" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="316" y="263.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<circle cx="340" cy="258" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="340" y="263.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<text x="486" y="240" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">mRNA</text>
<line x1="150" y1="296" x2="212" y2="268" stroke="#546e7a" stroke-width="1.5"/>
<text x="98" y="306" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">كودون البدء</text>
</g>
<g class="dg-hotspot" data-id="trna1" style="cursor:pointer">
<rect x="40" y="112" width="120" height="30" fill="#ffffff" fill-opacity="0"/>
<line x1="244" y1="132" x2="244" y2="219" stroke="#d81b60" stroke-width="4"/>
<line x1="210" y1="219" x2="278" y2="219" stroke="#d81b60" stroke-width="4"/>
<circle cx="220" cy="234" r="11" fill="#a5d6a7" stroke="#37474f" stroke-width="1.1"/>
<text x="220" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">U</text>
<circle cx="244" cy="234" r="11" fill="#a5d6a7" stroke="#37474f" stroke-width="1.1"/>
<text x="244" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<circle cx="268" cy="234" r="11" fill="#a5d6a7" stroke="#37474f" stroke-width="1.1"/>
<text x="268" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">C</text>
<circle cx="244" cy="112" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="244" y="117.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">Met</text>
<line x1="150" y1="136" x2="240" y2="160" stroke="#546e7a" stroke-width="1.5"/>
<text x="96" y="134" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏tRNA الأول</text>
<line x1="160" y1="212" x2="208" y2="230" stroke="#546e7a" stroke-width="1.5"/>
<text x="96" y="214" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الكودون المضاد</text>
</g>
<g class="dg-hotspot" data-id="trna2" style="cursor:pointer">
<rect x="390" y="96" width="130" height="34" fill="#ffffff" fill-opacity="0"/>
<line x1="316" y1="132" x2="316" y2="219" stroke="#d81b60" stroke-width="4"/>
<line x1="282" y1="219" x2="350" y2="219" stroke="#d81b60" stroke-width="4"/>
<circle cx="292" cy="234" r="11" fill="#a5d6a7" stroke="#37474f" stroke-width="1.1"/>
<text x="292" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">U</text>
<circle cx="316" cy="234" r="11" fill="#a5d6a7" stroke="#37474f" stroke-width="1.1"/>
<text x="316" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">U</text>
<circle cx="340" cy="234" r="11" fill="#a5d6a7" stroke="#37474f" stroke-width="1.1"/>
<text x="340" y="239.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">U</text>
<circle cx="316" cy="112" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="316" y="117.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">Lys</text>
<line x1="398" y1="118" x2="320" y2="150" stroke="#546e7a" stroke-width="1.5"/>
<text x="456" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏tRNA الثاني</text>
</g>
<g class="dg-hotspot" data-id="peptide" style="cursor:pointer">
<rect x="215" y="60" width="130" height="30" fill="#ffffff" fill-opacity="0"/>
<line x1="264" y1="112" x2="296" y2="112" stroke="#0d47a1" stroke-width="4"/>
<line x1="280" y1="86" x2="280" y2="108" stroke="#546e7a" stroke-width="1.5"/>
<text x="280" y="78" text-anchor="middle" font-size="16" font-weight="800" fill="#0d47a1">رابطة ببتيدية</text>
</g>
<g class="dg-hotspot" data-id="polypeptide" style="cursor:pointer">
<rect x="20" y="356" width="520" height="236" fill="#ffffff" fill-opacity="0"/>
<ellipse cx="340" cy="568" rx="80" ry="26" fill="#f6a56a" stroke="#bf5b17" stroke-width="2"/>
<ellipse cx="340" cy="490" rx="94" ry="54" fill="#f6a56a" stroke="#bf5b17" stroke-width="2"/>
<line x1="40" y1="548" x2="524" y2="548" stroke="#d81b60" stroke-width="4"/>
<line x1="124" y1="548" x2="124" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="148" y1="548" x2="148" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="172" y1="548" x2="172" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="196" y1="548" x2="196" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="220" y1="548" x2="220" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="244" y1="548" x2="244" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="436" y1="548" x2="436" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="460" y1="548" x2="460" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="484" y1="548" x2="484" y2="536" stroke="#d81b60" stroke-width="2"/>
<line x1="508" y1="548" x2="508" y2="536" stroke="#d81b60" stroke-width="2"/>
<circle cx="52" cy="544" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="52" y="549.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<circle cx="76" cy="544" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="76" y="549.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">U</text>
<circle cx="100" cy="544" r="11" fill="#d1c4e9" stroke="#37474f" stroke-width="1.1"/>
<text x="100" y="549.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">G</text>
<line x1="316" y1="410" x2="316" y2="526" stroke="#d81b60" stroke-width="4"/>
<line x1="282" y1="526" x2="350" y2="526" stroke="#d81b60" stroke-width="4"/>
<line x1="292" y1="526" x2="292" y2="540" stroke="#d81b60" stroke-width="3"/>
<line x1="316" y1="526" x2="316" y2="540" stroke="#d81b60" stroke-width="3"/>
<line x1="340" y1="526" x2="340" y2="540" stroke="#d81b60" stroke-width="3"/>
<line x1="364" y1="410" x2="364" y2="526" stroke="#d81b60" stroke-width="4"/>
<line x1="330" y1="526" x2="398" y2="526" stroke="#d81b60" stroke-width="4"/>
<line x1="340" y1="526" x2="340" y2="540" stroke="#d81b60" stroke-width="3"/>
<line x1="364" y1="526" x2="364" y2="540" stroke="#d81b60" stroke-width="3"/>
<line x1="388" y1="526" x2="388" y2="540" stroke="#d81b60" stroke-width="3"/>
<line x1="124" y1="390" x2="364" y2="390" stroke="#0d47a1" stroke-width="3"/>
<circle cx="124" cy="390" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="124" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">Met</text>
<circle cx="172" cy="390" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="172" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">Lys</text>
<circle cx="220" cy="390" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="220" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">aa</text>
<circle cx="268" cy="390" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="268" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">aa</text>
<circle cx="316" cy="390" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="316" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">aa</text>
<circle cx="364" cy="390" r="20" fill="#90caf9" stroke="#1565c0" stroke-width="1.6"/>
<text x="364" y="395.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">aa</text>
<line x1="128" y1="452" x2="150" y2="412" stroke="#546e7a" stroke-width="1.5"/>
<text x="118" y="472" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">سلسلة عديد ببتيد</text>
<path d="M438 558 v8 h30 v-8" fill="none" stroke="#263238" stroke-width="1.6"/>
<line x1="470" y1="436" x2="454" y2="566" stroke="#546e7a" stroke-width="1.5"/>
<text x="470" y="406" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">كودون الإيقاف</text>
<text x="466" y="428" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">‏(UAA أو UAG أو UGA)</text>
</g>
<g class="dg-hotspot" data-id="trna" style="cursor:pointer">
<rect x="580" y="170" width="250" height="250" fill="#ffffff" fill-opacity="0"/>
<path d="M717 172 L717 257 Q717 269 729 269 L760 269 A28 28 0 1 1 760 293 L729 293 Q717 293 717 305 L717 420 A30 30 0 1 1 693 420 L693 305 Q693 293 681 293 L650 293 A28 28 0 1 1 650 269 L681 269 Q693 269 693 257 L693 172" fill="none" stroke="#ec407a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="696" y1="188" x2="714" y2="188" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="202.5" x2="714" y2="202.5" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="217" x2="714" y2="217" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="231.5" x2="714" y2="231.5" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="246" x2="714" y2="246" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="322" x2="714" y2="322" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="339" x2="714" y2="339" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="356" x2="714" y2="356" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="373" x2="714" y2="373" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="390" x2="714" y2="390" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="696" y1="407" x2="714" y2="407" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="733" y1="272" x2="733" y2="290" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="745" y1="272" x2="745" y2="290" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="757" y1="272" x2="757" y2="290" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="653" y1="272" x2="653" y2="290" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="665" y1="272" x2="665" y2="290" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<line x1="677" y1="272" x2="677" y2="290" stroke="#263238" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<text x="672" y="166" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">5′</text>
<line x1="752" y1="366" x2="716" y2="356" stroke="#546e7a" stroke-width="1.5"/>
<text x="796" y="362" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">روابط</text>
<text x="796" y="382" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">هيدروجينية</text>
<text x="796" y="402" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">بين أزواج</text>
<text x="796" y="422" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">القواعد</text>
</g>
<g class="dg-hotspot" data-id="aa-site" style="cursor:pointer">
<rect x="600" y="62" width="210" height="110" fill="#ffffff" fill-opacity="0"/>
<circle cx="717" cy="116" r="11" fill="#b39ddb" stroke="#37474f" stroke-width="1.1"/>
<text x="717" y="121.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">A</text>
<circle cx="717" cy="138" r="11" fill="#fff176" stroke="#37474f" stroke-width="1.1"/>
<text x="717" y="143.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">C</text>
<circle cx="717" cy="160" r="11" fill="#fff176" stroke="#37474f" stroke-width="1.1"/>
<text x="717" y="165.5" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">C</text>
<text x="744" y="112" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">3′</text>
<line x1="724" y1="90" x2="720" y2="104" stroke="#546e7a" stroke-width="1.5"/>
<text x="705" y="82" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">موقع ارتباط الحمض الأميني</text>
</g>
<g class="dg-hotspot" data-id="anticodon" style="cursor:pointer">
<rect x="640" y="440" width="130" height="120" fill="#ffffff" fill-opacity="0"/>
<line x1="690" y1="479" x2="680" y2="500" stroke="#263238" stroke-width="2.4"/>
<line x1="705" y1="480" x2="705" y2="503" stroke="#263238" stroke-width="2.4"/>
<line x1="720" y1="479" x2="730" y2="500" stroke="#263238" stroke-width="2.4"/>
<path d="M670 508 v8 h70 v-8" fill="none" stroke="#263238" stroke-width="1.6"/>
<text x="705" y="544" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">كودون مضاد</text>
</g>
<text x="705" y="584" text-anchor="middle" font-size="17" font-weight="800" fill="#0d47a1">جزيء tRNA</text>
</svg>`,
    hotspots: {
      'trna': { label: 'جزيء tRNA', desc: 'تتضمن الترجمة النوع الثالث من RNA وهو tRNA، ووظيفته نقل الأحماض الأمينية إلى الرايبوسوم. يتكوّن الجزيء من شريط مفرد ينثني على نفسه مكونًا شكل ورقة برسيم. يرتبط حمض أميني واحد بأحد طرفَي الجزيء (وبعد الارتباط يمكن أن يعبر عنه بـ حمض أميني-tRNA)، ويوجد على الطرف الآخر كودون مضاد يتعرف على كودون الحمض الأميني المحمول على tRNA.<br><small>كتاب الطالب — ص 31-32</small>' },
      'aa-site': { label: 'موقع ارتباط الحمض الأميني', desc: 'يمثل tRNA رابطًا بين mRNA وتتابع الأحماض الأمينية في البروتين. لكل حمض أميني جزيء tRNA معيّن يحمله. يرتبط الحمض الأميني بأحد طرفَي الجزيء. هذه القواعد الثلاث هي نفسها دائمًا (تقرأ CCA).<br><small>كتاب الطالب — ص 31-32</small>' },
      'anticodon': { label: 'الكودون المضاد', desc: 'وفي الطرف الآخر من الجزيء تبرز ثلاث قواعد تشكل الكودون المضاد Anticodon، وهي مكملة لكودون الحمض الأميني المحمول على tRNA، والإنزيمات مسؤولة عن التأكد من أن كل tRNA ينقل الحمض الأميني الصحيح. الكودون المضاد Anticodon: تتابع من ثلاث قواعد غير مزدوجة Unpaired على جزيء tRNA ترتبط مع الكودون على mRNA.<br><small>كتاب الطالب — ص 31</small>' },
      'ribosome': { label: 'الرايبوسوم', desc: 'الترجمة عملية معقدة، حيث إن عضية الرايبوسوم تعمل على وضع جميع الجزيئات المرتبطة بهذه العملية معًا. تذكّر أن كل رايبوسوم مكوّن من وحدتَين: وحدة صغيرة ووحدة كبيرة، وأنها تتكوّن من rRNA وبروتين.<br><small>كتاب الطالب — ص 31</small>' },
      'mrna-groove': { label: 'جزيء mRNA', desc: 'لبدء الترجمة، يرتبط الرايبوسوم بجزيء mRNA الذي يظهر محصورًا داخل أخدود بين وحدتَي الرايبوسوم (الصغيرة والكبيرة)، ويصبح جاهزًا لاستقبال أول جزيء tRNA. أول كودون هو دائمًا AUG (كودون البدء).<br><small>كتاب الطالب — ص 32-33</small>' },
      'trna1': { label: 'tRNA الأول', desc: 'يدخل إلى الرايبوسوم جزيء tRNA الأول وبه الكودون المضاد والمكمل لأول كودون على mRNA ويرتبط برابطة هيدروجينية مع الكودون. كودون البدء AUG (كودون mRNA للميثيونين)، لذا فإن أول حمض أميني هو الميثيونين.<br><small>كتاب الطالب — ص 32-33</small>' },
      'trna2': { label: 'tRNA الثاني', desc: 'يمكن أن يستقبل الرايبوسوم جزيئَين من tRNA في الوقت نفسه، لذا فإن tRNA الثاني يدخل الرايبوسوم، والذي يحتوي على الكودون المضاد الذي يطابق الكودون الثاني في mRNA. يرتبط tRNA الثاني مع الكودون الثاني بواسطة روابط هيدروجينية.<br><small>كتاب الطالب — ص 32-33</small>' },
      'peptide': { label: 'رابطة ببتيدية', desc: 'وبذلك يتموضع الحمضان الأمينيان اللذان نقلهما جزيئان من tRNA أحدهما بجوار الآخر، وتتكوّن رابطة ببتيدية بينهما. بعد ذلك يغادر أول tRNA، ويتقدم الرايبوسوم كودون واحد إلى الأمام، ويدخل tRNA الثالث، ناقلًا الحمض الأميني التالي.<br><small>كتاب الطالب — ص 32</small>' },
      'polypeptide': { label: 'سلسلة عديد ببتيد', desc: 'وتتكرر هذه العملية إلى حين الوصول إلى كودون إيقاف. ثم يغادر عديد الببتيد المكتمل الرايبوسوم، وينطوي ليشكل التركيب الثانوي والثالثي. وتساعد بروتينات خاصة في عملية الطي هذه وتتحكم فيها، وقد يدخل عديد الببتيد الشبكة الإندوبلازمية الخشنة لينقل إلى جزء آخر من الخلية.<br><small>كتاب الطالب — ص 32</small>' }
    }
  }
].concat((unitDiagrams[1] || []).filter(function (d) { return d.id === 'codon-translator-s1'; }));

unitDiagrams[2] = [
  {
    id: 'meiosis-s1',
    title: 'أطوار الانقسام الاختزالي',
    figure: 'الشكل ٢-٢',
    page: 'ص 47',
    obj: '2-4',
    legend: 'الانقسام الاختزالي Meiosis، نوع من الانقسام الخلوي الذي يؤدي إلى إنتاج خلايا أحادية المجموعة الكروموسومية من خلية ثنائية المجموعة الكروموسومية، وهو يستخدم لإنتاج الأمشاج في الإنسان والحيوان والنبات.',
    svg: `<svg viewBox="0 0 860 566" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
</defs>
<rect width="860" height="566" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">الانقسام الاختزالي وانقسام السيتوبلازم في الخلية الحيوانية</text>
<rect x="10" y="46" width="840" height="226" rx="12" fill="#eaf3ea" stroke="#b7d1b9"/>
<text x="430" y="72" text-anchor="middle" font-size="18" font-weight="800" fill="#1b5e20">الانقسام الاختزالي الأول</text>
<rect x="10" y="282" width="840" height="274" rx="12" fill="#e3f0f4" stroke="#aecbd4"/>
<text x="430" y="306" text-anchor="middle" font-size="18" font-weight="800" fill="#01579b">الانقسام الاختزالي الثاني</text>
<g class="dg-hotspot" data-id="p1-early" style="cursor:pointer">
<rect x="717" y="84" width="136" height="184" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="785" cy="150" r="50" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<circle cx="785" cy="150" r="30" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<g stroke-width="2" fill="none" stroke-linecap="round">
<path d="M769 136 q8 10 2 24" stroke="#d32f2f"/>
<path d="M787 130 q10 12 4 26" stroke="#1565c0"/>
<path d="M779 162 q8 -4 16 4" stroke="#d32f2f"/>
<path d="M791 148 q8 2 12 12" stroke="#1565c0"/>
</g>
<circle cx="767" cy="162" r="4" fill="#5e56a8"/>
<circle cx="781" cy="111" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="790" cy="111" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="785" y="236" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">1. بداية الطور</text>
<text x="785" y="257" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">التمهيدي الأول</text>
</g>
<g class="dg-hotspot" data-id="p1-mid" style="cursor:pointer">
<rect x="577" y="84" width="136" height="184" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="645" cy="150" r="50" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<circle cx="645" cy="150" r="30" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<line x1="628.4" y1="135" x2="628.4" y2="165" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="633.6" y1="135" x2="633.6" y2="165" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="631" cy="144.6" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="637.4" y1="135" x2="637.4" y2="165" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="642.6" y1="135" x2="642.6" y2="165" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="640" cy="144.6" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="651.4" y1="143" x2="651.4" y2="161" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="656.6" y1="143" x2="656.6" y2="161" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="654" cy="148.76" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="660.4" y1="143" x2="660.4" y2="161" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="665.6" y1="143" x2="665.6" y2="161" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="663" cy="148.76" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="657" cy="132" r="3.5" fill="#5e56a8"/>
<circle cx="615" cy="124" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="675" cy="124" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="645" y="236" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">2. منتصف الطور</text>
<text x="645" y="257" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">التمهيدي الأول</text>
</g>
<g class="dg-hotspot" data-id="p1-late" style="cursor:pointer">
<rect x="437" y="84" width="136" height="184" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="505" cy="150" r="50" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M505 106 Q505 114 491 122" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M505 106 Q505 114 519 122" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M505 194 Q505 186 491 178" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M505 194 Q505 186 519 178" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<circle cx="505" cy="150" r="30" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6" stroke-dasharray="5 4"/>
<g fill="none" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
<line x1="486" y1="134" x2="486" y2="166" stroke="#d32f2f"/>
<path d="M492 134 L492 151 L499 158 L499 166" stroke="#d32f2f"/>
<path d="M499 134 L499 151 L492 158 L492 166" stroke="#1565c0"/>
<line x1="505" y1="134" x2="505" y2="166" stroke="#1565c0"/>
</g>
<line x1="513.4" y1="143" x2="513.4" y2="161" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="518.6" y1="143" x2="518.6" y2="161" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="516" cy="148.76" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="522.4" y1="143" x2="522.4" y2="161" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="527.6" y1="143" x2="527.6" y2="161" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="525" cy="148.76" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="505" cy="106" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="505" cy="194" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="505" y="236" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">3. نهاية الطور</text>
<text x="505" y="257" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">التمهيدي الأول</text>
</g>
<g class="dg-hotspot" data-id="meta1" style="cursor:pointer">
<rect x="297" y="84" width="136" height="184" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="365" cy="150" r="50" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M365 106 Q331 150 365 194" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M365 106 Q351 150 365 194" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M365 106 Q379 150 365 194" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M365 106 Q399 150 365 194" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<line x1="337" y1="141.4" x2="365" y2="141.4" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="337" y1="146.6" x2="365" y2="146.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="356.6" y1="146.6" x2="365" y2="146.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="345.96" cy="144" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="337" y1="153.4" x2="365" y2="153.4" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="337" y1="158.6" x2="365" y2="158.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="356.6" y1="158.6" x2="365" y2="158.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="345.96" cy="156" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="377" y1="141.4" x2="393" y2="141.4" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="377" y1="146.6" x2="393" y2="146.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="382.12" cy="144" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="377" y1="153.4" x2="393" y2="153.4" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="377" y1="158.6" x2="393" y2="158.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="382.12" cy="156" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="365" cy="106" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="365" cy="194" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="365" y="236" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">4. الطور</text>
<text x="365" y="257" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">الاستوائي الأول</text>
</g>
<g class="dg-hotspot" data-id="ana1" style="cursor:pointer">
<rect x="157" y="84" width="136" height="184" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="225" cy="150" r="50" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M225 106 Q191 150 225 194" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M225 106 Q259 150 225 194" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<line x1="225" y1="106" x2="206" y2="128" stroke="#6d5f3a" stroke-width="1"/>
<line x1="225" y1="106" x2="242" y2="128" stroke="#6d5f3a" stroke-width="1"/>
<line x1="225" y1="194" x2="206" y2="172" stroke="#6d5f3a" stroke-width="1"/>
<line x1="225" y1="194" x2="242" y2="172" stroke="#6d5f3a" stroke-width="1"/>
<line x1="197" y1="127.4" x2="225" y2="127.4" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="197" y1="132.6" x2="225" y2="132.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="216.6" y1="132.6" x2="225" y2="132.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="205.96" cy="130" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="197" y1="167.4" x2="225" y2="167.4" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="197" y1="172.6" x2="225" y2="172.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="216.6" y1="172.6" x2="225" y2="172.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="205.96" cy="170" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="237" y1="127.4" x2="253" y2="127.4" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="237" y1="132.6" x2="253" y2="132.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="242.12" cy="130" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="237" y1="167.4" x2="253" y2="167.4" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="237" y1="172.6" x2="253" y2="172.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="242.12" cy="170" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="225" cy="106" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="225" cy="194" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="225" y="236" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">5. الطور</text>
<text x="225" y="257" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">الانفصالي الأول</text>
</g>
<g class="dg-hotspot" data-id="telo1" style="cursor:pointer">
<rect x="17" y="84" width="136" height="184" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<path d="M73 150 A33 33 0 1 1 97 150 A33 33 0 1 1 73 150 Z" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<line x1="79" y1="143" x2="79" y2="157" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="85" y1="143" x2="85" y2="157" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="91" y1="143" x2="91" y2="157" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<circle cx="85" cy="119" r="20" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<circle cx="85" cy="181" r="20" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<line x1="72" y1="112.4" x2="94" y2="112.4" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="72" y1="117.6" x2="94" y2="117.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="87.4" y1="117.6" x2="94" y2="117.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="79.04" cy="115" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="80" y1="123.4" x2="94" y2="123.4" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="80" y1="128.6" x2="94" y2="128.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="84.48" cy="126" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="72" y1="174.4" x2="94" y2="174.4" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="72" y1="179.6" x2="94" y2="179.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="87.4" y1="179.6" x2="94" y2="179.6" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="79.04" cy="177" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="80" y1="185.4" x2="94" y2="185.4" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="80" y1="190.6" x2="94" y2="190.6" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="84.48" cy="188" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="85" cy="93" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="85" cy="207" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="85" y="236" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">6. الطور</text>
<text x="85" y="257" text-anchor="middle" font-size="15" font-weight="800" fill="#263238">النهائي الأول</text>
</g>
<g class="dg-hotspot" data-id="pro2" style="cursor:pointer">
<rect x="652" y="314" width="200" height="236" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="752" cy="362" r="42" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<circle cx="752" cy="362" r="25" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6" stroke-dasharray="5 4"/>
<line x1="742.4" y1="350" x2="742.4" y2="374" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="747.6" y1="350" x2="747.6" y2="374" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="747.6" y1="366.8" x2="747.6" y2="374" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="745" cy="357.68" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="758.4" y1="357" x2="758.4" y2="371" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="763.6" y1="357" x2="763.6" y2="371" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="761" cy="361.48" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="717" cy="359" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="717" cy="367" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="787" cy="359" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="787" cy="367" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="752" cy="452" r="42" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<circle cx="752" cy="452" r="25" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6" stroke-dasharray="5 4"/>
<line x1="742.4" y1="440" x2="742.4" y2="464" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="747.6" y1="440" x2="747.6" y2="464" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="747.6" y1="456.8" x2="747.6" y2="464" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="745" cy="447.68" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="758.4" y1="447" x2="758.4" y2="461" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="763.6" y1="447" x2="763.6" y2="461" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="761" cy="451.48" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="717" cy="449" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="717" cy="457" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="787" cy="449" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="787" cy="457" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="752" y="532" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">7. الطور التمهيدي الثاني</text>
</g>
<g class="dg-hotspot" data-id="meta2" style="cursor:pointer">
<rect x="437" y="314" width="200" height="236" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="537" cy="362" r="42" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M500 362 Q537 332 574 362" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M500 362 Q537 350 574 362" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M500 362 Q537 374 574 362" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M500 362 Q537 392 574 362" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<line x1="534.4" y1="340" x2="534.4" y2="362" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="539.6" y1="340" x2="539.6" y2="362" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="539.6" y1="355.4" x2="539.6" y2="362" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="537" cy="347.04" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="534.4" y1="372" x2="534.4" y2="384" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="539.6" y1="372" x2="539.6" y2="384" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="537" cy="375.84" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="500" cy="362" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="574" cy="362" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="537" cy="452" r="42" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M500 452 Q537 422 574 452" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M500 452 Q537 440 574 452" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M500 452 Q537 464 574 452" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M500 452 Q537 482 574 452" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<line x1="534.4" y1="430" x2="534.4" y2="452" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="539.6" y1="430" x2="539.6" y2="452" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="539.6" y1="445.4" x2="539.6" y2="452" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="537" cy="437.04" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<line x1="534.4" y1="462" x2="534.4" y2="474" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="539.6" y1="462" x2="539.6" y2="474" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="537" cy="465.84" r="2.6" fill="#fff" stroke="#37474f" stroke-width="1"/>
<circle cx="500" cy="452" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="574" cy="452" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="537" y="532" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">8. الطور الاستوائي الثاني</text>
</g>
<g class="dg-hotspot" data-id="ana2" style="cursor:pointer">
<rect x="222" y="314" width="200" height="236" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="322" cy="362" r="42" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M285 362 Q322 332 359 362" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M285 362 Q322 392 359 362" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<line x1="285" y1="362" x2="304" y2="351" stroke="#6d5f3a" stroke-width="1"/>
<line x1="359" y1="362" x2="340" y2="351" stroke="#6d5f3a" stroke-width="1"/>
<line x1="285" y1="362" x2="304" y2="377" stroke="#6d5f3a" stroke-width="1"/>
<line x1="359" y1="362" x2="340" y2="377" stroke="#6d5f3a" stroke-width="1"/>
<line x1="304" y1="340" x2="304" y2="362" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="340" y1="340" x2="340" y2="362" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="340" y1="355.4" x2="340" y2="362" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="304" y1="372" x2="304" y2="384" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="340" y1="372" x2="340" y2="384" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="285" cy="362" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="359" cy="362" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="322" cy="452" r="42" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<path d="M285 452 Q322 422 359 452" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<path d="M285 452 Q322 482 359 452" fill="none" stroke="#6d5f3a" stroke-width="1"/>
<line x1="285" y1="452" x2="304" y2="441" stroke="#6d5f3a" stroke-width="1"/>
<line x1="359" y1="452" x2="340" y2="441" stroke="#6d5f3a" stroke-width="1"/>
<line x1="285" y1="452" x2="304" y2="467" stroke="#6d5f3a" stroke-width="1"/>
<line x1="359" y1="452" x2="340" y2="467" stroke="#6d5f3a" stroke-width="1"/>
<line x1="304" y1="430" x2="304" y2="452" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="340" y1="430" x2="340" y2="452" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="340" y1="445.4" x2="340" y2="452" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="304" y1="462" x2="304" y2="474" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="340" y1="462" x2="340" y2="474" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<circle cx="285" cy="452" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<circle cx="359" cy="452" r="3.6" fill="#1976d2" stroke="#0d47a1" stroke-width="0.8"/>
<text x="322" y="532" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">9. الطور الانفصالي الثاني</text>
</g>
<g class="dg-hotspot" data-id="telo2" style="cursor:pointer">
<rect x="7" y="314" width="200" height="236" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<path d="M107 350 A34 34 0 1 1 107 374 A34 34 0 1 1 107 350 Z" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<line x1="100" y1="357" x2="114" y2="357" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="100" y1="362" x2="114" y2="362" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="100" y1="367" x2="114" y2="367" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<circle cx="73" cy="362" r="20" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<circle cx="141" cy="362" r="20" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<line x1="68" y1="351" x2="68" y2="373" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="78" y1="358" x2="78" y2="370" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="136" y1="351" x2="136" y2="373" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="136" y1="366.4" x2="136" y2="373" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="146" y1="358" x2="146" y2="370" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<path d="M107 440 A34 34 0 1 1 107 464 A34 34 0 1 1 107 440 Z" fill="#dccb9c" stroke="#8d7a4a" stroke-width="2"/>
<line x1="100" y1="447" x2="114" y2="447" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="100" y1="452" x2="114" y2="452" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="100" y1="457" x2="114" y2="457" stroke="#6d5f3a" stroke-width="1" stroke-dasharray="3 2"/>
<circle cx="73" cy="452" r="20" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<circle cx="141" cy="452" r="20" fill="#b9b3e6" stroke="#5e56a8" stroke-width="1.6"/>
<line x1="68" y1="441" x2="68" y2="463" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="78" y1="448" x2="78" y2="460" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="136" y1="441" x2="136" y2="463" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<line x1="136" y1="456.4" x2="136" y2="463" stroke="#d32f2f" stroke-width="3.2" stroke-linecap="round"/>
<line x1="146" y1="448" x2="146" y2="460" stroke="#1565c0" stroke-width="3.2" stroke-linecap="round"/>
<text x="107" y="532" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">10. الطور النهائي الثاني</text>
</g>
</svg>`,
    hotspots: {
      'p1-early': { label: 'بداية الطور التمهيدي الأول', desc: 'يماثل بداية الطور التميهدي في الانقسام المتساوي. يبدأ الانقسام الاختزالي بالطور التمهيدي الأول Prophase I وكما في الانقسام المتساوي، عندما تتكثف الكروموسومات وتصبح مرئية. ويكون كل كروموسوم قد تم نسخه في الطور S من الطور البيني، ويصبح كل كروموسوم مكوّنًا من كروماتيدين «شقيقَين» متطابقين يرتبطان معًا بواسطة السنترومير.<br><small>كتاب الطالب — ص 47-48</small>' },
      'p1-mid': { label: 'منتصف الطور التمهيدي الأول', desc: 'تتجمع الكروموسومات المتماثلة بشكل مزدوج. تسمى هذه العملية التشابك Synapsis. ويسمى كل زوج الثنائيات المتكافئة Bivalent. يتحرك الجسمان المركزيان باتجاه الطرفين المتقابلين للخلية كما في الانقسام المتساوي.<br><small>كتاب الطالب — ص 47</small>' },
      'p1-late': { label: 'نهاية الطور التمهيدي الأول', desc: 'يتفكَّك الغلاف النووي كما في الانقسام المتساوي. قد يحدث عبور بين الكروماتيدات. تختفي النوية كما في الانقسام المتساوي. كيازما = النقطة التي يحدث فيها عبور. تتكون كيازما واحدة أو أكثر على طول الثنائيات المتكافئة. تظهر خيوط المغزل في نهاية الطور التمهيدي الأول.<br><small>كتاب الطالب — ص 47</small>' },
      'meta1': { label: 'الطور الاستوائي الأول', desc: 'تصطف الثنائيات المتكافئة على امتداد خط استواء الخلية، وهي ترتبط بخيوط المغزل عبر سنتروميراتها. ترتبط خيوط المغزل بالسنترومير كما في الانقسام المتساوي.<br><small>كتاب الطالب — ص 47</small>' },
      'ana1': { label: 'الطور الانفصالي الأول', desc: 'لا تنقسم السنتروميرات هنا على عكس ما يحدث في الانقسام المتساوي. تنفصل الكروموسومات المتماثلة وتتجه كاملة باتجاه القطبين المتقابلين للخلية، حيث تسحب السنتروميرات أولًا بفعل تَقصّر الأُنيبيبات الدقيقة لخيوط المغزل.<br><small>كتاب الطالب — ص 47</small>' },
      'telo1': { label: 'الطور النهائي الأول', desc: 'تصل الكروموسومات إلى قطبي الخلية. إعادة تكوين الغلاف النووي. إعادة تكوين النوية. انقسام السيتوبلازم. يحدث الانقسام السيتوبلازمي في الخلايا الحيوانية عادة قبل مرورها بالانقسام الاختزالي الثاني. تنتقل العديد من الخلايا النباتية إلى الانقسام الاختزالي الثاني من دون إعادة تكوين الغلاف النووي أو النوية.<br><small>كتاب الطالب — ص 47</small>' },
      'pro2': { label: 'الطور التمهيدي الثاني', desc: 'يتفكّك الغلاف النووي وتختفي النوية. تتضاعف الأجسام المركزية والسنتريولات وتنتقل إلى القطبين المتقابلين من الخلية.<br><small>كتاب الطالب — ص 47</small>' },
      'meta2': { label: 'الطور الاستوائي الثاني', desc: 'تصطف الكروموسومات بشكل منفصل عبر خط استواء الخلية.<br><small>كتاب الطالب — ص 47</small>' },
      'ana2': { label: 'الطور الانفصالي الثاني', desc: 'تنقسم السنتروميرات، وتسحب خيوط المغزل الكروماتيدات إلى القطبين المتقابلين. تنفصل الكروماتيدات أثناء الانقسام الاختزالي الثاني كما في الانقسام المتساوي.<br><small>كتاب الطالب — ص 47</small>' },
      'telo2': { label: 'الطور النهائي الثاني', desc: 'يماثل الطور النهائي في الانقسام المتساوي، لكن تتكون في الطور النهائي في الانقسام الاختزالي الثاني أربع خلايا جديدة أحادية المجموعة الكروموسومية.<br><small>كتاب الطالب — ص 47</small>' }
    }
  },
  {
    id: 'crossing-assortment-s1',
    title: 'العبور والتوزيع الحر',
    figure: 'الشكل ٢-٥ والشكل ٢-٦',
    page: 'ص 52-53',
    obj: '2-6',
    legend: 'يؤدي كل من مصدرَي التباين الجيني اللذَين درستهما- العبور والتوزيع الحر- إلى إنتاج تراكيب مختلفة من الأليلات في الأمشاج.',
    svg: `<svg viewBox="0 0 860 610" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
<marker id="caArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="11" refX="13" refY="5.5" orient="auto">
<path d="M0,0 L14,5.5 L0,11 Z" fill="#455a64"/>
</marker>
</defs>
<rect width="860" height="610" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">كيف يحدث التباين الجيني؟</text>
<rect x="438" y="46" width="412" height="554" rx="12" fill="#f6f8fb" stroke="#b0bec5"/>
<rect x="10" y="46" width="412" height="554" rx="12" fill="#f6f8fb" stroke="#b0bec5"/>
<text x="644" y="72" text-anchor="middle" font-size="19" font-weight="800" fill="#1b5e20">العبور</text>
<text x="216" y="72" text-anchor="middle" font-size="19" font-weight="800" fill="#1b5e20">التوزيع الحر</text>
<g class="dg-hotspot" data-id="co-parent" style="cursor:pointer">
<rect x="530" y="84" width="228" height="142" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<text x="644" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">زوج من الكروموسومات المتماثلة</text>
<text x="644" y="118" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">في الخلية الأصلية</text>
<line x1="605" y1="130" x2="605" y2="220" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="631" y1="130" x2="631" y2="220" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="657" y1="130" x2="657" y2="220" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<line x1="683" y1="130" x2="683" y2="220" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<line x1="605" y1="142" x2="631" y2="142" stroke="#78909c" stroke-width="3"/>
<circle cx="618" cy="142" r="6" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<line x1="657" y1="142" x2="683" y2="142" stroke="#78909c" stroke-width="3"/>
<circle cx="670" cy="142" r="6" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="593" y="172" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="619" y="172" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="645" y="172" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="671" y="172" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="593" y="206" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="619" y="206" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="645" y="206" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<text x="671" y="206" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
</g>
<line x1="672" y1="230" x2="730" y2="262" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<line x1="616" y1="230" x2="558" y2="262" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<g class="dg-hotspot" data-id="co-cross" style="cursor:pointer">
<rect x="652" y="266" width="192" height="134" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<text x="748" y="284" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">إذا حدث عبور</text>
<line x1="709" y1="296" x2="709" y2="392" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="787" y1="296" x2="787" y2="392" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<path d="M735 296 L735 342 L761 360 L761 392" fill="none" stroke="#d32f2f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M761 296 L761 342 L735 360 L735 392" fill="none" stroke="#1565c0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="709" y1="308" x2="735" y2="308" stroke="#78909c" stroke-width="3"/>
<circle cx="722" cy="308" r="6" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<line x1="761" y1="308" x2="787" y2="308" stroke="#78909c" stroke-width="3"/>
<circle cx="774" cy="308" r="6" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="697" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="723" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="749" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="775" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="697" y="382" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="723" y="382" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="749" y="382" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<text x="775" y="382" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
</g>
<g class="dg-hotspot" data-id="co-nocross" style="cursor:pointer">
<rect x="444" y="266" width="192" height="134" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<text x="540" y="284" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">إذا لم يحدث عبور</text>
<line x1="501" y1="296" x2="501" y2="392" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="527" y1="296" x2="527" y2="392" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="553" y1="296" x2="553" y2="392" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<line x1="579" y1="296" x2="579" y2="392" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<line x1="501" y1="308" x2="527" y2="308" stroke="#78909c" stroke-width="3"/>
<circle cx="514" cy="308" r="6" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<line x1="553" y1="308" x2="579" y2="308" stroke="#78909c" stroke-width="3"/>
<circle cx="566" cy="308" r="6" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="489" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="515" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="541" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="567" y="334" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="489" y="378" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="515" y="378" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="541" y="378" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<text x="567" y="378" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
</g>
<line x1="748" y1="400" x2="748" y2="418" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<line x1="540" y1="400" x2="540" y2="418" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<text x="644" y="442" text-anchor="middle" font-size="16" font-weight="800" fill="#37474f">الأليلات الناتجة في الأمشاج</text>
<g class="dg-hotspot" data-id="co-gam-cross" style="cursor:pointer">
<rect x="652" y="440" width="192" height="152" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<text x="748" y="468" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">مع عبور</text>
<line x1="726" y1="484" x2="726" y2="534" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="726" y1="534" x2="726" y2="584" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<circle cx="726" cy="495" r="4" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="712" y="522" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="712" y="574" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<line x1="784" y1="484" x2="784" y2="534" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<line x1="784" y1="534" x2="784" y2="584" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<circle cx="784" cy="495" r="4" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="770" y="522" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="770" y="574" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
</g>
<g class="dg-hotspot" data-id="co-gam-nocross" style="cursor:pointer">
<rect x="444" y="440" width="192" height="152" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<text x="540" y="468" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">بدون عبور</text>
<line x1="518" y1="484" x2="518" y2="534" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<line x1="518" y1="534" x2="518" y2="584" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
<circle cx="518" cy="495" r="4" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="504" y="522" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">E</text>
<text x="504" y="574" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<line x1="576" y1="484" x2="576" y2="534" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<line x1="576" y1="534" x2="576" y2="584" stroke="#1565c0" stroke-width="5" stroke-linecap="round"/>
<circle cx="576" cy="495" r="4" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>
<text x="562" y="522" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">e</text>
<text x="562" y="574" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
</g>
<g class="dg-hotspot" data-id="ia-parent" style="cursor:pointer">
<circle cx="170" cy="140" r="50" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<circle cx="170" cy="140" r="40" fill="#f7f1d5" stroke="#bdb38a" stroke-width="1.2"/>
<g stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round">
<line x1="175" y1="125.15" x2="201" y2="136.85"/>
<line x1="175" y1="136.85" x2="201" y2="125.15"/>
</g>
<text x="188" y="119" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<g stroke="#1565c0" stroke-width="3.4" stroke-linecap="round">
<line x1="173" y1="145.15" x2="199" y2="156.85"/>
<line x1="173" y1="156.85" x2="199" y2="145.15"/>
</g>
<text x="186" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<g stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round">
<line x1="144" y1="127.4" x2="160" y2="134.6"/>
<line x1="144" y1="134.6" x2="160" y2="127.4"/>
</g>
<text x="152" y="119" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<g stroke="#1565c0" stroke-width="3.4" stroke-linecap="round">
<line x1="146" y1="147.4" x2="162" y2="154.6"/>
<line x1="146" y1="154.6" x2="162" y2="147.4"/>
</g>
<text x="154" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="322" y="128" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">خلية على وشك</text>
<text x="322" y="150" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">الانقسام</text>
<rect x="112" y="86" width="286" height="108" rx="10" fill="#ffffff" fill-opacity="0.01"/>
</g>
<line x1="196" y1="188" x2="290" y2="244" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<line x1="150" y1="190" x2="124" y2="244" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<g class="dg-hotspot" data-id="ia-meta1" style="cursor:pointer">
<circle cx="316" cy="300" r="52" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="266" y1="300" x2="366" y2="300" stroke="#9e9e9e" stroke-width="1" stroke-dasharray="4 3"/>
<g stroke="#1565c0" stroke-width="3.4" stroke-linecap="round">
<line x1="288" y1="286.4" x2="304" y2="293.6"/>
<line x1="288" y1="293.6" x2="304" y2="286.4"/>
</g>
<g stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round">
<line x1="288" y1="306.4" x2="304" y2="313.6"/>
<line x1="288" y1="313.6" x2="304" y2="306.4"/>
</g>
<g stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round">
<line x1="321" y1="284.15" x2="347" y2="295.85"/>
<line x1="321" y1="295.85" x2="347" y2="284.15"/>
</g>
<g stroke="#1565c0" stroke-width="3.4" stroke-linecap="round">
<line x1="321" y1="304.15" x2="347" y2="315.85"/>
<line x1="321" y1="315.85" x2="347" y2="304.15"/>
</g>
<text x="296" y="276" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="334" y="276" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="296" y="337" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<text x="334" y="337" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
</g>
<text x="216" y="306" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أو</text>
<g class="dg-hotspot" data-id="ia-meta2" style="cursor:pointer">
<circle cx="116" cy="300" r="52" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="66" y1="300" x2="166" y2="300" stroke="#9e9e9e" stroke-width="1" stroke-dasharray="4 3"/>
<g stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round">
<line x1="88" y1="286.4" x2="104" y2="293.6"/>
<line x1="88" y1="293.6" x2="104" y2="286.4"/>
</g>
<g stroke="#1565c0" stroke-width="3.4" stroke-linecap="round">
<line x1="88" y1="306.4" x2="104" y2="313.6"/>
<line x1="88" y1="313.6" x2="104" y2="306.4"/>
</g>
<g stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round">
<line x1="121" y1="284.15" x2="147" y2="295.85"/>
<line x1="121" y1="295.85" x2="147" y2="284.15"/>
</g>
<g stroke="#1565c0" stroke-width="3.4" stroke-linecap="round">
<line x1="121" y1="304.15" x2="147" y2="315.85"/>
<line x1="121" y1="315.85" x2="147" y2="304.15"/>
</g>
<text x="96" y="276" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<text x="134" y="276" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<text x="96" y="337" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="134" y="337" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
</g>
<text x="216" y="384" text-anchor="middle" font-size="15" font-weight="700" fill="#37474f">في الطور الاستوائي الأول</text>
<line x1="316" y1="356" x2="316" y2="398" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<line x1="116" y1="356" x2="116" y2="398" stroke="#455a64" stroke-width="2" marker-end="url(#caArr)"/>
<g class="dg-hotspot" data-id="ia-gametes" style="cursor:pointer">
<rect x="24" y="402" width="384" height="190" rx="10" fill="#ffffff" fill-opacity="0.01"/>
<circle cx="288" cy="430" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="279" y1="411" x2="279" y2="427" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<line x1="297" y1="409" x2="297" y2="427" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<text x="279" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="297" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<circle cx="344" cy="430" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="335" y1="411" x2="335" y2="427" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<line x1="353" y1="409" x2="353" y2="427" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<text x="335" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="353" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<circle cx="288" cy="488" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="279" y1="469" x2="279" y2="485" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<line x1="297" y1="467" x2="297" y2="485" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<text x="279" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<text x="297" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<circle cx="344" cy="488" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="335" y1="469" x2="335" y2="485" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<line x1="353" y1="467" x2="353" y2="485" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<text x="335" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<text x="353" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<circle cx="88" cy="430" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="79" y1="411" x2="79" y2="427" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<line x1="97" y1="409" x2="97" y2="427" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<text x="79" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<text x="97" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<circle cx="144" cy="430" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="135" y1="411" x2="135" y2="427" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<line x1="153" y1="409" x2="153" y2="427" stroke="#d32f2f" stroke-width="3.4" stroke-linecap="round"/>
<text x="135" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">D</text>
<text x="153" y="446" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">A</text>
<circle cx="88" cy="488" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="79" y1="469" x2="79" y2="485" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<line x1="97" y1="467" x2="97" y2="485" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<text x="79" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="97" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<circle cx="144" cy="488" r="27" fill="#e4e4e4" stroke="#757575" stroke-width="2"/>
<line x1="135" y1="469" x2="135" y2="485" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<line x1="153" y1="467" x2="153" y2="485" stroke="#1565c0" stroke-width="3.4" stroke-linecap="round"/>
<text x="135" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">d</text>
<text x="153" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">a</text>
<text x="216" y="465" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أو</text>
<text x="316" y="540" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">نوعان من الأمشاج</text>
<text x="116" y="540" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">نوعان من الأمشاج</text>
<text x="216" y="578" text-anchor="middle" font-size="16" font-weight="800" fill="#1b5e20">إجمالًا أربعة أنواع من الأمشاج</text>
</g>
</svg>`,
    hotspots: {
      'co-parent': { label: 'زوج من الكروموسومات المتماثلة في الخلية الأصلية', desc: 'تحتوي الخلية الأصلية على جميع الأليلات الأربعة هذه. لاحظ أن أليلَي هذَين الجينَين A و E يقعان على أحد زوجَي الكروموسومات المتماثلة، ويقع الأليلان الآخران للجينَين a و e على الكروموسوم الآخر.<br><small>كتاب الطالب — ص 52</small>' },
      'co-cross': { label: 'إذا حدث عبور', desc: 'بالمقابل يحدث العبور في بعض الخلايا، الأمر الذي يؤدي إلى تبادل مواقع الأليلات على الكروموسومات، فتصبح الأليلات على أحد الكروموسومَين A و e، وعلى الكروموسوم الآخر a و E.<br><small>كتاب الطالب — ص 52-53</small>' },
      'co-nocross': { label: 'إذا لم يحدث عبور', desc: 'لا يحدث عبور بين موقعَي هذَين الجينَين في بعض الخلايا عندما تزدوج هذه الكروموسومات أثناء الانقسام الاختزالي، وتبقى الأليلات على كروموسومها.<br><small>كتاب الطالب — ص 52</small>' },
      'co-gam-cross': { label: 'الأليلات الناتجة في الأمشاج مع عبور', desc: 'في حين سيحصل بعضها الآخر على كروماتيدات حدث فيها عبور وسيكون فيها إمّا (A و e)، أو (a و E). الأليلات A و e تشفر لقرن الاستشعار الطويل والعيون البنية. الأليلات a و E تشفر لقرن الاستشعار القصير والعيون الحمراء.<br><small>كتاب الطالب — ص 53</small>' },
      'co-gam-nocross': { label: 'الأليلات الناتجة في الأمشاج بدون عبور', desc: 'وسيحصل بعضها على كروماتيدات لم يحدث فيها عبور، لذا سيكون فيها إمّا (A و E) أو (a و e). الأليلات A و E تشفر لقرن الاستشعار الطويل والعيون الحمراء. الأليلات a و e تشفر لقرن الاستشعار القصير والعيون البنية.<br><small>كتاب الطالب — ص 53</small>' },
      'ia-parent': { label: 'خلية على وشك الانقسام', desc: 'خلية على وشك الانقسام تحتوي على زوجين من الكروموسومات. تحمل الأليلات A، a، D، d.<br><small>كتاب الطالب — ص 53</small>' },
      'ia-meta1': { label: 'الاتجاه المحتمل الأول', desc: 'في الطور الاستوائي الأول من الانقسام الاختزالي تصطف أزواج الكروموسومات المتماثلة باستقلالية عن بعضها ويوجد اتجاهان محتملان لزوجي الكروموسومات.<br><small>كتاب الطالب — ص 53</small>' },
      'ia-meta2': { label: 'الاتجاه المحتمل الثاني', desc: 'وتصطف عشوائيًا بحيث يمكن لأي كروموسوم في كل زوج أن يتّجه إلى أي قطب في الخلية، وليس لاتجاه أحد الأزواج تأثير على اتجاه أي زوج آخر.<br><small>كتاب الطالب — ص 53</small>' },
      'ia-gametes': { label: 'أربعة أنواع من الأمشاج', desc: 'ينتج من كل اتجاه في نهاية الانقسام الاختزالي الثاني نوعان من الأمشاج. وبالتالي، سيتكوّن إجمالًا أربعة أنواع من الأمشاج.<br><small>كتاب الطالب — ص 53</small>' }
    }
  },
  {
    id: 'genetic-diagram-s1',
    title: 'مخطط جيني لتزاوج أحادي الهجين',
    figure: 'مخطط جيني من كتاب الطالب',
    page: 'ص 56-57',
    obj: '2-10',
    legend: 'يمكن توضيح كل ذلك في مخطط جيني Genetic diagram، والذي يمثل طريقة معيارية للتنبؤ بما يتوقع حدوثه نتيجة للتزاوج.',
    svg: `<svg viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
</defs>
<rect width="860" height="560" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">مخطط جيني لتزاوج بين أرنبَين غير متماثلَي الأليلات</text>
<g transform="translate(-80 0)">
<g class="dg-hotspot" data-id="pheno" style="cursor:pointer">
<rect x="170" y="52" width="680" height="42" rx="10" fill="#f3f6fa" stroke="#cfd8dc"/>
<text x="742" y="79" text-anchor="middle" font-size="17" font-weight="800" fill="#0d47a1">الطراز المظهري للأبوين</text>
<text x="530" y="79" text-anchor="middle" font-size="18" font-weight="700" fill="#263238">فراء بنّي</text>
<text x="410" y="80" text-anchor="middle" font-size="20" font-weight="800" fill="#263238">×</text>
<text x="290" y="79" text-anchor="middle" font-size="18" font-weight="700" fill="#263238">فراء بنّي</text>
</g>
<g class="dg-hotspot" data-id="geno" style="cursor:pointer">
<rect x="170" y="100" width="680" height="42" rx="10" fill="#f3f6fa" stroke="#cfd8dc"/>
<text x="742" y="127" text-anchor="middle" font-size="17" font-weight="800" fill="#0d47a1">الطراز الجيني للأبوين</text>
<text x="530" y="127" text-anchor="middle" font-size="19" font-weight="800" fill="#263238">Bb</text>
<text x="290" y="127" text-anchor="middle" font-size="19" font-weight="800" fill="#263238">Bb</text>
</g>
<g class="dg-hotspot" data-id="gametes" style="cursor:pointer">
<rect x="170" y="148" width="680" height="46" rx="10" fill="#f3f6fa" stroke="#cfd8dc"/>
<text x="742" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#0d47a1">أمشاج الأبوين</text>
<circle cx="562" cy="171" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="562" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">B</text>
<text x="530" y="177" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">أو</text>
<circle cx="498" cy="171" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="498" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">b</text>
<circle cx="322" cy="171" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="322" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">B</text>
<text x="290" y="177" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">أو</text>
<circle cx="258" cy="171" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="258" y="177" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">b</text>
</g>
<text x="742" y="332" text-anchor="middle" font-size="17" font-weight="800" fill="#0d47a1">الطرز الجينية والطرز</text>
<text x="742" y="356" text-anchor="middle" font-size="17" font-weight="800" fill="#0d47a1">المظهرية للأبناء</text>
<g class="dg-hotspot" data-id="punnett" style="cursor:pointer">
<rect x="180" y="208" width="260" height="36" fill="#eceff1" stroke="#37474f" stroke-width="1.6"/>
<text x="310" y="233" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أمشاج الذكر</text>
<rect x="180" y="244" width="130" height="42" fill="#fff" stroke="#37474f" stroke-width="1.6"/>
<circle cx="245" cy="265" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="245" y="271" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">b</text>
<rect x="310" y="244" width="130" height="42" fill="#fff" stroke="#37474f" stroke-width="1.6"/>
<circle cx="375" cy="265" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="375" y="271" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">B</text>
<rect x="440" y="286" width="70" height="92" fill="#fff" stroke="#37474f" stroke-width="1.6"/>
<circle cx="475" cy="332" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="475" y="338" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">B</text>
<rect x="440" y="378" width="70" height="92" fill="#fff" stroke="#37474f" stroke-width="1.6"/>
<circle cx="475" cy="424" r="15" fill="#fff" stroke="#263238" stroke-width="1.8"/>
<text x="475" y="430" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">b</text>
<rect x="510" y="286" width="120" height="184" fill="#eceff1" stroke="#37474f" stroke-width="1.6"/>
<text x="570" y="384" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أمشاج الأنثى</text>
</g>
<g class="dg-hotspot" data-id="off-BB" style="cursor:pointer">
<rect x="310" y="286" width="130" height="92" fill="#e9d3bd" stroke="#37474f" stroke-width="1.6"/>
<text x="375" y="324" text-anchor="middle" font-size="20" font-weight="800" fill="#263238">BB</text>
<text x="375" y="356" text-anchor="middle" font-size="17" font-weight="700" fill="#263238">فراء بني</text>
</g>
<g class="dg-hotspot" data-id="off-Bb" style="cursor:pointer">
<rect x="180" y="286" width="130" height="92" fill="#e9d3bd" stroke="#37474f" stroke-width="1.6"/>
<text x="245" y="324" text-anchor="middle" font-size="20" font-weight="800" fill="#263238">Bb</text>
<text x="245" y="356" text-anchor="middle" font-size="17" font-weight="700" fill="#263238">فراء بني</text>
<rect x="310" y="378" width="130" height="92" fill="#e9d3bd" stroke="#37474f" stroke-width="1.6"/>
<text x="375" y="416" text-anchor="middle" font-size="20" font-weight="800" fill="#263238">Bb</text>
<text x="375" y="448" text-anchor="middle" font-size="17" font-weight="700" fill="#263238">فراء بني</text>
</g>
<g class="dg-hotspot" data-id="off-bb" style="cursor:pointer">
<rect x="180" y="378" width="130" height="92" fill="#ffffff" stroke="#37474f" stroke-width="1.6"/>
<text x="245" y="416" text-anchor="middle" font-size="20" font-weight="800" fill="#263238">bb</text>
<text x="245" y="448" text-anchor="middle" font-size="17" font-weight="700" fill="#263238">فراء أبيض</text>
</g>
</g>
<g class="dg-hotspot" data-id="ratio" style="cursor:pointer">
<rect x="130" y="492" width="600" height="46" rx="10" fill="#e8f5e9" stroke="#81c784"/>
<text x="430" y="522" text-anchor="middle" font-size="18" font-weight="800" fill="#1b5e20">النسبة المتوقعة للطرز المظهرية للأبناء: 3 فراء بنّي: 1 فراء أبيض</text>
</g>
</svg>`,
    hotspots: {
      'pheno': { label: 'الطراز المظهري للأبوين', desc: 'لتوقع ما يمكن حدوثه إذا جرى تزاوج بين أرنبَين غير متماثلَي الأليلات، سيكون المخطط الجيني لهذا التزاوج كما يأتي. اعرض دائمًا المخطط الجيني الكامل، بما في ذلك العناوين على الجانب الأيمن. سيبيّن ذلك بوضوح لأي شخص يشاهده ما تقوم به، وسيساعدك أيضًا في تذكر ما عملته.<br><small>كتاب الطالب — ص 57</small>' },
      'geno': { label: 'الطراز الجيني للأبوين', desc: 'الطراز الجيني Genotype: الأليلات التي توجد في الكائن الحي. غير متماثل الأليلات Heterozygous: وجود أليلَين مختلفين لجين معيّن.<br><small>كتاب الطالب — ص 55</small>' },
      'gametes': { label: 'أمشاج الأبوين', desc: 'تتمثل الخطوة الأولى بإدراك أن الانقسام الاختزالي ينتج أمشاجًا يحتوي كل منها على أليل واحد فقط، لذا سيرث الأبناء أليلًا واحدًا من كل من الأبوَين. يمكن بعد ذلك حساب احتمالات الطرز الجينية والمظهرية للأبناء.<br><small>كتاب الطالب — ص 56</small>' },
      'punnett': { label: 'مربع بانيت', desc: 'الجدول الذي ترسمه ضمن المخطط الجيني يسمّى مربع بانيت Punnett square، وهو يمثل جزءًا من المخطط الجيني، وليس مخططًا جينيًا كاملًا.<br><small>كتاب الطالب — ص 57</small>' },
      'off-BB': { label: 'الطراز الجيني BB', desc: 'متماثل الأليلات Homozygous: وجود أليلَين متطابقَين من الجين. لون فراء الأرنب ذات الطراز الجيني BB في هذا المثال هو نفسه في الأرنب ذات الطراز الجيني Bb.<br><small>كتاب الطالب — ص 55</small>' },
      'off-Bb': { label: 'الطراز الجيني Bb', desc: 'الأليل B سائد Dominant، والأليل b مُتنحٍّ Recessive. ويؤثر الأليل b فقط في الطراز المظهري عند غياب الأليل B. يتوقع منك عادة توضيح الطراز الجيني للأبناء والطراز المظهري الذي يعبّر عنه. الطريق الأسهل للقيام بذلك كتابة الطراز المظهري في مربع بانيت أسفل الطراز الجيني مباشرة.<br><small>كتاب الطالب — ص 55 و58</small>' },
      'off-bb': { label: 'الطراز الجيني bb', desc: 'مُتنحٍّ Recessive: الأليل المتنحي يؤثر فقط في الطراز المظهري في غياب الأليل السائد.<br><small>كتاب الطالب — ص 55</small>' },
      'ratio': { label: 'النسبة المتوقعة للطرز المظهرية للأبناء', desc: 'من المهم إدراك أن الطرز الجينية المتوقعة تعتمد جميعها على الاحتمال، ولا يمكن التأكد من أيّ حيوان منوي سيخصب أي بويضة. التوقع في التزاوج بين الأرنبَين غير متماثلي الأليلات الذي ورد سابقًا، سينتج صغارًا (خرانق) لون فرائها بنّي ثلاثة أضعاف الصغار (الخرانق) بلون الفراء الأبيض.<br><small>كتاب الطالب — ص 58</small>' }
    }
  },
  {
    id: 'lac-operon-s1',
    title: 'أوبرون Lac',
    figure: 'الشكل ٢-١٠',
    page: 'ص 74-75',
    obj: '2-15',
    legend: 'يتم التحكم في نسخ جميع جينات Lac التركيبية الثلاثة بواسطة المحفِّز نفسه، ويتم نسخها جميعًا في الوقت نفسه.',
    svg: `<svg viewBox="0 0 860 610" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
<marker id="lcArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="11" refX="13" refY="5.5" orient="auto">
<path d="M0,0 L14,5.5 L0,11 Z" fill="#263238"/>
</marker>
</defs>
<rect width="860" height="610" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">أوبرون Lac — التحكم في التعبير الجيني في بدائية النواة</text>
<rect x="40" y="111" width="780" height="20" fill="#fbd3e0" stroke="#d81b60" stroke-width="1.2"/>
<path d="M290 98 L290 88 L800 88 L800 98" fill="none" stroke="#37474f" stroke-width="1.6"/>
<text x="600" y="80" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">أوبرون Lac</text>
<text x="128" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#37474f">جزيء من DNA البكتيريوم</text>
<line x1="70" y1="86" x2="60" y2="108" stroke="#546e7a" stroke-width="1.4"/>
<g class="dg-hotspot" data-id="reg-gene" style="cursor:pointer">
<rect x="110" y="108" width="80" height="26" fill="#f9a825" stroke="#ad1457" stroke-width="1.4"/>
<rect x="190" y="108" width="100" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<line x1="150" y1="134" x2="150" y2="150" stroke="#546e7a" stroke-width="1.5"/>
<text x="150" y="168" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">محفز لجين منظم</text>
<line x1="240" y1="134" x2="240" y2="178" stroke="#546e7a" stroke-width="1.5"/>
<text x="240" y="196" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">جين منظم</text>
<rect x="92" y="104" width="198" height="100" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="promoter" style="cursor:pointer">
<rect x="290" y="108" width="100" height="26" fill="#ef8a6a" stroke="#ad1457" stroke-width="1.4"/>
<line x1="340" y1="134" x2="340" y2="150" stroke="#546e7a" stroke-width="1.5"/>
<text x="340" y="168" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">محفز للجينات</text>
<text x="340" y="188" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">التركيبية</text>
<rect x="290" y="104" width="100" height="92" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="operator" style="cursor:pointer">
<rect x="390" y="108" width="80" height="26" fill="#b565a7" stroke="#ad1457" stroke-width="1.4"/>
<line x1="430" y1="134" x2="430" y2="150" stroke="#546e7a" stroke-width="1.5"/>
<text x="430" y="168" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">مشغل</text>
<rect x="392" y="104" width="76" height="72" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="lacZ" style="cursor:pointer">
<rect x="470" y="108" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<text x="525" y="127" text-anchor="middle" font-size="16" font-weight="700" fill="#263238" font-style="italic">lacZ</text>
<line x1="525" y1="134" x2="545" y2="150" stroke="#546e7a" stroke-width="1.5"/>
<text x="566" y="168" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">جين بيتا (β)-جلاكتوسيديز</text>
<rect x="472" y="104" width="186" height="72" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="lacYA" style="cursor:pointer">
<rect x="580" y="108" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="690" y="108" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<text x="635" y="127" text-anchor="middle" font-size="16" font-weight="700" fill="#263238" font-style="italic">lacY</text>
<text x="745" y="127" text-anchor="middle" font-size="16" font-weight="700" fill="#263238" font-style="italic">lacA</text>
<path d="M470 196 L470 206 L800 206 L800 196" fill="none" stroke="#37474f" stroke-width="1.6"/>
<text x="635" y="228" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">جينات تركيبية</text>
<rect x="582" y="104" width="220" height="32" fill="#ffffff" fill-opacity="0.01"/>
<rect x="470" y="194" width="332" height="44" fill="#ffffff" fill-opacity="0.01"/>
</g>
<rect x="10" y="246" width="840" height="150" rx="12" fill="#fbf3f3" stroke="#e0bcbc"/>
<text x="735" y="276" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">عدم وجود لاكتوز</text>
<rect x="40" y="335" width="780" height="20" fill="#fbd3e0" stroke="#d81b60" stroke-width="1.2"/>
<rect x="110" y="332" width="80" height="26" fill="#f9a825" stroke="#ad1457" stroke-width="1.4"/>
<rect x="190" y="332" width="100" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="290" y="332" width="100" height="26" fill="#ef8a6a" stroke="#ad1457" stroke-width="1.4"/>
<rect x="390" y="332" width="80" height="26" fill="#b565a7" stroke="#ad1457" stroke-width="1.4"/>
<rect x="470" y="332" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="580" y="332" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="690" y="332" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<g class="dg-hotspot" data-id="state-off" style="cursor:pointer">
<rect x="284" y="269" width="72" height="42" rx="19" fill="#c9a66b" stroke="#7a5a22" stroke-width="2"/>
<ellipse cx="312" cy="284" rx="14" ry="8" fill="#f5ead2"/>
<line x1="244" y1="286" x2="282" y2="288" stroke="#546e7a" stroke-width="1.5"/>
<text x="170" y="292" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏RNA بوليميريز</text>
<rect x="100" y="262" width="260" height="56" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="repressor" style="cursor:pointer">
<circle cx="420" cy="325" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="440" cy="325" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="420" cy="343" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="440" cy="343" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<line x1="500" y1="296" x2="448" y2="316" stroke="#546e7a" stroke-width="1.5"/>
<text x="560" y="300" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">بروتين المثبط Lac</text>
<rect x="400" y="278" width="230" height="84" fill="#ffffff" fill-opacity="0.01"/>
</g>
<rect x="10" y="406" width="840" height="194" rx="12" fill="#f1f8f1" stroke="#b7d1b9"/>
<text x="745" y="436" text-anchor="middle" font-size="17" font-weight="800" fill="#1b5e20">وجود اللاكتوز</text>
<rect x="40" y="481" width="780" height="20" fill="#fbd3e0" stroke="#d81b60" stroke-width="1.2"/>
<rect x="110" y="478" width="80" height="26" fill="#f9a825" stroke="#ad1457" stroke-width="1.4"/>
<rect x="190" y="478" width="100" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="290" y="478" width="100" height="26" fill="#ef8a6a" stroke="#ad1457" stroke-width="1.4"/>
<rect x="390" y="478" width="80" height="26" fill="#b565a7" stroke="#ad1457" stroke-width="1.4"/>
<rect x="470" y="478" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="580" y="478" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<rect x="690" y="478" width="110" height="26" fill="#f8bbd0" stroke="#ad1457" stroke-width="1.4"/>
<g class="dg-hotspot" data-id="state-on" style="cursor:pointer">
<rect x="304" y="451" width="72" height="42" rx="19" fill="#c9a66b" stroke="#7a5a22" stroke-width="2"/>
<ellipse cx="332" cy="466" rx="14" ry="8" fill="#f5ead2"/>
<line x1="392" y1="456" x2="640" y2="456" stroke="#263238" stroke-width="2.4" marker-end="url(#lcArr)"/>
<text x="516" y="444" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">عملية النسخ</text>
<text x="190" y="452" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏RNA بوليميريز</text>
<line x1="262" y1="448" x2="302" y2="458" stroke="#546e7a" stroke-width="1.5"/>
<rect x="110" y="424" width="540" height="50" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="lactose" style="cursor:pointer">
<circle cx="420" cy="539" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="440" cy="539" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="420" cy="557" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="440" cy="557" r="11" fill="#e8a898" stroke="#a1503c" stroke-width="1.6"/>
<circle cx="407" cy="534" r="5" fill="#1e88e5" stroke="#0d47a1" stroke-width="1"/>
<circle cx="453" cy="534" r="5" fill="#1e88e5" stroke="#0d47a1" stroke-width="1"/>
<circle cx="407" cy="562" r="5" fill="#1e88e5" stroke="#0d47a1" stroke-width="1"/>
<circle cx="453" cy="562" r="5" fill="#1e88e5" stroke="#0d47a1" stroke-width="1"/>
<circle cx="300" cy="548" r="6" fill="#1e88e5" stroke="#0d47a1" stroke-width="1"/>
<text x="250" y="554" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">لاكتوز</text>
<line x1="310" y1="548" x2="398" y2="548" stroke="#546e7a" stroke-width="1.4"/>
<rect x="210" y="514" width="270" height="70" fill="#ffffff" fill-opacity="0.01"/>
</g>
</svg>`,
    hotspots: {
      'reg-gene': { label: 'الجين المنظم', desc: 'الجين المنظم يشفر لإنتاج البروتين المثبط Lac. يشفر الجين المنظم لبروتين يسمى المثبط Repressor.<br><small>كتاب الطالب — ص 74</small>' },
      'promoter': { label: 'محفز للجينات التركيبية', desc: 'يتم التحكم في نسخ جميع جينات Lac التركيبية الثلاثة بواسطة المحفِّز نفسه، ويتم نسخها جميعًا في الوقت نفسه. أوبرون Operon: وحدة وظيفية في عملية النسخ، وهي مجموعة من الجينات يتحكم بها المحفز نفسه.<br><small>كتاب الطالب — ص 74</small>' },
      'operator': { label: 'مشغل', desc: 'يرتبط المُثبط بمنطقة المشغل، قريبًا من جين بيتا(β) - جلاكتوسيديز. لأن المثبط مرتبط بمنطقة المشغل، فإن ذلك يمنع ارتباط RNA بوليميريز بمنطقة المحفز.<br><small>كتاب الطالب — ص 74</small>' },
      'lacZ': { label: 'جين بيتا (β)-جلاكتوسيديز', desc: 'يختلف عدد جزيئات إنزيم بيتا(β)-جلاكتوسيديز الموجودة في بكتيريوم الإشريكية القولونية Escherichia coli، مع اختلاف تركيز اللاكتوز في الوسط الذي تنمو فيه. وتتغير كمية الإنزيم عن طريق تشغيل أو إيقاف نسخ جين بيتا(β)-جلاكتوسيديز.<br><small>كتاب الطالب — ص 74</small>' },
      'lacYA': { label: 'جينات تركيبية', desc: 'تتيح هذه الآلية للبكتيريوم إنتاج بيتا(β) - جلاكتوسيديز والإنزيمين الآخرين (اللذان يُشفر لهما من الجينين lacY و lacA) وبكميات متساوية فقط عندما يوجد اللاكتوز في الوسط المحيط. وهي بذلك تتجنب إهدار الطاقة والمواد.<br><small>كتاب الطالب — ص 75</small>' },
      'state-off': { label: 'RNA بوليميريز عند عدم وجود لاكتوز', desc: 'لا يستطيع RNA بوليميريز الارتباط بـ DNA عندما يرتبط البروتين المثبط Lac بجين المشغل. نتيجة لذلك، لن تنسخ الجينات التركيبية الثلاثة.<br><small>كتاب الطالب — ص 74-75</small>' },
      'repressor': { label: 'بروتين المثبط Lac', desc: 'للبروتين المُثبط موقعا ارتباط، حيث يمكن أن يرتبط البروتين المُثبط مع DNA عند موقع، ومع اللاكتوز عند موقع آخر. ويتغير شكل البروتين المثبط عندما يرتبط اللاكتوز بموقعه، لذلك يغلق موقع ربط DNA.<br><small>كتاب الطالب — ص 75</small>' },
      'state-on': { label: 'عملية النسخ عند وجود اللاكتوز', desc: 'يرتبط اللاكتوز عند وجوده بالبروتين المثبط Lac والذي ينفصل عن DNA، بما يسمح لإنزيم RNA بوليميريز بالارتباط ونسخ جينات الأوبرون التركيبية.<br><small>كتاب الطالب — ص 74</small>' },
      'lactose': { label: 'لاكتوز', desc: 'تمتص البكتيريوم اللاكتوز. يرتبط اللاكتوز مع البروتين المُثبط، الأمر الذي يؤدي إلى تغيير شكله ومنعه من الارتباط مع DNA في موقع التشغيل. لم يعد النسخ مُثبطًا، الأمر الذي يؤدي إلى إنتاج mRNA من الجينات التركيبية الثلاثة.<br><small>كتاب الطالب — ص 75</small>' }
    }
  },
  {
    id: 'transcription-factors-s1',
    title: 'عوامل النسخ في حقيقية النواة',
    figure: 'الشكل ٢-١١',
    page: 'ص 75-76',
    obj: '2-16',
    legend: 'عامل النسخ بروتين يرتبط مع DNA ويؤثر سواء بنسخ الجين أو عدم نسخه.',
    svg: `<svg viewBox="0 0 860 520" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
<style>.s1dg text{unicode-bidi:plaintext;}</style>
<defs>
<marker id="tfArrR" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="11" refX="13" refY="5.5" orient="auto">
<path d="M0,0 L14,5.5 L0,11 Z" fill="#d32f2f"/>
</marker>
<marker id="tfArrK" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="11" refX="13" refY="5.5" orient="auto">
<path d="M0,0 L14,5.5 L0,11 Z" fill="#263238"/>
</marker>
<linearGradient id="tfDna" x1="0" x2="1">
<stop offset="0" stop-color="#c8e6c9"/>
<stop offset="0.12" stop-color="#1b7a3a"/>
<stop offset="0.88" stop-color="#1b7a3a"/>
<stop offset="1" stop-color="#c8e6c9"/>
</linearGradient>
</defs>
<rect width="860" height="520" fill="#fdfdfb"/>
<text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">آلية عمل عوامل النسخ لزيادة أو تقليل معدل النسخ</text>
<rect x="10" y="48" width="840" height="222" rx="12" fill="#f4f9f4" stroke="#b7d1b9"/>
<rect x="10" y="282" width="840" height="228" rx="12" fill="#fbf3f3" stroke="#e0bcbc"/>
<rect x="40" y="176" width="780" height="28" fill="url(#tfDna)"/>
<text x="150" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">DNA</text>
<g class="dg-hotspot" data-id="act-site" style="cursor:pointer">
<rect x="240" y="173" width="110" height="34" fill="#f8c79a" stroke="#e65100" stroke-width="2.4"/>
<text x="295" y="232" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">موقع ارتباط عامل</text>
<text x="295" y="254" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">النسخ المنشط</text>
<rect x="222" y="178" width="146" height="84" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="activator" style="cursor:pointer">
<path d="M251 173 q-4 -26 16 -40 q22 -10 50 -2 q22 10 24 42 Z" fill="#9d8ec4" stroke="#4a3f7a" stroke-width="2"/>
<text x="124" y="148" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">عامل نسخ منشط</text>
<line x1="196" y1="144" x2="250" y2="150" stroke="#546e7a" stroke-width="1.5"/>
<path d="M332 134 Q400 72 470 142" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#tfArrK)"/>
<text x="400" y="90" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">يحفّز</text>
<rect x="60" y="110" width="300" height="62" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="pol-on" style="cursor:pointer">
<rect x="470" y="173" width="120" height="34" fill="#8fb1e3" stroke="#1e4f9c" stroke-width="2.4"/>
<rect x="488" y="124" width="84" height="52" rx="24" fill="#c9a66b" stroke="#7a5a22" stroke-width="2"/>
<ellipse cx="522" cy="142" rx="18" ry="10" fill="#f5ead2"/>
<text x="590" y="100" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏RNA بوليميريز</text>
<line x1="560" y1="106" x2="545" y2="124" stroke="#546e7a" stroke-width="1.5"/>
<text x="530" y="232" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">محفز</text>
<rect x="466" y="120" width="128" height="120" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="transcription" style="cursor:pointer">
<line x1="606" y1="152" x2="790" y2="152" stroke="#d32f2f" stroke-width="4" marker-end="url(#tfArrR)"/>
<text x="710" y="136" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">نسخ الجين</text>
<rect x="604" y="114" width="196" height="54" fill="#ffffff" fill-opacity="0.01"/>
</g>
<rect x="40" y="404" width="780" height="28" fill="url(#tfDna)"/>
<text x="150" y="424" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">DNA</text>
<g class="dg-hotspot" data-id="rep-site" style="cursor:pointer">
<rect x="240" y="401" width="110" height="34" fill="#f8c79a" stroke="#e65100" stroke-width="2.4"/>
<text x="295" y="460" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">موقع ارتباط عامل</text>
<text x="295" y="482" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">النسخ المثبط</text>
<rect x="222" y="406" width="146" height="84" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="repressor-tf" style="cursor:pointer">
<path d="M251 401 q-4 -26 16 -40 q22 -10 50 -2 q22 10 24 42 Z" fill="#c62828" stroke="#7f1010" stroke-width="2"/>
<text x="130" y="376" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">عامل نسخ مثبط</text>
<line x1="194" y1="372" x2="250" y2="378" stroke="#546e7a" stroke-width="1.5"/>
<path d="M332 362 Q400 300 462 392" fill="none" stroke="#263238" stroke-width="2"/>
<rect x="457" y="390" width="10" height="10" fill="#263238"/>
<text x="400" y="318" text-anchor="middle" font-size="17" font-weight="800" fill="#263238">يمنع</text>
<rect x="60" y="338" width="300" height="62" fill="#ffffff" fill-opacity="0.01"/>
</g>
<g class="dg-hotspot" data-id="pol-off" style="cursor:pointer">
<rect x="470" y="401" width="120" height="34" fill="#8fb1e3" stroke="#1e4f9c" stroke-width="2.4"/>
<rect x="488" y="308" width="84" height="52" rx="24" fill="#c9a66b" stroke="#7a5a22" stroke-width="2"/>
<ellipse cx="522" cy="326" rx="18" ry="10" fill="#f5ead2"/>
<text x="680" y="340" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">‏RNA بوليميريز</text>
<line x1="576" y1="334" x2="618" y2="334" stroke="#546e7a" stroke-width="1.5"/>
<text x="530" y="460" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">محفز</text>
<rect x="482" y="304" width="270" height="164" fill="#ffffff" fill-opacity="0.01"/>
</g>
</svg>`,
    hotspots: {
      'activator': { label: 'عامل نسخ منشط', desc: 'ارتباط عامل النسخ المنشط بموقع ارتباطه في DNA يحفز نسخ الجين (التعبير الجيني) عند طريق تحفيز ارتباط RNA بوليميريز بالمحفز.<br><small>كتاب الطالب — ص 76</small>' },
      'act-site': { label: 'موقع ارتباط عامل النسخ المنشط', desc: 'ترتبط بعض عوامل النسخ بمنطقة المحفِّز أو بمناطق أخرى في DNA، للسماح بنسخ جين معيّن أو منع ذلك. وبالتالي وجودها يزيد أو يقلل من معدل نسخ الجين.<br><small>كتاب الطالب — ص 75</small>' },
      'pol-on': { label: 'RNA بوليميريز والمحفز', desc: 'عامل النسخ بروتين يرتبط مع DNA ويؤثر سواء بنسخ الجين أو عدم نسخه. وتعمل عوامل النسخ على التأكد من أنه تمّ التعبير عن الجينات في الخلية الصحيحة في الوقت الصحيح وبالمقدار الصحيح.<br><small>كتاب الطالب — ص 75</small>' },
      'transcription': { label: 'نسخ الجين', desc: 'قد تساعد عوامل النسخ على تنظيم التعبير الجيني عن طريق تنشيط التسلسل الصحيح لجينات مختلفة (على سبيل المثال عند التطور من زيجوت إلى جنين)، والاستجابة للمنبهات البيئية للتحكم في التعبير الجيني، والاستجابة للهرمونات مثل التستوستيرون وتنظم نمو الخلايا وموتها.<br><small>كتاب الطالب — ص 76</small>' },
      'repressor-tf': { label: 'عامل نسخ مثبط', desc: 'ارتباط عامل النسخ المثبط بموقع ارتباطه في DNA يثبط نسخ الجين (التعبير الجيني) عن طريق منع ارتباط RNA بوليميريز بالمحفز.<br><small>كتاب الطالب — ص 76</small>' },
      'rep-site': { label: 'موقع ارتباط عامل النسخ المثبط', desc: 'يوجد العديد من الأنواع المختلفة من عوامل النسخ، لها تأثيرات مختلفة. وربما يكون العلماء قد اكتشفوا نسبة صغيرة منها حتى الآن، ولا يزالون يبحثون للعثور على أنواع جديدة للمزيد من فهم كيفية عملها.<br><small>كتاب الطالب — ص 76</small>' },
      'pol-off': { label: 'RNA بوليميريز لا يرتبط بالمحفز', desc: 'لا تحتوي حقيقية النواة على أوبرونات مثل بدائية النواة، وبدلًا من ذلك، تتحكم عوامل النسخ Transcription factors في تعبير الجينات في حقيقية النواة. في الإنسان، على سبيل المثال، يعتقد أن 10% تقريبًا من الجينات تشفر لبروتينات تعمل كعوامل نسخ.<br><small>كتاب الطالب — ص 75</small>' }
    }
  }
];

unitDiagrams[3] = [
  {
    id: "recombinant-dna-s1",
    title: "إنتاج الإنسولين من البكتيريا المعدلة جينيًّا",
    figure: "الشكل ٣-٥",
    page: "ص 90-93",
    obj: "3-4",
    legend: "تنسخ البكتيريا الجين الجديد إلى mRNA لتستخدمه في الترجمة لتكوين بروتين يسمّى البروتين معاد التركيب.",
    svg: `<svg viewBox="0 0 860 640" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="u3aArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#455a64"/></marker></defs>
      <rect x="0" y="0" width="860" height="640" rx="0" fill="#fdfdfb" stroke="none" stroke-width="1.5"/>
      <text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">‏إنتاج الإنسولين من البكتيريا المعدلة جينيًّا</text>
      <text x="645" y="62" text-anchor="middle" font-size="17" font-weight="800" fill="#00695c">‏عزل جين إنسولين إنسان</text><text x="215" y="62" text-anchor="middle" font-size="17" font-weight="800" fill="#00695c">‏تحضير الناقل</text>
      <line x1="645" y1="142" x2="645" y2="156" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><line x1="645" y1="234" x2="645" y2="248" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><line x1="215" y1="142" x2="215" y2="248" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><line x1="110" y1="318" x2="110" y2="352" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><path d="M470,318 C470,346 150,316 150,352" fill="none" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><line x1="203" y1="409" x2="227" y2="409" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><line x1="418" y1="409" x2="442" y2="409" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><line x1="633" y1="409" x2="657" y2="409" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/><path d="M752,464 C752,535 690,560 634,560" fill="none" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
      <text x="672" y="342" text-anchor="middle" font-size="16" font-weight="800" fill="#00695c">‏تكوين DNA معاد التركيب وتحديده ونسخه</text><text x="745" y="604" text-anchor="middle" font-size="17" font-weight="800" fill="#00695c">‏التصنيع</text>
      <g class="dg-hotspot" data-id="beta-mrna">
        <rect x="450" y="72" width="390" height="70" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <ellipse cx="800" cy="100" rx="24" ry="18" fill="#fff3c4" stroke="#b8860b" stroke-width="2"/><circle cx="800" cy="100" r="7" fill="#9575cd"/>
        <ellipse cx="750" cy="110" rx="22" ry="17" fill="#fff3c4" stroke="#b8860b" stroke-width="2"/><circle cx="750" cy="110" r="7" fill="#9575cd"/>
        <path d="M556,94 q8,-9 16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0" fill="none" stroke="#c2185b" stroke-width="3" />
        <line x1="724" y1="104" x2="708" y2="97" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
        <text x="630" y="130" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏mRNA من خلايا بيتا (β)</text>
      </g>
      <g class="dg-hotspot" data-id="cdna">
        <rect x="450" y="158" width="390" height="76" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="742" y="181" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنزيم ترانسكريبتيز العكسي</text>
        <line x1="690" y1="198" x2="800" y2="198" stroke="#5e35b1" stroke-width="3" />
        <line x1="695" y1="198" x2="695" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="705" y1="198" x2="705" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="715" y1="198" x2="715" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="725" y1="198" x2="725" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="735" y1="198" x2="735" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="745" y1="198" x2="745" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="755" y1="198" x2="755" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="765" y1="198" x2="765" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="775" y1="198" x2="775" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="785" y1="198" x2="785" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <line x1="795" y1="198" x2="795" y2="191" stroke="#5e35b1" stroke-width="1.5" />
        <text x="742" y="224" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏شريط cDNA مفرد</text>
        <line x1="684" y1="198" x2="614" y2="198" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
        <text x="548" y="181" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏DNA بوليميريز</text>
        <line x1="495" y1="193" x2="605" y2="193" stroke="#5e35b1" stroke-width="3" /><line x1="495" y1="203" x2="605" y2="203" stroke="#d81b60" stroke-width="3" /><line x1="499" y1="193" x2="499" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="507" y1="193" x2="507" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="515" y1="193" x2="515" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="523" y1="193" x2="523" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="531" y1="193" x2="531" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="539" y1="193" x2="539" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="547" y1="193" x2="547" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="555" y1="193" x2="555" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="563" y1="193" x2="563" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="571" y1="193" x2="571" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="579" y1="193" x2="579" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="587" y1="193" x2="587" y2="203" stroke="#78909c" stroke-width="1.5" /><line x1="595" y1="193" x2="595" y2="203" stroke="#78909c" stroke-width="1.5" />
        <text x="548" y="224" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">cDNA</text>
      </g>
      <g class="dg-hotspot" data-id="cut-cdna">
        <rect x="450" y="250" width="390" height="68" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="765" y="283" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنزيم قطع</text>
        <line x1="722" y1="278" x2="654" y2="278" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
        <line x1="500" y1="273" x2="630" y2="273" stroke="#5e35b1" stroke-width="3" /><line x1="512" y1="283" x2="642" y2="283" stroke="#d81b60" stroke-width="3" /><line x1="516" y1="273" x2="516" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="524" y1="273" x2="524" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="532" y1="273" x2="532" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="540" y1="273" x2="540" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="548" y1="273" x2="548" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="556" y1="273" x2="556" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="564" y1="273" x2="564" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="572" y1="273" x2="572" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="580" y1="273" x2="580" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="588" y1="273" x2="588" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="596" y1="273" x2="596" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="604" y1="273" x2="604" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="612" y1="273" x2="612" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="620" y1="273" x2="620" y2="283" stroke="#78909c" stroke-width="1.5" />
        <text x="570" y="308" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏نهايات لاصقة</text>
      </g>
      <g class="dg-hotspot" data-id="plasmids">
        <rect x="20" y="72" width="390" height="70" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="342" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بكتيريا</text>
        <rect x="300" y="99" width="85" height="32" rx="16" fill="#f6d7bd" stroke="#a0522d" stroke-width="2"/><path d="M312,115 q5,-7 10,0 t10,0 t10,0" fill="none" stroke="#8d6e63" stroke-width="2" />
        <line x1="294" y1="115" x2="250" y2="115" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
        <circle cx="218" cy="107" r="22" fill="#ffffff" stroke="#1565c0" stroke-width="7" stroke-dasharray="2.5 2.5"/><circle cx="218" cy="107" r="25.5" fill="none" stroke="#1565c0" stroke-width="1.5"/><circle cx="218" cy="107" r="18.5" fill="none" stroke="#1565c0" stroke-width="1.5"/>
        <text x="110" y="103" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بلازميدات</text>
        <text x="110" y="126" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏من البكتيريا</text>
      </g>
      <g class="dg-hotspot" data-id="cut-plasmid">
        <rect x="20" y="250" width="390" height="68" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="335" y="283" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنزيم قطع</text>
        <line x1="294" y1="278" x2="266" y2="278" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
        <line x1="150" y1="273" x2="245" y2="273" stroke="#1565c0" stroke-width="3" /><line x1="162" y1="283" x2="257" y2="283" stroke="#1565c0" stroke-width="3" /><line x1="166" y1="273" x2="166" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="174" y1="273" x2="174" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="182" y1="273" x2="182" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="190" y1="273" x2="190" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="198" y1="273" x2="198" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="206" y1="273" x2="206" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="214" y1="273" x2="214" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="222" y1="273" x2="222" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="230" y1="273" x2="230" y2="283" stroke="#78909c" stroke-width="1.5" /><line x1="238" y1="273" x2="238" y2="283" stroke="#78909c" stroke-width="1.5" />
        <text x="82" y="284" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏نهايات لاصقة</text>
      </g>
      <g class="dg-hotspot" data-id="ligase">
        <rect x="14" y="354" width="187" height="110" rx="10" fill="#f3f8f1" stroke="#b0bec5" stroke-width="1.5"/>
        <circle cx="107" cy="386" r="22" fill="#ffffff" stroke="#1565c0" stroke-width="7" stroke-dasharray="2.5 2.5"/><circle cx="107" cy="386" r="25.5" fill="none" stroke="#1565c0" stroke-width="1.5"/><circle cx="107" cy="386" r="18.5" fill="none" stroke="#1565c0" stroke-width="1.5"/>
        <path d="M114.5,365.3 A22,22 0 0 1 127.7,393.5" fill="none" stroke="#d81b60" stroke-width="8" />
        <text x="107" y="434" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنزيم DNA لايجيز</text>
        <text x="107" y="456" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بلازميد معاد التركيب</text>
      </g>
      <g class="dg-hotspot" data-id="insert">
        <rect x="229" y="354" width="187" height="110" rx="10" fill="#f3f8f1" stroke="#b0bec5" stroke-width="1.5"/>
        <rect x="270" y="368" width="104" height="38" rx="19" fill="#f6d7bd" stroke="#a0522d" stroke-width="2"/><path d="M282,387 q5,-7 10,0 t10,0 t10,0" fill="none" stroke="#8d6e63" stroke-width="2" />
        <circle cx="350" cy="387" r="10" fill="#fff" stroke="#1565c0" stroke-width="3"/><path d="M353.4,377.6 A10,10 0 0 1 359.4,390.4" fill="none" stroke="#d81b60" stroke-width="4" />
        <text x="322" y="434" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إدخال البلازميد معاد</text>
        <text x="322" y="456" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏التركيب في البكتيريا</text>
      </g>
      <g class="dg-hotspot" data-id="identify">
        <rect x="444" y="354" width="187" height="110" rx="10" fill="#f3f8f1" stroke="#b0bec5" stroke-width="1.5"/>
        <ellipse cx="537" cy="392" rx="52" ry="15" fill="#cfd8dc" stroke="#607d8b" stroke-width="2"/><ellipse cx="537" cy="384" rx="52" ry="15" fill="#eaf4fb" stroke="#607d8b" stroke-width="2"/>
        <circle cx="515" cy="383" r="4" fill="#8d6e63"/><circle cx="540" cy="388" r="4" fill="#2e7d32"/><circle cx="560" cy="381" r="4" fill="#8d6e63"/><circle cx="530" cy="378" r="4" fill="#2e7d32"/>
        <text x="537" y="434" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏تحديد البكتيريا</text>
        <text x="537" y="456" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏المعدلة جينيًّا</text>
      </g>
      <g class="dg-hotspot" data-id="clone">
        <rect x="659" y="354" width="187" height="110" rx="10" fill="#f3f8f1" stroke="#b0bec5" stroke-width="1.5"/>
        <g transform="rotate(0 695 375)"><rect x="678" y="368" width="34" height="14" rx="7" fill="#f6d7bd" stroke="#a0522d" stroke-width="1.8"/><circle cx="702" cy="375" r="3" fill="none" stroke="#d81b60" stroke-width="1.6"/></g>
        <g transform="rotate(25 747 371)"><rect x="730" y="364" width="34" height="14" rx="7" fill="#f6d7bd" stroke="#a0522d" stroke-width="1.8"/><circle cx="754" cy="371" r="3" fill="none" stroke="#d81b60" stroke-width="1.6"/></g>
        <g transform="rotate(-20 807 377)"><rect x="790" y="370" width="34" height="14" rx="7" fill="#f6d7bd" stroke="#a0522d" stroke-width="1.8"/><circle cx="814" cy="377" r="3" fill="none" stroke="#d81b60" stroke-width="1.6"/></g>
        <g transform="rotate(-15 707 397)"><rect x="690" y="390" width="34" height="14" rx="7" fill="#f6d7bd" stroke="#a0522d" stroke-width="1.8"/><circle cx="714" cy="397" r="3" fill="none" stroke="#d81b60" stroke-width="1.6"/></g>
        <g transform="rotate(10 762 395)"><rect x="745" y="388" width="34" height="14" rx="7" fill="#f6d7bd" stroke="#a0522d" stroke-width="1.8"/><circle cx="769" cy="395" r="3" fill="none" stroke="#d81b60" stroke-width="1.6"/></g>
        <g transform="rotate(30 812 399)"><rect x="795" y="392" width="34" height="14" rx="7" fill="#f6d7bd" stroke="#a0522d" stroke-width="1.8"/><circle cx="819" cy="399" r="3" fill="none" stroke="#d81b60" stroke-width="1.6"/></g>
        <text x="752" y="434" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏العديد من البكتيريا</text>
        <text x="752" y="456" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏المعدلة جينيًّا</text>
      </g>
      <g class="dg-hotspot" data-id="manufacture">
        <rect x="30" y="486" width="602" height="146" rx="10" fill="#fff8ee" stroke="#b0bec5" stroke-width="1.5"/>
        <rect x="470" y="508" width="100" height="96" rx="12" fill="#cfd8dc" stroke="#546e7a" stroke-width="2.5"/>
        <rect x="480" y="530" width="80" height="66" rx="6" fill="#e3f2fd" stroke="#90a4ae" stroke-width="1.5"/>
        <line x1="520" y1="496" x2="520" y2="586" stroke="#546e7a" stroke-width="3" />
        <rect x="500" y="548" width="40" height="8" rx="2" fill="#90a4ae" stroke="#546e7a" stroke-width="1.5"/>
        <rect x="500" y="574" width="40" height="8" rx="2" fill="#90a4ae" stroke="#546e7a" stroke-width="1.5"/>
        <path d="M470,520 L452,520 L452,506" fill="none" stroke="#546e7a" stroke-width="3" />
        <path d="M570,520 L588,520 L588,506" fill="none" stroke="#546e7a" stroke-width="3" />
        <text x="520" y="625" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏جهاز تخمير</text>
        <line x1="462" y1="562" x2="196" y2="562" stroke="#455a64" stroke-width="2" marker-end="url(#u3aArr)"/>
        <text x="330" y="548" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏استخلاص وتنقية الإنسولين</text>
        <rect x="134" y="512" width="32" height="10" rx="3" fill="#e8a87c" stroke="#a0522d" stroke-width="1.5"/>
        <rect x="138" y="522" width="24" height="16" rx="2" fill="#ffffff" stroke="#607d8b" stroke-width="1.5"/>
        <rect x="120" y="538" width="60" height="62" rx="7" fill="#ffffff" stroke="#607d8b" stroke-width="2"/>
        <rect x="124" y="560" width="52" height="36" rx="4" fill="#eceff1" stroke="none" stroke-width="1.5"/>
        <text x="150" y="625" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنسولين إنسان معاد التركيب</text>
      </g>
    </svg>`,
    hotspots: {
      "beta-mrna": { label: "mRNA من خلايا بيتا (β)", desc: "واجه العلماء مشكلات في تحديد موقع الجين الذي يشفر لإنسولين الإنسان وعزله عن بقية DNA في خلية الإنسان. لذا، وبدلًا من قطع الجين من الكروموسوم المرتبط به، استخلص العلماء mRNA الإنسولين من خلايا بيتا (β) البنكرياسية. وهذه هي الخلايا الوحيدة التي تعبّر عن جين الإنسولين وتحتوي على كمية كبيرة من mRNA للإنسولين.<br><small>كتاب الطالب — ص 92</small>" },
      "cdna": { label: "تكوين cDNA", desc: "اُستُخدِم mRNA كقالب للنسخ العكسي لتكوين شريط DNA مفرد. ثم استُخدِمت جزيئات DNA المفردة كقالب لإنزيم DNA بوليميريز لتكوين DNA مزدوج. وبهذه الطريقة حصل مهندسو الجينات على جينات إنسولين يمكن إدخالها في البلازميدات لتعديل بكتيريوم الأشريكية القولونية.<br><small>كتاب الطالب — ص 92</small>" },
      "cut-cdna": { label: "قطع cDNA بإنزيم قطع", desc: "يؤخذ mRNA من خلايا بيتا (β) ويستخدم لتكوين cDNA بمساعدة إنزيم ترانسكريبتيز العكسي. ثم يقطع تاركًا نهايات لاصقة.<br><small>كتاب الطالب — ص 93</small>" },
      "plasmids": { label: "بلازميدات من البكتيريا", desc: "توجد البلازميدات طبيعيًا في البكتيريا، والتي غالبًا ما تحتوي على جينات مقاومة للمضادات الحيوية. ويمكن تبادلها بين البكتيريا من النوع نفسه، وحتى بين البكتيريا من أنواع مختلفة. فإذا أدخل مهندس جيني قطعة من DNA في بلازميد، يمكن استخدام هذا البلازميد لنقل DNA إلى خلية البكتيريا.<br><small>كتاب الطالب — ص 90</small>" },
      "cut-plasmid": { label: "قطع البلازميدات بإنزيم القطع نفسه", desc: "تقطع البلازميدات من البكتيريا بإنزيم القطع نفسه الذي استخدم لقطع cDNA لتكوين نهايات لاصقة.<br><small>كتاب الطالب — ص 93</small>" },
      "ligase": { label: "إنزيم DNA لايجيز", desc: "يربط إنزيم DNA لايجيز العمود الفقري سكر- فوسفات في DNA لتكوين بلازميد معاد التركيب.<br><small>كتاب الطالب — ص 93</small>" },
      "insert": { label: "إدخال البلازميد معاد التركيب في البكتيريا", desc: "تتمثل الخطوة التالية للعملية في جعل البكتيريا تمتص البلازميدات. توضع البكتيريا والبلازميدات أولًا في محلول يوجد فيه تركيز عالٍ من أيونات الكالسيوم، ثم يبرد المزيج ويُعرض لصدمة حرارية؛ فيزيد ذلك من احتمال عبور البلازميدات عبر غشاء سطح خلية البكتيريا. نسبة قليلة من البكتيريا، ربما 1%، تمتص البلازميدات معادة التركيب، فيقال إنها عُدّلت Transformed.<br><small>كتاب الطالب — ص 91</small>" },
      "identify": { label: "تحديد البكتيريا المعدلة جينيًّا", desc: "من المهم تحديد البكتيريا التي عُدّلت بنجاح ليمكن استخدامها في تكوين البروتين المشفر من الجين. كان هذا الأمر يتم سابقًا عن طريق نشر البكتيريا على صفائح آجار Agar تحتوي كل منها على مضاد حيوي. وقد تراجع الاهتمام بهذه التقنية، واستبدلت بطرائق أبسط لتحديد البكتيريا المعدلة باستخدام العلامات الجينية.<br><small>كتاب الطالب — ص 91</small>" },
      "clone": { label: "العديد من البكتيريا المعدلة جينيًّا", desc: "بكتيريا تنمو في وسط مناسب وتتضاعف البلازميدات لذا تنتج العديد من البكتيريا المعدلة جينيًّا. ينسخ DNA بوليميريز في البكتيريا البلازميدات، ثم تنقسم البكتيريا بالانشطار الثنائي، بحيث تحتوي كل خلية ناتجة على عدة نسخ من البلازميد. يعرف إنتاج عدة نسخ من البلازميد معاد التركيب باسم الاستنساخ الجيني Gene cloning.<br><small>كتاب الطالب — ص 91 و93</small>" },
      "manufacture": { label: "التصنيع", desc: "البكتيريا المعدلة جينيًّا التي تحتوي على جين الإنسولين قادرة على إنتاج الإنسولين. تنمّى هذه البكتيريا الآن على نطاق صناعي واسع في أجهزة تخمير كبيرة. يستخلص الإنسولين من البكتيريا.<br><small>كتاب الطالب — ص 93</small>" },
    }
  },
  {
    id: "restriction-ligase-s1",
    title: "إنزيمات القطع وإدخال جين في بلازميد",
    figure: "الشكلان ٣-١ و ٣-٤",
    page: "ص 86-91",
    obj: "3-4",
    legend: "يُستخدم إنزيم القطع لفتح DNA البلازميد الحلقي. ويجب أن يُستخدم الإنزيم نفسه في قطع الجين المطلوب، لتصبح النهايات اللاصقة لكل من الجين و DNA البلازميد مكملة لبعضها.",
    svg: `<svg viewBox="0 0 860 620" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="u3bArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#455a64"/></marker><marker id="u3bArrp" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#c2185b"/></marker></defs>
      <rect x="0" y="0" width="860" height="620" rx="0" fill="#fdfdfb" stroke="none" stroke-width="1.5"/>
      <text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">‏إنزيمات القطع وإنزيم DNA لايجيز</text>
      <text x="300" y="66" text-anchor="middle" font-size="17" font-weight="800" fill="#00695c">‏إنزيم القطع BamHI يقطع DNA بشكل متعرج</text>
      <g class="dg-hotspot" data-id="enzyme">
        <path d="M560,142 C553,100 618,90 660,98 C712,88 764,106 754,152 C768,192 722,218 672,208 C632,222 568,206 560,142 Z" fill="#dcd9a8" stroke="#9e9a5c" stroke-width="2"/>
        <text x="762" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنزيم القطع BamHI</text>
        <line x1="745" y1="90" x2="722" y2="108" stroke="#455a64" stroke-width="1.8" />
      </g>
      <line x1="470" y1="132" x2="838" y2="132" stroke="#d81b60" stroke-width="4" /><line x1="470" y1="176" x2="838" y2="176" stroke="#5e35b1" stroke-width="4" /><line x1="478" y1="132" x2="478" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="491" y1="132" x2="491" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="504" y1="132" x2="504" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="517" y1="132" x2="517" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="530" y1="132" x2="530" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="543" y1="132" x2="543" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="556" y1="132" x2="556" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="569" y1="132" x2="569" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="582" y1="132" x2="582" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="478" y1="176" x2="478" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="491" y1="176" x2="491" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="504" y1="176" x2="504" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="517" y1="176" x2="517" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="530" y1="176" x2="530" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="543" y1="176" x2="543" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="556" y1="176" x2="556" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="569" y1="176" x2="569" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="582" y1="176" x2="582" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="732" y1="132" x2="732" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="745" y1="132" x2="745" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="758" y1="132" x2="758" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="771" y1="132" x2="771" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="784" y1="132" x2="784" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="797" y1="132" x2="797" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="810" y1="132" x2="810" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="823" y1="132" x2="823" y2="141" stroke="#d81b60" stroke-width="2" /><line x1="732" y1="176" x2="732" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="745" y1="176" x2="745" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="758" y1="176" x2="758" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="771" y1="176" x2="771" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="784" y1="176" x2="784" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="797" y1="176" x2="797" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="810" y1="176" x2="810" y2="167" stroke="#5e35b1" stroke-width="2" /><line x1="823" y1="176" x2="823" y2="167" stroke="#5e35b1" stroke-width="2" /><text x="808" y="214" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2d3a">DNA</text><line x1="808" y1="198" x2="808" y2="180" stroke="#455a64" stroke-width="1.8" />
      <g class="dg-hotspot" data-id="site">
        <rect x="588" y="137" width="134" height="37" rx="6" fill="#fffde7" stroke="#f9a825" stroke-width="1.5" stroke-dasharray="5 3"/>
        <text x="600" y="152" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text><text x="622" y="152" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text><text x="644" y="152" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">A</text><text x="666" y="152" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">T</text><text x="688" y="152" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text><text x="710" y="152" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text>
        <text x="600" y="170" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text><text x="622" y="170" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text><text x="644" y="170" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">T</text><text x="666" y="170" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">A</text><text x="688" y="170" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text><text x="710" y="170" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text>
        <line x1="655" y1="220" x2="655" y2="176" stroke="#455a64" stroke-width="1.8" />
        <rect x="605" y="220" width="100" height="26" rx="8" fill="#fffde7" stroke="#f9a825" stroke-width="1.5"/>
        <text x="655" y="239" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏موقع قطع</text>
      </g>
      <line x1="458" y1="158" x2="436" y2="158" stroke="#455a64" stroke-width="2" marker-end="url(#u3bArr)"/>
      <g class="dg-hotspot" data-id="sticky">
        <rect x="20" y="78" width="410" height="166" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <line x1="225" y1="98" x2="420" y2="98" stroke="#d81b60" stroke-width="4" />
        <line x1="314" y1="142" x2="420" y2="142" stroke="#5e35b1" stroke-width="4" />
        <line x1="347" y1="98" x2="347" y2="107" stroke="#d81b60" stroke-width="2" /><line x1="361" y1="98" x2="361" y2="107" stroke="#d81b60" stroke-width="2" /><line x1="375" y1="98" x2="375" y2="107" stroke="#d81b60" stroke-width="2" /><line x1="389" y1="98" x2="389" y2="107" stroke="#d81b60" stroke-width="2" /><line x1="403" y1="98" x2="403" y2="107" stroke="#d81b60" stroke-width="2" /><line x1="417" y1="98" x2="417" y2="107" stroke="#d81b60" stroke-width="2" />
        <line x1="347" y1="142" x2="347" y2="133" stroke="#5e35b1" stroke-width="2" /><line x1="361" y1="142" x2="361" y2="133" stroke="#5e35b1" stroke-width="2" /><line x1="375" y1="142" x2="375" y2="133" stroke="#5e35b1" stroke-width="2" /><line x1="389" y1="142" x2="389" y2="133" stroke="#5e35b1" stroke-width="2" /><line x1="403" y1="142" x2="403" y2="133" stroke="#5e35b1" stroke-width="2" /><line x1="417" y1="142" x2="417" y2="133" stroke="#5e35b1" stroke-width="2" />
        <text x="237" y="118" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text><text x="259" y="118" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">A</text><text x="281" y="118" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">T</text><text x="303" y="118" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text><text x="325" y="118" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text>
        <text x="325" y="136" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text>
        <line x1="30" y1="180" x2="146" y2="180" stroke="#d81b60" stroke-width="4" />
        <line x1="30" y1="224" x2="235" y2="224" stroke="#5e35b1" stroke-width="4" />
        <line x1="37" y1="180" x2="37" y2="189" stroke="#d81b60" stroke-width="2" /><line x1="51" y1="180" x2="51" y2="189" stroke="#d81b60" stroke-width="2" /><line x1="65" y1="180" x2="65" y2="189" stroke="#d81b60" stroke-width="2" /><line x1="79" y1="180" x2="79" y2="189" stroke="#d81b60" stroke-width="2" /><line x1="93" y1="180" x2="93" y2="189" stroke="#d81b60" stroke-width="2" /><line x1="107" y1="180" x2="107" y2="189" stroke="#d81b60" stroke-width="2" /><line x1="121" y1="180" x2="121" y2="189" stroke="#d81b60" stroke-width="2" />
        <line x1="37" y1="224" x2="37" y2="215" stroke="#5e35b1" stroke-width="2" /><line x1="51" y1="224" x2="51" y2="215" stroke="#5e35b1" stroke-width="2" /><line x1="65" y1="224" x2="65" y2="215" stroke="#5e35b1" stroke-width="2" /><line x1="79" y1="224" x2="79" y2="215" stroke="#5e35b1" stroke-width="2" /><line x1="93" y1="224" x2="93" y2="215" stroke="#5e35b1" stroke-width="2" /><line x1="107" y1="224" x2="107" y2="215" stroke="#5e35b1" stroke-width="2" /><line x1="121" y1="224" x2="121" y2="215" stroke="#5e35b1" stroke-width="2" />
        <text x="135" y="200" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text>
        <text x="135" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text><text x="157" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">C</text><text x="179" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">T</text><text x="201" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">A</text><text x="223" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#1f2d3a">G</text>
        <text x="332" y="192" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2d3a">‏نهايات لاصقة</text>
        <line x1="312" y1="175" x2="284" y2="124" stroke="#455a64" stroke-width="1.8" />
        <line x1="278" y1="190" x2="236" y2="208" stroke="#455a64" stroke-width="1.8" />
      </g>
      <line x1="20" y1="256" x2="840" y2="256" stroke="#cfd8dc" stroke-width="1.5" stroke-dasharray="6 5"/>
      <text x="240" y="290" text-anchor="middle" font-size="17" font-weight="800" fill="#00695c">‏إدخال جين إنسان في البلازميد البكتيري pBR322</text>
      <g class="dg-hotspot" data-id="gene">
        <rect x="448" y="270" width="398" height="112" rx="10" fill="#f6f9fc" stroke="#cfd8dc" stroke-width="1.5"/>
        <line x1="560" y1="286" x2="760" y2="286" stroke="#1e88e5" stroke-width="3" /><line x1="560" y1="296" x2="760" y2="296" stroke="#1e88e5" stroke-width="3" /><line x1="564" y1="286" x2="564" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="572" y1="286" x2="572" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="580" y1="286" x2="580" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="588" y1="286" x2="588" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="596" y1="286" x2="596" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="604" y1="286" x2="604" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="612" y1="286" x2="612" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="620" y1="286" x2="620" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="628" y1="286" x2="628" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="636" y1="286" x2="636" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="644" y1="286" x2="644" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="652" y1="286" x2="652" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="660" y1="286" x2="660" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="668" y1="286" x2="668" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="676" y1="286" x2="676" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="684" y1="286" x2="684" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="692" y1="286" x2="692" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="700" y1="286" x2="700" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="708" y1="286" x2="708" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="716" y1="286" x2="716" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="724" y1="286" x2="724" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="732" y1="286" x2="732" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="740" y1="286" x2="740" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="748" y1="286" x2="748" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="756" y1="286" x2="756" y2="296" stroke="#78909c" stroke-width="1.5" /><line x1="620" y1="286" x2="700" y2="286" stroke="#7cb342" stroke-width="5" /><line x1="620" y1="296" x2="700" y2="296" stroke="#7cb342" stroke-width="5" />
        <text x="500" y="297" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏جين إنسان</text>
        <line x1="650" y1="304" x2="632" y2="342" stroke="#c2185b" stroke-width="2.2" marker-end="url(#u3bArrp)"/>
        <text x="748" y="330" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏معالجة بـ BamHI</text>
        <line x1="570" y1="352" x2="660" y2="352" stroke="#1e88e5" stroke-width="3" /><line x1="580" y1="362" x2="670" y2="362" stroke="#1e88e5" stroke-width="3" /><line x1="584" y1="352" x2="584" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="592" y1="352" x2="592" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="600" y1="352" x2="600" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="608" y1="352" x2="608" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="616" y1="352" x2="616" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="624" y1="352" x2="624" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="632" y1="352" x2="632" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="640" y1="352" x2="640" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="648" y1="352" x2="648" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="656" y1="352" x2="656" y2="362" stroke="#78909c" stroke-width="1.5" /><line x1="590" y1="352" x2="640" y2="352" stroke="#7cb342" stroke-width="5" /><line x1="600" y1="362" x2="650" y2="362" stroke="#7cb342" stroke-width="5" />
        <text x="765" y="364" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏DNA بنهايات لاصقة</text>
      </g>
      <g class="dg-hotspot" data-id="plasmid">
        <rect x="14" y="396" width="198" height="100" rx="10" fill="#f6f9fc" stroke="#cfd8dc" stroke-width="1.5"/>
        <text x="60" y="432" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بكتيريا</text>
        <rect x="22" y="442" width="76" height="28" rx="14" fill="#ef9a9a" stroke="#a0522d" stroke-width="2"/><path d="M34,456 q5,-7 10,0 t10,0 t10,0" fill="none" stroke="#8d6e63" stroke-width="2" />
        <line x1="102" y1="456" x2="132" y2="456" stroke="#c2185b" stroke-width="2.2" marker-end="url(#u3bArrp)"/>
        <circle cx="170" cy="458" r="26" fill="#ffffff" stroke="#6a1b9a" stroke-width="7" stroke-dasharray="2.5 2.5"/><circle cx="170" cy="458" r="29.5" fill="none" stroke="#6a1b9a" stroke-width="1.5"/><circle cx="170" cy="458" r="22.5" fill="none" stroke="#6a1b9a" stroke-width="1.5"/>
        <text x="150" y="418" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بلازميد pBR322</text>
      </g>
      <line x1="216" y1="458" x2="258" y2="458" stroke="#c2185b" stroke-width="2.2" marker-end="url(#u3bArrp)"/>
      <g class="dg-hotspot" data-id="open">
        <rect x="262" y="396" width="138" height="100" rx="10" fill="#f6f9fc" stroke="#cfd8dc" stroke-width="1.5"/>
        <text x="331" y="418" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏معالجة بـ BamHI</text>
        <path d="M354.0,470.2 A26,26 0 1 1 354.0,445.8" fill="none" stroke="#6a1b9a" stroke-width="7" stroke-dasharray="2.5 2.5"/>
        <path d="M357.0,471.8 A29.5,29.5 0 1 1 355.2,441.1" fill="none" stroke="#6a1b9a" stroke-width="1.5" />
        <path d="M349.4,470.9 A22.5,22.5 0 1 1 350.9,447.4" fill="none" stroke="#6a1b9a" stroke-width="1.5" />
      </g>
      <line x1="404" y1="458" x2="428" y2="458" stroke="#c2185b" stroke-width="2.2" marker-end="url(#u3bArrp)"/>
      <g class="dg-hotspot" data-id="pairing">
        <rect x="432" y="412" width="276" height="88" rx="10" fill="#f6f9fc" stroke="#cfd8dc" stroke-width="1.5"/>
        <circle cx="474" cy="458" r="32" fill="#ffffff" stroke="#6a1b9a" stroke-width="7" stroke-dasharray="2.5 2.5"/><circle cx="474" cy="458" r="35.5" fill="none" stroke="#6a1b9a" stroke-width="1.5"/><circle cx="474" cy="458" r="28.5" fill="none" stroke="#6a1b9a" stroke-width="1.5"/>
        <path d="M483.9,427.6 A32,32 0 0 1 502.3,473.0" fill="none" stroke="#ffffff" stroke-width="10" />
        <path d="M487.0,428.8 A32,32 0 0 1 503.7,470.0" fill="none" stroke="#7cb342" stroke-width="8" />
        <path d="M483.9,427.6 A32,32 0 0 1 485.5,428.1" fill="none" stroke="#1e88e5" stroke-width="8" />
        <path d="M503.0,471.5 A32,32 0 0 1 502.3,473.0" fill="none" stroke="#1e88e5" stroke-width="8" />
        <text x="612" y="464" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏ازدواج القواعد المكملة</text>
      </g>
      <path d="M600,384 C600,404 545,400 508,428" fill="none" stroke="#c2185b" stroke-width="2.2" marker-end="url(#u3bArrp)"/>
      <g class="dg-hotspot" data-id="dna-ligase">
        <rect x="262" y="510" width="216" height="32" rx="10" fill="#fff3e0" stroke="#fb8c00" stroke-width="1.5"/>
        <text x="370" y="532" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏معالجة بإنزيم DNA لايجيز</text>
        <line x1="488" y1="494" x2="516" y2="532" stroke="#c2185b" stroke-width="2.2" marker-end="url(#u3bArrp)"/>
      </g>
      <g class="dg-hotspot" data-id="recombinant">
        <rect x="500" y="524" width="346" height="88" rx="10" fill="#f3f8f1" stroke="#a5c99a" stroke-width="1.5"/>
        <circle cx="545" cy="568" r="30" fill="#ffffff" stroke="#6a1b9a" stroke-width="7" stroke-dasharray="2.5 2.5"/><circle cx="545" cy="568" r="33.5" fill="none" stroke="#6a1b9a" stroke-width="1.5"/><circle cx="545" cy="568" r="26.5" fill="none" stroke="#6a1b9a" stroke-width="1.5"/>
        <path d="M554.3,539.5 A30,30 0 0 1 571.5,582.1" fill="none" stroke="#7cb342" stroke-width="8" />
        <text x="712" y="560" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2d3a">‏بلازميد معاد التركيب</text>
        <text x="712" y="586" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">‏بلازميد بكتيري مع جين بشري مضاف</text>
      </g>
    </svg>`,
    hotspots: {
      "enzyme": { label: "إنزيم القطع BamHI", desc: "إنزيمات القطع إندونيوكلييز Restriction endonuclease enzymes: إنزيمات مشتقة أصلًا من البكتيريا، تقطع في أماكن محددة داخل جزيء DNA وليس في نهايته.<br><small>كتاب الطالب — ص 87</small>" },
      "site": { label: "موقع قطع", desc: "يستهدف كل إنزيم موقع قطع Restriction site، وهو تتابع محدّد من أربع إلى ست قواعد. على سبيل المثال، إنزيم القطع المسمّى BamHI، يقطع DNA الفيروسي عند التتابع GGATCC على الشريط 5′ إلى 3′ والتتابع المكمل CCTAGG على الشريط 3′ إلى 5′. للعديد من مواقع القطع تتابعات متناظرة Palindromic sequences (يكون التتابع نفسه عندما يقرأ من كلا الاتجاهين).<br><small>كتاب الطالب — ص 87</small>" },
      "sticky": { label: "نهايات لاصقة", desc: "يمكن أن يقطع إنزيم القطع بطريقة مستقيمة عبر العمود الفقري سكر- فوسفات لتكوين نهايات مستقيمة، أو بطريقة متعرّجة لتكوين «نهايات لاصقة»، تاركًا أجزاء قصيرة من قواعد غير مزدوجة. ويمكن عند هذه النهايات اللاصقة تكوين روابط هيدروجينية مع تتابع القواعد المكملة على أجزاء أخرى من DNA المقطوع.<br><small>كتاب الطالب — ص 87</small>" },
      "gene": { label: "جين إنسان", desc: "يجب أن يُستخدم الإنزيم نفسه في قطع الجين المطلوب، لتصبح النهايات اللاصقة لكل من الجين و DNA البلازميد مكملة لبعضها. إذا استُخدم إنزيم قطع يعطي نهايات مستقيمة، فسيحتاج نهايات لاصقة ترتبط بكل من الجين و DNA البلازميد.<br><small>كتاب الطالب — ص 90</small>" },
      "plasmid": { label: "بلازميد pBR322", desc: "أحد أنواع النواقل هو البلازميد Plasmid، وهي قطع حلقية صغيرة من أشرطة DNA مزدوجة. توجد البلازميدات طبيعيًا في البكتيريا، والتي غالبًا ما تحتوي على جينات مقاومة للمضادات الحيوية.<br><small>كتاب الطالب — ص 90</small>" },
      "open": { label: "معالجة بـ BamHI", desc: "يُستخدم إنزيم القطع لفتح DNA البلازميد الحلقي.<br><small>كتاب الطالب — ص 90</small>" },
      "pairing": { label: "ازدواج القواعد المكملة", desc: "تمزج البلازميدات المفتوحة وأجزاء DNA التي تحتوي على الجين المطلوب معًا، حيث ترتبط بعض النهايات اللاصقة على البلازميدات مع النهايات اللاصقة على DNA. والعديد منها ببساطة يعود إلى وضعه الطبيعي (حلقة مغلقة) من دون دمج DNA.<br><small>كتاب الطالب — ص 91</small>" },
      "dna-ligase": { label: "معالجة بإنزيم DNA لايجيز", desc: "يربط إنزيم DNA لايجيز معًا العمود الفقري سكر- فوسفات في DNA والبلازميد. حيث يقوم الإنزيم بذلك عن طريق تحفيز تكوين روابط فوسفات ثنائية الإستر، وهذا يكوّن حلقة مغلقة من أشرطة DNA المزدوجة المحتوية على الجين الجديد، فيتكون البلازميد معاد التركيب.<br><small>كتاب الطالب — ص 91</small>" },
      "recombinant": { label: "بلازميد معاد التركيب", desc: "DNA معاد التركيب (rDNA): DNA يتم تكوينه اصطناعيًا بربط قطع من DNA من كائنين حيين من النوع نفسه أو نوعَين مختلفَين أو أكثر. للتبسيط يظهر في الرسم التخطيطي أعلاه بلازميد معاد التركيب واحد فقط. في الواقع قد ينتج العديد من البلازميدات المختلفة اعتمادًا على النقاط التي يقطع فيها إنزيم القطع البلازميد و DNA الآخر.<br><small>كتاب الطالب — ص 86 و90</small>" },
    }
  },
  {
    id: "reverse-transcription-s1",
    title: "النسخ العكسي لتكوين cDNA",
    figure: "الشكل ٣-٢",
    page: "ص 88-89",
    obj: "3-4",
    legend: "النسخ العكسي من mRNA لتكوين cDNA. dNTPs هي ديوكسي نيوكليوتيد ثلاثية الفوسفات.",
    svg: `<svg viewBox="0 0 860 604" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="u3eArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#263238"/></marker></defs>
      <rect x="0" y="0" width="860" height="604" rx="0" fill="#fdfdfb" stroke="none" stroke-width="1.5"/>
      <text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">‏النسخ العكسي من mRNA لتكوين cDNA</text>
      <g class="dg-hotspot" data-id="s1">
        <rect x="12" y="50" width="836" height="102" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <circle cx="826" cy="101" r="14" fill="#0d47a1"/><text x="826" y="107" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">1</text>
        <text x="150" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إضافة بادئة والنيوكليوتيدات</text>
        <text x="150" y="119" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏الحرة (dNTPs)</text>
        <line x1="356" y1="86" x2="729" y2="86" stroke="#ec407a" stroke-width="4" />
        <text x="364" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="381" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="398" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="415" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="432" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="449" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="466" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="483" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="500" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="517" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="534" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="551" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="568" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="585" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="602" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="619" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="636" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="653" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="670" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="687" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="704" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="721" y="105" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text>
        <text x="670" y="123" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="687" y="123" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="704" y="123" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="721" y="123" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text>
        <line x1="662" y1="131" x2="729" y2="131" stroke="#00acc1" stroke-width="4" />
        <text x="773" y="138" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">‏بادئة DNA</text>
      </g>
      <g class="dg-hotspot" data-id="mrna">
        <rect x="464" y="55" width="72" height="25" rx="8" fill="#fce4ec" stroke="#ec407a" stroke-width="1.5"/>
        <text x="500" y="74" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2d3a">mRNA</text>
      </g>
      <g class="dg-hotspot" data-id="s2">
        <rect x="12" y="160" width="836" height="102" rx="10" fill="#f8f6fc" stroke="#b0bec5" stroke-width="1.5"/>
        <circle cx="826" cy="211" r="14" fill="#0d47a1"/><text x="826" y="217" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">2</text>
        <text x="150" y="205" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بناء شريط cDNA بواسطة</text>
        <text x="150" y="229" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إنزيم ترانسكريبتيز العكسي</text>
        <ellipse cx="457.5" cy="218" rx="25" ry="32" fill="#f6b93b" fill-opacity="0.8" stroke="#c88a12" stroke-width="2"/>
        <line x1="356" y1="196" x2="729" y2="196" stroke="#ec407a" stroke-width="4" />
        <text x="364" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="381" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="398" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="415" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="432" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="449" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="466" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="483" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="500" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="517" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="534" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="551" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="568" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="585" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="602" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="619" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">U</text><text x="636" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="653" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="670" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="687" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="704" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="721" y="215" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text>
        <text x="449" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="466" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="483" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="500" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="517" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="534" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="551" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="568" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="585" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="602" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="619" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="636" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="653" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="670" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="687" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="704" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="721" y="233" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text>
        <line x1="441" y1="241" x2="661" y2="241" stroke="#5e35b1" stroke-width="4" />
        <line x1="662" y1="241" x2="729" y2="241" stroke="#00acc1" stroke-width="4" />
        <line x1="421.8" y1="241" x2="374.2" y2="241" stroke="#263238" stroke-width="2.2" marker-end="url(#u3eArr)"/>
      </g>
      <g class="dg-hotspot" data-id="s3">
        <rect x="12" y="270" width="836" height="102" rx="10" fill="#f4f8fc" stroke="#b0bec5" stroke-width="1.5"/>
        <circle cx="826" cy="321" r="14" fill="#0d47a1"/><text x="826" y="327" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">3</text>
        <text x="150" y="315" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إزالة قالب mRNA</text>
        <text x="150" y="339" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بهضمه إنزيميًا</text>
        <text x="364" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="381" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="398" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="415" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="432" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="449" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="466" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="483" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="500" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="517" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="534" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="551" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="568" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="585" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="602" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="619" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="636" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="653" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="670" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="687" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="704" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="721" y="325" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text>
        <line x1="356" y1="334" x2="729" y2="334" stroke="#5e35b1" stroke-width="4" />
      </g>
      <g class="dg-hotspot" data-id="s4">
        <rect x="12" y="380" width="836" height="102" rx="10" fill="#f8f6fc" stroke="#b0bec5" stroke-width="1.5"/>
        <circle cx="826" cy="431" r="14" fill="#0d47a1"/><text x="826" y="437" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">4</text>
        <text x="150" y="425" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بناء شريط جديد من DNA</text>
        <text x="150" y="449" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بواسطة DNA بوليميريز</text>
        <ellipse cx="449" cy="438" rx="25" ry="32" fill="#f06292" fill-opacity="0.75" stroke="#ad1457" stroke-width="2"/>
        <line x1="424" y1="416" x2="729" y2="416" stroke="#e53935" stroke-width="4" />
        <text x="432" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="449" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="466" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="483" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="500" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="517" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="534" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="551" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="568" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="585" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="602" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="619" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="636" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="653" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="670" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="687" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="704" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="721" y="435" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text>
        <text x="364" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="381" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="398" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="415" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="432" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="449" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="466" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="483" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="500" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="517" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="534" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="551" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="568" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="585" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="602" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="619" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="636" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="653" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="670" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="687" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="704" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="721" y="453" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text>
        <line x1="356" y1="461" x2="729" y2="461" stroke="#5e35b1" stroke-width="4" />
        <line x1="408.2" y1="416" x2="360.6" y2="416" stroke="#263238" stroke-width="2.2" marker-end="url(#u3eArr)"/>
      </g>
      <g class="dg-hotspot" data-id="s5">
        <rect x="12" y="490" width="836" height="102" rx="10" fill="#f3f8f1" stroke="#b0bec5" stroke-width="1.5"/>
        <circle cx="826" cy="541" r="14" fill="#0d47a1"/><text x="826" y="547" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">5</text>
        <text x="150" y="535" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إضافة نهايات لاصقة</text>
        <text x="150" y="559" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏لإدخال cDNA في ناقل</text>
        <line x1="288" y1="526" x2="355" y2="526" stroke="#2e9e4f" stroke-width="4" />
        <line x1="355.5" y1="526" x2="729" y2="526" stroke="#e53935" stroke-width="4" />
        <text x="296" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text><text x="313" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text><text x="330" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text><text x="347" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text>
        <text x="364" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="381" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="398" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="415" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="432" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="449" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="466" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="483" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="500" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="517" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="534" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="551" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="568" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="585" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="602" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="619" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="636" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="653" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="670" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="687" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="704" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="721" y="545" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text>
        <text x="364" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="381" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="398" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="415" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="432" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="449" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="466" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="483" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="500" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="517" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="534" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="551" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="568" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">C</text><text x="585" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="602" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="619" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">A</text><text x="636" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">G</text><text x="653" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="670" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="687" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="704" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text><text x="721" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">T</text>
        <text x="738" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text><text x="755" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text><text x="772" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text><text x="789" y="563" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">C</text>
        <line x1="356" y1="571" x2="729.5" y2="571" stroke="#5e35b1" stroke-width="4" />
        <line x1="730" y1="571" x2="797" y2="571" stroke="#2e9e4f" stroke-width="4" />
      </g>
    </svg>`,
    hotspots: {
      "mrna": { label: "mRNA", desc: "ولتجنب استخدام DNA الكروموسومي بالإنترونات والإكسونات، يستخدم التقنيون جزيء mRNA من السيتوبلازم، كقالب لصنع DNA، وهذا أصبح ممكنًا بعد اكتشاف إنزيم ترانسكريبتيز العكسي Reverse transcriptase الذي يوجد في فيروسات RNA.<br><small>كتاب الطالب — ص 88</small>" },
      "s1": { label: "إضافة بادئة والنيوكليوتيدات الحرة", desc: "إضافة بادئة (DNA primer)، والنيوكليوتيدات الحرة (dNTPs)، وتُحتضن جميعها مع إنزيم ترانسكريبتيز العكسي.<br><small>كتاب الطالب — ص 89</small>" },
      "s2": { label: "بناء شريط cDNA", desc: "يتم بناء شريط cDNA بواسطة إنزيم ترانسكريبتيز العكسي. ويستخدم هذا الإنزيم شريط mRNA المفرد ونيوكليوتيدات DNA الحرة لتكوين شريط DNA مفرد (Single-stranded DNA).<br><small>كتاب الطالب — ص 88-89</small>" },
      "s3": { label: "إزالة قالب mRNA", desc: "إزالة قالب mRNA بهضمه إنزيميًا.<br><small>كتاب الطالب — ص 89</small>" },
      "s4": { label: "بناء شريط جديد من DNA", desc: "إضافة DNA بوليميريز و dNTPs. بناء شريط جديد من DNA بواسطة DNA بوليميريز. ثم يستخدم إنزيم DNA بوليميريز لبناء عديد نيوكليوتيد مكمل لشريط DNA، مكونًا DNA مكمل مزدوج الشريط (Double-stranded complementary DNA)، ويعبر عنه اختصارًا cDNA.<br><small>كتاب الطالب — ص 88-89</small>" },
      "s5": { label: "إضافة نهايات لاصقة", desc: "إضافة نهايات لاصقة (لونها أخضر) للشريط المفرد لإدخال cDNA في ناقل، على سبيل المثال بلازميد.<br><small>كتاب الطالب — ص 89</small>" },
    }
  },
  {
    id: "pcr-s1",
    title: "تفاعل البوليميريز المتسلسل (PCR)",
    figure: "الشكل ٣-٦",
    page: "ص 96-97",
    obj: "3-7",
    legend: "عملية يتم فيها تضخيم أجزاء معيّنة من DNA آليًا باستخدام مراحل متناوبة من فصل عديد النيوكليوتيد (تمسخ DNA) وبناء DNA الذي يحفزه إنزيم DNA بوليميريز.",
    svg: `<svg viewBox="0 0 860 580" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="u3cArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#455a64"/></marker><marker id="u3cArrr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#c62828"/></marker></defs>
      <rect x="0" y="0" width="860" height="580" rx="0" fill="#fdfdfb" stroke="none" stroke-width="1.5"/>
      <text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">‏تفاعل البوليميريز المتسلسل (PCR)</text>
      <line x1="701" y1="262" x2="679" y2="262" stroke="#455a64" stroke-width="2.2" marker-end="url(#u3cArr)"/>
      <line x1="531" y1="262" x2="509" y2="262" stroke="#455a64" stroke-width="2.2" marker-end="url(#u3cArr)"/>
      <line x1="361" y1="262" x2="339" y2="262" stroke="#455a64" stroke-width="2.2" marker-end="url(#u3cArr)"/>
      <line x1="191" y1="262" x2="169" y2="262" stroke="#455a64" stroke-width="2.2" marker-end="url(#u3cArr)"/>
      <g class="dg-hotspot" data-id="sample">
        <rect x="703" y="50" width="144" height="404" rx="10" fill="#f5f7fa" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="775" y="84" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2d3a">‏عيّنة DNA</text>
        <line x1="766" y1="140" x2="766" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="766" y1="200" x2="766" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="766" y1="320" x2="766" y2="380" stroke="#d81b60" stroke-width="4" />
        <line x1="784" y1="140" x2="784" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="784" y1="200" x2="784" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="784" y1="320" x2="784" y2="380" stroke="#d81b60" stroke-width="4" />
        <line x1="766" y1="144" x2="784" y2="144" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="152" x2="784" y2="152" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="160" x2="784" y2="160" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="168" x2="784" y2="168" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="176" x2="784" y2="176" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="184" x2="784" y2="184" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="192" x2="784" y2="192" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="200" x2="784" y2="200" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="208" x2="784" y2="208" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="216" x2="784" y2="216" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="224" x2="784" y2="224" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="232" x2="784" y2="232" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="240" x2="784" y2="240" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="248" x2="784" y2="248" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="256" x2="784" y2="256" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="264" x2="784" y2="264" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="272" x2="784" y2="272" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="280" x2="784" y2="280" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="288" x2="784" y2="288" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="296" x2="784" y2="296" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="304" x2="784" y2="304" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="312" x2="784" y2="312" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="320" x2="784" y2="320" stroke="#7986cb" stroke-width="1.6" />
        <line x1="766" y1="328" x2="784" y2="328" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="336" x2="784" y2="336" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="344" x2="784" y2="344" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="352" x2="784" y2="352" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="360" x2="784" y2="360" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="368" x2="784" y2="368" stroke="#f06292" stroke-width="1.6" />
        <line x1="766" y1="376" x2="784" y2="376" stroke="#f06292" stroke-width="1.6" />
        <text x="746" y="156" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">3′</text>
        <text x="804" y="156" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">5′</text>
        <text x="746" y="376" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">5′</text>
        <text x="804" y="376" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2d3a">3′</text>
        <rect x="767" y="388" width="16" height="10" rx="2" fill="#3949ab" stroke="none" stroke-width="1.5"/>
        <text x="775" y="418" text-anchor="middle" font-size="16" font-weight="700" fill="#283593">‏جزء DNA المراد</text>
        <text x="775" y="440" text-anchor="middle" font-size="16" font-weight="700" fill="#283593">‏تضخيمه</text>
      </g>
      <g class="dg-hotspot" data-id="denature">
        <rect x="533" y="50" width="144" height="404" rx="10" fill="#fff6d6" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="605" y="84" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2d3a">‏1. التمسخ</text>
        <text x="605" y="110" text-anchor="middle" font-size="16" font-weight="700" fill="#b71c1c">‏‎95 °C‎ تقريبًا</text>
        <line x1="580" y1="140" x2="580" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="580" y1="200" x2="580" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="580" y1="320" x2="580" y2="380" stroke="#d81b60" stroke-width="4" /><line x1="580" y1="144" x2="587" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="152" x2="587" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="160" x2="587" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="168" x2="587" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="176" x2="587" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="184" x2="587" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="192" x2="587" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="200" x2="587" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="208" x2="587" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="216" x2="587" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="224" x2="587" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="232" x2="587" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="240" x2="587" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="248" x2="587" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="256" x2="587" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="264" x2="587" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="272" x2="587" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="280" x2="587" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="288" x2="587" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="296" x2="587" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="304" x2="587" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="312" x2="587" y2="312" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="320" x2="587" y2="320" stroke="#7986cb" stroke-width="1.6" /><line x1="580" y1="328" x2="587" y2="328" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="336" x2="587" y2="336" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="344" x2="587" y2="344" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="352" x2="587" y2="352" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="360" x2="587" y2="360" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="368" x2="587" y2="368" stroke="#f06292" stroke-width="1.6" /><line x1="580" y1="376" x2="587" y2="376" stroke="#f06292" stroke-width="1.6" />
        <line x1="630" y1="140" x2="630" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="630" y1="200" x2="630" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="630" y1="320" x2="630" y2="380" stroke="#d81b60" stroke-width="4" /><line x1="630" y1="144" x2="623" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="152" x2="623" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="160" x2="623" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="168" x2="623" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="176" x2="623" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="184" x2="623" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="192" x2="623" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="200" x2="623" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="208" x2="623" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="216" x2="623" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="224" x2="623" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="232" x2="623" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="240" x2="623" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="248" x2="623" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="256" x2="623" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="264" x2="623" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="272" x2="623" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="280" x2="623" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="288" x2="623" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="296" x2="623" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="304" x2="623" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="312" x2="623" y2="312" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="320" x2="623" y2="320" stroke="#7986cb" stroke-width="1.6" /><line x1="630" y1="328" x2="623" y2="328" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="336" x2="623" y2="336" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="344" x2="623" y2="344" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="352" x2="623" y2="352" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="360" x2="623" y2="360" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="368" x2="623" y2="368" stroke="#f06292" stroke-width="1.6" /><line x1="630" y1="376" x2="623" y2="376" stroke="#f06292" stroke-width="1.6" />
        <text x="605" y="418" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏فصل الشريطين</text>
        <text x="605" y="440" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏أحدهما عن الآخر</text>
      </g>
      <g class="dg-hotspot" data-id="anneal">
        <rect x="363" y="50" width="144" height="404" rx="10" fill="#eef6fb" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="435" y="84" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2d3a">‏2. الالتصاق</text>
        <text x="435" y="110" text-anchor="middle" font-size="16" font-weight="700" fill="#b71c1c">‏‎60 °C‎ تقريبًا</text>
        <line x1="410" y1="140" x2="410" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="410" y1="200" x2="410" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="410" y1="320" x2="410" y2="380" stroke="#d81b60" stroke-width="4" /><line x1="410" y1="144" x2="417" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="152" x2="417" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="160" x2="417" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="168" x2="417" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="176" x2="417" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="184" x2="417" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="192" x2="417" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="200" x2="417" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="208" x2="417" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="216" x2="417" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="224" x2="417" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="232" x2="417" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="240" x2="417" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="248" x2="417" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="256" x2="417" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="264" x2="417" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="272" x2="417" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="280" x2="417" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="288" x2="417" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="296" x2="417" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="304" x2="417" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="312" x2="417" y2="312" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="320" x2="417" y2="320" stroke="#7986cb" stroke-width="1.6" /><line x1="410" y1="328" x2="417" y2="328" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="336" x2="417" y2="336" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="344" x2="417" y2="344" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="352" x2="417" y2="352" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="360" x2="417" y2="360" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="368" x2="417" y2="368" stroke="#f06292" stroke-width="1.6" /><line x1="410" y1="376" x2="417" y2="376" stroke="#f06292" stroke-width="1.6" />
        <line x1="460" y1="140" x2="460" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="460" y1="200" x2="460" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="460" y1="320" x2="460" y2="380" stroke="#d81b60" stroke-width="4" /><line x1="460" y1="144" x2="453" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="152" x2="453" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="160" x2="453" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="168" x2="453" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="176" x2="453" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="184" x2="453" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="192" x2="453" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="200" x2="453" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="208" x2="453" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="216" x2="453" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="224" x2="453" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="232" x2="453" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="240" x2="453" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="248" x2="453" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="256" x2="453" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="264" x2="453" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="272" x2="453" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="280" x2="453" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="288" x2="453" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="296" x2="453" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="304" x2="453" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="312" x2="453" y2="312" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="320" x2="453" y2="320" stroke="#7986cb" stroke-width="1.6" /><line x1="460" y1="328" x2="453" y2="328" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="336" x2="453" y2="336" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="344" x2="453" y2="344" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="352" x2="453" y2="352" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="360" x2="453" y2="360" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="368" x2="453" y2="368" stroke="#f06292" stroke-width="1.6" /><line x1="460" y1="376" x2="453" y2="376" stroke="#f06292" stroke-width="1.6" />
      </g>
      <g class="dg-hotspot" data-id="primer">
        <line x1="420" y1="200" x2="420" y2="236" stroke="#00acc1" stroke-width="6" />
        <line x1="450" y1="284" x2="450" y2="320" stroke="#00acc1" stroke-width="6" />
        <rect x="373" y="398" width="124" height="30" rx="9" fill="#e0f7fa" stroke="#00acc1" stroke-width="1.5"/>
        <text x="435" y="419" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏بادئة DNA</text>
      </g>
      <g class="dg-hotspot" data-id="extend">
        <rect x="193" y="50" width="144" height="404" rx="10" fill="#eef7ee" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="265" y="84" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2d3a">‏3. الإطالة</text>
        <text x="265" y="110" text-anchor="middle" font-size="16" font-weight="700" fill="#b71c1c">‏‎72 °C‎ تقريبًا</text>
        <line x1="240" y1="140" x2="240" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="240" y1="200" x2="240" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="240" y1="320" x2="240" y2="380" stroke="#d81b60" stroke-width="4" /><line x1="240" y1="144" x2="247" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="152" x2="247" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="160" x2="247" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="168" x2="247" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="176" x2="247" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="184" x2="247" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="192" x2="247" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="200" x2="247" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="208" x2="247" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="216" x2="247" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="224" x2="247" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="232" x2="247" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="240" x2="247" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="248" x2="247" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="256" x2="247" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="264" x2="247" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="272" x2="247" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="280" x2="247" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="288" x2="247" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="296" x2="247" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="304" x2="247" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="312" x2="247" y2="312" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="320" x2="247" y2="320" stroke="#7986cb" stroke-width="1.6" /><line x1="240" y1="328" x2="247" y2="328" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="336" x2="247" y2="336" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="344" x2="247" y2="344" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="352" x2="247" y2="352" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="360" x2="247" y2="360" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="368" x2="247" y2="368" stroke="#f06292" stroke-width="1.6" /><line x1="240" y1="376" x2="247" y2="376" stroke="#f06292" stroke-width="1.6" />
        <line x1="290" y1="140" x2="290" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="290" y1="200" x2="290" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="290" y1="320" x2="290" y2="380" stroke="#d81b60" stroke-width="4" /><line x1="290" y1="144" x2="283" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="152" x2="283" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="160" x2="283" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="168" x2="283" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="176" x2="283" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="184" x2="283" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="192" x2="283" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="200" x2="283" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="208" x2="283" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="216" x2="283" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="224" x2="283" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="232" x2="283" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="240" x2="283" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="248" x2="283" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="256" x2="283" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="264" x2="283" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="272" x2="283" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="280" x2="283" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="288" x2="283" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="296" x2="283" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="304" x2="283" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="312" x2="283" y2="312" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="320" x2="283" y2="320" stroke="#7986cb" stroke-width="1.6" /><line x1="290" y1="328" x2="283" y2="328" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="336" x2="283" y2="336" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="344" x2="283" y2="344" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="352" x2="283" y2="352" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="360" x2="283" y2="360" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="368" x2="283" y2="368" stroke="#f06292" stroke-width="1.6" /><line x1="290" y1="376" x2="283" y2="376" stroke="#f06292" stroke-width="1.6" />
        <line x1="250" y1="200" x2="250" y2="236" stroke="#00acc1" stroke-width="6" />
        <line x1="280" y1="284" x2="280" y2="320" stroke="#00acc1" stroke-width="6" />
        <line x1="250" y1="236" x2="250" y2="292" stroke="#3949ab" stroke-width="6" />
        <line x1="280" y1="284" x2="280" y2="246" stroke="#3949ab" stroke-width="6" />
        <line x1="250" y1="312" x2="250" y2="340" stroke="#263238" stroke-width="2" marker-end="url(#u3cArr)"/>
        <line x1="280" y1="226" x2="280" y2="196" stroke="#263238" stroke-width="2" marker-end="url(#u3cArr)"/>
      </g>
      <g class="dg-hotspot" data-id="taq">
        <ellipse cx="249" cy="298" rx="13" ry="11" fill="#c98a4b" stroke="#7a4a1e" stroke-width="1.8"/><ellipse cx="281" cy="240" rx="13" ry="11" fill="#c98a4b" stroke="#7a4a1e" stroke-width="1.8"/>
        <rect x="201" y="392" width="128" height="28" rx="9" fill="#f3e0cc" stroke="#a0672f" stroke-width="1.5"/>
        <text x="265" y="412" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏DNA بوليميريز</text>
      </g>
      <g class="dg-hotspot" data-id="dntps">
        <circle cx="265" cy="214" r="4" fill="#5c6bc0"/><circle cx="262" cy="262" r="4" fill="#5c6bc0"/><circle cx="268" cy="338" r="4" fill="#5c6bc0"/><circle cx="263" cy="358" r="4" fill="#5c6bc0"/><circle cx="267" cy="166" r="4" fill="#5c6bc0"/>
        <rect x="201" y="423" width="128" height="28" rx="9" fill="#e8eaf6" stroke="#5c6bc0" stroke-width="1.5"/>
        <text x="265" y="443" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏dNTPs حرة</text>
      </g>
      <g class="dg-hotspot" data-id="result">
        <rect x="23" y="50" width="144" height="404" rx="10" fill="#f5f7fa" stroke="#b0bec5" stroke-width="1.5"/>
        <text x="95" y="74" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2d3a">‏تم نسخ جزء DNA</text>
        <text x="95" y="96" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2d3a">‏والذي قد شكّل</text>
        <text x="95" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2d3a">‏جزيئَين من DNA</text>
        <line x1="58" y1="140" x2="58" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="58" y1="200" x2="58" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="58" y1="320" x2="58" y2="380" stroke="#d81b60" stroke-width="4" />
        <line x1="74" y1="200" x2="74" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="74" y1="320" x2="74" y2="380" stroke="#d81b60" stroke-width="4" />
        <line x1="74" y1="200" x2="74" y2="236" stroke="#00acc1" stroke-width="6" />
        <line x1="58" y1="204" x2="74" y2="204" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="212" x2="74" y2="212" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="220" x2="74" y2="220" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="228" x2="74" y2="228" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="236" x2="74" y2="236" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="244" x2="74" y2="244" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="252" x2="74" y2="252" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="260" x2="74" y2="260" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="268" x2="74" y2="268" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="276" x2="74" y2="276" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="284" x2="74" y2="284" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="292" x2="74" y2="292" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="300" x2="74" y2="300" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="308" x2="74" y2="308" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="316" x2="74" y2="316" stroke="#7986cb" stroke-width="1.6" /><line x1="58" y1="324" x2="74" y2="324" stroke="#f06292" stroke-width="1.6" /><line x1="58" y1="332" x2="74" y2="332" stroke="#f06292" stroke-width="1.6" /><line x1="58" y1="340" x2="74" y2="340" stroke="#f06292" stroke-width="1.6" /><line x1="58" y1="348" x2="74" y2="348" stroke="#f06292" stroke-width="1.6" /><line x1="58" y1="356" x2="74" y2="356" stroke="#f06292" stroke-width="1.6" /><line x1="58" y1="364" x2="74" y2="364" stroke="#f06292" stroke-width="1.6" /><line x1="58" y1="372" x2="74" y2="372" stroke="#f06292" stroke-width="1.6" />
        <line x1="132" y1="140" x2="132" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="132" y1="200" x2="132" y2="320" stroke="#3949ab" stroke-width="4" /><line x1="132" y1="320" x2="132" y2="380" stroke="#d81b60" stroke-width="4" />
        <line x1="116" y1="140" x2="116" y2="200" stroke="#d81b60" stroke-width="4" /><line x1="116" y1="200" x2="116" y2="320" stroke="#3949ab" stroke-width="4" />
        <line x1="116" y1="284" x2="116" y2="320" stroke="#00acc1" stroke-width="6" />
        <line x1="116" y1="144" x2="132" y2="144" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="152" x2="132" y2="152" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="160" x2="132" y2="160" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="168" x2="132" y2="168" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="176" x2="132" y2="176" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="184" x2="132" y2="184" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="192" x2="132" y2="192" stroke="#f06292" stroke-width="1.6" /><line x1="116" y1="200" x2="132" y2="200" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="208" x2="132" y2="208" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="216" x2="132" y2="216" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="224" x2="132" y2="224" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="232" x2="132" y2="232" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="240" x2="132" y2="240" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="248" x2="132" y2="248" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="256" x2="132" y2="256" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="264" x2="132" y2="264" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="272" x2="132" y2="272" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="280" x2="132" y2="280" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="288" x2="132" y2="288" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="296" x2="132" y2="296" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="304" x2="132" y2="304" stroke="#7986cb" stroke-width="1.6" /><line x1="116" y1="312" x2="132" y2="312" stroke="#7986cb" stroke-width="1.6" />
      </g>
      <g class="dg-hotspot" data-id="cycle">
        <path d="M95,456 L95,512 Q95,524 107,524 L593,524 Q605,524 605,512 L605,460" fill="none" stroke="#c62828" stroke-width="3" marker-end="url(#u3cArrr)"/>
        <rect x="190" y="490" width="320" height="66" rx="12" fill="#fff3e0" stroke="#c62828" stroke-width="2"/>
        <text x="350" y="517" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">‏تسخين — دورة جديدة من النسخ</text>
        <text x="350" y="543" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏تكرار الدورة من 10 إلى 12 مرة</text>
      </g>
    </svg>`,
    hotspots: {
      "sample": { label: "عيّنة DNA", desc: "يُستخدم تفاعل البوليميريز المتسلسل Polymerase chain reaction (اختصارًا PCR) تقريبًا في كل تطبيقات التقنية الجينية لتضخيم جزء معيّن من DNA. يمكن إنتاج كمّيات غير محدودة من جزء DNA من كمّية صغيرة من DNA (وإن كان جزيئًا واحدًا) وبطريقة سهلة وسريعة. المنطقة الوحيدة في العيّنة المراد تضخيمها هي تلك التي بين البادئتين (اللون الأزرق).<br><small>كتاب الطالب — ص 96</small>" },
      "denature": { label: "المرحلة الأولى: التمسخ", desc: "المرحلة الأولى التمسخ Denaturation: يتم أولًا تمسيخ DNA بتسخينه إلى 95 °C تقريبًا، الأمر الذي يكسر الروابط الهيدروجينية بين أزواج القواعد، ويفصل شريطي DNA أحدهما عن الآخر، لتبقى القواعد مكشوفة (غير مزدوجة).<br><small>كتاب الطالب — ص 97</small>" },
      "anneal": { label: "المرحلة الثانية: الالتصاق", desc: "المرحلة الثانية (الالتصاق Annealing): ترتبط البادئات مع تتابع القواعد على كلا جانبَي DNA الجاري تضخيمه عن طريق تكوين روابط هيدروجينية. تحتوي البادئات على تتابع قواعد مختلف، حيث ترتبط إحداهما بالشريط «صعودًا» وترتبط الأخرى بالشريط «نزولًا». يتطلب الارتباط بالبادئات درجة حرارة 60 °C تقريبًا.<br><small>كتاب الطالب — ص 97</small>" },
      "primer": { label: "بادئة DNA", desc: "وتتطلب العملية وجود البادئات إذ لا يمكن أن يبدأ إنزيم DNA بوليميريز بتكوين DNA بدون وجود شريط يمكن البناء عليه. تتكوّن البادئات غالبًا من 20 زوجًا من القواعد تقريبًا، ذات تتابع مكمل لتتابع القواعد على كلا جانبَي جزء DNA الجاري نسخه.<br><small>كتاب الطالب — ص 97</small>" },
      "extend": { label: "المرحلة الثالثة: الإطالة", desc: "المرحلة الثالثة (الإطالة Extension): يستخدم إنزيم DNA بوليميريز بعد ذلك dNTPs لتكوين أشرطة جديدة من DNA مقابل تلك المكشوفة. ويتطلب ذلك درجة حرارة 72 °C تقريبًا. ويتم الحصول على إنزيم DNA بوليميريز المستخدم في هذه العملية من الكائنات الحية الدقيقة التي تكيّفت للعيش في البيئات الحارة.<br><small>كتاب الطالب — ص 97</small>" },
      "taq": { label: "DNA بوليميريز (Taq بوليميريز)", desc: "Taq بوليميريز هو أول إنزيم DNA بوليميريز مستقر حراريًا يستخدم في PCR. يمثل هذا الإنزيم قيمة كبيرة لـ PCR لسببَين: الأول لأنه لا يتحطم في مرحلة التمسخ، لذا يجب ألّا نستبدله أثناء كل دورة، والثاني، له درجة حرارة مثلى عالية، الأمر الذي يعني أن درجة الحرارة لمرحلة الإطالة يجب ألّا تنخفض إلى أقل من تلك في عملية الالتصاق، ما يزيد من الكفاءة إلى أقصى حد.<br><small>كتاب الطالب — ص 97</small>" },
      "dntps": { label: "dNTPs حرة", desc: "جزيئات حرة من ديوكسي نيوكليوتيد ثلاثي الفوسفات (dNTPs)، والتي تعمل كوحدات أساسية لبناء أشرطة جديدة من DNA.<br><small>كتاب الطالب — ص 96</small>" },
      "result": { label: "تم نسخ جزء DNA", desc: "في نهاية الدورة الأولى، بعد أن يكون DNA قد تم نسخه، يسخن المزيج مرة أخرى للبدء بالدورة الثانية، والتي ينتج منها أربعة جزيئات من DNA مزدوج.<br><small>كتاب الطالب — ص 97</small>" },
      "cycle": { label: "تسخين — دورة جديدة", desc: "تسخين DNA يسبب تمسخه، والذي يبدأ دورة جديدة من النسخ متتبعًا المراحل 1 إلى 3. تكرار الدورة من 10 إلى 12 مرة ينسخ قطعة DNA عدة مرات.<br><small>كتاب الطالب — ص 96</small>" },
    }
  },
  {
    id: "gel-electrophoresis-s1",
    title: "الفصل الكهربائي الهلامي",
    figure: "الشكل ٣-٧",
    page: "ص 98-99",
    obj: "3-8",
    legend: "يحتوي خزان الفصل الكهربائي على هلام آجاروس مع عيّنات DNA في آبار. يملأ الخزان بمحلول منظم ويتصل بمصدر طاقة. ستتحرك العيّنات باتجاه القطب الموجب.",
    svg: `<svg viewBox="0 0 860 600" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="u3dArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#455a64"/></marker><marker id="u3dArrr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#e53935"/></marker><linearGradient id="u3dGel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9f0e0"/><stop offset="1" stop-color="#fbf6d2"/></linearGradient></defs>
      <rect x="0" y="0" width="860" height="600" rx="0" fill="#fdfdfb" stroke="none" stroke-width="1.5"/>
      <text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">‏الفصل الكهربائي الهلامي</text>
      <g class="dg-hotspot" data-id="buffer">
        <rect x="150" y="90" width="320" height="470" rx="8" fill="#e1f1fb" stroke="#607d8b" stroke-width="3"/>
        <text x="560" y="152" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏محلول منظم</text>
        <line x1="512" y1="147" x2="455" y2="140" stroke="#455a64" stroke-width="1.8" />
      </g>
      <g class="dg-hotspot" data-id="gel">
        <rect x="185" y="150" width="250" height="350" rx="4" fill="url(#u3dGel)" stroke="#8bc34a" stroke-width="2"/>
        <text x="72" y="302" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏هلام آجاروس</text>
        <line x1="124" y1="297" x2="186" y2="297" stroke="#455a64" stroke-width="1.8" />
      </g>
      <g class="dg-hotspot" data-id="cathode">
        <rect x="175" y="104" width="270" height="16" rx="3" fill="#263238" stroke="#000" stroke-width="1.5"/>
        <text x="462" y="120" text-anchor="middle" font-size="22" font-weight="800" fill="#1f2d3a">−</text>
        <text x="606" y="104" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏القطب السالب (ألياف كربون)</text>
        <line x1="492" y1="99" x2="472" y2="106" stroke="#455a64" stroke-width="1.8" />
      </g>
      <g class="dg-hotspot" data-id="anode">
        <rect x="175" y="530" width="270" height="16" rx="3" fill="#263238" stroke="#000" stroke-width="1.5"/>
        <text x="462" y="546" text-anchor="middle" font-size="22" font-weight="800" fill="#1f2d3a">+</text>
        <text x="572" y="550" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏القطب الموجب</text>
        <line x1="516" y1="545" x2="474" y2="540" stroke="#455a64" stroke-width="1.8" />
      </g>
      <g class="dg-hotspot" data-id="wells">
        <rect x="196" y="160" width="228" height="22" rx="4" fill="#ffffff" stroke="none" stroke-width="1.5" fill-opacity="0.35"/>
        <rect x="203" y="166" width="26" height="10" rx="2" fill="#1565c0" stroke="#0d47a1" stroke-width="1"/>
        <rect x="240.5" y="166" width="26" height="10" rx="2" fill="#1565c0" stroke="#0d47a1" stroke-width="1"/>
        <rect x="278" y="166" width="26" height="10" rx="2" fill="#1565c0" stroke="#0d47a1" stroke-width="1"/>
        <rect x="315.5" y="166" width="26" height="10" rx="2" fill="#1565c0" stroke="#0d47a1" stroke-width="1"/>
        <rect x="353" y="166" width="26" height="10" rx="2" fill="#1565c0" stroke="#0d47a1" stroke-width="1"/>
        <rect x="390.5" y="166" width="26" height="10" rx="2" fill="#1565c0" stroke="#0d47a1" stroke-width="1"/>
        <text x="582" y="194" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏آبار جرى تحميلها بعيّنات</text>
        <text x="582" y="217" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏من DNA وصبغة تَتَبُّع</text>
        <line x1="484" y1="190" x2="420" y2="174" stroke="#455a64" stroke-width="1.8" />
      </g>
      <g class="dg-hotspot" data-id="migration">
        <line x1="396" y1="215" x2="396" y2="440" stroke="#e53935" stroke-width="4" marker-end="url(#u3dArrr)"/>
        <text x="288" y="312" text-anchor="middle" font-size="16" font-weight="800" fill="#b71c1c">‏ينفصل DNA إلى قطع</text>
        <text x="288" y="336" text-anchor="middle" font-size="16" font-weight="800" fill="#b71c1c">‏مختلفة الأحجام</text>
      </g>
      <g class="dg-hotspot" data-id="power">
        <path d="M175,112 C160,112 158,90 143,88" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
        <rect x="8" y="72" width="134" height="30" rx="9" fill="#fff8e1" stroke="#f9a825" stroke-width="1.5"/>
        <text x="75" y="93" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إلى مصدر الطاقة</text>
        <path d="M175,538 C160,538 158,516 143,514" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
        <rect x="8" y="498" width="134" height="30" rx="9" fill="#fff8e1" stroke="#f9a825" stroke-width="1.5"/>
        <text x="75" y="519" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏إلى مصدر الطاقة</text>
      </g>
      <rect x="668" y="262" width="180" height="290" rx="4" fill="#e8eef7" stroke="#90a4ae" stroke-width="1.5"/><rect x="678" y="276" width="20" height="5" rx="1" fill="#90a4ae" stroke="none" stroke-width="1.5"/><rect x="706" y="276" width="20" height="5" rx="1" fill="#90a4ae" stroke="none" stroke-width="1.5"/><rect x="734" y="276" width="20" height="5" rx="1" fill="#90a4ae" stroke="none" stroke-width="1.5"/><rect x="762" y="276" width="20" height="5" rx="1" fill="#90a4ae" stroke="none" stroke-width="1.5"/><rect x="790" y="276" width="20" height="5" rx="1" fill="#90a4ae" stroke="none" stroke-width="1.5"/><rect x="818" y="276" width="20" height="5" rx="1" fill="#90a4ae" stroke="none" stroke-width="1.5"/><text x="758" y="250" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏آبار</text><line x1="748" y1="254" x2="744" y2="273" stroke="#455a64" stroke-width="1.8" /><line x1="768" y1="254" x2="772" y2="273" stroke="#455a64" stroke-width="1.8" />
      <g class="dg-hotspot" data-id="ladder">
        <rect x="674" y="290" width="28" height="256" rx="3" fill="#d3deef" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="300" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="314" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="328" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="342" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="358" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="376" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="398" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="424" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="452" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="484" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="512" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <rect x="680" y="534" width="16" height="4" rx="2" fill="#3f6fc4" stroke="none" stroke-width="1.5"/>
        <text x="700" y="578" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏سلّم DNA</text>
      </g>
      <g class="dg-hotspot" data-id="bands">
        <rect x="704" y="290" width="140" height="256" rx="3" fill="#e8eef7" stroke="none" stroke-width="1.5"/>
        <rect x="705" y="358" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="705" y="508" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="733" y="358" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="733" y="392" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="761" y="392" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="789" y="508" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="817" y="358" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <rect x="817" y="508" width="22" height="6" rx="3" fill="#1a3d8f" stroke="none" stroke-width="1.5"/>
        <text x="795" y="578" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2d3a">‏قطع DNA</text>
      </g>
    </svg>`,
    hotspots: {
      "buffer": { label: "محلول منظم", desc: "بعد تحضير الهلام (من أجاروس Agarose مثلًا)، يصبّ محلول منظم في الخزان بحيث يغطي الهلام، ليوفر pH ثابت.<br><small>كتاب الطالب — ص 99</small>" },
      "gel": { label: "هلام آجاروس", desc: "الفصل الكهربائي الهلامي Gel electrophoresis تقنية تستخدم لفصل جزيئات مختلفة. وهي تستخدم على نطاق واسع في تحليل DNA بفصل أجزاء من DNA. تتضمن هذه التقنية وضع خليط من الجزيئات في آبار Wells تُحفر في هلام وتعرَّض لمجال كهربائي.<br><small>كتاب الطالب — ص 98</small>" },
      "cathode": { label: "القطب السالب (ألياف كربون)", desc: "توصل حزمة بطاريات بأقطاب كهربائية. يكون القطب السالب في الطرف نفسه للآبار المحملة ب DNA.<br><small>كتاب الطالب — ص 99</small>" },
      "anode": { label: "القطب الموجب", desc: "الشُحنة - إن مجموعة الفوسفات في DNA ذات شحنة سالبة، لذا ستتحرك قطع DNA باتجاه القطب الموجب (+).<br><small>كتاب الطالب — ص 98</small>" },
      "wells": { label: "آبار جرى تحميلها بعيّنات من DNA وصبغة تَتَبُّع", desc: "تستخدم ماصة دقيقة Micropipette لنقل عيّنات DNA إلى جميع الآبار. تحتوي عيّنات DNA على صبغة تَتَبُّع Tracking dye. تُظهر صبغة التَتَبُّع المسافة التي تحركتها المادة في العيّنات عبر الهلام.<br><small>كتاب الطالب — ص 99</small>" },
      "migration": { label: "ينفصل DNA إلى قطع مختلفة الأحجام", desc: "الحجم - تتحرك الجزيئات الأصغر أو الأقصر عبر الهلام بشكل أسرع من الجزيئات الأكبر أو الأطول، وتتناسب المسافة التي تقطعها قطعة DNA عكسيًا مع طولها، فكلما كانت أقصر تقطع مسافة أطول عبر الهلام.<br><small>كتاب الطالب — ص 98</small>" },
      "power": { label: "إلى مصدر الطاقة", desc: "الفصل الكهربائي الهلامي Gel electrophoresis: فصل الجزيئات المشحونة (مثلًا DNA) بالحركة المتفاوتة عبر هلام في مجال كهربائي. تعتمد درجة الحركة على كتلة أجزاء DNA.<br><small>كتاب الطالب — ص 98</small>" },
      "ladder": { label: "سلّم DNA", desc: "غالبًا ما توضع عيّنة مرجعية بأطوال معروفة من قطع DNA في بئر على أحد جانبَي الهلام أو كلا الجانبَين، ويستخدم بمثابة «سلّم» DNA لتحديد أطوال قطع DNA في العيّنات الأخرى.<br><small>كتاب الطالب — ص 99</small>" },
      "bands": { label: "قطع DNA", desc: "يسكب المحلول المنظم خارجًا، وتضاف صبغة مناسبة إلى الهلام. تشطف الصبغة لتكشف عن قطع عبر الهلام التي تمثل مواقع قطع DNA. يمكن تحديد أطوال قطع DNA بمقارنتها مع «سلّم» DNA على جانب الهلام.<br><small>كتاب الطالب — ص 99</small>" },
    }
  },
];

unitDiagrams[4] = [
  {
    id: 'negative-feedback-s1',
    title: 'حلقة التحكم بالتغذية الراجعة السلبية',
    figure: 'الشكل ٤-١',
    page: 'ص 122-123',
    obj: '4-2',
    legend: 'التغذية الراجعة السلبية: عملية يؤدي فيها تغيير في بعض المتغيرات (مثلًا تركيز الجلوكوز في الدم) إلى حدوث عمليات تعيده إلى الوضع الطبيعي.',
    svg: `<svg viewBox="0 0 860 500" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs>
        <marker id="nfArr" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="12" refX="13" refY="6" orient="auto"><path d="M0,0 L15,6 L0,12 Z" fill="#1a237e"/></marker>
      </defs>
      <rect width="860" height="500" fill="#fdfdfb"/>
      <text x="430" y="42" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">حلقة التحكم بالتغذية الراجعة السلبية</text>

      <g class="dg-hotspot" data-id="receptor">
        <rect x="300" y="85" width="260" height="125" rx="6" fill="#e3f1d8" stroke="#33691e" stroke-width="2.5"/>
        <text x="430" y="122" text-anchor="middle" font-size="18" font-weight="800" fill="#1b3a0a">مستقبلات تتحسس</text>
        <text x="430" y="148" text-anchor="middle" font-size="18" font-weight="800" fill="#1b3a0a">التغيّر في العامل</text>
      </g>
      <g class="dg-hotspot" data-id="effector">
        <rect x="300" y="320" width="260" height="125" rx="6" fill="#d9def2" stroke="#283593" stroke-width="2.5"/>
        <text x="430" y="408" text-anchor="middle" font-size="18" font-weight="800" fill="#1a237e">مستجيبات تستقبل</text>
        <text x="430" y="433" text-anchor="middle" font-size="18" font-weight="800" fill="#1a237e">المعلومات من المستقبل</text>
      </g>
      <g fill="none" stroke="#1a237e" stroke-width="2.5" stroke-dasharray="3 5" stroke-linecap="round" pointer-events="none">
        <path d="M300 182 Q368 182 372 210"/>
        <path d="M560 182 Q492 182 488 210"/>
        <path d="M372 320 V338 Q372 352 392 352 H560"/>
        <path d="M488 320 V352 Q488 374 462 374 H300"/>
      </g>

      <g class="dg-hotspot" data-id="info">
        <rect x="346" y="212" width="168" height="106" fill="#ffffff" fill-opacity="0"/>
        <path d="M372 210 V316" fill="none" stroke="#1a237e" stroke-width="3" marker-end="url(#nfArr)"/>
        <path d="M488 210 V316" fill="none" stroke="#1a237e" stroke-width="3" marker-end="url(#nfArr)"/>
      </g>

      <g class="dg-hotspot" data-id="rise">
        <rect x="60" y="126" width="238" height="68" fill="#ffffff" fill-opacity="0"/>
        <text x="150" y="152" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">يرتفع العامل فوق</text>
        <text x="150" y="178" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">النقطة المرجعية</text>
        <path d="M240 182 H296" fill="none" stroke="#1a237e" stroke-width="3" marker-end="url(#nfArr)"/>
      </g>
      <g class="dg-hotspot" data-id="fall">
        <rect x="562" y="126" width="238" height="68" fill="#ffffff" fill-opacity="0"/>
        <text x="710" y="152" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">ينخفض العامل</text>
        <text x="710" y="178" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">دون النقطة المرجعية</text>
        <path d="M620 182 H564" fill="none" stroke="#1a237e" stroke-width="3" marker-end="url(#nfArr)"/>
      </g>
      <g class="dg-hotspot" data-id="lower">
        <rect x="620" y="380" width="200" height="66" fill="#ffffff" fill-opacity="0"/>
        <path d="M560 352 C660 352 712 300 712 198" fill="none" stroke="#1a237e" stroke-width="3" marker-end="url(#nfArr)"/>
        <text x="720" y="406" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">تعمل المستجيبات</text>
        <text x="720" y="432" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">لخفض العامل</text>
      </g>
      <g class="dg-hotspot" data-id="raise">
        <rect x="40" y="380" width="200" height="66" fill="#ffffff" fill-opacity="0"/>
        <path d="M300 374 C200 374 148 310 148 198" fill="none" stroke="#1a237e" stroke-width="3" marker-end="url(#nfArr)"/>
        <text x="140" y="406" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">تعمل المستجيبات</text>
        <text x="140" y="432" text-anchor="middle" font-size="18" font-weight="700" fill="#212121">لرفع العامل</text>
      </g>
    </svg>`,
    hotspots: {
      'receptor': { label: 'المستقبل', desc: 'المستقبل: خلية أو نسيج يتحسس لمنبّهات محددة ويتواصل مع مركز تحكم لتوليد نبضات كهربائية أو إرسال مرسال كيميائي. يتحسس المستقبل المنبّهات (مفردها: منبّه) الصادرة عن المتغير الذي يتم التحكم فيه. <br><small>كتاب الطالب — ص 122</small>' },
      'effector': { label: 'المستجيب', desc: 'المستجيب: نسيج أو عضو يقوم بعمل استجابة للمنبّه مثل العضلات والغدد الصماء. تشمل المستجيبات العضلات والغدد. <br><small>كتاب الطالب — ص 122</small>' },
      'info': { label: 'نقل المعلومات', desc: 'ويرسل المعلومات عبر الجهاز العصبي إلى الجهاز العصبي المركزي، الذي يحدد بعد ذلك كيفية الاستجابة عن طريق عمل المستجيب. <br><small>كتاب الطالب — ص 122</small>' },
      'rise': { label: 'النقطة المرجعية', desc: 'النقطة المرجعية: القيمة المثالية للعامل الفسيولوجي التي يتحكم فيها الجسم في الاتزان الداخلي. على سبيل المثال، تتأرجح درجة الحرارة المثالية لجسم الإنسان بين 36°C و 38°C، ويمكن أن يتأثر هذا النطاق بمجموعة متنوعة من العوامل الأخرى، مثل العمر والجنس والوقت من اليوم. <br><small>كتاب الطالب — ص 123</small>' },
      'fall': { label: 'منبّه', desc: 'منبّه (جمعها منبّهات): تغيّر في البيئة الخارجية أو الداخلية يتحسسه المستقبل وقد يسبب حدوث استجابة. <br><small>كتاب الطالب — ص 122</small>' },
      'lower': { label: 'الإجراءات التصحيحية', desc: 'تسمى أعمال المستجيبات أحيانًا الإجراءات التصحيحية، إذ يتمثل تأثيرها بتصحيح (أو عكس) التغيرات التي تم الكشف عنها. <br><small>كتاب الطالب — ص 122</small>' },
      'raise': { label: 'الإجراء التصحيحي', desc: 'الإجراء التصحيحي: استجابة أو سلسلة استجابات تعيد العامل الفسيولوجي إلى المستوى الطبيعي بحيث يتم الحفاظ على بيئة ثابتة للخلايا داخل الجسم. <br><small>كتاب الطالب — ص 122</small>' }
    }
  },
  {
    id: 'nephron-s1',
    title: 'تركيب النفرون وموضعه في الكُلية',
    figure: 'الشكل ٤-٦',
    page: 'ص 125-127',
    obj: '4-5',
    legend: 'السائل في النفرون هو الراشح من بلازما الدم، وعندما يصل القناة الجامعة يسمى البول.',
    svg: `<svg viewBox="0 0 860 630" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs>
        <marker id="npArr" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="12" refX="12" refY="6" orient="auto"><path d="M0,0 L14,6 L0,12 Z" fill="#1565c0"/></marker>
      </defs>
      <rect width="860" height="630" fill="#fdfdfb"/>
      <text x="330" y="36" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">النفرون</text>

      <!-- cortex / medulla -->
      <path d="M30 300 H645" fill="none" stroke="#d32f2f" stroke-width="2.5" stroke-dasharray="10 7"/>
      <text x="612" y="286" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">القشرة</text>
      <text x="612" y="330" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">النخاع</text>
      <path d="M655 292 V268" fill="none" stroke="#1565c0" stroke-width="5" marker-end="url(#npArr)"/>
      <path d="M655 308 V332" fill="none" stroke="#1565c0" stroke-width="5" marker-end="url(#npArr)"/>

      <!-- afferent -->
      <g class="dg-hotspot" data-id="afferent">
        <path d="M150 348 L150 262 Q150 215 190 200" fill="none" stroke="#d32f2f" stroke-width="11" stroke-linecap="round"/>
        <text x="76" y="262" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">شُرَيّن وارد</text>
        <path d="M122 257 H143" stroke="#37474f" stroke-width="1.5"/>
        <text x="112" y="378" text-anchor="middle" font-size="16" font-weight="700" fill="#b71c1c">من الشريان الكلوي</text>
      </g>
      <!-- efferent -->
      <g class="dg-hotspot" data-id="efferent">
        <path d="M194 168 Q158 150 132 114" fill="none" stroke="#d32f2f" stroke-width="7" stroke-linecap="round"/>
        <text x="70" y="104" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">شُرَيّن صادر</text>
        <rect x="20" y="82" width="130" height="40" fill="#ffffff" fill-opacity="0"/>
      </g>

      <!-- PCT -->
      <g class="dg-hotspot" data-id="pct">
        <path d="M258 185 C285 185 282 140 305 138 C332 136 330 180 312 198 C296 214 318 240 340 226 C362 212 345 150 368 140 C392 130 398 170 390 200 C384 225 372 250 372 300" fill="none" stroke="#9c7a3c" stroke-width="18" stroke-linecap="round"/>
        <path d="M258 185 C285 185 282 140 305 138 C332 136 330 180 312 198 C296 214 318 240 340 226 C362 212 345 150 368 140 C392 130 398 170 390 200 C384 225 372 250 372 300" fill="none" stroke="#f2e2b8" stroke-width="12" stroke-linecap="round"/>
        <text x="345" y="96" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4037">الأُنيبيب الملتوي القريب</text>
        <path d="M340 102 L352 136" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- DCT -->
      <g class="dg-hotspot" data-id="dct">
        <path d="M420 250 C420 215 432 170 455 150 C478 132 498 158 484 182 C472 202 492 224 510 208 C530 190 512 140 532 134 C550 130 550 165 558 190" fill="none" stroke="#9c7a3c" stroke-width="18" stroke-linecap="round"/>
        <path d="M420 250 C420 215 432 170 455 150 C478 132 498 158 484 182 C472 202 492 224 510 208 C530 190 512 140 532 134 C550 130 550 165 560 190" fill="none" stroke="#f2e2b8" stroke-width="12" stroke-linecap="round"/>
        <text x="500" y="66" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4037">الأُنيبيب الملتوي البعيد</text>
        <path d="M496 72 L478 134" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- loop -->
      <g class="dg-hotspot" data-id="loop">
        <path d="M372 300 L372 532 Q372 560 396 560 Q420 560 420 532 L420 250" fill="none" stroke="#9c7a3c" stroke-width="18"/>
        <path d="M372 298 L372 532 Q372 560 396 560 Q420 560 420 532 L420 240" fill="none" stroke="#f2e2b8" stroke-width="12"/>
        <text x="270" y="402" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4037">الطرف النازل</text>
        <text x="270" y="424" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4037">من التواء هنلي</text>
        <path d="M326 408 H361" stroke="#37474f" stroke-width="1.5"/>
        <text x="492" y="482" text-anchor="middle" font-size="15" font-weight="800" fill="#5d4037">الطرف الصاعد</text>
        <text x="492" y="503" text-anchor="middle" font-size="15" font-weight="800" fill="#5d4037">من التواء هنلي</text>
      </g>
      <!-- collecting duct -->
      <g class="dg-hotspot" data-id="duct">
        <path d="M568 112 L568 566" fill="none" stroke="#9c7a3c" stroke-width="26"/>
        <path d="M568 108 L568 570" fill="none" stroke="#f2e2b8" stroke-width="19"/>
        <path d="M549 190 H560" stroke="#f2e2b8" stroke-width="12"/>
        <text x="668" y="452" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4037">القناة الجامعة</text>
        <path d="M612 447 H583" stroke="#37474f" stroke-width="1.5"/>
        <text x="568" y="604" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4037">حوض الكُلية</text>
      </g>

      <!-- Bowman capsule -->
      <g class="dg-hotspot" data-id="bowman">
        <circle cx="215" cy="185" r="46" fill="#f2e2b8" stroke="#9c7a3c" stroke-width="4"/>
        <text x="232" y="122" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4037">محفظة بومان</text>
      </g>
      <!-- glomerulus -->
      <g class="dg-hotspot" data-id="glomerulus">
        <circle cx="215" cy="185" r="28" fill="#e53935" stroke="#b71c1c" stroke-width="2"/>
        <path d="M197 178 C205 162 222 168 214 182 C206 196 228 204 232 186 M200 196 C212 208 226 204 228 196" fill="none" stroke="#ffcdd2" stroke-width="3" stroke-linecap="round"/>
        <text x="236" y="274" text-anchor="middle" font-size="17" font-weight="800" fill="#b71c1c">كُبيبة</text>
        <path d="M230 256 L220 214" stroke="#37474f" stroke-width="1.5"/>
      </g>

      <!-- kidney inset -->
      <g class="dg-hotspot" data-id="kidney">
        <rect x="672" y="50" width="176" height="252" rx="10" fill="#ffffff" stroke="#90a4ae" stroke-width="1.5"/>
        <path d="M722 172 Q708 205 700 246" fill="none" stroke="#e6cf96" stroke-width="9" stroke-linecap="round"/>
        <path d="M762 66 C812 66 832 110 832 150 C832 195 812 236 762 236 C732 236 712 216 710 191 C709 176 732 171 732 151 C732 131 709 126 710 111 C712 86 732 66 762 66 Z" fill="#f6b0aa" stroke="#b71c1c" stroke-width="2"/>
        <path d="M762 66 C812 66 832 110 832 150 C832 195 812 236 762 236 C732 236 712 216 710 191 C709 176 732 171 732 151 C732 131 709 126 710 111 C712 86 732 66 762 66 Z" transform="translate(760 151) scale(0.68) translate(-772 -151)" fill="#e57373" stroke="none"/>
        <path d="M724 151 C734 128 762 134 768 151 C762 168 734 174 724 151 Z" fill="#f2e2b8" stroke="#9c7a3c" stroke-width="1.5"/>
        <circle cx="806" cy="104" r="5" fill="#1a237e"/>
        <path d="M806 104 C796 108 790 118 782 132 C779 138 785 141 788 135 C794 124 800 118 808 114 M812 110 L772 146" fill="none" stroke="#1a237e" stroke-width="2.5" stroke-linecap="round"/>
        <text x="760" y="268" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">مقطع في كُلية</text>
        <text x="760" y="289" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">يبيّن موضع النفرون</text>
      </g>
    </svg>`,
    hotspots: {
      'bowman': { label: 'محفظة بومان', desc: 'تكوّن إحدى نهايتَي الأُنيبيب تركيبًا على شكل كأس يسمّى محفظة بومان، تحيط بشبكة من الشعيرات الدموية تسمّى الكُبيبة. محفظة بومان: جزء النفرون الذي له شكل كوب ويحيط بكُبيبة ويجمع راشح الكُبيبة من الدم. <br><small>كتاب الطالب — ص 125</small>' },
      'glomerulus': { label: 'الكُبيبة', desc: 'الكُبيبة: مجموعة من الشعيرات الدموية داخل محفظة بومان في قشرة الكُلية. توجد كبيبات ومحافظ بومان لجميع النفرونات في قشرة الكُلية. <br><small>كتاب الطالب — ص 125</small>' },
      'afferent': { label: 'الشُرَيّن الوارد', desc: 'وتُزوّد كل كُبيبة بالدم المتدفق من فرع من الشريان الكلوي عبر الشُرَيّن الوارد. الشُرَيّن الوارد: شُرَيّن يحمل الدم إلى الشعيرات الدموية للكُبيبة. <br><small>كتاب الطالب — ص 127</small>' },
      'efferent': { label: 'الشُرَيّن الصادر', desc: 'وتنضم الشعيرات الدموية في الكُبيبة معًا مكوّنة الشُرَيّن الصادر. يتدفق الدم عبر الشُرَيّنات الصادرة إلى شبكة من الشعيرات الدموية تمتد بشكل وثيق بجوار بقية النفرون، ويتدفق الدم من هذه الشعيرات في الوُرَيّدات ليصب في فرع من الوريد الكلوي. <br><small>كتاب الطالب — ص 127</small>' },
      'pct': { label: 'الأُنيبيب الملتوي القريب', desc: 'يمتد الأُنيبيب باتجاه مركز الكُلية ليكوّن بداية منطقة ملتوية تسمّى الأُنيبيب الملتوي القريب. الأُنيبيب الملتوي القريب: جزء من النفرون يمتد من محفظة بومان إلى التواء هنلي. <br><small>كتاب الطالب — ص 125</small>' },
      'loop': { label: 'التواء هنلي', desc: 'ثم أُنيبيبًا طويلًا على شكل حرف U في النخاع يسمّى التواء هنلي. التواء هنلي: جزء من النفرون يوجد بين الأُنيبيب الملتوي القريب والأُنيبيب الملتوي البعيد. يمثل الطرف النازل الجزء الأول من الالتواء. <br><small>كتاب الطالب — ص 125 و 127</small>' },
      'dct': { label: 'الأُنيبيب الملتوي البعيد', desc: 'ويمتد الطرف الصاعد مرة أخرى إلى القشرة ليكوّن منطقة ملتوية أخرى تسمّى الأُنيبيب الملتوي البعيد، قبل أن تتصل في النهاية بـ قناة جامعة التي تؤدي إلى الأسفل عبر النخاع إلى حوض الكُلية. <br><small>كتاب الطالب — ص 127</small>' },
      'duct': { label: 'القناة الجامعة', desc: 'القناة الجامعة: أنبوبة في نخاع الكُلية تنقل البول من الأُنيبيبات الملتوية البعيدة لعدة نفرونات إلى حوض الكُلية. <br><small>كتاب الطالب — ص 127</small>' },
      'kidney': { label: 'موضع النفرون', desc: 'يبيّن مقطع في الكُلية كما يُشاهد بالمجهر الضوئي أنها مكوّنة من آلاف الأُنيبيبات تسمّى النفرونات، والعديد من الأوعية الدموية. <br><small>كتاب الطالب — ص 125</small>' }
    }
  },
  {
    id: 'ultrafiltration-s1',
    title: 'الترشيح الفائق في الكُبيبة ومحفظة بومان',
    figure: 'الشكل ٤-٨',
    page: 'ص 128-130',
    obj: '4-6',
    legend: 'توضح الأسهم كيف أن محصلة التأثير للضغط المرتفع في الشعيرة الدموية وانخفاض تركيز المواد المذابة في محفظة بومان يدفع السائل من البلازما إلى داخل تجويف المحفظة لتكوين الراشح.',
    svg: `<svg viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs>
        <marker id="ufArrB" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="14" refX="13" refY="7" orient="auto"><path d="M0,0 L16,7 L0,14 Z" fill="#283593"/></marker>
        <marker id="ufArrD" markerUnits="userSpaceOnUse" markerWidth="22" markerHeight="24" refX="16" refY="12" orient="auto"><path d="M0,0 L22,12 L0,24 Z" fill="#3e2f14"/></marker>
        <marker id="ufArrS" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="14" refY="9" orient="auto"><path d="M0,0 L18,9 L0,18 Z" fill="#3e2f14"/></marker>
        <linearGradient id="ufPlasma" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#f6ead6"/><stop offset="1" stop-color="#dba77d"/></linearGradient>
        <radialGradient id="ufRbc" cx="0.55" cy="0.45" r="0.7"><stop offset="0" stop-color="#b53a30"/><stop offset="0.45" stop-color="#e8695c"/><stop offset="1" stop-color="#d9463b"/></radialGradient>
        <clipPath id="ufClip"><rect x="40" y="112" width="780" height="318"/></clipPath>
      </defs>
      <rect width="860" height="560" fill="#fdfdfb"/>
      <text x="430" y="34" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">الترشيح الفائق</text>

      <!-- capsule lumen (filtrate) -->
      <g class="dg-hotspot" data-id="filtrate">
        <rect x="372" y="112" width="390" height="318" fill="#f3ebbd"/>
        <text x="745" y="482" text-anchor="middle" font-size="16" font-weight="800" fill="#283593">راشح الكُبيبة في تجويف</text>
        <text x="745" y="505" text-anchor="middle" font-size="16" font-weight="800" fill="#283593">محفظة بومان</text>
        <path d="M735 464 L690 392" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- plasma -->
      <g class="dg-hotspot" data-id="plasma">
        <rect x="40" y="112" width="262" height="318" fill="url(#ufPlasma)"/>
        <text x="222" y="482" text-anchor="middle" font-size="16" font-weight="800" fill="#4e342e">بلازما الدم</text>
        <path d="M225 464 L245 395" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- red blood cell -->
      <g class="dg-hotspot" data-id="rbc">
        <ellipse cx="62" cy="285" rx="150" ry="105" fill="url(#ufRbc)" stroke="#8e2a22" stroke-width="2" clip-path="url(#ufClip)"/>
        <text x="92" y="482" text-anchor="middle" font-size="16" font-weight="800" fill="#b71c1c">خلية دم حمراء</text>
        <path d="M95 464 L120 360" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- endothelium with pores -->
      <g class="dg-hotspot" data-id="endothelium">
        <rect x="298" y="112" width="34" height="318" fill="#d69f74"/>
        <rect x="302" y="112" width="26" height="66" rx="7" fill="#f4eede" stroke="#8d6e3a" stroke-width="2"/>
        <rect x="302" y="192" width="26" height="66" rx="7" fill="#f4eede" stroke="#8d6e3a" stroke-width="2"/>
        <rect x="302" y="272" width="26" height="40" rx="7" fill="#f4eede" stroke="#8d6e3a" stroke-width="2"/>
        <rect x="302" y="328" width="26" height="64" rx="7" fill="#f4eede" stroke="#8d6e3a" stroke-width="2"/>
        <rect x="302" y="406" width="26" height="24" rx="7" fill="#f4eede" stroke="#8d6e3a" stroke-width="2"/>
        <text x="352" y="482" text-anchor="middle" font-size="16" font-weight="800" fill="#4e342e">ثقب دائري في بطانة</text>
        <text x="352" y="505" text-anchor="middle" font-size="16" font-weight="800" fill="#4e342e">الشعيرة الدموية</text>
        <path d="M345 464 L316 400" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- basement membrane -->
      <g class="dg-hotspot" data-id="basement">
        <rect x="334" y="112" width="38" height="318" fill="#f8cfc4" stroke="#b5695a" stroke-width="1.5"/>
        <path d="M343 112 C339 180 347 240 342 300 C339 350 346 390 343 430 M353 112 C357 170 349 250 354 310 C357 360 351 400 353 430 M363 112 C360 190 367 260 362 330 C360 370 365 400 363 430" fill="none" stroke="#b5695a" stroke-width="1.5"/>
        <text x="482" y="482" text-anchor="middle" font-size="16" font-weight="800" fill="#8e3b2c">الغشاء</text>
        <text x="482" y="505" text-anchor="middle" font-size="16" font-weight="800" fill="#8e3b2c">القاعدي</text>
        <path d="M468 466 L358 418" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- podocyte -->
      <g class="dg-hotspot" data-id="podocyte">
        <rect x="376" y="126" width="56" height="42" rx="9" fill="#d3c08a" stroke="#6d5a2c" stroke-width="2"/>
        <rect x="376" y="202" width="56" height="38" rx="9" fill="#d3c08a" stroke="#6d5a2c" stroke-width="2"/>
        <path d="M424 112 H530 V214 Q530 242 500 242 H424 Z" fill="#d3c08a" stroke="#6d5a2c" stroke-width="2"/>
        <path d="M426 128 V166 M426 204 V238" stroke="#d3c08a" stroke-width="5"/>
        <ellipse cx="482" cy="150" rx="27" ry="24" fill="#aaa6d6" stroke="#5c5796" stroke-width="2"/>
        <rect x="376" y="350" width="56" height="34" rx="9" fill="#d3c08a" stroke="#6d5a2c" stroke-width="2"/>
        <rect x="376" y="398" width="56" height="32" rx="9" fill="#d3c08a" stroke="#6d5a2c" stroke-width="2"/>
        <rect x="424" y="350" width="52" height="80" rx="9" fill="#d3c08a" stroke="#6d5a2c" stroke-width="2"/>
        <path d="M426 352 V382 M426 400 V428" stroke="#d3c08a" stroke-width="5"/>
        <text x="592" y="482" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4a1c">خلية رجلاء في</text>
        <text x="592" y="505" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4a1c">جدار محفظة بومان</text>
        <path d="M575 464 L462 412" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- capsule epithelium -->
      <g class="dg-hotspot" data-id="epithelium">
        <rect x="762" y="112" width="58" height="318" fill="#fbf7df"/>
        <rect x="762" y="112" width="26" height="318" fill="#e0d19c" stroke="#6d5a2c" stroke-width="2"/>
        <path d="M762 190 H788 M762 270 H788 M762 350 H788" stroke="#6d5a2c" stroke-width="2"/>
        <ellipse cx="775" cy="150" rx="6" ry="20" fill="#aaa6d6" stroke="#5c5796" stroke-width="1.5"/>
        <ellipse cx="775" cy="230" rx="6" ry="20" fill="#aaa6d6" stroke="#5c5796" stroke-width="1.5"/>
        <ellipse cx="775" cy="310" rx="6" ry="20" fill="#aaa6d6" stroke="#5c5796" stroke-width="1.5"/>
        <ellipse cx="775" cy="390" rx="6" ry="20" fill="#aaa6d6" stroke="#5c5796" stroke-width="1.5"/>
        <text x="745" y="68" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4a1c">النسيج الطلائي</text>
        <text x="745" y="91" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4a1c">لمحفظة بومان</text>
        <path d="M758 97 L772 126" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <rect x="40" y="112" width="780" height="318" fill="none" stroke="#263238" stroke-width="2"/>
      <path d="M268 320 H600 Q640 320 640 360 V398" fill="none" stroke="#283593" stroke-width="4.5" marker-end="url(#ufArrB)" pointer-events="none"/>

      <!-- pressure gradient -->
      <g class="dg-hotspot" data-id="pressure">
        <path d="M250 185 H418" fill="none" stroke="#3e2f14" stroke-width="10" marker-end="url(#ufArrD)"/>
        <text x="330" y="91" text-anchor="middle" font-size="16" font-weight="800" fill="#3e2f14">منحدر الضغط</text>
        <path d="M322 97 L300 176" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <!-- solute gradient -->
      <g class="dg-hotspot" data-id="solute">
        <path d="M420 265 H268" fill="none" stroke="#3e2f14" stroke-width="6" marker-end="url(#ufArrS)"/>
        <text x="545" y="68" text-anchor="middle" font-size="16" font-weight="800" fill="#3e2f14">منحدر تركيز</text>
        <text x="545" y="91" text-anchor="middle" font-size="16" font-weight="800" fill="#3e2f14">المواد المذابة</text>
        <path d="M552 97 L412 262" stroke="#37474f" stroke-width="1.5"/>
      </g>
    </svg>`,
    hotspots: {
      'rbc': { label: 'خلية دم حمراء', desc: 'خلايا الدم الحمراء وخلايا الدم البيضاء والصفائح الدموية الكُبيبية أكبر من أن تمر عبر الثقوب في البطانة، لذا تبقى في الدم. <br><small>كتاب الطالب — ص 129</small>' },
      'plasma': { label: 'بلازما الدم', desc: 'تجعل الثقوب الموجودة في بطانة الشعيرات الدموية والفجوات بين الخلايا الرجلاء من السهل على المواد المذابة في بلازما الدم المرور من الدم إلى محفظة بومان. <br><small>كتاب الطالب — ص 129</small>' },
      'endothelium': { label: 'بطانة الشعيرة الدموية', desc: 'يُفصَل الدم في الشعيرات الدموية للكُبيبة عن تجويف محفظة بومان بطبقتَين من الخلايا وغشاء قاعدي. أول طبقة من الخلايا هي بطانة الشعيرة الدموية، وكل خلية من البطانة مثقبة بعدة آلاف من ثقوب غشائية دائرية دقيقة قطرها (60 - 80 nm) تقريبًا. <br><small>كتاب الطالب — ص 128</small>' },
      'basement': { label: 'الغشاء القاعدي', desc: 'ويوجد بعد ذلك الغشاء القاعدي، الذي يتكوّن من شبكة من ألياف الكولاجين والبروتينات السكرية. لكن الغشاء القاعدي يمنع مرور جزيئات البروتين الكبيرة عبرها. لذلك يعمل الغشاء القاعدي كمرشح. <br><small>كتاب الطالب — ص 128-129</small>' },
      'podocyte': { label: 'خلايا رجلاء', desc: 'تتكوّن الطبقة الثانية من الخلايا من خلايا طلائية تكوّن البطانة الداخلية لمحفظة بومان. تحتوي هذه الخلايا على العديد من الامتدادات الدقيقة الشبيهة بالأقدام بينها فجوات، تسمّى خلايا هذه الطبقة خلايا رجلاء. <br><small>كتاب الطالب — ص 128</small>' },
      'filtrate': { label: 'راشح الكُبيبة', desc: 'لاحظ أن راشح الكُبيبة يطابق بلازما الدم ما عدا أنه تقريبًا لا يحتوي على بروتينات البلازما. <br><small>كتاب الطالب — ص 129</small>' },
      'epithelium': { label: 'محفظة بومان', desc: 'محفظة بومان: جزء النفرون الذي له شكل كوب ويحيط بكُبيبة ويجمع راشح الكُبيبة من الدم. <br><small>كتاب الطالب — ص 125</small>' },
      'pressure': { label: 'منحدر الضغط', desc: 'يكون ضغط الدم داخل الشعيرات الدموية مرتفعًا نسبيًا، لأنه يمر في الشرينات الواردة العريضة ومن ثم ينضغط ليمر في الشرينات الصادرة الضيقة. إن الضغط المرتفع يزيد من حجم الدم، وبالتالي يزيد من جهد الماء في البلازما في الشعيرات الدموية الكُبيبية بالرغم من وجود المواد المذابة، مقارنة بالراشح (جهد ماء أقل). لذلك ينتقل الماء من الدم إلى محفظة بومان وليس العكس. <br><small>كتاب الطالب — ص 130</small>' },
      'solute': { label: 'منحدر تركيز المواد المذابة', desc: 'إن تركيز المواد المذابة في الدم في الشعيرات الدموية الكُبيبية أعلى من تركيز المواد المذابة في الراشح في محفظة بومان. ويعود ذلك إلى العدد الكبير من بروتينات البلازما الكبيرة التي لا يمكنها أن تمر عبر محفظة بومان. <br><small>كتاب الطالب — ص 130</small>' }
    }
  },
  {
    id: 'adh-s1',
    title: 'التحكم في المحتوى المائي — ADH',
    figure: 'الشكلان ٤-١٣ و ٤-١٥',
    page: 'ص 135-137',
    obj: '4-9',
    legend: 'يقلل ADH من فقد الماء عن طريق البول من خلال إعادة امتصاص الكلى لأكبر قدر ممكن من الماء.',
    svg: `<svg viewBox="0 0 860 600" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs>
        <marker id="adArr" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="11" refX="11" refY="5.5" orient="auto"><path d="M0,0 L13,5.5 L0,11 Z" fill="#212121"/></marker>
        <marker id="adArrP" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="14" refX="13" refY="7" orient="auto"><path d="M0,0 L16,7 L0,14 Z" fill="#6a1b9a"/></marker>
        <marker id="adArrW" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="13" refX="12" refY="6.5" orient="auto"><path d="M0,0 L15,6.5 L0,13 Z" fill="#1565c0"/></marker>
      </defs>
      <rect width="860" height="600" fill="#fdfdfb"/>
      <text x="430" y="34" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">التحكم في المحتوى المائي</text>

      <!-- ===== right: hypothalamus & pituitary ===== -->
      <rect x="455" y="55" width="395" height="435" fill="#dcebf8"/>
      <g class="dg-hotspot" data-id="hypothalamus">
        <path d="M455 55 H850 V170 C800 172 740 190 700 212 C680 222 650 222 630 210 C590 185 520 172 455 172 Z" fill="#d5e3a8"/>
        <text x="505" y="152" text-anchor="middle" font-size="17" font-weight="800" fill="#33521a">تحت المهاد</text>
      </g>
      <ellipse cx="555" cy="340" rx="86" ry="80" fill="#ffffff" stroke="#37474f" stroke-width="2"/>
      <text x="552" y="334" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">الغدة النخامية</text>
      <text x="552" y="357" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">الأمامية</text>
      <g class="dg-hotspot" data-id="postpit">
        <path d="M632 210 C640 240 640 255 642 270 C615 300 620 398 680 408 C740 413 760 340 735 295 C722 270 700 255 698 213 C680 222 650 222 632 210 Z" fill="#ffffff" stroke="#37474f" stroke-width="2"/>
        <text x="792" y="238" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">الغدة النخامية</text>
        <text x="792" y="261" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">الخلفية</text>
        <path d="M770 267 L728 290" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <g class="dg-hotspot" data-id="osmo">
        <path d="M540 109 C560 170 640 180 655 232 C662 270 660 300 662 336" fill="none" stroke="#212121" stroke-width="2"/>
        <path d="M605 114 C625 160 668 190 672 236 C676 280 690 310 692 340" fill="none" stroke="#212121" stroke-width="2"/>
        <circle cx="540" cy="100" r="10" fill="#ffffff" stroke="#212121" stroke-width="2"/><circle cx="540" cy="100" r="3.5" fill="#212121"/>
        <circle cx="605" cy="105" r="10" fill="#ffffff" stroke="#212121" stroke-width="2"/><circle cx="605" cy="105" r="3.5" fill="#212121"/>
        <circle cx="662" cy="338" r="4" fill="#212121"/><circle cx="692" cy="342" r="4" fill="#212121"/>
        <text x="750" y="98" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">مستقبلات أسموزية</text>
        <text x="750" y="121" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">(خلايا عصبية)</text>
        <path d="M682 96 L617 103" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <g class="dg-hotspot" data-id="adhblood">
        <path d="M668 404 C664 376 648 368 654 356 C660 346 674 351 677 364 C681 351 697 346 701 358 C705 371 692 378 690 404" fill="none" stroke="#c62828" stroke-width="4.5" stroke-linecap="round"/>
        <text x="798" y="356" text-anchor="middle" font-size="16" font-weight="800" fill="#6a1b9a">إفراز ADH</text>
        <path d="M758 351 L706 356" stroke="#37474f" stroke-width="1.5"/>
        <path d="M679 412 V440" fill="none" stroke="#6a1b9a" stroke-width="3.5" marker-end="url(#adArrP)"/>
        <text x="679" y="468" text-anchor="middle" font-size="17" font-weight="800" fill="#6a1b9a">‏ADH في الدم</text>
        <path d="M618 462 C540 468 500 430 446 300" fill="none" stroke="#6a1b9a" stroke-width="3.5" stroke-dasharray="9 6" marker-end="url(#adArrP)"/>
      </g>

      <!-- ===== left: collecting duct cell ===== -->
      <g class="dg-hotspot" data-id="lumen">
        <rect x="20" y="60" width="102" height="485" fill="#fbf3cf"/>
        <text x="70" y="98" text-anchor="middle" font-size="15" font-weight="800" fill="#5d4a1c">تجويف القناة</text>
        <text x="70" y="119" text-anchor="middle" font-size="15" font-weight="800" fill="#5d4a1c">الجامعة</text>
        <path d="M70 478 V508" fill="none" stroke="#212121" stroke-width="2.5" marker-end="url(#adArr)"/>
        <text x="70" y="534" text-anchor="middle" font-size="16" font-weight="800" fill="#5d4a1c">بول</text>
      </g>
      <rect x="120" y="60" width="172" height="485" fill="#ead9b0"/>
      <rect x="290" y="60" width="86" height="485" fill="#f5e9d6"/>
      <text x="333" y="500" text-anchor="middle" font-size="15" font-weight="700" fill="#5d4037">سائل</text>
      <text x="333" y="521" text-anchor="middle" font-size="15" font-weight="700" fill="#5d4037">نسيجي</text>
      <rect x="376" y="60" width="64" height="485" fill="#f3c4ba"/>
      <path d="M376 60 V545" stroke="#90a4ae" stroke-width="5"/>
      <text x="409" y="86" text-anchor="middle" font-size="15" font-weight="800" fill="#6a1b9a">دم مع</text>
      <text x="409" y="107" text-anchor="middle" font-size="15" font-weight="800" fill="#6a1b9a">ADH</text>
      <g fill="#8e24aa">
        <circle cx="392" cy="128" r="4"/><circle cx="410" cy="140" r="4"/><circle cx="426" cy="126" r="4"/><circle cx="398" cy="158" r="4"/><circle cx="420" cy="166" r="4"/><circle cx="404" cy="182" r="4"/><circle cx="428" cy="192" r="4"/><circle cx="392" cy="226" r="4"/><circle cx="418" cy="232" r="4"/>
      </g>
      <ellipse cx="409" cy="330" rx="21" ry="36" fill="#e15a4e" stroke="#8e2a22" stroke-width="2"/>
      <!-- cells -->
      <rect x="122" y="60" width="168" height="82" rx="12" fill="#d9c88f" stroke="#8d6e3a" stroke-width="2.5"/>
      <rect x="122" y="150" width="168" height="312" rx="14" fill="#d9c88f" stroke="#8d6e3a" stroke-width="2.5"/>
      <rect x="122" y="470" width="168" height="75" rx="12" fill="#d9c88f" stroke="#8d6e3a" stroke-width="2.5"/>
      <ellipse cx="172" cy="200" rx="25" ry="29" fill="#aaa6d6" stroke="#5c5796" stroke-width="2"/>
      <rect x="20" y="60" width="420" height="485" fill="none" stroke="#263238" stroke-width="2"/>

      <g class="dg-hotspot" data-id="s1">
        <rect x="292" y="176" width="84" height="56" fill="#ffffff" fill-opacity="0"/>
        <path d="M290 190 h-9 v8 h5 v8 h-5 v8 h9 Z" fill="#8e24aa" stroke="#4a148c" stroke-width="1.5"/>
        <path d="M372 204 H300" fill="none" stroke="#212121" stroke-width="2.5" marker-end="url(#adArr)"/>
        <circle cx="295" cy="204" r="5" fill="#8e24aa"/>
        <circle cx="336" cy="184" r="14" fill="#ffffff" stroke="#212121" stroke-width="2"/>
        <text x="336" y="190" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">1</text>
      </g>
      <g class="dg-hotspot" data-id="s2">
        <path d="M278 214 Q262 220 252 240" fill="none" stroke="#212121" stroke-width="2.5" marker-end="url(#adArr)"/>
        <circle cx="252" cy="188" r="14" fill="#ffffff" stroke="#212121" stroke-width="2"/>
        <text x="252" y="194" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">2</text>
      </g>
      <g class="dg-hotspot" data-id="s3">
        <circle cx="232" cy="272" r="30" fill="#f6efd3" stroke="#8d6e3a" stroke-width="2.5"/>
        <g fill="#1e88e5" stroke="#0d47a1" stroke-width="1">
          <rect x="228" y="236" width="8" height="12" rx="2"/><rect x="228" y="296" width="8" height="12" rx="2"/><rect x="196" y="268" width="12" height="8" rx="2"/><rect x="256" y="268" width="12" height="8" rx="2"/>
        </g>
        <text x="232" y="278" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">3</text>
        <path d="M206 292 Q172 304 150 322" fill="none" stroke="#212121" stroke-width="2.5" marker-end="url(#adArr)"/>
      </g>
      <g class="dg-hotspot" data-id="s4">
        <path d="M122 314 A26 26 0 0 1 122 366 Z" fill="#fbf3cf" stroke="#8d6e3a" stroke-width="2.5"/>
        <path d="M122 316 V364" stroke="#fbf3cf" stroke-width="4"/>
        <g fill="#1e88e5" stroke="#0d47a1" stroke-width="1"><rect x="141" y="336" width="12" height="8" rx="2"/><rect x="128" y="313" width="8" height="12" rx="2"/><rect x="128" y="355" width="8" height="12" rx="2"/></g>
        <circle cx="180" cy="352" r="14" fill="#ffffff" stroke="#212121" stroke-width="2"/>
        <text x="180" y="358" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">4</text>
      </g>
      <g class="dg-hotspot" data-id="s5">
        <g fill="#1e88e5" stroke="#0d47a1" stroke-width="1"><rect x="114" y="396" width="16" height="8" rx="2"/><rect x="114" y="426" width="16" height="8" rx="2"/></g>
        <path d="M34 415 H282" fill="none" stroke="#1565c0" stroke-width="3.5" marker-end="url(#adArrW)"/>
        <path d="M296 415 H432" fill="none" stroke="#1565c0" stroke-width="3.5" marker-end="url(#adArrW)"/>
        <text x="72" y="402" text-anchor="middle" font-size="16" font-weight="800" fill="#0d47a1">ماء</text>
        <text x="333" y="402" text-anchor="middle" font-size="16" font-weight="800" fill="#0d47a1">ماء</text>
        <circle cx="180" cy="436" r="14" fill="#ffffff" stroke="#212121" stroke-width="2"/>
        <text x="180" y="442" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">5</text>
        <text x="236" y="398" text-anchor="middle" font-size="15" font-weight="800" fill="#0d47a1">الأكوابورينات</text>
      </g>
      <text x="230" y="575" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">كيف يزيد ADH إعادة امتصاص الماء في القناة الجامعة</text>
    </svg>`,
    hotspots: {
      'osmo': { label: 'مستقبلات أسموزية', desc: 'تتم مراقبة جهد الماء للدم باستمرار بواسطة خلايا عصبية حسية متخصصة في تحت المهاد تسمى مُستقبلات أسموزية. عندما تتحسس هذه الخلايا انخفاضًا في جهد الماء للدم دون النقطة المرجعية، ترسل نبضات عصبية على طول الخلايا العصبية لتنقلها إلى حيث تنتهي هذه الخلايا في الغدة النخامية الخلفية. <br><small>كتاب الطالب — ص 135</small>' },
      'hypothalamus': { label: 'تحت المهاد', desc: 'تنتج الخلايا العصبية في تحت المهاد هرمون ADH، ليطلق في الدم حيث تنتهي الخلايا العصبية في الغدة النخامية الخلفية. <br><small>كتاب الطالب — ص 135</small>' },
      'postpit': { label: 'الغدة النخامية الخلفية', desc: 'تحفز هذه الموجات إطلاق (ADH)، وهو هرمون ببتيدي يتكوّن من تسعة أحماض أمينية. <br><small>كتاب الطالب — ص 135</small>' },
      'adhblood': { label: 'ADH في الدم', desc: 'تدخل جزيئات ADH الدم في الشعيرات الدموية وتُنقل إلى جميع أنحاء الجسم. الخلايا المستهدفة من (ADH) هي خلايا القناة الجامعة. يؤثر (ADH) في أغشية خلايا تجويف القناة الجامعة، ويجعلها أكثر نفاذية للماء من المعتاد. <br><small>كتاب الطالب — ص 135-136</small>' },
      's1': { label: '1 — ارتباط ADH بالمستقبلات', desc: 'يرتبط ADH مع المستقبلات في غشاء سطح الخلية للخلايا المبطنة للقناة الجامعة. <br><small>كتاب الطالب — ص 137</small>' },
      's2': { label: '2 — إنزيم فوسفوريليز نشط', desc: 'ينشّط هذا الأمر سلسلة من التفاعلات التي يتحكم فيها الإنزيم وتنتهي بإنتاج إنزيم فوسفوريليز نشط. <br><small>كتاب الطالب — ص 137</small>' },
      's3': { label: '3 — انتقال الحويصلات', desc: 'يسبب الفوسفوريليز انتقال حويصلات محاطة بغشاء تحتوي على الأكوابورينات إلى غشاء سطح الخلية. <br><small>كتاب الطالب — ص 137</small>' },
      's4': { label: '4 — اندماج الحويصلات', desc: 'تندمج الحويصلات مع غشاء سطح الخلية. <br><small>كتاب الطالب — ص 137</small>' },
      's5': { label: '5 — انتقال الماء عبر الأكوابورينات', desc: 'يمكن أن ينتقل الماء الآن بحرّية عبر أكوابورينات أخرى (غير مرئية في الشكل) من الخلايا مع منحدر جهد الماء إلى السائل النسيجي المركّز وبلازما الدم في نخاع الكُلية. <br><small>كتاب الطالب — ص 137</small>' },
      'lumen': { label: 'تجويف القناة الجامعة', desc: 'وعند تدفق السائل عبر القناة الجامعة، تنتقل جزيئات الماء عبر الأكوابورينات من داخل الأُنيبيب إلى السائل النسيجي في الخارج. ويحدث هذا لأن جهد الماء للسائل النسيجي في النخاع منخفض جدًّا، وجهد الماء للسائل في القنوات الجامعة مرتفع جدًا. يفقد السائل في القناة الجامعة الماء ويصبح أكثر تركيزًا. <br><small>كتاب الطالب — ص 136</small>' }
    }
  },
  {
    id: 'blood-glucose-s1',
    title: 'آلية تنظيم تركيز الجلوكوز في الدم',
    figure: 'الشكل ٤-١٩',
    page: 'ص 139-142',
    obj: '4-10',
    legend: 'يبيّن الشكل ٤-١٩ كيف يتغير تركيز جلوكوز الدم الطبيعي ضمن حدود حول النقطة المرجعية، والتي يشار إليها بالخط المتقطع.',
    svg: `<svg viewBox="0 0 860 600" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs>
        <marker id="bgArrB" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="16" refX="14" refY="8" orient="auto"><path d="M0,0 L18,8 L0,16 Z" fill="#1976d2"/></marker>
        <marker id="bgArrR" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="16" refX="14" refY="8" orient="auto"><path d="M0,0 L18,8 L0,16 Z" fill="#e64a19"/></marker>
      </defs>
      <rect width="860" height="600" fill="#fdfdfb"/>
      <text x="430" y="32" text-anchor="middle" font-size="21" font-weight="800" fill="#0d47a1">آلية تنظيم تركيز الجلوكوز في الدم</text>
      <text x="430" y="62" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">التحكم بارتفاع تركيز الجلوكوز في الدم بواسطة التغذية الراجعة السلبية</text>
      <text x="430" y="582" text-anchor="middle" font-size="16" font-weight="700" fill="#263238">التحكم بانخفاض تركيز الجلوكوز في الدم بواسطة التغذية الراجعة السلبية</text>

      <!-- normal range band -->
      <g class="dg-hotspot" data-id="range">
        <rect x="40" y="278" width="680" height="84" fill="#e2f3df"/>
        <text x="170" y="350" text-anchor="middle" font-size="15" font-weight="700" fill="#1b5e20">النطاق الطبيعي للجلوكوز في الدم</text>
      </g>
      <g class="dg-hotspot" data-id="setpoint">
        <rect x="40" y="296" width="250" height="26" fill="#ffffff" fill-opacity="0"/>
        <path d="M40 320 H720" fill="none" stroke="#2e7d32" stroke-width="2.5" stroke-dasharray="3 5"/>
        <text x="170" y="310" text-anchor="middle" font-size="16" font-weight="800" fill="#1b5e20">النقطة المرجعية</text>
      </g>
      <path d="M700 320 Q640 236 580 320 T460 320 T340 320" fill="none" stroke="#2e9d48" stroke-width="3.5" pointer-events="none"/>
      <text x="786" y="290" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">ارتفاع تركيز</text>
      <text x="786" y="310" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الجلوكوز في الدم</text>
      <text x="786" y="346" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">انخفاض تركيز</text>
      <text x="786" y="366" text-anchor="middle" font-size="15" font-weight="700" fill="#263238">الجلوكوز في الدم</text>

      <!-- high: receptors -->
      <g class="dg-hotspot" data-id="rec-high">
        <rect x="590" y="108" width="250" height="112" fill="#f1cda6" stroke="#b9753a" stroke-width="2"/>
        <text x="715" y="136" text-anchor="middle" font-size="18" font-weight="800" fill="#4e2a0a">المستقبلات</text>
        <text x="715" y="166" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">خلايا (α) وخلايا (β)</text>
        <text x="715" y="194" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">في جُزيرات لانجرهانس</text>
      </g>
      <g class="dg-hotspot" data-id="insulin">
        <rect x="170" y="74" width="420" height="26" fill="#ffffff" fill-opacity="0"/>
        <text x="365" y="93" text-anchor="middle" font-size="16" font-weight="800" fill="#1565c0">إفراز القليل من الجلوكاجون والمزيد من الإنسولين</text>
        <path d="M588 164 H558" fill="none" stroke="#1976d2" stroke-width="5" marker-end="url(#bgArrB)"/>
      </g>
      <g class="dg-hotspot" data-id="eff-high">
        <rect x="160" y="108" width="394" height="112" fill="#f1cda6" stroke="#b9753a" stroke-width="2"/>
        <text x="357" y="136" text-anchor="middle" font-size="18" font-weight="800" fill="#4e2a0a">المستجيبات</text>
        <text x="357" y="166" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">خلايا الكبد: لا يتفكك الجلايكوجين</text>
        <text x="357" y="194" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">يزيد من امتصاص الجلوكوز واستخدامه</text>
        <path d="M546 222 L577 312" fill="none" stroke="#e64a19" stroke-width="5" marker-end="url(#bgArrR)"/>
      </g>

      <!-- low: receptors -->
      <g class="dg-hotspot" data-id="rec-low">
        <rect x="474" y="404" width="250" height="112" fill="#f1cda6" stroke="#b9753a" stroke-width="2"/>
        <text x="599" y="432" text-anchor="middle" font-size="18" font-weight="800" fill="#4e2a0a">المستقبلات</text>
        <text x="599" y="462" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">خلايا (α) وخلايا (β)</text>
        <text x="599" y="490" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">في جُزيرات لانجرهانس</text>
      </g>
      <g class="dg-hotspot" data-id="glucagon">
        <rect x="40" y="524" width="430" height="28" fill="#ffffff" fill-opacity="0"/>
        <text x="255" y="544" text-anchor="middle" font-size="16" font-weight="800" fill="#1565c0">إفراز المزيد من الجلوكاجون والقليل من الإنسولين</text>
        <path d="M472 460 H442" fill="none" stroke="#1976d2" stroke-width="5" marker-end="url(#bgArrB)"/>
      </g>
      <g class="dg-hotspot" data-id="eff-low">
        <rect x="70" y="404" width="368" height="112" fill="#f1cda6" stroke="#b9753a" stroke-width="2"/>
        <text x="254" y="432" text-anchor="middle" font-size="18" font-weight="800" fill="#4e2a0a">المستجيبات</text>
        <text x="254" y="462" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">تفكيك الجلايكوجين إلى جلوكوز</text>
        <text x="254" y="490" text-anchor="middle" font-size="16" font-weight="700" fill="#3e2723">يقل امتصاص الجلوكوز</text>
        <path d="M428 402 L456 330" fill="none" stroke="#e64a19" stroke-width="5" marker-end="url(#bgArrR)"/>
      </g>
    </svg>`,
    hotspots: {
      'setpoint': { label: 'النقطة المرجعية', desc: 'تعمل خلايا (α) و (β) كمستقبلات ومركز تحكم في آلية الاتزان الداخلي هذه. وينظم الهرمونان الجلوكاجون والإنسولين عمل المستجيبات. <br><small>كتاب الطالب — ص 139</small>' },
      'range': { label: 'النطاق الطبيعي للجلوكوز في الدم', desc: 'يحتوي كل 100 mL من الدم في الإنسان الطبيعي عادة ما بين 80 mg و 120 mg من الجلوكوز. إذا انخفض التركيز عن ذلك، فربما لا يتوفر في الخلايا ما يكفي من الجلوكوز لعملية التنفس، وقد تكون غير قادرة على أداء وظائفها بشكل طبيعي. <br><small>كتاب الطالب — ص 139</small>' },
      'rec-high': { label: 'المستقبلات عند ارتفاع الجلوكوز', desc: 'بعد تناول وجبة تحتوي على الكربوهيدرات، يُمتص الجلوكوز من الطعام الذي تم هضمه من الأمعاء الدقيقة، ويمر إلى الدم. وتتحسس خلايا (α) و (β) الزيادة في تركيز الجلوكوز عند تدفق الدم عبر البنكرياس. تستجيب خلايا (α) بإيقاف إفراز الجلوكاجون، في حين تستجيب خلايا (β) بإفراز الإنسولين إلى بلازما الدم، لينتقل إلى جميع أنحاء الجسم. <br><small>كتاب الطالب — ص 140</small>' },
      'insulin': { label: 'الإنسولين', desc: 'الإنسولين: هرمون ببتيدي صغير تفرزه خلايا بيتا في جُزيرات لانجرهانس في البنكرياس ليخفض من تركيز الجلوكوز في الدم. <br><small>كتاب الطالب — ص 139</small>' },
      'eff-high': { label: 'المستجيبات عند ارتفاع الجلوكوز', desc: 'توجد مستقبلات خاصة بالإنسولين في العديد من خلايا الأنسجة (على سبيل المثال، الخلايا في الكبد، والأنسجة العضلية، والأنسجة الدهنية). يُحفز الإنسولين الخلايا التي توجد فيها هذه المستقبلات لزيادة معدل امتصاصها للجلوكوز من الدم وتحويله إلى جلايكوجين. كما يزيد الإنسولين أيضًا من استخدام الجلوكوز في التنفس، فينخفض بذلك تركيز الجلوكوز في الدم. <br><small>كتاب الطالب — ص 140</small>' },
      'rec-low': { label: 'المستقبلات عند انخفاض الجلوكوز', desc: 'عندما تتحسس خلايا ألفا (α) وخلايا بيتا (β) في البنكرياس انخفاضًا في تركيز الجلوكوز في الدم، تستجيب خلايا ألفا (α) بإفراز الجلوكاجون، في حين تستجيب خلايا بيتا (β) بإيقاف إفراز الإنسولين. <br><small>كتاب الطالب — ص 142</small>' },
      'glucagon': { label: 'الجلوكاجون', desc: 'الجلوكاجون: هرمون ببتيدي صغير تفرزه خلايا ألفا في جُزيرات لانجرهانس في البنكرياس ليزيد من تركيز الجلوكوز في الدم. <br><small>كتاب الطالب — ص 139</small>' },
      'eff-low': { label: 'المستجيبات عند انخفاض الجلوكوز', desc: 'يقلل انخفاض تركيز الإنسولين في الدم من معدل امتصاص واستخدام الكبد والخلايا العضلية للجلوكوز. يستمر الامتصاص لكن بمعدل أقل. يرتبط الجلوكاجون بمستقبلات محددة مختلفة في أغشية سطح الخلية لخلايا الكبد. لا توجد مستقبلات للجلوكاجون على سطح خلايا العضلات. <br><small>كتاب الطالب — ص 142</small>' }
    }
  },
  {
    id: 'stomata-s1',
    title: 'كيف تفتح الثغور',
    figure: 'الشكل ٤-٢٦',
    page: 'ص 147-150',
    obj: '4-15',
    legend: 'تفتح الخلايا الحارسة عندما تحصل على الماء وتصبح منتفخة. وتغلق عندما تفقد الماء وتصبح رخوة، وتقوم بذلك عن طريق الأسموزية.',
    svg: `<svg viewBox="0 0 860 570" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs>
        <marker id="stArr" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="11" refX="11" refY="5.5" orient="auto"><path d="M0,0 L13,5.5 L0,11 Z" fill="#212121"/></marker>
        <marker id="stArrB" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="11" refX="11" refY="5.5" orient="auto"><path d="M0,0 L13,5.5 L0,11 Z" fill="#283593"/></marker>
        <marker id="stArrG" markerUnits="userSpaceOnUse" markerWidth="22" markerHeight="22" refX="16" refY="11" orient="auto"><path d="M0,0 L22,11 L0,22 Z" fill="#2e7d32"/></marker>
      </defs>
      <rect width="860" height="570" fill="#fdfdfb"/>
      <text x="430" y="36" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">سلسلة الأحداث التي تحدث أثناء فتح الثغور</text>

      <!-- closed stoma (right) -->
      <g class="dg-hotspot" data-id="closed">
        <path d="M640 150 C575 150 530 230 530 310 C530 390 575 470 640 470 Z" fill="#d9c896" stroke="#9e9e9e" stroke-width="13" stroke-linejoin="round"/>
        <path d="M660 150 C725 150 770 230 770 310 C770 390 725 470 660 470 Z" fill="#d9c896" stroke="#9e9e9e" stroke-width="13" stroke-linejoin="round"/>
        <text x="650" y="108" text-anchor="middle" font-size="18" font-weight="800" fill="#263238">فتحة الثغر مغلقة</text>
        <text x="720" y="528" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4a1c">خلية حارسة رخوة</text>
        <path d="M720 510 L715 440" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <g class="dg-hotspot" data-id="pump">
        <rect x="450" y="182" width="176" height="112" fill="#ffffff" fill-opacity="0"/>
        <circle cx="547" cy="216" r="14" fill="none" stroke="#283593" stroke-width="2.5"/>
        <path d="M576 218 L498 200" fill="none" stroke="#283593" stroke-width="2.5" marker-end="url(#stArrB)"/>
        <text x="596" y="226" text-anchor="middle" font-size="17" font-weight="800" fill="#212121">H⁺</text>
        <text x="476" y="204" text-anchor="middle" font-size="17" font-weight="800" fill="#212121">H⁺</text>
        <path d="M566 240 Q548 258 562 276" fill="none" stroke="#283593" stroke-width="2.5" marker-end="url(#stArrB)"/>
        <text x="596" y="256" text-anchor="middle" font-size="16" font-weight="700" fill="#212121">ATP</text>
        <text x="598" y="288" text-anchor="middle" font-size="15" font-weight="700" fill="#212121">ADP + Pi</text>
      </g>
      <g class="dg-hotspot" data-id="kion">
        <rect x="440" y="306" width="186" height="38" fill="#ffffff" fill-opacity="0"/>
        <path d="M476 326 H568" fill="none" stroke="#212121" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#stArr)"/>
        <text x="458" y="332" text-anchor="middle" font-size="17" font-weight="800" fill="#212121">K⁺</text>
        <text x="594" y="332" text-anchor="middle" font-size="17" font-weight="800" fill="#212121">K⁺</text>
      </g>
      <g class="dg-hotspot" data-id="psi">
        <rect x="540" y="350" width="94" height="30" fill="#ffffff" fill-opacity="0"/>
        <text x="588" y="371" text-anchor="middle" font-size="16" font-weight="800" fill="#212121">انخفاض ψ</text>
      </g>
      <g class="dg-hotspot" data-id="water">
        <rect x="436" y="388" width="190" height="38" fill="#ffffff" fill-opacity="0"/>
        <path d="M486 408 H566" fill="none" stroke="#212121" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#stArr)"/>
        <text x="460" y="414" text-anchor="middle" font-size="17" font-weight="800" fill="#212121">H₂O</text>
        <text x="596" y="414" text-anchor="middle" font-size="17" font-weight="800" fill="#212121">H₂O</text>
      </g>

      <path d="M424 268 H356" fill="none" stroke="#2e7d32" stroke-width="8" marker-end="url(#stArrG)"/>

      <!-- open stoma (left) -->
      <g class="dg-hotspot" data-id="open">
        <path d="M213 150 C140 150 95 230 95 310 C95 390 140 470 213 470 C182 400 165 350 165 310 C165 270 182 220 213 150 Z" fill="#d9c896" stroke="#9e9e9e" stroke-width="13" stroke-linejoin="round"/>
        <text x="100" y="528" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4a1c">خلية حارسة ممتلئة</text>
        <path d="M112 510 L128 430" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <g class="dg-hotspot" data-id="wall">
        <path d="M217 150 C290 150 335 230 335 310 C335 390 290 470 217 470 C248 400 265 350 265 310 C265 270 248 220 217 150 Z" fill="#d9c896" stroke="#9e9e9e" stroke-width="13" stroke-linejoin="round"/>
        <text x="322" y="528" text-anchor="middle" font-size="17" font-weight="800" fill="#5d4a1c">جدران الخلايا الحارسة</text>
        <path d="M322 510 L330 372" stroke="#37474f" stroke-width="1.5"/>
      </g>
      <g class="dg-hotspot" data-id="pore">
        <ellipse cx="215" cy="310" rx="40" ry="92" fill="#ffffff" fill-opacity="0"/>
        <text x="215" y="304" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">فتحة</text>
        <text x="215" y="326" text-anchor="middle" font-size="16" font-weight="800" fill="#263238">الثغر</text>
      </g>
      <text x="215" y="108" text-anchor="middle" font-size="18" font-weight="800" fill="#263238">فتحة الثغر مفتوحة</text>
    </svg>`,
    hotspots: {
      'closed': { label: 'فتحة الثغر مغلقة', desc: 'تغلق الثغور عندما تتوقف بروتينات مضخة أيونات الهيدروجين، وتغادر أيونات البوتاسيوم الخلايا الحارسة لتدخل إلى الخلايا المجاورة. تعود أيونات المالات إلى البلاستيدات الخضراء لتتحوّل إلى نشا. فيتكوّن منحدر جهد للماء في الاتجاه المعاكس، لذا يغادر الماء الخلايا الحارسة فتصبح رخوة وتغلق الثغور. <br><small>كتاب الطالب — ص 150</small>' },
      'pump': { label: '1 — مضخات البروتون', desc: 'تنقل مضخات البروتون في غشاء سطح الخلية المزودة بالطاقة من ATP أيونات الهيدروجين H+ بالنقل النشط إلى خارج الخلية الحارسة. <br><small>كتاب الطالب — ص 150</small>' },
      'kion': { label: '2 — انتشار أيونات البوتاسيوم', desc: 'يسبب التركيز المنخفض لـ H+ والشحنة السالبة داخل الخلية فتح قنوات K+. تنتشر K+ إلى الخلية مع المنحدر الكهروكيميائي. <br><small>كتاب الطالب — ص 150</small>' },
      'psi': { label: '3 — انخفاض جهد الماء', desc: 'يُخفض التركيز المرتفع من K+ داخل الخلية الحارسة من جهد الماء. <br><small>كتاب الطالب — ص 150</small>' },
      'water': { label: '4 — انتقال الماء بالأسموزية', desc: 'ينتقل الماء بالأسموزية داخل الخلية مع منحدر جهد الماء. <br><small>كتاب الطالب — ص 150</small>' },
      'open': { label: '5 — خلية حارسة ممتلئة', desc: 'يزيد دخول الماء من حجم الخلايا الحارسة، فتتمدَّد، ويزداد تمدُّد الجدار الخارجي الرقيق أكثر، فتنحني الخلايا متباعدة. <br><small>كتاب الطالب — ص 150</small>' },
      'wall': { label: 'جدران الخلايا الحارسة', desc: 'تُسهم السماكة غير المتساوية لجدران الخلايا الحارسة ووجود حزم ألياف السليلوز الدقيقة في منع تمددها في جميع الاتجاهات. فبدلًا من ذلك تزداد الخلايا في الطول وليس في القطر. وفيما ترتبط نهايات الخليتَين الحارستَين وتنحني الجدران الرقيقة الخارجية بسهولة أكبر مقارنة بالجدران الداخلية السميكة، تصبح الخلايا الحارسة مقوّسة. <br><small>كتاب الطالب — ص 149</small>' },
      'pore': { label: 'فتحة الثغر', desc: 'الثغور موزّعة على الأوراق والسيقان الخضراء والأزهار. وتحتوي البشرة السفلى للأوراق عادة على أكبر عدد من الثغور. تحاط فتحة الثغر بخليتَين حارستَين. <br><small>كتاب الطالب — ص 147</small>' }
    }
  }
];

unitDiagrams[5] = [
  {
    id: 'motor-neuron-s1',
    title: 'تركيب الخلية العصبية الحركية',
    figure: 'الشكل ٥-٣',
    page: 'ص 167-170',
    obj: '5-2',
    legend: 'الخلية العصبية الحركية: خلية عصبية يكون جسمها في الدماغ أو الحبل الشوكي أو في عقدة عصبية (منطقة منتفخة في العصب)، وتنقل النبضات العصبية إلى مستجيب مثل العضلات أو الغدد.',
    svg: `<svg viewBox="0 0 860 500" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="mnArr" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="11" refX="12" refY="5.5" orient="auto"><path d="M0,0 L13,5.5 L0,11 Z" fill="#c62828"/></marker></defs>
      <rect width="860" height="500" fill="#fdfdfb"/>
      <text x="430" y="36" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">تركيب الخلية العصبية الحركية</text>
      <g class="dg-hotspot" data-id="dendrite">
        <path d="M138.6 194 L61.6 149.5" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round"/><path d="M91 166.5 L77 137.4 M91 166.5 L58.8 169 M61.6 149.5 L49.2 129.2 M61.6 149.5 L37.8 148.9" fill="none" stroke="#dcc48e" stroke-width="3.3000000000000003" stroke-linecap="round"/><path d="M167.7 173.6 L153.1 90.9" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round"/><path d="M158.7 122.4 L171.2 94.7 M158.7 122.4 L137.4 100.7 M153.1 90.9 L160.3 69.7 M153.1 90.9 L139.1 73.4" fill="none" stroke="#dcc48e" stroke-width="3.3000000000000003" stroke-linecap="round"/><path d="M202 182.8 L265.6 107" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round"/><path d="M241.2 136.1 L276 126.4 M241.2 136.1 L244.7 100.2 M265.6 107 L290.4 97.3 M265.6 107 L270.8 80.9" fill="none" stroke="#dcc48e" stroke-width="3.3000000000000003" stroke-linecap="round"/><path d="M133 215 L49 215" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round"/><path d="M81 215 L55.9 197.8 M81 215 L55.9 232.2 M49 215 L29.3 204.3 M49 215 L29.3 225.7" fill="none" stroke="#dcc48e" stroke-width="3.3000000000000003" stroke-linecap="round"/><path d="M148 247.2 L105.6 297.7" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round"/><path d="M121.5 278.7 L98.8 285 M121.5 278.7 L119.2 302.1 M105.6 297.7 L89.4 304 M105.6 297.7 L102.2 314.7" fill="none" stroke="#dcc48e" stroke-width="3.3000000000000003" stroke-linecap="round"/><path d="M178.7 256.8 L184.2 320.6" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round"/><path d="M182.1 296.7 L170.9 316.6 M182.1 296.7 L196.6 314.3 M184.2 320.6 L177.5 336 M184.2 320.6 L193.5 334.6" fill="none" stroke="#dcc48e" stroke-width="3.3000000000000003" stroke-linecap="round"/>
        <path d="M296 106 L268 112" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="356" y="112" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">شجيرة عصبية</text>
        <rect x="298" y="90" width="116" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="axon">
        <path d="M206 245 C 238 290, 246 360, 310 360 L 730 360" fill="none" stroke="#dcc48e" stroke-width="9" stroke-linecap="round"/>
        <path d="M250 424 L256 344" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="250" y="445" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">المحور الأسطواني</text>
        <rect x="180" y="424" width="140" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="cell-body">
        <circle cx="175" cy="215" r="46" fill="#dcc48e" stroke="#a8894a" stroke-width="2"/>
        <path d="M116 380 L152 258" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="108" y="402" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">جسم الخلية</text>
        <rect x="56" y="380" width="104" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="nucleus">
        <circle cx="169" cy="215" r="17" fill="#9d92d6" stroke="#5e56a0" stroke-width="2"/>
        <path d="M296 216 L187 215" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="318" y="222" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">نواة</text>
        <rect x="294" y="200" width="50" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="myelin">
        <rect x="422" y="344" width="90" height="32" rx="13" fill="#f6e7a6" stroke="#b8963c" stroke-width="2"/><path d="M432 360 L502 360" stroke="#d9c070" stroke-width="3" fill="none"/>
        <rect x="526" y="344" width="90" height="32" rx="13" fill="#f6e7a6" stroke="#b8963c" stroke-width="2"/><path d="M536 360 L606 360" stroke="#d9c070" stroke-width="3" fill="none"/>
        <rect x="630" y="344" width="70" height="32" rx="13" fill="#f6e7a6" stroke="#b8963c" stroke-width="2"/><path d="M640 360 L690 360" stroke="#d9c070" stroke-width="3" fill="none"/>
        <path d="M571 318 L571 343" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="571" y="310" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">غمد المايلين</text>
        <rect x="516" y="288" width="110" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="schwann">
        <rect x="318" y="344" width="90" height="32" rx="13" fill="#f6e7a6" stroke="#b8963c" stroke-width="2"/><path d="M328 360 L398 360" stroke="#d9c070" stroke-width="3" fill="none"/>
        <ellipse cx="363" cy="352" rx="10" ry="5" fill="#9d92d6" stroke="#5e56a0" stroke-width="1.5"/>
        <path d="M363 318 L363 343" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="363" y="310" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خلية شوان</text>
        <rect x="318" y="288" width="90" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="node">
        <rect x="509" y="340" width="20" height="40" fill="#ffffff" fill-opacity="0"/><circle cx="519" cy="360" r="13" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="4 3"/>
        <path d="M519 404 L519 375" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="519" y="425" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">عقدة رانفييه</text>
        <rect x="462" y="404" width="114" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="endings">
        <path d="M730 360 Q 765 307.3 800 298" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><circle cx="800" cy="298" r="7.5" fill="#dcc48e" stroke="#a8894a" stroke-width="1.6"/>
        <path d="M730 360 Q 772 346.4 814 344" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><circle cx="814" cy="344" r="7.5" fill="#dcc48e" stroke="#a8894a" stroke-width="1.6"/>
        <path d="M730 360 Q 772 382.1 814 386" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><circle cx="814" cy="386" r="7.5" fill="#dcc48e" stroke="#a8894a" stroke-width="1.6"/>
        <path d="M730 360 Q 763 419.5 796 430" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><circle cx="796" cy="430" r="7.5" fill="#dcc48e" stroke="#a8894a" stroke-width="1.6"/>
        <path d="M772 268 L797 290" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="745" y="262" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">الزر التشابكي</text>
        <path d="M742 458 L772 412" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="735" y="478" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">النهايات العصبية</text>
        <rect x="672" y="460" width="128" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
        <rect x="690" y="244" width="112" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="direction">
        <path d="M440 232 L680 232" fill="none" stroke="#c62828" stroke-width="2.5" marker-end="url(#mnArr)"/>
        <text x="560" y="214" text-anchor="middle" font-size="17" font-weight="700" fill="#b71c1c">اتجاه انتقال النبضات العصبية</text>
        <rect x="440" y="194" width="240" height="48" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
    </svg>`,
    hotspots: {
      'dendrite': { label: 'الشجيرات العصبية', desc: 'يمتد من جسم الخلية العصبية امتدادات سيتوبلازمية رفيعة، ويكون بعضها قصيرًا جدًا، وغالبًا ما يكون له العديد من التفرعات تسمى الشجيرات العصبية Dendrites. تحتوي الخلايا العصبية الحركية على العديد من الشجيرات العصبية كثيرة التفرع. توفر هذه الشجيرات مساحة سطح كبيرة لترتبط بها النهايات العصبية لمحاور الخلايا العصبية الأخرى. <br><small>كتاب الطالب — ص 168</small>' },
      'axon': { label: 'المحور الأسطواني', desc: 'يتميز المحور الأسطواني من الشجيرات العصبية بأنه أطول بكثير، وينقل النبضات العصبية عبر مسافات طويلة. يوجد داخل سيتوبلازم المحور الأسطواني بعض العضيات مثل الميتوكوندريا. <br><small>كتاب الطالب — ص 168</small>' },
      'cell-body': { label: 'جسم الخلية', desc: 'يقع جسم الخلية العصبية الحركية داخل الحبل الشوكي أو الدماغ. عند النظر إلى هذه الخلايا تحت المجهر الضوئي، يمكن غالبًا رؤية بقع داكنة في السيتوبلازم التي تمثل مناطق صغيرة من الشبكة الإندوبلازمية الخشنة. <br><small>كتاب الطالب — ص 168</small>' },
      'nucleus': { label: 'النواة', desc: 'توجد نواة الخلية العصبية دائمًا في جسم الخلية. <br><small>كتاب الطالب — ص 168</small>' },
      'myelin': { label: 'غمد المايلين', desc: 'يتكوّن هذا الغلاف المحيط، المسمى بغمد المايلين Myelin sheath، إلى حد كبير من الدهون، مع بعض البروتينات. يؤثر هذا الغمد على سرعة توصيل النبضات العصبية. <br><small>كتاب الطالب — ص 170</small>' },
      'schwann': { label: 'خلية شوان', desc: 'هذه المادة التي تصطبغ بلون داكن هي مادة المايلين Myelin، وتصنعها خلايا متخصصة تسمى خلايا شوان، والتي تحيط بالمحاور الأسطوانية على طولها لبعض الخلايا العصبية. <br><small>كتاب الطالب — ص 169</small>' },
      'node': { label: 'عقدة رانفييه', desc: 'يطلق على المناطق الصغيرة المكشوفة من المحور الأسطواني بين خلايا شوان اسم عقد رانفييه Nodes of Ranvier. توجد عقد رانفييه كل (1-3 mm) تقريبًا على طول المحاور الأسطوانية للخلايا العصبية في الإنسان. <br><small>كتاب الطالب — ص 170</small>' },
      'endings': { label: 'النهايات العصبية', desc: 'تحتوي النهايات العصبية كذلك على الميتوكوندريا، جنبًا إلى جنب مع العديد من الحويصلات التي تحتوي على مواد كيميائية تسمى النواقل. تشارك هذه الحويصلات في تمرير النبضات العصبية إلى خلية مستجيب مثل خلية عضلية أو غدة. <br><small>كتاب الطالب — ص 168</small>' },
      'direction': { label: 'اتجاه انتقال النبضات العصبية', desc: 'يوضح الشكل ٥-٣ التركيب التفصيلي للخلايا العصبية الحركية لدى الثدييات، والتي تنقل النبضات العصبية من الدماغ أو الحبل الشوكي إلى العضلات أو الغدد. <br><small>كتاب الطالب — ص 167</small>' }
    }
  },
  {
    id: 'reflex-arc-s1',
    title: 'قوس الانعكاس',
    figure: 'الشكل ٥-٦',
    page: 'ص 170-171',
    obj: '5-2',
    legend: 'رسم تخطيطي بسيط لقوس الانعكاس يوضح ترتيب ثلاث خلايا عصبية في سلسلة تعمل على تنسيق الاستجابة السريعة لمنبّه معيّن.',
    svg: `<svg viewBox="0 0 860 590" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="raArr" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 Z" fill="#263238"/></marker></defs>
      <rect width="860" height="590" fill="#fdfdfb"/>
      <g class="dg-hotspot" data-id="arc">
        <rect x="330" y="14" width="200" height="40" rx="12" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
        <text x="430" y="42" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">قوس الانعكاس</text>
      </g>
      <g class="dg-hotspot" data-id="receptors">
        <path d="M150 125 L112 92 M150 125 L96 125 M150 125 L112 160 M112 92 L84 84 M112 92 L98 70 M96 125 L70 112 M96 125 L70 138 M112 160 L84 168 M112 160 L98 184" fill="none" stroke="#dcc48e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="118" y="222" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">مستقبلات حسية</text>
        <path d="M112 202 L104 180" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <rect x="50" y="62" width="112" height="170" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="sensory">
        <path d="M150 125 L640 125 C 668 125, 668 160, 640 178 M640 178 L618 200 M640 178 L654 204" fill="none" stroke="#dcc48e" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M400 125 L400 100" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="400" cy="88" r="17" fill="#dcc48e" stroke="#a8894a" stroke-width="2"/><circle cx="400" cy="88" r="7" fill="#9d92d6" stroke="#5e56a0" stroke-width="1.5"/>
        <path d="M210 106 L300 106" fill="none" stroke="#263238" stroke-width="2.2" marker-end="url(#raArr)"/>
        <path d="M480 106 L570 106" fill="none" stroke="#263238" stroke-width="2.2" marker-end="url(#raArr)"/>
        <path d="M684 116 L664 128" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="756" y="120" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خلية عصبية حسية</text>
        <rect x="684" y="98" width="146" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="relay">
        <path d="M620.1 242.5 L605.9 207.3" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M611 219.9 L613.8 207.3 M611 219.9 L600.2 212.7 M605.9 207.3 L607 197.8 M605.9 207.3 L598.5 201.3" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M637.9 243.5 L655.7 209.9" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M649.3 221.9 L660.7 215.9 M649.3 221.9 L647.9 209.1 M655.7 209.9 L663.7 204.7 M655.7 209.9 L655.6 200.4" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M607.3 265.6 L569.9 272.2" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M583.3 269.9 L571.5 264.6 M583.3 269.9 L574.1 278.9 M569.9 272.2 L560.9 269.2 M569.9 272.2 L562.5 278.1" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M608.3 254.8 L572.6 241.8" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M585.3 246.5 L577.8 236 M585.3 246.5 L572.8 249.7 M572.6 241.8 L566.3 234.7 M572.6 241.8 L563.2 243.2" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><circle cx="628" cy="262" r="25" fill="#dcc48e" stroke="#a8894a" stroke-width="2"/><circle cx="628" cy="262" r="10.5" fill="#9d92d6" stroke="#5e56a0" stroke-width="1.6"/>
        <path d="M616 284 C 600 310, 590 322, 578 338 M578 338 L560 352 M578 338 L588 358" fill="none" stroke="#dcc48e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M648 300 L632 336" fill="none" stroke="#263238" stroke-width="2.2" marker-end="url(#raArr)"/>
        <path d="M668 262 L656 262" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="756" y="268" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خلية عصبية موصلة</text>
        <rect x="672" y="246" width="170" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="motor">
        <path d="M556.3 385.9 L541.3 348.8" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M546.7 362.2 L549.6 348.8 M546.7 362.2 L535.3 354.6 M541.3 348.8 L542.5 338.8 M541.3 348.8 L533.5 342.4" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M578.2 387 L597 351.7" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M590.2 364.4 L602.3 358.1 M590.2 364.4 L588.7 350.8 M597 351.7 L605.4 346.2 M597 351.7 L596.9 341.6" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M540.4 414.5 L501 421.5" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M515.2 419 L502.7 413.4 M515.2 419 L505.4 428.6 M501 421.5 L491.4 418.3 M501 421.5 L493.1 427.8" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M591.6 414.5 L631 421.5" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M616.8 419 L626.6 428.6 M616.8 419 L629.3 413.4 M631 421.5 L638.9 427.8 M631 421.5 L640.6 418.3" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><path d="M541.6 401.1 L504 387.4" fill="none" stroke="#dcc48e" stroke-width="5" stroke-linecap="round"/><path d="M517.5 392.4 L509.5 381.3 M517.5 392.4 L504.2 395.8 M504 387.4 L497.3 379.8 M504 387.4 L494 388.9" fill="none" stroke="#dcc48e" stroke-width="2.75" stroke-linecap="round"/><circle cx="566" cy="410" r="30" fill="#dcc48e" stroke="#a8894a" stroke-width="2"/><circle cx="566" cy="410" r="12.6" fill="#9d92d6" stroke="#5e56a0" stroke-width="1.6"/>
        <path d="M566 438 C 566 478, 540 505, 500 505 L 236 505 M236 505 L206 478 M236 505 L198 505 M236 505 L206 532" fill="none" stroke="#dcc48e" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M470 486 L370 486" fill="none" stroke="#263238" stroke-width="2.2" marker-end="url(#raArr)"/>
        <path d="M680 408 L606 410" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="756" y="414" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خلية عصبية حركية</text>
        <rect x="680" y="392" width="152" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="synapse">
        <circle cx="634" cy="212" r="19" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="5 3"/><circle cx="572" cy="360" r="19" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="5 3"/>
        <path d="M526 208 L614 211" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="468" y="212" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">تشابك عصبي</text>
        <rect x="414" y="194" width="108" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
        <path d="M464 356 L552 359" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="406" y="360" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">تشابك عصبي</text>
        <rect x="352" y="342" width="108" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="effector">
        <rect x="96" y="420" width="34" height="130" rx="6" fill="#f3b9b4" stroke="#b25a55" stroke-width="2"/><path d="M99 436 L127 436" stroke="#c9837d" stroke-width="2"/><path d="M99 452 L127 452" stroke="#c9837d" stroke-width="2"/><path d="M99 468 L127 468" stroke="#c9837d" stroke-width="2"/><path d="M99 484 L127 484" stroke="#c9837d" stroke-width="2"/><path d="M99 500 L127 500" stroke="#c9837d" stroke-width="2"/><path d="M99 516 L127 516" stroke="#c9837d" stroke-width="2"/><path d="M99 532 L127 532" stroke="#c9837d" stroke-width="2"/>
        <rect x="134" y="420" width="34" height="130" rx="6" fill="#f3b9b4" stroke="#b25a55" stroke-width="2"/><path d="M137 436 L165 436" stroke="#c9837d" stroke-width="2"/><path d="M137 452 L165 452" stroke="#c9837d" stroke-width="2"/><path d="M137 468 L165 468" stroke="#c9837d" stroke-width="2"/><path d="M137 484 L165 484" stroke="#c9837d" stroke-width="2"/><path d="M137 500 L165 500" stroke="#c9837d" stroke-width="2"/><path d="M137 516 L165 516" stroke="#c9837d" stroke-width="2"/><path d="M137 532 L165 532" stroke="#c9837d" stroke-width="2"/>
        <rect x="172" y="420" width="34" height="130" rx="6" fill="#f3b9b4" stroke="#b25a55" stroke-width="2"/><path d="M175 436 L203 436" stroke="#c9837d" stroke-width="2"/><path d="M175 452 L203 452" stroke="#c9837d" stroke-width="2"/><path d="M175 468 L203 468" stroke="#c9837d" stroke-width="2"/><path d="M175 484 L203 484" stroke="#c9837d" stroke-width="2"/><path d="M175 500 L203 500" stroke="#c9837d" stroke-width="2"/><path d="M175 516 L203 516" stroke="#c9837d" stroke-width="2"/><path d="M175 532 L203 532" stroke="#c9837d" stroke-width="2"/>
        <text x="151" y="404" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">مستجيب</text>
        <text x="200" y="576" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">ألياف عضلة هيكلية مخططة</text>
        <rect x="90" y="386" width="230" height="196" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
    </svg>`,
    hotspots: {
      'arc': { label: 'قوس الانعكاس', desc: 'قوس الانعكاس Reflex arc هو المسار الذي تنتقل فيه النبضات العصبية من المُستقبِل إلى المستجيب من دون تدخل الدماغ. تظهر الأسهم اتجاه انتقال النبضات العصبية في الخلايا العصبية الثلاث. <br><small>كتاب الطالب — ص 170-171</small>' },
      'receptors': { label: 'مستقبلات حسية', desc: 'تنسق الخلايا العصبية أنشطة المستقبلات الحسية (مثل تلك الموجودة في العين) ومراكز اتخاذ القرار في الجهاز العصبي المركزي والمستجيبات مثل العضلات والغدد المختلفة. <br><small>كتاب الطالب — ص 166</small>' },
      'sensory': { label: 'خلية عصبية حسية', desc: 'الخلايا العصبية الحسية Sensory neurones تنقل النبضات العصبية من المستقبلات إلى الجهاز العصبي المركزي. <br><small>كتاب الطالب — ص 166</small>' },
      'relay': { label: 'خلية عصبية موصلة', desc: 'الخلايا العصبية الموصلة Relay neurones تنقل النبضات العصبية من الخلايا العصبية الحسية إلى الخلايا العصبية الحركية. <br><small>كتاب الطالب — ص 166</small>' },
      'motor': { label: 'خلية عصبية حركية', desc: 'الخلايا العصبية الحركية Motor neurones تنقل النبضات العصبية من الجهاز العصبي المركزي إلى المستجيبات. <br><small>كتاب الطالب — ص 167</small>' },
      'synapse': { label: 'تشابك عصبي', desc: 'في داخل (CNS)، يكون للخلايا العصبية الحسية والخلايا العصبية الموصلة امتدادات تتفرع لتتصل مع الخلايا العصبية الأخرى في (CNS). تسمح هذه الامتدادات بتكامل المعلومات الواردة من الخلايا العصبية الحسية بحيث يمكن تنسيق أشكال معقدة من السلوك. <br><small>كتاب الطالب — ص 171</small>' },
      'effector': { label: 'مستجيب', desc: 'المستجيب Effector: نسيج أو عضو يقوم بعمل استجابة للمنبّه مثل العضلات والغدد الصماء. <br><small>كتاب الطالب — ص 122</small>' }
    }
  },
  {
    id: 'action-potential-s1',
    title: 'جهد الفعل',
    figure: 'الشكل ٥-١٠',
    page: 'ص 173-176',
    obj: '5-5',
    legend: 'يتحوّل فرق الجهد الكهربائي عبر غشاء سطح الخلية للمحور الأسطواني فجأة من 70 mV- إلى 30 mV+. بعدها يعود فرق الجهد الكهربائي ذاك بسرعة إلى طبيعته بعد «ارتفاع حاد» لمدة وجيزة. تستغرق العملية بأكملها نحو 3 ms.',
    svg: `<svg viewBox="0 0 860 624" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs></defs>
      <rect width="860" height="624" fill="#fdfdfb"/>
      <text x="430" y="36" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">جهد الفعل</text>
      <path d="M120 80 L560 80" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="85" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">40</text><path d="M120 124 L560 124" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="129" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">20</text><path d="M120 168 L560 168" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="173" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">0</text><path d="M120 212 L560 212" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="217" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">−20</text><path d="M120 256 L560 256" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="261" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">−40</text><path d="M120 300 L560 300" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="305" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">−60</text><path d="M120 344 L560 344" stroke="#dfe7ea" stroke-width="1"/><text x="96" y="349" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">−80</text><path d="M120 80 L120 388" stroke="#dfe7ea" stroke-width="1"/><text x="120" y="408" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">0</text><path d="M230 80 L230 388" stroke="#dfe7ea" stroke-width="1"/><text x="230" y="408" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">1</text><path d="M340 80 L340 388" stroke="#dfe7ea" stroke-width="1"/><text x="340" y="408" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">2</text><path d="M450 80 L450 388" stroke="#dfe7ea" stroke-width="1"/><text x="450" y="408" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">3</text><path d="M560 80 L560 388" stroke="#dfe7ea" stroke-width="1"/><text x="560" y="408" text-anchor="middle" font-size="15" font-weight="500" fill="#1f2933">4</text><path d="M120 70 L120 388 L566 388" fill="none" stroke="#263238" stroke-width="2"/><text x="340" y="434" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2933">الزمن / ms</text><text transform="translate(46 234) rotate(-90)" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2933">فرق الجهد / mV</text>
      <rect x="640" y="448" width="190" height="164" fill="#ffffff" stroke="#90a4ae" stroke-width="1.5"/><path d="M640 524 L830 524 M640 568 L830 568" stroke="#90a4ae" stroke-width="1.5"/><text x="735" y="484" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2933">القنوات المبوبة</text><text x="735" y="506" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2933">بالفولتية</text><text x="735" y="552" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2933">قنوات الصوديوم</text><text x="735" y="596" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2933">قنوات البوتاسيوم</text>
      <g class="dg-hotspot" data-id="threshold">
        <rect x="120" y="278" width="440" height="22" fill="#fff3cd" fill-opacity="0.75"/><path d="M120 278 L568 278 M120 300 L568 300" stroke="#b26a00" stroke-width="1.6" stroke-dasharray="6 4" fill="none"/>
        <text x="602" y="277" text-anchor="middle" font-size="15" font-weight="700" fill="#8a5300">−50 mV</text>
        <text x="602" y="311" text-anchor="middle" font-size="15" font-weight="700" fill="#8a5300">−60 mV</text>
        <text x="700" y="295" text-anchor="middle" font-size="17" font-weight="800" fill="#8a5300">جهد العتبة</text>
        <rect x="572" y="269" width="190" height="40" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="rest">
        <rect x="500" y="448" width="140" height="164" fill="#eceff1" stroke="#90a4ae" stroke-width="1.5"/><path d="M500 524 L640 524 M500 568 L640 568" stroke="#90a4ae" stroke-width="1.5"/><circle cx="570" cy="466" r="12" fill="#546e7a"/><text x="570" y="472" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">١</text><text x="570" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#546e7a">جهد الراحة</text><text x="570" y="552" text-anchor="middle" font-size="17" font-weight="500" fill="#1f2933">مغلقة</text><text x="570" y="596" text-anchor="middle" font-size="17" font-weight="500" fill="#1f2933">مغلقة</text>
        <path d="M120 322 L568 322" stroke="#546e7a" stroke-width="1.8" stroke-dasharray="3 4" fill="none"/>
        <path d="M120 322 L120.7 322 L121.5 322 L122.4 322 L123.5 322 L124.7 322.1 L125.9 322.1 L127.2 322.1 L128.6 322.1 L129.9 322 L131.3 321.8 L132.7 321.5 L134 321.1 L135.3 320.5 L136.5 319.8 L137.7 319.1 L138.9 318.5 L140 317.9 L141.2 317.3 L142.4 316.6 L143.6 315.9" fill="none" stroke="#546e7a" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="602" y="340" text-anchor="middle" font-size="15" font-weight="700" fill="#546e7a">−70 mV</text>
        <text x="700" y="340" text-anchor="middle" font-size="17" font-weight="800" fill="#546e7a">جهد الراحة</text>
        <circle cx="140" cy="346" r="13" fill="#546e7a"/><text x="140" y="352" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">١</text>
        <rect x="572" y="324" width="190" height="28" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="depol">
        <rect x="360" y="448" width="140" height="164" fill="#fdecea" stroke="#90a4ae" stroke-width="1.5"/><path d="M360 524 L500 524 M360 568 L500 568" stroke="#90a4ae" stroke-width="1.5"/><circle cx="430" cy="466" r="12" fill="#c62828"/><text x="430" y="472" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">٢</text><text x="430" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#c62828">إزالة الاستقطاب</text><text x="430" y="552" text-anchor="middle" font-size="17" font-weight="800" fill="#1b5e20">مفتوحة</text><text x="430" y="596" text-anchor="middle" font-size="17" font-weight="500" fill="#1f2933">مغلقة</text>
        <path d="M142.4 316.6 L143.6 315.9 L144.8 315 L145.9 313.9 L147.1 312.5 L148.3 310.8 L149.5 308.8 L150.6 306.3 L151.8 303.4 L153 300 L154.2 296 L155.4 291.4 L156.5 286.4 L157.7 280.9 L158.9 275 L160.1 268.9 L161.3 262.5 L162.4 255.9 L163.6 249.2 L164.8 242.5 L166 235.8 L167.1 229.1 L168.3 222.7 L169.5 216.4 L170.7 210.1 L171.9 203.5 L173 196.7 L174.2 189.8 L175.4 182.8 L176.6 175.8 L177.8 168.8 L178.9 162 L180.1 155.5 L181.3 149.2 L182.5 143.3 L183.6 137.8 L184.8 132.8 L186 128.4 L187.2 124.5 L188.4 120.9 L189.5 117.6 L190.7 114.7 L191.9 112.1 L193.1 109.8 L194.3 107.8 L195.4 106.1 L196.6 104.7 L197.8 103.6 L199 102.8 L200.1 102.2 L201.3 102 L202.5 102" fill="none" stroke="#c62828" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="150" cy="190" r="13" fill="#c62828"/><text x="150" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">٢</text>
      </g>
      <g class="dg-hotspot" data-id="repol">
        <rect x="220" y="448" width="140" height="164" fill="#e3f2fd" stroke="#90a4ae" stroke-width="1.5"/><path d="M220 524 L360 524 M220 568 L360 568" stroke="#90a4ae" stroke-width="1.5"/><circle cx="290" cy="466" r="12" fill="#1565c0"/><text x="290" y="472" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">٣</text><text x="290" y="504" text-anchor="middle" font-size="17" font-weight="800" fill="#1565c0">إعادة الاستقطاب</text><text x="290" y="552" text-anchor="middle" font-size="17" font-weight="500" fill="#1f2933">مغلقة</text><text x="290" y="596" text-anchor="middle" font-size="17" font-weight="800" fill="#1b5e20">مفتوحة</text>
        <path d="M202.5 102 L203.7 102.3 L204.9 102.9 L206 103.7 L207.2 104.8 L208.4 106.3 L209.6 108 L210.8 110 L211.9 112.3 L213.1 114.9 L214.3 117.8 L215.5 121.1 L216.6 124.7 L217.8 128.6 L219 132.8 L220.2 137.5 L221.4 142.9 L222.5 148.8 L223.7 155.1 L224.9 161.8 L226.1 168.8 L227.3 176 L228.4 183.3 L229.6 190.6 L230.8 198 L232 205.2 L233.1 212.2 L234.3 218.9 L235.5 225.2 L236.7 231.4 L237.9 237.7 L239 244 L240.2 250.4 L241.4 256.7 L242.6 263 L243.8 269.1 L244.9 275 L246.1 280.7 L247.3 286.2 L248.5 291.3 L249.6 296.1 L250.8 300.5 L252 304.4 L253.2 307.9 L254.3 310.9 L255.3 313.5 L256.4 315.7 L257.4 317.6 L258.5 319.3 L259.6 320.8 L260.7 322 L261.8 323.2 L263 324.3" fill="none" stroke="#1565c0" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="262" cy="190" r="13" fill="#1565c0"/><text x="262" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">٣</text>
      </g>
      <g class="dg-hotspot" data-id="undershoot">
        <rect x="30" y="448" width="190" height="164" fill="#f3e5f5" stroke="#90a4ae" stroke-width="1.5"/><path d="M30 524 L220 524 M30 568 L220 568" stroke="#90a4ae" stroke-width="1.5"/><circle cx="125" cy="466" r="12" fill="#6a1b9a"/><text x="125" y="472" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">٤</text><text x="125" y="496" text-anchor="middle" font-size="15" font-weight="800" fill="#6a1b9a">أكثر سالبية</text><text x="125" y="515" text-anchor="middle" font-size="15" font-weight="800" fill="#6a1b9a">من جهد الراحة</text><text x="125" y="552" text-anchor="middle" font-size="17" font-weight="500" fill="#1f2933">مغلقة</text><text x="125" y="596" text-anchor="middle" font-size="17" font-weight="800" fill="#1b5e20">مفتوحة ثم تنغلق</text>
        <path d="M264.2 325.3 L265.6 326.3 L267 327.4 L268.5 328.6 L270.1 329.8 L271.8 330.9 L273.5 331.9 L275.2 332.9 L277.1 333.8 L278.9 334.6 L280.9 335.3 L282.9 336 L284.9 336.7 L287 337.3 L289.2 337.9 L291.4 338.5 L293.7 339 L296 339.6 L298.4 340.1 L300.7 340.7 L303.1 341.1 L305.6 341.6 L308 342 L310.6 342.4 L313.2 342.8 L315.9 343.1 L318.7 343.3 L321.6 343.6 L324.6 343.8 L327.7 343.9 L331 344 L334.5 344 L338.2 344 L342 343.9 L346.1 343.7 L350.3 343.4 L354.7 343.2 L359.2 342.8 L363.7 342.5 L368.3 342.1 L372.9 341.7 L377.5 341.3 L382 340.8 L386.5 340.4 L390.8 340 L395 339.6 L399.1 339.2 L403.1 338.8 L407.1 338.3 L411.1 337.9 L415 337.4 L419 336.9 L422.8 336.4 L426.7 335.9 L430.6 335.4 L434.4 334.9 L438.3 334.5 L442.2 334 L446.1 333.5 L450 333 L453.9 332.5 L457.9 332.1 L461.8 331.6 L465.7 331.1 L469.6 330.6 L473.6 330.2 L477.5 329.7 L481.4 329.2 L485.4 328.8 L489.3 328.3 L493.2 327.8 L497.1 327.3 L501.1 326.9 L505 326.4 L509.1 325.9 L513.3 325.4 L517.8 324.9 L522.3 324.3 L526.9 323.8 L531.5 323.2 L535.9 322.7 L540.3 322.2 L544.4 321.7 L548.3 321.2 L551.9 320.8 L555 320.4 L557.8 320.1 L560 319.8" fill="none" stroke="#6a1b9a" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="334.5" cy="368" r="13" fill="#6a1b9a"/><text x="334.5" y="374" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">٤</text>
      </g>
      <g class="dg-hotspot" data-id="peak">
        <circle cx="202.5" cy="102" r="6" fill="#ffffff" stroke="#c62828" stroke-width="3"/>
        <text x="254.5" y="104" text-anchor="middle" font-size="17" font-weight="800" fill="#c62828">+30 mV</text>
        <rect x="190.5" y="82" width="110" height="34" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="refractory">
        <rect x="600" y="130" width="230" height="46" rx="12" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
        <text x="715" y="160" text-anchor="middle" font-size="18" font-weight="800" fill="#1b5e20">فترة الجموح</text>
      </g>
    </svg>`,
    hotspots: {
      'rest': { label: 'جهد الراحة', desc: 'جهد الراحة Resting potential: الفرق في الجهد الكهربائي الذي يتم الحفاظ عليه عبر غشاء سطح الخلية للخلايا العصبية عندما لا يقوم بنقل جهد فعل؛ عادة ما يكون نحو 70 mV- بالداخل ويتم الحفاظ عليه جزئيًا بواسطة مضخات الصوديوم والبوتاسيوم. <br><small>كتاب الطالب — ص 171</small>' },
      'threshold': { label: 'جهد العتبة', desc: 'يتم توليد جهود الفعل فقط إذا وصل فرق الجهد إلى قيمة بين 60 mV- و 50 mV-. هذه القيمة هي جهد العتبة Threshold potential. وإذا لم يتم الوصول إلى هذه القيمة، فلن يحدث جهد فعل. <br><small>كتاب الطالب — ص 174</small>' },
      'depol': { label: 'إزالة الاستقطاب', desc: 'يتسبب التيار الكهربائي المستخدم لتنبيه المحور الأسطواني بفتح قنوات الصوديوم المبوبة بالفولتية في غشاء سطح الخلية، ما يسمح بدخول أيونات الصوديوم عبرها. وتسبب حركة أيونات الصوديوم نحو الداخل تغييرات في فرق الجهد عبر الغشاء، والذي يصبح أقل سالبية في الداخل مقارنة بالخارج. وهذا ما يسمى بإزالة الاستقطاب Depolarisation. <br><small>كتاب الطالب — ص 174</small>' },
      'peak': { label: '30 mV+', desc: 'يؤدي هذا إلى فتح المزيد من القنوات بحيث تدخل المزيد من أيونات الصوديوم، ويترتب على ذلك المزيد من إزالة الاستقطاب. إذا وصل فرق الجهد إلى نحو 50 mV-، فسيتم فتح المزيد من القنوات حتى يصل داخل الغشاء إلى جهد يعادل 30 mV+ مقارنة بالخارج. <br><small>كتاب الطالب — ص 174</small>' },
      'repol': { label: 'إعادة الاستقطاب', desc: 'بعد نحو 1 ms، تغلق جميع القنوات المبوبة بالفولتية لأيونات الصوديوم، لذلك تتوقف أيونات الصوديوم عن الانتشار إلى داخل المحور الأسطواني. في الوقت نفسه، تفتح مجموعة أخرى من البروتينات القنوية المبوبة بالفولتية للسماح بانتشار أيونات البوتاسيوم إلى خارج المحور الأسطواني، مع منحدر تركيزها. تتسبب حركة أيونات البوتاسيوم إلى الخارج بانتقال الشحنة الموجبة من داخل المحور الأسطواني إلى خارجه، وبالتالي تعيد فرق الجهد إلى الوضع الطبيعي 70 mV-. وهذا ما يُسمى إعادة الاستقطاب Repolarisation. <br><small>كتاب الطالب — ص 174</small>' },
      'undershoot': { label: 'أكثر سالبية من جهد الراحة', desc: 'وفي الواقع، يصبح فرق الجهد عبر الغشاء، لفترة وجيزة، أكثر سالبية من جهد الراحة في الحالة الطبيعية. بعد ذلك، تنغلق البروتينات القنوية المبوبة بالفولتية لأيونات البوتاسيوم، وتعود البروتينات القنوية المبوبة بالفولتية لأيونات الصوديوم للاستجابة مرة أخرى لحالة إزالة الاستقطاب. <br><small>كتاب الطالب — ص 174</small>' },
      'refractory': { label: 'فترة الجموح', desc: 'هذا لأن المنطقة الواقعة في الخلف تكون في حالة تعافٍ من جهد الفعل الذي حدث فيها للتو، لذلك يتم إغلاق البروتينات القنوية المبوبة بالفولتية لأيونات الصوديوم. تكون هذه القنوات مغلقة بإحكام بحيث لا يمكن فتحها. تسمى فترة التعافي (العودة إلى الوضع الطبيعي)، والتي لا يستجيب خلالها المحور الأسطواني، باسم فترة الجموح Refractory period. <br><small>كتاب الطالب — ص 176</small>' }
    }
  },
  {
    id: 'cholinergic-synapse-s1',
    title: 'التشابك العصبي الكوليني',
    figure: 'الشكلان ٥-١٩ و ٥-٢٠',
    page: 'ص 184-187',
    obj: '5-8',
    legend: 'التشابك العصبي الكوليني: التشابك العصبي الذي تكون فيه المادة الناقلة هي الأستيل كولين (ACh).',
    svg: `<svg viewBox="0 0 860 620" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="csArr" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="9" refX="10" refY="4.5" orient="auto"><path d="M0,0 L11,4.5 L0,9 Z" fill="#263238"/></marker><marker id="csArrG" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="9" refX="10" refY="4.5" orient="auto"><path d="M0,0 L11,4.5 L0,9 Z" fill="#00695c"/></marker><marker id="csArrR" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="9" refX="10" refY="4.5" orient="auto"><path d="M0,0 L11,4.5 L0,9 Z" fill="#ad1457"/></marker></defs>
      <rect width="860" height="620" fill="#fdfdfb"/>
      <text x="430" y="34" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">التشابك العصبي الكوليني</text>
      <g class="dg-hotspot" data-id="presyn">
        <path d="M390 52 L390 120 C390 172, 250 172, 240 252 C235 302, 280 320, 430 320 C580 320, 625 302, 620 252 C610 172, 470 172, 470 120 L470 52 Z" fill="#cfe6f7" stroke="#3f83b5" stroke-width="2.5"/>
        <rect x="375" y="52" width="15" height="46" fill="#e9d59a" stroke="#a8894a" stroke-width="1.5"/><rect x="470" y="52" width="15" height="46" fill="#e9d59a" stroke="#a8894a" stroke-width="1.5"/>
        <g transform="translate(352 196) rotate(-20)"><ellipse rx="30" ry="14" fill="#ffffff" stroke="#37474f" stroke-width="2"/><path d="M-20 0 Q-14 -10 -8 0 Q-2 10 4 0 Q10 -10 16 0" fill="none" stroke="#37474f" stroke-width="1.6"/></g>
        <g transform="translate(508 196) rotate(20)"><ellipse rx="30" ry="14" fill="#ffffff" stroke="#37474f" stroke-width="2"/><path d="M-20 0 Q-14 -10 -8 0 Q-2 10 4 0 Q10 -10 16 0" fill="none" stroke="#37474f" stroke-width="1.6"/></g>
        <path d="M430 62 L430 118" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#csArr)"/>
        <circle cx="452" cy="84" r="12" fill="#263238"/><text x="452" y="89.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">1</text>
        <path d="M300 74 L374 74" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="238" y="80" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">غلاف مايليني</text>
        <path d="M300 110 L405 110" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="232" y="116" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">محور أسطواني</text>
        <path d="M650 150 L538 186" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="722" y="150" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">ميتوكندريون</text>
        <path d="M650 84 L476 130" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="744" y="84" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خلية عصبية قبل تشابكية</text>
        <rect x="648" y="64" width="196" height="32" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="ca-channel">
        <g transform="translate(254 222) rotate(62)"><rect x="-13" y="-11" width="8" height="22" rx="3" fill="#00897b" stroke="#00594f" stroke-width="1.3"/><rect x="5" y="-11" width="8" height="22" rx="3" fill="#00897b" stroke="#00594f" stroke-width="1.3"/></g>
        <g transform="translate(606 222) rotate(-62)"><rect x="-13" y="-11" width="8" height="22" rx="3" fill="#00897b" stroke="#00594f" stroke-width="1.3"/><rect x="5" y="-11" width="8" height="22" rx="3" fill="#00897b" stroke="#00594f" stroke-width="1.3"/></g>
        <path d="M672 196 L626 212" fill="none" stroke="#00695c" stroke-width="2.2" marker-end="url(#csArrG)"/>
        <text x="700" y="200" text-anchor="middle" font-size="17" font-weight="800" fill="#00594f">Ca²⁺</text>
        <circle cx="644" cy="236" r="12" fill="#263238"/><text x="644" y="241.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">2</text>
        <path d="M196 214 L240 220" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="118" y="206" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">قناة كالسيوم</text>
        <text x="118" y="228" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">مفتوحة</text>
        <rect x="60" y="186" width="138" height="50" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="vesicle">
        <circle cx="330" cy="246" r="15" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/><circle cx="325" cy="242" r="2.2" fill="#2e7d32"/><circle cx="335" cy="243" r="2.2" fill="#2e7d32"/><circle cx="330" cy="251" r="2.2" fill="#2e7d32"/><circle cx="324" cy="251" r="2.2" fill="#2e7d32"/><circle cx="336" cy="251" r="2.2" fill="#2e7d32"/>
        <circle cx="400" cy="228" r="15" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/><circle cx="395" cy="224" r="2.2" fill="#2e7d32"/><circle cx="405" cy="225" r="2.2" fill="#2e7d32"/><circle cx="400" cy="233" r="2.2" fill="#2e7d32"/><circle cx="394" cy="233" r="2.2" fill="#2e7d32"/><circle cx="406" cy="233" r="2.2" fill="#2e7d32"/>
        <circle cx="468" cy="244" r="15" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/><circle cx="463" cy="240" r="2.2" fill="#2e7d32"/><circle cx="473" cy="241" r="2.2" fill="#2e7d32"/><circle cx="468" cy="249" r="2.2" fill="#2e7d32"/><circle cx="462" cy="249" r="2.2" fill="#2e7d32"/><circle cx="474" cy="249" r="2.2" fill="#2e7d32"/>
        <circle cx="536" cy="240" r="15" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/><circle cx="531" cy="236" r="2.2" fill="#2e7d32"/><circle cx="541" cy="237" r="2.2" fill="#2e7d32"/><circle cx="536" cy="245" r="2.2" fill="#2e7d32"/><circle cx="530" cy="245" r="2.2" fill="#2e7d32"/><circle cx="542" cy="245" r="2.2" fill="#2e7d32"/>
        <circle cx="372" cy="286" r="15" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/><circle cx="367" cy="282" r="2.2" fill="#2e7d32"/><circle cx="377" cy="283" r="2.2" fill="#2e7d32"/><circle cx="372" cy="291" r="2.2" fill="#2e7d32"/><circle cx="366" cy="291" r="2.2" fill="#2e7d32"/><circle cx="378" cy="291" r="2.2" fill="#2e7d32"/>
        <circle cx="500" cy="286" r="15" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/><circle cx="495" cy="282" r="2.2" fill="#2e7d32"/><circle cx="505" cy="283" r="2.2" fill="#2e7d32"/><circle cx="500" cy="291" r="2.2" fill="#2e7d32"/><circle cx="494" cy="291" r="2.2" fill="#2e7d32"/><circle cx="506" cy="291" r="2.2" fill="#2e7d32"/>
        <path d="M414 318 A16 16 0 0 1 446 318" fill="#ffffff" stroke="#2e7d32" stroke-width="2"/>
        <circle cx="422" cy="314" r="2.2" fill="#2e7d32"/>
        <circle cx="430" cy="309" r="2.2" fill="#2e7d32"/>
        <circle cx="438" cy="314" r="2.2" fill="#2e7d32"/>
        <path d="M436 262 L432 296" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#csArr)"/>
        <circle cx="452" cy="270" r="12" fill="#263238"/><text x="452" y="275.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">3</text>
        <circle cx="462" cy="304" r="12" fill="#263238"/><text x="462" y="309.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">4</text>
        <path d="M206 280 L316 254" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="118" y="268" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">حويصلة تشابكية تحتوي</text>
        <text x="118" y="290" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">على الأستيل كولين</text>
        <rect x="30" y="250" width="178" height="48" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="cleft">
        <rect x="238" y="322" width="384" height="26" fill="#ffffff" fill-opacity="0"/>
        <circle cx="300" cy="334" r="2.6" fill="#2e7d32"/>
        <circle cx="322" cy="340" r="2.6" fill="#2e7d32"/>
        <circle cx="346" cy="332" r="2.6" fill="#2e7d32"/>
        <circle cx="372" cy="338" r="2.6" fill="#2e7d32"/>
        <circle cx="420" cy="330" r="2.6" fill="#2e7d32"/>
        <circle cx="432" cy="340" r="2.6" fill="#2e7d32"/>
        <circle cx="444" cy="332" r="2.6" fill="#2e7d32"/>
        <circle cx="486" cy="338" r="2.6" fill="#2e7d32"/>
        <circle cx="510" cy="332" r="2.6" fill="#2e7d32"/>
        <circle cx="534" cy="340" r="2.6" fill="#2e7d32"/>
        <circle cx="556" cy="334" r="2.6" fill="#2e7d32"/>
        <circle cx="396" cy="335" r="12" fill="#263238"/><text x="396" y="340.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">5</text>
        <path d="M170 340 L240 336" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="118" y="346" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">شق تشابكي</text>
        <rect x="66" y="328" width="106" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="postmem">
        <path d="M240 376 C245 354, 330 354, 430 354 C530 354, 615 354, 620 376 C625 436, 480 446, 470 506 L470 600 L390 600 L390 506 C380 446, 235 436, 240 376 Z" fill="#cfe6f7" stroke="#3f83b5" stroke-width="2.5"/>
        <path d="M240 376 C245 354, 330 354, 430 354 C530 354, 615 354, 620 376" fill="none" stroke="#1a5a8a" stroke-width="5"/>
        <circle cx="560" cy="404" r="12" fill="#263238"/><text x="560" y="409.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">8</text>
        <path d="M660 440 L612 392" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="738" y="452" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">غشاء بعد تشابكي</text>
        <rect x="668" y="434" width="140" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
        <path d="M650 540 L474 540" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="744" y="546" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خلية عصبية بعد تشابكية</text>
        <rect x="648" y="528" width="196" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="receptor">
        <rect x="311" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><rect x="325" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><path d="M322 378 L322 404" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#csArr)"/>
        <rect x="381" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><rect x="395" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><path d="M392 378 L392 404" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#csArr)"/>
        <rect x="457" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><rect x="471" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><path d="M468 378 L468 404" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#csArr)"/>
        <rect x="527" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><rect x="541" y="349" width="8" height="26" rx="3" fill="#f39c12" stroke="#a15c00" stroke-width="1.3"/><path d="M538 378 L538 404" fill="none" stroke="#263238" stroke-width="2" marker-end="url(#csArr)"/>
        <text x="430" y="428" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2933">Na⁺</text>
        <circle cx="358" cy="378" r="12" fill="#263238"/><text x="358" y="383.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">6</text>
        <circle cx="430" cy="392" r="12" fill="#263238"/><text x="430" y="397.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">7</text>
        <path d="M196 420 L312 372" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="118" y="418" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">قناة أيونية</text>
        <text x="118" y="440" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">مفتوحة</text>
        <rect x="64" y="400" width="110" height="48" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="esterase">
        <circle cx="594" cy="350" r="9" fill="#e53935" stroke="#8e1b1b" stroke-width="1.6"/>
        <circle cx="580" cy="330" r="12" fill="#263238"/><text x="580" y="335.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">9</text>
        <path d="M650 362 L604 353" fill="none" stroke="#455a64" stroke-width="1.6"/>
        <text x="748" y="356" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">إنزيم الأستيل كولين</text>
        <text x="748" y="378" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">إستريز</text>
        <rect x="668" y="338" width="160" height="46" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="recycle">
        <path d="M606 342 C 660 330, 664 286, 624 268" fill="none" stroke="#ad1457" stroke-width="2.4" stroke-dasharray="6 3" marker-end="url(#csArrR)"/>
        <circle cx="668" cy="300" r="12" fill="#263238"/><text x="668" y="305.5" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">10</text>
        <text x="730" y="306" text-anchor="middle" font-size="17" font-weight="800" fill="#880e4f">الكولين</text>
        <rect x="650" y="282" width="120" height="36" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
    </svg>`,
    hotspots: {
      'presyn': { label: 'خلية عصبية قبل تشابكية', desc: 'يحدث جهد فعل على غشاء سطح الخلية العصبية قبل التشابكية Presynaptic neurone. يتسبب جهد الفعل في إطلاق جزيئات كناقل عصبي في الشق التشابكي. يحتوي السيتوبلازم في الخلية العصبية قبل التشابكية على حويصلات ممتلئة بالناقل العصبي. <br><small>كتاب الطالب — ص 184</small>' },
      'ca-channel': { label: 'قناة كالسيوم مفتوحة', desc: 'حدوث جهد الفعل وإزالة الاستقطاب في الخلية العصبية قبل التشابكية، يحفز فتح البروتينات القنوية المبوبة بالفولتية لأيونات الكالسيوم Voltage-gated calcium ion channel proteins، فيؤدي ذلك إلى انتشار أيونات الكالسيوم إلى داخل الخلية مع المنحدر الكهروكيميائي الحاد لها؛ على افتراض أنه لا توجد أيونات كالسيوم في السيتوبلازم، إنما فقط في السائل المحيط بها. <br><small>كتاب الطالب — ص 185</small>' },
      'vesicle': { label: 'حويصلة تشابكية تحتوي على الأستيل كولين', desc: 'يحفز تدفق أيونات الكالسيوم الحويصلات التي تحتوي على (ACh) للانتقال إلى الغشاء قبل التشابكي والاندماج معه، ما يؤدي إلى إفراغ محتوياتها في الشق التشابكي. يتسبب كل جهد فعل في دفع بضع حويصلات فقط للقيام بذلك. تحتوي كل حويصلة على ما يصل إلى 10000 جزيء من (ACh). <br><small>كتاب الطالب — ص 185</small>' },
      'cleft': { label: 'شق تشابكي', desc: 'عندما تلتقي خليتان عصبيتان، فإنهما لا تتلامسان تمامًا. هناك فجوة صغيرة جدًا يبلغ عرضها نحو 20 nm بينهما. هذه الفجوة تسمى الشق التشابكي Synaptic cleft. ينتشر (ACh) عبر الشق التشابكي عادة في أقل من (0.5 ms). <br><small>كتاب الطالب — ص 184-185</small>' },
      'receptor': { label: 'قناة أيونية مفتوحة', desc: 'يحتوي غشاء سطح الخلية العصبية بعد التشابكية على بروتينات مستقبلة Receptor proteins. لجزء من جزيء البروتين المستقبل شكل مكمل لجزء من (ACh)، بحيث يمكن لجزيئات (ACh) الارتباط مؤقتًا بجزيئات هذا البروتين المستقبل والذي يسبِّب تغيرًا في شكل جزيئات البروتين المستقبل، ما يؤدي إلى فتح القنوات الأيونية. <br><small>كتاب الطالب — ص 185</small>' },
      'postmem': { label: 'غشاء بعد تشابكي', desc: 'تخضع المستقبلات لتغييرات في تركيبها وتفتح القنوات الأيونية للسماح لأيونات الصوديوم بالانتشار إلى داخل الخلايا العصبية بعد التشابكية. يصبح الغشاء بعد التشابكي في حالة إزالة استقطاب. <br><small>كتاب الطالب — ص 186</small>' },
      'esterase': { label: 'إنزيم الأستيل كولين إستريز', desc: 'الأستيل كولين إستريز Acetylcholinesterase: إنزيم موجود في الشق التشابكي وبالتحديد على سطح الغشاء بعد التشابكي (من جهة الشق التشابكي)، وهو يقوم بالتحليل المائي لجزيئات (ACh) إلى جزيئات من الأسيتات والكولين. <br><small>كتاب الطالب — ص 187</small>' },
      'recycle': { label: 'إعادة تدوير الكولين', desc: 'تقوم الخلايا العصبية قبل التشابكية بامتصاص جزيئات الكولين وتعيد تدويره وتصنع منه (ACh) مرة أخرى. <br><small>كتاب الطالب — ص 186</small>' }
    }
  },
  {
    id: 'sarcomere-s1',
    title: 'القطعة العضلية ونموذج الخيط المنزلق',
    figure: 'الشكلان ٥-٢٤ و ٥-٢٥',
    page: 'ص 190-193',
    obj: '5-9',
    legend: 'نموذج الخيط المنزلق: آلية انقباض العضلات. داخل كل قطعة عضلية، تتحرك الخيوط الرفيعة لتقترب من بعضها بفعل رؤوس الميوسين في الخيوط السميكة ما يسبب تقصر الطول الإجمالي لكل ليف عضلي.',
    svg: `<svg viewBox="0 0 860 640" xmlns="http://www.w3.org/2000/svg" class="s1dg" style="font-family:Tajawal,Arial,sans-serif;width:100%;height:auto;">
      <style>.s1dg text{unicode-bidi:plaintext;}</style>
      <defs><marker id="scArr" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 Z" fill="#d81b60"/></marker></defs>
      <rect width="860" height="640" fill="#fdfdfb"/>
      <text x="430" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#0d47a1">القطعة العضلية ونموذج الخيط المنزلق</text>
      <rect x="40" y="116" width="780" height="156" fill="#fbe6da"/>
      <g class="dg-hotspot" data-id="relaxed">
        <rect x="318" y="40" width="224" height="28" rx="10" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/><text x="430" y="60" text-anchor="middle" font-size="17" font-weight="800" fill="#1565c0">عندما تنبسط العضلة</text>
      </g>
      <g class="dg-hotspot" data-id="actin">
        <path d="M40 126 L340 126 M520 126 L820 126" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M40 160 L340 160 M520 160 L820 160" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M40 194 L340 194 M520 194 L820 194" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M40 228 L340 228 M520 228 L820 228" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M40 262 L340 262 M520 262 L820 262" stroke="#d8836f" stroke-width="3.5" fill="none"/>
        <path d="M380 398 L430 398" stroke="#d8836f" stroke-width="3.5"/>
        <text x="275" y="404" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خيط رفيع من الأكتين</text>
        <rect x="186" y="384" width="250" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="myosin">
        <path d="M250 143 L610 143" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 143 L90 143" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M770 143 L820 143" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M250 177 L610 177" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 177 L90 177" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M770 177 L820 177" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M250 211 L610 211" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 211 L90 211" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M770 211 L820 211" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M250 245 L610 245" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 245 L90 245" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M770 245 L820 245" stroke="#a3283a" stroke-width="8" fill="none"/>
        <path d="M770 398 L814 398" stroke="#a3283a" stroke-width="8" stroke-linecap="round"/>
        <text x="660" y="404" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">خيط سميك من الميوسين</text>
        <rect x="566" y="384" width="254" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="m-line">
        <path d="M430 112 L430 290" stroke="#37474f" stroke-width="3" fill="none"/>
        <text x="430" y="308" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2933">الخط M</text>
        <rect x="396" y="276" width="68" height="38" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="sarcomere">
        <path d="M174 108 L174 100 L686 100 L686 108" fill="none" stroke="#263238" stroke-width="2"/>
        <text x="430" y="92" text-anchor="middle" font-size="17" font-weight="800" fill="#1f2933">قطعة عضلية</text>
        <rect x="370" y="72" width="120" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="dg-hotspot" data-id="i-band">
        <rect x="90" y="318" width="160" height="26" rx="4" fill="#eceff1" stroke="#78909c" stroke-width="1.5"/><text x="170" y="337" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2933">الحزمة I</text>
        <rect x="610" y="318" width="160" height="26" rx="4" fill="#eceff1" stroke="#78909c" stroke-width="1.5"/><text x="690" y="337" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2933">الحزمة I</text>
      </g>
      <g class="dg-hotspot" data-id="a-band">
        <rect x="250" y="318" width="360" height="26" rx="4" fill="#b3e5fc" stroke="#0277bd" stroke-width="1.5"/><text x="430" y="337" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2933">الحزمة A</text>
      </g>
      <g class="dg-hotspot" data-id="h-band">
        <rect x="340" y="350" width="180" height="26" rx="4" fill="#b3e5fc" stroke="#0277bd" stroke-width="1.5"/><text x="430" y="369" text-anchor="middle" font-size="16" font-weight="800" fill="#1f2933">الحزمة H</text>
      </g>
      <g class="dg-hotspot" data-id="contracted">
        <rect x="40" y="456" width="780" height="156" fill="#fbe6da"/>
        <path d="M60 466 L400 466 M460 466 L800 466" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M60 500 L400 500 M460 500 L800 500" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M60 534 L400 534 M460 534 L800 534" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M60 568 L400 568 M460 568 L800 568" stroke="#d8836f" stroke-width="3.5" fill="none"/><path d="M60 602 L400 602 M460 602 L800 602" stroke="#d8836f" stroke-width="3.5" fill="none"/>
        <path d="M250 483 L610 483" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 483 L210 483" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M650 483 L820 483" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M250 517 L610 517" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 517 L210 517" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M650 517 L820 517" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M250 551 L610 551" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 551 L210 551" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M650 551 L820 551" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M250 585 L610 585" stroke="#a3283a" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M40 585 L210 585" stroke="#a3283a" stroke-width="8" fill="none"/><path d="M650 585 L820 585" stroke="#a3283a" stroke-width="8" fill="none"/>
        <rect x="318" y="416" width="224" height="28" rx="10" fill="#fce4ec" stroke="#ad1457" stroke-width="2"/><text x="430" y="436" text-anchor="middle" font-size="17" font-weight="800" fill="#ad1457">عندما تنقبض العضلة</text>
        <path d="M246 630 L330 630" fill="none" stroke="#d81b60" stroke-width="3" marker-end="url(#scArr)"/><path d="M614 630 L530 630" fill="none" stroke="#d81b60" stroke-width="3" marker-end="url(#scArr)"/><path d="M430 450 L430 618" stroke="#37474f" stroke-width="3" fill="none"/>
      </g>
      <g class="dg-hotspot" data-id="z-line">
        <path d="M170 110 L170 278 M690 110 L690 278" stroke="#7b1e2b" stroke-width="3.5" fill="none"/>
        <path d="M230 450 L230 618 M630 450 L630 618" stroke="#7b1e2b" stroke-width="3.5" fill="none"/>
        <text x="170" y="92" text-anchor="middle" font-size="17" font-weight="800" fill="#7b1e2b">الخط Z</text>
        <text x="690" y="92" text-anchor="middle" font-size="17" font-weight="800" fill="#7b1e2b">الخط Z</text>
        <text x="230" y="440" text-anchor="middle" font-size="17" font-weight="800" fill="#7b1e2b">الخط Z</text>
        <text x="630" y="440" text-anchor="middle" font-size="17" font-weight="800" fill="#7b1e2b">الخط Z</text>
        <rect x="136" y="72" width="68" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
        <rect x="656" y="72" width="68" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
        <rect x="196" y="420" width="68" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
        <rect x="596" y="420" width="68" height="30" rx="8" fill="#ffffff" fill-opacity="0"/>
      </g>
    </svg>`,
    hotspots: {
      'sarcomere': { label: 'القطعة العضلية', desc: 'يسمى جزء اللييف العضلي الواقع بين خطي Z باسم القطعة العضلية Sarcomere. <br><small>كتاب الطالب — ص 191</small>' },
      'z-line': { label: 'الخط Z', desc: 'يوفر الخط المعروف باسم الخط Z مرفقًا لارتباط خيوط الأكتين الرفيعة. تتميز اللييفات العضلية بشكلها الأسطواني، لذا فإن الخط Z هو في الحقيقة قرص يفصل قطعة عضلية واحدة عن الأخرى المجاورة لها، ولذلك يسمى أيضًا باسم القرص Z. <br><small>كتاب الطالب — ص 191</small>' },
      'm-line': { label: 'الخط M', desc: 'يوفر الخط المعروف باسم الخط Z مرفقًا لارتباط خيوط الأكتين الرفيعة، ويمثل الخط M الشيء نفسه بالنسبة إلى خيوط الميوسين. <br><small>كتاب الطالب — ص 191</small>' },
      'a-band': { label: 'الحزمة A', desc: 'تشير الأجزاء الداكنة من الخطوط، الحزمة A (A band)، إلى خيوط الميوسين السميكة. الأجزاء الأكثر قتامة من الحزمة A هي تداخل الخيوط السميكة والرفيعة معًا. <br><small>كتاب الطالب — ص 190-191</small>' },
      'i-band': { label: 'الحزمة I', desc: 'وأما الأجزاء الفاتحة، الحزمة I، فهي حيث لا توجد خيوط الميوسين السميكة، وتوجد فقط خيوط الأكتين الرفيعة. <br><small>كتاب الطالب — ص 191</small>' },
      'h-band': { label: 'الحزمة H', desc: 'والمنطقة في وسط الحزمة A والتي تبدو أفتح لونًا تسمى الحزمة H وتمثل الأجزاء التي توجد بها الخيوط السميكة فقط. <br><small>كتاب الطالب — ص 191</small>' },
      'myosin': { label: 'خيط سميك من الميوسين', desc: 'تتكوّن الخيوط السميكة من العديد من جزيئات الميوسين، وهو بروتين ليفي له رأس كروي الشكل. يساعد الجزء الليفي على تثبيته في الخيط السميك. داخل الخيوط السميكة، فتتموضع العديد من جزيئات الميوسين معًا في حزمة حيث تتجه رؤوسها الكروية جميعها بعيدًا عن الخط M. <br><small>كتاب الطالب — ص 191</small>' },
      'actin': { label: 'خيط رفيع من الأكتين', desc: 'المكوّن الرئيسي للخيوط الرفيعة هو بروتين كروي يسمى الأكتين. ترتبط العديد من جزيئات الأكتين معًا لتشكيل سلسلة. تلتف اثنتان من هذه السلاسل إحداهما على الأخرى لتشكل خيطًا رفيعًا. <br><small>كتاب الطالب — ص 191</small>' },
      'relaxed': { label: 'عندما تنبسط العضلة', desc: 'عندما تنبسط العضلة، يستقر التروبوميوسين والتروبونين في موضع في خيوط الأكتين وهذا يمنع الميوسين من الارتباط. <br><small>كتاب الطالب — ص 192</small>' },
      'contracted': { label: 'عندما تنقبض العضلة', desc: 'تسبب العضلات الحركة عن طريق انقباضها. تصبح القطع العضلية في كل لييف عضلي أقصر مع سحب أقراص Z قرب بعضها. بعد ذلك تتحرك رؤوس الميوسين، وتسحب خيوط الأكتين نحو مركز القطعة العضلية. <br><small>كتاب الطالب — ص 192-193</small>' }
    }
  }
];

})();
