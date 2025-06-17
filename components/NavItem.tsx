interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <a href={href}>
      <p className="font-semibold">{text}</p>
    </a>
  );
}
