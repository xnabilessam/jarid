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
