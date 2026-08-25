import type { Metadata } from "next";
import { MotionController } from "@/app/components/MotionController";
import { WhatsAppLink } from "@/app/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "جريد | قوالب سيليكون مخصصة للشوكولاتة والتيراميسو",
  description:
    "تصميم وتصنيع قوالب سيليكون مخصصة للعلامات التجارية والمصانع والمتاجر في جميع أنحاء المملكة العربية السعودية.",
};

const products = [
  {
    name: "بخور",
    image: "/images/product-incense.webp",
  },
  {
    name: "دب",
    image: "/images/product-bear.webp",
  },
  {
    name: "دلة",
    image: "/images/product-dallah.webp",
  },
  {
    name: "ثوب",
    image: "/images/product-thobe.webp",
  },
];

const steps = [
  { number: "٠١", title: "الفكرة والرسم المبدئي", visual: "sketch" },
  { number: "٠٢", title: "التصميم ثلاثي الأبعاد", visual: "model" },
  { number: "٠٣", title: "شكل القالب النهائي", visual: "mold" },
  { number: "٠٤", title: "المنتج النهائي", visual: "finished" },
];

const comparisons = [
  {
    feature: "الأمان الصحي",
    jarid: "سلكون مخصص للأغذية بشهادات مخبرية معتمدة وآمنة 100%",
    market: "خامات مجهولة المصدر وغير مسجلة بلا توثيق صحي",
  },
  {
    feature: "الرائحة والطعم",
    jarid: "سلكون آمن لا يترك أي رائحة كيميائية ولا يؤثر على طعم المنتجات",
    market: "روائح بلاستيكية كيميائية مزعجة قد تنتقل للأطعمة أو المنتجات",
  },
  {
    feature: "حد الطلب (المرونة)",
    jarid: "مرونة كاملة: صمّم قالبك الخاص بدءًا من قطعة واحدة (بدون حد أدنى للطلبات)",
    market: "تشترط كميات ضخمة ومكلفة للبدء بالتصنيع",
  },
  {
    feature: "سرعة التنفيذ والمنشأ",
    jarid: "تصميم وتنفيذ سعودي بجودة عالية وبأسرع وقت",
    market: "شحن دولي بطيء ومستهلك للوقت والمال",
  },
  {
    feature: "عدد مرات الاستعمال",
    jarid: "خامة عالية الجودة تُستعمل عدة مرات دون أن تفقد مرونتها أو شكلها",
    market: "عمر افتراضي قصير وتتلف أو تتشقق بعد مرات استخدام معدودة",
  },
  {
    feature: "الدقة والتفاصيل",
    jarid: "تنفيذ دقيق وعالي، يظهر أدق تفاصيل التصميم",
    market: "تفاصيل بصرية ضعيفة أو مشوهة بعد الاستخدام",
  },
  {
    feature: "متانة وحرارة السلكون",
    jarid: "سلكون مرن وقوي يتحمل درجات الحرارة العالية والبرودة",
    market: "سلكون ضعيف يتشقق وسريع التلف مع الحرارة",
  },
  {
    feature: "سهولة الاستخراج",
    jarid: "مرونة ممتازة تسمح بنزع المنتج بسهولة دون أن ينكسر",
    market: "صلابة أو التصاق يؤدي لتلف المنتجات أثناء الفك",
  },
];

