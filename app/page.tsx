import type { Metadata } from "next";
import { WhatsAppLink } from "@/app/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "جريد | قوالب سيليكون مخصصة للشوكولاتة والتيراميسو",
  description:
    "تصميم وتصنيع قوالب سيليكون مخصصة للعلامات التجارية والمصانع والمتاجر في جميع أنحاء المملكة العربية السعودية.",
};

const products = [
  {
    name: "بخور",
    note: "هوية ضيافة محلية",
    image: "/images/product-incense.webp",
  },
  {
    name: "دب",
    note: "للمواسم والهدايا",
    image: "/images/product-bear.webp",
  },
  {
    name: "دلة",
    note: "طابع سعودي مميز",
    image: "/images/product-dallah.webp",
  },
  {
    name: "ثوب",
    note: "تفاصيل تراثية معاصرة",
    image: "/images/product-thobe.webp",
  },
];

const steps = [
  ["١", "مشاركة الفكرة", "أرسل المرجع أو الشعار"],
  ["٢", "تطوير التصميم", "نضبط الشكل والأبعاد"],
  ["٣", "اعتماد النموذج", "تراجع التفاصيل قبل التنفيذ"],
  ["٤", "التنفيذ والتسليم", "وفق المواصفات المعتمدة"],
];

const faqs = [
  {
    question: "هل يمكن تنفيذ قالب بشعار خاص؟",
    answer:
      "نعم، يمكن إضافة شعار أو نمط أو كتابة حسب قابلية التنفيذ وتفاصيل المشروع.",
  },
  {
    question: "هل تتوفر قوالب للشوكولاتة والتيراميسو؟",
    answer:
      "نعم، نطوّر حلولاً مخصصة للفئتين، إضافة إلى التصاميم الخاصة للعلامات التجارية.",
  },
  {
    question: "ما الذي يمكن تخصيصه؟",
    answer:
      "يمكن تعديل المقاس والنقش واللون والصلادة، وتطوير مجموعة تصاميم مترابطة بصرياً.",
  },
  {
    question: "ما مدة التنفيذ؟",
    answer:
      "تختلف حسب تعقيد التصميم والكمية ومتطلبات المشروع، وتُحدد بعد مراجعة التفاصيل واعتماد النموذج.",
  },
  {
    question: "هل الخدمة متاحة في جميع مناطق المملكة؟",
    answer:
      "نعم، نخدم المصانع والعلامات التجارية ومحال الحلويات في جميع أنحاء المملكة.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-eyebrow hero-enter hero-enter-1">
            <span className="eyebrow-dot" /> مصنع سعودي في الرياض
          </div>
          <h1 id="hero-title" className="hero-enter hero-enter-2">
            قوالب مخصصة
            <span>تُحوّل فكرتك إلى منتج يُبهر.</span>
          </h1>
          <p className="hero-lead hero-enter hero-enter-3">
            نصمم وننفذ قوالب سيليكون للعلامات التجارية والمصانع، بدقة
            تعكس هوية منتجك.
          </p>
          <div className="hero-actions hero-enter hero-enter-4">
            <WhatsAppLink className="button button-gold button-large">
              اطلب قالبك عبر واتساب <span aria-hidden="true">↗</span>
            </WhatsAppLink>
            <a className="quiet-link" href="#solutions">
              استكشف الحلول <span aria-hidden="true">←</span>
            </a>
          </div>
          <div className="hero-proof hero-enter hero-enter-5" aria-label="مزايا جريد">
            <span>تصميم حسب الطلب</span>
            <span>تصنيع محلي</span>
            <span>خدمة داخل المملكة</span>
          </div>
        </div>

        <div className="hero-visual hero-enter hero-enter-image">
          <div className="hero-image-wrap">
            <img
              src="/images/hero-jarid.webp"
              alt="قالب سيليكون مخصص مع قطع شوكولاتة تحمل تفاصيل مستوحاة من النخلة"
              width="1586"
              height="992"
              fetchPriority="high"
            />
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <img src="/brand/jarid-icon-gold.svg" alt="" />
            <span>من الفكرة</span>
            <strong>إلى الإنتاج</strong>
          </div>
          <div className="hero-caption">
            <span>تفاصيل دقيقة</span>
            <span>سيليكون مخصص للمشروع</span>
          </div>
        </div>
      </section>

      <div className="trust-rail" aria-label="مزايا الخدمة">
        <div className="trust-track">
          <span>تصميم مخصص</span><i>◆</i>
          <span>تفاصيل دقيقة</span><i>◆</i>
          <span>تصنيع سعودي</span><i>◆</i>
          <span>هوية واضحة</span><i>◆</i>
          <span>خدمة للأعمال</span><i>◆</i>
          <span aria-hidden="true">تصميم مخصص</span><i aria-hidden="true">◆</i>
          <span aria-hidden="true">تفاصيل دقيقة</span><i aria-hidden="true">◆</i>
          <span aria-hidden="true">تصنيع سعودي</span><i aria-hidden="true">◆</i>
        </div>
      </div>

      <section className="section about-section" id="about">
        <div className="section-kicker reveal">عن جريد</div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <h2>القالب المتقن جزء من تجربة المنتج.</h2>
            <p>
              نطوّر قوالب سيليكون مخصصة للشوكولاتة والتيراميسو، تجمع بين
              الدقة البصرية والجودة العملية من الفكرة حتى التسليم.
            </p>
            <div className="about-points">
              <div><strong>هوية</strong><span>شعار ونقش وتفاصيل خاصة</span></div>
              <div><strong>مرونة</strong><span>مقاس ولون وصلادة حسب المشروع</span></div>
              <div><strong>قرب</strong><span>تصنيع محلي وتواصل مباشر</span></div>
            </div>
          </div>
          <div className="about-image reveal">
            <img
              src="/images/craft-jarid.webp"
              alt="صب الشوكولاتة بعناية داخل قالب سيليكون مخصص"
              width="1000"
              height="1250"
              loading="lazy"
            />
            <div className="image-note">دقة تُرى في كل قطعة</div>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="section-heading reveal">
          <div>
            <span className="section-kicker">حلول جريد</span>
            <h2>حل مصمم حول منتجك.</h2>
          </div>
          <a className="quiet-link" href="/services">
            شاهد جميع الخدمات <span aria-hidden="true">←</span>
          </a>
        </div>

        <div className="solutions-grid">
          <article className="solution-card solution-card-wide reveal">
            <div className="solution-visual chocolate-collage" aria-hidden="true">
              <img src="/images/product-bear.webp" alt="" />
              <img src="/images/product-incense.webp" alt="" />
              <img src="/images/product-dallah.webp" alt="" />
            </div>
            <div className="solution-copy">
              <span>للضيافة والهدايا</span>
              <h3>قوالب الشوكولاتة</h3>
              <p>للمواسم والمنتجات الخاصة، بمقاسات وتفاصيل تحمل هويتك.</p>
              <WhatsAppLink className="card-cta">
                اطلب هذا الحل <span aria-hidden="true">↗</span>
              </WhatsAppLink>
            </div>
          </article>

          <article className="solution-card reveal">
            <div className="solution-photo">
              <img
                src="/images/product-tiramisu-palm.webp"
                alt="تيراميسو بتصميم نخلة مخصص"
                width="640"
                height="455"
                loading="lazy"
              />
            </div>
            <div className="solution-copy">
              <span>لتقديم راقٍ</span>
              <h3>قوالب التيراميسو</h3>
              <p>تكوينات توازن بين التفاصيل والارتفاع وطريقة التقديم.</p>
              <WhatsAppLink className="card-cta">ابدأ التصميم <span aria-hidden="true">↗</span></WhatsAppLink>
            </div>
          </article>

          <article className="solution-card solution-card-navy reveal">
            <div className="brand-service-mark" aria-hidden="true">
              <img src="/brand/jarid-icon-gold.svg" alt="" />
            </div>
            <div className="solution-copy">
              <span>للعلامات التجارية</span>
              <h3>تصميم خاص لبراندك</h3>
              <p>شعار أو نمط أو كتابة تتحول إلى قالب قابل للتنفيذ.</p>
              <WhatsAppLink className="card-cta card-cta-light">شاركنا فكرتك <span aria-hidden="true">↗</span></WhatsAppLink>
            </div>
          </article>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="process-shell reveal">
          <div className="process-heading">
            <div>
              <span className="section-kicker section-kicker-light">رحلة العمل</span>
              <h2>من مرجع بسيط إلى قالب جاهز.</h2>
            </div>
            <p>مسار واضح، ومراجعة قبل بدء التنفيذ.</p>
          </div>
          <div className="mold-tray">
            {steps.map(([number, title, note]) => (
              <div className="mold-cavity" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{note}</p>
                </div>
              </div>
            ))}
          </div>
          <WhatsAppLink className="button button-gold process-cta">
            ابدأ رحلتك مع جريد <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
      </section>

      <section className="section products-section" id="work">
        <div className="section-heading reveal">
          <div>
            <span className="section-kicker">من الكتالوج</span>
            <h2>تفاصيل محلية، بصياغة معاصرة.</h2>
          </div>
          <p>نماذج قابلة لتخصيص المقاس والتفاصيل.</p>
        </div>
        <div className="product-track reveal">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={`قطعة شوكولاتة بتصميم ${product.name}`}
                  loading="lazy"
                />
              </div>
              <div>
                <h3>{product.name}</h3>
                <p>{product.note}</p>
              </div>
              <WhatsAppLink className="product-action" aria-label={`اطلب تصميماً مستوحى من ${product.name}`}>
                ↗
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section standards-section">
        <div className="standards-intro reveal">
          <span className="section-kicker">لماذا جريد؟</span>
          <h2>دقة بصرية وجودة عملية.</h2>
          <p>
            تُصنع القوالب من سيليكون مناسب للتلامس الغذائي بحسب مواصفات
            المادة وشهادات المورد المتاحة لكل مشروع.
          </p>
        </div>
        <div className="standards-grid reveal">
          <div><span>01</span><h3>تفاصيل دقيقة</h3><p>ملائمة للنقوش والشعارات الصغيرة.</p></div>
          <div><span>02</span><h3>فك أسهل</h3><p>مرونة تساعد على حفظ تفاصيل القطعة.</p></div>
          <div><span>03</span><h3>استخدام متكرر</h3><p>خامة عملية ضمن ظروف التشغيل الموصى بها.</p></div>
          <div><span>04</span><h3>تخصيص مرن</h3><p>المقاس واللون والصلادة حسب المشروع.</p></div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-heading reveal">
          <span className="section-kicker">الأسئلة الشائعة</span>
          <h2>قبل أن تبدأ.</h2>
          <p>إجابات مباشرة تساعدك على تجهيز فكرتك.</p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="final-cta reveal">
          <img className="final-cta-icon" src="/brand/jarid-icon-gold.svg" alt="" />
          <span>فكرتك تستاهل قالباً خاصاً</span>
          <h2>صمّم قالباً يحمل هوية منتجك.</h2>
          <p>أرسل الفكرة أو الشعار، ونبدأ من هناك.</p>
          <WhatsAppLink className="button button-gold button-large">
            تواصل مع جريد الآن <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
