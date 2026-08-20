import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
    /<a\b(?=[^>]*href="http:\/\/wa\.me\/966506861016[^"]*")[^>]*>[\s\S]*?<\/a>/g,
  ) ?? [];
}

test("يعرض الصفحة الرئيسية العربية وروابط التواصل", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/i);
  assert.match(html, /قوالب مخصصة/);
  assert.match(html, /wa\.me\/966506861016/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("يعرض صورة هيرو متجاوبة ويجمع تفاصيل التصميم بوضوح", async () => {
  const response = await render();
  const html = await response.text();
  const picture = html.match(/<picture\b[\s\S]*?<\/picture>/i)?.[0];
  const facts = html.match(
    /<(?:ul|div)\b[^>]*aria-label="تفاصيل التصميم"[^>]*>[\s\S]*?<\/(?:ul|div)>/i,
  )?.[0];

  assert.ok(picture, "يجب استخدام picture لصورة هيرو المتجاوبة");
  assert.match(picture, /<source\b[^>]*media="\(max-width:\s*600px\)"/i);
  assert.ok(facts, "يجب جمع بادجات الهيرو في منطقة واضحة");
  assert.match(visibleText(facts), /تفاصيل دقيقة/);
  assert.match(visibleText(facts), /سيليكون مخصص للمشروع/);
});

test("يفصل تفاصيل الهيرو عن منطقة الصورة لمنع القص", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(
    html,
    /class="hero-photo"[\s\S]*?<\/div>\s*<div class="hero-info-strip"[\s\S]*?<ul class="hero-facts"/i,
    "يجب أن يأتي شريط التفاصيل بعد منطقة الصورة وليس فوقها",
  );
});

test("يكرر شريط المزايا كمجموعتين كاملتين لحركة متصلة", async () => {
  const response = await render();
  const html = await response.text();
  const groups = html.match(/class="trust-group"/g) ?? [];

  assert.equal(groups.length, 2);
});

test("يعرض صفحات الخدمات والخصوصية والشروط", async () => {
  for (const pathname of ["/services", "/privacy", "/terms"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /جريد/);
  }
});

test("يستخدم ثلاث صور خدمات مربعة وشفافة بالحجم نفسه", async () => {
  const response = await render("/services");
  const html = await response.text();
  const imagePaths = [
    ...html.matchAll(
      /<div class="service-row-image"><img src="([^"]+)"[^>]*><\/div>/g,
    ),
  ].map((match) => match[1]);

  assert.equal(imagePaths.length, 3);

  for (const imagePath of imagePaths) {
    assert.match(imagePath, /\.png$/i, `${imagePath} ليست صورة PNG شفافة`);

    const png = await readFile(new URL(`../public${imagePath}`, import.meta.url));
    assert.equal(png.subarray(1, 4).toString("ascii"), "PNG");
    assert.equal(png.readUInt32BE(16), 1024, `${imagePath} عرضها غير موحد`);
    assert.equal(png.readUInt32BE(20), 1024, `${imagePath} ارتفاعها غير موحد`);
    assert.ok([4, 6].includes(png[25]), `${imagePath} لا تحتوي على قناة شفافية`);
  }
});

test("يعرض دعوة التواصل الأخيرة في صفحة الخدمات دون انتظار حركة التمرير", async () => {
  const response = await render("/services");
  const html = await response.text();

  assert.match(html, /class="final-cta"/);
  assert.doesNotMatch(html, /class="final-cta reveal"/);
});

test("يوحد تسمية دعوات التواصل باسم اطلب تصميمك", async () => {
  for (const pathname of ["/", "/services", "/privacy", "/terms"]) {
    const response = await render(pathname);
    const html = await response.text();
    const ctas = whatsappCtas(html);

    assert.ok(ctas.length > 0, `لم تظهر دعوات التواصل في ${pathname}`);
    for (const cta of ctas) {
      assert.match(cta, /اطلب تصميمك/);
      assert.doesNotMatch(cta, /واتساب|قالبك/);
    }
  }
});

test("يستخدم تصميم بدلاً من قالب المفردة في النص الظاهر", async () => {
  for (const pathname of ["/", "/services", "/privacy", "/terms"]) {
    const response = await render(pathname);
    const text = visibleText(await response.text());

    assert.doesNotMatch(text, /(^|\s)قالب(?:ك)?(?=$|\s|[.،؟])/);
  }
});