const faqs = [
  {
    question: "هل يمكن تنفيذ تصميم بشعار خاص؟",
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
  {
    question: "هل تقدمون عينات قبل اعتماد الطلب؟",
    answer: "نعم، نقدم عينات وكل ما يحتاجه العميل قبل اعتماد الطلب.",
  },
];

export default function Home() {
  return (
    <main className="motion-page" data-motion-root="home">
      <MotionController />
      <section className="hero" aria-labelledby="hero-title" data-motion-section="hero">
        <div className="hero-copy">
          <div className="hero-eyebrow hero-enter hero-enter-1">
            <span className="eyebrow-dot" /> صناعة سعودية
          </div>
          <h1 id="hero-title" className="hero-enter hero-enter-2">
            <span className="hero-title-line hero-title-primary">قوالب إبداعية،</span>
            <span className="hero-title-line">تميّز علامتك التجارية</span>
          </h1>
          <p className="hero-lead hero-enter hero-enter-3">
            مواكبةً لمتطلبات السوق السعودي العالية في قطاع الحلويات: تأتي جَـريـد
            لتلبية هذي المتطلبات بتصاميم أصيلة، وتنفيذ بمقاييس عالمية.
          </p>
          <div className="hero-actions hero-enter hero-enter-4">
            <WhatsAppLink className="button button-gold button-large">
              تواصل معنا
            </WhatsAppLink>
            <a className="quiet-link" href="#solutions">
              استكشف الحلول <span aria-hidden="true">←</span>
            </a>
          </div>
        </div>

        <div className="hero-visual hero-enter hero-enter-image">
          <div className="hero-media-card" data-motion-parallax="soft">
            <div className="hero-photo">
              <picture className="hero-picture">
                <source
                  media="(max-width: 600px)"
                  srcSet="/images/hero-jarid-approved-v5.jpg"
                />
                <img
                  src="/images/hero-jarid-approved-v5.jpg"
                  alt="قالب سيليكون سيان وقطع شوكولاتة تحمل شعار جريد الأصلي"
                  width="1536"
                  height="1024"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" data-motion-section="about">
        <div className="section-kicker reveal" data-motion-reveal="line">عن جريد</div>
        <div className="about-grid">
          <div className="about-copy reveal" data-motion-reveal="copy">
            <h2>
              التصميم <span className="about-emphasis">المتقن</span> جزء من تجربة المنتج
            </h2>
            <p>
              نطوّر <strong className="about-emphasis">قوالب سيليكون مخصصة</strong>
              {" "}للشوكولاتة والتيراميسو، تجمع بين
              {" "}<strong className="about-emphasis">الدقة</strong> و
              <strong className="about-emphasis">الجودة</strong> من الفكرة حتى التسليم.
            </p>
            <div className="about-points">
              <div><strong>هوية</strong><span>شعار ونقش وتفاصيل خاصة</span></div>
              <div><strong>مرونة</strong><span>مقاس ولون وصلادة حسب المشروع</span></div>
              <div><strong>قرب</strong><span>تصنيع محلي وتواصل مباشر</span></div>
            </div>
          </div>
          <div className="about-image reveal" data-motion-reveal="media" data-motion-parallax="soft">
            <img
              src="/images/craft-jarid.webp"
              alt="صب الشوكولاتة بعناية داخل تصميم سيليكون مخصص"
              width="1000"
              height="1250"
              loading="lazy"
            />
            <div className="image-note">دقة تُرى في كل قطعة</div>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions" data-motion-section="solutions">
        <div className="section-heading reveal" data-motion-reveal="heading">
          <div>
            <span className="section-kicker">حلول جريد</span>
            <h2>خدمات قطاع الحلويات</h2>
          </div>
        </div>

        <div className="solutions-grid" data-motion-group="solutions">
          <article className="solution-card solution-card-wide reveal" data-motion-item data-motion-reveal="card">
            <div className="solution-visual chocolate-collage" aria-hidden="true" data-motion-parallax="soft">
              <img src="/images/solution-bear-studio-v3.jpg" alt="" />
              <img src="/images/solution-incense-studio-v3.jpg" alt="" />
              <img src="/images/solution-dallah-studio-v3.jpg" alt="" />
            </div>
            <div className="solution-copy">
              <span>للضيافة والهدايا</span>
              <h3>قوالب الشوكولاتة</h3>
              <p>للمواسم والمناسبات الخاصة، بمقاسات وتفاصيل مخصصة.</p>
              <WhatsAppLink className="card-cta">
                تواصل معنا
              </WhatsAppLink>
            </div>
          </article>

          <article className="solution-card reveal" data-motion-item data-motion-reveal="card">
            <div className="solution-photo">
              <img
                src="/images/solution-tiramisu-najdi-v4.jpg"
                alt="تيراميسو بتصميم نجدي هندسي مخصص"
                width="1536"
                height="1024"
                loading="lazy"
              />
            </div>
            <div className="solution-copy">
              <span>لتقديم راقٍ</span>
              <h3>قوالب التيراميسو</h3>
              <p>بساطة وإبداع في التقديم.</p>
              <WhatsAppLink className="card-cta">تواصل معنا</WhatsAppLink>
            </div>
          </article>

          <article className="solution-card solution-card-navy reveal" data-motion-item data-motion-reveal="card">
            <div className="brand-service-mark" aria-hidden="true">
              <img src="/brand/jarid-icon-gold.svg" alt="" />
            </div>
            <div className="solution-copy">
              <span>للعلامات التجارية</span>
              <h3>تصميم خاص لبراندك</h3>
              <WhatsAppLink className="card-cta card-cta-light">
                تواصل معنا
              </WhatsAppLink>
            </div>
          </article>
        </div>
      </section>

      <section className="section process-section" id="process" data-motion-section="process">
        <div className="process-shell reveal" data-motion-reveal="shell">
          <div className="process-heading">
            <div>
              <span className="section-kicker section-kicker-light">رحلة المنتج</span>
              <h2>من الفكرة إلى النتيجة النهائية</h2>
            </div>
          </div>
          <div className="journey-grid" data-motion-group="process">
            {steps.map((step) => (
              <article className="journey-card" key={step.number} data-motion-item data-motion-reveal="card">
                <div className={`journey-visual journey-${step.visual}`} aria-hidden="true">
                  {step.visual === "sketch" && (
                    <img src="/brand/jarid-icon-navy.svg" alt="" />
                  )}
                  {step.visual === "model" && (
                    <>
                      <img
                        className="model-icon model-icon-back"
                        src="/brand/jarid-icon-gold.svg"
                        alt=""
                      />
                      <img
                        className="model-icon model-icon-middle"
                        src="/brand/jarid-icon-gold.svg"
                        alt=""
                      />
                      <img
                        className="model-icon model-icon-front"
                        src="/brand/jarid-icon-gold.svg"
                        alt=""
                      />
                    </>
                  )}
                  {step.visual === "mold" && (
                    <div className="mold-icons">
                      {[1, 2, 3, 4, 5, 6].map((cavity) => (
                        <img
                          key={cavity}
                          src="/brand/jarid-icon-navy.svg"
                          alt=""
                        />
                      ))}
                    </div>
                  )}
                  {step.visual === "finished" && (
                    <img
                      src="/images/service-chocolate-plate-v2.png"
                      alt=""
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="journey-copy">
                  <span className="journey-index">{step.number}</span>
                  <h3>{step.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <WhatsAppLink className="button button-gold process-cta">
            تواصل معنا
          </WhatsAppLink>
        </div>
      </section>

      <section className="section products-section" id="work" data-motion-section="products">
        <div className="section-heading reveal" data-motion-reveal="heading">
          <div>
            <span className="section-kicker">من الكتالوج</span>
            <h2>تفاصيل محلية، بصياغة معاصرة</h2>
          </div>
        </div>
        <div className="product-track reveal" data-motion-group="products">
          {products.map((product) => (
            <article className="product-card" key={product.name} data-motion-item data-motion-reveal="card">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={`قطعة شوكولاتة بتصميم ${product.name}`}
                  loading="lazy"
                />
              </div>
              <div className="product-meta">
                <h3>{product.name}</h3>
                <WhatsAppLink className="product-action" aria-label="تواصل معنا">
                  تواصل معنا
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section comparison-section" id="comparison" data-motion-section="comparison">
        <div className="section-heading comparison-heading reveal" data-motion-reveal="heading">
          <div>
            <span className="section-kicker">الفرق واضح</span>
            <h2>اختيار يصنع الفرق لمنتجك</h2>
          </div>
        </div>
        <div className="comparison-shell reveal" data-motion-reveal="shell">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">الميزة</th>
                <th scope="col">قوالب جَريـد ✨</th>
                <th scope="col">القوالب التجارية ❌</th>
              </tr>
            </thead>
            <tbody data-motion-group="comparison">
              {comparisons.map((comparison) => (
                <tr key={comparison.feature} data-motion-item data-motion-reveal="row">
                  <th scope="row" className="comparison-feature">
                    {comparison.feature}
                  </th>
                  <td className="comparison-jarid">{comparison.jarid}</td>
                  <td className="comparison-market">{comparison.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section faq-section" id="faq" data-motion-section="faq">
        <div className="faq-heading reveal" data-motion-reveal="heading">
          <span className="section-kicker">الأسئلة الشائعة</span>
          <h2>قبل أن تبدأ</h2>
        </div>
        <div className="faq-list reveal" data-motion-group="faq">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} data-motion-item data-motion-reveal="row">
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <i className="faq-indicator" aria-hidden="true">
                  <img src="/brand/jarid-icon-gold.svg" alt="" />
                </i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section final-cta-section" data-motion-section="final-cta">
        <div className="final-cta reveal" data-motion-reveal="shell">
          <img className="final-cta-icon" src="/brand/jarid-icon-gold.svg" alt="" data-motion-parallax="soft" />
          <h2>جاهز تبدأ؟</h2>
          <p>أرسل متطلباتك وبنحولها إلى منتج يناسبك</p>
          <WhatsAppLink className="button button-gold button-large">
            تواصل معنا
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
