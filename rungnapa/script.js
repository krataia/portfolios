// Content for both portfolios. Sections in index.html are filled from here.
const PEOPLE = {
  rungnapa: {
    index: "01",
    name: "นางสาวรุ่งนภา สาระพงศ์",
    target: "สาขาการเมืองการปกครอง วิทยาลัยการเมืองและการปกครอง มหาวิทยาลัยราชภัฏสวนสุนันทา",
    school: "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก",
    portrait: "img/r-portrait.jpg",
    statementTitle: "จดหมายแสดงเจตจำนง",
    statement: [
      "ดิฉันมีความสนใจด้านการเมืองและการปกครอง เนื่องจากมองว่าการเมืองเป็นเรื่องที่เกี่ยวข้องกับชีวิตประจำวันของประชาชนทุกคน ไม่ว่าจะเป็นเรื่องสิทธิ หน้าที่ กฎหมาย นโยบายของรัฐ หรือการพัฒนาสังคม ความสนใจนี้ทำให้ดิฉันต้องการเรียนรู้และทำความเข้าใจเกี่ยวกับการเมืองการปกครองให้มากยิ่งขึ้น และต้องการนำความรู้ที่ได้รับไปใช้ให้เกิดประโยชน์ในอนาคต",
      "ดิฉันเลือกศึกษาต่อในสาขาการเมืองการปกครอง เพราะต้องการพัฒนาความรู้เกี่ยวกับระบบการเมือง การบริหารประเทศ และบทบาทของประชาชนในสังคม รวมถึงฝึกทักษะการคิดวิเคราะห์อย่างมีเหตุผล การรับฟังความคิดเห็นที่แตกต่าง และการสื่อสารกับผู้อื่นอย่างสร้างสรรค์ ดิฉันเชื่อว่าการเรียนรัฐศาสตร์ไม่ได้ให้เพียงความรู้ด้านการเมือง แต่ยังช่วยให้เข้าใจผู้คนและปัญหาที่เกิดขึ้นในสังคมได้อย่างรอบด้าน",
      "ตลอดการเรียนที่ผ่านมา ดิฉันได้เรียนรู้การทำงานร่วมกับผู้อื่นจากกิจกรรมต่าง ๆ ได้ฝึกความรับผิดชอบ การทำงานเป็นทีม การแก้ไขปัญหา และการปรับตัว หากได้รับโอกาส ดิฉันจะตั้งใจศึกษา พัฒนาความสามารถของตนเอง และนำความรู้ด้านการเมืองการปกครองไปต่อยอดในการทำงานให้เกิดประโยชน์ต่อสังคม"
    ],
    quote: "Never stop learning, never stop growing",
    facts: [["เกิด", "1 ตุลาคม 2551"], ["อายุ", "18 ปี"], ["สัญชาติ", "ไทย"], ["ศาสนา", "พุทธ"], ["GPAX", "2.78"]],
    skills: ["ความเป็นผู้นำ กล้าตัดสินใจ", "มั่นใจในการพูดในที่สาธารณะ", "ทำงานร่วมกับผู้อื่นได้ดีมาก", "แก้ปัญหาเฉพาะหน้าได้ดี", "มนุษยสัมพันธ์ดี เข้ากับคนง่าย"],
    hobbies: ["ทำอาหาร", "เล่นเกม", "เข้าร่วมกิจกรรมอาสา", "อ่านหนังสือ"],
    education: [
      ["อนุบาล", "โรงเรียนประสานศิลปศึกษา", ""],
      ["ประถมศึกษา", "โรงเรียนบ้านหัวสะพานมิตรภาพที่ 217", ""],
      ["มัธยมศึกษาตอนต้น", "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก", ""],
      ["มัธยมศึกษาตอนปลาย", "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก", "GPAX 2.78"]
    ],
    activities: [
      ["r-act01", "ประธานฝ่ายกีฬาสี", "บริหารจัดการโครงการทั้งระบบ ตั้งแต่วางแผน จัดสรรทรัพยากร และประสานงานเพื่อขับเคลื่อนทีมให้บรรลุเป้าหมาย ช่วยพัฒนาทักษะความเป็นผู้นำและการแก้ปัญหาเฉพาะหน้า"],
      ["r-act02", "หัวหน้าห้องและตัวแทนถือพานไหว้ครู", "บทบาทที่สะท้อนความรับผิดชอบในการเป็นศูนย์รวมจิตใจของเพื่อนร่วมชั้น ฝึกความพร้อม ความเรียบร้อย ความเสียสละ และระเบียบวินัย"],
      ["r-act03", "สตาฟกีฬาสีอำเภอ", "ทำงานร่วมกับเพื่อน ๆ ฝึกความรับผิดชอบ การสื่อสาร การประสานงาน การรับฟังความคิดเห็นของผู้อื่น และการแก้ไขปัญหาเฉพาะหน้า"],
      ["r-act04", "หัวหน้าถือป้ายตัวแทนสี", "ทำหน้าที่นำขบวนในการแข่งขันกีฬาสี ฝึกบุคลิกภาพ ความอดทน การควบคุมตนเอง และการรักษาวินัยภายใต้ความกดดัน"],
      ["r-act05", "จิตอาสาปลูกป่าชายเลน", "ลงมือปฏิบัติจริงจนเห็นความสำคัญของระบบนิเวศและการอนุรักษ์ทรัพยากรธรรมชาติ มีความรับผิดชอบต่อสังคมและสิ่งแวดล้อม"],
      ["r-act06", "อบรมขับขี่ปลอดภัย วินัยจราจร และสารเสพติด", "ได้ความรู้ที่ถูกต้องเรื่องกฎหมายจราจร และตระหนักถึงอันตรายของสารเสพติดรูปแบบใหม่ โดยเฉพาะบุหรี่ไฟฟ้า"],
      ["r-act07", "แข่งวอลเลย์บอลตัวแทนโรงเรียน", "ฝึกการทำงานเป็นทีม ความมีวินัย การสื่อสารกับสมาชิกในทีม และการควบคุมสถานการณ์เฉพาะหน้า"],
      ["r-act08", "จัดพานพุ่มถวายพระพรชัยมงคล", "ร่วมเตรียมสถานที่และดำเนินงานตามขั้นตอนพิธีการ ฝึกความรับผิดชอบ ระเบียบวินัย และการทำงานร่วมกันอย่างเป็นระบบ"],
      ["r-act09", "ศึกษาดูงานและออกสำรวจพื้นที่", "ฝึกการสังเกต การเก็บรวบรวมข้อมูล และการวิเคราะห์อย่างเป็นระบบ ได้มุมมองใหม่ที่เรียนรู้ได้จากพื้นที่จริง"],
      ["r-act10", "ถือธงงานปัจฉิมนิเทศ ปี 2568", "ฝึกความรับผิดชอบ ระเบียบวินัย การตรงต่อเวลา และการปฏิบัติตนอย่างเหมาะสมในงานพิธีการ"],
      ["r-act11", "กระโดดหอสูง 34 ฟุต", "ได้รับเกียรติบัตรผ่านการทดสอบกำลังใจระดับสูง เรียนรู้ว่าการก้าวข้ามข้อจำกัดของตนเองเป็นส่วนสำคัญของการพัฒนาศักยภาพ"],
      ["r-act12", "จิตอาสาแจกน้ำ ค่ายวชิราลงกรณ", "ดูแลและอำนวยความสะดวกแก่นักเรียนโรงเรียนคลองหมื่นเพชรอนุสรณ์ ส่งเสริมจิตสาธารณะและความรับผิดชอบ"],
      ["r-act13", "จัดบูธวันอาเซียน", "จัดเตรียมบูธและนำเสนอข้อมูลประเทศสมาชิก เรียนรู้ความหลากหลายทางวัฒนธรรมและความร่วมมือระหว่างประเทศในภูมิภาค"],
      ["r-act14", "ฟุตบอลกีฬาสีหมู่บ้าน", "วางแผนและประสานงานกับสมาชิกในทีม เรียนรู้ความสามัคคีและการทำงานร่วมกับผู้อื่นที่แตกต่างกัน"],
      ["r-act15", "กิจกรรมจับรางวัลประจำปี 2568", "มีส่วนร่วมกับสมาชิกในโรงเรียน ปฏิบัติตามกติกา และสร้างความสัมพันธ์อันดีระหว่างกัน"],
      ["r-act16", "อบรมปฐมพยาบาลเบื้องต้น", "ฝึกประเมินอาการและช่วยเหลือผู้บาดเจ็บก่อนนำส่งบุคลากรทางการแพทย์ มีสติ รอบคอบ และมั่นใจในการช่วยเหลือผู้อื่น"],
      ["r-act17", "ค่ายคุณธรรม", "เรียนรู้การอยู่ร่วมกับผู้อื่นอย่างเข้าใจ การช่วยเหลือและแบ่งปัน และนำหลักคุณธรรมมาใช้ในชีวิตประจำวัน"],
      ["r-act18", "ออกแบบผลิตภัณฑ์ในโครงการ", "ร่วมคิดและพัฒนาแนวคิดผลิตภัณฑ์ให้ตอบโจทย์การใช้งาน ฝึกการคิดวิเคราะห์ ความคิดสร้างสรรค์ และการทำงานเป็นทีม"]
    ],
    certificates: [
      ["r-cert1", "อบรมภาวะการเป็นผู้นำ"],
      ["r-cert2", "อบรมจิตอาสาพัฒนาสังคม"],
      ["r-cert3", "รณรงค์ต่อต้านยาเสพติด"],
      ["r-cert4", "กิจกรรมปลูกป่าชายเลน"],
      ["r-cert5", "อบรมขับขี่ปลอดภัยและสารเสพติด"],
      ["r-cert6", "เข้าค่ายคุณธรรม จริยธรรม"],
      ["r-cert7", "กระโดดหอสูง 34 ฟุต"],
      ["r-cert8", "อบรมรณรงค์และต่อต้านยาเสพติด"]
    ],
    contact: [["โทร", "061-047-7261", "tel:0610477261"], ["อีเมล", "pinrungnapa@gmail.com", "mailto:pinrungnapa@gmail.com"]]
  },

  nichaphat: {
    index: "02",
    name: "นางสาวณิชาภัทร ชะนา",
    target: "สาขารัฐศาสตร์ คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏสุราษฎร์ธานี",
    school: "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก",
    portrait: "img/n-portrait.jpg",
    statementTitle: "คำนำ",
    statement: [
      "รัฐศาสตร์ (Political Science) เป็นสาขาวิชาในกลุ่มสังคมศาสตร์ที่ศึกษาเกี่ยวกับรัฐ การเมืองการปกครอง นโยบายสาธารณะ และอำนาจในความสัมพันธ์ของมนุษย์ โดยมุ่งเน้นการคิดวิเคราะห์ทั้งในระดับท้องถิ่น ระดับประเทศ และระดับนานาชาติ เพื่อทำความเข้าใจสถาบันทางการเมือง การปกครอง และพฤติกรรมของมนุษย์ในสังคม",
      "เอกสารฉบับนี้มีวัตถุประสงค์เพื่อศึกษาถึงวิวัฒนาการ แนวคิดทฤษฎี และผลกระทบของนโยบายสาธารณะที่มีต่อประชาชน ได้จัดระเบียบสังคมและการขับเคลื่อนทางการเมือง เพื่อเป็นรากฐานสู่การเป็นพลเมืองที่ดี ตื่นรู้ และเท่าทันการเปลี่ยนแปลงของโลก",
      "ดิฉันหวังเป็นอย่างยิ่งว่าข้อมูลและการวิเคราะห์ในเอกสารฉบับนี้จะเป็นประโยชน์ต่อการทำความเข้าใจพลวัตทางการเมือง และจุดประกายความคิดในการพัฒนาสังคมให้ดียิ่งขึ้น"
    ],
    quote: "ริเริ่มสร้างสรรค์กิจกรรมที่มุ่งมั่น นำประโยชน์สู่ส่วนรวม",
    facts: [["เกิด", "24 มิถุนายน 2551"], ["เพศ", "หญิง"], ["สัญชาติ", "ไทย"], ["ศาสนา", "พุทธ"]],
    skills: [
      "ภาษาและการสื่อสาร",
      "ภาวะผู้นำ เก็บสถิติสำรวจความคิดเห็นของเพื่อนในห้องมาใช้เป็นแนวทางการเป็นผู้นำที่ดี",
      "การโน้มน้าวใจ หาจุดร่วมในความขัดแย้ง และสื่อสารประเด็นที่ซับซ้อน"
    ],
    hobbies: [],
    education: [
      ["ประถมศึกษา", "โรงเรียนบ้านปลายรา", "2559–2564"],
      ["มัธยมศึกษาตอนต้น", "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก", "2565–2567"],
      ["มัธยมศึกษาตอนปลาย", "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก", "2568–2570"]
    ],
    activities: [
      ["n-act01", "อบรมวินัย จราจร และสารเสพติด", "เสริมสร้างความเข้าใจเรื่องกฎจราจร ความปลอดภัยบนท้องถนน และพิษภัยของบุหรี่ไฟฟ้าและสารเสพติด เพื่อเป็นพลเมืองที่ดีที่เคารพกฎหมาย"],
      ["n-act02", "จิตอาสาพระราชทาน", "เป็นตัวแทนในพิธีมอบหมวกและผ้าพันคอจิตอาสาพระราชทาน ในโครงการ \"เราทำความดี ด้วยหัวใจ\" ร่วมสืบสานพระราชปณิธานทำความดีเพื่อส่วนรวม"],
      ["n-act03", "ค่ายคุณธรรม จริยธรรม", "ปลูกฝังความกตัญญู การปฏิบัติตนทั้งกาย วาจา และใจ และนำแนวคิดเรื่องการอยู่ร่วมกันในสังคมมาใช้ในชีวิตประจำวัน"],
      ["n-act04", "หัวหน้าขบวนพาเหรด ดรัมเมเยอร์ คณะสีแดง", "ได้รับคัดเลือกจากครูและเพื่อนให้เป็นตัวแทน ฝึกความอดทน และเรียนรู้การเป็นผู้นำที่คอยประคองเพื่อนให้คล้อยตามกันอย่างสามัคคี"],
      ["n-act05", "ศึกษาชุมชนกลุ่มอนุรักษ์ป่าชายเลน", "ใช้เวลาว่างศึกษาวิถีชีวิตผู้คนในชนบท ที่ดำรงชีวิตอย่างพอเพียง ประหยัด และพึ่งพาตนเอง"],
      ["n-act06", "ตัวแทนถือพานไหว้ครู ปีการศึกษา 2569", "ได้รับคัดเลือกจากเพื่อนและครูที่ปรึกษาในระดับมัธยมศึกษาปีที่ 6 ให้เป็นตัวแทนถือพานไหว้ครู"],
      ["n-act07", "จิตอาสาแจกเครื่องดื่มเด็กนักเรียน", "ร่วมกันสมทบทุนและแจกเครื่องดื่มให้นักเรียนระดับประถมศึกษา โรงเรียนคลองหมื่นเพชร"]
    ],
    certificates: [
      ["n-cert1", "อบรมภาวะการเป็นผู้นำและการทำงานเป็นทีม"],
      ["n-cert2", "ปลูกป่าชายเลนกับวิสาหกิจชุมชนบ้านหน้าทับ"],
      ["n-cert3", "ค่ายคุณธรรม จริยธรรม"],
      ["n-cert4", "อบรมรณรงค์และต่อต้านยาเสพติด"]
    ],
    contact: [
      ["โทร", "094-540-5383", "tel:0945405383"],
      ["อีเมล", "nichaphatchana@gmail.com", "mailto:nichaphatchana@gmail.com"],
      ["Instagram", "nichaphxt_51", "https://instagram.com/nichaphxt_51"],
      ["Facebook", "Nichaphat.", ""],
      ["ที่อยู่", "อ.ถ้ำพรรณรา จ.นครศรีธรรมราช", ""]
    ]
  }
};


