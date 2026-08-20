import type { Metadata } from "next";
import { WhatsAppLink } from "@/app/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "الخدمات",
  description:
    "خدمات جريد في تصميم وتصنيع قوالب السيليكون المخصصة للشوكولاتة والتيراميسو والعلامات التجارية.",
};

const services = [
  {
    tag: "للضيافة والهدايا",
    title: "قوالب الشوكولاتة",
    description:
      "تصاميم للمواسم والمنتجات الخاصة، مع تخصيص المقاس والتفاصيل بما ينسجم مع هوية العلامة.",
    image: "/images/hero-jarid.webp",
  },
  {
    tag: "لتقديم راقٍ",
    title: "قوالب التيراميسو",
    description:
      "تكوينات مدروسة توازن بين مساحة التفاصيل وارتفاع المنتج وطريقة التقديم.",
    image: "/images/product-tiramisu-custom.webp",
  },
  {
    tag: "للعلامات التجارية",
    title: "تصميم خاص لبراندك",
    description:
      "إضافة شعار أو نمط أو كتابة، أو تطوير عناصر مستوحاة من الهوية حسب قابلية التنفيذ.",
    image: "/images/product-tiramisu-palm.webp",
  },
];

const customizations = [
  ["المقاس", "أبعاد تناسب الحصة أو التغليف."],
  ["النقش", "شعار أو نمط أو كتابة قابلة للتنفيذ."],
  ["الهوية", "عناصر مستوحاة من علامتك أو التراث المحلي."],
  ["المجموعة", "عائلة تصاميم مترابطة بصرياً."],
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero services-hero">
        <div className="inner-hero-copy hero-enter hero-enter-1">
          <span className="section-kicker">خدمات جريد</span>
          <h1>قالب مصمم حول احتياج منتجك.</h1>
          <p>
            من الشعار أو المرجع إلى نموذج قابل للتنفيذ، نطوّر حلاً يخدم
            المنتج والهوية معاً.
          </p>
          <WhatsAppLink className="button button-gold button-large">
            شاركنا فكرتك <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
        <div className="inner-hero-image hero-enter hero-enter-image">
          <img
            src="/images/craft-jarid.webp"
            alt="تنفيذ قالب سيليكون مخصص للشوكولاتة"
            width="1000"
            height="1250"
          />
          <div className="inner-image-label">تصميم • مراجعة • تنفيذ</div>
        </div>
      </section>

      <section className="section service-list-section">
        <div className="section-heading reveal">
          <div>
            <span className="section-kicker">ما نقدمه</span>
            <h2>ثلاثة مسارات، ونتيجة خاصة بك.</h2>
          </div>
          <p>حلول موجهة للمصانع والعلامات التجارية ومحال الحلويات.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row reveal" key={service.title}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-row-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-row-copy">
                <span>{service.tag}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <WhatsAppLink className="card-cta">
                  ناقش هذا الحل <span aria-hidden="true">↗</span>
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section customization-section">
        <div className="customization-card reveal">
          <div className="customization-intro">
            <span className="section-kicker section-kicker-light">مساحة التخصيص</span>
            <h2>هويتك تدخل في كل تفصيلة.</h2>
            <p>
              نراعي الشكل النهائي، العمق، سهولة الفك، وترتيب القطعة داخل
              العبوة.
            </p>
          </div>
          <div className="customization-grid">
            {customizations.map(([title, description]) => (
              <div key={title}>
                <img src="/brand/jarid-icon-gold.svg" alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section material-section">
        <div className="material-visual reveal" aria-hidden="true">
          <div className="material-ring material-ring-one" />
          <div className="material-ring material-ring-two" />
          <img src="/brand/jarid-icon-navy.svg" alt="" />
        </div>
        <div className="material-copy reveal">
          <span className="section-kicker">المواد والمواصفات</span>
          <h2>مرونة تحفظ التفاصيل.</h2>
          <p>
            تُصنع القوالب من سيليكون مناسب للتلامس الغذائي بحسب مواصفات
            المادة المستخدمة وشهادات المورد المتاحة لكل مشروع.
          </p>
          <ul>
            <li>مرونة مناسبة لفك القطعة</li>
            <li>تفاصيل ملائمة للنقوش والشعارات</li>
            <li>استخدام متكرر ضمن ظروف التشغيل الموصى بها</li>
          </ul>
          <small>
            درجات الحرارة وحدود الاستخدام الفنية تعتمد على ورقة بيانات
            السيليكون المختار للمشروع.
          </small>
        </div>
      </section>

      <section className="section final-cta-section services-final-cta">
        <div className="final-cta reveal">
          <img className="final-cta-icon" src="/brand/jarid-icon-gold.svg" alt="" />
          <span>جاهز تبدأ؟</span>
          <h2>أرسل الشعار أو المرجع.</h2>
          <p>ونحوّل الفكرة إلى مسار تنفيذ واضح.</p>
          <WhatsAppLink className="button button-gold button-large">
            تواصل عبر واتساب <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
