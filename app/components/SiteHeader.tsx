import Link from "next/link";
import { WhatsAppLink } from "./WhatsAppLink";

const navItems = [
  ["الرئيسية", "/"],
  ["عن جريد", "/#about"],
  ["الخدمات", "/#solutions"],
  ["أعمالنا", "/#work"],
  ["رحلة العمل", "/#process"],
  ["الأسئلة الشائعة", "/#faq"],
];

export function SiteHeader() {
  return (
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
        تواصل معنا
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
            تواصل معنا
          </WhatsAppLink>
        </div>
      </details>
    </header>
  );
}
