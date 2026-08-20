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
    >
      {children}
    </a>
  );
}
