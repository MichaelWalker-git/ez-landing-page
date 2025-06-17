interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
}

export default function NavItem({ href, text, onClick }: NavItemProps) {
  return (
    <a href={href} onClick={onClick}>
      <p className="font-semibold">{text}</p>
    </a>
  );
}
