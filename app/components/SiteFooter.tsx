import Link from "next/link";
import { WhatsAppLink } from "./WhatsAppLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="جريد - الرئيسية">
            <img src="/brand/jarid-secondary-beige.svg" alt="جريد" />
          </Link>
          <p>قوالب سيليكون سعودية، مصممة لهوية علامتك.</p>
        </div>
        <div className="footer-links">
          <div>
            <h2>روابط سريعة</h2>
            <Link href="/">الرئيسية</Link>
            <Link href="/#solutions">الخدمات</Link>
            <Link href="/#work">أعمالنا</Link>
            <Link href="/#faq">الأسئلة الشائعة</Link>
          </div>
          <div>
            <h2>تواصل معنا</h2>
            <a href="tel:+966506861016" dir="ltr">050 686 1016</a>
            <a href="mailto:Info@jarid.sa">Info@jarid.sa</a>
            <span>الرياض، المملكة العربية السعودية</span>
          </div>
        </div>
        <WhatsAppLink className="footer-contact">
          <strong>تواصل معنا</strong>
        </WhatsAppLink>
      </div>
      <div className="footer-bottom">
        <span>© 2026 جريد. جميع الحقوق محفوظة.</span>
        <div>
          <Link href="/privacy">سياسة الخصوصية</Link>
          <Link href="/terms">شروط الاستخدام</Link>
        </div>
      </div>
    </footer>
  );
}