const VISIBLE_ACTIVITIES = 8;
const pad2 = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function item(img, title, text, no, hidden) {
  return `<article class="item reveal"${hidden ? " hidden" : ""}>
    <button class="thumb" type="button" aria-label="ขยายภาพ ${esc(title)}"><img src="img/${img}.jpg" alt="${esc(title)}" loading="lazy"></button>
    <p class="item-no">${no}</p>
    <h4>${esc(title)}</h4>${text ? `<p>${esc(text)}</p>` : ""}
  </article>`;
}

function renderPerson(p) {
  const stack = (items) => `<ul class="stack">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  // collapse only long lists; hiding one or two items behind a button is not worth the click
  const extra = p.activities.length > VISIBLE_ACTIVITIES + 3 ? p.activities.length - VISIBLE_ACTIVITIES : 0;
  return `
    <div class="p-head reveal">
      <p class="meta">${p.index} / 02</p>
      <div>
        <h2 class="p-name">${esc(p.name)}</h2>
        <p class="p-target">${esc(p.target)}</p>
      </div>
    </div>

    <div class="p-grid">
      <figure class="p-portrait"><img src="${p.portrait}" alt="${esc(p.name)}"></figure>
      <div class="reveal">
        <p class="meta sub">ข้อมูลส่วนตัว</p>
        <dl class="facts">${p.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      </div>
      <div class="reveal">
        <div class="col-section">
          <p class="meta sub">การศึกษา</p>
          <ul class="stack edu">${p.education.map(([lvl, sch, note]) =>
            `<li><span>${esc(lvl)}</span><time>${esc(note)}</time><small>${esc(sch)}</small></li>`).join("")}</ul>
        </div>
        <div class="col-section"><p class="meta sub">ความสามารถ</p>${stack(p.skills)}</div>
        ${p.hobbies.length ? `<div class="col-section"><p class="meta sub">งานอดิเรก</p>${stack(p.hobbies)}</div>` : ""}
      </div>
    </div>

    <div class="prologue reveal">
      <p class="meta">${esc(p.statementTitle)}</p>
      <div class="prologue-body">
        ${p.statement.map((s) => `<p>${esc(s)}</p>`).join("")}
        <p class="prologue-quote">“${esc(p.quote)}”</p>
      </div>
    </div>

    <div class="section-head"><h3>กิจกรรม</h3><p class="meta">${p.activities.length} รายการ</p></div>
    <div class="grid">${p.activities.map(([img, t, d], i) => item(img, t, d, pad2(i + 1), extra > 0 && i >= VISIBLE_ACTIVITIES)).join("")}</div>
    ${extra > 0 ? `<div class="more-row"><button class="text-btn more" type="button">ดูกิจกรรมอีก ${extra} รายการ</button></div>` : ""}

    <div class="section-head"><h3>เกียรติบัตร</h3><p class="meta">${p.certificates.length} ใบ</p></div>
    <div class="grid certs">${p.certificates.map(([img, t], i) => item(img, t, "", pad2(i + 1))).join("")}</div>`;
}

function renderContact(p) {
  return `<div>
    <h3>${esc(p.name)}</h3>
    <dl>${p.contact.map(([k, v, href]) => `<dt>${esc(k)}</dt><dd>${href
      ? `<a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(v)} <span class="arrow" aria-hidden="true">↗</span></a>`
      : esc(v)}</dd>`).join("")}</dl>
  </div>`;
}

function renderIndex() {
  const people = Object.entries(PEOPLE).map(([id, p]) =>
    `<div><p class="meta">${p.index}</p><a href="#${id}"><h2>${esc(p.name.replace("นางสาว", ""))}</h2></a><p class="meta">${esc(p.target)}</p></div>`);
  return people.join("") +
    `<div><p class="meta">โรงเรียน</p><h2>ทุ่งใหญ่เฉลิมราชอนุสรณ์</h2><p class="meta">รัชมังคลาภิเษก · อ.ทุ่งใหญ่ จ.นครศรีธรรมราช</p></div>
     <div><p class="meta">ในเล่ม</p><h2>${Object.values(PEOPLE).reduce((n, p) => n + p.activities.length, 0)} กิจกรรม · ${Object.values(PEOPLE).reduce((n, p) => n + p.certificates.length, 0)} เกียรติบัตร</h2><p class="meta">ปีการศึกษา 2569</p></div>`;
}

document.querySelectorAll("[data-person]").forEach((el) => { el.innerHTML = renderPerson(PEOPLE[el.dataset.person]); });
document.querySelector(".index").innerHTML = renderIndex();
document.querySelector(".closing-grid").innerHTML = Object.values(PEOPLE).map(renderContact).join("");

// Show remaining activities, open images
const viewer = document.querySelector(".viewer");
document.addEventListener("click", (e) => {
  const more = e.target.closest(".more");
  if (more) {
    const row = more.parentElement;
    row.previousElementSibling.querySelectorAll(".item[hidden]").forEach((c) => {
      c.hidden = false;
      c.classList.add("in");
      const img = c.querySelector(".thumb img");
      if (img.naturalWidth) capSmall(img);
    });
    row.remove();
    return;
  }
  const thumb = e.target.closest(".thumb");
  if (thumb) {
    const src = thumb.querySelector("img"), big = viewer.querySelector("img");
    big.src = src.src;
    big.alt = src.alt;
    big.style.maxWidth = src.naturalWidth * 2 + "px"; // don't blow small photos up to full screen
    viewer.showModal();
  }
});
viewer.querySelector(".viewer-close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (e) => { if (e.target === viewer) viewer.close(); });

// Cap photos that would be stretched past 2x their real pixels
function capSmall(img) {
  const box = img.parentElement;
  const w = img.naturalWidth * 2, h = img.naturalHeight * 2;
  const small = w < box.clientWidth || h < box.clientHeight;
  box.classList.toggle("small", small);
  img.style.maxWidth = small ? w + "px" : "";
  img.style.maxHeight = small ? h + "px" : "";
}
document.querySelectorAll(".thumb img").forEach((img) => {
  if (img.complete && img.naturalWidth) capSmall(img);
  else img.addEventListener("load", () => capSmall(img), { once: true });
});
addEventListener("resize", () => document.querySelectorAll(".thumb img").forEach((img) => img.naturalWidth && capSmall(img)));

// Bottom nav marks the section in view
const navLinks = [...document.querySelectorAll(".bottom-nav a")];
function updateNav() {
  const mid = innerHeight / 2;
  navLinks.forEach((a) => {
    const r = document.querySelector(a.getAttribute("href")).getBoundingClientRect();
    a.setAttribute("aria-current", r.top < mid && r.bottom > mid);
  });
}
addEventListener("scroll", updateNav, { passive: true });
updateNav();

// One entrance per block
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Wireframe of the Democracy Monument: a central turret carrying the tray and constitution,
// four radial wings, a round base. 3D points projected to 2D, drawn as 1px vermillion lines.
(function drawMonument() {
  const svg = document.querySelector(".wire");
  const yaw = (28 * Math.PI) / 180, pitch = (22 * Math.PI) / 180;
  const proj = ([x, y, z]) => {
    const rx = x * Math.cos(yaw) - z * Math.sin(yaw);
    const rz = x * Math.sin(yaw) + z * Math.cos(yaw);
    return [rx, -y * Math.cos(pitch) + rz * Math.sin(pitch)];
  };
  const paths = [];
  const line = (pts, close) => paths.push("M" + pts.map((p) => proj(p).map((v) => v.toFixed(1)).join(" ")).join("L") + (close ? "Z" : ""));
  const ring = (r, y, n = 48) => line(Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [Math.cos(a) * r, y, Math.sin(a) * r];
  }), true);
  const cylinder = (r, y0, y1, ribs) => {
    ring(r, y0); ring(r, y1);
    for (let i = 0; i < ribs; i++) {
      const a = (i / ribs) * Math.PI * 2;
      line([[Math.cos(a) * r, y0, Math.sin(a) * r], [Math.cos(a) * r, y1, Math.sin(a) * r]]);
    }
  };
  // a box between two horizontal rectangles; each rect is [center, radial half-len, tangential half-len] along direction a
  const frustum = (a, bottom, top) => {
    const u = [Math.cos(a), 0, Math.sin(a)], v = [-Math.sin(a), 0, Math.cos(a)];
    const rect = ([c, y, hu, hv]) => [[1, 1], [1, -1], [-1, -1], [-1, 1]].map(([su, sv]) =>
      [u[0] * (c + su * hu) + v[0] * sv * hv, y, u[2] * (c + su * hu) + v[2] * sv * hv]);
    const b = rect(bottom), t = rect(top);
    line(b, true); line(t, true);
    b.forEach((p, i) => line([p, t[i]]));
  };

  // stepped round base
  cylinder(200, 0, 10, 24);
  cylinder(170, 10, 22, 24);
  // four wings, set radially at the diagonals
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2;
    frustum(a, [118, 22, 34, 9], [104, 300, 12, 4]);
    frustum(a, [118, 22, 40, 13], [118, 46, 40, 13]); // plinth at the wing foot
  }
  // central turret, tray and the constitution book
  cylinder(46, 22, 70, 16);
  cylinder(38, 70, 96, 16);
  cylinder(54, 96, 104, 24);
  frustum(0, [0, 104, 22, 16], [0, 120, 22, 16]);
  frustum(0, [0, 120, 18, 13], [0, 126, 18, 13]);

  svg.innerHTML = paths.map((d) => `<path d="${d}"/>`).join("");
})();
