import Link from "next/link";
import { WhatsAppLink } from "./WhatsAppLink";

const navItems = [
  ["الرئيسية", "/"],
  ["الخدمات", "/services"],
  ["أعمالنا", "/#work"],
  ["رحلة العمل", "/#process"],
  ["الأسئلة الشائعة", "/#faq"],
];

export function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span>نصمم وننفذ قوالب سيليكون مخصصة للأعمال في جميع أنحاء المملكة</span>
        <a href="tel:+966506861016" dir="ltr">+966 50 686 1016</a>
      </div>
      <header className="site-header">
        <Link className="brand-logo" href="/" aria-label="جريد - الرئيسية">
          <img src="/brand/jarid-secondary-navy.svg" alt="جريد" />
        </Link>

        <nav className="desktop-nav" aria-label="القائمة الرئيسية">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <WhatsAppLink className="button button-navy header-cta">
          ابدأ مشروعك <span aria-hidden="true">↗</span>
        </WhatsAppLink>

        <details className="mobile-menu">
          <summary aria-label="فتح القائمة">
            <span /><span />
          </summary>
          <div className="mobile-panel">
            <nav aria-label="قائمة الجوال">
              {navItems.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </nav>
            <WhatsAppLink className="button button-gold">
              اطلب قالبك <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
        </details>
      </header>
    </>
  );
}
