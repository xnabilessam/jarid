import type { AnchorHTMLAttributes, ReactNode } from "react";

export const WHATSAPP_URL = "http://wa.me/966506861016";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function WhatsAppLink({
  children,
  className,
  ...props
}: WhatsAppLinkProps) {
  return (
    <a
      href={WHATSAPP_URL}
      className={className}
      target="_blank"
      rel="noreferrer"
      {...props}
      aria-label="تواصل معنا"
    >
      <svg
        className="whatsapp-icon"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.44 0 .06 5.38.06 11.99c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.96 11.96 0 0 0 5.83 1.49h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.25-6.21-3.51-8.39Zm-8.48 18.36h-.01a9.93 9.93 0 0 1-5.06-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.94 9.94 0 0 1-1.52-5.27c0-5.5 4.48-9.98 9.98-9.98 2.67 0 5.17 1.04 7.06 2.92a9.91 9.91 0 0 1 2.92 7.06c0 5.5-4.48 9.98-9.98 9.98Zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.05 1.02-1.05 2.49 1.08 2.89 1.22 3.09c.15.2 2.11 3.23 5.1 4.53.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      {children}
    </a>
  );
}
