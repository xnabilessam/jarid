import type { Metadata } from "next";
import { WhatsAppLink } from "@/app/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لموقع جريد.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <span className="section-kicker">معلومات قانونية</span>
        <h1>سياسة الخصوصية</h1>
        <p>آخر تحديث: 20 أغسطس 2026</p>
      </header>
      <div className="legal-layout">
        <aside>
          <span>مختصر السياسة</span>
          <strong>نجمع فقط ما يلزم للرد على استفسارك وخدمة مشروعك.</strong>
          <WhatsAppLink className="card-cta">اطلب تصميمك <span aria-hidden="true">↗</span></WhatsAppLink>
        </aside>
        <article className="legal-content">
          <section>
            <h2>نطاق السياسة</h2>
            <p>
              توضح هذه السياسة طريقة تعامل جريد مع المعلومات التي يشاركها
              زوار الموقع عند التواصل أو طلب الاستفسار عن خدمات القوالب
              المخصصة.
            </p>
          </section>
          <section>
            <h2>المعلومات التي نتعامل معها</h2>
            <p>
              قد تشمل الاسم، رقم الهاتف، البريد الإلكتروني، تفاصيل المشروع،
              والملفات أو المراجع التي يرسلها العميل بإرادته. وقد تُسجل بيانات
              تقنية أساسية لازمة لتشغيل الموقع وحمايته.
            </p>
          </section>
          <section>
            <h2>لماذا نستخدم المعلومات؟</h2>
            <p>
              للرد على الاستفسارات، فهم متطلبات المشروع، إعداد التواصل
              المتعلق بالخدمة، وتحسين تجربة الموقع وحمايته من الاستخدام غير
              المشروع.
            </p>
          </section>
          <section>
            <h2>واتساب والروابط الخارجية</h2>
            <p>
              ينقلك زر التواصل إلى واتساب، وتخضع المحادثة هناك لسياسات
              المنصة. لا يطلب هذا الموقع إنشاء حساب أو إدخال بيانات دفع.
            </p>
          </section>
          <section>
            <h2>حفظ المعلومات ومشاركتها</h2>
            <p>
              تُحفظ المعلومات بقدر ما يلزم لمتابعة الاستفسار أو المشروع، ولا
              تُشارك لأغراض تسويقية مستقلة. قد يستلزم تشغيل الخدمة الاستعانة
              بمزودي خدمات تقنيين وفق الضوابط المناسبة.
            </p>
          </section>
          <section>
            <h2>حقوقك</h2>
            <p>
              يمكنك طلب معرفة معلوماتك أو تصحيحها أو حذفها متى كان ذلك
              ممكناً نظاماً، عبر التواصل معنا على Info@jarid.sa.
            </p>
          </section>
          <section>
            <h2>التواصل</h2>
            <p>
              لأي استفسار متعلق بالخصوصية: Info@jarid.sa أو 0506861016،
              الرياض، المملكة العربية السعودية.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
