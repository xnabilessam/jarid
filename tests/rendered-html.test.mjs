import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function whatsappCtas(html) {
  return html.match(
    /<a\b(?=[^>]*href="https?:\/\/wa\.me\/966506861016[^"]*")[^>]*>[\s\S]*?<\/a>/g,
  ) ?? [];
}

function sectionById(html, id) {
  return html.match(
    new RegExp(`<section\\b[^>]*id="${id}"[^>]*>[\\s\\S]*?<\\/section>`, "i"),
  )?.[0];
}

test("يعرض الصفحة الرئيسية العربية وروابط التواصل", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/i);
  assert.match(html, /wa\.me\/966506861016/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("يعرض الهوية السعودية والنص التعريفي المطلوب في واجهة الصفحة", async () => {
  const html = await (await render()).text();
  const hero = html.match(/<section\b[^>]*class="hero"[^>]*>[\s\S]*?<\/section>/i)?.[0];
  const title = hero?.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0];

  assert.ok(hero, "لم تظهر واجهة الصفحة الرئيسية");
  assert.ok(title, "لم يظهر عنوان واجهة الصفحة الرئيسية");
  assert.match(visibleText(hero), /صناعة سعودية/);
  assert.equal(visibleText(title), "قوالب إبداعية، تميّز علامتك التجارية");
  assert.ok(
    visibleText(hero).includes(
      "مواكبةً لمتطلبات السوق السعودي العالية في قطاع الحلويات: تأتي جَـريـد لتلبية هذي المتطلبات بتصاميم أصيلة، وتنفيذ بمقاييس عالمية.",
    ),
    "لم يظهر النص التعريفي المطلوب بالكامل في واجهة الصفحة",
  );
});

test("يعرض صورة هيرو متجاوبة تحمل الشعار المعتمد", async () => {
  const html = await (await render()).text();
  const picture = html.match(/<picture\b[\s\S]*?<\/picture>/i)?.[0];

  assert.ok(picture, "يجب استخدام picture لصورة هيرو المتجاوبة");
  assert.match(picture, /<source\b[^>]*media="\(max-width:\s*600px\)"/i);
  assert.match(picture, /\/images\/hero-jarid-logo-v3\.(?:jpe?g|webp|png)/i);
  assert.doesNotMatch(picture, /hero-jarid-studio-(?:mobile|desktop)-v2\.jpg/i);
});

test("يحذف شريط الإعلان وشريط المزايا الذهبي من الصفحة", async () => {
  const html = await (await render()).text();

  assert.doesNotMatch(html, /class="[^"]*\bannouncement\b[^"]*"/i);
  assert.doesNotMatch(html, /class="[^"]*\btrust-(?:rail|track|group)\b[^"]*"/i);
});

test("يحذف بادجات واجهة الصفحة وشريط التفاصيل الملاصق للصورة", async () => {
  const html = await (await render()).text();
  const hero = html.match(/<section\b[^>]*class="hero"[^>]*>[\s\S]*?<\/section>/i)?.[0];

  assert.ok(hero, "لم تظهر واجهة الصفحة الرئيسية");
  assert.doesNotMatch(
    hero,
    /class="[^"]*\bhero-(?:proof|info-strip|stage-badge|facts)\b[^"]*"/i,
  );
  assert.doesNotMatch(hero, /aria-label="(?:مزايا جريد|تفاصيل التصميم)"/i);
});

test("توجّه روابط الخدمات في القائمتين والتذييل إلى قسم الحلول", async () => {
  const html = await (await render()).text();
  const serviceLinks = html.match(
    /<a\b(?=[^>]*href="\/#solutions")[^>]*>\s*الخدمات\s*<\/a>/g,
  ) ?? [];

  assert.ok(
    serviceLinks.length >= 3,
    "يجب توجيه روابط خدمات قائمة سطح المكتب والجوال والتذييل إلى /#solutions",
  );
  assert.doesNotMatch(html, /href="\/services(?:["/?#])/i);
});

test("لا يعرض صفحة خدمات منفصلة", async () => {
  const response = await render("/services");

  assert.equal(response.status, 404);
});

test("يبقي صفحات الخصوصية والشروط متاحة", async () => {
  for (const pathname of ["/privacy", "/terms"]) {
    const response = await render(pathname);

    assert.equal(response.status, 200);
    assert.match(await response.text(), /جريد/);
  }
});

test("يوحد كل دعوات واتساب باسم تواصل معنا ويعرض أيقونتها", async () => {
  for (const pathname of ["/", "/privacy", "/terms"]) {
    const html = await (await render(pathname)).text();
    const ctas = whatsappCtas(html);

    assert.ok(ctas.length > 0, `لم تظهر دعوات التواصل في ${pathname}`);
    for (const cta of ctas) {
      assert.equal(visibleText(cta), "تواصل معنا", `تسمية الدعوة غير موحدة في ${pathname}`);
      assert.match(cta, /<svg\b[^>]*>[\s\S]*?<\/svg>/i, `أيقونة واتساب غائبة في ${pathname}`);

      const accessibleLabel = cta.match(/\baria-label="([^"]+)"/i)?.[1];
      if (accessibleLabel) {
        assert.equal(accessibleLabel, "تواصل معنا");
      }
    }
  }
});

