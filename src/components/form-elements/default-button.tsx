interface DefaultLinkButtonProps {
  href: string;
  label: string;
}

export function DefaultLinkButton({
  href = "#",
  label = "",
}: DefaultLinkButtonProps) {
  return (
    <a
      href={href}
      className="btn font-family-montserrat btn-secondary
           shadow text-uppercase text-primary py-2
           px-4 fw-medium fs-5 text-white"
    >
      {label}
    </a>
  );
}
