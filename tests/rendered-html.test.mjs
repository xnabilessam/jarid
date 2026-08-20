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