test("يعرض خدمات قطاع الحلويات والنصوص المحدثة لبطاقات الخدمات", async () => {
  const html = await (await render()).text();
  const solutions = sectionById(html, "solutions");

  assert.ok(solutions, "لم يظهر قسم خدمات قطاع الحلويات");
  assert.match(solutions, /<h2\b[^>]*>\s*خدمات قطاع الحلويات\s*<\/h2>/i);
  assert.match(visibleText(solutions), /قوالب الشوكولاتة/);
  assert.match(visibleText(solutions), /قوالب التيراميسو/);
  assert.ok(
    visibleText(solutions).includes("للمواسم والمناسبات الخاصة، بمقاسات وتفاصيل مخصصة."),
  );
  assert.ok(visibleText(solutions).includes("بساطة وإبداع في التقديم."));
  assert.doesNotMatch(solutions, /href="\/services(?:["/?#])/i);
});

test("يعرض مراحل الفكرة والرسم والتصميم ثلاثي الأبعاد والقالب النهائي", async () => {
  const html = await (await render()).text();
  const process = sectionById(html, "process");

  assert.ok(process, "لم يظهر قسم رحلة الإنتاج");
  for (const stage of [
    "الفكرة والرسم المبدئي",
    "التصميم ثلاثي الأبعاد",
    "شكل القالب النهائي",
    "المنتج النهائي",
  ]) {
    assert.ok(visibleText(process).includes(stage), `لم تظهر مرحلة ${stage}`);
  }
});

test("يقارن قوالب جريد والقوالب التجارية عبر المزايا الثماني المطلوبة", async () => {
  const html = await (await render()).text();
  const table = html.match(/<table\b[^>]*>[\s\S]*?<\/table>/i)?.[0];

  assert.ok(table, "يجب عرض جدول واضح يقارن قوالب جريد بالقوالب التجارية");

  const header = table.match(/<thead\b[^>]*>[\s\S]*?<\/thead>/i)?.[0];
  assert.ok(header, "يجب عرض عناوين أعمدة المقارنة");
  for (const title of ["الميزة", "قوالب جَريـد ✨", "القوالب التجارية ❌"]) {
    assert.ok(visibleText(header).includes(title), `لم يظهر عنوان العمود ${title}`);
  }

  const body = table.match(/<tbody\b[^>]*>[\s\S]*?<\/tbody>/i)?.[0];
  assert.ok(body, "يجب عرض المزايا المطلوبة داخل جسم جدول المقارنة");

  const rows = [...body.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
  const expectedRows = [
    ["الأمان الصحي", "سلكون مخصص للأغذية بشهادات مخبرية معتمدة وآمنة 100%", "خامات مجهولة المصدر وغير مسجلة بلا توثيق صحي"],
    ["الرائحة والطعم", "سلكون آمن لا يترك أي رائحة كيميائية ولا يؤثر على طعم المنتجات", "روائح بلاستيكية كيميائية مزعجة قد تنتقل للأطعمة أو المنتجات"],
    ["حد الطلب (المرونة)", "مرونة كاملة: صمّم قالبك الخاص بدءًا من قطعة واحدة (بدون حد أدنى للطلبات)", "تشترط كميات ضخمة ومكلفة للبدء بالتصنيع"],
    ["سرعة التنفيذ والمنشأ", "تصميم وتنفيذ سعودي بجودة عالية وبأسرع وقت", "شحن دولي بطيء ومستهلك للوقت والمال"],
    ["عدد مرات الاستعمال", "خامة عالية الجودة تُستعمل عدة مرات دون أن تفقد مرونتها أو شكلها", "عمر افتراضي قصير وتتلف أو تتشقق بعد مرات استخدام معدودة"],
    ["الدقة والتفاصيل", "تنفيذ دقيق وعالي، يظهر أدق تفاصيل التصميم", "تفاصيل بصرية ضعيفة أو مشوهة بعد الاستخدام"],
    ["متانة وحرارة السلكون", "سلكون مرن وقوي يتحمل درجات الحرارة العالية والبرودة", "سلكون ضعيف يتشقق وسريع التلف مع الحرارة"],
    ["سهولة الاستخراج", "مرونة ممتازة تسمح بنزع المنتج بسهولة دون أن ينكسر", "صلابة أو التصاق يؤدي لتلف المنتجات أثناء الفك"],
  ];

  assert.equal(rows.length, expectedRows.length, "يجب عرض صف واحد لكل ميزة مطلوبة");

  for (const [index, row] of rows.entries()) {
    const cells = [...row[1].matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/gi)]
      .map(([, markup]) => visibleText(markup));

    assert.deepEqual(cells, expectedRows[index], `محتوى صف المقارنة ${index + 1} غير مطابق`);
  }
});

test("يحذف قسم المعايير القديم بعد إضافة جدول المقارنة", async () => {
  const html = await (await render()).text();

  assert.doesNotMatch(html, /class="[^"]*\bstandards-section\b[^"]*"/i);
  assert.doesNotMatch(visibleText(html), /دقة بصرية وجودة عملية/);
});

test("يجيب عن توفر العينات قبل اعتماد الطلب", async () => {
  const html = await (await render()).text();
  const faq = sectionById(html, "faq");

  assert.ok(faq, "لم يظهر قسم الأسئلة الشائعة");

  const items = [...faq.matchAll(/<details\b[^>]*>[\s\S]*?<\/details>/gi)];
  const sampleQuestion = items.find(([item]) =>
    visibleText(item).includes("هل تقدمون عينات قبل اعتماد الطلب؟"),
  );

  assert.ok(sampleQuestion, "لم يظهر سؤال العينات قبل اعتماد الطلب");
  assert.ok(
    visibleText(sampleQuestion[0]).includes(
      "نعم، نقدم عينات وكل ما يحتاجه العميل قبل اعتماد الطلب.",
    ),
    "لم تظهر الإجابة المطلوبة عن توفير العينات",
  );
});

test("يحذف الشروح الزائدة من عناوين الأقسام", async () => {
  const text = visibleText(await (await render()).text());

  for (const subtitle of [
    "مسار واضح، ومراجعة قبل بدء التنفيذ.",
    "نماذج قابلة لتخصيص المقاس والتفاصيل.",
    "إجابات مباشرة تساعدك على تجهيز فكرتك.",
  ]) {
    assert.ok(!text.includes(subtitle), `لم يُحذف الشرح الزائد: ${subtitle}`);
  }
});

test("يعرض عناوين بطاقات المنتجات دون ملاحظات إضافية", async () => {
  const html = await (await render()).text();
  const products = sectionById(html, "work");

  assert.ok(products, "لم يظهر قسم المنتجات");

  const cards = [...products.matchAll(
    /<article\b[^>]*class="[^"]*\bproduct-card\b[^"]*"[^>]*>[\s\S]*?<\/article>/gi,
  )].map(([card]) => card);

  assert.equal(cards.length, 4);
  for (const title of ["بخور", "دب", "دلة", "ثوب"]) {
    const card = cards.find((markup) =>
      new RegExp(`<h3\\b[^>]*>\\s*${title}\\s*<\\/h3>`, "i").test(markup),
    );

    assert.ok(card, `لم تظهر بطاقة المنتج ${title}`);
    assert.doesNotMatch(card, /<p\b[^>]*>[\s\S]*?<\/p>/i);
  }
});

test("يعرض عناوين الصفحة الرئيسية دون نقاط ختامية", async () => {
  const html = await (await render()).text();
  const headings = [...html.matchAll(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
    .map(([, heading]) => visibleText(heading));

  assert.ok(headings.length > 0, "لم تظهر عناوين الصفحة الرئيسية");
  for (const heading of headings) {
    assert.doesNotMatch(heading, /[.。]\s*$/, `ينتهي العنوان بنقطة زائدة: ${heading}`);
  }
});
